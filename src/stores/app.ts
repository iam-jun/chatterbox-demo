// import { writable } from 'svelte/store';

// export const matrixSessionId = writable(null);


import storage from '../lib/store'

interface App {
    isChatterboxLoaded: boolean;
}

export default storage<App>("app", { isChatterboxLoaded: false })