import Home from './Home.svelte';
import Login from './Login.svelte';
import auth from './stores/auth';

const protectedRoutes = () => {
    return new Promise((resolve) => {
        auth.subscribe(({ user }) => {
            if (user) {
                resolve(Home);
            } else {
                resolve(Login);
            }
        });
    });
};

const routes = {
    '/login': protectedRoutes,
    '/': protectedRoutes,
};

export default routes;