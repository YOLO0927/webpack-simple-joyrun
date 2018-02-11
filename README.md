### 如何使用

初始化项目时，模板名为 YOLO0927/webpack-simple-joyrun 即可，因为 vue-init 中是使用 download-git-repo 包的，所以各位放心写 作者名/仓库名 即可
> eg: vue init YOLO0927/webpack-simple-joyrun \<project-name\>


### 与 vue 的2种官方模板有何变动
1.  仍然基于 webpack-simple 基础上做的一些小改动，并未修改 vue-init 脚本;
2.  将是否使用 saas => less (个人偏好 less, 而且我个人发现 less 用的人好像多点);
3.  添加列表选项 路由变换时的动画类型;
4.  增加了些插件的初始化代码:
    + 以下 @ => path: /src 由 webpack 别名(alias) 配置而添加;
    + vue-router: 初始化路由结构及将路由文件单独抽出 => @/router/index;
    + aixos: 初始化请求的根地址为 `'//' + document.domain + '/<project-name>'`, 并初始化所有请求及响应的拦截器, 并插入 mint-ui 的 loading 动画在请求时 open , 在响应时 close;
    + 初始化 index.html 内相关分享代码配置及 js 外部引入、百度统计等;
    + 路由改变时的动画类型: 会根据是否选择动画而判断是否插入动画样式代码;

### 如何简单扩展或创建自己的小模板
1.  通过查看 vue-cli 文档下方部分了解如何在模板内判断加入的参数及 meta.json 或 meta.js 内的配置过滤器
    + https://github.com/vuejs/vue-cli/tree/master#local-templates 从这里开始看即可
2.  webpack-simple 的 meta.json 与 webpack 的 meta.js 是基于 inquirer 包实现与用户的便捷交互的, 所以需要添加或更改、删除配置可参照文档即可
    + https://www.npmjs.com/package/inquirer
