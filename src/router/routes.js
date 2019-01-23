
import HelloWorld from '../components/HelloWorld.vue'
import User from '../components/User.vue'
import UserAdd from '../components/UserAdd.vue'
import Login from '../components/Login.vue'
import Index from '../components/index'

  const routes= [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/userAdd',
      name: 'UserAdd',
      component: UserAdd
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]

export default routes;
