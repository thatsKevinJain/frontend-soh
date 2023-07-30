// @ts-nocheck
import { game } from '../../lib/game.js'
import { getResponse } from '../../utils/getResponse.js'
import { redirect } from '@sveltejs/kit';

let ans = {};
// let game;

export async function load({url, cookies}){
	
	// INIT //
	const index = url.searchParams.get('i');
	if(index == 1){
		ans = {}
	}

	/* 
		Load game questions on every page load
		This is a redundant API call (a bad practice when building apps of scale)
		But works for now!
	*/
	// game = await getResponse('http://localhost:3000/app/getGame');
	// game = JSON.parse(game);

    return {
    	game,
    	index
    }
};

export const actions = {
	default: async ({ request, url, cookies }) => {

		// Get the form data //
		const data = await request.formData();
		const unwind = [...data];
		console.log(unwind);

		// Get the index //
		const index = url.searchParams.get("i");

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
			ans[unwind[0][0]] = null
			for(let u of unwind){
				ans[u[0]] = ans[u[0]] ? ans[u[0]]+","+parseInt(u[1]) : parseInt(u[1])
			}
		}
		
		/* 
			If all the questions are answered, store the "ans" variable via our API and redirect to "results" page,
			else go to the NEXT question.
		*/
		if(unwind && index > game.questions.length){
			const response = await getResponse('http://localhost:3000/submission/create', 'POST', { answers: ans, user: cookies.get('_id') });

			throw redirect(303, "/results");
		}
		return { success: true };
	}
};