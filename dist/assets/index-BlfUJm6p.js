var b_=Object.defineProperty;var A_=(t,e,n)=>e in t?b_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>A_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ng(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function R_(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var ig={exports:{}},su={},rg={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),C_=Symbol.for("react.portal"),P_=Symbol.for("react.fragment"),L_=Symbol.for("react.strict_mode"),D_=Symbol.for("react.profiler"),N_=Symbol.for("react.provider"),U_=Symbol.for("react.context"),I_=Symbol.for("react.forward_ref"),F_=Symbol.for("react.suspense"),O_=Symbol.for("react.memo"),z_=Symbol.for("react.lazy"),ld=Symbol.iterator;function k_(t){return t===null||typeof t!="object"?null:(t=ld&&t[ld]||t["@@iterator"],typeof t=="function"?t:null)}var sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},og=Object.assign,ag={};function Js(t,e,n){this.props=t,this.context=e,this.refs=ag,this.updater=n||sg}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lg(){}lg.prototype=Js.prototype;function Zf(t,e,n){this.props=t,this.context=e,this.refs=ag,this.updater=n||sg}var Jf=Zf.prototype=new lg;Jf.constructor=Zf;og(Jf,Js.prototype);Jf.isPureReactComponent=!0;var ud=Array.isArray,ug=Object.prototype.hasOwnProperty,eh={current:null},cg={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ug.call(e,i)&&!cg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sa,type:t,key:s,ref:o,props:r,_owner:eh.current}}function B_(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function th(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function H_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cd=/\/+/g;function Uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?H_(""+t.key):e.toString(36)}function gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sa:case C_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Uu(o,0):i,ud(r)?(n="",t!=null&&(n=t.replace(cd,"$&/")+"/"),gl(r,e,n,"",function(u){return u})):r!=null&&(th(r)&&(r=B_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ud(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Uu(s,a);o+=gl(s,e,n,l,r)}else if(l=k_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Uu(s,a++),o+=gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _a(t,e,n){if(t==null)return t;var i=[],r=0;return gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function G_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},vl={transition:null},V_={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:vl,ReactCurrentOwner:eh};function hg(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Js;Ke.Fragment=P_;Ke.Profiler=D_;Ke.PureComponent=Zf;Ke.StrictMode=L_;Ke.Suspense=F_;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V_;Ke.act=hg;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=og({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ug.call(e,l)&&!cg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:sa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:U_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:N_,_context:t},t.Consumer=t};Ke.createElement=fg;Ke.createFactory=function(t){var e=fg.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:I_,render:t}};Ke.isValidElement=th;Ke.lazy=function(t){return{$$typeof:z_,_payload:{_status:-1,_result:t},_init:G_}};Ke.memo=function(t,e){return{$$typeof:O_,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};Ke.unstable_act=hg;Ke.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ke.useContext=function(t){return cn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ke.useId=function(){return cn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ke.useRef=function(t){return cn.current.useRef(t)};Ke.useState=function(t){return cn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return cn.current.useTransition()};Ke.version="18.3.1";rg.exports=Ke;var re=rg.exports;const Ht=ng(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=re,X_=Symbol.for("react.element"),j_=Symbol.for("react.fragment"),Y_=Object.prototype.hasOwnProperty,q_=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$_={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Y_.call(e,i)&&!$_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:X_,type:t,key:s,ref:o,props:r,_owner:q_.current}}su.Fragment=j_;su.jsx=dg;su.jsxs=dg;ig.exports=su;var C=ig.exports,Gc={},pg={exports:{}},Un={},mg={exports:{}},gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var U=N.length;N.push(O);e:for(;0<U;){var K=U-1>>>1,J=N[K];if(0<r(J,O))N[K]=O,N[U]=J,U=K;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var O=N[0],U=N.pop();if(U!==O){N[0]=U;e:for(var K=0,J=N.length,X=J>>>1;K<X;){var te=2*(K+1)-1,F=N[te],ee=te+1,j=N[ee];if(0>r(F,U))ee<J&&0>r(j,F)?(N[K]=j,N[ee]=U,K=ee):(N[K]=F,N[te]=U,K=te);else if(ee<J&&0>r(j,U))N[K]=j,N[ee]=U,K=ee;else break e}}return O}function r(N,O){var U=N.sortIndex-O.sortIndex;return U!==0?U:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,g=!1,x=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=N)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function y(N){if(_=!1,v(N),!x)if(n(l)!==null)x=!0,H(b);else{var O=n(u);O!==null&&W(y,O.startTime-N)}}function b(N,O){x=!1,_&&(_=!1,c(P),P=-1),g=!0;var U=d;try{for(v(O),h=n(l);h!==null&&(!(h.expirationTime>O)||N&&!k());){var K=h.callback;if(typeof K=="function"){h.callback=null,d=h.priorityLevel;var J=K(h.expirationTime<=O);O=t.unstable_now(),typeof J=="function"?h.callback=J:h===n(l)&&i(l),v(O)}else i(l);h=n(l)}if(h!==null)var X=!0;else{var te=n(u);te!==null&&W(y,te.startTime-O),X=!1}return X}finally{h=null,d=U,g=!1}}var T=!1,E=null,P=-1,S=5,w=-1;function k(){return!(t.unstable_now()-w<S)}function V(){if(E!==null){var N=t.unstable_now();w=N;var O=!0;try{O=E(!0,N)}finally{O?ne():(T=!1,E=null)}}else T=!1}var ne;if(typeof m=="function")ne=function(){m(V)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,z=D.port2;D.port1.onmessage=V,ne=function(){z.postMessage(null)}}else ne=function(){p(V,0)};function H(N){E=N,T||(T=!0,ne())}function W(N,O){P=p(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,H(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var U=d;d=O;try{return N()}finally{d=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var U=d;d=N;try{return O()}finally{d=U}},t.unstable_scheduleCallback=function(N,O,U){var K=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?K+U:K):U=K,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=U+J,N={id:f++,callback:O,priorityLevel:N,startTime:U,expirationTime:J,sortIndex:-1},U>K?(N.sortIndex=U,e(u,N),n(l)===null&&N===n(u)&&(_?(c(P),P=-1):_=!0,W(y,U-K))):(N.sortIndex=J,e(l,N),x||g||(x=!0,H(b))),N},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(N){var O=d;return function(){var U=d;d=O;try{return N.apply(this,arguments)}finally{d=U}}}})(gg);mg.exports=gg;var K_=mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_=re,Dn=K_;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vg=new Set,Bo={};function jr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Bo[t]=e,t=0;t<e.length;t++)vg.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,Z_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fd={},hd={};function J_(t){return Vc.call(hd,t)?!0:Vc.call(fd,t)?!1:Z_.test(t)?hd[t]=!0:(fd[t]=!0,!1)}function ex(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tx(t,e,n,i){if(e===null||typeof e>"u"||ex(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var nh=/[\-:]([a-z])/g;function ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nh,ih);Xt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nh,ih);Xt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nh,ih);Xt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tx(e,n,r,i)&&(n=null),i||r===null?J_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=Q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),_g=Symbol.for("react.provider"),xg=Symbol.for("react.context"),oh=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),yg=Symbol.for("react.offscreen"),dd=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=dd&&t[dd]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,Iu;function To(t){if(Iu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Iu=e&&e[1]||""}return`
`+Iu+t}var Fu=!1;function Ou(t,e){if(!t||Fu)return"";Fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function nx(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=Ou(t.type,!1),t;case 11:return t=Ou(t.type.render,!1),t;case 1:return t=Ou(t.type,!0),t;default:return""}}function Yc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case Wc:return"Profiler";case sh:return"StrictMode";case Xc:return"Suspense";case jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xg:return(t.displayName||"Context")+".Consumer";case _g:return(t._context.displayName||"Context")+".Provider";case oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ah:return e=t.displayName||null,e!==null?e:Yc(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return Yc(t(e))}catch{}}return null}function ix(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yc(e);case 8:return e===sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rx(t){var e=Sg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ya(t){t._valueTracker||(t._valueTracker=rx(t))}function Mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Sg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qc(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Eg(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function $c(t,e){Eg(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kc(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function md(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kc(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bo=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(bo(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function wg(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sx=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){sx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Co[e]=Co[t]})});function Ag(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Co.hasOwnProperty(t)&&Co[t]?(""+e).trim():e+"px"}function Rg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ag(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ox=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(t,e){if(e){if(ox[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tf=null;function lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nf=null,Ns=null,Us=null;function _d(t){if(t=la(t)){if(typeof nf!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=cu(e),nf(t.stateNode,t.type,e))}}function Cg(t){Ns?Us?Us.push(t):Us=[t]:Ns=t}function Pg(){if(Ns){var t=Ns,e=Us;if(Us=Ns=null,_d(t),e)for(t=0;t<e.length;t++)_d(e[t])}}function Lg(t,e){return t(e)}function Dg(){}var zu=!1;function Ng(t,e,n){if(zu)return t(e,n);zu=!0;try{return Lg(t,e,n)}finally{zu=!1,(Ns!==null||Us!==null)&&(Dg(),Pg())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var i=cu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var rf=!1;if(Ui)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){rf=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{rf=!1}function ax(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Po=!1,Pl=null,Ll=!1,sf=null,lx={onError:function(t){Po=!0,Pl=t}};function ux(t,e,n,i,r,s,o,a,l){Po=!1,Pl=null,ax.apply(lx,arguments)}function cx(t,e,n,i,r,s,o,a,l){if(ux.apply(this,arguments),Po){if(Po){var u=Pl;Po=!1,Pl=null}else throw Error(ue(198));Ll||(Ll=!0,sf=u)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xd(t){if(Yr(t)!==t)throw Error(ue(188))}function fx(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xd(r),t;if(s===i)return xd(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function Ig(t){return t=fx(t),t!==null?Fg(t):null}function Fg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fg(t);if(e!==null)return e;t=t.sibling}return null}var Og=Dn.unstable_scheduleCallback,yd=Dn.unstable_cancelCallback,hx=Dn.unstable_shouldYield,dx=Dn.unstable_requestPaint,St=Dn.unstable_now,px=Dn.unstable_getCurrentPriorityLevel,uh=Dn.unstable_ImmediatePriority,zg=Dn.unstable_UserBlockingPriority,Dl=Dn.unstable_NormalPriority,mx=Dn.unstable_LowPriority,kg=Dn.unstable_IdlePriority,ou=null,mi=null;function gx(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:xx,vx=Math.log,_x=Math.LN2;function xx(t){return t>>>=0,t===0?32:31-(vx(t)/_x|0)|0}var Ma=64,Ea=4194304;function Ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ao(a):(s&=o,s!==0&&(i=Ao(s)))}else o=n&~r,o!==0?i=Ao(o):s!==0&&(i=Ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function yx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ii(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=yx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function of(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bg(){var t=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),t}function ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function Mx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gg,fh,Vg,Wg,Xg,af=!1,wa=[],ir=null,rr=null,sr=null,Vo=new Map,Wo=new Map,Qi=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sd(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function uo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=la(e),e!==null&&fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function wx(t,e,n,i,r){switch(e){case"focusin":return ir=uo(ir,t,e,n,i,r),!0;case"dragenter":return rr=uo(rr,t,e,n,i,r),!0;case"mouseover":return sr=uo(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Vo.set(s,uo(Vo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wo.set(s,uo(Wo.get(s)||null,t,e,n,i,r)),!0}return!1}function jg(t){var e=Lr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ug(n),e!==null){t.blockedOn=e,Xg(t.priority,function(){Vg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);tf=i,n.target.dispatchEvent(i),tf=null}else return e=la(n),e!==null&&fh(e),t.blockedOn=n,!1;e.shift()}return!0}function Md(t,e,n){_l(t)&&n.delete(e)}function Tx(){af=!1,ir!==null&&_l(ir)&&(ir=null),rr!==null&&_l(rr)&&(rr=null),sr!==null&&_l(sr)&&(sr=null),Vo.forEach(Md),Wo.forEach(Md)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,af||(af=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,Tx)))}function Xo(t){function e(r){return co(r,t)}if(0<wa.length){co(wa[0],t);for(var n=1;n<wa.length;n++){var i=wa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&co(ir,t),rr!==null&&co(rr,t),sr!==null&&co(sr,t),Vo.forEach(e),Wo.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)jg(n),n.blockedOn===null&&Qi.shift()}var Is=ki.ReactCurrentBatchConfig,Ul=!0;function bx(t,e,n,i){var r=it,s=Is.transition;Is.transition=null;try{it=1,hh(t,e,n,i)}finally{it=r,Is.transition=s}}function Ax(t,e,n,i){var r=it,s=Is.transition;Is.transition=null;try{it=4,hh(t,e,n,i)}finally{it=r,Is.transition=s}}function hh(t,e,n,i){if(Ul){var r=lf(t,e,n,i);if(r===null)$u(t,e,i,Il,n),Sd(t,i);else if(wx(r,t,e,n,i))i.stopPropagation();else if(Sd(t,i),e&4&&-1<Ex.indexOf(t)){for(;r!==null;){var s=la(r);if(s!==null&&Gg(s),s=lf(t,e,n,i),s===null&&$u(t,e,i,Il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $u(t,e,i,null,n)}}var Il=null;function lf(t,e,n,i){if(Il=null,t=lh(i),t=Lr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function Yg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(px()){case uh:return 1;case zg:return 4;case Dl:case mx:return 16;case kg:return 536870912;default:return 16}default:return 16}}var Ji=null,dh=null,xl=null;function qg(){if(xl)return xl;var t,e=dh,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return xl=r.slice(t,1<i?1-i:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ta(){return!0}function Ed(){return!1}function In(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ta:Ed,this.isPropagationStopped=Ed,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=In(eo),aa=mt({},eo,{view:0,detail:0}),Rx=In(aa),Bu,Hu,fo,au=mt({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Bu=t.screenX-fo.screenX,Hu=t.screenY-fo.screenY):Hu=Bu=0,fo=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),wd=In(au),Cx=mt({},au,{dataTransfer:0}),Px=In(Cx),Lx=mt({},aa,{relatedTarget:0}),Gu=In(Lx),Dx=mt({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=In(Dx),Ux=mt({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ix=In(Ux),Fx=mt({},eo,{data:0}),Td=In(Fx),Ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kx[t])?!!e[t]:!1}function mh(){return Bx}var Hx=mt({},aa,{key:function(t){if(t.key){var e=Ox[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gx=In(Hx),Vx=mt({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=In(Vx),Wx=mt({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),Xx=In(Wx),jx=mt({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=In(jx),qx=mt({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=In(qx),Kx=[9,13,27,32],gh=Ui&&"CompositionEvent"in window,Lo=null;Ui&&"documentMode"in document&&(Lo=document.documentMode);var Qx=Ui&&"TextEvent"in window&&!Lo,$g=Ui&&(!gh||Lo&&8<Lo&&11>=Lo),Ad=" ",Rd=!1;function Kg(t,e){switch(t){case"keyup":return Kx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function Zx(t,e){switch(t){case"compositionend":return Qg(e);case"keypress":return e.which!==32?null:(Rd=!0,Ad);case"textInput":return t=e.data,t===Ad&&Rd?null:t;default:return null}}function Jx(t,e){if(xs)return t==="compositionend"||!gh&&Kg(t,e)?(t=qg(),xl=dh=Ji=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $g&&e.locale!=="ko"?null:e.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ey[t.type]:e==="textarea"}function Zg(t,e,n,i){Cg(i),e=Fl(e,"onChange"),0<e.length&&(n=new ph("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Do=null,jo=null;function ty(t){uv(t,0)}function lu(t){var e=Ms(t);if(Mg(e))return t}function ny(t,e){if(t==="change")return e}var Jg=!1;if(Ui){var Vu;if(Ui){var Wu="oninput"in document;if(!Wu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Wu=typeof Pd.oninput=="function"}Vu=Wu}else Vu=!1;Jg=Vu&&(!document.documentMode||9<document.documentMode)}function Ld(){Do&&(Do.detachEvent("onpropertychange",ev),jo=Do=null)}function ev(t){if(t.propertyName==="value"&&lu(jo)){var e=[];Zg(e,jo,t,lh(t)),Ng(ty,e)}}function iy(t,e,n){t==="focusin"?(Ld(),Do=e,jo=n,Do.attachEvent("onpropertychange",ev)):t==="focusout"&&Ld()}function ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(jo)}function sy(t,e){if(t==="click")return lu(e)}function oy(t,e){if(t==="input"||t==="change")return lu(e)}function ay(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:ay;function Yo(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vc.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function Dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nd(t,e){var n=Dd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dd(n)}}function tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nv(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ly(t){var e=nv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tv(n.ownerDocument.documentElement,n)){if(i!==null&&vh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Nd(n,s);var o=Nd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uy=Ui&&"documentMode"in document&&11>=document.documentMode,ys=null,uf=null,No=null,cf=!1;function Ud(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cf||ys==null||ys!==Cl(i)||(i=ys,"selectionStart"in i&&vh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&Yo(No,i)||(No=i,i=Fl(uf,"onSelect"),0<i.length&&(e=new ph("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Xu={},iv={};Ui&&(iv=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function uu(t){if(Xu[t])return Xu[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iv)return Xu[t]=e[n];return t}var rv=uu("animationend"),sv=uu("animationiteration"),ov=uu("animationstart"),av=uu("transitionend"),lv=new Map,Id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){lv.set(t,e),jr(e,[t])}for(var ju=0;ju<Id.length;ju++){var Yu=Id[ju],cy=Yu.toLowerCase(),fy=Yu[0].toUpperCase()+Yu.slice(1);gr(cy,"on"+fy)}gr(rv,"onAnimationEnd");gr(sv,"onAnimationIteration");gr(ov,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(av,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Fd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,cx(i,e,void 0,t),t.currentTarget=null}function uv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fd(r,a,u),s=l}}}if(Ll)throw t=sf,Ll=!1,sf=null,t}function at(t,e){var n=e[mf];n===void 0&&(n=e[mf]=new Set);var i=t+"__bubble";n.has(i)||(cv(e,t,2,!1),n.add(i))}function qu(t,e,n){var i=0;e&&(i|=4),cv(n,t,i,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[Aa]){t[Aa]=!0,vg.forEach(function(n){n!=="selectionchange"&&(hy.has(n)||qu(n,!1,t),qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,qu("selectionchange",!1,e))}}function cv(t,e,n,i){switch(Yg(e)){case 1:var r=bx;break;case 4:r=Ax;break;default:r=hh}n=r.bind(null,e,n,t),r=void 0,!rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $u(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ng(function(){var u=s,f=lh(n),h=[];e:{var d=lv.get(t);if(d!==void 0){var g=ph,x=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":g=Gx;break;case"focusin":x="focus",g=Gu;break;case"focusout":x="blur",g=Gu;break;case"beforeblur":case"afterblur":g=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Xx;break;case rv:case sv:case ov:g=Nx;break;case av:g=Yx;break;case"scroll":g=Rx;break;case"wheel":g=$x;break;case"copy":case"cut":case"paste":g=Ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bd}var _=(e&4)!==0,p=!_&&t==="scroll",c=_?d!==null?d+"Capture":null:d;_=[];for(var m=u,v;m!==null;){v=m;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,c!==null&&(y=Go(m,c),y!=null&&_.push($o(m,y,v)))),p)break;m=m.return}0<_.length&&(d=new g(d,x,null,n,f),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==tf&&(x=n.relatedTarget||n.fromElement)&&(Lr(x)||x[Ii]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Lr(x):null,x!==null&&(p=Yr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(_=wd,y="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=bd,y="onPointerLeave",c="onPointerEnter",m="pointer"),p=g==null?d:Ms(g),v=x==null?d:Ms(x),d=new _(y,m+"leave",g,n,f),d.target=p,d.relatedTarget=v,y=null,Lr(f)===u&&(_=new _(c,m+"enter",x,n,f),_.target=v,_.relatedTarget=p,y=_),p=y,g&&x)t:{for(_=g,c=x,m=0,v=_;v;v=Qr(v))m++;for(v=0,y=c;y;y=Qr(y))v++;for(;0<m-v;)_=Qr(_),m--;for(;0<v-m;)c=Qr(c),v--;for(;m--;){if(_===c||c!==null&&_===c.alternate)break t;_=Qr(_),c=Qr(c)}_=null}else _=null;g!==null&&Od(h,d,g,_,!1),x!==null&&p!==null&&Od(h,p,x,_,!0)}}e:{if(d=u?Ms(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var b=ny;else if(Cd(d))if(Jg)b=oy;else{b=ry;var T=iy}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=sy);if(b&&(b=b(t,u))){Zg(h,b,n,f);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Kc(d,"number",d.value)}switch(T=u?Ms(u):window,t){case"focusin":(Cd(T)||T.contentEditable==="true")&&(ys=T,uf=u,No=null);break;case"focusout":No=uf=ys=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Ud(h,n,f);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":Ud(h,n,f)}var E;if(gh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else xs?Kg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&($g&&n.locale!=="ko"&&(xs||P!=="onCompositionStart"?P==="onCompositionEnd"&&xs&&(E=qg()):(Ji=f,dh="value"in Ji?Ji.value:Ji.textContent,xs=!0)),T=Fl(u,P),0<T.length&&(P=new Td(P,t,null,n,f),h.push({event:P,listeners:T}),E?P.data=E:(E=Qg(n),E!==null&&(P.data=E)))),(E=Qx?Zx(t,n):Jx(t,n))&&(u=Fl(u,"onBeforeInput"),0<u.length&&(f=new Td("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=E))}uv(h,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(t,n),s!=null&&i.unshift($o(t,s,r)),s=Go(t,e),s!=null&&i.push($o(t,s,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Od(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Go(n,s),l!=null&&o.unshift($o(n,l,a))):r||(l=Go(n,s),l!=null&&o.push($o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dy=/\r\n?/g,py=/\u0000|\uFFFD/g;function zd(t){return(typeof t=="string"?t:""+t).replace(dy,`
`).replace(py,"")}function Ra(t,e,n){if(e=zd(e),zd(t)!==e&&n)throw Error(ue(425))}function Ol(){}var ff=null,hf=null;function df(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pf=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,kd=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof kd<"u"?function(t){return kd.resolve(null).then(t).catch(vy)}:pf;function vy(t){setTimeout(function(){throw t})}function Ku(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xo(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),hi="__reactFiber$"+to,Ko="__reactProps$"+to,Ii="__reactContainer$"+to,mf="__reactEvents$"+to,_y="__reactListeners$"+to,xy="__reactHandles$"+to;function Lr(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bd(t);t!==null;){if(n=t[hi])return n;t=Bd(t)}return e}t=n,n=t.parentNode}return null}function la(t){return t=t[hi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function cu(t){return t[Ko]||null}var gf=[],Es=-1;function vr(t){return{current:t}}function ut(t){0>Es||(t.current=gf[Es],gf[Es]=null,Es--)}function ot(t,e){Es++,gf[Es]=t.current,t.current=e}var pr={},rn=vr(pr),vn=vr(!1),Hr=pr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function zl(){ut(vn),ut(rn)}function Hd(t,e,n){if(rn.current!==pr)throw Error(ue(168));ot(rn,e),ot(vn,n)}function fv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,ix(t)||"Unknown",r));return mt({},n,i)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Hr=rn.current,ot(rn,t),ot(vn,vn.current),!0}function Gd(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=fv(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,ut(vn),ut(rn),ot(rn,t)):ut(vn),ot(vn,n)}var Ai=null,fu=!1,Qu=!1;function hv(t){Ai===null?Ai=[t]:Ai.push(t)}function yy(t){fu=!0,hv(t)}function _r(){if(!Qu&&Ai!==null){Qu=!0;var t=0,e=it;try{var n=Ai;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,fu=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),Og(uh,_r),r}finally{it=e,Qu=!1}}return null}var ws=[],Ts=0,Bl=null,Hl=0,kn=[],Bn=0,Gr=null,Ri=1,Ci="";function Tr(t,e){ws[Ts++]=Hl,ws[Ts++]=Bl,Bl=t,Hl=e}function dv(t,e,n){kn[Bn++]=Ri,kn[Bn++]=Ci,kn[Bn++]=Gr,Gr=t;var i=Ri;t=Ci;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var s=32-ii(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-ii(e)+r|n<<r|i,Ci=s+t}else Ri=1<<s|n<<r|i,Ci=t}function _h(t){t.return!==null&&(Tr(t,1),dv(t,1,0))}function xh(t){for(;t===Bl;)Bl=ws[--Ts],ws[Ts]=null,Hl=ws[--Ts],ws[Ts]=null;for(;t===Gr;)Gr=kn[--Bn],kn[Bn]=null,Ci=kn[--Bn],kn[Bn]=null,Ri=kn[--Bn],kn[Bn]=null}var Pn=null,Cn=null,ft=!1,ei=null;function pv(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Ri,overflow:Ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Cn=null,!0):!1;default:return!1}}function vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _f(t){if(ft){var e=Cn;if(e){var n=e;if(!Vd(t,e)){if(vf(t))throw Error(ue(418));e=or(n.nextSibling);var i=Pn;e&&Vd(t,e)?pv(i,n):(t.flags=t.flags&-4097|2,ft=!1,Pn=t)}}else{if(vf(t))throw Error(ue(418));t.flags=t.flags&-4097|2,ft=!1,Pn=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Ca(t){if(t!==Pn)return!1;if(!ft)return Wd(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!df(t.type,t.memoizedProps)),e&&(e=Cn)){if(vf(t))throw mv(),Error(ue(418));for(;e;)pv(t,e),e=or(e.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Pn?or(t.stateNode.nextSibling):null;return!0}function mv(){for(var t=Cn;t;)t=or(t.nextSibling)}function Hs(){Cn=Pn=null,ft=!1}function yh(t){ei===null?ei=[t]:ei.push(t)}var Sy=ki.ReactCurrentBatchConfig;function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xd(t){var e=t._init;return e(t._payload)}function gv(t){function e(c,m){if(t){var v=c.deletions;v===null?(c.deletions=[m],c.flags|=16):v.push(m)}}function n(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function r(c,m){return c=cr(c,m),c.index=0,c.sibling=null,c}function s(c,m,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<m?(c.flags|=2,m):v):(c.flags|=2,m)):(c.flags|=1048576,m)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,m,v,y){return m===null||m.tag!==6?(m=rc(v,c.mode,y),m.return=c,m):(m=r(m,v),m.return=c,m)}function l(c,m,v,y){var b=v.type;return b===_s?f(c,m,v.props.children,y,v.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===$i&&Xd(b)===m.type)?(y=r(m,v.props),y.ref=ho(c,m,v),y.return=c,y):(y=Al(v.type,v.key,v.props,null,c.mode,y),y.ref=ho(c,m,v),y.return=c,y)}function u(c,m,v,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=sc(v,c.mode,y),m.return=c,m):(m=r(m,v.children||[]),m.return=c,m)}function f(c,m,v,y,b){return m===null||m.tag!==7?(m=Fr(v,c.mode,y,b),m.return=c,m):(m=r(m,v),m.return=c,m)}function h(c,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=rc(""+m,c.mode,v),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xa:return v=Al(m.type,m.key,m.props,null,c.mode,v),v.ref=ho(c,null,m),v.return=c,v;case vs:return m=sc(m,c.mode,v),m.return=c,m;case $i:var y=m._init;return h(c,y(m._payload),v)}if(bo(m)||ao(m))return m=Fr(m,c.mode,v,null),m.return=c,m;Pa(c,m)}return null}function d(c,m,v,y){var b=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(c,m,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:return v.key===b?l(c,m,v,y):null;case vs:return v.key===b?u(c,m,v,y):null;case $i:return b=v._init,d(c,m,b(v._payload),y)}if(bo(v)||ao(v))return b!==null?null:f(c,m,v,y,null);Pa(c,v)}return null}function g(c,m,v,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(v)||null,a(m,c,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xa:return c=c.get(y.key===null?v:y.key)||null,l(m,c,y,b);case vs:return c=c.get(y.key===null?v:y.key)||null,u(m,c,y,b);case $i:var T=y._init;return g(c,m,v,T(y._payload),b)}if(bo(y)||ao(y))return c=c.get(v)||null,f(m,c,y,b,null);Pa(m,y)}return null}function x(c,m,v,y){for(var b=null,T=null,E=m,P=m=0,S=null;E!==null&&P<v.length;P++){E.index>P?(S=E,E=null):S=E.sibling;var w=d(c,E,v[P],y);if(w===null){E===null&&(E=S);break}t&&E&&w.alternate===null&&e(c,E),m=s(w,m,P),T===null?b=w:T.sibling=w,T=w,E=S}if(P===v.length)return n(c,E),ft&&Tr(c,P),b;if(E===null){for(;P<v.length;P++)E=h(c,v[P],y),E!==null&&(m=s(E,m,P),T===null?b=E:T.sibling=E,T=E);return ft&&Tr(c,P),b}for(E=i(c,E);P<v.length;P++)S=g(E,c,P,v[P],y),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?P:S.key),m=s(S,m,P),T===null?b=S:T.sibling=S,T=S);return t&&E.forEach(function(k){return e(c,k)}),ft&&Tr(c,P),b}function _(c,m,v,y){var b=ao(v);if(typeof b!="function")throw Error(ue(150));if(v=b.call(v),v==null)throw Error(ue(151));for(var T=b=null,E=m,P=m=0,S=null,w=v.next();E!==null&&!w.done;P++,w=v.next()){E.index>P?(S=E,E=null):S=E.sibling;var k=d(c,E,w.value,y);if(k===null){E===null&&(E=S);break}t&&E&&k.alternate===null&&e(c,E),m=s(k,m,P),T===null?b=k:T.sibling=k,T=k,E=S}if(w.done)return n(c,E),ft&&Tr(c,P),b;if(E===null){for(;!w.done;P++,w=v.next())w=h(c,w.value,y),w!==null&&(m=s(w,m,P),T===null?b=w:T.sibling=w,T=w);return ft&&Tr(c,P),b}for(E=i(c,E);!w.done;P++,w=v.next())w=g(E,c,P,w.value,y),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?P:w.key),m=s(w,m,P),T===null?b=w:T.sibling=w,T=w);return t&&E.forEach(function(V){return e(c,V)}),ft&&Tr(c,P),b}function p(c,m,v,y){if(typeof v=="object"&&v!==null&&v.type===_s&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:e:{for(var b=v.key,T=m;T!==null;){if(T.key===b){if(b=v.type,b===_s){if(T.tag===7){n(c,T.sibling),m=r(T,v.props.children),m.return=c,c=m;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===$i&&Xd(b)===T.type){n(c,T.sibling),m=r(T,v.props),m.ref=ho(c,T,v),m.return=c,c=m;break e}n(c,T);break}else e(c,T);T=T.sibling}v.type===_s?(m=Fr(v.props.children,c.mode,y,v.key),m.return=c,c=m):(y=Al(v.type,v.key,v.props,null,c.mode,y),y.ref=ho(c,m,v),y.return=c,c=y)}return o(c);case vs:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(c,m.sibling),m=r(m,v.children||[]),m.return=c,c=m;break e}else{n(c,m);break}else e(c,m);m=m.sibling}m=sc(v,c.mode,y),m.return=c,c=m}return o(c);case $i:return T=v._init,p(c,m,T(v._payload),y)}if(bo(v))return x(c,m,v,y);if(ao(v))return _(c,m,v,y);Pa(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(c,m.sibling),m=r(m,v),m.return=c,c=m):(n(c,m),m=rc(v,c.mode,y),m.return=c,c=m),o(c)):n(c,m)}return p}var Gs=gv(!0),vv=gv(!1),Gl=vr(null),Vl=null,bs=null,Sh=null;function Mh(){Sh=bs=Vl=null}function Eh(t){var e=Gl.current;ut(Gl),t._currentValue=e}function xf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){Vl=t,Sh=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Sh!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Vl===null)throw Error(ue(308));bs=t,Vl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Dr=null;function wh(t){Dr===null?Dr=[t]:Dr.push(t)}function _v(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function Th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}function jd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(d=e,g=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(g,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,d=typeof x=="function"?x.call(g,h,d):x,d==null)break e;h=mt({},h,d);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=h):f=f.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=h}}function Yd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var ua={},gi=vr(ua),Qo=vr(ua),Zo=vr(ua);function Nr(t){if(t===ua)throw Error(ue(174));return t}function bh(t,e){switch(ot(Zo,e),ot(Qo,t),ot(gi,ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zc(e,t)}ut(gi),ot(gi,e)}function Vs(){ut(gi),ut(Qo),ut(Zo)}function yv(t){Nr(Zo.current);var e=Nr(gi.current),n=Zc(e,t.type);e!==n&&(ot(Qo,t),ot(gi,n))}function Ah(t){Qo.current===t&&(ut(gi),ut(Qo))}var dt=vr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zu=[];function Rh(){for(var t=0;t<Zu.length;t++)Zu[t]._workInProgressVersionPrimary=null;Zu.length=0}var Ml=ki.ReactCurrentDispatcher,Ju=ki.ReactCurrentBatchConfig,Vr=0,pt=null,bt=null,Ut=null,jl=!1,Uo=!1,Jo=0,My=0;function Yt(){throw Error(ue(321))}function Ch(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Ph(t,e,n,i,r,s){if(Vr=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?by:Ay,t=n(i,r),Uo){s=0;do{if(Uo=!1,Jo=0,25<=s)throw Error(ue(301));s+=1,Ut=bt=null,e.updateQueue=null,Ml.current=Ry,t=n(i,r)}while(Uo)}if(Ml.current=Yl,e=bt!==null&&bt.next!==null,Vr=0,Ut=bt=pt=null,jl=!1,e)throw Error(ue(300));return t}function Lh(){var t=Jo!==0;return Jo=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?pt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function jn(){if(bt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?pt.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw Error(ue(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?pt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ea(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=jn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Vr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,pt.lanes|=f,Wr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=jn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sv(){}function Mv(t,e){var n=pt,i=jn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,Dh(Tv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ta(9,wv.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ue(349));Vr&30||Ev(n,e,r)}return r}function Ev(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wv(t,e,n,i){e.value=n,e.getSnapshot=i,bv(e)&&Av(t)}function Tv(t,e,n){return n(function(){bv(e)&&Av(t)})}function bv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function Av(t){var e=Fi(t,1);e!==null&&ri(e,t,1,-1)}function qd(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=Ty.bind(null,pt,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Rv(){return jn().memoizedState}function El(t,e,n,i){var r=ui();pt.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function hu(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&Ch(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}pt.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function $d(t,e){return El(8390656,8,t,e)}function Dh(t,e){return hu(2048,8,t,e)}function Cv(t,e){return hu(4,2,t,e)}function Pv(t,e){return hu(4,4,t,e)}function Lv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dv(t,e,n){return n=n!=null?n.concat([t]):null,hu(4,4,Lv.bind(null,e,t),n)}function Nh(){}function Nv(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ch(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Uv(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ch(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Iv(t,e,n){return Vr&21?(ai(n,e)||(n=Bg(),pt.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function Ey(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Ju.transition;Ju.transition={};try{t(!1),e()}finally{it=n,Ju.transition=i}}function Fv(){return jn().memoizedState}function wy(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ov(t))zv(e,n);else if(n=_v(t,e,n,i),n!==null){var r=un();ri(n,t,i,r),kv(n,e,i)}}function Ty(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ov(t))zv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=_v(t,e,r,i),n!==null&&(r=un(),ri(n,t,i,r),kv(n,e,i))}}function Ov(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function zv(t,e){Uo=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}var Yl={readContext:Xn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},by={readContext:Xn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:$d,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,Lv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=wy.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:qd,useDebugValue:Nh,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=qd(!1),e=t[0];return t=Ey.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=ui();if(ft){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),It===null)throw Error(ue(349));Vr&30||Ev(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$d(Tv.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,wv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ui(),e=It.identifierPrefix;if(ft){var n=Ci,i=Ri;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=My++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ay={readContext:Xn,useCallback:Nv,useContext:Xn,useEffect:Dh,useImperativeHandle:Dv,useInsertionEffect:Cv,useLayoutEffect:Pv,useMemo:Uv,useReducer:ec,useRef:Rv,useState:function(){return ec(ea)},useDebugValue:Nh,useDeferredValue:function(t){var e=jn();return Iv(e,bt.memoizedState,t)},useTransition:function(){var t=ec(ea)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Mv,useId:Fv,unstable_isNewReconciler:!1},Ry={readContext:Xn,useCallback:Nv,useContext:Xn,useEffect:Dh,useImperativeHandle:Dv,useInsertionEffect:Cv,useLayoutEffect:Pv,useMemo:Uv,useReducer:tc,useRef:Rv,useState:function(){return tc(ea)},useDebugValue:Nh,useDeferredValue:function(t){var e=jn();return bt===null?e.memoizedState=t:Iv(e,bt.memoizedState,t)},useTransition:function(){var t=tc(ea)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Mv,useId:Fv,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=ur(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(ri(e,t,r,i),Sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=ur(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(ri(e,t,r,i),Sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=ur(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(ri(e,t,i,n),Sl(e,t,i))}};function Kd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,i)||!Yo(r,s):!0}function Bv(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=_n(e)?Hr:rn.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function Sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Th(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=_n(e)?Hr:rn.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&du.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=nx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cy=typeof WeakMap=="function"?WeakMap:Map;function Hv(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$l||($l=!0,Df=i),Mf(t,e)},n}function Gv(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Mf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mf(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Cy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Vy.bind(null,t,e,n),e.then(t,t))}function Jd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ep(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var Py=ki.ReactCurrentOwner,gn=!1;function an(t,e,n,i){e.child=t===null?vv(e,null,n,i):Gs(e,t.child,n,i)}function tp(t,e,n,i,r){n=n.render;var s=e.ref;return Fs(e,r),i=Ph(t,e,n,i,s,r),n=Lh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(ft&&n&&_h(e),e.flags|=1,an(t,e,i,r),e.child)}function np(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vv(t,e,s,i,r)):(t=Al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Vv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Yo(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return Ef(t,e,n,i,r)}function Wv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Rs,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(Rs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(Rs,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(Rs,An),An|=i;return an(t,e,r,n),e.child}function Xv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ef(t,e,n,i,r){var s=_n(n)?Hr:rn.current;return s=Bs(e,s),Fs(e,r),n=Ph(t,e,n,i,s,r),i=Lh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(ft&&i&&_h(e),e.flags|=1,an(t,e,n,r),e.child)}function ip(t,e,n,i,r){if(_n(n)){var s=!0;kl(e)}else s=!1;if(Fs(e,r),e.stateNode===null)wl(t,e),Bv(e,n,i),Sf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xn(u):(u=_n(n)?Hr:rn.current,u=Bs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Qd(e,o,i,u),Ki=!1;var d=e.memoizedState;o.state=d,Wl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||vn.current||Ki?(typeof f=="function"&&(yf(e,n,f,i),l=e.memoizedState),(a=Ki||Kd(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,xv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=_n(n)?Hr:rn.current,l=Bs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Qd(e,o,i,l),Ki=!1,d=e.memoizedState,o.state=d,Wl(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||vn.current||Ki?(typeof g=="function"&&(yf(e,n,g,i),x=e.memoizedState),(u=Ki||Kd(e,n,u,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return wf(t,e,n,i,s,r)}function wf(t,e,n,i,r,s){Xv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gd(e,n,!1),Oi(t,e,s);i=e.stateNode,Py.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,a,s)):an(t,e,a,s),e.memoizedState=i.state,r&&Gd(e,n,!0),e.child}function jv(t){var e=t.stateNode;e.pendingContext?Hd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hd(t,e.context,!1),bh(t,e.containerInfo)}function rp(t,e,n,i,r){return Hs(),yh(r),e.flags|=256,an(t,e,n,i),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yv(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(dt,r&1),t===null)return _f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gu(o,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bf(n),e.memoizedState=Tf,t):Uh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ly(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tf,i}return s=t.child,t=s.sibling,i=cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Uh(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,i){return i!==null&&yh(i),Gs(e,t.child,null,n),t=Uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ly(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=nc(Error(ue(422))),La(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gu({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=bf(o),e.memoizedState=Tf,s);if(!(e.mode&1))return La(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=nc(s,i,void 0),La(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(t,r),ri(i,t,r,-1))}return Bh(),i=nc(Error(ue(421))),La(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Wy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=or(r.nextSibling),Pn=e,ft=!0,ei=null,t!==null&&(kn[Bn++]=Ri,kn[Bn++]=Ci,kn[Bn++]=Gr,Ri=t.id,Ci=t.overflow,Gr=e),e=Uh(e,i.children),e.flags|=4096,e)}function sp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xf(t.return,e,n)}function ic(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sp(t,n,e);else if(t.tag===19)sp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ic(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ic(e,!0,n,null,s);break;case"together":ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dy(t,e,n){switch(e.tag){case 3:jv(e),Hs();break;case 5:yv(e);break;case 1:_n(e.type)&&kl(e);break;case 4:bh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Yv(t,e,n):(ot(dt,dt.current&1),t=Oi(t,e,n),t!==null?t.sibling:null);ot(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Wv(t,e,n)}return Oi(t,e,n)}var $v,Af,Kv,Qv;$v=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Af=function(){};Kv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(gi.current);var s=null;switch(n){case"input":r=qc(t,r),i=qc(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Qc(t,r),i=Qc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}Jc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Qv=function(t,e,n,i){n!==i&&(e.flags|=4)};function po(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ny(t,e,n){var i=e.pendingProps;switch(xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return _n(e.type)&&zl(),qt(e),null;case 3:return i=e.stateNode,Vs(),ut(vn),ut(rn),Rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(If(ei),ei=null))),Af(t,e),qt(e),null;case 5:Ah(e);var r=Nr(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)Kv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return qt(e),null}if(t=Nr(gi.current),Ca(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Ro.length;r++)at(Ro[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":pd(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":gd(i,s),at("invalid",i)}Jc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":ya(i),md(i,s,!0);break;case"textarea":ya(i),vd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[hi]=e,t[Ko]=i,$v(t,e,!1,!1),e.stateNode=t;e:{switch(o=ef(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ro.length;r++)at(Ro[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":pd(t,i),r=qc(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),at("invalid",t);break;case"textarea":gd(t,i),r=Qc(t,i),at("invalid",t);break;default:r=i}Jc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&rh(t,s,l,o))}switch(n){case"input":ya(t),md(t,i,!1);break;case"textarea":ya(t),vd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)Qv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Nr(Zo.current),Nr(gi.current),Ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return qt(e),null;case 13:if(ut(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&Cn!==null&&e.mode&1&&!(e.flags&128))mv(),Hs(),e.flags|=98560,s=!1;else if(s=Ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[hi]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else ei!==null&&(If(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Rt===0&&(Rt=3):Bh())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Vs(),Af(t,e),t===null&&qo(e.stateNode.containerInfo),qt(e),null;case 10:return Eh(e.type._context),qt(e),null;case 17:return _n(e.type)&&zl(),qt(e),null;case 19:if(ut(dt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)po(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Xs&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return qt(e),null}else 2*St()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=dt.current,ot(dt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return kh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Uy(t,e){switch(xh(e),e.tag){case 1:return _n(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),ut(vn),ut(rn),Rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ah(e),null;case 13:if(ut(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(dt),null;case 4:return Vs(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var Da=!1,Zt=!1,Iy=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Rf(t,e,n){try{n()}catch(i){vt(t,e,i)}}var op=!1;function Fy(t,e){if(ff=Ul,t=nv(),vh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hf={focusedElem:t,selectionRange:n},Ul=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,c=e.stateNode,m=c.getSnapshotBeforeUpdate(e.elementType===e.type?_:Zn(e.type,_),p);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return x=op,op=!1,x}function Io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rf(e,n,s)}r=r.next}while(r!==i)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Cf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zv(t){var e=t.alternate;e!==null&&(t.alternate=null,Zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[Ko],delete e[mf],delete e[_y],delete e[xy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jv(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(Pf(t,e,n),t=t.sibling;t!==null;)Pf(t,e,n),t=t.sibling}function Lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var zt=null,Jn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)e0(t,e,n),n=n.sibling}function e0(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:Zt||As(n,e);case 6:var i=zt,r=Jn;zt=null,Bi(t,e,n),zt=i,Jn=r,zt!==null&&(Jn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Jn?(t=zt,n=n.stateNode,t.nodeType===8?Ku(t.parentNode,n):t.nodeType===1&&Ku(t,n),Xo(t)):Ku(zt,n.stateNode));break;case 4:i=zt,r=Jn,zt=n.stateNode.containerInfo,Jn=!0,Bi(t,e,n),zt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rf(n,e,o),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Zt&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Bi(t,e,n),Zt=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function lp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Iy),e.forEach(function(i){var r=Xy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Jn=!1;break e;case 3:zt=a.stateNode.containerInfo,Jn=!0;break e;case 4:zt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(zt===null)throw Error(ue(160));e0(s,o,r),zt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)t0(e,t),e=e.sibling}function t0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),li(t),i&4){try{Io(3,t,t.return),pu(3,t)}catch(_){vt(t,t.return,_)}try{Io(5,t,t.return)}catch(_){vt(t,t.return,_)}}break;case 1:Yn(e,t),li(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(Yn(e,t),li(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{Ho(r,"")}catch(_){vt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Eg(r,s),ef(a,o);var u=ef(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Rg(r,h):f==="dangerouslySetInnerHTML"?bg(r,h):f==="children"?Ho(r,h):rh(r,f,h,u)}switch(a){case"input":$c(r,s);break;case"textarea":wg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ds(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ko]=s}catch(_){vt(t,t.return,_)}}break;case 6:if(Yn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){vt(t,t.return,_)}}break;case 3:if(Yn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(_){vt(t,t.return,_)}break;case 4:Yn(e,t),li(t);break;case 13:Yn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Oh=St())),i&4&&lp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||f,Yn(e,t),Zt=u):Yn(e,t),li(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Ee=t,f=t.child;f!==null;){for(h=Ee=f;Ee!==null;){switch(d=Ee,g=d.child,d.tag){case 0:case 11:case 14:case 15:Io(4,d,d.return);break;case 1:As(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){vt(i,n,_)}}break;case 5:As(d,d.return);break;case 22:if(d.memoizedState!==null){cp(h);continue}}g!==null?(g.return=d,Ee=g):cp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ag("display",o))}catch(_){vt(t,t.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){vt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yn(e,t),li(t),i&4&&lp(t);break;case 21:break;default:Yn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jv(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ho(r,""),i.flags&=-33);var s=ap(t);Lf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ap(t);Pf(t,a,o);break;default:throw Error(ue(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Oy(t,e,n){Ee=t,n0(t)}function n0(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Da;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Da;var u=Zt;if(Da=o,(Zt=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?fp(r):l!==null?(l.return=o,Ee=l):fp(r);for(;s!==null;)Ee=s,n0(s),s=s.sibling;Ee=r,Da=a,Zt=u}up(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):up(t)}}function up(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||pu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Xo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Zt||e.flags&512&&Cf(e)}catch(d){vt(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function cp(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function fp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{Cf(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{Cf(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var zy=Math.ceil,ql=ki.ReactCurrentDispatcher,Ih=ki.ReactCurrentOwner,Wn=ki.ReactCurrentBatchConfig,Je=0,It=null,wt=null,Wt=0,An=0,Rs=vr(0),Rt=0,na=null,Wr=0,mu=0,Fh=0,Fo=null,pn=null,Oh=0,Xs=1/0,bi=null,$l=!1,Df=null,lr=null,Na=!1,er=null,Kl=0,Oo=0,Nf=null,Tl=-1,bl=0;function un(){return Je&6?St():Tl!==-1?Tl:Tl=St()}function ur(t){return t.mode&1?Je&2&&Wt!==0?Wt&-Wt:Sy.transition!==null?(bl===0&&(bl=Bg()),bl):(t=it,t!==0||(t=window.event,t=t===void 0?16:Yg(t.type)),t):1}function ri(t,e,n,i){if(50<Oo)throw Oo=0,Nf=null,Error(ue(185));oa(t,n,i),(!(Je&2)||t!==It)&&(t===It&&(!(Je&2)&&(mu|=n),Rt===4&&Zi(t,Wt)),xn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Xs=St()+500,fu&&_r()))}function xn(t,e){var n=t.callbackNode;Sx(t,e);var i=Nl(t,t===It?Wt:0);if(i===0)n!==null&&yd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yd(n),e===1)t.tag===0?yy(hp.bind(null,t)):hv(hp.bind(null,t)),gy(function(){!(Je&6)&&_r()}),n=null;else{switch(Hg(i)){case 1:n=uh;break;case 4:n=zg;break;case 16:n=Dl;break;case 536870912:n=kg;break;default:n=Dl}n=c0(n,i0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function i0(t,e){if(Tl=-1,bl=0,Je&6)throw Error(ue(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=Nl(t,t===It?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ql(t,i);else{e=i;var r=Je;Je|=2;var s=s0();(It!==t||Wt!==e)&&(bi=null,Xs=St()+500,Ir(t,e));do try{Hy();break}catch(a){r0(t,a)}while(!0);Mh(),ql.current=s,Je=r,wt!==null?e=0:(It=null,Wt=0,e=Rt)}if(e!==0){if(e===2&&(r=of(t),r!==0&&(i=r,e=Uf(t,r))),e===1)throw n=na,Ir(t,0),Zi(t,i),xn(t,St()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ky(r)&&(e=Ql(t,i),e===2&&(s=of(t),s!==0&&(i=s,e=Uf(t,s))),e===1))throw n=na,Ir(t,0),Zi(t,i),xn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:br(t,pn,bi);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=Oh+500-St(),10<e)){if(Nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pf(br.bind(null,t,pn,bi),e);break}br(t,pn,bi);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ii(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zy(i/1960))-i,10<i){t.timeoutHandle=pf(br.bind(null,t,pn,bi),i);break}br(t,pn,bi);break;case 5:br(t,pn,bi);break;default:throw Error(ue(329))}}}return xn(t,St()),t.callbackNode===n?i0.bind(null,t):null}function Uf(t,e){var n=Fo;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=pn,pn=n,e!==null&&If(e)),t}function If(t){pn===null?pn=t:pn.push.apply(pn,t)}function ky(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~Fh,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function hp(t){if(Je&6)throw Error(ue(327));Os();var e=Nl(t,0);if(!(e&1))return xn(t,St()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var i=of(t);i!==0&&(e=i,n=Uf(t,i))}if(n===1)throw n=na,Ir(t,0),Zi(t,e),xn(t,St()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,pn,bi),xn(t,St()),null}function zh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Xs=St()+500,fu&&_r())}}function Xr(t){er!==null&&er.tag===0&&!(Je&6)&&Os();var e=Je;Je|=1;var n=Wn.transition,i=it;try{if(Wn.transition=null,it=1,t)return t()}finally{it=i,Wn.transition=n,Je=e,!(Je&6)&&_r()}}function kh(){An=Rs.current,ut(Rs)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,my(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Vs(),ut(vn),ut(rn),Rh();break;case 5:Ah(i);break;case 4:Vs();break;case 13:ut(dt);break;case 19:ut(dt);break;case 10:Eh(i.type._context);break;case 22:case 23:kh()}n=n.return}if(It=t,wt=t=cr(t.current,null),Wt=An=e,Rt=0,na=null,Fh=mu=Wr=0,pn=Fo=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Dr=null}return t}function r0(t,e){do{var n=wt;try{if(Mh(),Ml.current=Yl,jl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(Vr=0,Ut=bt=pt=null,Uo=!1,Jo=0,Ih.current=null,n===null||n.return===null){Rt=1,na=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Jd(o);if(g!==null){g.flags&=-257,ep(g,o,a,s,e),g.mode&1&&Zd(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Zd(s,u,e),Bh();break e}l=Error(ue(426))}}else if(ft&&a.mode&1){var p=Jd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),ep(p,o,a,s,e),yh(Ws(l,a));break e}}s=l=Ws(l,a),Rt!==4&&(Rt=2),Fo===null?Fo=[s]:Fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Hv(s,l,e);jd(s,c);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Gv(s,a,e);jd(s,y);break e}}s=s.return}while(s!==null)}a0(n)}catch(b){e=b,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function s0(){var t=ql.current;return ql.current=Yl,t===null?Yl:t}function Bh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),It===null||!(Wr&268435455)&&!(mu&268435455)||Zi(It,Wt)}function Ql(t,e){var n=Je;Je|=2;var i=s0();(It!==t||Wt!==e)&&(bi=null,Ir(t,e));do try{By();break}catch(r){r0(t,r)}while(!0);if(Mh(),Je=n,ql.current=i,wt!==null)throw Error(ue(261));return It=null,Wt=0,Rt}function By(){for(;wt!==null;)o0(wt)}function Hy(){for(;wt!==null&&!hx();)o0(wt)}function o0(t){var e=u0(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?a0(t):wt=e,Ih.current=null}function a0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Uy(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,wt=null;return}}else if(n=Ny(n,e,An),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Rt===0&&(Rt=5)}function br(t,e,n){var i=it,r=Wn.transition;try{Wn.transition=null,it=1,Gy(t,e,n,i)}finally{Wn.transition=r,it=i}return null}function Gy(t,e,n,i){do Os();while(er!==null);if(Je&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Mx(t,s),t===It&&(wt=It=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,c0(Dl,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=it;it=1;var a=Je;Je|=4,Ih.current=null,Fy(t,n),t0(n,t),ly(hf),Ul=!!ff,hf=ff=null,t.current=n,Oy(n),dx(),Je=a,it=o,Wn.transition=s}else t.current=n;if(Na&&(Na=!1,er=t,Kl=r),s=t.pendingLanes,s===0&&(lr=null),gx(n.stateNode),xn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($l)throw $l=!1,t=Df,Df=null,t;return Kl&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===Nf?Oo++:(Oo=0,Nf=t):Oo=0,_r(),null}function Os(){if(er!==null){var t=Hg(Kl),e=Wn.transition,n=it;try{if(Wn.transition=null,it=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,Kl=0,Je&6)throw Error(ue(331));var r=Je;for(Je|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var f=Ee;switch(f.tag){case 0:case 11:case 15:Io(8,f,s)}var h=f.child;if(h!==null)h.return=f,Ee=h;else for(;Ee!==null;){f=Ee;var d=f.sibling,g=f.return;if(Zv(f),f===u){Ee=null;break}if(d!==null){d.return=g,Ee=d;break}Ee=g}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,Ee=c;break e}Ee=s.return}}var m=t.current;for(Ee=m;Ee!==null;){o=Ee;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ee=v;else e:for(o=m;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pu(9,a)}}catch(b){vt(a,a.return,b)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(Je=r,_r(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(ou,t)}catch{}i=!0}return i}finally{it=n,Wn.transition=e}}return!1}function dp(t,e,n){e=Ws(n,e),e=Hv(t,e,1),t=ar(t,e,1),e=un(),t!==null&&(oa(t,1,e),xn(t,e))}function vt(t,e,n){if(t.tag===3)dp(t,t,n);else for(;e!==null;){if(e.tag===3){dp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=Ws(n,t),t=Gv(e,t,1),e=ar(e,t,1),t=un(),e!==null&&(oa(e,1,t),xn(e,t));break}}e=e.return}}function Vy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Wt&n)===n&&(Rt===4||Rt===3&&(Wt&130023424)===Wt&&500>St()-Oh?Ir(t,0):Fh|=n),xn(t,e)}function l0(t,e){e===0&&(t.mode&1?(e=Ea,Ea<<=1,!(Ea&130023424)&&(Ea=4194304)):e=1);var n=un();t=Fi(t,e),t!==null&&(oa(t,e,n),xn(t,n))}function Wy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),l0(t,n)}function Xy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),l0(t,n)}var u0;u0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,Dy(t,e,n);gn=!!(t.flags&131072)}else gn=!1,ft&&e.flags&1048576&&dv(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wl(t,e),t=e.pendingProps;var r=Bs(e,rn.current);Fs(e,n),r=Ph(null,e,i,t,r,n);var s=Lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Th(e),r.updater=du,e.stateNode=r,r._reactInternals=e,Sf(e,i,t,n),e=wf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&_h(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Yy(i),t=Zn(i,t),r){case 0:e=Ef(null,e,i,t,n);break e;case 1:e=ip(null,e,i,t,n);break e;case 11:e=tp(null,e,i,t,n);break e;case 14:e=np(null,e,i,Zn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Ef(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),ip(t,e,i,r,n);case 3:e:{if(jv(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,xv(t,e),Wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(ue(423)),e),e=rp(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(ue(424)),e),e=rp(t,e,i,n,r);break e}else for(Cn=or(e.stateNode.containerInfo.firstChild),Pn=e,ft=!0,ei=null,n=vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Oi(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return yv(e),t===null&&_f(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,df(i,r)?o=null:s!==null&&df(i,s)&&(e.flags|=32),Xv(t,e),an(t,e,o,n),e.child;case 6:return t===null&&_f(e),null;case 13:return Yv(t,e,n);case 4:return bh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),tp(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Gl,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!vn.current){e=Oi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,n),r=Xn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),np(t,e,i,r,n);case 15:return Vv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),wl(t,e),e.tag=1,_n(i)?(t=!0,kl(e)):t=!1,Fs(e,n),Bv(e,i,r),Sf(e,i,r,n),wf(null,e,i,!0,t,n);case 19:return qv(t,e,n);case 22:return Wv(t,e,n)}throw Error(ue(156,e.tag))};function c0(t,e){return Og(t,e)}function jy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new jy(t,e,n,i)}function Hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yy(t){if(typeof t=="function")return Hh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oh)return 11;if(t===ah)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Fr(n.children,r,s,e);case sh:o=8,r|=8;break;case Wc:return t=Vn(12,n,e,r|2),t.elementType=Wc,t.lanes=s,t;case Xc:return t=Vn(13,n,e,r),t.elementType=Xc,t.lanes=s,t;case jc:return t=Vn(19,n,e,r),t.elementType=jc,t.lanes=s,t;case yg:return gu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _g:o=10;break e;case xg:o=9;break e;case oh:o=11;break e;case ah:o=14;break e;case $i:o=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function gu(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=yg,t.lanes=n,t.stateNode={isHidden:!1},t}function rc(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ku(0),this.expirationTimes=ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gh(t,e,n,i,r,s,o,a,l){return t=new qy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(s),t}function $y(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function f0(t){if(!t)return pr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(_n(n))return fv(t,n,e)}return e}function h0(t,e,n,i,r,s,o,a,l){return t=Gh(n,i,!0,t,r,s,o,a,l),t.context=f0(null),n=t.current,i=un(),r=ur(n),s=Li(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,oa(t,r,i),xn(t,i),t}function vu(t,e,n,i){var r=e.current,s=un(),o=ur(r);return n=f0(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(ri(t,r,o,s),Sl(t,r,o)),o}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vh(t,e){pp(t,e),(t=t.alternate)&&pp(t,e)}function Ky(){return null}var d0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}_u.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));vu(t,e,null,null)};_u.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){vu(null,t,null,null)}),e[Ii]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&jg(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mp(){}function Qy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Zl(o);s.call(u)}}var o=h0(e,i,t,0,null,!1,!1,"",mp);return t._reactRootContainer=o,t[Ii]=o.current,qo(t.nodeType===8?t.parentNode:t),Xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Zl(l);a.call(u)}}var l=Gh(t,0,!1,null,null,!1,!1,"",mp);return t._reactRootContainer=l,t[Ii]=l.current,qo(t.nodeType===8?t.parentNode:t),Xr(function(){vu(e,l,n,i)}),l}function yu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Zl(o);a.call(l)}}vu(e,o,t,r)}else o=Qy(n,e,t,r,i);return Zl(o)}Gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ao(e.pendingLanes);n!==0&&(ch(e,n|1),xn(e,St()),!(Je&6)&&(Xs=St()+500,_r()))}break;case 13:Xr(function(){var i=Fi(t,1);if(i!==null){var r=un();ri(i,t,1,r)}}),Vh(t,1)}};fh=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=un();ri(e,t,134217728,n)}Vh(t,134217728)}};Vg=function(t){if(t.tag===13){var e=ur(t),n=Fi(t,e);if(n!==null){var i=un();ri(n,t,e,i)}Vh(t,e)}};Wg=function(){return it};Xg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};nf=function(t,e,n){switch(e){case"input":if($c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cu(i);if(!r)throw Error(ue(90));Mg(i),$c(i,r)}}}break;case"textarea":wg(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};Lg=zh;Dg=Xr;var Zy={usingClientEntryPoint:!1,Events:[la,Ms,cu,Cg,Pg,zh]},mo={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jy={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ig(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||Ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{ou=Ua.inject(Jy),mi=Ua}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(ue(200));return $y(t,e,null,n)};Un.createRoot=function(t,e){if(!Xh(t))throw Error(ue(299));var n=!1,i="",r=d0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,qo(t.nodeType===8?t.parentNode:t),new Wh(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=Ig(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return Xr(t)};Un.hydrate=function(t,e,n){if(!xu(e))throw Error(ue(200));return yu(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=d0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=h0(e,null,t,1,n??null,r,!1,s,o),t[Ii]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _u(e)};Un.render=function(t,e,n){if(!xu(e))throw Error(ue(200));return yu(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!xu(t))throw Error(ue(40));return t._reactRootContainer?(Xr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Un.unstable_batchedUpdates=zh;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xu(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return yu(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function p0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0)}catch(t){console.error(t)}}p0(),pg.exports=Un;var ca=pg.exports,gp=ca;Gc.createRoot=gp.createRoot,Gc.hydrateRoot=gp.hydrateRoot;const eS={band:"low",sensitivity:1,smoothing:.8,min:0,max:1,enabled:!0},m0=re.createContext(null);function tS({children:t}){const[e,n]=re.useState(null),[i,r]=re.useState(null),[s,o]=re.useState(!1),[a,l]=re.useState([]),[u,f]=re.useState(null),[h,d]=re.useState(null),[g,x]=re.useState(null),[_,p]=re.useState("cover"),[c,m]=re.useState([]),[v,y]=re.useState(null),[b,T]=re.useState(eS),[E,P]=re.useState({mode:"portrait",width:1080,height:1920}),S=re.useCallback((Z,ie)=>{n(Z),r(ie)},[]),w=re.useCallback((Z,ie,he)=>{l(L=>[...L.filter(Te=>Te.id!==Z),{id:Z,name:ie,url:he}])},[]),k=re.useCallback(Z=>{f(Z)},[]),V=re.useCallback(Z=>{l(ie=>ie.filter(he=>he.id!==Z)),f(ie=>ie===Z?null:ie)},[]),ne=re.useCallback((Z,ie)=>{d(he=>{if(he&&he.startsWith("blob:"))try{URL.revokeObjectURL(he)}catch{}return Z?URL.createObjectURL(Z):null}),x(Z?ie??Z.name:null)},[]),D=re.useCallback(Z=>{p(Z)},[]),z=re.useCallback((Z,ie={})=>{const he=`layer-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,L=Z==="equalizer"?.9:.8,Te=Z==="equalizer"?.28:.8,ae=(1-L)/2,xe=(1-Te)/2;m(_e=>[..._e,{id:he,effectId:Z,params:ie,visible:!0,rect:{x:ae,y:xe,w:L,h:Te}}]),y(he)},[]),H=re.useCallback(Z=>{y(Z)},[]),W=re.useCallback((Z,ie)=>{m(he=>{const L=he.findIndex(_e=>_e.id===Z);if(L===-1)return he;const Te=ie==="up"?L-1:L+1;if(Te<0||Te>=he.length)return he;const ae=[...he],[xe]=ae.splice(L,1);return ae.splice(Te,0,xe),ae})},[]),N=re.useCallback((Z,ie)=>{m(he=>he.map(L=>L.id===Z?{...L,visible:ie}:L))},[]),O=re.useCallback(Z=>{m(ie=>{var Te;const he=ie.find(ae=>ae.id===Z),L=(Te=he==null?void 0:he.params)==null?void 0:Te.imageUrl;if(typeof L=="string"&&L.startsWith("blob:"))try{URL.revokeObjectURL(L)}catch{}return ie.filter(ae=>ae.id!==Z)}),y(ie=>ie===Z?null:ie)},[]),U=re.useCallback((Z,ie)=>{m(he=>he.map(L=>L.id===v?(()=>{const Te=L.params[Z];if(Z==="imageUrl"&&typeof Te=="string"&&Te.startsWith("blob:")&&Te!==ie)try{URL.revokeObjectURL(Te)}catch{}return{...L,params:{...L.params,[Z]:ie}}})():L))},[v]),K=re.useCallback((Z,ie)=>{m(he=>he.map(L=>L.id===Z?{...L,rect:{...L.rect,...ie}}:L))},[]),J=re.useCallback((Z,ie,he)=>{m(L=>L.map(Te=>{if(Te.id!==Z)return Te;const ae=Te.params[ie];if(ie==="imageUrl"&&typeof ae=="string"&&ae.startsWith("blob:")&&ae!==he)try{URL.revokeObjectURL(ae)}catch{}return{...Te,params:{...Te.params,[ie]:he}}}))},[]),X=re.useCallback(Z=>{T(ie=>({...ie,...Z}))},[]),te=re.useCallback(Z=>{P(ie=>({...ie,...Z}))},[]),F=(v&&c.find(Z=>Z.id===v))??null,ee=(F==null?void 0:F.effectId)??null,j=(F==null?void 0:F.params)??{},ce=re.useMemo(()=>({audioFile:e,audioName:i,isPlaying:s,images:a,activeImageId:u,backgroundVideoUrl:h,backgroundVideoName:g,backgroundVideoFit:_,layers:c,activeLayerId:v,activeEffectId:ee,effectParams:j,audioMapping:b,canvasConfig:E,setAudioFile:S,setPlaying:o,addImage:w,setActiveImage:k,removeImage:V,setBackgroundVideo:ne,setBackgroundVideoFit:D,addLayer:z,setActiveLayer:H,moveLayer:W,setLayerVisible:N,removeLayer:O,setEffectParam:U,setLayerRect:K,setLayerParam:J,setAudioMapping:X,setCanvasConfig:te}),[e,i,s,a,u,h,g,_,c,v,ee,j,b,E,S,w,k,V,ne,D,z,H,W,N,O,U,K,J,X,te]);return C.jsx(m0.Provider,{value:ce,children:t})}function fa(){const t=re.useContext(m0);if(!t)throw new Error("useEditor must be inside EditorProvider");return t}function nS({onImportAudio:t,onImportImage:e,onImportBackgroundVideo:n}){const{setAudioFile:i,setPlaying:r,setBackgroundVideo:s,setCanvasConfig:o}=fa(),a=re.useRef(null),l=re.useRef(null),u=re.useRef(null),f=x=>{var p;const _=(p=x.target.files)==null?void 0:p[0];_&&_.type.startsWith("audio/")&&(i(_,_.name),r(!1),t(_)),x.target.value=""},h=x=>{var p;const _=(p=x.target.files)==null?void 0:p[0];_&&/^image\/(jpeg|jpg|png)/.test(_.type)&&e(_),x.target.value=""},d=x=>{var p;const _=(p=x.target.files)==null?void 0:p[0];if(_&&_.type.startsWith("video/")){s(_,_.name),n(_);const c=URL.createObjectURL(_),m=document.createElement("video");m.preload="metadata",m.muted=!0,m.playsInline=!0,m.src=c;const v=()=>{try{URL.revokeObjectURL(c)}catch{}};m.onloadedmetadata=()=>{const y=m.videoWidth||0,b=m.videoHeight||0;if(v(),y>0&&b>0){const E=Math.min(1,1920/Math.max(y,b)),P=Math.max(320,Math.min(3840,Math.round(y*E))),S=Math.max(320,Math.min(3840,Math.round(b*E)));o({mode:"custom",width:P,height:S})}},m.onerror=()=>{v()}}x.target.value=""},g=()=>{console.log("Export (placeholder)")};return C.jsxs("header",{className:"top-bar",children:[C.jsx("span",{className:"top-bar-title",children:"SonicWeave"}),C.jsx("input",{ref:a,type:"file",accept:"audio/*",onChange:f,style:{display:"none"}}),C.jsx("input",{ref:l,type:"file",accept:"image/png,image/jpeg,image/jpg",onChange:h,style:{display:"none"}}),C.jsx("input",{ref:u,type:"file",accept:"video/*",onChange:d,style:{display:"none"}}),C.jsx("button",{className:"top-bar-btn",onClick:()=>{var x;return(x=a.current)==null?void 0:x.click()},children:"Import Audio"}),C.jsx("button",{className:"top-bar-btn",onClick:()=>{var x;return(x=l.current)==null?void 0:x.click()},children:"Import Image"}),C.jsx("button",{className:"top-bar-btn",onClick:()=>{var x;return(x=u.current)==null?void 0:x.click()},children:"Background Video"}),C.jsx("button",{className:"top-bar-btn",onClick:g,children:"Export"})]})}const vp={particles:"Particle Bloom",spectrum:"Circular Spectrum",tunnel:"Wave Tunnel",equalizer:"Equalizer Mirror",energyField:"Energy Field",planeWaveLattice:"Plane Wave Lattice"};function iS({onPlayPause:t,onSeek:e,progress:n,duration:i,onSetActiveImage:r,onSelectEffect:s}){const{audioFile:o,audioName:a,isPlaying:l,images:u,activeImageId:f,activeEffectId:h,layers:d,activeLayerId:g,setActiveLayer:x,moveLayer:_,setLayerVisible:p,removeLayer:c,setPlaying:m}=fa(),v=()=>{m(!l),t()};return C.jsxs("aside",{className:"left-panel",children:[C.jsxs("div",{className:"panel-section",children:[C.jsx("div",{className:"panel-section-title",children:"Audio"}),o?C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"panel-item active",style:{cursor:"default",marginBottom:8},children:a??"Audio"}),C.jsx("button",{className:"top-bar-btn",style:{width:"100%",marginBottom:8},onClick:v,children:l?"Pause":"Play"}),C.jsx("div",{style:{marginBottom:4},children:C.jsx("input",{type:"range",min:0,max:i||1,value:n,onChange:y=>e(parseFloat(y.target.value)),style:{width:"100%"}})}),C.jsxs("div",{style:{fontSize:10,color:"var(--text-dim)"},children:[_p(n)," / ",_p(i)]})]}):C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)"},children:"No audio loaded"})]}),C.jsxs("div",{className:"panel-section",children:[C.jsx("div",{className:"panel-section-title",children:"Image Assets"}),u.length===0?C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)"},children:"No images"}):u.map(y=>C.jsx("div",{className:`panel-item ${y.id===f?"active":""}`,onClick:()=>r(y.url),children:y.name},y.id))]}),C.jsxs("div",{className:"panel-section",style:{flex:1,overflow:"auto"},children:[C.jsx("div",{className:"panel-section-title",children:"Effects Library"}),["energyField","planeWaveLattice","particles","equalizer","spectrum","tunnel"].map(y=>C.jsx("div",{className:`panel-item ${y===h?"active":""}`,onClick:()=>s(y),children:vp[y]},y))]}),C.jsxs("div",{className:"panel-section",style:{flex:1,overflow:"auto"},children:[C.jsx("div",{className:"panel-section-title",children:"Layers"}),d.length===0?C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)"},children:"No layers. Click an effect to add one."}):d.map((y,b)=>C.jsxs("div",{className:`panel-item ${y.id===g?"active":""}`,style:{display:"flex",alignItems:"center",gap:6},onClick:()=>x(y.id),children:[C.jsxs("span",{style:{flex:1},children:[b+1,". ",vp[y.effectId]]}),C.jsx("button",{className:"top-bar-btn",style:{padding:"2px 4px",fontSize:10},disabled:b===0,onClick:T=>{T.stopPropagation(),_(y.id,"up")},children:"Up"}),C.jsx("button",{className:"top-bar-btn",style:{padding:"2px 4px",fontSize:10},disabled:b===d.length-1,onClick:T=>{T.stopPropagation(),_(y.id,"down")},children:"Down"}),C.jsxs("label",{style:{display:"flex",alignItems:"center",gap:2,fontSize:10,color:"var(--text-dim)"},onClick:T=>T.stopPropagation(),children:[C.jsx("input",{type:"checkbox",checked:y.visible,onChange:T=>p(y.id,T.target.checked),style:{width:12,height:12}}),"Vis"]}),C.jsx("button",{className:"top-bar-btn",style:{padding:"2px 4px",fontSize:10},onClick:T=>{T.stopPropagation(),c(y.id)},children:"X"})]},y.id))]})]})}function _p(t){if(!Number.isFinite(t)||t<0)return"0:00";const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`}function Su(){return(Su=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function g0(t,e){if(t==null)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)e.indexOf(n=s[i])>=0||(r[n]=t[n]);return r}function Ff(t){var e=re.useRef(t),n=re.useRef(function(i){e.current&&e.current(i)});return e.current=t,n.current}var ia=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=1),t>n?n:t<e?e:t},zo=function(t){return"touches"in t},Of=function(t){return t&&t.ownerDocument.defaultView||self},xp=function(t,e,n){var i=t.getBoundingClientRect(),r=zo(e)?function(s,o){for(var a=0;a<s.length;a++)if(s[a].identifier===o)return s[a];return s[0]}(e.touches,n):e;return{left:ia((r.pageX-(i.left+Of(t).pageXOffset))/i.width),top:ia((r.pageY-(i.top+Of(t).pageYOffset))/i.height)}},yp=function(t){!zo(t)&&t.preventDefault()},v0=Ht.memo(function(t){var e=t.onMove,n=t.onKey,i=g0(t,["onMove","onKey"]),r=re.useRef(null),s=Ff(e),o=Ff(n),a=re.useRef(null),l=re.useRef(!1),u=re.useMemo(function(){var g=function(p){yp(p),(zo(p)?p.touches.length>0:p.buttons>0)&&r.current?s(xp(r.current,p,a.current)):_(!1)},x=function(){return _(!1)};function _(p){var c=l.current,m=Of(r.current),v=p?m.addEventListener:m.removeEventListener;v(c?"touchmove":"mousemove",g),v(c?"touchend":"mouseup",x)}return[function(p){var c=p.nativeEvent,m=r.current;if(m&&(yp(c),!function(y,b){return b&&!zo(y)}(c,l.current)&&m)){if(zo(c)){l.current=!0;var v=c.changedTouches||[];v.length&&(a.current=v[0].identifier)}m.focus(),s(xp(m,c,a.current)),_(!0)}},function(p){var c=p.which||p.keyCode;c<37||c>40||(p.preventDefault(),o({left:c===39?.05:c===37?-.05:0,top:c===40?.05:c===38?-.05:0}))},_]},[o,s]),f=u[0],h=u[1],d=u[2];return re.useEffect(function(){return d},[d]),Ht.createElement("div",Su({},i,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:r,onKeyDown:h,tabIndex:0,role:"slider"}))}),jh=function(t){return t.filter(Boolean).join(" ")},_0=function(t){var e=t.color,n=t.left,i=t.top,r=i===void 0?.5:i,s=jh(["react-colorful__pointer",t.className]);return Ht.createElement("div",{className:s,style:{top:100*r+"%",left:100*n+"%"}},Ht.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:e}}))},Gt=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=Math.pow(10,e)),Math.round(n*t)/n},rS=function(t){return uS(zf(t))},zf=function(t){return t[0]==="#"&&(t=t.substring(1)),t.length<6?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?Gt(parseInt(t[3]+t[3],16)/255,2):1}:{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16),a:t.length===8?Gt(parseInt(t.substring(6,8),16)/255,2):1}},sS=function(t){return lS(aS(t))},oS=function(t){var e=t.s,n=t.v,i=t.a,r=(200-e)*n/100;return{h:Gt(t.h),s:Gt(r>0&&r<200?e*n/100/(r<=100?r:200-r)*100:0),l:Gt(r/2),a:Gt(i,2)}},kf=function(t){var e=oS(t);return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},aS=function(t){var e=t.h,n=t.s,i=t.v,r=t.a;e=e/360*6,n/=100,i/=100;var s=Math.floor(e),o=i*(1-n),a=i*(1-(e-s)*n),l=i*(1-(1-e+s)*n),u=s%6;return{r:Gt(255*[i,a,o,o,l,i][u]),g:Gt(255*[l,i,i,a,o,o][u]),b:Gt(255*[o,o,l,i,i,a][u]),a:Gt(r,2)}},Ia=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},lS=function(t){var e=t.r,n=t.g,i=t.b,r=t.a,s=r<1?Ia(Gt(255*r)):"";return"#"+Ia(e)+Ia(n)+Ia(i)+s},uS=function(t){var e=t.r,n=t.g,i=t.b,r=t.a,s=Math.max(e,n,i),o=s-Math.min(e,n,i),a=o?s===e?(n-i)/o:s===n?2+(i-e)/o:4+(e-n)/o:0;return{h:Gt(60*(a<0?a+6:a)),s:Gt(s?o/s*100:0),v:Gt(s/255*100),a:r}},cS=Ht.memo(function(t){var e=t.hue,n=t.onChange,i=jh(["react-colorful__hue",t.className]);return Ht.createElement("div",{className:i},Ht.createElement(v0,{onMove:function(r){n({h:360*r.left})},onKey:function(r){n({h:ia(e+360*r.left,0,360)})},"aria-label":"Hue","aria-valuenow":Gt(e),"aria-valuemax":"360","aria-valuemin":"0"},Ht.createElement(_0,{className:"react-colorful__hue-pointer",left:e/360,color:kf({h:e,s:100,v:100,a:1})})))}),fS=Ht.memo(function(t){var e=t.hsva,n=t.onChange,i={backgroundColor:kf({h:e.h,s:100,v:100,a:1})};return Ht.createElement("div",{className:"react-colorful__saturation",style:i},Ht.createElement(v0,{onMove:function(r){n({s:100*r.left,v:100-100*r.top})},onKey:function(r){n({s:ia(e.s+100*r.left,0,100),v:ia(e.v-100*r.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Gt(e.s)+"%, Brightness "+Gt(e.v)+"%"},Ht.createElement(_0,{className:"react-colorful__saturation-pointer",top:1-e.v/100,left:e.s/100,color:kf(e)})))}),x0=function(t,e){if(t===e)return!0;for(var n in t)if(t[n]!==e[n])return!1;return!0},hS=function(t,e){return t.toLowerCase()===e.toLowerCase()||x0(zf(t),zf(e))};function dS(t,e,n){var i=Ff(n),r=re.useState(function(){return t.toHsva(e)}),s=r[0],o=r[1],a=re.useRef({color:e,hsva:s});re.useEffect(function(){if(!t.equal(e,a.current.color)){var u=t.toHsva(e);a.current={hsva:u,color:e},o(u)}},[e,t]),re.useEffect(function(){var u;x0(s,a.current.hsva)||t.equal(u=t.fromHsva(s),a.current.color)||(a.current={hsva:s,color:u},i(u))},[s,t,i]);var l=re.useCallback(function(u){o(function(f){return Object.assign({},f,u)})},[]);return[s,l]}var pS=typeof window<"u"?re.useLayoutEffect:re.useEffect,mS=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Sp=new Map,gS=function(t){pS(function(){var e=t.current?t.current.ownerDocument:document;if(e!==void 0&&!Sp.has(e)){var n=e.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Sp.set(e,n);var i=mS();i&&n.setAttribute("nonce",i),e.head.appendChild(n)}},[])},vS=function(t){var e=t.className,n=t.colorModel,i=t.color,r=i===void 0?n.defaultColor:i,s=t.onChange,o=g0(t,["className","colorModel","color","onChange"]),a=re.useRef(null);gS(a);var l=dS(n,r,s),u=l[0],f=l[1],h=jh(["react-colorful",e]);return Ht.createElement("div",Su({},o,{ref:a,className:h}),Ht.createElement(fS,{hsva:u,onChange:f}),Ht.createElement(cS,{hue:u.h,onChange:f,className:"react-colorful__last-control"}))},_S={defaultColor:"000",toHsva:rS,fromHsva:function(t){return sS({h:t.h,s:t.s,v:t.v,a:1})},equal:hS},oc=function(t){return Ht.createElement(vS,Su({},t,{colorModel:_S}))};const xS=[{value:"low",label:"Low"},{value:"mid",label:"Mid"},{value:"high",label:"High"}];function yS({onEffectParamChange:t,onAudioMappingChange:e}){const[n,i]=re.useState("effect"),{activeEffectId:r,effectParams:s,audioMapping:o,setEffectParam:a,setAudioMapping:l,canvasConfig:u,setCanvasConfig:f,backgroundVideoUrl:h,backgroundVideoFit:d,setBackgroundVideoFit:g}=fa(),x=(p,c)=>{a(p,c),t(p,c)},_=(p,c)=>{l({[p]:c}),e(p,c)};return C.jsxs("aside",{className:"right-panel",children:[C.jsxs("div",{className:"inspector-tabs",children:[C.jsx("button",{className:`inspector-tab ${n==="effect"?"active":""}`,onClick:()=>i("effect"),children:"Effect Parameters"}),C.jsx("button",{className:`inspector-tab ${n==="mapping"?"active":""}`,onClick:()=>i("mapping"),children:"Audio Mapping"})]}),C.jsxs("div",{className:"inspector-content",children:[n==="effect"&&C.jsx(MS,{effectId:r,params:s,onChange:x}),n==="mapping"&&C.jsxs(C.Fragment,{children:[C.jsx(wS,{mapping:o,onChange:_}),C.jsx(SS,{hasVideo:!!h,fit:d,onChangeFit:g}),C.jsx(TS,{config:u,onChange:f})]})]})]})}function SS({hasVideo:t,fit:e,onChangeFit:n}){return C.jsxs("div",{style:{marginTop:16,borderTop:"1px solid var(--border)",paddingTop:12},children:[C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)",marginBottom:8},children:"Background"}),C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Video Fit"}),C.jsxs("select",{disabled:!t,value:e,onChange:i=>n(i.target.value),children:[C.jsx("option",{value:"cover",children:"Cover (fill)"}),C.jsx("option",{value:"contain",children:"Contain (no crop)"})]})]}),t?null:C.jsx("div",{style:{color:"var(--text-dim)",fontSize:11,marginTop:6},children:"先导入背景视频后可调整"})]})}function MS({effectId:t,params:e,onChange:n}){const i=re.useRef(null);if(!t)return C.jsx("div",{style:{color:"var(--text-dim)",fontSize:12},children:"Select an effect"});if(t==="energyField"){const r=typeof e.color=="string"&&e.color?e.color:"#3fd2ff";return C.jsxs(C.Fragment,{children:[C.jsxs("div",{style:{marginBottom:10},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[C.jsx("label",{style:{color:"var(--text-dim)",fontSize:11},children:"Color"}),C.jsx("span",{style:{color:"var(--text-dim)",fontSize:11},children:r})]}),C.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:8},children:[C.jsx("div",{style:{width:20,height:20,borderRadius:4,background:r,border:"1px solid var(--border)"}}),C.jsx("input",{value:r,onChange:s=>n("color",s.target.value),spellCheck:!1,style:{width:"100%"}})]}),C.jsx("div",{style:{borderRadius:10,overflow:"hidden"},children:C.jsx(oc,{color:r,onChange:s=>n("color",s)})})]}),C.jsx(ke,{label:"Opacity",value:e.opacity??.95,min:.05,max:1,step:.01,onChange:s=>n("opacity",s)}),C.jsx(ke,{label:"Intensity",value:e.intensity??1.1,min:.1,max:3,step:.05,onChange:s=>n("intensity",s)}),C.jsx(ke,{label:"Radius",value:e.radius??.62,min:.1,max:1.2,step:.01,onChange:s=>n("radius",s)}),C.jsx(ke,{label:"Thickness",value:e.thickness??.08,min:.01,max:.4,step:.005,onChange:s=>n("thickness",s)}),C.jsx(ke,{label:"Noise",value:e.noise??1,min:0,max:2,step:.01,onChange:s=>n("noise",s)}),C.jsx(ke,{label:"Speed",value:e.speed??.9,min:0,max:2,step:.01,onChange:s=>n("speed",s)})]})}if(t==="planeWaveLattice"){const r=typeof e.color=="string"&&e.color?e.color:"#ff2b2b";return C.jsxs(C.Fragment,{children:[C.jsxs("div",{style:{marginBottom:10},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[C.jsx("label",{style:{color:"var(--text-dim)",fontSize:11},children:"Color"}),C.jsx("span",{style:{color:"var(--text-dim)",fontSize:11},children:r})]}),C.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:8},children:[C.jsx("div",{style:{width:20,height:20,borderRadius:4,background:r,border:"1px solid var(--border)"}}),C.jsx("input",{value:r,onChange:s=>n("color",s.target.value),spellCheck:!1,style:{width:"100%"}})]}),C.jsx("div",{style:{borderRadius:10,overflow:"hidden"},children:C.jsx(oc,{color:r,onChange:s=>n("color",s)})})]}),C.jsx(ke,{label:"Opacity",value:e.opacity??.95,min:.05,max:1,step:.01,onChange:s=>n("opacity",s)}),C.jsx(ke,{label:"Point Size",value:e.pointSize??.018,min:.004,max:.06,step:.001,onChange:s=>n("pointSize",s)}),C.jsx(ke,{label:"Grid",value:e.grid??18,min:6,max:40,step:1,onChange:s=>n("grid",s)}),C.jsx(ke,{label:"Spacing",value:e.spacing??.22,min:.08,max:.55,step:.01,onChange:s=>n("spacing",s)}),C.jsx(ke,{label:"k (Wave Number)",value:e.k??2.8,min:.2,max:10,step:.05,onChange:s=>n("k",s)}),C.jsx(ke,{label:"Direction θ",value:e.theta??.08,min:0,max:1,step:.01,onChange:s=>n("theta",s)}),C.jsx(ke,{label:"Direction φ",value:e.phi??.52,min:0,max:1,step:.01,onChange:s=>n("phi",s)}),C.jsx(ke,{label:"ω (Speed)",value:e.omega??2.2,min:0,max:8,step:.05,onChange:s=>n("omega",s)}),C.jsx(ke,{label:"Sharpness",value:e.sharpness??4.2,min:1,max:10,step:.1,onChange:s=>n("sharpness",s)}),C.jsx(ke,{label:"Rotate Speed",value:e.rotateSpeed??.18,min:0,max:1.2,step:.01,onChange:s=>n("rotateSpeed",s)}),C.jsxs("div",{style:{marginTop:12,borderTop:"1px solid var(--border)",paddingTop:10},children:[C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)",marginBottom:8},children:"Audio Reactive (Energy)"}),C.jsx(ke,{label:"React ω",value:e.reactOmega??0,min:0,max:2,step:.01,onChange:s=>n("reactOmega",s)}),C.jsx(ke,{label:"React Point Size",value:e.reactPointSize??0,min:0,max:2,step:.01,onChange:s=>n("reactPointSize",s)}),C.jsx(ke,{label:"React Sharpness",value:e.reactSharpness??0,min:0,max:2,step:.01,onChange:s=>n("reactSharpness",s)}),C.jsx(ke,{label:"React k",value:e.reactK??0,min:0,max:2,step:.01,onChange:s=>n("reactK",s)}),C.jsx(ke,{label:"React Rotate",value:e.reactRotate??0,min:0,max:2,step:.01,onChange:s=>n("reactRotate",s)})]})]})}if(t==="particles"){const r=e.shape??0;return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Shape"}),C.jsxs("select",{value:String(r),onChange:s=>n("shape",parseInt(s.target.value,10)),children:[C.jsx("option",{value:"0",children:"Sphere"}),C.jsx("option",{value:"1",children:"Circle"}),C.jsx("option",{value:"2",children:"Plane"})]})]}),r===2?C.jsxs("div",{style:{marginBottom:10},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[C.jsx("label",{style:{color:"var(--text-dim)",fontSize:11},children:"Plane Direction"}),C.jsx("span",{style:{color:"var(--text-dim)",fontSize:11},children:(e.planeDir??0)===0?"Center = All Directions":"8-way Flow"})]}),C.jsx(ES,{value:e.planeDir??0,onChange:s=>n("planeDir",s)})]}):null,r===1?C.jsx(ke,{label:"Tilt",value:e.tilt??0,min:0,max:1,step:.01,onChange:s=>n("tilt",s)}):null,C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Rotation"}),C.jsxs("select",{value:String(e.rotationMode??0),onChange:s=>n("rotationMode",parseInt(s.target.value,10)),children:[C.jsx("option",{value:"0",children:"Y"}),C.jsx("option",{value:"1",children:"XY"}),C.jsx("option",{value:"2",children:"XYZ"})]})]}),C.jsx(ke,{label:"Particle Size",value:e.baseSize??.02,min:.01,max:.16,step:.002,onChange:s=>n("baseSize",s)}),C.jsx(ke,{label:"Rotation Speed",value:e.rotationSpeed??1,min:0,max:6,step:.1,onChange:s=>n("rotationSpeed",s)}),C.jsx(ke,{label:"Max Particle Groups",value:e.maxGroups??10,min:1,max:20,step:1,onChange:s=>n("maxGroups",s)}),C.jsx(ke,{label:"Hue",value:e.hue??.55,min:0,max:1,step:.01,onChange:s=>n("hue",s)}),C.jsx(ke,{label:"Opacity",value:e.opacity??.8,min:.2,max:1,step:.05,onChange:s=>n("opacity",s)})]})}if(t==="equalizer"){const r=typeof e.color=="string"&&e.color?e.color:"#4fc3ff";return C.jsxs(C.Fragment,{children:[C.jsx(Fa,{label:"Flip Horizontal",checked:!!e.flipX,onChange:s=>n("flipX",s)}),C.jsx(Fa,{label:"Flip Vertical",checked:!!e.flipY,onChange:s=>n("flipY",s)}),C.jsx(Fa,{label:"Show Reflection",checked:!!(e.showReflection??!0),onChange:s=>n("showReflection",s)}),C.jsx(Fa,{label:"Show Baseline",checked:!!(e.showBaseline??!0),onChange:s=>n("showBaseline",s)}),C.jsxs("div",{className:"slider-row",children:[C.jsx("label",{children:"Bar Count"}),C.jsx("input",{type:"number",min:16,max:512,value:Math.round(e.barCount??128),onChange:s=>n("barCount",parseInt(s.target.value,10)||128),style:{width:"100%",padding:"4px 6px",background:"var(--bg-hover)",border:"1px solid var(--border)",borderRadius:4,color:"var(--text)",fontSize:11}}),C.jsx("span",{className:"slider-value",children:Math.round(e.barCount??128)})]}),C.jsx(ke,{label:"Length",value:e.length??.95,min:.5,max:2,step:.01,onChange:s=>n("length",s)}),C.jsxs("div",{style:{marginBottom:12},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[C.jsx("label",{style:{color:"var(--text-dim)",fontSize:11},children:"Color"}),C.jsx("input",{value:r,onChange:s=>n("color",s.target.value),style:{width:90,padding:"4px 6px",background:"var(--bg-hover)",border:"1px solid var(--border)",borderRadius:4,color:"var(--text)",fontSize:11}})]}),C.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[C.jsx("div",{style:{width:160},children:C.jsx(oc,{color:r,onChange:s=>n("color",s)})}),C.jsx("div",{style:{width:28,height:28,borderRadius:6,border:"1px solid var(--border)",background:r},title:r})]})]}),C.jsx(ke,{label:"Glow",value:e.glow??.9,min:0,max:2,step:.01,onChange:s=>n("glow",s)}),C.jsx(ke,{label:"Glow Size",value:e.glowSize??.9,min:0,max:2,step:.01,onChange:s=>n("glowSize",s)}),C.jsx(ke,{label:"Opacity",value:e.opacity??.95,min:.05,max:1,step:.01,onChange:s=>n("opacity",s)}),C.jsx(ke,{label:"Height",value:e.heightScale??1,min:.2,max:1.5,step:.01,onChange:s=>n("heightScale",s)}),C.jsx(ke,{label:"Reflection",value:e.reflection??.65,min:0,max:1,step:.01,onChange:s=>n("reflection",s)}),C.jsx(ke,{label:"Gap",value:e.gap??.25,min:0,max:.8,step:.01,onChange:s=>n("gap",s)}),C.jsx(ke,{label:"Smoothing",value:e.smoothing??.18,min:.02,max:.6,step:.01,onChange:s=>n("smoothing",s)})]})}if(t==="spectrum")return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Style"}),C.jsxs("select",{value:(e.style??0)>=.5?"ferro":"bars",onChange:r=>n("style",r.target.value==="ferro"?1:0),children:[C.jsx("option",{value:"bars",children:"Bars"}),C.jsx("option",{value:"ferro",children:"Ferrofluid"})]})]}),C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Bars Direction"}),C.jsxs("select",{value:(e.barMode??0)>=.5?"vertical":"radial",onChange:r=>n("barMode",r.target.value==="vertical"?1:0),children:[C.jsx("option",{value:"radial",children:"Radial Outward"}),C.jsx("option",{value:"vertical",children:"Vertical"})]})]}),C.jsx(ke,{label:"Tilt",value:e.tilt??0,min:0,max:1,step:.01,onChange:r=>n("tilt",r)}),C.jsx(ke,{label:"Radius",value:e.radius??.7,min:.3,max:2,step:.05,onChange:r=>n("radius",r)}),C.jsx(ke,{label:"Height",value:e.heightScale??.7,min:.2,max:1,step:.05,onChange:r=>n("heightScale",r)}),C.jsx(ke,{label:"Bar Width",value:e.barWidth??.5,min:0,max:1,step:.05,onChange:r=>n("barWidth",r)})]});if(t==="tunnel"){const r=typeof e.imageUrl=="string"?e.imageUrl:"";return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"toggle-row",children:[C.jsx("label",{children:"Use Image"}),C.jsx("input",{type:"checkbox",checked:!!e.imageEnabled,onChange:s=>n("imageEnabled",s.target.checked)})]}),C.jsxs("div",{className:"select-row",style:{gap:8},children:[C.jsx("button",{className:"top-bar-btn",style:{flex:1},onClick:()=>{var s;return(s=i.current)==null?void 0:s.click()},children:"Browse Image"}),C.jsx("button",{className:"top-bar-btn",disabled:!r,onClick:()=>n("imageUrl",""),children:"Clear"}),C.jsx("input",{ref:i,type:"file",accept:"image/*",style:{display:"none"},onChange:s=>{var l;const o=(l=s.target.files)==null?void 0:l[0];if(s.currentTarget.value="",!o)return;const a=URL.createObjectURL(o);n("imageUrl",a),n("imageEnabled",!0)}})]}),C.jsx(ke,{label:"Image Mix",value:e.imageMix??.6,min:0,max:1,step:.01,onChange:s=>n("imageMix",s)}),C.jsx("div",{style:{color:"var(--text-dim)",fontSize:11,marginTop:6},children:r?"已选择图片（仅此 WaveTunnel 图层使用）":"未选择图片"})]})}return C.jsx("div",{style:{color:"var(--text-dim)",fontSize:12},children:"No parameters for this effect"})}function ES({value:t,onChange:e}){const n=(i,r)=>{const s=t===i;return C.jsx("button",{type:"button",onClick:()=>e(i),className:"top-bar-btn",style:{width:34,height:34,padding:0,display:"grid",placeItems:"center",background:s?"var(--accent-dim)":"var(--bg-hover)",borderColor:s?"var(--accent)":"var(--border)",fontSize:14,lineHeight:1,userSelect:"none"},"aria-pressed":s,"aria-label":`Plane direction ${i}`,children:r})};return C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 34px)",gap:6},children:[n(8,"↖"),n(1,"↑"),n(2,"↗"),n(7,"←"),n(0,"•"),n(3,"→"),n(6,"↙"),n(5,"↓"),n(4,"↘")]})}function wS({mapping:t,onChange:e}){return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"toggle-row",children:[C.jsx("label",{children:"Audio Reactive"}),C.jsx("input",{type:"checkbox",checked:t.enabled,onChange:n=>e("enabled",n.target.checked)})]}),C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Audio Band"}),C.jsx("select",{value:t.band,onChange:n=>e("band",n.target.value),children:xS.map(n=>C.jsx("option",{value:n.value,children:n.label},n.value))})]}),C.jsx(ke,{label:"Sensitivity",value:t.sensitivity,min:.1,max:3,step:.1,onChange:n=>e("sensitivity",n)}),C.jsx(ke,{label:"Smoothing",value:t.smoothing,min:0,max:1,step:.05,onChange:n=>e("smoothing",n)}),C.jsx(ke,{label:"Min",value:t.min,min:0,max:1,step:.05,onChange:n=>e("min",n)}),C.jsx(ke,{label:"Max",value:t.max,min:0,max:2,step:.05,onChange:n=>e("max",n)})]})}function TS({config:t,onChange:e}){const{mode:n,width:i,height:r}=t,s=a=>{e(a==="portrait"?{mode:"portrait",width:1080,height:1920}:{mode:"landscape",width:1920,height:1080})},o=(a,l)=>{const u=Number.isFinite(l)?Math.max(320,Math.min(3840,l)):1080;e({mode:"custom",[a]:u})};return C.jsxs("div",{style:{marginTop:16,borderTop:"1px solid var(--border)",paddingTop:12},children:[C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)",marginBottom:8},children:"Canvas"}),C.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[C.jsx("button",{className:"top-bar-btn",style:{flex:1,padding:"4px 6px",fontSize:11,background:n==="portrait"?"var(--accent-dim)":"var(--bg-hover)"},onClick:()=>s("portrait"),children:"Portrait 1080×1920"}),C.jsx("button",{className:"top-bar-btn",style:{flex:1,padding:"4px 6px",fontSize:11,background:n==="landscape"?"var(--accent-dim)":"var(--bg-hover)"},onClick:()=>s("landscape"),children:"Landscape 1920×1080"})]}),C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)",marginBottom:4},children:"Custom"}),C.jsxs("div",{style:{display:"flex",gap:6},children:[C.jsx("div",{style:{flex:1},children:C.jsx("input",{type:"number",min:320,max:3840,value:i,onChange:a=>o("width",parseInt(a.target.value,10)),style:{width:"100%",padding:"4px 6px",background:"var(--bg-hover)",border:"1px solid var(--border)",borderRadius:4,color:"var(--text)",fontSize:11}})}),C.jsx("div",{style:{flex:1},children:C.jsx("input",{type:"number",min:320,max:3840,value:r,onChange:a=>o("height",parseInt(a.target.value,10)),style:{width:"100%",padding:"4px 6px",background:"var(--bg-hover)",border:"1px solid var(--border)",borderRadius:4,color:"var(--text)",fontSize:11}})})]})]})}function ke({label:t,value:e,min:n,max:i,step:r=.01,onChange:s}){return C.jsxs("div",{className:"slider-row",children:[C.jsx("label",{children:t}),C.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:o=>s(parseFloat(o.target.value))}),C.jsx("span",{className:"slider-value",children:e.toFixed(2)})]})}function Fa({label:t,checked:e,onChange:n}){return C.jsxs("div",{className:"toggle-row",children:[C.jsx("label",{children:t}),C.jsx("input",{type:"checkbox",checked:e,onChange:i=>n(i.target.checked)})]})}var Mu={exports:{}},y0={},S0={exports:{}},bS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",AS=bS,RS=AS;function M0(){}function E0(){}E0.resetWarningCache=M0;var CS=function(){function t(i,r,s,o,a,l){if(l!==RS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:E0,resetWarningCache:M0};return n.PropTypes=n,n};S0.exports=CS();var w0=S0.exports;function T0(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=T0(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function Mp(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=T0(t))&&(i&&(i+=" "),i+=e);return i}const PS=Object.freeze(Object.defineProperty({__proto__:null,clsx:Mp,default:Mp},Symbol.toStringTag,{value:"Module"})),LS=R_(PS);var _t={},vi={};Object.defineProperty(vi,"__esModule",{value:!0});vi.dontSetMe=FS;vi.findInArray=DS;vi.int=IS;vi.isFunction=NS;vi.isNum=US;function DS(t,e){for(let n=0,i=t.length;n<i;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function NS(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Function]"}function US(t){return typeof t=="number"&&!isNaN(t)}function IS(t){return parseInt(t,10)}function FS(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}var qr={};Object.defineProperty(qr,"__esModule",{value:!0});qr.browserPrefixToKey=A0;qr.browserPrefixToStyle=OS;qr.default=void 0;qr.getPrefix=b0;const ac=["Moz","Webkit","O","ms"];function b0(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(t=window.document)===null||t===void 0||(t=t.documentElement)===null||t===void 0?void 0:t.style;if(!n||e in n)return"";for(let i=0;i<ac.length;i++)if(A0(e,ac[i])in n)return ac[i];return""}function A0(t,e){return e?"".concat(e).concat(zS(t)):t}function OS(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t}function zS(t){let e="",n=!0;for(let i=0;i<t.length;i++)n?(e+=t[i].toUpperCase(),n=!1):t[i]==="-"?n=!0:e+=t[i];return e}qr.default=b0();Object.defineProperty(_t,"__esModule",{value:!0});_t.addClassName=P0;_t.addEvent=HS;_t.addUserSelectStyles=ZS;_t.createCSSTransform=qS;_t.createSVGTransform=$S;_t.getTouch=KS;_t.getTouchIdentifier=QS;_t.getTranslation=Yh;_t.innerHeight=XS;_t.innerWidth=jS;_t.matchesSelector=C0;_t.matchesSelectorAndParentsTo=BS;_t.offsetXYFromParent=YS;_t.outerHeight=VS;_t.outerWidth=WS;_t.removeClassName=L0;_t.removeEvent=GS;_t.removeUserSelectStyles=JS;var Ln=vi,Ep=kS(qr);function R0(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(R0=function(i){return i?n:e})(t)}function kS(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=R0(e);if(n&&n.has(t))return n.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=r?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(i,s,o):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i}let Oa="";function C0(t,e){return Oa||(Oa=(0,Ln.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,Ln.isFunction)(t[n])})),(0,Ln.isFunction)(t[Oa])?t[Oa](e):!1}function BS(t,e,n){let i=t;do{if(C0(i,e))return!0;if(i===n)return!1;i=i.parentNode}while(i);return!1}function HS(t,e,n,i){if(!t)return;const r={capture:!0,...i};t.addEventListener?t.addEventListener(e,n,r):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}function GS(t,e,n,i){if(!t)return;const r={capture:!0,...i};t.removeEventListener?t.removeEventListener(e,n,r):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}function VS(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,Ln.int)(n.borderTopWidth),e+=(0,Ln.int)(n.borderBottomWidth),e}function WS(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,Ln.int)(n.borderLeftWidth),e+=(0,Ln.int)(n.borderRightWidth),e}function XS(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,Ln.int)(n.paddingTop),e-=(0,Ln.int)(n.paddingBottom),e}function jS(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,Ln.int)(n.paddingLeft),e-=(0,Ln.int)(n.paddingRight),e}function YS(t,e,n){const r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect(),s=(t.clientX+e.scrollLeft-r.left)/n,o=(t.clientY+e.scrollTop-r.top)/n;return{x:s,y:o}}function qS(t,e){const n=Yh(t,e,"px");return{[(0,Ep.browserPrefixToKey)("transform",Ep.default)]:n}}function $S(t,e){return Yh(t,e,"")}function Yh(t,e,n){let{x:i,y:r}=t,s="translate(".concat(i).concat(n,",").concat(r).concat(n,")");if(e){const o="".concat(typeof e.x=="string"?e.x:e.x+n),a="".concat(typeof e.y=="string"?e.y:e.y+n);s="translate(".concat(o,", ").concat(a,")")+s}return s}function KS(t,e){return t.targetTouches&&(0,Ln.findInArray)(t.targetTouches,n=>e===n.identifier)||t.changedTouches&&(0,Ln.findInArray)(t.changedTouches,n=>e===n.identifier)}function QS(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function ZS(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,e.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(e)),t.body&&P0(t.body,"react-draggable-transparent-selection")}function JS(t){if(t)try{if(t.body&&L0(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&e.type!=="Caret"&&e.removeAllRanges()}}catch{}}function P0(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function L0(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}var _i={};Object.defineProperty(_i,"__esModule",{value:!0});_i.canDragX=nM;_i.canDragY=iM;_i.createCoreData=sM;_i.createDraggableData=oM;_i.getBoundPosition=eM;_i.getControlPosition=rM;_i.snapToGrid=tM;var bn=vi,Cs=_t;function eM(t,e,n){if(!t.props.bounds)return[e,n];let{bounds:i}=t.props;i=typeof i=="string"?i:aM(i);const r=qh(t);if(typeof i=="string"){const{ownerDocument:s}=r,o=s.defaultView;let a;if(i==="parent"?a=r.parentNode:a=s.querySelector(i),!(a instanceof o.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const l=a,u=o.getComputedStyle(r),f=o.getComputedStyle(l);i={left:-r.offsetLeft+(0,bn.int)(f.paddingLeft)+(0,bn.int)(u.marginLeft),top:-r.offsetTop+(0,bn.int)(f.paddingTop)+(0,bn.int)(u.marginTop),right:(0,Cs.innerWidth)(l)-(0,Cs.outerWidth)(r)-r.offsetLeft+(0,bn.int)(f.paddingRight)-(0,bn.int)(u.marginRight),bottom:(0,Cs.innerHeight)(l)-(0,Cs.outerHeight)(r)-r.offsetTop+(0,bn.int)(f.paddingBottom)-(0,bn.int)(u.marginBottom)}}return(0,bn.isNum)(i.right)&&(e=Math.min(e,i.right)),(0,bn.isNum)(i.bottom)&&(n=Math.min(n,i.bottom)),(0,bn.isNum)(i.left)&&(e=Math.max(e,i.left)),(0,bn.isNum)(i.top)&&(n=Math.max(n,i.top)),[e,n]}function tM(t,e,n){const i=Math.round(e/t[0])*t[0],r=Math.round(n/t[1])*t[1];return[i,r]}function nM(t){return t.props.axis==="both"||t.props.axis==="x"}function iM(t){return t.props.axis==="both"||t.props.axis==="y"}function rM(t,e,n){const i=typeof e=="number"?(0,Cs.getTouch)(t,e):null;if(typeof e=="number"&&!i)return null;const r=qh(n),s=n.props.offsetParent||r.offsetParent||r.ownerDocument.body;return(0,Cs.offsetXYFromParent)(i||t,s,n.props.scale)}function sM(t,e,n){const i=!(0,bn.isNum)(t.lastX),r=qh(t);return i?{node:r,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:r,deltaX:e-t.lastX,deltaY:n-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:n}}function oM(t,e){const n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}}function aM(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}function qh(t){const e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}var Eu={},wu={};Object.defineProperty(wu,"__esModule",{value:!0});wu.default=lM;function lM(){}Object.defineProperty(Eu,"__esModule",{value:!0});Eu.default=void 0;var lc=cM(re),hn=$h(w0),uM=$h(ca),$t=_t,Hi=_i,uc=vi,go=$h(wu);function $h(t){return t&&t.__esModule?t:{default:t}}function D0(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(D0=function(i){return i?n:e})(t)}function cM(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=D0(e);if(n&&n.has(t))return n.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=r?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(i,s,o):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i}function on(t,e,n){return e=fM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fM(t){var e=hM(t,"string");return typeof e=="symbol"?e:String(e)}function hM(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const Qn={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let Gi=Qn.mouse,Tu=class extends lc.Component{constructor(){super(...arguments),on(this,"dragging",!1),on(this,"lastX",NaN),on(this,"lastY",NaN),on(this,"touchIdentifier",null),on(this,"mounted",!1),on(this,"handleDragStart",e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&typeof e.button=="number"&&e.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:i}=n;if(this.props.disabled||!(e.target instanceof i.defaultView.Node)||this.props.handle&&!(0,$t.matchesSelectorAndParentsTo)(e.target,this.props.handle,n)||this.props.cancel&&(0,$t.matchesSelectorAndParentsTo)(e.target,this.props.cancel,n))return;e.type==="touchstart"&&e.preventDefault();const r=(0,$t.getTouchIdentifier)(e);this.touchIdentifier=r;const s=(0,Hi.getControlPosition)(e,r,this);if(s==null)return;const{x:o,y:a}=s,l=(0,Hi.createCoreData)(this,o,a);(0,go.default)("DraggableCore: handleDragStart: %j",l),(0,go.default)("calling",this.props.onStart),!(this.props.onStart(e,l)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,$t.addUserSelectStyles)(i),this.dragging=!0,this.lastX=o,this.lastY=a,(0,$t.addEvent)(i,Gi.move,this.handleDrag),(0,$t.addEvent)(i,Gi.stop,this.handleDragStop))}),on(this,"handleDrag",e=>{const n=(0,Hi.getControlPosition)(e,this.touchIdentifier,this);if(n==null)return;let{x:i,y:r}=n;if(Array.isArray(this.props.grid)){let a=i-this.lastX,l=r-this.lastY;if([a,l]=(0,Hi.snapToGrid)(this.props.grid,a,l),!a&&!l)return;i=this.lastX+a,r=this.lastY+l}const s=(0,Hi.createCoreData)(this,i,r);if((0,go.default)("DraggableCore: handleDrag: %j",s),this.props.onDrag(e,s)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const l=document.createEvent("MouseEvents");l.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(l)}return}this.lastX=i,this.lastY=r}),on(this,"handleDragStop",e=>{if(!this.dragging)return;const n=(0,Hi.getControlPosition)(e,this.touchIdentifier,this);if(n==null)return;let{x:i,y:r}=n;if(Array.isArray(this.props.grid)){let l=i-this.lastX||0,u=r-this.lastY||0;[l,u]=(0,Hi.snapToGrid)(this.props.grid,l,u),i=this.lastX+l,r=this.lastY+u}const s=(0,Hi.createCoreData)(this,i,r);if(this.props.onStop(e,s)===!1||this.mounted===!1)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,$t.removeUserSelectStyles)(a.ownerDocument),(0,go.default)("DraggableCore: handleDragStop: %j",s),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,go.default)("DraggableCore: Removing handlers"),(0,$t.removeEvent)(a.ownerDocument,Gi.move,this.handleDrag),(0,$t.removeEvent)(a.ownerDocument,Gi.stop,this.handleDragStop))}),on(this,"onMouseDown",e=>(Gi=Qn.mouse,this.handleDragStart(e))),on(this,"onMouseUp",e=>(Gi=Qn.mouse,this.handleDragStop(e))),on(this,"onTouchStart",e=>(Gi=Qn.touch,this.handleDragStart(e))),on(this,"onTouchEnd",e=>(Gi=Qn.touch,this.handleDragStop(e)))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,$t.addEvent)(e,Qn.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:n}=e;(0,$t.removeEvent)(n,Qn.mouse.move,this.handleDrag),(0,$t.removeEvent)(n,Qn.touch.move,this.handleDrag),(0,$t.removeEvent)(n,Qn.mouse.stop,this.handleDragStop),(0,$t.removeEvent)(n,Qn.touch.stop,this.handleDragStop),(0,$t.removeEvent)(e,Qn.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,$t.removeUserSelectStyles)(n)}}findDOMNode(){var e,n;return(e=this.props)!==null&&e!==void 0&&e.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:uM.default.findDOMNode(this)}render(){return lc.cloneElement(lc.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};Eu.default=Tu;on(Tu,"displayName","DraggableCore");on(Tu,"propTypes",{allowAnyClick:hn.default.bool,children:hn.default.node.isRequired,disabled:hn.default.bool,enableUserSelectHack:hn.default.bool,offsetParent:function(t,e){if(t[e]&&t[e].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:hn.default.arrayOf(hn.default.number),handle:hn.default.string,cancel:hn.default.string,nodeRef:hn.default.object,onStart:hn.default.func,onDrag:hn.default.func,onStop:hn.default.func,onMouseDown:hn.default.func,scale:hn.default.number,className:uc.dontSetMe,style:uc.dontSetMe,transform:uc.dontSetMe});on(Tu,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var e=d(re),n=f(w0),i=f(ca),r=f(LS),s=_t,o=_i,a=vi,l=f(Eu),u=f(wu);function f(m){return m&&m.__esModule?m:{default:m}}function h(m){if(typeof WeakMap!="function")return null;var v=new WeakMap,y=new WeakMap;return(h=function(b){return b?y:v})(m)}function d(m,v){if(m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var y=h(v);if(y&&y.has(m))return y.get(m);var b={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in m)if(E!=="default"&&Object.prototype.hasOwnProperty.call(m,E)){var P=T?Object.getOwnPropertyDescriptor(m,E):null;P&&(P.get||P.set)?Object.defineProperty(b,E,P):b[E]=m[E]}return b.default=m,y&&y.set(m,b),b}function g(){return g=Object.assign?Object.assign.bind():function(m){for(var v=1;v<arguments.length;v++){var y=arguments[v];for(var b in y)Object.prototype.hasOwnProperty.call(y,b)&&(m[b]=y[b])}return m},g.apply(this,arguments)}function x(m,v,y){return v=_(v),v in m?Object.defineProperty(m,v,{value:y,enumerable:!0,configurable:!0,writable:!0}):m[v]=y,m}function _(m){var v=p(m,"string");return typeof v=="symbol"?v:String(v)}function p(m,v){if(typeof m!="object"||m===null)return m;var y=m[Symbol.toPrimitive];if(y!==void 0){var b=y.call(m,v);if(typeof b!="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(m)}class c extends e.Component{static getDerivedStateFromProps(v,y){let{position:b}=v,{prevPropsPosition:T}=y;return b&&(!T||b.x!==T.x||b.y!==T.y)?((0,u.default)("Draggable: getDerivedStateFromProps %j",{position:b,prevPropsPosition:T}),{x:b.x,y:b.y,prevPropsPosition:{...b}}):null}constructor(v){super(v),x(this,"onDragStart",(y,b)=>{if((0,u.default)("Draggable: onDragStart: %j",b),this.props.onStart(y,(0,o.createDraggableData)(this,b))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),x(this,"onDrag",(y,b)=>{if(!this.state.dragging)return!1;(0,u.default)("Draggable: onDrag: %j",b);const T=(0,o.createDraggableData)(this,b),E={x:T.x,y:T.y,slackX:0,slackY:0};if(this.props.bounds){const{x:S,y:w}=E;E.x+=this.state.slackX,E.y+=this.state.slackY;const[k,V]=(0,o.getBoundPosition)(this,E.x,E.y);E.x=k,E.y=V,E.slackX=this.state.slackX+(S-E.x),E.slackY=this.state.slackY+(w-E.y),T.x=E.x,T.y=E.y,T.deltaX=E.x-this.state.x,T.deltaY=E.y-this.state.y}if(this.props.onDrag(y,T)===!1)return!1;this.setState(E)}),x(this,"onDragStop",(y,b)=>{if(!this.state.dragging||this.props.onStop(y,(0,o.createDraggableData)(this,b))===!1)return!1;(0,u.default)("Draggable: onDragStop: %j",b);const E={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:S,y:w}=this.props.position;E.x=S,E.y=w}this.setState(E)}),this.state={dragging:!1,dragged:!1,x:v.position?v.position.x:v.defaultPosition.x,y:v.position?v.position.y:v.defaultPosition.y,prevPropsPosition:{...v.position},slackX:0,slackY:0,isElementSVG:!1},v.position&&!(v.onDrag||v.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var v,y;return(v=(y=this.props)===null||y===void 0||(y=y.nodeRef)===null||y===void 0?void 0:y.current)!==null&&v!==void 0?v:i.default.findDOMNode(this)}render(){const{axis:v,bounds:y,children:b,defaultPosition:T,defaultClassName:E,defaultClassNameDragging:P,defaultClassNameDragged:S,position:w,positionOffset:k,scale:V,...ne}=this.props;let D={},z=null;const W=!!!w||this.state.dragging,N=w||T,O={x:(0,o.canDragX)(this)&&W?this.state.x:N.x,y:(0,o.canDragY)(this)&&W?this.state.y:N.y};this.state.isElementSVG?z=(0,s.createSVGTransform)(O,k):D=(0,s.createCSSTransform)(O,k);const U=(0,r.default)(b.props.className||"",E,{[P]:this.state.dragging,[S]:this.state.dragged});return e.createElement(l.default,g({},ne,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),e.cloneElement(e.Children.only(b),{className:U,style:{...b.props.style,...D},transform:z}))}}t.default=c,x(c,"displayName","Draggable"),x(c,"propTypes",{...l.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:a.dontSetMe,style:a.dontSetMe,transform:a.dontSetMe}),x(c,"defaultProps",{...l.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(y0);const{default:N0,DraggableCore:dM}=y0;Mu.exports=N0;Mu.exports.default=N0;Mu.exports.DraggableCore=dM;var pM=Mu.exports;const mM=ng(pM);var Et=function(){return Et=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Et.apply(this,arguments)},wp={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},Tp={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},za={width:"20px",height:"20px",position:"absolute",zIndex:1},gM={top:Et(Et({},wp),{top:"-5px"}),right:Et(Et({},Tp),{left:void 0,right:"-5px"}),bottom:Et(Et({},wp),{top:void 0,bottom:"-5px"}),left:Et(Et({},Tp),{left:"-5px"}),topRight:Et(Et({},za),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:Et(Et({},za),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:Et(Et({},za),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:Et(Et({},za),{left:"-10px",top:"-10px",cursor:"nw-resize"})},vM=re.memo(function(t){var e=t.onResizeStart,n=t.direction,i=t.children,r=t.replaceStyles,s=t.className,o=re.useCallback(function(u){e(u,n)},[e,n]),a=re.useCallback(function(u){e(u,n)},[e,n]),l=re.useMemo(function(){return Et(Et({position:"absolute",userSelect:"none"},gM[n]),r??{})},[r,n]);return C.jsx("div",{className:s||void 0,style:l,onMouseDown:o,onTouchStart:a,children:i})}),_M=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function i(){this.constructor=e}e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}(),ci=function(){return ci=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},ci.apply(this,arguments)},xM={width:"auto",height:"auto"},ka=function(t,e,n){return Math.max(Math.min(t,n),e)},bp=function(t,e,n){var i=Math.round(t/e);return i*e+n*(i-1)},Zr=function(t,e){return new RegExp(t,"i").test(e)},Ba=function(t){return!!(t.touches&&t.touches.length)},yM=function(t){return!!((t.clientX||t.clientX===0)&&(t.clientY||t.clientY===0))},Ap=function(t,e,n){n===void 0&&(n=0);var i=e.reduce(function(s,o,a){return Math.abs(o-t)<Math.abs(e[s]-t)?a:s},0),r=Math.abs(e[i]-t);return n===0||r<n?e[i]:t},cc=function(t){return t=t.toString(),t==="auto"||t.endsWith("px")||t.endsWith("%")||t.endsWith("vh")||t.endsWith("vw")||t.endsWith("vmax")||t.endsWith("vmin")?t:"".concat(t,"px")},Ha=function(t,e,n,i){if(t&&typeof t=="string"){if(t.endsWith("px"))return Number(t.replace("px",""));if(t.endsWith("%")){var r=Number(t.replace("%",""))/100;return e*r}if(t.endsWith("vw")){var r=Number(t.replace("vw",""))/100;return n*r}if(t.endsWith("vh")){var r=Number(t.replace("vh",""))/100;return i*r}}return t},SM=function(t,e,n,i,r,s,o){return i=Ha(i,t.width,e,n),r=Ha(r,t.height,e,n),s=Ha(s,t.width,e,n),o=Ha(o,t.height,e,n),{maxWidth:typeof i>"u"?void 0:Number(i),maxHeight:typeof r>"u"?void 0:Number(r),minWidth:typeof s>"u"?void 0:Number(s),minHeight:typeof o>"u"?void 0:Number(o)}},MM=function(t){return Array.isArray(t)?t:[t,t]},EM=["as","ref","style","className","grid","gridGap","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Rp="__resizable_base__",wM=function(t){_M(e,t);function e(n){var i,r,s,o,a=t.call(this,n)||this;return a.ratio=1,a.resizable=null,a.parentLeft=0,a.parentTop=0,a.resizableLeft=0,a.resizableRight=0,a.resizableTop=0,a.resizableBottom=0,a.targetLeft=0,a.targetTop=0,a.delta={width:0,height:0},a.appendBase=function(){if(!a.resizable||!a.window)return null;var l=a.parentNode;if(!l)return null;var u=a.window.document.createElement("div");return u.style.width="100%",u.style.height="100%",u.style.position="absolute",u.style.transform="scale(0, 0)",u.style.left="0",u.style.flex="0 0 100%",u.classList?u.classList.add(Rp):u.className+=Rp,l.appendChild(u),u},a.removeBase=function(l){var u=a.parentNode;u&&u.removeChild(l)},a.state={isResizing:!1,width:(r=(i=a.propsSize)===null||i===void 0?void 0:i.width)!==null&&r!==void 0?r:"auto",height:(o=(s=a.propsSize)===null||s===void 0?void 0:s.height)!==null&&o!==void 0?o:"auto",direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},a.onResizeStart=a.onResizeStart.bind(a),a.onMouseMove=a.onMouseMove.bind(a),a.onMouseUp=a.onMouseUp.bind(a),a}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"window",{get:function(){return!this.resizable||!this.resizable.ownerDocument?null:this.resizable.ownerDocument.defaultView},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||xM},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){var n=0,i=0;if(this.resizable&&this.window){var r=this.resizable.offsetWidth,s=this.resizable.offsetHeight,o=this.resizable.style.position;o!=="relative"&&(this.resizable.style.position="relative"),n=this.resizable.style.width!=="auto"?this.resizable.offsetWidth:r,i=this.resizable.style.height!=="auto"?this.resizable.offsetHeight:s,this.resizable.style.position=o}return{width:n,height:i}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeStyle",{get:function(){var n=this,i=this.props.size,r=function(a){var l;if(typeof n.state[a]>"u"||n.state[a]==="auto")return"auto";if(n.propsSize&&n.propsSize[a]&&(!((l=n.propsSize[a])===null||l===void 0)&&l.toString().endsWith("%"))){if(n.state[a].toString().endsWith("%"))return n.state[a].toString();var u=n.getParentSize(),f=Number(n.state[a].toString().replace("px","")),h=f/u[a]*100;return"".concat(h,"%")}return cc(n.state[a])},s=i&&typeof i.width<"u"&&!this.state.isResizing?cc(i.width):r("width"),o=i&&typeof i.height<"u"&&!this.state.isResizing?cc(i.height):r("height");return{width:s,height:o}},enumerable:!1,configurable:!0}),e.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var n=this.appendBase();if(!n)return{width:0,height:0};var i=!1,r=this.parentNode.style.flexWrap;r!=="wrap"&&(i=!0,this.parentNode.style.flexWrap="wrap"),n.style.position="relative",n.style.minWidth="100%",n.style.minHeight="100%";var s={width:n.offsetWidth,height:n.offsetHeight};return i&&(this.parentNode.style.flexWrap=r),this.removeBase(n),s},e.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},e.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},e.prototype.componentDidMount=function(){if(!(!this.resizable||!this.window)){var n=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:n.flexBasis!=="auto"?n.flexBasis:void 0})}},e.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},e.prototype.createSizeForCssProperty=function(n,i){var r=this.propsSize&&this.propsSize[i];return this.state[i]==="auto"&&this.state.original[i]===n&&(typeof r>"u"||r==="auto")?"auto":n},e.prototype.calculateNewMaxFromBoundary=function(n,i){var r=this.props.boundsByDirection,s=this.state.direction,o=r&&Zr("left",s),a=r&&Zr("top",s),l,u;if(this.props.bounds==="parent"){var f=this.parentNode;f&&(l=o?this.resizableRight-this.parentLeft:f.offsetWidth+(this.parentLeft-this.resizableLeft),u=a?this.resizableBottom-this.parentTop:f.offsetHeight+(this.parentTop-this.resizableTop))}else this.props.bounds==="window"?this.window&&(l=o?this.resizableRight:this.window.innerWidth-this.resizableLeft,u=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(l=o?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),u=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return l&&Number.isFinite(l)&&(n=n&&n<l?n:l),u&&Number.isFinite(u)&&(i=i&&i<u?i:u),{maxWidth:n,maxHeight:i}},e.prototype.calculateNewSizeFromDirection=function(n,i){var r=this.props.scale||1,s=MM(this.props.resizeRatio||1),o=s[0],a=s[1],l=this.state,u=l.direction,f=l.original,h=this.props,d=h.lockAspectRatio,g=h.lockAspectRatioExtraHeight,x=h.lockAspectRatioExtraWidth,_=f.width,p=f.height,c=g||0,m=x||0;return Zr("right",u)&&(_=f.width+(n-f.x)*o/r,d&&(p=(_-m)/this.ratio+c)),Zr("left",u)&&(_=f.width-(n-f.x)*o/r,d&&(p=(_-m)/this.ratio+c)),Zr("bottom",u)&&(p=f.height+(i-f.y)*a/r,d&&(_=(p-c)*this.ratio+m)),Zr("top",u)&&(p=f.height-(i-f.y)*a/r,d&&(_=(p-c)*this.ratio+m)),{newWidth:_,newHeight:p}},e.prototype.calculateNewSizeFromAspectRatio=function(n,i,r,s){var o=this.props,a=o.lockAspectRatio,l=o.lockAspectRatioExtraHeight,u=o.lockAspectRatioExtraWidth,f=typeof s.width>"u"?10:s.width,h=typeof r.width>"u"||r.width<0?n:r.width,d=typeof s.height>"u"?10:s.height,g=typeof r.height>"u"||r.height<0?i:r.height,x=l||0,_=u||0;if(a){var p=(d-x)*this.ratio+_,c=(g-x)*this.ratio+_,m=(f-_)/this.ratio+x,v=(h-_)/this.ratio+x,y=Math.max(f,p),b=Math.min(h,c),T=Math.max(d,m),E=Math.min(g,v);n=ka(n,y,b),i=ka(i,T,E)}else n=ka(n,f,h),i=ka(i,d,g);return{newWidth:n,newHeight:i}},e.prototype.setBoundingClientRect=function(){var n=1/(this.props.scale||1);if(this.props.bounds==="parent"){var i=this.parentNode;if(i){var r=i.getBoundingClientRect();this.parentLeft=r.left*n,this.parentTop=r.top*n}}if(this.props.bounds&&typeof this.props.bounds!="string"){var s=this.props.bounds.getBoundingClientRect();this.targetLeft=s.left*n,this.targetTop=s.top*n}if(this.resizable){var o=this.resizable.getBoundingClientRect(),a=o.left,l=o.top,u=o.right,f=o.bottom;this.resizableLeft=a*n,this.resizableRight=u*n,this.resizableTop=l*n,this.resizableBottom=f*n}},e.prototype.onResizeStart=function(n,i){if(!(!this.resizable||!this.window)){var r=0,s=0;if(n.nativeEvent&&yM(n.nativeEvent)?(r=n.nativeEvent.clientX,s=n.nativeEvent.clientY):n.nativeEvent&&Ba(n.nativeEvent)&&(r=n.nativeEvent.touches[0].clientX,s=n.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){var o=this.props.onResizeStart(n,i,this.resizable);if(o===!1)return}this.props.size&&(typeof this.props.size.height<"u"&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),typeof this.props.size.width<"u"&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio=typeof this.props.lockAspectRatio=="number"?this.props.lockAspectRatio:this.size.width/this.size.height;var a,l=this.window.getComputedStyle(this.resizable);if(l.flexBasis!=="auto"){var u=this.parentNode;if(u){var f=this.window.getComputedStyle(u).flexDirection;this.flexDir=f.startsWith("row")?"row":"column",a=l.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var h={original:{x:r,y:s,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:ci(ci({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(n.target).cursor||"auto"}),direction:i,flexBasis:a};this.setState(h)}},e.prototype.onMouseMove=function(n){var i=this;if(!(!this.state.isResizing||!this.resizable||!this.window)){if(this.window.TouchEvent&&Ba(n))try{n.preventDefault(),n.stopPropagation()}catch{}var r=this.props,s=r.maxWidth,o=r.maxHeight,a=r.minWidth,l=r.minHeight,u=Ba(n)?n.touches[0].clientX:n.clientX,f=Ba(n)?n.touches[0].clientY:n.clientY,h=this.state,d=h.direction,g=h.original,x=h.width,_=h.height,p=this.getParentSize(),c=SM(p,this.window.innerWidth,this.window.innerHeight,s,o,a,l);s=c.maxWidth,o=c.maxHeight,a=c.minWidth,l=c.minHeight;var m=this.calculateNewSizeFromDirection(u,f),v=m.newHeight,y=m.newWidth,b=this.calculateNewMaxFromBoundary(s,o);this.props.snap&&this.props.snap.x&&(y=Ap(y,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(v=Ap(v,this.props.snap.y,this.props.snapGap));var T=this.calculateNewSizeFromAspectRatio(y,v,{width:b.maxWidth,height:b.maxHeight},{width:a,height:l});if(y=T.newWidth,v=T.newHeight,this.props.grid){var E=bp(y,this.props.grid[0],this.props.gridGap?this.props.gridGap[0]:0),P=bp(v,this.props.grid[1],this.props.gridGap?this.props.gridGap[1]:0),S=this.props.snapGap||0,w=S===0||Math.abs(E-y)<=S?E:y,k=S===0||Math.abs(P-v)<=S?P:v;y=w,v=k}var V={width:y-g.width,height:v-g.height};if(this.delta=V,x&&typeof x=="string"){if(x.endsWith("%")){var ne=y/p.width*100;y="".concat(ne,"%")}else if(x.endsWith("vw")){var D=y/this.window.innerWidth*100;y="".concat(D,"vw")}else if(x.endsWith("vh")){var z=y/this.window.innerHeight*100;y="".concat(z,"vh")}}if(_&&typeof _=="string"){if(_.endsWith("%")){var ne=v/p.height*100;v="".concat(ne,"%")}else if(_.endsWith("vw")){var D=v/this.window.innerWidth*100;v="".concat(D,"vw")}else if(_.endsWith("vh")){var z=v/this.window.innerHeight*100;v="".concat(z,"vh")}}var H={width:this.createSizeForCssProperty(y,"width"),height:this.createSizeForCssProperty(v,"height")};this.flexDir==="row"?H.flexBasis=H.width:this.flexDir==="column"&&(H.flexBasis=H.height);var W=this.state.width!==H.width,N=this.state.height!==H.height,O=this.state.flexBasis!==H.flexBasis,U=W||N||O;U&&ca.flushSync(function(){i.setState(H)}),this.props.onResize&&U&&this.props.onResize(n,d,this.resizable,V)}},e.prototype.onMouseUp=function(n){var i,r,s=this.state,o=s.isResizing,a=s.direction;s.original,!(!o||!this.resizable)&&(this.props.onResizeStop&&this.props.onResizeStop(n,a,this.resizable,this.delta),this.props.size&&this.setState({width:(i=this.props.size.width)!==null&&i!==void 0?i:"auto",height:(r=this.props.size.height)!==null&&r!==void 0?r:"auto"}),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:ci(ci({},this.state.backgroundStyle),{cursor:"auto"})}))},e.prototype.updateSize=function(n){var i,r;this.setState({width:(i=n.width)!==null&&i!==void 0?i:"auto",height:(r=n.height)!==null&&r!==void 0?r:"auto"})},e.prototype.renderResizer=function(){var n=this,i=this.props,r=i.enable,s=i.handleStyles,o=i.handleClasses,a=i.handleWrapperStyle,l=i.handleWrapperClass,u=i.handleComponent;if(!r)return null;var f=Object.keys(r).map(function(h){return r[h]!==!1?C.jsx(vM,{direction:h,onResizeStart:n.onResizeStart,replaceStyles:s&&s[h],className:o&&o[h],children:u&&u[h]?u[h]:null},h):null});return C.jsx("div",{className:l,style:a,children:f})},e.prototype.render=function(){var n=this,i=Object.keys(this.props).reduce(function(o,a){return EM.indexOf(a)!==-1||(o[a]=n.props[a]),o},{}),r=ci(ci(ci({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(r.flexBasis=this.state.flexBasis);var s=this.props.as||"div";return C.jsxs(s,ci({style:r,className:this.props.className},i,{ref:function(o){o&&(n.resizable=o)},children:[this.state.isResizing&&C.jsx("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer()]}))},e.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],gridGap:[0,0],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},e}(re.PureComponent);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Bf=function(t,e){return Bf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)i.hasOwnProperty(r)&&(n[r]=i[r])},Bf(t,e)};function TM(t,e){Bf(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Tt=function(){return Tt=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Tt.apply(this,arguments)};function bM(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}var AM={width:"auto",height:"auto",display:"inline-block",position:"absolute",top:0,left:0},RM=function(t){return{bottom:t,bottomLeft:t,bottomRight:t,left:t,right:t,top:t,topLeft:t,topRight:t}},CM=function(t){TM(e,t);function e(n){var i=t.call(this,n)||this;return i.resizingPosition={x:0,y:0},i.offsetFromParent={left:0,top:0},i.resizableElement={current:null},i.originalPosition={x:0,y:0},i.state={resizing:!1,bounds:{top:0,right:0,bottom:0,left:0},maxWidth:n.maxWidth,maxHeight:n.maxHeight},i.onResizeStart=i.onResizeStart.bind(i),i.onResize=i.onResize.bind(i),i.onResizeStop=i.onResizeStop.bind(i),i.onDragStart=i.onDragStart.bind(i),i.onDrag=i.onDrag.bind(i),i.onDragStop=i.onDragStop.bind(i),i.getMaxSizesFromProps=i.getMaxSizesFromProps.bind(i),i}return e.prototype.componentDidMount=function(){this.updateOffsetFromParent();var n=this.offsetFromParent,i=n.left,r=n.top,s=this.getDraggablePosition(),o=s.x,a=s.y;this.draggable.setState({x:o-i,y:a-r}),this.forceUpdate()},e.prototype.getDraggablePosition=function(){var n=this.draggable.state,i=n.x,r=n.y;return{x:i,y:r}},e.prototype.getParent=function(){return this.resizable&&this.resizable.parentNode},e.prototype.getParentSize=function(){return this.resizable.getParentSize()},e.prototype.getMaxSizesFromProps=function(){var n=typeof this.props.maxWidth>"u"?Number.MAX_SAFE_INTEGER:this.props.maxWidth,i=typeof this.props.maxHeight>"u"?Number.MAX_SAFE_INTEGER:this.props.maxHeight;return{maxWidth:n,maxHeight:i}},e.prototype.getSelfElement=function(){return this.resizable&&this.resizable.resizable},e.prototype.getOffsetHeight=function(n){var i=this.props.scale;switch(this.props.bounds){case"window":return window.innerHeight/i;case"body":return document.body.offsetHeight/i;default:return n.offsetHeight}},e.prototype.getOffsetWidth=function(n){var i=this.props.scale;switch(this.props.bounds){case"window":return window.innerWidth/i;case"body":return document.body.offsetWidth/i;default:return n.offsetWidth}},e.prototype.onDragStart=function(n,i){this.props.onDragStart&&this.props.onDragStart(n,i);var r=this.getDraggablePosition();if(this.originalPosition=r,!!this.props.bounds){var s=this.getParent(),o=this.props.scale,a;if(this.props.bounds==="parent")a=s;else if(this.props.bounds==="body"){var l=s.getBoundingClientRect(),u=l.left,f=l.top,h=document.body.getBoundingClientRect(),d=-(u-s.offsetLeft*o-h.left)/o,g=-(f-s.offsetTop*o-h.top)/o,x=(document.body.offsetWidth-this.resizable.size.width*o)/o+d,_=(document.body.offsetHeight-this.resizable.size.height*o)/o+g;return this.setState({bounds:{top:g,right:x,bottom:_,left:d}})}else if(this.props.bounds==="window"){if(!this.resizable)return;var p=s.getBoundingClientRect(),c=p.left,m=p.top,v=-(c-s.offsetLeft*o)/o,y=-(m-s.offsetTop*o)/o,x=(window.innerWidth-this.resizable.size.width*o)/o+v,_=(window.innerHeight-this.resizable.size.height*o)/o+y;return this.setState({bounds:{top:y,right:x,bottom:_,left:v}})}else typeof this.props.bounds=="string"?a=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(a=this.props.bounds);if(!(!(a instanceof HTMLElement)||!(s instanceof HTMLElement))){var b=a.getBoundingClientRect(),T=b.left,E=b.top,P=s.getBoundingClientRect(),S=P.left,w=P.top,k=(T-S)/o,V=E-w;if(this.resizable){this.updateOffsetFromParent();var ne=this.offsetFromParent;this.setState({bounds:{top:V-ne.top,right:k+(a.offsetWidth-this.resizable.size.width)-ne.left/o,bottom:V+(a.offsetHeight-this.resizable.size.height)-ne.top,left:k-ne.left/o}})}}}},e.prototype.onDrag=function(n,i){if(this.props.onDrag){var r=this.offsetFromParent,s=r.left,o=r.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDrag(n,Tt(Tt({},i),{x:i.x+s,y:i.y+o}));if(this.props.dragAxis==="x")return this.props.onDrag(n,Tt(Tt({},i),{x:i.x+s,y:this.originalPosition.y+o,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDrag(n,Tt(Tt({},i),{x:this.originalPosition.x+s,y:i.y+o,deltaX:0}))}},e.prototype.onDragStop=function(n,i){if(this.props.onDragStop){var r=this.offsetFromParent,s=r.left,o=r.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDragStop(n,Tt(Tt({},i),{x:i.x+s,y:i.y+o}));if(this.props.dragAxis==="x")return this.props.onDragStop(n,Tt(Tt({},i),{x:i.x+s,y:this.originalPosition.y+o,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDragStop(n,Tt(Tt({},i),{x:this.originalPosition.x+s,y:i.y+o,deltaX:0}))}},e.prototype.onResizeStart=function(n,i,r){n.stopPropagation(),this.setState({resizing:!0});var s=this.props.scale,o=this.offsetFromParent,a=this.getDraggablePosition();if(this.resizingPosition={x:a.x+o.left,y:a.y+o.top},this.originalPosition=a,this.props.bounds){var l=this.getParent(),u=void 0;this.props.bounds==="parent"?u=l:this.props.bounds==="body"?u=document.body:this.props.bounds==="window"?u=window:typeof this.props.bounds=="string"?u=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(u=this.props.bounds);var f=this.getSelfElement();if(f instanceof Element&&(u instanceof HTMLElement||u===window)&&l instanceof HTMLElement){var h=this.getMaxSizesFromProps(),d=h.maxWidth,g=h.maxHeight,x=this.getParentSize();if(d&&typeof d=="string")if(d.endsWith("%")){var _=Number(d.replace("%",""))/100;d=x.width*_}else d.endsWith("px")&&(d=Number(d.replace("px","")));if(g&&typeof g=="string")if(g.endsWith("%")){var _=Number(g.replace("%",""))/100;g=x.height*_}else g.endsWith("px")&&(g=Number(g.replace("px","")));var p=f.getBoundingClientRect(),c=p.left,m=p.top,v=this.props.bounds==="window"?{left:0,top:0}:u.getBoundingClientRect(),y=v.left,b=v.top,T=this.getOffsetWidth(u),E=this.getOffsetHeight(u),P=i.toLowerCase().endsWith("left"),S=i.toLowerCase().endsWith("right"),w=i.startsWith("top"),k=i.startsWith("bottom");if((P||w)&&this.resizable){var V=(c-y)/s+this.resizable.size.width;this.setState({maxWidth:V>Number(d)?d:V})}if(S||this.props.lockAspectRatio&&!P&&!w){var V=T+(y-c)/s;this.setState({maxWidth:V>Number(d)?d:V})}if((w||P)&&this.resizable){var V=(m-b)/s+this.resizable.size.height;this.setState({maxHeight:V>Number(g)?g:V})}if(k||this.props.lockAspectRatio&&!w&&!P){var V=E+(b-m)/s;this.setState({maxHeight:V>Number(g)?g:V})}}}else this.setState({maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight});this.props.onResizeStart&&this.props.onResizeStart(n,i,r)},e.prototype.onResize=function(n,i,r,s){var o=this,a={x:this.originalPosition.x,y:this.originalPosition.y},l=-s.width,u=-s.height,f=["top","left","topLeft","bottomLeft","topRight"];f.includes(i)&&(i==="bottomLeft"?a.x+=l:(i==="topRight"||(a.x+=l),a.y+=u));var h=this.draggable.state;(a.x!==h.x||a.y!==h.y)&&ca.flushSync(function(){o.draggable.setState(a)}),this.updateOffsetFromParent();var d=this.offsetFromParent,g=this.getDraggablePosition().x+d.left,x=this.getDraggablePosition().y+d.top;this.resizingPosition={x:g,y:x},this.props.onResize&&this.props.onResize(n,i,r,s,{x:g,y:x})},e.prototype.onResizeStop=function(n,i,r,s){this.setState({resizing:!1});var o=this.getMaxSizesFromProps(),a=o.maxWidth,l=o.maxHeight;this.setState({maxWidth:a,maxHeight:l}),this.props.onResizeStop&&this.props.onResizeStop(n,i,r,s,this.resizingPosition)},e.prototype.updateSize=function(n){this.resizable&&this.resizable.updateSize({width:n.width,height:n.height})},e.prototype.updatePosition=function(n){this.draggable.setState(n)},e.prototype.updateOffsetFromParent=function(){var n=this.props.scale,i=this.getParent(),r=this.getSelfElement();if(!i||r===null)return{top:0,left:0};var s=i.getBoundingClientRect(),o=s.left,a=s.top,l=r.getBoundingClientRect(),u=this.getDraggablePosition(),f=i.scrollLeft,h=i.scrollTop;this.offsetFromParent={left:l.left-o+f-u.x*n,top:l.top-a+h-u.y*n}},e.prototype.render=function(){var n=this,i=this.props,r=i.disableDragging,s=i.style,o=i.dragHandleClassName,a=i.position,l=i.onMouseDown,u=i.onMouseUp,f=i.dragAxis,h=i.dragGrid,d=i.bounds,g=i.enableUserSelectHack,x=i.cancel,_=i.children;i.onResizeStart,i.onResize,i.onResizeStop,i.onDragStart,i.onDrag,i.onDragStop;var p=i.resizeHandleStyles,c=i.resizeHandleClasses,m=i.resizeHandleComponent,v=i.enableResizing,y=i.resizeGrid,b=i.resizeHandleWrapperClass,T=i.resizeHandleWrapperStyle,E=i.scale,P=i.allowAnyClick,S=i.dragPositionOffset,w=bM(i,["disableDragging","style","dragHandleClassName","position","onMouseDown","onMouseUp","dragAxis","dragGrid","bounds","enableUserSelectHack","cancel","children","onResizeStart","onResize","onResizeStop","onDragStart","onDrag","onDragStop","resizeHandleStyles","resizeHandleClasses","resizeHandleComponent","enableResizing","resizeGrid","resizeHandleWrapperClass","resizeHandleWrapperStyle","scale","allowAnyClick","dragPositionOffset"]),k=this.props.default?Tt({},this.props.default):void 0;delete w.default;var V=r||o?{cursor:"auto"}:{cursor:"move"},ne=Tt(Tt(Tt({},AM),V),s),D=this.offsetFromParent,z=D.left,H=D.top,W;a&&(W={x:a.x-z,y:a.y-H});var N=this.state.resizing?void 0:W,O=this.state.resizing?"both":f;return re.createElement(mM,{ref:function(U){U&&(n.draggable=U)},handle:o?".".concat(o):void 0,defaultPosition:k,onMouseDown:l,onMouseUp:u,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,axis:O,disabled:r,grid:h,bounds:d?this.state.bounds:void 0,position:N,enableUserSelectHack:g,cancel:x,scale:E,allowAnyClick:P,nodeRef:this.resizableElement,positionOffset:S},re.createElement(wM,Tt({},w,{ref:function(U){U&&(n.resizable=U,n.resizableElement.current=U.resizable)},defaultSize:k,size:this.props.size,enable:typeof v=="boolean"?RM(v):v,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,style:ne,minWidth:this.props.minWidth,minHeight:this.props.minHeight,maxWidth:this.state.resizing?this.state.maxWidth:this.props.maxWidth,maxHeight:this.state.resizing?this.state.maxHeight:this.props.maxHeight,grid:y,handleWrapperClass:b,handleWrapperStyle:T,lockAspectRatio:this.props.lockAspectRatio,lockAspectRatioExtraWidth:this.props.lockAspectRatioExtraWidth,lockAspectRatioExtraHeight:this.props.lockAspectRatioExtraHeight,handleStyles:p,handleClasses:c,handleComponent:m,scale:this.props.scale}),_))},e.defaultProps={maxWidth:Number.MAX_SAFE_INTEGER,maxHeight:Number.MAX_SAFE_INTEGER,scale:1,onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},onDragStart:function(){},onDrag:function(){},onDragStop:function(){}},e}(re.PureComponent);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="160",PM=0,Cp=1,LM=2,U0=1,DM=2,Ti=3,mr=0,yn=1,di=2,Di=0,Or=1,Rn=2,Pp=3,Lp=4,NM=5,Cr=100,UM=101,IM=102,Dp=103,Np=104,FM=200,OM=201,zM=202,kM=203,Hf=204,Gf=205,BM=206,HM=207,GM=208,VM=209,WM=210,XM=211,jM=212,YM=213,qM=214,$M=0,KM=1,QM=2,Jl=3,ZM=4,JM=5,eE=6,tE=7,I0=0,nE=1,iE=2,fr=0,rE=1,sE=2,oE=3,F0=4,aE=5,lE=6,O0=300,js=301,Ys=302,Vf=303,Wf=304,bu=306,Xf=1e3,Bt=1001,jf=1002,ln=1003,Up=1004,fc=1005,kt=1006,uE=1007,qs=1008,hr=1009,cE=1010,fE=1011,Qh=1012,z0=1013,tr=1014,nr=1015,Ni=1016,k0=1017,B0=1018,zr=1020,hE=1021,ni=1023,dE=1024,pE=1025,kr=1026,$s=1027,mE=1028,H0=1029,gE=1030,G0=1031,V0=1033,hc=33776,dc=33777,pc=33778,mc=33779,Ip=35840,Fp=35841,Op=35842,zp=35843,W0=36196,kp=37492,Bp=37496,Hp=37808,Gp=37809,Vp=37810,Wp=37811,Xp=37812,jp=37813,Yp=37814,qp=37815,$p=37816,Kp=37817,Qp=37818,Zp=37819,Jp=37820,em=37821,gc=36492,tm=36494,nm=36495,vE=36283,im=36284,rm=36285,sm=36286,X0=3e3,Br=3001,_E=3200,xE=3201,yE=0,SE=1,Gn="",At="srgb",zi="srgb-linear",Zh="display-p3",Au="display-p3-linear",eu="linear",lt="srgb",tu="rec709",nu="p3",Jr=7680,om=519,ME=512,EE=513,wE=514,j0=515,TE=516,bE=517,AE=518,RE=519,am=35044,lm="300 es",Yf=1035,Pi=2e3,iu=2001;class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=Math.PI/180,qf=180/Math.PI;function ha(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function mn(t,e,n){return Math.max(e,Math.min(n,t))}function CE(t,e){return(t%e+e)%e}function _c(t,e,n){return(1-n)*t+n*e}function um(t){return(t&t-1)===0&&t!==0}function $f(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,u){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],g=i[5],x=i[8],_=r[0],p=r[3],c=r[6],m=r[1],v=r[4],y=r[7],b=r[2],T=r[5],E=r[8];return s[0]=o*_+a*m+l*b,s[3]=o*p+a*v+l*T,s[6]=o*c+a*y+l*E,s[1]=u*_+f*m+h*b,s[4]=u*p+f*v+h*T,s[7]=u*c+f*y+h*E,s[2]=d*_+g*m+x*b,s[5]=d*p+g*v+x*T,s[8]=d*c+g*y+x*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,g=u*s-o*l,x=n*h+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*u-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=g*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new qe;function Y0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ra(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PE(){const t=ra("canvas");return t.style.display="block",t}const cm={};function ko(t){t in cm||(cm[t]=!0,console.warn(t))}const fm=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hm=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ga={[zi]:{transfer:eu,primaries:tu,toReference:t=>t,fromReference:t=>t},[At]:{transfer:lt,primaries:tu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Au]:{transfer:eu,primaries:nu,toReference:t=>t.applyMatrix3(hm),fromReference:t=>t.applyMatrix3(fm)},[Zh]:{transfer:lt,primaries:nu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(hm),fromReference:t=>t.applyMatrix3(fm).convertLinearToSRGB()}},LE=new Set([zi,Au]),st={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!LE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ga[e].toReference,r=Ga[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ga[t].primaries},getTransfer:function(t){return t===Gn?eu:Ga[t].transfer}};function zs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let es;class q0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=ra("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ra("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zs(n[i]/255)*255):n[i]=zs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DE=0;class $0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=ha(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sc(r[o].image)):s.push(Sc(r[o]))}else s=Sc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Sc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?q0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NE=0;class nn extends no{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Bt,r=Bt,s=kt,o=qs,a=ni,l=hr,u=nn.DEFAULT_ANISOTROPY,f=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=ha(),this.name="",this.source=new $0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Br?At:Gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xf:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xf:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Br:X0}set encoding(e){ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Br?At:Gn}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=O0;nn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],g=l[5],x=l[9],_=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+_)<.1&&Math.abs(x+p)<.1&&Math.abs(u+g+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,y=(g+1)/2,b=(c+1)/2,T=(f+d)/4,E=(h+_)/4,P=(x+p)/4;return v>y&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=E/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=E/s,r=P/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-x)*(p-x)+(h-_)*(h-_)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(p-x)/m,this.y=(h-_)/m,this.z=(d-f)/m,this.w=Math.acos((u+g+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UE extends no{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ko("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Br?At:Gn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends UE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class K0 extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IE extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class io{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],g=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=g,e[n+2]=x,e[n+3]=_;return}if(h!==_||l!==d||u!==g||f!==x){let p=1-a;const c=l*d+u*g+f*x+h*_,m=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const b=Math.sqrt(v),T=Math.atan2(b,c*m);p=Math.sin(p*T)/b,a=Math.sin(a*T)/b}const y=a*m;if(l=l*p+d*y,u=u*p+g*y,f=f*p+x*y,h=h*p+_*y,p===1-a){const b=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=b,u*=b,f*=b,h*=b}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*g-u*d,e[n+1]=l*x+f*d+u*h-a*g,e[n+2]=u*x+f*g+a*d-l*h,e[n+3]=f*x-a*h-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*g*x,this._y=u*g*h-d*f*x,this._z=u*f*x+d*g*h,this._w=u*f*h-d*g*x;break;case"YXZ":this._x=d*f*h+u*g*x,this._y=u*g*h-d*f*x,this._z=u*f*x-d*g*h,this._w=u*f*h+d*g*x;break;case"ZXY":this._x=d*f*h-u*g*x,this._y=u*g*h+d*f*x,this._z=u*f*x+d*g*h,this._w=u*f*h-d*g*x;break;case"ZYX":this._x=d*f*h-u*g*x,this._y=u*g*h+d*f*x,this._z=u*f*x-d*g*h,this._w=u*f*h+d*g*x;break;case"YZX":this._x=d*f*h+u*g*x,this._y=u*g*h+d*f*x,this._z=u*f*x-d*g*h,this._w=u*f*h-d*g*x;break;case"XZY":this._x=d*f*h-u*g*x,this._y=u*g*h-d*f*x,this._z=u*f*x+d*g*h,this._w=u*f*h+d*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*f,this.y=i+l*f+a*u-s*h,this.z=r+l*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mc=new G,dm=new io;class $r{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Wa.subVectors(this.max,_o),ts.subVectors(e.a,_o),ns.subVectors(e.b,_o),is.subVectors(e.c,_o),Vi.subVectors(ns,ts),Wi.subVectors(is,ns),Sr.subVectors(ts,is);let n=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-Sr.z,Sr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,Sr.z,0,-Sr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-Sr.y,Sr.x,0];return!Ec(n,ts,ns,is,Wa)||(n=[1,0,0,0,1,0,0,0,1],!Ec(n,ts,ns,is,Wa))?!1:(Xa.crossVectors(Vi,Wi),n=[Xa.x,Xa.y,Xa.z],Ec(n,ts,ns,is,Wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new G,new G,new G,new G,new G,new G,new G,new G],qn=new G,Va=new $r,ts=new G,ns=new G,is=new G,Vi=new G,Wi=new G,Sr=new G,_o=new G,Wa=new G,Xa=new G,Mr=new G;function Ec(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Mr.fromArray(t,s);const a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),u=n.dot(Mr),f=i.dot(Mr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const FE=new $r,xo=new G,wc=new G;class ro{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):FE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const n=xo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(wc)),this.expandByPoint(xo.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new G,Tc=new G,ja=new G,Xi=new G,bc=new G,Ya=new G,Ac=new G;class Q0{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tc.copy(e).add(n).multiplyScalar(.5),ja.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(Tc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ja),a=Xi.dot(this.direction),l=-Xi.dot(ja),u=Xi.lengthSq(),f=Math.abs(1-o*o);let h,d,g,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const _=1/f;h*=_,d*=_,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+u;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+u):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tc).addScaledVector(ja,d),g}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){bc.subVectors(n,e),Ya.subVectors(i,e),Ac.crossVectors(bc,Ya);let o=this.direction.dot(Ac),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(Xi,Ya));if(l<0)return null;const u=a*this.direction.dot(bc.cross(Xi));if(u<0||l+u>o)return null;const f=-a*Xi.dot(Ac);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,o,a,l,u,f,h,d,g,x,_,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,g,x,_,p)}set(e,n,i,r,s,o,a,l,u,f,h,d,g,x,_,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=g,c[7]=x,c[11]=_,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,g=o*h,x=a*f,_=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=g+x*u,n[5]=d-_*u,n[9]=-a*l,n[2]=_-d*u,n[6]=x+g*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,x=u*f,_=u*h;n[0]=d+_*a,n[4]=x*a-g,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=g*a-x,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,x=u*f,_=u*h;n[0]=d-_*a,n[4]=-o*h,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*f,n[9]=_-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,g=o*h,x=a*f,_=a*h;n[0]=l*f,n[4]=x*u-g,n[8]=d*u+_,n[1]=l*h,n[5]=_*u+d,n[9]=g*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,x=a*l,_=a*u;n[0]=l*f,n[4]=_-d*h,n[8]=x*h+g,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=g*h+x,n[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,g=o*u,x=a*l,_=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+_,n[5]=o*f,n[9]=g*h-x,n[2]=x*h-g,n[6]=a*f,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OE,e,zE)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),ji.crossVectors(i,En),ji.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ji.crossVectors(i,En)),ji.normalize(),qa.crossVectors(En,ji),r[0]=ji.x,r[4]=qa.x,r[8]=En.x,r[1]=ji.y,r[5]=qa.y,r[9]=En.y,r[2]=ji.z,r[6]=qa.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],g=i[13],x=i[2],_=i[6],p=i[10],c=i[14],m=i[3],v=i[7],y=i[11],b=i[15],T=r[0],E=r[4],P=r[8],S=r[12],w=r[1],k=r[5],V=r[9],ne=r[13],D=r[2],z=r[6],H=r[10],W=r[14],N=r[3],O=r[7],U=r[11],K=r[15];return s[0]=o*T+a*w+l*D+u*N,s[4]=o*E+a*k+l*z+u*O,s[8]=o*P+a*V+l*H+u*U,s[12]=o*S+a*ne+l*W+u*K,s[1]=f*T+h*w+d*D+g*N,s[5]=f*E+h*k+d*z+g*O,s[9]=f*P+h*V+d*H+g*U,s[13]=f*S+h*ne+d*W+g*K,s[2]=x*T+_*w+p*D+c*N,s[6]=x*E+_*k+p*z+c*O,s[10]=x*P+_*V+p*H+c*U,s[14]=x*S+_*ne+p*W+c*K,s[3]=m*T+v*w+y*D+b*N,s[7]=m*E+v*k+y*z+b*O,s[11]=m*P+v*V+y*H+b*U,s[15]=m*S+v*ne+y*W+b*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],g=e[14],x=e[3],_=e[7],p=e[11],c=e[15];return x*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*g-i*l*g)+_*(+n*l*g-n*u*d+s*o*d-r*o*g+r*u*f-s*l*f)+p*(+n*u*h-n*a*g-s*o*h+i*o*g+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],g=e[11],x=e[12],_=e[13],p=e[14],c=e[15],m=h*p*u-_*d*u+_*l*g-a*p*g-h*l*c+a*d*c,v=x*d*u-f*p*u-x*l*g+o*p*g+f*l*c-o*d*c,y=f*_*u-x*h*u+x*a*g-o*_*g-f*a*c+o*h*c,b=x*h*l-f*_*l-x*a*d+o*_*d+f*a*p-o*h*p,T=n*m+i*v+r*y+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=m*E,e[1]=(_*d*s-h*p*s-_*r*g+i*p*g+h*r*c-i*d*c)*E,e[2]=(a*p*s-_*l*s+_*r*u-i*p*u-a*r*c+i*l*c)*E,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*g-i*l*g)*E,e[4]=v*E,e[5]=(f*p*s-x*d*s+x*r*g-n*p*g-f*r*c+n*d*c)*E,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*c-n*l*c)*E,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*g+n*l*g)*E,e[8]=y*E,e[9]=(x*h*s-f*_*s-x*i*g+n*_*g+f*i*c-n*h*c)*E,e[10]=(o*_*s-x*a*s+x*i*u-n*_*u-o*i*c+n*a*c)*E,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*g-n*a*g)*E,e[12]=b*E,e[13]=(f*_*r-x*h*r+x*i*d-n*_*d-f*i*p+n*h*p)*E,e[14]=(x*a*r-o*_*r-x*i*l+n*_*l+o*i*p-n*a*p)*E,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,g=s*f,x=s*h,_=o*f,p=o*h,c=a*h,m=l*u,v=l*f,y=l*h,b=i.x,T=i.y,E=i.z;return r[0]=(1-(_+c))*b,r[1]=(g+y)*b,r[2]=(x-v)*b,r[3]=0,r[4]=(g-y)*T,r[5]=(1-(d+c))*T,r[6]=(p+m)*T,r[7]=0,r[8]=(x+v)*E,r[9]=(p-m)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const u=1/s,f=1/o,h=1/a;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=f,$n.elements[5]*=f,$n.elements[6]*=f,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,n.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Pi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let g,x;if(a===Pi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===iu)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Pi){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,g=(i+r)*f;let x,_;if(a===Pi)x=(o+s)*h,_=-2*h;else if(a===iu)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rs=new G,$n=new ct,OE=new G(0,0,0),zE=new G(1,1,1),ji=new G,qa=new G,En=new G,pm=new ct,mm=new io;class Ru{constructor(e=0,n=0,i=0,r=Ru.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ru.DEFAULT_ORDER="XYZ";class Z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kE=0;const gm=new G,ss=new io,Mi=new ct,$a=new G,yo=new G,BE=new G,HE=new io,vm=new G(1,0,0),_m=new G(0,1,0),xm=new G(0,0,1),GE={type:"added"},VE={type:"removed"};class Sn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new G,n=new Ru,i=new io,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new qe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,n){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(yo,$a,this.up):Mi.lookAt($a,yo,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(Mi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(GE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(VE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,HE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new G(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new G,Ei=new G,Rc=new G,wi=new G,os=new G,as=new G,ym=new G,Cc=new G,Pc=new G,Lc=new G;let Ka=!1;class ti{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Ei.subVectors(i,n),Rc.subVectors(e,n);const o=Kn.dot(Kn),a=Kn.dot(Ei),l=Kn.dot(Rc),u=Ei.dot(Ei),f=Ei.dot(Rc),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(u*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Ei.subVectors(e,n),Kn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),Cc.subVectors(e,i);const l=os.dot(Cc),u=as.dot(Cc);if(l<=0&&u<=0)return n.copy(i);Pc.subVectors(e,r);const f=os.dot(Pc),h=as.dot(Pc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(os,o);Lc.subVectors(e,s);const g=os.dot(Lc),x=as.dot(Lc);if(x>=0&&g<=x)return n.copy(s);const _=g*u-l*x;if(_<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(as,a);const p=f*x-g*h;if(p<=0&&h-f>=0&&g-x>=0)return ym.subVectors(s,r),a=(h-f)/(h-f+(g-x)),n.copy(r).addScaledVector(ym,a);const c=1/(p+_+d);return o=_*c,a=d*c,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Dc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=CE(e,1),n=mn(n,0,1),i=mn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Dc(o,s,e+1/3),this.g=Dc(o,s,e),this.b=Dc(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=At){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=At){const i=J0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=yc(e.r),this.g=yc(e.g),this.b=yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return st.fromWorkingColorSpace(Qt.copy(this),e),Math.round(mn(Qt.r*255,0,255))*65536+Math.round(mn(Qt.g*255,0,255))*256+Math.round(mn(Qt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=At){st.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==At?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Qa);const i=_c(Yi.h,Qa.h,n),r=_c(Yi.s,Qa.s,n),s=_c(Yi.l,Qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ze;ze.NAMES=J0;let WE=0;class da extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=Or,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=Gf,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hf&&(i.blendSrc=this.blendSrc),this.blendDst!==Gf&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pi extends da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new G,Za=new Ve;class Jt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=am,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Za.fromBufferAttribute(this,n),Za.applyMatrix3(e),this.setXY(n,Za.x,Za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==am&&(e.usage=this.usage),e}}class e_ extends Jt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class t_ extends Jt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oi extends Jt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let XE=0;const zn=new ct,Nc=new Sn,ls=new G,wn=new $r,So=new $r,Dt=new G;class Nn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y0(e)?t_:e_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(wn.min,So.min),wn.expandByPoint(Dt),Dt.addVectors(wn.max,So.max),wn.expandByPoint(Dt)):(wn.expandByPoint(So.min),wn.expandByPoint(So.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Dt.fromBufferAttribute(a,u),l&&(ls.fromBufferAttribute(e,u),Dt.add(ls)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<a;w++)u[w]=new G,f[w]=new G;const h=new G,d=new G,g=new G,x=new Ve,_=new Ve,p=new Ve,c=new G,m=new G;function v(w,k,V){h.fromArray(r,w*3),d.fromArray(r,k*3),g.fromArray(r,V*3),x.fromArray(o,w*2),_.fromArray(o,k*2),p.fromArray(o,V*2),d.sub(h),g.sub(h),_.sub(x),p.sub(x);const ne=1/(_.x*p.y-p.x*_.y);isFinite(ne)&&(c.copy(d).multiplyScalar(p.y).addScaledVector(g,-_.y).multiplyScalar(ne),m.copy(g).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(ne),u[w].add(c),u[k].add(c),u[V].add(c),f[w].add(m),f[k].add(m),f[V].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,k=y.length;w<k;++w){const V=y[w],ne=V.start,D=V.count;for(let z=ne,H=ne+D;z<H;z+=3)v(i[z+0],i[z+1],i[z+2])}const b=new G,T=new G,E=new G,P=new G;function S(w){E.fromArray(s,w*3),P.copy(E);const k=u[w];b.copy(k),b.sub(E.multiplyScalar(E.dot(k))).normalize(),T.crossVectors(P,k);const ne=T.dot(f[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=ne}for(let w=0,k=y.length;w<k;++w){const V=y[w],ne=V.start,D=V.count;for(let z=ne,H=ne+D;z<H;z+=3)S(i[z+0]),S(i[z+1]),S(i[z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,f=new G,h=new G;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let g=0,x=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*f;for(let c=0;c<f;c++)d[x++]=u[g++]}return new Jt(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],g=e(d,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const g=u[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new ct,Er=new Q0,Ja=new ro,Mm=new G,us=new G,cs=new G,fs=new G,Uc=new G,el=new G,tl=new Ve,nl=new Ve,il=new Ve,Em=new G,wm=new G,Tm=new G,rl=new G,sl=new G;class en extends Sn{constructor(e=new Nn,n=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(Uc.fromBufferAttribute(h,e),o?el.addScaledVector(Uc,f):el.addScaledVector(Uc.sub(n),f))}n.add(el)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Ja.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ja,Mm)===null||Er.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Sm),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){const p=d[x],c=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let y=m,b=v;y<b;y+=3){const T=a.getX(y),E=a.getX(y+1),P=a.getX(y+2);r=ol(this,c,e,i,u,f,h,T,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=x,c=_;p<c;p+=3){const m=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);r=ol(this,o,e,i,u,f,h,m,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){const p=d[x],c=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let y=m,b=v;y<b;y+=3){const T=y,E=y+1,P=y+2;r=ol(this,c,e,i,u,f,h,T,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=x,c=_;p<c;p+=3){const m=p,v=p+1,y=p+2;r=ol(this,o,e,i,u,f,h,m,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function jE(t,e,n,i,r,s,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mr,a),l===null)return null;sl.copy(a),sl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(sl);return u<n.near||u>n.far?null:{distance:u,point:sl.clone(),object:t}}function ol(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,us),t.getVertexPosition(l,cs),t.getVertexPosition(u,fs);const f=jE(t,e,n,i,us,cs,fs,rl);if(f){r&&(tl.fromBufferAttribute(r,a),nl.fromBufferAttribute(r,l),il.fromBufferAttribute(r,u),f.uv=ti.getInterpolation(rl,us,cs,fs,tl,nl,il,new Ve)),s&&(tl.fromBufferAttribute(s,a),nl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,u),f.uv1=ti.getInterpolation(rl,us,cs,fs,tl,nl,il,new Ve),f.uv2=f.uv1),o&&(Em.fromBufferAttribute(o,a),wm.fromBufferAttribute(o,l),Tm.fromBufferAttribute(o,u),f.normal=ti.getInterpolation(rl,us,cs,fs,Em,wm,Tm,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new G,materialIndex:0};ti.getNormal(us,cs,fs,h.normal),f.face=h}return f}class Kr extends Nn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(u,3)),this.setAttribute("normal",new oi(f,3)),this.setAttribute("uv",new oi(h,2));function x(_,p,c,m,v,y,b,T,E,P,S){const w=y/E,k=b/P,V=y/2,ne=b/2,D=T/2,z=E+1,H=P+1;let W=0,N=0;const O=new G;for(let U=0;U<H;U++){const K=U*k-ne;for(let J=0;J<z;J++){const X=J*w-V;O[_]=X*m,O[p]=K*v,O[c]=D,u.push(O.x,O.y,O.z),O[_]=0,O[p]=0,O[c]=T>0?1:-1,f.push(O.x,O.y,O.z),h.push(J/E),h.push(1-U/P),W+=1}}for(let U=0;U<P;U++)for(let K=0;K<E;K++){const J=d+K+z*U,X=d+K+z*(U+1),te=d+(K+1)+z*(U+1),F=d+(K+1)+z*U;l.push(J,X,F),l.push(X,te,F),N+=6}a.addGroup(g,N,S),g+=N,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function YE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function n_(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const ru={clone:Ks,merge:sn};var qE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qE,this.fragmentShader=$E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=YE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class i_ extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hn extends i_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const hs=-90,ds=1;class KE extends Sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(hs,ds,e,n);r.layers=this.layers,this.add(r);const s=new Hn(hs,ds,e,n);s.layers=this.layers,this.add(s);const o=new Hn(hs,ds,e,n);o.layers=this.layers,this.add(o);const a=new Hn(hs,ds,e,n);a.layers=this.layers,this.add(a);const l=new Hn(hs,ds,e,n);l.layers=this.layers,this.add(l);const u=new Hn(hs,ds,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===iu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class r_ extends nn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QE extends si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ko("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Br?At:Gn),this.texture=new r_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Kr(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Di});s.uniforms.tEquirect.value=n;const o=new en(r,s),a=n.minFilter;return n.minFilter===qs&&(n.minFilter=kt),new KE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ic=new G,ZE=new G,JE=new qe;class Ar{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ic.subVectors(i,n).cross(ZE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||JE.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new ro,al=new G;class s_{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,o=new Ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],_=r[10],p=r[11],c=r[12],m=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,p-g,y-c).normalize(),i[1].setComponents(l+s,d+u,p+g,y+c).normalize(),i[2].setComponents(l+o,d+f,p+x,y+m).normalize(),i[3].setComponents(l-o,d-f,p-x,y-m).normalize(),i[4].setComponents(l-a,d-h,p-_,y-v).normalize(),n===Pi)i[5].setComponents(l+a,d+h,p+_,y+v).normalize();else if(n===iu)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ew(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,g=h.byteLength,x=t.createBuffer();t.bindBuffer(f,x),t.bufferData(f,h,d),u.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,f,h){const d=f.array,g=f._updateRange,x=f.updateRanges;if(t.bindBuffer(h,u),g.count===-1&&x.length===0&&t.bufferSubData(h,0,d),x.length!==0){for(let _=0,p=x.length;_<p;_++){const c=x[_];n?t.bufferSubData(h,c.start*d.BYTES_PER_ELEMENT,d,c.start,c.count):t.bufferSubData(h,c.start*d.BYTES_PER_ELEMENT,d.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,f),h.version=u.version}}return{get:o,remove:a,update:l}}class pa extends Nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,g=[],x=[],_=[],p=[];for(let c=0;c<f;c++){const m=c*d-o;for(let v=0;v<u;v++){const y=v*h-s;x.push(y,-m,0),_.push(0,0,1),p.push(v/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<a;m++){const v=m+u*c,y=m+u*(c+1),b=m+1+u*(c+1),T=m+1+u*c;g.push(v,y,T),g.push(y,b,T)}this.setIndex(g),this.setAttribute("position",new oi(x,3)),this.setAttribute("normal",new oi(_,3)),this.setAttribute("uv",new oi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var tw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ow=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ew=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ww=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Aw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ow=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ww=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$w=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,g1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,v1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,P1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,k1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ST=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:tw,alphahash_pars_fragment:nw,alphamap_fragment:iw,alphamap_pars_fragment:rw,alphatest_fragment:sw,alphatest_pars_fragment:ow,aomap_fragment:aw,aomap_pars_fragment:lw,batching_pars_vertex:uw,batching_vertex:cw,begin_vertex:fw,beginnormal_vertex:hw,bsdfs:dw,iridescence_fragment:pw,bumpmap_pars_fragment:mw,clipping_planes_fragment:gw,clipping_planes_pars_fragment:vw,clipping_planes_pars_vertex:_w,clipping_planes_vertex:xw,color_fragment:yw,color_pars_fragment:Sw,color_pars_vertex:Mw,color_vertex:Ew,common:ww,cube_uv_reflection_fragment:Tw,defaultnormal_vertex:bw,displacementmap_pars_vertex:Aw,displacementmap_vertex:Rw,emissivemap_fragment:Cw,emissivemap_pars_fragment:Pw,colorspace_fragment:Lw,colorspace_pars_fragment:Dw,envmap_fragment:Nw,envmap_common_pars_fragment:Uw,envmap_pars_fragment:Iw,envmap_pars_vertex:Fw,envmap_physical_pars_fragment:qw,envmap_vertex:Ow,fog_vertex:zw,fog_pars_vertex:kw,fog_fragment:Bw,fog_pars_fragment:Hw,gradientmap_pars_fragment:Gw,lightmap_fragment:Vw,lightmap_pars_fragment:Ww,lights_lambert_fragment:Xw,lights_lambert_pars_fragment:jw,lights_pars_begin:Yw,lights_toon_fragment:$w,lights_toon_pars_fragment:Kw,lights_phong_fragment:Qw,lights_phong_pars_fragment:Zw,lights_physical_fragment:Jw,lights_physical_pars_fragment:e1,lights_fragment_begin:t1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:a1,map_fragment:l1,map_pars_fragment:u1,map_particle_fragment:c1,map_particle_pars_fragment:f1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:d1,morphcolor_vertex:p1,morphnormal_vertex:m1,morphtarget_pars_vertex:g1,morphtarget_vertex:v1,normal_fragment_begin:_1,normal_fragment_maps:x1,normal_pars_fragment:y1,normal_pars_vertex:S1,normal_vertex:M1,normalmap_pars_fragment:E1,clearcoat_normal_fragment_begin:w1,clearcoat_normal_fragment_maps:T1,clearcoat_pars_fragment:b1,iridescence_pars_fragment:A1,opaque_fragment:R1,packing:C1,premultiplied_alpha_fragment:P1,project_vertex:L1,dithering_fragment:D1,dithering_pars_fragment:N1,roughnessmap_fragment:U1,roughnessmap_pars_fragment:I1,shadowmap_pars_fragment:F1,shadowmap_pars_vertex:O1,shadowmap_vertex:z1,shadowmask_pars_fragment:k1,skinbase_vertex:B1,skinning_pars_vertex:H1,skinning_vertex:G1,skinnormal_vertex:V1,specularmap_fragment:W1,specularmap_pars_fragment:X1,tonemapping_fragment:j1,tonemapping_pars_fragment:Y1,transmission_fragment:q1,transmission_pars_fragment:$1,uv_pars_fragment:K1,uv_pars_vertex:Q1,uv_vertex:Z1,worldpos_vertex:J1,background_vert:eT,background_frag:tT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:rT,cube_frag:sT,depth_vert:oT,depth_frag:aT,distanceRGBA_vert:lT,distanceRGBA_frag:uT,equirect_vert:cT,equirect_frag:fT,linedashed_vert:hT,linedashed_frag:dT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:vT,meshmatcap_vert:_T,meshmatcap_frag:xT,meshnormal_vert:yT,meshnormal_frag:ST,meshphong_vert:MT,meshphong_frag:ET,meshphysical_vert:wT,meshphysical_frag:TT,meshtoon_vert:bT,meshtoon_frag:AT,points_vert:RT,points_frag:CT,shadow_vert:PT,shadow_frag:LT,sprite_vert:DT,sprite_frag:NT},pe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},fi={basic:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:sn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:sn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:sn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:sn([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:sn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:sn([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:sn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:sn([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:sn([pe.common,pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:sn([pe.lights,pe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};fi.physical={uniforms:sn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ll={r:0,b:0,g:0};function UT(t,e,n,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,u,f,h=null,d=0,g=null;function x(p,c){let m=!1,v=c.isScene===!0?c.background:null;v&&v.isTexture&&(v=(c.backgroundBlurriness>0?n:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),m=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===bu)?(f===void 0&&(f=new en(new Kr(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ks(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=st.getTransfer(v.colorSpace)!==lt,(h!==v||d!==v.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=v,d=v.version,g=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new en(new pa(2,2),new tn({name:"BackgroundMaterial",uniforms:Ks(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=st.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function _(p,c){p.getRGB(ll,n_(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:x}}function IT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,f=!1;function h(D,z,H,W,N){let O=!1;if(o){const U=_(W,H,z);u!==U&&(u=U,g(u.object)),O=c(D,W,H,N),O&&m(D,W,H,N)}else{const U=z.wireframe===!0;(u.geometry!==W.id||u.program!==H.id||u.wireframe!==U)&&(u.geometry=W.id,u.program=H.id,u.wireframe=U,O=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,P(D,z,H,W),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function x(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,z,H){const W=H.wireframe===!0;let N=a[D.id];N===void 0&&(N={},a[D.id]=N);let O=N[z.id];O===void 0&&(O={},N[z.id]=O);let U=O[W];return U===void 0&&(U=p(d()),O[W]=U),U}function p(D){const z=[],H=[],W=[];for(let N=0;N<r;N++)z[N]=0,H[N]=0,W[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:W,object:D,attributes:{},index:null}}function c(D,z,H,W){const N=u.attributes,O=z.attributes;let U=0;const K=H.getAttributes();for(const J in K)if(K[J].location>=0){const te=N[J];let F=O[J];if(F===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(F=D.instanceColor)),te===void 0||te.attribute!==F||F&&te.data!==F.data)return!0;U++}return u.attributesNum!==U||u.index!==W}function m(D,z,H,W){const N={},O=z.attributes;let U=0;const K=H.getAttributes();for(const J in K)if(K[J].location>=0){let te=O[J];te===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const F={};F.attribute=te,te&&te.data&&(F.data=te.data),N[J]=F,U++}u.attributes=N,u.attributesNum=U,u.index=W}function v(){const D=u.newAttributes;for(let z=0,H=D.length;z<H;z++)D[z]=0}function y(D){b(D,0)}function b(D,z){const H=u.newAttributes,W=u.enabledAttributes,N=u.attributeDivisors;H[D]=1,W[D]===0&&(t.enableVertexAttribArray(D),W[D]=1),N[D]!==z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),N[D]=z)}function T(){const D=u.newAttributes,z=u.enabledAttributes;for(let H=0,W=z.length;H<W;H++)z[H]!==D[H]&&(t.disableVertexAttribArray(H),z[H]=0)}function E(D,z,H,W,N,O,U){U===!0?t.vertexAttribIPointer(D,z,H,N,O):t.vertexAttribPointer(D,z,H,W,N,O)}function P(D,z,H,W){if(i.isWebGL2===!1&&(D.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=W.attributes,O=H.getAttributes(),U=z.defaultAttributeValues;for(const K in O){const J=O[K];if(J.location>=0){let X=N[K];if(X===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const te=X.normalized,F=X.itemSize,ee=n.get(X);if(ee===void 0)continue;const j=ee.buffer,ce=ee.type,Z=ee.bytesPerElement,ie=i.isWebGL2===!0&&(ce===t.INT||ce===t.UNSIGNED_INT||X.gpuType===z0);if(X.isInterleavedBufferAttribute){const he=X.data,L=he.stride,Te=X.offset;if(he.isInstancedInterleavedBuffer){for(let ae=0;ae<J.locationSize;ae++)b(J.location+ae,he.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<J.locationSize;ae++)y(J.location+ae);t.bindBuffer(t.ARRAY_BUFFER,j);for(let ae=0;ae<J.locationSize;ae++)E(J.location+ae,F/J.locationSize,ce,te,L*Z,(Te+F/J.locationSize*ae)*Z,ie)}else{if(X.isInstancedBufferAttribute){for(let he=0;he<J.locationSize;he++)b(J.location+he,X.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let he=0;he<J.locationSize;he++)y(J.location+he);t.bindBuffer(t.ARRAY_BUFFER,j);for(let he=0;he<J.locationSize;he++)E(J.location+he,F/J.locationSize,ce,te,F*Z,F/J.locationSize*he*Z,ie)}}else if(U!==void 0){const te=U[K];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(J.location,te);break;case 3:t.vertexAttrib3fv(J.location,te);break;case 4:t.vertexAttrib4fv(J.location,te);break;default:t.vertexAttrib1fv(J.location,te)}}}}T()}function S(){V();for(const D in a){const z=a[D];for(const H in z){const W=z[H];for(const N in W)x(W[N].object),delete W[N];delete z[H]}delete a[D]}}function w(D){if(a[D.id]===void 0)return;const z=a[D.id];for(const H in z){const W=z[H];for(const N in W)x(W[N].object),delete W[N];delete z[H]}delete a[D.id]}function k(D){for(const z in a){const H=a[z];if(H[D.id]===void 0)continue;const W=H[D.id];for(const N in W)x(W[N].object),delete W[N];delete H[D.id]}}function V(){ne(),f=!0,u!==l&&(u=l,g(u.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:ne,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function FT(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,d){if(d===0)return;let g,x;if(r)g=t,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](s,f,h,d),n.update(h,s,d)}function u(f,h,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<d;x++)this.render(f[x],h[x]);else{g.multiDrawArraysWEBGL(s,f,0,h,0,d);let x=0;for(let _=0;_<d;_++)x+=h[_];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function OT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),b=v&&y,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:T}}function zT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ar,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,g){const x=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?f(null):u();else{const m=s?0:i,v=m*4;let y=c.clippingState||null;l.value=y,y=f(x,d,v,g);for(let b=0;b!==v;++b)y[b]=n[b];c.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,x){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const c=g+_*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<c)&&(p=new Float32Array(c));for(let v=0,y=g;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(m,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function kT(t){let e=new WeakMap;function n(o,a){return a===Vf?o.mapping=js:a===Wf&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vf||a===Wf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new QE(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class a_ extends i_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ps=4,bm=[.125,.215,.35,.446,.526,.582],Pr=20,Fc=new a_,Am=new ze;let Oc=null,zc=0,kc=0;const Rr=(1+Math.sqrt(5))/2,ps=1/Rr,Rm=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Rr,ps),new G(0,Rr,-ps),new G(ps,0,Rr),new G(-ps,0,Rr),new G(Rr,ps,0),new G(-Rr,ps,0)];class Cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Oc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,zc,kc),e.scissorTest=!1,ul(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Ni,format:ni,colorSpace:zi,depthBuffer:!1},r=Pm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BT(s)),this._blurMaterial=HT(s,e,n)}return r}_compileMaterial(e){const n=new en(this._lodPlanes[0],e);this._renderer.compile(n,Fc)}_sceneToCubeUV(e,n,i,r){const a=new Hn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Am),f.toneMapping=fr,f.autoClear=!1;const g=new pi({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),x=new en(new Kr,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(Am),_=!0);for(let c=0;c<6;c++){const m=c%3;m===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):m===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const v=this._cubeSize;ul(r,m*v,c>2?v:0,v,v),f.setRenderTarget(r),_&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===js||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ul(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Fc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rm[(r-1)%Rm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new en(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Pr-1),_=s/x,p=isFinite(s)?1+Math.floor(f*_):Pr;p>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pr}`);const c=[];let m=0;for(let E=0;E<Pr;++E){const P=E/_,S=Math.exp(-P*P/2);c.push(S),E===0?m+=S:E<p&&(m+=2*S)}for(let E=0;E<c.length;E++)c[E]=c[E]/m;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const y=this._sizeLods[r],b=3*y*(r>v-Ps?r-v+Ps:0),T=4*(this._cubeSize-y);ul(n,b,T,3*y,2*y),l.setRenderTarget(n),l.render(h,Fc)}}function BT(t){const e=[],n=[],i=[];let r=t;const s=t-Ps+1+bm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ps?l=bm[o-t+Ps-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,x=6,_=3,p=2,c=1,m=new Float32Array(_*x*g),v=new Float32Array(p*x*g),y=new Float32Array(c*x*g);for(let T=0;T<g;T++){const E=T%3*2/3-1,P=T>2?0:-1,S=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];m.set(S,_*x*T),v.set(d,p*x*T);const w=[T,T,T,T,T,T];y.set(w,c*x*T)}const b=new Nn;b.setAttribute("position",new Jt(m,_)),b.setAttribute("uv",new Jt(v,p)),b.setAttribute("faceIndex",new Jt(y,c)),e.push(b),r>Ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pm(t,e,n){const i=new si(t,e,n);return i.texture.mapping=bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ul(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function HT(t,e,n){const i=new Float32Array(Pr),r=new G(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Lm(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Dm(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Jh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Vf||l===Wf,f=l===js||l===Ys;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Cm(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Cm(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function VT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WT(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const _=d.morphAttributes[x];for(let p=0,c=_.length;p<c;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const x in g){const _=g[x];for(let p=0,c=_.length;p<c;p++)e.update(_[p],t.ARRAY_BUFFER)}}function u(h){const d=[],g=h.index,x=h.attributes.position;let _=0;if(g!==null){const m=g.array;_=g.version;for(let v=0,y=m.length;v<y;v+=3){const b=m[v+0],T=m[v+1],E=m[v+2];d.push(b,T,T,E,E,b)}}else if(x!==void 0){const m=x.array;_=x.version;for(let v=0,y=m.length/3-1;v<y;v+=3){const b=v+0,T=v+1,E=v+2;d.push(b,T,T,E,E,b)}}else return;const p=new(Y0(d)?t_:e_)(d,1);p.version=_;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function XT(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function u(g){a=g.type,l=g.bytesPerElement}function f(g,x){t.drawElements(s,x,a,g*l),n.update(x,s,1)}function h(g,x,_){if(_===0)return;let p,c;if(r)p=t,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](s,x,a,g*l,_),n.update(x,s,_)}function d(g,x,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<_;c++)this.render(g[c]/l,x[c]);else{p.multiDrawElementsWEBGL(s,x,0,a,g,0,_);let c=0;for(let m=0;m<_;m++)c+=x[m];n.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function jT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function YT(t,e){return t[0]-e[0]}function qT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function $T(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Vt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==_){let z=function(){ne.dispose(),s.delete(f),f.removeEventListener("dispose",z)};var g=z;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),b===!0&&(S=3);let w=f.attributes.position.count*S,k=1;w>e.maxTextureSize&&(k=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const V=new Float32Array(w*k*4*_),ne=new K0(V,w,k,_);ne.type=nr,ne.needsUpdate=!0;const D=S*4;for(let H=0;H<_;H++){const W=T[H],N=E[H],O=P[H],U=w*k*4*H;for(let K=0;K<W.count;K++){const J=K*D;v===!0&&(o.fromBufferAttribute(W,K),V[U+J+0]=o.x,V[U+J+1]=o.y,V[U+J+2]=o.z,V[U+J+3]=0),y===!0&&(o.fromBufferAttribute(N,K),V[U+J+4]=o.x,V[U+J+5]=o.y,V[U+J+6]=o.z,V[U+J+7]=0),b===!0&&(o.fromBufferAttribute(O,K),V[U+J+8]=o.x,V[U+J+9]=o.y,V[U+J+10]=o.z,V[U+J+11]=O.itemSize===4?o.w:1)}}p={count:_,texture:ne,size:new Ve(w,k)},s.set(f,p),f.addEventListener("dispose",z)}let c=0;for(let v=0;v<d.length;v++)c+=d[v];const m=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let _=i[f.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[f.id]=_}for(let y=0;y<x;y++){const b=_[y];b[0]=y,b[1]=d[y]}_.sort(qT);for(let y=0;y<8;y++)y<x&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(YT);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let m=0;for(let y=0;y<8;y++){const b=a[y],T=b[0],E=b[1];T!==Number.MAX_SAFE_INTEGER&&E?(p&&f.getAttribute("morphTarget"+y)!==p[T]&&f.setAttribute("morphTarget"+y,p[T]),c&&f.getAttribute("morphNormal"+y)!==c[T]&&f.setAttribute("morphNormal"+y,c[T]),r[y]=E,m+=E):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),c&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const v=f.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function KT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class l_ extends nn{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:kr,f!==kr&&f!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===kr&&(i=tr),i===void 0&&f===$s&&(i=zr),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const u_=new nn,c_=new l_(1,1);c_.compareFunction=j0;const f_=new K0,h_=new IE,d_=new r_,Nm=[],Um=[],Im=new Float32Array(16),Fm=new Float32Array(9),Om=new Float32Array(4);function so(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Nm[r];if(s===void 0&&(s=new Float32Array(r),Nm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cu(t,e){let n=Um[e];n===void 0&&(n=new Int32Array(e),Um[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function tb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Om.set(i),t.uniformMatrix2fv(this.addr,!1,Om),Pt(n,i)}}function nb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Fm.set(i),t.uniformMatrix3fv(this.addr,!1,Fm),Pt(n,i)}}function ib(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Im.set(i),t.uniformMatrix4fv(this.addr,!1,Im),Pt(n,i)}}function rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function lb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?c_:u_;n.setTexture2D(e||s,r)}function db(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||h_,r)}function pb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||d_,r)}function mb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||f_,r)}function gb(t){switch(t){case 5126:return QT;case 35664:return ZT;case 35665:return JT;case 35666:return eb;case 35674:return tb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return rb;case 35667:case 35671:return sb;case 35668:case 35672:return ob;case 35669:case 35673:return ab;case 5125:return lb;case 36294:return ub;case 36295:return cb;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function vb(t,e){t.uniform1fv(this.addr,e)}function _b(t,e){const n=so(e,this.size,2);t.uniform2fv(this.addr,n)}function xb(t,e){const n=so(e,this.size,3);t.uniform3fv(this.addr,n)}function yb(t,e){const n=so(e,this.size,4);t.uniform4fv(this.addr,n)}function Sb(t,e){const n=so(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Mb(t,e){const n=so(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Eb(t,e){const n=so(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function wb(t,e){t.uniform1iv(this.addr,e)}function Tb(t,e){t.uniform2iv(this.addr,e)}function bb(t,e){t.uniform3iv(this.addr,e)}function Ab(t,e){t.uniform4iv(this.addr,e)}function Rb(t,e){t.uniform1uiv(this.addr,e)}function Cb(t,e){t.uniform2uiv(this.addr,e)}function Pb(t,e){t.uniform3uiv(this.addr,e)}function Lb(t,e){t.uniform4uiv(this.addr,e)}function Db(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||u_,s[o])}function Nb(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||h_,s[o])}function Ub(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||d_,s[o])}function Ib(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||f_,s[o])}function Fb(t){switch(t){case 5126:return vb;case 35664:return _b;case 35665:return xb;case 35666:return yb;case 35674:return Sb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return wb;case 35667:case 35671:return Tb;case 35668:case 35672:return bb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Cb;case 36295:return Pb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Ib}}class Ob{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gb(n.type)}}class zb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Fb(n.type)}}class kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function zm(t,e){t.seq.push(e),t.map[e.id]=e}function Bb(t,e,n){const i=t.name,r=i.length;for(Bc.lastIndex=0;;){const s=Bc.exec(i),o=Bc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){zm(n,u===void 0?new Ob(a,t,e):new zb(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new kb(a),zm(n,h)),n=h}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Bb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function km(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Hb=37297;let Gb=0;function Vb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Wb(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===nu&&n===tu?i="LinearDisplayP3ToLinearSRGB":e===tu&&n===nu&&(i="LinearSRGBToLinearDisplayP3"),t){case zi:case Au:return[i,"LinearTransferOETF"];case At:case Zh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Bm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Vb(t.getShaderSource(e),o)}else return r}function Xb(t,e){const n=Wb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function jb(t,e){let n;switch(e){case rE:n="Linear";break;case sE:n="Reinhard";break;case oE:n="OptimizedCineon";break;case F0:n="ACESFilmic";break;case lE:n="AgX";break;case aE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Yb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function qb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ls).join(`
`)}function $b(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Kb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ls(t){return t!==""}function Hm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kf(t){return t.replace(Qb,Jb)}const Zb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jb(t,e){let n=Xe[e];if(n===void 0){const i=Zb.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kf(n)}const eA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(t){return t.replace(eA,tA)}function tA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===DM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function iA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case js:case Ys:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function sA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case I0:e="ENVMAP_BLENDING_MULTIPLY";break;case nE:e="ENVMAP_BLENDING_MIX";break;case iE:e="ENVMAP_BLENDING_ADD";break}return e}function oA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=nA(n),u=iA(n),f=rA(n),h=sA(n),d=oA(n),g=n.isWebGL2?"":Yb(n),x=qb(n),_=$b(s),p=r.createProgram();let c,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ls).join(`
`),c.length>0&&(c+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ls).join(`
`),m.length>0&&(m+=`
`)):(c=[Wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),m=[g,Wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==fr?jb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Xb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ls).join(`
`)),o=Kf(o),o=Hm(o,n),o=Gm(o,n),a=Kf(a),a=Hm(a,n),a=Gm(a,n),o=Vm(o),a=Vm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+c+o,b=v+m+a,T=km(r,r.VERTEX_SHADER,y),E=km(r,r.FRAGMENT_SHADER,b);r.attachShader(p,T),r.attachShader(p,E),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function P(V){if(t.debug.checkShaderErrors){const ne=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(T).trim(),z=r.getShaderInfoLog(E).trim();let H=!0,W=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,T,E);else{const N=Bm(r,T,"vertex"),O=Bm(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+N+`
`+O)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(D===""||z==="")&&(W=!1);W&&(V.diagnostics={runnable:H,programLog:ne,vertexShader:{log:D,prefix:c},fragmentShader:{log:z,prefix:m}})}r.deleteShader(T),r.deleteShader(E),S=new Rl(r,p),w=Kb(r,p)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(p,Hb)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=E,this}let lA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new cA(e),n.set(e,i)),i}}class cA{constructor(e){this.id=lA++,this.code=e,this.usedTimes=0}}function fA(t,e,n,i,r,s,o){const a=new Z0,l=new uA,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,w,k,V,ne){const D=V.fog,z=ne.geometry,H=S.isMeshStandardMaterial?V.environment:null,W=(S.isMeshStandardMaterial?n:e).get(S.envMap||H),N=W&&W.mapping===bu?W.image.height:null,O=x[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const U=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,K=U!==void 0?U.length:0;let J=0;z.morphAttributes.position!==void 0&&(J=1),z.morphAttributes.normal!==void 0&&(J=2),z.morphAttributes.color!==void 0&&(J=3);let X,te,F,ee;if(O){const Ft=fi[O];X=Ft.vertexShader,te=Ft.fragmentShader}else X=S.vertexShader,te=S.fragmentShader,l.update(S),F=l.getVertexShaderID(S),ee=l.getFragmentShaderID(S);const j=t.getRenderTarget(),ce=ne.isInstancedMesh===!0,Z=ne.isBatchedMesh===!0,ie=!!S.map,he=!!S.matcap,L=!!W,Te=!!S.aoMap,ae=!!S.lightMap,xe=!!S.bumpMap,_e=!!S.normalMap,$e=!!S.displacementMap,De=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,Y=S.anisotropy>0,le=S.clearcoat>0,oe=S.iridescence>0,fe=S.sheen>0,Ae=S.transmission>0,ye=Y&&!!S.anisotropyMap,we=le&&!!S.clearcoatMap,be=le&&!!S.clearcoatNormalMap,Ue=le&&!!S.clearcoatRoughnessMap,se=oe&&!!S.iridescenceMap,Qe=oe&&!!S.iridescenceThicknessMap,Be=fe&&!!S.sheenColorMap,Ie=fe&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,Se=!!S.specularColorMap,Fe=!!S.specularIntensityMap,Ze=Ae&&!!S.transmissionMap,et=Ae&&!!S.thicknessMap,He=!!S.gradientMap,de=!!S.alphaMap,I=S.alphaTest>0,me=!!S.alphaHash,ge=!!S.extensions,Le=!!z.attributes.uv1,Pe=!!z.attributes.uv2,tt=!!z.attributes.uv3;let nt=fr;return S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(nt=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:X,fragmentShader:te,defines:S.defines,customVertexShaderID:F,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Z,instancing:ce,instancingColor:ce&&ne.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:j===null?t.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:zi,map:ie,matcap:he,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:N,aoMap:Te,lightMap:ae,bumpMap:xe,normalMap:_e,displacementMap:d&&$e,emissiveMap:De,normalMapObjectSpace:_e&&S.normalMapType===SE,normalMapTangentSpace:_e&&S.normalMapType===yE,metalnessMap:R,roughnessMap:M,anisotropy:Y,anisotropyMap:ye,clearcoat:le,clearcoatMap:we,clearcoatNormalMap:be,clearcoatRoughnessMap:Ue,iridescence:oe,iridescenceMap:se,iridescenceThicknessMap:Qe,sheen:fe,sheenColorMap:Be,sheenRoughnessMap:Ie,specularMap:Ce,specularColorMap:Se,specularIntensityMap:Fe,transmission:Ae,transmissionMap:Ze,thicknessMap:et,gradientMap:He,opaque:S.transparent===!1&&S.blending===Or,alphaMap:de,alphaTest:I,alphaHash:me,combine:S.combine,mapUv:ie&&_(S.map.channel),aoMapUv:Te&&_(S.aoMap.channel),lightMapUv:ae&&_(S.lightMap.channel),bumpMapUv:xe&&_(S.bumpMap.channel),normalMapUv:_e&&_(S.normalMap.channel),displacementMapUv:$e&&_(S.displacementMap.channel),emissiveMapUv:De&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:M&&_(S.roughnessMap.channel),anisotropyMapUv:ye&&_(S.anisotropyMap.channel),clearcoatMapUv:we&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(S.sheenRoughnessMap.channel),specularMapUv:Ce&&_(S.specularMap.channel),specularColorMapUv:Se&&_(S.specularColorMap.channel),specularIntensityMapUv:Fe&&_(S.specularIntensityMap.channel),transmissionMapUv:Ze&&_(S.transmissionMap.channel),thicknessMapUv:et&&_(S.thicknessMap.channel),alphaMapUv:de&&_(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(_e||Y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Pe,vertexUv3s:tt,pointsUvs:ne.isPoints===!0&&!!z.attributes.uv&&(ie||de),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ne.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ie&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===di,flipSided:S.side===yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ge&&S.extensions.derivatives===!0,extensionFragDepth:ge&&S.extensions.fragDepth===!0,extensionDrawBuffers:ge&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)w.push(k),w.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(m(w,S),v(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function m(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const w=x[S.type];let k;if(w){const V=fi[w];k=ru.clone(V.uniforms)}else k=S.uniforms;return k}function b(S,w){let k;for(let V=0,ne=u.length;V<ne;V++){const D=u[V];if(D.cacheKey===w){k=D,++k.usedTimes;break}}return k===void 0&&(k=new aA(t,w,S,s),u.push(k)),k}function T(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:y,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:P}}function hA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function dA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,g,x,_,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:g,groupOrder:x,renderOrder:h.renderOrder,z:_,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=g,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=_,c.group=p),e++,c}function a(h,d,g,x,_,p){const c=o(h,d,g,x,_,p);g.transmission>0?i.push(c):g.transparent===!0?r.push(c):n.push(c)}function l(h,d,g,x,_,p){const c=o(h,d,g,x,_,p);g.transmission>0?i.unshift(c):g.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||dA),i.length>1&&i.sort(d||Xm),r.length>1&&r.sort(d||Xm)}function f(){for(let h=e,d=t.length;h<d;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function pA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new jm,t.set(i,[o])):r>=s.length?(o=new jm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function mA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new ze};break;case"SpotLight":n={position:new G,direction:new G,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function gA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vA=0;function _A(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xA(t,e){const n=new mA,i=gA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new G);const s=new G,o=new ct,a=new ct;function l(f,h){let d=0,g=0,x=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let _=0,p=0,c=0,m=0,v=0,y=0,b=0,T=0,E=0,P=0,S=0;f.sort(_A);const w=h===!0?Math.PI:1;for(let V=0,ne=f.length;V<ne;V++){const D=f[V],z=D.color,H=D.intensity,W=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=z.r*H*w,g+=z.g*H*w,x+=z.b*H*w;else if(D.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(D.sh.coefficients[O],H);S++}else if(D.isDirectionalLight){const O=n.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const U=D.shadow,K=i.get(D);K.shadowBias=U.bias,K.shadowNormalBias=U.normalBias,K.shadowRadius=U.radius,K.shadowMapSize=U.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=D.shadow.matrix,y++}r.directional[_]=O,_++}else if(D.isSpotLight){const O=n.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(z).multiplyScalar(H*w),O.distance=W,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,r.spot[c]=O;const U=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,U.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[c]=U.matrix,D.castShadow){const K=i.get(D);K.shadowBias=U.bias,K.shadowNormalBias=U.normalBias,K.shadowRadius=U.radius,K.shadowMapSize=U.mapSize,r.spotShadow[c]=K,r.spotShadowMap[c]=N,T++}c++}else if(D.isRectAreaLight){const O=n.get(D);O.color.copy(z).multiplyScalar(H),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),r.rectArea[m]=O,m++}else if(D.isPointLight){const O=n.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*w),O.distance=D.distance,O.decay=D.decay,D.castShadow){const U=D.shadow,K=i.get(D);K.shadowBias=U.bias,K.shadowNormalBias=U.normalBias,K.shadowRadius=U.radius,K.shadowMapSize=U.mapSize,K.shadowCameraNear=U.camera.near,K.shadowCameraFar=U.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=D.shadow.matrix,b++}r.point[p]=O,p++}else if(D.isHemisphereLight){const O=n.get(D);O.skyColor.copy(D.color).multiplyScalar(H*w),O.groundColor.copy(D.groundColor).multiplyScalar(H*w),r.hemi[v]=O,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=x;const k=r.hash;(k.directionalLength!==_||k.pointLength!==p||k.spotLength!==c||k.rectAreaLength!==m||k.hemiLength!==v||k.numDirectionalShadows!==y||k.numPointShadows!==b||k.numSpotShadows!==T||k.numSpotMaps!==E||k.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=c,r.rectArea.length=m,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=T+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,k.directionalLength=_,k.pointLength=p,k.spotLength=c,k.rectAreaLength=m,k.hemiLength=v,k.numDirectionalShadows=y,k.numPointShadows=b,k.numSpotShadows=T,k.numSpotMaps=E,k.numLightProbes=S,r.version=vA++)}function u(f,h){let d=0,g=0,x=0,_=0,p=0;const c=h.matrixWorldInverse;for(let m=0,v=f.length;m<v;m++){const y=f[m];if(y.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(c),d++}else if(y.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(c),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(c),x++}else if(y.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(c),a.identity(),o.copy(y.matrixWorld),o.premultiply(c),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(c),g++}else if(y.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function Ym(t,e){const n=new xA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function yA(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Ym(t,e),n.set(s,[l])):o>=a.length?(l=new Ym(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class SA extends da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MA extends da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TA(t,e,n){let i=new s_;const r=new Ve,s=new Ve,o=new Vt,a=new SA({depthPacking:xE}),l=new MA,u={},f=n.maxTextureSize,h={[mr]:yn,[yn]:mr,[di]:di},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:EA,fragmentShader:wA}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Nn;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U0;let c=this.type;this.render=function(T,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),w=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Di),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ne=c!==Ti&&this.type===Ti,D=c===Ti&&this.type!==Ti;for(let z=0,H=T.length;z<H;z++){const W=T[z],N=W.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const O=N.getFrameExtents();if(r.multiply(O),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,N.mapSize.y=s.y)),N.map===null||ne===!0||D===!0){const K=this.type!==Ti?{minFilter:ln,magFilter:ln}:{};N.map!==null&&N.map.dispose(),N.map=new si(r.x,r.y,K),N.map.texture.name=W.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const U=N.getViewportCount();for(let K=0;K<U;K++){const J=N.getViewport(K);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),V.viewport(o),N.updateMatrices(W,K),i=N.getFrustum(),y(E,P,N.camera,W,this.type)}N.isPointLightShadow!==!0&&this.type===Ti&&m(N,P),N.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(S,w,k)};function m(T,E){const P=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new si(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(E,null,P,d,_,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(E,null,P,g,_,null)}function v(T,E,P,S){let w=null;const k=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)w=k;else if(w=P.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const V=w.uuid,ne=E.uuid;let D=u[V];D===void 0&&(D={},u[V]=D);let z=D[ne];z===void 0&&(z=w.clone(),D[ne]=z,E.addEventListener("dispose",b)),w=z}if(w.visible=E.visible,w.wireframe=E.wireframe,S===Ti?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:h[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=t.properties.get(w);V.light=P}return w}function y(T,E,P,S,w){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Ti)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const ne=e.update(T),D=T.material;if(Array.isArray(D)){const z=ne.groups;for(let H=0,W=z.length;H<W;H++){const N=z[H],O=D[N.materialIndex];if(O&&O.visible){const U=v(T,O,S,w);T.onBeforeShadow(t,T,E,P,ne,U,N),t.renderBufferDirect(P,null,ne,U,T,N),T.onAfterShadow(t,T,E,P,ne,U,N)}}}else if(D.visible){const z=v(T,D,S,w);T.onBeforeShadow(t,T,E,P,ne,z,null),t.renderBufferDirect(P,null,ne,z,T,null),T.onAfterShadow(t,T,E,P,ne,z,null)}}const V=T.children;for(let ne=0,D=V.length;ne<D;ne++)y(V[ne],E,P,S,w)}function b(T){T.target.removeEventListener("dispose",b);for(const P in u){const S=u[P],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function bA(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const me=new Vt;let ge=null;const Le=new Vt(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!I&&(t.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){I=Pe},setClear:function(Pe,tt,nt,xt,Ft){Ft===!0&&(Pe*=xt,tt*=xt,nt*=xt),me.set(Pe,tt,nt,xt),Le.equals(me)===!1&&(t.clearColor(Pe,tt,nt,xt),Le.copy(me))},reset:function(){I=!1,ge=null,Le.set(-1,0,0,0)}}}function s(){let I=!1,me=null,ge=null,Le=null;return{setTest:function(Pe){Pe?Z(t.DEPTH_TEST):ie(t.DEPTH_TEST)},setMask:function(Pe){me!==Pe&&!I&&(t.depthMask(Pe),me=Pe)},setFunc:function(Pe){if(ge!==Pe){switch(Pe){case $M:t.depthFunc(t.NEVER);break;case KM:t.depthFunc(t.ALWAYS);break;case QM:t.depthFunc(t.LESS);break;case Jl:t.depthFunc(t.LEQUAL);break;case ZM:t.depthFunc(t.EQUAL);break;case JM:t.depthFunc(t.GEQUAL);break;case eE:t.depthFunc(t.GREATER);break;case tE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Pe}},setLocked:function(Pe){I=Pe},setClear:function(Pe){Le!==Pe&&(t.clearDepth(Pe),Le=Pe)},reset:function(){I=!1,me=null,ge=null,Le=null}}}function o(){let I=!1,me=null,ge=null,Le=null,Pe=null,tt=null,nt=null,xt=null,Ft=null;return{setTest:function(rt){I||(rt?Z(t.STENCIL_TEST):ie(t.STENCIL_TEST))},setMask:function(rt){me!==rt&&!I&&(t.stencilMask(rt),me=rt)},setFunc:function(rt,Ot,Fn){(ge!==rt||Le!==Ot||Pe!==Fn)&&(t.stencilFunc(rt,Ot,Fn),ge=rt,Le=Ot,Pe=Fn)},setOp:function(rt,Ot,Fn){(tt!==rt||nt!==Ot||xt!==Fn)&&(t.stencilOp(rt,Ot,Fn),tt=rt,nt=Ot,xt=Fn)},setLocked:function(rt){I=rt},setClear:function(rt){Ft!==rt&&(t.clearStencil(rt),Ft=rt)},reset:function(){I=!1,me=null,ge=null,Le=null,Pe=null,tt=null,nt=null,xt=null,Ft=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,h=new WeakMap;let d={},g={},x=new WeakMap,_=[],p=null,c=!1,m=null,v=null,y=null,b=null,T=null,E=null,P=null,S=new ze(0,0,0),w=0,k=!1,V=null,ne=null,D=null,z=null,H=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=O>=2);let K=null,J={};const X=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),F=new Vt().fromArray(X),ee=new Vt().fromArray(te);function j(I,me,ge,Le){const Pe=new Uint8Array(4),tt=t.createTexture();t.bindTexture(I,tt),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<ge;nt++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(me,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(me+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return tt}const ce={};ce[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ce[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Z(t.DEPTH_TEST),l.setFunc(Jl),De(!1),R(Cp),Z(t.CULL_FACE),_e(Di);function Z(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function ie(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function he(I,me){return g[I]!==me?(t.bindFramebuffer(I,me),g[I]=me,i&&(I===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=me),I===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=me)),!0):!1}function L(I,me){let ge=_,Le=!1;if(I)if(ge=x.get(me),ge===void 0&&(ge=[],x.set(me,ge)),I.isWebGLMultipleRenderTargets){const Pe=I.texture;if(ge.length!==Pe.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,nt=Pe.length;tt<nt;tt++)ge[tt]=t.COLOR_ATTACHMENT0+tt;ge.length=Pe.length,Le=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,Le=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,Le=!0);Le&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Te(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const ae={[Cr]:t.FUNC_ADD,[UM]:t.FUNC_SUBTRACT,[IM]:t.FUNC_REVERSE_SUBTRACT};if(i)ae[Dp]=t.MIN,ae[Np]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ae[Dp]=I.MIN_EXT,ae[Np]=I.MAX_EXT)}const xe={[FM]:t.ZERO,[OM]:t.ONE,[zM]:t.SRC_COLOR,[Hf]:t.SRC_ALPHA,[WM]:t.SRC_ALPHA_SATURATE,[GM]:t.DST_COLOR,[BM]:t.DST_ALPHA,[kM]:t.ONE_MINUS_SRC_COLOR,[Gf]:t.ONE_MINUS_SRC_ALPHA,[VM]:t.ONE_MINUS_DST_COLOR,[HM]:t.ONE_MINUS_DST_ALPHA,[XM]:t.CONSTANT_COLOR,[jM]:t.ONE_MINUS_CONSTANT_COLOR,[YM]:t.CONSTANT_ALPHA,[qM]:t.ONE_MINUS_CONSTANT_ALPHA};function _e(I,me,ge,Le,Pe,tt,nt,xt,Ft,rt){if(I===Di){c===!0&&(ie(t.BLEND),c=!1);return}if(c===!1&&(Z(t.BLEND),c=!0),I!==NM){if(I!==m||rt!==k){if((v!==Cr||T!==Cr)&&(t.blendEquation(t.FUNC_ADD),v=Cr,T=Cr),rt)switch(I){case Or:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rn:t.blendFunc(t.ONE,t.ONE);break;case Pp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Or:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rn:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Pp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,b=null,E=null,P=null,S.set(0,0,0),w=0,m=I,k=rt}return}Pe=Pe||me,tt=tt||ge,nt=nt||Le,(me!==v||Pe!==T)&&(t.blendEquationSeparate(ae[me],ae[Pe]),v=me,T=Pe),(ge!==y||Le!==b||tt!==E||nt!==P)&&(t.blendFuncSeparate(xe[ge],xe[Le],xe[tt],xe[nt]),y=ge,b=Le,E=tt,P=nt),(xt.equals(S)===!1||Ft!==w)&&(t.blendColor(xt.r,xt.g,xt.b,Ft),S.copy(xt),w=Ft),m=I,k=!1}function $e(I,me){I.side===di?ie(t.CULL_FACE):Z(t.CULL_FACE);let ge=I.side===yn;me&&(ge=!ge),De(ge),I.blending===Or&&I.transparent===!1?_e(Di):_e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Le=I.stencilWrite;u.setTest(Le),Le&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Y(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){V!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),V=I)}function R(I){I!==PM?(Z(t.CULL_FACE),I!==ne&&(I===Cp?t.cullFace(t.BACK):I===LM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ie(t.CULL_FACE),ne=I}function M(I){I!==D&&(N&&t.lineWidth(I),D=I)}function Y(I,me,ge){I?(Z(t.POLYGON_OFFSET_FILL),(z!==me||H!==ge)&&(t.polygonOffset(me,ge),z=me,H=ge)):ie(t.POLYGON_OFFSET_FILL)}function le(I){I?Z(t.SCISSOR_TEST):ie(t.SCISSOR_TEST)}function oe(I){I===void 0&&(I=t.TEXTURE0+W-1),K!==I&&(t.activeTexture(I),K=I)}function fe(I,me,ge){ge===void 0&&(K===null?ge=t.TEXTURE0+W-1:ge=K);let Le=J[ge];Le===void 0&&(Le={type:void 0,texture:void 0},J[ge]=Le),(Le.type!==I||Le.texture!==me)&&(K!==ge&&(t.activeTexture(ge),K=ge),t.bindTexture(I,me||ce[I]),Le.type=I,Le.texture=me)}function Ae(){const I=J[K];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ye(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){F.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),F.copy(I))}function Ze(I){ee.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function et(I,me){let ge=h.get(me);ge===void 0&&(ge=new WeakMap,h.set(me,ge));let Le=ge.get(I);Le===void 0&&(Le=t.getUniformBlockIndex(me,I.name),ge.set(I,Le))}function He(I,me){const Le=h.get(me).get(I);f.get(me)!==Le&&(t.uniformBlockBinding(me,Le,I.__bindingPointIndex),f.set(me,Le))}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},K=null,J={},g={},x=new WeakMap,_=[],p=null,c=!1,m=null,v=null,y=null,b=null,T=null,E=null,P=null,S=new ze(0,0,0),w=0,k=!1,V=null,ne=null,D=null,z=null,H=null,F.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Z,disable:ie,bindFramebuffer:he,drawBuffers:L,useProgram:Te,setBlending:_e,setMaterial:$e,setFlipSided:De,setCullFace:R,setLineWidth:M,setPolygonOffset:Y,setScissorTest:le,activeTexture:oe,bindTexture:fe,unbindTexture:Ae,compressedTexImage2D:ye,compressedTexImage3D:we,texImage2D:Ce,texImage3D:Se,updateUBOMapping:et,uniformBlockBinding:He,texStorage2D:Be,texStorage3D:Ie,texSubImage2D:be,texSubImage3D:Ue,compressedTexSubImage2D:se,compressedTexSubImage3D:Qe,scissor:Fe,viewport:Ze,reset:de}}function AA(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return g?new OffscreenCanvas(R,M):ra("canvas")}function _(R,M,Y,le){let oe=1;if((R.width>le||R.height>le)&&(oe=le/Math.max(R.width,R.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const fe=M?$f:Math.floor,Ae=fe(oe*R.width),ye=fe(oe*R.height);h===void 0&&(h=x(Ae,ye));const we=Y?x(Ae,ye):h;return we.width=Ae,we.height=ye,we.getContext("2d").drawImage(R,0,0,Ae,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ae+"x"+ye+")."),we}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return um(R.width)&&um(R.height)}function c(R){return a?!1:R.wrapS!==Bt||R.wrapT!==Bt||R.minFilter!==ln&&R.minFilter!==kt}function m(R,M){return R.generateMipmaps&&M&&R.minFilter!==ln&&R.minFilter!==kt}function v(R){t.generateMipmap(R)}function y(R,M,Y,le,oe=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe=M;if(M===t.RED&&(Y===t.FLOAT&&(fe=t.R32F),Y===t.HALF_FLOAT&&(fe=t.R16F),Y===t.UNSIGNED_BYTE&&(fe=t.R8)),M===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(fe=t.R8UI),Y===t.UNSIGNED_SHORT&&(fe=t.R16UI),Y===t.UNSIGNED_INT&&(fe=t.R32UI),Y===t.BYTE&&(fe=t.R8I),Y===t.SHORT&&(fe=t.R16I),Y===t.INT&&(fe=t.R32I)),M===t.RG&&(Y===t.FLOAT&&(fe=t.RG32F),Y===t.HALF_FLOAT&&(fe=t.RG16F),Y===t.UNSIGNED_BYTE&&(fe=t.RG8)),M===t.RGBA){const Ae=oe?eu:st.getTransfer(le);Y===t.FLOAT&&(fe=t.RGBA32F),Y===t.HALF_FLOAT&&(fe=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(fe=Ae===lt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)}return(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(R,M,Y){return m(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==kt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){return R===ln||R===Up||R===fc?t.NEAREST:t.LINEAR}function E(R){const M=R.target;M.removeEventListener("dispose",E),S(M),M.isVideoTexture&&f.delete(M)}function P(R){const M=R.target;M.removeEventListener("dispose",P),k(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const Y=R.source,le=d.get(Y);if(le){const oe=le[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&w(R),Object.keys(le).length===0&&d.delete(Y)}i.remove(R)}function w(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const Y=R.source,le=d.get(Y);delete le[M.__cacheKey],o.memory.textures--}function k(R){const M=R.texture,Y=i.get(R),le=i.get(M);if(le.__webglTexture!==void 0&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(Y.__webglFramebuffer[oe]))for(let fe=0;fe<Y.__webglFramebuffer[oe].length;fe++)t.deleteFramebuffer(Y.__webglFramebuffer[oe][fe]);else t.deleteFramebuffer(Y.__webglFramebuffer[oe]);Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer[oe])}else{if(Array.isArray(Y.__webglFramebuffer))for(let oe=0;oe<Y.__webglFramebuffer.length;oe++)t.deleteFramebuffer(Y.__webglFramebuffer[oe]);else t.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let oe=0;oe<Y.__webglColorRenderbuffer.length;oe++)Y.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(Y.__webglColorRenderbuffer[oe]);Y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let oe=0,fe=M.length;oe<fe;oe++){const Ae=i.get(M[oe]);Ae.__webglTexture&&(t.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(R)}let V=0;function ne(){V=0}function D(){const R=V;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),V+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function H(R,M){const Y=i.get(R);if(R.isVideoTexture&&$e(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const le=R.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(Y,R,M);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+M)}function W(R,M){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){F(Y,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+M)}function N(R,M){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){F(Y,R,M);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+M)}function O(R,M){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){ee(Y,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+M)}const U={[Xf]:t.REPEAT,[Bt]:t.CLAMP_TO_EDGE,[jf]:t.MIRRORED_REPEAT},K={[ln]:t.NEAREST,[Up]:t.NEAREST_MIPMAP_NEAREST,[fc]:t.NEAREST_MIPMAP_LINEAR,[kt]:t.LINEAR,[uE]:t.LINEAR_MIPMAP_NEAREST,[qs]:t.LINEAR_MIPMAP_LINEAR},J={[ME]:t.NEVER,[RE]:t.ALWAYS,[EE]:t.LESS,[j0]:t.LEQUAL,[wE]:t.EQUAL,[AE]:t.GEQUAL,[TE]:t.GREATER,[bE]:t.NOTEQUAL};function X(R,M,Y){if(Y?(t.texParameteri(R,t.TEXTURE_WRAP_S,U[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,U[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,U[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Bt||M.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==ln&&M.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===ln||M.minFilter!==fc&&M.minFilter!==qs||M.type===nr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ni&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function te(R,M){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",E));const le=M.source;let oe=d.get(le);oe===void 0&&(oe={},d.set(le,oe));const fe=z(M);if(fe!==R.__cacheKey){oe[fe]===void 0&&(oe[fe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),oe[fe].usedTimes++;const Ae=oe[R.__cacheKey];Ae!==void 0&&(oe[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&w(M)),R.__cacheKey=fe,R.__webglTexture=oe[fe].texture}return Y}function F(R,M,Y){let le=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=t.TEXTURE_3D);const oe=te(R,M),fe=M.source;n.bindTexture(le,R.__webglTexture,t.TEXTURE0+Y);const Ae=i.get(fe);if(fe.version!==Ae.__version||oe===!0){n.activeTexture(t.TEXTURE0+Y);const ye=st.getPrimaries(st.workingColorSpace),we=M.colorSpace===Gn?null:st.getPrimaries(M.colorSpace),be=M.colorSpace===Gn||ye===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ue=c(M)&&p(M.image)===!1;let se=_(M.image,Ue,!1,r.maxTextureSize);se=De(M,se);const Qe=p(se)||a,Be=s.convert(M.format,M.colorSpace);let Ie=s.convert(M.type),Ce=y(M.internalFormat,Be,Ie,M.colorSpace,M.isVideoTexture);X(le,M,Qe);let Se;const Fe=M.mipmaps,Ze=a&&M.isVideoTexture!==!0&&Ce!==W0,et=Ae.__version===void 0||oe===!0,He=b(M,se,Qe);if(M.isDepthTexture)Ce=t.DEPTH_COMPONENT,a?M.type===nr?Ce=t.DEPTH_COMPONENT32F:M.type===tr?Ce=t.DEPTH_COMPONENT24:M.type===zr?Ce=t.DEPTH24_STENCIL8:Ce=t.DEPTH_COMPONENT16:M.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===kr&&Ce===t.DEPTH_COMPONENT&&M.type!==Qh&&M.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=tr,Ie=s.convert(M.type)),M.format===$s&&Ce===t.DEPTH_COMPONENT&&(Ce=t.DEPTH_STENCIL,M.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=zr,Ie=s.convert(M.type))),et&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Ce,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ce,se.width,se.height,0,Be,Ie,null));else if(M.isDataTexture)if(Fe.length>0&&Qe){Ze&&et&&n.texStorage2D(t.TEXTURE_2D,He,Ce,Fe[0].width,Fe[0].height);for(let de=0,I=Fe.length;de<I;de++)Se=Fe[de],Ze?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Se.width,Se.height,Be,Ie,Se.data):n.texImage2D(t.TEXTURE_2D,de,Ce,Se.width,Se.height,0,Be,Ie,Se.data);M.generateMipmaps=!1}else Ze?(et&&n.texStorage2D(t.TEXTURE_2D,He,Ce,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Be,Ie,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ce,se.width,se.height,0,Be,Ie,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Ce,Fe[0].width,Fe[0].height,se.depth);for(let de=0,I=Fe.length;de<I;de++)Se=Fe[de],M.format!==ni?Be!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,se.depth,Be,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Ce,Se.width,Se.height,se.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,se.depth,Be,Ie,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Ce,Se.width,Se.height,se.depth,0,Be,Ie,Se.data)}else{Ze&&et&&n.texStorage2D(t.TEXTURE_2D,He,Ce,Fe[0].width,Fe[0].height);for(let de=0,I=Fe.length;de<I;de++)Se=Fe[de],M.format!==ni?Be!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,Se.width,Se.height,Be,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Se.width,Se.height,Be,Ie,Se.data):n.texImage2D(t.TEXTURE_2D,de,Ce,Se.width,Se.height,0,Be,Ie,Se.data)}else if(M.isDataArrayTexture)Ze?(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Ce,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Be,Ie,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,se.width,se.height,se.depth,0,Be,Ie,se.data);else if(M.isData3DTexture)Ze?(et&&n.texStorage3D(t.TEXTURE_3D,He,Ce,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Be,Ie,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,se.width,se.height,se.depth,0,Be,Ie,se.data);else if(M.isFramebufferTexture){if(et)if(Ze)n.texStorage2D(t.TEXTURE_2D,He,Ce,se.width,se.height);else{let de=se.width,I=se.height;for(let me=0;me<He;me++)n.texImage2D(t.TEXTURE_2D,me,Ce,de,I,0,Be,Ie,null),de>>=1,I>>=1}}else if(Fe.length>0&&Qe){Ze&&et&&n.texStorage2D(t.TEXTURE_2D,He,Ce,Fe[0].width,Fe[0].height);for(let de=0,I=Fe.length;de<I;de++)Se=Fe[de],Ze?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Be,Ie,Se):n.texImage2D(t.TEXTURE_2D,de,Ce,Be,Ie,Se);M.generateMipmaps=!1}else Ze?(et&&n.texStorage2D(t.TEXTURE_2D,He,Ce,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Be,Ie,se)):n.texImage2D(t.TEXTURE_2D,0,Ce,Be,Ie,se);m(M,Qe)&&v(le),Ae.__version=fe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ee(R,M,Y){if(M.image.length!==6)return;const le=te(R,M),oe=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+Y);const fe=i.get(oe);if(oe.version!==fe.__version||le===!0){n.activeTexture(t.TEXTURE0+Y);const Ae=st.getPrimaries(st.workingColorSpace),ye=M.colorSpace===Gn?null:st.getPrimaries(M.colorSpace),we=M.colorSpace===Gn||Ae===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,se=[];for(let de=0;de<6;de++)!be&&!Ue?se[de]=_(M.image[de],!1,!0,r.maxCubemapSize):se[de]=Ue?M.image[de].image:M.image[de],se[de]=De(M,se[de]);const Qe=se[0],Be=p(Qe)||a,Ie=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type),Se=y(M.internalFormat,Ie,Ce,M.colorSpace),Fe=a&&M.isVideoTexture!==!0,Ze=fe.__version===void 0||le===!0;let et=b(M,Qe,Be);X(t.TEXTURE_CUBE_MAP,M,Be);let He;if(be){Fe&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,et,Se,Qe.width,Qe.height);for(let de=0;de<6;de++){He=se[de].mipmaps;for(let I=0;I<He.length;I++){const me=He[I];M.format!==ni?Ie!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,0,0,me.width,me.height,Ie,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,0,0,me.width,me.height,Ie,Ce,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,Se,me.width,me.height,0,Ie,Ce,me.data)}}}else{He=M.mipmaps,Fe&&Ze&&(He.length>0&&et++,n.texStorage2D(t.TEXTURE_CUBE_MAP,et,Se,se[0].width,se[0].height));for(let de=0;de<6;de++)if(Ue){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,se[de].width,se[de].height,Ie,Ce,se[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Se,se[de].width,se[de].height,0,Ie,Ce,se[de].data);for(let I=0;I<He.length;I++){const ge=He[I].image[de].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,0,0,ge.width,ge.height,Ie,Ce,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,Se,ge.width,ge.height,0,Ie,Ce,ge.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ie,Ce,se[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Se,Ie,Ce,se[de]);for(let I=0;I<He.length;I++){const me=He[I];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,0,0,Ie,Ce,me.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,Se,Ie,Ce,me.image[de])}}}m(M,Be)&&v(t.TEXTURE_CUBE_MAP),fe.__version=oe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function j(R,M,Y,le,oe,fe){const Ae=s.convert(Y.format,Y.colorSpace),ye=s.convert(Y.type),we=y(Y.internalFormat,Ae,ye,Y.colorSpace);if(!i.get(M).__hasExternalTextures){const Ue=Math.max(1,M.width>>fe),se=Math.max(1,M.height>>fe);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,fe,we,Ue,se,M.depth,0,Ae,ye,null):n.texImage2D(oe,fe,we,Ue,se,0,Ae,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),_e(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,oe,i.get(Y).__webglTexture,0,xe(M)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,oe,i.get(Y).__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(R,M,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let le=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Y||_e(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===nr?le=t.DEPTH_COMPONENT32F:oe.type===tr&&(le=t.DEPTH_COMPONENT24));const fe=xe(M);_e(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,le,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,le,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const le=xe(M);Y&&_e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,M.width,M.height):_e(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const le=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<le.length;oe++){const fe=le[oe],Ae=s.convert(fe.format,fe.colorSpace),ye=s.convert(fe.type),we=y(fe.internalFormat,Ae,ye,fe.colorSpace),be=xe(M);Y&&_e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,we,M.width,M.height):_e(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,we,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,we,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Z(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const le=i.get(M.depthTexture).__webglTexture,oe=xe(M);if(M.depthTexture.format===kr)_e(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(M.depthTexture.format===$s)_e(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ie(R){const M=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Z(M.__webglFramebuffer,R)}else if(Y){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]=t.createRenderbuffer(),ce(M.__webglDepthbuffer[le],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ce(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(R,M,Y){const le=i.get(R);M!==void 0&&j(le.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&ie(R)}function L(R){const M=R.texture,Y=i.get(R),le=i.get(M);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=M.version,o.memory.textures++);const oe=R.isWebGLCubeRenderTarget===!0,fe=R.isWebGLMultipleRenderTargets===!0,Ae=p(R)||a;if(oe){Y.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[ye]=[];for(let we=0;we<M.mipmaps.length;we++)Y.__webglFramebuffer[ye][we]=t.createFramebuffer()}else Y.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)Y.__webglFramebuffer[ye]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(fe)if(r.drawBuffers){const ye=R.texture;for(let we=0,be=ye.length;we<be;we++){const Ue=i.get(ye[we]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&_e(R)===!1){const ye=fe?M:[M];Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const be=ye[we];Y.__webglColorRenderbuffer[we]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[we]);const Ue=s.convert(be.format,be.colorSpace),se=s.convert(be.type),Qe=y(be.internalFormat,Ue,se,be.colorSpace,R.isXRRenderTarget===!0),Be=xe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,Qe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Y.__webglColorRenderbuffer[we])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(Y.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),X(t.TEXTURE_CUBE_MAP,M,Ae);for(let ye=0;ye<6;ye++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)j(Y.__webglFramebuffer[ye][we],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we);else j(Y.__webglFramebuffer[ye],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(M,Ae)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){const ye=R.texture;for(let we=0,be=ye.length;we<be;we++){const Ue=ye[we],se=i.get(Ue);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),X(t.TEXTURE_2D,Ue,Ae),j(Y.__webglFramebuffer,R,Ue,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,0),m(Ue,Ae)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ye=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ye,le.__webglTexture),X(ye,M,Ae),a&&M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)j(Y.__webglFramebuffer[we],R,M,t.COLOR_ATTACHMENT0,ye,we);else j(Y.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ye,0);m(M,Ae)&&v(ye),n.unbindTexture()}R.depthBuffer&&ie(R)}function Te(R){const M=p(R)||a,Y=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let le=0,oe=Y.length;le<oe;le++){const fe=Y[le];if(m(fe,M)){const Ae=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(fe).__webglTexture;n.bindTexture(Ae,ye),v(Ae),n.unbindTexture()}}}function ae(R){if(a&&R.samples>0&&_e(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Y=R.width,le=R.height;let oe=t.COLOR_BUFFER_BIT;const fe=[],Ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(R),we=R.isWebGLMultipleRenderTargets===!0;if(we)for(let be=0;be<M.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let be=0;be<M.length;be++){fe.push(t.COLOR_ATTACHMENT0+be),R.depthBuffer&&fe.push(Ae);const Ue=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ue===!1&&(R.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),we&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[be]),Ue===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ae]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ae])),we){const se=i.get(M[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,Y,le,0,0,Y,le,oe,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),we)for(let be=0;be<M.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,ye.__webglColorRenderbuffer[be]);const Ue=i.get(M[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function xe(R){return Math.min(r.maxSamples,R.samples)}function _e(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $e(R){const M=o.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function De(R,M){const Y=R.colorSpace,le=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Yf||Y!==zi&&Y!==Gn&&(st.getTransfer(Y)===lt?a===!1?e.has("EXT_sRGB")===!0&&le===ni?(R.format=Yf,R.minFilter=kt,R.generateMipmaps=!1):M=q0.sRGBToLinear(M):(le!==ni||oe!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}this.allocateTextureUnit=D,this.resetTextureUnits=ne,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=N,this.setTextureCube=O,this.rebindTextures=he,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=j,this.useMultisampledRTT=_e}function RA(t,e,n){const i=n.isWebGL2;function r(s,o=Gn){let a;const l=st.getTransfer(o);if(s===hr)return t.UNSIGNED_BYTE;if(s===k0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===B0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===cE)return t.BYTE;if(s===fE)return t.SHORT;if(s===Qh)return t.UNSIGNED_SHORT;if(s===z0)return t.INT;if(s===tr)return t.UNSIGNED_INT;if(s===nr)return t.FLOAT;if(s===Ni)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===hE)return t.ALPHA;if(s===ni)return t.RGBA;if(s===dE)return t.LUMINANCE;if(s===pE)return t.LUMINANCE_ALPHA;if(s===kr)return t.DEPTH_COMPONENT;if(s===$s)return t.DEPTH_STENCIL;if(s===Yf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===mE)return t.RED;if(s===H0)return t.RED_INTEGER;if(s===gE)return t.RG;if(s===G0)return t.RG_INTEGER;if(s===V0)return t.RGBA_INTEGER;if(s===hc||s===dc||s===pc||s===mc)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ip||s===Fp||s===Op||s===zp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ip)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Op)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===W0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kp||s===Bp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===kp)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Bp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hp||s===Gp||s===Vp||s===Wp||s===Xp||s===jp||s===Yp||s===qp||s===$p||s===Kp||s===Qp||s===Zp||s===Jp||s===em)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$p)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===em)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gc||s===tm||s===nm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gc)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===vE||s===im||s===rm||s===sm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===im)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class CA extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ur extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PA={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),c=this._getHandJoint(u,_);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,x=.005;u.inputState.pinching&&d>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ur;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class LA extends no{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,g=null,x=null;const _=n.getContextAttributes();let p=null,c=null;const m=[],v=[],y=new Ve;let b=null;const T=new Hn;T.layers.enable(1),T.viewport=new Vt;const E=new Hn;E.layers.enable(2),E.viewport=new Vt;const P=[T,E],S=new CA;S.layers.enable(1),S.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=m[X];return te===void 0&&(te=new Hc,m[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=m[X];return te===void 0&&(te=new Hc,m[X]=te),te.getGripSpace()},this.getHand=function(X){let te=m[X];return te===void 0&&(te=new Hc,m[X]=te),te.getHandSpace()};function V(X){const te=v.indexOf(X.inputSource);if(te===-1)return;const F=m[te];F!==void 0&&(F.update(X.inputSource,X.frame,u||o),F.dispatchEvent({type:X.type,data:X.inputSource}))}function ne(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",D);for(let X=0;X<m.length;X++){const te=v[X];te!==null&&(v[X]=null,m[X].disconnect(te))}w=null,k=null,e.setRenderTarget(p),g=null,d=null,h=null,r=null,c=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),c=new si(g.framebufferWidth,g.framebufferHeight,{format:ni,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let te=null,F=null,ee=null;_.depth&&(ee=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=_.stencil?$s:kr,F=_.stencil?zr:tr);const j={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(j),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),c=new si(d.textureWidth,d.textureHeight,{format:ni,type:hr,depthTexture:new l_(d.textureWidth,d.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ce=e.properties.get(c);ce.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(X){for(let te=0;te<X.removed.length;te++){const F=X.removed[te],ee=v.indexOf(F);ee>=0&&(v[ee]=null,m[ee].disconnect(F))}for(let te=0;te<X.added.length;te++){const F=X.added[te];let ee=v.indexOf(F);if(ee===-1){for(let ce=0;ce<m.length;ce++)if(ce>=v.length){v.push(F),ee=ce;break}else if(v[ce]===null){v[ce]=F,ee=ce;break}if(ee===-1)break}const j=m[ee];j&&j.connect(F)}}const z=new G,H=new G;function W(X,te,F){z.setFromMatrixPosition(te.matrixWorld),H.setFromMatrixPosition(F.matrixWorld);const ee=z.distanceTo(H),j=te.projectionMatrix.elements,ce=F.projectionMatrix.elements,Z=j[14]/(j[10]-1),ie=j[14]/(j[10]+1),he=(j[9]+1)/j[5],L=(j[9]-1)/j[5],Te=(j[8]-1)/j[0],ae=(ce[8]+1)/ce[0],xe=Z*Te,_e=Z*ae,$e=ee/(-Te+ae),De=$e*-Te;te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ($e),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Z+$e,M=ie+$e,Y=xe-De,le=_e+(ee-De),oe=he*ie/M*R,fe=L*ie/M*R;X.projectionMatrix.makePerspective(Y,le,oe,fe,R,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function N(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;S.near=E.near=T.near=X.near,S.far=E.far=T.far=X.far,(w!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,k=S.far);const te=X.parent,F=S.cameras;N(S,te);for(let ee=0;ee<F.length;ee++)N(F[ee],te);F.length===2?W(S,T,E):S.projectionMatrix.copy(T.projectionMatrix),O(X,S,te)};function O(X,te,F){F===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(F.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)};let U=null;function K(X,te){if(f=te.getViewerPose(u||o),x=te,f!==null){const F=f.views;g!==null&&(e.setRenderTargetFramebuffer(c,g.framebuffer),e.setRenderTarget(c));let ee=!1;F.length!==S.cameras.length&&(S.cameras.length=0,ee=!0);for(let j=0;j<F.length;j++){const ce=F[j];let Z=null;if(g!==null)Z=g.getViewport(ce);else{const he=h.getViewSubImage(d,ce);Z=he.viewport,j===0&&(e.setRenderTargetTextures(c,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(c))}let ie=P[j];ie===void 0&&(ie=new Hn,ie.layers.enable(j),ie.viewport=new Vt,P[j]=ie),ie.matrix.fromArray(ce.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Z.x,Z.y,Z.width,Z.height),j===0&&(S.matrix.copy(ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ee===!0&&S.cameras.push(ie)}}for(let F=0;F<m.length;F++){const ee=v[F],j=m[F];ee!==null&&j!==void 0&&j.update(ee,te,u||o)}U&&U(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),x=null}const J=new o_;J.setAnimationLoop(K),this.setAnimationLoop=function(X){U=X},this.dispose=function(){}}}function DA(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,n_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,m,v,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&g(p,c,y)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),_(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,m,v):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===yn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===yn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const m=e.get(c).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*v,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,m,v){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*m,p.scale.value=v*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function g(p,c,m){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===yn&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function _(p,c){const m=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const y=v.program;i.uniformBlockBinding(m,y)}function u(m,v){let y=r[m.id];y===void 0&&(x(m),y=f(m),r[m.id]=y,m.addEventListener("dispose",p));const b=v.program;i.updateUBOMapping(m,b);const T=e.render.frame;s[m.id]!==T&&(d(m),s[m.id]=T)}function f(m){const v=h();m.__bindingPointIndex=v;const y=t.createBuffer(),b=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const v=r[m.id],y=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,E=y.length;T<E;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,w=P.length;S<w;S++){const k=P[S];if(g(k,T,S,b)===!0){const V=k.__offset,ne=Array.isArray(k.value)?k.value:[k.value];let D=0;for(let z=0;z<ne.length;z++){const H=ne[z],W=_(H);typeof H=="number"||typeof H=="boolean"?(k.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,V+D,k.__data)):H.isMatrix3?(k.__data[0]=H.elements[0],k.__data[1]=H.elements[1],k.__data[2]=H.elements[2],k.__data[3]=0,k.__data[4]=H.elements[3],k.__data[5]=H.elements[4],k.__data[6]=H.elements[5],k.__data[7]=0,k.__data[8]=H.elements[6],k.__data[9]=H.elements[7],k.__data[10]=H.elements[8],k.__data[11]=0):(H.toArray(k.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,y,b){const T=m.value,E=v+"_"+y;if(b[E]===void 0)return typeof T=="number"||typeof T=="boolean"?b[E]=T:b[E]=T.clone(),!0;{const P=b[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return b[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function x(m){const v=m.uniforms;let y=0;const b=16;for(let E=0,P=v.length;E<P;E++){const S=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,k=S.length;w<k;w++){const V=S[w],ne=Array.isArray(V.value)?V.value:[V.value];for(let D=0,z=ne.length;D<z;D++){const H=ne[D],W=_(H),N=y%b;N!==0&&b-N<W.boundary&&(y+=b-N),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=W.storage}}}const T=y%b;return T>0&&(y+=b-T),m.__size=y,m.__cache={},this}function _(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function p(m){const v=m.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function c(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class p_{constructor(e={}){const{canvas:n=PE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const c=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const v=this;let y=!1,b=0,T=0,E=null,P=-1,S=null;const w=new Vt,k=new Vt;let V=null;const ne=new ze(0);let D=0,z=n.width,H=n.height,W=1,N=null,O=null;const U=new Vt(0,0,z,H),K=new Vt(0,0,z,H);let J=!1;const X=new s_;let te=!1,F=!1,ee=null;const j=new ct,ce=new Ve,Z=new G,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return E===null?W:1}let L=i;function Te(A,B){for(let $=0;$<A.length;$++){const Q=A[$],q=n.getContext(Q,B);if(q!==null)return q}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kh}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",me,!1),L===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),L=Te(B,A),L===null)throw Te(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,xe,_e,$e,De,R,M,Y,le,oe,fe,Ae,ye,we,be,Ue,se,Qe,Be,Ie,Ce,Se,Fe,Ze;function et(){ae=new VT(L),xe=new OT(L,ae,e),ae.init(xe),Se=new RA(L,ae,xe),_e=new bA(L,ae,xe),$e=new jT(L),De=new hA,R=new AA(L,ae,_e,De,xe,Se,$e),M=new kT(v),Y=new GT(v),le=new ew(L,xe),Fe=new IT(L,ae,le,xe),oe=new WT(L,le,$e,Fe),fe=new KT(L,oe,le,$e),Be=new $T(L,xe,R),Ue=new zT(De),Ae=new fA(v,M,Y,ae,xe,Fe,Ue),ye=new DA(v,De),we=new pA,be=new yA(ae,xe),Qe=new UT(v,M,Y,_e,fe,d,l),se=new TA(v,fe,xe),Ze=new NA(L,$e,xe,_e),Ie=new FT(L,ae,$e,xe),Ce=new XT(L,ae,$e,xe),$e.programs=Ae.programs,v.capabilities=xe,v.extensions=ae,v.properties=De,v.renderLists=we,v.shadowMap=se,v.state=_e,v.info=$e}et();const He=new LA(v,L);this.xr=He,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(z,H,!1))},this.getSize=function(A){return A.set(z,H)},this.setSize=function(A,B,$=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,H=B,n.width=Math.floor(A*W),n.height=Math.floor(B*W),$===!0&&(n.style.width=A+"px",n.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(z*W,H*W).floor()},this.setDrawingBufferSize=function(A,B,$){z=A,H=B,W=$,n.width=Math.floor(A*$),n.height=Math.floor(B*$),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,B,$,Q){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,B,$,Q),_e.viewport(w.copy(U).multiplyScalar(W).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,B,$,Q){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,B,$,Q),_e.scissor(k.copy(K).multiplyScalar(W).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(A){_e.setScissorTest(J=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,B=!0,$=!0){let Q=0;if(A){let q=!1;if(E!==null){const Me=E.texture.format;q=Me===V0||Me===G0||Me===H0}if(q){const Me=E.texture.type,Re=Me===hr||Me===tr||Me===Qh||Me===zr||Me===k0||Me===B0,Ne=Qe.getClearColor(),Oe=Qe.getClearAlpha(),je=Ne.r,Ge=Ne.g,We=Ne.b;Re?(g[0]=je,g[1]=Ge,g[2]=We,g[3]=Oe,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=je,x[1]=Ge,x[2]=We,x[3]=Oe,L.clearBufferiv(L.COLOR,0,x))}else Q|=L.COLOR_BUFFER_BIT}B&&(Q|=L.DEPTH_BUFFER_BIT),$&&(Q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",me,!1),we.dispose(),be.dispose(),De.dispose(),M.dispose(),Y.dispose(),fe.dispose(),Fe.dispose(),Ze.dispose(),Ae.dispose(),He.dispose(),He.removeEventListener("sessionstart",Ft),He.removeEventListener("sessionend",rt),ee&&(ee.dispose(),ee=null),Ot.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=$e.autoReset,B=se.enabled,$=se.autoUpdate,Q=se.needsUpdate,q=se.type;et(),$e.autoReset=A,se.enabled=B,se.autoUpdate=$,se.needsUpdate=Q,se.type=q}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ge(A){const B=A.target;B.removeEventListener("dispose",ge),Le(B)}function Le(A){Pe(A),De.remove(A)}function Pe(A){const B=De.get(A).programs;B!==void 0&&(B.forEach(function($){Ae.releaseProgram($)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,$,Q,q,Me){B===null&&(B=ie);const Re=q.isMesh&&q.matrixWorld.determinant()<0,Ne=M_(A,B,$,Q,q);_e.setMaterial(Q,Re);let Oe=$.index,je=1;if(Q.wireframe===!0){if(Oe=oe.getWireframeAttribute($),Oe===void 0)return;je=2}const Ge=$.drawRange,We=$.attributes.position;let yt=Ge.start*je,Mn=(Ge.start+Ge.count)*je;Me!==null&&(yt=Math.max(yt,Me.start*je),Mn=Math.min(Mn,(Me.start+Me.count)*je)),Oe!==null?(yt=Math.max(yt,0),Mn=Math.min(Mn,Oe.count)):We!=null&&(yt=Math.max(yt,0),Mn=Math.min(Mn,We.count));const Lt=Mn-yt;if(Lt<0||Lt===1/0)return;Fe.setup(q,Q,Ne,$,Oe);let xi,ht=Ie;if(Oe!==null&&(xi=le.get(Oe),ht=Ce,ht.setIndex(xi)),q.isMesh)Q.wireframe===!0?(_e.setLineWidth(Q.wireframeLinewidth*he()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(q.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),_e.setLineWidth(Ye*he()),q.isLineSegments?ht.setMode(L.LINES):q.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else q.isPoints?ht.setMode(L.POINTS):q.isSprite&&ht.setMode(L.TRIANGLES);if(q.isBatchedMesh)ht.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ht.renderInstances(yt,Lt,q.count);else if($.isInstancedBufferGeometry){const Ye=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pu=Math.min($.instanceCount,Ye);ht.renderInstances(yt,Lt,Pu)}else ht.render(yt,Lt)};function tt(A,B,$){A.transparent===!0&&A.side===di&&A.forceSinglePass===!1?(A.side=yn,A.needsUpdate=!0,va(A,B,$),A.side=mr,A.needsUpdate=!0,va(A,B,$),A.side=di):va(A,B,$)}this.compile=function(A,B,$=null){$===null&&($=A),p=be.get($),p.init(),m.push(p),$.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),A!==$&&A.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(v._useLegacyLights);const Q=new Set;return A.traverse(function(q){const Me=q.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const Ne=Me[Re];tt(Ne,$,q),Q.add(Ne)}else tt(Me,$,q),Q.add(Me)}),m.pop(),p=null,Q},this.compileAsync=function(A,B,$=null){const Q=this.compile(A,B,$);return new Promise(q=>{function Me(){if(Q.forEach(function(Re){De.get(Re).currentProgram.isReady()&&Q.delete(Re)}),Q.size===0){q(A);return}setTimeout(Me,10)}ae.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let nt=null;function xt(A){nt&&nt(A)}function Ft(){Ot.stop()}function rt(){Ot.start()}const Ot=new o_;Ot.setAnimationLoop(xt),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(A){nt=A,He.setAnimationLoop(A),A===null?Ot.stop():Ot.start()},He.addEventListener("sessionstart",Ft),He.addEventListener("sessionend",rt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(B),B=He.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,B,E),p=be.get(A,m.length),p.init(),m.push(p),j.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(j),F=this.localClippingEnabled,te=Ue.init(this.clippingPlanes,F),_=we.get(A,c.length),_.init(),c.push(_),Fn(A,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,O),this.info.render.frame++,te===!0&&Ue.beginShadows();const $=p.state.shadowsArray;if(se.render($,A,B),te===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(_,A),p.setupLights(v._useLegacyLights),B.isArrayCamera){const Q=B.cameras;for(let q=0,Me=Q.length;q<Me;q++){const Re=Q[q];nd(_,A,Re,Re.viewport)}}else nd(_,A,B);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(v,A,B),Fe.resetDefaultState(),P=-1,S=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,c.pop(),c.length>0?_=c[c.length-1]:_=null};function Fn(A,B,$,Q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){Q&&Z.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);const Re=fe.update(A),Ne=A.material;Ne.visible&&_.push(A,Re,Ne,$,Z.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){const Re=fe.update(A),Ne=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Z.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Z.copy(Re.boundingSphere.center)),Z.applyMatrix4(A.matrixWorld).applyMatrix4(j)),Array.isArray(Ne)){const Oe=Re.groups;for(let je=0,Ge=Oe.length;je<Ge;je++){const We=Oe[je],yt=Ne[We.materialIndex];yt&&yt.visible&&_.push(A,Re,yt,$,Z.z,We)}}else Ne.visible&&_.push(A,Re,Ne,$,Z.z,null)}}const Me=A.children;for(let Re=0,Ne=Me.length;Re<Ne;Re++)Fn(Me[Re],B,$,Q)}function nd(A,B,$,Q){const q=A.opaque,Me=A.transmissive,Re=A.transparent;p.setupLightsView($),te===!0&&Ue.setGlobalState(v.clippingPlanes,$),Me.length>0&&S_(q,Me,B,$),Q&&_e.viewport(w.copy(Q)),q.length>0&&ga(q,B,$),Me.length>0&&ga(Me,B,$),Re.length>0&&ga(Re,B,$),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function S_(A,B,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Me=xe.isWebGL2;ee===null&&(ee=new si(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?Ni:hr,minFilter:qs,samples:Me?4:0})),v.getDrawingBufferSize(ce),Me?ee.setSize(ce.x,ce.y):ee.setSize($f(ce.x),$f(ce.y));const Re=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(ne),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=fr,ga(A,$,Q),R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee);let Oe=!1;for(let je=0,Ge=B.length;je<Ge;je++){const We=B[je],yt=We.object,Mn=We.geometry,Lt=We.material,xi=We.group;if(Lt.side===di&&yt.layers.test(Q.layers)){const ht=Lt.side;Lt.side=yn,Lt.needsUpdate=!0,id(yt,$,Q,Mn,Lt,xi),Lt.side=ht,Lt.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee)),v.setRenderTarget(Re),v.setClearColor(ne,D),v.toneMapping=Ne}function ga(A,B,$){const Q=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Me=A.length;q<Me;q++){const Re=A[q],Ne=Re.object,Oe=Re.geometry,je=Q===null?Re.material:Q,Ge=Re.group;Ne.layers.test($.layers)&&id(Ne,B,$,Oe,je,Ge)}}function id(A,B,$,Q,q,Me){A.onBeforeRender(v,B,$,Q,q,Me),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(v,B,$,Q,A,Me),q.transparent===!0&&q.side===di&&q.forceSinglePass===!1?(q.side=yn,q.needsUpdate=!0,v.renderBufferDirect($,B,Q,q,A,Me),q.side=mr,q.needsUpdate=!0,v.renderBufferDirect($,B,Q,q,A,Me),q.side=di):v.renderBufferDirect($,B,Q,q,A,Me),A.onAfterRender(v,B,$,Q,q,Me)}function va(A,B,$){B.isScene!==!0&&(B=ie);const Q=De.get(A),q=p.state.lights,Me=p.state.shadowsArray,Re=q.state.version,Ne=Ae.getParameters(A,q.state,Me,B,$),Oe=Ae.getProgramCacheKey(Ne);let je=Q.programs;Q.environment=A.isMeshStandardMaterial?B.environment:null,Q.fog=B.fog,Q.envMap=(A.isMeshStandardMaterial?Y:M).get(A.envMap||Q.environment),je===void 0&&(A.addEventListener("dispose",ge),je=new Map,Q.programs=je);let Ge=je.get(Oe);if(Ge!==void 0){if(Q.currentProgram===Ge&&Q.lightsStateVersion===Re)return sd(A,Ne),Ge}else Ne.uniforms=Ae.getUniforms(A),A.onBuild($,Ne,v),A.onBeforeCompile(Ne,v),Ge=Ae.acquireProgram(Ne,Oe),je.set(Oe,Ge),Q.uniforms=Ne.uniforms;const We=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Ue.uniform),sd(A,Ne),Q.needsLights=w_(A),Q.lightsStateVersion=Re,Q.needsLights&&(We.ambientLightColor.value=q.state.ambient,We.lightProbe.value=q.state.probe,We.directionalLights.value=q.state.directional,We.directionalLightShadows.value=q.state.directionalShadow,We.spotLights.value=q.state.spot,We.spotLightShadows.value=q.state.spotShadow,We.rectAreaLights.value=q.state.rectArea,We.ltc_1.value=q.state.rectAreaLTC1,We.ltc_2.value=q.state.rectAreaLTC2,We.pointLights.value=q.state.point,We.pointLightShadows.value=q.state.pointShadow,We.hemisphereLights.value=q.state.hemi,We.directionalShadowMap.value=q.state.directionalShadowMap,We.directionalShadowMatrix.value=q.state.directionalShadowMatrix,We.spotShadowMap.value=q.state.spotShadowMap,We.spotLightMatrix.value=q.state.spotLightMatrix,We.spotLightMap.value=q.state.spotLightMap,We.pointShadowMap.value=q.state.pointShadowMap,We.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=Ge,Q.uniformsList=null,Ge}function rd(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Rl.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function sd(A,B){const $=De.get(A);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function M_(A,B,$,Q,q){B.isScene!==!0&&(B=ie),R.resetTextureUnits();const Me=B.fog,Re=Q.isMeshStandardMaterial?B.environment:null,Ne=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:zi,Oe=(Q.isMeshStandardMaterial?Y:M).get(Q.envMap||Re),je=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ge=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),We=!!$.morphAttributes.position,yt=!!$.morphAttributes.normal,Mn=!!$.morphAttributes.color;let Lt=fr;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Lt=v.toneMapping);const xi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=xi!==void 0?xi.length:0,Ye=De.get(Q),Pu=p.state.lights;if(te===!0&&(F===!0||A!==S)){const On=A===S&&Q.id===P;Ue.setState(Q,A,On)}let gt=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Pu.state.version||Ye.outputColorSpace!==Ne||q.isBatchedMesh&&Ye.batching===!1||!q.isBatchedMesh&&Ye.batching===!0||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||Ye.envMap!==Oe||Q.fog===!0&&Ye.fog!==Me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ue.numPlanes||Ye.numIntersection!==Ue.numIntersection)||Ye.vertexAlphas!==je||Ye.vertexTangents!==Ge||Ye.morphTargets!==We||Ye.morphNormals!==yt||Ye.morphColors!==Mn||Ye.toneMapping!==Lt||xe.isWebGL2===!0&&Ye.morphTargetsCount!==ht)&&(gt=!0):(gt=!0,Ye.__version=Q.version);let xr=Ye.currentProgram;gt===!0&&(xr=va(Q,B,q));let od=!1,oo=!1,Lu=!1;const jt=xr.getUniforms(),yr=Ye.uniforms;if(_e.useProgram(xr.program)&&(od=!0,oo=!0,Lu=!0),Q.id!==P&&(P=Q.id,oo=!0),od||S!==A){jt.setValue(L,"projectionMatrix",A.projectionMatrix),jt.setValue(L,"viewMatrix",A.matrixWorldInverse);const On=jt.map.cameraPosition;On!==void 0&&On.setValue(L,Z.setFromMatrixPosition(A.matrixWorld)),xe.logarithmicDepthBuffer&&jt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&jt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,oo=!0,Lu=!0)}if(q.isSkinnedMesh){jt.setOptional(L,q,"bindMatrix"),jt.setOptional(L,q,"bindMatrixInverse");const On=q.skeleton;On&&(xe.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),jt.setValue(L,"boneTexture",On.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(jt.setOptional(L,q,"batchingTexture"),jt.setValue(L,"batchingTexture",q._matricesTexture,R));const Du=$.morphAttributes;if((Du.position!==void 0||Du.normal!==void 0||Du.color!==void 0&&xe.isWebGL2===!0)&&Be.update(q,$,xr),(oo||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,jt.setValue(L,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(yr.envMap.value=Oe,yr.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),oo&&(jt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&E_(yr,Lu),Me&&Q.fog===!0&&ye.refreshFogUniforms(yr,Me),ye.refreshMaterialUniforms(yr,Q,W,H,ee),Rl.upload(L,rd(Ye),yr,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Rl.upload(L,rd(Ye),yr,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&jt.setValue(L,"center",q.center),jt.setValue(L,"modelViewMatrix",q.modelViewMatrix),jt.setValue(L,"normalMatrix",q.normalMatrix),jt.setValue(L,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const On=Q.uniformsGroups;for(let Nu=0,T_=On.length;Nu<T_;Nu++)if(xe.isWebGL2){const ad=On[Nu];Ze.update(ad,xr),Ze.bind(ad,xr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xr}function E_(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function w_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,B,$){De.get(A.texture).__webglTexture=B,De.get(A.depthTexture).__webglTexture=$;const Q=De.get(A);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const $=De.get(A);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,$=0){E=A,b=B,T=$;let Q=!0,q=null,Me=!1,Re=!1;if(A){const Oe=De.get(A);Oe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(L.FRAMEBUFFER,null),Q=!1):Oe.__webglFramebuffer===void 0?R.setupRenderTarget(A):Oe.__hasExternalTextures&&R.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Re=!0);const Ge=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?q=Ge[B][$]:q=Ge[B],Me=!0):xe.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?q=De.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?q=Ge[$]:q=Ge,w.copy(A.viewport),k.copy(A.scissor),V=A.scissorTest}else w.copy(U).multiplyScalar(W).floor(),k.copy(K).multiplyScalar(W).floor(),V=J;if(_e.bindFramebuffer(L.FRAMEBUFFER,q)&&xe.drawBuffers&&Q&&_e.drawBuffers(A,q),_e.viewport(w),_e.scissor(k),_e.setScissorTest(V),Me){const Oe=De.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,$)}else if(Re){const Oe=De.get(A.texture),je=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oe.__webglTexture,$||0,je)}P=-1},this.readRenderTargetPixels=function(A,B,$,Q,q,Me,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){_e.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const Oe=A.texture,je=Oe.format,Ge=Oe.type;if(je!==ni&&Se.convert(je)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===Ni&&(ae.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ge!==hr&&Se.convert(Ge)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===nr&&(xe.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Q&&$>=0&&$<=A.height-q&&L.readPixels(B,$,Q,q,Se.convert(je),Se.convert(Ge),Me)}finally{const Oe=E!==null?De.get(E).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(A,B,$=0){const Q=Math.pow(2,-$),q=Math.floor(B.image.width*Q),Me=Math.floor(B.image.height*Q);R.setTexture2D(B,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,A.x,A.y,q,Me),_e.unbindTexture()},this.copyTextureToTexture=function(A,B,$,Q=0){const q=B.image.width,Me=B.image.height,Re=Se.convert($.format),Ne=Se.convert($.type);R.setTexture2D($,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,$.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Q,A.x,A.y,q,Me,Re,Ne,B.image.data):B.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Q,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Re,B.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,Q,A.x,A.y,Re,Ne,B.image),Q===0&&$.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(A,B,$,Q,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=A.max.x-A.min.x+1,Re=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,Oe=Se.convert(Q.format),je=Se.convert(Q.type);let Ge;if(Q.isData3DTexture)R.setTexture3D(Q,0),Ge=L.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)R.setTexture2DArray(Q,0),Ge=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Q.unpackAlignment);const We=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mn=L.getParameter(L.UNPACK_SKIP_PIXELS),Lt=L.getParameter(L.UNPACK_SKIP_ROWS),xi=L.getParameter(L.UNPACK_SKIP_IMAGES),ht=$.isCompressedTexture?$.mipmaps[q]:$.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,A.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,A.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?L.texSubImage3D(Ge,q,B.x,B.y,B.z,Me,Re,Ne,Oe,je,ht.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ge,q,B.x,B.y,B.z,Me,Re,Ne,Oe,ht.data)):L.texSubImage3D(Ge,q,B.x,B.y,B.z,Me,Re,Ne,Oe,je,ht),L.pixelStorei(L.UNPACK_ROW_LENGTH,We),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xi),q===0&&Q.generateMipmaps&&L.generateMipmap(Ge),_e.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){b=0,T=0,E=null,_e.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zh?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===Au?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Br:X0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Br?At:zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class UA extends p_{}UA.prototype.isWebGL1Renderer=!0;class m_ extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class qm extends Jt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ms=new ct,$m=new ct,cl=[],Km=new $r,IA=new ct,Mo=new en,Eo=new ro;class fl extends en{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new qm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,IA)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new $r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ms),Km.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(Km)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ro),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ms),Eo.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Eo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(i),e.ray.intersectsSphere(Eo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ms),$m.multiplyMatrices(i,ms),Mo.matrixWorld=$m,Mo.raycast(e,cl);for(let o=0,a=cl.length;o<a;o++){const l=cl[o];l.instanceId=s,l.object=this,n.push(l)}cl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new qm(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class g_ extends da{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qm=new ct,Qf=new Q0,hl=new ro,dl=new G;class v_ extends Sn{constructor(e=new Nn,n=new g_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;Qm.copy(r).invert(),Qf.copy(e.ray).applyMatrix4(Qm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,_=g;x<_;x++){const p=u.getX(x);dl.fromBufferAttribute(h,p),Zm(dl,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,_=g;x<_;x++)dl.fromBufferAttribute(h,x),Zm(dl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zm(t,e,n,i,r,s,o){const a=Qf.distanceSqToPoint(t);if(a<n){const l=new G;Qf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Qs extends nn{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Jm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class FA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return u.push(f,h),this},this.removeHandler=function(f){const h=u.indexOf(f);return h!==-1&&u.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=u.length;h<d;h+=2){const g=u[h],x=u[h+1];if(g.global&&(g.lastIndex=0),g.test(f))return x}return null}}}const OA=new FA;class ed{constructor(e){this.manager=e!==void 0?e:OA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ed.DEFAULT_MATERIAL_NAME="__DEFAULT";class zA extends ed{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ra("img");function l(){f(),Jm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(h){f(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class kA extends ed{constructor(e){super(e)}load(e,n,i,r){const s=new nn,o=new zA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class BA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=eg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function eg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);const HA={fftSize:2048,smoothingFactor:.8,lowCutoff:250,midCutoff:4e3,sampleRate:44100};class GA{constructor(e={}){ve(this,"audioContext",null);ve(this,"analyser",null);ve(this,"source",null);ve(this,"stream",null);ve(this,"audioElement",null);ve(this,"currentBlobUrl",null);ve(this,"config");ve(this,"frequencyData",null);ve(this,"smoothedBands",{low:0,mid:0,high:0});this.config={...HA,...e}}async initMic(){this.cleanupSource(),this.stream=await navigator.mediaDevices.getUserMedia({audio:!0}),this.audioContext=new AudioContext({sampleRate:this.config.sampleRate}),this.config.sampleRate=this.audioContext.sampleRate,this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.config.fftSize,this.analyser.smoothingTimeConstant=this.config.smoothingFactor,this.analyser.minDecibels=-80,this.analyser.maxDecibels=-10,this.source=this.audioContext.createMediaStreamSource(this.stream),this.source.connect(this.analyser),this.frequencyData=new Uint8Array(this.analyser.frequencyBinCount)}async loadFile(e){this.currentBlobUrl&&(URL.revokeObjectURL(this.currentBlobUrl),this.currentBlobUrl=null),this.cleanupSource(),this.audioContext||(this.audioContext=new AudioContext({sampleRate:this.config.sampleRate}));const n=URL.createObjectURL(e),i=new Audio;return i.crossOrigin="anonymous",i.loop=!0,new Promise(r=>{let s=!1;i.oncanplaythrough=()=>{var o;s||(s=!0,((o=this.audioContext)==null?void 0:o.state)==="suspended"&&this.audioContext.resume(),this.audioElement=i,this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.config.fftSize,this.analyser.smoothingTimeConstant=this.config.smoothingFactor,this.analyser.minDecibels=-80,this.analyser.maxDecibels=-10,this.source=this.audioContext.createMediaElementSource(i),this.source.connect(this.analyser),this.analyser.connect(this.audioContext.destination),this.frequencyData=new Uint8Array(this.analyser.frequencyBinCount),this.currentBlobUrl=n,r(!0))},i.onerror=()=>{URL.revokeObjectURL(n),r(!1)},i.src=n})}cleanupSource(){var e;this.stream&&this.stream.getTracks().forEach(n=>n.stop()),(e=this.source)==null||e.disconnect(),this.audioElement=null,this.stream=null,this.source=null,this.currentBlobUrl&&(URL.revokeObjectURL(this.currentBlobUrl),this.currentBlobUrl=null)}play(){var e;(e=this.audioElement)==null||e.play()}pause(){var e;(e=this.audioElement)==null||e.pause()}get isPlaying(){return this.audioElement?!this.audioElement.paused:!1}get currentTime(){var e;return((e=this.audioElement)==null?void 0:e.currentTime)??0}get duration(){var e;return((e=this.audioElement)==null?void 0:e.duration)??0}set currentTime(e){this.audioElement&&(this.audioElement.currentTime=e)}setSmoothingFactor(e){this.config.smoothingFactor=Math.max(0,Math.min(1,e)),this.analyser&&(this.analyser.smoothingTimeConstant=this.config.smoothingFactor)}getFrequencyData(){return this.frequencyData?new Uint8Array(this.frequencyData):new Uint8Array(0)}get frequencyBinCount(){var e;return((e=this.frequencyData)==null?void 0:e.length)??0}getFrequencyBands(){var u;if(!this.analyser||!this.frequencyData)return this.smoothedBands;this.analyser.getByteFrequencyData(this.frequencyData);const e=this.frequencyData.length,i=(((u=this.audioContext)==null?void 0:u.sampleRate)??44100)/2/e,r=Math.floor(this.config.lowCutoff/i),s=Math.floor(this.config.midCutoff/i),o=this.avg(0,r),a=this.avg(r,s),l=this.avg(s,e);return this.smoothedBands={low:o/255,mid:a/255,high:l/255},this.smoothedBands}avg(e,n){if(!this.frequencyData||e>=n)return 0;let i=0;for(let r=e;r<n;r++)i+=this.frequencyData[r];return i/(n-e)}hasAudioSource(){return!!(this.source||this.stream)}dispose(){var e;this.cleanupSource(),(e=this.audioContext)==null||e.close(),this.audioContext=null,this.analyser=null,this.frequencyData=null}}const __={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ma{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const VA=new a_(-1,1,1,-1,0,1);class WA extends Nn{constructor(){super(),this.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oi([0,2,0,0,2,0],2))}}const XA=new WA;class x_{constructor(e){this._mesh=new en(XA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class y_ extends ma{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ru.clone(e.uniforms),this.material=new tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new x_(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class tg extends ma{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class jA extends ma{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class YA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ve);this._width=i.width,this._height=i.height,n=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ni}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new y_(__),this.copyPass.material.blending=Di,this.clock=new BA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}tg!==void 0&&(o instanceof tg?i=!0:o instanceof jA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qA extends ma{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const $A={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ve(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},KA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Zs extends ma{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ve(e.x,e.y):new Ve(256,256),this.clearColor=new ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new si(s,o,{type:Ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new si(s,o,{type:Ni});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const g=new si(s,o,{type:Ni});g.texture.name="UnrealBloomPass.v"+h,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),s=Math.round(s/2),o=Math.round(o/2)}const a=KA;this.highPassUniforms=ru.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ve(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=__;this.copyUniforms=ru.clone(f.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ze,this.oldClearAlpha=1,this.basic=new pi,this.fsQuad=new x_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ve(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new tn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ve(.5,.5)},direction:{value:new Ve(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new tn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Zs.BlurDirectionX=new Ve(1,0);Zs.BlurDirectionY=new Ve(0,1);class QA{constructor(e){ve(this,"scene");ve(this,"camera");ve(this,"renderer");ve(this,"composer",null);ve(this,"bloomPass",null);ve(this,"fxaaPass",null);const n=window.devicePixelRatio||1,i=Math.min(2,n*1.5),{canvas:r,pixelRatio:s=i,fxaa:o=!0,bloom:a=!0,transparent:l=!1}=e;if(this.scene=new m_,this.camera=new Hn(60,r.width/r.height,.1,1e3),this.camera.position.z=5,this.renderer=new p_({canvas:r,antialias:!0,alpha:l,powerPreference:"high-performance"}),this.renderer.setPixelRatio(s),this.renderer.setSize(r.width,r.height,!1),this.renderer.setClearColor(657935,l?0:1),this.renderer.toneMapping=F0,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=At,o||a){this.composer=new YA(this.renderer);const u=new qA(this.scene,this.camera);if(this.composer.addPass(u),o){this.fxaaPass=new y_($A),typeof this.fxaaPass.material.fragmentShader=="string"&&(this.fxaaPass.material.fragmentShader=this.fxaaPass.material.fragmentShader.replace(/gl_FragColor\s*=\s*vec4\s*\(\s*([^,]+)\s*,\s*1\.0\s*\)\s*;/,"gl_FragColor = vec4($1, texture2D(tDiffuse, vUv).a);"),this.fxaaPass.material.needsUpdate=!0);const f=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(r.width*f),1/(r.height*f)),this.composer.addPass(this.fxaaPass)}a&&(this.bloomPass=new Zs(new Ve(r.width,r.height),e.bloomStrength??.5,e.bloomRadius??.4,.85),this.composer.addPass(this.bloomPass))}}resize(e,n){if(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1),this.composer){if(this.composer.setSize(e,n),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.fxaaPass){const i=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(e*i),1/(n*i))}this.bloomPass&&this.bloomPass.resolution.set(e,n)}}getSize(e){return this.renderer.getSize(e)}render(){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}dispose(){this.scene.traverse(e=>{const n=e;n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>r.dispose())}),this.renderer.dispose()}}const ZA={lowScale:1,midScale:1,highScale:1,minFloor:0,maxCeiling:1};class JA{constructor(e={}){ve(this,"config");this.config={...ZA,...e}}setConfig(e){Object.assign(this.config,e)}map(e){const{minFloor:n,maxCeiling:i,lowScale:r,midScale:s,highScale:o}=this.config,a=h=>Math.max(n,Math.min(i,h)),l=a(e.low*r),u=a(e.mid*s),f=a(e.high*o);return{low:l,mid:u,high:f,energy:Math.min(1,(l+u+f)/3)}}}class eR{constructor(){ve(this,"effects",[])}setEffects(e,n){this.dispose(),this.effects=[],e.forEach(i=>{i.init(n),this.effects.push(i)})}update(e,n){for(const i of this.effects)i.update(e,n)}getEffects(){return this.effects}dispose(){for(const e of this.effects)e.dispose();this.effects=[]}}const qi=800,wo=20;function tR(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");if(!n)return new Qs(e);n.clearRect(0,0,128,128);const i=128/2,r=n.createRadialGradient(i,i,0,i,i,i);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.beginPath(),n.arc(i,i,i,0,Math.PI*2),n.closePath(),n.fill();const s=new Qs(e);return s.needsUpdate=!0,s}function nR(){const n=document.createElement("canvas");n.width=256,n.height=8;const i=n.getContext("2d");if(!i)return new Qs(n);i.clearRect(0,0,256,8);const r=i.createLinearGradient(0,0,256,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.15,"rgba(255,255,255,0.15)"),r.addColorStop(.6,"rgba(255,255,255,0.65)"),r.addColorStop(1,"rgba(255,255,255,1)"),i.fillStyle=r,i.fillRect(0,0,256,8);const s=new Qs(n);return s.needsUpdate=!0,s.wrapS=Bt,s.wrapT=Bt,s.minFilter=kt,s.magFilter=kt,s}class td{constructor(){ve(this,"scene",null);ve(this,"groups",[]);ve(this,"streakMeshes",[]);ve(this,"geometries",[]);ve(this,"streakGeometries",[]);ve(this,"material",null);ve(this,"streakMaterial",null);ve(this,"params",{baseSize:.04,rotationSpeed:2,maxGroups:20,hue:.55,opacity:.8,shape:0,tilt:0,rotationMode:0,planeDir:0});ve(this,"rotationY",0);ve(this,"rotationX",0);ve(this,"rotationZ",0);ve(this,"velocities",[]);ve(this,"streakPositions",[])}init(e){this.scene=e,this.rotationY=0,this.rotationX=0,this.rotationZ=0,this.velocities=[],this.streakPositions=[],this.streakMeshes=[],this.streakGeometries=[],this.material=new g_({size:this.params.baseSize,color:4491519,transparent:!0,opacity:this.params.opacity,sizeAttenuation:!0,depthWrite:!1,blending:Rn,map:tR(),alphaTest:.4}),this.streakMaterial=new pi({color:16777215,transparent:!0,opacity:1,depthWrite:!1,blending:Rn,map:nR()});for(let n=0;n<wo;n++){const i=this.createPositionsForGroup(n),r=this.createVelocitiesForGroup(n),s=new Nn;s.setAttribute("position",new Jt(i,3));const o=new v_(s,this.material);this.groups.push(o),this.geometries.push(s),this.velocities.push(r),e.add(o);const a=qi*4,l=new Float32Array(a*3),u=new Float32Array(a*2),f=new Uint32Array(qi*6);for(let g=0;g<qi;g++){const x=g*4;u[(x+0)*2]=0,u[(x+0)*2+1]=0,u[(x+1)*2]=0,u[(x+1)*2+1]=1,u[(x+2)*2]=1,u[(x+2)*2+1]=0,u[(x+3)*2]=1,u[(x+3)*2+1]=1;const _=g*6;f[_+0]=x+0,f[_+1]=x+2,f[_+2]=x+1,f[_+3]=x+2,f[_+4]=x+3,f[_+5]=x+1}const h=new Nn;h.setAttribute("position",new Jt(l,3)),h.setAttribute("uv",new Jt(u,2)),h.setIndex(new Jt(f,1));const d=new en(h,this.streakMaterial);d.visible=!1,this.streakPositions.push(l),this.streakGeometries.push(h),this.streakMeshes.push(d),e.add(d)}}createPositionsForGroup(e){const n=new Float32Array(qi*3),i=this.params.shape,r=3.5;for(let s=0;s<qi;s++)if(i===0){const o=r*Math.pow(Math.random(),.3333333333333333),a=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);n[s*3]=o*Math.sin(l)*Math.cos(a),n[s*3+1]=o*Math.cos(l),n[s*3+2]=o*Math.sin(l)*Math.sin(a)}else if(i===1){const o=r*Math.sqrt(Math.random()),a=Math.random()*Math.PI*2;n[s*3]=Math.cos(a)*o,n[s*3+1]=(Math.random()-.5)*.15,n[s*3+2]=Math.sin(a)*o}else n[s*3]=(Math.random()*2-1)*r,n[s*3+1]=(Math.random()*2-1)*r,n[s*3+2]=(Math.random()*2-1)*.15;return n}createVelocitiesForGroup(e){const n=new Float32Array(qi*3);if(this.params.shape!==2)return n;const i=td.dirFromPad(this.params.planeDir),r=Math.atan2(i.y,i.x);for(let s=0;s<qi;s++){let o;this.params.planeDir===0?o=Math.random()*Math.PI*2:o=r+(Math.random()*2-1)*.25;const a=.8+Math.random()*.6;n[s*3]=Math.cos(o)*a,n[s*3+1]=Math.sin(o)*a,n[s*3+2]=(Math.random()*2-1)*.05}return n}static dirFromPad(e){const i=[[0,0],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]][Math.max(0,Math.min(8,Math.round(e)))],r=Math.hypot(i[0],i[1])||1;return{x:i[0]/r,y:i[1]/r}}update(e,n){var d;if(!this.material||!this.groups.length)return;const{mapped:i}=e;i.low;const r=i.mid,s=i.high,o=i.energy;this.material.size=this.params.baseSize*(.3+o*2);const a=this.params.hue+s*.3;this.material.color.copy(new ze().setHSL(a,.7,.6)),this.material.opacity=this.params.opacity,this.streakMaterial&&(this.streakMaterial.opacity=Math.min(1,.18+o*.55)*this.params.opacity,this.streakMaterial.color.copy(new ze().setHSL(a,.8,.65)));const l=Math.min(wo,Math.max(1,Math.round(this.params.maxGroups))),u=Math.max(1,Math.floor(1+s*(l-1)));for(let g=0;g<wo;g++)this.groups[g].visible=g<u;if(this.params.shape===2){const g=(.4+o*2.2)*this.params.rotationSpeed*.55,x=3.8;for(let _=0;_<wo;_++){if(!((d=this.groups[_])!=null&&d.visible)){this.streakMeshes[_]&&(this.streakMeshes[_].visible=!1);continue}const c=this.geometries[_].getAttribute("position");if(!c)continue;const m=c.array,v=this.velocities[_]??new Float32Array(0),y=this.streakPositions[_];for(let E=0;E<qi;E++){const P=E*3;m[P]+=(v[P]??0)*g*n,m[P+1]+=(v[P+1]??0)*g*n,m[P+2]+=(v[P+2]??0)*g*n,m[P]>x?m[P]=-x:m[P]<-x&&(m[P]=x),m[P+1]>x?m[P+1]=-x:m[P+1]<-x&&(m[P+1]=x);const S=v[P]??0,w=v[P+1]??0,k=v[P+2]??0,V=1/(Math.hypot(S,w,k)+1e-6),ne=S*V,D=w*V,z=k*V,H=-D,W=ne,N=1/(Math.hypot(H,W)+1e-6),O=H*N,U=W*N,K=.35+o*1.1,J=.02+o*.035,X=m[P],te=m[P+1],F=m[P+2],ee=X-ne*K,j=te-D*K,ce=F-z*K,Z=E*4;pl(y,(Z+0)*3,ee-O*J,j-U*J,ce),pl(y,(Z+1)*3,ee+O*J,j+U*J,ce),pl(y,(Z+2)*3,X-O*J,te-U*J,F),pl(y,(Z+3)*3,X+O*J,te+U*J,F)}c.needsUpdate=!0,this.groups[_].rotation.set(0,0,0);const T=this.streakGeometries[_].getAttribute("position");T.needsUpdate=!0,this.streakMeshes[_]&&(this.streakMeshes[_].visible=!0)}return}this.streakMeshes.forEach(g=>g.visible=!1);const f=this.params.rotationMode;this.rotationY+=r*this.params.rotationSpeed*.03*60*n,f>=1&&(this.rotationX+=r*this.params.rotationSpeed*.018*60*n),f>=2&&(this.rotationZ+=r*this.params.rotationSpeed*.012*60*n);const h=this.params.shape===1?(1-this.params.tilt)*(Math.PI/2):0;this.groups.forEach(g=>{g.rotation.y=this.rotationY,g.rotation.x=h+(f>=1?this.rotationX:0),g.rotation.z=f>=2?this.rotationZ:0})}setParams(e){const n=e,i=this.params.shape,r=this.params.planeDir;if(typeof n.baseSize=="number"&&(this.params.baseSize=Math.max(.01,Math.min(.16,n.baseSize))),typeof n.rotationSpeed=="number"&&(this.params.rotationSpeed=Math.max(0,Math.min(6,n.rotationSpeed))),typeof n.maxGroups=="number"&&(this.params.maxGroups=Math.max(1,Math.min(20,Math.round(n.maxGroups)))),typeof n.hue=="number"&&(this.params.hue=Math.max(0,Math.min(1,n.hue))),typeof n.opacity=="number"&&(this.params.opacity=Math.max(.2,Math.min(1,n.opacity))),typeof n.shape=="number"&&(this.params.shape=Math.max(0,Math.min(2,Math.round(n.shape)))),typeof n.tilt=="number"&&(this.params.tilt=Math.max(0,Math.min(1,n.tilt))),typeof n.rotationMode=="number"&&(this.params.rotationMode=Math.max(0,Math.min(2,Math.round(n.rotationMode)))),typeof n.planeDir=="number"&&(this.params.planeDir=Math.max(0,Math.min(8,Math.round(n.planeDir)))),this.geometries.length>0&&(this.params.shape!==i||this.params.shape===2&&this.params.planeDir!==r)){for(let o=0;o<this.geometries.length;o++){const l=this.geometries[o].getAttribute("position");if(!l)continue;const u=this.createPositionsForGroup(o);l.array.set(u),l.needsUpdate=!0}this.velocities=[];for(let o=0;o<wo;o++)this.velocities.push(this.createVelocitiesForGroup(o))}}dispose(){var e,n;this.scene&&(this.groups.forEach(i=>this.scene.remove(i)),this.streakMeshes.forEach(i=>this.scene.remove(i))),this.geometries.forEach(i=>i.dispose()),this.streakGeometries.forEach(i=>i.dispose()),(e=this.material)==null||e.dispose(),(n=this.streakMaterial)==null||n.dispose(),this.groups=[],this.streakMeshes=[],this.geometries=[],this.streakGeometries=[],this.velocities=[],this.streakPositions=[],this.material=null,this.streakMaterial=null,this.scene=null}}function pl(t,e,n,i,r){t[e]=n,t[e+1]=i,t[e+2]=r}const gs=64,iR=1.5,rR=`varying vec2 vUv; varying float vDepth; varying vec2 vNdc;
void main(){
  vUv=uv;
  vDepth=position.z;
  vec4 clip=projectionMatrix*modelViewMatrix*vec4(position,1.0);
  vNdc=clip.xy/clip.w;
  gl_Position=clip;
}`,sR=`uniform float uTime; uniform float uPulse; uniform float uWaveSpeed; uniform vec3 uColor1; uniform vec3 uColor2;
uniform sampler2D uImage; uniform float uUseImage; uniform float uImageMix;
uniform vec2 uImageAspect; uniform float uImageRot; uniform float uViewAspect;
varying vec2 vUv; varying float vDepth; varying vec2 vNdc;

vec2 rot2(vec2 p,float a){
  float cs=cos(a), sn=sin(a);
  return vec2(p.x*cs-p.y*sn, p.x*sn+p.y*cs);
}

vec2 coverUv(vec2 uv,float viewAsp,float imgAsp){
  vec2 p=uv-0.5;
  // Cover：让图片填满（可能裁切），保证圆内不会出现“边缘拉伸/空白”
  if(viewAsp>imgAsp){
    p.x*=viewAsp/max(imgAsp,0.0001);
  }else{
    p.y*=imgAsp/max(viewAsp,0.0001);
  }
  return p+0.5;
}

void main(){
  float r=vUv.x*6.283;float w=sin(r*8.0-uTime*uWaveSpeed*10.0)*0.5+0.5;
  vec3 col=mix(uColor1,uColor2,w)*(uPulse*w+0.5);
  if(uUseImage>0.5){
    // 使用屏幕空间 UV：让图片“刚体”旋转，不跟着隧道 UV 扭曲
    vec2 suv=vNdc*0.5+0.5;
    vec2 p=rot2(suv-0.5,uImageRot);

    // 最大化圆形裁切（内切圆），按 viewport aspect 修正得到真正的圆
    vec2 pm=p;
    pm.x*=max(uViewAspect,0.0001);
    float d=length(pm);
    float mask=1.0-smoothstep(0.5-0.003,0.5+0.003,d);

    // cover 缩放：图片不变形填充，再裁切成圆
    float imgAsp=(uImageAspect.y>0.0)?(uImageAspect.x/uImageAspect.y):1.0;
    vec2 uvImg=coverUv(p+0.5,max(uViewAspect,0.0001),imgAsp);
    vec3 img=texture2D(uImage,uvImg).rgb;
    col=mix(col,img,clamp(uImageMix,0.0,1.0)*mask);
  }
  gl_FragColor=vec4(col,(1.0-vDepth*0.5)*0.9);
}`;class oR{constructor(){ve(this,"scene",null);ve(this,"mesh",null);ve(this,"geometry",null);ve(this,"material",null);ve(this,"texture",null);ve(this,"textureAspect",new Ve(1,1));ve(this,"loader",new kA);ve(this,"params",{imageEnabled:!1,imageMix:.6})}init(e){this.scene=e;const n=[],i=[];for(let a=0;a<=32;a++){const l=-a/32*6,u=iR*(1+l*.1);for(let f=0;f<=gs;f++){const h=f/gs*Math.PI*2;n.push(Math.cos(h)*u,Math.sin(h)*u,l),i.push(f/gs,a/32)}}const r=[];for(let a=0;a<32;a++)for(let l=0;l<gs;l++){const u=a*(gs+1)+l,f=u+gs+1;r.push(u,f,u+1,u+1,f,f+1)}this.geometry=new Nn,this.geometry.setAttribute("position",new oi(n,3)),this.geometry.setAttribute("uv",new oi(i,2)),this.geometry.setIndex(r);const s=new ze().setHSL(.6,.8,.5),o=new ze().setHSL(.75,.8,.6);this.material=new tn({vertexShader:rR,fragmentShader:sR,uniforms:{uTime:{value:0},uPulse:{value:1},uWaveSpeed:{value:1},uColor1:{value:new G(s.r,s.g,s.b)},uColor2:{value:new G(o.r,o.g,o.b)},uImage:{value:this.texture??new nn},uUseImage:{value:0},uImageMix:{value:this.params.imageMix},uImageAspect:{value:this.textureAspect},uImageRot:{value:0},uViewAspect:{value:1}},transparent:!0,depthWrite:!1,side:di}),this.mesh=new en(this.geometry,this.material),e.add(this.mesh),this.applyImageParams()}update(e,n){if(!this.material||!this.mesh)return;const{mapped:i}=e;this.material.uniforms.uTime.value+=n,this.material.uniforms.uPulse.value=.5+i.low,this.material.uniforms.uWaveSpeed.value=.5+i.mid;const r=.6+i.high*.2,s=new ze().setHSL(r,.8,.5),o=new ze().setHSL(r+.1,.8,.6);this.material.uniforms.uColor1.value.set(s.r,s.g,s.b),this.material.uniforms.uColor2.value.set(o.r,o.g,o.b),this.mesh.rotation.z+=n*(.2+i.mid*.3),this.material.uniforms.uImageRot.value=this.mesh.rotation.z;const a=e.resolution&&e.resolution.height>0?e.resolution.width/e.resolution.height:1;this.material.uniforms.uViewAspect.value=a}setParams(e){const n=e;typeof n.imageEnabled=="boolean"&&(this.params.imageEnabled=n.imageEnabled),typeof n.imageMix=="number"&&(this.params.imageMix=Math.max(0,Math.min(1,n.imageMix))),this.applyImageParams()}setImage(e){var n;if(!e){(n=this.texture)==null||n.dispose(),this.texture=null,this.material&&(this.material.uniforms.uUseImage.value=0);return}this.loader.load(e,i=>{this.texture&&this.texture!==i&&this.texture.dispose(),this.texture=i,i.colorSpace=At,i.wrapS=Bt,i.wrapT=Bt,i.minFilter=qs,i.magFilter=kt,i.generateMipmaps=!0,i.needsUpdate=!0;const r=i.image,s=typeof(r==null?void 0:r.width)=="number"?r.width:1,o=typeof(r==null?void 0:r.height)=="number"?r.height:1;this.textureAspect.set(Math.max(1,s),Math.max(1,o)),this.material&&(this.material.uniforms.uImage.value=i,this.material.uniforms.uImageAspect.value=this.textureAspect,this.applyImageParams())},void 0,()=>{})}applyImageParams(){if(!this.material)return;this.material.uniforms.uImageMix.value=this.params.imageMix;const e=this.params.imageEnabled&&!!this.texture;this.material.uniforms.uUseImage.value=e?1:0,this.texture&&(this.material.uniforms.uImage.value=this.texture,this.material.uniforms.uImageAspect.value=this.textureAspect)}dispose(){var e,n,i;this.scene&&this.mesh&&this.scene.remove(this.mesh),(e=this.geometry)==null||e.dispose(),(n=this.material)==null||n.dispose(),(i=this.texture)==null||i.dispose(),this.texture=null,this.mesh=this.geometry=this.material=null,this.scene=null}}const Tn=128,ml=.08;class aR{constructor(){ve(this,"scene",null);ve(this,"group",null);ve(this,"bars",[]);ve(this,"geometries",[]);ve(this,"material",null);ve(this,"heights",new Float32Array(Tn));ve(this,"bandMeans",new Float32Array(Tn));ve(this,"params",{tilt:0,style:0,radius:.7,barMode:1,heightScale:.7,barWidth:.5});ve(this,"angles",[]);ve(this,"radialDirs",[])}init(e){this.scene=e,this.group=new Ur,this.group.renderOrder=10,this.material=new pi({color:43775,transparent:!0,opacity:1,depthTest:!0});for(let n=0;n<Tn;n++){const i=new Kr(.02,ml,.02);this.geometries.push(i);const r=new en(i,this.material),s=n/Tn*Math.PI*2;this.angles[n]=s,this.radialDirs[n]=new G(Math.cos(s),0,Math.sin(s)).normalize(),r.position.set(Math.cos(s)*2,ml/2,Math.sin(s)*2),r.rotation.y=-s,this.group.add(r),this.bars.push(r),this.bandMeans[n]=.05}e.add(this.group)}update(e,n){var ee;if(!this.group)return;const{frequencyData:i,binCount:r,mapped:s}=e,o=r>0?r/Tn:1,a=new Float32Array(Tn);for(let j=0;j<Tn;j++){let ce=0;const Z=Math.floor(j*o),ie=Math.floor((j+1)*o),he=ie-Z;if(he>0){for(let ae=Z;ae<ie;ae++)ce+=i[ae]??0;a[j]=ce/he/255}else a[j]=0;const L=this.bandMeans[j],Te=.01;this.bandMeans[j]=L+(a[j]-L)*Te}const l=new Float32Array(Tn),u=.001;for(let j=0;j<Tn;j++){const ce=Math.max(u,this.bandMeans[j]);l[j]=a[j]/ce}let f=l[0],h=l[0];for(let j=1;j<Tn;j++){const ce=l[j];ce<f&&(f=ce),ce>h&&(h=ce)}const d=h-f,g=.75,x=d<1e-6;for(let j=0;j<Tn;j++){const ce=x?0:(l[j]-f)/d,Z=Math.pow(Math.min(1,ce),g),ie=x?.05:Z*(.4+s.energy*.6);this.heights[j]+=(ie-this.heights[j])*.1}const _=.55+s.high*.2;(ee=this.material)==null||ee.color.copy(new ze().setHSL(_,.8,.6));const p=.9+s.low*.8,c=.8+s.energy*3,m=this.params.heightScale,v=this.params.barMode>=.5,y=this.params.radius,b=this.params.barWidth,T=.008,P=T+(.18-T)*b,S=5,w=60*Math.PI/180,k=S*Math.tan(w/2),V=e.resolution&&e.resolution.height>0?e.resolution.width/e.resolution.height:1,ne=k*V,D=k*.95,z=2,H=z*y,W=Math.max(.2,ne*.95-H),N=D*m,O=W*m,U=Math.PI*2/Tn,K=H*U,J=Math.max(0,K*.7),X=Math.min(P,J||P);for(let j=0;j<Tn;j++){const ce=this.heights[j]*1.3*c*p,Z=Math.min(1,ce),ie=Z*Z;let he=Math.max(.04,ie);const L=this.bars[j];if(L)if(L.scale.x=X/.02,L.scale.z=X/.02,v){he=Math.min(O,ie*O);const Te=this.radialDirs[j],xe=Te.clone().multiplyScalar(z).clone().addScaledVector(Te,he/2);L.position.copy(xe),L.scale.y=he/ml}else he=Math.min(N,ie*N),L.scale.y=he/ml,L.position.y=he/2}const te=(1-this.params.tilt)*(Math.PI/2);this.group.rotation.x=te,this.group.scale.set(y,y,y);const F=this.params.style>=.5;this.material&&(this.material.blending=F?Rn:Or),this.group.rotation.y=0}setParams(e){const n=e;typeof n.tilt=="number"&&(this.params.tilt=Math.max(0,Math.min(1,n.tilt))),typeof n.style=="number"&&(this.params.style=Math.max(0,Math.min(1,n.style))),typeof n.radius=="number"&&(this.params.radius=Math.max(.3,Math.min(2,n.radius))),typeof n.barMode=="number"&&(this.params.barMode=Math.max(0,Math.min(1,n.barMode))),typeof n.heightScale=="number"&&(this.params.heightScale=Math.max(.2,Math.min(1,n.heightScale))),typeof n.barWidth=="number"&&(this.params.barWidth=Math.max(0,Math.min(1,n.barWidth)))}dispose(){var e;this.scene&&this.group&&this.scene.remove(this.group),this.geometries.forEach(n=>n.dispose()),this.geometries=[],(e=this.material)==null||e.dispose(),this.bars=[],this.group=null,this.material=null,this.scene=null}}const lR=.02;class uR{constructor(){ve(this,"scene",null);ve(this,"group",null);ve(this,"bars",null);ve(this,"barsRef",null);ve(this,"barsGlow",null);ve(this,"barsRefGlow",null);ve(this,"mat",null);ve(this,"matRef",null);ve(this,"matGlow",null);ve(this,"matRefGlow",null);ve(this,"glow",null);ve(this,"glowMat",null);ve(this,"barGeo",null);ve(this,"glowGeo",null);ve(this,"barCount",128);ve(this,"heights",new Float32Array(128));ve(this,"params",{barCount:128,length:.95,color:"#4fc3ff",showReflection:!0,showBaseline:!0,flipX:!1,flipY:!1,hue:.55,saturation:.85,lightness:.65,opacity:.95,heightScale:1,reflection:.65,glow:.9,glowSize:.9,gap:.25,smoothing:.18})}init(e){this.scene=e,this.group=new Ur,this.group.renderOrder=50,this.barGeo=new Kr(1,1,1),this.mat=new pi({color:16777215,transparent:!0,opacity:this.params.opacity,depthWrite:!1,blending:Rn}),this.matRef=new pi({color:16777215,transparent:!0,opacity:this.params.opacity*this.params.reflection,depthWrite:!1,blending:Rn}),this.matGlow=new pi({color:16777215,transparent:!0,opacity:.4,depthWrite:!1,blending:Rn}),this.matRefGlow=new pi({color:16777215,transparent:!0,opacity:.2,depthWrite:!1,blending:Rn}),this.rebuildBars(this.barCount);const n=this.createGlowTexture();this.glowMat=new pi({map:n,transparent:!0,opacity:.8,depthWrite:!1,blending:Rn}),this.glowGeo=new pa(1,1),this.glow=new en(this.glowGeo,this.glowMat),this.glow.frustumCulled=!1,this.glow.renderOrder=49,this.group.add(this.glow),e.add(this.group)}update(e,n){if(!this.group||!this.bars||!this.barsRef||!this.barsGlow||!this.barsRefGlow||!this.mat||!this.matRef||!this.matGlow||!this.matRefGlow||!this.glow)return;const{frequencyData:i,binCount:r,mapped:s}=e,o=this.barCount,a=r>0?r/o:1,l=5,u=60*Math.PI/180,f=l*Math.tan(u/2),h=e.resolution&&e.resolution.height>0?e.resolution.width/e.resolution.height:1,d=f*h,g=f*.9*this.params.heightScale,x=d*2*this.params.length,_=x/o,p=Math.max(.004,_*(1-this.params.gap)),c=Math.max(.002,Math.min(.08,lR*(.6+p*6))),m=0,v=this.params.showReflection,y=this.params.showBaseline;this.barsRef.visible=v,this.barsRefGlow.visible=v,this.glow.visible=y,this.group.scale.x=this.params.flipX?-1:1,this.group.scale.y=this.params.flipY?-1:1;const b=cR(this.params.color)??new ze().setHSL(this.params.hue,this.params.saturation,this.params.lightness);this.mat.color.copy(b),this.mat.opacity=this.params.opacity,this.matRef.color.copy(b),this.matRef.opacity=v?this.params.opacity*this.params.reflection:0,this.matGlow.color.copy(b),this.matGlow.opacity=this.params.opacity*.5*this.params.glow,this.matRefGlow.color.copy(b),this.matRefGlow.opacity=v?this.params.opacity*this.params.reflection*.35*this.params.glow:0,this.glowMat.color.copy(b),this.glowMat.opacity=y?.35+s.energy*.6:0,this.glow.position.set(0,m,0),this.glow.scale.set(x,Math.max(.06,g*.12),1);let T=1,E=0;const P=new Float32Array(o);for(let W=0;W<o;W++){let N=0;const O=Math.floor(W*a),U=Math.floor((W+1)*a),K=U-O;if(K>0){for(let J=O;J<U;J++)N+=i[J]??0;P[W]=N/K/255}else P[W]=0;P[W]<T&&(T=P[W]),P[W]>E&&(E=P[W])}const S=Math.max(1e-6,E-T),w=new ct,k=new ct,V=new ct,ne=new ct,D=new io,z=new G,H=new G;for(let W=0;W<o;W++){const N=(P[W]-T)/S,U=Math.pow(Math.min(1,N),.75)*(.2+s.energy*1.2),K=this.params.smoothing;this.heights[W]+=(U-this.heights[W])*K;const J=Math.max(.01,this.heights[W]*g),X=-x/2+(W+.5)*_;z.set(X,m+J/2,0),H.set(p,J,c),w.compose(z,D,H),this.bars.setMatrixAt(W,w);const te=J*(.65+this.params.reflection*.35);z.set(X,m-te/2,0),H.set(p,te,c),k.compose(z,D,H),this.barsRef.setMatrixAt(W,k);const F=1+this.params.glowSize*.9;z.set(X,m+J/2,0),H.set(p*F,J*F,c*(1.2+this.params.glowSize)),V.compose(z,D,H),this.barsGlow.setMatrixAt(W,V),z.set(X,m-te/2,0),H.set(p*F,te*F,c*(1.2+this.params.glowSize)),ne.compose(z,D,H),this.barsRefGlow.setMatrixAt(W,ne)}this.bars.instanceMatrix.needsUpdate=!0,this.barsRef.instanceMatrix.needsUpdate=!0,this.barsGlow.instanceMatrix.needsUpdate=!0,this.barsRefGlow.instanceMatrix.needsUpdate=!0}setParams(e){const n=e;if(typeof n.barCount=="number"){const i=Math.max(16,Math.min(512,Math.round(n.barCount)));i!==this.barCount&&(this.barCount=i,this.params.barCount=i,this.heights=new Float32Array(i),this.group&&this.rebuildBars(i))}typeof n.length=="number"&&(this.params.length=Math.max(.5,Math.min(2,n.length))),typeof n.color=="string"&&(this.params.color=n.color),typeof n.showReflection=="boolean"&&(this.params.showReflection=n.showReflection),typeof n.showBaseline=="boolean"&&(this.params.showBaseline=n.showBaseline),typeof n.flipX=="boolean"&&(this.params.flipX=n.flipX),typeof n.flipY=="boolean"&&(this.params.flipY=n.flipY),typeof n.hue=="number"&&(this.params.hue=Math.max(0,Math.min(1,n.hue))),typeof n.saturation=="number"&&(this.params.saturation=Math.max(0,Math.min(1,n.saturation))),typeof n.lightness=="number"&&(this.params.lightness=Math.max(0,Math.min(1,n.lightness))),typeof n.opacity=="number"&&(this.params.opacity=Math.max(.05,Math.min(1,n.opacity))),typeof n.heightScale=="number"&&(this.params.heightScale=Math.max(.2,Math.min(1.5,n.heightScale))),typeof n.reflection=="number"&&(this.params.reflection=Math.max(0,Math.min(1,n.reflection))),typeof n.glow=="number"&&(this.params.glow=Math.max(0,Math.min(2,n.glow))),typeof n.glowSize=="number"&&(this.params.glowSize=Math.max(0,Math.min(2,n.glowSize))),typeof n.gap=="number"&&(this.params.gap=Math.max(0,Math.min(.8,n.gap))),typeof n.smoothing=="number"&&(this.params.smoothing=Math.max(.02,Math.min(.6,n.smoothing)))}dispose(){var e,n,i,r,s,o,a,l,u;this.scene&&this.group&&this.scene.remove(this.group),(e=this.barGeo)==null||e.dispose(),(n=this.mat)==null||n.dispose(),(i=this.matRef)==null||i.dispose(),(r=this.matGlow)==null||r.dispose(),(s=this.matRefGlow)==null||s.dispose(),(o=this.glowGeo)==null||o.dispose(),(l=(a=this.glowMat)==null?void 0:a.map)==null||l.dispose(),(u=this.glowMat)==null||u.dispose(),this.group=null,this.bars=null,this.barsRef=null,this.barsGlow=null,this.barsRefGlow=null,this.mat=null,this.matRef=null,this.matGlow=null,this.matRefGlow=null,this.glow=null,this.glowMat=null,this.barGeo=null,this.glowGeo=null,this.scene=null}rebuildBars(e){!this.group||!this.barGeo||!this.mat||!this.matRef||(this.bars&&this.group.remove(this.bars),this.barsRef&&this.group.remove(this.barsRef),this.barsGlow&&this.group.remove(this.barsGlow),this.barsRefGlow&&this.group.remove(this.barsRefGlow),this.bars=new fl(this.barGeo,this.mat,e),this.barsRef=new fl(this.barGeo,this.matRef,e),this.barsGlow=new fl(this.barGeo,this.matGlow,e),this.barsRefGlow=new fl(this.barGeo,this.matRefGlow,e),this.bars.frustumCulled=!1,this.barsRef.frustumCulled=!1,this.barsGlow.frustumCulled=!1,this.barsRefGlow.frustumCulled=!1,this.group.add(this.bars),this.group.add(this.barsRef),this.group.add(this.barsGlow),this.group.add(this.barsRefGlow))}createGlowTexture(){const i=document.createElement("canvas");i.width=256,i.height=64;const r=i.getContext("2d");if(!r)return new Qs(i);r.clearRect(0,0,256,64);const s=r.createLinearGradient(0,64/2,0,64);s.addColorStop(0,"rgba(255,255,255,0.9)"),s.addColorStop(.4,"rgba(255,255,255,0.35)"),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,256,64);const o=new Qs(i);return o.needsUpdate=!0,o.wrapS=Bt,o.wrapT=Bt,o.minFilter=kt,o.magFilter=kt,o}}function cR(t){const e=t.trim();if(!e)return null;const n=new ze;try{return n.set(e),n}catch{return null}}const fR=new pa(2,2),hR=`varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,dR=`
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform float uTime;
uniform float uEnergy;
uniform vec3 uColor;
uniform float uOpacity;
uniform float uIntensity;
uniform float uRadius;
uniform float uThickness;
uniform float uNoise;
uniform float uSpeed;

varying vec2 vUv;

float hash21(vec2 p){
  p = fract(p*vec2(123.34, 456.21));
  p += dot(p, p+45.32);
  return fract(p.x*p.y);
}

float noise2(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}

float fbm(vec2 p){
  float v = 0.0;
  float a = 0.5;
  for(int i=0;i<5;i++){
    v += a * noise2(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

float noise3(vec3 p){
  return (noise2(p.xy) + noise2(p.yz) + noise2(p.zx)) / 3.0;
}

float fbm3(vec3 p){
  float v = 0.0;
  float a = 0.55;
  for(int i=0;i<4;i++){
    v += a * noise3(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

void main(){
  // centered coordinates
  vec2 uv = vUv - 0.5;
  float aspect = uResolution.y > 0.0 ? uResolution.x / uResolution.y : 1.0;
  uv.x *= aspect;

  float r = length(uv);
  float ang = atan(uv.y, uv.x);

  float t = uTime * (0.55 + uSpeed);
  float aa = fwidth(r) * 1.35 + 0.001;

  // Seamless angular domain: use unit circle instead of raw angle for noise inputs
  vec2 ca = vec2(cos(ang), sin(ang));

  float radius = uRadius;
  float thick = uThickness * (0.8 + uEnergy * 0.9);

  // Flow field around the ring (pseudo-3D fbm, seam-free)
  vec3 fp = vec3(ca * 1.35, r * 2.2);
  float flow1 = fbm3(fp * 2.2 + vec3(0.0, t * 0.35, -t * 0.22)) * 2.0 - 1.0;
  float flow2 = fbm3(fp * 4.4 + vec3(t * 0.28, 0.0, t * 0.18)) * 2.0 - 1.0;
  float warp = (flow1 * 0.9 + flow2 * 0.55) * uNoise * 0.055;

  // Thickness variation along the ring (membrane look)
  float thickV = thick * (0.65 + 0.55 * (fbm3(vec3(ca * 2.1, t * 0.12)) * 0.9 + 0.1));

  // Base ring mask (thin film)
  float d = abs(r - (radius + warp));
  float ring = smoothstep(thickV + aa, thickV - aa, d);

  // Edge glow emphasis (brighter at membrane edge)
  float edge = smoothstep(thickV * 0.95, thickV * 0.15, d);
  edge = pow(edge, 1.35);

  // Filament ridges that run along the membrane
  float ridgeN = fbm3(vec3(ca * 7.2, (r - radius) * 18.0 + t * 0.55));
  float ridges = smoothstep(0.58, 0.9, ridgeN);
  ridges = pow(ridges, 3.2) * ring * edge;

  // Outer wisps / smoke-like trails
  float outerD = max(0.0, r - (radius + thick * 0.72));
  float outerGlow = exp(-outerD * outerD * 75.0);
  float wispN = fbm3(vec3(ca * 3.8 + vec2(flow2, flow1) * 0.35, t * 0.25));
  float wisps = outerGlow * pow(wispN, 2.2) * (0.55 + uEnergy * 0.75);

  // Subtle inner glow (keep center mostly transparent)
  float innerD = max(0.0, (radius - thick * 0.65) - r);
  float innerGlow = exp(-innerD * innerD * 120.0) * 0.28;

  // Energy pulse
  float pulse = 0.55 + uEnergy * 1.05;

  vec3 baseCol = uColor;
  vec3 hotCol = mix(uColor, vec3(0.18, 0.72, 1.0), 0.55);

  // Color: deep -> hot edge, plus filament highlights
  vec3 col = baseCol * (0.12 + 0.32 * pulse);
  col += hotCol * (edge * (0.85 + 0.9 * pulse));
  col += hotCol * (ridges * (1.6 + 1.4 * uEnergy));
  col += baseCol * (wisps * 0.95 + innerGlow * 0.25);
  col *= uIntensity;

  float a = (ring * 0.75 + edge * 0.25 + ridges * 0.65 + wisps * 0.55 + innerGlow * 0.18) * uOpacity;
  gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
}
`;class pR{constructor(){ve(this,"scene",null);ve(this,"mesh",null);ve(this,"material",null);ve(this,"params",{color:"#3fd2ff",opacity:.95,intensity:1.1,radius:.62,thickness:.08,noise:1,speed:.9})}init(e){this.scene=e,this.material=new tn({vertexShader:hR,fragmentShader:dR,uniforms:{uResolution:{value:new Ve(1,1)},uTime:{value:0},uEnergy:{value:.4},uColor:{value:new G(.25,.8,1)},uOpacity:{value:this.params.opacity},uIntensity:{value:this.params.intensity},uRadius:{value:this.params.radius},uThickness:{value:this.params.thickness},uNoise:{value:this.params.noise},uSpeed:{value:this.params.speed}},transparent:!0,depthWrite:!1,depthTest:!1,blending:Rn}),this.mesh=new en(fR,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,e.add(this.mesh),this.applyParams()}update(e,n){var i,r;this.material&&(this.material.uniforms.uTime.value+=n,this.material.uniforms.uEnergy.value=e.mapped.energy,this.material.uniforms.uResolution.value.set(((i=e.resolution)==null?void 0:i.width)??1,((r=e.resolution)==null?void 0:r.height)??1))}setParams(e){const n=e;typeof n.color=="string"&&(this.params.color=n.color),typeof n.opacity=="number"&&(this.params.opacity=Math.max(.05,Math.min(1,n.opacity))),typeof n.intensity=="number"&&(this.params.intensity=Math.max(.1,Math.min(3,n.intensity))),typeof n.radius=="number"&&(this.params.radius=Math.max(.1,Math.min(1.2,n.radius))),typeof n.thickness=="number"&&(this.params.thickness=Math.max(.01,Math.min(.4,n.thickness))),typeof n.noise=="number"&&(this.params.noise=Math.max(0,Math.min(2,n.noise))),typeof n.speed=="number"&&(this.params.speed=Math.max(0,Math.min(2,n.speed))),this.applyParams()}dispose(){var e;this.scene&&this.mesh&&this.scene.remove(this.mesh),(e=this.material)==null||e.dispose(),this.mesh=null,this.material=null,this.scene=null}applyParams(){if(!this.material)return;const e=new ze;try{e.set(this.params.color)}catch{e.set("#3fd2ff")}this.material.uniforms.uColor.value.set(e.r,e.g,e.b),this.material.uniforms.uOpacity.value=this.params.opacity,this.material.uniforms.uIntensity.value=this.params.intensity,this.material.uniforms.uRadius.value=this.params.radius,this.material.uniforms.uThickness.value=this.params.thickness,this.material.uniforms.uNoise.value=this.params.noise,this.material.uniforms.uSpeed.value=this.params.speed}}const mR=`
uniform float uTime;
uniform float uEnergy;
uniform vec3 uK;
uniform float uOmega;
uniform float uAmp;
uniform float uSharpness;
uniform float uPointSize;
uniform float uOpacity;

varying float vA;

void main(){
  // plane wave: u(x,t) = sin(k·x - ωt)
  float phase = dot(uK, position) - uOmega * uTime;
  float u = sin(phase);
  float a = pow(abs(u), uSharpness);
  // energy increases contrast slightly
  a *= (0.75 + uEnergy * 0.9);
  vA = clamp(a, 0.0, 1.0);

  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  // perspective correct point size
  float dist = max(0.001, -mv.z);
  gl_PointSize = uPointSize * (1.0 / dist) * 300.0;
}
`,gR=`
#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 uColor;
uniform float uOpacity;

varying float vA;

void main(){
  // soft circular sprite
  vec2 p = gl_PointCoord - vec2(0.5);
  float d = dot(p, p);
  float m = smoothstep(0.25, 0.0, d); // 0 at edge, 1 at center

  float a = vA * m * uOpacity;
  vec3 col = uColor * (0.25 + 1.35 * vA);
  gl_FragColor = vec4(col, a);
}
`;class vR{constructor(){ve(this,"scene",null);ve(this,"points",null);ve(this,"geo",null);ve(this,"mat",null);ve(this,"group",null);ve(this,"t",0);ve(this,"params",{color:"#ff2b2b",opacity:.95,pointSize:.018,grid:18,spacing:.22,k:2.8,theta:.08,phi:.52,omega:2.2,sharpness:4.2,amp:1,rotateSpeed:.18,reactOmega:.9,reactPointSize:.9,reactSharpness:.35,reactK:.35,reactRotate:.65})}init(e){this.scene=e,this.t=0,this.group=new Ur,this.group.renderOrder=20,e.add(this.group),this.build(),this.applyParams()}update(e,n){if(!this.mat||!this.group)return;this.t+=n,this.mat.uniforms.uTime.value=this.t;const i=e.mapped.energy;this.mat.uniforms.uEnergy.value=i;const r=this.params.omega*(1+i*this.params.reactOmega),s=this.params.pointSize*(1+i*this.params.reactPointSize),o=this.params.sharpness*(1+i*this.params.reactSharpness),a=this.params.k*(1+i*this.params.reactK),l=this.computeDir();this.mat.uniforms.uK.value.copy(l.multiplyScalar(a)),this.mat.uniforms.uOmega.value=Nt(r,0,8),this.mat.uniforms.uPointSize.value=Nt(s,.004,.06),this.mat.uniforms.uSharpness.value=Nt(o,1,10);const u=this.params.rotateSpeed*(.35+e.mapped.mid*1.2)*(1+i*this.params.reactRotate);this.group.rotation.y+=u*n,this.group.rotation.x+=u*.35*n}setParams(e){const n=e,i=this.params.grid,r=this.params.spacing;typeof n.color=="string"&&(this.params.color=n.color),typeof n.opacity=="number"&&(this.params.opacity=Nt(n.opacity,.05,1)),typeof n.pointSize=="number"&&(this.params.pointSize=Nt(n.pointSize,.004,.06)),typeof n.grid=="number"&&(this.params.grid=Math.max(6,Math.min(40,Math.round(n.grid)))),typeof n.spacing=="number"&&(this.params.spacing=Nt(n.spacing,.08,.55)),typeof n.k=="number"&&(this.params.k=Nt(n.k,.2,10)),typeof n.theta=="number"&&(this.params.theta=Nt(n.theta,0,1)),typeof n.phi=="number"&&(this.params.phi=Nt(n.phi,0,1)),typeof n.omega=="number"&&(this.params.omega=Nt(n.omega,0,8)),typeof n.sharpness=="number"&&(this.params.sharpness=Nt(n.sharpness,1,10)),typeof n.amp=="number"&&(this.params.amp=Nt(n.amp,0,2)),typeof n.rotateSpeed=="number"&&(this.params.rotateSpeed=Nt(n.rotateSpeed,0,1.2)),typeof n.reactOmega=="number"&&(this.params.reactOmega=Nt(n.reactOmega,0,2)),typeof n.reactPointSize=="number"&&(this.params.reactPointSize=Nt(n.reactPointSize,0,2)),typeof n.reactSharpness=="number"&&(this.params.reactSharpness=Nt(n.reactSharpness,0,2)),typeof n.reactK=="number"&&(this.params.reactK=Nt(n.reactK,0,2)),typeof n.reactRotate=="number"&&(this.params.reactRotate=Nt(n.reactRotate,0,2)),!!this.geo&&(this.params.grid!==i||this.params.spacing!==r)&&this.build(),this.applyParams()}dispose(){var e,n;this.scene&&this.group&&this.scene.remove(this.group),this.group&&this.points&&this.group.remove(this.points),(e=this.geo)==null||e.dispose(),(n=this.mat)==null||n.dispose(),this.points=null,this.geo=null,this.mat=null,this.group=null,this.scene=null}build(){var u;if(!this.group)return;this.points&&this.group.remove(this.points),(u=this.geo)==null||u.dispose();const e=this.params.grid,n=this.params.spacing,i=(e-1)*.5*n,r=e*e*e,s=new Float32Array(r*3);let o=0;for(let f=0;f<e;f++)for(let h=0;h<e;h++)for(let d=0;d<e;d++)s[o++]=d*n-i,s[o++]=h*n-i,s[o++]=f*n-i;const a=new Nn;a.setAttribute("position",new Jt(s,3)),a.computeBoundingSphere(),this.geo=a,this.mat||(this.mat=new tn({vertexShader:mR,fragmentShader:gR,uniforms:{uTime:{value:0},uEnergy:{value:.4},uK:{value:new G(1,0,0)},uOmega:{value:this.params.omega},uAmp:{value:this.params.amp},uSharpness:{value:this.params.sharpness},uPointSize:{value:this.params.pointSize},uColor:{value:new ze(16722731)},uOpacity:{value:this.params.opacity}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Rn}));const l=new v_(a,this.mat);l.frustumCulled=!1,this.points=l,this.group.add(l),this.group.scale.setScalar(1),this.group.position.set(0,0,0),this.group.rotation.set(.15,.55,0)}applyParams(){if(!this.mat)return;const e=new ze;try{e.set(this.params.color)}catch{e.set("#ff2b2b")}const n=this.computeDir();this.mat.uniforms.uK.value.copy(n.multiplyScalar(this.params.k)),this.mat.uniforms.uOmega.value=this.params.omega,this.mat.uniforms.uAmp.value=this.params.amp,this.mat.uniforms.uSharpness.value=this.params.sharpness,this.mat.uniforms.uPointSize.value=this.params.pointSize,this.mat.uniforms.uColor.value.copy(e),this.mat.uniforms.uOpacity.value=this.params.opacity}computeDir(){const e=this.params.theta*Math.PI*2,n=(this.params.phi*2-1)*(Math.PI/2)*.85;return new G(Math.cos(e)*Math.cos(n),Math.sin(n),Math.sin(e)*Math.cos(n)).normalize()}}function Nt(t,e,n){return Math.max(e,Math.min(n,t))}function _R({audioFile:t,isPlaying:e,onProgressUpdate:n,onSeekRef:i,activeImageUrl:r,backgroundVideoUrl:s,backgroundVideoFit:o,layers:a,activeLayerId:l,onLayerRectChange:u,audioMapping:f,canvasConfig:h}){const{setLayerParam:d,setActiveLayer:g}=fa(),x=re.useRef(null),_=re.useRef(null),p=re.useRef(null),[c,m]=re.useState({w:800,h:600}),v=re.useRef(c);v.current=c;const[y,b]=re.useState({}),[T,E]=re.useState(!0),P=re.useRef({}),S=re.useRef(null),w=re.useRef(f);w.current=f;const k=re.useRef(null),V=re.useRef(new Map),ne=re.useMemo(()=>a.filter(F=>F.visible),[a]),D=re.useRef(ne);D.current=ne;const z=re.useMemo(()=>({w:Math.max(1,h.width),h:Math.max(1,h.height)}),[h.height,h.width]),H=re.useRef(z);H.current=z;const W=re.useCallback(F=>{switch(F){case"particles":return new td;case"tunnel":return new oR;case"spectrum":return new aR;case"equalizer":return new uR;case"energyField":return new pR;case"planeWaveLattice":return new vR;default:throw new Error(`Unknown effect id: ${F}`)}},[]),N=re.useCallback((F,ee=!1)=>{const j=p.current;if(!j||!j.src)return;const ce=Number.isFinite(j.duration)&&j.duration>0?j.duration:0;let Z=ce>0?F%ce:F;ce>0&&Z>ce-.05&&(Z=ce-.05);const ie=Number.isFinite(j.currentTime)?j.currentTime:0,he=Math.abs(ie-Z);if(ee||he>.12)try{j.currentTime=Math.max(0,Z)}catch{}},[]);re.useEffect(()=>{const F=ee=>{const j=_.current;if(!j)return;const ce=ee.target,Z=!!ce&&j.contains(ce);E(Z)};return window.addEventListener("pointerdown",F,!0),()=>window.removeEventListener("pointerdown",F,!0)},[]),re.useEffect(()=>{l&&E(!0)},[l]),re.useEffect(()=>{const F=_.current;if(!F)return;const ee=document.createElement("canvas");ee.style.position="absolute",ee.style.inset="0",ee.style.width="100%",ee.style.height="100%",ee.style.display="block",ee.style.pointerEvents="none",ee.style.zIndex="1",F.appendChild(ee);const j=Math.max(F.clientWidth||800,1),ce=Math.max(F.clientHeight||600,1);ee.width=j,ee.height=ce;const Z=new GA,ie=new JA,he=new QA({canvas:ee,transparent:!0,bloom:!1,fxaa:!1,pixelRatio:Math.min(1.5,window.devicePixelRatio||1)});he.renderer.autoClear=!1,k.current={audio:Z,mapping:ie,visual:he,canvas:ee};let L,Te=0;const ae=()=>{var Ce;const xe=k.current;if(!xe)return;const{audio:_e,mapping:$e,visual:De}=xe,R=w.current,M=v.current,Y=D.current,le=H.current;$e.setConfig({lowScale:R.sensitivity,midScale:R.sensitivity,highScale:R.sensitivity,minFloor:R.min,maxCeiling:R.max}),_e.setSmoothingFactor(R.smoothing);const oe=_e.getFrequencyBands(),fe=$e.map(oe),Ae=_e.getFrequencyData(),ye=R.enabled?fe:{low:.3,mid:.3,high:.3,energy:.3};if(p.current&&s&&e){const Se=performance.now();Se-Te>250&&(N(_e.currentTime,!1),Te=Se)}const be=De.renderer,Ue=De.camera,se=be.getPixelRatio(),Qe=M.w*se,Be=M.h*se;be.setScissorTest(!1),be.setViewport(0,0,Qe,Be),be.setClearColor(0,0),be.clear(!0,!0,!0);const Ie=V.current;for(let Se=0;Se<Y.length;Se++){const Fe=Y[Se],Ze=Ie.get(Fe.id);if(!Ze)continue;const et=P.current[Fe.id]??Fe.rect,He=et.x*Qe,de=et.y*Be,I=Math.max(1,et.w*Qe),me=Math.max(1,et.h*Be),ge=Be-de-me,Le=Math.max(0,He),Pe=Math.max(0,ge),tt=Math.min(Qe,He+I)-Le,nt=Math.min(Be,ge+me)-Pe;if(tt<=0||nt<=0)continue;be.setScissorTest(!0),be.setViewport(He,ge,I,me),be.setScissor(Le,Pe,tt,nt),be.clearDepth(),Ue.aspect=I/me;const xt=(Ce=Fe.params)==null?void 0:Ce.viewRotation,Ft=typeof xt=="number"?xt:0;Ue.rotation.set(0,0,Ft),Ue.updateProjectionMatrix(),Ue.updateMatrixWorld();const rt=Math.max(1,le.w*et.w),Ot=Math.max(1,le.h*et.h),Fn={mapped:ye,frequencyData:Ae,binCount:_e.frequencyBinCount,resolution:{width:rt,height:Ot}};Ze.effectManager.update(Fn,1/60),be.render(Ze.scene,Ue)}be.setScissorTest(!1),Ue.rotation.set(0,0,0),Ue.updateMatrixWorld(),L=requestAnimationFrame(ae)};return L=requestAnimationFrame(ae),()=>{cancelAnimationFrame(L);for(const[,xe]of V.current)xe.effectManager.dispose();V.current.clear(),he.dispose(),Z.dispose(),k.current=null,F.removeChild(ee)}},[]),re.useEffect(()=>{const F=k.current;if(!F)return;const{canvas:ee,visual:j}=F;ee.width=Math.max(1,Math.floor(c.w)),ee.height=Math.max(1,Math.floor(c.h)),j.resize(ee.width,ee.height)},[c.h,c.w]),re.useEffect(()=>{const F=k.current;if(!F)return;(async()=>{if(t){await F.audio.loadFile(t);const j=p.current;if(j)try{j.pause(),j.currentTime=0}catch{}}})()},[t]),re.useEffect(()=>{var ee,j;const F=k.current;F&&(e?(F.audio.play(),N(F.audio.currentTime,!0),(ee=p.current)==null||ee.play().catch(()=>{})):(F.audio.pause(),(j=p.current)==null||j.pause()))},[e,N]),re.useEffect(()=>{var ce;const F=k.current,ee=p.current;if(!ee)return;const j=((ce=F==null?void 0:F.audio)==null?void 0:ce.currentTime)??0;N(j,!0),e?ee.play().catch(()=>{}):ee.pause()},[s,e,N]),re.useEffect(()=>{const F=_.current;if(!F)return;const ee=new ResizeObserver(()=>{const ce=F.getBoundingClientRect();m({w:Math.max(1,ce.width),h:Math.max(1,ce.height)})});ee.observe(F);const j=F.getBoundingClientRect();return m({w:Math.max(1,j.width),h:Math.max(1,j.height)}),()=>ee.disconnect()},[]);const O=re.useCallback(F=>{const ie=Math.max(.05,Math.min(4,F.w)),he=Math.max(.05,Math.min(4,F.h)),L=.03,Te=-ie+L,ae=1-L,xe=-he+L,_e=1-L,$e=Math.max(Te,Math.min(ae,F.x)),De=Math.max(xe,Math.min(_e,F.y));return{x:$e,y:De,w:ie,h:he}},[]),U=re.useCallback((F,ee)=>{b(j=>{const ce={...j};return ee?ce[F]=ee:delete ce[F],P.current=ce,ce})},[]),K=re.useCallback(F=>P.current[F.id]??F.rect,[]);re.useEffect(()=>{var j,ce;const F=V.current,ee=new Set(ne.map(Z=>Z.id));for(const[Z,ie]of F)ee.has(Z)||(ie.effectManager.dispose(),F.delete(Z));for(const Z of ne){const ie=F.get(Z.id);if(!ie||ie.effectId!==Z.effectId){ie&&ie.effectManager.dispose();const L=new m_,Te=new eR,ae=W(Z.effectId);if(ae.setParams(Z.params),"setImage"in ae&&typeof ae.setImage=="function"){const xe=(j=Z.params)==null?void 0:j.imageUrl;ae.setImage(typeof xe=="string"&&xe.length?xe:null)}Te.setEffects([ae],L),F.set(Z.id,{scene:L,effectManager:Te,effect:ae,effectId:Z.effectId})}else if(ie.effect.setParams(Z.params),"setImage"in ie.effect&&typeof ie.effect.setImage=="function"){const L=(ce=Z.params)==null?void 0:ce.imageUrl;ie.effect.setImage(typeof L=="string"&&L.length?L:null)}const he=F.get(Z.id);if(he){const L=Z.rect,Te=Math.max(1,z.w*L.w),ae=Math.max(1,z.h*L.h);for(const xe of he.effectManager.getEffects())"setResolution"in xe&&xe.setResolution(Te,ae)}}},[W,z.h,z.w,ne]),re.useEffect(()=>{const F=k.current;if(!F)return;const ee=setInterval(()=>{n(F.audio.currentTime,F.audio.duration)},100);return()=>clearInterval(ee)},[n]),re.useEffect(()=>{const F=k.current;if(F)return i.current=ee=>{var j;F.audio.currentTime=ee,N(ee,!0),e&&((j=p.current)==null||j.play().catch(()=>{}))},()=>{i.current=()=>{}}},[e,i,N]);const J=h.height>0?h.width/h.height:1,X=h.mode==="portrait"?h.width:Math.min(h.width,1280),te=re.useCallback((F,ee)=>{u(F,ee),U(F,null)},[u,U]);return C.jsx("div",{ref:x,className:"canvas-container",style:{maxWidth:X,aspectRatio:J},children:C.jsxs("div",{ref:_,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:10,border:"1px solid var(--border)",backgroundColor:"transparent",backgroundImage:"linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%),linear-gradient(-45deg, rgba(255,255,255,0.06) 25%, transparent 25%),linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.06) 75%),linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.06) 75%)",backgroundSize:"16px 16px",backgroundPosition:"0 0, 0 8px, 8px -8px, -8px 0px"},children:[s?C.jsx("video",{ref:p,src:s,muted:!0,playsInline:!0,preload:"auto",onCanPlay:F=>{var Z;const ee=F.currentTarget,j=k.current,ce=((Z=j==null?void 0:j.audio)==null?void 0:Z.currentTime)??0;N(ce,!0),e?ee.play().catch(()=>{}):ee.pause()},style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:o,pointerEvents:"none",zIndex:0,transform:"translateZ(0)",backfaceVisibility:"hidden"}}):null,r?C.jsx("img",{src:r,alt:"",draggable:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.35,pointerEvents:"none",zIndex:0}}):null,ne.map((F,ee)=>{const j=K(F),ce=T&&F.id===l,Z=j.x*c.w,ie=j.y*c.h,he=j.w*c.w,L=j.h*c.h;return C.jsx(CM,{position:{x:Z,y:ie},size:{width:he,height:L},enableResizing:{top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1},resizeHandleStyles:{bottomRight:{width:14,height:14,right:0,bottom:0,background:ce?"rgba(58, 143, 255, 0.9)":"rgba(255,255,255,0.15)",borderRadius:2}},style:{zIndex:10+ee,border:ce?"1px solid var(--accent)":"1px solid transparent",boxSizing:"border-box"},onMouseDown:()=>{g(F.id),E(!0)},onDragStart:()=>{g(F.id),E(!0),S.current=F.id,U(F.id,F.rect)},onDrag:(Te,ae)=>{const xe=P.current[F.id]??F.rect,_e=O({...xe,x:ae.x/c.w,y:ae.y/c.h});U(F.id,_e)},onDragStop:(Te,ae)=>{const xe=P.current[F.id]??F.rect,_e=O({...xe,x:ae.x/c.w,y:ae.y/c.h});S.current=null,te(F.id,_e)},onResizeStart:()=>{g(F.id),E(!0),S.current=F.id,U(F.id,F.rect)},onResize:(Te,ae,xe,_e,$e)=>{const De=O({x:$e.x/c.w,y:$e.y/c.h,w:xe.offsetWidth/c.w,h:xe.offsetHeight/c.h});U(F.id,De)},onResizeStop:(Te,ae,xe,_e,$e)=>{const De=O({x:$e.x/c.w,y:$e.y/c.h,w:xe.offsetWidth/c.w,h:xe.offsetHeight/c.h});S.current=null,te(F.id,De)},children:C.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:C.jsx("button",{type:"button",className:"top-bar-btn",onClick:Te=>{var $e;Te.stopPropagation();const ae=($e=F.params)==null?void 0:$e.viewRotation,_e=(typeof ae=="number"?ae:0)+Math.PI/2;d(F.id,"viewRotation",_e)},style:{position:"absolute",top:6,right:6,padding:"2px 6px",fontSize:12,lineHeight:1.2,opacity:.9},title:"Rotate 90°",children:"⟳"})})},F.id)})]})})}function xR(){const{audioFile:t,isPlaying:e,images:n,activeImageId:i,backgroundVideoUrl:r,backgroundVideoFit:s,activeEffectId:o,layers:a,activeLayerId:l,effectParams:u,audioMapping:f,setAudioFile:h,setPlaying:d,addImage:g,setActiveImage:x,addLayer:_,setEffectParam:p,setLayerRect:c,setAudioMapping:m,canvasConfig:v}=fa(),[y,b]=re.useState(0),[T,E]=re.useState(0),P=re.useRef(()=>{}),S=n.find(U=>U.id===i),w=(S==null?void 0:S.url)??null,k=re.useCallback(U=>{},[]),V=re.useCallback(async U=>{h(U,U.name),d(!1)},[h,d]),ne=re.useCallback(U=>{const K=`img-${Date.now()}`,J=URL.createObjectURL(U);g(K,U.name,J),x(K)},[g,x]),D=re.useCallback(()=>{d(!e)},[e,d]),z=re.useCallback(U=>{var K;b(U),(K=P.current)==null||K.call(P,U)},[]);re.useCallback(U=>{const K=n.find(J=>J.url===U);K&&x(K.id)},[n,x]);const H=re.useCallback(U=>{U==="energyField"?_("energyField",{color:"#3fd2ff",opacity:.95,intensity:1.1,radius:.62,thickness:.08,noise:1,speed:.9}):U==="planeWaveLattice"?_("planeWaveLattice",{color:"#ff2b2b",opacity:.95,pointSize:.018,grid:18,spacing:.22,k:2.8,theta:.08,phi:.52,omega:2.2,sharpness:4.2,amp:1,rotateSpeed:.18,reactOmega:.9,reactPointSize:.9,reactSharpness:.35,reactK:.35,reactRotate:.65}):U==="particles"?_("particles",{baseSize:.04,rotationSpeed:2,maxGroups:20,hue:.55,opacity:.8,shape:0,tilt:0,rotationMode:0,planeDir:0}):U==="equalizer"?_("equalizer",{barCount:128,length:.95,color:"#4fc3ff",showReflection:!0,showBaseline:!0,flipX:!1,flipY:!1,hue:.55,saturation:.85,lightness:.65,opacity:.95,heightScale:1,reflection:.65,glow:.9,glowSize:.9,gap:.25,smoothing:.18}):U==="spectrum"?_("spectrum",{tilt:0,style:0,radius:.7,barMode:1,heightScale:.7,barWidth:.5}):U==="tunnel"?_("tunnel",{imageEnabled:!1,imageMix:.6}):_(U)},[_]),W=re.useCallback((U,K)=>{p(U,K)},[p]),N=re.useCallback((U,K)=>{m({[U]:K})},[m]),O=re.useCallback((U,K)=>{b(U),E(K)},[]);return C.jsxs(C.Fragment,{children:[C.jsx(nS,{onImportAudio:V,onImportImage:ne,onImportBackgroundVideo:k}),C.jsxs("div",{className:"main-layout",children:[C.jsx(iS,{onPlayPause:D,onSeek:z,progress:y,duration:T,onSetActiveImage:U=>{const K=n.find(J=>J.url===U);K&&x(K.id)},onSelectEffect:H}),C.jsx("main",{className:"center-panel",children:C.jsx(_R,{audioFile:t,isPlaying:e,onProgressUpdate:O,onSeekRef:P,activeImageUrl:w,backgroundVideoUrl:r,backgroundVideoFit:s,layers:a,activeLayerId:l,onLayerRectChange:c,audioMapping:f,canvasConfig:v})}),C.jsx(yS,{onEffectParamChange:W,onAudioMappingChange:N})]})]})}function yR(){return C.jsx(tS,{children:C.jsx(xR,{})})}Gc.createRoot(document.getElementById("root")).render(C.jsx(Ht.StrictMode,{children:C.jsx(yR,{})}));
