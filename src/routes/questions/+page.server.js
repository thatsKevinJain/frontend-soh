// @ts-nocheck
// import { game } from '../../lib/game.js'
import { getResponse } from '../../utils/getResponse.js'
import { redirect } from '@sveltejs/kit';
import { BACKEND_URL } from '$env/static/private';

function onlyUnique(value, index, array) {
	return array.indexOf(value) === index;
}

function getNElement(value, index, array) {
	return value[0];
}

export async function load({ url }){

	// INIT //
	const index = url.searchParams.get('i');

	/* 
		Load game questions on every page load
	*/
	// if(game && Object.keys(game).length === 0){
	let game = await getResponse(BACKEND_URL + '/app/getGame?i=' + (index-1));
	game = JSON.parse(game);
	// }

    return {
    	game,
    	index
    }
};

export const actions = {

	default: async ({ request, cookies, url }) => {

		let length = 14;

		// Get the form data //
		const data = await request.formData();
		const unwind = [...data];

		// Get the index //
		const index = url.searchParams.get("i");

		// Variable to store the answer for this question //
		let ans = {}

		/* 
			Different questions here will have a different way of storing the answer --
			format "TEXT":
				-- SINGLE   -- { "question": answer }
						    -- { "1": 4 }
				-- MULTIPLE -- { "question-subQuestion": answer }
						    -- { "5-1": 3 }

			format "IMAGE": -- { "question": "ans1,ans2,ans3" }
							-- { "3": "2,4,6,8" }

			We will smartly break the "unwind" variable and form the "ans" object in the above format
		*/
		if(unwind && unwind.length == 1){
			ans[unwind[0][0]] = parseInt(unwind[0][1]);
		}

		if(unwind && unwind.length > 1){

			// If the question number is same, append the values //
			if(((unwind.map(getNElement)).filter(onlyUnique)).length === 1){

				ans[unwind[0][0]] = null
				for(let u of unwind){
					ans[u[0]] = ans[u[0]] ? ans[u[0]]+","+parseInt(u[1]) : parseInt(u[1])
				}

			}

			// Else, simply store them separately //
			else{
				for(let u of unwind){
					ans[u[0]] = parseInt(u[1])
				}
			}
		}

		// Update the submission with the new answer //
		let sub = await getResponse(BACKEND_URL + '/submission/update', 'POST', { answers: ans, user: cookies.get('_id'), _id: cookies.get('submissionId') });
		sub = JSON.parse(sub);
		if(sub.message){
			throw redirect(303, "/results");
		}

		/* 
			If all the questions are answered, store the "ans" variable via our API and redirect to "results" page,
			else go to the NEXT question.
		*/
		if(index > length){
			const response = await getResponse(BACKEND_URL + '/submission/finish', 'POST', { user: cookies.get('_id'), _id: cookies.get('submissionId') });

			throw redirect(303, "/results");
		}
		return { success: true };
	}
};