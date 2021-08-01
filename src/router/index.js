import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Login from '../views/login'

import UserList from '../views/user/list'
import UserProfile from '../views/user/Profile'
import NotFound from '../views/NotFound'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/main',
      component: Main,
      props:true,
      children: [
        {path: '/user/profile',component: UserProfile},
        // {path: '/user/profile:id', name:'UserProfile', component:UserProfile,props:true},
        {path: '/user/list',component:UserList},
      ]
    },{
    path: '/',
      component: Login
    },{
    path:'/goHome',
      redirect:'/main'}
    // },{
    // path:'*',
    //   component:NotFound
    // }
  ]
});
