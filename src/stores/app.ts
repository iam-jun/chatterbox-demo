// import { writable } from 'svelte/store';

// export const matrixSessionId = writable(null);


import storage from '../lib/store'

interface App {
    matrixSessionId: string | null
}

export const app = storage<App>("app", { matrixSessionId: null })