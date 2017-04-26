/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(z){'use strict';function M(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.1/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var f=encodeURIComponent,e;e=arguments[d];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=f(e)}return new b(c)}}function ta(a){if(null==a||Wa(a))return!1;if(C(a)||E(a)||D&&a instanceof
D)return!0;var b="length"in Object(a)&&a.length;return Y(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,f;if(a)if(y(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(C(a)||ta(a)){var e="object"!==typeof a;c=0;for(f=a.length;c<f;c++)(e||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Dc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)va.call(a,c)&&b.call(d,a[c],c,a);return a}function Ec(a,b,d){for(var c=Object.keys(a).sort(),f=0;f<c.length;f++)b.call(d,a[c[f]],c[f]);return c}function Fc(a){return function(b,d){a(d,b)}}function ie(){return++rb}function Sb(a,b,d){for(var c=a.$$hashKey,f=0,e=b.length;f<e;++f){var g=b[f];if(F(g)||y(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&F(n)?fa(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Tb(n)?a[m]=n.clone():(F(a[m])||(a[m]=C(n)?[]:{}),Sb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Sb(a,wa.call(arguments,1),!1)}function je(a){return Sb(a,wa.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Ub(a,b){return R(Object.create(a),b)}function w(){}function Ya(a){return a}function ma(a){return function(){return a}}function Vb(a){return y(a.toString)&&a.toString!==na}function x(a){return"undefined"===typeof a}function v(a){return"undefined"!==
typeof a}function F(a){return null!==a&&"object"===typeof a}function Dc(a){return null!==a&&"object"===typeof a&&!Gc(a)}function E(a){return"string"===typeof a}function Y(a){return"number"===typeof a}function fa(a){return"[object Date]"===na.call(a)}function y(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===na.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ia(a){return"boolean"===typeof a}function ke(a){return a&&Y(a.length)&&
le.test(na.call(a))}function Tb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function me(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function xa(a){return P(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Fa(a,b){function d(a,b){var d=b.$$hashKey,e;if(C(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(Dc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)va.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!F(a))return a;var b=e.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw Ga("cpws");var b=!1,c=f(a);void 0===c&&(c=C(a)?[]:Object.create(Gc(a)),b=!0);e.push(a);g.push(c);return b?d(a,c):c}function f(a){switch(na.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(y(a.cloneNode))return a.cloneNode(!0)}
var e=[],g=[];if(b){if(ke(b)||"[object ArrayBuffer]"===na.call(b))throw Ga("cpta");if(a===b)throw Ga("cpi");C(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});e.push(a);g.push(b);return d(a,b)}return c(a)}function qa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(C(a)){if(!C(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!qa(a[c],b[c]))return!1;return!0}}else{if(fa(a))return fa(b)?qa(a.getTime(),
b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()===b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||C(b)||fa(b)||Xa(b))return!1;d=W();for(c in a)if("$"!==c.charAt(0)&&!y(a[c])){if(!qa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&v(b[c])&&!y(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(wa.call(b,d))}function bb(a,b){var d=2<arguments.length?wa.call(arguments,2):[];return!y(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Hc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&z.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!x(a))return Y(b)||(b=b?2:null),JSON.stringify(a,Hc,b)}function Ic(a){return E(a)?JSON.parse(a):a}function Jc(a,b){a=a.replace(ne,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return ga(d)?b:d}function Wb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Jc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=D(a).clone();try{a.empty()}catch(b){}var d=D("<div>").append(a).html();try{return a[0].nodeType===Ja?P(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+P(b)})}catch(c){return P(d)}}function Kc(a){try{return decodeURIComponent(a)}catch(b){}}function Lc(a){var b={};q((a||"").split("&"),function(a){var c,f,e;a&&(f=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(f=a.substring(0,c),e=a.substring(c+1)),f=Kc(f),v(f)&&(e=v(e)?Kc(e):!0,va.call(b,f)?C(b[f])?b[f].push(e):b[f]=[b[f],e]:b[f]=e))});return b}function Xb(a){var b=[];q(a,function(a,c){C(a)?q(a,function(a){b.push(ka(c,!0)+(!0===a?"":"="+ka(a,!0)))}):b.push(ka(c,!0)+(!0===a?"":"="+ka(a,!0)))});return b.length?b.join("&"):""}function db(a){return ka(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ka(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function oe(a,b){var d,c,f=Ka.length;for(c=0;c<f;++c)if(d=Ka[c]+b,E(d=a.getAttribute(d)))return d;return null}function pe(a,b){var d,c,f={};q(Ka,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ka,function(b){b+="app";var f;!d&&(f=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=f,c=f.getAttribute(b))});d&&(qe?(f.strictDi=null!==oe(d,"strict-di"),
b(d,c?[c]:[],f)):z.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Mc(a,b,d){F(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=D(a);if(a.injector()){var c=a[0]===z.document?"document":ya(a);throw Ga("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,d,c){a.$apply(function(){b.data("$injector",c);d(b)(a)})}]);return c},f=/^NG_ENABLE_DEBUG_INFO!/,e=/^NG_DEFER_BOOTSTRAP!/;z&&f.test(z.name)&&(d.debugInfoEnabled=!0,z.name=z.name.replace(f,""));if(z&&!e.test(z.name))return c();z.name=z.name.replace(e,"");$.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};y($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function re(){z.name=
"NG_ENABLE_DEBUG_INFO!"+z.name;z.location.reload()}function se(a){a=$.element(a).injector();if(!a)throw Ga("test");return a.get("$$testability")}function Nc(a,b){b=b||"_";return a.replace(te,function(a,c){return(c?b:"")+a.toLowerCase()})}function ue(){var a;if(!Oc){var b=sb();(oa=x(b)?z.jQuery:b?z[b]:void 0)&&oa.fn.on?(D=oa,R(oa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=oa.cleanData,oa.cleanData=function(b){for(var c,
f=0,e;null!=(e=b[f]);f++)(c=oa._data(e,"events"))&&c.$destroy&&oa(e).triggerHandler("$destroy");a(b)}):D=X;$.element=D;Oc=!0}}function fb(a,b,d){if(!a)throw Ga("areq",b||"?",d||"required");return a}function tb(a,b,d){d&&C(a)&&(a=a[a.length-1]);fb(y(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Pa(a,b){if("hasOwnProperty"===a)throw Ga("badname",b);}function Pc(a,b,d){if(!b)return a;b=b.split(".");for(var c,f=a,e=b.length,g=0;g<e;g++)c=
b[g],a&&(a=(f=a)[c]);return!d&&y(a)?bb(f,a):a}function ub(a){for(var b=a[0],d=a[a.length-1],c,f=1;b!==d&&(b=b.nextSibling);f++)if(c||a[f]!==b)c||(c=D(wa.call(a,0,f))),c.push(b);return c||a}function W(){return Object.create(null)}function Yb(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Vb(a)||C(a)||fa(a)?cb(a):a.toString()}return a}function ve(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=M("$injector"),c=M("ng");a=b(a,"angular",Object);a.$$minErr=
a.$$minErr||M;return b(a,"module",function(){var a={};return function(e,g,h){if("hasOwnProperty"===e)throw c("badname","module");g&&a.hasOwnProperty(e)&&(a[e]=null);return b(a,e,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return J}}function b(a,d,f){f||(f=c);return function(b,c){c&&y(c)&&(c.$$moduleName=e);f.push([a,d,arguments]);return J}}if(!g)throw d("nomod",e);var c=[],f=[],p=[],r=a("$injector","invoke","push",f),J={_invokeQueue:c,_configBlocks:f,_runBlocks:p,
requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",f),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:r,run:function(a){p.push(a);return this}};h&&r(h);return J})}})}
function ra(a,b){if(C(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(F(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function we(a){var b=[];return JSON.stringify(a,function(a,c){c=Hc(a,c);if(F(c)){if(0<=b.indexOf(c))return"...";b.push(c)}return c})}function xe(a){R(a,{bootstrap:Mc,copy:Fa,extend:R,merge:je,equals:qa,element:D,forEach:q,injector:eb,noop:w,bind:bb,toJson:cb,fromJson:Ic,identity:Ya,isUndefined:x,isDefined:v,isString:E,isFunction:y,
isObject:F,isNumber:Y,isElement:Tb,isArray:C,version:ye,isDate:fa,lowercase:P,uppercase:vb,callbacks:{$$counter:0},getTestability:se,reloadWithDebugInfo:re,$$minErr:M,$$csp:za,$$encodeUriSegment:db,$$encodeUriQuery:ka,$$stringify:Yb});Zb=ve(z);Zb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ze});a.provider("$compile",Qc).directive({a:Ae,input:Rc,textarea:Rc,form:Be,script:Ce,select:De,option:Ee,ngBind:Fe,ngBindHtml:Ge,ngBindTemplate:He,ngClass:Ie,ngClassEven:Je,ngClassOdd:Ke,
ngCloak:Le,ngController:Me,ngForm:Ne,ngHide:Oe,ngIf:Pe,ngInclude:Qe,ngInit:Re,ngNonBindable:Se,ngPluralize:Te,ngRepeat:Ue,ngShow:Ve,ngStyle:We,ngSwitch:Xe,ngSwitchWhen:Ye,ngSwitchDefault:Ze,ngOptions:$e,ngTransclude:af,ngModel:bf,ngList:cf,ngChange:df,pattern:Sc,ngPattern:Sc,required:Tc,ngRequired:Tc,minlength:Uc,ngMinlength:Uc,maxlength:Vc,ngMaxlength:Vc,ngValue:ef,ngModelOptions:ff}).directive({ngInclude:gf}).directive(wb).directive(Wc);a.provider({$anchorScroll:hf,$animate:jf,$animateCss:kf,$$animateJs:lf,
$$animateQueue:mf,$$AnimateRunner:nf,$$animateAsyncRun:of,$browser:pf,$cacheFactory:qf,$controller:rf,$document:sf,$$isDocumentHidden:tf,$exceptionHandler:uf,$filter:Xc,$$forceReflow:vf,$interpolate:wf,$interval:xf,$http:yf,$httpParamSerializer:zf,$httpParamSerializerJQLike:Af,$httpBackend:Bf,$xhrFactory:Cf,$jsonpCallbacks:Df,$location:Ef,$log:Ff,$parse:Gf,$rootScope:Hf,$q:If,$$q:Jf,$sce:Kf,$sceDelegate:Lf,$sniffer:Mf,$templateCache:Nf,$templateRequest:Of,$$testability:Pf,$timeout:Qf,$window:Rf,$$rAF:Sf,
$$jqLite:Tf,$$HashMap:Uf,$$cookieReader:Vf})}])}function gb(a,b){return b.toUpperCase()}function xb(a){return a.replace(Wf,gb)}function Yc(a){a=a.nodeType;return 1===a||!a||9===a}function Zc(a,b){var d,c,f=b.createDocumentFragment(),e=[];if($b.test(a)){d=f.appendChild(b.createElement("div"));c=(Xf.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(Yf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;e=ab(e,d.childNodes);d=f.firstChild;d.textContent=""}else e.push(b.createTextNode(a));
f.textContent="";f.innerHTML="";q(e,function(a){f.appendChild(a)});return f}function X(a){if(a instanceof X)return a;var b;E(a)&&(a=S(a),b=!0);if(!(this instanceof X)){if(b&&"<"!==a.charAt(0))throw ac("nosel");return new X(a)}if(b){b=z.document;var d;a=(d=Zf.exec(a))?[b.createElement(d[1])]:(d=Zc(a,b))?d.childNodes:[];bc(this,a)}else y(a)?$c(a):bc(this,a)}function cc(a){return a.cloneNode(!0)}function yb(a,b){b||hb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,f=d.length;c<f;c++)hb(d[c])}
function ad(a,b,d,c){if(v(c))throw ac("offargs");var f=(c=zb(a))&&c.events,e=c&&c.handle;if(e)if(b){var g=function(b){var c=f[b];v(d)&&$a(c||[],d);v(d)&&c&&0<c.length||(a.removeEventListener(b,e),delete f[b])};q(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in f)"$destroy"!==b&&a.removeEventListener(b,e),delete f[b]}function hb(a,b){var d=a.ng339,c=d&&ib[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ad(a)),delete ib[d],a.ng339=void 0))}function zb(a,
b){var d=a.ng339,d=d&&ib[d];b&&!d&&(a.ng339=d=++$f,d=ib[d]={events:{},data:{},handle:void 0});return d}function dc(a,b,d){if(Yc(a)){var c,f=v(d),e=!f&&b&&!F(b),g=!b;a=(a=zb(a,!e))&&a.data;if(f)a[xb(b)]=d;else{if(g)return a;if(e)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",S((" "+(a.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").replace(" "+S(b)+" "," ")))})}function Db(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=S(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",S(d))}}function bc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function bd(a,b){return Eb(a,"$"+(b||"ngController")+
"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=C(b)?b:[b];a;){for(var c=0,f=b.length;c<f;c++)if(v(d=D.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function cd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function ag(a,b){b=b||z;if("complete"===b.document.readyState)b.setTimeout(a);else D(b).on("load",a)}function $c(a){function b(){z.document.removeEventListener("DOMContentLoaded",
b);z.removeEventListener("load",b);a()}"complete"===z.document.readyState?z.setTimeout(a):(z.document.addEventListener("DOMContentLoaded",b),z.addEventListener("load",b))}function dd(a,b){var d=Gb[b.toLowerCase()];return d&&ed[xa(a)]&&d}function bg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],g=e?e.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=e.specialHandlerWrapper||cg;1<g&&(e=ra(e));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,e[l])}};d.elem=a;return d}function cg(a,b,d){d.call(a,b)}function dg(a,b,d){var c=b.relatedTarget;c&&(c===a||eg.call(a,c))||d.call(a,b)}function Tf(){this.$get=function(){return R(X,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,
b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function la(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||ie)():d+":"+a}function Qa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function fd(a){a=(Function.prototype.toString.call(a)+" ").replace(fg,"");return a.match(gg)||a.match(hg)}function ig(a){return(a=fd(a))?
"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(F(b))q(b,Fc(a));else return a(b,c)}}function c(a,b){Pa(a,"service");if(y(b)||C(b))b=p.instantiate(b);if(!b.$get)throw da("pget",a);return n[a+"Provider"]=b}function f(a,b){return function(){var c=O.invoke(b,this);if(x(c))throw da("undef",a);return c}}function e(a,b,d){return c(a,{$get:!1!==d?f(a,b):b})}function g(a){fb(x(a)||C(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{E(a)?(c=Zb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):y(a)?b.push(p.invoke(a)):C(a)?b.push(p.invoke(a)):tb(a,"module")}catch(e){throw C(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),da("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw da("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);C(a)&&(a=a[a.length-1]);d=a;if(La||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
Ia(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)+" "));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=C(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Qa([],!0),n={$provide:{provider:d(c),factory:d(e),
service:d(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return e(a,ma(b),!1)}),constant:d(function(a,b){Pa(a,"constant");n[a]=b;r[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=O.invoke(d,c);return O.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){$.isString(b)&&l.push(b);throw da("unpr",l.join(" <- "));}),r={},J=h(r,function(a,b){var c=p.get(a+"Provider",b);return O.invoke(c.$get,c,
void 0,a)}),O=J;n.$injectorProvider={$get:ma(J)};var u=g(a),O=J.get("$injector");O.strictDi=b;q(u,function(a){a&&O.invoke(a)});return O}function hf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function f(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===xa(a))return b=a,!0});return b}function e(a){if(a){a.scrollIntoView();var c;c=g.yOffset;y(c)?c=c():Tb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
Y(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:Y(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?e(b):(b=f(h.getElementsByName(a)))?e(b):"top"===a&&e(null):e(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||ag(function(){c.$evalAsync(g)})});return g}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;C(a)&&(a=a.join(" "));C(b)&&(b=b.join(" "));return a+" "+b}function jg(a){E(a)&&
(a=a.split(" "));var b=W();q(a,function(a){a.length&&(b[a]=!0)});return b}function Aa(a){return F(a)?a:{}}function kg(a,b,d,c){function f(a){try{a.apply(null,wa.call(arguments,1))}finally{if(J--,0===J)for(;O.length;)try{O.pop()()}catch(b){d.error(b)}}}function e(){ia=null;g();h()}function g(){u=A();u=x(u)?null:u;qa(u,B)&&(u=B);B=u}function h(){if(U!==k.url()||H!==u)U=k.url(),H=u,q(K,function(a){a(k.url(),u)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,r={};k.isMock=!1;var J=
0,O=[];k.$$completeOutstandingRequest=f;k.$$incOutstandingRequestCount=function(){J++};k.notifyWhenNoOutstandingRequests=function(a){0===J?a():O.push(a)};var u,H,U=l.href,t=b.find("base"),ia=null,A=c.history?function(){try{return m.state}catch(a){}}:w;g();H=u;k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=H===e;if(U===b&&(!c.history||f))return k;var h=U&&Ba(U)===Ba(b);U=b;H=e;!c.history||h&&f?(h||(ia=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(ia=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),H=u);ia&&(ia=b);return k}return ia||l.href.replace(/%27/g,"'")};k.state=function(){return u};var K=[],I=!1,B=null;k.onUrlChange=function(b){if(!I){if(c.history)D(a).on("popstate",e);D(a).on("hashchange",e);I=!0}K.push(b);return b};k.$$applicationDestroyed=function(){D(a).off("hashchange popstate",e)};k.$$checkUrlChange=h;k.baseHref=function(){var a=t.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
""):""};k.defer=function(a,b){var c;J++;c=n(function(){delete r[c];f(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),f(w),!0):!1}}function pf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new kg(a,c,b,d)}]}function qf(){this.$get=function(){function a(a,c){function f(a){a!==n&&(p?p===a&&(p=a.n):p=a,e(a.n,a.p),e(a,n),n=a,n.n=null)}function e(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw M("$cacheFactory")("iid",a);var g=0,h=
R({},c,{id:a}),k=W(),l=c&&c.capacity||Number.MAX_VALUE,m=W(),n=null,p=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});f(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;f(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);e(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=W();g=0;m=W();n=p=null},destroy:function(){m=
h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,f){a[f]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Nf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Qc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=W();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]=
{mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==P(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}function f(a){var b=a.require||a.controller&&a.name;!C(b)&&F(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var e={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=me("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
m=/^(on[a-z]+|formaction)$/,n=W();this.directive=function U(b,d){fb(b,"name");Pa(b,"directive");E(b)?(c(b),fb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,g){try{var h=a.invoke(e);y(h)?h={compile:ma(h)}:!h.compile&&h.link&&(h.compile=ma(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=f(h);var k=h,l=h.restrict;if(l&&(!E(l)||!/[EACM]/.test(l)))throw ea("badrestrict",l,b);k.restrict=
l||"EA";h.$$moduleName=e.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),e[b].push(d)):q(b,Fc(U));return this};this.component=function(a,b){function c(a){function e(b){return y(b)||C(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:lg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,y(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return v(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return v(a)?
(p=a,this):p};var r=!1;this.preAssignBindingsEnabled=function(a){return v(a)?(r=a,this):r};var J=10;this.onChangesTtl=function(a){return arguments.length?(J=a,this):J};var O=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(O=a,this):O};var u=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
b,c,f,n,I,B,L,N,G){function T(){try{if(!--za)throw da=void 0,ea("infchng",J);B.$apply(function(){for(var a=[],b=0,c=da.length;b<c;++b)try{da[b]()}catch(d){a.push(d)}da=void 0;if(a.length)throw a;})}finally{za++}}function s(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Q(a,b,c){ua.innerHTML="<span "+b+">";b=ua.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Ma(a,
b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof D||(a=D(a));var f=Na(a,b,a,c,d,e);ba.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw ea("multilink");fb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==xa(d)&&na.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?D(ha(g,D("<div>").append(a).html())):
c?Oa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Na(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,p,r;if(K)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(D(k),l)):l=a,p=c.transcludeOnThisElement?ja(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ja(a,b):null,c(f,l,
k,d,p)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=C(a)||a instanceof D,l,m,n,p,K,r=0;r<a.length;r++){l=new s;11===La&&M(a,r,k);m=fc(a[r],[],l,0===r?d:void 0,e);(f=m.length?X(m,a[r],l,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[r].childNodes)||!n.length?null:Na(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(r,f,l),p=!0,K=K||f;f=null}return p?g:null}function M(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
Ja)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ja)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ja(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=W(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ja(a,b.$$slots[f],c):null;return d}function fc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=xa(a);Y(b,
Ca(g),"E",d,e);for(var k,l,m,n,p=a.attributes,K=0,r=p&&p.length;K<r;K++){var A=!1,B=!1;k=p[K];l=k.name;m=k.value;k=Ca(l);(n=Ha.test(k))&&(l=l.replace(gd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ka))&&Z(k[1])&&(A=l,B=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ca(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=m,dd(a,k)&&(c[k]=!0);ra(a,b,m,k,n);Y(b,k,"A",d,e,A,B)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
"off");if(!Ga)break;f=a.className;F(f)&&(f=f.animVal);if(E(f)&&""!==f)for(;a=h.exec(f);)k=Ca(a[2]),Y(b,k,"C",d,e)&&(c[k]=S(a[3])),f=f.substr(a.index+a[0].length);break;case Ja:ma(b,a.nodeValue);break;case 8:if(!Fa)break;kb(a,b,c,d,e)}b.sort(ka);return b}function kb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ca(f[1]);Y(b,h,"M",d,e)&&(c[h]=S(f[2]))}}catch(k){}}function hd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function id(a,b,c){return function(d,e,f,g,h){e=hd(e[0],b,c);return a(d,e,f,g,h)}}function gc(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function X(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=id(a,c,d));a.require=t.require;a.directiveName=L;if(B===t||t.$$isolateScope)a=sa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=id(b,c,d));b.require=
t.require;b.directiveName=L;if(B===t||t.$$isolateScope)b=sa(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);U&&(e=N);c||(c=U?L.parent():L);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,Q);if(x(f))throw ea("noslot",d,ya(L));}else return l(a,b,e,c,Q)}var p,t,u,G,J,N,T,L;b===f?(g=d,L=d.$$element):(L=D(f),g=new s(L,d));J=e;B?G=e.$new(!0):K&&(J=e.$parent);l&&(T=m,T.$$boundTransclude=l,T.isSlotFilled=function(a){return!!l.$$slots[a]});A&&(N=
ca(L,g,T,A,G,e,B));B&&(ba.$$addScopeInfo(L,G,!0,!(I&&(I===B||I===B.$$originalDirective))),ba.$$addScopeClass(L,!0),G.$$isolateBindings=B.$$isolateBindings,t=oa(e,g,G,G.$$isolateBindings,B),t.removeWatches&&G.$on("$destroy",t.removeWatches));for(p in N){t=A[p];u=N[p];var Hb=t.$$bindings.bindToController;if(r){u.bindingInfo=Hb?oa(J,g,u.instance,Hb,t):{};var O=u();O!==u.instance&&(u.instance=O,L.data("$"+t.name+"Controller",O),u.bindingInfo.removeWatches&&u.bindingInfo.removeWatches(),u.bindingInfo=
oa(J,g,u.instance,Hb,t))}else u.instance=u(),L.data("$"+t.name+"Controller",u.instance),u.bindingInfo=oa(J,g,u.instance,Hb,t)}q(A,function(a,b){var c=a.require;a.bindToController&&!C(c)&&F(c)&&R(N[b].instance,V(b,c,L,N))});q(N,function(a){var b=a.instance;if(y(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(y(b.$onInit))try{b.$onInit()}catch(e){c(e)}y(b.$doCheck)&&(J.$watch(function(){b.$doCheck()}),b.$doCheck());y(b.$onDestroy)&&J.$on("$destroy",function(){b.$onDestroy()})});
p=0;for(t=h.length;p<t;p++)u=h[p],ta(u,u.isolateScope?G:e,L,g,u.require&&V(u.directiveName,u.require,L,N),T);var Q=e;B&&(B.template||null===B.templateUrl)&&(Q=G);a&&a(Q,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)u=k[p],ta(u,u.isolateScope?G:e,L,g,u.require&&V(u.directiveName,u.require,L,N),T);q(N,function(a){a=a.instance;y(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,K=l.newScopeDirective,A=l.controllerDirectives,B=l.newIsolateScopeDirective,I=l.templateDirective,u=l.nonTlbTranscludeDirective,
J=!1,N=!1,U=l.hasElementTranscludeDirective,G=d.$$element=D(b),t,L,T,O=e,Q,v=!1,Ma=!1,w,z=0,E=a.length;z<E;z++){t=a[z];var Na=t.$$start,M=t.$$end;Na&&(G=hd(b,Na,M));T=void 0;if(p>t.priority)break;if(w=t.scope)t.templateUrl||(F(w)?($("new/isolated scope",B||K,t,G),B=t):$("new/isolated scope",B,t,G)),K=K||t;L=t.name;if(!v&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(w=z+1;v=a[w++];)if(v.transclude&&!v.$$tlb||v.replace&&(v.templateUrl||v.template)){Ma=!0;break}v=!0}!t.templateUrl&&
t.controller&&(A=A||W(),$("'"+L+"' controller",A[L],t,G),A[L]=t);if(w=t.transclude)if(J=!0,t.$$tlb||($("transclusion",u,t,G),u=t),"element"===w)U=!0,p=t.priority,T=G,G=d.$$element=D(ba.$$createComment(L,d[L])),b=G[0],la(f,wa.call(T,0),b),T[0].$$parentNode=T[0].parentNode,O=gc(Ma,T,e,p,g&&g.name,{nonTlbTranscludeDirective:u});else{var ja=W();if(F(w)){T=[];var P=W(),kb=W();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;P[a]=b;ja[b]=null;kb[b]=c});q(G.contents(),function(a){var b=P[Ca(xa(a))];
b?(kb[b]=!0,ja[b]=ja[b]||[],ja[b].push(a)):T.push(a)});q(kb,function(a,b){if(!a)throw ea("reqslot",b);});for(var ec in ja)ja[ec]&&(ja[ec]=gc(Ma,ja[ec],e))}else T=D(cc(b)).contents();G.empty();O=gc(Ma,T,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});O.$$slots=ja}if(t.template)if(N=!0,$("template",I,t,G),I=t,w=y(t.template)?t.template(G,d):t.template,w=Ea(w),t.replace){g=t;T=$b.test(w)?jd(ha(t.templateNamespace,S(w))):[];b=T[0];if(1!==T.length||1!==b.nodeType)throw ea("tplrt",L,"");
la(f,G,b);E={$attr:{}};w=fc(b,[],E);var Y=a.splice(z+1,a.length-(z+1));(B||K)&&aa(w,B,K);a=a.concat(w).concat(Y);fa(d,E);E=a.length}else G.html(w);if(t.templateUrl)N=!0,$("template",I,t,G),I=t,t.replace&&(g=t),n=ga(a.splice(z,a.length-z),G,d,f,J&&O,h,k,{controllerDirectives:A,newScopeDirective:K!==t&&K,newIsolateScopeDirective:B,templateDirective:I,nonTlbTranscludeDirective:u}),E=a.length;else if(t.compile)try{Q=t.compile(G,d,O);var Z=t.$$originalDirective||t;y(Q)?m(null,bb(Z,Q),Na,M):Q&&m(bb(Z,Q.pre),
bb(Z,Q.post),Na,M)}catch(da){c(da,ya(G))}t.terminal&&(n.terminal=!0,p=Math.max(p,t.priority))}n.scope=K&&!0===K.scope;n.transcludeOnThisElement=J;n.templateOnThisElement=N;n.transclude=O;l.hasElementTranscludeDirective=U;return n}function V(a,b,c,d){var e;if(E(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ea("ctreq",b,a);}else if(C(b))for(e=
[],g=0,f=b.length;g<f;g++)e[g]=V(a,b[g],c,d);else F(b)&&(e={},q(b,function(b,f){e[f]=V(a,b,c,d)}));return e||null}function ca(a,b,c,d,e,f,g){var h=W(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=I(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ub(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,f,g,h,k,l){if(c===
h)return null;var m=null;if(e.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(f)){k&&(c=Ub(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,r=c.name,A={isolateScope:null,bindToController:null};F(K.scope)&&(!0===K.bindToController?(A.bindToController=d(K.scope,r,!0),A.isolateScope={}):A.isolateScope=d(K.scope,r,!1));F(K.bindToController)&&(A.bindToController=d(K.bindToController,r,!0));if(A.bindToController&&!K.controller)throw ea("noctrl",
r);m=m.$$bindings=A;F(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function fa(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
function ga(a,b,d,e,g,h,k,l){var m=[],n,p,K=b[0],r=a.shift(),u=Ub(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),t=y(r.templateUrl)?r.templateUrl(b,d):r.templateUrl,B=r.templateNamespace;b.empty();f(t).then(function(c){var f,A;c=Ea(c);if(r.replace){c=$b.test(c)?jd(ha(B,S(c))):[];f=c[0];if(1!==c.length||1!==f.nodeType)throw ea("tplrt",r.name,t);c={$attr:{}};la(e,b,f);var I=fc(f,[],c);F(r.scope)&&aa(I,!0);a=I.concat(a);fa(d,c)}else f=K,b.html(c);a.unshift(u);n=X(a,f,d,g,b,
r,h,k,l);q(e,function(a,c){a===f&&(e[c]=b[0])});for(p=Na(b[0].childNodes,g);m.length;){c=m.shift();A=m.shift();var G=m.shift(),J=m.shift(),I=b[0];if(!c.$$destroyed){if(A!==K){var N=A.className;l.hasElementTranscludeDirective&&r.replace||(I=cc(f));la(G,D(A),I);Ma(D(I),N)}A=n.transcludeOnThisElement?ja(c,n.transclude,J):J;n(p,c,I,e,A)}}m=null}).catch(function(a){a instanceof Error&&c(a)}).catch(w);return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ja(b,n.transclude,
e)),n(p,b,c,d,a)))}}function ka(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ma(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);
a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=P(a||"html");switch(a){case "svg":case "math":var c=z.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function pa(a,b){if("srcdoc"===b)return L.HTML;var c=xa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return L.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return L.RESOURCE_URL}function ra(a,
c,d,e,f){var g=pa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===xa(a))throw ea("selmulti",ya(a));if(m.test(e))throw ea("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=W());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function la(a,b,c){var d=b[0],e=
b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=z.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);D.hasData(d)&&(D.data(c,D.data(d)),D(d).off("$destroy"));D.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function sa(a,b){return R(function(){return a.apply(null,arguments)},
a,b)}function ta(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function oa(a,c,d,e,f){function g(b,c,e){!y(d.$onChanges)||c===e||c!==c&&e!==e||(da||(a.$$postDigest(T),da=[]),m||(m={},da.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Ib(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,r,A,u,B;switch(e.mode){case "@":p||va.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(E(a)||Ia(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=
a;r=c[m];E(r)?d[h]=b(r)(a):Ia(r)&&(d[h]=r);l[h]=new Ib(hc,d[h]);k.push(p);break;case "=":if(!va.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);B=A.literal?qa:function(a,b){return a===b||a!==a&&b!==b};u=A.assign||function(){r=d[h]=A(a);throw ea("nonassign",c[m],m,f.name);};r=d[h]=A(a);p=function(b){B(b,d[h])||(B(b,r)?u(a,b=d[h]):d[h]=b);return r=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,A.literal);k.push(p);break;case "<":if(!va.call(c,m)){if(p)break;
c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);var I=A.literal,G=d[h]=A(a);l[h]=new Ib(hc,d[h]);p=a.$watch(A,function(a,b){if(b===a){if(b===G||I&&qa(b,G))return;b=G}g(h,a,b);d[h]=a},I);k.push(p);break;case "&":A=c.hasOwnProperty(m)?n(c[m]):w;if(A===w&&p)break;d[h]=function(b){return A(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Da=/^\w/,ua=z.document.createElement("div"),Fa=O,Ga=u,za=J,da;s.prototype={$normalize:Ca,$addClass:function(a){a&&
0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=kd(a,b);c&&c.length&&N.addClass(this.$$element,c);(c=kd(b,a))&&c.length&&N.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=dd(this.$$element[0],a),g=ld[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Nc(a,"-"));f=xa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===
a)||"img"===f&&"src"===a)this[a]=b=G(b,"src"===a);else if("img"===f&&"srcset"===a&&v(b)){for(var f="",g=S(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+G(S(g[m]),!0),f=f+(" "+S(g[m+1]));g=S(g[2*l]).split(/\s/);f+=G(S(g[0]),!0);2===g.length&&(f+=" "+S(g[1]));this[a]=b=f}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):Da.test(e)?this.$$element.attr(e,b):Q(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=W()),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){$a(e,b)}}};var Aa=b.startSymbol(),Ba=b.endSymbol(),Ea="{{"===Aa&&"}}"===Ba?Ya:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Ba)},Ha=/^ngAttr[A-Z]/,Ka=/^(.+)Start$/;ba.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];C(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;ba.$$addBindingClass=
p?function(a){Ma(a,"ng-binding")}:w;ba.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;ba.$$addScopeClass=p?function(a,b){Ma(a,b?"ng-isolate-scope":"ng-scope")}:w;ba.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return z.document.createComment(c)};return ba}]}function Ib(a,b){this.previousValue=a;this.currentValue=b}function Ca(a){return a.replace(gd,"").replace(mg,gb)}function kd(a,b){var d="",c=a.split(/\s+/),
f=b.split(/\s+/),e=0;a:for(;e<c.length;e++){for(var g=c[e],h=0;h<f.length;h++)if(g===f[h])continue a;d+=(0<d.length?" ":"")+g}return d}function jd(a){a=D(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ja&&""===d.nodeValue.trim())&&ng.call(a,b,1)}return a}function lg(a,b){if(b&&E(b))return b;if(E(a)){var d=md.exec(a);if(d)return d[3]}}function rf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Pa(b,"controller");F(b)?
R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function f(a,b,c,d){if(!a||!F(a.$scope))throw M("$controller")("noscp",d,b);a.$scope[b]=c}return function(e,g,h,k){var l,m,n;h=!0===h;k&&E(k)&&(n=k);if(E(e)){k=e.match(md);if(!k)throw nd("ctrlfmt",e);m=k[1];n=n||k[3];e=a.hasOwnProperty(m)?a[m]:Pc(g.$scope,m,!0)||(b?Pc(c,m,!0):void 0);if(!e)throw nd("ctrlreg",m);tb(e,m,!0)}if(h)return h=(C(e)?e[e.length-1]:e).prototype,l=Object.create(h||null),n&&f(g,n,
l,m||e.name),R(function(){var a=d.invoke(e,l,g,m);a!==l&&(F(a)||y(a))&&(l=a,n&&f(g,n,l,m||e.name));return l},{instance:l,identifier:n});l=d.instantiate(e,g,m);n&&f(g,n,l,m||e.name);return l}}]}function sf(){this.$get=["$window",function(a){return D(a.document)}]}function tf(){this.$get=["$document","$rootScope",function(a,b){function d(){f=c.hidden}var c=a[0],f=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return f}}]}function uf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function ic(a){return F(a)?fa(a)?a.toISOString():cb(a):a}function zf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Ec(a,function(a,c){null===a||x(a)||(C(a)?q(a,function(a){b.push(ka(c)+"="+ka(ic(a)))}):b.push(ka(c)+"="+ka(ic(a))))});return b.join("&")}}}function Af(){this.$get=function(){return function(a){function b(a,f,e){null===a||x(a)||(C(a)?q(a,function(a,c){b(a,f+"["+(F(a)?c:"")+"]")}):F(a)&&!fa(a)?Ec(a,
function(a,c){b(a,f+(e?"":"[")+c+(e?"":"]"))}):d.push(ka(f)+"="+ka(ic(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function jc(a,b){if(E(a)){var d=a.replace(og,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(od))||(c=(c=d.match(pg))&&qg[c[0]].test(d));c&&(a=Ic(d))}}return a}function pd(a){var b=W(),d;E(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var f=P(S(a.substr(0,d)));a=S(a.substr(d+1));f&&(b[f]=b[f]?b[f]+", "+a:a)}):F(a)&&q(a,function(a,d){var e=P(d),g=S(a);e&&
(b[e]=b[e]?b[e]+", "+g:g)});return b}function qd(a){var b;return function(d){b||(b=pd(a));return d?(d=b[P(d)],void 0===d&&(d=null),d):b}}function rd(a,b,d,c){if(y(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function yf(){var a=this.defaults={transformResponse:[jc],transformRequest:[function(a){return F(a)&&"[object File]"!==na.call(a)&&"[object Blob]"!==na.call(a)&&"[object FormData]"!==na.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ra(kc),put:ra(kc),
patch:ra(kc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return v(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,f,e,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,
d={};q(a,function(a,e){y(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=R({},a);b.data=rd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!F(b))throw M("$http")("badreq",b);if(!E(m.valueOf(b.url)))throw M("$http")("badreq",b.url);var g=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=function(b){var c=
a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[P(b.method)]);a:for(f in c){g=P(f);for(h in d)if(P(h)===g)continue a;d[f]=c[f]}return e(d,ra(b))}(b);g.method=vb(g.method);g.paramSerializer=E(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(u,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
b.headers,d=rd(b.data,qd(c),void 0,b.transformRequest);x(d)&&q(c,function(a,b){"content-type"===P(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(w)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}N&&
(200<=a&&300>a?N.put(Q,[a,c,pd(d),e]):N.remove(Q));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:qd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,ra(a.headers()),a.statusText)}function u(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var B=k.defer(),L=B.promise,N,G,T=c.headers,s="jsonp"===P(c.method),Q=c.url;s?Q=m.getTrustedResourceUrl(Q):E(Q)||(Q=m.valueOf(Q));Q=r(Q,
c.paramSerializer(c.params));s&&(Q=J(Q,c.jsonpCallbackParam));n.pendingRequests.push(c);L.then(u,u);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=F(c.cache)?c.cache:F(a.cache)?a.cache:O);N&&(G=N.get(Q),v(G)?G&&y(G.then)?G.then(K,K):C(G)?p(G[1],G[0],ra(G[2]),G[3]):p(G,200,{},"OK"):N.put(Q,L));x(G)&&((G=sd(c.url)?e()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(T[c.xsrfHeaderName||a.xsrfHeaderName]=G),f(c.method,Q,d,l,T,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return L}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function J(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw td("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw td("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var O=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var u=[];q(d,function(a){u.unshift(E(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
function(a){n[a]=function(b,c){return n(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Cf(){this.$get=function(){return function(){return new z.XMLHttpRequest}}}function Bf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return rg(a,c,a.defer,b,d[0])}]}function rg(a,b,d,c,f){function e(a,
b,d){a=a.replace("JSON_CALLBACK",b);var e=f.createElement("script"),m=null;e.type="text/javascript";e.src=a;e.async=!0;m=function(a){e.removeEventListener("load",m);e.removeEventListener("error",m);f.body.removeChild(e);e=null;var g=-1,r="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),r=a.type,g="error"===a.type?404:200);d&&d(g,r)};e.addEventListener("load",m);e.addEventListener("error",m);f.body.appendChild(e);return m}return function(f,h,k,l,m,n,p,r,J,O){function u(){U&&U();t&&
t.abort()}h=h||a.url();if("jsonp"===P(f))var H=c.createCallback(h),U=e(h,H,function(a,b){var e=200===a&&c.getResponse(H);v(A)&&d.cancel(A);U=t=null;l(a,e,"",b);c.removeCallback(H)});else{var t=b(f,h);t.open(f,h,!0);q(m,function(a,b){v(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"===Da(h).protocol?404:0);var e=t.getAllResponseHeaders();v(A)&&d.cancel(A);U=t=null;l(c,b,e,a)};f=
function(){v(A)&&d.cancel(A);U=t=null;l(-1,null,null,"")};t.onerror=f;t.onabort=f;t.ontimeout=f;q(J,function(a,b){t.addEventListener(b,a)});q(O,function(a,b){t.upload.addEventListener(b,a)});p&&(t.withCredentials=!0);if(r)try{t.responseType=r}catch(s){if("json"!==r)throw s;}t.send(x(k)?null:k)}if(0<n)var A=d(u,n);else n&&y(n.then)&&n.then(u)}}function wf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,f){function e(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(e,k,n,p){function H(a){try{var b=a;a=n?f.getTrusted(n,b):f.valueOf(b);return p&&!v(a)?a:Yb(a)}catch(d){c(Ea.interr(e,d))}}if(!e.length||-1===e.indexOf(a)){var q;k||(k=g(e),q=ma(k),q.exp=e,q.expressions=[],q.$$watchDelegate=h);return q}p=!!p;var t,s,A=0,K=[],I=[];q=e.length;for(var B=[],L=[];A<q;)if(-1!==(t=e.indexOf(a,
A))&&-1!==(s=e.indexOf(b,t+l)))A!==t&&B.push(g(e.substring(A,t))),A=e.substring(t+l,s),K.push(A),I.push(d(A,H)),A=s+m,L.push(B.length),B.push("");else{A!==q&&B.push(g(e.substring(A)));break}n&&1<B.length&&Ea.throwNoconcat(e);if(!k||K.length){var N=function(a){for(var b=0,c=K.length;b<c;b++){if(p&&x(a[b]))return;B[L[b]]=a[b]}return B.join("")};return R(function(a){var b=0,d=K.length,f=Array(d);try{for(;b<d;b++)f[b]=I[b](a);return N(f)}catch(g){c(Ea.interr(e,g))}},{exp:e,expressions:K,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(I,function(d,e){var f=N(d);y(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,e),"g"),p=new RegExp(b.replace(/./g,e),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function xf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,f){function e(e,k,l,m){function n(){p?e.apply(null,r):e(u)}var p=4<arguments.length,r=p?wa.call(arguments,4):[],J=b.setInterval,q=b.clearInterval,
u=0,H=v(m)&&!m,U=(H?c:d).defer(),t=U.promise;l=v(l)?l:0;t.$$intervalId=J(function(){H?f.defer(n):a.$evalAsync(n);U.notify(u++);0<l&&u>=l&&(U.resolve(u),q(t.$$intervalId),delete g[t.$$intervalId]);H||a.$apply()},k);g[t.$$intervalId]=U;return t}var g={};e.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(w),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return e}]}function lc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
db(a[b]);return a.join("/")}function ud(a,b){var d=Da(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||sg[d.protocol]||null}function vd(a,b){if(tg.test(a))throw lb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Da(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Lc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function mc(a,b){return a.slice(0,b.length)===
b}function sa(a,b){if(mc(b,a))return b.substr(a.length)}function Ba(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function mb(a){return a.replace(/(#.+)|#$/,"$1")}function nc(a,b,d){this.$$html5=!0;d=d||"";ud(a,this);this.$$parse=function(a){var d=sa(b,a);if(!E(d))throw lb("ipthprfx",a,b);vd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Xb(this.$$search),d=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+
this.$$url.substr(1)};this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;v(e=sa(a,c))?(g=e,g=d&&v(e=sa(d,e))?b+(sa("/",e)||e):a+g):v(e=sa(b,c))?g=b+e:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function oc(a,b,d){ud(a,this);this.$$parse=function(c){var f=sa(a,c)||sa(b,c),e;x(f)||"#"!==f.charAt(0)?this.$$html5?e=f:(e="",x(f)&&(a=c,this.replace())):(e=sa(d,f),x(e)&&(e=f));vd(e,this);c=this.$$path;var f=a,g=/^\/[A-Z]:(\/.*)/;mc(e,f)&&(e=e.replace(f,""));g.exec(e)||
(c=(e=g.exec(c))?e[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Xb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ba(a)===Ba(b)?(this.$$parse(b),!0):!1}}function wd(a,b,d){this.$$html5=!0;oc.apply(this,arguments);this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;a===Ba(c)?e=c:(g=sa(b,c))?e=a+d+g:b===
c+"/"&&(e=b);e&&this.$$parse(e);return!!e};this.$$compose=function(){var b=Xb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+d+this.$$url}}function Jb(a){return function(){return this[a]}}function xd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Ef(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return v(b)?(a=b,this):a};this.html5Mode=function(a){if(Ia(a))return b.enabled=
a,this;if(F(a)){Ia(a.enabled)&&(b.enabled=a.enabled);Ia(a.requireBase)&&(b.requireBase=a.requireBase);if(Ia(a.rewriteLinks)||E(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,f,e,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();
var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw lb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=f.history?nc:wd}else p=Ba(n),m=oc;var r=p.substr(0,Ba(p).lastIndexOf("/")+1);l=new m(p,r,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var J=/^\s*(javascript|mailto):/i;e.on("click",function(a){var f=b.rewriteLinks;if(f&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=D(a.target);"a"!==xa(h[0]);)if(h[0]===e[0]||!(h=h.parent())[0])return;if(!E(f)||
!x(h.attr(f))){var f=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");F(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=Da(f.animVal).href);J.test(f)||!f||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(f,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});mb(l.absUrl())!==mb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){mc(a,r)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=mb(a);l.$$parse(a);l.$$state=
b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){var a=mb(c.url()),b=mb(l.absUrl()),e=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&f.history&&e!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,e).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=e):(m&&h(b,g,e===l.$$state?
null:l.$$state),k(a,e)))});l.$$replace=!1});return l}]}function Ff(){var a=!0,b=this;this.debugEnabled=function(b){return v(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function f(a){var b=d.console||{},f=b[a]||b.log||w;a=!1;try{a=!!f.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});
return f.apply(b,a)}:function(a,b){f(a,null==b?"":b)}}return{log:f("log"),info:f("info"),warn:f("warn"),error:f("error"),debug:function(){var c=f("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function ug(a){return a+""}function vg(a,b){return"undefined"!==typeof a?a:b}function yd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function V(a,b){var d,c,f;switch(a.type){case s.Program:d=!0;q(a.body,function(a){V(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;
case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:V(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:V(a.test,b);V(a.alternate,b);V(a.consequent,
b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:V(a.object,b);a.computed&&V(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=f=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=f?c:[a];
break;case s.AssignmentExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){V(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=
!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function zd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Ad(a){return a.type===s.Identifier||a.type===s.MemberExpression}function Bd(a){if(1===a.body.length&&Ad(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function Cd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===
s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function Dd(a,b){this.astBuilder=a;this.$filter=b}function Ed(a,b){this.astBuilder=a;this.$filter=b}function pc(a){return y(a.valueOf)?a.valueOf():wg.call(a)}function Gf(){var a=W(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(f){function e(a,b){return null==
a||null==b?a===b:"object"===typeof a&&(a=pc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function g(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,k)||(h=d(a,void 0,void 0,[b]),k=b&&pc(b));return h},b,c,f)}for(var l=[],m=[],n=0,I=g.length;n<I;n++)l[n]=e,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c])))m[c]=k,l[c]=k&&pc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,f)}function h(a,
b,c,d,e){function f(a){return d(a)}function h(a,c,d){l=a;y(b)&&b(a,c,d);v(a)&&d.$$postDigest(function(){v(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a,b,c,d){function e(a){var b=!0;q(a,function(a){v(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;y(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=
a.$$watchDelegate,d=!1,c=c!==k&&c!==h?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return v(e)?c:e},d=!a.inputs;a.$$watchDelegate&&a.$$watchDelegate!==g?(c.$$watchDelegate=a.$$watchDelegate,c.inputs=a.inputs):b.$stateful||(c.$$watchDelegate=g,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:za().noUnsafeEval,literals:Fa(b),isIdentifierStart:y(d)&&d,isIdentifierContinue:y(c)&&c};return function(b,c){var d,e,u;switch(typeof b){case "string":return u=
b=b.trim(),d=a[u],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(e=!0,b=b.substring(2)),d=new qc(n),d=(new rc(d,f,n)).parse(b),d.constant?d.$$watchDelegate=l:e?d.$$watchDelegate=d.literal?k:h:d.inputs&&(d.$$watchDelegate=g),a[u]=d),m(d,c);case "function":return m(b,c);default:return m(w,c)}}}]}function If(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Fd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Jf(){var a=
!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Fd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Fd(a,b,d){function c(){return new f}function f(){var a=this.promise=new e;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function e(){this.$$state={status:0}}function g(){for(;!v&&t.length;){var a=t.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):x(c)?"undefined":"string"!==typeof c?we(c):c);a.value instanceof Error?b(a.value,c):b(c)}}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===v&&0===t.length&&a(g),t.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++v,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{y(c)?k(e,c(b.value)):1===b.status?k(e,b.value):m(e,
b.value)}catch(n){m(e,n)}}}finally{--v,d&&0===v&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?n(a,H("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(F(b)||y(b))f=b.then;y(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=
c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,y(a)?a(d):d)}catch(h){b(h)}}})}function r(a){var b=new e;m(b,a);return b}function J(a,b,c){var d=null;try{y(c)&&(d=c())}catch(e){return r(e)}return d&&y(d.then)?d.then(function(){return b(a)},r):b(a)}function s(a,b,c,d){var f=new e;k(f,a);return f.then(b,c,d)}function u(a){if(!y(a))throw H("norslvr",a);var b=new e;a(function(a){k(b,a)},function(a){m(b,a)});return b}var H=
M("$q",TypeError),v=0,t=[];R(e.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new e;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return J(b,w,a)},function(b){return J(b,r,a)},b)}});var w=s;u.prototype=e.prototype;u.defer=c;u.reject=r;u.when=s;u.resolve=w;u.all=function(a){var b=new e,c=0,d=C(a)?
[]:{};q(a,function(a,e){c++;s(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};u.race=function(a){var b=c();q(a,function(a){s(a).then(b.resolve,b.reject)});return b.promise};return u}function Sf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,f=!!d,e=f?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
b(a,16.66,!1);return function(){b.cancel(c)}};e.supported=f;return e}]}function Hf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++rb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=M("$rootScope"),c=null,f=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(e,g,h){function k(a){a.currentScope.$$destroyed=
!0}function l(a){9===La&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++rb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(H.$$phase)throw d("inprog",
H.$$phase);H.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function r(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function J(){}function s(){for(;ia.length;)try{ia.shift()()}catch(a){e(a)}f=null}function u(){null===f&&(f=h.defer(function(){H.$apply(s)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:J,get:f,exp:e||a,eq:!!d};c=null;y(b)||(l.fn=w);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;p(this,1);return function(){var a=$a(k,l);0<=a&&(p(h,-1),
a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(F(e))if(ta(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},u=0,l++);a=0;for(b in e)va.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)va.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(F(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)va.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,r,u=b,q,w=[],x,ia;n("$digest");h.$$checkUrlChange();this===H&&null!==f&&(h.defer.cancel(f),s());c=null;do{r=!1;q=this;for(p=0;p<v.length;p++){try{ia=v[p],ia.scope.$eval(ia.expression,ia.locals)}catch(z){e(z)}c=null}v.length=0;a:do{if(p=q.$$watchers)for(p.$$digestWatchIndex=
p.length;p.$$digestWatchIndex--;)try{if(a=p[p.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?qa(g,k):ga(g)&&ga(k)))r=!0,c=a,a.last=a.eq?Fa(g,null):g,l=a.fn,l(g,k===J?g:k,q),5>u&&(x=4-u,w[x]||(w[x]=[]),w[x].push({msg:y(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(D){e(D)}if(!(p=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(p=q.$$nextSibling);)q=q.$parent}while(q=p);if((r||v.length)&&!u--)throw H.$$phase=
null,d("infdig",b,w);}while(r||v.length);for(H.$$phase=null;A<t.length;)try{t[A++]()}catch(E){e(E)}t.length=A=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===H&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)r(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){H.$$phase||v.length||h.defer(function(){v.length&&H.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){t.push(a)},$apply:function(a){try{n("$apply");
try{return this.$eval(a)}finally{H.$$phase=null}}catch(b){e(b)}finally{try{H.$digest()}catch(c){throw e(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&ia.push(b);a=g(a);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,r(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,
g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},
defaultPrevented:!1};if(!this.$$listenerCount[a])return f;for(var g=ab([f],arguments,1),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var H=new m,v=H.$$asyncQueue=[],t=H.$$postDigestQueue=[],ia=H.$$applyAsyncQueue=[],A=0;return H}]}function ze(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};this.$get=function(){return function(d,c){var f=c?b:a,e;e=Da(d).href;return""===e||e.match(f)?d:"unsafe:"+e}}}function xg(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw ua("iwcard",a);a=Gd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ua("imatcher");}function Hd(a){var b=[];v(a)&&q(a,function(a){b.push(xg(a))});return b}function Lf(){this.SCE_CONTEXTS=pa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Hd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Hd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?sd(b):!!a.exec(b.href)}function f(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};d.has("$sanitize")&&(e=d.get("$sanitize"));var g=f(),h={};h[pa.HTML]=f(g);h[pa.CSS]=f(g);h[pa.URL]=f(g);h[pa.JS]=f(g);h[pa.RESOURCE_URL]=f(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||x(b)||
""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||x(f)||""===f)return f;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&f instanceof g)return f.$$unwrapTrustedValue();if(d===pa.RESOURCE_URL){var g=Da(f.toString()),n,p,r=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){r=!0;break}if(r)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){r=!1;break}if(r)return f;throw ua("insecurl",f.toString());}if(d===pa.HTML)return e(f);throw ua("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function Kf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>La)throw ua("iequirks");var c=ra(pa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var f=c.parseAs,
e=c.getTrusted,g=c.trustAs;q(pa,function(a,b){var d=P(b);c[("parse_as_"+d).replace(sc,gb)]=function(b){return f(a,b)};c[("get_trusted_"+d).replace(sc,gb)]=function(b){return e(a,b)};c[("trust_as_"+d).replace(sc,gb)]=function(b){return g(a,b)}});return c}]}function Mf(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,f=Z((/android (\d+)/.exec(P((a.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>f||e),hasEvent:function(a){if("input"===a&&La)return!1;if(x(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:za(),transitions:k,animations:l,android:f}}]}function Of(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler",
"$templateCache","$http","$q","$sce",function(b,d,c,f,e){function g(h,k){g.totalPendingRequests++;if(!E(h)||x(d.get(h)))h=e.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;C(l)?l=l.filter(function(a){return a!==jc}):l===jc&&(l=null);return c.get(h,R({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=yg("tpload",h,a.status,a.statusText),b(a));return f.reject(a)})}g.totalPendingRequests=
0;return g}]}function Pf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=$.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Gd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');
if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Qf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,f){function e(e,k,l){y(e)||(l=k,k=e,e=w);var m=wa.call(arguments,3),n=v(l)&&!l,p=(n?c:d).defer(),r=p.promise,q;q=b.defer(function(){try{p.resolve(e.apply(null,m))}catch(b){p.reject(b),f(b)}finally{delete g[r.$$timeoutId]}n||
a.$apply()},k);r.$$timeoutId=q;g[q]=p;return r}var g={};e.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(w),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return e}]}function Da(a){La&&(ca.setAttribute("href",a),a=ca.href);ca.setAttribute("href",a);return{href:ca.href,protocol:ca.protocol?ca.protocol.replace(/:$/,""):"",host:ca.host,search:ca.search?ca.search.replace(/^\?/,""):"",hash:ca.hash?ca.hash.replace(/^#/,""):
"",hostname:ca.hostname,port:ca.port,pathname:"/"===ca.pathname.charAt(0)?ca.pathname:"/"+ca.pathname}}function sd(a){a=E(a)?Da(a):a;return a.protocol===Id.protocol&&a.host===Id.host}function Rf(){this.$get=ma(z)}function Jd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},f="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==f)for(f=a,a=f.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&
(c[l]=b(g.substring(k+1))));return c}}function Vf(){this.$get=Jd}function Xc(a){function b(d,c){if(F(d)){var f={};q(d,function(a,c){f[c]=b(c,a)});return f}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Kd);b("date",Ld);b("filter",zg);b("json",Ag);b("limitTo",Bg);b("lowercase",Cg);b("number",Md);b("orderBy",Nd);b("uppercase",Dg)}function zg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw M("filter")("notarray",
a);}c=c||"$";var f;switch(tc(b)){case "function":break;case "boolean":case "null":case "number":case "string":f=!0;case "object":b=Eg(b,d,c,f);break;default:return a}return Array.prototype.filter.call(a,b)}}function Eg(a,b,d,c){var f=F(a)&&d in a;!0===b?b=qa:y(b)||(b=function(a,b){if(x(a))return!1;if(null===a||null===b)return a===b;if(F(b)||F(a)&&!Vb(a))return!1;a=P(""+a);b=P(""+b);return-1!==a.indexOf(b)});return function(e){return f&&!F(e)?Ha(e,a[d],b,d,!1):Ha(e,a,b,d,c)}}function Ha(a,b,d,c,f,
e){var g=tc(a),h=tc(b);if("string"===h&&"!"===b.charAt(0))return!Ha(a,b.substring(1),d,c,f);if(C(a))return a.some(function(a){return Ha(a,b,d,c,f)});switch(g){case "object":var k;if(f){for(k in a)if("$"!==k.charAt(0)&&Ha(a[k],b,d,c,!0))return!0;return e?!1:Ha(a,b,d,c,!1)}if("object"===h){for(k in b)if(e=b[k],!y(e)&&!x(e)&&(g=k===c,!Ha(g?a:a[k],e,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function tc(a){return null===a?"null":typeof a}function Kd(a){var b=
a.NUMBER_FORMATS;return function(a,c,f){x(c)&&(c=b.CURRENCY_SYM);x(f)&&(f=b.PATTERNS[1].maxFrac);return null==a?a:Od(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,f).replace(/\u00A4/g,c)}}function Md(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Od(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Fg(a){var b=0,d,c,f,e,g;-1<(c=a.indexOf(Pd))&&(a=a.replace(Pd,""));0<(f=a.search(/e/i))?(0>c&&(c=f),c+=+a.slice(f+1),a=a.substring(0,f)):0>c&&(c=a.length);for(f=0;a.charAt(f)===uc;f++);
if(f===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===uc;)g--;c-=f;d=[];for(e=0;f<=g;f++,e++)d[e]=+a.charAt(f)}c>Qd&&(d=d.splice(0,Qd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Gg(a,b,d,c){var f=a.d,e=f.length-a.i;b=x(b)?Math.min(Math.max(d,e),c):+b;d=b+a.i;c=f[d];if(0<d){f.splice(Math.max(a.i,d));for(var g=d;g<f.length;g++)f[g]=0}else for(e=Math.max(0,e),a.i=1,f.length=Math.max(1,d=b+1),f[0]=0,g=1;g<d;g++)f[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)f.unshift(0),a.i++;f.unshift(1);a.i++}else f[d-
1]++;for(;e<Math.max(0,b);e++)f.push(0);if(b=f.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))f.unshift(b),a.i++}function Od(a,b,d,c,f){if(!E(a)&&!Y(a)||isNaN(a))return"";var e=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(e)k="\u221e";else{g=Fg(h);Gg(g,f,b.minFrac,b.maxFrac);k=g.d;h=g.i;f=g.e;e=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?e=k.splice(h,k.length):(e=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);e.length&&(k+=c+e.join(""));f&&(k+="e+"+f)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var f="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,f="-");for(a=""+a;a.length<b;)a=uc+a;d&&(a=a.substr(a.length-b));return f+a}function aa(a,b,d,c,f){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12===d&&(e=12);return Kb(e,b,c,f)}}function nb(a,b,d){return function(c,f){var e=
c["get"+a](),g=vb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return f[g][e]}}function Rd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Sd(a){return function(b){var d=Rd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function vc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Ld(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var e=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(e=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));e=Z(b[4]||0)-e;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,e,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,e){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=Hg.test(c)?Z(c):b(c));Y(c)&&(c=new Date(c));if(!fa(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=Ig.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();e&&(m=Jc(e,m),c=Wb(c,e,!0));q(h,function(b){k=Jg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ag(){return function(a,b){x(b)&&(b=2);return cb(a,b)}}function Bg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(ga(b))return a;Y(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?wc(a,d,d+b):0===d?wc(a,b,a.length):wc(a,Math.max(0,d+b),d)}}function wc(a,b,d){return E(a)?a.slice(b,d):wa.call(a,b,d)}function Nd(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(y(b))d=b;else if(E(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var f=d(),d=function(a){return a[f]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(F(k)&&(k=a.index),F(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,e,g,h){if(null==a)return a;if(!ta(a))throw M("orderBy")("notarray",a);C(e)||(e=[e]);0===e.length&&(e=["+"]);var k=b(e),l=g?-1:1,m=y(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(y(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Vb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ra(a){y(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ma(a)}function Lb(a,b,d,
c,f){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=f(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Mb;this.$$element=a;this.$$animate=c;Td(this)}function Td(a){a.$$classCache={};a.$$classCache[Ud]=!(a.$$classCache[ob]=a.$$element.hasClass(ob))}function Vd(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,
b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Nc(c,"-"):"";b(a,ob+c,!0===d);b(a,Ud+c,!1===d)}var c=a.set,f=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){x(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&f(this.$pending,a,h),Wd(this.$pending)&&(this.$pending=void 0));Ia(g)?g?(f(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),f(this.$$success,a,h)):(f(this.$error,a,h),f(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=
void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=Wd(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function Wd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function xc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,f,e){var g=P(b[0].type);if(!f.android){var h=!1;b.on("compositionstart",
function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(e.defer.cancel(k),k=null);if(!h){var f=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(f=S(f));(c.$viewValue!==f||""===f&&c.$$hasNativeValidators)&&c.$setViewValue(f,a)}};if(f.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=e.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(f.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",l);if(Xd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=e.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var f,e;if(fa(d))return d;if(E(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Kg.test(d))return new Date(d);
a.lastIndex=0;if(f=a.exec(d))return f.shift(),e=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(f,function(a,c){c<b.length&&(e[b[c]]=+a)}),new Date(e.yyyy,e.MM-1,e.dd,e.HH,e.mm,e.ss||0,1E3*e.sss||0)}return NaN}}function pb(a,b,d,c){return function(f,e,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return v(a)&&!fa(a)?d(a)||
void 0:a}yc(f,e,g,h);Sa(f,e,g,h,k,l);var r=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),r&&(a=Wb(a,r)),a});h.$formatters.push(function(a){if(a&&!fa(a))throw qb("datefmt",a);if(n(a))return(q=a)&&r&&(q=Wb(q,r,!0)),m("date")(a,c,r);q=null;return""});if(v(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||x(s)||d(a)>=s};g.$observe("min",function(a){s=p(a);h.$validate()})}if(v(g.max)||g.ngMax){var u;
h.$validators.max=function(a){return!n(a)||x(u)||d(a)<=u};g.$observe("max",function(a){u=p(a);h.$validate()})}}}function yc(a,b,d,c){(c.$$hasNativeValidators=F(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Yd(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Lg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Y(b))throw qb("numfmt",b);b=b.toString()}return b})}
function Ta(a){v(a)&&!Y(a)&&(a=parseFloat(a));return ga(a)?void 0:a}function zc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function Zd(a,b,d){a=Number(a);if((a|0)!==a||(b|0)!==b||(d|0)!==d){var c=Math.max(zc(a),zc(b),zc(d)),c=Math.pow(10,c);a*=c;b*=c;d*=c}return 0===(a-b)%d}function $d(a,b,d,c,f){if(v(c)){a=a(c);if(!a.constant)throw qb("constexpr",d,c);return a(b)}return f}function Ac(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;c.push(e)}return c}function c(a){var b=a;C(a)?b=a.map(c).join(" "):F(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function f(a){var b=a;if(C(a))b=a.map(f);else if(F(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&x(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var e;return["$parse",function(g){return{restrict:"AC",link:function(h,
k,l){function m(a,b){var c=[];q(a,function(a){if(0<b||H[a])H[a]=(H[a]||0)+b,H[a]===+(0<b)&&c.push(a)});return c.join(" ")}function n(a){if(a===b){var c=t,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=t,c=m(c&&c.split(" "),-1),l.$removeClass(c);w=a}function p(a){a=c(a);a!==t&&r(a)}function r(a){if(w===b){var c=t&&t.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=m(f,-1),c=m(c,1);l.$addClass(c);l.$removeClass(f)}t=a}var s=l[a].trim(),v=":"===s.charAt(0)&&":"===s.charAt(1),s=g(s,v?f:c),u=v?p:r,H=k.data("$classCounts"),
w=!0,t;H||(H=W(),k.data("$classCounts",H));"ngClass"!==a&&(e||(e=g("$index",function(a){return a&1})),h.$watch(e,n));h.$watch(s,u,v)}}}]}function Ob(a,b,d,c,f,e,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;
this.$name=k(d.name||"",!1)(a);this.$$parentForm=Mb;this.$options=Pb;this.$$parsedNgModel=f(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;this.$$scope=a;this.$$attr=d;this.$$element=c;this.$$animate=e;this.$$timeout=g;this.$$parse=f;this.$$q=h;this.$$exceptionHandler=b;Td(this);Mg(this)}function Mg(a){a.$$scope.$watch(function(){var b=
a.$$ngModelGet(a.$$scope);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,f=b;c--;)f=d[c](f);a.$viewValue!==f&&(a.$$updateEmptyClasses(f),a.$viewValue=a.$$lastCommittedViewValue=f,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,w))}return b})}function Bc(a){this.$$options=a}function ae(a,b){q(b,function(b,c){v(a[c])||(a[c]=b)})}var Ng=/^\/(.+)\/([a-z]*)$/,va=Object.prototype.hasOwnProperty,
P=function(a){return E(a)?a.toLowerCase():a},vb=function(a){return E(a)?a.toUpperCase():a},La,D,oa,wa=[].slice,ng=[].splice,Og=[].push,na=Object.prototype.toString,Gc=Object.getPrototypeOf,Ga=M("ng"),$=z.angular||(z.angular={}),Zb,rb=0;La=z.document.documentMode;var ga=Number.isNaN||function(a){return a!==a};w.$inject=[];Ya.$inject=[];var C=Array.isArray,le=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,S=function(a){return E(a)?a.trim():a},Gd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},za=function(){if(!v(za.rules)){var a=z.document.querySelector("[ng-csp]")||z.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");za.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=za;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return za.rules},sb=function(){if(v(sb.name_))return sb.name_;var a,b,d=Ka.length,
c,f;for(b=0;b<d;++b)if(c=Ka[b],a=z.document.querySelector("["+c.replace(":","\\:")+"jq]")){f=a.getAttribute(c+"jq");break}return sb.name_=f},ne=/:/g,Ka=["ng-","data-ng-","ng:","x-ng-"],qe=function(a){if(!a.currentScript)return!0;var b=a.currentScript.getAttribute("src"),d=a.createElement("a");d.href=b;if(a.location.origin===d.origin)return!0;switch(d.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}}(z.document),te=/[A-Z]/g,Oc=!1,Ja=
3,ye={full:"1.6.1",major:1,minor:6,dot:1,codeName:"promise-rectification"};X.expando="ng339";var ib=X.cache={},$f=1;X._data=function(a){return this.cache[a[this.expando]]||{}};var Wf=/-([a-z])/g,Pg=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},ac=M("jqLite"),Zf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,$b=/<|&#?\w+;/,Xf=/<([\w:-]+)/,Yf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],
col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var eg=z.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=X.prototype={ready:$c,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?D(this[a]):D(this[this.length+
a])},length:0,push:Og,sort:[].sort,splice:[].splice},Gb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Gb[P(a)]=a});var ed={};q("input select option textarea button form details".split(" "),function(a){ed[a]=!0});var ld={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};q({data:dc,removeData:hb,hasData:function(a){for(var b in ib[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<
d;b++)hb(a[b])}},function(a,b){X[b]=a});q({data:dc,inheritedData:Eb,scope:function(a){return D.data(a,"$scope")||Eb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return D.data(a,"$isolateScope")||D.data(a,"$isolateScopeNoTemplate")},controller:bd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(Pg,"ms-"));if(v(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;
if(c!==Ja&&2!==c&&8!==c&&a.getAttribute){var c=P(b),f=Gb[c];if(v(d))null===d||!1===d&&f?a.removeAttribute(b):a.setAttribute(b,f?c:d);else return a=a.getAttribute(b),f&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(v(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Ja?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===xa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||
a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},empty:cd},function(a,b){X.prototype[b]=function(b,c){var f,e,g=this.length;if(a!==cd&&x(2===a.length&&a!==Bb&&a!==bd?b:c)){if(F(b)){for(f=0;f<g;f++)if(a===dc)a(this[f],b);else for(e in b)a(this[f],e,b[e]);return this}f=a.$dv;g=x(f)?Math.min(g,1):g;for(e=0;e<g;e++){var h=a(this[e],b,c);f=f?f+h:h}return f}for(f=0;f<g;f++)a(this[f],b,c);return this}});q({removeData:hb,on:function(a,b,d,
c){if(v(c))throw ac("onargs");if(Yc(a)){c=zb(a,!0);var f=c.events,e=c.handle;e||(e=c.handle=bg(a,f));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=f[b];h||(h=f[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,e));h.push(d)};g--;)b=c[g],Ab[b]?(h(Ab[b],dg),h(b,void 0,!0)):h(b)}},off:ad,one:function(a,b,d){a=D(a);a.on(b,function f(){a.off(b,d);a.off(b,f)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);q(new X(b),function(b){d?
c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new X(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new X(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=D(b).eq(0).clone()[0],c=a.parentNode;
c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new X(b);for(var f=0,e=b.length;f<e;f++){var g=b[f];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var f=d;x(f)&&(f=!Bb(a,b));(f?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?
a.getElementsByTagName(b):[]},clone:cc,triggerHandler:function(a,b,d){var c,f,e=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&g[e])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:w,type:e,target:a},b.type&&(c=R(c,b)),b=ra(g),f=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||
b.apply(a,f)})}},function(a,b){X.prototype[b]=function(b,c,f){for(var e,g=0,h=this.length;g<h;g++)x(e)?(e=a(this[g],b,c,f),v(e)&&(e=D(e))):bc(e,a(this[g],b,c,f));return v(e)?e:this}});X.prototype.bind=X.prototype.on;X.prototype.unbind=X.prototype.off;Qa.prototype={put:function(a,b){this[la(a,this.nextUid)]=b},get:function(a){return this[la(a,this.nextUid)]},remove:function(a){var b=this[a=la(a,this.nextUid)];delete this[a];return b}};var Uf=[function(){this.$get=[function(){return Qa}]}],gg=/^([^(]+?)=>/,
hg=/^[^(]*\(\s*([^)]*)\)/m,Qg=/,/,Rg=/^\s*(_?)(\S+?)\1\s*$/,fg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,da=M("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&d||(d=a.name||ig(a)),da("strictdi",d);b=fd(a);q(b[1].split(Qg),function(a){a.replace(Rg,function(a,b,d){c.push(d)})})}a.$inject=c}}else C(a)?(b=a.length-1,tb(a[b],"fn"),c=a.slice(0,b)):tb(a,"fn",!0);return c};var be=M("$animate"),lf=function(){this.$get=w},mf=function(){var a=
new Qa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function f(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):C(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function e(){q(b,function(b){var c=a.get(b);if(c){var d=jg(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.remove(b)}});b.length=0}return{enabled:w,on:w,off:w,pin:w,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=f(k,h,!0),l=f(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(e);g=new d;g.complete();return g}}}]},jf=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw be("notcsel",d);var f=d+"-animation";b.$$registeredAnimations[d.substr(1)]=f;a.factory(f,c)};this.classNameFilter=function(a){if(1===arguments.length&&
(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw be("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},
enter:function(f,e,g,h){e=e&&D(e);g=g&&D(g);e=e||g.parent();b(f,e,g);return a.push(f,"enter",Aa(h))},move:function(f,e,g,h){e=e&&D(e);g=g&&D(g);e=e||g.parent();b(f,e,g);return a.push(f,"move",Aa(h))},leave:function(b,c){return a.push(b,"leave",Aa(c),function(){b.remove()})},addClass:function(b,c,g){g=Aa(g);g.addClass=jb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Aa(g);g.removeClass=jb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Aa(h);
h.addClass=jb(h.addClass,c);h.removeClass=jb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Aa(k);k.from=k.from?R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=jb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],of=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},nf=function(){this.$get=
["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,f){function e(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?f(a,0,!1):b(a)};this._state=0}e.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};e.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};e.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===
this._state?a():this._doneCallbacks.push(a)},progress:w,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return e}]},kf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,f){function e(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=f||{};g.$$prepared||(g=Fa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:e,end:e}}}]},ea=M("$compile"),hc=new function(){};Qc.$inject=["$provide","$$sanitizeUriProvider"];Ib.prototype.isFirstChange=function(){return this.previousValue===hc};var gd=/^((?:x|data)[:\-_])/i,mg=/[:\-_]+(.)/g,nd=M("$controller"),
md=/^(\S+)(\s+as\s+([\w$]+))?$/,vf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof D&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},od="application/json",kc={"Content-Type":od+";charset=utf-8"},pg=/^\[|^\{(?!\{)/,qg={"[":/]$/,"{":/}$/},og=/^\)]\}',?\n/,td=M("$http"),Ea=$.$interpolateMinErr=M("$interpolate");Ea.throwNoconcat=function(a){throw Ea("noconcat",a);};Ea.interr=function(a,b){return Ea("interr",a,b.toString())};var Df=function(){this.$get=["$window",
function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var e="angular.callbacks."+a,g=b(a);c[e]=d[a]=g;return e},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Sg=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,sg={http:80,https:443,ftp:21},lb=M("$location"),tg=/^\s*[\\/]{2,}/,Tg={$$absUrl:"",
$$html5:!1,$$replace:!1,absUrl:Jb("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=Sg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Jb("$$protocol"),host:Jb("$$host"),port:Jb("$$port"),path:xd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Y(a))a=a.toString(),this.$$search=
Lc(a);else if(F(a))a=Fa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw lb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:xd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([wd,oc,nc],function(a){a.prototype=Object.create(Tg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==nc||!this.$$html5)throw lb("nostate");this.$$state=
x(b)?null:b;return this}});var Ua=M("$parse"),wg={}.constructor.prototype.valueOf,Qb=W();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Qb[a]=!0});var Ug={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},qc=function(a){this.options=a};qc.prototype={constructor:qc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],f=Qb[d];Qb[a]||c||f?(a=f?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=v(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ua("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,f=!1;this.index<this.text.length;){var e=this.text.charAt(this.index),c=c+e;if(f)"u"===e?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Ug[e]||e,f=!1;else if("\\"===e)f=!0;else{if(e===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=e}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=
a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";
s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Ad(a))throw Ua("lval");a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Fa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw Ua("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ua("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ua("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,f){if(this.tokens.length>a){a=this.tokens[a];var e=a.text;if(e===b||e===d||e===c||e===f||!(b||d||c||f))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},
$locals:{type:s.LocalsExpression}}};Dd.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(a,b.$filter);var d="",c;this.stage="assign";if(c=Bd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=zd(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=
d;var h=b.nextId();b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);d='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";d=(new Function("$filter","getStringValue","ifDefined","plus",d))(this.$filter,ug,vg,yd);this.state=this.stage=void 0;d.literal=Cd(a);d.constant=a.constant;return d},USE:"use",STRICT:"strict",watchFns:function(){var a=[],
b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+
";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,f,e){var g,h,k=this,l,m,n;c=c||w;if(!e&&v(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,f,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);
break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,
b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&
1!==f&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),f&&1!==f&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
h),"{}")),m=k.computedMember(g,h),k.assign(b,m),d&&(d.computed=!0,d.name=h)):(f&&1!==f&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!f);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),
m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),
function(){k.recurse(a.right,h);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===
s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c(b||"s");break;case s.LocalsExpression:this.assign(b,"l");c(b||"l");break;case s.NGValueParameter:this.assign(b,"v"),c(b||
"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",
a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,
b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,f,e){var g=this;return function(){g.recurse(a,b,d,c,f,e)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Y(a))return a.toString();
if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ua("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Ed.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);V(a,b.$filter);var d,c;if(d=Bd(a))c=this.recurse(d);d=zd(a.body);var f;d&&(f=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;f.push(d);
a.watchId=c}));var e=[];q(a.body,function(a){e.push(b.recurse(a.expression))});d=0===a.body.length?w:1===a.body.length?e[0]:function(a,b){var c;q(e,function(d){c=d(a,b)});return c};c&&(d.assign=function(a,b,d){return c(a,d,b)});f&&(d.inputs=f);d.literal=Cd(a);d.constant=a.constant;return d},recurse:function(a,b,d){var c,f,e=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+
a.operator](f,b);case s.BinaryExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case s.LogicalExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return e.identifier(a.name,b,d);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(f=a.property.name),
a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(c,f,b,d):this.nonComputedMember(c,f,b,d);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(e.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,c,d,e){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,e));a=f.apply(void 0,n,e);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,e){var n=f(a,c,d,e),p;if(null!=n.value){p=[];for(var r=0;r<
g.length;++r)p.push(g[r](a,c,d,e));p=n.value.apply(n.context,p)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,e,g){var n=c(a,d,e,g);a=f(a,d,e,g);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(e.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?
g.push({key:e.recurse(a.key),computed:!0,value:e.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:e.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,
c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=v(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=v(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,f,e){d=!a(d,c,f,e);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=yd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);
h=(v(h)?h:0)-(v(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)*b(c,f,e,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)/b(c,f,e,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)%b(c,f,e,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)===b(c,f,e,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,f,e,g){c=a(c,
f,e,g)!==b(c,f,e,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)==b(c,f,e,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)!=b(c,f,e,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<b(c,f,e,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>b(c,f,e,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,
g)<=b(c,f,e,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>=b(c,f,e,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)&&b(c,f,e,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)||b(c,f,e,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h)?b(f,e,g,h):d(f,e,g,h);return c?{value:f}:f}},value:function(a,b){return function(){return b?{context:void 0,
name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,f,e,g){c=f&&a in f?f:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});f=c?c[a]:void 0;return b?{context:c,name:a,value:f}:f}},computedMember:function(a,b,d,c){return function(f,e,g,h){var k=a(f,e,g,h),l,m;null!=k&&(l=b(f,e,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h);c&&1!==c&&f&&null==f[b]&&(f[b]={});e=null!=f?f[b]:void 0;
return d?{context:f,name:b,value:e}:e}},inputs:function(a,b){return function(d,c,f,e){return e?e[b]:a(d,c,f)}}};var rc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new Ed(this.ast,b):new Dd(this.ast,b)};rc.prototype={constructor:rc,parse:function(a){return this.astCompiler.compile(a)}};var ua=M("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},sc=/_([a-z])/g,yg=M("$compile"),ca=z.document.createElement("a"),Id=
Da(z.location.href);Jd.$inject=["$document"];Xc.$inject=["$provide"];var Qd=22,Pd=".",uc="0";Kd.$inject=["$locale"];Md.$inject=["$locale"];var Jg={yyyy:aa("FullYear",4,0,!1,!0),yy:aa("FullYear",2,0,!0,!0),y:aa("FullYear",1,0,!1,!0),MMMM:nb("Month"),MMM:nb("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),LLLL:nb("Month",!1,!0),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",1),ss:aa("Seconds",2),s:aa("Seconds",
1),sss:aa("Milliseconds",3),EEEE:nb("Day"),EEE:nb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Sd(2),w:Sd(1),G:vc,GG:vc,GGG:vc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Ig=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Hg=/^-?\d+$/;Ld.$inject=["$locale"];var Cg=ma(P),Dg=ma(vb);Nd.$inject=
["$parse"];var Ae=ma({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===na.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(f)||a.preventDefault()})}}}}),wb={};q(Gb,function(a,b){function d(a,d,f){a.$watch(f[c],function(a){f.$set(b,!!a)})}if("multiple"!==a){var c=Ca("ng-"+b),f=d;"checked"===a&&(f=function(a,b,f){f.ngModel!==f[c]&&d(a,b,f)});wb[c]=function(){return{restrict:"A",
priority:100,link:f}}}});q(ld,function(a,b){wb[b]=function(){return{priority:100,link:function(a,c,f){if("ngPattern"===b&&"/"===f.ngPattern.charAt(0)&&(c=f.ngPattern.match(Ng))){f.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(f[b],function(a){f.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ca("ng-"+a);wb[b]=function(){return{priority:99,link:function(d,c,f){var e=a,g=a;"href"===a&&"[object SVGAnimatedString]"===na.call(c.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",
e=null);f.$observe(b,function(b){b?(f.$set(g,b),La&&e&&c.prop(e,f[g])):"href"===a&&f.$set(g,null)})}}}});var Mb={$addControl:w,$$renameControl:function(a,b){a.$name=b},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};Lb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Lb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Pa(a.$name,
"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);$a(this.$$controls,a);a.$$parentForm=Mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,
Va);this.$$animate.addClass(this.$$element,Rb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Va,Rb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};
Vd({clazz:Lb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&($a(c,d),0===c.length&&delete a[b])}});var ce=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||w}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Lb,compile:function(d,e){d.addClass(Va).addClass(ob);var g=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):w;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,void 0),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,void 0);R(n,Mb)})}}}}}]},Be=ce(),
Ne=ce(!0),Kg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Vg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Wg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Lg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,de=/^(\d{4,})-(\d{2})-(\d{2})$/,ee=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
Cc=/^(\d{4,})-W(\d\d)$/,fe=/^(\d{4,})-(\d\d)$/,ge=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Xd=W();q(["date","datetime-local","month","time","week"],function(a){Xd[a]=!0});var he={text:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c)},date:pb("date",de,Nb(de,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":pb("datetimelocal",ee,Nb(ee,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:pb("time",ge,Nb(ge,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:pb("week",Cc,function(a,b){if(fa(a))return a;
if(E(a)){Cc.lastIndex=0;var d=Cc.exec(a);if(d){var c=+d[1],f=+d[2],e=d=0,g=0,h=0,k=Rd(c),f=7*(f-1);b&&(d=b.getHours(),e=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+f,d,e,g,h)}}return NaN},"yyyy-Www"),month:pb("month",fe,Nb(fe,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,f,e){yc(a,b,d,c);Yd(c);Sa(a,b,d,c,f,e);var g,h;if(v(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||x(g)||a>=g},d.$observe("min",function(a){g=Ta(a);c.$validate()});
if(v(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h},d.$observe("max",function(a){h=Ta(a);c.$validate()});if(v(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||x(k)||Zd(b,g||0,k)};d.$observe("step",function(a){k=Ta(a);c.$validate()})}},url:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Vg.test(d)}},email:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c);c.$$parserName=
"email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Wg.test(d)}},radio:function(a,b,d,c){var f=!d.ngTrim||"false"!==S(d.ngTrim);x(d.name)&&b.attr("name",++rb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,f&&(g=S(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;f&&(a=S(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,f,e){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Ta(a);ga(c.$modelValue)||
(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=Ta(a);ga(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){r=Ta(a);ga(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}yc(a,b,d,c);Yd(c);Sa(a,b,d,c,f,e);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,r=m?1:void 0,q=b[0].validity;a=v(d.min);f=v(d.max);e=v(d.step);var s=c.$render;c.$render=m&&v(q.rangeUnderflow)&&
v(q.rangeOverflow)?function(){s();c.$setViewValue(b.val())}:s;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b>=n},g("min",h));f&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(p)||b<=p},g("max",k));e&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){return c.$isEmpty(b)||x(r)||Zd(b,n||0,r)},g("step",l))},checkbox:function(a,b,d,c,f,e,g,h){var k=$d(h,a,"ngTrueValue",d.ngTrueValue,!0),l=$d(h,a,"ngFalseValue",
d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return qa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:w,button:w,submit:w,reset:w,file:w},Rc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,e,g,h){h[0]&&(he[P(g.type)]||he.text)(f,e,g,h[0],b,a,d,c)}}}}],Xg=/^(true|false|\d+)$/,
ef=function(){return{restrict:"A",priority:100,compile:function(a,b){return Xg.test(b.ngValue)?function(a,b,f){a=a.$eval(f.ngValue);b.prop("value",a);f.$set("value",a)}:function(a,b,f){a.$watch(f.ngValue,function(a){b.prop("value",a);f.$set("value",a)})}}}},Fe=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,f){a.$$addBindingInfo(c,f.ngBind);c=c[0];b.$watch(f.ngBind,function(a){c.textContent=Yb(a)})}}}}],He=["$interpolate","$compile",function(a,
b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];e.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],Ge=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,f){var e=b(f.ngBindHtml),g=b(f.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,f){d.$$addBindingInfo(c,f.ngBindHtml);b.$watch(g,function(){var d=e(b);
c.html(a.getTrustedHtml(d)||"")})}}}}],df=ma({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ie=Ac("",!0),Ke=Ac("Odd",0),Je=Ac("Even",1),Le=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Me=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Wc={},Yg={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Ca("ng-"+a);Wc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(f,e){var g=d(e[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Yg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Pe=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,f,e,g){var h,k,l;d.$watch(f.ngIf,function(d){d?k||g(function(d,e){k=e;d[d.length++]=
b.$$createComment("end ngIf",f.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=ub(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Qe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,f){var e=f.ngInclude||f.src,g=f.onload||"",h=f.autoscroll;return function(c,f,m,n,p){var q=0,s,w,u,H=function(){w&&(w.remove(),
w=null);s&&(s.$destroy(),s=null);u&&(d.leave(u).done(function(a){!1!==a&&(w=null)}),w=u,u=null)};c.$watch(e,function(e){var m=function(a){!1===a||!v(h)||h&&!c.$eval(h)||b()},w=++q;e?(a(e,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();n.template=a;a=p(b,function(a){H();d.enter(a,null,f).done(m)});s=b;u=a;s.$emit("$includeContentLoaded",e);c.$eval(g)}},function(){c.$$destroyed||w!==q||(H(),c.$emit("$includeContentError",e))}),c.$emit("$includeContentRequested",e)):(H(),n.template=null)})}}}}],
gf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,f){na.call(d[0]).match(/SVG/)?(d.empty(),a(Zc(f.template,z.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(b))}}}],Re=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),cf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var f=d.ngList||", ",e="false"!==d.ngTrim,g=
e?S(f):f;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&q(a.split(g),function(a){a&&b.push(e?S(a):a)});return b}});c.$formatters.push(function(a){if(C(a))return a.join(f)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Ud="ng-invalid",Va="ng-pristine",Rb="ng-dirty",qb=M("ngModel");Ob.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=
this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);y(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){y(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw qb("nonassign",this.$$attr.ngModel,ya(this.$$element));},$render:w,$isEmpty:function(a){return x(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,
"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Rb);this.$$animate.addClass(this.$$element,Va)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Va);this.$$animate.addClass(this.$$element,Rb);this.$$parentForm.$setDirty()},
$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!ga(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,
d=this.$valid,c=this.$modelValue,f=this.$options.getOption("allowInvalid"),e=this;this.$$runValidators(b,a,function(a){f||d===a||(e.$modelValue=a?b:void 0,e.$modelValue!==c&&e.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,f){var g=Boolean(d(a,b));c=c&&g;e(f,g)});return c?!0:(q(k.$asyncValidators,function(a,b){e(b,null)}),!1)}function f(){var c=[],d=!0;q(k.$asyncValidators,function(f,g){var h=f(a,b);if(!h||!y(h.then))throw qb("nopromise",
h);e(g,void 0);c.push(h.then(function(){e(g,!0)},function(){d=!1;e(g,!1)}))});c.length?k.$$q.all(c).then(function(){g(d)},w):g(!0)}function e(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(x(k.$$parserValid))e(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){e(b,null)}),q(k.$asyncValidators,function(a,
b){e(b,null)})),e(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?f():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=x(a)?void 0:!0)for(var d=0;d<
this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break}ga(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,f=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;f&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){f||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");Y(b[a])?b=b[a]:Y(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})}};Vd({clazz:Ob,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var bf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ob,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,f,e){var g=e[0];b=e[1]||g.$$parentForm;if(e=e[2])g.$options=e.$options;g.$$initGetterSetters();b.$addControl(g);f.$observe("name",
function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,f,e){function g(){h.$setTouched()}var h=e[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Pb,Zg=/(\s+|^)default(\s+|$)/;Bc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
!1;a=R({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=S(d.replace(Zg,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ae(a,this.$$options));ae(a,Pb.$$options);return new Bc(a)}};Pb=new Bc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var ff=function(){function a(a,d){this.$$attrs=a;this.$$scope=
d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Pb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Se=Ra({terminal:!0,priority:1E3}),$g=M("ngOptions"),ah=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
$e=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(ah);if(!n)throw $g("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,u=s&&d(s),w=s?function(a,b){return u(c,b)}:function(a){return la(a)},
x=function(a,b){return w(a,B(a,b))},t=d(n[2]||n[1]),z=d(n[3]||""),A=d(n[4]||""),K=d(n[8]),I={},B=q?function(a,b){I[q]=b;I[p]=a;return I}:function(a){I[p]=a;return I};return{trackBy:s,getTrackByValue:x,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=B(l,h),l=w(l,h);b.push(l);if(n[2]||n[1])l=t(c,h),b.push(l);n[4]&&(h=A(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=B(d[p],p),r=v(c,q),p=w(r,q),u=t(c,q),I=z(c,q),q=A(c,q),r=new e(p,r,u,I,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return s?Fa(a.viewValue):a.viewValue}}}}}var f=z.document.createElement("option"),e=z.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=w},post:function(d,h,k,l){function m(a){var b=(a=t.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function p(){var a=t&&r.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];v(c.group)?Fb(c.element.parentNode):Fb(c.element)}t=y.getOptions();var d={};z&&h.prepend(r.emptyOption);t.items.forEach(function(a){var b;if(v(a.group)){b=d[a.group];b||(b=e.cloneNode(!1),A.appendChild(b),b.label=null===a.group?
"null":a.group,d[a.group]=b);var c=f.cloneNode(!1)}else b=A,c=f.cloneNode(!1);b.appendChild(c);n(a,c)});h[0].appendChild(A);s.$render();s.$isEmpty(a)||(b=r.readValue(),(y.trackBy||w?qa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],w=k.multiple;l=0;for(var u=h.children(),x=u.length;l<x;l++)if(""===u[l].value){r.hasEmptyOption=!0;r.emptyOption=u.eq(l);break}var z=!!r.emptyOption;D(f.cloneNode(!1)).val("?");var t,y=c(k.ngOptions,h,d),A=b[0].createDocumentFragment();r.generateUnknownOptionValue=
function(a){return"?"};w?(r.writeValue=function(a){var b=a&&a.map(m)||[];t.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},y.trackBy&&d.$watchCollection(function(){if(C(s.$viewValue))return s.$viewValue.map(function(a){return y.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=
function(a){var b=t.selectValueMap[h.val()],c=t.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(r.removeUnknownOption(),r.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):z?r.selectEmptyOption():r.unknownOption.parent().length?r.updateUnknownOption(a):r.renderUnknownOption(a)},r.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(r.unselectEmptyOption(),r.removeUnknownOption(),
t.getViewValueFromOption(a)):null},y.trackBy&&d.$watch(function(){return y.getTrackByValue(s.$viewValue)},function(){s.$render()}));z&&(r.emptyOption.remove(),a(r.emptyOption)(d),8===r.emptyOption[0].nodeType?(r.hasEmptyOption=!1,r.registerOption=function(a,b){""===b.val()&&(r.hasEmptyOption=!0,r.emptyOption=b,r.emptyOption.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){r.hasEmptyOption=!1;r.emptyOption=void 0}))}):r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(y.getWatchables,
p)}}}}],Te=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(e,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=e.$eval(m)||{},r={},s=b.startSymbol(),v=b.endSymbol(),u=s+l+"-"+n+v,H=$.noop,y;q(h,function(a,b){var c=f.exec(b);c&&(c=(c[1]?"-":"")+P(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,u))});e.$watch(l,function(b){var c=parseFloat(b),f=ga(c);f||c in p||(c=a.pluralCat(c-
n));c===y||f&&ga(y)||(H(),f=r[c],x(f)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),H=w,k()):H=e.$watch(f,k),y=c)})}}}],Ue=["$parse","$animate","$compile",function(a,b,d){var c=M("ngRepeat"),f=function(a,b,c,d,f,m,n){a[c]=d;f&&(a[f]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var s=l[3]||l[1],v=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var u,w,x,t,y={$id:la};r?u=a(r):(x=function(a,b){return la(b)},
t=function(a){return a});return function(a,d,e,g,l){u&&(w=function(b,c,d){v&&(y[v]=b);y[s]=c;y.$index=d;return u(a,y)});var m=W();a.$watchCollection(n,function(e){var g,n,r=d[0],u,y=W(),z,D,E,B,F,C,I;p&&(a[p]=e);if(ta(e))F=e,n=w||x;else for(I in n=w||t,F=[],e)va.call(e,I)&&"$"!==I.charAt(0)&&F.push(I);z=F.length;I=Array(z);for(g=0;g<z;g++)if(D=e===F?g:F[g],E=e[D],B=n(D,E,g),m[B])C=m[B],delete m[B],y[B]=C,I[g]=C;else{if(y[B])throw q(I,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,B,E);I[g]={id:B,
scope:void 0,clone:void 0};y[B]=!0}for(u in m){C=m[u];B=ub(C.clone);b.leave(B);if(B[0].parentNode)for(g=0,n=B.length;g<n;g++)B[g].$$NG_REMOVED=!0;C.scope.$destroy()}for(g=0;g<z;g++)if(D=e===F?g:F[g],E=e[D],C=I[g],C.scope){u=r;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);C.clone[0]!==u&&b.move(ub(C.clone),null,r);r=C.clone[C.clone.length-1];f(C.scope,g,s,E,v,D,z)}else l(function(a,c){C.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;C.clone=a;y[C.id]=C;f(C.scope,g,s,E,v,D,z)});m=
y})}}}}],Ve=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],We=Ra(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),Xe=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,f,e){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(f.ngSwitch||f.on,function(c){for(var d,f;k.length;)a.cancel(k.pop());d=0;for(f=l.length;d<f;++d){var s=ub(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).done(m(k,d))}h.length=0;l.length=0;(g=e.cases["!"+c]||e.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);
var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ye=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:f,element:b})})}}),Ze=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,f){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:f,element:b})}}),bh=M("ngTransclude"),af=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,e,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw bh("orphan",ya(b));e.ngTransclude===e.$attr.ngTransclude&&(e.ngTransclude="");e=e.ngTransclude||e.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var e=a.length;d<e;d++){var g=a[d];if(g.nodeType!==
Ja||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,e);e&&!h.isSlotFilled(e)&&k()}}}}],Ce=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],ch={$setViewValue:w,$render:w},dh=["$element","$scope",function(a,b){function d(){h||(h=!0,b.$$postDigest(function(){h=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),
a&&e.ngModelCtrl.$render())}))}function f(a){a.prop("selected",!0);a.attr("selected",!0)}var e=this,g=new Qa;e.selectValueMap={};e.ngModelCtrl=ch;e.multiple=!1;e.unknownOption=D(z.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);f(e.unknownOption);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);f(e.unknownOption);
a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+la(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),f(e.emptyOption))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=w});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=
function(b){var c=a[0].options[a[0].selectedIndex];c&&c.removeAttribute("selected");e.hasOption(b)?(e.removeUnknownOption(),c=la(b),a.val(c in e.selectValueMap?c:b),f(D(a[0].options[a[0].selectedIndex]))):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Pa(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=g.get(a)||0;g.put(a,
c+1);d()}};e.removeOption=function(a){var b=g.get(a);b&&(1===b?(g.remove(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):g.put(a,b-1))};e.hasOption=function(a){return!!g.get(a)};var h=!1,k=!1;e.registerOption=function(a,b,d,f,g){if(d.$attr.ngValue){var h,k=NaN;d.$observe("value",function(a){var d,f=b.prop("selected");v(k)&&(e.removeOption(h),delete e.selectValueMap[k],d=!0);k=la(a);h=a;e.selectValueMap[k]=a;e.addOption(a,b);b.attr("value",k);d&&f&&c()})}else f?d.$observe("value",function(a){e.readValue();
var d,f=b.prop("selected");v(h)&&(e.removeOption(h),d=!0);h=a;e.addOption(a,b);d&&f&&c()}):g?a.$watch(g,function(a,f){d.$set("value",a);var g=b.prop("selected");f!==a&&e.removeOption(f);e.addOption(a,b);f&&g&&c()}):e.addOption(d.value,b);d.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=d.value;e.removeOption(b);e.ngModelCtrl.$render();(e.multiple&&a&&
-1!==a.indexOf(b)||a===b)&&c(!0)})}}],De=function(){return{restrict:"E",require:["select","?ngModel"],controller:dh,priority:1,link:{pre:function(a,b,d,c){var f=c[0],e=c[1];if(e){if(f.ngModelCtrl=e,b.on("change",function(){f.removeUnknownOption();a.$apply(function(){e.$setViewValue(f.readValue())})}),d.multiple){f.multiple=!0;f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in f.selectValueMap?f.selectValueMap[b]:b))});return a};f.writeValue=
function(a){var c=new Qa(a);q(b.find("option"),function(a){a.selected=v(c.get(a.value))||v(c.get(f.selectValueMap[a.value]))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||qa(g,e.$viewValue)||(g=ra(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}else f.registerOption=w},post:function(a,b,d,c){var f=c[1];if(f){var e=c[0];f.$render=function(){e.writeValue(f.$viewValue)}}}}}},Ee=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,
d){var c,f;v(d.ngValue)||(v(d.value)?c=a(d.value,!0):(f=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,f)}}}}],Tc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Sc=function(){return{restrict:"A",require:"?ngModel",
link:function(a,b,d,c){if(c){var f,e=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",e,a,ya(b));f=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(f)||f.test(b)}}}}},Vc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=-1;d.$observe("maxlength",function(a){a=Z(a);f=ga(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>
f||c.$isEmpty(b)||b.length<=f}}}}},Uc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=0;d.$observe("minlength",function(a){f=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=f}}}}};z.angular.bootstrap?z.console&&console.log("WARNING: Tried to load angular more than once."):(ue(),xe($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",
{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var f=a|0,e=c;void 0===e&&(e=Math.min(b(a),3));Math.pow(10,e);return 1==f&&0==e?"one":"other"}})}]),D(function(){pe(z.document,Mc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * State-based routing for AngularJS
 * @version v1.0.0-alpha.4
 * @link http://angular-ui.github.com/ui-router
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-ui-router", [], factory);
	else if(typeof exports === 'object')
		exports["angular-ui-router"] = factory();
	else
		root["angular-ui-router"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Main entry point for angular 1.x build
	 * @module ng1
	 */
	/** for typedoc */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(53));
	__export(__webpack_require__(54));
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "ui.router";


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @module common */ /** */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(2));
	__export(__webpack_require__(20));
	__export(__webpack_require__(44));
	__export(__webpack_require__(40));
	__export(__webpack_require__(17));
	__export(__webpack_require__(13));
	__export(__webpack_require__(45));
	__export(__webpack_require__(49));
	__export(__webpack_require__(51));
	var router_1 = __webpack_require__(52);
	exports.UIRouter = router_1.UIRouter;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module common */ /** for typedoc */
	__export(__webpack_require__(3));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(5));
	__export(__webpack_require__(4));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(12));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Random utility functions used in the UI-Router code
	 *
	 * @preferred @module common
	 */ /** for typedoc */
	"use strict";
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	var angular = window.angular || {};
	exports.fromJson = angular.fromJson || JSON.parse.bind(JSON);
	exports.toJson = angular.toJson || JSON.stringify.bind(JSON);
	exports.copy = angular.copy || _copy;
	exports.forEach = angular.forEach || _forEach;
	exports.extend = angular.extend || _extend;
	exports.equals = angular.equals || _equals;
	exports.identity = function (x) { return x; };
	exports.noop = function () { return undefined; };
	exports.abstractKey = 'abstract';
	/**
	 * Binds and copies functions onto an object
	 *
	 * Takes functions from the 'from' object, binds those functions to the _this object, and puts the bound functions
	 * on the 'to' object.
	 *
	 * This example creates an new class instance whose functions are prebound to the new'd object.
	 * @example
	 * ```
	 *
	 * class Foo {
	 *   constructor(data) {
	 *     // Binds all functions from Foo.prototype to 'this',
	 *     // then copies them to 'this'
	 *     bindFunctions(Foo.prototype, this, this);
	 *     this.data = data;
	 *   }
	 *
	 *   log() {
	 *     console.log(this.data);
	 *   }
	 * }
	 *
	 * let myFoo = new Foo([1,2,3]);
	 * var logit = myFoo.log;
	 * logit(); // logs [1, 2, 3] from the myFoo 'this' instance
	 * ```
	 *
	 * This example creates a bound version of a service function, and copies it to another object
	 * @example
	 * ```
	 *
	 * var SomeService = {
	 *   this.data = [3, 4, 5];
	 *   this.log = function() {
	 *     console.log(this.data);
	 *   }
	 * }
	 *
	 * // Constructor fn
	 * function OtherThing() {
	 *   // Binds all functions from SomeService to SomeService,
	 *   // then copies them to 'this'
	 *   bindFunctions(SomeService, this, SomeService);
	 * }
	 *
	 * let myOtherThing = new OtherThing();
	 * myOtherThing.log(); // logs [3, 4, 5] from SomeService's 'this'
	 * ```
	 *
	 * @param from The object which contains the functions to be bound
	 * @param to The object which will receive the bound functions
	 * @param bindTo The object which the functions will be bound to
	 * @param fnNames The function names which will be bound (Defaults to all the functions found on the 'from' object)
	 */
	function bindFunctions(from, to, bindTo, fnNames) {
	    if (fnNames === void 0) { fnNames = Object.keys(from); }
	    return fnNames.filter(function (name) { return typeof from[name] === 'function'; })
	        .forEach(function (name) { return to[name] = from[name].bind(bindTo); });
	}
	exports.bindFunctions = bindFunctions;
	/**
	 * prototypal inheritance helper.
	 * Creates a new object which has `parent` object as its prototype, and then copies the properties from `extra` onto it
	 */
	exports.inherit = function (parent, extra) {
	    return exports.extend(new (exports.extend(function () { }, { prototype: parent }))(), extra);
	};
	/**
	 * Given an arguments object, converts the arguments at index idx and above to an array.
	 * This is similar to es6 rest parameters.
	 *
	 * Optionally, the argument at index idx may itself already be an array.
	 *
	 * For example,
	 * given either:
	 *        arguments = [ obj, "foo", "bar" ]
	 * or:
	 *        arguments = [ obj, ["foo", "bar"] ]
	 * then:
	 *        restArgs(arguments, 1) == ["foo", "bar"]
	 *
	 * This allows functions like pick() to be implemented such that it allows either a bunch
	 * of string arguments (like es6 rest parameters), or a single array of strings:
	 *
	 * given:
	 *        var obj = { foo: 1, bar: 2, baz: 3 };
	 * then:
	 *        pick(obj, "foo", "bar");   // returns { foo: 1, bar: 2 }
	 *        pick(obj, ["foo", "bar"]); // returns { foo: 1, bar: 2 }
	 */
	var restArgs = function (args, idx) {
	    if (idx === void 0) { idx = 0; }
	    return Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(args, idx));
	};
	/** Given an array, returns true if the object is found in the array, (using indexOf) */
	var inArray = function (array, obj) { return array.indexOf(obj) !== -1; };
	/** Given an array, and an item, if the item is found in the array, it removes it (in-place).  The same array is returned */
	exports.removeFrom = hof_1.curry(function (array, obj) {
	    var idx = array.indexOf(obj);
	    if (idx >= 0)
	        array.splice(idx, 1);
	    return array;
	});
	/**
	 * Applies a set of defaults to an options object.  The options object is filtered
	 * to only those properties of the objects in the defaultsList.
	 * Earlier objects in the defaultsList take precedence when applying defaults.
	 */
	function defaults(opts) {
	    if (opts === void 0) { opts = {}; }
	    var defaultsList = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        defaultsList[_i - 1] = arguments[_i];
	    }
	    var defaults = merge.apply(null, [{}].concat(defaultsList));
	    return exports.extend({}, defaults, pick(opts || {}, Object.keys(defaults)));
	}
	exports.defaults = defaults;
	/**
	 * Merges properties from the list of objects to the destination object.
	 * If a property already exists in the destination object, then it is not overwritten.
	 */
	function merge(dst) {
	    var objs = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        objs[_i - 1] = arguments[_i];
	    }
	    exports.forEach(objs, function (obj) {
	        exports.forEach(obj, function (value, key) {
	            if (!dst.hasOwnProperty(key))
	                dst[key] = value;
	        });
	    });
	    return dst;
	}
	exports.merge = merge;
	/** Reduce function that merges each element of the list into a single object, using extend */
	exports.mergeR = function (memo, item) { return exports.extend(memo, item); };
	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	    var path = [];
	    for (var n in first.path) {
	        if (first.path[n] !== second.path[n])
	            break;
	        path.push(first.path[n]);
	    }
	    return path;
	}
	exports.ancestors = ancestors;
	/**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */
	function equalForKeys(a, b, keys) {
	    if (keys === void 0) { keys = Object.keys(a); }
	    for (var i = 0; i < keys.length; i++) {
	        var k = keys[i];
	        if (a[k] != b[k])
	            return false; // Not '===', values aren't necessarily normalized
	    }
	    return true;
	}
	exports.equalForKeys = equalForKeys;
	function pickOmitImpl(predicate, obj) {
	    var objCopy = {}, keys = restArgs(arguments, 2);
	    for (var key in obj) {
	        if (predicate(keys, key))
	            objCopy[key] = obj[key];
	    }
	    return objCopy;
	}
	/** Return a copy of the object only containing the whitelisted properties. */
	function pick(obj) { return pickOmitImpl.apply(null, [inArray].concat(restArgs(arguments))); }
	exports.pick = pick;
	/** Return a copy of the object omitting the blacklisted properties. */
	function omit(obj) { return pickOmitImpl.apply(null, [hof_1.not(inArray)].concat(restArgs(arguments))); }
	exports.omit = omit;
	/**
	 * Maps an array, or object to a property (by name)
	 */
	function pluck(collection, propName) {
	    return map(collection, hof_1.prop(propName));
	}
	exports.pluck = pluck;
	/** Filters an Array or an Object's properties based on a predicate */
	function filter(collection, callback) {
	    var arr = predicates_1.isArray(collection), result = arr ? [] : {};
	    var accept = arr ? function (x) { return result.push(x); } : function (x, key) { return result[key] = x; };
	    exports.forEach(collection, function (item, i) {
	        if (callback(item, i))
	            accept(item, i);
	    });
	    return result;
	}
	exports.filter = filter;
	/** Finds an object from an array, or a property of an object, that matches a predicate */
	function find(collection, callback) {
	    var result;
	    exports.forEach(collection, function (item, i) {
	        if (result)
	            return;
	        if (callback(item, i))
	            result = item;
	    });
	    return result;
	}
	exports.find = find;
	/** Given an object, returns a new object, where each property is transformed by the callback function */
	exports.mapObj = map;
	/** Maps an array or object properties using a callback function */
	function map(collection, callback) {
	    var result = predicates_1.isArray(collection) ? [] : {};
	    exports.forEach(collection, function (item, i) { return result[i] = callback(item, i); });
	    return result;
	}
	exports.map = map;
	/**
	 * Given an object, return its enumerable property values
	 *
	 * @example
	 * ```
	 *
	 * let foo = { a: 1, b: 2, c: 3 }
	 * let vals = values(foo); // [ 1, 2, 3 ]
	 * ```
	 */
	exports.values = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
	/**
	 * Reduce function that returns true if all of the values are truthy.
	 *
	 * @example
	 * ```
	 *
	 * let vals = [ 1, true, {}, "hello world"];
	 * vals.reduce(allTrueR, true); // true
	 *
	 * vals.push(0);
	 * vals.reduce(allTrueR, true); // false
	 * ```
	 */
	exports.allTrueR = function (memo, elem) { return memo && elem; };
	/**
	 * Reduce function that returns true if any of the values are truthy.
	 *
	 *  * @example
	 * ```
	 *
	 * let vals = [ 0, null, undefined ];
	 * vals.reduce(anyTrueR, true); // false
	 *
	 * vals.push("hello world");
	 * vals.reduce(anyTrueR, true); // true
	 * ```
	 */
	exports.anyTrueR = function (memo, elem) { return memo || elem; };
	/**
	 * Reduce function which un-nests a single level of arrays
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
	 * ```
	 */
	exports.unnestR = function (memo, elem) { return memo.concat(elem); };
	/**
	 * Reduce function which recursively un-nests all arrays
	 *
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", "double, "nested" ]
	 * ```
	 */
	exports.flattenR = function (memo, elem) { return predicates_1.isArray(elem) ? memo.concat(elem.reduce(exports.flattenR, [])) : pushR(memo, elem); };
	/** Reduce function that pushes an object to an array, then returns the array.  Mostly just for [[flattenR]] */
	function pushR(arr, obj) { arr.push(obj); return arr; }
	/**
	 * Return a new array with a single level of arrays unnested.
	 *
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * unnest(input) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
	 * ```
	 */
	exports.unnest = function (arr) { return arr.reduce(exports.unnestR, []); };
	/**
	 * Return a completely flattened version of an array.
	 *
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * flatten(input) // [ "a", "b", "c", "d", "double, "nested" ]
	 * ```
	 */
	exports.flatten = function (arr) { return arr.reduce(exports.flattenR, []); };
	/**
	 * Given a .filter Predicate, builds a .filter Predicate which throws an error if any elements do not pass.
	 * @example
	 * ```
	 *
	 * let isNumber = (obj) => typeof(obj) === 'number';
	 * let allNumbers = [ 1, 2, 3, 4, 5 ];
	 * allNumbers.filter(assertPredicate(isNumber)); //OK
	 *
	 * let oneString = [ 1, 2, 3, 4, "5" ];
	 * oneString.filter(assertPredicate(isNumber, "Not all numbers")); // throws Error(""Not all numbers"");
	 * ```
	 */
	function assertPredicate(predicate, errMsg) {
	    if (errMsg === void 0) { errMsg = "assert failure"; }
	    return function (obj) {
	        if (!predicate(obj)) {
	            throw new Error(predicates_1.isFunction(errMsg) ? errMsg(obj) : errMsg);
	        }
	        return true;
	    };
	}
	exports.assertPredicate = assertPredicate;
	/**
	 * Like _.pairs: Given an object, returns an array of key/value pairs
	 *
	 * @example
	 * ```
	 *
	 * pairs({ foo: "FOO", bar: "BAR }) // [ [ "foo", "FOO" ], [ "bar": "BAR" ] ]
	 * ```
	 */
	exports.pairs = function (object) { return Object.keys(object).map(function (key) { return [key, object[key]]; }); };
	/**
	 * Given two or more parallel arrays, returns an array of tuples where
	 * each tuple is composed of [ a[i], b[i], ... z[i] ]
	 *
	 * @example
	 * ```
	 *
	 * let foo = [ 0, 2, 4, 6 ];
	 * let bar = [ 1, 3, 5, 7 ];
	 * let baz = [ 10, 30, 50, 70 ];
	 * arrayTuples(foo, bar);       // [ [0, 1], [2, 3], [4, 5], [6, 7] ]
	 * arrayTuples(foo, bar, baz);  // [ [0, 1, 10], [2, 3, 30], [4, 5, 50], [6, 7, 70] ]
	 * ```
	 */
	function arrayTuples() {
	    var arrayArgs = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        arrayArgs[_i - 0] = arguments[_i];
	    }
	    if (arrayArgs.length === 0)
	        return [];
	    var length = arrayArgs.reduce(function (min, arr) { return Math.min(arr.length, min); }, 9007199254740991); // aka 2^53 − 1 aka Number.MAX_SAFE_INTEGER
	    return Array.apply(null, Array(length)).map(function (ignored, idx) { return arrayArgs.map(function (arr) { return arr[idx]; }); });
	}
	exports.arrayTuples = arrayTuples;
	/**
	 * Reduce function which builds an object from an array of [key, value] pairs.
	 *
	 * Each iteration sets the key/val pair on the memo object, then returns the memo for the next iteration.
	 *
	 * Each keyValueTuple should be an array with values [ key: string, value: any ]
	 *
	 * @example
	 * ```
	 *
	 * var pairs = [ ["fookey", "fooval"], ["barkey", "barval"] ]
	 *
	 * var pairsToObj = pairs.reduce((memo, pair) => applyPairs(memo, pair), {})
	 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
	 *
	 * // Or, more simply:
	 * var pairsToObj = pairs.reduce(applyPairs, {})
	 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
	 * ```
	 */
	function applyPairs(memo, keyValTuple) {
	    var key, value;
	    if (predicates_1.isArray(keyValTuple))
	        key = keyValTuple[0], value = keyValTuple[1];
	    if (!predicates_1.isString(key))
	        throw new Error("invalid parameters to applyPairs");
	    memo[key] = value;
	    return memo;
	}
	exports.applyPairs = applyPairs;
	/** Get the last element of an array */
	function tail(arr) {
	    return arr.length && arr[arr.length - 1] || undefined;
	}
	exports.tail = tail;
	/**
	 * shallow copy from src to dest
	 *
	 * note: This is a shallow copy, while angular.copy is a deep copy.
	 * ui-router uses `copy` only to make copies of state parameters.
	 */
	function _copy(src, dest) {
	    if (dest)
	        Object.keys(dest).forEach(function (key) { return delete dest[key]; });
	    if (!dest)
	        dest = {};
	    return exports.extend(dest, src);
	}
	function _forEach(obj, cb, _this) {
	    if (predicates_1.isArray(obj))
	        return obj.forEach(cb, _this);
	    Object.keys(obj).forEach(function (key) { return cb(obj[key], key); });
	}
	function _copyProps(to, from) { Object.keys(from).forEach(function (key) { return to[key] = from[key]; }); return to; }
	function _extend(toObj, rest) {
	    return restArgs(arguments, 1).filter(exports.identity).reduce(_copyProps, toObj);
	}
	function _equals(o1, o2) {
	    if (o1 === o2)
	        return true;
	    if (o1 === null || o2 === null)
	        return false;
	    if (o1 !== o1 && o2 !== o2)
	        return true; // NaN === NaN
	    var t1 = typeof o1, t2 = typeof o2;
	    if (t1 !== t2 || t1 !== 'object')
	        return false;
	    var tup = [o1, o2];
	    if (hof_1.all(predicates_1.isArray)(tup))
	        return _arraysEq(o1, o2);
	    if (hof_1.all(predicates_1.isDate)(tup))
	        return o1.getTime() === o2.getTime();
	    if (hof_1.all(predicates_1.isRegExp)(tup))
	        return o1.toString() === o2.toString();
	    if (hof_1.all(predicates_1.isFunction)(tup))
	        return true; // meh
	    var predicates = [predicates_1.isFunction, predicates_1.isArray, predicates_1.isDate, predicates_1.isRegExp];
	    if (predicates.map(hof_1.any).reduce(function (b, fn) { return b || !!fn(tup); }, false))
	        return false;
	    var key, keys = {};
	    for (key in o1) {
	        if (!_equals(o1[key], o2[key]))
	            return false;
	        keys[key] = true;
	    }
	    for (key in o2) {
	        if (!keys[key])
	            return false;
	    }
	    return true;
	}
	function _arraysEq(a1, a2) {
	    if (a1.length !== a2.length)
	        return false;
	    return arrayTuples(a1, a2).reduce(function (b, t) { return b && _equals(t[0], t[1]); }, true);
	}
	//
	//const _addToGroup = (result, keyFn) => (item) =>
	//  (result[keyFn(item)] = result[keyFn(item)] || []).push(item) && result;
	//const groupBy = (array, keyFn) => array.reduce((memo, item) => _addToGroup(memo, keyFn), {});
	//
	//


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** Predicates @module common_predicates */ /** */
	var hof_1 = __webpack_require__(5);
	var toStr = Object.prototype.toString;
	var tis = function (t) { return function (x) { return typeof (x) === t; }; };
	exports.isUndefined = tis('undefined');
	exports.isDefined = hof_1.not(exports.isUndefined);
	exports.isNull = function (o) { return o === null; };
	exports.isFunction = tis('function');
	exports.isNumber = tis('number');
	exports.isString = tis('string');
	exports.isObject = function (x) { return x !== null && typeof x === 'object'; };
	exports.isArray = Array.isArray;
	exports.isDate = function (x) { return toStr.call(x) === '[object Date]'; };
	exports.isRegExp = function (x) { return toStr.call(x) === '[object RegExp]'; };
	/**
	 * Predicate which checks if a value is injectable
	 *
	 * A value is "injectable" if it is a function, or if it is an ng1 array-notation-style array
	 * where all the elements in the array are Strings, except the last one, which is a Function
	 */
	function isInjectable(val) {
	    if (exports.isArray(val) && val.length) {
	        var head = val.slice(0, -1), tail = val.slice(-1);
	        return !(head.filter(hof_1.not(exports.isString)).length || tail.filter(hof_1.not(exports.isFunction)).length);
	    }
	    return exports.isFunction(val);
	}
	exports.isInjectable = isInjectable;
	/**
	 * Predicate which checks if a value looks like a Promise
	 *
	 * It is probably a Promise if it's an object, and it has a `then` property which is a Function
	 */
	exports.isPromise = hof_1.and(exports.isObject, hof_1.pipe(hof_1.prop('then'), exports.isFunction));


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Higher order functions
	 *
	 * @module common_hof
	 */
	"use strict";
	/**
	 * Returns a new function for [Partial Application](https://en.wikipedia.org/wiki/Partial_application) of the original function.
	 *
	 * Given a function with N parameters, returns a new function that supports partial application.
	 * The new function accepts anywhere from 1 to N parameters.  When that function is called with M parameters,
	 * where M is less than N, it returns a new function that accepts the remaining parameters.  It continues to
	 * accept more parameters until all N parameters have been supplied.
	 *
	 *
	 * This contrived example uses a partially applied function as an predicate, which returns true
	 * if an object is found in both arrays.
	 * @example
	 * ```
	 * // returns true if an object is in both of the two arrays
	 * function inBoth(array1, array2, object) {
	 *   return array1.indexOf(object) !== -1 &&
	 *          array2.indexOf(object) !== 1;
	 * }
	 * let obj1, obj2, obj3, obj4, obj5, obj6, obj7
	 * let foos = [obj1, obj3]
	 * let bars = [obj3, obj4, obj5]
	 *
	 * // A curried "copy" of inBoth
	 * let curriedInBoth = curry(inBoth);
	 * // Partially apply both the array1 and array2
	 * let inFoosAndBars = curriedInBoth(foos, bars);
	 *
	 * // Supply the final argument; since all arguments are
	 * // supplied, the original inBoth function is then called.
	 * let obj1InBoth = inFoosAndBars(obj1); // false
	 *
	 * // Use the inFoosAndBars as a predicate.
	 * // Filter, on each iteration, supplies the final argument
	 * let allObjs = [ obj1, obj2, obj3, obj4, obj5, obj6, obj7 ];
	 * let foundInBoth = allObjs.filter(inFoosAndBars); // [ obj3 ]
	 *
	 * ```
	 *
	 * Stolen from: http://stackoverflow.com/questions/4394747/javascript-curry-function
	 *
	 * @param fn
	 * @returns {*|function(): (*|any)}
	 */
	function curry(fn) {
	    var initial_args = [].slice.apply(arguments, [1]);
	    var func_args_length = fn.length;
	    function curried(args) {
	        if (args.length >= func_args_length)
	            return fn.apply(null, args);
	        return function () {
	            return curried(args.concat([].slice.apply(arguments)));
	        };
	    }
	    return curried(initial_args);
	}
	exports.curry = curry;
	/**
	 * Given a varargs list of functions, returns a function that composes the argument functions, right-to-left
	 * given: f(x), g(x), h(x)
	 * let composed = compose(f,g,h)
	 * then, composed is: f(g(h(x)))
	 */
	function compose() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function () {
	        var i = start, result = args[start].apply(this, arguments);
	        while (i--)
	            result = args[i].call(this, result);
	        return result;
	    };
	}
	exports.compose = compose;
	/**
	 * Given a varargs list of functions, returns a function that is composes the argument functions, left-to-right
	 * given: f(x), g(x), h(x)
	 * let piped = pipe(f,g,h);
	 * then, piped is: h(g(f(x)))
	 */
	function pipe() {
	    var funcs = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        funcs[_i - 0] = arguments[_i];
	    }
	    return compose.apply(null, [].slice.call(arguments).reverse());
	}
	exports.pipe = pipe;
	/**
	 * Given a property name, returns a function that returns that property from an object
	 * let obj = { foo: 1, name: "blarg" };
	 * let getName = prop("name");
	 * getName(obj) === "blarg"
	 */
	exports.prop = function (name) { return function (obj) { return obj && obj[name]; }; };
	/**
	 * Given a property name and a value, returns a function that returns a boolean based on whether
	 * the passed object has a property that matches the value
	 * let obj = { foo: 1, name: "blarg" };
	 * let getName = propEq("name", "blarg");
	 * getName(obj) === true
	 */
	exports.propEq = curry(function (name, val, obj) { return obj && obj[name] === val; });
	/**
	 * Given a dotted property name, returns a function that returns a nested property from an object, or undefined
	 * let obj = { id: 1, nestedObj: { foo: 1, name: "blarg" }, };
	 * let getName = prop("nestedObj.name");
	 * getName(obj) === "blarg"
	 * let propNotFound = prop("this.property.doesnt.exist");
	 * propNotFound(obj) === undefined
	 */
	exports.parse = function (name) { return pipe.apply(null, name.split(".").map(exports.prop)); };
	/**
	 * Given a function that returns a truthy or falsey value, returns a
	 * function that returns the opposite (falsey or truthy) value given the same inputs
	 */
	exports.not = function (fn) { return function () {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    return !fn.apply(null, args);
	}; };
	/**
	 * Given two functions that return truthy or falsey values, returns a function that returns truthy
	 * if both functions return truthy for the given arguments
	 */
	function and(fn1, fn2) {
	    return function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        return fn1.apply(null, args) && fn2.apply(null, args);
	    };
	}
	exports.and = and;
	/**
	 * Given two functions that return truthy or falsey values, returns a function that returns truthy
	 * if at least one of the functions returns truthy for the given arguments
	 */
	function or(fn1, fn2) {
	    return function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        return fn1.apply(null, args) || fn2.apply(null, args);
	    };
	}
	exports.or = or;
	/**
	 * Check if all the elements of an array match a predicate function
	 *
	 * @param fn1 a predicate function `fn1`
	 * @returns a function which takes an array and returns true if `fn1` is true for all elements of the array
	 */
	exports.all = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b && !!fn1(x); }, true); }; };
	exports.any = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b || !!fn1(x); }, false); }; };
	exports.none = exports.not(exports.any);
	/** Given a class, returns a Predicate function that returns true if the object is of that class */
	exports.is = function (ctor) { return function (obj) { return (obj != null && obj.constructor === ctor || obj instanceof ctor); }; };
	/** Given a value, returns a Predicate function that returns true if another value is === equal to the original value */
	exports.eq = function (val) { return function (other) { return val === other; }; };
	/** Given a value, returns a function which returns the value */
	exports.val = function (v) { return function () { return v; }; };
	function invoke(fnName, args) {
	    return function (obj) { return obj[fnName].apply(obj, args); };
	}
	exports.invoke = invoke;
	/**
	 * Sorta like Pattern Matching (a functional programming conditional construct)
	 *
	 * See http://c2.com/cgi/wiki?PatternMatching
	 *
	 * This is a conditional construct which allows a series of predicates and output functions
	 * to be checked and then applied.  Each predicate receives the input.  If the predicate
	 * returns truthy, then its matching output function (mapping function) is provided with
	 * the input and, then the result is returned.
	 *
	 * Each combination (2-tuple) of predicate + output function should be placed in an array
	 * of size 2: [ predicate, mapFn ]
	 *
	 * These 2-tuples should be put in an outer array.
	 *
	 * @example
	 * ```
	 *
	 * // Here's a 2-tuple where the first element is the isString predicate
	 * // and the second element is a function that returns a description of the input
	 * let firstTuple = [ angular.isString, (input) => `Heres your string ${input}` ];
	 *
	 * // Second tuple: predicate "isNumber", mapfn returns a description
	 * let secondTuple = [ angular.isNumber, (input) => `(${input}) That's a number!` ];
	 *
	 * let third = [ (input) => input === null,  (input) => `Oh, null...` ];
	 *
	 * let fourth = [ (input) => input === undefined,  (input) => `notdefined` ];
	 *
	 * let descriptionOf = pattern([ firstTuple, secondTuple, third, fourth ]);
	 *
	 * console.log(descriptionOf(undefined)); // 'notdefined'
	 * console.log(descriptionOf(55)); // '(55) That's a number!'
	 * console.log(descriptionOf("foo")); // 'Here's your string foo'
	 * ```
	 *
	 * @param struct A 2D array.  Each element of the array should be an array, a 2-tuple,
	 * with a Predicate and a mapping/output function
	 * @returns {function(any): *}
	 */
	function pattern(struct) {
	    return function (x) {
	        for (var i = 0; i < struct.length; i++) {
	            if (struct[i][0](x))
	                return struct[i][1](x);
	        }
	    };
	}
	exports.pattern = pattern;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * This module is a stub for core services such as Dependency Injection or Browser Location.
	 * Core services may be implemented by a specific framework, such as ng1 or ng2, or be pure javascript.
	 *
	 * @module common
	 */
	"use strict";
	/** for typedoc */
	//import {IQService} from "angular";
	//import {IInjectorService} from "angular";
	var notImplemented = function (fnname) { return function () {
	    throw new Error(fnname + "(): No coreservices implementation for UI-Router is loaded. You should include one of: ['angular1.js']");
	}; };
	var services = {
	    $q: undefined,
	    $injector: undefined,
	    location: {},
	    locationConfig: {},
	    template: {}
	};
	exports.services = services;
	["replace", "url", "path", "search", "hash", "onChange"]
	    .forEach(function (key) { return services.location[key] = notImplemented(key); });
	["port", "protocol", "host", "baseHref", "html5Mode", "hashPrefix"]
	    .forEach(function (key) { return services.locationConfig[key] = notImplemented(key); });


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	/** @module state */ /** for typedoc */
	var Glob = (function () {
	    function Glob(text) {
	        this.text = text;
	        this.glob = text.split('.');
	    }
	    Glob.prototype.matches = function (name) {
	        var segments = name.split('.');
	        // match single stars
	        for (var i = 0, l = this.glob.length; i < l; i++) {
	            if (this.glob[i] === '*')
	                segments[i] = '*';
	        }
	        // match greedy starts
	        if (this.glob[0] === '**') {
	            segments = segments.slice(segments.indexOf(this.glob[1]));
	            segments.unshift('**');
	        }
	        // match greedy ends
	        if (this.glob[this.glob.length - 1] === '**') {
	            segments.splice(segments.indexOf(this.glob[this.glob.length - 2]) + 1, Number.MAX_VALUE);
	            segments.push('**');
	        }
	        if (this.glob.length != segments.length)
	            return false;
	        return segments.join('') === this.glob.join('');
	    };
	    Glob.is = function (text) {
	        return text.indexOf('*') > -1;
	    };
	    Glob.fromString = function (text) {
	        if (!this.is(text))
	            return null;
	        return new Glob(text);
	    };
	    return Glob;
	}());
	exports.Glob = Glob;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/** @module common */ /** for typedoc */
	"use strict";
	var Queue = (function () {
	    function Queue(_items, _limit) {
	        if (_items === void 0) { _items = []; }
	        if (_limit === void 0) { _limit = null; }
	        this._items = _items;
	        this._limit = _limit;
	    }
	    Queue.prototype.enqueue = function (item) {
	        var items = this._items;
	        items.push(item);
	        if (this._limit && items.length > this._limit)
	            items.shift();
	        return item;
	    };
	    Queue.prototype.dequeue = function () {
	        if (this.size())
	            return this._items.splice(0, 1)[0];
	    };
	    Queue.prototype.clear = function () {
	        var current = this._items;
	        this._items = [];
	        return current;
	    };
	    Queue.prototype.size = function () {
	        return this._items.length;
	    };
	    Queue.prototype.remove = function (item) {
	        var idx = this._items.indexOf(item);
	        return idx > -1 && this._items.splice(idx, 1)[0];
	    };
	    Queue.prototype.peekTail = function () {
	        return this._items[this._items.length - 1];
	    };
	    Queue.prototype.peekHead = function () {
	        if (this.size())
	            return this._items[0];
	    };
	    return Queue;
	}());
	exports.Queue = Queue;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/** @module common_strings */ /** */
	"use strict";
	var predicates_1 = __webpack_require__(4);
	var rejectFactory_1 = __webpack_require__(10);
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var transition_1 = __webpack_require__(11);
	var resolvable_1 = __webpack_require__(32);
	/**
	 * Returns a string shortened to a maximum length
	 *
	 * If the string is already less than the `max` length, return the string.
	 * Else return the string, shortened to `max - 3` and append three dots ("...").
	 *
	 * @param max the maximum length of the string to return
	 * @param str the input string
	 */
	function maxLength(max, str) {
	    if (str.length <= max)
	        return str;
	    return str.substr(0, max - 3) + "...";
	}
	exports.maxLength = maxLength;
	/**
	 * Returns a string, with spaces added to the end, up to a desired str length
	 *
	 * If the string is already longer than the desired length, return the string.
	 * Else returns the string, with extra spaces on the end, such that it reaches `length` characters.
	 *
	 * @param length the desired length of the string to return
	 * @param str the input string
	 */
	function padString(length, str) {
	    while (str.length < length)
	        str += " ";
	    return str;
	}
	exports.padString = padString;
	exports.kebobString = function (camelCase) { return camelCase.replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); }); };
	function _toJson(obj) {
	    return JSON.stringify(obj);
	}
	function _fromJson(json) {
	    return predicates_1.isString(json) ? JSON.parse(json) : json;
	}
	function promiseToString(p) {
	    if (hof_1.is(rejectFactory_1.TransitionRejection)(p.reason))
	        return p.reason.toString();
	    return "Promise(" + JSON.stringify(p) + ")";
	}
	function functionToString(fn) {
	    var fnStr = fnToString(fn);
	    var namedFunctionMatch = fnStr.match(/^(function [^ ]+\([^)]*\))/);
	    return namedFunctionMatch ? namedFunctionMatch[1] : fnStr;
	}
	exports.functionToString = functionToString;
	function fnToString(fn) {
	    var _fn = predicates_1.isArray(fn) ? fn.slice(-1)[0] : fn;
	    return _fn && _fn.toString() || "undefined";
	}
	exports.fnToString = fnToString;
	var stringifyPattern = hof_1.pattern([
	    [hof_1.not(predicates_1.isDefined), hof_1.val("undefined")],
	    [predicates_1.isNull, hof_1.val("null")],
	    [predicates_1.isPromise, promiseToString],
	    [hof_1.is(transition_1.Transition), hof_1.invoke("toString")],
	    [hof_1.is(resolvable_1.Resolvable), hof_1.invoke("toString")],
	    [predicates_1.isInjectable, functionToString],
	    [hof_1.val(true), common_1.identity]
	]);
	function stringify(o) {
	    var seen = [];
	    function format(val) {
	        if (predicates_1.isObject(val)) {
	            if (seen.indexOf(val) !== -1)
	                return '[circular ref]';
	            seen.push(val);
	        }
	        return stringifyPattern(val);
	    }
	    return JSON.stringify(o, function (key, val) { return format(val); }).replace(/\\"/g, '"');
	}
	exports.stringify = stringify;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/** @module transition */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	var coreservices_1 = __webpack_require__(6);
	var strings_1 = __webpack_require__(9);
	(function (RejectType) {
	    RejectType[RejectType["SUPERSEDED"] = 2] = "SUPERSEDED";
	    RejectType[RejectType["ABORTED"] = 3] = "ABORTED";
	    RejectType[RejectType["INVALID"] = 4] = "INVALID";
	    RejectType[RejectType["IGNORED"] = 5] = "IGNORED";
	})(exports.RejectType || (exports.RejectType = {}));
	var RejectType = exports.RejectType;
	var TransitionRejection = (function () {
	    function TransitionRejection(type, message, detail) {
	        common_1.extend(this, {
	            type: type,
	            message: message,
	            detail: detail
	        });
	    }
	    TransitionRejection.prototype.toString = function () {
	        var detailString = function (d) { return d && d.toString !== Object.prototype.toString ? d.toString() : strings_1.stringify(d); };
	        var type = this.type, message = this.message, detail = detailString(this.detail);
	        return "TransitionRejection(type: " + type + ", message: " + message + ", detail: " + detail + ")";
	    };
	    return TransitionRejection;
	}());
	exports.TransitionRejection = TransitionRejection;
	var RejectFactory = (function () {
	    function RejectFactory() {
	    }
	    RejectFactory.prototype.superseded = function (detail, options) {
	        var message = "The transition has been superseded by a different transition (see detail).";
	        var reason = new TransitionRejection(RejectType.SUPERSEDED, message, detail);
	        if (options && options.redirected) {
	            reason.redirected = true;
	        }
	        return common_1.extend(coreservices_1.services.$q.reject(reason), { reason: reason });
	    };
	    RejectFactory.prototype.redirected = function (detail) {
	        return this.superseded(detail, { redirected: true });
	    };
	    RejectFactory.prototype.invalid = function (detail) {
	        var message = "This transition is invalid (see detail)";
	        var reason = new TransitionRejection(RejectType.INVALID, message, detail);
	        return common_1.extend(coreservices_1.services.$q.reject(reason), { reason: reason });
	    };
	    RejectFactory.prototype.ignored = function (detail) {
	        var message = "The transition was ignored.";
	        var reason = new TransitionRejection(RejectType.IGNORED, message, detail);
	        return common_1.extend(coreservices_1.services.$q.reject(reason), { reason: reason });
	    };
	    RejectFactory.prototype.aborted = function (detail) {
	        // TODO think about how to encapsulate an Error() object
	        var message = "The transition has been aborted.";
	        var reason = new TransitionRejection(RejectType.ABORTED, message, detail);
	        return common_1.extend(coreservices_1.services.$q.reject(reason), { reason: reason });
	    };
	    return RejectFactory;
	}());
	exports.RejectFactory = RejectFactory;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module transition */ /** for typedoc */
	var trace_1 = __webpack_require__(12);
	var coreservices_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	var module_1 = __webpack_require__(13);
	var node_1 = __webpack_require__(39);
	var pathFactory_1 = __webpack_require__(38);
	var module_2 = __webpack_require__(17);
	var module_3 = __webpack_require__(20);
	var module_4 = __webpack_require__(40);
	var transitionCount = 0, REJECT = new module_1.RejectFactory();
	var stateSelf = hof_1.prop("self");
	/**
	 * The representation of a transition between two states.
	 *
	 * Contains all contextual information about the to/from states, parameters, resolves, as well as the
	 * list of states being entered and exited as a result of this transition.
	 */
	var Transition = (function () {
	    /**
	     * Creates a new Transition object.
	     *
	     * If the target state is not valid, an error is thrown.
	     *
	     * @param fromPath The path of [[Node]]s from which the transition is leaving.  The last node in the `fromPath`
	     *        encapsulates the "from state".
	     * @param targetState The target state and parameters being transitioned to (also, the transition options)
	     * @param _transitionService The Transition Service instance
	     */
	    function Transition(fromPath, targetState, _transitionService) {
	        var _this = this;
	        this._transitionService = _transitionService;
	        this._deferred = coreservices_1.services.$q.defer();
	        /**
	         * This promise is resolved or rejected based on the outcome of the Transition.
	         *
	         * When the transition is successful, the promise is resolved
	         * When the transition is unsuccessful, the promise is rejected with the [[TransitionRejection]] or javascript error
	         */
	        this.promise = this._deferred.promise;
	        this.treeChanges = function () { return _this._treeChanges; };
	        this.isActive = function () { return _this === _this._options.current(); };
	        if (!targetState.valid()) {
	            throw new Error(targetState.error());
	        }
	        // Makes the Transition instance a hook registry (onStart, etc)
	        module_1.HookRegistry.mixin(new module_1.HookRegistry(), this);
	        // current() is assumed to come from targetState.options, but provide a naive implementation otherwise.
	        this._options = common_1.extend({ current: hof_1.val(this) }, targetState.options());
	        this.$id = transitionCount++;
	        var toPath = pathFactory_1.PathFactory.buildToPath(fromPath, targetState);
	        toPath = pathFactory_1.PathFactory.applyViewConfigs(_transitionService.$view, toPath);
	        this._treeChanges = pathFactory_1.PathFactory.treeChanges(fromPath, toPath, this._options.reloadState);
	        pathFactory_1.PathFactory.bindTransitionResolve(this._treeChanges, this);
	    }
	    Transition.prototype.$from = function () {
	        return common_1.tail(this._treeChanges.from).state;
	    };
	    Transition.prototype.$to = function () {
	        return common_1.tail(this._treeChanges.to).state;
	    };
	    /**
	     * Returns the "from state"
	     *
	     * @returns The state object for the Transition's "from state".
	     */
	    Transition.prototype.from = function () {
	        return this.$from().self;
	    };
	    /**
	     * Returns the "to state"
	     *
	     * @returns The state object for the Transition's target state ("to state").
	     */
	    Transition.prototype.to = function () {
	        return this.$to().self;
	    };
	    /**
	     * Determines whether two transitions are equivalent.
	     */
	    Transition.prototype.is = function (compare) {
	        if (compare instanceof Transition) {
	            // TODO: Also compare parameters
	            return this.is({ to: compare.$to().name, from: compare.$from().name });
	        }
	        return !((compare.to && !module_1.matchState(this.$to(), compare.to)) ||
	            (compare.from && !module_1.matchState(this.$from(), compare.from)));
	    };
	    /**
	     * Gets transition parameter values
	     *
	     * @param pathname Pick which treeChanges path to get parameters for:
	     *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
	     * @returns transition parameter values for the desired path.
	     */
	    Transition.prototype.params = function (pathname) {
	        if (pathname === void 0) { pathname = "to"; }
	        return this._treeChanges[pathname].map(hof_1.prop("paramValues")).reduce(common_1.mergeR, {});
	    };
	    /**
	     * Get resolved data
	     *
	     * @returns an object (key/value pairs) where keys are resolve names and values are any settled resolve data,
	     *    or `undefined` for pending resolve data
	     */
	    Transition.prototype.resolves = function () {
	        return common_1.map(common_1.tail(this._treeChanges.to).resolveContext.getResolvables(), function (res) { return res.data; });
	    };
	    /**
	     * Adds new resolves to this transition.
	     *
	     * @param resolves an [[ResolveDeclarations]] object which describes the new resolves
	     * @param state the state in the "to path" which should receive the new resolves (otherwise, the root state)
	     */
	    Transition.prototype.addResolves = function (resolves, state) {
	        if (state === void 0) { state = ""; }
	        var stateName = (typeof state === "string") ? state : state.name;
	        var topath = this._treeChanges.to;
	        var targetNode = common_1.find(topath, function (node) { return node.state.name === stateName; });
	        common_1.tail(topath).resolveContext.addResolvables(module_4.Resolvable.makeResolvables(resolves), targetNode.state);
	    };
	    /**
	     * Gets the previous transition, from which this transition was redirected.
	     *
	     * @returns The previous Transition, or null if this Transition is not the result of a redirection
	     */
	    Transition.prototype.previous = function () {
	        return this._options.previous || null;
	    };
	    /**
	     * Get the transition options
	     *
	     * @returns the options for this Transition.
	     */
	    Transition.prototype.options = function () {
	        return this._options;
	    };
	    /**
	     * Gets the states being entered.
	     *
	     * @returns an array of states that will be entered during this transition.
	     */
	    Transition.prototype.entering = function () {
	        return common_1.map(this._treeChanges.entering, hof_1.prop('state')).map(stateSelf);
	    };
	    /**
	     * Gets the states being exited.
	     *
	     * @returns an array of states that will be exited during this transition.
	     */
	    Transition.prototype.exiting = function () {
	        return common_1.map(this._treeChanges.exiting, hof_1.prop('state')).map(stateSelf).reverse();
	    };
	    /**
	     * Gets the states being retained.
	     *
	     * @returns an array of states that are already entered from a previous Transition, that will not be
	     *    exited during this Transition
	     */
	    Transition.prototype.retained = function () {
	        return common_1.map(this._treeChanges.retained, hof_1.prop('state')).map(stateSelf);
	    };
	    /**
	     * Get the [[ViewConfig]]s associated with this Transition
	     *
	     * Each state can define one or more views (template/controller), which are encapsulated as `ViewConfig` objects.
	     * This method fetches the `ViewConfigs` for a given path in the Transition (e.g., "to" or "entering").
	     *
	     * @param pathname the name of the path to fetch views for:
	     *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
	     * @param state If provided, only returns the `ViewConfig`s for a single state in the path
	     *
	     * @returns a list of ViewConfig objects for the given path.
	     */
	    Transition.prototype.views = function (pathname, state) {
	        if (pathname === void 0) { pathname = "entering"; }
	        var path = this._treeChanges[pathname];
	        path = !state ? path : path.filter(hof_1.propEq('state', state));
	        return path.map(hof_1.prop("views")).filter(common_1.identity).reduce(common_1.unnestR, []);
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.state.type:Transition#redirect
	     * @methodOf ui.router.state.type:Transition
	     *
	     * @description
	     * Creates a new transition that is a redirection of the current one. This transition can
	     * be returned from a `$transitionsProvider` hook, `$state` event, or other method, to
	     * redirect a transition to a new state and/or set of parameters.
	     *
	     * @returns {Transition} Returns a new `Transition` instance.
	     */
	    Transition.prototype.redirect = function (targetState) {
	        var newOptions = common_1.extend({}, this.options(), targetState.options(), { previous: this });
	        targetState = new module_2.TargetState(targetState.identifier(), targetState.$state(), targetState.params(), newOptions);
	        var redirectTo = new Transition(this._treeChanges.from, targetState, this._transitionService);
	        var reloadState = targetState.options().reloadState;
	        // If the current transition has already resolved any resolvables which are also in the redirected "to path", then
	        // add those resolvables to the redirected transition.  Allows you to define a resolve at a parent level, wait for
	        // the resolve, then redirect to a child state based on the result, and not have to re-fetch the resolve.
	        var redirectedPath = this.treeChanges().to;
	        var copyResolvesFor = node_1.Node.matching(redirectTo.treeChanges().to, redirectedPath)
	            .filter(function (node) { return !reloadState || !reloadState.includes[node.state.name]; });
	        var includeResolve = function (resolve, key) { return ['$stateParams', '$transition$'].indexOf(key) === -1; };
	        copyResolvesFor.forEach(function (node, idx) { return common_1.extend(node.resolves, common_1.filter(redirectedPath[idx].resolves, includeResolve)); });
	        return redirectTo;
	    };
	    /** @hidden If a transition doesn't exit/enter any states, returns any [[Param]] whose value changed */
	    Transition.prototype._changedParams = function () {
	        var _a = this._treeChanges, to = _a.to, from = _a.from;
	        if (this._options.reload || common_1.tail(to).state !== common_1.tail(from).state)
	            return undefined;
	        var nodeSchemas = to.map(function (node) { return node.paramSchema; });
	        var _b = [to, from].map(function (path) { return path.map(function (x) { return x.paramValues; }); }), toValues = _b[0], fromValues = _b[1];
	        var tuples = common_1.arrayTuples(nodeSchemas, toValues, fromValues);
	        return tuples.map(function (_a) {
	            var schema = _a[0], toVals = _a[1], fromVals = _a[2];
	            return module_3.Param.changed(schema, toVals, fromVals);
	        }).reduce(common_1.unnestR, []);
	    };
	    /**
	     * Returns true if the transition is dynamic.
	     *
	     * A transition is dynamic if no states are entered nor exited, but at least one dynamic parameter has changed.
	     *
	     * @returns true if the Transition is dynamic
	     */
	    Transition.prototype.dynamic = function () {
	        var changes = this._changedParams();
	        return !changes ? false : changes.map(function (x) { return x.dynamic; }).reduce(common_1.anyTrueR, false);
	    };
	    /**
	     * Returns true if the transition is ignored.
	     *
	     * A transition is ignored if no states are entered nor exited, and no parameter values have changed.
	     *
	     * @returns true if the Transition is ignored.
	     */
	    Transition.prototype.ignored = function () {
	        var changes = this._changedParams();
	        return !changes ? false : changes.length === 0;
	    };
	    /**
	     * @hidden
	     */
	    Transition.prototype.hookBuilder = function () {
	        return new module_1.HookBuilder(this._transitionService, this, {
	            transition: this,
	            current: this._options.current
	        });
	    };
	    /**
	     * Runs the transition
	     *
	     * This method is generally called from the [[StateService.transitionTo]]
	     *
	     * @returns a promise for a successful transition.
	     */
	    Transition.prototype.run = function () {
	        var _this = this;
	        var hookBuilder = this.hookBuilder();
	        var runSynchronousHooks = module_1.TransitionHook.runSynchronousHooks;
	        // TODO: nuke these in favor of chaining off the promise, i.e.,
	        // $transitions.onBefore({}, $transition$ => {$transition$.promise.then()}
	        var runSuccessHooks = function () { return runSynchronousHooks(hookBuilder.getOnSuccessHooks(), {}, true); };
	        var runErrorHooks = function ($error$) { return runSynchronousHooks(hookBuilder.getOnErrorHooks(), { $error$: $error$ }, true); };
	        // Run the success/error hooks *after* the Transition promise is settled.
	        this.promise.then(runSuccessHooks, runErrorHooks);
	        var syncResult = runSynchronousHooks(hookBuilder.getOnBeforeHooks());
	        if (module_1.TransitionHook.isRejection(syncResult)) {
	            var rejectReason = syncResult.reason;
	            this._deferred.reject(rejectReason);
	            return this.promise;
	        }
	        if (!this.valid()) {
	            var error = new Error(this.error());
	            this._deferred.reject(error);
	            return this.promise;
	        }
	        if (this.ignored()) {
	            trace_1.trace.traceTransitionIgnored(this);
	            var ignored = REJECT.ignored();
	            this._deferred.reject(ignored.reason);
	            return this.promise;
	        }
	        // When the chain is complete, then resolve or reject the deferred
	        var resolve = function () {
	            _this.success = true;
	            _this._deferred.resolve(_this);
	            trace_1.trace.traceSuccess(_this.$to(), _this);
	        };
	        var reject = function (error) {
	            _this.success = false;
	            _this._deferred.reject(error);
	            trace_1.trace.traceError(error, _this);
	            return coreservices_1.services.$q.reject(error);
	        };
	        trace_1.trace.traceTransitionStart(this);
	        var chain = hookBuilder.asyncHooks().reduce(function (_chain, step) { return _chain.then(step.invokeStep); }, syncResult);
	        chain.then(resolve, reject);
	        return this.promise;
	    };
	    /**
	     * Checks if the Transition is valid
	     *
	     * @returns true if the Transition is valid
	     */
	    Transition.prototype.valid = function () {
	        return !this.error();
	    };
	    /**
	     * The reason the Transition is invalid
	     *
	     * @returns an error message explaining why the transition is invalid
	     */
	    Transition.prototype.error = function () {
	        var state = this.$to();
	        if (state.self[common_1.abstractKey])
	            return "Cannot transition to abstract state '" + state.name + "'";
	        if (!module_3.Param.validates(state.parameters(), this.params()))
	            return "Param values not valid for state '" + state.name + "'";
	    };
	    /**
	     * A string representation of the Transition
	     *
	     * @returns A string representation of the Transition
	     */
	    Transition.prototype.toString = function () {
	        var fromStateOrName = this.from();
	        var toStateOrName = this.to();
	        var avoidEmptyHash = function (params) {
	            return (params["#"] !== null && params["#"] !== undefined) ? params : common_1.omit(params, "#");
	        };
	        // (X) means the to state is invalid.
	        var id = this.$id, from = predicates_1.isObject(fromStateOrName) ? fromStateOrName.name : fromStateOrName, fromParams = common_1.toJson(avoidEmptyHash(this._treeChanges.from.map(hof_1.prop('paramValues')).reduce(common_1.mergeR, {}))), toValid = this.valid() ? "" : "(X) ", to = predicates_1.isObject(toStateOrName) ? toStateOrName.name : toStateOrName, toParams = common_1.toJson(avoidEmptyHash(this.params()));
	        return "Transition#" + id + "( '" + from + "'" + fromParams + " -> " + toValid + "'" + to + "'" + toParams + " )";
	    };
	    return Transition;
	}());
	exports.Transition = Transition;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * UI-Router Transition Tracing
	 *
	 * Enable transition tracing to print transition information to the console, in order to help debug your application.
	 * Tracing logs detailed information about each Transition to your console.
	 *
	 * To enable tracing, import the [[trace]] singleton and enable one or more categories.
	 *
	 * ES6
	 * ```
	 *
	 * import {trace} from "ui-router-ng2"; // or "angular-ui-router"
	 * trace.enable(1, 5); // TRANSITION and VIEWCONFIG
	 * ```
	 *
	 * CJS
	 * ```
	 *
	 * let trace = require("angular-ui-router").trace; // or "ui-router-ng2"
	 * trace.enable("TRANSITION", "VIEWCONFIG");
	 * ```
	 *
	 * Globals
	 * ```
	 *
	 * let trace = window["angular-ui-router"].trace; // or "ui-router-ng2"
	 * trace.enable(); // Trace everything (very verbose)
	 * ```
	 *
	 * @module trace
	 */ /** for typedoc */
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var strings_1 = __webpack_require__(9);
	/** @hidden */
	function uiViewString(viewData) {
	    if (!viewData)
	        return 'ui-view (defunct)';
	    return "ui-view id#" + viewData.id + ", contextual name '" + viewData.name + "@" + viewData.creationContext + "', fqn: '" + viewData.fqn + "'";
	}
	/** @hidden */
	var viewConfigString = function (viewConfig) {
	    return ("ViewConfig targeting ui-view: '" + viewConfig.viewDecl.$uiViewName + "@" + viewConfig.viewDecl.$uiViewContextAnchor + "', context: '" + viewConfig.viewDecl.$context.name + "'");
	};
	/** @hidden */
	function normalizedCat(input) {
	    return predicates_1.isNumber(input) ? Category[input] : Category[Category[input]];
	}
	/**
	 * Trace categories
	 *
	 * [[Trace.enable]] or [[Trace.disable]] a category
	 *
	 * `trace.enable(Category.TRANSITION)`
	 *
	 * These can also be provided using a matching string, or position ordinal
	 *
	 * `trace.enable("TRANSITION")`
	 *
	 * `trace.enable(1)`
	 */
	(function (Category) {
	    Category[Category["RESOLVE"] = 0] = "RESOLVE";
	    Category[Category["TRANSITION"] = 1] = "TRANSITION";
	    Category[Category["HOOK"] = 2] = "HOOK";
	    Category[Category["INVOKE"] = 3] = "INVOKE";
	    Category[Category["UIVIEW"] = 4] = "UIVIEW";
	    Category[Category["VIEWCONFIG"] = 5] = "VIEWCONFIG";
	})(exports.Category || (exports.Category = {}));
	var Category = exports.Category;
	/**
	 * Prints UI-Router Transition trace information to the console.
	 */
	var Trace = (function () {
	    function Trace() {
	        /** @hidden */
	        this._enabled = {};
	        this.approximateDigests = 0;
	    }
	    /** @hidden */
	    Trace.prototype._set = function (enabled, categories) {
	        var _this = this;
	        if (!categories.length) {
	            categories = Object.keys(Category)
	                .filter(function (k) { return isNaN(parseInt(k, 10)); })
	                .map(function (key) { return Category[key]; });
	        }
	        categories.map(normalizedCat).forEach(function (category) { return _this._enabled[category] = enabled; });
	    };
	    /**
	     * Enables a trace [[Category]]
	     *
	     * ```
	     * trace.enable("TRANSITION");
	     * ```
	     *
	     * @param categories categories to enable. If `categories` is omitted, all categories are enabled.
	     *        Also takes strings (category name) or ordinal (category position)
	     */
	    Trace.prototype.enable = function () {
	        var categories = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            categories[_i - 0] = arguments[_i];
	        }
	        this._set(true, categories);
	    };
	    /**
	     * Disables a trace [[Category]]
	     *
	     * ```
	     * trace.disable("VIEWCONFIG");
	     * ```
	     *
	     * @param categories categories to disable. If `categories` is omitted, all categories are disabled.
	     *        Also takes strings (category name) or ordinal (category position)
	     */
	    Trace.prototype.disable = function () {
	        var categories = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            categories[_i - 0] = arguments[_i];
	        }
	        this._set(false, categories);
	    };
	    /**
	     * Retrieves the enabled stateus of a [[Category]]
	     *
	     * ```
	     * trace.enabled("VIEWCONFIG"); // true or false
	     * ```
	     *
	     * @returns boolean true if the category is enabled
	     */
	    Trace.prototype.enabled = function (category) {
	        return !!this._enabled[normalizedCat(category)];
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceTransitionStart = function (transition) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = transition.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(transition);
	        console.log("Transition #" + tid + " Digest #" + digest + ": Started  -> " + transitionStr);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceTransitionIgnored = function (transition) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = transition.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(transition);
	        console.log("Transition #" + tid + " Digest #" + digest + ": Ignored  <> " + transitionStr);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceHookInvocation = function (step, options) {
	        if (!this.enabled(Category.HOOK))
	            return;
	        var tid = hof_1.parse("transition.$id")(options), digest = this.approximateDigests, event = hof_1.parse("traceData.hookType")(options) || "internal", context = hof_1.parse("traceData.context.state.name")(options) || hof_1.parse("traceData.context")(options) || "unknown", name = strings_1.functionToString(step.fn);
	        console.log("Transition #" + tid + " Digest #" + digest + ":   Hook -> " + event + " context: " + context + ", " + strings_1.maxLength(200, name));
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceHookResult = function (hookResult, transitionResult, transitionOptions) {
	        if (!this.enabled(Category.HOOK))
	            return;
	        var tid = hof_1.parse("transition.$id")(transitionOptions), digest = this.approximateDigests, hookResultStr = strings_1.stringify(hookResult), transitionResultStr = strings_1.stringify(transitionResult);
	        console.log("Transition #" + tid + " Digest #" + digest + ":   <- Hook returned: " + strings_1.maxLength(200, hookResultStr) + ", transition result: " + strings_1.maxLength(200, transitionResultStr));
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceResolvePath = function (path, options) {
	        if (!this.enabled(Category.RESOLVE))
	            return;
	        var tid = hof_1.parse("transition.$id")(options), digest = this.approximateDigests, pathStr = path && path.toString(), policyStr = options && options.resolvePolicy;
	        console.log("Transition #" + tid + " Digest #" + digest + ":         Resolving " + pathStr + " (" + policyStr + ")");
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceResolvePathElement = function (pathElement, resolvablePromises, options) {
	        if (!this.enabled(Category.RESOLVE))
	            return;
	        if (!resolvablePromises.length)
	            return;
	        var tid = hof_1.parse("transition.$id")(options), digest = this.approximateDigests, resolvablePromisesStr = Object.keys(resolvablePromises).join(", "), pathElementStr = pathElement && pathElement.toString(), policyStr = options && options.resolvePolicy;
	        console.log("Transition #" + tid + " Digest #" + digest + ":         Resolve " + pathElementStr + " resolvables: [" + resolvablePromisesStr + "] (" + policyStr + ")");
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceResolveResolvable = function (resolvable, options) {
	        if (!this.enabled(Category.RESOLVE))
	            return;
	        var tid = hof_1.parse("transition.$id")(options), digest = this.approximateDigests, resolvableStr = resolvable && resolvable.toString();
	        console.log("Transition #" + tid + " Digest #" + digest + ":               Resolving -> " + resolvableStr);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceResolvableResolved = function (resolvable, options) {
	        if (!this.enabled(Category.RESOLVE))
	            return;
	        var tid = hof_1.parse("transition.$id")(options), digest = this.approximateDigests, resolvableStr = resolvable && resolvable.toString(), result = strings_1.stringify(resolvable.data);
	        console.log("Transition #" + tid + " Digest #" + digest + ":               <- Resolved  " + resolvableStr + " to: " + strings_1.maxLength(200, result));
	    };
	    /** called by ui-router code */
	    Trace.prototype.tracePathElementInvoke = function (node, fn, deps, options) {
	        if (!this.enabled(Category.INVOKE))
	            return;
	        var tid = hof_1.parse("transition.$id")(options), digest = this.approximateDigests, stateName = node && node.state && node.state.toString(), fnName = strings_1.functionToString(fn);
	        console.log("Transition #" + tid + " Digest #" + digest + ":         Invoke " + options.when + ": context: " + stateName + " " + strings_1.maxLength(200, fnName));
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceError = function (error, transition) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = transition.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(transition);
	        console.log("Transition #" + tid + " Digest #" + digest + ": <- Rejected " + transitionStr + ", reason: " + error);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceSuccess = function (finalState, transition) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = transition.$id, digest = this.approximateDigests, state = finalState.name, transitionStr = strings_1.stringify(transition);
	        console.log("Transition #" + tid + " Digest #" + digest + ": <- Success  " + transitionStr + ", final state: " + state);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceUiViewEvent = function (event, viewData, extra) {
	        if (extra === void 0) { extra = ""; }
	        if (!this.enabled(Category.UIVIEW))
	            return;
	        console.log("ui-view: " + strings_1.padString(30, event) + " " + uiViewString(viewData) + extra);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceUiViewConfigUpdated = function (viewData, context) {
	        if (!this.enabled(Category.UIVIEW))
	            return;
	        this.traceUiViewEvent("Updating", viewData, " with ViewConfig from context='" + context + "'");
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceUiViewScopeCreated = function (viewData, newScope) {
	        if (!this.enabled(Category.UIVIEW))
	            return;
	        this.traceUiViewEvent("Created scope for", viewData, ", scope #" + newScope.$id);
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceUiViewFill = function (viewData, html) {
	        if (!this.enabled(Category.UIVIEW))
	            return;
	        this.traceUiViewEvent("Fill", viewData, " with: " + strings_1.maxLength(200, html));
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceViewServiceEvent = function (event, viewConfig) {
	        if (!this.enabled(Category.VIEWCONFIG))
	            return;
	        console.log("$view.ViewConfig: " + event + " " + viewConfigString(viewConfig));
	    };
	    /** called by ui-router code */
	    Trace.prototype.traceViewServiceUiViewEvent = function (event, viewData) {
	        if (!this.enabled(Category.VIEWCONFIG))
	            return;
	        console.log("$view.ViewConfig: " + event + " " + uiViewString(viewData));
	    };
	    return Trace;
	}());
	exports.Trace = Trace;
	/**
	 * The [[Trace]] singleton
	 *
	 * @example
	 * ```js
	 *
	 * import {trace} from "angular-ui-router";
	 * trace.enable(1, 5);
	 * ```
	 */
	var trace = new Trace();
	exports.trace = trace;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * This module contains APIs related to a Transition.
	 *
	 * See [[Transition]], [[$transitions]]
	 *
	 * @module transition
	 * @preferred
	 */
	/** for typedoc */
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(16));
	__export(__webpack_require__(43));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/** @module transition */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var module_1 = __webpack_require__(13);
	/**
	 * This class returns applicable TransitionHooks for a specific Transition instance.
	 *
	 * Hooks (IEventHook) may be registered globally, e.g., $transitions.onEnter(...), or locally, e.g.
	 * myTransition.onEnter(...).  The HookBuilder finds matching IEventHooks (where the match criteria is
	 * determined by the type of hook)
	 *
	 * The HookBuilder also converts IEventHooks objects to TransitionHook objects, which are used to run a Transition.
	 *
	 * The HookBuilder constructor is given the $transitions service and a Transition instance.  Thus, a HookBuilder
	 * instance may only be used for one specific Transition object. (side note: the _treeChanges accessor is private
	 * in the Transition class, so we must also provide the Transition's _treeChanges)
	 *
	 */
	var HookBuilder = (function () {
	    function HookBuilder($transitions, transition, baseHookOptions) {
	        var _this = this;
	        this.$transitions = $transitions;
	        this.transition = transition;
	        this.baseHookOptions = baseHookOptions;
	        // TODO: These get* methods are returning different cardinalities of hooks
	        // onBefore/onStart/onFinish/onSuccess/onError returns an array of hooks
	        // onExit/onRetain/onEnter returns an array of arrays of hooks
	        this.getOnBeforeHooks = function () { return _this._buildNodeHooks("onBefore", "to", tupleSort(), undefined, { async: false }); };
	        this.getOnStartHooks = function () { return _this._buildNodeHooks("onStart", "to", tupleSort()); };
	        this.getOnExitHooks = function () { return _this._buildNodeHooks("onExit", "exiting", tupleSort(true), function (node) { return ({ $state$: node.state }); }); };
	        this.getOnRetainHooks = function () { return _this._buildNodeHooks("onRetain", "retained", tupleSort(), function (node) { return ({ $state$: node.state }); }); };
	        this.getOnEnterHooks = function () { return _this._buildNodeHooks("onEnter", "entering", tupleSort(), function (node) { return ({ $state$: node.state }); }); };
	        this.getOnFinishHooks = function () { return _this._buildNodeHooks("onFinish", "to", tupleSort(), function (node) { return ({ $treeChanges$: _this.treeChanges }); }); };
	        this.getOnSuccessHooks = function () { return _this._buildNodeHooks("onSuccess", "to", tupleSort(), undefined, { async: false, rejectIfSuperseded: false }); };
	        this.getOnErrorHooks = function () { return _this._buildNodeHooks("onError", "to", tupleSort(), undefined, { async: false, rejectIfSuperseded: false }); };
	        this.treeChanges = transition.treeChanges();
	        this.toState = common_1.tail(this.treeChanges.to).state;
	        this.fromState = common_1.tail(this.treeChanges.from).state;
	        this.transitionOptions = transition.options();
	    }
	    HookBuilder.prototype.asyncHooks = function () {
	        var onStartHooks = this.getOnStartHooks();
	        var onExitHooks = this.getOnExitHooks();
	        var onRetainHooks = this.getOnRetainHooks();
	        var onEnterHooks = this.getOnEnterHooks();
	        var onFinishHooks = this.getOnFinishHooks();
	        var asyncHooks = [onStartHooks, onExitHooks, onRetainHooks, onEnterHooks, onFinishHooks];
	        return asyncHooks.reduce(common_1.unnestR, []).filter(common_1.identity);
	    };
	    /**
	     * Returns an array of newly built TransitionHook objects.
	     *
	     * - Finds all IEventHooks registered for the given `hookType` which matched the transition's [[TreeChanges]].
	     * - Finds [[Node]] (or `Node[]`) to use as the TransitionHook context(s)
	     * - For each of the [[Node]]s, creates a TransitionHook
	     *
	     * @param hookType the name of the hook registration function, e.g., 'onEnter', 'onFinish'.
	     * @param matchingNodesProp selects which [[Node]]s from the [[IMatchingNodes]] object to create hooks for.
	     * @param getLocals a function which accepts a [[Node]] and returns additional locals to provide to the hook as injectables
	     * @param sortHooksFn a function which compares two HookTuple and returns <1, 0, or >1
	     * @param options any specific Transition Hook Options
	     */
	    HookBuilder.prototype._buildNodeHooks = function (hookType, matchingNodesProp, sortHooksFn, getLocals, options) {
	        var _this = this;
	        if (getLocals === void 0) { getLocals = function (node) { return ({}); }; }
	        // Find all the matching registered hooks for a given hook type
	        var matchingHooks = this._matchingHooks(hookType, this.treeChanges);
	        if (!matchingHooks)
	            return [];
	        var makeTransitionHooks = function (hook) {
	            // Fetch the Nodes that caused this hook to match.
	            var matches = hook.matches(_this.treeChanges);
	            // Select the Node[] that will be used as TransitionHook context objects
	            var nodes = matches[matchingNodesProp];
	            // Return an array of HookTuples
	            return nodes.map(function (node) {
	                var _options = common_1.extend({ bind: hook.bind, traceData: { hookType: hookType, context: node } }, _this.baseHookOptions, options);
	                var transitionHook = new module_1.TransitionHook(hook.callback, getLocals(node), node.resolveContext, _options);
	                return { hook: hook, node: node, transitionHook: transitionHook };
	            });
	        };
	        return matchingHooks.map(makeTransitionHooks)
	            .reduce(common_1.unnestR, [])
	            .sort(sortHooksFn)
	            .map(function (tuple) { return tuple.transitionHook; });
	    };
	    /**
	     * Finds all IEventHooks from:
	     * - The Transition object instance hook registry
	     * - The TransitionService ($transitions) global hook registry
	     *
	     * which matched:
	     * - the eventType
	     * - the matchCriteria (to, from, exiting, retained, entering)
	     *
	     * @returns an array of matched [[IEventHook]]s
	     */
	    HookBuilder.prototype._matchingHooks = function (hookName, treeChanges) {
	        return [this.transition, this.$transitions] // Instance and Global hook registries
	            .map(function (reg) { return reg.getHooks(hookName); }) // Get named hooks from registries
	            .filter(common_1.assertPredicate(predicates_1.isArray, "broken event named: " + hookName)) // Sanity check
	            .reduce(common_1.unnestR, []) // Un-nest IEventHook[][] to IEventHook[] array
	            .filter(function (hook) { return hook.matches(treeChanges); }); // Only those satisfying matchCriteria
	    };
	    return HookBuilder;
	}());
	exports.HookBuilder = HookBuilder;
	/**
	 * A factory for a sort function for HookTuples.
	 *
	 * The sort function first compares the Node depth (how deep in the state tree a node is), then compares
	 * the EventHook priority.
	 *
	 * @param reverseDepthSort a boolean, when true, reverses the sort order for the node depth
	 * @returns a tuple sort function
	 */
	function tupleSort(reverseDepthSort) {
	    if (reverseDepthSort === void 0) { reverseDepthSort = false; }
	    return function nodeDepthThenPriority(l, r) {
	        var factor = reverseDepthSort ? -1 : 1;
	        var depthDelta = (l.node.state.path.length - r.node.state.path.length) * factor;
	        return depthDelta !== 0 ? depthDelta : r.hook.priority - l.hook.priority;
	    };
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module transition */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var glob_1 = __webpack_require__(7);
	/**
	 * Determines if the given state matches the matchCriteria
	 * @param state a State Object to test against
	 * @param criterion
	 * - If a string, matchState uses the string as a glob-matcher against the state name
	 * - If an array (of strings), matchState uses each string in the array as a glob-matchers against the state name
	 *   and returns a positive match if any of the globs match.
	 * - If a function, matchState calls the function with the state and returns true if the function's result is truthy.
	 * @returns {boolean}
	 */
	function matchState(state, criterion) {
	    var toMatch = predicates_1.isString(criterion) ? [criterion] : criterion;
	    function matchGlobs(_state) {
	        var globStrings = toMatch;
	        for (var i = 0; i < globStrings.length; i++) {
	            var glob = glob_1.Glob.fromString(globStrings[i]);
	            if ((glob && glob.matches(_state.name)) || (!glob && globStrings[i] === _state.name)) {
	                return true;
	            }
	        }
	        return false;
	    }
	    var matchFn = (predicates_1.isFunction(toMatch) ? toMatch : matchGlobs);
	    return !!matchFn(state);
	}
	exports.matchState = matchState;
	var EventHook = (function () {
	    function EventHook(matchCriteria, callback, options) {
	        if (options === void 0) { options = {}; }
	        this.callback = callback;
	        this.matchCriteria = common_1.extend({ to: true, from: true, exiting: true, retained: true, entering: true }, matchCriteria);
	        this.priority = options.priority || 0;
	        this.bind = options.bind || null;
	    }
	    EventHook._matchingNodes = function (nodes, criterion) {
	        if (criterion === true)
	            return nodes;
	        var matching = nodes.filter(function (node) { return matchState(node.state, criterion); });
	        return matching.length ? matching : null;
	    };
	    /**
	     * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
	     *
	     * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
	     * are the matching [[Node]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
	     */
	    EventHook.prototype.matches = function (treeChanges) {
	        var mc = this.matchCriteria, _matchingNodes = EventHook._matchingNodes;
	        var matches = {
	            to: _matchingNodes([common_1.tail(treeChanges.to)], mc.to),
	            from: _matchingNodes([common_1.tail(treeChanges.from)], mc.from),
	            exiting: _matchingNodes(treeChanges.exiting, mc.exiting),
	            retained: _matchingNodes(treeChanges.retained, mc.retained),
	            entering: _matchingNodes(treeChanges.entering, mc.entering),
	        };
	        // Check if all the criteria matched the TreeChanges object
	        var allMatched = ["to", "from", "exiting", "retained", "entering"]
	            .map(function (prop) { return matches[prop]; })
	            .reduce(common_1.allTrueR, true);
	        return allMatched ? matches : null;
	    };
	    return EventHook;
	}());
	exports.EventHook = EventHook;
	// Return a registration function of the requested type.
	function makeHookRegistrationFn(hooks, name) {
	    return function (matchObject, callback, options) {
	        if (options === void 0) { options = {}; }
	        var eventHook = new EventHook(matchObject, callback, options);
	        hooks[name].push(eventHook);
	        return function deregisterEventHook() {
	            common_1.removeFrom(hooks[name])(eventHook);
	        };
	    };
	}
	var HookRegistry = (function () {
	    function HookRegistry() {
	        var _this = this;
	        this._transitionEvents = {
	            onBefore: [], onStart: [], onEnter: [], onRetain: [], onExit: [], onFinish: [], onSuccess: [], onError: []
	        };
	        this.getHooks = function (name) { return _this._transitionEvents[name]; };
	        this.onBefore = makeHookRegistrationFn(this._transitionEvents, "onBefore");
	        this.onStart = makeHookRegistrationFn(this._transitionEvents, "onStart");
	        /**
	         * @ngdoc function
	         * @name ui.router.state.$transitionsProvider#onEnter
	         * @methodOf ui.router.state.$transitionsProvider
	         *
	         * @description
	         * Registers a function to be injected and invoked during a transition between the matched 'to' and 'from' states,
	         * when the matched 'to' state is being entered. This function is injected with the entering state's resolves.
	         *
	         * This function can be injected with two additional special value:
	         * - **`$transition$`**: The current transition
	         * - **`$state$`**: The state being entered
	         *
	         * @param {object} matchObject See transitionCriteria in {@link ui.router.state.$transitionsProvider#on $transitionsProvider.on}.
	         * @param {function} callback See callback in {@link ui.router.state.$transitionsProvider#on $transitionsProvider.on}.
	         */
	        this.onEnter = makeHookRegistrationFn(this._transitionEvents, "onEnter");
	        /**
	         * @ngdoc function
	         * @name ui.router.state.$transitionsProvider#onRetain
	         * @methodOf ui.router.state.$transitionsProvider
	         *
	         * @description
	         * Registers a function to be injected and invoked during a transition between the matched 'to' and 'from states,
	         * when the matched 'from' state is already active and is not being exited nor entered.
	         *
	         * This function can be injected with two additional special value:
	         * - **`$transition$`**: The current transition
	         * - **`$state$`**: The state that is retained
	         *
	         * @param {object} matchObject See transitionCriteria in {@link ui.router.state.$transitionsProvider#on $transitionsProvider.on}.
	         * @param {function} callback See callback in {@link ui.router.state.$transitionsProvider#on $transitionsProvider.on}.
	         */
	        this.onRetain = makeHookRegistrationFn(this._transitionEvents, "onRetain");
	        /**
	         * @ngdoc function
	         * @name ui.router.state.$transitionsProvider#onExit
	         * @methodOf ui.router.state.$transitionsProvider
	         *
	         * @description
	         * Registers a function to be injected and invoked during a transition between the matched 'to' and 'from states,
	         * when the matched 'from' state is being exited. This function is in injected with the exiting state's resolves.
	         *
	         * This function can be injected with two additional special value:
	         * - **`$transition$`**: The current transition
	         * - **`$state$`**: The state being entered
	         *
	         * @param {object} matchObject See transitionCriteria in {@link ui.router.state.$transitionsProvider#on $transitionsProvider.on}.
	         * @param {function} callback See callback in {@link ui.router.state.$transitionsProvider#on $transitionsProvider.on}.
	         */
	        this.onExit = makeHookRegistrationFn(this._transitionEvents, "onExit");
	        /**
	         * @ngdoc function
	         * @name ui.router.state.$transitionsProvider#onFinish
	         * @methodOf ui.router.state.$transitionsProvider
	         *
	         * @description
	         * Registers a function to be injected and invoked when a transition is finished entering/exiting all states.
	         *
	         * This function can be injected with:
	         * - **`$transition$`**: The current transition
	         *
	         * @param {object} matchObject See transitionCriteria in {@link ui.router.state.$transitionsProvider#on $transitionsProvider.on}.
	         * @param {function} callback See callback in {@link ui.router.state.$transitionsProvider#on $transitionsProvider.on}.
	         */
	        this.onFinish = makeHookRegistrationFn(this._transitionEvents, "onFinish");
	        /**
	         * @ngdoc function
	         * @name ui.router.state.$transitionsProvider#onSuccess
	         * @methodOf ui.router.state.$transitionsProvider
	         *
	         * @description
	         * Registers a function to be injected and invoked when a transition has successfully completed between the matched
	         * 'to' and 'from' state is being exited.
	         * This function is in injected with the 'to' state's resolves (note: `JIT` resolves are not injected).
	         *
	         * This function can be injected with two additional special value:
	         * - **`$transition$`**: The current transition
	         *
	         * @param {object} matchObject See transitionCriteria in {@link ui.router.state.$transitionsProvider#on $transitionsProvider.on}.
	         * @param {function} callback The function which will be injected and invoked, when a matching transition is started.
	         *   The function's return value is ignored.
	         */
	        this.onSuccess = makeHookRegistrationFn(this._transitionEvents, "onSuccess");
	        /**
	         * @ngdoc function
	         * @name ui.router.state.$transitionsProvider#onError
	         * @methodOf ui.router.state.$transitionsProvider
	         *
	         * @description
	         * Registers a function to be injected and invoked when a transition has failed for any reason between the matched
	         * 'to' and 'from' state. The transition rejection reason is injected as `$error$`.
	         *
	         * @param {object} matchObject See transitionCriteria in {@link ui.router.state.$transitionsProvider#on $transitionsProvider.on}.
	         * @param {function} callback The function which will be injected and invoked, when a matching transition is started.
	         *   The function's return value is ignored.
	         */
	        this.onError = makeHookRegistrationFn(this._transitionEvents, "onError");
	    }
	    HookRegistry.mixin = function (source, target) {
	        Object.keys(source._transitionEvents).concat(["getHooks"]).forEach(function (key) { return target[key] = source[key]; });
	    };
	    return HookRegistry;
	}());
	exports.HookRegistry = HookRegistry;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(3);
	var strings_1 = __webpack_require__(9);
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	var trace_1 = __webpack_require__(12);
	var coreservices_1 = __webpack_require__(6);
	var rejectFactory_1 = __webpack_require__(10);
	var module_1 = __webpack_require__(17);
	var REJECT = new rejectFactory_1.RejectFactory();
	var defaultOptions = {
	    async: true,
	    rejectIfSuperseded: true,
	    current: common_1.noop,
	    transition: null,
	    traceData: {},
	    bind: null
	};
	var TransitionHook = (function () {
	    function TransitionHook(fn, locals, resolveContext, options) {
	        var _this = this;
	        this.fn = fn;
	        this.locals = locals;
	        this.resolveContext = resolveContext;
	        this.options = options;
	        this.isSuperseded = function () { return _this.options.current() !== _this.options.transition; };
	        /**
	         * Handles transition abort and transition redirect. Also adds any returned resolvables
	         * to the pathContext for the current pathElement.  If the transition is rejected, then a rejected
	         * promise is returned here, otherwise undefined is returned.
	         */
	        this.mapHookResult = hof_1.pattern([
	            // Transition is no longer current
	            [this.isSuperseded, function () { return REJECT.superseded(_this.options.current()); }],
	            // If the hook returns false, abort the current Transition
	            [hof_1.eq(false), function () { return REJECT.aborted("Hook aborted transition"); }],
	            // If the hook returns a Transition, halt the current Transition and redirect to that Transition.
	            [hof_1.is(module_1.TargetState), function (target) { return REJECT.redirected(target); }],
	            // A promise was returned, wait for the promise and then chain another hookHandler
	            [predicates_1.isPromise, function (promise) { return promise.then(_this.handleHookResult.bind(_this)); }]
	        ]);
	        this.invokeStep = function (moreLocals) {
	            var _a = _this, options = _a.options, fn = _a.fn, resolveContext = _a.resolveContext;
	            var locals = common_1.extend({}, _this.locals, moreLocals);
	            trace_1.trace.traceHookInvocation(_this, options);
	            if (options.rejectIfSuperseded && _this.isSuperseded()) {
	                return REJECT.superseded(options.current());
	            }
	            // TODO: Need better integration of returned promises in synchronous code.
	            if (!options.async) {
	                var hookResult = resolveContext.invokeNow(fn, locals, options);
	                return _this.handleHookResult(hookResult);
	            }
	            return resolveContext.invokeLater(fn, locals, options).then(_this.handleHookResult.bind(_this));
	        };
	        this.options = common_1.defaults(options, defaultOptions);
	    }
	    TransitionHook.prototype.handleHookResult = function (hookResult) {
	        if (!predicates_1.isDefined(hookResult))
	            return undefined;
	        trace_1.trace.traceHookResult(hookResult, undefined, this.options);
	        var transitionResult = this.mapHookResult(hookResult);
	        if (transitionResult)
	            trace_1.trace.traceHookResult(hookResult, transitionResult, this.options);
	        return transitionResult;
	    };
	    TransitionHook.prototype.toString = function () {
	        var _a = this, options = _a.options, fn = _a.fn;
	        var event = hof_1.parse("traceData.hookType")(options) || "internal", context = hof_1.parse("traceData.context.state.name")(options) || hof_1.parse("traceData.context")(options) || "unknown", name = strings_1.fnToString(fn);
	        return event + " context: " + context + ", " + strings_1.maxLength(200, name);
	    };
	    /**
	     * Given an array of TransitionHooks, runs each one synchronously and sequentially.
	     *
	     * Returns a promise chain composed of any promises returned from each hook.invokeStep() call
	     */
	    TransitionHook.runSynchronousHooks = function (hooks, locals, swallowExceptions) {
	        if (locals === void 0) { locals = {}; }
	        if (swallowExceptions === void 0) { swallowExceptions = false; }
	        var results = [];
	        for (var i = 0; i < hooks.length; i++) {
	            try {
	                results.push(hooks[i].invokeStep(locals));
	            }
	            catch (exception) {
	                if (!swallowExceptions)
	                    return REJECT.aborted(exception);
	                console.log("Swallowed exception during synchronous hook handler: " + exception); // TODO: What to do here?
	            }
	        }
	        var rejections = results.filter(TransitionHook.isRejection);
	        if (rejections.length)
	            return rejections[0];
	        return results
	            .filter(hof_1.not(TransitionHook.isRejection))
	            .filter(predicates_1.isPromise)
	            .reduce(function (chain, promise) { return chain.then(hof_1.val(promise)); }, coreservices_1.services.$q.when());
	    };
	    TransitionHook.isRejection = function (hookResult) {
	        return hookResult && hookResult.reason instanceof rejectFactory_1.TransitionRejection && hookResult;
	    };
	    return TransitionHook;
	}());
	exports.TransitionHook = TransitionHook;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module state */ /** for typedoc */
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(26));
	__export(__webpack_require__(33));
	__export(__webpack_require__(34));
	__export(__webpack_require__(35));
	__export(__webpack_require__(36));
	__export(__webpack_require__(37));
	__export(__webpack_require__(27));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var predicates_1 = __webpack_require__(4);
	var common_1 = __webpack_require__(3);
	/**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */
	var StateProvider = (function () {
	    function StateProvider(stateRegistry) {
	        this.stateRegistry = stateRegistry;
	        this.invalidCallbacks = [];
	        common_1.bindFunctions(StateProvider.prototype, this, this);
	    }
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$stateProvider#decorator
	     * @methodOf ui.router.state.$stateProvider
	     *
	     * @description
	     * Allows you to extend (carefully) or override (at your own peril) the
	     * `stateBuilder` object used internally by `$stateProvider`. This can be used
	     * to add custom functionality to ui-router, for example inferring templateUrl
	     * based on the state name.
	     *
	     * When passing only a name, it returns the current (original or decorated) builder
	     * function that matches `name`.
	     *
	     * The builder functions that can be decorated are listed below. Though not all
	     * necessarily have a good use case for decoration, that is up to you to decide.
	     *
	     * In addition, users can attach custom decorators, which will generate new
	     * properties within the state's internal definition. There is currently no clear
	     * use-case for this beyond accessing internal states (i.e. $state.$current),
	     * however, expect this to become increasingly relevant as we introduce additional
	     * meta-programming features.
	     *
	     * **Warning**: Decorators should not be interdependent because the order of
	     * execution of the builder functions in non-deterministic. Builder functions
	     * should only be dependent on the state definition object and super function.
	     *
	     *
	     * Existing builder functions and current return values:
	     *
	     * - **parent** `{object}` - returns the parent state object.
	     * - **data** `{object}` - returns state data, including any inherited data that is not
	     *   overridden by own values (if any).
	     * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	     *   or `null`.
	     * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is
	     *   navigable).
	     * - **params** `{object}` - returns an array of state params that are ensured to
	     *   be a super-set of parent's params.
	     * - **views** `{object}` - returns a views object where each key is an absolute view
	     *   name (i.e. "viewName@stateName") and each value is the config object
	     *   (template, controller) for the view. Even when you don't use the views object
	     *   explicitly on a state config, one is still created for you internally.
	     *   So by decorating this builder function you have access to decorating template
	     *   and controller properties.
	     * - **ownParams** `{object}` - returns an array of params that belong to the state,
	     *   not including any params defined by ancestor states.
	     * - **path** `{string}` - returns the full path from the root down to this state.
	     *   Needed for state activation.
	     * - **includes** `{object}` - returns an object that includes every state that
	     *   would pass a `$state.includes()` test.
	     *
	     * @example
	     * <pre>
	     * // Override the internal 'views' builder with a function that takes the state
	     * // definition, and a reference to the internal function being overridden:
	     * $stateProvider.decorator('views', function (state, parent) {
	     *   let result = {},
	     *       views = parent(state);
	     *
	     *   angular.forEach(views, function (config, name) {
	     *     let autoName = (state.name + '.' + name).replace('.', '/');
	     *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	     *     result[name] = config;
	     *   });
	     *   return result;
	     * });
	     *
	     * $stateProvider.state('home', {
	     *   views: {
	     *     'contact.list': { controller: 'ListController' },
	     *     'contact.item': { controller: 'ItemController' }
	     *   }
	     * });
	     *
	     * // ...
	     *
	     * $state.go('home');
	     * // Auto-populates list and item views with /partials/home/contact/list.html,
	     * // and /partials/home/contact/item.html, respectively.
	     * </pre>
	     *
	     * @param {string} name The name of the builder function to decorate.
	     * @param {object} func A function that is responsible for decorating the original
	     * builder function. The function receives two parameters:
	     *
	     *   - `{object}` - state - The state config object.
	     *   - `{object}` - super - The original builder function.
	     *
	     * @return {object} $stateProvider - $stateProvider instance
	     */
	    StateProvider.prototype.decorator = function (name, func) {
	        return this.stateRegistry.decorator(name, func) || this;
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$stateProvider#state
	     * @methodOf ui.router.state.$stateProvider
	     *
	     * @description
	     * Registers a state configuration under a given state name. The stateConfig object
	     * has the following acceptable properties.
	     *
	     * <a id='template'></a>
	     *
	     * - **`template`** - {string|function=} - html template as a string or a function that returns
	     *   an html template as a string which should be used by the uiView directives. This property
	     *   takes precedence over templateUrl.
	     *
	     *   If `template` is a function, it will be called with the following parameters:
	     *
	     *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	     *     applying the current state
	     *
	     * <a id='templateUrl'></a>
	     *
	     * - **`templateUrl`** - {string|function=} - path or function that returns a path to an html
	     *   template that should be used by uiView.
	     *
	     *   If `templateUrl` is a function, it will be called with the following parameters:
	     *
	     *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	     *     applying the current state
	     *
	     * <a id='templateProvider'></a>
	     *
	     * - **`templateProvider`** - {function=} - Provider function that returns HTML content
	     *   string.
	     *
	     * <a id='controller'></a>
	     *
	     * - **`controller`** - {string|function=} -  Controller fn that should be associated with newly
	     *   related scope or the name of a registered controller if passed as a string.
	     *
	     * <a id='controllerProvider'></a>
	     *
	     * - **`controllerProvider`** - {function=} - Injectable provider function that returns
	     *   the actual controller or string.
	     *
	     * <a id='controllerAs'></a>
	     *
	     * - **`controllerAs`** – {string=} – A controller alias name. If present the controller will be
	     *   published to scope under the controllerAs name.
	     *
	     * <a id='resolve'></a>
	     *
	     * - **`resolve`** - {object.&lt;string, function&gt;=} - An optional map of dependencies which
	     *   should be injected into the controller. If any of these dependencies are promises,
	     *   the router will wait for them all to be resolved or one to be rejected before the
	     *   controller is instantiated. If all the promises are resolved successfully, the values
	     *   of the resolved promises are injected and $stateChangeSuccess event is fired. If any
	     *   of the promises are rejected the $stateChangeError event is fired. The map object is:
	     *
	     *   - key - {string}: name of dependency to be injected into controller
	     *   - factory - {string|function}: If string then it is alias for service. Otherwise if function,
	     *     it is injected and return value it treated as dependency. If result is a promise, it is
	     *     resolved before its value is injected into controller.
	     *
	     * <a id='url'></a>
	     *
	     * - **`url`** - {string=} - A url with optional parameters. When a state is navigated or
	     *   transitioned to, the `$stateParams` service will be populated with any
	     *   parameters that were passed.
	     *
	     * <a id='params'></a>
	     *
	     * - **`params`** - {object=} - An array of parameter names or regular expressions. Only
	     *   use this within a state if you are not using url. Otherwise you can specify your
	     *   parameters within the url. When a state is navigated or transitioned to, the
	     *   $stateParams service will be populated with any parameters that were passed.
	     *
	     * <a id='views'></a>
	     *
	     * - **`views`** - {object=} - Use the views property to set up multiple views or to target views
	     *   manually/explicitly.
	     *
	     * <a id='abstract'></a>
	     *
	     * - **`abstract`** - {boolean=} - An abstract state will never be directly activated,
	     *   but can provide inherited properties to its common children states.
	     *
	     * <a id='onEnter'></a>
	     *
	     * - **`onEnter`** - {object=} - Callback function for when a state is entered. Good way
	     *   to trigger an action or dispatch an event, such as opening a dialog.
	     * If minifying your scripts, make sure to use the `['injection1', 'injection2', function(injection1, injection2){}]` syntax.
	     *
	     * <a id='onExit'></a>
	     *
	     * - **`onExit`** - {object=} - Callback function for when a state is exited. Good way to
	     *   trigger an action or dispatch an event, such as opening a dialog.
	     * If minifying your scripts, make sure to use the `['injection1', 'injection2', function(injection1, injection2){}]` syntax.
	     *
	     * <a id='reloadOnSearch'></a>
	     *
	     * - **`reloadOnSearch = true`** - {boolean=} - If `false`, will not retrigger the same state
	     *   just because a search/query parameter has changed (via $location.search() or $location.hash()).
	     *   Useful for when you'd like to modify $location.search() without triggering a reload.
	     *
	     * <a id='data'></a>
	     *
	     * - **`data`** - {object=} - Arbitrary data object, useful for custom configuration.
	     *
	     * @example
	     * <pre>
	     * // Some state name examples
	     *
	     * // stateName can be a single top-level name (must be unique).
	     * $stateProvider.state("home", {});
	     *
	     * // Or it can be a nested state name. This state is a child of the
	     * // above "home" state.
	     * $stateProvider.state("home.newest", {});
	     *
	     * // Nest states as deeply as needed.
	     * $stateProvider.state("home.newest.abc.xyz.inception", {});
	     *
	     * // state() returns $stateProvider, so you can chain state declarations.
	     * $stateProvider
	     *   .state("home", {})
	     *   .state("about", {})
	     *   .state("contacts", {});
	     * </pre>
	     *
	     * @param {string} name A unique state name, e.g. "home", "about", "contacts".
	     * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
	     * @param {object} definition State configuration object.
	     */
	    StateProvider.prototype.state = function (name, definition) {
	        if (predicates_1.isObject(name)) {
	            definition = name;
	        }
	        else {
	            definition.name = name;
	        }
	        this.stateRegistry.register(definition);
	        return this;
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$stateProvider#onInvalid
	     * @methodOf ui.router.state.$stateProvider
	     *
	     * @description
	     * Registers a function to be injected and invoked when transitionTo has been called with an invalid
	     * state reference parameter
	     *
	     * This function can be injected with one some special values:
	     * - **`$to$`**: TargetState
	     * - **`$from$`**: TargetState
	     *
	     * @param {function} callback
	     *   The function which will be injected and invoked, when a matching transition is started.
	     *   The function may optionally return a {TargetState} or a Promise for a TargetState.  If one
	     *   is returned, it is treated as a redirect.
	     */
	    StateProvider.prototype.onInvalid = function (callback) {
	        this.invalidCallbacks.push(callback);
	    };
	    return StateProvider;
	}());
	exports.StateProvider = StateProvider;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	var module_1 = __webpack_require__(20);
	var parseUrl = function (url) {
	    if (!predicates_1.isString(url))
	        return false;
	    var root = url.charAt(0) === '^';
	    return { val: root ? url.substring(1) : url, root: root };
	};
	/**
	 * @internalapi A internal global service
	 *
	 * StateBuilder is a factory for the internal [[State]] objects.
	 *
	 * When you register a state with the [[StateRegistry]], you register a plain old javascript object which
	 * conforms to the [[StateDeclaration]] interface.  This factory takes that object and builds the corresponding
	 * [[State]] object, which has an API and is used internally.
	 *
	 * Custom properties or API may be added to the internal [[State]] object by registering a decorator function
	 * using the [[builder]] method.
	 */
	var StateBuilder = (function () {
	    function StateBuilder(matcher, $urlMatcherFactoryProvider) {
	        this.matcher = matcher;
	        var self = this;
	        var isRoot = function (state) { return state.name === ""; };
	        var root = function () { return matcher.find(""); };
	        this.builders = {
	            self: [function (state) {
	                    state.self.$$state = function () { return state; };
	                    return state.self;
	                }],
	            parent: [function (state) {
	                    if (isRoot(state))
	                        return null;
	                    return matcher.find(self.parentName(state)) || root();
	                }],
	            data: [function (state) {
	                    if (state.parent && state.parent.data) {
	                        state.data = state.self.data = common_1.inherit(state.parent.data, state.data);
	                    }
	                    return state.data;
	                }],
	            // Build a URLMatcher if necessary, either via a relative or absolute URL
	            url: [function (state) {
	                    var stateDec = state;
	                    var parsed = parseUrl(stateDec.url), parent = state.parent;
	                    var url = !parsed ? stateDec.url : $urlMatcherFactoryProvider.compile(parsed.val, {
	                        params: state.params || {},
	                        paramMap: function (paramConfig, isSearch) {
	                            if (stateDec.reloadOnSearch === false && isSearch)
	                                paramConfig = common_1.extend(paramConfig || {}, { dynamic: true });
	                            return paramConfig;
	                        }
	                    });
	                    if (!url)
	                        return null;
	                    if (!$urlMatcherFactoryProvider.isMatcher(url))
	                        throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	                    return (parsed && parsed.root) ? url : ((parent && parent.navigable) || root()).url.append(url);
	                }],
	            // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	            navigable: [function (state) {
	                    return !isRoot(state) && state.url ? state : (state.parent ? state.parent.navigable : null);
	                }],
	            params: [function (state) {
	                    var makeConfigParam = function (config, id) { return module_1.Param.fromConfig(id, null, config); };
	                    var urlParams = (state.url && state.url.parameters({ inherit: false })) || [];
	                    var nonUrlParams = common_1.values(common_1.map(common_1.omit(state.params || {}, urlParams.map(hof_1.prop('id'))), makeConfigParam));
	                    return urlParams.concat(nonUrlParams).map(function (p) { return [p.id, p]; }).reduce(common_1.applyPairs, {});
	                }],
	            // Each framework-specific ui-router implementation should define its own `views` builder
	            // e.g., src/ng1/viewsBuilder.ts
	            views: [],
	            // Keep a full path from the root down to this state as this is needed for state activation.
	            path: [function (state) {
	                    return state.parent ? state.parent.path.concat(state) : [state];
	                }],
	            // Speed up $state.includes() as it's used a lot
	            includes: [function (state) {
	                    var includes = state.parent ? common_1.extend({}, state.parent.includes) : {};
	                    includes[state.name] = true;
	                    return includes;
	                }]
	        };
	    }
	    /**
	     * Registers a [[BuilderFunction]] for a specific [[State]] property (e.g., `parent`, `url`, or `path`).
	     * More than one BuilderFunction can be registered for a given property.
	     *
	     * The BuilderFunction(s) will be used to define the property on any subsequently built [[State]] objects.
	     *
	     * @param name The name of the State property being registered for.
	     * @param fn The BuilderFunction which will be used to build the State property
	     * @returns a function which deregisters the BuilderFunction
	     */
	    StateBuilder.prototype.builder = function (name, fn) {
	        var builders = this.builders;
	        var array = builders[name] || [];
	        // Backwards compat: if only one builder exists, return it, else return whole arary.
	        if (predicates_1.isString(name) && !predicates_1.isDefined(fn))
	            return array.length > 1 ? array : array[0];
	        if (!predicates_1.isString(name) || !predicates_1.isFunction(fn))
	            return;
	        builders[name] = array;
	        builders[name].push(fn);
	        return function () { return builders[name].splice(builders[name].indexOf(fn, 1)) && null; };
	    };
	    /**
	     * Builds all of the properties on an essentially blank State object, returning a State object which has all its
	     * properties and API built.
	     *
	     * @param state an uninitialized State object
	     * @returns the built State object
	     */
	    StateBuilder.prototype.build = function (state) {
	        var _a = this, matcher = _a.matcher, builders = _a.builders;
	        var parent = this.parentName(state);
	        if (parent && !matcher.find(parent))
	            return null;
	        for (var key in builders) {
	            if (!builders.hasOwnProperty(key))
	                continue;
	            var chain = builders[key].reduce(function (parentFn, step) { return function (_state) { return step(_state, parentFn); }; }, common_1.noop);
	            state[key] = chain(state);
	        }
	        return state;
	    };
	    StateBuilder.prototype.parentName = function (state) {
	        var name = state.name || "";
	        if (name.indexOf('.') !== -1)
	            return name.substring(0, name.lastIndexOf('.'));
	        if (!state.parent)
	            return "";
	        return predicates_1.isString(state.parent) ? state.parent : state.parent.name;
	    };
	    StateBuilder.prototype.name = function (state) {
	        var name = state.name;
	        if (name.indexOf('.') !== -1 || !state.parent)
	            return name;
	        var parentName = predicates_1.isString(state.parent) ? state.parent : state.parent.name;
	        return parentName ? parentName + "." + name : name;
	    };
	    return StateBuilder;
	}());
	exports.StateBuilder = StateBuilder;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * This module contains code for State Parameters.
	 *
	 * See [[ParamDeclaration]]
	 * @module params
	 * @preferred doc
	 */
	/** for typedoc */
	__export(__webpack_require__(21));
	__export(__webpack_require__(24));
	__export(__webpack_require__(25));
	__export(__webpack_require__(23));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module params */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var coreservices_1 = __webpack_require__(6);
	var urlMatcherConfig_1 = __webpack_require__(22);
	var type_1 = __webpack_require__(23);
	var paramTypes_1 = __webpack_require__(24);
	var hasOwn = Object.prototype.hasOwnProperty;
	var isShorthand = function (cfg) { return ["value", "type", "squash", "array", "dynamic"].filter(hasOwn.bind(cfg || {})).length === 0; };
	(function (DefType) {
	    DefType[DefType["PATH"] = 0] = "PATH";
	    DefType[DefType["SEARCH"] = 1] = "SEARCH";
	    DefType[DefType["CONFIG"] = 2] = "CONFIG";
	})(exports.DefType || (exports.DefType = {}));
	var DefType = exports.DefType;
	function unwrapShorthand(cfg) {
	    cfg = isShorthand(cfg) && { value: cfg } || cfg;
	    return common_1.extend(cfg, {
	        $$fn: predicates_1.isInjectable(cfg.value) ? cfg.value : function () { return cfg.value; }
	    });
	}
	function getType(cfg, urlType, location, id) {
	    if (cfg.type && urlType && urlType.name !== 'string')
	        throw new Error("Param '" + id + "' has two type configurations.");
	    if (cfg.type && urlType && urlType.name === 'string' && paramTypes_1.paramTypes.type(cfg.type))
	        return paramTypes_1.paramTypes.type(cfg.type);
	    if (urlType)
	        return urlType;
	    if (!cfg.type)
	        return (location === DefType.CONFIG ? paramTypes_1.paramTypes.type("any") : paramTypes_1.paramTypes.type("string"));
	    return cfg.type instanceof type_1.Type ? cfg.type : paramTypes_1.paramTypes.type(cfg.type);
	}
	/**
	 * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	 */
	function getSquashPolicy(config, isOptional) {
	    var squash = config.squash;
	    if (!isOptional || squash === false)
	        return false;
	    if (!predicates_1.isDefined(squash) || squash == null)
	        return urlMatcherConfig_1.matcherConfig.defaultSquashPolicy();
	    if (squash === true || predicates_1.isString(squash))
	        return squash;
	    throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	}
	function getReplace(config, arrayMode, isOptional, squash) {
	    var replace, configuredKeys, defaultPolicy = [
	        { from: "", to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	    ];
	    replace = predicates_1.isArray(config.replace) ? config.replace : [];
	    if (predicates_1.isString(squash))
	        replace.push({ from: squash, to: undefined });
	    configuredKeys = common_1.map(replace, hof_1.prop("from"));
	    return common_1.filter(defaultPolicy, function (item) { return configuredKeys.indexOf(item.from) === -1; }).concat(replace);
	}
	var Param = (function () {
	    function Param(id, type, config, location) {
	        config = unwrapShorthand(config);
	        type = getType(config, type, location, id);
	        var arrayMode = getArrayMode();
	        type = arrayMode ? type.$asArray(arrayMode, location === DefType.SEARCH) : type;
	        var isOptional = config.value !== undefined;
	        var dynamic = config.dynamic === true;
	        var squash = getSquashPolicy(config, isOptional);
	        var replace = getReplace(config, arrayMode, isOptional, squash);
	        // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	        function getArrayMode() {
	            var arrayDefaults = { array: (location === DefType.SEARCH ? "auto" : false) };
	            var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	            return common_1.extend(arrayDefaults, arrayParamNomenclature, config).array;
	        }
	        common_1.extend(this, { id: id, type: type, location: location, squash: squash, replace: replace, isOptional: isOptional, dynamic: dynamic, config: config, array: arrayMode });
	    }
	    Param.prototype.isDefaultValue = function (value) {
	        return this.isOptional && this.type.equals(this.value(), value);
	    };
	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    Param.prototype.value = function (value) {
	        var _this = this;
	        /**
	         * [Internal] Get the default value of a parameter, which may be an injectable function.
	         */
	        var $$getDefaultValue = function () {
	            if (!coreservices_1.services.$injector)
	                throw new Error("Injectable functions cannot be called at configuration time");
	            var defaultValue = coreservices_1.services.$injector.invoke(_this.config.$$fn);
	            if (defaultValue !== null && defaultValue !== undefined && !_this.type.is(defaultValue))
	                throw new Error("Default value (" + defaultValue + ") for parameter '" + _this.id + "' is not an instance of Type (" + _this.type.name + ")");
	            return defaultValue;
	        };
	        var $replace = function (val) {
	            var replacement = common_1.map(common_1.filter(_this.replace, hof_1.propEq('from', val)), hof_1.prop("to"));
	            return replacement.length ? replacement[0] : val;
	        };
	        value = $replace(value);
	        return !predicates_1.isDefined(value) ? $$getDefaultValue() : this.type.$normalize(value);
	    };
	    Param.prototype.isSearch = function () {
	        return this.location === DefType.SEARCH;
	    };
	    Param.prototype.validates = function (value) {
	        // There was no parameter value, but the param is optional
	        if ((!predicates_1.isDefined(value) || value === null) && this.isOptional)
	            return true;
	        // The value was not of the correct Type, and could not be decoded to the correct Type
	        var normalized = this.type.$normalize(value);
	        if (!this.type.is(normalized))
	            return false;
	        // The value was of the correct type, but when encoded, did not match the Type's regexp
	        var encoded = this.type.encode(normalized);
	        return !(predicates_1.isString(encoded) && !this.type.pattern.exec(encoded));
	    };
	    Param.prototype.toString = function () {
	        return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
	    };
	    /** Creates a new [[Param]] from a CONFIG block */
	    Param.fromConfig = function (id, type, config) {
	        return new Param(id, type, config, DefType.CONFIG);
	    };
	    /** Creates a new [[Param]] from a url PATH */
	    Param.fromPath = function (id, type, config) {
	        return new Param(id, type, config, DefType.PATH);
	    };
	    /** Creates a new [[Param]] from a url SEARCH */
	    Param.fromSearch = function (id, type, config) {
	        return new Param(id, type, config, DefType.SEARCH);
	    };
	    Param.values = function (params, values) {
	        if (values === void 0) { values = {}; }
	        return params.map(function (param) { return [param.id, param.value(values[param.id])]; }).reduce(common_1.applyPairs, {});
	    };
	    /**
	     * Finds [[Param]] objects which have different param values
	     *
	     * Filters a list of [[Param]] objects to only those whose parameter values differ in two param value objects
	     *
	     * @param params: The list of Param objects to filter
	     * @param values1: The first set of parameter values
	     * @param values2: the second set of parameter values
	     *
	     * @returns any Param objects whose values were different between values1 and values2
	     */
	    Param.changed = function (params, values1, values2) {
	        if (values1 === void 0) { values1 = {}; }
	        if (values2 === void 0) { values2 = {}; }
	        return params.filter(function (param) { return !param.type.equals(values1[param.id], values2[param.id]); });
	    };
	    /**
	     * Checks if two param value objects are equal (for a set of [[Param]] objects)
	     *
	     * @param params The list of [[Param]] objects to check
	     * @param values1 The first set of param values
	     * @param values2 The second set of param values
	     *
	     * @returns true if the param values in values1 and values2 are equal
	     */
	    Param.equals = function (params, values1, values2) {
	        if (values1 === void 0) { values1 = {}; }
	        if (values2 === void 0) { values2 = {}; }
	        return Param.changed(params, values1, values2).length === 0;
	    };
	    /** Returns true if a the parameter values are valid, according to the Param definitions */
	    Param.validates = function (params, values) {
	        if (values === void 0) { values = {}; }
	        return params.map(function (param) { return param.validates(values[param.id]); }).reduce(common_1.allTrueR, true);
	    };
	    return Param;
	}());
	exports.Param = Param;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module url */ /** for typedoc */
	var predicates_1 = __webpack_require__(4);
	var MatcherConfig = (function () {
	    function MatcherConfig() {
	        this._isCaseInsensitive = false;
	        this._isStrictMode = true;
	        this._defaultSquashPolicy = false;
	    }
	    MatcherConfig.prototype.caseInsensitive = function (value) {
	        return this._isCaseInsensitive = predicates_1.isDefined(value) ? value : this._isCaseInsensitive;
	    };
	    MatcherConfig.prototype.strictMode = function (value) {
	        return this._isStrictMode = predicates_1.isDefined(value) ? value : this._isStrictMode;
	    };
	    MatcherConfig.prototype.defaultSquashPolicy = function (value) {
	        if (predicates_1.isDefined(value) && value !== true && value !== false && !predicates_1.isString(value))
	            throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	        return this._defaultSquashPolicy = predicates_1.isDefined(value) ? value : this._defaultSquashPolicy;
	    };
	    return MatcherConfig;
	}());
	exports.MatcherConfig = MatcherConfig;
	// TODO: Do not export global instance; create one in UIRouter() constructor
	exports.matcherConfig = new MatcherConfig();


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module params */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	/**
	 * Wraps up a `Type` object to handle array values.
	 */
	function ArrayType(type, mode) {
	    var _this = this;
	    // Wrap non-array value as array
	    function arrayWrap(val) { return predicates_1.isArray(val) ? val : (predicates_1.isDefined(val) ? [val] : []); }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	        switch (val.length) {
	            case 0: return undefined;
	            case 1: return mode === "auto" ? val[0] : val;
	            default: return val;
	        }
	    }
	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	        return function handleArray(val) {
	            if (predicates_1.isArray(val) && val.length === 0)
	                return val;
	            var arr = arrayWrap(val);
	            var result = common_1.map(arr, callback);
	            return (allTruthyMode === true) ? common_1.filter(result, function (x) { return !x; }).length === 0 : arrayUnwrap(result);
	        };
	    }
	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	        return function handleArray(val1, val2) {
	            var left = arrayWrap(val1), right = arrayWrap(val2);
	            if (left.length !== right.length)
	                return false;
	            for (var i = 0; i < left.length; i++) {
	                if (!callback(left[i], right[i]))
	                    return false;
	            }
	            return true;
	        };
	    }
	    ['encode', 'decode', 'equals', '$normalize'].map(function (name) {
	        _this[name] = (name === 'equals' ? arrayEqualsHandler : arrayHandler)(type[name].bind(type));
	    });
	    common_1.extend(this, {
	        name: type.name,
	        pattern: type.pattern,
	        is: arrayHandler(type.is.bind(type), true),
	        $arrayMode: mode
	    });
	}
	/**
	 * Implements an interface to define custom parameter types that can be decoded from and encoded to
	 * string parameters matched in a URL. Used by [[UrlMatcher]]
	 * objects when matching or formatting URLs, or comparing or validating parameter values.
	 *
	 * See [[UrlMatcherFactory.type]] for more information on registering custom types.
	 *
	 * @example
	 * ```
	 *
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) && isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * ```
	 */
	var Type = (function () {
	    /**
	     * @param def  A configuration object which contains the custom type definition.  The object's
	     *        properties will override the default methods and/or pattern in `Type`'s public interface.
	     * @returns a new Type object
	     */
	    function Type(def) {
	        this.pattern = /.*/;
	        common_1.extend(this, def);
	    }
	    // consider these four methods to be "abstract methods" that should be overridden
	    /** @inheritdoc */
	    Type.prototype.is = function (val, key) { return true; };
	    /** @inheritdoc */
	    Type.prototype.encode = function (val, key) { return val; };
	    /** @inheritdoc */
	    Type.prototype.decode = function (val, key) { return val; };
	    /** @inheritdoc */
	    Type.prototype.equals = function (a, b) { return a == b; };
	    Type.prototype.$subPattern = function () {
	        var sub = this.pattern.toString();
	        return sub.substr(1, sub.length - 2);
	    };
	    Type.prototype.toString = function () {
	        return "{Type:" + this.name + "}";
	    };
	    /** Given an encoded string, or a decoded object, returns a decoded object */
	    Type.prototype.$normalize = function (val) {
	        return this.is(val) ? val : this.decode(val);
	    };
	    /**
	     * Wraps an existing custom Type as an array of Type, depending on 'mode'.
	     * e.g.:
	     * - urlmatcher pattern "/path?{queryParam[]:int}"
	     * - url: "/path?queryParam=1&queryParam=2
	     * - $stateParams.queryParam will be [1, 2]
	     * if `mode` is "auto", then
	     * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	     * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	     */
	    Type.prototype.$asArray = function (mode, isSearch) {
	        if (!mode)
	            return this;
	        if (mode === "auto" && !isSearch)
	            throw new Error("'auto' array mode is for query parameters only");
	        return new ArrayType(this, mode);
	    };
	    return Type;
	}());
	exports.Type = Type;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module params */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	var coreservices_1 = __webpack_require__(6);
	var type_1 = __webpack_require__(23);
	// Use tildes to pre-encode slashes.
	// If the slashes are simply URLEncoded, the browser can choose to pre-decode them,
	// and bidirectional encoding/decoding fails.
	// Tilde was chosen because it's not a RFC 3986 section 2.2 Reserved Character
	function valToString(val) { return val != null ? val.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : val; }
	function valFromString(val) { return val != null ? val.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : val; }
	var ParamTypes = (function () {
	    function ParamTypes() {
	        this.enqueue = true;
	        this.typeQueue = [];
	        this.defaultTypes = {
	            "hash": {
	                encode: valToString,
	                decode: valFromString,
	                is: hof_1.is(String),
	                pattern: /.*/,
	                equals: hof_1.val(true)
	            },
	            "string": {
	                encode: valToString,
	                decode: valFromString,
	                is: hof_1.is(String),
	                pattern: /[^/]*/
	            },
	            "int": {
	                encode: valToString,
	                decode: function (val) { return parseInt(val, 10); },
	                is: function (val) { return predicates_1.isDefined(val) && this.decode(val.toString()) === val; },
	                pattern: /-?\d+/
	            },
	            "bool": {
	                encode: function (val) { return val && 1 || 0; },
	                decode: function (val) { return parseInt(val, 10) !== 0; },
	                is: hof_1.is(Boolean),
	                pattern: /0|1/
	            },
	            "date": {
	                encode: function (val) {
	                    return !this.is(val) ? undefined : [
	                        val.getFullYear(),
	                        ('0' + (val.getMonth() + 1)).slice(-2),
	                        ('0' + val.getDate()).slice(-2)
	                    ].join("-");
	                },
	                decode: function (val) {
	                    if (this.is(val))
	                        return val;
	                    var match = this.capture.exec(val);
	                    return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	                },
	                is: function (val) { return val instanceof Date && !isNaN(val.valueOf()); },
	                equals: function (l, r) {
	                    return ['getFullYear', 'getMonth', 'getDate']
	                        .reduce(function (acc, fn) { return acc && l[fn]() === r[fn](); }, true);
	                },
	                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	            },
	            "json": {
	                encode: common_1.toJson,
	                decode: common_1.fromJson,
	                is: hof_1.is(Object),
	                equals: common_1.equals,
	                pattern: /[^/]*/
	            },
	            "any": {
	                encode: common_1.identity,
	                decode: common_1.identity,
	                equals: common_1.equals,
	                pattern: /.*/
	            }
	        };
	        // Register default types. Store them in the prototype of this.types.
	        var makeType = function (definition, name) { return new type_1.Type(common_1.extend({ name: name }, definition)); };
	        this.types = common_1.inherit(common_1.map(this.defaultTypes, makeType), {});
	    }
	    ParamTypes.prototype.type = function (name, definition, definitionFn) {
	        if (!predicates_1.isDefined(definition))
	            return this.types[name];
	        if (this.types.hasOwnProperty(name))
	            throw new Error("A type named '" + name + "' has already been defined.");
	        this.types[name] = new type_1.Type(common_1.extend({ name: name }, definition));
	        if (definitionFn) {
	            this.typeQueue.push({ name: name, def: definitionFn });
	            if (!this.enqueue)
	                this._flushTypeQueue();
	        }
	        return this;
	    };
	    ParamTypes.prototype._flushTypeQueue = function () {
	        while (this.typeQueue.length) {
	            var type = this.typeQueue.shift();
	            if (type.pattern)
	                throw new Error("You cannot override a type's .pattern at runtime.");
	            common_1.extend(this.types[type.name], coreservices_1.services.$injector.invoke(type.def));
	        }
	    };
	    return ParamTypes;
	}());
	exports.ParamTypes = ParamTypes;
	exports.paramTypes = new ParamTypes();


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module params */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var StateParams = (function () {
	    function StateParams(params) {
	        if (params === void 0) { params = {}; }
	        common_1.extend(this, params);
	    }
	    /**
	     * Merges a set of parameters with all parameters inherited between the common parents of the
	     * current state and a given destination state.
	     *
	     * @param {Object} newParams The set of parameters which will be composited with inherited params.
	     * @param {Object} $current Internal definition of object representing the current state.
	     * @param {Object} $to Internal definition of object representing state to transition to.
	     */
	    StateParams.prototype.$inherit = function (newParams, $current, $to) {
	        var parents = common_1.ancestors($current, $to), parentParams, inherited = {}, inheritList = [];
	        for (var i in parents) {
	            if (!parents[i] || !parents[i].params)
	                continue;
	            parentParams = Object.keys(parents[i].params);
	            if (!parentParams.length)
	                continue;
	            for (var j in parentParams) {
	                if (inheritList.indexOf(parentParams[j]) >= 0)
	                    continue;
	                inheritList.push(parentParams[j]);
	                inherited[parentParams[j]] = this[parentParams[j]];
	            }
	        }
	        return common_1.extend({}, inherited, newParams);
	    };
	    ;
	    return StateParams;
	}());
	exports.StateParams = StateParams;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var hof_1 = __webpack_require__(5);
	var param_1 = __webpack_require__(21);
	var rejectFactory_1 = __webpack_require__(10);
	var targetState_1 = __webpack_require__(27);
	var viewHooks_1 = __webpack_require__(28);
	var enterExitHooks_1 = __webpack_require__(29);
	var resolveHooks_1 = __webpack_require__(30);
	var coreservices_1 = __webpack_require__(6);
	/**
	 * This class:
	 *
	 * * Takes a blank transition object and adds all the hooks necessary for it to behave like a state transition.
	 *
	 * * Runs the transition, returning a chained promise which:
	 *   * transforms the resolved Transition.promise to the final destination state.
	 *   * manages the rejected Transition.promise, checking for Dynamic or Redirected transitions
	 *
	 * * Registers a handler to update global $state data such as "active transitions" and "current state/params"
	 *
	 * * Registers view hooks, which maintain the list of active view configs and sync with/update the ui-views
	 *
	 * * Registers onEnter/onRetain/onExit hooks which delegate to the state's hooks of the same name, at the appropriate time
	 *
	 * * Registers eager and lazy resolve hooks
	 */
	var TransitionManager = (function () {
	    function TransitionManager(transition, $transitions, $urlRouter, $view, // service
	        $state, globals) {
	        this.transition = transition;
	        this.$transitions = $transitions;
	        this.$urlRouter = $urlRouter;
	        this.$view = $view;
	        this.$state = $state;
	        this.globals = globals;
	        this.$q = coreservices_1.services.$q;
	        this.viewHooks = new viewHooks_1.ViewHooks(transition, $view);
	        this.enterExitHooks = new enterExitHooks_1.EnterExitHooks(transition);
	        this.resolveHooks = new resolveHooks_1.ResolveHooks(transition);
	        this.treeChanges = transition.treeChanges();
	        this.registerUpdateGlobalState();
	        this.viewHooks.registerHooks();
	        this.enterExitHooks.registerHooks();
	        this.resolveHooks.registerHooks();
	    }
	    TransitionManager.prototype.runTransition = function () {
	        var _this = this;
	        this.globals.transitionHistory.enqueue(this.transition);
	        return this.transition.run()
	            .then(function (trans) { return trans.to(); }) // resolve to the final state (TODO: good? bad?)
	            .catch(function (error) { return _this.transRejected(error); }); // if rejected, handle dynamic and redirect
	    };
	    TransitionManager.prototype.registerUpdateGlobalState = function () {
	        // After globals.current is updated at priority: 10000
	        this.transition.onSuccess({}, this.updateUrl.bind(this), { priority: 9999 });
	    };
	    TransitionManager.prototype.transRejected = function (error) {
	        var _a = this, transition = _a.transition, $state = _a.$state, $q = _a.$q;
	        // Handle redirect and abort
	        if (error instanceof rejectFactory_1.TransitionRejection) {
	            if (error.type === rejectFactory_1.RejectType.IGNORED) {
	                // Update $stateParmas/$state.params/$location.url if transition ignored, but dynamic params have changed.
	                var dynamic = $state.$current.parameters().filter(hof_1.prop('dynamic'));
	                if (!param_1.Param.equals(dynamic, $state.params, transition.params())) {
	                    this.updateUrl();
	                }
	                return $state.current;
	            }
	            if (error.type === rejectFactory_1.RejectType.SUPERSEDED && error.redirected && error.detail instanceof targetState_1.TargetState) {
	                return this._redirectMgr(transition.redirect(error.detail)).runTransition();
	            }
	            if (error.type === rejectFactory_1.RejectType.ABORTED) {
	                this.$urlRouter.update();
	            }
	        }
	        this.$transitions.defaultErrorHandler()(error);
	        return $q.reject(error);
	    };
	    TransitionManager.prototype.updateUrl = function () {
	        var transition = this.transition;
	        var _a = this, $urlRouter = _a.$urlRouter, $state = _a.$state;
	        var options = transition.options();
	        var toState = transition.$to();
	        if (options.location && $state.$current.navigable) {
	            $urlRouter.push($state.$current.navigable.url, $state.params, { replace: options.location === 'replace' });
	        }
	        $urlRouter.update(true);
	    };
	    TransitionManager.prototype._redirectMgr = function (redirect) {
	        var _a = this, $transitions = _a.$transitions, $urlRouter = _a.$urlRouter, $view = _a.$view, $state = _a.$state, globals = _a.globals;
	        return new TransitionManager(redirect, $transitions, $urlRouter, $view, $state, globals);
	    };
	    return TransitionManager;
	}());
	exports.TransitionManager = TransitionManager;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/** @module state */ /** for typedoc */
	"use strict";
	/**
	 * @ngdoc object
	 * @name ui.router.state.type:TargetState
	 *
	 * @description
	 * Encapsulate the desired target of a transition.
	 * Wraps an identifier for a state, a set of parameters, and transition options with the definition of the state.
	 *
	 * @param {StateOrName} _identifier  An identifier for a state. Either a fully-qualified path, or the object
	 *            used to define the state.
	 * @param {IState} _definition The `State` object definition.
	 * @param {ParamsOrArray} _params Parameters for the target state
	 * @param {TransitionOptions} _options Transition options.
	 */
	var TargetState = (function () {
	    function TargetState(_identifier, _definition, _params, _options) {
	        if (_params === void 0) { _params = {}; }
	        if (_options === void 0) { _options = {}; }
	        this._identifier = _identifier;
	        this._definition = _definition;
	        this._options = _options;
	        this._params = _params || {};
	    }
	    TargetState.prototype.name = function () {
	        return this._definition && this._definition.name || this._identifier;
	    };
	    TargetState.prototype.identifier = function () {
	        return this._identifier;
	    };
	    TargetState.prototype.params = function () {
	        return this._params;
	    };
	    TargetState.prototype.$state = function () {
	        return this._definition;
	    };
	    TargetState.prototype.state = function () {
	        return this._definition && this._definition.self;
	    };
	    TargetState.prototype.options = function () {
	        return this._options;
	    };
	    TargetState.prototype.exists = function () {
	        return !!(this._definition && this._definition.self);
	    };
	    TargetState.prototype.valid = function () {
	        return !this.error();
	    };
	    TargetState.prototype.error = function () {
	        var base = this.options().relative;
	        if (!this._definition && !!base) {
	            var stateName = base.name ? base.name : base;
	            return "Could not resolve '" + this.name() + "' from state '" + stateName + "'";
	        }
	        if (!this._definition)
	            return "No such state '" + this.name() + "'";
	        if (!this._definition.self)
	            return "State '" + this.name() + "' has an invalid definition";
	    };
	    return TargetState;
	}());
	exports.TargetState = TargetState;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var coreservices_1 = __webpack_require__(6);
	var ViewHooks = (function () {
	    function ViewHooks(transition, $view) {
	        this.transition = transition;
	        this.$view = $view;
	        this.treeChanges = transition.treeChanges();
	        this.enteringViews = transition.views("entering");
	        this.exitingViews = transition.views("exiting");
	    }
	    ViewHooks.prototype.loadAllEnteringViews = function () {
	        return coreservices_1.services.$q.all(this.enteringViews.map(function (view) { return view.load(); })).then(common_1.noop);
	    };
	    ViewHooks.prototype.updateViews = function () {
	        var $view = this.$view;
	        this.exitingViews.forEach(function (viewConfig) { return $view.deactivateViewConfig(viewConfig); });
	        this.enteringViews.forEach(function (viewConfig) { return $view.activateViewConfig(viewConfig); });
	        $view.sync();
	    };
	    ViewHooks.prototype.registerHooks = function () {
	        if (this.enteringViews.length) {
	            this.transition.onStart({}, this.loadAllEnteringViews.bind(this));
	        }
	        if (this.exitingViews.length || this.enteringViews.length)
	            this.transition.onSuccess({}, this.updateViews.bind(this));
	    };
	    return ViewHooks;
	}());
	exports.ViewHooks = ViewHooks;


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	var EnterExitHooks = (function () {
	    function EnterExitHooks(transition) {
	        this.transition = transition;
	    }
	    EnterExitHooks.prototype.registerHooks = function () {
	        this.registerOnEnterHooks();
	        this.registerOnRetainHooks();
	        this.registerOnExitHooks();
	    };
	    EnterExitHooks.prototype.registerOnEnterHooks = function () {
	        var _this = this;
	        this.transition.entering().filter(function (state) { return !!state.onEnter; })
	            .forEach(function (state) { return _this.transition.onEnter({ entering: state.name }, state.onEnter); });
	    };
	    EnterExitHooks.prototype.registerOnRetainHooks = function () {
	        var _this = this;
	        this.transition.retained().filter(function (state) { return !!state.onRetain; })
	            .forEach(function (state) { return _this.transition.onRetain({ retained: state.name }, state.onRetain); });
	    };
	    EnterExitHooks.prototype.registerOnExitHooks = function () {
	        var _this = this;
	        this.transition.exiting().filter(function (state) { return !!state.onExit; })
	            .forEach(function (state) { return _this.transition.onExit({ exiting: state.name }, state.onExit); });
	    };
	    return EnterExitHooks;
	}());
	exports.EnterExitHooks = EnterExitHooks;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var interface_1 = __webpack_require__(31);
	var hof_2 = __webpack_require__(5);
	var resolvable_1 = __webpack_require__(32);
	var LAZY = interface_1.ResolvePolicy[interface_1.ResolvePolicy.LAZY];
	var EAGER = interface_1.ResolvePolicy[interface_1.ResolvePolicy.EAGER];
	/**
	 * Registers Eager and Lazy (for entering states) resolve hooks
	 *
	 * * registers a hook that resolves EAGER resolves, for the To Path, onStart of the transition
	 * * registers a hook that resolves LAZY resolves, for each state, before it is entered
	 */
	var ResolveHooks = (function () {
	    function ResolveHooks(transition) {
	        this.transition = transition;
	    }
	    ResolveHooks.prototype.registerHooks = function () {
	        var treeChanges = this.transition.treeChanges();
	        /** a function which resolves any EAGER Resolvables for a Path */
	        $eagerResolvePath.$inject = ['$transition$'];
	        function $eagerResolvePath($transition$) {
	            return common_1.tail(treeChanges.to).resolveContext.resolvePath(common_1.extend({ transition: $transition$ }, { resolvePolicy: EAGER }));
	        }
	        /** Returns a function which pre-resolves any LAZY Resolvables for a Node in a Path */
	        $lazyResolveEnteringState.$inject = ['$state$', '$transition$'];
	        function $lazyResolveEnteringState($state$, $transition$) {
	            var node = common_1.find(treeChanges.entering, hof_1.propEq('state', $state$));
	            // A new Resolvable contains all the resolved data in this context as a single object, for injection as `$resolve$`
	            var context = node.resolveContext;
	            var $resolve$ = new resolvable_1.Resolvable("$resolve$", function () { return common_1.map(context.getResolvables(), function (r) { return r.data; }); });
	            var options = common_1.extend({ transition: $transition$ }, { resolvePolicy: LAZY });
	            // Resolve all the LAZY resolves, then resolve the `$resolve$` object, then add `$resolve$` to the context
	            return context.resolvePathElement(node.state, options)
	                .then(function () { return $resolve$.resolveResolvable(context); })
	                .then(function () { return context.addResolvables({ $resolve$: $resolve$ }, node.state); });
	        }
	        // Resolve eager resolvables before when the transition starts
	        this.transition.onStart({}, $eagerResolvePath, { priority: 1000 });
	        // Resolve lazy resolvables before each state is entered
	        this.transition.onEnter({ entering: hof_2.val(true) }, $lazyResolveEnteringState, { priority: 1000 });
	    };
	    return ResolveHooks;
	}());
	exports.ResolveHooks = ResolveHooks;


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	// Defines the available policies and their ordinals.
	(function (ResolvePolicy) {
	    ResolvePolicy[ResolvePolicy["JIT"] = 0] = "JIT";
	    ResolvePolicy[ResolvePolicy["LAZY"] = 1] = "LAZY";
	    ResolvePolicy[ResolvePolicy["EAGER"] = 2] = "EAGER"; // Eager resolves are resolved before the transition starts.
	})(exports.ResolvePolicy || (exports.ResolvePolicy = {}));
	var ResolvePolicy = exports.ResolvePolicy;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module resolve */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var coreservices_1 = __webpack_require__(6);
	var trace_1 = __webpack_require__(12);
	/**
	 * The basic building block for the resolve system.
	 *
	 * Resolvables encapsulate a state's resolve's resolveFn, the resolveFn's declared dependencies, the wrapped (.promise),
	 * and the unwrapped-when-complete (.data) result of the resolveFn.
	 *
	 * Resolvable.get() either retrieves the Resolvable's existing promise, or else invokes resolve() (which invokes the
	 * resolveFn) and returns the resulting promise.
	 *
	 * Resolvable.get() and Resolvable.resolve() both execute within a context path, which is passed as the first
	 * parameter to those fns.
	 */
	var Resolvable = (function () {
	    function Resolvable(name, resolveFn, preResolvedData) {
	        this.promise = undefined;
	        common_1.extend(this, {
	            name: name,
	            resolveFn: resolveFn,
	            deps: coreservices_1.services.$injector.annotate(resolveFn, coreservices_1.services.$injector.strictDi),
	            data: preResolvedData
	        });
	    }
	    // synchronous part:
	    // - sets up the Resolvable's promise
	    // - retrieves dependencies' promises
	    // - returns promise for async part
	    // asynchronous part:
	    // - wait for dependencies promises to resolve
	    // - invoke the resolveFn
	    // - wait for resolveFn promise to resolve
	    // - store unwrapped data
	    // - resolve the Resolvable's promise
	    Resolvable.prototype.resolveResolvable = function (resolveContext, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        var _a = this, name = _a.name, deps = _a.deps, resolveFn = _a.resolveFn;
	        trace_1.trace.traceResolveResolvable(this, options);
	        // First, set up an overall deferred/promise for this Resolvable
	        var deferred = coreservices_1.services.$q.defer();
	        this.promise = deferred.promise;
	        // Load a map of all resolvables for this state from the context path
	        // Omit the current Resolvable from the result, so we don't try to inject this into this
	        var ancestorsByName = resolveContext.getResolvables(null, { omitOwnLocals: [name] });
	        // Limit the ancestors Resolvables map to only those that the current Resolvable fn's annotations depends on
	        var depResolvables = common_1.pick(ancestorsByName, deps);
	        // Get promises (or synchronously invoke resolveFn) for deps
	        var depPromises = common_1.map(depResolvables, function (resolvable) { return resolvable.get(resolveContext, options); });
	        // Return a promise chain that waits for all the deps to resolve, then invokes the resolveFn passing in the
	        // dependencies as locals, then unwraps the resulting promise's data.
	        return coreservices_1.services.$q.all(depPromises).then(function (locals) {
	            try {
	                var result = coreservices_1.services.$injector.invoke(resolveFn, null, locals);
	                deferred.resolve(result);
	            }
	            catch (error) {
	                deferred.reject(error);
	            }
	            return _this.promise;
	        }).then(function (data) {
	            _this.data = data;
	            trace_1.trace.traceResolvableResolved(_this, options);
	            return _this.promise;
	        });
	    };
	    Resolvable.prototype.get = function (resolveContext, options) {
	        return this.promise || this.resolveResolvable(resolveContext, options);
	    };
	    Resolvable.prototype.toString = function () {
	        return "Resolvable(name: " + this.name + ", requires: [" + this.deps + "])";
	    };
	    /**
	     * Validates the result map as a "resolve:" style object, then transforms the resolves into Resolvables
	     */
	    Resolvable.makeResolvables = function (resolves) {
	        // If a hook result is an object, it should be a map of strings to functions.
	        var invalid = common_1.filter(resolves, hof_1.not(predicates_1.isInjectable)), keys = Object.keys(invalid);
	        if (keys.length)
	            throw new Error("Invalid resolve key/value: " + keys[0] + "/" + invalid[keys[0]]);
	        return common_1.map(resolves, function (fn, name) { return new Resolvable(name, fn); });
	    };
	    return Resolvable;
	}());
	exports.Resolvable = Resolvable;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/** @module state */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	/**
	 * @ngdoc object
	 * @name ui.router.state.type:State
	 *
	 * @description
	 * Definition object for states. Includes methods for manipulating the state heirarchy.
	 *
	 * @param {Object} config  A configuration object hash that includes the results of user-supplied
	 *        values, as well as values from `StateBuilder`.
	 *
	 * @returns {Object}  Returns a new `State` object.
	 */
	var State = (function () {
	    function State(config) {
	        common_1.extend(this, config);
	        // Object.freeze(this);
	    }
	    /**
	     * @ngdoc function
	     * @name ui.router.state.type:State#is
	     * @methodOf ui.router.state.type:State
	     *
	     * @description
	     * Compares the identity of the state against the passed value, which is either an object
	     * reference to the actual `State` instance, the original definition object passed to
	     * `$stateProvider.state()`, or the fully-qualified name.
	     *
	     * @param {Object} ref Can be one of (a) a `State` instance, (b) an object that was passed
	     *        into `$stateProvider.state()`, (c) the fully-qualified name of a state as a string.
	     * @returns {boolean} Returns `true` if `ref` matches the current `State` instance.
	     */
	    State.prototype.is = function (ref) {
	        return this === ref || this.self === ref || this.fqn() === ref;
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.state.type:State#fqn
	     * @methodOf ui.router.state.type:State
	     *
	     * @description
	     * Returns the fully-qualified name of the state, based on its current position in the tree.
	     *
	     * @returns {string} Returns a dot-separated name of the state.
	     */
	    State.prototype.fqn = function () {
	        if (!this.parent || !(this.parent instanceof this.constructor))
	            return this.name;
	        var name = this.parent.fqn();
	        return name ? name + "." + this.name : this.name;
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.state.type:State#root
	     * @methodOf ui.router.state.type:State
	     *
	     * @description
	     * Returns the root node of this state's tree.
	     *
	     * @returns {State} The root of this state's tree.
	     */
	    State.prototype.root = function () {
	        return this.parent && this.parent.root() || this;
	    };
	    State.prototype.parameters = function (opts) {
	        opts = common_1.defaults(opts, { inherit: true });
	        var inherited = opts.inherit && this.parent && this.parent.parameters() || [];
	        return inherited.concat(common_1.values(this.params));
	    };
	    State.prototype.parameter = function (id, opts) {
	        if (opts === void 0) { opts = {}; }
	        return (this.url && this.url.parameter(id, opts) ||
	            common_1.find(common_1.values(this.params), hof_1.propEq('id', id)) ||
	            opts.inherit && this.parent && this.parent.parameter(id));
	    };
	    State.prototype.toString = function () {
	        return this.fqn();
	    };
	    return State;
	}());
	exports.State = State;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var predicates_1 = __webpack_require__(4);
	var StateMatcher = (function () {
	    function StateMatcher(_states) {
	        this._states = _states;
	    }
	    StateMatcher.prototype.isRelative = function (stateName) {
	        stateName = stateName || "";
	        return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	    };
	    StateMatcher.prototype.find = function (stateOrName, base) {
	        if (!stateOrName && stateOrName !== "")
	            return undefined;
	        var isStr = predicates_1.isString(stateOrName);
	        var name = isStr ? stateOrName : stateOrName.name;
	        if (this.isRelative(name))
	            name = this.resolvePath(name, base);
	        var state = this._states[name];
	        if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
	            return state;
	        }
	        return undefined;
	    };
	    StateMatcher.prototype.resolvePath = function (name, base) {
	        if (!base)
	            throw new Error("No reference point given for path '" + name + "'");
	        var baseState = this.find(base);
	        var splitName = name.split("."), i = 0, pathLength = splitName.length, current = baseState;
	        for (; i < pathLength; i++) {
	            if (splitName[i] === "" && i === 0) {
	                current = baseState;
	                continue;
	            }
	            if (splitName[i] === "^") {
	                if (!current.parent)
	                    throw new Error("Path '" + name + "' not valid for state '" + baseState.name + "'");
	                current = current.parent;
	                continue;
	            }
	            break;
	        }
	        var relName = splitName.slice(i).join(".");
	        return current.name + (current.name && relName ? "." : "") + relName;
	    };
	    return StateMatcher;
	}());
	exports.StateMatcher = StateMatcher;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var module_1 = __webpack_require__(17);
	var StateQueueManager = (function () {
	    function StateQueueManager(states, builder, $urlRouterProvider) {
	        this.states = states;
	        this.builder = builder;
	        this.$urlRouterProvider = $urlRouterProvider;
	        this.queue = [];
	    }
	    StateQueueManager.prototype.register = function (config) {
	        var _a = this, states = _a.states, queue = _a.queue, $state = _a.$state;
	        // Wrap a new object around the state so we can store our private details easily.
	        // @TODO: state = new State(extend({}, config, { ... }))
	        var state = common_1.inherit(new module_1.State(), common_1.extend({}, config, {
	            self: config,
	            resolve: config.resolve || {},
	            toString: function () { return config.name; }
	        }));
	        if (!predicates_1.isString(state.name))
	            throw new Error("State must have a valid name");
	        if (states.hasOwnProperty(state.name) || common_1.pluck(queue, 'name').indexOf(state.name) !== -1)
	            throw new Error("State '" + state.name + "' is already defined");
	        queue.push(state);
	        if (this.$state) {
	            this.flush($state);
	        }
	        return state;
	    };
	    StateQueueManager.prototype.flush = function ($state) {
	        var _a = this, queue = _a.queue, states = _a.states, builder = _a.builder;
	        var result, state, orphans = [], orphanIdx, previousQueueLength = {};
	        while (queue.length > 0) {
	            state = queue.shift();
	            result = builder.build(state);
	            orphanIdx = orphans.indexOf(state);
	            if (result) {
	                if (states.hasOwnProperty(state.name))
	                    throw new Error("State '" + name + "' is already defined");
	                states[state.name] = state;
	                this.attachRoute($state, state);
	                if (orphanIdx >= 0)
	                    orphans.splice(orphanIdx, 1);
	                continue;
	            }
	            var prev = previousQueueLength[state.name];
	            previousQueueLength[state.name] = queue.length;
	            if (orphanIdx >= 0 && prev === queue.length) {
	                // Wait until two consecutive iterations where no additional states were dequeued successfully.
	                throw new Error("Cannot register orphaned state '" + state.name + "'");
	            }
	            else if (orphanIdx < 0) {
	                orphans.push(state);
	            }
	            queue.push(state);
	        }
	        return states;
	    };
	    StateQueueManager.prototype.autoFlush = function ($state) {
	        this.$state = $state;
	        this.flush($state);
	    };
	    StateQueueManager.prototype.attachRoute = function ($state, state) {
	        var $urlRouterProvider = this.$urlRouterProvider;
	        if (state[common_1.abstractKey] || !state.url)
	            return;
	        $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
	                if ($state.$current.navigable !== state || !common_1.equalForKeys($match, $stateParams)) {
	                    $state.transitionTo(state, $match, { inherit: true });
	                }
	            }]);
	    };
	    return StateQueueManager;
	}());
	exports.StateQueueManager = StateQueueManager;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/** @module state */ /** for typedoc */
	"use strict";
	var stateMatcher_1 = __webpack_require__(34);
	var stateBuilder_1 = __webpack_require__(19);
	var stateQueueManager_1 = __webpack_require__(35);
	var StateRegistry = (function () {
	    function StateRegistry(urlMatcherFactory, urlRouterProvider) {
	        this.states = {};
	        this.matcher = new stateMatcher_1.StateMatcher(this.states);
	        this.builder = new stateBuilder_1.StateBuilder(this.matcher, urlMatcherFactory);
	        this.stateQueue = new stateQueueManager_1.StateQueueManager(this.states, this.builder, urlRouterProvider);
	        var rootStateDef = {
	            name: '',
	            url: '^',
	            views: null,
	            params: {
	                '#': { value: null, type: 'hash' }
	            },
	            abstract: true
	        };
	        var _root = this._root = this.stateQueue.register(rootStateDef);
	        _root.navigable = null;
	    }
	    StateRegistry.prototype.root = function () {
	        return this._root;
	    };
	    StateRegistry.prototype.register = function (stateDefinition) {
	        return this.stateQueue.register(stateDefinition);
	    };
	    StateRegistry.prototype.get = function (stateOrName, base) {
	        var _this = this;
	        if (arguments.length === 0)
	            return Object.keys(this.states).map(function (name) { return _this.states[name].self; });
	        var found = this.matcher.find(stateOrName, base);
	        return found && found.self || null;
	    };
	    StateRegistry.prototype.decorator = function (name, func) {
	        return this.builder.builder(name, func);
	    };
	    return StateRegistry;
	}());
	exports.StateRegistry = StateRegistry;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var queue_1 = __webpack_require__(8);
	var coreservices_1 = __webpack_require__(6);
	var pathFactory_1 = __webpack_require__(38);
	var node_1 = __webpack_require__(39);
	var transitionService_1 = __webpack_require__(43);
	var rejectFactory_1 = __webpack_require__(10);
	var targetState_1 = __webpack_require__(27);
	var transitionManager_1 = __webpack_require__(26);
	var param_1 = __webpack_require__(21);
	var glob_1 = __webpack_require__(7);
	var common_2 = __webpack_require__(3);
	var common_3 = __webpack_require__(3);
	var StateService = (function () {
	    function StateService($view, $urlRouter, $transitions, stateRegistry, stateProvider, globals) {
	        this.$view = $view;
	        this.$urlRouter = $urlRouter;
	        this.$transitions = $transitions;
	        this.stateRegistry = stateRegistry;
	        this.stateProvider = stateProvider;
	        this.globals = globals;
	        this.rejectFactory = new rejectFactory_1.RejectFactory();
	        var getters = ['current', '$current', 'params', 'transition'];
	        var boundFns = Object.keys(StateService.prototype).filter(function (key) { return getters.indexOf(key) === -1; });
	        common_3.bindFunctions(StateService.prototype, this, this, boundFns);
	    }
	    Object.defineProperty(StateService.prototype, "transition", {
	        get: function () { return this.globals.transition; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(StateService.prototype, "params", {
	        get: function () { return this.globals.params; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(StateService.prototype, "current", {
	        get: function () { return this.globals.current; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(StateService.prototype, "$current", {
	        get: function () { return this.globals.$current; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Invokes the onInvalid callbacks, in natural order.  Each callback's return value is checked in sequence
	     * until one of them returns an instance of TargetState.   The results of the callbacks are wrapped
	     * in $q.when(), so the callbacks may return promises.
	     *
	     * If a callback returns an TargetState, then it is used as arguments to $state.transitionTo() and
	     * the result returned.
	     */
	    StateService.prototype._handleInvalidTargetState = function (fromPath, $to$) {
	        var _this = this;
	        var latestThing = function () { return _this.globals.transitionHistory.peekTail(); };
	        var latest = latestThing();
	        var $from$ = pathFactory_1.PathFactory.makeTargetState(fromPath);
	        var callbackQueue = new queue_1.Queue([].concat(this.stateProvider.invalidCallbacks));
	        var rejectFactory = this.rejectFactory;
	        var $q = coreservices_1.services.$q, $injector = coreservices_1.services.$injector;
	        var invokeCallback = function (callback) { return $q.when($injector.invoke(callback, null, { $to$: $to$, $from$: $from$ })); };
	        var checkForRedirect = function (result) {
	            if (!(result instanceof targetState_1.TargetState)) {
	                return;
	            }
	            var target = result;
	            // Recreate the TargetState, in case the state is now defined.
	            target = _this.target(target.identifier(), target.params(), target.options());
	            if (!target.valid())
	                return rejectFactory.invalid(target.error());
	            if (latestThing() !== latest)
	                return rejectFactory.superseded();
	            return _this.transitionTo(target.identifier(), target.params(), target.options());
	        };
	        function invokeNextCallback() {
	            var nextCallback = callbackQueue.dequeue();
	            if (nextCallback === undefined)
	                return rejectFactory.invalid($to$.error());
	            return invokeCallback(nextCallback).then(checkForRedirect).then(function (result) { return result || invokeNextCallback(); });
	        }
	        return invokeNextCallback();
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state, or a partial state hierarchy. All resolves are re-resolved,
	     * controllers reinstantiated, and events re-fired.
	     *
	     * @example
	     * <pre>
	     * let app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, {
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>
	     *
	     * @param {string=|object=} reloadState - A state name or a state object, which is the root of the resolves to be re-resolved.
	     * @example
	     * <pre>
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item'
	     * //and current state is 'contacts.detail.item'
	     * let app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and nested 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * </pre>
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    StateService.prototype.reload = function (reloadState) {
	        return this.transitionTo(this.current, this.params, {
	            reload: predicates_1.isDefined(reloadState) ? reloadState : true,
	            inherit: false,
	            notify: false
	        });
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls
	     * `$state.transitionTo` internally but automatically sets options to
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`.
	     * This allows you to easily use an absolute or relative to path and specify
	     * only the parameters you'd like to update (while letting unspecified parameters
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * <pre>
	     * let app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * </pre>
	     * <img src='../ngdoc_assets/StateGoExamples.png'/>
	     *
	     * @param {string} to Absolute state name or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state,
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently
	     * defined parameters. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'),
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * <br/>Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */
	    StateService.prototype.go = function (to, params, options) {
	        var defautGoOpts = { relative: this.$current, inherit: true };
	        var transOpts = common_1.defaults(options, defautGoOpts, transitionService_1.defaultTransOpts);
	        return this.transitionTo(to, params, transOpts);
	    };
	    ;
	    /** Factory method for creating a TargetState */
	    StateService.prototype.target = function (identifier, params, options) {
	        if (options === void 0) { options = {}; }
	        // If we're reloading, find the state object to reload from
	        if (predicates_1.isObject(options.reload) && !options.reload.name)
	            throw new Error('Invalid reload state object');
	        options.reloadState = options.reload === true ? this.stateRegistry.root() : this.stateRegistry.matcher.find(options.reload, options.relative);
	        if (options.reload && !options.reloadState)
	            throw new Error("No such reload state '" + (predicates_1.isString(options.reload) ? options.reload : options.reload.name) + "'");
	        var stateDefinition = this.stateRegistry.matcher.find(identifier, options.relative);
	        return new targetState_1.TargetState(identifier, stateDefinition, params, options);
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * <pre>
	     * let app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * </pre>
	     *
	     * @param {string} to State name.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'),
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    StateService.prototype.transitionTo = function (to, toParams, options) {
	        var _this = this;
	        if (toParams === void 0) { toParams = {}; }
	        if (options === void 0) { options = {}; }
	        var transHistory = this.globals.transitionHistory;
	        options = common_1.defaults(options, transitionService_1.defaultTransOpts);
	        options = common_1.extend(options, { current: transHistory.peekTail.bind(transHistory) });
	        var ref = this.target(to, toParams, options);
	        var latestSuccess = this.globals.successfulTransitions.peekTail();
	        var rootPath = function () { return pathFactory_1.PathFactory.bindTransNodesToPath([new node_1.Node(_this.stateRegistry.root())]); };
	        var currentPath = latestSuccess ? latestSuccess.treeChanges().to : rootPath();
	        if (!ref.exists())
	            return this._handleInvalidTargetState(currentPath, ref);
	        if (!ref.valid())
	            return coreservices_1.services.$q.reject(ref.error());
	        var transition = this.$transitions.create(currentPath, ref);
	        var tMgr = new transitionManager_1.TransitionManager(transition, this.$transitions, this.$urlRouter, this.$view, this, this.globals);
	        var transitionPromise = tMgr.runTransition();
	        // Return a promise for the transition, which also has the transition object on it.
	        return common_1.extend(transitionPromise, { transition: transition });
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */
	    StateService.prototype.is = function (stateOrName, params, options) {
	        options = common_1.defaults(options, { relative: this.$current });
	        var state = this.stateRegistry.matcher.find(stateOrName, options.relative);
	        if (!predicates_1.isDefined(state))
	            return undefined;
	        if (this.$current !== state)
	            return false;
	        return predicates_1.isDefined(params) && params !== null ? param_1.Param.equals(state.parameters(), this.params, params) : true;
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
	     * </pre>
	     *
	     * Basic globbing patterns
	     * <pre>
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * </pre>
	     *
	     * @param {string} stateOrName A partial name, relative name, or glob pattern
	     * to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    StateService.prototype.includes = function (stateOrName, params, options) {
	        options = common_1.defaults(options, { relative: this.$current });
	        var glob = predicates_1.isString(stateOrName) && glob_1.Glob.fromString(stateOrName);
	        if (glob) {
	            if (!glob.matches(this.$current.name))
	                return false;
	            stateOrName = this.$current.name;
	        }
	        var state = this.stateRegistry.matcher.find(stateOrName, options.relative), include = this.$current.includes;
	        if (!predicates_1.isDefined(state))
	            return undefined;
	        if (!predicates_1.isDefined(include[state.name]))
	            return false;
	        // @TODO Replace with Param.equals() ?
	        return params ? common_2.equalForKeys(param_1.Param.values(state.parameters(), params), this.params, Object.keys(params)) : true;
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * <pre>
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'),
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     *
	     * @returns {string} compiled state url
	     */
	    StateService.prototype.href = function (stateOrName, params, options) {
	        var defaultHrefOpts = {
	            lossy: true,
	            inherit: true,
	            absolute: false,
	            relative: this.$current
	        };
	        options = common_1.defaults(options, defaultHrefOpts);
	        var state = this.stateRegistry.matcher.find(stateOrName, options.relative);
	        if (!predicates_1.isDefined(state))
	            return null;
	        if (options.inherit)
	            params = this.params.$inherit(params || {}, this.$current, state);
	        var nav = (state && options.lossy) ? state.navigable : state;
	        if (!nav || nav.url === undefined || nav.url === null) {
	            return null;
	        }
	        return this.$urlRouter.href(nav.url, param_1.Param.values(state.parameters(), params), {
	            absolute: options.absolute
	        });
	    };
	    ;
	    StateService.prototype.get = function (stateOrName, base) {
	        if (arguments.length === 0)
	            return this.stateRegistry.get();
	        return this.stateRegistry.get(stateOrName, base || this.$current);
	    };
	    return StateService;
	}());
	exports.StateService = StateService;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/** @module path */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var module_1 = __webpack_require__(17);
	var node_1 = __webpack_require__(39);
	var module_2 = __webpack_require__(40);
	/**
	 * This class contains functions which convert TargetStates, Nodes and paths from one type to another.
	 */
	var PathFactory = (function () {
	    function PathFactory() {
	    }
	    /** Given a Node[], create an TargetState */
	    PathFactory.makeTargetState = function (path) {
	        var state = common_1.tail(path).state;
	        return new module_1.TargetState(state, state, path.map(hof_1.prop("paramValues")).reduce(common_1.mergeR, {}));
	    };
	    PathFactory.buildPath = function (targetState) {
	        var toParams = targetState.params();
	        return targetState.$state().path.map(function (state) { return new node_1.Node(state).applyRawParams(toParams); });
	    };
	    /** Given a fromPath: Node[] and a TargetState, builds a toPath: Node[] */
	    PathFactory.buildToPath = function (fromPath, targetState) {
	        var toPath = PathFactory.buildPath(targetState);
	        if (targetState.options().inherit) {
	            return PathFactory.inheritParams(fromPath, toPath, Object.keys(targetState.params()));
	        }
	        return toPath;
	    };
	    PathFactory.applyViewConfigs = function ($view, path) {
	        return path.map(function (node) {
	            return common_1.extend(node, { views: common_1.values(node.state.views || {}).map(function (view) { return $view.createViewConfig(node, view); }) });
	        });
	    };
	    /**
	     * Given a fromPath and a toPath, returns a new to path which inherits parameters from the fromPath
	     *
	     * For a parameter in a node to be inherited from the from path:
	     * - The toPath's node must have a matching node in the fromPath (by state).
	     * - The parameter name must not be found in the toKeys parameter array.
	     *
	     * Note: the keys provided in toKeys are intended to be those param keys explicitly specified by some
	     * caller, for instance, $state.transitionTo(..., toParams).  If a key was found in toParams,
	     * it is not inherited from the fromPath.
	     */
	    PathFactory.inheritParams = function (fromPath, toPath, toKeys) {
	        if (toKeys === void 0) { toKeys = []; }
	        function nodeParamVals(path, state) {
	            var node = common_1.find(path, hof_1.propEq('state', state));
	            return common_1.extend({}, node && node.paramValues);
	        }
	        /**
	         * Given an Node "toNode", return a new Node with param values inherited from the
	         * matching node in fromPath.  Only inherit keys that aren't found in "toKeys" from the node in "fromPath""
	         */
	        var makeInheritedParamsNode = hof_1.curry(function (_fromPath, _toKeys, toNode) {
	            // All param values for the node (may include default key/vals, when key was not found in toParams)
	            var toParamVals = common_1.extend({}, toNode && toNode.paramValues);
	            // limited to only those keys found in toParams
	            var incomingParamVals = common_1.pick(toParamVals, _toKeys);
	            toParamVals = common_1.omit(toParamVals, _toKeys);
	            var fromParamVals = nodeParamVals(_fromPath, toNode.state) || {};
	            // extend toParamVals with any fromParamVals, then override any of those those with incomingParamVals
	            var ownParamVals = common_1.extend(toParamVals, fromParamVals, incomingParamVals);
	            return new node_1.Node(toNode.state).applyRawParams(ownParamVals);
	        });
	        // The param keys specified by the incoming toParams
	        return toPath.map(makeInheritedParamsNode(fromPath, toKeys));
	    };
	    /**
	     * Given a path, upgrades the path to a Node[].  Each node is assigned a ResolveContext
	     * and ParamValues object which is bound to the whole path, but closes over the subpath from root to the node.
	     * The views are also added to the node.
	     */
	    PathFactory.bindTransNodesToPath = function (resolvePath) {
	        var resolveContext = new module_2.ResolveContext(resolvePath);
	        // let paramValues = new ParamValues(resolvePath);
	        // Attach bound resolveContext and paramValues to each node
	        // Attach views to each node
	        resolvePath.forEach(function (node) {
	            node.resolveContext = resolveContext.isolateRootTo(node.state);
	            node.resolveInjector = new module_2.ResolveInjector(node.resolveContext, node.state);
	            node.resolves['$stateParams'] = new module_2.Resolvable("$stateParams", function () { return node.paramValues; }, node.paramValues);
	        });
	        return resolvePath;
	    };
	    /**
	     * Computes the tree changes (entering, exiting) between a fromPath and toPath.
	     */
	    PathFactory.treeChanges = function (fromPath, toPath, reloadState) {
	        var keep = 0, max = Math.min(fromPath.length, toPath.length);
	        var staticParams = function (state) { return state.parameters({ inherit: false }).filter(hof_1.not(hof_1.prop('dynamic'))).map(hof_1.prop('id')); };
	        var nodesMatch = function (node1, node2) { return node1.equals(node2, staticParams(node1.state)); };
	        while (keep < max && fromPath[keep].state !== reloadState && nodesMatch(fromPath[keep], toPath[keep])) {
	            keep++;
	        }
	        /** Given a retained node, return a new node which uses the to node's param values */
	        function applyToParams(retainedNode, idx) {
	            var cloned = node_1.Node.clone(retainedNode);
	            cloned.paramValues = toPath[idx].paramValues;
	            return cloned;
	        }
	        var from, retained, exiting, entering, to;
	        // intermediate vars
	        var retainedWithToParams, enteringResolvePath, toResolvePath;
	        from = fromPath;
	        retained = from.slice(0, keep);
	        exiting = from.slice(keep);
	        // Create a new retained path (with shallow copies of nodes) which have the params of the toPath mapped
	        retainedWithToParams = retained.map(applyToParams);
	        enteringResolvePath = toPath.slice(keep);
	        // "toResolvePath" is "retainedWithToParams" concat "enteringResolvePath".
	        toResolvePath = (retainedWithToParams).concat(enteringResolvePath);
	        // "to: is "toResolvePath" with ParamValues/ResolveContext added to each node and bound to the path context
	        to = PathFactory.bindTransNodesToPath(toResolvePath);
	        // "entering" is the tail of "to"
	        entering = to.slice(keep);
	        return { from: from, to: to, retained: retained, exiting: exiting, entering: entering };
	    };
	    PathFactory.bindTransitionResolve = function (treeChanges, transition) {
	        var rootNode = treeChanges.to[0];
	        rootNode.resolves['$transition$'] = new module_2.Resolvable('$transition$', function () { return transition; }, transition);
	    };
	    /**
	     * Find a subpath of a path that stops at the node for a given state
	     *
	     * Given an array of nodes, returns a subset of the array starting from the first node, up to the
	     * node whose state matches `stateName`
	     *
	     * @param path a path of [[Node]]s
	     * @param state the [[State]] to stop at
	     */
	    PathFactory.subPath = function (path, state) {
	        var node = common_1.find(path, function (_node) { return _node.state === state; });
	        var elementIdx = path.indexOf(node);
	        if (elementIdx === -1)
	            throw new Error("The path does not contain the state: " + state);
	        return path.slice(0, elementIdx + 1);
	    };
	    /** Gets the raw parameter values from a path */
	    PathFactory.paramValues = function (path) { return path.reduce(function (acc, node) { return common_1.extend(acc, node.paramValues); }, {}); };
	    return PathFactory;
	}());
	exports.PathFactory = PathFactory;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module path */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var module_1 = __webpack_require__(40);
	var Node = (function () {
	    function Node(state) {
	        if (state instanceof Node) {
	            var node = state;
	            this.state = node.state;
	            this.paramSchema = node.paramSchema.slice();
	            this.paramValues = common_1.extend({}, node.paramValues);
	            this.resolves = common_1.extend({}, node.resolves);
	            this.views = node.views && node.views.slice();
	            this.resolveContext = node.resolveContext;
	            this.resolveInjector = node.resolveInjector;
	        }
	        else {
	            this.state = state;
	            this.paramSchema = state.parameters({ inherit: false });
	            this.paramValues = {};
	            this.resolves = common_1.mapObj(state.resolve, function (fn, name) { return new module_1.Resolvable(name, fn); });
	        }
	    }
	    Node.prototype.applyRawParams = function (params) {
	        var getParamVal = function (paramDef) { return [paramDef.id, paramDef.value(params[paramDef.id])]; };
	        this.paramValues = this.paramSchema.reduce(function (memo, pDef) { return common_1.applyPairs(memo, getParamVal(pDef)); }, {});
	        return this;
	    };
	    Node.prototype.parameter = function (name) {
	        return common_1.find(this.paramSchema, hof_1.propEq("id", name));
	    };
	    Node.prototype.equals = function (node, keys) {
	        var _this = this;
	        if (keys === void 0) { keys = this.paramSchema.map(hof_1.prop('id')); }
	        var paramValsEq = function (key) { return _this.parameter(key).type.equals(_this.paramValues[key], node.paramValues[key]); };
	        return this.state === node.state && keys.map(paramValsEq).reduce(common_1.allTrueR, true);
	    };
	    Node.clone = function (node) {
	        return new Node(node);
	    };
	    /**
	     * Returns a new path which is a subpath of the first path. The new path starts from root and contains any nodes
	     * that match the nodes in the second path. Nodes are compared using their state property.
	     * @param first {Node[]}
	     * @param second {Node[]}
	     * @returns {Node[]}
	     */
	    Node.matching = function (first, second) {
	        var matchedCount = first.reduce(function (prev, node, i) {
	            return prev === i && i < second.length && node.state === second[i].state ? i + 1 : prev;
	        }, 0);
	        return first.slice(0, matchedCount);
	    };
	    return Node;
	}());
	exports.Node = Node;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module resolve */ /** for typedoc */
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));
	__export(__webpack_require__(41));
	__export(__webpack_require__(42));


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module resolve */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var trace_1 = __webpack_require__(12);
	var coreservices_1 = __webpack_require__(6);
	var interface_1 = __webpack_require__(31);
	var common_2 = __webpack_require__(3);
	var pathFactory_1 = __webpack_require__(38);
	// TODO: make this configurable
	var defaultResolvePolicy = interface_1.ResolvePolicy[interface_1.ResolvePolicy.LAZY];
	var ResolveContext = (function () {
	    function ResolveContext(_path) {
	        this._path = _path;
	        common_1.extend(this, {
	            _nodeFor: function (state) {
	                return common_1.find(this._path, hof_1.propEq('state', state));
	            },
	            _pathTo: function (state) {
	                return pathFactory_1.PathFactory.subPath(this._path, state);
	            }
	        });
	    }
	    /**
	     * Gets the available Resolvables for the last element of this path.
	     *
	     * @param state the State (within the ResolveContext's Path) for which to get resolvables
	     * @param options
	     *
	     * options.omitOwnLocals: array of property names
	     *   Omits those Resolvables which are found on the last element of the path.
	     *
	     *   This will hide a deepest-level resolvable (by name), potentially exposing a parent resolvable of
	     *   the same name further up the state tree.
	     *
	     *   This is used by Resolvable.resolve() in order to provide the Resolvable access to all the other
	     *   Resolvables at its own PathElement level, yet disallow that Resolvable access to its own injectable Resolvable.
	     *
	     *   This is also used to allow a state to override a parent state's resolve while also injecting
	     *   that parent state's resolve:
	     *
	     *   state({ name: 'G', resolve: { _G: function() { return "G"; } } });
	     *   state({ name: 'G.G2', resolve: { _G: function(_G) { return _G + "G2"; } } });
	     *   where injecting _G into a controller will yield "GG2"
	     */
	    ResolveContext.prototype.getResolvables = function (state, options) {
	        options = common_1.defaults(options, { omitOwnLocals: [] });
	        var path = (state ? this._pathTo(state) : this._path);
	        var last = common_1.tail(path);
	        return path.reduce(function (memo, node) {
	            var omitProps = (node === last) ? options.omitOwnLocals : [];
	            var filteredResolvables = common_1.omit(node.resolves, omitProps);
	            return common_1.extend(memo, filteredResolvables);
	        }, {});
	    };
	    /** Inspects a function `fn` for its dependencies.  Returns an object containing any matching Resolvables */
	    ResolveContext.prototype.getResolvablesForFn = function (fn) {
	        var deps = coreservices_1.services.$injector.annotate(fn, coreservices_1.services.$injector.strictDi);
	        return common_1.pick(this.getResolvables(), deps);
	    };
	    ResolveContext.prototype.isolateRootTo = function (state) {
	        return new ResolveContext(this._pathTo(state));
	    };
	    ResolveContext.prototype.addResolvables = function (resolvables, state) {
	        common_1.extend(this._nodeFor(state).resolves, resolvables);
	    };
	    /** Gets the resolvables declared on a particular state */
	    ResolveContext.prototype.getOwnResolvables = function (state) {
	        return common_1.extend({}, this._nodeFor(state).resolves);
	    };
	    // Returns a promise for an array of resolved path Element promises
	    ResolveContext.prototype.resolvePath = function (options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        trace_1.trace.traceResolvePath(this._path, options);
	        var promiseForNode = function (node) { return _this.resolvePathElement(node.state, options); };
	        return coreservices_1.services.$q.all(common_1.map(this._path, promiseForNode)).then(function (all) { return all.reduce(common_2.mergeR, {}); });
	    };
	    // returns a promise for all the resolvables on this PathElement
	    // options.resolvePolicy: only return promises for those Resolvables which are at 
	    // the specified policy, or above.  i.e., options.resolvePolicy === 'lazy' will
	    // resolve both 'lazy' and 'eager' resolves.
	    ResolveContext.prototype.resolvePathElement = function (state, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        // The caller can request the path be resolved for a given policy and "below" 
	        var policy = options && options.resolvePolicy;
	        var policyOrdinal = interface_1.ResolvePolicy[policy || defaultResolvePolicy];
	        // Get path Resolvables available to this element
	        var resolvables = this.getOwnResolvables(state);
	        var matchesRequestedPolicy = function (resolvable) { return getPolicy(state.resolvePolicy, resolvable) >= policyOrdinal; };
	        var matchingResolves = common_1.filter(resolvables, matchesRequestedPolicy);
	        var getResolvePromise = function (resolvable) { return resolvable.get(_this.isolateRootTo(state), options); };
	        var resolvablePromises = common_1.map(matchingResolves, getResolvePromise);
	        trace_1.trace.traceResolvePathElement(this, matchingResolves, options);
	        return coreservices_1.services.$q.all(resolvablePromises);
	    };
	    /**
	     * Injects a function given the Resolvables available in the path, from the first node
	     * up to the node for the given state.
	     *
	     * First it resolves all the resolvable depencies.  When they are done resolving, it invokes
	     * the function.
	     *
	     * @return a promise for the return value of the function.
	     *
	     * @param fn: the function to inject (i.e., onEnter, onExit, controller)
	     * @param locals: are the angular $injector-style locals to inject
	     * @param options: options (TODO: document)
	     */
	    ResolveContext.prototype.invokeLater = function (fn, locals, options) {
	        var _this = this;
	        if (locals === void 0) { locals = {}; }
	        if (options === void 0) { options = {}; }
	        var resolvables = this.getResolvablesForFn(fn);
	        trace_1.trace.tracePathElementInvoke(common_1.tail(this._path), fn, Object.keys(resolvables), common_1.extend({ when: "Later" }, options));
	        var getPromise = function (resolvable) { return resolvable.get(_this, options); };
	        var promises = common_1.map(resolvables, getPromise);
	        return coreservices_1.services.$q.all(promises).then(function () {
	            try {
	                return _this.invokeNow(fn, locals, options);
	            }
	            catch (error) {
	                return coreservices_1.services.$q.reject(error);
	            }
	        });
	    };
	    /**
	     * Immediately injects a function with the dependent Resolvables available in the path, from
	     * the first node up to the node for the given state.
	     *
	     * If a Resolvable is not yet resolved, then null is injected in place of the resolvable.
	     *
	     * @return the return value of the function.
	     *
	     * @param fn: the function to inject (i.e., onEnter, onExit, controller)
	     * @param locals: are the angular $injector-style locals to inject
	     * @param options: options (TODO: document)
	     */
	    // Injects a function at this PathElement level with available Resolvables
	    // Does not wait until all Resolvables have been resolved; you must call PathElement.resolve() (or manually resolve each dep) first
	    ResolveContext.prototype.invokeNow = function (fn, locals, options) {
	        if (options === void 0) { options = {}; }
	        var resolvables = this.getResolvablesForFn(fn);
	        trace_1.trace.tracePathElementInvoke(common_1.tail(this._path), fn, Object.keys(resolvables), common_1.extend({ when: "Now  " }, options));
	        var resolvedLocals = common_1.map(resolvables, hof_1.prop("data"));
	        return coreservices_1.services.$injector.invoke(fn, options.bind || null, common_1.extend({}, locals, resolvedLocals));
	    };
	    return ResolveContext;
	}());
	exports.ResolveContext = ResolveContext;
	/**
	 * Given a state's resolvePolicy attribute and a resolvable from that state, returns the policy ordinal for the Resolvable
	 * Use the policy declared for the Resolve. If undefined, use the policy declared for the State.  If
	 * undefined, use the system defaultResolvePolicy.
	 *
	 * @param stateResolvePolicyConf The raw resolvePolicy declaration on the state object; may be a String or Object
	 * @param resolvable The resolvable to compute the policy for
	 */
	function getPolicy(stateResolvePolicyConf, resolvable) {
	    // Normalize the configuration on the state to either state-level (a string) or resolve-level (a Map of string:string)
	    var stateLevelPolicy = (predicates_1.isString(stateResolvePolicyConf) ? stateResolvePolicyConf : null);
	    var resolveLevelPolicies = (predicates_1.isObject(stateResolvePolicyConf) ? stateResolvePolicyConf : {});
	    var policyName = resolveLevelPolicies[resolvable.name] || stateLevelPolicy || defaultResolvePolicy;
	    return interface_1.ResolvePolicy[policyName];
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module resolve */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var ResolveInjector = (function () {
	    function ResolveInjector(_resolveContext, _state) {
	        this._resolveContext = _resolveContext;
	        this._state = _state;
	    }
	    /** Returns a promise to invoke an annotated function in the resolve context */
	    ResolveInjector.prototype.invokeLater = function (injectedFn, locals) {
	        return this._resolveContext.invokeLater(injectedFn, locals);
	    };
	    /** Invokes an annotated function in the resolve context */
	    ResolveInjector.prototype.invokeNow = function (injectedFn, locals) {
	        return this._resolveContext.invokeNow(null, injectedFn, locals);
	    };
	    /** Returns the a promise for locals (realized Resolvables) that a function wants */
	    ResolveInjector.prototype.getLocals = function (injectedFn) {
	        var _this = this;
	        var resolve = function (r) { return r.get(_this._resolveContext); };
	        return common_1.map(this._resolveContext.getResolvablesForFn(injectedFn), resolve);
	    };
	    return ResolveInjector;
	}());
	exports.ResolveInjector = ResolveInjector;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var transition_1 = __webpack_require__(11);
	var hookRegistry_1 = __webpack_require__(15);
	/**
	 * The default transition options.
	 * Include this object when applying custom defaults:
	 * let reloadOpts = { reload: true, notify: true }
	 * let options = defaults(theirOpts, customDefaults, defaultOptions);
	 */
	exports.defaultTransOpts = {
	    location: true,
	    relative: null,
	    inherit: false,
	    notify: true,
	    reload: false,
	    custom: {},
	    current: function () { return null; }
	};
	/**
	 * This class provides services related to Transitions.
	 *
	 * Most importantly, it allows global Transition Hooks to be registered, and has a factory function
	 * for creating new Transitions.
	 */
	var TransitionService = (function () {
	    function TransitionService($view) {
	        this.$view = $view;
	        this._defaultErrorHandler = function $defaultErrorHandler($error$) {
	            if ($error$ instanceof Error) {
	                console.error($error$);
	            }
	        };
	        hookRegistry_1.HookRegistry.mixin(new hookRegistry_1.HookRegistry(), this);
	    }
	    TransitionService.prototype.defaultErrorHandler = function (handler) {
	        return this._defaultErrorHandler = handler || this._defaultErrorHandler;
	    };
	    /**
	     * Creates a new [[Transition]] object
	     *
	     * This is a factory function for creating new Transition objects.
	     *
	     * @param fromPath
	     * @param targetState
	     * @returns {Transition}
	     */
	    TransitionService.prototype.create = function (fromPath, targetState) {
	        return new transition_1.Transition(fromPath, targetState, this);
	    };
	    return TransitionService;
	}());
	exports.TransitionService = TransitionService;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module path */ /** for typedoc */
	__export(__webpack_require__(39));
	__export(__webpack_require__(38));


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module url */ /** for typedoc */
	__export(__webpack_require__(46));
	__export(__webpack_require__(22));
	__export(__webpack_require__(47));
	__export(__webpack_require__(48));


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module url */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var module_1 = __webpack_require__(20);
	var predicates_2 = __webpack_require__(4);
	var param_1 = __webpack_require__(21);
	var common_2 = __webpack_require__(3);
	var common_3 = __webpack_require__(3);
	function quoteRegExp(string, param) {
	    var surroundPattern = ['', ''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!param)
	        return result;
	    switch (param.squash) {
	        case false:
	            surroundPattern = ['(', ')' + (param.isOptional ? '?' : '')];
	            break;
	        case true:
	            result = result.replace(/\/$/, '');
	            surroundPattern = ['(?:\/(', ')|\/)?'];
	            break;
	        default:
	            surroundPattern = [("(" + param.squash + "|"), ')?'];
	            break;
	    }
	    return result + surroundPattern[0] + param.type.pattern.source + surroundPattern[1];
	}
	var memoizeTo = function (obj, prop, fn) { return obj[prop] = obj[prop] || fn(); };
	/**
	 * @ngdoc object
	 * @name ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
	 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
	 *
	 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
	 * syntax, which optionally allows a regular expression for the parameter to be specified:
	 *
	 * * `':'` name - colon placeholder
	 * * `'*'` name - catch-all placeholder
	 * * `'{' name '}'` - curly placeholder
	 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
	 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters). For colon
	 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
	 * number of characters other than '/'. For catch-all placeholders the path parameter matches
	 * any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 * @param {string} pattern  The pattern to compile into a matcher.
	 * @param {Object} config  A configuration object hash
	 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	 *
	 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
	 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
	 *   non-null) will start with this prefix.
	 *
	 * @property {string} pattern  The pattern that was passed into the constructor
	 *
	 * @returns {Object}  New `UrlMatcher` object
	 */
	var UrlMatcher = (function () {
	    function UrlMatcher(pattern, config) {
	        var _this = this;
	        this.pattern = pattern;
	        this.config = config;
	        this._cache = { path: [], pattern: null };
	        this._children = [];
	        this._params = [];
	        this._segments = [];
	        this._compiled = [];
	        this.config = common_1.defaults(this.config, {
	            params: {},
	            strict: true,
	            caseInsensitive: false,
	            paramMap: common_1.identity
	        });
	        // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	        //   '*' name
	        //   ':' name
	        //   '{' name '}'
	        //   '{' name ':' regexp '}'
	        // The regular expression is somewhat complicated due to the need to allow curly braces
	        // inside the regular expression. The placeholder regexp breaks down as follows:
	        //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	        //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	        //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	        //    [^{}\\]+                       - anything other than curly braces or backslash
	        //    \\.                            - a backslash escape
	        //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	        var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, last = 0, m, patterns = [];
	        var checkParamErrors = function (id) {
	            if (!UrlMatcher.nameValidator.test(id))
	                throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	            if (common_1.find(_this._params, hof_1.propEq('id', id)))
	                throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	        };
	        // Split into static segments separated by path parameter placeholders.
	        // The number of segments is always 1 more than the number of parameters.
	        var matchDetails = function (m, isSearch) {
	            // IE[78] returns '' for unmatched groups instead of null
	            var id = m[2] || m[3], regexp = isSearch ? m[4] : m[4] || (m[1] === '*' ? '.*' : null);
	            return {
	                id: id,
	                regexp: regexp,
	                cfg: _this.config.params[id],
	                segment: pattern.substring(last, m.index),
	                type: !regexp ? null : module_1.paramTypes.type(regexp || "string") || common_1.inherit(module_1.paramTypes.type("string"), {
	                    pattern: new RegExp(regexp, _this.config.caseInsensitive ? 'i' : undefined)
	                })
	            };
	        };
	        var p, segment;
	        while ((m = placeholder.exec(pattern))) {
	            p = matchDetails(m, false);
	            if (p.segment.indexOf('?') >= 0)
	                break; // we're into the search part
	            checkParamErrors(p.id);
	            this._params.push(module_1.Param.fromPath(p.id, p.type, this.config.paramMap(p.cfg, false)));
	            this._segments.push(p.segment);
	            patterns.push([p.segment, common_1.tail(this._params)]);
	            last = placeholder.lastIndex;
	        }
	        segment = pattern.substring(last);
	        // Find any search parameter names and remove them from the last segment
	        var i = segment.indexOf('?');
	        if (i >= 0) {
	            var search = segment.substring(i);
	            segment = segment.substring(0, i);
	            if (search.length > 0) {
	                last = 0;
	                while ((m = searchPlaceholder.exec(search))) {
	                    p = matchDetails(m, true);
	                    checkParamErrors(p.id);
	                    this._params.push(module_1.Param.fromSearch(p.id, p.type, this.config.paramMap(p.cfg, true)));
	                    last = placeholder.lastIndex;
	                }
	            }
	        }
	        this._segments.push(segment);
	        common_1.extend(this, {
	            _compiled: patterns.map(function (pattern) { return quoteRegExp.apply(null, pattern); }).concat(quoteRegExp(segment)),
	            prefix: this._segments[0]
	        });
	        Object.freeze(this);
	    }
	    /**
	     * @ngdoc function
	     * @name ui.router.util.type:UrlMatcher#append
	     * @methodOf ui.router.util.type:UrlMatcher
	     *
	     * @description
	     * @TODO
	     *
	     * @example
	     * @TODO
	     *
	     * @param {UrlMatcher} url A `UrlMatcher` instance to append as a child of the current `UrlMatcher`.
	     */
	    UrlMatcher.prototype.append = function (url) {
	        this._children.push(url);
	        common_1.forEach(url._cache, function (val, key) { return url._cache[key] = predicates_1.isArray(val) ? [] : null; });
	        url._cache.path = this._cache.path.concat(this);
	        return url;
	    };
	    UrlMatcher.prototype.isRoot = function () {
	        return this._cache.path.length === 0;
	    };
	    UrlMatcher.prototype.toString = function () {
	        return this.pattern;
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.util.type:UrlMatcher#exec
	     * @methodOf ui.router.util.type:UrlMatcher
	     *
	     * @description
	     * Tests the specified path against this matcher, and returns an object containing the captured
	     * parameter values, or null if the path does not match. The returned object contains the values
	     * of any search parameters that are mentioned in the pattern, but their value may be null if
	     * they are not present in `search`. This means that search parameters are always treated
	     * as optional.
	     *
	     * @example
	     * <pre>
	     * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	     *   x: '1', q: 'hello'
	     * });
	     * // returns { id: 'bob', q: 'hello', r: null }
	     * </pre>
	     *
	     * @param {string} path  The URL path to match, e.g. `$location.path()`.
	     * @param {Object} search  URL search parameters, e.g. `$location.search()`.
	     * @param {string} hash  URL hash e.g. `$location.hash()`.
	     * @param {Object} options
	     * @returns {Object}  The captured parameter values.
	     */
	    UrlMatcher.prototype.exec = function (path, search, hash, options) {
	        var _this = this;
	        if (search === void 0) { search = {}; }
	        if (options === void 0) { options = {}; }
	        var match = memoizeTo(this._cache, 'pattern', function () {
	            return new RegExp([
	                '^',
	                common_1.unnest(_this._cache.path.concat(_this).map(hof_1.prop('_compiled'))).join(''),
	                _this.config.strict === false ? '\/?' : '',
	                '$'
	            ].join(''), _this.config.caseInsensitive ? 'i' : undefined);
	        }).exec(path);
	        if (!match)
	            return null;
	        //options = defaults(options, { isolate: false });
	        var allParams = this.parameters(), pathParams = allParams.filter(function (param) { return !param.isSearch(); }), searchParams = allParams.filter(function (param) { return param.isSearch(); }), nPathSegments = this._cache.path.concat(this).map(function (urlm) { return urlm._segments.length - 1; }).reduce(function (a, x) { return a + x; }), values = {};
	        if (nPathSegments !== match.length - 1)
	            throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
	        function decodePathArray(string) {
	            var reverseString = function (str) { return str.split("").reverse().join(""); };
	            var unquoteDashes = function (str) { return str.replace(/\\-/g, "-"); };
	            var split = reverseString(string).split(/-(?!\\)/);
	            var allReversed = common_1.map(split, reverseString);
	            return common_1.map(allReversed, unquoteDashes).reverse();
	        }
	        for (var i = 0; i < nPathSegments; i++) {
	            var param = pathParams[i];
	            var value = match[i + 1];
	            // if the param value matches a pre-replace pair, replace the value before decoding.
	            for (var j = 0; j < param.replace.length; j++) {
	                if (param.replace[j].from === value)
	                    value = param.replace[j].to;
	            }
	            if (value && param.array === true)
	                value = decodePathArray(value);
	            if (predicates_2.isDefined(value))
	                value = param.type.decode(value);
	            values[param.id] = param.value(value);
	        }
	        common_1.forEach(searchParams, function (param) {
	            var value = search[param.id];
	            for (var j = 0; j < param.replace.length; j++) {
	                if (param.replace[j].from === value)
	                    value = param.replace[j].to;
	            }
	            if (predicates_2.isDefined(value))
	                value = param.type.decode(value);
	            values[param.id] = param.value(value);
	        });
	        if (hash)
	            values["#"] = hash;
	        return values;
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.util.type:UrlMatcher#parameters
	     * @methodOf ui.router.util.type:UrlMatcher
	     *
	     * @description
	     * Returns the names of all path and search parameters of this pattern in order of appearance.
	     *
	     * @returns {Array.<Param>}  An array of [[Param]] objects. Must be treated as read-only. If the
	     *    pattern has no parameters, an empty array is returned.
	     */
	    UrlMatcher.prototype.parameters = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        if (opts.inherit === false)
	            return this._params;
	        return common_1.unnest(this._cache.path.concat(this).map(hof_1.prop('_params')));
	    };
	    UrlMatcher.prototype.parameter = function (id, opts) {
	        if (opts === void 0) { opts = {}; }
	        var parent = common_1.tail(this._cache.path);
	        return (common_1.find(this._params, hof_1.propEq('id', id)) ||
	            (opts.inherit !== false && parent && parent.parameter(id)) ||
	            null);
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.util.type:UrlMatcher#validates
	     * @methodOf ui.router.util.type:UrlMatcher
	     *
	     * @description
	     * Checks an object hash of parameters to validate their correctness according to the parameter
	     * types of this `UrlMatcher`.
	     *
	     * @param {Object} params The object hash of parameters to validate.
	     * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
	     */
	    UrlMatcher.prototype.validates = function (params) {
	        var _this = this;
	        var validParamVal = function (param, val) { return !param || param.validates(val); };
	        return common_1.pairs(params || {}).map(function (_a) {
	            var key = _a[0], val = _a[1];
	            return validParamVal(_this.parameter(key), val);
	        }).reduce(common_1.allTrueR, true);
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.util.type:UrlMatcher#format
	     * @methodOf ui.router.util.type:UrlMatcher
	     *
	     * @description
	     * Creates a URL that matches this pattern by substituting the specified values
	     * for the path and search parameters. Null values for path parameters are
	     * treated as empty strings.
	     *
	     * @example
	     * <pre>
	     * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	     * // returns '/user/bob?q=yes'
	     * </pre>
	     *
	     * @param {Object} values  the values to substitute for the parameters in this pattern.
	     * @returns {string}  the formatted URL (path and optionally search part).
	     */
	    UrlMatcher.prototype.format = function (values) {
	        if (values === void 0) { values = {}; }
	        if (!this.validates(values))
	            return null;
	        // Build the full path of UrlMatchers (including all parent UrlMatchers)
	        var urlMatchers = this._cache.path.slice().concat(this);
	        // Extract all the static segments and Params into an ordered array
	        var pathSegmentsAndParams = urlMatchers.map(UrlMatcher.pathSegmentsAndParams).reduce(common_2.unnestR, []);
	        // Extract the query params into a separate array
	        var queryParams = urlMatchers.map(UrlMatcher.queryParams).reduce(common_2.unnestR, []);
	        /**
	         * Given a Param,
	         * Applies the parameter value, then returns details about it
	         */
	        function getDetails(param) {
	            // Normalize to typed value
	            var value = param.value(values[param.id]);
	            var isDefaultValue = param.isDefaultValue(value);
	            // Check if we're in squash mode for the parameter
	            var squash = isDefaultValue ? param.squash : false;
	            // Allow the Parameter's Type to encode the value
	            var encoded = param.type.encode(value);
	            return { param: param, value: value, isDefaultValue: isDefaultValue, squash: squash, encoded: encoded };
	        }
	        // Build up the path-portion from the list of static segments and parameters
	        var pathString = pathSegmentsAndParams.reduce(function (acc, x) {
	            // The element is a static segment (a raw string); just append it
	            if (predicates_1.isString(x))
	                return acc + x;
	            // Otherwise, it's a Param.  Fetch details about the parameter value
	            var _a = getDetails(x), squash = _a.squash, encoded = _a.encoded, param = _a.param;
	            // If squash is === true, try to remove a slash from the path
	            if (squash === true)
	                return (acc.match(/\/$/)) ? acc.slice(0, -1) : acc;
	            // If squash is a string, use the string for the param value
	            if (predicates_1.isString(squash))
	                return acc + squash;
	            if (squash !== false)
	                return acc; // ?
	            if (encoded == null)
	                return acc;
	            // If this parameter value is an array, encode the value using encodeDashes
	            if (predicates_1.isArray(encoded))
	                return acc + common_1.map(encoded, UrlMatcher.encodeDashes).join("-");
	            // If the parameter type is "raw", then do not encodeURIComponent
	            if (param.type.raw)
	                return acc + encoded;
	            // Encode the value
	            return acc + encodeURIComponent(encoded);
	        }, "");
	        // Build the query string by applying parameter values (array or regular)
	        // then mapping to key=value, then flattening and joining using "&"
	        var queryString = queryParams.map(function (param) {
	            var _a = getDetails(param), squash = _a.squash, encoded = _a.encoded, isDefaultValue = _a.isDefaultValue;
	            if (encoded == null || (isDefaultValue && squash !== false))
	                return;
	            if (!predicates_1.isArray(encoded))
	                encoded = [encoded];
	            if (encoded.length === 0)
	                return;
	            if (!param.type.raw)
	                encoded = common_1.map(encoded, encodeURIComponent);
	            return encoded.map(function (val) { return (param.id + "=" + val); });
	        }).filter(common_1.identity).reduce(common_2.unnestR, []).join("&");
	        // Concat the pathstring with the queryString (if exists) and the hashString (if exists)
	        return pathString + (queryString ? "?" + queryString : "") + (values["#"] ? "#" + values["#"] : "");
	    };
	    UrlMatcher.encodeDashes = function (str) {
	        return encodeURIComponent(str).replace(/-/g, function (c) { return ("%5C%" + c.charCodeAt(0).toString(16).toUpperCase()); });
	    };
	    /** Given a matcher, return an array with the matcher's path segments and path params, in order */
	    UrlMatcher.pathSegmentsAndParams = function (matcher) {
	        var staticSegments = matcher._segments;
	        var pathParams = matcher._params.filter(function (p) { return p.location === param_1.DefType.PATH; });
	        return common_3.arrayTuples(staticSegments, pathParams.concat(undefined)).reduce(common_2.unnestR, []).filter(function (x) { return x !== "" && predicates_2.isDefined(x); });
	    };
	    /** Given a matcher, return an array with the matcher's query params */
	    UrlMatcher.queryParams = function (matcher) {
	        return matcher._params.filter(function (p) { return p.location === param_1.DefType.SEARCH; });
	    };
	    UrlMatcher.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/;
	    return UrlMatcher;
	}());
	exports.UrlMatcher = UrlMatcher;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module url */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var module_1 = __webpack_require__(45);
	var module_2 = __webpack_require__(20);
	function getDefaultConfig() {
	    return {
	        strict: module_1.matcherConfig.strictMode(),
	        caseInsensitive: module_1.matcherConfig.caseInsensitive()
	    };
	}
	/**
	 * Factory for [[UrlMatcher]] instances.
	 *
	 * The factory is available to ng1 services as
	 * `$urlMatcherFactor` or ng1 providers as `$urlMatcherFactoryProvider`.
	 */
	var UrlMatcherFactory = (function () {
	    function UrlMatcherFactory() {
	        common_1.extend(this, { UrlMatcher: module_1.UrlMatcher, Param: module_2.Param });
	    }
	    /**
	     * Defines whether URL matching should be case sensitive (the default behavior), or not.
	     *
	     * @param value `false` to match URL in a case sensitive manner; otherwise `true`;
	     * @returns the current value of caseInsensitive
	     */
	    UrlMatcherFactory.prototype.caseInsensitive = function (value) {
	        return module_1.matcherConfig.caseInsensitive(value);
	    };
	    /**
	     * Defines whether URLs should match trailing slashes, or not (the default behavior).
	     *
	     * @param value `false` to match trailing slashes in URLs, otherwise `true`.
	     * @returns the current value of strictMode
	     */
	    UrlMatcherFactory.prototype.strictMode = function (value) {
	        return module_1.matcherConfig.strictMode(value);
	    };
	    /**
	     * Sets the default behavior when generating or matching URLs with default parameter values.
	     *
	     * @param value A string that defines the default parameter URL squashing behavior.
	     *    - `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	     *    - `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	     *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	     *    - any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	     *             the parameter value from the URL and replace it with this string.
	     * @returns the current value of defaultSquashPolicy
	     */
	    UrlMatcherFactory.prototype.defaultSquashPolicy = function (value) {
	        return module_1.matcherConfig.defaultSquashPolicy(value);
	    };
	    /**
	     * Creates a [[UrlMatcher]] for the specified pattern.
	     *
	     * @param pattern  The URL pattern.
	     * @param config  The config object hash.
	     * @returns The UrlMatcher.
	     */
	    UrlMatcherFactory.prototype.compile = function (pattern, config) {
	        return new module_1.UrlMatcher(pattern, common_1.extend(getDefaultConfig(), config));
	    };
	    /**
	     * Returns true if the specified object is a [[UrlMatcher]], or false otherwise.
	     *
	     * @param object  The object to perform the type check against.
	     * @returns `true` if the object matches the `UrlMatcher` interface, by
	     *          implementing all the same methods.
	     */
	    UrlMatcherFactory.prototype.isMatcher = function (object) {
	        // TODO: typeof?
	        if (!predicates_1.isObject(object))
	            return false;
	        var result = true;
	        common_1.forEach(module_1.UrlMatcher.prototype, function (val, name) {
	            if (predicates_1.isFunction(val))
	                result = result && (predicates_1.isDefined(object[name]) && predicates_1.isFunction(object[name]));
	        });
	        return result;
	    };
	    ;
	    /**
	     * Registers a custom [[Type]] object that can be used to generate URLs with typed parameters.
	     *
	     * @param name  The type name.
	     * @param definition The type definition. See [[Type]] for information on the values accepted.
	     * @param definitionFn A function that is injected before the app
	     *        runtime starts.  The result of this function is merged into the existing `definition`.
	     *        See [[Type]] for information on the values accepted.
	     *
	     * @returns - if a type was registered: the [[UrlMatcherFactory]]
	     *   - if only the `name` parameter was specified: the currently registered [[Type]] object, or undefined
	     *
	     * ---
	     *
	     * This is a simple example of a custom type that encodes and decodes items from an
	     * array, using the array index as the URL-encoded value:
	     *
	     * @example
	     * ```
	     *
	     * var list = ['John', 'Paul', 'George', 'Ringo'];
	     *
	     * $urlMatcherFactoryProvider.type('listItem', {
	     *   encode: function(item) {
	     *     // Represent the list item in the URL using its corresponding index
	     *     return list.indexOf(item);
	     *   },
	     *   decode: function(item) {
	     *     // Look up the list item by index
	     *     return list[parseInt(item, 10)];
	     *   },
	     *   is: function(item) {
	     *     // Ensure the item is valid by checking to see that it appears
	     *     // in the list
	     *     return list.indexOf(item) > -1;
	     *   }
	     * });
	     *
	     * $stateProvider.state('list', {
	     *   url: "/list/{item:listItem}",
	     *   controller: function($scope, $stateParams) {
	     *     console.log($stateParams.item);
	     *   }
	     * });
	     *
	     * // ...
	     *
	     * // Changes URL to '/list/3', logs "Ringo" to the console
	     * $state.go('list', { item: "Ringo" });
	     * ```
	     */
	    UrlMatcherFactory.prototype.type = function (name, definition, definitionFn) {
	        var type = module_2.paramTypes.type(name, definition, definitionFn);
	        return !predicates_1.isDefined(definition) ? type : this;
	    };
	    ;
	    /** @hidden */
	    UrlMatcherFactory.prototype.$get = function () {
	        module_2.paramTypes.enqueue = false;
	        module_2.paramTypes._flushTypeQueue();
	        return this;
	    };
	    ;
	    return UrlMatcherFactory;
	}());
	exports.UrlMatcherFactory = UrlMatcherFactory;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module url */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var coreservices_1 = __webpack_require__(6);
	var $location = coreservices_1.services.location;
	// Returns a string that is a prefix of all strings matching the RegExp
	function regExpPrefix(re) {
	    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
	    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
	}
	// Interpolates matched values into a String.replace()-style pattern
	function interpolate(pattern, match) {
	    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
	        return match[what === '$' ? 0 : Number(what)];
	    });
	}
	function handleIfMatch($injector, $stateParams, handler, match) {
	    if (!match)
	        return false;
	    var result = $injector.invoke(handler, handler, { $match: match, $stateParams: $stateParams });
	    return predicates_1.isDefined(result) ? result : true;
	}
	function appendBasePath(url, isHtml5, absolute) {
	    var baseHref = coreservices_1.services.locationConfig.baseHref();
	    if (baseHref === '/')
	        return url;
	    if (isHtml5)
	        return baseHref.slice(0, -1) + url;
	    if (absolute)
	        return baseHref.slice(1) + url;
	    return url;
	}
	// TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	function update(rules, otherwiseFn, evt) {
	    if (evt && evt.defaultPrevented)
	        return;
	    function check(rule) {
	        var handled = rule(coreservices_1.services.$injector, $location);
	        if (!handled)
	            return false;
	        if (predicates_1.isString(handled)) {
	            $location.replace();
	            $location.url(handled);
	        }
	        return true;
	    }
	    var n = rules.length, i;
	    for (i = 0; i < n; i++) {
	        if (check(rules[i]))
	            return;
	    }
	    // always check otherwise last to allow dynamic updates to the set of rules
	    if (otherwiseFn)
	        check(otherwiseFn);
	}
	/**
	 * @ngdoc object
	 * @name ui.router.router.$urlRouterProvider
	 *
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 * @requires $locationProvider
	 *
	 * @description
	 * `$urlRouterProvider` has the responsibility of watching `$location`.
	 * When `$location` changes it runs through a list of rules one by one until a
	 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify
	 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
	 *
	 * There are several methods on `$urlRouterProvider` that make it useful to use directly
	 * in your module config.
	 */
	var UrlRouterProvider = (function () {
	    function UrlRouterProvider($urlMatcherFactory, $stateParams) {
	        this.$urlMatcherFactory = $urlMatcherFactory;
	        this.$stateParams = $stateParams;
	        /** @hidden */
	        this.rules = [];
	        /** @hidden */
	        this.otherwiseFn = null;
	        /** @hidden */
	        this.interceptDeferred = false;
	    }
	    /**
	     * @ngdoc function
	     * @name ui.router.router.$urlRouterProvider#rule
	     * @methodOf ui.router.router.$urlRouterProvider
	     *
	     * @description
	     * Defines rules that are used by `$urlRouterProvider` to find matches for
	     * specific URLs.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router.router']);
	     *
	     * app.config(function ($urlRouterProvider) {
	     *   // Here's an example of how you might allow case insensitive urls
	     *   $urlRouterProvider.rule(function ($injector, $location) {
	     *     var path = $location.path(),
	     *         normalized = path.toLowerCase();
	     *
	     *     if (path !== normalized) {
	     *       return normalized;
	     *     }
	     *   });
	     * });
	     * </pre>
	     *
	     * @param {function} rule Handler function that takes `$injector` and `$location`
	     * services as arguments. You can use them to return a valid path as a string.
	     *
	     * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	     */
	    UrlRouterProvider.prototype.rule = function (rule) {
	        if (!predicates_1.isFunction(rule))
	            throw new Error("'rule' must be a function");
	        this.rules.push(rule);
	        return this;
	    };
	    ;
	    /**
	     * @ngdoc object
	     * @name ui.router.router.$urlRouterProvider#otherwise
	     * @methodOf ui.router.router.$urlRouterProvider
	     *
	     * @description
	     * Defines a path that is used when an invalid route is requested.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router.router']);
	     *
	     * app.config(function ($urlRouterProvider) {
	     *   // if the path doesn't match any of the urls you configured
	     *   // otherwise will take care of routing the user to the
	     *   // specified url
	     *   $urlRouterProvider.otherwise('/index');
	     *
	     *   // Example of using function rule as param
	     *   $urlRouterProvider.otherwise(function ($injector, $location) {
	     *     return '/a/valid/url';
	     *   });
	     * });
	     * </pre>
	     *
	     * @param {string|function} rule The url path you want to redirect to or a function
	     * rule that returns the url path. The function version is passed two params:
	     * `$injector` and `$location` services, and must return a url string.
	     *
	     * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	     */
	    UrlRouterProvider.prototype.otherwise = function (rule) {
	        if (!predicates_1.isFunction(rule) && !predicates_1.isString(rule))
	            throw new Error("'rule' must be a string or function");
	        this.otherwiseFn = predicates_1.isString(rule) ? function () { return rule; } : rule;
	        return this;
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.router.$urlRouterProvider#when
	     * @methodOf ui.router.router.$urlRouterProvider
	     *
	     * @description
	     * Registers a handler for a given url matching.
	     *
	     * If the handler is a string, it is
	     * treated as a redirect, and is interpolated according to the syntax of match
	     * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	     *
	     * If the handler is a function, it is injectable. It gets invoked if `$location`
	     * matches. You have the option of inject the match object as `$match`.
	     *
	     * The handler can return
	     *
	     * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	     *   will continue trying to find another one that matches.
	     * - **string** which is treated as a redirect and passed to `$location.url()`
	     * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router.router']);
	     *
	     * app.config(function ($urlRouterProvider) {
	     *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	     *     if ($state.$current.navigable !== state ||
	     *         !equalForKeys($match, $stateParams) {
	     *      $state.transitionTo(state, $match, false);
	     *     }
	     *   });
	     * });
	     * </pre>
	     *
	     * @param {string|object} what The incoming path that you want to redirect.
	     * @param {string|function} handler The path you want to redirect your user to.
	     */
	    UrlRouterProvider.prototype.when = function (what, handler) {
	        var _a = this, $urlMatcherFactory = _a.$urlMatcherFactory, $stateParams = _a.$stateParams;
	        var redirect, handlerIsString = predicates_1.isString(handler);
	        // @todo Queue this
	        if (predicates_1.isString(what))
	            what = $urlMatcherFactory.compile(what);
	        if (!handlerIsString && !predicates_1.isFunction(handler) && !predicates_1.isArray(handler))
	            throw new Error("invalid 'handler' in when()");
	        var strategies = {
	            matcher: function (_what, _handler) {
	                if (handlerIsString) {
	                    redirect = $urlMatcherFactory.compile(_handler);
	                    _handler = ['$match', redirect.format.bind(redirect)];
	                }
	                return common_1.extend(function () {
	                    return handleIfMatch(coreservices_1.services.$injector, $stateParams, _handler, _what.exec($location.path(), $location.search(), $location.hash()));
	                }, {
	                    prefix: predicates_1.isString(_what.prefix) ? _what.prefix : ''
	                });
	            },
	            regex: function (_what, _handler) {
	                if (_what.global || _what.sticky)
	                    throw new Error("when() RegExp must not be global or sticky");
	                if (handlerIsString) {
	                    redirect = _handler;
	                    _handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
	                }
	                return common_1.extend(function () {
	                    return handleIfMatch(coreservices_1.services.$injector, $stateParams, _handler, _what.exec($location.path()));
	                }, {
	                    prefix: regExpPrefix(_what)
	                });
	            }
	        };
	        var check = {
	            matcher: $urlMatcherFactory.isMatcher(what),
	            regex: what instanceof RegExp
	        };
	        for (var n in check) {
	            if (check[n])
	                return this.rule(strategies[n](what, handler));
	        }
	        throw new Error("invalid 'what' in when()");
	    };
	    ;
	    /**
	     * @ngdoc function
	     * @name ui.router.router.$urlRouterProvider#deferIntercept
	     * @methodOf ui.router.router.$urlRouterProvider
	     *
	     * @description
	     * Disables (or enables) deferring location change interception.
	     *
	     * If you wish to customize the behavior of syncing the URL (for example, if you wish to
	     * defer a transition but maintain the current URL), call this method at configuration time.
	     * Then, at run time, call `$urlRouter.listen()` after you have configured your own
	     * `$locationChangeSuccess` event handler.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router.router']);
	     *
	     * app.config(function ($urlRouterProvider) {
	     *
	     *   // Prevent $urlRouter from automatically intercepting URL changes;
	     *   // this allows you to configure custom behavior in between
	     *   // location changes and route synchronization:
	     *   $urlRouterProvider.deferIntercept();
	     *
	     * }).run(function ($rootScope, $urlRouter, UserService) {
	     *
	     *   $rootScope.$on('$locationChangeSuccess', function(e) {
	     *     // UserService is an example service for managing user state
	     *     if (UserService.isLoggedIn()) return;
	     *
	     *     // Prevent $urlRouter's default handler from firing
	     *     e.preventDefault();
	     *
	     *     UserService.handleLogin().then(function() {
	     *       // Once the user has logged in, sync the current URL
	     *       // to the router:
	     *       $urlRouter.sync();
	     *     });
	     *   });
	     *
	     *   // Configures $urlRouter's listener *after* your custom listener
	     *   $urlRouter.listen();
	     * });
	     * </pre>
	     *
	     * @param {boolean} defer Indicates whether to defer location change interception. Passing
	     *        no parameter is equivalent to `true`.
	     */
	    UrlRouterProvider.prototype.deferIntercept = function (defer) {
	        if (defer === undefined)
	            defer = true;
	        this.interceptDeferred = defer;
	    };
	    ;
	    return UrlRouterProvider;
	}());
	exports.UrlRouterProvider = UrlRouterProvider;
	var UrlRouter = (function () {
	    function UrlRouter(urlRouterProvider) {
	        this.urlRouterProvider = urlRouterProvider;
	        common_1.bindFunctions(UrlRouter.prototype, this, this);
	    }
	    /**
	     * @ngdoc function
	     * @name ui.router.router.$urlRouter#sync
	     * @methodOf ui.router.router.$urlRouter
	     *
	     * @description
	     * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	     * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	     * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	     * with the transition by calling `$urlRouter.sync()`.
	     *
	     * @example
	     * <pre>
	     * angular.module('app', ['ui.router'])
	     *   .run(function($rootScope, $urlRouter) {
	     *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	     *       // Halt state change from even starting
	     *       evt.preventDefault();
	     *       // Perform custom logic
	     *       var meetsRequirement = ...
	     *       // Continue with the update and state transition if logic allows
	     *       if (meetsRequirement) $urlRouter.sync();
	     *     });
	     * });
	     * </pre>
	     */
	    UrlRouter.prototype.sync = function () {
	        update(this.urlRouterProvider.rules, this.urlRouterProvider.otherwiseFn);
	    };
	    UrlRouter.prototype.listen = function () {
	        var _this = this;
	        return this.listener = this.listener || $location.onChange(function (evt) { return update(_this.urlRouterProvider.rules, _this.urlRouterProvider.otherwiseFn, evt); });
	    };
	    UrlRouter.prototype.update = function (read) {
	        if (read) {
	            this.location = $location.url();
	            return;
	        }
	        if ($location.url() === this.location)
	            return;
	        $location.url(this.location);
	        $location.replace();
	    };
	    UrlRouter.prototype.push = function (urlMatcher, params, options) {
	        $location.url(urlMatcher.format(params || {}));
	        if (options && options.replace)
	            $location.replace();
	    };
	    /**
	     * @ngdoc function
	     * @name ui.router.router.$urlRouter#href
	     * @methodOf ui.router.router.$urlRouter
	     *
	     * @description
	     * A URL generation method that returns the compiled URL for a given
	     * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
	     *
	     * @example
	     * <pre>
	     * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	     *   person: "bob"
	     * });
	     * // $bob == "/about/bob";
	     * </pre>
	     *
	     * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
	     * @param {object=} params An object of parameter values to fill the matcher's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     *
	     * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	     */
	    UrlRouter.prototype.href = function (urlMatcher, params, options) {
	        if (!urlMatcher.validates(params))
	            return null;
	        var url = urlMatcher.format(params);
	        options = options || {};
	        var cfg = coreservices_1.services.locationConfig;
	        var isHtml5 = cfg.html5Mode();
	        if (!isHtml5 && url !== null) {
	            url = "#" + cfg.hashPrefix() + url;
	        }
	        url = appendBasePath(url, isHtml5, options.absolute);
	        if (!options.absolute || !url) {
	            return url;
	        }
	        var slash = (!isHtml5 && url ? '/' : ''), port = cfg.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);
	        return [cfg.protocol(), '://', cfg.host(), port, slash, url].join('');
	    };
	    return UrlRouter;
	}());
	exports.UrlRouter = UrlRouter;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module view */ /** for typedoc */
	__export(__webpack_require__(50));


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module view */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var module_1 = __webpack_require__(2);
	var match = function (obj1) {
	    var keys = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        keys[_i - 1] = arguments[_i];
	    }
	    return function (obj2) { return keys.reduce(function (memo, key) { return memo && obj1[key] === obj2[key]; }, true); };
	};
	/**
	 * The View service
	 */
	var ViewService = (function () {
	    function ViewService() {
	        var _this = this;
	        this.uiViews = [];
	        this.viewConfigs = [];
	        this._viewConfigFactories = {};
	        this.sync = function () {
	            var uiViewsByFqn = _this.uiViews.map(function (uiv) { return [uiv.fqn, uiv]; }).reduce(common_1.applyPairs, {});
	            /**
	             * Given a ui-view and a ViewConfig, determines if they "match".
	             *
	             * A ui-view has a fully qualified name (fqn) and a context object.  The fqn is built from its overall location in
	             * the DOM, describing its nesting relationship to any parent ui-view tags it is nested inside of.
	             *
	             * A ViewConfig has a target ui-view name and a context anchor.  The ui-view name can be a simple name, or
	             * can be a segmented ui-view path, describing a portion of a ui-view fqn.
	             *
	             * If the ViewConfig's target ui-view name is a simple name (no dots), then a ui-view matches if:
	             * - the ui-view's name matches the ViewConfig's target name
	             * - the ui-view's context matches the ViewConfig's anchor
	             *
	             * If the ViewConfig's target ui-view name is a segmented name (with dots), then a ui-view matches if:
	             * - There exists a parent ui-view where:
	             *    - the parent ui-view's name matches the first segment (index 0) of the ViewConfig's target name
	             *    - the parent ui-view's context matches the ViewConfig's anchor
	             * - And the remaining segments (index 1..n) of the ViewConfig's target name match the tail of the ui-view's fqn
	             *
	             * Example:
	             *
	             * DOM:
	             * <div ui-view>                        <!-- created in the root context (name: "") -->
	             *   <div ui-view="foo">                <!-- created in the context named: "A"      -->
	             *     <div ui-view>                    <!-- created in the context named: "A.B"    -->
	             *       <div ui-view="bar">            <!-- created in the context named: "A.B.C"  -->
	             *       </div>
	             *     </div>
	             *   </div>
	             * </div>
	             *
	             * uiViews: [
	             *  { fqn: "$default",                  creationContext: { name: "" } },
	             *  { fqn: "$default.foo",              creationContext: { name: "A" } },
	             *  { fqn: "$default.foo.$default",     creationContext: { name: "A.B" } }
	             *  { fqn: "$default.foo.$default.bar", creationContext: { name: "A.B.C" } }
	             * ]
	             *
	             * These four view configs all match the ui-view with the fqn: "$default.foo.$default.bar":
	             *
	             * - ViewConfig1: { uiViewName: "bar",                       uiViewContextAnchor: "A.B.C" }
	             * - ViewConfig2: { uiViewName: "$default.bar",              uiViewContextAnchor: "A.B" }
	             * - ViewConfig3: { uiViewName: "foo.$default.bar",          uiViewContextAnchor: "A" }
	             * - ViewConfig4: { uiViewName: "$default.foo.$default.bar", uiViewContextAnchor: "" }
	             *
	             * Using ViewConfig3 as an example, it matches the ui-view with fqn "$default.foo.$default.bar" because:
	             * - The ViewConfig's segmented target name is: [ "foo", "$default", "bar" ]
	             * - There exists a parent ui-view (which has fqn: "$default.foo") where:
	             *    - the parent ui-view's name "foo" matches the first segment "foo" of the ViewConfig's target name
	             *    - the parent ui-view's context "A" matches the ViewConfig's anchor context "A"
	             * - And the remaining segments [ "$default", "bar" ].join("."_ of the ViewConfig's target name match
	             *   the tail of the ui-view's fqn "default.bar"
	             */
	            var matches = function (uiView) { return function (viewConfig) {
	                // Split names apart from both viewConfig and uiView into segments
	                var vc = viewConfig.viewDecl;
	                var vcSegments = vc.$uiViewName.split(".");
	                var uivSegments = uiView.fqn.split(".");
	                // Check if the tails of the segment arrays match. ex, these arrays' tails match:
	                // vc: ["foo", "bar"], uiv fqn: ["$default", "foo", "bar"]
	                if (!common_1.equals(vcSegments, uivSegments.slice(0 - vcSegments.length)))
	                    return false;
	                // Now check if the fqn ending at the first segment of the viewConfig matches the context:
	                // ["$default", "foo"].join(".") == "$default.foo", does the ui-view $default.foo context match?
	                var negOffset = (1 - vcSegments.length) || undefined;
	                var fqnToFirstSegment = uivSegments.slice(0, negOffset).join(".");
	                var uiViewContext = uiViewsByFqn[fqnToFirstSegment].creationContext;
	                return vc.$uiViewContextAnchor === (uiViewContext && uiViewContext.name);
	            }; };
	            // Return the number of dots in the fully qualified name
	            function uiViewDepth(uiView) {
	                return uiView.fqn.split(".").length;
	            }
	            // Return the ViewConfig's context's depth in the context tree.
	            function viewConfigDepth(config) {
	                var context = config.viewDecl.$context, count = 0;
	                while (++count && context.parent)
	                    context = context.parent;
	                return count;
	            }
	            // Given a depth function, returns a compare function which can return either ascending or descending order
	            var depthCompare = hof_1.curry(function (depthFn, posNeg, left, right) { return posNeg * (depthFn(left) - depthFn(right)); });
	            var matchingConfigPair = function (uiView) {
	                var matchingConfigs = _this.viewConfigs.filter(matches(uiView));
	                if (matchingConfigs.length > 1)
	                    matchingConfigs.sort(depthCompare(viewConfigDepth, -1)); // descending
	                return [uiView, matchingConfigs[0]];
	            };
	            var configureUiView = function (_a) {
	                var uiView = _a[0], viewConfig = _a[1];
	                // If a parent ui-view is reconfigured, it could destroy child ui-views.
	                // Before configuring a child ui-view, make sure it's still in the active uiViews array.
	                if (_this.uiViews.indexOf(uiView) !== -1)
	                    uiView.configUpdated(viewConfig);
	            };
	            _this.uiViews.sort(depthCompare(uiViewDepth, 1)).map(matchingConfigPair).forEach(configureUiView);
	        };
	    }
	    ViewService.prototype.rootContext = function (context) {
	        return this._rootContext = context || this._rootContext;
	    };
	    ;
	    ViewService.prototype.viewConfigFactory = function (viewType, factory) {
	        this._viewConfigFactories[viewType] = factory;
	    };
	    ViewService.prototype.createViewConfig = function (node, decl) {
	        var cfgFactory = this._viewConfigFactories[decl.$type];
	        if (!cfgFactory)
	            throw new Error("ViewService: No view config factory registered for type " + decl.$type);
	        return cfgFactory(node, decl);
	    };
	    /**
	     * De-registers a ViewConfig.
	     *
	     * @param viewConfig The ViewConfig view to deregister.
	     */
	    ViewService.prototype.deactivateViewConfig = function (viewConfig) {
	        module_1.trace.traceViewServiceEvent("<- Removing", viewConfig);
	        common_1.removeFrom(this.viewConfigs, viewConfig);
	    };
	    ;
	    ViewService.prototype.activateViewConfig = function (viewConfig) {
	        module_1.trace.traceViewServiceEvent("-> Registering", viewConfig);
	        this.viewConfigs.push(viewConfig);
	    };
	    ;
	    /**
	     * Allows a `ui-view` element to register its canonical name with a callback that allows it to
	     * be updated with a template, controller, and local variables.
	     *
	     * @param {String} name The fully-qualified name of the `ui-view` object being registered.
	     * @param {Function} configUpdatedCallback A callback that receives updates to the content & configuration
	     *                   of the view.
	     * @return {Function} Returns a de-registration function used when the view is destroyed.
	     */
	    ViewService.prototype.registerUiView = function (uiView) {
	        module_1.trace.traceViewServiceUiViewEvent("-> Registering", uiView);
	        var uiViews = this.uiViews;
	        var fqnMatches = function (uiv) { return uiv.fqn === uiView.fqn; };
	        if (uiViews.filter(fqnMatches).length)
	            module_1.trace.traceViewServiceUiViewEvent("!!!! duplicate uiView named:", uiView);
	        uiViews.push(uiView);
	        this.sync();
	        return function () {
	            var idx = uiViews.indexOf(uiView);
	            if (idx <= 0) {
	                module_1.trace.traceViewServiceUiViewEvent("Tried removing non-registered uiView", uiView);
	                return;
	            }
	            module_1.trace.traceViewServiceUiViewEvent("<- Deregistering", uiView);
	            common_1.removeFrom(uiViews)(uiView);
	        };
	    };
	    ;
	    /**
	     * Returns the list of views currently available on the page, by fully-qualified name.
	     *
	     * @return {Array} Returns an array of fully-qualified view names.
	     */
	    ViewService.prototype.available = function () {
	        return this.uiViews.map(hof_1.prop("fqn"));
	    };
	    /**
	     * Returns the list of views on the page containing loaded content.
	     *
	     * @return {Array} Returns an array of fully-qualified view names.
	     */
	    ViewService.prototype.active = function () {
	        return this.uiViews.filter(hof_1.prop("$config")).map(hof_1.prop("name"));
	    };
	    /**
	     * Normalizes a view's name from a state.views configuration block.
	     *
	     * @param context the context object (state declaration) that the view belongs to
	     * @param rawViewName the name of the view, as declared in the [[StateDeclaration.views]]
	     *
	     * @returns the normalized uiViewName and uiViewContextAnchor that the view targets
	     */
	    ViewService.normalizeUiViewTarget = function (context, rawViewName) {
	        if (rawViewName === void 0) { rawViewName = ""; }
	        // TODO: Validate incoming view name with a regexp to allow:
	        // ex: "view.name@foo.bar" , "^.^.view.name" , "view.name@^.^" , "" ,
	        // "@" , "$default@^" , "!$default.$default" , "!foo.bar"
	        var viewAtContext = rawViewName.split("@");
	        var uiViewName = viewAtContext[0] || "$default"; // default to unnamed view
	        var uiViewContextAnchor = predicates_1.isString(viewAtContext[1]) ? viewAtContext[1] : "^"; // default to parent context
	        // Handle relative view-name sugar syntax.
	        // Matches rawViewName "^.^.^.foo.bar" into array: ["^.^.^.foo.bar", "^.^.^", "foo.bar"],
	        var relativeViewNameSugar = /^(\^(?:\.\^)*)\.(.*$)/.exec(uiViewName);
	        if (relativeViewNameSugar) {
	            // Clobbers existing contextAnchor (rawViewName validation will fix this)
	            uiViewContextAnchor = relativeViewNameSugar[1]; // set anchor to "^.^.^"
	            uiViewName = relativeViewNameSugar[2]; // set view-name to "foo.bar"
	        }
	        if (uiViewName.charAt(0) === '!') {
	            uiViewName = uiViewName.substr(1);
	            uiViewContextAnchor = ""; // target absolutely from root
	        }
	        // handle parent relative targeting "^.^.^"
	        var relativeMatch = /^(\^(?:\.\^)*)$/;
	        if (relativeMatch.exec(uiViewContextAnchor)) {
	            var anchor = uiViewContextAnchor.split(".").reduce((function (anchor, x) { return anchor.parent; }), context);
	            uiViewContextAnchor = anchor.name;
	        }
	        return { uiViewName: uiViewName, uiViewContextAnchor: uiViewContextAnchor };
	    };
	    return ViewService;
	}());
	exports.ViewService = ViewService;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module core */ /** */
	var stateParams_1 = __webpack_require__(25);
	var queue_1 = __webpack_require__(8);
	var common_1 = __webpack_require__(3);
	/**
	 * Global mutable state
	 *
	 * This is where we hold the global mutable state such as current state, current
	 * params, current transition, last successful transition, last attempted transition, etc.
	 */
	var UIRouterGlobals = (function () {
	    function UIRouterGlobals(transitionService) {
	        var _this = this;
	        /**
	         * Current parameter values
	         *
	         * The parameter values from the latest successful transition
	         */
	        this.params = new stateParams_1.StateParams();
	        /**
	         * The transition history
	         *
	         * This queue's size is limited to a maximum number (default: 1)
	         */
	        this.transitionHistory = new queue_1.Queue([], 1);
	        /**
	         * The history of successful transitions
	         *
	         * This queue's size is limited to a maximum number (default: 1)
	         */
	        this.successfulTransitions = new queue_1.Queue([], 1);
	        var beforeNewTransition = function ($transition$) {
	            _this.transition = $transition$;
	            _this.transitionHistory.enqueue($transition$);
	            var updateGlobalState = function () {
	                _this.successfulTransitions.enqueue($transition$);
	                _this.$current = $transition$.$to();
	                _this.current = _this.$current.self;
	                common_1.copy($transition$.params(), _this.params);
	            };
	            $transition$.onSuccess({}, updateGlobalState, { priority: 10000 });
	            var clearCurrentTransition = function () { if (_this.transition === $transition$)
	                _this.transition = null; };
	            $transition$.promise.then(clearCurrentTransition, clearCurrentTransition);
	        };
	        transitionService.onBefore({}, ['$transition$', beforeNewTransition]);
	    }
	    return UIRouterGlobals;
	}());
	exports.UIRouterGlobals = UIRouterGlobals;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module core */ /** */
	var urlMatcherFactory_1 = __webpack_require__(47);
	var urlRouter_1 = __webpack_require__(48);
	var state_1 = __webpack_require__(18);
	var urlRouter_2 = __webpack_require__(48);
	var transitionService_1 = __webpack_require__(43);
	var view_1 = __webpack_require__(50);
	var stateRegistry_1 = __webpack_require__(36);
	var stateService_1 = __webpack_require__(37);
	var globals_1 = __webpack_require__(51);
	/**
	 * The master class used to instantiate an instance of UI-Router.
	 *
	 * This class instantiates and wires the global UI-Router services.
	 *
	 * After instantiating a new instance of the Router class, configure it for your app.  For instance, register
	 * your app states with the [[stateRegistry]] (and set url options using ...).  Then, tell UI-Router to monitor
	 * the URL by calling `urlRouter.listen()` ([[URLRouter.listen]])
	 */
	var UIRouter = (function () {
	    function UIRouter() {
	        this.viewService = new view_1.ViewService();
	        this.transitionService = new transitionService_1.TransitionService(this.viewService);
	        this.globals = new globals_1.UIRouterGlobals(this.transitionService);
	        this.urlMatcherFactory = new urlMatcherFactory_1.UrlMatcherFactory();
	        this.urlRouterProvider = new urlRouter_1.UrlRouterProvider(this.urlMatcherFactory, this.globals.params);
	        this.urlRouter = new urlRouter_2.UrlRouter(this.urlRouterProvider);
	        this.stateRegistry = new stateRegistry_1.StateRegistry(this.urlMatcherFactory, this.urlRouterProvider);
	        /** @hidden TODO: move this to ng1.ts */
	        this.stateProvider = new state_1.StateProvider(this.stateRegistry);
	        this.stateService = new stateService_1.StateService(this.viewService, this.urlRouter, this.transitionService, this.stateRegistry, this.stateProvider, this.globals);
	        this.viewService.rootContext(this.stateRegistry.root());
	        this.globals.$current = this.stateRegistry.root();
	        this.globals.current = this.globals.$current.self;
	    }
	    return UIRouter;
	}());
	exports.UIRouter = UIRouter;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * # UI-Router for Angular 1
	 *
	 * - Provides an implementation for the [[CoreServices]] API, based on angular 1 services.
	 * - Also registers some services with the angular 1 injector.
	 * - Creates and bootstraps a new [[UIRouter]] object.  Ties it to the the angular 1 lifecycle.
	 *
	 * @module ng1
	 * @preferred
	 */
	"use strict";
	/** for typedoc */
	var router_1 = __webpack_require__(52);
	var coreservices_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(3);
	var hof_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(4);
	var module_1 = __webpack_require__(44);
	var module_2 = __webpack_require__(40);
	var module_3 = __webpack_require__(17);
	var trace_1 = __webpack_require__(12);
	var viewsBuilder_1 = __webpack_require__(54);
	var templateFactory_1 = __webpack_require__(55);
	/** @hidden */
	var app = angular.module("ui.router.angular1", []);
	/**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.util', ['ng', 'ui.router.init']);
	/**
	 * @ngdoc overview
	 * @name ui.router.router
	 *
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */
	angular.module('ui.router.router', ['ui.router.util']);
	/**
	 * @ngdoc overview
	 * @name ui.router.state
	 *
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.state', ['ui.router.router', 'ui.router.util', 'ui.router.angular1']);
	/**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 *
	 * ## The main module for ui.router
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes.
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router -
	 *
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 *
	 * <pre>
	 * <!doctype html>
	 * <html ng-app="myApp">
	 * <head>
	 *   <script src="js/angular.js"></script>
	 *   <!-- Include the ui-router script -->
	 *   <script src="js/angular-ui-router.min.js"></script>
	 *   <script>
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   </script>
	 * </head>
	 * <body>
	 * </body>
	 * </html>
	 * </pre>
	 */
	angular.module('ui.router', ['ui.router.init', 'ui.router.state', 'ui.router.angular1']);
	angular.module('ui.router.compat', ['ui.router']);
	/**
	 * Annotates a controller expression (may be a controller function(), a "controllername",
	 * or "controllername as name")
	 *
	 * - Temporarily decorates $injector.instantiate.
	 * - Invokes $controller() service
	 *   - Calls $injector.instantiate with controller constructor
	 * - Annotate constructor
	 * - Undecorate $injector
	 *
	 * returns an array of strings, which are the arguments of the controller expression
	 */
	function annotateController(controllerExpression) {
	    var $injector = coreservices_1.services.$injector;
	    var $controller = $injector.get("$controller");
	    var oldInstantiate = $injector.instantiate;
	    try {
	        var deps_1;
	        $injector.instantiate = function fakeInstantiate(constructorFunction) {
	            $injector.instantiate = oldInstantiate; // Un-decorate ASAP
	            deps_1 = $injector.annotate(constructorFunction);
	        };
	        $controller(controllerExpression, { $scope: {} });
	        return deps_1;
	    }
	    finally {
	        $injector.instantiate = oldInstantiate;
	    }
	}
	exports.annotateController = annotateController;
	runBlock.$inject = ['$injector', '$q'];
	function runBlock($injector, $q) {
	    coreservices_1.services.$injector = $injector;
	    coreservices_1.services.$q = $q;
	}
	app.run(runBlock);
	var router = null;
	ng1UIRouter.$inject = ['$locationProvider'];
	/** This angular 1 provider instantiates a Router and exposes its services via the angular injector */
	function ng1UIRouter($locationProvider) {
	    // Create a new instance of the Router when the ng1UIRouterProvider is initialized
	    router = new router_1.UIRouter();
	    // Apply ng1 `views` builder to the StateBuilder
	    router.stateRegistry.decorator("views", viewsBuilder_1.ng1ViewsBuilder);
	    router.viewService.viewConfigFactory('ng1', viewsBuilder_1.ng1ViewConfigFactory);
	    // Bind LocationConfig.hashPrefix to $locationProvider.hashPrefix
	    common_1.bindFunctions($locationProvider, coreservices_1.services.locationConfig, $locationProvider, ['hashPrefix']);
	    // Create a LocationService.onChange registry
	    var urlListeners = [];
	    coreservices_1.services.location.onChange = function (callback) {
	        urlListeners.push(callback);
	        return function () { return common_1.removeFrom(urlListeners)(callback); };
	    };
	    this.$get = $get;
	    $get.$inject = ['$location', '$browser', '$sniffer', '$rootScope', '$http', '$templateCache'];
	    function $get($location, $browser, $sniffer, $rootScope, $http, $templateCache) {
	        // Bind $locationChangeSuccess to the listeners registered in LocationService.onChange
	        $rootScope.$on("$locationChangeSuccess", function (evt) { return urlListeners.forEach(function (fn) { return fn(evt); }); });
	        // Bind LocationConfig.html5Mode to $locationProvider.html5Mode and $sniffer.history
	        coreservices_1.services.locationConfig.html5Mode = function () {
	            var html5Mode = $locationProvider.html5Mode();
	            html5Mode = predicates_1.isObject(html5Mode) ? html5Mode.enabled : html5Mode;
	            return html5Mode && $sniffer.history;
	        };
	        coreservices_1.services.template.get = function (url) {
	            return $http.get(url, { cache: $templateCache, headers: { Accept: 'text/html' } }).then(hof_1.prop("data"));
	        };
	        // Bind these LocationService functions to $location
	        common_1.bindFunctions($location, coreservices_1.services.location, $location, ["replace", "url", "path", "search", "hash"]);
	        // Bind these LocationConfig functions to $location
	        common_1.bindFunctions($location, coreservices_1.services.locationConfig, $location, ['port', 'protocol', 'host']);
	        // Bind these LocationConfig functions to $browser
	        common_1.bindFunctions($browser, coreservices_1.services.locationConfig, $browser, ['baseHref']);
	        return router;
	    }
	}
	var resolveFactory = function () { return ({
	    /**
	     * This emulates most of the behavior of the ui-router 0.2.x $resolve.resolve() service API.
	     * @param invocables an object, with keys as resolve names and values as injectable functions
	     * @param locals key/value pre-resolved data (locals)
	     * @param parent a promise for a "parent resolve"
	     */
	    resolve: function (invocables, locals, parent) {
	        if (locals === void 0) { locals = {}; }
	        var parentNode = new module_1.Node(new module_3.State({ params: {} }));
	        var node = new module_1.Node(new module_3.State({ params: {} }));
	        var context = new module_2.ResolveContext([parentNode, node]);
	        context.addResolvables(module_2.Resolvable.makeResolvables(invocables), node.state);
	        var resolveData = function (parentLocals) {
	            var rewrap = function (_locals) { return module_2.Resolvable.makeResolvables(common_1.map(_locals, function (local) { return function () { return local; }; })); };
	            context.addResolvables(rewrap(parentLocals), parentNode.state);
	            context.addResolvables(rewrap(locals), node.state);
	            return context.resolvePath();
	        };
	        return parent ? parent.then(resolveData) : resolveData({});
	    }
	}); };
	function $stateParamsFactory(ng1UIRouter) {
	    return ng1UIRouter.globals.params;
	}
	// The 'ui.router' ng1 module depends on 'ui.router.init' module.
	angular.module('ui.router.init', []).provider("ng1UIRouter", ng1UIRouter);
	// This effectively calls $get() to init when we enter runtime
	angular.module('ui.router.init').run(['ng1UIRouter', function (ng1UIRouter) { }]);
	// $urlMatcherFactory service and $urlMatcherFactoryProvider
	angular.module('ui.router.util').provider('$urlMatcherFactory', ['ng1UIRouterProvider', function () { return router.urlMatcherFactory; }]);
	angular.module('ui.router.util').run(['$urlMatcherFactory', function ($urlMatcherFactory) { }]);
	// $urlRouter service and $urlRouterProvider
	function getUrlRouterProvider() {
	    router.urlRouterProvider["$get"] = function () {
	        router.urlRouter.update(true);
	        if (!this.interceptDeferred)
	            router.urlRouter.listen();
	        return router.urlRouter;
	    };
	    return router.urlRouterProvider;
	}
	angular.module('ui.router.router').provider('$urlRouter', ['ng1UIRouterProvider', getUrlRouterProvider]);
	angular.module('ui.router.router').run(['$urlRouter', function ($urlRouter) { }]);
	// $state service and $stateProvider
	// $urlRouter service and $urlRouterProvider
	function getStateProvider() {
	    router.stateProvider["$get"] = function () {
	        // Autoflush once we are in runtime
	        router.stateRegistry.stateQueue.autoFlush(router.stateService);
	        return router.stateService;
	    };
	    return router.stateProvider;
	}
	angular.module('ui.router.state').provider('$state', ['ng1UIRouterProvider', getStateProvider]);
	angular.module('ui.router.state').run(['$state', function ($state) { }]);
	// $stateParams service
	angular.module('ui.router.state').factory('$stateParams', ['ng1UIRouter', function (ng1UIRouter) {
	        return ng1UIRouter.globals.params;
	    }]);
	// $transitions service and $transitionsProvider
	function getTransitionsProvider() {
	    loadAllControllerLocals.$inject = ['$transition$'];
	    function loadAllControllerLocals($transition$) {
	        var loadLocals = function (vc) {
	            var node = common_1.find($transition$.treeChanges().to, hof_1.propEq('state', vc.viewDecl.$context));
	            // Temporary fix; This whole callback should be nuked when fixing #2662
	            if (!node)
	                return coreservices_1.services.$q.when();
	            var resolveCtx = node.resolveContext;
	            var controllerDeps = annotateController(vc.controller);
	            var resolvables = resolveCtx.getResolvables();
	            function $loadControllerLocals() { }
	            $loadControllerLocals.$inject = controllerDeps.filter(function (dep) { return resolvables.hasOwnProperty(dep); });
	            // Load any controller resolves that aren't already loaded
	            return resolveCtx.invokeLater($loadControllerLocals)
	                .then(function () { return vc.locals = common_1.map(resolvables, function (res) { return res.data; }); });
	        };
	        var loadAllLocals = $transition$.views("entering").filter(function (vc) { return !!vc.controller; }).map(loadLocals);
	        return coreservices_1.services.$q.all(loadAllLocals).then(common_1.noop);
	    }
	    router.transitionService.onFinish({}, loadAllControllerLocals);
	    router.transitionService["$get"] = function () { return router.transitionService; };
	    return router.transitionService;
	}
	angular.module('ui.router.state').provider('$transitions', ['ng1UIRouterProvider', getTransitionsProvider]);
	// $templateFactory service
	angular.module('ui.router.util').factory('$templateFactory', ['ng1UIRouter', function () { return new templateFactory_1.TemplateFactory(); }]);
	// The $view service
	angular.module('ui.router').factory('$view', function () { return router.viewService; });
	// The old $resolve service
	angular.module('ui.router').factory('$resolve', resolveFactory);
	// $trace service
	angular.module("ui.router").service("$trace", function () { return trace_1.trace; });
	watchDigests.$inject = ['$rootScope'];
	function watchDigests($rootScope) {
	    $rootScope.$watch(function () { trace_1.trace.approximateDigests++; });
	}
	exports.watchDigests = watchDigests;
	angular.module("ui.router").run(watchDigests);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(3);
	var strings_1 = __webpack_require__(9);
	var view_1 = __webpack_require__(50);
	var predicates_1 = __webpack_require__(4);
	var coreservices_1 = __webpack_require__(6);
	var trace_1 = __webpack_require__(12);
	var templateFactory_1 = __webpack_require__(55);
	exports.ng1ViewConfigFactory = function (node, view) { return new Ng1ViewConfig(node, view); };
	/**
	 * This is a [[StateBuilder.builder]] function for angular1 `views`.
	 *
	 * When the [[StateBuilder]] builds a [[State]] object from a raw [[StateDeclaration]], this builder
	 * handles the `views` property with logic specific to angular-ui-router (ng1).
	 *
	 * If no `views: {}` property exists on the [[StateDeclaration]], then it creates the `views` object
	 * and applies the state-level configuration to a view named `$default`.
	 */
	function ng1ViewsBuilder(state) {
	    var tplKeys = ['templateProvider', 'templateUrl', 'template', 'notify', 'async'], ctrlKeys = ['controller', 'controllerProvider', 'controllerAs', 'resolveAs'], compKeys = ['component', 'bindings'], nonCompKeys = tplKeys.concat(ctrlKeys), allKeys = compKeys.concat(nonCompKeys);
	    var views = {}, viewsObject = state.views || { "$default": common_1.pick(state, allKeys) };
	    common_1.forEach(viewsObject, function (config, name) {
	        // Account for views: { "": { template... } }
	        name = name || "$default";
	        // Account for views: { header: "headerComponent" }
	        if (predicates_1.isString(config))
	            config = { component: config };
	        if (!Object.keys(config).length)
	            return;
	        // Configure this view for routing to an angular 1.5+ style .component (or any directive, really)
	        if (config.component) {
	            if (nonCompKeys.map(function (key) { return predicates_1.isDefined(config[key]); }).reduce(common_1.anyTrueR, false)) {
	                throw new Error("Cannot combine: " + compKeys.join("|") + " with: " + nonCompKeys.join("|") + " in stateview: 'name@" + state.name + "'");
	            }
	            // Dynamically build a template like "<component-name input1='$resolve.foo'></component-name>"
	            config.templateProvider = ['$injector', function ($injector) {
	                    var resolveFor = function (key) { return config.bindings && config.bindings[key] || key; };
	                    var prefix = angular.version.minor >= 3 ? "::" : "";
	                    var attrs = getComponentInputs($injector, config.component)
	                        .map(function (key) { return (strings_1.kebobString(key) + "='" + prefix + "$resolve." + resolveFor(key) + "'"); }).join(" ");
	                    var kebobName = strings_1.kebobString(config.component);
	                    return "<" + kebobName + " " + attrs + "></" + kebobName + ">";
	                }];
	        }
	        config.resolveAs = config.resolveAs || '$resolve';
	        config.$type = "ng1";
	        config.$context = state;
	        config.$name = name;
	        var normalized = view_1.ViewService.normalizeUiViewTarget(config.$context, config.$name);
	        config.$uiViewName = normalized.uiViewName;
	        config.$uiViewContextAnchor = normalized.uiViewContextAnchor;
	        views[name] = config;
	    });
	    return views;
	}
	exports.ng1ViewsBuilder = ng1ViewsBuilder;
	// for ng 1.2 style, process the scope: { input: "=foo" } object
	var scopeBindings = function (bindingsObj) { return Object.keys(bindingsObj || {})
	    .map(function (key) { return [key, /^[=<](.*)/.exec(bindingsObj[key])]; })
	    .filter(function (tuple) { return predicates_1.isDefined(tuple[1]); })
	    .map(function (tuple) { return tuple[1][1] || tuple[0]; }); };
	// for ng 1.3+ bindToController or 1.5 component style, process a $$bindings object
	var bindToCtrlBindings = function (bindingsObj) { return Object.keys(bindingsObj || {})
	    .filter(function (key) { return !!/[=<]/.exec(bindingsObj[key].mode); })
	    .map(function (key) { return bindingsObj[key].attrName; }); };
	// Given a directive definition, find its object input attributes
	// Use different properties, depending on the type of directive (component, bindToController, normal)
	var getBindings = function (def) {
	    if (predicates_1.isObject(def.bindToController))
	        return scopeBindings(def.bindToController);
	    if (def.$$bindings && def.$$bindings.bindToController)
	        return bindToCtrlBindings(def.$$bindings.bindToController);
	    if (def.$$isolateBindings)
	        return bindToCtrlBindings(def.$$isolateBindings);
	    return scopeBindings(def.scope);
	};
	// Gets all the directive(s)' inputs ('=' and '<')
	function getComponentInputs($injector, name) {
	    var cmpDefs = $injector.get(name + "Directive"); // could be multiple
	    if (!cmpDefs || !cmpDefs.length)
	        throw new Error("Unable to find component named '" + name + "'");
	    return cmpDefs.map(getBindings).reduce(common_1.unnestR, []);
	}
	var Ng1ViewConfig = (function () {
	    function Ng1ViewConfig(node, viewDecl) {
	        this.node = node;
	        this.viewDecl = viewDecl;
	        this.loaded = false;
	    }
	    Ng1ViewConfig.prototype.load = function () {
	        var _this = this;
	        var $q = coreservices_1.services.$q;
	        if (!this.hasTemplate())
	            throw new Error("No template configuration specified for '" + this.viewDecl.$uiViewName + "@" + this.viewDecl.$uiViewContextAnchor + "'");
	        var injector = this.node.resolveContext;
	        var params = this.node.paramValues;
	        var promises = {
	            template: $q.when(this.getTemplate(params, new templateFactory_1.TemplateFactory(), injector)),
	            controller: $q.when(this.getController(injector))
	        };
	        return $q.all(promises).then(function (results) {
	            trace_1.trace.traceViewServiceEvent("Loaded", _this);
	            _this.controller = results.controller;
	            _this.template = results.template;
	        });
	    };
	    /**
	     * Checks a view configuration to ensure that it specifies a template.
	     *
	     * @return {boolean} Returns `true` if the configuration contains a valid template, otherwise `false`.
	     */
	    Ng1ViewConfig.prototype.hasTemplate = function () {
	        return !!(this.viewDecl.template || this.viewDecl.templateUrl || this.viewDecl.templateProvider);
	    };
	    Ng1ViewConfig.prototype.getTemplate = function (params, $factory, injector) {
	        return $factory.fromConfig(this.viewDecl, params, injector.invokeLater.bind(injector));
	    };
	    /**
	     * Gets the controller for a view configuration.
	     *
	     * @returns {Function|Promise.<Function>} Returns a controller, or a promise that resolves to a controller.
	     */
	    Ng1ViewConfig.prototype.getController = function (injector) {
	        //* @param {Object} locals A context object from transition.context() to invoke a function in the correct context
	        var provider = this.viewDecl.controllerProvider;
	        return predicates_1.isInjectable(provider) ? injector.invokeLater(provider, {}) : this.viewDecl.controller;
	    };
	    return Ng1ViewConfig;
	}());
	exports.Ng1ViewConfig = Ng1ViewConfig;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module view */ /** for typedoc */
	var predicates_1 = __webpack_require__(4);
	var coreservices_1 = __webpack_require__(6);
	/**
	 * Service which manages loading of templates from a ViewConfig.
	 */
	var TemplateFactory = (function () {
	    function TemplateFactory() {
	    }
	    /**
	     * Creates a template from a configuration object.
	     *
	     * @param config Configuration object for which to load a template.
	     * The following properties are search in the specified order, and the first one
	     * that is defined is used to create the template:
	     *
	     * @param params  Parameters to pass to the template function.
	     * @param injectFn Function to which an injectable function may be passed.
	     *        If templateProvider is defined, this injectFn will be used to invoke it.
	     *
	     * @return {string|object}  The template html as a string, or a promise for
	     * that string,or `null` if no template is configured.
	     */
	    TemplateFactory.prototype.fromConfig = function (config, params, injectFn) {
	        return (predicates_1.isDefined(config.template) ? this.fromString(config.template, params) :
	            predicates_1.isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
	                predicates_1.isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, injectFn) :
	                    null);
	    };
	    ;
	    /**
	     * Creates a template from a string or a function returning a string.
	     *
	     * @param template html template as a string or function that returns an html template as a string.
	     * @param params Parameters to pass to the template function.
	     *
	     * @return {string|object} The template html as a string, or a promise for that
	     * string.
	     */
	    TemplateFactory.prototype.fromString = function (template, params) {
	        return predicates_1.isFunction(template) ? template(params) : template;
	    };
	    ;
	    /**
	     * Loads a template from the a URL via `$http` and `$templateCache`.
	     *
	     * @param {string|Function} url url of the template to load, or a function
	     * that returns a url.
	     * @param {Object} params Parameters to pass to the url function.
	     * @return {string|Promise.<string>} The template html as a string, or a promise
	     * for that string.
	     */
	    TemplateFactory.prototype.fromUrl = function (url, params) {
	        if (predicates_1.isFunction(url))
	            url = url(params);
	        if (url == null)
	            return null;
	        return coreservices_1.services.template.get(url);
	    };
	    ;
	    /**
	     * Creates a template by invoking an injectable provider function.
	     *
	     * @param provider Function to invoke via `locals`
	     * @param {Function} injectFn a function used to invoke the template provider
	     * @return {string|Promise.<string>} The template html as a string, or a promise
	     * for that string.
	     */
	    TemplateFactory.prototype.fromProvider = function (provider, params, injectFn) {
	        return injectFn(provider);
	    };
	    ;
	    return TemplateFactory;
	}());
	exports.TemplateFactory = TemplateFactory;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * These are the UI-Router angular 1 directives.
	 *
	 * These directives are used in templates to create viewports and navigate to states
	 *
	 * @preferred @module ng1_directives
	 */ /** for typedoc */
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var hof_1 = __webpack_require__(5);
	/** @hidden */
	function parseStateRef(ref, current) {
	    var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
	    if (preparsed)
	        ref = current + '(' + preparsed[1] + ')';
	    parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
	    if (!parsed || parsed.length !== 4)
	        throw new Error("Invalid state ref '" + ref + "'");
	    return { state: parsed[1], paramExpr: parsed[3] || null };
	}
	/** @hidden */
	function stateContext(el) {
	    var $uiView = el.parent().inheritedData('$uiView');
	    var context = hof_1.parse('$cfg.node.state')($uiView);
	    return context && context.name ? context : undefined;
	}
	/** @hidden */
	function getTypeInfo(el) {
	    // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
	    var isSvg = Object.prototype.toString.call(el.prop('href')) === '[object SVGAnimatedString]';
	    var isForm = el[0].nodeName === "FORM";
	    return {
	        attr: isForm ? "action" : (isSvg ? 'xlink:href' : 'href'),
	        isAnchor: el.prop("tagName").toUpperCase() === "A",
	        clickable: !isForm
	    };
	}
	/** @hidden */
	function clickHook(el, $state, $timeout, type, current) {
	    return function (e) {
	        var button = e.which || e.button, target = current();
	        if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || el.attr('target'))) {
	            // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	            var transition = $timeout(function () {
	                $state.go(target.state, target.params, target.options);
	            });
	            e.preventDefault();
	            // if the state has no URL, ignore one preventDefault from the <a> directive.
	            var ignorePreventDefaultCount = type.isAnchor && !target.href ? 1 : 0;
	            e.preventDefault = function () {
	                if (ignorePreventDefaultCount-- <= 0)
	                    $timeout.cancel(transition);
	            };
	        }
	    };
	}
	/** @hidden */
	function defaultOpts(el, $state) {
	    return { relative: stateContext(el) || $state.$current, inherit: true };
	}
	/**
	 * `ui-sref`: A directive for linking to a state
	 *
	 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated
	 * URL, the directive will automatically generate & update the `href` attribute via
	 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking
	 * the link will trigger a state transition with optional parameters.
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative
	 * paths passed to `$state.go()`. You just need to be aware that the path is relative
	 * to the state that the link lives in, in other words the state that loaded the
	 * template containing the link.
	 *
	 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
	 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
	 * and `reload`.
	 *
	 * Here's an example of how you'd use ui-sref and how it would compile. If you have the
	 * following template:
	 *
	 * @example
	 * ```html
	 *
	 * <pre>
	 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
	 *
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
	 *     </li>
	 * </ul>
	 * </pre>
	 * ```
	 *
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 *
	 * ```html
	 *
	 * <pre>
	 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
	 *
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
	 *     </li>
	 * </ul>
	 *
	 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
	 * </pre>
	 * ```
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to [[StateService.go]]
	 */
	var uiSrefNg1 = ['$state', '$timeout',
	    function $StateRefDirective($state, $timeout) {
	        return {
	            restrict: 'A',
	            require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	            link: function (scope, element, attrs, uiSrefActive) {
	                var ref = parseStateRef(attrs.uiSref, $state.current.name);
	                var def = { state: ref.state, href: null, params: null, options: null };
	                var type = getTypeInfo(element);
	                var active = uiSrefActive[1] || uiSrefActive[0];
	                var unlinkInfoFn = null;
	                def.options = common_1.extend(defaultOpts(element, $state), attrs.uiSrefOpts ? scope.$eval(attrs.uiSrefOpts) : {});
	                var update = function (val) {
	                    if (val)
	                        def.params = angular.copy(val);
	                    def.href = $state.href(ref.state, def.params, def.options);
	                    if (unlinkInfoFn)
	                        unlinkInfoFn();
	                    if (active)
	                        unlinkInfoFn = active.$$addStateInfo(ref.state, def.params);
	                    if (def.href !== null)
	                        attrs.$set(type.attr, def.href);
	                };
	                if (ref.paramExpr) {
	                    scope.$watch(ref.paramExpr, function (val) { if (val !== def.params)
	                        update(val); }, true);
	                    def.params = angular.copy(scope.$eval(ref.paramExpr));
	                }
	                update();
	                if (!type.clickable)
	                    return;
	                element.bind("click", clickHook(element, $state, $timeout, type, function () { return def; }));
	            }
	        };
	    }];
	/**
	 * `ui-state`: A dynamic version of `ui-sref`
	 *
	 * Much like ui-sref, but will accept named $scope properties to evaluate for a state definition,
	 * params and override options.
	 *
	 * @example
	 * ```html
	 *
	 * <li ng-repeat="nav in navlinks">
	 *   <a ui-state="nav.statename">{{nav.description}}</a>
	 * </li>
	 *
	 * @param {string} ui-state 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-state-params params to pass to [[StateService.href]]
	 * @param {Object} ui-state-opts options to pass to [[StateService.go]]
	 */
	var uiStateNg1 = ['$state', '$timeout',
	    function $StateRefDynamicDirective($state, $timeout) {
	        return {
	            restrict: 'A',
	            require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	            link: function (scope, element, attrs, uiSrefActive) {
	                var type = getTypeInfo(element);
	                var active = uiSrefActive[1] || uiSrefActive[0];
	                var group = [attrs.uiState, attrs.uiStateParams || null, attrs.uiStateOpts || null];
	                var watch = '[' + group.map(function (val) { return val || 'null'; }).join(', ') + ']';
	                var def = { state: null, params: null, options: null, href: null };
	                var unlinkInfoFn = null;
	                function runStateRefLink(group) {
	                    def.state = group[0];
	                    def.params = group[1];
	                    def.options = group[2];
	                    def.href = $state.href(def.state, def.params, def.options);
	                    if (unlinkInfoFn)
	                        unlinkInfoFn();
	                    if (active)
	                        unlinkInfoFn = active.$$addStateInfo(def.state, def.params);
	                    if (def.href)
	                        attrs.$set(type.attr, def.href);
	                }
	                scope.$watch(watch, runStateRefLink, true);
	                runStateRefLink(scope.$eval(watch));
	                if (!type.clickable)
	                    return;
	                element.bind("click", clickHook(element, $state, $timeout, type, function () { return def; }));
	            }
	        };
	    }];
	/**
	 * `ui-sref-active` and `ui-sref-active-eq`: A directive that adds a CSS class when a `ui-sref` is active
	 *
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use ui-sref-active-eq
	 *
	 * Given the following template:
	 * @example
	 * ```html
	 *
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item">
	 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 * ```
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 *
	 * ```html
	 *
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item active">
	 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 * ```
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 *
	 * ```html
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active='class1 class2 class3'>
	 *     <a ui-sref="app.user">link</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 * ```
	 *
	 * It is also possible to pass ui-sref-active an expression that evaluates
	 * to an object hash, whose keys represent active class names and whose
	 * values represent the respective state names/globs.
	 * ui-sref-active will match if the current active state **includes** any of
	 * the specified state names/globs, even the abstract ones.
	 *
	 * Given the following template, with "admin" being an abstract state:
	 * @example
	 * ```html
	 *
	 * <pre>
	 * <div ui-sref-active="{'active': 'admin.*'}">
	 *   <a ui-sref-active="active" ui-sref="admin.roles">Roles</a>
	 * </div>
	 * </pre>
	 * ```
	 *
	 * When the current state is "admin.roles" the "active" class will be applied
	 * to both the <div> and <a> elements. It is important to note that the state
	 * names/globs passed to ui-sref-active shadow the state provided by ui-sref.
	 */
	var uiSrefActiveNg1 = ['$state', '$stateParams', '$interpolate', '$transitions',
	    function $StateRefActiveDirective($state, $stateParams, $interpolate, $transitions) {
	        return {
	            restrict: "A",
	            controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, $element, $attrs, $timeout) {
	                    var states = [], activeClasses = {}, activeEqClass, uiSrefActive;
	                    // There probably isn't much point in $observing this
	                    // uiSrefActive and uiSrefActiveEq share the same directive object with some
	                    // slight difference in logic routing
	                    activeEqClass = $interpolate($attrs.uiSrefActiveEq || '', false)($scope);
	                    try {
	                        uiSrefActive = $scope.$eval($attrs.uiSrefActive);
	                    }
	                    catch (e) {
	                    }
	                    uiSrefActive = uiSrefActive || $interpolate($attrs.uiSrefActive || '', false)($scope);
	                    if (predicates_1.isObject(uiSrefActive)) {
	                        common_1.forEach(uiSrefActive, function (stateOrName, activeClass) {
	                            if (predicates_1.isString(stateOrName)) {
	                                var ref = parseStateRef(stateOrName, $state.current.name);
	                                addState(ref.state, $scope.$eval(ref.paramExpr), activeClass);
	                            }
	                        });
	                    }
	                    // Allow uiSref to communicate with uiSrefActive[Equals]
	                    this.$$addStateInfo = function (newState, newParams) {
	                        // we already got an explicit state provided by ui-sref-active, so we
	                        // shadow the one that comes from ui-sref
	                        if (predicates_1.isObject(uiSrefActive) && states.length > 0) {
	                            return;
	                        }
	                        var deregister = addState(newState, newParams, uiSrefActive);
	                        update();
	                        return deregister;
	                    };
	                    $scope.$on('$stateChangeSuccess', update);
	                    var updateAfterTransition = ['$transition$', function ($transition$) { $transition$.promise.then(update); }];
	                    var deregisterFn = $transitions.onStart({}, updateAfterTransition);
	                    $scope.$on('$destroy', deregisterFn);
	                    function addState(stateName, stateParams, activeClass) {
	                        var state = $state.get(stateName, stateContext($element));
	                        var stateHash = createStateHash(stateName, stateParams);
	                        var stateInfo = {
	                            state: state || { name: stateName },
	                            params: stateParams,
	                            hash: stateHash
	                        };
	                        states.push(stateInfo);
	                        activeClasses[stateHash] = activeClass;
	                        return function removeState() {
	                            var idx = states.indexOf(stateInfo);
	                            if (idx !== -1)
	                                states.splice(idx, 1);
	                        };
	                    }
	                    /**
	                     * @param {string} state
	                     * @param {Object|string} [params]
	                     * @return {string}
	                     */
	                    function createStateHash(state, params) {
	                        if (!predicates_1.isString(state)) {
	                            throw new Error('state should be a string');
	                        }
	                        if (predicates_1.isObject(params)) {
	                            return state + common_1.toJson(params);
	                        }
	                        params = $scope.$eval(params);
	                        if (predicates_1.isObject(params)) {
	                            return state + common_1.toJson(params);
	                        }
	                        return state;
	                    }
	                    // Update route state
	                    function update() {
	                        for (var i = 0; i < states.length; i++) {
	                            if (anyMatch(states[i].state, states[i].params)) {
	                                addClass($element, activeClasses[states[i].hash]);
	                            }
	                            else {
	                                removeClass($element, activeClasses[states[i].hash]);
	                            }
	                            if (exactMatch(states[i].state, states[i].params)) {
	                                addClass($element, activeEqClass);
	                            }
	                            else {
	                                removeClass($element, activeEqClass);
	                            }
	                        }
	                    }
	                    function addClass(el, className) { $timeout(function () { el.addClass(className); }); }
	                    function removeClass(el, className) { el.removeClass(className); }
	                    function anyMatch(state, params) { return $state.includes(state.name, params); }
	                    function exactMatch(state, params) { return $state.is(state.name, params); }
	                    update();
	                }]
	        };
	    }];
	angular.module('ui.router.state')
	    .directive('uiSref', uiSrefNg1)
	    .directive('uiSrefActive', uiSrefActiveNg1)
	    .directive('uiSrefActiveEq', uiSrefActiveNg1)
	    .directive('uiState', uiStateNg1);


/***/ },
/* 57 */
/***/ function(module, exports) {

	/** @module state */ /** for typedoc */
	"use strict";
	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */
	$IsStateFilter.$inject = ['$state'];
	function $IsStateFilter($state) {
	    var isFilter = function (state, params, options) {
	        return $state.is(state, params, options);
	    };
	    isFilter.$stateful = true;
	    return isFilter;
	}
	exports.$IsStateFilter = $IsStateFilter;
	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */
	$IncludedByStateFilter.$inject = ['$state'];
	function $IncludedByStateFilter($state) {
	    var includesFilter = function (state, params, options) {
	        return $state.includes(state, params, options);
	    };
	    includesFilter.$stateful = true;
	    return includesFilter;
	}
	exports.$IncludedByStateFilter = $IncludedByStateFilter;
	angular.module('ui.router.state')
	    .filter('isState', $IsStateFilter)
	    .filter('includedByState', $IncludedByStateFilter);


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/** @module ng1_directives */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(3);
	var predicates_1 = __webpack_require__(4);
	var trace_1 = __webpack_require__(12);
	var rejectFactory_1 = __webpack_require__(10);
	var hof_1 = __webpack_require__(5);
	var strings_1 = __webpack_require__(9);
	/**
	 * `ui-view`: A viewport directive which is filled in by a view from the active state.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 *
	 * A view can be unnamed or named.
	 * @example
	 * ```html
	 *
	 * <!-- Unnamed -->
	 * <div ui-view></div>
	 *
	 * <!-- Named -->
	 * <div ui-view="viewName"></div>
	 * ```
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a
	 * single view and it is unnamed then you can populate it like so:
	 * ```
	 *
	 * <div ui-view></div>
	 * $stateProvider.state("home", {
	 *   template: "<h1>HELLO!</h1>"
	 * })
	 * ```
	 *
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
	 * config property, by name, in this case an empty name:
	 * ```js
	 *
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }
	 * })
	 * ```
	 *
	 * But typically you'll only use the views property if you name your view or have more than one view
	 * in the same template. There's not really a compelling reason to name a view if its the only one,
	 * but you could if you wanted, like so:
	 *
	 * ```html
	 *
	 * <div ui-view="main"></div>
	 * ```
	 *
	 * ```js
	 *
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }
	 * })
	 * ```
	 *
	 * Really though, you'll use views to set up multiple views:
	 * ```html
	 *
	 * <div ui-view></div>
	 * <div ui-view="chart"></div>
	 * <div ui-view="data"></div>
	 * ```
	 *
	 * ```js
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     },
	 *     "chart": {
	 *       template: "<chart_thing/>"
	 *     },
	 *     "data": {
	 *       template: "<data_thing/>"
	 *     }
	 *   }
	 * })
	 * ```
	 *
	 * Examples for `autoscroll`:
	 *
	 * ```html
	 *
	 * <!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view -->
	 * <ui-view autoscroll/>
	 *
	 * <!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true -->
	 * <ui-view autoscroll='true'/>
	 * <ui-view autoscroll='false'/>
	 * <ui-view autoscroll='scopeVariable'/>
	 * ```
	 *
	 * Resolve data:
	 *
	 * The resolved data from the state's `resolve` block is placed on the scope as `$resolve` (this
	 * can be customized using [[ViewDeclaration.resolveAs]]).  This can be then accessed from the template.
	 *
	 * Note that when `controllerAs` is being used, `$resolve` is set on the controller instance *after* the
	 * controller is instantiated.  The `$onInit()` hook can be used to perform initialization code which
	 * depends on `$resolve` data.
	 *
	 * @example
	 * ```js
	 *
	 * $stateProvider.state('home', {
	 *   template: '<my-component user="$resolve.user"></my-component>',
	 *   resolve: {
	 *     user: function(UserService) { return UserService.fetchUser(); }
	 *   }
	 * });
	 * ```
	 */
	var uiViewNg1 = ['$view', '$animate', '$uiViewScroll', '$interpolate', '$q',
	    function $ViewDirective($view, $animate, $uiViewScroll, $interpolate, $q) {
	        function getRenderer(attrs, scope) {
	            return {
	                enter: function (element, target, cb) {
	                    if (angular.version.minor > 2) {
	                        $animate.enter(element, null, target).then(cb);
	                    }
	                    else {
	                        $animate.enter(element, null, target, cb);
	                    }
	                },
	                leave: function (element, cb) {
	                    if (angular.version.minor > 2) {
	                        $animate.leave(element).then(cb);
	                    }
	                    else {
	                        $animate.leave(element, cb);
	                    }
	                }
	            };
	        }
	        function configsEqual(config1, config2) {
	            return config1 === config2;
	        }
	        var rootData = {
	            $cfg: { viewDecl: { $context: $view.rootContext() } },
	            $uiView: {}
	        };
	        var directive = {
	            count: 0,
	            restrict: 'ECA',
	            terminal: true,
	            priority: 400,
	            transclude: 'element',
	            compile: function (tElement, tAttrs, $transclude) {
	                return function (scope, $element, attrs) {
	                    var previousEl, currentEl, currentScope, unregister, onloadExp = attrs.onload || '', autoScrollExp = attrs.autoscroll, renderer = getRenderer(attrs, scope), viewConfig = undefined, inherited = $element.inheritedData('$uiView') || rootData, name = $interpolate(attrs.uiView || attrs.name || '')(scope) || '$default';
	                    var activeUIView = {
	                        id: directive.count++,
	                        name: name,
	                        fqn: inherited.$uiView.fqn ? inherited.$uiView.fqn + "." + name : name,
	                        config: null,
	                        configUpdated: configUpdatedCallback,
	                        get creationContext() {
	                            return hof_1.parse('$cfg.viewDecl.$context')(inherited);
	                        }
	                    };
	                    trace_1.trace.traceUiViewEvent("Linking", activeUIView);
	                    function configUpdatedCallback(config) {
	                        if (configsEqual(viewConfig, config))
	                            return;
	                        trace_1.trace.traceUiViewConfigUpdated(activeUIView, config && config.viewDecl && config.viewDecl.$context);
	                        viewConfig = config;
	                        updateView(config);
	                    }
	                    $element.data('$uiView', { $uiView: activeUIView });
	                    updateView();
	                    unregister = $view.registerUiView(activeUIView);
	                    scope.$on("$destroy", function () {
	                        trace_1.trace.traceUiViewEvent("Destroying/Unregistering", activeUIView);
	                        unregister();
	                    });
	                    function cleanupLastView() {
	                        if (previousEl) {
	                            trace_1.trace.traceUiViewEvent("Removing (previous) el", previousEl.data('$uiView'));
	                            previousEl.remove();
	                            previousEl = null;
	                        }
	                        if (currentScope) {
	                            trace_1.trace.traceUiViewEvent("Destroying scope", activeUIView);
	                            currentScope.$destroy();
	                            currentScope = null;
	                        }
	                        if (currentEl) {
	                            var _viewData_1 = currentEl.data('$uiView');
	                            trace_1.trace.traceUiViewEvent("Animate out", _viewData_1);
	                            renderer.leave(currentEl, function () {
	                                _viewData_1.$$animLeave.resolve();
	                                previousEl = null;
	                            });
	                            previousEl = currentEl;
	                            currentEl = null;
	                        }
	                    }
	                    function updateView(config) {
	                        var newScope = scope.$new();
	                        trace_1.trace.traceUiViewScopeCreated(activeUIView, newScope);
	                        var animEnter = $q.defer(), animLeave = $q.defer();
	                        var $uiViewData = {
	                            $cfg: config,
	                            $uiView: activeUIView,
	                            $animEnter: animEnter.promise,
	                            $animLeave: animLeave.promise,
	                            $$animLeave: animLeave
	                        };
	                        var cloned = $transclude(newScope, function (clone) {
	                            renderer.enter(clone.data('$uiView', $uiViewData), $element, function onUiViewEnter() {
	                                animEnter.resolve();
	                                if (currentScope)
	                                    currentScope.$emit('$viewContentAnimationEnded');
	                                if (predicates_1.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
	                                    $uiViewScroll(clone);
	                                }
	                            });
	                            cleanupLastView();
	                        });
	                        currentEl = cloned;
	                        currentScope = newScope;
	                        /**
	                         * @ngdoc event
	                         * @name ui.router.state.directive:ui-view#$viewContentLoaded
	                         * @eventOf ui.router.state.directive:ui-view
	                         * @eventType emits on ui-view directive scope
	                         * @description           *
	                         * Fired once the view is **loaded**, *after* the DOM is rendered.
	                         *
	                         * @param {Object} event Event object.
	                         */
	                        currentScope.$emit('$viewContentLoaded', config || viewConfig);
	                        currentScope.$eval(onloadExp);
	                    }
	                };
	            }
	        };
	        return directive;
	    }];
	$ViewDirectiveFill.$inject = ['$compile', '$controller', '$transitions', '$view', '$timeout'];
	/** @hidden */
	function $ViewDirectiveFill($compile, $controller, $transitions, $view, $timeout) {
	    var getControllerAs = hof_1.parse('viewDecl.controllerAs');
	    var getResolveAs = hof_1.parse('viewDecl.resolveAs');
	    var getResolveContext = hof_1.parse('node.resolveContext');
	    return {
	        restrict: 'ECA',
	        priority: -400,
	        compile: function (tElement) {
	            var initial = tElement.html();
	            return function (scope, $element) {
	                var data = $element.data('$uiView');
	                if (!data)
	                    return;
	                var cfg = data.$cfg || { viewDecl: {} };
	                $element.html(cfg.template || initial);
	                trace_1.trace.traceUiViewFill(data.$uiView, $element.html());
	                var link = $compile($element.contents());
	                var controller = cfg.controller;
	                var controllerAs = getControllerAs(cfg);
	                var resolveAs = getResolveAs(cfg);
	                var resolveCtx = getResolveContext(cfg);
	                var locals = resolveCtx && common_1.map(resolveCtx.getResolvables(), function (r) { return r.data; });
	                scope[resolveAs] = locals;
	                if (controller) {
	                    var controllerInstance = $controller(controller, common_1.extend({}, locals, { $scope: scope, $element: $element }));
	                    if (controllerAs) {
	                        scope[controllerAs] = controllerInstance;
	                        scope[controllerAs][resolveAs] = locals;
	                    }
	                    // TODO: Use $view service as a central point for registering component-level hooks
	                    // Then, when a component is created, tell the $view service, so it can invoke hooks
	                    // $view.componentLoaded(controllerInstance, { $scope: scope, $element: $element });
	                    // scope.$on('$destroy', () => $view.componentUnloaded(controllerInstance, { $scope: scope, $element: $element }));
	                    $element.data('$ngControllerController', controllerInstance);
	                    $element.children().data('$ngControllerController', controllerInstance);
	                    registerControllerCallbacks($transitions, controllerInstance, scope, cfg);
	                }
	                // Wait for the component to appear in the DOM
	                if (predicates_1.isString(cfg.viewDecl.component)) {
	                    var cmp_1 = cfg.viewDecl.component;
	                    var kebobName_1 = strings_1.kebobString(cmp_1);
	                    var getComponentController = function () {
	                        var directiveEl = [].slice.call($element[0].children)
	                            .filter(function (el) { return el && el.tagName && el.tagName.toLowerCase() === kebobName_1; });
	                        return directiveEl && angular.element(directiveEl).data("$" + cmp_1 + "Controller");
	                    };
	                    var deregisterWatch_1 = scope.$watch(getComponentController, function (ctrlInstance) {
	                        if (!ctrlInstance)
	                            return;
	                        registerControllerCallbacks($transitions, ctrlInstance, scope, cfg);
	                        deregisterWatch_1();
	                    });
	                }
	                link(scope);
	            };
	        }
	    };
	}
	/** @hidden */
	var hasComponentImpl = typeof angular.module('ui.router')['component'] === 'function';
	/** @hidden TODO: move these callbacks to $view and/or `/hooks/components.ts` or something */
	function registerControllerCallbacks($transitions, controllerInstance, $scope, cfg) {
	    // Call $onInit() ASAP
	    if (predicates_1.isFunction(controllerInstance.$onInit) && !(cfg.viewDecl.component && hasComponentImpl))
	        controllerInstance.$onInit();
	    var hookOptions = { bind: controllerInstance };
	    // Add component-level hook for onParamsChange
	    if (predicates_1.isFunction(controllerInstance.uiOnParamsChanged)) {
	        // Fire callback on any successful transition
	        var paramsUpdated_1 = function ($transition$) {
	            var ctx = cfg.node.resolveContext;
	            var viewCreationTrans = ctx.getResolvables()['$transition$'].data;
	            // Exit early if the $transition$ is the same as the view was created within.
	            // Exit early if the $transition$ will exit the state the view is for.
	            if ($transition$ === viewCreationTrans || $transition$.exiting().indexOf(cfg.node.state.self) !== -1)
	                return;
	            var toParams = $transition$.params("to");
	            var fromParams = $transition$.params("from");
	            var toSchema = $transition$.treeChanges().to.map(function (node) { return node.paramSchema; }).reduce(common_1.unnestR, []);
	            var fromSchema = $transition$.treeChanges().from.map(function (node) { return node.paramSchema; }).reduce(common_1.unnestR, []);
	            // Find the to params that have different values than the from params
	            var changedToParams = toSchema.filter(function (param) {
	                var idx = fromSchema.indexOf(param);
	                return idx === -1 || !fromSchema[idx].type.equals(toParams[param.id], fromParams[param.id]);
	            });
	            // Only trigger callback if a to param has changed or is new
	            if (changedToParams.length) {
	                var changedKeys_1 = changedToParams.map(function (x) { return x.id; });
	                // Filter the params to only changed/new to params.  `$transition$.params()` may be used to get all params.
	                controllerInstance.uiOnParamsChanged(common_1.filter(toParams, function (val, key) { return changedKeys_1.indexOf(key) !== -1; }), $transition$);
	            }
	        };
	        $scope.$on('$destroy', $transitions.onSuccess({}, ['$transition$', paramsUpdated_1]), hookOptions);
	        // Fire callback on any IGNORED transition
	        var onDynamic = function ($error$, $transition$) {
	            if ($error$.type === rejectFactory_1.RejectType.IGNORED)
	                paramsUpdated_1($transition$);
	        };
	        $scope.$on('$destroy', $transitions.onError({}, ['$error$', '$transition$', onDynamic]), hookOptions);
	    }
	    // Add component-level hook for uiCanExit
	    if (predicates_1.isFunction(controllerInstance.uiCanExit)) {
	        var criteria = { exiting: cfg.node.state.name };
	        $scope.$on('$destroy', $transitions.onBefore(criteria, controllerInstance.uiCanExit, hookOptions));
	    }
	}
	angular.module('ui.router.state').directive('uiView', uiViewNg1);
	angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);


/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */
	function $ViewScrollProvider() {
	    var useAnchorScroll = false;
	    /**
	     * @ngdoc function
	     * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	     * @methodOf ui.router.state.$uiViewScrollProvider
	     *
	     * @description
	     * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	     * scrolling based on the url anchor.
	     */
	    this.useAnchorScroll = function () {
	        useAnchorScroll = true;
	    };
	    /**
	     * @ngdoc object
	     * @name ui.router.state.$uiViewScroll
	     *
	     * @requires $anchorScroll
	     * @requires $timeout
	     *
	     * @description
	     * When called with a jqLite element, it scrolls the element into view (after a
	     * `$timeout` so the DOM has time to refresh).
	     *
	     * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	     * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	     */
	    this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
	            if (useAnchorScroll) {
	                return $anchorScroll;
	            }
	            return function ($element) {
	                return $timeout(function () {
	                    $element[0].scrollIntoView();
	                }, 0, false);
	            };
	        }];
	}
	angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);


/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-ui-router.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__factory, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__;var __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__factory, __WEBPACK_LOCAL_MODULE_3__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_7__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_8__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_9__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_10__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_11__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_12__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

!function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function(i){e(t,i)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,n){var o,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,n);o=void 0===o?l:o}),void 0!==o?o:t}function h(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new s(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return u(this,t,e)}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return n(e||t.jQuery),i}),function(t,e){ true?!(__WEBPACK_LOCAL_MODULE_1__factory = (e), (__WEBPACK_LOCAL_MODULE_1__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_LOCAL_MODULE_1__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_1__factory.call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module)) : __WEBPACK_LOCAL_MODULE_1__factory), (__WEBPACK_LOCAL_MODULE_1__module.loaded = true), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports)):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o];r&&(this.off(t,o),delete s[o]),o.apply(this,e),n+=r?0:1,o=i[n]}return this}},t}),function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_2__ = (function(){return e()}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;h>e;e++){var i=u[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s.isBoxSizeOuter=r=200==t(o.width),i.removeChild(e)}}function s(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=n(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;h>l;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict"; true?!(__WEBPACK_LOCAL_MODULE_3__factory = (e), (__WEBPACK_LOCAL_MODULE_3__module = { id: "desandro-matches-selector/matches-selector", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_3__ = (typeof __WEBPACK_LOCAL_MODULE_3__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_3__factory.call(__WEBPACK_LOCAL_MODULE_3__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_3__module.exports, __WEBPACK_LOCAL_MODULE_3__module)) : __WEBPACK_LOCAL_MODULE_3__factory), (__WEBPACK_LOCAL_MODULE_3__module.loaded = true), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__module.exports)):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_LOCAL_MODULE_4__ = (function(i){return e(t,i)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout(function(){n.apply(s,e),delete s[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__,__WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_5__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=h[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=this.layout.size,r=-1!=n.indexOf("%")?parseFloat(n)/100*s.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*s.height:parseInt(o,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var u=n?"paddingTop":"paddingBottom",h=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),s=parseInt(e,10),r=o===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-n,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__,__WEBPACK_LOCAL_MODULE_2__,__WEBPACK_LOCAL_MODULE_4__,__WEBPACK_LOCAL_MODULE_5__], __WEBPACK_LOCAL_MODULE_6__ = (function(i,n,o,s){return e(t,i,n,o,s)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function s(t,e){var i=n.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,f[o]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=o,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;n.extend(c,e.prototype),c.option=function(t){n.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=e[o],r=new i(s,this);n.push(r)}return n},c._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){r++,r==s&&i()}var o=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},c.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),s={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return s},c.handleEvent=n.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},n.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(o),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=o,s}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_6__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_7__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var o=i.destroy;return i.destroy=function(){o.apply(this,arguments),this.css({display:""})},e}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_2__,__WEBPACK_LOCAL_MODULE_6__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_8__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype,o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return o.forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var o=this.getFirstItemSize();this[i]=o&&o[n]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=Object.create(n),o.prototype.constructor=o,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_6__,__WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_9__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,s=o/n,r=n-o%n,a=r&&1>r?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),s=Math.min.apply(Math,o),r=o.indexOf(s),a={x:this.columnWidth*r,y:s},u=s+t.size.outerHeight,h=this.cols+1-o.length,d=0;h>d;d++)this.colYs[r+d]=u;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),s=o?n.left:n.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?n.top:n.bottom)+i.outerHeight,l=a;u>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__,__WEBPACK_LOCAL_MODULE_9__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_10__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)o[s]||(n[s]=e.prototype[s]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_11__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_12__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_6__,__WEBPACK_LOCAL_MODULE_2__,__WEBPACK_LOCAL_MODULE_3__,__WEBPACK_LOCAL_MODULE_4__,__WEBPACK_LOCAL_MODULE_7__,__WEBPACK_LOCAL_MODULE_8__,__WEBPACK_LOCAL_MODULE_10__,__WEBPACK_LOCAL_MODULE_11__,__WEBPACK_LOCAL_MODULE_12__], __WEBPACK_AMD_DEFINE_RESULT__ = function(i,n,o,s,r,a){return e(t,i,n,o,s,r,a)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,n,o,s,r){function a(t,e){return function(i,n){for(var o=0;o<t.length;o++){var s=t[o],r=i.sortData[s],a=n.sortData[s];if(r>a||a>r){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var n=t[i];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?o.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&n&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}var e,i,n,o=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],o=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?n.push(a):u||a.isHidden||o.push(a)}}return{matches:i,needReveal:n,needHide:o}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},l.updateSortData=function(t){var e;t?(t=o.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var n=t[i];n.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),n=i[0],o=n.match(/^\[(.+)\]$/),s=o&&o[1],r=e(s,n),a=d.sortDataParsers[i[1]];
return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,o=e.length;for(i=0;o>i;i++)n=e[i],this.element.appendChild(n.element);var s=this._filter(e).matches;for(i=0;o>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;o>i;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=o.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,n=0;i&&i>n;n++){var s=e[n];o.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.2.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(ja.test(this.type)&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d));
},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},holdReady:function(a){a?r.readyWait++:r.ready(!0)}}),r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"=="function"&&__webpack_require__(7)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return r}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * bxSlider v4.2.7
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){t(o).data("bxSlider")||(s.settings=t.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=t('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.settings.pager||s.settings.controls||s.viewport.parent().css({margin:"0 auto 0px"}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=t('<div class="bx-controls" />'),s.settings.captions&&P(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),("all"===s.settings.preloadImages||s.settings.ticker)&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(e,g)},c=function(e,i){var n=e.find('img:not([src=""]), iframe').length,s=0;return 0===n?void i():void e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++s===n&&i()}).each(function(){this.complete&&t(this).trigger("load")})})},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var e="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,e).clone(!0).addClass("bx-clone"),n=s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(i.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&t(window).bind("resize",Z),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&H(),s.settings.ticker&&W(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&D(),s.settings.touchEnabled&&!s.settings.ticker&&N(),s.settings.keyboardEnabled&&!s.settings.ticker&&t(document).keydown(F)},p=function(){var e=0,n=t();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(i){e+=t(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},u=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},h=function(){var t=s.settings.slideWidth,e=s.viewport.width();if(0===s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"===s.settings.mode)t=e;else if(s.settings.maxSlides>1&&"horizontal"===s.settings.mode){if(e>s.maxThreshold)return t;e<s.minThreshold?t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(t=Math.floor((e+s.settings.slideMargin)/Math.ceil((e+s.settings.slideMargin)/(t+s.settings.slideMargin))-s.settings.slideMargin))}return t},v=function(){var t=1,e=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?t=s.settings.minSlides:s.viewport.width()>s.maxThreshold?t=s.settings.maxSlides:(e=s.children.first().width()+s.settings.slideMargin,t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)):"vertical"===s.settings.mode&&(t=s.settings.minSlides),t},f=function(){var t=0,e=0,i=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)t=Math.ceil(s.children.length/x());else for(;e<s.children.length;)++t,e=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();else t=Math.ceil(s.children.length/v());return t},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var t,e,i;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?(e=s.children.last(),t=e.position(),S(-(t.left-(s.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===s.settings.mode&&(i=s.children.length-s.settings.minSlides,t=s.children.eq(i).position(),S(-t.top,"reset",0)):(t=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0)))},S=function(e,i,n,r){var a,l;s.usingCSS?(l="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),q())}):q()):"reset"===i?o.css(s.animProp,l):"ticker"===i&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(r.resetValue,"reset",0),L())}):(S(r.resetValue,"reset",0),L()))):(a={},a[s.animProp]=e,"slide"===i?o.animate(a,n,s.settings.easing,function(){q()}):"reset"===i?o.css(s.animProp,e):"ticker"===i&&o.animate(a,n,"linear",function(){S(r.resetValue,"reset",0),L()}))},b=function(){for(var e="",i="",n=f(),o=0;o<n;o++)i="",s.settings.buildPager&&t.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(i=s.settings.buildPager(o),s.pagerEl.addClass("bx-custom-pager")):(i=o+1,s.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+o+'" class="bx-pager-link">'+i+"</a></div>";s.pagerEl.html(e)},w=function(){s.settings.pagerCustom?s.pagerEl=t(s.settings.pagerCustom):(s.pagerEl=t('<div class="bx-pager" />'),s.settings.pagerSelector?t(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click touchend","a",z)},C=function(){s.controls.next=t('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=t('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",E),s.controls.prev.bind("click touchend",k),s.settings.nextSelector&&t(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&t(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=t('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=t('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",M),s.controls.autoEl.on("click",".bx-stop",y),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?t(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),A(s.settings.autoStart?"stop":"start")},P=function(){s.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},E=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},k=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},M=function(t){o.startAuto(),t.preventDefault()},y=function(t){o.stopAuto(),t.preventDefault()},z=function(e){var i,n;e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),i=t(e.currentTarget),void 0!==i.attr("data-slide-index")&&(n=parseInt(i.attr("data-slide-index")),n!==s.active.index&&o.goToSlide(n)))},I=function(e){var i=s.children.length;return"short"===s.settings.pagerType?(s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(e+1+s.settings.pagerShortSeparator+i)):(s.pagerEl.find("a").removeClass("active"),void s.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")}))},q=function(){if(s.settings.infiniteLoop){var t="";0===s.active.index?t=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?t=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},A=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},D=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},H=function(){if(s.settings.autoDelay>0){setTimeout(o.startAuto,s.settings.autoDelay)}else o.startAuto(),t(window).focus(function(){o.startAuto()}).blur(function(){o.stopAuto()});s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},W=function(){var e,i,n,r,a,l,d,c,g=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),e=s.children.first().position(),g="horizontal"===s.settings.mode?-e.left:-e.top),S(g,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(r="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){i=o.css("-"+s.cssPrefix+"-transform"),n=parseFloat(i.split(",")[r]),S(n,"reset",0)},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(n))),L(d)})):s.viewport.hover(function(){o.stop()},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),L(d)})),L()},L=function(t){var e,i,n,r=t?t:s.settings.speed,a={left:0,top:0},l={left:0,top:0};"next"===s.settings.autoDirection?a=o.find(".bx-clone").first().position():l=s.children.first().position(),e="horizontal"===s.settings.mode?-a.left:-a.top,i="horizontal"===s.settings.mode?-l.left:-l.top,n={resetValue:i},S(e,"ticker",r,n)},O=function(e){var i=t(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset();return n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)},F=function(t){var e=document.activeElement.tagName.toLowerCase(),i="input|textarea",n=new RegExp(e,["i"]),s=n.exec(i);if(null==s&&O(o)){if(39===t.keyCode)return E(t),!1;if(37===t.keyCode)return k(t),!1}},N=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",X),s.viewport.on("click",".bxslider a",function(t){s.viewport.hasClass("click-disabled")&&(t.preventDefault(),s.viewport.removeClass("click-disabled"))})},X=function(t){if(s.controls.el.addClass("disabled"),s.working)t.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=e.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",V),s.viewport.bind("touchend MSPointerUp pointerup",R),s.viewport.bind("MSPointerCancel pointercancel",Y)}},Y=function(t){S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",Y),s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},V=function(t){var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y),r=0,a=0;3*n>o&&s.settings.preventDefaultSwipeX?t.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0))},R=function(t){s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.controls.el.removeClass("disabled");var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x),r>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&r<0)?S(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(r<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},Z=function(e){if(s.initialized)if(s.working)window.setTimeout(Z,10);else{var i=t(window).width(),n=t(window).height();r===i&&a===n||(r=i,a=n,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}},B=function(t){var e=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(t,t+e).attr("aria-hidden","false"))},U=function(t){return t<0?s.settings.infiniteLoop?f()-1:s.active.index:t>=f()?s.settings.infiniteLoop?0:s.active.index:t};return o.goToSlide=function(e,i){var n,r,a,l,d=!0,c=0,g={left:0,top:0},u=null;if(s.oldIndex=s.active.index,s.active.index=U(e),!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,d=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index),"undefined"!=typeof d&&!d)return s.active.index=s.oldIndex,void(s.working=!1);"next"===i?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1):"prev"===i&&(s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1)),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&D(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){t(this).css("zIndex",s.settings.slideZIndex),q()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(u=s.children.eq(s.children.length-1),g=u.position(),c=s.viewport.width()-u.outerWidth()):(n=s.children.length-s.settings.minSlides,g=s.children.eq(n).position()):s.carousel&&s.active.last&&"prev"===i?(r=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides),u=o.children(".bx-clone").eq(r),g=u.position()):"next"===i&&0===s.active.index?(g=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):e>=0&&(l=e*parseInt(x()),g=s.children.eq(l).position()),"undefined"!=typeof g?(a="horizontal"===s.settings.mode?-(g.left-c):-g.top,S(a,"slide",s.settings.speed)):s.working=!1),s.settings.ariaHidden&&B(s.active.index*x())}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!==s.active.index){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&t!==!0&&A("stop"))},o.stopAuto=function(t){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&t!==!0&&A("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(t){return s.children.eq(t)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),I(s.active.index)),s.settings.ariaHidden&&B(s.active.index*x())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,t(".bx-clone",this).remove(),s.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),t(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&t(window).unbind("resize",Z),s.settings.keyboardEnabled&&t(document).unbind("keydown",F),t(this).removeData("bxSlider"))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}(jQuery);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : false,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.on(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .one("load", function() {
                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.on(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.on("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.on("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

!function(){"use strict";angular.module("bmarkt",["ui.router"])}(),function(){"use strict";angular.module("bmarkt").component("adminLoginComponent",{controllerAs:"adminCtrl",controller:"adminLoginController",templateUrl:"partials/adminLogin.html"})}(),function(){"use strict";angular.module("bmarkt").component("bmarktStudio",{template:'<bs-header></bs-header><main ui-view  autoscroll="true"></main><bs-footer></bs-footer>'})}(),function(){"use strict";angular.module("bmarkt").component("componente",{bindings:{componente:"<"},controller:"componenteCtrl",templateUrl:"partials/componente.html"})}(),function(){"use strict";angular.module("bmarkt").component("contactComponent",{controller:"contactCtrl",templateUrl:"partials/contact.html"})}(),function(){"use strict";angular.module("bmarkt").component("bsFooter",{templateUrl:"partials/common/footer.html"})}(),function(){"use strict";angular.module("bmarkt").component("bsHeader",{controller:"headerCtrl",templateUrl:"partials/common/header.html"})}(),function(){"use strict";angular.module("bmarkt").component("modalWork",{bindings:{modalwork:"<"},templateUrl:"partials/modalwork.html"})}(),function(){"use strict";angular.module("bmarkt").component("portfolioComponent",{bindings:{works:"="},controller:"portfolioCtrl",templateUrl:"partials/portfolio.html"})}(),function(){"use strict";angular.module("bmarkt").component("portfolioWork",{bindings:{work:"<"},controller:"workCtrl",templateUrl:"partials/work.html"})}(),function(){"use strict";angular.module("bmarkt").component("serviceComponent",{bindings:{service:"<"},controller:"serviceCtrl",templateUrl:"partials/service.html"})}(),function(){"use strict";angular.module("bmarkt").constant("API","http://104.131.172.232:8000")}(),function(){"use strict";function a(){var a=this;a.variable,a.evento,a.variable="Soy controller As",console.log(a),a.evento=function(){console.log(a)}}angular.module("bmarkt").controller("adminLoginController",a)}(),function(){"use strict";function a(a,b,c,d){var e=c.find(".contact-form")[0];this.mailObj={},this.sendMail=function(){console.log(this.mailObj),a.post("api/mail-api.php",this.mailObj).then(function(a,b,c,d){console.log(a),e.reset()},function(a,b,c,d){console.log(a)})},a({method:"GET",url:d}).then(function(a){console.log(a.data)})}angular.module("bmarkt").controller("contactCtrl",a),a.$inject=["$http","$element","$document","API"]}(),function(){"use strict";function a(a,b){var c,d=b.width(),e=b.find("a.link");d<420?e.toggleClass("link-mobile"):c=1;var f=b.find(".menu-wrapper"),g=b.find(".hamburger"),h=b.find(".navbar"),i=b.find(".header"),j=b.find(".link-mobile");f.click(function(){console.log("menu-wrapper"),g.toggleClass("togle"),h.toggleClass("navbar-mobile"),$(this).toggleClass("menu-wrapper_white"),i.toggleClass("bg-transparent")}),j.click(function(){console.log("link"),g.toggleClass("togle"),h.toggleClass("navbar-mobile"),f.toggleClass("menu-wrapper_white"),i.toggleClass("bg-transparent")})}angular.module("bmarkt").controller("headerCtrl",a),a.$inject=["$element","$document"]}(),function(){"use strict";function a(a){console.log("test")}angular.module("bmarkt").controller("modalwork",a),a.$inject=["modalworkService"]}(),function(){"use strict";function a(a,b,c){this.back=function(){a.path("/portafolio")}}angular.module("bmarkt").controller("portfolioCtrl",a),a.$inject=["$location","portfolioService","modalworkService"]}(),function(){"use strict";function a(a,b,c){var d=b.path();switch(d){case"/servicios/design":c.$parent.serviceTitle="DISEÑO";break;case"/servicios/development":c.$parent.serviceTitle="DESARROLLO";break;case"/servicios/marketing":c.$parent.serviceTitle="MARKETING";break;case"/servicios/architecture":c.$parent.serviceTitle="ARQUITECTURA"}}angular.module("bmarkt").controller("serviceCtrl",a),a.$inject=["serviceService","$location","$scope"]}(),function(){"use strict";function a(a,b,c){}angular.module("bmarkt").controller("workCtrl",a),a.$inject=["$element","$document","workService"]}(),function(){function a(a){return a({method:"GET",url:"api/api.json"}).then(function(a){return valor=a.data})}angular.module("bmarkt").service("ComponentService",a),a.$inject=["$http"]}(),function(){"use strict";function a(a,b){return a({method:"GET",url:b}).then(function(a){var b;return b=a.data})}angular.module("bmarkt").service("loginService",a),a.$inject=["$http","API"]}(),function(){function a(a){this.getService=function(b){return a({method:"GET",url:"api/"+b+".json"}).then(function(a){return valor=a.data})}}angular.module("bmarkt").service("modalworkService",a),a.$inject=["$http"]}(),function(){function a(a){return a({method:"GET",url:"api/portfolio.json"}).then(function(a){return valor=a.data})}angular.module("bmarkt").service("portfolioService",a),a.$inject=["$http"]}(),function(){function a(a){this.getService=function(b){return a({method:"GET",url:"api/"+b+".json"}).then(function(a){return valor=a.data})}}angular.module("bmarkt").service("serviceService",a),a.$inject=["$http"]}(),function(){function a(a){this.getWork=function(b){return a({method:"GET",url:"api/"+b+".json"}).then(function(a){return valor=a.data})}}angular.module("bmarkt").service("workService",a),a.$inject=["$http"]}(),function(){"use strict";function a(a,f,g){var h={name:"/",url:"/",templateUrl:"partials/home.html"},i={name:"servicios",url:"/servicios",templateUrl:"partials/services.html",onEnter:function(){console.log("entrando"),$(".logo").toggleClass("logo-white"),$(".logo-mobile").toggleClass("logo-mobile_white"),$(".header").toggleClass("bgt"),$(".menu-wrapper").toggleClass("wrapper_white"),$(".hamburger").toggleClass("hamburger_white")},onExit:function(){console.log("saliendo"),$(".logo").toggleClass("logo-white"),$(".logo-mobile").toggleClass("logo-mobile_white"),$(".header").toggleClass("bgt"),$(".menu-wrapper").toggleClass("wrapper_white"),$(".hamburger").toggleClass("hamburger_white")}},j={name:"servicio",url:"/servicios/{service}",component:"serviceComponent",resolve:{service:b}},k={name:"portafolio",url:"/portafolio",component:"portfolioComponent",resolve:{works:d}},l={name:"trabajo",url:"/portafolio/proyecto/{work}",component:"portfolioWork",resolve:{work:e}},m={name:"portafolio.modalwork",url:"/{modalwork}",component:"modalWork",resolve:{modalwork:c}},n={name:"contacto",url:"/contacto",component:"contactComponent"},o={name:"state404",url:"/state-404",templateUrl:"partials/404.html"},p={name:"administracion",url:"/administracion/login",component:"adminLoginComponent"};f.hashPrefix(""),a.state(h),a.state(i),a.state(j),a.state(k),a.state(l),a.state(m),a.state(n),a.state(p),a.state(o),g.otherwise("/")}function b(a,b){return a.getService(b.params().service)}function c(a,b,c){return a.getService(c.modalwork)}function d(a,b){return a}function e(a,b){return a.getWork(b.params().work)}function f(a,b){return a}angular.module("bmarkt").config(a),a.$inject=["$stateProvider","$locationProvider","$urlRouterProvider"],b.$inject=["serviceService","$transition$"],d.$inject=["portfolioService","$transition$"],e.$inject=["workService","$transition$"],c.$inject=["modalworkService","$transition$","$stateParams"],f.$inject=["loginService","$transition$"]}();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(3);
__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(4);
__webpack_require__(6);
__webpack_require__(5);

/***/ })
/******/ ]);