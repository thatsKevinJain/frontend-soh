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

	// Load questions on every page load //
	// This is redundant API calling but works for now //
	// TODO: store these questions in a svelte-store to avoid overloading APIs //
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

		// TODO: Store this data in a JSON variable //
		const unwind = [...data];

		// Get the index //
		const index = url.searchParams.get("i");

		if(unwind && unwind.length == 1){
			ans[unwind[0][0]] = parseInt(unwind[0][1]);
		}

		if(unwind && unwind.length > 1){
			ans[unwind[0][0]] = null
			for(let u of unwind){
				ans[u[0]] = ans[u[0]] ? ans[u[0]]+","+parseInt(u[1]) : parseInt(u[1])
			}
		}
		
		if(unwind && index > game.questions.length){
			// TODO: goto to next page, save all data via API //
			// TODO: store the "version" in each user for less future headache //
			const response = await getResponse('http://localhost:3000/submission/create', 'POST', { answers: ans, user: cookies.get('_id') });

			throw redirect(303, "/results");
		}
		return { success: true };
	}
};