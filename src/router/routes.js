
import HelloWorld from '../components/HelloWorld.vue'
import User from '../components/User.vue'
import UserAdd from '../components/UserAdd.vue'

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
    }
  ]

export default routes;
