// @ts-nocheck
import { game } from '../../lib/game.js'
import { getResponse } from '../../utils/getResponse.js'

// INIT //
let ans = {};
// let game = {};

function onlyUnique(value, index, array) {
	return array.indexOf(value) === index;
}

function getNElement(value, index, array) {
	return value[0];
}

export async function load(){
	/* 
		Load game questions on every page load
		This is a redundant API call (a bad practice when building apps of scale)
		But works for now!
	*/
	// if(Object.keys(game).length === 0){
	// 	game = await getResponse('http://localhost:3000/app/getGame');
	// 	game = JSON.parse(game);
	// }

    return {
    	game
    }
};

export const actions = {

	prev: async ({ request }) => {
		// Get the form data //
		const formData = await request.formData();
		const unwind = [...formData].slice(1);
		console.log("PREV", unwind);

		// Get the index //
		let index = parseInt(formData.get('index'))

		if(index == 1){
			ans = {}
		}
		else{
			Object.keys(ans).forEach((key) => {
				let question = parseInt(key.split("-"))
				if(question === index || question === (index - 1)){
					ans[key] = 0
				}
			})
		}
		return { prev: true };
	}, 

	next: async ({ request, cookies }) => {

		// Get the form data //
		const formData = await request.formData();
		const unwind = [...formData].slice(1);
		console.log("NEXT", unwind);

		// Get the index //
		let index = parseInt(formData.get('index')) + 1

		if(index == 1){
			ans = {}
		}

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
		
		/* 
			If all the questions are answered, store the "ans" variable via our API and redirect to "results" page,
			else go to the NEXT question.
		*/
		if(index > game.questions.length){
			const response = await getResponse('http://localhost:3000/submission/create', 'POST', { answers: ans, user: cookies.get('_id') });

			return { location: "/results" };
		}
		return { success: true };
	}
};