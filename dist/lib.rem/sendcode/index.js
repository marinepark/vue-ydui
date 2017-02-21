/*! vue-ydui v0.2.4 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SendCode=void 0;var o=n(75),i=r(o);e.SendCode=i.default},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},2:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=c[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(d(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(d(r.parts[i],e));c[r.id]={id:r.id,refs:1,parts:s}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],s=o[1],a=o[2],d=o[3],u={css:s,media:a,sourceMap:d};n[i]?n[i].parts.push(u):e.push(n[i]={id:i,parts:[u]})}return e}function i(t,e){var n=b(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function d(t,e){var n,r,o;if(e.singleton){var i=h++;n=v||(v=a(e)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=a(e),r=l.bind(null,n),o=function(){s(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function u(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function l(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,h=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],d=c[a.id];d.refs--,i.push(d)}if(t){var u=o(t);r(u,e)}for(var s=0;s<i.length;s++){var d=i[s];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete c[d.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,document.addEventListener("touchmove",t))},unlock:function(){e=!1,document.removeEventListener("touchmove",t)}}}(),r=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||r.test(t)},o=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window};e.pageScroll=n,e.isColor=r,e.getScrollview=o},7:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".m-button{padding:0 .24rem}.btn{height:.7rem;font-size:.26rem;display:inline-block;padding:0 .2rem;box-sizing:content-box}.btn,.btn-block{text-align:center;position:relative;border:none;pointer-events:auto;border-radius:3px}.btn-block{width:100%;display:block;font-size:.36rem;height:1rem;margin-top:.5rem}.btn-primary{background-color:#04be02;color:#fff}.btn-primary:active{background-color:#04ab02}.btn-danger{background-color:#ef4f4f;color:#fff}.btn-danger:active{background-color:#d74747}.btn-warning{background-color:#ffb400;color:#fff}.btn-warning:active{background-color:#e6a200}.btn-disabled{background-color:#ccc;color:#f0f0f0;pointer-events:none}.btn-disabled:active{background-color:#b8b8b8}.btn-hollow{background-color:#fff;color:#454545;border:1px solid #eaeaea}.btn-hollow:active{background-color:#f7f7f7}.hairline .btn-hollow{border:.5px solid #dedede}",""])},8:function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.id,r,""]]);n(2)(r,{});r.locals&&(t.exports=r.locals)},9:function(t,e,n){var r,o;n(8),r=n(11);var i=n(10);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classes,style:{backgroundColor:t.bgcolor,color:t.color},attrs:{disabled:t.disabled}},[t._t("default")],2)},staticRenderFns:[]}},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);e.default={name:"yd-button",props:{disabled:Boolean,type:{type:String,validator:function(t){return["primary","danger","warning","hollow","disabled"].indexOf(t)>-1},default:"primary"},size:{type:String,validator:function(t){return["small","large"].indexOf(t)>-1}},bgcolor:{type:String,validator:function(t){return!t||(0,r.isColor)(t)}},color:{type:String,validator:function(t){return!t||(0,r.isColor)(t)}}},computed:{classes:function(){var t="large"==this.size?"btn-block":"btn",e="btn-"+this.type;return this.disabled&&(e="btn-disabled"),this.bgcolor&&(e=""),t+" "+e}}}},75:function(t,e,n){var r,o;r=n(148);var i=n(112);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},112:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("yd-button",{class:t.start?"btn-disabled":"",style:{backgroundColor:t.bgcolor,color:t.color},attrs:{size:t.size,type:t.type,disabled:t.start}},[t._v("\n    "+t._s(t.tmpStr)+"\n")])},staticRenderFns:[]}},148:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),i=r(o);e.default={name:"yd-sendcode",extends:i.default,data:function(){return{tmpStr:"获取短信验证码",timer:null,start:!1}},props:{initStr:String,second:{default:60,validator:function(t){return/^\d*$/.test(t)}},runStr:{type:String,default:"{%s}秒后重新获取"},resetStr:{type:String,default:"重新获取验证码"},value:{type:Boolean,default:!1}},methods:{run:function(){var t=this,e=this.second;this.tmpStr=this.getStr(this.second),this.timer=setInterval(function(){e--,t.tmpStr=t.getStr(e),e<=0&&t.stop()},1e3)},stop:function(){this.tmpStr=this.resetStr,this.$emit("input",!1),clearInterval(this.timer)},getStr:function(t){return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g,t)}},watch:{value:function(t){this.start=t,t&&this.run()}},mounted:function(){this.initStr&&(this.tmpStr=this.initStr)},destroyed:function(){this.stop()}}}})});