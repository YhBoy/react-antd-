// 路由分为 两类 
//  一类是 后台登录页
//  一类是 后台页面  

import Login from '../pages/Login'
import Index from '../pages/admin/dashboard'
import List from '../pages/admin/product/List'
import Edit from '../pages/admin/product/Edit'
import PageNotFound from '../pages/PageNotFound'

export const mainRoutes = [
    {
        path:'/login',
        component : Login
    },
    {
        path:'/404',
        component : PageNotFound
    },
]

export const adminRoutes = [
    {
        path:'/admin/dashborad',
        component : Index,
        title:'看板',
        isShow:true,
        icon:'area-chart'
    },
    {
        path:'/admin/product/list',
        component : List,
        title:'商品列表',
        isShow:true,
        icon:'shop'
    },
    {
        path:'/admin/product/:id?',
        component : Edit
    }
]


