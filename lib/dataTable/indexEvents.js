'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = undefined;

var _events = require('./events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Module : Kero webpack entry events index
                                                                                                                                                           * Author : liuyk(liuyuekai@yonyou.com)
                                                                                                                                                           * Date   : 2016-08-09 15:24:46
                                                                                                                                                           */

//相关依赖导入


var Events = function Events() {
  _classCallCheck(this, Events);

  this.on = _events.on;
  this.off = _events.off;
  this.one = _events.one;
  this.trigger = _events.trigger;
  this.getEvent = _events.getEvent;
};

exports.Events = Events;