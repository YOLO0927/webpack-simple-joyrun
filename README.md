### 如何使用

初始化项目时，模板名为 YOLO0927/webpack-simple-joyrun 即可，因为 vue-init 中是使用 download-git-repo 包的，所以下载模板输入 作者名/仓库名 即可,使用本地模板加上 --offline 参数即可
> eg: vue init YOLO0927/webpack-simple-joyrun \<project-name\>


### 与 vue 的2种官方模板有何变动
1.  仍然基于 webpack-simple 基础上做的一些小改动，并未修改 vue-init 脚本;
2.  css预处理器选项变为 list 选择 (介于同事需要，这里暂时为3个选项 less、sass、none);
3.  添加列表选项 路由变换时的动画类型;
4.  mixins 注入每个模块页面的目的是当刷新页面时，index.html中的分享配置有可能会失效，此时会读取当前单页面模块的分享配置
5.  增加了些插件的初始化代码:
    + 以下 @ => path: /src 由 webpack 别名(alias) 配置而添加, 依赖已安装 mint-ui, 及修改局部引入的 babel 配置;
    + vue-router: 初始化路由结构及将路由文件单独抽出 => @/router/index;
    + aixos: 初始化请求的根地址为 `'//' + document.domain + '/<project-name>'`, 并初始化所有请求及响应的拦截器, 并插入 mint-ui 的 loading 动画在请求时 open , 在响应时 close;
    + 初始化 index.html 内相关分享代码配置及 js 外部引入、百度统计等;
    + 路由改变时的动画类型: 会根据是否选择动画而判断是否插入动画样式代码;
6.  vue-router 主配置文件中增加判断当前执行环境，若为开发环境则 mode 为 `hashmap`，若为生产环境则为 `history`, base 选项也对应判断了;
7.  增加 ESlint 的引入来规范代码风格，目前会询问是否使用，若使用，则会询问选择 ESlint 初始配置模板，目前统一默认只有一个选项 Standard，以后如果有需要，再进行模板添加，已在 ESlint 全局变量配置中添加了 $ 变量，由此避免 Eslint 对外部 script 引入导致的 $ 警告错误;

### 如何简单扩展或创建自己的小模板
1. 通过查看 vue-cli 文档下方部分了解如何在模板内判断加入的参数及 meta.json 或 meta.js 内的配置过滤器
   + https://github.com/vuejs/vue-cli/tree/master#local-templates 从这里开始看即可
2. webpack-simple 的 meta.json 与 webpack 的 meta.js 是基于 inquirer 包实现与用户的便捷交互的, 所以需要添加或更改、删除配置可参照文档即可
   + https://www.npmjs.com/package/inquirer
3. vue-init 的 generate.js 中已经注册了 2 个命令来帮助我们在模板中判断变量，`if_eq` 与 `unless_eq`，如果想自己更改 vue-init 自定义更多命令，可以查看
   + https://github.com/wycats/handlebars.js 在其中去找到 registerHelper 去注册命令
