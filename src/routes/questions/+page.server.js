// @ts-nocheck
import { game } from '../../lib/game.js'
import { redirect } from '@sveltejs/kit';
let index = 1;

export function load({cookies, url}){
    return {
    	game,
    	email: cookies.get('email'),
    	index
    }
};

export const actions = {
	default: async ({ request, url }) => {
		// Get the form data //
		const data = await request.formData();

		// TODO: Store this data in a JSON variable //
		console.log([...data][0]);
		
		if(index >= game.questions.length){
			// TODO: goto to next page, save all data via API //
			throw redirect(303, "/");
		}
		index = index+1;
		return { success: true };
	}
};