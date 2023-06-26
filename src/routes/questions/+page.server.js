// @ts-nocheck
import { game } from '../../lib/game.js'
import { redirect } from '@sveltejs/kit';
let index = 1;
let ans = {};

export function load({cookies, url}){
	
	// INIT //
	index = url.searchParams.get('i');
	if(index == 1){
		ans = {}
	}

    return {
    	game,
    	email: cookies.get('email'),
    	index
    }
};

export const actions = {
	default: async ({ request, url, cookies }) => {
		// Get the form data //
		const data = await request.formData();

		// TODO: Store this data in a JSON variable //
		const unwind = [...data];

		for(let u of unwind){
			ans[u[0]] = parseInt(u[1]);
		}

		console.log(ans);
		
		if(index >= game.questions.length){
			// TODO: goto to next page, save all data via API //
			// TODO: store the "version" in each user for less future headache //
			const response = await fetch('https://64873998beba629727904492.mockapi.io/answers', {
				method: 'POST',
				body: JSON.stringify({ answers: ans, email: cookies.get('email') }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			throw redirect(303, "/");
		}
		return { success: true };
	}
};