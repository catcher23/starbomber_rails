!function(i){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.Flux=i()}}(function(){return function i(t,e,s){function r(n,c){if(!e[n]){if(!t[n]){var o="function"==typeof require&&require;if(!c&&o)return o(n,!0);if(a)return a(n,!0);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}var h=e[n]={exports:{}};t[n][0].call(h.exports,function(i){var e=t[n][1][i];return r(e?e:i)},h,h.exports,i,t,e,s)}return e[n].exports}for(var a="function"==typeof require&&require,n=0;n<s.length;n++)r(s[n]);return r}({1:[function(i,t,e){/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
t.exports.Dispatcher=i("./lib/Dispatcher"),window.FluxDispatcher=t.exports.Dispatcher},{"./lib/Dispatcher":2}],2:[function(i,t,e){function s(){"use strict";this.$Dispatcher_callbacks={},this.$Dispatcher_isPending={},this.$Dispatcher_isHandled={},this.$Dispatcher_isDispatching=!1,this.$Dispatcher_pendingPayload=null}/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * @typechecks
 */
var r=i("./invariant"),a=1,n="ID_";s.prototype.register=function(i){"use strict";var t=n+a++;return this.$Dispatcher_callbacks[t]=i,t},s.prototype.unregister=function(i){"use strict";r(this.$Dispatcher_callbacks[i],"Dispatcher.unregister(...): `%s` does not map to a registered callback.",i),delete this.$Dispatcher_callbacks[i]},s.prototype.waitFor=function(i){"use strict";r(this.$Dispatcher_isDispatching,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var t=0;t<i.length;t++){var e=i[t];this.$Dispatcher_isPending[e]?r(this.$Dispatcher_isHandled[e],"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",e):(r(this.$Dispatcher_callbacks[e],"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",e),this.$Dispatcher_invokeCallback(e))}},s.prototype.dispatch=function(i){"use strict";r(!this.$Dispatcher_isDispatching,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this.$Dispatcher_startDispatching(i);try{for(var t in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[t]||this.$Dispatcher_invokeCallback(t)}finally{this.$Dispatcher_stopDispatching()}},s.prototype.isDispatching=function(){"use strict";return this.$Dispatcher_isDispatching},s.prototype.$Dispatcher_invokeCallback=function(i){"use strict";this.$Dispatcher_isPending[i]=!0,this.$Dispatcher_callbacks[i](this.$Dispatcher_pendingPayload),this.$Dispatcher_isHandled[i]=!0},s.prototype.$Dispatcher_startDispatching=function(i){"use strict";for(var t in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[t]=!1,this.$Dispatcher_isHandled[t]=!1;this.$Dispatcher_pendingPayload=i,this.$Dispatcher_isDispatching=!0},s.prototype.$Dispatcher_stopDispatching=function(){"use strict";this.$Dispatcher_pendingPayload=null,this.$Dispatcher_isDispatching=!1},t.exports=s},{"./invariant":3}],3:[function(i,t,e){/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */
"use strict";var s=function(i,t,e,s,r,a,n,c){if(!i){var o;if(void 0===t)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[e,s,r,a,n,c],h=0;o=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return p[h++]}))}throw o.framesToPop=1,o}};t.exports=s},{}]},{},[1])(1)});