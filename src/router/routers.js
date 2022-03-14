import DemoIndex from "../views/demo/DemoIndex";
import Login from "../views/login/Login";
import TopLayout from "../views/layout/topMenuLayout/TopLayout";
import TopDarkLayout from "../views/layout/topDarkLayout/TopDarkLayout";
import SideDarkLayout from "../views/layout/sideDarkLayout/SideDarkLayout";
import SideLayout from "../views/layout/sideMenuLayout/SideLayout";

export const routes=[
    {
        path: '/',
        redirect: '/layout',
        component: TopLayout,
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
    },
    {
        path: '/layout',
        name:'layout',
        redirect: '/layout/demo',
        component: TopLayout,
        children: [
            {
                path: 'demo',
                component: DemoIndex,
            },
        ]

    },
    {
        path: '/top/dark/layout',
        name:'layout',
        redirect: '/top/dark/layout/demo',
        component: TopDarkLayout,
        children: [
            {
                path: 'demo',
                component: DemoIndex,
            },
        ]

    },
    {
        path: '/side/dark/layout',
        name:'layout',
        redirect: '/side/dark/layout/demo',
        component: SideDarkLayout,
        children: [
            {
                path: 'demo',
                component: DemoIndex,
            },
        ]

    },
    {
        path: '/side/layout',
        name:'layout',
        redirect: '/side/layout/demo',
        component: SideLayout,
        children: [
            {
                path: 'demo',
                component: DemoIndex,
            },
        ]

    }

]
