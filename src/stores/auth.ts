// import { writable } from 'svelte/store';

// export const isAuthenticated = writable(false);

import storage from '../lib/store';

export interface User {
    username: string;
    password: string;
}

interface Auth {
    user: User | null;
}

export default storage<Auth>("auth", { user: null })