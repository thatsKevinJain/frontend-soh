// @ts-nocheck

export async function load({cookies}){

	let name = cookies.get('name')
	let email = cookies.get('email')

    return {
    	name,
    	email
    }
};