// @ts-nocheck
import { getResponse } from '../../utils/getResponse.js'
import { BACKEND_URL } from '$env/static/private';
import { results } from '../../lib/results.js'
let score = {};

export async function load({cookies}){

	score = await getResponse(`${BACKEND_URL}/submission/find?_id=${cookies.get('_id')}`);
	score = JSON.parse(score);
	console.log(score)

    return {
    	results,
    	score
    }
};