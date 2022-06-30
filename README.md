# 商城购物小练习
采用cli方式，手机端是上下结构，底部tab，上面内容,内容主要包括首页（轮播，列表商品），商品详情页（可以添加到购物车，这里需要在底部tab和购物车页面同步展示添加的商品，层层props传值太麻烦，所以直接存到响应式vuex里面），购物车清算页，还有我的信息。请求用axios。
首页列表数据太多最好缓存一下keep-alive，同时可以通过vuex的计算属性getNavState通过mapGetters辅助函数导出去判断是否展示底部导航
首页通常有轮播（每隔一定时间展示后面一张图（num++），找到最后一张图之后又从第一张开始num=0,这里适合用v-show）可以提到公共组件用props传入数据展示，大家一起用，轮播在组件挂载mounted时设置定时器setInterval播放autoPlay，同时需要在组件destroyed时移除定时器clearInterval
router部分，主要是VueRouter,这里也用到了缓存组件keepAlive和匹配样式linkExactActiveClass



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

