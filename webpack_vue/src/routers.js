// require.ensure 是 Webpack 的特殊语法，用来设置 组件到底路径
/**
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */
const routers = [{
    path: '/index',
    name: 'index',
    component(resolve) {
        require.ensure(['./index.vue'], () => {
            resolve(require('./index.vue'));
         });
    },
    children: [
        {
            path: '/banner',
            name: 'banner',
            component(resolve) {
                require.ensure(['./components/banner/banner.vue'], () => {
                    resolve(require('./components/banner/banner.vue'));
                });
            }
        },
        {
            path: '/goods',
            name: 'goods',
            component(resolve) {
                require.ensure(['./components/goods/goods'], () => {
                    resolve(require('./components/goods/goods'));
                });
            }
        }],
}];

export default routers;
