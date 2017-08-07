// Single Page Application
// 单页  在一页中动态加载一页内容，用户感觉不到浏览器的刷新
// 命名空间
// 立即执行函数，可以用于构建对象和类
// 私有的数据
var spa = (function() {
  // 闭合的空间 私有变量
  var initModule = function($container) {
    spa.shell.initModule($container);
  }
  return {
    initModule: initModule
  }
})()
