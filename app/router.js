'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/request', controller.home.request);
  router.get('/api/wechatmini/index', controller.api.weChatMini.home.index);
};
