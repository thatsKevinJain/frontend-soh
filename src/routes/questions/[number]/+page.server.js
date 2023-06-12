import { error } from '@sveltejs/kit';
import { game } from '../../../lib/game.js'

export async function load({ params }) {
    if (params.number-1 < game.questions.length) {
        return {
            data: game.questions[params.number-1],
            index: params.number
        }
    }

    throw error(404, 'Not found');
}

export const actions = {
    // This function will store the value of this question and move to the next one //
    next: async ({ cookies, request }) => {
        const data = await request.formData();

        const question = [...data][0]
        console.log(question);
    }
};