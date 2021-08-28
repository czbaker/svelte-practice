import { writable } from 'svelte/store';
import axios from 'axios';

import gherror from './gherror';
import type { GHState, GHRepo } from '$lib/interfaces';
import { current_component } from 'svelte/internal';

// Initial State
const initState: GHState = {
    repos: [],
    selectedIndex: -1
};

// Create store
const { subscribe, set, update } = writable(initState);

// Fetch repositories by username
const fetchRepos = async (username: string) => {

    // No username provided
    if (!username) {
        return gherror.setError({
            name: 'No username!',
            desc: `Please provide a username to search!  None was given, try again!`
        })
    }

    // Otherwise...
    try {
        let repos: GHRepo[] = [];
        const uri = `https://api.github.com/users/${username}/repos`;
        const { data } = await axios.get(uri);
        data.forEach(current => {
            const newRepo: GHRepo = {
                name: current.name,
                desc: current.description,
                language: current.language || 'N/A',
                license: current.license ? current.license.name : 'N/A',
                url: current.html_url
            }
            repos.push(newRepo);
        })
        gherror.reset();
        return update(current => {
            return {...current, repos}
        });
    } catch (err) {
        const status = err.response.status;
        if (status === 404) {
            return gherror.setError({
                name: 'Not Found!',
                desc: `Username '${username}' not found on GitHub, please try again!`
            })
        }
    }
    
}

const setIndex = (index: number) => update(current => {
    return {...current, selectedIndex: index}
})

// Exports
export default {
    fetchRepos,
    setIndex,
    subscribe
}