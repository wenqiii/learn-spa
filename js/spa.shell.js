// 项目的js 组织方式之一 命名空间
// 污染
// 可拔插式的模块化机制
spa.shell = (function() {
  var configMap = {
    main_html: `
      <div class="spa-shell-head">
        <div class="spa-shell-head-logo"></div>
        <div class="spa-shell-head-acct"></div>
        <div class="spa-shell-head-search"></div>
      </div>
      <div class="spa-shell-main">
        <div class="spa-shell-main-nav"></div>
        <div class="spa-shell-main-content"></div>
      </div>
      <div class="spa-shell-foot"></div>
      <div class="spa-shell-chat"></div>
      <div class="spa-shell-modal"></div>
    `,
    chat_retracted_title: 'Click to extend',
    chat_extended_title: 'Click to retract',
    chat_extend_height: 400,
    chat_restract_height: 15
  }

  var stateMap = {
    $container: null
  }

  var jqueryMap = {};

  // private method
  function toggleChat() {
    // 在没有css3 之前
    // 获取元素的高度
    // .height() 一定可以得到元素高度
    var px_chat_ht = jqueryMap.$chat.height();
    var is_open = px_chat_ht === configMap.chat_extend_height;
    var is_closed = px_chat_ht === configMap.chat_restract_height;
    jqueryMap.$chat.animate(
      {
        height: stateMap.is_chat_restracted
        ?configMap.chat_extend_height
        :configMap.chat_restract_height
      },
      200,
      function() {
        jqueryMap.$chat.attr(
          'title',configMap.chat_extended_title
        );
        stateMap.is_chat_restracted = !stateMap.is_chat_restracted
      }
    )
    console.log(px_chat_ht);
  }
  function setJqueryMap() {
    var $container = stateMap.$container;
    jqueryMap = {
      $container: $container,
      $chat: $container.find('.spa-shell-chat')
    }
  }
  function onClickChat() {
    toggleChat();
    return false;
  }
  function initModule($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();
    jqueryMap.$chat.attr('title',configMap.chat_retracted_title)
    .click(onClickChat)
  }
  return {
    initModule: initModule
  }
})();
