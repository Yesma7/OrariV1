const Login = () => import('./components/orari/Login.vue');
const Register = () => import('./components/orari/Register.vue');
const Home = () => import('./components/Home.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
]