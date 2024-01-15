import Home from './Home.svelte';
import Login from './Login.svelte';
import { isAuthenticated } from '../stores/auth';

const routes = {
    '/login': Login,
    '/': Home,
    // '/': {
    //     // This is a protected route
    //     asyncComponent: () => {
    //         return new Promise((resolve) => {
    //             isAuthenticated.subscribe((value) => {
    //                 if (value) {
    //                     resolve(Home);
    //                 } else {
    //                     resolve(Login);
    //                 }
    //             });
    //         });
    //     },
    // },
};

export default routes;