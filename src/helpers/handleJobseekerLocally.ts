/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { JobSeeker } from "@prisma/client";

export const key = 'currentSeeker';

export function saveJobSeeker(jobSeeker: JobSeeker){
    // if(check({id: jobSeeker.id}))return;
    localStorage.setItem(key, JSON.stringify(jobSeeker));
}

export function getJobSeeker(){
    const localSeeker = localStorage.getItem(key);
    if(!localSeeker) return undefined;
    try {
        const ls = JSON.parse(localSeeker) as JobSeeker;
        return ls;
    } catch (error) {
        return undefined;
    }
}

export function check({id, email}: {id?: string, email?: string}){
    const js = getJobSeeker();
    if(!js) return false;
    if(id) return js.id === id;
    if(email) return js.email === email;
    return true;
}

