import slug from 'slug';
import { url } from './config';
import base64 from 'base-64';

// setting User as the export default 

export default function User(name, email, website) {
    return { name, email, website}
}

// using slug library to create a URL 
export function createURL(name){
    return `${url}/users/${slug(name)}`;
}

export function gravatar (email) {
    const hash = base64.encode(email)
    const photoUrl = `https://www.gravatar.com/avatar/${hash}`;
    return photoUrl
}