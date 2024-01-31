// @ts-nocheck
import { getResponse, getStreamResponse } from '../../utils/getResponse.js'
import { BACKEND_URL, CF_MODEL, CF_API_KEY, CF_ACCOUNT_ID, BASE_PROMPT } from '$env/static/private';
import { results } from '../../lib/results.js'
let submission = {};

export async function load({cookies, fetch}){

	submission = await getResponse(`${BACKEND_URL}/submission/find?_id=${cookies.get('submissionId')}`);
	submission = JSON.parse(submission);

    return {
    	results,
    	score: submission,
    	name: cookies.get('name'),
    	streamed: {
    		llm: getStreamResponse(
    			`https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/ai/run/${CF_MODEL}`,
				"POST",
				{
					"stream": true,
					"messages": [
						{"role":"system","content": BASE_PROMPT},
						{"role":"user","content": submission.prompt}
					]
				},
				{
					'Authorization': `Bearer ${CF_API_KEY}`
				})
    	}
    }
};