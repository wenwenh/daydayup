import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/components/Login'
import center from '@/components/Center'
import userstation from '@/components/modules/Userstation'
import usercenter from '@/components/modules/Usercenter'
import download from '@/components/modules/Download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: login,
      component: login
    },
    {
      path: '/center',
      name: 'center',
      component: center,
      children: [
        {
          path: 'userstation',
          name: 'userstation',
          component: userstation
        },
        {
          path: 'usercenter',
          name: 'usercenter',
          component: usercenter
        },
        {
          path: 'download',
          name: 'download',
          component: download
        }
      ]}
  ]
})
