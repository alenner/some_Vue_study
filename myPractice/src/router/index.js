import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import progressPrc from '@/components/cmp1/progressPrc'
import JSArr from '@/components/cmp1/JsArr'
import checkBox from '@/components/cmp1/checkBox'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/progressPrc',
          name: 'progressPrc',
          component: progressPrc
        },
        {
          path: '/JSArr',
          name: 'JSArr',
          component: JSArr
        },
        {
          path: '/checkBox',
          name: 'checkBox',
          component: checkBox
        }
      ]
    }
  ]
})
