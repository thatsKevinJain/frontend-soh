// @ts-nocheck
import { getResponse } from '../../utils/getResponse.js'
import { redirect } from '@sveltejs/kit';
let results;

export async function load({cookies}){

	results = await getResponse(`http://localhost:3000/submission/find?_id=${cookies.get('_id')}`);
	results = JSON.parse(results);
	console.log(results)

    return results
};