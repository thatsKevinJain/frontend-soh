// @ts-nocheck
// import { demographic } from '../../lib/demographic.js'
import { getResponse } from '../../utils/getResponse.js'
import { redirect } from '@sveltejs/kit';
import { BACKEND_URL } from '$env/static/private';
let demographic;

export async function load({cookies}){

	// Load questions on every page load //
	demographic = await getResponse(BACKEND_URL + '/app/getDemographic');
	demographic = JSON.parse(demographic);

	return { 
		demographic,
		name: cookies.get('name')
	}
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		
		// Redirect the user straight to questions if demographic data already exists //
		let result = await getResponse(BACKEND_URL + '/user/create', 'POST', { email: data.get('email'), name: data.get('name') });
		result = JSON.parse(result);
		
		if(result){
			cookies.set('email', data.get('email'));
			cookies.set('name', data.get('name'));
			cookies.set('_id', result._id);

			if(result.demographic){

				// Create a submission object, store it's id in cookies and start the questions page //
				let submission = await getResponse(BACKEND_URL + '/submission/create', 'POST', { user: result._id });
				submission = JSON.parse(submission);
				cookies.set('submissionId', submission._id)

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
		
		const response = await getResponse(BACKEND_URL + '/user/update', 'POST', { demographic: demo, _id });

		// Create a submission object, store it's id in cookies and start the questions page //
		let submission = await getResponse(BACKEND_URL + '/submission/create', 'POST', { user: _id });
		submission = JSON.parse(submission);
		cookies.set('submissionId', submission._id)

		throw redirect(303, "/questions?i=1");
	}
};