// @ts-nocheck
// import { game } from '../../lib/game.js'
import { getResponse } from '../../utils/getResponse.js'
import { redirect } from '@sveltejs/kit';
let index = 1;
let ans = {};
let game;

export async function load({url}){
	
	// INIT //
	index = url.searchParams.get('i');
	if(index == 1){
		ans = {}
	}

	// Load questions on every page load //
	// This is redundant API calling but works for now //
	// TODO: store these questions in a svelte-store to avoid overloading APIs //
	game = await getResponse('http://localhost:3000/app/getGame');
	game = JSON.parse(game);

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

		for(let u of unwind){
			ans[u[0]] = parseInt(u[1]);
		}
		
		if(index >= game.questions.length){
			// TODO: goto to next page, save all data via API //
			// TODO: store the "version" in each user for less future headache //
			const response = await getResponse('http://localhost:3000/submission/create', 'POST', { answers: ans, user: cookies.get('_id') });

			throw redirect(303, "/");
		}
		return { success: true };
	}
};