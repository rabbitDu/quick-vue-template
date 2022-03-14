import DemoIndex from "../views/demo/DemoIndex";
import Login from "../views/login/Login";

export const routes=[
    {
        path: '/',
        redirect: '/demo',
        component: DemoIndex,
    },
    {
        path: '/login',
        name:'login',
        component: Login,
    },
    {
        path: '/demo',
        name:'demoIndex',
        component: DemoIndex,
    }

]
