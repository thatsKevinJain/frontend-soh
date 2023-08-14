// @ts-nocheck
import { getResponse } from '../../utils/getResponse.js'
import { BACKEND_URL } from '$env/static/private';
let results;

export async function load({cookies}){

	results = await getResponse(`${BACKEND_URL}/submission/find?_id=${cookies.get('_id')}`);
	results = JSON.parse(results);
	console.log(results)

    return results
};