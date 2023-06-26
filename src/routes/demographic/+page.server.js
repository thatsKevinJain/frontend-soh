// @ts-nocheck
import { demographic } from '../../lib/demographic.js'
import { redirect } from '@sveltejs/kit';

export function load({cookies}){
    return { 
    	demographic, 
    	email: cookies.get('email') };
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
        cookies.set('email', data.get('email'));
	},
	submit: async ({ cookies, request }) => {
		const data = await request.formData();

		const demo = [...data].map((d) => {
			return [d[0], parseInt(d[1])];
		}).reduce((a, d) => {
			a[d[0]] = d[1];
			return a;
		}, {});

		const email = cookies.get('email');
		
		const response = await fetch('https://64873998beba629727904492.mockapi.io/demographic', {
			method: 'POST',
			body: JSON.stringify({ demographic: demo, email }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		throw redirect(303, "/questions?i=1");
	}
};