import { writable } from "svelte/store";

// Default value;
const initState: number = 0;

// Create writable store w/ default value!
const { subscribe, set, update } = writable(initState);

// Increase by an amount
const increase = (amount: number) => {
    return update(current => current + amount);
}

// Decrease by an amount
const decrease = (amount: number) => {
    return update(current => current - amount);
}

// Reset to default!
const reset = () => {
    set(initState);
}

// Export all functions
export default {
    increase,
    decrease,
    reset,
    subscribe
}