// @ts-nocheck
import { getResponse } from '../../utils/getResponse.js'
import { BACKEND_URL } from '$env/static/private';
import { results } from '../../lib/results.js'
let score = {};

export async function load({cookies}){

	score = await getResponse(`${BACKEND_URL}/submission/find?_id=${cookies.get('submissionId')}`);
	score = JSON.parse(score);

    return {
    	results,
    	score,
    	name: cookies.get('name')
    }
};