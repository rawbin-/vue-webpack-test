import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// this piece of code works
// const _import = (relativePath) => {
//   if (process.env.NODE_ENV === 'development') {
//     return require('@/components/' + relativePath).default
//   } else {
//     return import('@/components/' + relativePath)
//   }
// };

// the following code does not work
// Uncaught Error: Cannot find module "."
const _import = (relativePath) => {
  const fullRelativePath = '@/components/' + relativePath;
  if (process.env.NODE_ENV === 'development') {
    return require(fullRelativePath).default
  } else {
    return import(fullRelativePath)
  }
};


const HelloWorld = _import('HelloWorld');


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
