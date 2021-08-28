import { writable } from 'svelte/store';
import type { GHError } from '$lib/interfaces';

// Init state = null (no error)
const initState = null;

// Create Store
const { subscribe, update, set } = writable(initState);

const setError = (error: GHError) => {
    console.log(error);
    return update(current => current = error);
}

const reset = () => {
    set(initState);
}

export default {
    setError,
    reset,
    subscribe
}