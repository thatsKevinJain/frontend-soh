import { demographic } from '../../lib/demographic.js'

export function load({cookies}){
    return { 
    	demographic, 
    	email: cookies.get('email') };
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
        cookies.set('email', data.get('email'));
	}
};