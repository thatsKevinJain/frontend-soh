// @ts-nocheck
import { demographic } from '../../lib/demographic.js'
import { getResponse } from '../../utils/getResponse.js'
import { redirect } from '@sveltejs/kit';

export function load({cookies}){
	return { 
		demographic, 
		email: cookies.get('email') };
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		
		// TODO: Redirect the user straight to questions if demographic data already exists //
		let result = await getResponse('http://localhost:3000/user/create', 'POST', { email: data.get('email') });
		result = JSON.parse(result);
		
		if(result){
			cookies.set('email', data.get('email'));
			cookies.set('_id', result._id);

			if(result.demographic){
				throw redirect(303, "/questions?i=1");
			}
		}
		else{
			throw redirect(303, "/");
		}
	},
	submit: async ({ cookies, request }) => {
		const data = await request.formData();

		const demo = [...data].map((d) => {
			return [d[0], parseInt(d[1])];
		}).reduce((a, d) => {
			a[d[0]] = d[1];
			return a;
		}, {});

		const _id = cookies.get('_id');
		
		const response = await getResponse('http://localhost:3000/user/update', 'POST', { demographic: demo, _id });

		throw redirect(303, "/questions?i=1");
	}
};