// require.ensure 是 Webpack 的特殊语法，用来设置 组件到底路径
/**
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */
const routers = [{
    path: '/',
    name: 'index',
    component(resolve) {
        console.log(resolve);
        require.ensure(['./index.vue'], () => {
         resolve(require('./index.vue'));
         });
    },
    children: [
        {
            path: '/welfare',
            name: 'welfare',
            component(resolve) {
               /* require.ensure(['./components/welfare/welfare.vue'], () => {
                 resolve(require('./components/welfare/welfare.vue'));
                 });*/
            }
        }],
}];

export default routers;
