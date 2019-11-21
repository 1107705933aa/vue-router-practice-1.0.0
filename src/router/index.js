import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'
import Test3 from '@/components/Test3'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'test',
          component: Test,
          // beforeEach: (to, from, next) => {
          //   console.log(from);
          //   console.log(to);
          //   // console.log(next);
          //   next(false);
          // }
        },
        {
          path: 'test2',
          component: Test2,
          // beforeEach: (to, from, next) => {
          //   console.log(from);
          //   console.log(to);
          //   // console.log(next);
          //   next(false);
          // }
        }
      ],
      beforeEach: (to, from, next) => {
        console.log(from);
        console.log(to);
        // console.log(next);
        next(false);
      }
    },
    {
      path: '/test3',
      name: 'test3',
      component: Test3,
      // beforeEach: (to, from, next) => {
      //   console.log(from);
      //   console.log(to);
      //   // console.log(next);
      //   next(false);
      // }
    }
  ]
})

// 导航守卫主要用来通过跳转或取消的方式守卫导航
// 注册一个全局共享的守卫
// router.beforeEach((to, from, next) => {
//   // console.log(from);
//   // console.log(to);
//   // console.log(next);
//   //定要调用该方法来 resolve 这个钩子，如果不写next()或者next(false)，页面路由不会跳转
//   next();
// })

export default router;