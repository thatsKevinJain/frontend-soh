
import { game } from '../../lib/game.js'

export function load({cookies}){
    return { 
    	game,
    	email: cookies.get('email') };
}

export const actions = {
	submit: async ({ cookies, request }) => {
		const data = await request.formData();

		const demographic = [...data].map((d) => {
			return { question: d[0], answer: d[1] };
		});

		const email = cookies.get('email');
		
		const response = await fetch('https://64873998beba629727904492.mockapi.io/demographic', {
			method: 'POST',
			body: JSON.stringify({ demographic, email }),
			headers: {
				'Content-Type': 'application/json'
			}
		});	
	}
};