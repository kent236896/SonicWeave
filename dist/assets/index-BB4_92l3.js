var C_=Object.defineProperty;var P_=(t,e,n)=>e in t?C_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Se=(t,e,n)=>P_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function sg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function L_(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var ag={exports:{}},su={},og={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),D_=Symbol.for("react.portal"),N_=Symbol.for("react.fragment"),U_=Symbol.for("react.strict_mode"),I_=Symbol.for("react.profiler"),F_=Symbol.for("react.provider"),O_=Symbol.for("react.context"),z_=Symbol.for("react.forward_ref"),k_=Symbol.for("react.suspense"),B_=Symbol.for("react.memo"),H_=Symbol.for("react.lazy"),ud=Symbol.iterator;function G_(t){return t===null||typeof t!="object"?null:(t=ud&&t[ud]||t["@@iterator"],typeof t=="function"?t:null)}var lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ug=Object.assign,cg={};function Js(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||lg}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fg(){}fg.prototype=Js.prototype;function Jf(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||lg}var eh=Jf.prototype=new fg;eh.constructor=Jf;ug(eh,Js.prototype);eh.isPureReactComponent=!0;var cd=Array.isArray,hg=Object.prototype.hasOwnProperty,th={current:null},dg={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)hg.call(e,i)&&!dg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ro,type:t,key:s,ref:a,props:r,_owner:th.current}}function V_(t,e){return{$$typeof:ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ro}function W_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fd=/\/+/g;function Uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?W_(""+t.key):e.toString(36)}function gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ro:case D_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Uu(a,0):i,cd(r)?(n="",t!=null&&(n=t.replace(fd,"$&/")+"/"),gl(r,e,n,"",function(u){return u})):r!=null&&(nh(r)&&(r=V_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(fd,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",cd(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Uu(s,o);a+=gl(s,e,n,l,r)}else if(l=G_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Uu(s,o++),a+=gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function _o(t,e,n){if(t==null)return t;var i=[],r=0;return gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function j_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},vl={transition:null},X_={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:vl,ReactCurrentOwner:th};function mg(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:_o,forEach:function(t,e,n){_o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _o(t,function(){e++}),e},toArray:function(t){return _o(t,function(e){return e})||[]},only:function(t){if(!nh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=Js;et.Fragment=N_;et.Profiler=I_;et.PureComponent=Jf;et.StrictMode=U_;et.Suspense=k_;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X_;et.act=mg;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ug({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=th.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)hg.call(e,l)&&!dg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:ro,type:t.type,key:r,ref:s,props:i,_owner:a}};et.createContext=function(t){return t={$$typeof:O_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:F_,_context:t},t.Consumer=t};et.createElement=pg;et.createFactory=function(t){var e=pg.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:z_,render:t}};et.isValidElement=nh;et.lazy=function(t){return{$$typeof:H_,_payload:{_status:-1,_result:t},_init:j_}};et.memo=function(t,e){return{$$typeof:B_,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};et.unstable_act=mg;et.useCallback=function(t,e){return cn.current.useCallback(t,e)};et.useContext=function(t){return cn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};et.useEffect=function(t,e){return cn.current.useEffect(t,e)};et.useId=function(){return cn.current.useId()};et.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return cn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};et.useRef=function(t){return cn.current.useRef(t)};et.useState=function(t){return cn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return cn.current.useTransition()};et.version="18.3.1";og.exports=et;var Z=og.exports;const Ht=sg(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_=Z,q_=Symbol.for("react.element"),$_=Symbol.for("react.fragment"),K_=Object.prototype.hasOwnProperty,Q_=Y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z_={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)K_.call(e,i)&&!Z_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:q_,type:t,key:s,ref:a,props:r,_owner:Q_.current}}su.Fragment=$_;su.jsx=gg;su.jsxs=gg;ag.exports=su;var C=ag.exports,Vc={},vg={exports:{}},Un={},_g={exports:{}},xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,z){var O=U.length;U.push(z);e:for(;0<O;){var te=O-1>>>1,J=U[te];if(0<r(J,z))U[te]=z,U[O]=J,O=te;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var z=U[0],O=U.pop();if(O!==z){U[0]=O;e:for(var te=0,J=U.length,j=J>>>1;te<j;){var ee=2*(te+1)-1,le=U[ee],Ee=ee+1,oe=U[Ee];if(0>r(le,O))Ee<J&&0>r(oe,le)?(U[te]=oe,U[Ee]=O,te=Ee):(U[te]=le,U[ee]=O,te=ee);else if(Ee<J&&0>r(oe,O))U[te]=oe,U[Ee]=O,te=Ee;else break e}}return z}function r(U,z){var O=U.sortIndex-z.sortIndex;return O!==0?O:U.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,h=null,d=3,g=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var z=n(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=U)i(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function y(U){if(x=!1,v(U),!_)if(n(l)!==null)_=!0,W(A);else{var z=n(u);z!==null&&V(y,z.startTime-U)}}function A(U,z){_=!1,x&&(x=!1,c(D),D=-1),g=!0;var O=d;try{for(v(z),h=n(l);h!==null&&(!(h.expirationTime>z)||U&&!H());){var te=h.callback;if(typeof te=="function"){h.callback=null,d=h.priorityLevel;var J=te(h.expirationTime<=z);z=t.unstable_now(),typeof J=="function"?h.callback=J:h===n(l)&&i(l),v(z)}else i(l);h=n(l)}if(h!==null)var j=!0;else{var ee=n(u);ee!==null&&V(y,ee.startTime-z),j=!1}return j}finally{h=null,d=O,g=!1}}var T=!1,M=null,D=-1,E=5,w=-1;function H(){return!(t.unstable_now()-w<E)}function X(){if(M!==null){var U=t.unstable_now();w=U;var z=!0;try{z=M(!0,U)}finally{z?ie():(T=!1,M=null)}}else T=!1}var ie;if(typeof m=="function")ie=function(){m(X)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,k=L.port2;L.port1.onmessage=X,ie=function(){k.postMessage(null)}}else ie=function(){p(X,0)};function W(U){M=U,T||(T=!0,ie())}function V(U,z){D=p(function(){U(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,W(A))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var O=d;d=z;try{return U()}finally{d=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var O=d;d=U;try{return z()}finally{d=O}},t.unstable_scheduleCallback=function(U,z,O){var te=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?te+O:te):O=te,U){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=O+J,U={id:f++,callback:z,priorityLevel:U,startTime:O,expirationTime:J,sortIndex:-1},O>te?(U.sortIndex=O,e(u,U),n(l)===null&&U===n(u)&&(x?(c(D),D=-1):x=!0,V(y,O-te))):(U.sortIndex=J,e(l,U),_||g||(_=!0,W(A))),U},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(U){var z=d;return function(){var O=d;d=z;try{return U.apply(this,arguments)}finally{d=O}}}})(xg);_g.exports=xg;var J_=_g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=Z,Dn=J_;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yg=new Set,ka={};function Xr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(ka[t]=e,t=0;t<e.length;t++)yg.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=Object.prototype.hasOwnProperty,tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hd={},dd={};function nx(t){return Wc.call(dd,t)?!0:Wc.call(hd,t)?!1:tx.test(t)?dd[t]=!0:(hd[t]=!0,!1)}function ix(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rx(t,e,n,i){if(e===null||typeof e>"u"||ix(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ih=/[\-:]([a-z])/g;function rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ih,rh);jt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ih,rh);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ih,rh);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function sh(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rx(e,n,r,i)&&(n=null),i||r===null?nx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),ah=Symbol.for("react.strict_mode"),jc=Symbol.for("react.profiler"),Sg=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),oh=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),lh=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),pd=Symbol.iterator;function oa(t){return t===null||typeof t!="object"?null:(t=pd&&t[pd]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Iu;function wa(t){if(Iu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Iu=e&&e[1]||""}return`
`+Iu+t}var Fu=!1;function Ou(t,e){if(!t||Fu)return"";Fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wa(t):""}function sx(t){switch(t.tag){case 5:return wa(t.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return t=Ou(t.type,!1),t;case 11:return t=Ou(t.type.render,!1),t;case 1:return t=Ou(t.type,!0),t;default:return""}}function qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case jc:return"Profiler";case ah:return"StrictMode";case Xc:return"Suspense";case Yc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mg:return(t.displayName||"Context")+".Consumer";case Sg:return(t._context.displayName||"Context")+".Provider";case oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lh:return e=t.displayName||null,e!==null?e:qc(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return qc(t(e))}catch{}}return null}function ax(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(e);case 8:return e===ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ox(t){var e=wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yo(t){t._valueTracker||(t._valueTracker=ox(t))}function Tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function md(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bg(t,e){e=e.checked,e!=null&&sh(t,"checked",e,!1)}function Kc(t,e){bg(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qc(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qc(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ta=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(Ta(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function Ag(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _d(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Rg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Rg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var So,Cg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=So.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lx=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(t){lx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ra[e]=Ra[t]})});function Pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ra.hasOwnProperty(t)&&Ra[t]?(""+e).trim():e+"px"}function Lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Pg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ux=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ef(t,e){if(e){if(ux[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function tf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=null;function uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rf=null,Ns=null,Us=null;function xd(t){if(t=oo(t)){if(typeof rf!="function")throw Error(he(280));var e=t.stateNode;e&&(e=cu(e),rf(t.stateNode,t.type,e))}}function Dg(t){Ns?Us?Us.push(t):Us=[t]:Ns=t}function Ng(){if(Ns){var t=Ns,e=Us;if(Us=Ns=null,xd(t),e)for(t=0;t<e.length;t++)xd(e[t])}}function Ug(t,e){return t(e)}function Ig(){}var zu=!1;function Fg(t,e,n){if(zu)return t(e,n);zu=!0;try{return Ug(t,e,n)}finally{zu=!1,(Ns!==null||Us!==null)&&(Ig(),Ng())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var i=cu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var sf=!1;if(Ui)try{var la={};Object.defineProperty(la,"passive",{get:function(){sf=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{sf=!1}function cx(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Ca=!1,Pl=null,Ll=!1,af=null,fx={onError:function(t){Ca=!0,Pl=t}};function hx(t,e,n,i,r,s,a,o,l){Ca=!1,Pl=null,cx.apply(fx,arguments)}function dx(t,e,n,i,r,s,a,o,l){if(hx.apply(this,arguments),Ca){if(Ca){var u=Pl;Ca=!1,Pl=null}else throw Error(he(198));Ll||(Ll=!0,af=u)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Og(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yd(t){if(Yr(t)!==t)throw Error(he(188))}function px(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yd(r),t;if(s===i)return yd(r),e;s=s.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function zg(t){return t=px(t),t!==null?kg(t):null}function kg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kg(t);if(e!==null)return e;t=t.sibling}return null}var Bg=Dn.unstable_scheduleCallback,Sd=Dn.unstable_cancelCallback,mx=Dn.unstable_shouldYield,gx=Dn.unstable_requestPaint,Mt=Dn.unstable_now,vx=Dn.unstable_getCurrentPriorityLevel,ch=Dn.unstable_ImmediatePriority,Hg=Dn.unstable_UserBlockingPriority,Dl=Dn.unstable_NormalPriority,_x=Dn.unstable_LowPriority,Gg=Dn.unstable_IdlePriority,au=null,mi=null;function xx(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(au,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:Mx,yx=Math.log,Sx=Math.LN2;function Mx(t){return t>>>=0,t===0?32:31-(yx(t)/Sx|0)|0}var Mo=64,Eo=4194304;function ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ba(o):(s&=a,s!==0&&(i=ba(s)))}else a=n&~r,a!==0?i=ba(a):s!==0&&(i=ba(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function Ex(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ii(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Ex(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function of(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vg(){var t=Mo;return Mo<<=1,!(Mo&4194240)&&(Mo=64),t}function ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function so(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function Tx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Wg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jg,hh,Xg,Yg,qg,lf=!1,wo=[],ir=null,rr=null,sr=null,Ga=new Map,Va=new Map,Qi=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Md(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function ua(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=oo(e),e!==null&&hh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ax(t,e,n,i,r){switch(e){case"focusin":return ir=ua(ir,t,e,n,i,r),!0;case"dragenter":return rr=ua(rr,t,e,n,i,r),!0;case"mouseover":return sr=ua(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ga.set(s,ua(Ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Va.set(s,ua(Va.get(s)||null,t,e,n,i,r)),!0}return!1}function $g(t){var e=Lr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Og(n),e!==null){t.blockedOn=e,qg(t.priority,function(){Xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nf=i,n.target.dispatchEvent(i),nf=null}else return e=oo(n),e!==null&&hh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ed(t,e,n){_l(t)&&n.delete(e)}function Rx(){lf=!1,ir!==null&&_l(ir)&&(ir=null),rr!==null&&_l(rr)&&(rr=null),sr!==null&&_l(sr)&&(sr=null),Ga.forEach(Ed),Va.forEach(Ed)}function ca(t,e){t.blockedOn===e&&(t.blockedOn=null,lf||(lf=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,Rx)))}function Wa(t){function e(r){return ca(r,t)}if(0<wo.length){ca(wo[0],t);for(var n=1;n<wo.length;n++){var i=wo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&ca(ir,t),rr!==null&&ca(rr,t),sr!==null&&ca(sr,t),Ga.forEach(e),Va.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&Qi.shift()}var Is=ki.ReactCurrentBatchConfig,Ul=!0;function Cx(t,e,n,i){var r=rt,s=Is.transition;Is.transition=null;try{rt=1,dh(t,e,n,i)}finally{rt=r,Is.transition=s}}function Px(t,e,n,i){var r=rt,s=Is.transition;Is.transition=null;try{rt=4,dh(t,e,n,i)}finally{rt=r,Is.transition=s}}function dh(t,e,n,i){if(Ul){var r=uf(t,e,n,i);if(r===null)$u(t,e,i,Il,n),Md(t,i);else if(Ax(r,t,e,n,i))i.stopPropagation();else if(Md(t,i),e&4&&-1<bx.indexOf(t)){for(;r!==null;){var s=oo(r);if(s!==null&&jg(s),s=uf(t,e,n,i),s===null&&$u(t,e,i,Il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $u(t,e,i,null,n)}}var Il=null;function uf(t,e,n,i){if(Il=null,t=uh(i),t=Lr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Og(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function Kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vx()){case ch:return 1;case Hg:return 4;case Dl:case _x:return 16;case Gg:return 536870912;default:return 16}default:return 16}}var Ji=null,ph=null,xl=null;function Qg(){if(xl)return xl;var t,e=ph,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return xl=r.slice(t,1<i?1-i:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function To(){return!0}function wd(){return!1}function In(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?To:wd,this.isPropagationStopped=wd,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mh=In(ea),ao=vt({},ea,{view:0,detail:0}),Lx=In(ao),Bu,Hu,fa,ou=vt({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(Bu=t.screenX-fa.screenX,Hu=t.screenY-fa.screenY):Hu=Bu=0,fa=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),Td=In(ou),Dx=vt({},ou,{dataTransfer:0}),Nx=In(Dx),Ux=vt({},ao,{relatedTarget:0}),Gu=In(Ux),Ix=vt({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=In(Ix),Ox=vt({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zx=In(Ox),kx=vt({},ea,{data:0}),bd=In(kx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gx[t])?!!e[t]:!1}function gh(){return Vx}var Wx=vt({},ao,{key:function(t){if(t.key){var e=Bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gh,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jx=In(Wx),Xx=vt({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=In(Xx),Yx=vt({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gh}),qx=In(Yx),$x=vt({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=In($x),Qx=vt({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zx=In(Qx),Jx=[9,13,27,32],vh=Ui&&"CompositionEvent"in window,Pa=null;Ui&&"documentMode"in document&&(Pa=document.documentMode);var ey=Ui&&"TextEvent"in window&&!Pa,Zg=Ui&&(!vh||Pa&&8<Pa&&11>=Pa),Rd=" ",Cd=!1;function Jg(t,e){switch(t){case"keyup":return Jx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ev(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function ty(t,e){switch(t){case"compositionend":return ev(e);case"keypress":return e.which!==32?null:(Cd=!0,Rd);case"textInput":return t=e.data,t===Rd&&Cd?null:t;default:return null}}function ny(t,e){if(xs)return t==="compositionend"||!vh&&Jg(t,e)?(t=Qg(),xl=ph=Ji=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zg&&e.locale!=="ko"?null:e.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iy[t.type]:e==="textarea"}function tv(t,e,n,i){Dg(i),e=Fl(e,"onChange"),0<e.length&&(n=new mh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var La=null,ja=null;function ry(t){hv(t,0)}function lu(t){var e=Ms(t);if(Tg(e))return t}function sy(t,e){if(t==="change")return e}var nv=!1;if(Ui){var Vu;if(Ui){var Wu="oninput"in document;if(!Wu){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),Wu=typeof Ld.oninput=="function"}Vu=Wu}else Vu=!1;nv=Vu&&(!document.documentMode||9<document.documentMode)}function Dd(){La&&(La.detachEvent("onpropertychange",iv),ja=La=null)}function iv(t){if(t.propertyName==="value"&&lu(ja)){var e=[];tv(e,ja,t,uh(t)),Fg(ry,e)}}function ay(t,e,n){t==="focusin"?(Dd(),La=e,ja=n,La.attachEvent("onpropertychange",iv)):t==="focusout"&&Dd()}function oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(ja)}function ly(t,e){if(t==="click")return lu(e)}function uy(t,e){if(t==="input"||t==="change")return lu(e)}function cy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:cy;function Xa(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wc.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function Nd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ud(t,e){var n=Nd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nd(n)}}function rv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sv(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function _h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fy(t){var e=sv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rv(n.ownerDocument.documentElement,n)){if(i!==null&&_h(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ud(n,s);var a=Ud(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hy=Ui&&"documentMode"in document&&11>=document.documentMode,ys=null,cf=null,Da=null,ff=!1;function Id(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ff||ys==null||ys!==Cl(i)||(i=ys,"selectionStart"in i&&_h(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&Xa(Da,i)||(Da=i,i=Fl(cf,"onSelect"),0<i.length&&(e=new mh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},ju={},av={};Ui&&(av=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function uu(t){if(ju[t])return ju[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in av)return ju[t]=e[n];return t}var ov=uu("animationend"),lv=uu("animationiteration"),uv=uu("animationstart"),cv=uu("transitionend"),fv=new Map,Fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){fv.set(t,e),Xr(e,[t])}for(var Xu=0;Xu<Fd.length;Xu++){var Yu=Fd[Xu],dy=Yu.toLowerCase(),py=Yu[0].toUpperCase()+Yu.slice(1);gr(dy,"on"+py)}gr(ov,"onAnimationEnd");gr(lv,"onAnimationIteration");gr(uv,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(cv,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function Od(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,dx(i,e,void 0,t),t.currentTarget=null}function hv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Od(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Od(r,o,u),s=l}}}if(Ll)throw t=af,Ll=!1,af=null,t}function ut(t,e){var n=e[gf];n===void 0&&(n=e[gf]=new Set);var i=t+"__bubble";n.has(i)||(dv(e,t,2,!1),n.add(i))}function qu(t,e,n){var i=0;e&&(i|=4),dv(n,t,i,e)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[Ao]){t[Ao]=!0,yg.forEach(function(n){n!=="selectionchange"&&(my.has(n)||qu(n,!1,t),qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ao]||(e[Ao]=!0,qu("selectionchange",!1,e))}}function dv(t,e,n,i){switch(Kg(e)){case 1:var r=Cx;break;case 4:r=Px;break;default:r=dh}n=r.bind(null,e,n,t),r=void 0,!sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $u(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Lr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Fg(function(){var u=s,f=uh(n),h=[];e:{var d=fv.get(t);if(d!==void 0){var g=mh,_=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":g=jx;break;case"focusin":_="focus",g=Gu;break;case"focusout":_="blur",g=Gu;break;case"beforeblur":case"afterblur":g=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=qx;break;case ov:case lv:case uv:g=Fx;break;case cv:g=Kx;break;case"scroll":g=Lx;break;case"wheel":g=Zx;break;case"copy":case"cut":case"paste":g=zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ad}var x=(e&4)!==0,p=!x&&t==="scroll",c=x?d!==null?d+"Capture":null:d;x=[];for(var m=u,v;m!==null;){v=m;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,c!==null&&(y=Ha(m,c),y!=null&&x.push(qa(m,y,v)))),p)break;m=m.return}0<x.length&&(d=new g(d,_,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==nf&&(_=n.relatedTarget||n.fromElement)&&(Lr(_)||_[Ii]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Lr(_):null,_!==null&&(p=Yr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(x=Td,y="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ad,y="onPointerLeave",c="onPointerEnter",m="pointer"),p=g==null?d:Ms(g),v=_==null?d:Ms(_),d=new x(y,m+"leave",g,n,f),d.target=p,d.relatedTarget=v,y=null,Lr(f)===u&&(x=new x(c,m+"enter",_,n,f),x.target=v,x.relatedTarget=p,y=x),p=y,g&&_)t:{for(x=g,c=_,m=0,v=x;v;v=Qr(v))m++;for(v=0,y=c;y;y=Qr(y))v++;for(;0<m-v;)x=Qr(x),m--;for(;0<v-m;)c=Qr(c),v--;for(;m--;){if(x===c||c!==null&&x===c.alternate)break t;x=Qr(x),c=Qr(c)}x=null}else x=null;g!==null&&zd(h,d,g,x,!1),_!==null&&p!==null&&zd(h,p,_,x,!0)}}e:{if(d=u?Ms(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var A=sy;else if(Pd(d))if(nv)A=uy;else{A=oy;var T=ay}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=ly);if(A&&(A=A(t,u))){tv(h,A,n,f);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Qc(d,"number",d.value)}switch(T=u?Ms(u):window,t){case"focusin":(Pd(T)||T.contentEditable==="true")&&(ys=T,cf=u,Da=null);break;case"focusout":Da=cf=ys=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,Id(h,n,f);break;case"selectionchange":if(hy)break;case"keydown":case"keyup":Id(h,n,f)}var M;if(vh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else xs?Jg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Zg&&n.locale!=="ko"&&(xs||D!=="onCompositionStart"?D==="onCompositionEnd"&&xs&&(M=Qg()):(Ji=f,ph="value"in Ji?Ji.value:Ji.textContent,xs=!0)),T=Fl(u,D),0<T.length&&(D=new bd(D,t,null,n,f),h.push({event:D,listeners:T}),M?D.data=M:(M=ev(n),M!==null&&(D.data=M)))),(M=ey?ty(t,n):ny(t,n))&&(u=Fl(u,"onBeforeInput"),0<u.length&&(f=new bd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=M))}hv(h,e)})}function qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ha(t,n),s!=null&&i.unshift(qa(t,s,r)),s=Ha(t,e),s!=null&&i.push(qa(t,s,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zd(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Ha(n,s),l!=null&&a.unshift(qa(n,l,o))):r||(l=Ha(n,s),l!=null&&a.push(qa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var gy=/\r\n?/g,vy=/\u0000|\uFFFD/g;function kd(t){return(typeof t=="string"?t:""+t).replace(gy,`
`).replace(vy,"")}function Ro(t,e,n){if(e=kd(e),kd(t)!==e&&n)throw Error(he(425))}function Ol(){}var hf=null,df=null;function pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mf=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,xy=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(t){return Bd.resolve(null).then(t).catch(yy)}:mf;function yy(t){setTimeout(function(){throw t})}function Ku(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wa(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ta=Math.random().toString(36).slice(2),hi="__reactFiber$"+ta,$a="__reactProps$"+ta,Ii="__reactContainer$"+ta,gf="__reactEvents$"+ta,Sy="__reactListeners$"+ta,My="__reactHandles$"+ta;function Lr(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hd(t);t!==null;){if(n=t[hi])return n;t=Hd(t)}return e}t=n,n=t.parentNode}return null}function oo(t){return t=t[hi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function cu(t){return t[$a]||null}var vf=[],Es=-1;function vr(t){return{current:t}}function ft(t){0>Es||(t.current=vf[Es],vf[Es]=null,Es--)}function ot(t,e){Es++,vf[Es]=t.current,t.current=e}var pr={},rn=vr(pr),vn=vr(!1),Hr=pr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function zl(){ft(vn),ft(rn)}function Gd(t,e,n){if(rn.current!==pr)throw Error(he(168));ot(rn,e),ot(vn,n)}function pv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,ax(t)||"Unknown",r));return vt({},n,i)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Hr=rn.current,ot(rn,t),ot(vn,vn.current),!0}function Vd(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=pv(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,ft(vn),ft(rn),ot(rn,t)):ft(vn),ot(vn,n)}var Ai=null,fu=!1,Qu=!1;function mv(t){Ai===null?Ai=[t]:Ai.push(t)}function Ey(t){fu=!0,mv(t)}function _r(){if(!Qu&&Ai!==null){Qu=!0;var t=0,e=rt;try{var n=Ai;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,fu=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),Bg(ch,_r),r}finally{rt=e,Qu=!1}}return null}var ws=[],Ts=0,Bl=null,Hl=0,kn=[],Bn=0,Gr=null,Ri=1,Ci="";function Tr(t,e){ws[Ts++]=Hl,ws[Ts++]=Bl,Bl=t,Hl=e}function gv(t,e,n){kn[Bn++]=Ri,kn[Bn++]=Ci,kn[Bn++]=Gr,Gr=t;var i=Ri;t=Ci;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var s=32-ii(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ri=1<<32-ii(e)+r|n<<r|i,Ci=s+t}else Ri=1<<s|n<<r|i,Ci=t}function xh(t){t.return!==null&&(Tr(t,1),gv(t,1,0))}function yh(t){for(;t===Bl;)Bl=ws[--Ts],ws[Ts]=null,Hl=ws[--Ts],ws[Ts]=null;for(;t===Gr;)Gr=kn[--Bn],kn[Bn]=null,Ci=kn[--Bn],kn[Bn]=null,Ri=kn[--Bn],kn[Bn]=null}var Pn=null,Cn=null,dt=!1,ei=null;function vv(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Ri,overflow:Ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Cn=null,!0):!1;default:return!1}}function _f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xf(t){if(dt){var e=Cn;if(e){var n=e;if(!Wd(t,e)){if(_f(t))throw Error(he(418));e=ar(n.nextSibling);var i=Pn;e&&Wd(t,e)?vv(i,n):(t.flags=t.flags&-4097|2,dt=!1,Pn=t)}}else{if(_f(t))throw Error(he(418));t.flags=t.flags&-4097|2,dt=!1,Pn=t}}}function jd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Co(t){if(t!==Pn)return!1;if(!dt)return jd(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pf(t.type,t.memoizedProps)),e&&(e=Cn)){if(_f(t))throw _v(),Error(he(418));for(;e;)vv(t,e),e=ar(e.nextSibling)}if(jd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Pn?ar(t.stateNode.nextSibling):null;return!0}function _v(){for(var t=Cn;t;)t=ar(t.nextSibling)}function Hs(){Cn=Pn=null,dt=!1}function Sh(t){ei===null?ei=[t]:ei.push(t)}var wy=ki.ReactCurrentBatchConfig;function ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function Po(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xd(t){var e=t._init;return e(t._payload)}function xv(t){function e(c,m){if(t){var v=c.deletions;v===null?(c.deletions=[m],c.flags|=16):v.push(m)}}function n(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function r(c,m){return c=cr(c,m),c.index=0,c.sibling=null,c}function s(c,m,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<m?(c.flags|=2,m):v):(c.flags|=2,m)):(c.flags|=1048576,m)}function a(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,m,v,y){return m===null||m.tag!==6?(m=rc(v,c.mode,y),m.return=c,m):(m=r(m,v),m.return=c,m)}function l(c,m,v,y){var A=v.type;return A===_s?f(c,m,v.props.children,y,v.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===$i&&Xd(A)===m.type)?(y=r(m,v.props),y.ref=ha(c,m,v),y.return=c,y):(y=Al(v.type,v.key,v.props,null,c.mode,y),y.ref=ha(c,m,v),y.return=c,y)}function u(c,m,v,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=sc(v,c.mode,y),m.return=c,m):(m=r(m,v.children||[]),m.return=c,m)}function f(c,m,v,y,A){return m===null||m.tag!==7?(m=Fr(v,c.mode,y,A),m.return=c,m):(m=r(m,v),m.return=c,m)}function h(c,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=rc(""+m,c.mode,v),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xo:return v=Al(m.type,m.key,m.props,null,c.mode,v),v.ref=ha(c,null,m),v.return=c,v;case vs:return m=sc(m,c.mode,v),m.return=c,m;case $i:var y=m._init;return h(c,y(m._payload),v)}if(Ta(m)||oa(m))return m=Fr(m,c.mode,v,null),m.return=c,m;Po(c,m)}return null}function d(c,m,v,y){var A=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:o(c,m,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xo:return v.key===A?l(c,m,v,y):null;case vs:return v.key===A?u(c,m,v,y):null;case $i:return A=v._init,d(c,m,A(v._payload),y)}if(Ta(v)||oa(v))return A!==null?null:f(c,m,v,y,null);Po(c,v)}return null}function g(c,m,v,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(v)||null,o(m,c,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xo:return c=c.get(y.key===null?v:y.key)||null,l(m,c,y,A);case vs:return c=c.get(y.key===null?v:y.key)||null,u(m,c,y,A);case $i:var T=y._init;return g(c,m,v,T(y._payload),A)}if(Ta(y)||oa(y))return c=c.get(v)||null,f(m,c,y,A,null);Po(m,y)}return null}function _(c,m,v,y){for(var A=null,T=null,M=m,D=m=0,E=null;M!==null&&D<v.length;D++){M.index>D?(E=M,M=null):E=M.sibling;var w=d(c,M,v[D],y);if(w===null){M===null&&(M=E);break}t&&M&&w.alternate===null&&e(c,M),m=s(w,m,D),T===null?A=w:T.sibling=w,T=w,M=E}if(D===v.length)return n(c,M),dt&&Tr(c,D),A;if(M===null){for(;D<v.length;D++)M=h(c,v[D],y),M!==null&&(m=s(M,m,D),T===null?A=M:T.sibling=M,T=M);return dt&&Tr(c,D),A}for(M=i(c,M);D<v.length;D++)E=g(M,c,D,v[D],y),E!==null&&(t&&E.alternate!==null&&M.delete(E.key===null?D:E.key),m=s(E,m,D),T===null?A=E:T.sibling=E,T=E);return t&&M.forEach(function(H){return e(c,H)}),dt&&Tr(c,D),A}function x(c,m,v,y){var A=oa(v);if(typeof A!="function")throw Error(he(150));if(v=A.call(v),v==null)throw Error(he(151));for(var T=A=null,M=m,D=m=0,E=null,w=v.next();M!==null&&!w.done;D++,w=v.next()){M.index>D?(E=M,M=null):E=M.sibling;var H=d(c,M,w.value,y);if(H===null){M===null&&(M=E);break}t&&M&&H.alternate===null&&e(c,M),m=s(H,m,D),T===null?A=H:T.sibling=H,T=H,M=E}if(w.done)return n(c,M),dt&&Tr(c,D),A;if(M===null){for(;!w.done;D++,w=v.next())w=h(c,w.value,y),w!==null&&(m=s(w,m,D),T===null?A=w:T.sibling=w,T=w);return dt&&Tr(c,D),A}for(M=i(c,M);!w.done;D++,w=v.next())w=g(M,c,D,w.value,y),w!==null&&(t&&w.alternate!==null&&M.delete(w.key===null?D:w.key),m=s(w,m,D),T===null?A=w:T.sibling=w,T=w);return t&&M.forEach(function(X){return e(c,X)}),dt&&Tr(c,D),A}function p(c,m,v,y){if(typeof v=="object"&&v!==null&&v.type===_s&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xo:e:{for(var A=v.key,T=m;T!==null;){if(T.key===A){if(A=v.type,A===_s){if(T.tag===7){n(c,T.sibling),m=r(T,v.props.children),m.return=c,c=m;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===$i&&Xd(A)===T.type){n(c,T.sibling),m=r(T,v.props),m.ref=ha(c,T,v),m.return=c,c=m;break e}n(c,T);break}else e(c,T);T=T.sibling}v.type===_s?(m=Fr(v.props.children,c.mode,y,v.key),m.return=c,c=m):(y=Al(v.type,v.key,v.props,null,c.mode,y),y.ref=ha(c,m,v),y.return=c,c=y)}return a(c);case vs:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(c,m.sibling),m=r(m,v.children||[]),m.return=c,c=m;break e}else{n(c,m);break}else e(c,m);m=m.sibling}m=sc(v,c.mode,y),m.return=c,c=m}return a(c);case $i:return T=v._init,p(c,m,T(v._payload),y)}if(Ta(v))return _(c,m,v,y);if(oa(v))return x(c,m,v,y);Po(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(c,m.sibling),m=r(m,v),m.return=c,c=m):(n(c,m),m=rc(v,c.mode,y),m.return=c,c=m),a(c)):n(c,m)}return p}var Gs=xv(!0),yv=xv(!1),Gl=vr(null),Vl=null,bs=null,Mh=null;function Eh(){Mh=bs=Vl=null}function wh(t){var e=Gl.current;ft(Gl),t._currentValue=e}function yf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){Vl=t,Mh=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(Mh!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Vl===null)throw Error(he(308));bs=t,Vl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Dr=null;function Th(t){Dr===null?Dr=[t]:Dr.push(t)}function Sv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Th(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,Th(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fh(t,n)}}function Yd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=u=l=null,o=s;do{var d=o.lane,g=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(d=e,g=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(g,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(g,h,d):_,d==null)break e;h=vt({},h,d);break e;case 2:Ki=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=g,l=h):f=f.next=g,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Wr|=a,t.lanes=a,t.memoizedState=h}}function qd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var lo={},gi=vr(lo),Ka=vr(lo),Qa=vr(lo);function Nr(t){if(t===lo)throw Error(he(174));return t}function Ah(t,e){switch(ot(Qa,e),ot(Ka,t),ot(gi,lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jc(e,t)}ft(gi),ot(gi,e)}function Vs(){ft(gi),ft(Ka),ft(Qa)}function Ev(t){Nr(Qa.current);var e=Nr(gi.current),n=Jc(e,t.type);e!==n&&(ot(Ka,t),ot(gi,n))}function Rh(t){Ka.current===t&&(ft(gi),ft(Ka))}var mt=vr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zu=[];function Ch(){for(var t=0;t<Zu.length;t++)Zu[t]._workInProgressVersionPrimary=null;Zu.length=0}var Ml=ki.ReactCurrentDispatcher,Ju=ki.ReactCurrentBatchConfig,Vr=0,gt=null,Rt=null,Ft=null,Xl=!1,Na=!1,Za=0,Ty=0;function Yt(){throw Error(he(321))}function Ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function Lh(t,e,n,i,r,s){if(Vr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?Cy:Py,t=n(i,r),Na){s=0;do{if(Na=!1,Za=0,25<=s)throw Error(he(301));s+=1,Ft=Rt=null,e.updateQueue=null,Ml.current=Ly,t=n(i,r)}while(Na)}if(Ml.current=Yl,e=Rt!==null&&Rt.next!==null,Vr=0,Ft=Rt=gt=null,Xl=!1,e)throw Error(he(300));return t}function Dh(){var t=Za!==0;return Za=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Xn(){if(Rt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ft===null?gt.memoizedState:Ft.next;if(e!==null)Ft=e,Rt=t;else{if(t===null)throw Error(he(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Ja(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=Xn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var f=u.lane;if((Vr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,gt.lanes|=f,Wr|=f}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,oi(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);oi(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function wv(){}function Tv(t,e){var n=gt,i=Xn(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,Nh(Rv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,eo(9,Av.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(he(349));Vr&30||bv(n,e,r)}return r}function bv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Av(t,e,n,i){e.value=n,e.getSnapshot=i,Cv(e)&&Pv(t)}function Rv(t,e,n){return n(function(){Cv(e)&&Pv(t)})}function Cv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function Pv(t){var e=Fi(t,1);e!==null&&ri(e,t,1,-1)}function $d(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},e.queue=t,t=t.dispatch=Ry.bind(null,gt,t),[e.memoizedState,t]}function eo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Lv(){return Xn().memoizedState}function El(t,e,n,i){var r=ui();gt.flags|=t,r.memoizedState=eo(1|e,n,void 0,i===void 0?null:i)}function hu(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var a=Rt.memoizedState;if(s=a.destroy,i!==null&&Ph(i,a.deps)){r.memoizedState=eo(e,n,s,i);return}}gt.flags|=t,r.memoizedState=eo(1|e,n,s,i)}function Kd(t,e){return El(8390656,8,t,e)}function Nh(t,e){return hu(2048,8,t,e)}function Dv(t,e){return hu(4,2,t,e)}function Nv(t,e){return hu(4,4,t,e)}function Uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Iv(t,e,n){return n=n!=null?n.concat([t]):null,hu(4,4,Uv.bind(null,e,t),n)}function Uh(){}function Fv(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ov(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return Vr&21?(oi(n,e)||(n=Vg(),gt.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function by(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Ju.transition;Ju.transition={};try{t(!1),e()}finally{rt=n,Ju.transition=i}}function kv(){return Xn().memoizedState}function Ay(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Bv(t))Hv(e,n);else if(n=Sv(t,e,n,i),n!==null){var r=un();ri(n,t,i,r),Gv(n,e,i)}}function Ry(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bv(t))Hv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,oi(o,a)){var l=e.interleaved;l===null?(r.next=r,Th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Sv(t,e,r,i),n!==null&&(r=un(),ri(n,t,i,r),Gv(n,e,i))}}function Bv(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function Hv(t,e){Na=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fh(t,n)}}var Yl={readContext:jn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},Cy={readContext:jn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:Kd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,Uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ay.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:$d,useDebugValue:Uh,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=$d(!1),e=t[0];return t=by.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=ui();if(dt){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),Ot===null)throw Error(he(349));Vr&30||bv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kd(Rv.bind(null,i,s,t),[t]),i.flags|=2048,eo(9,Av.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ui(),e=Ot.identifierPrefix;if(dt){var n=Ci,i=Ri;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ty++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Py={readContext:jn,useCallback:Fv,useContext:jn,useEffect:Nh,useImperativeHandle:Iv,useInsertionEffect:Dv,useLayoutEffect:Nv,useMemo:Ov,useReducer:ec,useRef:Lv,useState:function(){return ec(Ja)},useDebugValue:Uh,useDeferredValue:function(t){var e=Xn();return zv(e,Rt.memoizedState,t)},useTransition:function(){var t=ec(Ja)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:wv,useSyncExternalStore:Tv,useId:kv,unstable_isNewReconciler:!1},Ly={readContext:jn,useCallback:Fv,useContext:jn,useEffect:Nh,useImperativeHandle:Iv,useInsertionEffect:Dv,useLayoutEffect:Nv,useMemo:Ov,useReducer:tc,useRef:Lv,useState:function(){return tc(Ja)},useDebugValue:Uh,useDeferredValue:function(t){var e=Xn();return Rt===null?e.memoizedState=t:zv(e,Rt.memoizedState,t)},useTransition:function(){var t=tc(Ja)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:wv,useSyncExternalStore:Tv,useId:kv,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=ur(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(ri(e,t,r,i),Sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=ur(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(ri(e,t,r,i),Sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=ur(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=or(t,r,i),e!==null&&(ri(e,t,i,n),Sl(e,t,i))}};function Qd(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Xa(n,i)||!Xa(r,s):!0}function Vv(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=_n(e)?Hr:rn.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function Mf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=_n(e)?Hr:rn.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&du.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=sx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Dy=typeof WeakMap=="function"?WeakMap:Map;function Wv(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$l||($l=!0,Nf=i),Ef(t,e)},n}function jv(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ef(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ef(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Jd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Dy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Xy.bind(null,t,e,n),e.then(t,t))}function ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var Ny=ki.ReactCurrentOwner,gn=!1;function on(t,e,n,i){e.child=t===null?yv(e,null,n,i):Gs(e,t.child,n,i)}function np(t,e,n,i,r){n=n.render;var s=e.ref;return Fs(e,r),i=Lh(t,e,n,i,s,r),n=Dh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(dt&&n&&xh(e),e.flags|=1,on(t,e,i,r),e.child)}function ip(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Gh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xv(t,e,s,i,r)):(t=Al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(a,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Xv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Xa(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return wf(t,e,n,i,r)}function Yv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Rs,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(Rs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(Rs,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(Rs,An),An|=i;return on(t,e,r,n),e.child}function qv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wf(t,e,n,i,r){var s=_n(n)?Hr:rn.current;return s=Bs(e,s),Fs(e,r),n=Lh(t,e,n,i,s,r),i=Dh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(dt&&i&&xh(e),e.flags|=1,on(t,e,n,r),e.child)}function rp(t,e,n,i,r){if(_n(n)){var s=!0;kl(e)}else s=!1;if(Fs(e,r),e.stateNode===null)wl(t,e),Vv(e,n,i),Mf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=jn(u):(u=_n(n)?Hr:rn.current,u=Bs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Zd(e,a,i,u),Ki=!1;var d=e.memoizedState;a.state=d,Wl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||vn.current||Ki?(typeof f=="function"&&(Sf(e,n,f,i),l=e.memoizedState),(o=Ki||Qd(e,n,o,i,d,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Mv(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Zn(e.type,o),a.props=u,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=_n(n)?Hr:rn.current,l=Bs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&Zd(e,a,i,l),Ki=!1,d=e.memoizedState,a.state=d,Wl(e,i,a,r);var _=e.memoizedState;o!==h||d!==_||vn.current||Ki?(typeof g=="function"&&(Sf(e,n,g,i),_=e.memoizedState),(u=Ki||Qd(e,n,u,i,d,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Tf(t,e,n,i,s,r)}function Tf(t,e,n,i,r,s){qv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Vd(e,n,!1),Oi(t,e,s);i=e.stateNode,Ny.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,o,s)):on(t,e,o,s),e.memoizedState=i.state,r&&Vd(e,n,!0),e.child}function $v(t){var e=t.stateNode;e.pendingContext?Gd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gd(t,e.context,!1),Ah(t,e.containerInfo)}function sp(t,e,n,i,r){return Hs(),Sh(r),e.flags|=256,on(t,e,n,i),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Af(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kv(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(mt,r&1),t===null)return xf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=gu(a,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Af(n),e.memoizedState=bf,t):Ih(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Uy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=cr(o,s):(s=Fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Af(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=bf,i}return s=t.child,t=s.sibling,i=cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ih(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Lo(t,e,n,i){return i!==null&&Sh(i),Gs(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=nc(Error(he(422))),Lo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gu({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,a),e.child.memoizedState=Af(a),e.memoizedState=bf,s);if(!(e.mode&1))return Lo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(he(419)),i=nc(s,i,void 0),Lo(t,e,a,i)}if(o=(a&t.childLanes)!==0,gn||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(t,r),ri(i,t,r,-1))}return Hh(),i=nc(Error(he(421))),Lo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Yy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=ar(r.nextSibling),Pn=e,dt=!0,ei=null,t!==null&&(kn[Bn++]=Ri,kn[Bn++]=Ci,kn[Bn++]=Gr,Ri=t.id,Ci=t.overflow,Gr=e),e=Ih(e,i.children),e.flags|=4096,e)}function ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),yf(t.return,e,n)}function ic(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Qv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,n,e);else if(t.tag===19)ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ic(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ic(e,!0,n,null,s);break;case"together":ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Iy(t,e,n){switch(e.tag){case 3:$v(e),Hs();break;case 5:Ev(e);break;case 1:_n(e.type)&&kl(e);break;case 4:Ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?Kv(t,e,n):(ot(mt,mt.current&1),t=Oi(t,e,n),t!==null?t.sibling:null);ot(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Qv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Yv(t,e,n)}return Oi(t,e,n)}var Zv,Rf,Jv,e0;Zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};Jv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(gi.current);var s=null;switch(n){case"input":r=$c(t,r),i=$c(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Zc(t,r),i=Zc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}ef(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ka.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ka.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};e0=function(t,e,n,i){n!==i&&(e.flags|=4)};function da(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Fy(t,e,n){var i=e.pendingProps;switch(yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return _n(e.type)&&zl(),qt(e),null;case 3:return i=e.stateNode,Vs(),ft(vn),ft(rn),Ch(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(Ff(ei),ei=null))),Rf(t,e),qt(e),null;case 5:Rh(e);var r=Nr(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)Jv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return qt(e),null}if(t=Nr(gi.current),Co(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[$a]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Aa.length;r++)ut(Aa[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":md(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":vd(i,s),ut("invalid",i)}ef(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ro(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ro(i.textContent,o,t),r=["children",""+o]):ka.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":yo(i),gd(i,s,!0);break;case"textarea":yo(i),_d(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Rg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[hi]=e,t[$a]=i,Zv(t,e,!1,!1),e.stateNode=t;e:{switch(a=tf(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Aa.length;r++)ut(Aa[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":md(t,i),r=$c(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":vd(t,i),r=Zc(t,i),ut("invalid",t);break;default:r=i}ef(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Lg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ba(t,l):typeof l=="number"&&Ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ka.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&sh(t,s,l,a))}switch(n){case"input":yo(t),gd(t,i,!1);break;case"textarea":yo(t),_d(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)e0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=Nr(Qa.current),Nr(gi.current),Co(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Ro(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ro(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return qt(e),null;case 13:if(ft(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&Cn!==null&&e.mode&1&&!(e.flags&128))_v(),Hs(),e.flags|=98560,s=!1;else if(s=Co(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[hi]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else ei!==null&&(Ff(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Pt===0&&(Pt=3):Hh())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Vs(),Rf(t,e),t===null&&Ya(e.stateNode.containerInfo),qt(e),null;case 10:return wh(e.type._context),qt(e),null;case 17:return _n(e.type)&&zl(),qt(e),null;case 19:if(ft(mt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)da(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=jl(t),a!==null){for(e.flags|=128,da(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>js&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304)}else{if(!i)if(t=jl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return qt(e),null}else 2*Mt()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=mt.current,ot(mt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function Oy(t,e){switch(yh(e),e.tag){case 1:return _n(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),ft(vn),ft(rn),Ch(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rh(e),null;case 13:if(ft(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(mt),null;case 4:return Vs(),null;case 10:return wh(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var Do=!1,Zt=!1,zy=typeof WeakSet=="function"?WeakSet:Set,be=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Cf(t,e,n){try{n()}catch(i){xt(t,e,i)}}var op=!1;function ky(t,e){if(hf=Ul,t=sv(),_h(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++f===i&&(l=a),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(df={focusedElem:t,selectionRange:n},Ul=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,c=e.stateNode,m=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Zn(e.type,x),p);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(y){xt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return _=op,op=!1,_}function Ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Cf(e,n,s)}r=r.next}while(r!==i)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function t0(t){var e=t.alternate;e!==null&&(t.alternate=null,t0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[$a],delete e[gf],delete e[Sy],delete e[My])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function n0(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}function Df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}var zt=null,Jn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)i0(t,e,n),n=n.sibling}function i0(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(au,n)}catch{}switch(n.tag){case 5:Zt||As(n,e);case 6:var i=zt,r=Jn;zt=null,Bi(t,e,n),zt=i,Jn=r,zt!==null&&(Jn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Jn?(t=zt,n=n.stateNode,t.nodeType===8?Ku(t.parentNode,n):t.nodeType===1&&Ku(t,n),Wa(t)):Ku(zt,n.stateNode));break;case 4:i=zt,r=Jn,zt=n.stateNode.containerInfo,Jn=!0,Bi(t,e,n),zt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Cf(n,e,a),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Zt&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Bi(t,e,n),Zt=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zy),e.forEach(function(i){var r=qy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:zt=o.stateNode,Jn=!1;break e;case 3:zt=o.stateNode.containerInfo,Jn=!0;break e;case 4:zt=o.stateNode.containerInfo,Jn=!0;break e}o=o.return}if(zt===null)throw Error(he(160));i0(s,a,r),zt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r0(e,t),e=e.sibling}function r0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),li(t),i&4){try{Ua(3,t,t.return),pu(3,t)}catch(x){xt(t,t.return,x)}try{Ua(5,t,t.return)}catch(x){xt(t,t.return,x)}}break;case 1:Yn(e,t),li(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(Yn(e,t),li(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{Ba(r,"")}catch(x){xt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&bg(r,s),tf(o,a);var u=tf(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Lg(r,h):f==="dangerouslySetInnerHTML"?Cg(r,h):f==="children"?Ba(r,h):sh(r,f,h,u)}switch(o){case"input":Kc(r,s);break;case"textarea":Ag(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ds(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[$a]=s}catch(x){xt(t,t.return,x)}}break;case 6:if(Yn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){xt(t,t.return,x)}}break;case 3:if(Yn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(x){xt(t,t.return,x)}break;case 4:Yn(e,t),li(t);break;case 13:Yn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(zh=Mt())),i&4&&up(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||f,Yn(e,t),Zt=u):Yn(e,t),li(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(be=t,f=t.child;f!==null;){for(h=be=f;be!==null;){switch(d=be,g=d.child,d.tag){case 0:case 11:case 14:case 15:Ua(4,d,d.return);break;case 1:As(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){xt(i,n,x)}}break;case 5:As(d,d.return);break;case 22:if(d.memoizedState!==null){fp(h);continue}}g!==null?(g.return=d,be=g):fp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Pg("display",a))}catch(x){xt(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){xt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yn(e,t),li(t),i&4&&up(t);break;case 21:break;default:Yn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(n0(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ba(r,""),i.flags&=-33);var s=lp(t);Df(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lp(t);Lf(t,o,a);break;default:throw Error(he(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function By(t,e,n){be=t,s0(t)}function s0(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Do;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=Do;var u=Zt;if(Do=a,(Zt=l)&&!u)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?hp(r):l!==null?(l.return=a,be=l):hp(r);for(;s!==null;)be=s,s0(s),s=s.sibling;be=r,Do=o,Zt=u}cp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):cp(t)}}function cp(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||pu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qd(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qd(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Wa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}Zt||e.flags&512&&Pf(e)}catch(d){xt(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function fp(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function hp(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Pf(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{Pf(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var Hy=Math.ceil,ql=ki.ReactCurrentDispatcher,Fh=ki.ReactCurrentOwner,Wn=ki.ReactCurrentBatchConfig,tt=0,Ot=null,Tt=null,Wt=0,An=0,Rs=vr(0),Pt=0,to=null,Wr=0,mu=0,Oh=0,Ia=null,pn=null,zh=0,js=1/0,bi=null,$l=!1,Nf=null,lr=null,No=!1,er=null,Kl=0,Fa=0,Uf=null,Tl=-1,bl=0;function un(){return tt&6?Mt():Tl!==-1?Tl:Tl=Mt()}function ur(t){return t.mode&1?tt&2&&Wt!==0?Wt&-Wt:wy.transition!==null?(bl===0&&(bl=Vg()),bl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Kg(t.type)),t):1}function ri(t,e,n,i){if(50<Fa)throw Fa=0,Uf=null,Error(he(185));so(t,n,i),(!(tt&2)||t!==Ot)&&(t===Ot&&(!(tt&2)&&(mu|=n),Pt===4&&Zi(t,Wt)),xn(t,i),n===1&&tt===0&&!(e.mode&1)&&(js=Mt()+500,fu&&_r()))}function xn(t,e){var n=t.callbackNode;wx(t,e);var i=Nl(t,t===Ot?Wt:0);if(i===0)n!==null&&Sd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sd(n),e===1)t.tag===0?Ey(dp.bind(null,t)):mv(dp.bind(null,t)),xy(function(){!(tt&6)&&_r()}),n=null;else{switch(Wg(i)){case 1:n=ch;break;case 4:n=Hg;break;case 16:n=Dl;break;case 536870912:n=Gg;break;default:n=Dl}n=d0(n,a0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a0(t,e){if(Tl=-1,bl=0,tt&6)throw Error(he(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=Nl(t,t===Ot?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ql(t,i);else{e=i;var r=tt;tt|=2;var s=l0();(Ot!==t||Wt!==e)&&(bi=null,js=Mt()+500,Ir(t,e));do try{Wy();break}catch(o){o0(t,o)}while(!0);Eh(),ql.current=s,tt=r,Tt!==null?e=0:(Ot=null,Wt=0,e=Pt)}if(e!==0){if(e===2&&(r=of(t),r!==0&&(i=r,e=If(t,r))),e===1)throw n=to,Ir(t,0),Zi(t,i),xn(t,Mt()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Gy(r)&&(e=Ql(t,i),e===2&&(s=of(t),s!==0&&(i=s,e=If(t,s))),e===1))throw n=to,Ir(t,0),Zi(t,i),xn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:br(t,pn,bi);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=zh+500-Mt(),10<e)){if(Nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=mf(br.bind(null,t,pn,bi),e);break}br(t,pn,bi);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ii(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hy(i/1960))-i,10<i){t.timeoutHandle=mf(br.bind(null,t,pn,bi),i);break}br(t,pn,bi);break;case 5:br(t,pn,bi);break;default:throw Error(he(329))}}}return xn(t,Mt()),t.callbackNode===n?a0.bind(null,t):null}function If(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=pn,pn=n,e!==null&&Ff(e)),t}function Ff(t){pn===null?pn=t:pn.push.apply(pn,t)}function Gy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~Oh,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function dp(t){if(tt&6)throw Error(he(327));Os();var e=Nl(t,0);if(!(e&1))return xn(t,Mt()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var i=of(t);i!==0&&(e=i,n=If(t,i))}if(n===1)throw n=to,Ir(t,0),Zi(t,e),xn(t,Mt()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,pn,bi),xn(t,Mt()),null}function kh(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(js=Mt()+500,fu&&_r())}}function jr(t){er!==null&&er.tag===0&&!(tt&6)&&Os();var e=tt;tt|=1;var n=Wn.transition,i=rt;try{if(Wn.transition=null,rt=1,t)return t()}finally{rt=i,Wn.transition=n,tt=e,!(tt&6)&&_r()}}function Bh(){An=Rs.current,ft(Rs)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_y(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(yh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Vs(),ft(vn),ft(rn),Ch();break;case 5:Rh(i);break;case 4:Vs();break;case 13:ft(mt);break;case 19:ft(mt);break;case 10:wh(i.type._context);break;case 22:case 23:Bh()}n=n.return}if(Ot=t,Tt=t=cr(t.current,null),Wt=An=e,Pt=0,to=null,Oh=mu=Wr=0,pn=Ia=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Dr=null}return t}function o0(t,e){do{var n=Tt;try{if(Eh(),Ml.current=Yl,Xl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xl=!1}if(Vr=0,Ft=Rt=gt=null,Na=!1,Za=0,Fh.current=null,n===null||n.return===null){Pt=1,to=e,Tt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=ep(a);if(g!==null){g.flags&=-257,tp(g,a,o,s,e),g.mode&1&&Jd(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Jd(s,u,e),Hh();break e}l=Error(he(426))}}else if(dt&&o.mode&1){var p=ep(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),tp(p,a,o,s,e),Sh(Ws(l,o));break e}}s=l=Ws(l,o),Pt!==4&&(Pt=2),Ia===null?Ia=[s]:Ia.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Wv(s,l,e);Yd(s,c);break e;case 1:o=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=jv(s,o,e);Yd(s,y);break e}}s=s.return}while(s!==null)}c0(n)}catch(A){e=A,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function l0(){var t=ql.current;return ql.current=Yl,t===null?Yl:t}function Hh(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!(Wr&268435455)&&!(mu&268435455)||Zi(Ot,Wt)}function Ql(t,e){var n=tt;tt|=2;var i=l0();(Ot!==t||Wt!==e)&&(bi=null,Ir(t,e));do try{Vy();break}catch(r){o0(t,r)}while(!0);if(Eh(),tt=n,ql.current=i,Tt!==null)throw Error(he(261));return Ot=null,Wt=0,Pt}function Vy(){for(;Tt!==null;)u0(Tt)}function Wy(){for(;Tt!==null&&!mx();)u0(Tt)}function u0(t){var e=h0(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?c0(t):Tt=e,Fh.current=null}function c0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Oy(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Tt=null;return}}else if(n=Fy(n,e,An),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Pt===0&&(Pt=5)}function br(t,e,n){var i=rt,r=Wn.transition;try{Wn.transition=null,rt=1,jy(t,e,n,i)}finally{Wn.transition=r,rt=i}return null}function jy(t,e,n,i){do Os();while(er!==null);if(tt&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tx(t,s),t===Ot&&(Tt=Ot=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||No||(No=!0,d0(Dl,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var a=rt;rt=1;var o=tt;tt|=4,Fh.current=null,ky(t,n),r0(n,t),fy(df),Ul=!!hf,df=hf=null,t.current=n,By(n),gx(),tt=o,rt=a,Wn.transition=s}else t.current=n;if(No&&(No=!1,er=t,Kl=r),s=t.pendingLanes,s===0&&(lr=null),xx(n.stateNode),xn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($l)throw $l=!1,t=Nf,Nf=null,t;return Kl&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===Uf?Fa++:(Fa=0,Uf=t):Fa=0,_r(),null}function Os(){if(er!==null){var t=Wg(Kl),e=Wn.transition,n=rt;try{if(Wn.transition=null,rt=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,Kl=0,tt&6)throw Error(he(331));var r=tt;for(tt|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(be=u;be!==null;){var f=be;switch(f.tag){case 0:case 11:case 15:Ua(8,f,s)}var h=f.child;if(h!==null)h.return=f,be=h;else for(;be!==null;){f=be;var d=f.sibling,g=f.return;if(t0(f),f===u){be=null;break}if(d!==null){d.return=g,be=d;break}be=g}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ua(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,be=c;break e}be=s.return}}var m=t.current;for(be=m;be!==null;){a=be;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,be=v;else e:for(a=m;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:pu(9,o)}}catch(A){xt(o,o.return,A)}if(o===a){be=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,be=y;break e}be=o.return}}if(tt=r,_r(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(au,t)}catch{}i=!0}return i}finally{rt=n,Wn.transition=e}}return!1}function pp(t,e,n){e=Ws(n,e),e=Wv(t,e,1),t=or(t,e,1),e=un(),t!==null&&(so(t,1,e),xn(t,e))}function xt(t,e,n){if(t.tag===3)pp(t,t,n);else for(;e!==null;){if(e.tag===3){pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=Ws(n,t),t=jv(e,t,1),e=or(e,t,1),t=un(),e!==null&&(so(e,1,t),xn(e,t));break}}e=e.return}}function Xy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Wt&n)===n&&(Pt===4||Pt===3&&(Wt&130023424)===Wt&&500>Mt()-zh?Ir(t,0):Oh|=n),xn(t,e)}function f0(t,e){e===0&&(t.mode&1?(e=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):e=1);var n=un();t=Fi(t,e),t!==null&&(so(t,e,n),xn(t,n))}function Yy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),f0(t,n)}function qy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),f0(t,n)}var h0;h0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,Iy(t,e,n);gn=!!(t.flags&131072)}else gn=!1,dt&&e.flags&1048576&&gv(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wl(t,e),t=e.pendingProps;var r=Bs(e,rn.current);Fs(e,n),r=Lh(null,e,i,t,r,n);var s=Dh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=du,e.stateNode=r,r._reactInternals=e,Mf(e,i,t,n),e=Tf(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&xh(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ky(i),t=Zn(i,t),r){case 0:e=wf(null,e,i,t,n);break e;case 1:e=rp(null,e,i,t,n);break e;case 11:e=np(null,e,i,t,n);break e;case 14:e=ip(null,e,i,Zn(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),wf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),rp(t,e,i,r,n);case 3:e:{if($v(e),t===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Mv(t,e),Wl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(he(423)),e),e=sp(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(he(424)),e),e=sp(t,e,i,n,r);break e}else for(Cn=ar(e.stateNode.containerInfo.firstChild),Pn=e,dt=!0,ei=null,n=yv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Oi(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return Ev(e),t===null&&xf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,pf(i,r)?a=null:s!==null&&pf(i,s)&&(e.flags|=32),qv(t,e),on(t,e,a,n),e.child;case 6:return t===null&&xf(e),null;case 13:return Kv(t,e,n);case 4:return Ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),np(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ot(Gl,i._currentValue),i._currentValue=a,s!==null)if(oi(s.value,a)){if(s.children===r.children&&!vn.current){e=Oi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(he(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),yf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,n),r=jn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),ip(t,e,i,r,n);case 15:return Xv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),wl(t,e),e.tag=1,_n(i)?(t=!0,kl(e)):t=!1,Fs(e,n),Vv(e,i,r),Mf(e,i,r,n),Tf(null,e,i,!0,t,n);case 19:return Qv(t,e,n);case 22:return Yv(t,e,n)}throw Error(he(156,e.tag))};function d0(t,e){return Bg(t,e)}function $y(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new $y(t,e,n,i)}function Gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ky(t){if(typeof t=="function")return Gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oh)return 11;if(t===lh)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Gh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case _s:return Fr(n.children,r,s,e);case ah:a=8,r|=8;break;case jc:return t=Vn(12,n,e,r|2),t.elementType=jc,t.lanes=s,t;case Xc:return t=Vn(13,n,e,r),t.elementType=Xc,t.lanes=s,t;case Yc:return t=Vn(19,n,e,r),t.elementType=Yc,t.lanes=s,t;case Eg:return gu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sg:a=10;break e;case Mg:a=9;break e;case oh:a=11;break e;case lh:a=14;break e;case $i:a=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=Vn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function gu(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=Eg,t.lanes=n,t.stateNode={isHidden:!1},t}function rc(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ku(0),this.expirationTimes=ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vh(t,e,n,i,r,s,a,o,l){return t=new Qy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function Zy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function p0(t){if(!t)return pr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(_n(n))return pv(t,n,e)}return e}function m0(t,e,n,i,r,s,a,o,l){return t=Vh(n,i,!0,t,r,s,a,o,l),t.context=p0(null),n=t.current,i=un(),r=ur(n),s=Li(i,r),s.callback=e??null,or(n,s,r),t.current.lanes=r,so(t,r,i),xn(t,i),t}function vu(t,e,n,i){var r=e.current,s=un(),a=ur(r);return n=p0(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=or(r,e,a),t!==null&&(ri(t,r,a,s),Sl(t,r,a)),a}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wh(t,e){mp(t,e),(t=t.alternate)&&mp(t,e)}function Jy(){return null}var g0=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}_u.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));vu(t,e,null,null)};_u.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){vu(null,t,null,null)}),e[Ii]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&$g(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function eS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Zl(a);s.call(u)}}var a=m0(e,i,t,0,null,!1,!1,"",gp);return t._reactRootContainer=a,t[Ii]=a.current,Ya(t.nodeType===8?t.parentNode:t),jr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Zl(l);o.call(u)}}var l=Vh(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=l,t[Ii]=l.current,Ya(t.nodeType===8?t.parentNode:t),jr(function(){vu(e,l,n,i)}),l}function yu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Zl(a);o.call(l)}}vu(e,a,t,r)}else a=eS(n,e,t,r,i);return Zl(a)}jg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ba(e.pendingLanes);n!==0&&(fh(e,n|1),xn(e,Mt()),!(tt&6)&&(js=Mt()+500,_r()))}break;case 13:jr(function(){var i=Fi(t,1);if(i!==null){var r=un();ri(i,t,1,r)}}),Wh(t,1)}};hh=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=un();ri(e,t,134217728,n)}Wh(t,134217728)}};Xg=function(t){if(t.tag===13){var e=ur(t),n=Fi(t,e);if(n!==null){var i=un();ri(n,t,e,i)}Wh(t,e)}};Yg=function(){return rt};qg=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};rf=function(t,e,n){switch(e){case"input":if(Kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cu(i);if(!r)throw Error(he(90));Tg(i),Kc(i,r)}}}break;case"textarea":Ag(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};Ug=kh;Ig=jr;var tS={usingClientEntryPoint:!1,Events:[oo,Ms,cu,Dg,Ng,kh]},pa={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nS={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zg(t),t===null?null:t.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||Jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{au=Uo.inject(nS),mi=Uo}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(he(200));return Zy(t,e,null,n)};Un.createRoot=function(t,e){if(!Xh(t))throw Error(he(299));var n=!1,i="",r=g0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,Ya(t.nodeType===8?t.parentNode:t),new jh(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=zg(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return jr(t)};Un.hydrate=function(t,e,n){if(!xu(e))throw Error(he(200));return yu(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=g0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=m0(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,Ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _u(e)};Un.render=function(t,e,n){if(!xu(e))throw Error(he(200));return yu(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!xu(t))throw Error(he(40));return t._reactRootContainer?(jr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Un.unstable_batchedUpdates=kh;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xu(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return yu(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function v0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0)}catch(t){console.error(t)}}v0(),vg.exports=Un;var uo=vg.exports,vp=uo;Vc.createRoot=vp.createRoot,Vc.hydrateRoot=vp.hydrateRoot;const iS={band:"low",sensitivity:1,smoothing:.8,min:0,max:1,enabled:!0},_0=Z.createContext(null);function rS({children:t}){const[e,n]=Z.useState(null),[i,r]=Z.useState(null),[s,a]=Z.useState(!1),[o,l]=Z.useState([]),[u,f]=Z.useState(null),[h,d]=Z.useState(null),[g,_]=Z.useState(null),[x,p]=Z.useState("cover"),[c,m]=Z.useState([]),[v,y]=Z.useState(null),[A,T]=Z.useState(iS),[M,D]=Z.useState({mode:"portrait",width:1080,height:1920}),E=Z.useCallback((I,q)=>{n(I),r(q)},[]),w=Z.useCallback((I,q,F)=>{l(P=>[...P.filter(de=>de.id!==I),{id:I,name:q,url:F}])},[]),H=Z.useCallback(I=>{f(I)},[]),X=Z.useCallback(I=>{l(q=>q.filter(F=>F.id!==I)),f(q=>q===I?null:q)},[]),ie=Z.useCallback((I,q)=>{d(F=>{if(F&&F.startsWith("blob:"))try{URL.revokeObjectURL(F)}catch{}return I?URL.createObjectURL(I):null}),_(I?q??I.name:null)},[]),L=Z.useCallback(I=>{p(I)},[]),k=Z.useCallback((I,q={})=>{const F=`layer-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,P=I==="equalizer"?.9:.8,de=I==="equalizer"?.28:.8,ue=(1-P)/2,ce=(1-de)/2;m(pe=>[...pe,{id:F,effectId:I,params:q,visible:!0,rect:{x:ue,y:ce,w:P,h:de}}]),y(F)},[]),W=Z.useCallback(I=>{y(I)},[]),V=Z.useCallback((I,q)=>{m(F=>{const P=F.findIndex(pe=>pe.id===I);if(P===-1)return F;const de=q==="up"?P-1:P+1;if(de<0||de>=F.length)return F;const ue=[...F],[ce]=ue.splice(P,1);return ue.splice(de,0,ce),ue})},[]),U=Z.useCallback((I,q)=>{m(F=>F.map(P=>P.id===I?{...P,visible:q}:P))},[]),z=Z.useCallback(I=>{m(q=>{var de;const F=q.find(ue=>ue.id===I),P=(de=F==null?void 0:F.params)==null?void 0:de.imageUrl;if(typeof P=="string"&&P.startsWith("blob:"))try{URL.revokeObjectURL(P)}catch{}return q.filter(ue=>ue.id!==I)}),y(q=>q===I?null:q)},[]),O=Z.useCallback((I,q)=>{m(F=>F.map(P=>P.id===v?(()=>{const de=P.params[I];if(I==="imageUrl"&&typeof de=="string"&&de.startsWith("blob:")&&de!==q)try{URL.revokeObjectURL(de)}catch{}return{...P,params:{...P.params,[I]:q}}})():P))},[v]),te=Z.useCallback((I,q)=>{m(F=>F.map(P=>P.id===I?{...P,rect:{...P.rect,...q}}:P))},[]),J=Z.useCallback((I,q,F)=>{m(P=>P.map(de=>{if(de.id!==I)return de;const ue=de.params[q];if(q==="imageUrl"&&typeof ue=="string"&&ue.startsWith("blob:")&&ue!==F)try{URL.revokeObjectURL(ue)}catch{}return{...de,params:{...de.params,[q]:F}}}))},[]),j=Z.useCallback(I=>{T(q=>({...q,...I}))},[]),ee=Z.useCallback(I=>{D(q=>({...q,...I}))},[]),le=(v&&c.find(I=>I.id===v))??null,Ee=(le==null?void 0:le.effectId)??null,oe=(le==null?void 0:le.params)??{},Ae=Z.useMemo(()=>({audioFile:e,audioName:i,isPlaying:s,images:o,activeImageId:u,backgroundVideoUrl:h,backgroundVideoName:g,backgroundVideoFit:x,layers:c,activeLayerId:v,activeEffectId:Ee,effectParams:oe,audioMapping:A,canvasConfig:M,setAudioFile:E,setPlaying:a,addImage:w,setActiveImage:H,removeImage:X,setBackgroundVideo:ie,setBackgroundVideoFit:L,addLayer:k,setActiveLayer:W,moveLayer:V,setLayerVisible:U,removeLayer:z,setEffectParam:O,setLayerRect:te,setLayerParam:J,setAudioMapping:j,setCanvasConfig:ee}),[e,i,s,o,u,h,g,x,c,v,Ee,oe,A,M,E,w,H,X,ie,L,k,W,V,U,z,O,te,J,j,ee]);return C.jsx(_0.Provider,{value:Ae,children:t})}function co(){const t=Z.useContext(_0);if(!t)throw new Error("useEditor must be inside EditorProvider");return t}function sS({onImportAudio:t,onImportImage:e,onImportBackgroundVideo:n,onExport:i}){var x;const{setAudioFile:r,setPlaying:s,setBackgroundVideo:a,setCanvasConfig:o}=co(),l=Z.useRef(null),u=Z.useRef(null),f=Z.useRef(null),h=typeof window<"u"&&!!((x=window.electronAPI)!=null&&x.export),d=p=>{var m;const c=(m=p.target.files)==null?void 0:m[0];c&&c.type.startsWith("audio/")&&(r(c,c.name),s(!1),t(c)),p.target.value=""},g=p=>{var m;const c=(m=p.target.files)==null?void 0:m[0];c&&/^image\/(jpeg|jpg|png)/.test(c.type)&&e(c),p.target.value=""},_=p=>{var m;const c=(m=p.target.files)==null?void 0:m[0];if(c&&c.type.startsWith("video/")){a(c,c.name),n(c);const v=URL.createObjectURL(c),y=document.createElement("video");y.preload="metadata",y.muted=!0,y.playsInline=!0,y.src=v;const A=()=>{try{URL.revokeObjectURL(v)}catch{}};y.onloadedmetadata=()=>{const T=y.videoWidth||0,M=y.videoHeight||0;if(A(),T>0&&M>0){const E=Math.min(1,1920/Math.max(T,M)),w=Math.max(320,Math.min(3840,Math.round(T*E))),H=Math.max(320,Math.min(3840,Math.round(M*E)));o({mode:"custom",width:w,height:H})}},y.onerror=()=>{A()}}p.target.value=""};return C.jsxs("header",{className:"top-bar",children:[C.jsx("span",{className:"top-bar-title",children:"SonicWeave"}),C.jsx("input",{ref:l,type:"file",accept:"audio/*",onChange:d,style:{display:"none"}}),C.jsx("input",{ref:u,type:"file",accept:"image/png,image/jpeg,image/jpg",onChange:g,style:{display:"none"}}),C.jsx("input",{ref:f,type:"file",accept:"video/*",onChange:_,style:{display:"none"}}),C.jsx("button",{className:"top-bar-btn",onClick:()=>{var p;return(p=l.current)==null?void 0:p.click()},children:"Import Audio"}),C.jsx("button",{className:"top-bar-btn",onClick:()=>{var p;return(p=u.current)==null?void 0:p.click()},children:"Import Image"}),C.jsx("button",{className:"top-bar-btn",onClick:()=>{var p;return(p=f.current)==null?void 0:p.click()},children:"Background Video"}),C.jsx("button",{className:`top-bar-btn ${h?"":"sw-btn-disabled"}`,onClick:i,"aria-disabled":!h,title:h?"导出视频":"请在桌面应用（Electron 窗口）中导出",children:"Export"})]})}const _p={particles:"Particle Bloom",spectrum:"Circular Spectrum",tunnel:"Wave Tunnel",equalizer:"Equalizer Mirror",energyField:"Energy Field",planeWaveLattice:"Plane Wave Lattice"};function aS({onPlayPause:t,onSeek:e,progress:n,duration:i,onSetActiveImage:r,onSelectEffect:s}){const{audioFile:a,audioName:o,isPlaying:l,images:u,activeImageId:f,activeEffectId:h,layers:d,activeLayerId:g,setActiveLayer:_,moveLayer:x,setLayerVisible:p,removeLayer:c,setPlaying:m}=co(),v=()=>{m(!l),t()};return C.jsxs("aside",{className:"left-panel",children:[C.jsxs("div",{className:"panel-section",children:[C.jsx("div",{className:"panel-section-title",children:"Audio"}),a?C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"panel-item active",style:{cursor:"default",marginBottom:8},children:o??"Audio"}),C.jsx("button",{className:"top-bar-btn",style:{width:"100%",marginBottom:8},onClick:v,children:l?"Pause":"Play"}),C.jsx("div",{style:{marginBottom:4},children:C.jsx("input",{type:"range",min:0,max:i||1,value:n,onChange:y=>e(parseFloat(y.target.value)),style:{width:"100%"}})}),C.jsxs("div",{style:{fontSize:10,color:"var(--text-dim)"},children:[xp(n)," / ",xp(i)]})]}):C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)"},children:"No audio loaded"})]}),C.jsxs("div",{className:"panel-section",children:[C.jsx("div",{className:"panel-section-title",children:"Image Assets"}),u.length===0?C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)"},children:"No images"}):u.map(y=>C.jsx("div",{className:`panel-item ${y.id===f?"active":""}`,onClick:()=>r(y.url),children:y.name},y.id))]}),C.jsxs("div",{className:"panel-section",style:{flex:1,overflow:"auto"},children:[C.jsx("div",{className:"panel-section-title",children:"Effects Library"}),["energyField","planeWaveLattice","particles","equalizer","spectrum","tunnel"].map(y=>C.jsx("div",{className:`panel-item ${y===h?"active":""}`,onClick:()=>s(y),children:_p[y]},y))]}),C.jsxs("div",{className:"panel-section",style:{flex:1,overflow:"auto"},children:[C.jsx("div",{className:"panel-section-title",children:"Layers"}),d.length===0?C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)"},children:"No layers. Click an effect to add one."}):d.map((y,A)=>C.jsxs("div",{className:`panel-item ${y.id===g?"active":""}`,style:{display:"flex",alignItems:"center",gap:6},onClick:()=>_(y.id),children:[C.jsxs("span",{style:{flex:1},children:[A+1,". ",_p[y.effectId]]}),C.jsx("button",{className:"top-bar-btn",style:{padding:"2px 4px",fontSize:10},disabled:A===0,onClick:T=>{T.stopPropagation(),x(y.id,"up")},children:"Up"}),C.jsx("button",{className:"top-bar-btn",style:{padding:"2px 4px",fontSize:10},disabled:A===d.length-1,onClick:T=>{T.stopPropagation(),x(y.id,"down")},children:"Down"}),C.jsxs("label",{style:{display:"flex",alignItems:"center",gap:2,fontSize:10,color:"var(--text-dim)"},onClick:T=>T.stopPropagation(),children:[C.jsx("input",{type:"checkbox",checked:y.visible,onChange:T=>p(y.id,T.target.checked),style:{width:12,height:12}}),"Vis"]}),C.jsx("button",{className:"top-bar-btn",style:{padding:"2px 4px",fontSize:10},onClick:T=>{T.stopPropagation(),c(y.id)},children:"X"})]},y.id))]})]})}function xp(t){if(!Number.isFinite(t)||t<0)return"0:00";const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`}function Su(){return(Su=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function x0(t,e){if(t==null)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)e.indexOf(n=s[i])>=0||(r[n]=t[n]);return r}function Of(t){var e=Z.useRef(t),n=Z.useRef(function(i){e.current&&e.current(i)});return e.current=t,n.current}var no=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=1),t>n?n:t<e?e:t},Oa=function(t){return"touches"in t},zf=function(t){return t&&t.ownerDocument.defaultView||self},yp=function(t,e,n){var i=t.getBoundingClientRect(),r=Oa(e)?function(s,a){for(var o=0;o<s.length;o++)if(s[o].identifier===a)return s[o];return s[0]}(e.touches,n):e;return{left:no((r.pageX-(i.left+zf(t).pageXOffset))/i.width),top:no((r.pageY-(i.top+zf(t).pageYOffset))/i.height)}},Sp=function(t){!Oa(t)&&t.preventDefault()},y0=Ht.memo(function(t){var e=t.onMove,n=t.onKey,i=x0(t,["onMove","onKey"]),r=Z.useRef(null),s=Of(e),a=Of(n),o=Z.useRef(null),l=Z.useRef(!1),u=Z.useMemo(function(){var g=function(p){Sp(p),(Oa(p)?p.touches.length>0:p.buttons>0)&&r.current?s(yp(r.current,p,o.current)):x(!1)},_=function(){return x(!1)};function x(p){var c=l.current,m=zf(r.current),v=p?m.addEventListener:m.removeEventListener;v(c?"touchmove":"mousemove",g),v(c?"touchend":"mouseup",_)}return[function(p){var c=p.nativeEvent,m=r.current;if(m&&(Sp(c),!function(y,A){return A&&!Oa(y)}(c,l.current)&&m)){if(Oa(c)){l.current=!0;var v=c.changedTouches||[];v.length&&(o.current=v[0].identifier)}m.focus(),s(yp(m,c,o.current)),x(!0)}},function(p){var c=p.which||p.keyCode;c<37||c>40||(p.preventDefault(),a({left:c===39?.05:c===37?-.05:0,top:c===40?.05:c===38?-.05:0}))},x]},[a,s]),f=u[0],h=u[1],d=u[2];return Z.useEffect(function(){return d},[d]),Ht.createElement("div",Su({},i,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:r,onKeyDown:h,tabIndex:0,role:"slider"}))}),Yh=function(t){return t.filter(Boolean).join(" ")},S0=function(t){var e=t.color,n=t.left,i=t.top,r=i===void 0?.5:i,s=Yh(["react-colorful__pointer",t.className]);return Ht.createElement("div",{className:s,style:{top:100*r+"%",left:100*n+"%"}},Ht.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:e}}))},Gt=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=Math.pow(10,e)),Math.round(n*t)/n},oS=function(t){return hS(kf(t))},kf=function(t){return t[0]==="#"&&(t=t.substring(1)),t.length<6?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?Gt(parseInt(t[3]+t[3],16)/255,2):1}:{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16),a:t.length===8?Gt(parseInt(t.substring(6,8),16)/255,2):1}},lS=function(t){return fS(cS(t))},uS=function(t){var e=t.s,n=t.v,i=t.a,r=(200-e)*n/100;return{h:Gt(t.h),s:Gt(r>0&&r<200?e*n/100/(r<=100?r:200-r)*100:0),l:Gt(r/2),a:Gt(i,2)}},Bf=function(t){var e=uS(t);return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},cS=function(t){var e=t.h,n=t.s,i=t.v,r=t.a;e=e/360*6,n/=100,i/=100;var s=Math.floor(e),a=i*(1-n),o=i*(1-(e-s)*n),l=i*(1-(1-e+s)*n),u=s%6;return{r:Gt(255*[i,o,a,a,l,i][u]),g:Gt(255*[l,i,i,o,a,a][u]),b:Gt(255*[a,a,l,i,i,o][u]),a:Gt(r,2)}},Io=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},fS=function(t){var e=t.r,n=t.g,i=t.b,r=t.a,s=r<1?Io(Gt(255*r)):"";return"#"+Io(e)+Io(n)+Io(i)+s},hS=function(t){var e=t.r,n=t.g,i=t.b,r=t.a,s=Math.max(e,n,i),a=s-Math.min(e,n,i),o=a?s===e?(n-i)/a:s===n?2+(i-e)/a:4+(e-n)/a:0;return{h:Gt(60*(o<0?o+6:o)),s:Gt(s?a/s*100:0),v:Gt(s/255*100),a:r}},dS=Ht.memo(function(t){var e=t.hue,n=t.onChange,i=Yh(["react-colorful__hue",t.className]);return Ht.createElement("div",{className:i},Ht.createElement(y0,{onMove:function(r){n({h:360*r.left})},onKey:function(r){n({h:no(e+360*r.left,0,360)})},"aria-label":"Hue","aria-valuenow":Gt(e),"aria-valuemax":"360","aria-valuemin":"0"},Ht.createElement(S0,{className:"react-colorful__hue-pointer",left:e/360,color:Bf({h:e,s:100,v:100,a:1})})))}),pS=Ht.memo(function(t){var e=t.hsva,n=t.onChange,i={backgroundColor:Bf({h:e.h,s:100,v:100,a:1})};return Ht.createElement("div",{className:"react-colorful__saturation",style:i},Ht.createElement(y0,{onMove:function(r){n({s:100*r.left,v:100-100*r.top})},onKey:function(r){n({s:no(e.s+100*r.left,0,100),v:no(e.v-100*r.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Gt(e.s)+"%, Brightness "+Gt(e.v)+"%"},Ht.createElement(S0,{className:"react-colorful__saturation-pointer",top:1-e.v/100,left:e.s/100,color:Bf(e)})))}),M0=function(t,e){if(t===e)return!0;for(var n in t)if(t[n]!==e[n])return!1;return!0},mS=function(t,e){return t.toLowerCase()===e.toLowerCase()||M0(kf(t),kf(e))};function gS(t,e,n){var i=Of(n),r=Z.useState(function(){return t.toHsva(e)}),s=r[0],a=r[1],o=Z.useRef({color:e,hsva:s});Z.useEffect(function(){if(!t.equal(e,o.current.color)){var u=t.toHsva(e);o.current={hsva:u,color:e},a(u)}},[e,t]),Z.useEffect(function(){var u;M0(s,o.current.hsva)||t.equal(u=t.fromHsva(s),o.current.color)||(o.current={hsva:s,color:u},i(u))},[s,t,i]);var l=Z.useCallback(function(u){a(function(f){return Object.assign({},f,u)})},[]);return[s,l]}var vS=typeof window<"u"?Z.useLayoutEffect:Z.useEffect,_S=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Mp=new Map,xS=function(t){vS(function(){var e=t.current?t.current.ownerDocument:document;if(e!==void 0&&!Mp.has(e)){var n=e.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Mp.set(e,n);var i=_S();i&&n.setAttribute("nonce",i),e.head.appendChild(n)}},[])},yS=function(t){var e=t.className,n=t.colorModel,i=t.color,r=i===void 0?n.defaultColor:i,s=t.onChange,a=x0(t,["className","colorModel","color","onChange"]),o=Z.useRef(null);xS(o);var l=gS(n,r,s),u=l[0],f=l[1],h=Yh(["react-colorful",e]);return Ht.createElement("div",Su({},a,{ref:o,className:h}),Ht.createElement(pS,{hsva:u,onChange:f}),Ht.createElement(dS,{hue:u.h,onChange:f,className:"react-colorful__last-control"}))},SS={defaultColor:"000",toHsva:oS,fromHsva:function(t){return lS({h:t.h,s:t.s,v:t.v,a:1})},equal:mS},ac=function(t){return Ht.createElement(yS,Su({},t,{colorModel:SS}))};const MS=[{value:"low",label:"Low"},{value:"mid",label:"Mid"},{value:"high",label:"High"}];function ES({onEffectParamChange:t,onAudioMappingChange:e}){const[n,i]=Z.useState("effect"),{activeEffectId:r,effectParams:s,audioMapping:a,setEffectParam:o,setAudioMapping:l,canvasConfig:u,setCanvasConfig:f,backgroundVideoUrl:h,backgroundVideoFit:d,setBackgroundVideoFit:g}=co(),_=(p,c)=>{o(p,c),t(p,c)},x=(p,c)=>{l({[p]:c}),e(p,c)};return C.jsxs("aside",{className:"right-panel",children:[C.jsxs("div",{className:"inspector-tabs",children:[C.jsx("button",{className:`inspector-tab ${n==="effect"?"active":""}`,onClick:()=>i("effect"),children:"Effect Parameters"}),C.jsx("button",{className:`inspector-tab ${n==="mapping"?"active":""}`,onClick:()=>i("mapping"),children:"Audio Mapping"})]}),C.jsxs("div",{className:"inspector-content",children:[n==="effect"&&C.jsx(TS,{effectId:r,params:s,onChange:_}),n==="mapping"&&C.jsxs(C.Fragment,{children:[C.jsx(AS,{mapping:a,onChange:x}),C.jsx(wS,{hasVideo:!!h,fit:d,onChangeFit:g}),C.jsx(RS,{config:u,onChange:f})]})]})]})}function wS({hasVideo:t,fit:e,onChangeFit:n}){return C.jsxs("div",{style:{marginTop:16,borderTop:"1px solid var(--border)",paddingTop:12},children:[C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)",marginBottom:8},children:"Background"}),C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Video Fit"}),C.jsxs("select",{disabled:!t,value:e,onChange:i=>n(i.target.value),children:[C.jsx("option",{value:"cover",children:"Cover (fill)"}),C.jsx("option",{value:"contain",children:"Contain (no crop)"})]})]}),t?null:C.jsx("div",{style:{color:"var(--text-dim)",fontSize:11,marginTop:6},children:"先导入背景视频后可调整"})]})}function TS({effectId:t,params:e,onChange:n}){const i=Z.useRef(null);if(!t)return C.jsx("div",{style:{color:"var(--text-dim)",fontSize:12},children:"Select an effect"});if(t==="energyField"){const r=typeof e.color=="string"&&e.color?e.color:"#3fd2ff";return C.jsxs(C.Fragment,{children:[C.jsxs("div",{style:{marginBottom:10},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[C.jsx("label",{style:{color:"var(--text-dim)",fontSize:11},children:"Color"}),C.jsx("span",{style:{color:"var(--text-dim)",fontSize:11},children:r})]}),C.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:8},children:[C.jsx("div",{style:{width:20,height:20,borderRadius:4,background:r,border:"1px solid var(--border)"}}),C.jsx("input",{value:r,onChange:s=>n("color",s.target.value),spellCheck:!1,style:{width:"100%"}})]}),C.jsx("div",{style:{borderRadius:10,overflow:"hidden"},children:C.jsx(ac,{color:r,onChange:s=>n("color",s)})})]}),C.jsx(Ve,{label:"Opacity",value:e.opacity??.95,min:.05,max:1,step:.01,onChange:s=>n("opacity",s)}),C.jsx(Ve,{label:"Intensity",value:e.intensity??1.1,min:.1,max:3,step:.05,onChange:s=>n("intensity",s)}),C.jsx(Ve,{label:"Radius",value:e.radius??.62,min:.1,max:1.2,step:.01,onChange:s=>n("radius",s)}),C.jsx(Ve,{label:"Thickness",value:e.thickness??.08,min:.01,max:.4,step:.005,onChange:s=>n("thickness",s)}),C.jsx(Ve,{label:"Noise",value:e.noise??1,min:0,max:2,step:.01,onChange:s=>n("noise",s)}),C.jsx(Ve,{label:"Speed",value:e.speed??.9,min:0,max:2,step:.01,onChange:s=>n("speed",s)})]})}if(t==="planeWaveLattice"){const r=typeof e.color=="string"&&e.color?e.color:"#ff2b2b";return C.jsxs(C.Fragment,{children:[C.jsxs("div",{style:{marginBottom:10},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[C.jsx("label",{style:{color:"var(--text-dim)",fontSize:11},children:"Color"}),C.jsx("span",{style:{color:"var(--text-dim)",fontSize:11},children:r})]}),C.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:8},children:[C.jsx("div",{style:{width:20,height:20,borderRadius:4,background:r,border:"1px solid var(--border)"}}),C.jsx("input",{value:r,onChange:s=>n("color",s.target.value),spellCheck:!1,style:{width:"100%"}})]}),C.jsx("div",{style:{borderRadius:10,overflow:"hidden"},children:C.jsx(ac,{color:r,onChange:s=>n("color",s)})})]}),C.jsx(Ve,{label:"Opacity",value:e.opacity??.95,min:.05,max:1,step:.01,onChange:s=>n("opacity",s)}),C.jsx(Ve,{label:"Point Size",value:e.pointSize??.018,min:.004,max:.06,step:.001,onChange:s=>n("pointSize",s)}),C.jsx(Ve,{label:"Grid",value:e.grid??18,min:6,max:40,step:1,onChange:s=>n("grid",s)}),C.jsx(Ve,{label:"Spacing",value:e.spacing??.22,min:.08,max:.55,step:.01,onChange:s=>n("spacing",s)}),C.jsx(Ve,{label:"k (Wave Number)",value:e.k??2.8,min:.2,max:10,step:.05,onChange:s=>n("k",s)}),C.jsx(Ve,{label:"Direction θ",value:e.theta??.08,min:0,max:1,step:.01,onChange:s=>n("theta",s)}),C.jsx(Ve,{label:"Direction φ",value:e.phi??.52,min:0,max:1,step:.01,onChange:s=>n("phi",s)}),C.jsx(Ve,{label:"ω (Speed)",value:e.omega??2.2,min:0,max:8,step:.05,onChange:s=>n("omega",s)}),C.jsx(Ve,{label:"Sharpness",value:e.sharpness??4.2,min:1,max:10,step:.1,onChange:s=>n("sharpness",s)}),C.jsx(Ve,{label:"Rotate Speed",value:e.rotateSpeed??.18,min:0,max:1.2,step:.01,onChange:s=>n("rotateSpeed",s)}),C.jsxs("div",{style:{marginTop:12,borderTop:"1px solid var(--border)",paddingTop:10},children:[C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)",marginBottom:8},children:"Audio Reactive (Energy)"}),C.jsx(Ve,{label:"React ω",value:e.reactOmega??0,min:0,max:2,step:.01,onChange:s=>n("reactOmega",s)}),C.jsx(Ve,{label:"React Point Size",value:e.reactPointSize??0,min:0,max:2,step:.01,onChange:s=>n("reactPointSize",s)}),C.jsx(Ve,{label:"React Sharpness",value:e.reactSharpness??0,min:0,max:2,step:.01,onChange:s=>n("reactSharpness",s)}),C.jsx(Ve,{label:"React k",value:e.reactK??0,min:0,max:2,step:.01,onChange:s=>n("reactK",s)}),C.jsx(Ve,{label:"React Rotate",value:e.reactRotate??0,min:0,max:2,step:.01,onChange:s=>n("reactRotate",s)})]})]})}if(t==="particles"){const r=e.shape??0;return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Shape"}),C.jsxs("select",{value:String(r),onChange:s=>n("shape",parseInt(s.target.value,10)),children:[C.jsx("option",{value:"0",children:"Sphere"}),C.jsx("option",{value:"1",children:"Circle"}),C.jsx("option",{value:"2",children:"Plane"})]})]}),r===2?C.jsxs("div",{style:{marginBottom:10},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[C.jsx("label",{style:{color:"var(--text-dim)",fontSize:11},children:"Plane Direction"}),C.jsx("span",{style:{color:"var(--text-dim)",fontSize:11},children:(e.planeDir??0)===0?"Center = All Directions":"8-way Flow"})]}),C.jsx(bS,{value:e.planeDir??0,onChange:s=>n("planeDir",s)})]}):null,r===1?C.jsx(Ve,{label:"Tilt",value:e.tilt??0,min:0,max:1,step:.01,onChange:s=>n("tilt",s)}):null,C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Rotation"}),C.jsxs("select",{value:String(e.rotationMode??0),onChange:s=>n("rotationMode",parseInt(s.target.value,10)),children:[C.jsx("option",{value:"0",children:"Y"}),C.jsx("option",{value:"1",children:"XY"}),C.jsx("option",{value:"2",children:"XYZ"})]})]}),C.jsx(Ve,{label:"Particle Size",value:e.baseSize??.02,min:.01,max:.16,step:.002,onChange:s=>n("baseSize",s)}),C.jsx(Ve,{label:"Rotation Speed",value:e.rotationSpeed??1,min:0,max:6,step:.1,onChange:s=>n("rotationSpeed",s)}),C.jsx(Ve,{label:"Max Particle Groups",value:e.maxGroups??10,min:1,max:20,step:1,onChange:s=>n("maxGroups",s)}),C.jsx(Ve,{label:"Hue",value:e.hue??.55,min:0,max:1,step:.01,onChange:s=>n("hue",s)}),C.jsx(Ve,{label:"Opacity",value:e.opacity??.8,min:.2,max:1,step:.05,onChange:s=>n("opacity",s)})]})}if(t==="equalizer"){const r=typeof e.color=="string"&&e.color?e.color:"#4fc3ff";return C.jsxs(C.Fragment,{children:[C.jsx(Fo,{label:"Flip Horizontal",checked:!!e.flipX,onChange:s=>n("flipX",s)}),C.jsx(Fo,{label:"Flip Vertical",checked:!!e.flipY,onChange:s=>n("flipY",s)}),C.jsx(Fo,{label:"Show Reflection",checked:!!(e.showReflection??!0),onChange:s=>n("showReflection",s)}),C.jsx(Fo,{label:"Show Baseline",checked:!!(e.showBaseline??!0),onChange:s=>n("showBaseline",s)}),C.jsxs("div",{className:"slider-row",children:[C.jsx("label",{children:"Bar Count"}),C.jsx("input",{type:"number",min:16,max:512,value:Math.round(e.barCount??128),onChange:s=>n("barCount",parseInt(s.target.value,10)||128),style:{width:"100%",padding:"4px 6px",background:"var(--bg-hover)",border:"1px solid var(--border)",borderRadius:4,color:"var(--text)",fontSize:11}}),C.jsx("span",{className:"slider-value",children:Math.round(e.barCount??128)})]}),C.jsx(Ve,{label:"Length",value:e.length??.95,min:.5,max:2,step:.01,onChange:s=>n("length",s)}),C.jsxs("div",{style:{marginBottom:12},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[C.jsx("label",{style:{color:"var(--text-dim)",fontSize:11},children:"Color"}),C.jsx("input",{value:r,onChange:s=>n("color",s.target.value),style:{width:90,padding:"4px 6px",background:"var(--bg-hover)",border:"1px solid var(--border)",borderRadius:4,color:"var(--text)",fontSize:11}})]}),C.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[C.jsx("div",{style:{width:160},children:C.jsx(ac,{color:r,onChange:s=>n("color",s)})}),C.jsx("div",{style:{width:28,height:28,borderRadius:6,border:"1px solid var(--border)",background:r},title:r})]})]}),C.jsx(Ve,{label:"Glow",value:e.glow??.9,min:0,max:2,step:.01,onChange:s=>n("glow",s)}),C.jsx(Ve,{label:"Glow Size",value:e.glowSize??.9,min:0,max:2,step:.01,onChange:s=>n("glowSize",s)}),C.jsx(Ve,{label:"Opacity",value:e.opacity??.95,min:.05,max:1,step:.01,onChange:s=>n("opacity",s)}),C.jsx(Ve,{label:"Height",value:e.heightScale??1,min:.2,max:1.5,step:.01,onChange:s=>n("heightScale",s)}),C.jsx(Ve,{label:"Reflection",value:e.reflection??.65,min:0,max:1,step:.01,onChange:s=>n("reflection",s)}),C.jsx(Ve,{label:"Gap",value:e.gap??.25,min:0,max:.8,step:.01,onChange:s=>n("gap",s)}),C.jsx(Ve,{label:"Smoothing",value:e.smoothing??.18,min:.02,max:.6,step:.01,onChange:s=>n("smoothing",s)})]})}if(t==="spectrum")return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Style"}),C.jsxs("select",{value:(e.style??0)>=.5?"ferro":"bars",onChange:r=>n("style",r.target.value==="ferro"?1:0),children:[C.jsx("option",{value:"bars",children:"Bars"}),C.jsx("option",{value:"ferro",children:"Ferrofluid"})]})]}),C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Bars Direction"}),C.jsxs("select",{value:(e.barMode??0)>=.5?"vertical":"radial",onChange:r=>n("barMode",r.target.value==="vertical"?1:0),children:[C.jsx("option",{value:"radial",children:"Radial Outward"}),C.jsx("option",{value:"vertical",children:"Vertical"})]})]}),C.jsx(Ve,{label:"Tilt",value:e.tilt??0,min:0,max:1,step:.01,onChange:r=>n("tilt",r)}),C.jsx(Ve,{label:"Radius",value:e.radius??.7,min:.3,max:2,step:.05,onChange:r=>n("radius",r)}),C.jsx(Ve,{label:"Height",value:e.heightScale??.7,min:.2,max:1,step:.05,onChange:r=>n("heightScale",r)}),C.jsx(Ve,{label:"Bar Width",value:e.barWidth??.5,min:0,max:1,step:.05,onChange:r=>n("barWidth",r)})]});if(t==="tunnel"){const r=typeof e.imageUrl=="string"?e.imageUrl:"";return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"toggle-row",children:[C.jsx("label",{children:"Use Image"}),C.jsx("input",{type:"checkbox",checked:!!e.imageEnabled,onChange:s=>n("imageEnabled",s.target.checked)})]}),C.jsxs("div",{className:"select-row",style:{gap:8},children:[C.jsx("button",{className:"top-bar-btn",style:{flex:1},onClick:()=>{var s;return(s=i.current)==null?void 0:s.click()},children:"Browse Image"}),C.jsx("button",{className:"top-bar-btn",disabled:!r,onClick:()=>n("imageUrl",""),children:"Clear"}),C.jsx("input",{ref:i,type:"file",accept:"image/*",style:{display:"none"},onChange:s=>{var l;const a=(l=s.target.files)==null?void 0:l[0];if(s.currentTarget.value="",!a)return;const o=URL.createObjectURL(a);n("imageUrl",o),n("imageEnabled",!0)}})]}),C.jsx(Ve,{label:"Image Mix",value:e.imageMix??.6,min:0,max:1,step:.01,onChange:s=>n("imageMix",s)}),C.jsx("div",{style:{color:"var(--text-dim)",fontSize:11,marginTop:6},children:r?"已选择图片（仅此 WaveTunnel 图层使用）":"未选择图片"})]})}return C.jsx("div",{style:{color:"var(--text-dim)",fontSize:12},children:"No parameters for this effect"})}function bS({value:t,onChange:e}){const n=(i,r)=>{const s=t===i;return C.jsx("button",{type:"button",onClick:()=>e(i),className:"top-bar-btn",style:{width:34,height:34,padding:0,display:"grid",placeItems:"center",background:s?"var(--accent-dim)":"var(--bg-hover)",borderColor:s?"var(--accent)":"var(--border)",fontSize:14,lineHeight:1,userSelect:"none"},"aria-pressed":s,"aria-label":`Plane direction ${i}`,children:r})};return C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 34px)",gap:6},children:[n(8,"↖"),n(1,"↑"),n(2,"↗"),n(7,"←"),n(0,"•"),n(3,"→"),n(6,"↙"),n(5,"↓"),n(4,"↘")]})}function AS({mapping:t,onChange:e}){return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"toggle-row",children:[C.jsx("label",{children:"Audio Reactive"}),C.jsx("input",{type:"checkbox",checked:t.enabled,onChange:n=>e("enabled",n.target.checked)})]}),C.jsxs("div",{className:"select-row",children:[C.jsx("label",{children:"Audio Band"}),C.jsx("select",{value:t.band,onChange:n=>e("band",n.target.value),children:MS.map(n=>C.jsx("option",{value:n.value,children:n.label},n.value))})]}),C.jsx(Ve,{label:"Sensitivity",value:t.sensitivity,min:.1,max:3,step:.1,onChange:n=>e("sensitivity",n)}),C.jsx(Ve,{label:"Smoothing",value:t.smoothing,min:0,max:1,step:.05,onChange:n=>e("smoothing",n)}),C.jsx(Ve,{label:"Min",value:t.min,min:0,max:1,step:.05,onChange:n=>e("min",n)}),C.jsx(Ve,{label:"Max",value:t.max,min:0,max:2,step:.05,onChange:n=>e("max",n)})]})}function RS({config:t,onChange:e}){const{mode:n,width:i,height:r}=t,s=o=>{e(o==="portrait"?{mode:"portrait",width:1080,height:1920}:{mode:"landscape",width:1920,height:1080})},a=(o,l)=>{const u=Number.isFinite(l)?Math.max(320,Math.min(3840,l)):1080;e({mode:"custom",[o]:u})};return C.jsxs("div",{style:{marginTop:16,borderTop:"1px solid var(--border)",paddingTop:12},children:[C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)",marginBottom:8},children:"Canvas"}),C.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[C.jsx("button",{className:"top-bar-btn",style:{flex:1,padding:"4px 6px",fontSize:11,background:n==="portrait"?"var(--accent-dim)":"var(--bg-hover)"},onClick:()=>s("portrait"),children:"Portrait 1080×1920"}),C.jsx("button",{className:"top-bar-btn",style:{flex:1,padding:"4px 6px",fontSize:11,background:n==="landscape"?"var(--accent-dim)":"var(--bg-hover)"},onClick:()=>s("landscape"),children:"Landscape 1920×1080"})]}),C.jsx("div",{style:{fontSize:11,color:"var(--text-dim)",marginBottom:4},children:"Custom"}),C.jsxs("div",{style:{display:"flex",gap:6},children:[C.jsx("div",{style:{flex:1},children:C.jsx("input",{type:"number",min:320,max:3840,value:i,onChange:o=>a("width",parseInt(o.target.value,10)),style:{width:"100%",padding:"4px 6px",background:"var(--bg-hover)",border:"1px solid var(--border)",borderRadius:4,color:"var(--text)",fontSize:11}})}),C.jsx("div",{style:{flex:1},children:C.jsx("input",{type:"number",min:320,max:3840,value:r,onChange:o=>a("height",parseInt(o.target.value,10)),style:{width:"100%",padding:"4px 6px",background:"var(--bg-hover)",border:"1px solid var(--border)",borderRadius:4,color:"var(--text)",fontSize:11}})})]})]})}function Ve({label:t,value:e,min:n,max:i,step:r=.01,onChange:s}){return C.jsxs("div",{className:"slider-row",children:[C.jsx("label",{children:t}),C.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:a=>s(parseFloat(a.target.value))}),C.jsx("span",{className:"slider-value",children:e.toFixed(2)})]})}function Fo({label:t,checked:e,onChange:n}){return C.jsxs("div",{className:"toggle-row",children:[C.jsx("label",{children:t}),C.jsx("input",{type:"checkbox",checked:e,onChange:i=>n(i.target.checked)})]})}var Mu={exports:{}},E0={},w0={exports:{}},CS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",PS=CS,LS=PS;function T0(){}function b0(){}b0.resetWarningCache=T0;var DS=function(){function t(i,r,s,a,o,l){if(l!==LS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:b0,resetWarningCache:T0};return n.PropTypes=n,n};w0.exports=DS();var A0=w0.exports;function R0(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=R0(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function Ep(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=R0(t))&&(i&&(i+=" "),i+=e);return i}const NS=Object.freeze(Object.defineProperty({__proto__:null,clsx:Ep,default:Ep},Symbol.toStringTag,{value:"Module"})),US=L_(NS);var yt={},vi={};Object.defineProperty(vi,"__esModule",{value:!0});vi.dontSetMe=kS;vi.findInArray=IS;vi.int=zS;vi.isFunction=FS;vi.isNum=OS;function IS(t,e){for(let n=0,i=t.length;n<i;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function FS(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Function]"}function OS(t){return typeof t=="number"&&!isNaN(t)}function zS(t){return parseInt(t,10)}function kS(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}var qr={};Object.defineProperty(qr,"__esModule",{value:!0});qr.browserPrefixToKey=P0;qr.browserPrefixToStyle=BS;qr.default=void 0;qr.getPrefix=C0;const oc=["Moz","Webkit","O","ms"];function C0(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(t=window.document)===null||t===void 0||(t=t.documentElement)===null||t===void 0?void 0:t.style;if(!n||e in n)return"";for(let i=0;i<oc.length;i++)if(P0(e,oc[i])in n)return oc[i];return""}function P0(t,e){return e?"".concat(e).concat(HS(t)):t}function BS(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t}function HS(t){let e="",n=!0;for(let i=0;i<t.length;i++)n?(e+=t[i].toUpperCase(),n=!1):t[i]==="-"?n=!0:e+=t[i];return e}qr.default=C0();Object.defineProperty(yt,"__esModule",{value:!0});yt.addClassName=N0;yt.addEvent=WS;yt.addUserSelectStyles=tM;yt.createCSSTransform=QS;yt.createSVGTransform=ZS;yt.getTouch=JS;yt.getTouchIdentifier=eM;yt.getTranslation=qh;yt.innerHeight=qS;yt.innerWidth=$S;yt.matchesSelector=D0;yt.matchesSelectorAndParentsTo=VS;yt.offsetXYFromParent=KS;yt.outerHeight=XS;yt.outerWidth=YS;yt.removeClassName=U0;yt.removeEvent=jS;yt.removeUserSelectStyles=nM;var Ln=vi,wp=GS(qr);function L0(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(L0=function(i){return i?n:e})(t)}function GS(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=L0(e);if(n&&n.has(t))return n.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var a=r?Object.getOwnPropertyDescriptor(t,s):null;a&&(a.get||a.set)?Object.defineProperty(i,s,a):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i}let Oo="";function D0(t,e){return Oo||(Oo=(0,Ln.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,Ln.isFunction)(t[n])})),(0,Ln.isFunction)(t[Oo])?t[Oo](e):!1}function VS(t,e,n){let i=t;do{if(D0(i,e))return!0;if(i===n)return!1;i=i.parentNode}while(i);return!1}function WS(t,e,n,i){if(!t)return;const r={capture:!0,...i};t.addEventListener?t.addEventListener(e,n,r):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}function jS(t,e,n,i){if(!t)return;const r={capture:!0,...i};t.removeEventListener?t.removeEventListener(e,n,r):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}function XS(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,Ln.int)(n.borderTopWidth),e+=(0,Ln.int)(n.borderBottomWidth),e}function YS(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,Ln.int)(n.borderLeftWidth),e+=(0,Ln.int)(n.borderRightWidth),e}function qS(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,Ln.int)(n.paddingTop),e-=(0,Ln.int)(n.paddingBottom),e}function $S(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,Ln.int)(n.paddingLeft),e-=(0,Ln.int)(n.paddingRight),e}function KS(t,e,n){const r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect(),s=(t.clientX+e.scrollLeft-r.left)/n,a=(t.clientY+e.scrollTop-r.top)/n;return{x:s,y:a}}function QS(t,e){const n=qh(t,e,"px");return{[(0,wp.browserPrefixToKey)("transform",wp.default)]:n}}function ZS(t,e){return qh(t,e,"")}function qh(t,e,n){let{x:i,y:r}=t,s="translate(".concat(i).concat(n,",").concat(r).concat(n,")");if(e){const a="".concat(typeof e.x=="string"?e.x:e.x+n),o="".concat(typeof e.y=="string"?e.y:e.y+n);s="translate(".concat(a,", ").concat(o,")")+s}return s}function JS(t,e){return t.targetTouches&&(0,Ln.findInArray)(t.targetTouches,n=>e===n.identifier)||t.changedTouches&&(0,Ln.findInArray)(t.changedTouches,n=>e===n.identifier)}function eM(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function tM(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,e.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(e)),t.body&&N0(t.body,"react-draggable-transparent-selection")}function nM(t){if(t)try{if(t.body&&U0(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&e.type!=="Caret"&&e.removeAllRanges()}}catch{}}function N0(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function U0(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}var _i={};Object.defineProperty(_i,"__esModule",{value:!0});_i.canDragX=sM;_i.canDragY=aM;_i.createCoreData=lM;_i.createDraggableData=uM;_i.getBoundPosition=iM;_i.getControlPosition=oM;_i.snapToGrid=rM;var bn=vi,Cs=yt;function iM(t,e,n){if(!t.props.bounds)return[e,n];let{bounds:i}=t.props;i=typeof i=="string"?i:cM(i);const r=$h(t);if(typeof i=="string"){const{ownerDocument:s}=r,a=s.defaultView;let o;if(i==="parent"?o=r.parentNode:o=s.querySelector(i),!(o instanceof a.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const l=o,u=a.getComputedStyle(r),f=a.getComputedStyle(l);i={left:-r.offsetLeft+(0,bn.int)(f.paddingLeft)+(0,bn.int)(u.marginLeft),top:-r.offsetTop+(0,bn.int)(f.paddingTop)+(0,bn.int)(u.marginTop),right:(0,Cs.innerWidth)(l)-(0,Cs.outerWidth)(r)-r.offsetLeft+(0,bn.int)(f.paddingRight)-(0,bn.int)(u.marginRight),bottom:(0,Cs.innerHeight)(l)-(0,Cs.outerHeight)(r)-r.offsetTop+(0,bn.int)(f.paddingBottom)-(0,bn.int)(u.marginBottom)}}return(0,bn.isNum)(i.right)&&(e=Math.min(e,i.right)),(0,bn.isNum)(i.bottom)&&(n=Math.min(n,i.bottom)),(0,bn.isNum)(i.left)&&(e=Math.max(e,i.left)),(0,bn.isNum)(i.top)&&(n=Math.max(n,i.top)),[e,n]}function rM(t,e,n){const i=Math.round(e/t[0])*t[0],r=Math.round(n/t[1])*t[1];return[i,r]}function sM(t){return t.props.axis==="both"||t.props.axis==="x"}function aM(t){return t.props.axis==="both"||t.props.axis==="y"}function oM(t,e,n){const i=typeof e=="number"?(0,Cs.getTouch)(t,e):null;if(typeof e=="number"&&!i)return null;const r=$h(n),s=n.props.offsetParent||r.offsetParent||r.ownerDocument.body;return(0,Cs.offsetXYFromParent)(i||t,s,n.props.scale)}function lM(t,e,n){const i=!(0,bn.isNum)(t.lastX),r=$h(t);return i?{node:r,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:r,deltaX:e-t.lastX,deltaY:n-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:n}}function uM(t,e){const n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}}function cM(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}function $h(t){const e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}var Eu={},wu={};Object.defineProperty(wu,"__esModule",{value:!0});wu.default=fM;function fM(){}Object.defineProperty(Eu,"__esModule",{value:!0});Eu.default=void 0;var lc=dM(Z),hn=Kh(A0),hM=Kh(uo),$t=yt,Hi=_i,uc=vi,ma=Kh(wu);function Kh(t){return t&&t.__esModule?t:{default:t}}function I0(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(I0=function(i){return i?n:e})(t)}function dM(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=I0(e);if(n&&n.has(t))return n.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var a=r?Object.getOwnPropertyDescriptor(t,s):null;a&&(a.get||a.set)?Object.defineProperty(i,s,a):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i}function an(t,e,n){return e=pM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pM(t){var e=mM(t,"string");return typeof e=="symbol"?e:String(e)}function mM(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const Qn={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let Gi=Qn.mouse,Tu=class extends lc.Component{constructor(){super(...arguments),an(this,"dragging",!1),an(this,"lastX",NaN),an(this,"lastY",NaN),an(this,"touchIdentifier",null),an(this,"mounted",!1),an(this,"handleDragStart",e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&typeof e.button=="number"&&e.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:i}=n;if(this.props.disabled||!(e.target instanceof i.defaultView.Node)||this.props.handle&&!(0,$t.matchesSelectorAndParentsTo)(e.target,this.props.handle,n)||this.props.cancel&&(0,$t.matchesSelectorAndParentsTo)(e.target,this.props.cancel,n))return;e.type==="touchstart"&&e.preventDefault();const r=(0,$t.getTouchIdentifier)(e);this.touchIdentifier=r;const s=(0,Hi.getControlPosition)(e,r,this);if(s==null)return;const{x:a,y:o}=s,l=(0,Hi.createCoreData)(this,a,o);(0,ma.default)("DraggableCore: handleDragStart: %j",l),(0,ma.default)("calling",this.props.onStart),!(this.props.onStart(e,l)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,$t.addUserSelectStyles)(i),this.dragging=!0,this.lastX=a,this.lastY=o,(0,$t.addEvent)(i,Gi.move,this.handleDrag),(0,$t.addEvent)(i,Gi.stop,this.handleDragStop))}),an(this,"handleDrag",e=>{const n=(0,Hi.getControlPosition)(e,this.touchIdentifier,this);if(n==null)return;let{x:i,y:r}=n;if(Array.isArray(this.props.grid)){let o=i-this.lastX,l=r-this.lastY;if([o,l]=(0,Hi.snapToGrid)(this.props.grid,o,l),!o&&!l)return;i=this.lastX+o,r=this.lastY+l}const s=(0,Hi.createCoreData)(this,i,r);if((0,ma.default)("DraggableCore: handleDrag: %j",s),this.props.onDrag(e,s)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const l=document.createEvent("MouseEvents");l.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(l)}return}this.lastX=i,this.lastY=r}),an(this,"handleDragStop",e=>{if(!this.dragging)return;const n=(0,Hi.getControlPosition)(e,this.touchIdentifier,this);if(n==null)return;let{x:i,y:r}=n;if(Array.isArray(this.props.grid)){let l=i-this.lastX||0,u=r-this.lastY||0;[l,u]=(0,Hi.snapToGrid)(this.props.grid,l,u),i=this.lastX+l,r=this.lastY+u}const s=(0,Hi.createCoreData)(this,i,r);if(this.props.onStop(e,s)===!1||this.mounted===!1)return!1;const o=this.findDOMNode();o&&this.props.enableUserSelectHack&&(0,$t.removeUserSelectStyles)(o.ownerDocument),(0,ma.default)("DraggableCore: handleDragStop: %j",s),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,o&&((0,ma.default)("DraggableCore: Removing handlers"),(0,$t.removeEvent)(o.ownerDocument,Gi.move,this.handleDrag),(0,$t.removeEvent)(o.ownerDocument,Gi.stop,this.handleDragStop))}),an(this,"onMouseDown",e=>(Gi=Qn.mouse,this.handleDragStart(e))),an(this,"onMouseUp",e=>(Gi=Qn.mouse,this.handleDragStop(e))),an(this,"onTouchStart",e=>(Gi=Qn.touch,this.handleDragStart(e))),an(this,"onTouchEnd",e=>(Gi=Qn.touch,this.handleDragStop(e)))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,$t.addEvent)(e,Qn.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:n}=e;(0,$t.removeEvent)(n,Qn.mouse.move,this.handleDrag),(0,$t.removeEvent)(n,Qn.touch.move,this.handleDrag),(0,$t.removeEvent)(n,Qn.mouse.stop,this.handleDragStop),(0,$t.removeEvent)(n,Qn.touch.stop,this.handleDragStop),(0,$t.removeEvent)(e,Qn.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,$t.removeUserSelectStyles)(n)}}findDOMNode(){var e,n;return(e=this.props)!==null&&e!==void 0&&e.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:hM.default.findDOMNode(this)}render(){return lc.cloneElement(lc.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};Eu.default=Tu;an(Tu,"displayName","DraggableCore");an(Tu,"propTypes",{allowAnyClick:hn.default.bool,children:hn.default.node.isRequired,disabled:hn.default.bool,enableUserSelectHack:hn.default.bool,offsetParent:function(t,e){if(t[e]&&t[e].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:hn.default.arrayOf(hn.default.number),handle:hn.default.string,cancel:hn.default.string,nodeRef:hn.default.object,onStart:hn.default.func,onDrag:hn.default.func,onStop:hn.default.func,onMouseDown:hn.default.func,scale:hn.default.number,className:uc.dontSetMe,style:uc.dontSetMe,transform:uc.dontSetMe});an(Tu,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var e=d(Z),n=f(A0),i=f(uo),r=f(US),s=yt,a=_i,o=vi,l=f(Eu),u=f(wu);function f(m){return m&&m.__esModule?m:{default:m}}function h(m){if(typeof WeakMap!="function")return null;var v=new WeakMap,y=new WeakMap;return(h=function(A){return A?y:v})(m)}function d(m,v){if(m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var y=h(v);if(y&&y.has(m))return y.get(m);var A={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in m)if(M!=="default"&&Object.prototype.hasOwnProperty.call(m,M)){var D=T?Object.getOwnPropertyDescriptor(m,M):null;D&&(D.get||D.set)?Object.defineProperty(A,M,D):A[M]=m[M]}return A.default=m,y&&y.set(m,A),A}function g(){return g=Object.assign?Object.assign.bind():function(m){for(var v=1;v<arguments.length;v++){var y=arguments[v];for(var A in y)Object.prototype.hasOwnProperty.call(y,A)&&(m[A]=y[A])}return m},g.apply(this,arguments)}function _(m,v,y){return v=x(v),v in m?Object.defineProperty(m,v,{value:y,enumerable:!0,configurable:!0,writable:!0}):m[v]=y,m}function x(m){var v=p(m,"string");return typeof v=="symbol"?v:String(v)}function p(m,v){if(typeof m!="object"||m===null)return m;var y=m[Symbol.toPrimitive];if(y!==void 0){var A=y.call(m,v);if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(m)}class c extends e.Component{static getDerivedStateFromProps(v,y){let{position:A}=v,{prevPropsPosition:T}=y;return A&&(!T||A.x!==T.x||A.y!==T.y)?((0,u.default)("Draggable: getDerivedStateFromProps %j",{position:A,prevPropsPosition:T}),{x:A.x,y:A.y,prevPropsPosition:{...A}}):null}constructor(v){super(v),_(this,"onDragStart",(y,A)=>{if((0,u.default)("Draggable: onDragStart: %j",A),this.props.onStart(y,(0,a.createDraggableData)(this,A))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),_(this,"onDrag",(y,A)=>{if(!this.state.dragging)return!1;(0,u.default)("Draggable: onDrag: %j",A);const T=(0,a.createDraggableData)(this,A),M={x:T.x,y:T.y,slackX:0,slackY:0};if(this.props.bounds){const{x:E,y:w}=M;M.x+=this.state.slackX,M.y+=this.state.slackY;const[H,X]=(0,a.getBoundPosition)(this,M.x,M.y);M.x=H,M.y=X,M.slackX=this.state.slackX+(E-M.x),M.slackY=this.state.slackY+(w-M.y),T.x=M.x,T.y=M.y,T.deltaX=M.x-this.state.x,T.deltaY=M.y-this.state.y}if(this.props.onDrag(y,T)===!1)return!1;this.setState(M)}),_(this,"onDragStop",(y,A)=>{if(!this.state.dragging||this.props.onStop(y,(0,a.createDraggableData)(this,A))===!1)return!1;(0,u.default)("Draggable: onDragStop: %j",A);const M={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:E,y:w}=this.props.position;M.x=E,M.y=w}this.setState(M)}),this.state={dragging:!1,dragged:!1,x:v.position?v.position.x:v.defaultPosition.x,y:v.position?v.position.y:v.defaultPosition.y,prevPropsPosition:{...v.position},slackX:0,slackY:0,isElementSVG:!1},v.position&&!(v.onDrag||v.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var v,y;return(v=(y=this.props)===null||y===void 0||(y=y.nodeRef)===null||y===void 0?void 0:y.current)!==null&&v!==void 0?v:i.default.findDOMNode(this)}render(){const{axis:v,bounds:y,children:A,defaultPosition:T,defaultClassName:M,defaultClassNameDragging:D,defaultClassNameDragged:E,position:w,positionOffset:H,scale:X,...ie}=this.props;let L={},k=null;const V=!!!w||this.state.dragging,U=w||T,z={x:(0,a.canDragX)(this)&&V?this.state.x:U.x,y:(0,a.canDragY)(this)&&V?this.state.y:U.y};this.state.isElementSVG?k=(0,s.createSVGTransform)(z,H):L=(0,s.createCSSTransform)(z,H);const O=(0,r.default)(A.props.className||"",M,{[D]:this.state.dragging,[E]:this.state.dragged});return e.createElement(l.default,g({},ie,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),e.cloneElement(e.Children.only(A),{className:O,style:{...A.props.style,...L},transform:k}))}}t.default=c,_(c,"displayName","Draggable"),_(c,"propTypes",{...l.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:o.dontSetMe,style:o.dontSetMe,transform:o.dontSetMe}),_(c,"defaultProps",{...l.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(E0);const{default:F0,DraggableCore:gM}=E0;Mu.exports=F0;Mu.exports.default=F0;Mu.exports.DraggableCore=gM;var vM=Mu.exports;const _M=sg(vM);var wt=function(){return wt=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},wt.apply(this,arguments)},Tp={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},bp={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},zo={width:"20px",height:"20px",position:"absolute",zIndex:1},xM={top:wt(wt({},Tp),{top:"-5px"}),right:wt(wt({},bp),{left:void 0,right:"-5px"}),bottom:wt(wt({},Tp),{top:void 0,bottom:"-5px"}),left:wt(wt({},bp),{left:"-5px"}),topRight:wt(wt({},zo),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:wt(wt({},zo),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:wt(wt({},zo),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:wt(wt({},zo),{left:"-10px",top:"-10px",cursor:"nw-resize"})},yM=Z.memo(function(t){var e=t.onResizeStart,n=t.direction,i=t.children,r=t.replaceStyles,s=t.className,a=Z.useCallback(function(u){e(u,n)},[e,n]),o=Z.useCallback(function(u){e(u,n)},[e,n]),l=Z.useMemo(function(){return wt(wt({position:"absolute",userSelect:"none"},xM[n]),r??{})},[r,n]);return C.jsx("div",{className:s||void 0,style:l,onMouseDown:a,onTouchStart:o,children:i})}),SM=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function i(){this.constructor=e}e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}(),ci=function(){return ci=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},ci.apply(this,arguments)},MM={width:"auto",height:"auto"},ko=function(t,e,n){return Math.max(Math.min(t,n),e)},Ap=function(t,e,n){var i=Math.round(t/e);return i*e+n*(i-1)},Zr=function(t,e){return new RegExp(t,"i").test(e)},Bo=function(t){return!!(t.touches&&t.touches.length)},EM=function(t){return!!((t.clientX||t.clientX===0)&&(t.clientY||t.clientY===0))},Rp=function(t,e,n){n===void 0&&(n=0);var i=e.reduce(function(s,a,o){return Math.abs(a-t)<Math.abs(e[s]-t)?o:s},0),r=Math.abs(e[i]-t);return n===0||r<n?e[i]:t},cc=function(t){return t=t.toString(),t==="auto"||t.endsWith("px")||t.endsWith("%")||t.endsWith("vh")||t.endsWith("vw")||t.endsWith("vmax")||t.endsWith("vmin")?t:"".concat(t,"px")},Ho=function(t,e,n,i){if(t&&typeof t=="string"){if(t.endsWith("px"))return Number(t.replace("px",""));if(t.endsWith("%")){var r=Number(t.replace("%",""))/100;return e*r}if(t.endsWith("vw")){var r=Number(t.replace("vw",""))/100;return n*r}if(t.endsWith("vh")){var r=Number(t.replace("vh",""))/100;return i*r}}return t},wM=function(t,e,n,i,r,s,a){return i=Ho(i,t.width,e,n),r=Ho(r,t.height,e,n),s=Ho(s,t.width,e,n),a=Ho(a,t.height,e,n),{maxWidth:typeof i>"u"?void 0:Number(i),maxHeight:typeof r>"u"?void 0:Number(r),minWidth:typeof s>"u"?void 0:Number(s),minHeight:typeof a>"u"?void 0:Number(a)}},TM=function(t){return Array.isArray(t)?t:[t,t]},bM=["as","ref","style","className","grid","gridGap","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Cp="__resizable_base__",AM=function(t){SM(e,t);function e(n){var i,r,s,a,o=t.call(this,n)||this;return o.ratio=1,o.resizable=null,o.parentLeft=0,o.parentTop=0,o.resizableLeft=0,o.resizableRight=0,o.resizableTop=0,o.resizableBottom=0,o.targetLeft=0,o.targetTop=0,o.delta={width:0,height:0},o.appendBase=function(){if(!o.resizable||!o.window)return null;var l=o.parentNode;if(!l)return null;var u=o.window.document.createElement("div");return u.style.width="100%",u.style.height="100%",u.style.position="absolute",u.style.transform="scale(0, 0)",u.style.left="0",u.style.flex="0 0 100%",u.classList?u.classList.add(Cp):u.className+=Cp,l.appendChild(u),u},o.removeBase=function(l){var u=o.parentNode;u&&u.removeChild(l)},o.state={isResizing:!1,width:(r=(i=o.propsSize)===null||i===void 0?void 0:i.width)!==null&&r!==void 0?r:"auto",height:(a=(s=o.propsSize)===null||s===void 0?void 0:s.height)!==null&&a!==void 0?a:"auto",direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},o.onResizeStart=o.onResizeStart.bind(o),o.onMouseMove=o.onMouseMove.bind(o),o.onMouseUp=o.onMouseUp.bind(o),o}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"window",{get:function(){return!this.resizable||!this.resizable.ownerDocument?null:this.resizable.ownerDocument.defaultView},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||MM},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){var n=0,i=0;if(this.resizable&&this.window){var r=this.resizable.offsetWidth,s=this.resizable.offsetHeight,a=this.resizable.style.position;a!=="relative"&&(this.resizable.style.position="relative"),n=this.resizable.style.width!=="auto"?this.resizable.offsetWidth:r,i=this.resizable.style.height!=="auto"?this.resizable.offsetHeight:s,this.resizable.style.position=a}return{width:n,height:i}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeStyle",{get:function(){var n=this,i=this.props.size,r=function(o){var l;if(typeof n.state[o]>"u"||n.state[o]==="auto")return"auto";if(n.propsSize&&n.propsSize[o]&&(!((l=n.propsSize[o])===null||l===void 0)&&l.toString().endsWith("%"))){if(n.state[o].toString().endsWith("%"))return n.state[o].toString();var u=n.getParentSize(),f=Number(n.state[o].toString().replace("px","")),h=f/u[o]*100;return"".concat(h,"%")}return cc(n.state[o])},s=i&&typeof i.width<"u"&&!this.state.isResizing?cc(i.width):r("width"),a=i&&typeof i.height<"u"&&!this.state.isResizing?cc(i.height):r("height");return{width:s,height:a}},enumerable:!1,configurable:!0}),e.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var n=this.appendBase();if(!n)return{width:0,height:0};var i=!1,r=this.parentNode.style.flexWrap;r!=="wrap"&&(i=!0,this.parentNode.style.flexWrap="wrap"),n.style.position="relative",n.style.minWidth="100%",n.style.minHeight="100%";var s={width:n.offsetWidth,height:n.offsetHeight};return i&&(this.parentNode.style.flexWrap=r),this.removeBase(n),s},e.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},e.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},e.prototype.componentDidMount=function(){if(!(!this.resizable||!this.window)){var n=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:n.flexBasis!=="auto"?n.flexBasis:void 0})}},e.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},e.prototype.createSizeForCssProperty=function(n,i){var r=this.propsSize&&this.propsSize[i];return this.state[i]==="auto"&&this.state.original[i]===n&&(typeof r>"u"||r==="auto")?"auto":n},e.prototype.calculateNewMaxFromBoundary=function(n,i){var r=this.props.boundsByDirection,s=this.state.direction,a=r&&Zr("left",s),o=r&&Zr("top",s),l,u;if(this.props.bounds==="parent"){var f=this.parentNode;f&&(l=a?this.resizableRight-this.parentLeft:f.offsetWidth+(this.parentLeft-this.resizableLeft),u=o?this.resizableBottom-this.parentTop:f.offsetHeight+(this.parentTop-this.resizableTop))}else this.props.bounds==="window"?this.window&&(l=a?this.resizableRight:this.window.innerWidth-this.resizableLeft,u=o?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(l=a?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),u=o?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return l&&Number.isFinite(l)&&(n=n&&n<l?n:l),u&&Number.isFinite(u)&&(i=i&&i<u?i:u),{maxWidth:n,maxHeight:i}},e.prototype.calculateNewSizeFromDirection=function(n,i){var r=this.props.scale||1,s=TM(this.props.resizeRatio||1),a=s[0],o=s[1],l=this.state,u=l.direction,f=l.original,h=this.props,d=h.lockAspectRatio,g=h.lockAspectRatioExtraHeight,_=h.lockAspectRatioExtraWidth,x=f.width,p=f.height,c=g||0,m=_||0;return Zr("right",u)&&(x=f.width+(n-f.x)*a/r,d&&(p=(x-m)/this.ratio+c)),Zr("left",u)&&(x=f.width-(n-f.x)*a/r,d&&(p=(x-m)/this.ratio+c)),Zr("bottom",u)&&(p=f.height+(i-f.y)*o/r,d&&(x=(p-c)*this.ratio+m)),Zr("top",u)&&(p=f.height-(i-f.y)*o/r,d&&(x=(p-c)*this.ratio+m)),{newWidth:x,newHeight:p}},e.prototype.calculateNewSizeFromAspectRatio=function(n,i,r,s){var a=this.props,o=a.lockAspectRatio,l=a.lockAspectRatioExtraHeight,u=a.lockAspectRatioExtraWidth,f=typeof s.width>"u"?10:s.width,h=typeof r.width>"u"||r.width<0?n:r.width,d=typeof s.height>"u"?10:s.height,g=typeof r.height>"u"||r.height<0?i:r.height,_=l||0,x=u||0;if(o){var p=(d-_)*this.ratio+x,c=(g-_)*this.ratio+x,m=(f-x)/this.ratio+_,v=(h-x)/this.ratio+_,y=Math.max(f,p),A=Math.min(h,c),T=Math.max(d,m),M=Math.min(g,v);n=ko(n,y,A),i=ko(i,T,M)}else n=ko(n,f,h),i=ko(i,d,g);return{newWidth:n,newHeight:i}},e.prototype.setBoundingClientRect=function(){var n=1/(this.props.scale||1);if(this.props.bounds==="parent"){var i=this.parentNode;if(i){var r=i.getBoundingClientRect();this.parentLeft=r.left*n,this.parentTop=r.top*n}}if(this.props.bounds&&typeof this.props.bounds!="string"){var s=this.props.bounds.getBoundingClientRect();this.targetLeft=s.left*n,this.targetTop=s.top*n}if(this.resizable){var a=this.resizable.getBoundingClientRect(),o=a.left,l=a.top,u=a.right,f=a.bottom;this.resizableLeft=o*n,this.resizableRight=u*n,this.resizableTop=l*n,this.resizableBottom=f*n}},e.prototype.onResizeStart=function(n,i){if(!(!this.resizable||!this.window)){var r=0,s=0;if(n.nativeEvent&&EM(n.nativeEvent)?(r=n.nativeEvent.clientX,s=n.nativeEvent.clientY):n.nativeEvent&&Bo(n.nativeEvent)&&(r=n.nativeEvent.touches[0].clientX,s=n.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){var a=this.props.onResizeStart(n,i,this.resizable);if(a===!1)return}this.props.size&&(typeof this.props.size.height<"u"&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),typeof this.props.size.width<"u"&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio=typeof this.props.lockAspectRatio=="number"?this.props.lockAspectRatio:this.size.width/this.size.height;var o,l=this.window.getComputedStyle(this.resizable);if(l.flexBasis!=="auto"){var u=this.parentNode;if(u){var f=this.window.getComputedStyle(u).flexDirection;this.flexDir=f.startsWith("row")?"row":"column",o=l.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var h={original:{x:r,y:s,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:ci(ci({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(n.target).cursor||"auto"}),direction:i,flexBasis:o};this.setState(h)}},e.prototype.onMouseMove=function(n){var i=this;if(!(!this.state.isResizing||!this.resizable||!this.window)){if(this.window.TouchEvent&&Bo(n))try{n.preventDefault(),n.stopPropagation()}catch{}var r=this.props,s=r.maxWidth,a=r.maxHeight,o=r.minWidth,l=r.minHeight,u=Bo(n)?n.touches[0].clientX:n.clientX,f=Bo(n)?n.touches[0].clientY:n.clientY,h=this.state,d=h.direction,g=h.original,_=h.width,x=h.height,p=this.getParentSize(),c=wM(p,this.window.innerWidth,this.window.innerHeight,s,a,o,l);s=c.maxWidth,a=c.maxHeight,o=c.minWidth,l=c.minHeight;var m=this.calculateNewSizeFromDirection(u,f),v=m.newHeight,y=m.newWidth,A=this.calculateNewMaxFromBoundary(s,a);this.props.snap&&this.props.snap.x&&(y=Rp(y,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(v=Rp(v,this.props.snap.y,this.props.snapGap));var T=this.calculateNewSizeFromAspectRatio(y,v,{width:A.maxWidth,height:A.maxHeight},{width:o,height:l});if(y=T.newWidth,v=T.newHeight,this.props.grid){var M=Ap(y,this.props.grid[0],this.props.gridGap?this.props.gridGap[0]:0),D=Ap(v,this.props.grid[1],this.props.gridGap?this.props.gridGap[1]:0),E=this.props.snapGap||0,w=E===0||Math.abs(M-y)<=E?M:y,H=E===0||Math.abs(D-v)<=E?D:v;y=w,v=H}var X={width:y-g.width,height:v-g.height};if(this.delta=X,_&&typeof _=="string"){if(_.endsWith("%")){var ie=y/p.width*100;y="".concat(ie,"%")}else if(_.endsWith("vw")){var L=y/this.window.innerWidth*100;y="".concat(L,"vw")}else if(_.endsWith("vh")){var k=y/this.window.innerHeight*100;y="".concat(k,"vh")}}if(x&&typeof x=="string"){if(x.endsWith("%")){var ie=v/p.height*100;v="".concat(ie,"%")}else if(x.endsWith("vw")){var L=v/this.window.innerWidth*100;v="".concat(L,"vw")}else if(x.endsWith("vh")){var k=v/this.window.innerHeight*100;v="".concat(k,"vh")}}var W={width:this.createSizeForCssProperty(y,"width"),height:this.createSizeForCssProperty(v,"height")};this.flexDir==="row"?W.flexBasis=W.width:this.flexDir==="column"&&(W.flexBasis=W.height);var V=this.state.width!==W.width,U=this.state.height!==W.height,z=this.state.flexBasis!==W.flexBasis,O=V||U||z;O&&uo.flushSync(function(){i.setState(W)}),this.props.onResize&&O&&this.props.onResize(n,d,this.resizable,X)}},e.prototype.onMouseUp=function(n){var i,r,s=this.state,a=s.isResizing,o=s.direction;s.original,!(!a||!this.resizable)&&(this.props.onResizeStop&&this.props.onResizeStop(n,o,this.resizable,this.delta),this.props.size&&this.setState({width:(i=this.props.size.width)!==null&&i!==void 0?i:"auto",height:(r=this.props.size.height)!==null&&r!==void 0?r:"auto"}),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:ci(ci({},this.state.backgroundStyle),{cursor:"auto"})}))},e.prototype.updateSize=function(n){var i,r;this.setState({width:(i=n.width)!==null&&i!==void 0?i:"auto",height:(r=n.height)!==null&&r!==void 0?r:"auto"})},e.prototype.renderResizer=function(){var n=this,i=this.props,r=i.enable,s=i.handleStyles,a=i.handleClasses,o=i.handleWrapperStyle,l=i.handleWrapperClass,u=i.handleComponent;if(!r)return null;var f=Object.keys(r).map(function(h){return r[h]!==!1?C.jsx(yM,{direction:h,onResizeStart:n.onResizeStart,replaceStyles:s&&s[h],className:a&&a[h],children:u&&u[h]?u[h]:null},h):null});return C.jsx("div",{className:l,style:o,children:f})},e.prototype.render=function(){var n=this,i=Object.keys(this.props).reduce(function(a,o){return bM.indexOf(o)!==-1||(a[o]=n.props[o]),a},{}),r=ci(ci(ci({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(r.flexBasis=this.state.flexBasis);var s=this.props.as||"div";return C.jsxs(s,ci({style:r,className:this.props.className},i,{ref:function(a){a&&(n.resizable=a)},children:[this.state.isResizing&&C.jsx("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer()]}))},e.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],gridGap:[0,0],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},e}(Z.PureComponent);/*! *****************************************************************************
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
***************************************************************************** */var Hf=function(t,e){return Hf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)i.hasOwnProperty(r)&&(n[r]=i[r])},Hf(t,e)};function RM(t,e){Hf(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var At=function(){return At=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},At.apply(this,arguments)};function CM(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}var PM={width:"auto",height:"auto",display:"inline-block",position:"absolute",top:0,left:0},LM=function(t){return{bottom:t,bottomLeft:t,bottomRight:t,left:t,right:t,top:t,topLeft:t,topRight:t}},DM=function(t){RM(e,t);function e(n){var i=t.call(this,n)||this;return i.resizingPosition={x:0,y:0},i.offsetFromParent={left:0,top:0},i.resizableElement={current:null},i.originalPosition={x:0,y:0},i.state={resizing:!1,bounds:{top:0,right:0,bottom:0,left:0},maxWidth:n.maxWidth,maxHeight:n.maxHeight},i.onResizeStart=i.onResizeStart.bind(i),i.onResize=i.onResize.bind(i),i.onResizeStop=i.onResizeStop.bind(i),i.onDragStart=i.onDragStart.bind(i),i.onDrag=i.onDrag.bind(i),i.onDragStop=i.onDragStop.bind(i),i.getMaxSizesFromProps=i.getMaxSizesFromProps.bind(i),i}return e.prototype.componentDidMount=function(){this.updateOffsetFromParent();var n=this.offsetFromParent,i=n.left,r=n.top,s=this.getDraggablePosition(),a=s.x,o=s.y;this.draggable.setState({x:a-i,y:o-r}),this.forceUpdate()},e.prototype.getDraggablePosition=function(){var n=this.draggable.state,i=n.x,r=n.y;return{x:i,y:r}},e.prototype.getParent=function(){return this.resizable&&this.resizable.parentNode},e.prototype.getParentSize=function(){return this.resizable.getParentSize()},e.prototype.getMaxSizesFromProps=function(){var n=typeof this.props.maxWidth>"u"?Number.MAX_SAFE_INTEGER:this.props.maxWidth,i=typeof this.props.maxHeight>"u"?Number.MAX_SAFE_INTEGER:this.props.maxHeight;return{maxWidth:n,maxHeight:i}},e.prototype.getSelfElement=function(){return this.resizable&&this.resizable.resizable},e.prototype.getOffsetHeight=function(n){var i=this.props.scale;switch(this.props.bounds){case"window":return window.innerHeight/i;case"body":return document.body.offsetHeight/i;default:return n.offsetHeight}},e.prototype.getOffsetWidth=function(n){var i=this.props.scale;switch(this.props.bounds){case"window":return window.innerWidth/i;case"body":return document.body.offsetWidth/i;default:return n.offsetWidth}},e.prototype.onDragStart=function(n,i){this.props.onDragStart&&this.props.onDragStart(n,i);var r=this.getDraggablePosition();if(this.originalPosition=r,!!this.props.bounds){var s=this.getParent(),a=this.props.scale,o;if(this.props.bounds==="parent")o=s;else if(this.props.bounds==="body"){var l=s.getBoundingClientRect(),u=l.left,f=l.top,h=document.body.getBoundingClientRect(),d=-(u-s.offsetLeft*a-h.left)/a,g=-(f-s.offsetTop*a-h.top)/a,_=(document.body.offsetWidth-this.resizable.size.width*a)/a+d,x=(document.body.offsetHeight-this.resizable.size.height*a)/a+g;return this.setState({bounds:{top:g,right:_,bottom:x,left:d}})}else if(this.props.bounds==="window"){if(!this.resizable)return;var p=s.getBoundingClientRect(),c=p.left,m=p.top,v=-(c-s.offsetLeft*a)/a,y=-(m-s.offsetTop*a)/a,_=(window.innerWidth-this.resizable.size.width*a)/a+v,x=(window.innerHeight-this.resizable.size.height*a)/a+y;return this.setState({bounds:{top:y,right:_,bottom:x,left:v}})}else typeof this.props.bounds=="string"?o=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(o=this.props.bounds);if(!(!(o instanceof HTMLElement)||!(s instanceof HTMLElement))){var A=o.getBoundingClientRect(),T=A.left,M=A.top,D=s.getBoundingClientRect(),E=D.left,w=D.top,H=(T-E)/a,X=M-w;if(this.resizable){this.updateOffsetFromParent();var ie=this.offsetFromParent;this.setState({bounds:{top:X-ie.top,right:H+(o.offsetWidth-this.resizable.size.width)-ie.left/a,bottom:X+(o.offsetHeight-this.resizable.size.height)-ie.top,left:H-ie.left/a}})}}}},e.prototype.onDrag=function(n,i){if(this.props.onDrag){var r=this.offsetFromParent,s=r.left,a=r.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDrag(n,At(At({},i),{x:i.x+s,y:i.y+a}));if(this.props.dragAxis==="x")return this.props.onDrag(n,At(At({},i),{x:i.x+s,y:this.originalPosition.y+a,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDrag(n,At(At({},i),{x:this.originalPosition.x+s,y:i.y+a,deltaX:0}))}},e.prototype.onDragStop=function(n,i){if(this.props.onDragStop){var r=this.offsetFromParent,s=r.left,a=r.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDragStop(n,At(At({},i),{x:i.x+s,y:i.y+a}));if(this.props.dragAxis==="x")return this.props.onDragStop(n,At(At({},i),{x:i.x+s,y:this.originalPosition.y+a,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDragStop(n,At(At({},i),{x:this.originalPosition.x+s,y:i.y+a,deltaX:0}))}},e.prototype.onResizeStart=function(n,i,r){n.stopPropagation(),this.setState({resizing:!0});var s=this.props.scale,a=this.offsetFromParent,o=this.getDraggablePosition();if(this.resizingPosition={x:o.x+a.left,y:o.y+a.top},this.originalPosition=o,this.props.bounds){var l=this.getParent(),u=void 0;this.props.bounds==="parent"?u=l:this.props.bounds==="body"?u=document.body:this.props.bounds==="window"?u=window:typeof this.props.bounds=="string"?u=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(u=this.props.bounds);var f=this.getSelfElement();if(f instanceof Element&&(u instanceof HTMLElement||u===window)&&l instanceof HTMLElement){var h=this.getMaxSizesFromProps(),d=h.maxWidth,g=h.maxHeight,_=this.getParentSize();if(d&&typeof d=="string")if(d.endsWith("%")){var x=Number(d.replace("%",""))/100;d=_.width*x}else d.endsWith("px")&&(d=Number(d.replace("px","")));if(g&&typeof g=="string")if(g.endsWith("%")){var x=Number(g.replace("%",""))/100;g=_.height*x}else g.endsWith("px")&&(g=Number(g.replace("px","")));var p=f.getBoundingClientRect(),c=p.left,m=p.top,v=this.props.bounds==="window"?{left:0,top:0}:u.getBoundingClientRect(),y=v.left,A=v.top,T=this.getOffsetWidth(u),M=this.getOffsetHeight(u),D=i.toLowerCase().endsWith("left"),E=i.toLowerCase().endsWith("right"),w=i.startsWith("top"),H=i.startsWith("bottom");if((D||w)&&this.resizable){var X=(c-y)/s+this.resizable.size.width;this.setState({maxWidth:X>Number(d)?d:X})}if(E||this.props.lockAspectRatio&&!D&&!w){var X=T+(y-c)/s;this.setState({maxWidth:X>Number(d)?d:X})}if((w||D)&&this.resizable){var X=(m-A)/s+this.resizable.size.height;this.setState({maxHeight:X>Number(g)?g:X})}if(H||this.props.lockAspectRatio&&!w&&!D){var X=M+(A-m)/s;this.setState({maxHeight:X>Number(g)?g:X})}}}else this.setState({maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight});this.props.onResizeStart&&this.props.onResizeStart(n,i,r)},e.prototype.onResize=function(n,i,r,s){var a=this,o={x:this.originalPosition.x,y:this.originalPosition.y},l=-s.width,u=-s.height,f=["top","left","topLeft","bottomLeft","topRight"];f.includes(i)&&(i==="bottomLeft"?o.x+=l:(i==="topRight"||(o.x+=l),o.y+=u));var h=this.draggable.state;(o.x!==h.x||o.y!==h.y)&&uo.flushSync(function(){a.draggable.setState(o)}),this.updateOffsetFromParent();var d=this.offsetFromParent,g=this.getDraggablePosition().x+d.left,_=this.getDraggablePosition().y+d.top;this.resizingPosition={x:g,y:_},this.props.onResize&&this.props.onResize(n,i,r,s,{x:g,y:_})},e.prototype.onResizeStop=function(n,i,r,s){this.setState({resizing:!1});var a=this.getMaxSizesFromProps(),o=a.maxWidth,l=a.maxHeight;this.setState({maxWidth:o,maxHeight:l}),this.props.onResizeStop&&this.props.onResizeStop(n,i,r,s,this.resizingPosition)},e.prototype.updateSize=function(n){this.resizable&&this.resizable.updateSize({width:n.width,height:n.height})},e.prototype.updatePosition=function(n){this.draggable.setState(n)},e.prototype.updateOffsetFromParent=function(){var n=this.props.scale,i=this.getParent(),r=this.getSelfElement();if(!i||r===null)return{top:0,left:0};var s=i.getBoundingClientRect(),a=s.left,o=s.top,l=r.getBoundingClientRect(),u=this.getDraggablePosition(),f=i.scrollLeft,h=i.scrollTop;this.offsetFromParent={left:l.left-a+f-u.x*n,top:l.top-o+h-u.y*n}},e.prototype.render=function(){var n=this,i=this.props,r=i.disableDragging,s=i.style,a=i.dragHandleClassName,o=i.position,l=i.onMouseDown,u=i.onMouseUp,f=i.dragAxis,h=i.dragGrid,d=i.bounds,g=i.enableUserSelectHack,_=i.cancel,x=i.children;i.onResizeStart,i.onResize,i.onResizeStop,i.onDragStart,i.onDrag,i.onDragStop;var p=i.resizeHandleStyles,c=i.resizeHandleClasses,m=i.resizeHandleComponent,v=i.enableResizing,y=i.resizeGrid,A=i.resizeHandleWrapperClass,T=i.resizeHandleWrapperStyle,M=i.scale,D=i.allowAnyClick,E=i.dragPositionOffset,w=CM(i,["disableDragging","style","dragHandleClassName","position","onMouseDown","onMouseUp","dragAxis","dragGrid","bounds","enableUserSelectHack","cancel","children","onResizeStart","onResize","onResizeStop","onDragStart","onDrag","onDragStop","resizeHandleStyles","resizeHandleClasses","resizeHandleComponent","enableResizing","resizeGrid","resizeHandleWrapperClass","resizeHandleWrapperStyle","scale","allowAnyClick","dragPositionOffset"]),H=this.props.default?At({},this.props.default):void 0;delete w.default;var X=r||a?{cursor:"auto"}:{cursor:"move"},ie=At(At(At({},PM),X),s),L=this.offsetFromParent,k=L.left,W=L.top,V;o&&(V={x:o.x-k,y:o.y-W});var U=this.state.resizing?void 0:V,z=this.state.resizing?"both":f;return Z.createElement(_M,{ref:function(O){O&&(n.draggable=O)},handle:a?".".concat(a):void 0,defaultPosition:H,onMouseDown:l,onMouseUp:u,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,axis:z,disabled:r,grid:h,bounds:d?this.state.bounds:void 0,position:U,enableUserSelectHack:g,cancel:_,scale:M,allowAnyClick:D,nodeRef:this.resizableElement,positionOffset:E},Z.createElement(AM,At({},w,{ref:function(O){O&&(n.resizable=O,n.resizableElement.current=O.resizable)},defaultSize:H,size:this.props.size,enable:typeof v=="boolean"?LM(v):v,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,style:ie,minWidth:this.props.minWidth,minHeight:this.props.minHeight,maxWidth:this.state.resizing?this.state.maxWidth:this.props.maxWidth,maxHeight:this.state.resizing?this.state.maxHeight:this.props.maxHeight,grid:y,handleWrapperClass:A,handleWrapperStyle:T,lockAspectRatio:this.props.lockAspectRatio,lockAspectRatioExtraWidth:this.props.lockAspectRatioExtraWidth,lockAspectRatioExtraHeight:this.props.lockAspectRatioExtraHeight,handleStyles:p,handleClasses:c,handleComponent:m,scale:this.props.scale}),x))},e.defaultProps={maxWidth:Number.MAX_SAFE_INTEGER,maxHeight:Number.MAX_SAFE_INTEGER,scale:1,onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},onDragStart:function(){},onDrag:function(){},onDragStop:function(){}},e}(Z.PureComponent);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="160",NM=0,Pp=1,UM=2,O0=1,IM=2,Ti=3,mr=0,yn=1,di=2,Di=0,Or=1,Rn=2,Lp=3,Dp=4,FM=5,Cr=100,OM=101,zM=102,Np=103,Up=104,kM=200,BM=201,HM=202,GM=203,Gf=204,Vf=205,VM=206,WM=207,jM=208,XM=209,YM=210,qM=211,$M=212,KM=213,QM=214,ZM=0,JM=1,eE=2,Jl=3,tE=4,nE=5,iE=6,rE=7,z0=0,sE=1,aE=2,fr=0,oE=1,lE=2,uE=3,k0=4,cE=5,fE=6,B0=300,Xs=301,Ys=302,Wf=303,jf=304,bu=306,Xf=1e3,Bt=1001,Yf=1002,ln=1003,Ip=1004,fc=1005,kt=1006,hE=1007,qs=1008,hr=1009,dE=1010,pE=1011,Zh=1012,H0=1013,tr=1014,nr=1015,Ni=1016,G0=1017,V0=1018,zr=1020,mE=1021,ni=1023,gE=1024,vE=1025,kr=1026,$s=1027,_E=1028,W0=1029,xE=1030,j0=1031,X0=1033,hc=33776,dc=33777,pc=33778,mc=33779,Fp=35840,Op=35841,zp=35842,kp=35843,Y0=36196,Bp=37492,Hp=37496,Gp=37808,Vp=37809,Wp=37810,jp=37811,Xp=37812,Yp=37813,qp=37814,$p=37815,Kp=37816,Qp=37817,Zp=37818,Jp=37819,em=37820,tm=37821,gc=36492,nm=36494,im=36495,yE=36283,rm=36284,sm=36285,am=36286,q0=3e3,Br=3001,SE=3200,ME=3201,EE=0,wE=1,Gn="",Ct="srgb",zi="srgb-linear",Jh="display-p3",Au="display-p3-linear",eu="linear",ct="srgb",tu="rec709",nu="p3",Jr=7680,om=519,TE=512,bE=513,AE=514,$0=515,RE=516,CE=517,PE=518,LE=519,lm=35044,um="300 es",qf=1035,Pi=2e3,iu=2001;class na{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=Math.PI/180,$f=180/Math.PI;function fo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function mn(t,e,n){return Math.max(e,Math.min(n,t))}function DE(t,e){return(t%e+e)%e}function _c(t,e,n){return(1-n)*t+n*e}function cm(t){return(t&t-1)===0&&t!==0}function Kf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ga(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,n,i,r,s,a,o,l,u){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],g=i[5],_=i[8],x=r[0],p=r[3],c=r[6],m=r[1],v=r[4],y=r[7],A=r[2],T=r[5],M=r[8];return s[0]=a*x+o*m+l*A,s[3]=a*p+o*v+l*T,s[6]=a*c+o*y+l*M,s[1]=u*x+f*m+h*A,s[4]=u*p+f*v+h*T,s[7]=u*c+f*y+h*M,s[2]=d*x+g*m+_*A,s[5]=d*p+g*v+_*T,s[8]=d*c+g*y+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=f*a-o*u,d=o*l-f*s,g=u*s-a*l,_=n*h+i*d+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*u-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=g*x,e[7]=(i*l-u*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new Je;function K0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function io(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NE(){const t=io("canvas");return t.style.display="block",t}const fm={};function za(t){t in fm||(fm[t]=!0,console.warn(t))}const hm=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dm=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Go={[zi]:{transfer:eu,primaries:tu,toReference:t=>t,fromReference:t=>t},[Ct]:{transfer:ct,primaries:tu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Au]:{transfer:eu,primaries:nu,toReference:t=>t.applyMatrix3(dm),fromReference:t=>t.applyMatrix3(hm)},[Jh]:{transfer:ct,primaries:nu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(dm),fromReference:t=>t.applyMatrix3(hm).convertLinearToSRGB()}},UE=new Set([zi,Au]),st={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!UE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Go[e].toReference,r=Go[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Go[t].primaries},getTransfer:function(t){return t===Gn?eu:Go[t].transfer}};function zs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let es;class Q0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=io("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=io("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zs(n[i]/255)*255):n[i]=zs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IE=0;class Z0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=fo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Sc(r[a].image)):s.push(Sc(r[a]))}else s=Sc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Sc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Q0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FE=0;class nn extends na{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Bt,r=Bt,s=kt,a=qs,o=ni,l=hr,u=nn.DEFAULT_ANISOTROPY,f=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=fo(),this.name="",this.source=new Z0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Br?Ct:Gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xf:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case Yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xf:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case Yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ct?Br:q0}set encoding(e){za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Br?Ct:Gn}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=B0;nn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],g=l[5],_=l[9],x=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+g+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,y=(g+1)/2,A=(c+1)/2,T=(f+d)/4,M=(h+x)/4,D=(_+p)/4;return v>y&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=M/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=D/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=M/s,r=D/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-_)*(p-_)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(p-_)/m,this.y=(h-x)/m,this.z=(d-f)/m,this.w=Math.acos((u+g+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OE extends na{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(za("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Br?Ct:Gn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Z0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends OE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class J0 extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zE extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[a+0],g=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=d,e[n+1]=g,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==d||u!==g||f!==_){let p=1-o;const c=l*d+u*g+f*_+h*x,m=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const A=Math.sqrt(v),T=Math.atan2(A,c*m);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A}const y=o*m;if(l=l*p+d*y,u=u*p+g*y,f=f*p+_*y,h=h*p+x*y,p===1-o){const A=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=A,u*=A,f*=A,h*=A}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[a],d=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+f*h+l*g-u*d,e[n+1]=l*_+f*d+u*h-o*g,e[n+2]=u*_+f*g+o*d-l*h,e[n+3]=f*_-o*h-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*h+u*g*_,this._y=u*g*h-d*f*_,this._z=u*f*_+d*g*h,this._w=u*f*h-d*g*_;break;case"YXZ":this._x=d*f*h+u*g*_,this._y=u*g*h-d*f*_,this._z=u*f*_-d*g*h,this._w=u*f*h+d*g*_;break;case"ZXY":this._x=d*f*h-u*g*_,this._y=u*g*h+d*f*_,this._z=u*f*_+d*g*h,this._w=u*f*h-d*g*_;break;case"ZYX":this._x=d*f*h-u*g*_,this._y=u*g*h+d*f*_,this._z=u*f*_-d*g*h,this._w=u*f*h+d*g*_;break;case"YZX":this._x=d*f*h+u*g*_,this._y=u*g*h+d*f*_,this._z=u*f*_-d*g*h,this._w=u*f*h-d*g*_;break;case"XZY":this._x=d*f*h-u*g*_,this._y=u*g*h-d*f*_,this._z=u*f*_+d*g*h,this._w=u*f*h+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*f,this.y=i+l*f+o*u-s*h,this.z=r+l*h+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mc=new Y,pm=new ia;class $r{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Wo.subVectors(this.max,va),ts.subVectors(e.a,va),ns.subVectors(e.b,va),is.subVectors(e.c,va),Vi.subVectors(ns,ts),Wi.subVectors(is,ns),Sr.subVectors(ts,is);let n=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-Sr.z,Sr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,Sr.z,0,-Sr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-Sr.y,Sr.x,0];return!Ec(n,ts,ns,is,Wo)||(n=[1,0,0,0,1,0,0,0,1],!Ec(n,ts,ns,is,Wo))?!1:(jo.crossVectors(Vi,Wi),n=[jo.x,jo.y,jo.z],Ec(n,ts,ns,is,Wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],qn=new Y,Vo=new $r,ts=new Y,ns=new Y,is=new Y,Vi=new Y,Wi=new Y,Sr=new Y,va=new Y,Wo=new Y,jo=new Y,Mr=new Y;function Ec(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Mr.fromArray(t,s);const o=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),u=n.dot(Mr),f=i.dot(Mr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const kE=new $r,_a=new Y,wc=new Y;class ra{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const n=_a.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(wc)),this.expandByPoint(_a.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new Y,Tc=new Y,Xo=new Y,ji=new Y,bc=new Y,Yo=new Y,Ac=new Y;class e_{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tc.copy(e).add(n).multiplyScalar(.5),Xo.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(Tc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Xo),o=ji.dot(this.direction),l=-ji.dot(Xo),u=ji.lengthSq(),f=Math.abs(1-a*a);let h,d,g,_;if(f>0)if(h=a*l-o,d=a*o-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const x=1/f;h*=x,d*=x,g=h*(h+a*d+2*o)+d*(a*h+d+2*l)+u}else d=s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+u);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tc).addScaledVector(Xo,d),g}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){bc.subVectors(n,e),Yo.subVectors(i,e),Ac.crossVectors(bc,Yo);let a=this.direction.dot(Ac),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ji.subVectors(this.origin,e);const l=o*this.direction.dot(Yo.crossVectors(ji,Yo));if(l<0)return null;const u=o*this.direction.dot(bc.cross(ji));if(u<0||l+u>a)return null;const f=-o*ji.dot(Ac);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,a,o,l,u,f,h,d,g,_,x,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,f,h,d,g,_,x,p)}set(e,n,i,r,s,a,o,l,u,f,h,d,g,_,x,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=g,c[7]=_,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,g=a*h,_=o*f,x=o*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=g+_*u,n[5]=d-x*u,n[9]=-o*l,n[2]=x-d*u,n[6]=_+g*u,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,_=u*f,x=u*h;n[0]=d+x*o,n[4]=_*o-g,n[8]=a*u,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=g*o-_,n[6]=x+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,_=u*f,x=u*h;n[0]=d-x*o,n[4]=-a*h,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*f,n[9]=x-d*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,g=a*h,_=o*f,x=o*h;n[0]=l*f,n[4]=_*u-g,n[8]=d*u+x,n[1]=l*h,n[5]=x*u+d,n[9]=g*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*u,_=o*l,x=o*u;n[0]=l*f,n[4]=x-d*h,n[8]=_*h+g,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=g*h+_,n[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,g=a*u,_=o*l,x=o*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+x,n[5]=a*f,n[9]=g*h-_,n[2]=_*h-g,n[6]=o*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BE,e,HE)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),Xi.crossVectors(i,En),Xi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Xi.crossVectors(i,En)),Xi.normalize(),qo.crossVectors(En,Xi),r[0]=Xi.x,r[4]=qo.x,r[8]=En.x,r[1]=Xi.y,r[5]=qo.y,r[9]=En.y,r[2]=Xi.z,r[6]=qo.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],g=i[13],_=i[2],x=i[6],p=i[10],c=i[14],m=i[3],v=i[7],y=i[11],A=i[15],T=r[0],M=r[4],D=r[8],E=r[12],w=r[1],H=r[5],X=r[9],ie=r[13],L=r[2],k=r[6],W=r[10],V=r[14],U=r[3],z=r[7],O=r[11],te=r[15];return s[0]=a*T+o*w+l*L+u*U,s[4]=a*M+o*H+l*k+u*z,s[8]=a*D+o*X+l*W+u*O,s[12]=a*E+o*ie+l*V+u*te,s[1]=f*T+h*w+d*L+g*U,s[5]=f*M+h*H+d*k+g*z,s[9]=f*D+h*X+d*W+g*O,s[13]=f*E+h*ie+d*V+g*te,s[2]=_*T+x*w+p*L+c*U,s[6]=_*M+x*H+p*k+c*z,s[10]=_*D+x*X+p*W+c*O,s[14]=_*E+x*ie+p*V+c*te,s[3]=m*T+v*w+y*L+A*U,s[7]=m*M+v*H+y*k+A*z,s[11]=m*D+v*X+y*W+A*O,s[15]=m*E+v*ie+y*V+A*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],g=e[14],_=e[3],x=e[7],p=e[11],c=e[15];return _*(+s*l*h-r*u*h-s*o*d+i*u*d+r*o*g-i*l*g)+x*(+n*l*g-n*u*d+s*a*d-r*a*g+r*u*f-s*l*f)+p*(+n*u*h-n*o*g-s*a*h+i*a*g+s*o*f-i*u*f)+c*(-r*o*f-n*l*h+n*o*d+r*a*h-i*a*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],g=e[11],_=e[12],x=e[13],p=e[14],c=e[15],m=h*p*u-x*d*u+x*l*g-o*p*g-h*l*c+o*d*c,v=_*d*u-f*p*u-_*l*g+a*p*g+f*l*c-a*d*c,y=f*x*u-_*h*u+_*o*g-a*x*g-f*o*c+a*h*c,A=_*h*l-f*x*l-_*o*d+a*x*d+f*o*p-a*h*p,T=n*m+i*v+r*y+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=m*M,e[1]=(x*d*s-h*p*s-x*r*g+i*p*g+h*r*c-i*d*c)*M,e[2]=(o*p*s-x*l*s+x*r*u-i*p*u-o*r*c+i*l*c)*M,e[3]=(h*l*s-o*d*s-h*r*u+i*d*u+o*r*g-i*l*g)*M,e[4]=v*M,e[5]=(f*p*s-_*d*s+_*r*g-n*p*g-f*r*c+n*d*c)*M,e[6]=(_*l*s-a*p*s-_*r*u+n*p*u+a*r*c-n*l*c)*M,e[7]=(a*d*s-f*l*s+f*r*u-n*d*u-a*r*g+n*l*g)*M,e[8]=y*M,e[9]=(_*h*s-f*x*s-_*i*g+n*x*g+f*i*c-n*h*c)*M,e[10]=(a*x*s-_*o*s+_*i*u-n*x*u-a*i*c+n*o*c)*M,e[11]=(f*o*s-a*h*s-f*i*u+n*h*u+a*i*g-n*o*g)*M,e[12]=A*M,e[13]=(f*x*r-_*h*r+_*i*d-n*x*d-f*i*p+n*h*p)*M,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*p-n*o*p)*M,e[15]=(a*h*r-f*o*r+f*i*l-n*h*l-a*i*d+n*o*d)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,h=o+o,d=s*u,g=s*f,_=s*h,x=a*f,p=a*h,c=o*h,m=l*u,v=l*f,y=l*h,A=i.x,T=i.y,M=i.z;return r[0]=(1-(x+c))*A,r[1]=(g+y)*A,r[2]=(_-v)*A,r[3]=0,r[4]=(g-y)*T,r[5]=(1-(d+c))*T,r[6]=(p+m)*T,r[7]=0,r[8]=(_+v)*M,r[9]=(p-m)*M,r[10]=(1-(d+x))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const a=rs.set(r[4],r[5],r[6]).length(),o=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const u=1/s,f=1/a,h=1/o;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=f,$n.elements[5]*=f,$n.elements[6]*=f,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,n.setFromRotationMatrix($n),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Pi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let g,_;if(o===Pi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===iu)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Pi){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(a-s),d=(n+e)*u,g=(i+r)*f;let _,x;if(o===Pi)_=(a+s)*h,x=-2*h;else if(o===iu)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rs=new Y,$n=new ht,BE=new Y(0,0,0),HE=new Y(1,1,1),Xi=new Y,qo=new Y,En=new Y,mm=new ht,gm=new ia;class Ru{constructor(e=0,n=0,i=0,r=Ru.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gm.setFromEuler(this),this.setFromQuaternion(gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ru.DEFAULT_ORDER="XYZ";class t_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GE=0;const vm=new Y,ss=new ia,Mi=new ht,$o=new Y,xa=new Y,VE=new Y,WE=new ia,_m=new Y(1,0,0),xm=new Y(0,1,0),ym=new Y(0,0,1),jE={type:"added"},XE={type:"removed"};class Sn extends na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new Y,n=new Ru,i=new ia,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Je}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,n){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$o.copy(e):$o.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(xa,$o,this.up):Mi.lookAt($o,xa,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(Mi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,VE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,WE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new Y(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new Y,Ei=new Y,Rc=new Y,wi=new Y,as=new Y,os=new Y,Sm=new Y,Cc=new Y,Pc=new Y,Lc=new Y;let Ko=!1;class ti{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Ei.subVectors(i,n),Rc.subVectors(e,n);const a=Kn.dot(Kn),o=Kn.dot(Ei),l=Kn.dot(Rc),u=Ei.dot(Ei),f=Ei.dot(Rc),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(u*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,n,i,r,s,a,o,l){return Ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ko=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Ei.subVectors(e,n),Kn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ko=!0),ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;as.subVectors(r,i),os.subVectors(s,i),Cc.subVectors(e,i);const l=as.dot(Cc),u=os.dot(Cc);if(l<=0&&u<=0)return n.copy(i);Pc.subVectors(e,r);const f=as.dot(Pc),h=os.dot(Pc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(as,a);Lc.subVectors(e,s);const g=as.dot(Lc),_=os.dot(Lc);if(_>=0&&g<=_)return n.copy(s);const x=g*u-l*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(os,o);const p=f*_-g*h;if(p<=0&&h-f>=0&&g-_>=0)return Sm.subVectors(s,r),o=(h-f)/(h-f+(g-_)),n.copy(r).addScaledVector(Sm,o);const c=1/(p+x+d);return a=x*c,o=d*c,n.copy(i).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const n_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Dc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=DE(e,1),n=mn(n,0,1),i=mn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Dc(a,s,e+1/3),this.g=Dc(a,s,e),this.b=Dc(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=Ct){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ct){const i=n_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=yc(e.r),this.g=yc(e.g),this.b=yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return st.fromWorkingColorSpace(Qt.copy(this),e),Math.round(mn(Qt.r*255,0,255))*65536+Math.round(mn(Qt.g*255,0,255))*256+Math.round(mn(Qt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Ct){st.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==Ct?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Qo);const i=_c(Yi.h,Qo.h,n),r=_c(Yi.s,Qo.s,n),s=_c(Yi.l,Qo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Be;Be.NAMES=n_;let YE=0;class ho extends na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=Or,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gf,this.blendDst=Vf,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gf&&(i.blendSrc=this.blendSrc),this.blendDst!==Vf&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pi extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new Y,Zo=new Ye;class Jt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=lm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zo.fromBufferAttribute(this,n),Zo.applyMatrix3(e),this.setXY(n,Zo.x,Zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ga(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ga(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ga(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ga(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ga(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lm&&(e.usage=this.usage),e}}class i_ extends Jt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class r_ extends Jt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ai extends Jt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qE=0;const zn=new ht,Nc=new Sn,ls=new Y,wn=new $r,ya=new $r,Ut=new Y;class Nn extends na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K0(e)?r_:i_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ai(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(wn.min,ya.min),wn.expandByPoint(Ut),Ut.addVectors(wn.max,ya.max),wn.expandByPoint(Ut)):(wn.expandByPoint(ya.min),wn.expandByPoint(ya.max))}wn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Ut.fromBufferAttribute(o,u),l&&(ls.fromBufferAttribute(e,u),Ut.add(ls)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<o;w++)u[w]=new Y,f[w]=new Y;const h=new Y,d=new Y,g=new Y,_=new Ye,x=new Ye,p=new Ye,c=new Y,m=new Y;function v(w,H,X){h.fromArray(r,w*3),d.fromArray(r,H*3),g.fromArray(r,X*3),_.fromArray(a,w*2),x.fromArray(a,H*2),p.fromArray(a,X*2),d.sub(h),g.sub(h),x.sub(_),p.sub(_);const ie=1/(x.x*p.y-p.x*x.y);isFinite(ie)&&(c.copy(d).multiplyScalar(p.y).addScaledVector(g,-x.y).multiplyScalar(ie),m.copy(g).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(ie),u[w].add(c),u[H].add(c),u[X].add(c),f[w].add(m),f[H].add(m),f[X].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,H=y.length;w<H;++w){const X=y[w],ie=X.start,L=X.count;for(let k=ie,W=ie+L;k<W;k+=3)v(i[k+0],i[k+1],i[k+2])}const A=new Y,T=new Y,M=new Y,D=new Y;function E(w){M.fromArray(s,w*3),D.copy(M);const H=u[w];A.copy(H),A.sub(M.multiplyScalar(M.dot(H))).normalize(),T.crossVectors(D,H);const ie=T.dot(f[w])<0?-1:1;l[w*4]=A.x,l[w*4+1]=A.y,l[w*4+2]=A.z,l[w*4+3]=ie}for(let w=0,H=y.length;w<H;++w){const X=y[w],ie=X.start,L=X.count;for(let k=ie,W=ie+L;k<W;k+=3)E(i[k+0]),E(i[k+1]),E(i[k+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,u=new Y,f=new Y,h=new Y;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),o.add(f),l.add(f),u.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,h=o.normalized,d=new u.constructor(l.length*f);let g=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?g=l[x]*o.data.stride+o.offset:g=l[x]*f;for(let c=0;c<f;c++)d[_++]=u[g++]}return new Jt(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,h=u.length;f<h;f++){const d=u[f],g=e(d,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const g=u[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mm=new ht,Er=new e_,Jo=new ra,Em=new Y,us=new Y,cs=new Y,fs=new Y,Uc=new Y,el=new Y,tl=new Ye,nl=new Ye,il=new Ye,wm=new Y,Tm=new Y,bm=new Y,rl=new Y,sl=new Y;class en extends Sn{constructor(e=new Nn,n=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){el.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],h=s[l];f!==0&&(Uc.fromBufferAttribute(h,e),a?el.addScaledVector(Uc,f):el.addScaledVector(Uc.sub(n),f))}n.add(el)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Jo.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Jo,Em)===null||Er.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Mm.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Mm),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const p=d[_],c=a[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let y=m,A=v;y<A;y+=3){const T=o.getX(y),M=o.getX(y+1),D=o.getX(y+2);r=al(this,c,e,i,u,f,h,T,M,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let p=_,c=x;p<c;p+=3){const m=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);r=al(this,a,e,i,u,f,h,m,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const p=d[_],c=a[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let y=m,A=v;y<A;y+=3){const T=y,M=y+1,D=y+2;r=al(this,c,e,i,u,f,h,T,M,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=_,c=x;p<c;p+=3){const m=p,v=p+1,y=p+2;r=al(this,a,e,i,u,f,h,m,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function $E(t,e,n,i,r,s,a,o){let l;if(e.side===yn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===mr,o),l===null)return null;sl.copy(o),sl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(sl);return u<n.near||u>n.far?null:{distance:u,point:sl.clone(),object:t}}function al(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,us),t.getVertexPosition(l,cs),t.getVertexPosition(u,fs);const f=$E(t,e,n,i,us,cs,fs,rl);if(f){r&&(tl.fromBufferAttribute(r,o),nl.fromBufferAttribute(r,l),il.fromBufferAttribute(r,u),f.uv=ti.getInterpolation(rl,us,cs,fs,tl,nl,il,new Ye)),s&&(tl.fromBufferAttribute(s,o),nl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,u),f.uv1=ti.getInterpolation(rl,us,cs,fs,tl,nl,il,new Ye),f.uv2=f.uv1),a&&(wm.fromBufferAttribute(a,o),Tm.fromBufferAttribute(a,l),bm.fromBufferAttribute(a,u),f.normal=ti.getInterpolation(rl,us,cs,fs,wm,Tm,bm,new Y),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new Y,materialIndex:0};ti.getNormal(us,cs,fs,h.normal),f.face=h}return f}class Kr extends Nn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],h=[];let d=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(u,3)),this.setAttribute("normal",new ai(f,3)),this.setAttribute("uv",new ai(h,2));function _(x,p,c,m,v,y,A,T,M,D,E){const w=y/M,H=A/D,X=y/2,ie=A/2,L=T/2,k=M+1,W=D+1;let V=0,U=0;const z=new Y;for(let O=0;O<W;O++){const te=O*H-ie;for(let J=0;J<k;J++){const j=J*w-X;z[x]=j*m,z[p]=te*v,z[c]=L,u.push(z.x,z.y,z.z),z[x]=0,z[p]=0,z[c]=T>0?1:-1,f.push(z.x,z.y,z.z),h.push(J/M),h.push(1-O/D),V+=1}}for(let O=0;O<D;O++)for(let te=0;te<M;te++){const J=d+te+k*O,j=d+te+k*(O+1),ee=d+(te+1)+k*(O+1),le=d+(te+1)+k*O;l.push(J,j,le),l.push(j,ee,le),U+=6}o.addGroup(g,U,E),g+=U,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function KE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function s_(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const ru={clone:Ks,merge:sn};var QE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QE,this.fragmentShader=ZE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=KE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class a_ extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hn extends a_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $f*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const hs=-90,ds=1;class JE extends Sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(hs,ds,e,n);r.layers=this.layers,this.add(r);const s=new Hn(hs,ds,e,n);s.layers=this.layers,this.add(s);const a=new Hn(hs,ds,e,n);a.layers=this.layers,this.add(a);const o=new Hn(hs,ds,e,n);o.layers=this.layers,this.add(o);const l=new Hn(hs,ds,e,n);l.layers=this.layers,this.add(l);const u=new Hn(hs,ds,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===iu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class o_ extends nn{constructor(e,n,i,r,s,a,o,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ew extends si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(za("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Br?Ct:Gn),this.texture=new o_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kr(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Di});s.uniforms.tEquirect.value=n;const a=new en(r,s),o=n.minFilter;return n.minFilter===qs&&(n.minFilter=kt),new JE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Ic=new Y,tw=new Y,nw=new Je;class Ar{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ic.subVectors(i,n).cross(tw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nw.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new ra,ol=new Y;class l_{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,a=new Ar){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],_=r[9],x=r[10],p=r[11],c=r[12],m=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,p-g,y-c).normalize(),i[1].setComponents(l+s,d+u,p+g,y+c).normalize(),i[2].setComponents(l+a,d+f,p+_,y+m).normalize(),i[3].setComponents(l-a,d-f,p-_,y-m).normalize(),i[4].setComponents(l-o,d-h,p-x,y-v).normalize(),n===Pi)i[5].setComponents(l+o,d+h,p+x,y+v).normalize();else if(n===iu)i[5].setComponents(o,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function u_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function iw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,g=h.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,f,h){const d=f.array,g=f._updateRange,_=f.updateRanges;if(t.bindBuffer(h,u),g.count===-1&&_.length===0&&t.bufferSubData(h,0,d),_.length!==0){for(let x=0,p=_.length;x<p;x++){const c=_[x];n?t.bufferSubData(h,c.start*d.BYTES_PER_ELEMENT,d,c.start,c.count):t.bufferSubData(h,c.start*d.BYTES_PER_ELEMENT,d.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,f),h.version=u.version}}return{get:a,remove:o,update:l}}class po extends Nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,h=e/o,d=n/l,g=[],_=[],x=[],p=[];for(let c=0;c<f;c++){const m=c*d-a;for(let v=0;v<u;v++){const y=v*h-s;_.push(y,-m,0),x.push(0,0,1),p.push(v/o),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<o;m++){const v=m+u*c,y=m+u*(c+1),A=m+1+u*(c+1),T=m+1+u*c;g.push(v,y,T),g.push(y,A,T)}this.setIndex(g),this.setAttribute("position",new ai(_,3)),this.setAttribute("normal",new ai(x,3)),this.setAttribute("uv",new ai(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}var rw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sw=`#ifdef USE_ALPHAHASH
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
#endif`,aw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ow=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cw=`#ifdef USE_AOMAP
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
#endif`,fw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hw=`#ifdef USE_BATCHING
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
#endif`,dw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vw=`#ifdef USE_IRIDESCENCE
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
#endif`,_w=`#ifdef USE_BUMPMAP
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
#endif`,xw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ew=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ww=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Aw=`#define PI 3.141592653589793
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
} // validated`,Rw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cw=`vec3 transformedNormal = objectNormal;
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
#endif`,Pw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iw=`
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
}`,Fw=`#ifdef USE_ENVMAP
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
#endif`,Ow=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zw=`#ifdef USE_ENVMAP
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
#endif`,kw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bw=`#ifdef USE_ENVMAP
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
#endif`,Hw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ww=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jw=`#ifdef USE_GRADIENTMAP
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
}`,Xw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$w=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kw=`uniform bool receiveShadow;
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
#endif`,Qw=`#ifdef USE_ENVMAP
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
#endif`,Zw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n1=`PhysicalMaterial material;
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
#endif`,i1=`struct PhysicalMaterial {
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
}`,r1=`
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,c1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,f1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p1=`#if defined( USE_POINTS_UV )
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
#endif`,m1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
#endif`,y1=`#ifdef USE_MORPHTARGETS
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
#endif`,S1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b1=`#ifdef USE_NORMALMAP
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
#endif`,A1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G1=`float getShadowMask() {
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
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rT=`uniform sampler2D t2D;
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`#include <common>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
}`,fT=`#define DISTANCE
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
}`,hT=`#define DISTANCE
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
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
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
}`,gT=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,_T=`uniform vec3 diffuse;
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
}`,xT=`#define LAMBERT
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
}`,yT=`#define LAMBERT
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
}`,ST=`#define MATCAP
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
}`,MT=`#define MATCAP
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
}`,ET=`#define NORMAL
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
}`,wT=`#define NORMAL
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
}`,TT=`#define PHONG
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
}`,bT=`#define PHONG
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
}`,AT=`#define STANDARD
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
}`,RT=`#define STANDARD
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
}`,CT=`#define TOON
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
}`,PT=`#define TOON
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
}`,LT=`uniform float size;
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
}`,DT=`uniform vec3 diffuse;
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
}`,NT=`#include <common>
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
}`,UT=`uniform vec3 color;
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
}`,IT=`uniform float rotation;
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
}`,FT=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:rw,alphahash_pars_fragment:sw,alphamap_fragment:aw,alphamap_pars_fragment:ow,alphatest_fragment:lw,alphatest_pars_fragment:uw,aomap_fragment:cw,aomap_pars_fragment:fw,batching_pars_vertex:hw,batching_vertex:dw,begin_vertex:pw,beginnormal_vertex:mw,bsdfs:gw,iridescence_fragment:vw,bumpmap_pars_fragment:_w,clipping_planes_fragment:xw,clipping_planes_pars_fragment:yw,clipping_planes_pars_vertex:Sw,clipping_planes_vertex:Mw,color_fragment:Ew,color_pars_fragment:ww,color_pars_vertex:Tw,color_vertex:bw,common:Aw,cube_uv_reflection_fragment:Rw,defaultnormal_vertex:Cw,displacementmap_pars_vertex:Pw,displacementmap_vertex:Lw,emissivemap_fragment:Dw,emissivemap_pars_fragment:Nw,colorspace_fragment:Uw,colorspace_pars_fragment:Iw,envmap_fragment:Fw,envmap_common_pars_fragment:Ow,envmap_pars_fragment:zw,envmap_pars_vertex:kw,envmap_physical_pars_fragment:Qw,envmap_vertex:Bw,fog_vertex:Hw,fog_pars_vertex:Gw,fog_fragment:Vw,fog_pars_fragment:Ww,gradientmap_pars_fragment:jw,lightmap_fragment:Xw,lightmap_pars_fragment:Yw,lights_lambert_fragment:qw,lights_lambert_pars_fragment:$w,lights_pars_begin:Kw,lights_toon_fragment:Zw,lights_toon_pars_fragment:Jw,lights_phong_fragment:e1,lights_phong_pars_fragment:t1,lights_physical_fragment:n1,lights_physical_pars_fragment:i1,lights_fragment_begin:r1,lights_fragment_maps:s1,lights_fragment_end:a1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:u1,logdepthbuf_vertex:c1,map_fragment:f1,map_pars_fragment:h1,map_particle_fragment:d1,map_particle_pars_fragment:p1,metalnessmap_fragment:m1,metalnessmap_pars_fragment:g1,morphcolor_vertex:v1,morphnormal_vertex:_1,morphtarget_pars_vertex:x1,morphtarget_vertex:y1,normal_fragment_begin:S1,normal_fragment_maps:M1,normal_pars_fragment:E1,normal_pars_vertex:w1,normal_vertex:T1,normalmap_pars_fragment:b1,clearcoat_normal_fragment_begin:A1,clearcoat_normal_fragment_maps:R1,clearcoat_pars_fragment:C1,iridescence_pars_fragment:P1,opaque_fragment:L1,packing:D1,premultiplied_alpha_fragment:N1,project_vertex:U1,dithering_fragment:I1,dithering_pars_fragment:F1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:B1,shadowmap_vertex:H1,shadowmask_pars_fragment:G1,skinbase_vertex:V1,skinning_pars_vertex:W1,skinning_vertex:j1,skinnormal_vertex:X1,specularmap_fragment:Y1,specularmap_pars_fragment:q1,tonemapping_fragment:$1,tonemapping_pars_fragment:K1,transmission_fragment:Q1,transmission_pars_fragment:Z1,uv_pars_fragment:J1,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:rT,backgroundCube_vert:sT,backgroundCube_frag:aT,cube_vert:oT,cube_frag:lT,depth_vert:uT,depth_frag:cT,distanceRGBA_vert:fT,distanceRGBA_frag:hT,equirect_vert:dT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:vT,meshbasic_frag:_T,meshlambert_vert:xT,meshlambert_frag:yT,meshmatcap_vert:ST,meshmatcap_frag:MT,meshnormal_vert:ET,meshnormal_frag:wT,meshphong_vert:TT,meshphong_frag:bT,meshphysical_vert:AT,meshphysical_frag:RT,meshtoon_vert:CT,meshtoon_frag:PT,points_vert:LT,points_frag:DT,shadow_vert:NT,shadow_frag:UT,sprite_vert:IT,sprite_frag:FT},ye={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},fi={basic:{uniforms:sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:sn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:sn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Be(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:sn([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:sn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:sn([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:sn([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:sn([ye.common,ye.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:sn([ye.lights,ye.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};fi.physical={uniforms:sn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ll={r:0,b:0,g:0};function OT(t,e,n,i,r,s,a){const o=new Be(0);let l=s===!0?0:1,u,f,h=null,d=0,g=null;function _(p,c){let m=!1,v=c.isScene===!0?c.background:null;v&&v.isTexture&&(v=(c.backgroundBlurriness>0?n:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),m=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===bu)?(f===void 0&&(f=new en(new Kr(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ks(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=st.getTransfer(v.colorSpace)!==ct,(h!==v||d!==v.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=v,d=v.version,g=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new en(new po(2,2),new tn({name:"BackgroundMaterial",uniforms:Ks(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=st.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,c){p.getRGB(ll,s_(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,c,a)}return{getClearColor:function(){return o},setClearColor:function(p,c=1){o.set(p),l=c,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:_}}function zT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let u=l,f=!1;function h(L,k,W,V,U){let z=!1;if(a){const O=x(V,W,k);u!==O&&(u=O,g(u.object)),z=c(L,V,W,U),z&&m(L,V,W,U)}else{const O=k.wireframe===!0;(u.geometry!==V.id||u.program!==W.id||u.wireframe!==O)&&(u.geometry=V.id,u.program=W.id,u.wireframe=O,z=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,D(L,k,W,V),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,k,W){const V=W.wireframe===!0;let U=o[L.id];U===void 0&&(U={},o[L.id]=U);let z=U[k.id];z===void 0&&(z={},U[k.id]=z);let O=z[V];return O===void 0&&(O=p(d()),z[V]=O),O}function p(L){const k=[],W=[],V=[];for(let U=0;U<r;U++)k[U]=0,W[U]=0,V[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:V,object:L,attributes:{},index:null}}function c(L,k,W,V){const U=u.attributes,z=k.attributes;let O=0;const te=W.getAttributes();for(const J in te)if(te[J].location>=0){const ee=U[J];let le=z[J];if(le===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;O++}return u.attributesNum!==O||u.index!==V}function m(L,k,W,V){const U={},z=k.attributes;let O=0;const te=W.getAttributes();for(const J in te)if(te[J].location>=0){let ee=z[J];ee===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),U[J]=le,O++}u.attributes=U,u.attributesNum=O,u.index=V}function v(){const L=u.newAttributes;for(let k=0,W=L.length;k<W;k++)L[k]=0}function y(L){A(L,0)}function A(L,k){const W=u.newAttributes,V=u.enabledAttributes,U=u.attributeDivisors;W[L]=1,V[L]===0&&(t.enableVertexAttribArray(L),V[L]=1),U[L]!==k&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),U[L]=k)}function T(){const L=u.newAttributes,k=u.enabledAttributes;for(let W=0,V=k.length;W<V;W++)k[W]!==L[W]&&(t.disableVertexAttribArray(W),k[W]=0)}function M(L,k,W,V,U,z,O){O===!0?t.vertexAttribIPointer(L,k,W,U,z):t.vertexAttribPointer(L,k,W,V,U,z)}function D(L,k,W,V){if(i.isWebGL2===!1&&(L.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=V.attributes,z=W.getAttributes(),O=k.defaultAttributeValues;for(const te in z){const J=z[te];if(J.location>=0){let j=U[te];if(j===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const ee=j.normalized,le=j.itemSize,Ee=n.get(j);if(Ee===void 0)continue;const oe=Ee.buffer,Ae=Ee.type,I=Ee.bytesPerElement,q=i.isWebGL2===!0&&(Ae===t.INT||Ae===t.UNSIGNED_INT||j.gpuType===H0);if(j.isInterleavedBufferAttribute){const F=j.data,P=F.stride,de=j.offset;if(F.isInstancedInterleavedBuffer){for(let ue=0;ue<J.locationSize;ue++)A(J.location+ue,F.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ue=0;ue<J.locationSize;ue++)y(J.location+ue);t.bindBuffer(t.ARRAY_BUFFER,oe);for(let ue=0;ue<J.locationSize;ue++)M(J.location+ue,le/J.locationSize,Ae,ee,P*I,(de+le/J.locationSize*ue)*I,q)}else{if(j.isInstancedBufferAttribute){for(let F=0;F<J.locationSize;F++)A(J.location+F,j.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let F=0;F<J.locationSize;F++)y(J.location+F);t.bindBuffer(t.ARRAY_BUFFER,oe);for(let F=0;F<J.locationSize;F++)M(J.location+F,le/J.locationSize,Ae,ee,le*I,le/J.locationSize*F*I,q)}}else if(O!==void 0){const ee=O[te];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(J.location,ee);break;case 3:t.vertexAttrib3fv(J.location,ee);break;case 4:t.vertexAttrib4fv(J.location,ee);break;default:t.vertexAttrib1fv(J.location,ee)}}}}T()}function E(){X();for(const L in o){const k=o[L];for(const W in k){const V=k[W];for(const U in V)_(V[U].object),delete V[U];delete k[W]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const k=o[L.id];for(const W in k){const V=k[W];for(const U in V)_(V[U].object),delete V[U];delete k[W]}delete o[L.id]}function H(L){for(const k in o){const W=o[k];if(W[L.id]===void 0)continue;const V=W[L.id];for(const U in V)_(V[U].object),delete V[U];delete W[L.id]}}function X(){ie(),f=!0,u!==l&&(u=l,g(u.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:ie,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function kT(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,d){if(d===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,f,h,d),n.update(h,s,d)}function u(f,h,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d;_++)this.render(f[_],h[_]);else{g.multiDrawArraysWEBGL(s,f,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function BT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=a||e.has("OES_texture_float"),A=v&&y,T=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:T}}function HT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ar,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,g){const _=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?f(null):u();else{const m=s?0:i,v=m*4;let y=c.clippingState||null;l.value=y,y=f(_,d,v,g);for(let A=0;A!==v;++A)y[A]=n[A];c.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,_){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const c=g+x*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(p===null||p.length<c)&&(p=new Float32Array(c));for(let v=0,y=g;v!==x;++v,y+=4)a.copy(h[v]).applyMatrix4(m,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function GT(t){let e=new WeakMap;function n(a,o){return o===Wf?a.mapping=Xs:o===jf&&(a.mapping=Ys),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wf||o===jf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new ew(l.height/2);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class c_ extends a_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ps=4,Am=[.125,.215,.35,.446,.526,.582],Pr=20,Fc=new c_,Rm=new Be;let Oc=null,zc=0,kc=0;const Rr=(1+Math.sqrt(5))/2,ps=1/Rr,Cm=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Rr,ps),new Y(0,Rr,-ps),new Y(ps,0,Rr),new Y(-ps,0,Rr),new Y(Rr,ps,0),new Y(-Rr,ps,0)];class Pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Oc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,zc,kc),e.scissorTest=!1,ul(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Ni,format:ni,colorSpace:zi,depthBuffer:!1},r=Lm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VT(s)),this._blurMaterial=WT(s,e,n)}return r}_compileMaterial(e){const n=new en(this._lodPlanes[0],e);this._renderer.compile(n,Fc)}_sceneToCubeUV(e,n,i,r){const o=new Hn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Rm),f.toneMapping=fr,f.autoClear=!1;const g=new pi({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),_=new en(new Kr,g);let x=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,x=!0):(g.color.copy(Rm),x=!0);for(let c=0;c<6;c++){const m=c%3;m===0?(o.up.set(0,l[c],0),o.lookAt(u[c],0,0)):m===1?(o.up.set(0,0,l[c]),o.lookAt(0,u[c],0)):(o.up.set(0,l[c],0),o.lookAt(0,0,u[c]));const v=this._cubeSize;ul(r,m*v,c>2?v:0,v,v),f.setRenderTarget(r),x&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ul(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Fc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cm[(r-1)%Cm.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new en(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Pr-1),x=s/_,p=isFinite(s)?1+Math.floor(f*x):Pr;p>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pr}`);const c=[];let m=0;for(let M=0;M<Pr;++M){const D=M/x,E=Math.exp(-D*D/2);c.push(E),M===0?m+=E:M<p&&(m+=2*E)}for(let M=0;M<c.length;M++)c[M]=c[M]/m;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const y=this._sizeLods[r],A=3*y*(r>v-Ps?r-v+Ps:0),T=4*(this._cubeSize-y);ul(n,A,T,3*y,2*y),l.setRenderTarget(n),l.render(h,Fc)}}function VT(t){const e=[],n=[],i=[];let r=t;const s=t-Ps+1+Am.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ps?l=Am[a-t+Ps-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,_=6,x=3,p=2,c=1,m=new Float32Array(x*_*g),v=new Float32Array(p*_*g),y=new Float32Array(c*_*g);for(let T=0;T<g;T++){const M=T%3*2/3-1,D=T>2?0:-1,E=[M,D,0,M+2/3,D,0,M+2/3,D+1,0,M,D,0,M+2/3,D+1,0,M,D+1,0];m.set(E,x*_*T),v.set(d,p*_*T);const w=[T,T,T,T,T,T];y.set(w,c*_*T)}const A=new Nn;A.setAttribute("position",new Jt(m,x)),A.setAttribute("uv",new Jt(v,p)),A.setAttribute("faceIndex",new Jt(y,c)),e.push(A),r>Ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lm(t,e,n){const i=new si(t,e,n);return i.texture.mapping=bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ul(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WT(t,e,n){const i=new Float32Array(Pr),r=new Y(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ed(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Dm(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Nm(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ed(){return`

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
	`}function jT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Wf||l===jf,f=l===Xs||l===Ys;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new Pm(t)),h=u?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Pm(t));const d=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function XT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YT(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,c=x.length;p<c;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const _ in g){const x=g[_];for(let p=0,c=x.length;p<c;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(h){const d=[],g=h.index,_=h.attributes.position;let x=0;if(g!==null){const m=g.array;x=g.version;for(let v=0,y=m.length;v<y;v+=3){const A=m[v+0],T=m[v+1],M=m[v+2];d.push(A,T,T,M,M,A)}}else if(_!==void 0){const m=_.array;x=_.version;for(let v=0,y=m.length/3-1;v<y;v+=3){const A=v+0,T=v+1,M=v+2;d.push(A,T,T,M,M,A)}}else return;const p=new(K0(d)?r_:i_)(d,1);p.version=x;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function qT(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,_){t.drawElements(s,_,o,g*l),n.update(_,s,1)}function h(g,_,x){if(x===0)return;let p,c;if(r)p=t,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](s,_,o,g*l,x),n.update(_,s,x)}function d(g,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<x;c++)this.render(g[c]/l,_[c]);else{p.multiDrawElementsWEBGL(s,_,0,o,g,0,x);let c=0;for(let m=0;m<x;m++)c+=_[m];n.update(c,s,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function $T(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KT(t,e){return t[0]-e[0]}function QT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ZT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Vt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==x){let k=function(){ie.dispose(),s.delete(f),f.removeEventListener("dispose",k)};var g=k;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,A=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],M=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),A===!0&&(E=3);let w=f.attributes.position.count*E,H=1;w>e.maxTextureSize&&(H=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const X=new Float32Array(w*H*4*x),ie=new J0(X,w,H,x);ie.type=nr,ie.needsUpdate=!0;const L=E*4;for(let W=0;W<x;W++){const V=T[W],U=M[W],z=D[W],O=w*H*4*W;for(let te=0;te<V.count;te++){const J=te*L;v===!0&&(a.fromBufferAttribute(V,te),X[O+J+0]=a.x,X[O+J+1]=a.y,X[O+J+2]=a.z,X[O+J+3]=0),y===!0&&(a.fromBufferAttribute(U,te),X[O+J+4]=a.x,X[O+J+5]=a.y,X[O+J+6]=a.z,X[O+J+7]=0),A===!0&&(a.fromBufferAttribute(z,te),X[O+J+8]=a.x,X[O+J+9]=a.y,X[O+J+10]=a.z,X[O+J+11]=z.itemSize===4?a.w:1)}}p={count:x,texture:ie,size:new Ye(w,H)},s.set(f,p),f.addEventListener("dispose",k)}let c=0;for(let v=0;v<d.length;v++)c+=d[v];const m=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let x=i[f.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[f.id]=x}for(let y=0;y<_;y++){const A=x[y];A[0]=y,A[1]=d[y]}x.sort(QT);for(let y=0;y<8;y++)y<_&&x[y][1]?(o[y][0]=x[y][0],o[y][1]=x[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(KT);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let m=0;for(let y=0;y<8;y++){const A=o[y],T=A[0],M=A[1];T!==Number.MAX_SAFE_INTEGER&&M?(p&&f.getAttribute("morphTarget"+y)!==p[T]&&f.setAttribute("morphTarget"+y,p[T]),c&&f.getAttribute("morphNormal"+y)!==c[T]&&f.setAttribute("morphNormal"+y,c[T]),r[y]=M,m+=M):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),c&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const v=f.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function JT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class f_ extends nn{constructor(e,n,i,r,s,a,o,l,u,f){if(f=f!==void 0?f:kr,f!==kr&&f!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===kr&&(i=tr),i===void 0&&f===$s&&(i=zr),super(null,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const h_=new nn,d_=new f_(1,1);d_.compareFunction=$0;const p_=new J0,m_=new zE,g_=new o_,Um=[],Im=[],Fm=new Float32Array(16),Om=new Float32Array(9),zm=new Float32Array(4);function sa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Um[r];if(s===void 0&&(s=new Float32Array(r),Um[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cu(t,e){let n=Im[e];n===void 0&&(n=new Int32Array(e),Im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function rb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;zm.set(i),t.uniformMatrix2fv(this.addr,!1,zm),Dt(n,i)}}function sb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Om.set(i),t.uniformMatrix3fv(this.addr,!1,Om),Dt(n,i)}}function ab(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Fm.set(i),t.uniformMatrix4fv(this.addr,!1,Fm),Dt(n,i)}}function ob(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function fb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function mb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?d_:h_;n.setTexture2D(e||s,r)}function gb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||m_,r)}function vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g_,r)}function _b(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||p_,r)}function xb(t){switch(t){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return rb;case 35675:return sb;case 35676:return ab;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return ub;case 35669:case 35673:return cb;case 5125:return fb;case 36294:return hb;case 36295:return db;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return _b}}function yb(t,e){t.uniform1fv(this.addr,e)}function Sb(t,e){const n=sa(e,this.size,2);t.uniform2fv(this.addr,n)}function Mb(t,e){const n=sa(e,this.size,3);t.uniform3fv(this.addr,n)}function Eb(t,e){const n=sa(e,this.size,4);t.uniform4fv(this.addr,n)}function wb(t,e){const n=sa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Tb(t,e){const n=sa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bb(t,e){const n=sa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ab(t,e){t.uniform1iv(this.addr,e)}function Rb(t,e){t.uniform2iv(this.addr,e)}function Cb(t,e){t.uniform3iv(this.addr,e)}function Pb(t,e){t.uniform4iv(this.addr,e)}function Lb(t,e){t.uniform1uiv(this.addr,e)}function Db(t,e){t.uniform2uiv(this.addr,e)}function Nb(t,e){t.uniform3uiv(this.addr,e)}function Ub(t,e){t.uniform4uiv(this.addr,e)}function Ib(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||h_,s[a])}function Fb(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||m_,s[a])}function Ob(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||g_,s[a])}function zb(t,e,n){const i=this.cache,r=e.length,s=Cu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||p_,s[a])}function kb(t){switch(t){case 5126:return yb;case 35664:return Sb;case 35665:return Mb;case 35666:return Eb;case 35674:return wb;case 35675:return Tb;case 35676:return bb;case 5124:case 35670:return Ab;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return Pb;case 5125:return Lb;case 36294:return Db;case 36295:return Nb;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return zb}}class Bb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xb(n.type)}}class Hb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kb(n.type)}}class Gb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function km(t,e){t.seq.push(e),t.map[e.id]=e}function Vb(t,e,n){const i=t.name,r=i.length;for(Bc.lastIndex=0;;){const s=Bc.exec(i),a=Bc.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){km(n,u===void 0?new Bb(o,t,e):new Hb(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Gb(o),km(n,h)),n=h}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Vb(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Wb=37297;let jb=0;function Xb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Yb(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===nu&&n===tu?i="LinearDisplayP3ToLinearSRGB":e===tu&&n===nu&&(i="LinearSRGBToLinearDisplayP3"),t){case zi:case Au:return[i,"LinearTransferOETF"];case Ct:case Jh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Hm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Xb(t.getShaderSource(e),a)}else return r}function qb(t,e){const n=Yb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function $b(t,e){let n;switch(e){case oE:n="Linear";break;case lE:n="Reinhard";break;case uE:n="OptimizedCineon";break;case k0:n="ACESFilmic";break;case fE:n="AgX";break;case cE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Kb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function Qb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ls).join(`
`)}function Zb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Jb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ls(t){return t!==""}function Gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(t){return t.replace(eA,nA)}const tA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nA(t,e){let n=$e[e];if(n===void 0){const i=tA.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qf(n)}const iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(t){return t.replace(iA,rA)}function rA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===IM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function aA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function lA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case z0:e="ENVMAP_BLENDING_MULTIPLY";break;case sE:e="ENVMAP_BLENDING_MIX";break;case aE:e="ENVMAP_BLENDING_ADD";break}return e}function uA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=sA(n),u=aA(n),f=oA(n),h=lA(n),d=uA(n),g=n.isWebGL2?"":Kb(n),_=Qb(n),x=Zb(s),p=r.createProgram();let c,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ls).join(`
`),c.length>0&&(c+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ls).join(`
`),m.length>0&&(m+=`
`)):(c=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),m=[g,jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?$e.tonemapping_pars_fragment:"",n.toneMapping!==fr?$b("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,qb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ls).join(`
`)),a=Qf(a),a=Gm(a,n),a=Vm(a,n),o=Qf(o),o=Gm(o,n),o=Vm(o,n),a=Wm(a),o=Wm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+c+a,A=v+m+o,T=Bm(r,r.VERTEX_SHADER,y),M=Bm(r,r.FRAGMENT_SHADER,A);r.attachShader(p,T),r.attachShader(p,M),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(X){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(T).trim(),k=r.getShaderInfoLog(M).trim();let W=!0,V=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,T,M);else{const U=Hm(r,T,"vertex"),z=Hm(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+U+`
`+z)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(L===""||k==="")&&(V=!1);V&&(X.diagnostics={runnable:W,programLog:ie,vertexShader:{log:L,prefix:c},fragmentShader:{log:k,prefix:m}})}r.deleteShader(T),r.deleteShader(M),E=new Rl(r,p),w=Jb(r,p)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(p,Wb)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=M,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new dA(e),n.set(e,i)),i}}class dA{constructor(e){this.id=fA++,this.code=e,this.usedTimes=0}}function pA(t,e,n,i,r,s,a){const o=new t_,l=new hA,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function p(E,w,H,X,ie){const L=X.fog,k=ie.geometry,W=E.isMeshStandardMaterial?X.environment:null,V=(E.isMeshStandardMaterial?n:e).get(E.envMap||W),U=V&&V.mapping===bu?V.image.height:null,z=_[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const O=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=O!==void 0?O.length:0;let J=0;k.morphAttributes.position!==void 0&&(J=1),k.morphAttributes.normal!==void 0&&(J=2),k.morphAttributes.color!==void 0&&(J=3);let j,ee,le,Ee;if(z){const lt=fi[z];j=lt.vertexShader,ee=lt.fragmentShader}else j=E.vertexShader,ee=E.fragmentShader,l.update(E),le=l.getVertexShaderID(E),Ee=l.getFragmentShaderID(E);const oe=t.getRenderTarget(),Ae=ie.isInstancedMesh===!0,I=ie.isBatchedMesh===!0,q=!!E.map,F=!!E.matcap,P=!!V,de=!!E.aoMap,ue=!!E.lightMap,ce=!!E.bumpMap,pe=!!E.normalMap,He=!!E.displacementMap,we=!!E.emissiveMap,b=!!E.metalnessMap,S=!!E.roughnessMap,B=E.anisotropy>0,se=E.clearcoat>0,ae=E.iridescence>0,re=E.sheen>0,ve=E.transmission>0,me=B&&!!E.anisotropyMap,xe=se&&!!E.clearcoatMap,Ce=se&&!!E.clearcoatNormalMap,Ue=se&&!!E.clearcoatRoughnessMap,ne=ae&&!!E.iridescenceMap,ze=ae&&!!E.iridescenceThicknessMap,We=re&&!!E.sheenColorMap,Ie=re&&!!E.sheenRoughnessMap,Re=!!E.specularMap,Me=!!E.specularColorMap,Ne=!!E.specularIntensityMap,Ge=ve&&!!E.transmissionMap,at=ve&&!!E.thicknessMap,je=!!E.gradientMap,ge=!!E.alphaMap,N=E.alphaTest>0,fe=!!E.alphaHash,_e=!!E.extensions,Pe=!!k.attributes.uv1,Le=!!k.attributes.uv2,Qe=!!k.attributes.uv3;let Fe=fr;return E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Fe=t.toneMapping),{isWebGL2:f,shaderID:z,shaderType:E.type,shaderName:E.name,vertexShader:j,fragmentShader:ee,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:Ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:I,instancing:Ae,instancingColor:Ae&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:zi,map:q,matcap:F,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:U,aoMap:de,lightMap:ue,bumpMap:ce,normalMap:pe,displacementMap:d&&He,emissiveMap:we,normalMapObjectSpace:pe&&E.normalMapType===wE,normalMapTangentSpace:pe&&E.normalMapType===EE,metalnessMap:b,roughnessMap:S,anisotropy:B,anisotropyMap:me,clearcoat:se,clearcoatMap:xe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ue,iridescence:ae,iridescenceMap:ne,iridescenceThicknessMap:ze,sheen:re,sheenColorMap:We,sheenRoughnessMap:Ie,specularMap:Re,specularColorMap:Me,specularIntensityMap:Ne,transmission:ve,transmissionMap:Ge,thicknessMap:at,gradientMap:je,opaque:E.transparent===!1&&E.blending===Or,alphaMap:ge,alphaTest:N,alphaHash:fe,combine:E.combine,mapUv:q&&x(E.map.channel),aoMapUv:de&&x(E.aoMap.channel),lightMapUv:ue&&x(E.lightMap.channel),bumpMapUv:ce&&x(E.bumpMap.channel),normalMapUv:pe&&x(E.normalMap.channel),displacementMapUv:He&&x(E.displacementMap.channel),emissiveMapUv:we&&x(E.emissiveMap.channel),metalnessMapUv:b&&x(E.metalnessMap.channel),roughnessMapUv:S&&x(E.roughnessMap.channel),anisotropyMapUv:me&&x(E.anisotropyMap.channel),clearcoatMapUv:xe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(E.sheenRoughnessMap.channel),specularMapUv:Re&&x(E.specularMap.channel),specularColorMapUv:Me&&x(E.specularColorMap.channel),specularIntensityMapUv:Ne&&x(E.specularIntensityMap.channel),transmissionMapUv:Ge&&x(E.transmissionMap.channel),thicknessMapUv:at&&x(E.thicknessMap.channel),alphaMapUv:ge&&x(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(pe||B),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Le,vertexUv3s:Qe,pointsUvs:ie.isPoints===!0&&!!k.attributes.uv&&(q||ge),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ie.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:q&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===di,flipSided:E.side===yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:_e&&E.extensions.derivatives===!0,extensionFragDepth:_e&&E.extensions.fragDepth===!0,extensionDrawBuffers:_e&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function c(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)w.push(H),w.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(m(w,E),v(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function m(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function v(E,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function y(E){const w=_[E.type];let H;if(w){const X=fi[w];H=ru.clone(X.uniforms)}else H=E.uniforms;return H}function A(E,w){let H;for(let X=0,ie=u.length;X<ie;X++){const L=u[X];if(L.cacheKey===w){H=L,++H.usedTimes;break}}return H===void 0&&(H=new cA(t,w,E,s),u.push(H)),H}function T(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:y,acquireProgram:A,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:D}}function mA(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function gA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ym(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,g,_,x,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:g,groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=g,c.groupOrder=_,c.renderOrder=h.renderOrder,c.z=x,c.group=p),e++,c}function o(h,d,g,_,x,p){const c=a(h,d,g,_,x,p);g.transmission>0?i.push(c):g.transparent===!0?r.push(c):n.push(c)}function l(h,d,g,_,x,p){const c=a(h,d,g,_,x,p);g.transmission>0?i.unshift(c):g.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||gA),i.length>1&&i.sort(d||Xm),r.length>1&&r.sort(d||Xm)}function f(){for(let h=e,d=t.length;h<d;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function vA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ym,t.set(i,[a])):r>=s.length?(a=new Ym,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function _A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Be};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function xA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let yA=0;function SA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function MA(t,e){const n=new _A,i=xA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new Y);const s=new Y,a=new ht,o=new ht;function l(f,h){let d=0,g=0,_=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let x=0,p=0,c=0,m=0,v=0,y=0,A=0,T=0,M=0,D=0,E=0;f.sort(SA);const w=h===!0?Math.PI:1;for(let X=0,ie=f.length;X<ie;X++){const L=f[X],k=L.color,W=L.intensity,V=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=k.r*W*w,g+=k.g*W*w,_+=k.b*W*w;else if(L.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(L.sh.coefficients[z],W);E++}else if(L.isDirectionalLight){const z=n.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const O=L.shadow,te=i.get(L);te.shadowBias=O.bias,te.shadowNormalBias=O.normalBias,te.shadowRadius=O.radius,te.shadowMapSize=O.mapSize,r.directionalShadow[x]=te,r.directionalShadowMap[x]=U,r.directionalShadowMatrix[x]=L.shadow.matrix,y++}r.directional[x]=z,x++}else if(L.isSpotLight){const z=n.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(k).multiplyScalar(W*w),z.distance=V,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,r.spot[c]=z;const O=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,O.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[c]=O.matrix,L.castShadow){const te=i.get(L);te.shadowBias=O.bias,te.shadowNormalBias=O.normalBias,te.shadowRadius=O.radius,te.shadowMapSize=O.mapSize,r.spotShadow[c]=te,r.spotShadowMap[c]=U,T++}c++}else if(L.isRectAreaLight){const z=n.get(L);z.color.copy(k).multiplyScalar(W),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),r.rectArea[m]=z,m++}else if(L.isPointLight){const z=n.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*w),z.distance=L.distance,z.decay=L.decay,L.castShadow){const O=L.shadow,te=i.get(L);te.shadowBias=O.bias,te.shadowNormalBias=O.normalBias,te.shadowRadius=O.radius,te.shadowMapSize=O.mapSize,te.shadowCameraNear=O.camera.near,te.shadowCameraFar=O.camera.far,r.pointShadow[p]=te,r.pointShadowMap[p]=U,r.pointShadowMatrix[p]=L.shadow.matrix,A++}r.point[p]=z,p++}else if(L.isHemisphereLight){const z=n.get(L);z.skyColor.copy(L.color).multiplyScalar(W*w),z.groundColor.copy(L.groundColor).multiplyScalar(W*w),r.hemi[v]=z,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==x||H.pointLength!==p||H.spotLength!==c||H.rectAreaLength!==m||H.hemiLength!==v||H.numDirectionalShadows!==y||H.numPointShadows!==A||H.numSpotShadows!==T||H.numSpotMaps!==M||H.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=m,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=T+M-D,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=E,H.directionalLength=x,H.pointLength=p,H.spotLength=c,H.rectAreaLength=m,H.hemiLength=v,H.numDirectionalShadows=y,H.numPointShadows=A,H.numSpotShadows=T,H.numSpotMaps=M,H.numLightProbes=E,r.version=yA++)}function u(f,h){let d=0,g=0,_=0,x=0,p=0;const c=h.matrixWorldInverse;for(let m=0,v=f.length;m<v;m++){const y=f[m];if(y.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(c),d++}else if(y.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(c),_++}else if(y.isRectAreaLight){const A=r.rectArea[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),o.identity(),a.copy(y.matrixWorld),a.premultiply(c),o.extractRotation(a),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const A=r.point[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),g++}else if(y.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function qm(t,e){const n=new MA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function EA(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new qm(t,e),n.set(s,[l])):a>=o.length?(l=new qm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class wA extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TA extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AA=`uniform sampler2D shadow_pass;
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
}`;function RA(t,e,n){let i=new l_;const r=new Ye,s=new Ye,a=new Vt,o=new wA({depthPacking:ME}),l=new TA,u={},f=n.maxTextureSize,h={[mr]:yn,[yn]:mr,[di]:di},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:bA,fragmentShader:AA}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new Nn;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new en(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O0;let c=this.type;this.render=function(T,M,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),H=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Di),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ie=c!==Ti&&this.type===Ti,L=c===Ti&&this.type!==Ti;for(let k=0,W=T.length;k<W;k++){const V=T[k],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const z=U.getFrameExtents();if(r.multiply(z),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/z.x),r.x=s.x*z.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/z.y),r.y=s.y*z.y,U.mapSize.y=s.y)),U.map===null||ie===!0||L===!0){const te=this.type!==Ti?{minFilter:ln,magFilter:ln}:{};U.map!==null&&U.map.dispose(),U.map=new si(r.x,r.y,te),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const O=U.getViewportCount();for(let te=0;te<O;te++){const J=U.getViewport(te);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),X.viewport(a),U.updateMatrices(V,te),i=U.getFrustum(),y(M,D,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===Ti&&m(U,D),U.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(E,w,H)};function m(T,M){const D=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new si(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(M,null,D,d,x,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(M,null,D,g,x,null)}function v(T,M,D,E){let w=null;const H=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)w=H;else if(w=D.isPointLight===!0?l:o,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const X=w.uuid,ie=M.uuid;let L=u[X];L===void 0&&(L={},u[X]=L);let k=L[ie];k===void 0&&(k=w.clone(),L[ie]=k,M.addEventListener("dispose",A)),w=k}if(w.visible=M.visible,w.wireframe=M.wireframe,E===Ti?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:h[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const X=t.properties.get(w);X.light=D}return w}function y(T,M,D,E,w){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Ti)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const ie=e.update(T),L=T.material;if(Array.isArray(L)){const k=ie.groups;for(let W=0,V=k.length;W<V;W++){const U=k[W],z=L[U.materialIndex];if(z&&z.visible){const O=v(T,z,E,w);T.onBeforeShadow(t,T,M,D,ie,O,U),t.renderBufferDirect(D,null,ie,O,T,U),T.onAfterShadow(t,T,M,D,ie,O,U)}}}else if(L.visible){const k=v(T,L,E,w);T.onBeforeShadow(t,T,M,D,ie,k,null),t.renderBufferDirect(D,null,ie,k,T,null),T.onAfterShadow(t,T,M,D,ie,k,null)}}const X=T.children;for(let ie=0,L=X.length;ie<L;ie++)y(X[ie],M,D,E,w)}function A(T){T.target.removeEventListener("dispose",A);for(const D in u){const E=u[D],w=T.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function CA(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const fe=new Vt;let _e=null;const Pe=new Vt(0,0,0,0);return{setMask:function(Le){_e!==Le&&!N&&(t.colorMask(Le,Le,Le,Le),_e=Le)},setLocked:function(Le){N=Le},setClear:function(Le,Qe,Fe,nt,lt){lt===!0&&(Le*=nt,Qe*=nt,Fe*=nt),fe.set(Le,Qe,Fe,nt),Pe.equals(fe)===!1&&(t.clearColor(Le,Qe,Fe,nt),Pe.copy(fe))},reset:function(){N=!1,_e=null,Pe.set(-1,0,0,0)}}}function s(){let N=!1,fe=null,_e=null,Pe=null;return{setTest:function(Le){Le?I(t.DEPTH_TEST):q(t.DEPTH_TEST)},setMask:function(Le){fe!==Le&&!N&&(t.depthMask(Le),fe=Le)},setFunc:function(Le){if(_e!==Le){switch(Le){case ZM:t.depthFunc(t.NEVER);break;case JM:t.depthFunc(t.ALWAYS);break;case eE:t.depthFunc(t.LESS);break;case Jl:t.depthFunc(t.LEQUAL);break;case tE:t.depthFunc(t.EQUAL);break;case nE:t.depthFunc(t.GEQUAL);break;case iE:t.depthFunc(t.GREATER);break;case rE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=Le}},setLocked:function(Le){N=Le},setClear:function(Le){Pe!==Le&&(t.clearDepth(Le),Pe=Le)},reset:function(){N=!1,fe=null,_e=null,Pe=null}}}function a(){let N=!1,fe=null,_e=null,Pe=null,Le=null,Qe=null,Fe=null,nt=null,lt=null;return{setTest:function(it){N||(it?I(t.STENCIL_TEST):q(t.STENCIL_TEST))},setMask:function(it){fe!==it&&!N&&(t.stencilMask(it),fe=it)},setFunc:function(it,bt,Fn){(_e!==it||Pe!==bt||Le!==Fn)&&(t.stencilFunc(it,bt,Fn),_e=it,Pe=bt,Le=Fn)},setOp:function(it,bt,Fn){(Qe!==it||Fe!==bt||nt!==Fn)&&(t.stencilOp(it,bt,Fn),Qe=it,Fe=bt,nt=Fn)},setLocked:function(it){N=it},setClear:function(it){lt!==it&&(t.clearStencil(it),lt=it)},reset:function(){N=!1,fe=null,_e=null,Pe=null,Le=null,Qe=null,Fe=null,nt=null,lt=null}}}const o=new r,l=new s,u=new a,f=new WeakMap,h=new WeakMap;let d={},g={},_=new WeakMap,x=[],p=null,c=!1,m=null,v=null,y=null,A=null,T=null,M=null,D=null,E=new Be(0,0,0),w=0,H=!1,X=null,ie=null,L=null,k=null,W=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),U=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),U=z>=2);let te=null,J={};const j=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),le=new Vt().fromArray(j),Ee=new Vt().fromArray(ee);function oe(N,fe,_e,Pe){const Le=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(N,Qe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<_e;Fe++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(fe+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return Qe}const Ae={};Ae[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),I(t.DEPTH_TEST),l.setFunc(Jl),we(!1),b(Pp),I(t.CULL_FACE),pe(Di);function I(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function q(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function F(N,fe){return g[N]!==fe?(t.bindFramebuffer(N,fe),g[N]=fe,i&&(N===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function P(N,fe){let _e=x,Pe=!1;if(N)if(_e=_.get(fe),_e===void 0&&(_e=[],_.set(fe,_e)),N.isWebGLMultipleRenderTargets){const Le=N.texture;if(_e.length!==Le.length||_e[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,Fe=Le.length;Qe<Fe;Qe++)_e[Qe]=t.COLOR_ATTACHMENT0+Qe;_e.length=Le.length,Pe=!0}}else _e[0]!==t.COLOR_ATTACHMENT0&&(_e[0]=t.COLOR_ATTACHMENT0,Pe=!0);else _e[0]!==t.BACK&&(_e[0]=t.BACK,Pe=!0);Pe&&(n.isWebGL2?t.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function de(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const ue={[Cr]:t.FUNC_ADD,[OM]:t.FUNC_SUBTRACT,[zM]:t.FUNC_REVERSE_SUBTRACT};if(i)ue[Np]=t.MIN,ue[Up]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(ue[Np]=N.MIN_EXT,ue[Up]=N.MAX_EXT)}const ce={[kM]:t.ZERO,[BM]:t.ONE,[HM]:t.SRC_COLOR,[Gf]:t.SRC_ALPHA,[YM]:t.SRC_ALPHA_SATURATE,[jM]:t.DST_COLOR,[VM]:t.DST_ALPHA,[GM]:t.ONE_MINUS_SRC_COLOR,[Vf]:t.ONE_MINUS_SRC_ALPHA,[XM]:t.ONE_MINUS_DST_COLOR,[WM]:t.ONE_MINUS_DST_ALPHA,[qM]:t.CONSTANT_COLOR,[$M]:t.ONE_MINUS_CONSTANT_COLOR,[KM]:t.CONSTANT_ALPHA,[QM]:t.ONE_MINUS_CONSTANT_ALPHA};function pe(N,fe,_e,Pe,Le,Qe,Fe,nt,lt,it){if(N===Di){c===!0&&(q(t.BLEND),c=!1);return}if(c===!1&&(I(t.BLEND),c=!0),N!==FM){if(N!==m||it!==H){if((v!==Cr||T!==Cr)&&(t.blendEquation(t.FUNC_ADD),v=Cr,T=Cr),it)switch(N){case Or:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rn:t.blendFunc(t.ONE,t.ONE);break;case Lp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Or:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rn:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,A=null,M=null,D=null,E.set(0,0,0),w=0,m=N,H=it}return}Le=Le||fe,Qe=Qe||_e,Fe=Fe||Pe,(fe!==v||Le!==T)&&(t.blendEquationSeparate(ue[fe],ue[Le]),v=fe,T=Le),(_e!==y||Pe!==A||Qe!==M||Fe!==D)&&(t.blendFuncSeparate(ce[_e],ce[Pe],ce[Qe],ce[Fe]),y=_e,A=Pe,M=Qe,D=Fe),(nt.equals(E)===!1||lt!==w)&&(t.blendColor(nt.r,nt.g,nt.b,lt),E.copy(nt),w=lt),m=N,H=!1}function He(N,fe){N.side===di?q(t.CULL_FACE):I(t.CULL_FACE);let _e=N.side===yn;fe&&(_e=!_e),we(_e),N.blending===Or&&N.transparent===!1?pe(Di):pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Pe=N.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),B(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?I(t.SAMPLE_ALPHA_TO_COVERAGE):q(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){X!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),X=N)}function b(N){N!==NM?(I(t.CULL_FACE),N!==ie&&(N===Pp?t.cullFace(t.BACK):N===UM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):q(t.CULL_FACE),ie=N}function S(N){N!==L&&(U&&t.lineWidth(N),L=N)}function B(N,fe,_e){N?(I(t.POLYGON_OFFSET_FILL),(k!==fe||W!==_e)&&(t.polygonOffset(fe,_e),k=fe,W=_e)):q(t.POLYGON_OFFSET_FILL)}function se(N){N?I(t.SCISSOR_TEST):q(t.SCISSOR_TEST)}function ae(N){N===void 0&&(N=t.TEXTURE0+V-1),te!==N&&(t.activeTexture(N),te=N)}function re(N,fe,_e){_e===void 0&&(te===null?_e=t.TEXTURE0+V-1:_e=te);let Pe=J[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},J[_e]=Pe),(Pe.type!==N||Pe.texture!==fe)&&(te!==_e&&(t.activeTexture(_e),te=_e),t.bindTexture(N,fe||Ae[N]),Pe.type=N,Pe.texture=fe)}function ve(){const N=J[te];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function me(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){le.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),le.copy(N))}function Ge(N){Ee.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ee.copy(N))}function at(N,fe){let _e=h.get(fe);_e===void 0&&(_e=new WeakMap,h.set(fe,_e));let Pe=_e.get(N);Pe===void 0&&(Pe=t.getUniformBlockIndex(fe,N.name),_e.set(N,Pe))}function je(N,fe){const Pe=h.get(fe).get(N);f.get(fe)!==Pe&&(t.uniformBlockBinding(fe,Pe,N.__bindingPointIndex),f.set(fe,Pe))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},te=null,J={},g={},_=new WeakMap,x=[],p=null,c=!1,m=null,v=null,y=null,A=null,T=null,M=null,D=null,E=new Be(0,0,0),w=0,H=!1,X=null,ie=null,L=null,k=null,W=null,le.set(0,0,t.canvas.width,t.canvas.height),Ee.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:I,disable:q,bindFramebuffer:F,drawBuffers:P,useProgram:de,setBlending:pe,setMaterial:He,setFlipSided:we,setCullFace:b,setLineWidth:S,setPolygonOffset:B,setScissorTest:se,activeTexture:ae,bindTexture:re,unbindTexture:ve,compressedTexImage2D:me,compressedTexImage3D:xe,texImage2D:Re,texImage3D:Me,updateUBOMapping:at,uniformBlockBinding:je,texStorage2D:We,texStorage3D:Ie,texSubImage2D:Ce,texSubImage3D:Ue,compressedTexSubImage2D:ne,compressedTexSubImage3D:ze,scissor:Ne,viewport:Ge,reset:ge}}function PA(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,S){return g?new OffscreenCanvas(b,S):io("canvas")}function x(b,S,B,se){let ae=1;if((b.width>se||b.height>se)&&(ae=se/Math.max(b.width,b.height)),ae<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=S?Kf:Math.floor,ve=re(ae*b.width),me=re(ae*b.height);h===void 0&&(h=_(ve,me));const xe=B?_(ve,me):h;return xe.width=ve,xe.height=me,xe.getContext("2d").drawImage(b,0,0,ve,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+me+")."),xe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return cm(b.width)&&cm(b.height)}function c(b){return o?!1:b.wrapS!==Bt||b.wrapT!==Bt||b.minFilter!==ln&&b.minFilter!==kt}function m(b,S){return b.generateMipmaps&&S&&b.minFilter!==ln&&b.minFilter!==kt}function v(b){t.generateMipmap(b)}function y(b,S,B,se,ae=!1){if(o===!1)return S;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=S;if(S===t.RED&&(B===t.FLOAT&&(re=t.R32F),B===t.HALF_FLOAT&&(re=t.R16F),B===t.UNSIGNED_BYTE&&(re=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.R8UI),B===t.UNSIGNED_SHORT&&(re=t.R16UI),B===t.UNSIGNED_INT&&(re=t.R32UI),B===t.BYTE&&(re=t.R8I),B===t.SHORT&&(re=t.R16I),B===t.INT&&(re=t.R32I)),S===t.RG&&(B===t.FLOAT&&(re=t.RG32F),B===t.HALF_FLOAT&&(re=t.RG16F),B===t.UNSIGNED_BYTE&&(re=t.RG8)),S===t.RGBA){const ve=ae?eu:st.getTransfer(se);B===t.FLOAT&&(re=t.RGBA32F),B===t.HALF_FLOAT&&(re=t.RGBA16F),B===t.UNSIGNED_BYTE&&(re=ve===ct?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(b,S,B){return m(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==ln&&b.minFilter!==kt?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function T(b){return b===ln||b===Ip||b===fc?t.NEAREST:t.LINEAR}function M(b){const S=b.target;S.removeEventListener("dispose",M),E(S),S.isVideoTexture&&f.delete(S)}function D(b){const S=b.target;S.removeEventListener("dispose",D),H(S)}function E(b){const S=i.get(b);if(S.__webglInit===void 0)return;const B=b.source,se=d.get(B);if(se){const ae=se[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(b),Object.keys(se).length===0&&d.delete(B)}i.remove(b)}function w(b){const S=i.get(b);t.deleteTexture(S.__webglTexture);const B=b.source,se=d.get(B);delete se[S.__cacheKey],a.memory.textures--}function H(b){const S=b.texture,B=i.get(b),se=i.get(S);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(B.__webglFramebuffer[ae]))for(let re=0;re<B.__webglFramebuffer[ae].length;re++)t.deleteFramebuffer(B.__webglFramebuffer[ae][re]);else t.deleteFramebuffer(B.__webglFramebuffer[ae]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ae])}else{if(Array.isArray(B.__webglFramebuffer))for(let ae=0;ae<B.__webglFramebuffer.length;ae++)t.deleteFramebuffer(B.__webglFramebuffer[ae]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ae=0;ae<B.__webglColorRenderbuffer.length;ae++)B.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ae]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ae=0,re=S.length;ae<re;ae++){const ve=i.get(S[ae]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(S[ae])}i.remove(S),i.remove(b)}let X=0;function ie(){X=0}function L(){const b=X;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),X+=1,b}function k(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function W(b,S){const B=i.get(b);if(b.isVideoTexture&&He(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const se=b.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(B,b,S);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function V(b,S){const B=i.get(b);if(b.version>0&&B.__version!==b.version){le(B,b,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function U(b,S){const B=i.get(b);if(b.version>0&&B.__version!==b.version){le(B,b,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function z(b,S){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Ee(B,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const O={[Xf]:t.REPEAT,[Bt]:t.CLAMP_TO_EDGE,[Yf]:t.MIRRORED_REPEAT},te={[ln]:t.NEAREST,[Ip]:t.NEAREST_MIPMAP_NEAREST,[fc]:t.NEAREST_MIPMAP_LINEAR,[kt]:t.LINEAR,[hE]:t.LINEAR_MIPMAP_NEAREST,[qs]:t.LINEAR_MIPMAP_LINEAR},J={[TE]:t.NEVER,[LE]:t.ALWAYS,[bE]:t.LESS,[$0]:t.LEQUAL,[AE]:t.EQUAL,[PE]:t.GEQUAL,[RE]:t.GREATER,[CE]:t.NOTEQUAL};function j(b,S,B){if(B?(t.texParameteri(b,t.TEXTURE_WRAP_S,O[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,O[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,O[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,te[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,te[S.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Bt||S.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,T(S.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==ln&&S.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===ln||S.minFilter!==fc&&S.minFilter!==qs||S.type===nr&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ni&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(b,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ee(b,S){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",M));const se=S.source;let ae=d.get(se);ae===void 0&&(ae={},d.set(se,ae));const re=k(S);if(re!==b.__cacheKey){ae[re]===void 0&&(ae[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ae[re].usedTimes++;const ve=ae[b.__cacheKey];ve!==void 0&&(ae[b.__cacheKey].usedTimes--,ve.usedTimes===0&&w(S)),b.__cacheKey=re,b.__webglTexture=ae[re].texture}return B}function le(b,S,B){let se=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=t.TEXTURE_3D);const ae=ee(b,S),re=S.source;n.bindTexture(se,b.__webglTexture,t.TEXTURE0+B);const ve=i.get(re);if(re.version!==ve.__version||ae===!0){n.activeTexture(t.TEXTURE0+B);const me=st.getPrimaries(st.workingColorSpace),xe=S.colorSpace===Gn?null:st.getPrimaries(S.colorSpace),Ce=S.colorSpace===Gn||me===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ue=c(S)&&p(S.image)===!1;let ne=x(S.image,Ue,!1,r.maxTextureSize);ne=we(S,ne);const ze=p(ne)||o,We=s.convert(S.format,S.colorSpace);let Ie=s.convert(S.type),Re=y(S.internalFormat,We,Ie,S.colorSpace,S.isVideoTexture);j(se,S,ze);let Me;const Ne=S.mipmaps,Ge=o&&S.isVideoTexture!==!0&&Re!==Y0,at=ve.__version===void 0||ae===!0,je=A(S,ne,ze);if(S.isDepthTexture)Re=t.DEPTH_COMPONENT,o?S.type===nr?Re=t.DEPTH_COMPONENT32F:S.type===tr?Re=t.DEPTH_COMPONENT24:S.type===zr?Re=t.DEPTH24_STENCIL8:Re=t.DEPTH_COMPONENT16:S.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===kr&&Re===t.DEPTH_COMPONENT&&S.type!==Zh&&S.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=tr,Ie=s.convert(S.type)),S.format===$s&&Re===t.DEPTH_COMPONENT&&(Re=t.DEPTH_STENCIL,S.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=zr,Ie=s.convert(S.type))),at&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Re,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,We,Ie,null));else if(S.isDataTexture)if(Ne.length>0&&ze){Ge&&at&&n.texStorage2D(t.TEXTURE_2D,je,Re,Ne[0].width,Ne[0].height);for(let ge=0,N=Ne.length;ge<N;ge++)Me=Ne[ge],Ge?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Me.width,Me.height,We,Ie,Me.data):n.texImage2D(t.TEXTURE_2D,ge,Re,Me.width,Me.height,0,We,Ie,Me.data);S.generateMipmaps=!1}else Ge?(at&&n.texStorage2D(t.TEXTURE_2D,je,Re,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,We,Ie,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,We,Ie,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Re,Ne[0].width,Ne[0].height,ne.depth);for(let ge=0,N=Ne.length;ge<N;ge++)Me=Ne[ge],S.format!==ni?We!==null?Ge?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Me.width,Me.height,ne.depth,We,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Re,Me.width,Me.height,ne.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Me.width,Me.height,ne.depth,We,Ie,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Re,Me.width,Me.height,ne.depth,0,We,Ie,Me.data)}else{Ge&&at&&n.texStorage2D(t.TEXTURE_2D,je,Re,Ne[0].width,Ne[0].height);for(let ge=0,N=Ne.length;ge<N;ge++)Me=Ne[ge],S.format!==ni?We!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,Me.width,Me.height,We,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Re,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Me.width,Me.height,We,Ie,Me.data):n.texImage2D(t.TEXTURE_2D,ge,Re,Me.width,Me.height,0,We,Ie,Me.data)}else if(S.isDataArrayTexture)Ge?(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Re,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,We,Ie,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,We,Ie,ne.data);else if(S.isData3DTexture)Ge?(at&&n.texStorage3D(t.TEXTURE_3D,je,Re,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,We,Ie,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,We,Ie,ne.data);else if(S.isFramebufferTexture){if(at)if(Ge)n.texStorage2D(t.TEXTURE_2D,je,Re,ne.width,ne.height);else{let ge=ne.width,N=ne.height;for(let fe=0;fe<je;fe++)n.texImage2D(t.TEXTURE_2D,fe,Re,ge,N,0,We,Ie,null),ge>>=1,N>>=1}}else if(Ne.length>0&&ze){Ge&&at&&n.texStorage2D(t.TEXTURE_2D,je,Re,Ne[0].width,Ne[0].height);for(let ge=0,N=Ne.length;ge<N;ge++)Me=Ne[ge],Ge?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,We,Ie,Me):n.texImage2D(t.TEXTURE_2D,ge,Re,We,Ie,Me);S.generateMipmaps=!1}else Ge?(at&&n.texStorage2D(t.TEXTURE_2D,je,Re,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Ie,ne)):n.texImage2D(t.TEXTURE_2D,0,Re,We,Ie,ne);m(S,ze)&&v(se),ve.__version=re.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ee(b,S,B){if(S.image.length!==6)return;const se=ee(b,S),ae=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const re=i.get(ae);if(ae.version!==re.__version||se===!0){n.activeTexture(t.TEXTURE0+B);const ve=st.getPrimaries(st.workingColorSpace),me=S.colorSpace===Gn?null:st.getPrimaries(S.colorSpace),xe=S.colorSpace===Gn||ve===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,Ue=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let ge=0;ge<6;ge++)!Ce&&!Ue?ne[ge]=x(S.image[ge],!1,!0,r.maxCubemapSize):ne[ge]=Ue?S.image[ge].image:S.image[ge],ne[ge]=we(S,ne[ge]);const ze=ne[0],We=p(ze)||o,Ie=s.convert(S.format,S.colorSpace),Re=s.convert(S.type),Me=y(S.internalFormat,Ie,Re,S.colorSpace),Ne=o&&S.isVideoTexture!==!0,Ge=re.__version===void 0||se===!0;let at=A(S,ze,We);j(t.TEXTURE_CUBE_MAP,S,We);let je;if(Ce){Ne&&Ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,at,Me,ze.width,ze.height);for(let ge=0;ge<6;ge++){je=ne[ge].mipmaps;for(let N=0;N<je.length;N++){const fe=je[N];S.format!==ni?Ie!==null?Ne?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N,0,0,fe.width,fe.height,Ie,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N,Me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N,0,0,fe.width,fe.height,Ie,Re,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N,Me,fe.width,fe.height,0,Ie,Re,fe.data)}}}else{je=S.mipmaps,Ne&&Ge&&(je.length>0&&at++,n.texStorage2D(t.TEXTURE_CUBE_MAP,at,Me,ne[0].width,ne[0].height));for(let ge=0;ge<6;ge++)if(Ue){Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ne[ge].width,ne[ge].height,Ie,Re,ne[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Me,ne[ge].width,ne[ge].height,0,Ie,Re,ne[ge].data);for(let N=0;N<je.length;N++){const _e=je[N].image[ge].image;Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N+1,0,0,_e.width,_e.height,Ie,Re,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N+1,Me,_e.width,_e.height,0,Ie,Re,_e.data)}}else{Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ie,Re,ne[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Me,Ie,Re,ne[ge]);for(let N=0;N<je.length;N++){const fe=je[N];Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N+1,0,0,Ie,Re,fe.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N+1,Me,Ie,Re,fe.image[ge])}}}m(S,We)&&v(t.TEXTURE_CUBE_MAP),re.__version=ae.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function oe(b,S,B,se,ae,re){const ve=s.convert(B.format,B.colorSpace),me=s.convert(B.type),xe=y(B.internalFormat,ve,me,B.colorSpace);if(!i.get(S).__hasExternalTextures){const Ue=Math.max(1,S.width>>re),ne=Math.max(1,S.height>>re);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,re,xe,Ue,ne,S.depth,0,ve,me,null):n.texImage2D(ae,re,xe,Ue,ne,0,ve,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),pe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ae,i.get(B).__webglTexture,0,ce(S)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ae,i.get(B).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(b,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let se=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||pe(S)){const ae=S.depthTexture;ae&&ae.isDepthTexture&&(ae.type===nr?se=t.DEPTH_COMPONENT32F:ae.type===tr&&(se=t.DEPTH_COMPONENT24));const re=ce(S);pe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,se,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,se,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const se=ce(S);B&&pe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,S.width,S.height):pe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const se=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ae=0;ae<se.length;ae++){const re=se[ae],ve=s.convert(re.format,re.colorSpace),me=s.convert(re.type),xe=y(re.internalFormat,ve,me,re.colorSpace),Ce=ce(S);B&&pe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,xe,S.width,S.height):pe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,xe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,xe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function I(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const se=i.get(S.depthTexture).__webglTexture,ae=ce(S);if(S.depthTexture.format===kr)pe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(S.depthTexture.format===$s)pe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function q(b){const S=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");I(S.__webglFramebuffer,b)}else if(B){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]=t.createRenderbuffer(),Ae(S.__webglDepthbuffer[se],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ae(S.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(b,S,B){const se=i.get(b);S!==void 0&&oe(se.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&q(b)}function P(b){const S=b.texture,B=i.get(b),se=i.get(S);b.addEventListener("dispose",D),b.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=S.version,a.memory.textures++);const ae=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,ve=p(b)||o;if(ae){B.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[me]=[];for(let xe=0;xe<S.mipmaps.length;xe++)B.__webglFramebuffer[me][xe]=t.createFramebuffer()}else B.__webglFramebuffer[me]=t.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)B.__webglFramebuffer[me]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const me=b.texture;for(let xe=0,Ce=me.length;xe<Ce;xe++){const Ue=i.get(me[xe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&pe(b)===!1){const me=re?S:[S];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xe=0;xe<me.length;xe++){const Ce=me[xe];B.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[xe]);const Ue=s.convert(Ce.format,Ce.colorSpace),ne=s.convert(Ce.type),ze=y(Ce.internalFormat,Ue,ne,Ce.colorSpace,b.isXRRenderTarget===!0),We=ce(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,ze,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,B.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),j(t.TEXTURE_CUBE_MAP,S,ve);for(let me=0;me<6;me++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)oe(B.__webglFramebuffer[me][xe],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else oe(B.__webglFramebuffer[me],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(S,ve)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const me=b.texture;for(let xe=0,Ce=me.length;xe<Ce;xe++){const Ue=me[xe],ne=i.get(Ue);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),j(t.TEXTURE_2D,Ue,ve),oe(B.__webglFramebuffer,b,Ue,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),m(Ue,ve)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?me=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,se.__webglTexture),j(me,S,ve),o&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)oe(B.__webglFramebuffer[xe],b,S,t.COLOR_ATTACHMENT0,me,xe);else oe(B.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,me,0);m(S,ve)&&v(me),n.unbindTexture()}b.depthBuffer&&q(b)}function de(b){const S=p(b)||o,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0,ae=B.length;se<ae;se++){const re=B[se];if(m(re,S)){const ve=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(re).__webglTexture;n.bindTexture(ve,me),v(ve),n.unbindTexture()}}}function ue(b){if(o&&b.samples>0&&pe(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,se=b.height;let ae=t.COLOR_BUFFER_BIT;const re=[],ve=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(b),xe=b.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ce=0;Ce<S.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){re.push(t.COLOR_ATTACHMENT0+Ce),b.depthBuffer&&re.push(ve);const Ue=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ue===!1&&(b.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]),Ue===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),xe){const ne=i.get(S[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,B,se,0,0,B,se,ae,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Ce=0;Ce<S.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]);const Ue=i.get(S[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function ce(b){return Math.min(r.maxSamples,b.samples)}function pe(b){const S=i.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function He(b){const S=a.render.frame;f.get(b)!==S&&(f.set(b,S),b.update())}function we(b,S){const B=b.colorSpace,se=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===qf||B!==zi&&B!==Gn&&(st.getTransfer(B)===ct?o===!1?e.has("EXT_sRGB")===!0&&se===ni?(b.format=qf,b.minFilter=kt,b.generateMipmaps=!1):S=Q0.sRGBToLinear(S):(se!==ni||ae!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=L,this.resetTextureUnits=ie,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=U,this.setTextureCube=z,this.rebindTextures=F,this.setupRenderTarget=P,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=pe}function LA(t,e,n){const i=n.isWebGL2;function r(s,a=Gn){let o;const l=st.getTransfer(a);if(s===hr)return t.UNSIGNED_BYTE;if(s===G0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===V0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===dE)return t.BYTE;if(s===pE)return t.SHORT;if(s===Zh)return t.UNSIGNED_SHORT;if(s===H0)return t.INT;if(s===tr)return t.UNSIGNED_INT;if(s===nr)return t.FLOAT;if(s===Ni)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===mE)return t.ALPHA;if(s===ni)return t.RGBA;if(s===gE)return t.LUMINANCE;if(s===vE)return t.LUMINANCE_ALPHA;if(s===kr)return t.DEPTH_COMPONENT;if(s===$s)return t.DEPTH_STENCIL;if(s===qf)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===_E)return t.RED;if(s===W0)return t.RED_INTEGER;if(s===xE)return t.RG;if(s===j0)return t.RG_INTEGER;if(s===X0)return t.RGBA_INTEGER;if(s===hc||s===dc||s===pc||s===mc)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===hc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===hc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===dc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fp||s===Op||s===zp||s===kp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Fp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Op)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Y0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bp||s===Hp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Bp)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Hp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gp||s===Vp||s===Wp||s===jp||s===Xp||s===Yp||s===qp||s===$p||s===Kp||s===Qp||s===Zp||s===Jp||s===em||s===tm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Gp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$p)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===em)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gc||s===nm||s===im)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===gc)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===im)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yE||s===rm||s===sm||s===am)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===gc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===rm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===am)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class DA extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ur extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NA={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),c=this._getHandJoint(u,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,_=.005;u.inputState.pinching&&d>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(NA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ur;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class UA extends na{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,h=null,d=null,g=null,_=null;const x=n.getContextAttributes();let p=null,c=null;const m=[],v=[],y=new Ye;let A=null;const T=new Hn;T.layers.enable(1),T.viewport=new Vt;const M=new Hn;M.layers.enable(2),M.viewport=new Vt;const D=[T,M],E=new DA;E.layers.enable(1),E.layers.enable(2);let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=m[j];return ee===void 0&&(ee=new Hc,m[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=m[j];return ee===void 0&&(ee=new Hc,m[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=m[j];return ee===void 0&&(ee=new Hc,m[j]=ee),ee.getHandSpace()};function X(j){const ee=v.indexOf(j.inputSource);if(ee===-1)return;const le=m[ee];le!==void 0&&(le.update(j.inputSource,j.frame,u||a),le.dispatchEvent({type:j.type,data:j.inputSource}))}function ie(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",L);for(let j=0;j<m.length;j++){const ee=v[j];ee!==null&&(v[j]=null,m[j].disconnect(ee))}w=null,H=null,e.setRenderTarget(p),g=null,d=null,h=null,r=null,c=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),c=new si(g.framebufferWidth,g.framebufferHeight,{format:ni,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,le=null,Ee=null;x.depth&&(Ee=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=x.stencil?$s:kr,le=x.stencil?zr:tr);const oe={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),c=new si(d.textureWidth,d.textureHeight,{format:ni,type:hr,depthTexture:new f_(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ae=e.properties.get(c);Ae.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(j){for(let ee=0;ee<j.removed.length;ee++){const le=j.removed[ee],Ee=v.indexOf(le);Ee>=0&&(v[Ee]=null,m[Ee].disconnect(le))}for(let ee=0;ee<j.added.length;ee++){const le=j.added[ee];let Ee=v.indexOf(le);if(Ee===-1){for(let Ae=0;Ae<m.length;Ae++)if(Ae>=v.length){v.push(le),Ee=Ae;break}else if(v[Ae]===null){v[Ae]=le,Ee=Ae;break}if(Ee===-1)break}const oe=m[Ee];oe&&oe.connect(le)}}const k=new Y,W=new Y;function V(j,ee,le){k.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const Ee=k.distanceTo(W),oe=ee.projectionMatrix.elements,Ae=le.projectionMatrix.elements,I=oe[14]/(oe[10]-1),q=oe[14]/(oe[10]+1),F=(oe[9]+1)/oe[5],P=(oe[9]-1)/oe[5],de=(oe[8]-1)/oe[0],ue=(Ae[8]+1)/Ae[0],ce=I*de,pe=I*ue,He=Ee/(-de+ue),we=He*-de;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(we),j.translateZ(He),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const b=I+He,S=q+He,B=ce-we,se=pe+(Ee-we),ae=F*q/S*b,re=P*q/S*b;j.projectionMatrix.makePerspective(B,se,ae,re,b,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function U(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;E.near=M.near=T.near=j.near,E.far=M.far=T.far=j.far,(w!==E.near||H!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,H=E.far);const ee=j.parent,le=E.cameras;U(E,ee);for(let Ee=0;Ee<le.length;Ee++)U(le[Ee],ee);le.length===2?V(E,T,M):E.projectionMatrix.copy(T.projectionMatrix),z(j,E,ee)};function z(j,ee,le){le===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=$f*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=j)};let O=null;function te(j,ee){if(f=ee.getViewerPose(u||a),_=ee,f!==null){const le=f.views;g!==null&&(e.setRenderTargetFramebuffer(c,g.framebuffer),e.setRenderTarget(c));let Ee=!1;le.length!==E.cameras.length&&(E.cameras.length=0,Ee=!0);for(let oe=0;oe<le.length;oe++){const Ae=le[oe];let I=null;if(g!==null)I=g.getViewport(Ae);else{const F=h.getViewSubImage(d,Ae);I=F.viewport,oe===0&&(e.setRenderTargetTextures(c,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(c))}let q=D[oe];q===void 0&&(q=new Hn,q.layers.enable(oe),q.viewport=new Vt,D[oe]=q),q.matrix.fromArray(Ae.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Ae.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(I.x,I.y,I.width,I.height),oe===0&&(E.matrix.copy(q.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ee===!0&&E.cameras.push(q)}}for(let le=0;le<m.length;le++){const Ee=v[le],oe=m[le];Ee!==null&&oe!==void 0&&oe.update(Ee,ee,u||a)}O&&O(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const J=new u_;J.setAnimationLoop(te),this.setAnimationLoop=function(j){O=j},this.dispose=function(){}}}function IA(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,s_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,m,v,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&g(p,c,y)):c.isMeshMatcapMaterial?(s(p,c),_(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),x(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(a(p,c),c.isLineDashedMaterial&&o(p,c)):c.isPointsMaterial?l(p,c,m,v):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===yn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===yn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const m=e.get(c).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*v,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function a(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function o(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,m,v){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*m,p.scale.value=v*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function g(p,c,m){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===yn&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const m=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FA(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const y=v.program;i.uniformBlockBinding(m,y)}function u(m,v){let y=r[m.id];y===void 0&&(_(m),y=f(m),r[m.id]=y,m.addEventListener("dispose",p));const A=v.program;i.updateUBOMapping(m,A);const T=e.render.frame;s[m.id]!==T&&(d(m),s[m.id]=T)}function f(m){const v=h();m.__bindingPointIndex=v;const y=t.createBuffer(),A=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function h(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const v=r[m.id],y=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,M=y.length;T<M;T++){const D=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,w=D.length;E<w;E++){const H=D[E];if(g(H,T,E,A)===!0){const X=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let L=0;for(let k=0;k<ie.length;k++){const W=ie[k],V=x(W);typeof W=="number"||typeof W=="boolean"?(H.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,X+L,H.__data)):W.isMatrix3?(H.__data[0]=W.elements[0],H.__data[1]=W.elements[1],H.__data[2]=W.elements[2],H.__data[3]=0,H.__data[4]=W.elements[3],H.__data[5]=W.elements[4],H.__data[6]=W.elements[5],H.__data[7]=0,H.__data[8]=W.elements[6],H.__data[9]=W.elements[7],H.__data[10]=W.elements[8],H.__data[11]=0):(W.toArray(H.__data,L),L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,H.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,y,A){const T=m.value,M=v+"_"+y;if(A[M]===void 0)return typeof T=="number"||typeof T=="boolean"?A[M]=T:A[M]=T.clone(),!0;{const D=A[M];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return A[M]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function _(m){const v=m.uniforms;let y=0;const A=16;for(let M=0,D=v.length;M<D;M++){const E=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,H=E.length;w<H;w++){const X=E[w],ie=Array.isArray(X.value)?X.value:[X.value];for(let L=0,k=ie.length;L<k;L++){const W=ie[L],V=x(W),U=y%A;U!==0&&A-U<V.boundary&&(y+=A-U),X.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=V.storage}}}const T=y%A;return T>0&&(y+=A-T),m.__size=y,m.__cache={},this}function x(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function p(m){const v=m.target;v.removeEventListener("dispose",p);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function c(){for(const m in r)t.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:u,dispose:c}}class v_{constructor(e={}){const{canvas:n=NE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const c=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const v=this;let y=!1,A=0,T=0,M=null,D=-1,E=null;const w=new Vt,H=new Vt;let X=null;const ie=new Be(0);let L=0,k=n.width,W=n.height,V=1,U=null,z=null;const O=new Vt(0,0,k,W),te=new Vt(0,0,k,W);let J=!1;const j=new l_;let ee=!1,le=!1,Ee=null;const oe=new ht,Ae=new Ye,I=new Y,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return M===null?V:1}let P=i;function de(R,G){for(let K=0;K<R.length;K++){const Q=R[K],$=n.getContext(Q,G);if($!==null)return $}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qh}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",fe,!1),P===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),P=de(G,R),P===null)throw de(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ue,ce,pe,He,we,b,S,B,se,ae,re,ve,me,xe,Ce,Ue,ne,ze,We,Ie,Re,Me,Ne,Ge;function at(){ue=new XT(P),ce=new BT(P,ue,e),ue.init(ce),Me=new LA(P,ue,ce),pe=new CA(P,ue,ce),He=new $T(P),we=new mA,b=new PA(P,ue,pe,we,ce,Me,He),S=new GT(v),B=new jT(v),se=new iw(P,ce),Ne=new zT(P,ue,se,ce),ae=new YT(P,se,He,Ne),re=new JT(P,ae,se,He),We=new ZT(P,ce,b),Ue=new HT(we),ve=new pA(v,S,B,ue,ce,Ne,Ue),me=new IA(v,we),xe=new vA,Ce=new EA(ue,ce),ze=new OT(v,S,B,pe,re,d,l),ne=new RA(v,re,ce),Ge=new FA(P,He,ce,pe),Ie=new kT(P,ue,He,ce),Re=new qT(P,ue,He,ce),He.programs=ve.programs,v.capabilities=ce,v.extensions=ue,v.properties=we,v.renderLists=xe,v.shadowMap=ne,v.state=pe,v.info=He}at();const je=new UA(v,P);this.xr=je,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(k,W,!1))},this.getSize=function(R){return R.set(k,W)},this.setSize=function(R,G,K=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,W=G,n.width=Math.floor(R*V),n.height=Math.floor(G*V),K===!0&&(n.style.width=R+"px",n.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(k*V,W*V).floor()},this.setDrawingBufferSize=function(R,G,K){k=R,W=G,V=K,n.width=Math.floor(R*K),n.height=Math.floor(G*K),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,G,K,Q){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,G,K,Q),pe.viewport(w.copy(O).multiplyScalar(V).floor())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,G,K,Q){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,G,K,Q),pe.scissor(H.copy(te).multiplyScalar(V).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(R){pe.setScissorTest(J=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){z=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(R=!0,G=!0,K=!0){let Q=0;if(R){let $=!1;if(M!==null){const Te=M.texture.format;$=Te===X0||Te===j0||Te===W0}if($){const Te=M.texture.type,De=Te===hr||Te===tr||Te===Zh||Te===zr||Te===G0||Te===V0,Oe=ze.getClearColor(),ke=ze.getClearAlpha(),Ke=Oe.r,Xe=Oe.g,qe=Oe.b;De?(g[0]=Ke,g[1]=Xe,g[2]=qe,g[3]=ke,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ke,_[1]=Xe,_[2]=qe,_[3]=ke,P.clearBufferiv(P.COLOR,0,_))}else Q|=P.COLOR_BUFFER_BIT}G&&(Q|=P.DEPTH_BUFFER_BIT),K&&(Q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),xe.dispose(),Ce.dispose(),we.dispose(),S.dispose(),B.dispose(),re.dispose(),Ne.dispose(),Ge.dispose(),ve.dispose(),je.dispose(),je.removeEventListener("sessionstart",lt),je.removeEventListener("sessionend",it),Ee&&(Ee.dispose(),Ee=null),bt.stop()};function ge(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=He.autoReset,G=ne.enabled,K=ne.autoUpdate,Q=ne.needsUpdate,$=ne.type;at(),He.autoReset=R,ne.enabled=G,ne.autoUpdate=K,ne.needsUpdate=Q,ne.type=$}function fe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const G=R.target;G.removeEventListener("dispose",_e),Pe(G)}function Pe(R){Le(R),we.remove(R)}function Le(R){const G=we.get(R).programs;G!==void 0&&(G.forEach(function(K){ve.releaseProgram(K)}),R.isShaderMaterial&&ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,K,Q,$,Te){G===null&&(G=q);const De=$.isMesh&&$.matrixWorld.determinant()<0,Oe=T_(R,G,K,Q,$);pe.setMaterial(Q,De);let ke=K.index,Ke=1;if(Q.wireframe===!0){if(ke=ae.getWireframeAttribute(K),ke===void 0)return;Ke=2}const Xe=K.drawRange,qe=K.attributes.position;let St=Xe.start*Ke,Mn=(Xe.start+Xe.count)*Ke;Te!==null&&(St=Math.max(St,Te.start*Ke),Mn=Math.min(Mn,(Te.start+Te.count)*Ke)),ke!==null?(St=Math.max(St,0),Mn=Math.min(Mn,ke.count)):qe!=null&&(St=Math.max(St,0),Mn=Math.min(Mn,qe.count));const Nt=Mn-St;if(Nt<0||Nt===1/0)return;Ne.setup($,Q,Oe,K,ke);let xi,pt=Ie;if(ke!==null&&(xi=se.get(ke),pt=Re,pt.setIndex(xi)),$.isMesh)Q.wireframe===!0?(pe.setLineWidth(Q.wireframeLinewidth*F()),pt.setMode(P.LINES)):pt.setMode(P.TRIANGLES);else if($.isLine){let Ze=Q.linewidth;Ze===void 0&&(Ze=1),pe.setLineWidth(Ze*F()),$.isLineSegments?pt.setMode(P.LINES):$.isLineLoop?pt.setMode(P.LINE_LOOP):pt.setMode(P.LINE_STRIP)}else $.isPoints?pt.setMode(P.POINTS):$.isSprite&&pt.setMode(P.TRIANGLES);if($.isBatchedMesh)pt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)pt.renderInstances(St,Nt,$.count);else if(K.isInstancedBufferGeometry){const Ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Pu=Math.min(K.instanceCount,Ze);pt.renderInstances(St,Nt,Pu)}else pt.render(St,Nt)};function Qe(R,G,K){R.transparent===!0&&R.side===di&&R.forceSinglePass===!1?(R.side=yn,R.needsUpdate=!0,vo(R,G,K),R.side=mr,R.needsUpdate=!0,vo(R,G,K),R.side=di):vo(R,G,K)}this.compile=function(R,G,K=null){K===null&&(K=R),p=Ce.get(K),p.init(),m.push(p),K.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),R!==K&&R.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(v._useLegacyLights);const Q=new Set;return R.traverse(function($){const Te=$.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Oe=Te[De];Qe(Oe,K,$),Q.add(Oe)}else Qe(Te,K,$),Q.add(Te)}),m.pop(),p=null,Q},this.compileAsync=function(R,G,K=null){const Q=this.compile(R,G,K);return new Promise($=>{function Te(){if(Q.forEach(function(De){we.get(De).currentProgram.isReady()&&Q.delete(De)}),Q.size===0){$(R);return}setTimeout(Te,10)}ue.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Fe=null;function nt(R){Fe&&Fe(R)}function lt(){bt.stop()}function it(){bt.start()}const bt=new u_;bt.setAnimationLoop(nt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(R){Fe=R,je.setAnimationLoop(R),R===null?bt.stop():bt.start()},je.addEventListener("sessionstart",lt),je.addEventListener("sessionend",it),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(G),G=je.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,G,M),p=Ce.get(R,m.length),p.init(),m.push(p),oe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(oe),le=this.localClippingEnabled,ee=Ue.init(this.clippingPlanes,le),x=xe.get(R,c.length),x.init(),c.push(x),Fn(R,G,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(U,z),this.info.render.frame++,ee===!0&&Ue.beginShadows();const K=p.state.shadowsArray;if(ne.render(K,R,G),ee===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),ze.render(x,R),p.setupLights(v._useLegacyLights),G.isArrayCamera){const Q=G.cameras;for(let $=0,Te=Q.length;$<Te;$++){const De=Q[$];id(x,R,De,De.viewport)}}else id(x,R,G);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(v,R,G),Ne.resetDefaultState(),D=-1,E=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Fn(R,G,K,Q){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){Q&&I.setFromMatrixPosition(R.matrixWorld).applyMatrix4(oe);const De=re.update(R),Oe=R.material;Oe.visible&&x.push(R,De,Oe,K,I.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||j.intersectsObject(R))){const De=re.update(R),Oe=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),I.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),I.copy(De.boundingSphere.center)),I.applyMatrix4(R.matrixWorld).applyMatrix4(oe)),Array.isArray(Oe)){const ke=De.groups;for(let Ke=0,Xe=ke.length;Ke<Xe;Ke++){const qe=ke[Ke],St=Oe[qe.materialIndex];St&&St.visible&&x.push(R,De,St,K,I.z,qe)}}else Oe.visible&&x.push(R,De,Oe,K,I.z,null)}}const Te=R.children;for(let De=0,Oe=Te.length;De<Oe;De++)Fn(Te[De],G,K,Q)}function id(R,G,K,Q){const $=R.opaque,Te=R.transmissive,De=R.transparent;p.setupLightsView(K),ee===!0&&Ue.setGlobalState(v.clippingPlanes,K),Te.length>0&&w_($,Te,G,K),Q&&pe.viewport(w.copy(Q)),$.length>0&&go($,G,K),Te.length>0&&go(Te,G,K),De.length>0&&go(De,G,K),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function w_(R,G,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Te=ce.isWebGL2;Ee===null&&(Ee=new si(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Ni:hr,minFilter:qs,samples:Te?4:0})),v.getDrawingBufferSize(Ae),Te?Ee.setSize(Ae.x,Ae.y):Ee.setSize(Kf(Ae.x),Kf(Ae.y));const De=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(ie),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=fr,go(R,K,Q),b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee);let ke=!1;for(let Ke=0,Xe=G.length;Ke<Xe;Ke++){const qe=G[Ke],St=qe.object,Mn=qe.geometry,Nt=qe.material,xi=qe.group;if(Nt.side===di&&St.layers.test(Q.layers)){const pt=Nt.side;Nt.side=yn,Nt.needsUpdate=!0,rd(St,K,Q,Mn,Nt,xi),Nt.side=pt,Nt.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee)),v.setRenderTarget(De),v.setClearColor(ie,L),v.toneMapping=Oe}function go(R,G,K){const Q=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Te=R.length;$<Te;$++){const De=R[$],Oe=De.object,ke=De.geometry,Ke=Q===null?De.material:Q,Xe=De.group;Oe.layers.test(K.layers)&&rd(Oe,G,K,ke,Ke,Xe)}}function rd(R,G,K,Q,$,Te){R.onBeforeRender(v,G,K,Q,$,Te),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(v,G,K,Q,R,Te),$.transparent===!0&&$.side===di&&$.forceSinglePass===!1?($.side=yn,$.needsUpdate=!0,v.renderBufferDirect(K,G,Q,$,R,Te),$.side=mr,$.needsUpdate=!0,v.renderBufferDirect(K,G,Q,$,R,Te),$.side=di):v.renderBufferDirect(K,G,Q,$,R,Te),R.onAfterRender(v,G,K,Q,$,Te)}function vo(R,G,K){G.isScene!==!0&&(G=q);const Q=we.get(R),$=p.state.lights,Te=p.state.shadowsArray,De=$.state.version,Oe=ve.getParameters(R,$.state,Te,G,K),ke=ve.getProgramCacheKey(Oe);let Ke=Q.programs;Q.environment=R.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(R.isMeshStandardMaterial?B:S).get(R.envMap||Q.environment),Ke===void 0&&(R.addEventListener("dispose",_e),Ke=new Map,Q.programs=Ke);let Xe=Ke.get(ke);if(Xe!==void 0){if(Q.currentProgram===Xe&&Q.lightsStateVersion===De)return ad(R,Oe),Xe}else Oe.uniforms=ve.getUniforms(R),R.onBuild(K,Oe,v),R.onBeforeCompile(Oe,v),Xe=ve.acquireProgram(Oe,ke),Ke.set(ke,Xe),Q.uniforms=Oe.uniforms;const qe=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Ue.uniform),ad(R,Oe),Q.needsLights=A_(R),Q.lightsStateVersion=De,Q.needsLights&&(qe.ambientLightColor.value=$.state.ambient,qe.lightProbe.value=$.state.probe,qe.directionalLights.value=$.state.directional,qe.directionalLightShadows.value=$.state.directionalShadow,qe.spotLights.value=$.state.spot,qe.spotLightShadows.value=$.state.spotShadow,qe.rectAreaLights.value=$.state.rectArea,qe.ltc_1.value=$.state.rectAreaLTC1,qe.ltc_2.value=$.state.rectAreaLTC2,qe.pointLights.value=$.state.point,qe.pointLightShadows.value=$.state.pointShadow,qe.hemisphereLights.value=$.state.hemi,qe.directionalShadowMap.value=$.state.directionalShadowMap,qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qe.spotShadowMap.value=$.state.spotShadowMap,qe.spotLightMatrix.value=$.state.spotLightMatrix,qe.spotLightMap.value=$.state.spotLightMap,qe.pointShadowMap.value=$.state.pointShadowMap,qe.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=Xe,Q.uniformsList=null,Xe}function sd(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Rl.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function ad(R,G){const K=we.get(R);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function T_(R,G,K,Q,$){G.isScene!==!0&&(G=q),b.resetTextureUnits();const Te=G.fog,De=Q.isMeshStandardMaterial?G.environment:null,Oe=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:zi,ke=(Q.isMeshStandardMaterial?B:S).get(Q.envMap||De),Ke=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qe=!!K.morphAttributes.position,St=!!K.morphAttributes.normal,Mn=!!K.morphAttributes.color;let Nt=fr;Q.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const xi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pt=xi!==void 0?xi.length:0,Ze=we.get(Q),Pu=p.state.lights;if(ee===!0&&(le===!0||R!==E)){const On=R===E&&Q.id===D;Ue.setState(Q,R,On)}let _t=!1;Q.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Pu.state.version||Ze.outputColorSpace!==Oe||$.isBatchedMesh&&Ze.batching===!1||!$.isBatchedMesh&&Ze.batching===!0||$.isInstancedMesh&&Ze.instancing===!1||!$.isInstancedMesh&&Ze.instancing===!0||$.isSkinnedMesh&&Ze.skinning===!1||!$.isSkinnedMesh&&Ze.skinning===!0||$.isInstancedMesh&&Ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ze.instancingColor===!1&&$.instanceColor!==null||Ze.envMap!==ke||Q.fog===!0&&Ze.fog!==Te||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ue.numPlanes||Ze.numIntersection!==Ue.numIntersection)||Ze.vertexAlphas!==Ke||Ze.vertexTangents!==Xe||Ze.morphTargets!==qe||Ze.morphNormals!==St||Ze.morphColors!==Mn||Ze.toneMapping!==Nt||ce.isWebGL2===!0&&Ze.morphTargetsCount!==pt)&&(_t=!0):(_t=!0,Ze.__version=Q.version);let xr=Ze.currentProgram;_t===!0&&(xr=vo(Q,G,$));let od=!1,aa=!1,Lu=!1;const Xt=xr.getUniforms(),yr=Ze.uniforms;if(pe.useProgram(xr.program)&&(od=!0,aa=!0,Lu=!0),Q.id!==D&&(D=Q.id,aa=!0),od||E!==R){Xt.setValue(P,"projectionMatrix",R.projectionMatrix),Xt.setValue(P,"viewMatrix",R.matrixWorldInverse);const On=Xt.map.cameraPosition;On!==void 0&&On.setValue(P,I.setFromMatrixPosition(R.matrixWorld)),ce.logarithmicDepthBuffer&&Xt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Xt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,aa=!0,Lu=!0)}if($.isSkinnedMesh){Xt.setOptional(P,$,"bindMatrix"),Xt.setOptional(P,$,"bindMatrixInverse");const On=$.skeleton;On&&(ce.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),Xt.setValue(P,"boneTexture",On.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Xt.setOptional(P,$,"batchingTexture"),Xt.setValue(P,"batchingTexture",$._matricesTexture,b));const Du=K.morphAttributes;if((Du.position!==void 0||Du.normal!==void 0||Du.color!==void 0&&ce.isWebGL2===!0)&&We.update($,K,xr),(aa||Ze.receiveShadow!==$.receiveShadow)&&(Ze.receiveShadow=$.receiveShadow,Xt.setValue(P,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(yr.envMap.value=ke,yr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),aa&&(Xt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&b_(yr,Lu),Te&&Q.fog===!0&&me.refreshFogUniforms(yr,Te),me.refreshMaterialUniforms(yr,Q,V,W,Ee),Rl.upload(P,sd(Ze),yr,b)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Rl.upload(P,sd(Ze),yr,b),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Xt.setValue(P,"center",$.center),Xt.setValue(P,"modelViewMatrix",$.modelViewMatrix),Xt.setValue(P,"normalMatrix",$.normalMatrix),Xt.setValue(P,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const On=Q.uniformsGroups;for(let Nu=0,R_=On.length;Nu<R_;Nu++)if(ce.isWebGL2){const ld=On[Nu];Ge.update(ld,xr),Ge.bind(ld,xr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xr}function b_(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function A_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,G,K){we.get(R.texture).__webglTexture=G,we.get(R.depthTexture).__webglTexture=K;const Q=we.get(R);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const K=we.get(R);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,K=0){M=R,A=G,T=K;let Q=!0,$=null,Te=!1,De=!1;if(R){const ke=we.get(R);ke.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(P.FRAMEBUFFER,null),Q=!1):ke.__webglFramebuffer===void 0?b.setupRenderTarget(R):ke.__hasExternalTextures&&b.rebindTextures(R,we.get(R.texture).__webglTexture,we.get(R.depthTexture).__webglTexture);const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const Xe=we.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[G])?$=Xe[G][K]:$=Xe[G],Te=!0):ce.isWebGL2&&R.samples>0&&b.useMultisampledRTT(R)===!1?$=we.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?$=Xe[K]:$=Xe,w.copy(R.viewport),H.copy(R.scissor),X=R.scissorTest}else w.copy(O).multiplyScalar(V).floor(),H.copy(te).multiplyScalar(V).floor(),X=J;if(pe.bindFramebuffer(P.FRAMEBUFFER,$)&&ce.drawBuffers&&Q&&pe.drawBuffers(R,$),pe.viewport(w),pe.scissor(H),pe.setScissorTest(X),Te){const ke=we.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,ke.__webglTexture,K)}else if(De){const ke=we.get(R.texture),Ke=G||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ke.__webglTexture,K||0,Ke)}D=-1},this.readRenderTargetPixels=function(R,G,K,Q,$,Te,De){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){pe.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const ke=R.texture,Ke=ke.format,Xe=ke.type;if(Ke!==ni&&Me.convert(Ke)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Xe===Ni&&(ue.has("EXT_color_buffer_half_float")||ce.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Xe!==hr&&Me.convert(Xe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===nr&&(ce.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-Q&&K>=0&&K<=R.height-$&&P.readPixels(G,K,Q,$,Me.convert(Ke),Me.convert(Xe),Te)}finally{const ke=M!==null?we.get(M).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,G,K=0){const Q=Math.pow(2,-K),$=Math.floor(G.image.width*Q),Te=Math.floor(G.image.height*Q);b.setTexture2D(G,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,R.x,R.y,$,Te),pe.unbindTexture()},this.copyTextureToTexture=function(R,G,K,Q=0){const $=G.image.width,Te=G.image.height,De=Me.convert(K.format),Oe=Me.convert(K.type);b.setTexture2D(K,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,K.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,K.unpackAlignment),G.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,R.x,R.y,$,Te,De,Oe,G.image.data):G.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,De,G.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,Q,R.x,R.y,De,Oe,G.image),Q===0&&K.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(R,G,K,Q,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=R.max.x-R.min.x+1,De=R.max.y-R.min.y+1,Oe=R.max.z-R.min.z+1,ke=Me.convert(Q.format),Ke=Me.convert(Q.type);let Xe;if(Q.isData3DTexture)b.setTexture3D(Q,0),Xe=P.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)b.setTexture2DArray(Q,0),Xe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Q.unpackAlignment);const qe=P.getParameter(P.UNPACK_ROW_LENGTH),St=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Nt=P.getParameter(P.UNPACK_SKIP_ROWS),xi=P.getParameter(P.UNPACK_SKIP_IMAGES),pt=K.isCompressedTexture?K.mipmaps[$]:K.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,R.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,R.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?P.texSubImage3D(Xe,$,G.x,G.y,G.z,Te,De,Oe,ke,Ke,pt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Xe,$,G.x,G.y,G.z,Te,De,Oe,ke,pt.data)):P.texSubImage3D(Xe,$,G.x,G.y,G.z,Te,De,Oe,ke,Ke,pt),P.pixelStorei(P.UNPACK_ROW_LENGTH,qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Nt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,xi),$===0&&Q.generateMipmaps&&P.generateMipmap(Xe),pe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),pe.unbindTexture()},this.resetState=function(){A=0,T=0,M=null,pe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Jh?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===Au?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ct?Br:q0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Br?Ct:zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class OA extends v_{}OA.prototype.isWebGL1Renderer=!0;class __ extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class $m extends Jt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ms=new ht,Km=new ht,cl=[],Qm=new $r,zA=new ht,Sa=new en,Ma=new ra;class fl extends en{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new $m(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,zA)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new $r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ms),Qm.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(Qm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ra),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ms),Ma.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Ma)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(i),e.ray.intersectsSphere(Ma)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ms),Km.multiplyMatrices(i,ms),Sa.matrixWorld=Km,Sa.raycast(e,cl);for(let a=0,o=cl.length;a<o;a++){const l=cl[a];l.instanceId=s,l.object=this,n.push(l)}cl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new $m(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class x_ extends ho{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zm=new ht,Zf=new e_,hl=new ra,dl=new Y;class y_ extends Sn{constructor(e=new Nn,n=new x_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;Zm.copy(r).invert(),Zf.copy(e.ray).applyMatrix4(Zm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,x=g;_<x;_++){const p=u.getX(_);dl.fromBufferAttribute(h,p),Jm(dl,p,l,r,e,n,this)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,x=g;_<x;_++)dl.fromBufferAttribute(h,_),Jm(dl,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jm(t,e,n,i,r,s,a){const o=Zf.distanceSqToPoint(t);if(o<n){const l=new Y;Zf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Qs extends nn{constructor(e,n,i,r,s,a,o,l,u){super(e,n,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const eg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class kA{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return u.push(f,h),this},this.removeHandler=function(f){const h=u.indexOf(f);return h!==-1&&u.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=u.length;h<d;h+=2){const g=u[h],_=u[h+1];if(g.global&&(g.lastIndex=0),g.test(f))return _}return null}}}const BA=new kA;class td{constructor(e){this.manager=e!==void 0?e:BA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}td.DEFAULT_MATERIAL_NAME="__DEFAULT";class HA extends td{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=eg.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=io("img");function l(){f(),eg.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(h){f(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class GA extends td{constructor(e){super(e)}load(e,n,i,r){const s=new nn,a=new HA(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class VA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=tg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function tg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);const WA={fftSize:2048,smoothingFactor:.8,lowCutoff:250,midCutoff:4e3,sampleRate:44100};class jA{constructor(e={}){Se(this,"audioContext",null);Se(this,"analyser",null);Se(this,"source",null);Se(this,"stream",null);Se(this,"audioElement",null);Se(this,"currentBlobUrl",null);Se(this,"config");Se(this,"frequencyData",null);Se(this,"smoothedBands",{low:0,mid:0,high:0});this.config={...WA,...e}}async initMic(){this.cleanupSource(),this.stream=await navigator.mediaDevices.getUserMedia({audio:!0}),this.audioContext=new AudioContext({sampleRate:this.config.sampleRate}),this.config.sampleRate=this.audioContext.sampleRate,this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.config.fftSize,this.analyser.smoothingTimeConstant=this.config.smoothingFactor,this.analyser.minDecibels=-80,this.analyser.maxDecibels=-10,this.source=this.audioContext.createMediaStreamSource(this.stream),this.source.connect(this.analyser),this.frequencyData=new Uint8Array(this.analyser.frequencyBinCount)}async loadFile(e){this.currentBlobUrl&&(URL.revokeObjectURL(this.currentBlobUrl),this.currentBlobUrl=null),this.cleanupSource(),this.audioContext||(this.audioContext=new AudioContext({sampleRate:this.config.sampleRate}));const n=URL.createObjectURL(e),i=new Audio;return i.crossOrigin="anonymous",i.loop=!0,new Promise(r=>{let s=!1;i.oncanplaythrough=()=>{var a;s||(s=!0,((a=this.audioContext)==null?void 0:a.state)==="suspended"&&this.audioContext.resume(),this.audioElement=i,this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.config.fftSize,this.analyser.smoothingTimeConstant=this.config.smoothingFactor,this.analyser.minDecibels=-80,this.analyser.maxDecibels=-10,this.source=this.audioContext.createMediaElementSource(i),this.source.connect(this.analyser),this.analyser.connect(this.audioContext.destination),this.frequencyData=new Uint8Array(this.analyser.frequencyBinCount),this.currentBlobUrl=n,r(!0))},i.onerror=()=>{URL.revokeObjectURL(n),r(!1)},i.src=n})}cleanupSource(){var e;this.stream&&this.stream.getTracks().forEach(n=>n.stop()),(e=this.source)==null||e.disconnect(),this.audioElement=null,this.stream=null,this.source=null,this.currentBlobUrl&&(URL.revokeObjectURL(this.currentBlobUrl),this.currentBlobUrl=null)}play(){var e;(e=this.audioElement)==null||e.play()}pause(){var e;(e=this.audioElement)==null||e.pause()}get isPlaying(){return this.audioElement?!this.audioElement.paused:!1}get currentTime(){var e;return((e=this.audioElement)==null?void 0:e.currentTime)??0}get duration(){var e;return((e=this.audioElement)==null?void 0:e.duration)??0}set currentTime(e){this.audioElement&&(this.audioElement.currentTime=e)}setSmoothingFactor(e){this.config.smoothingFactor=Math.max(0,Math.min(1,e)),this.analyser&&(this.analyser.smoothingTimeConstant=this.config.smoothingFactor)}getFrequencyData(){return this.frequencyData?new Uint8Array(this.frequencyData):new Uint8Array(0)}get frequencyBinCount(){var e;return((e=this.frequencyData)==null?void 0:e.length)??0}getFrequencyBands(){var u;if(!this.analyser||!this.frequencyData)return this.smoothedBands;this.analyser.getByteFrequencyData(this.frequencyData);const e=this.frequencyData.length,i=(((u=this.audioContext)==null?void 0:u.sampleRate)??44100)/2/e,r=Math.floor(this.config.lowCutoff/i),s=Math.floor(this.config.midCutoff/i),a=this.avg(0,r),o=this.avg(r,s),l=this.avg(s,e);return this.smoothedBands={low:a/255,mid:o/255,high:l/255},this.smoothedBands}avg(e,n){if(!this.frequencyData||e>=n)return 0;let i=0;for(let r=e;r<n;r++)i+=this.frequencyData[r];return i/(n-e)}hasAudioSource(){return!!(this.source||this.stream)}dispose(){var e;this.cleanupSource(),(e=this.audioContext)==null||e.close(),this.audioContext=null,this.analyser=null,this.frequencyData=null}}const S_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const XA=new c_(-1,1,1,-1,0,1);class YA extends Nn{constructor(){super(),this.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ai([0,2,0,0,2,0],2))}}const qA=new YA;class M_{constructor(e){this._mesh=new en(qA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,XA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class E_ extends mo{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ru.clone(e.uniforms),this.material=new tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new M_(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ng extends mo{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class $A extends mo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class KA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ye);this._width=i.width,this._height=i.height,n=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ni}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new E_(S_),this.copyPass.material.blending=Di,this.clock=new VA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ng!==void 0&&(a instanceof ng?i=!0:a instanceof $A&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class QA extends mo{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const ZA={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ye(1/1024,1/512)}},vertexShader:`

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
	`},JA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Zs extends mo{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256),this.clearColor=new Be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new si(s,a,{type:Ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new si(s,a,{type:Ni});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const g=new si(s,a,{type:Ni});g.texture.name="UnrealBloomPass.v"+h,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),s=Math.round(s/2),a=Math.round(a/2)}const o=JA;this.highPassUniforms=ru.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ye(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=S_;this.copyUniforms=ru.clone(f.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Be,this.oldClearAlpha=1,this.basic=new pi,this.fsQuad=new M_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ye(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new tn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}}Zs.BlurDirectionX=new Ye(1,0);Zs.BlurDirectionY=new Ye(0,1);class eR{constructor(e){Se(this,"scene");Se(this,"camera");Se(this,"renderer");Se(this,"composer",null);Se(this,"bloomPass",null);Se(this,"fxaaPass",null);const n=window.devicePixelRatio||1,i=Math.min(2,n*1.5),{canvas:r,pixelRatio:s=i,fxaa:a=!0,bloom:o=!0,transparent:l=!1,preserveDrawingBuffer:u=!1}=e;if(this.scene=new __,this.camera=new Hn(60,r.width/r.height,.1,1e3),this.camera.position.z=5,this.renderer=new v_({canvas:r,antialias:!0,alpha:l,powerPreference:"high-performance",preserveDrawingBuffer:u}),this.renderer.setPixelRatio(s),this.renderer.setSize(r.width,r.height,!1),this.renderer.setClearColor(657935,l?0:1),this.renderer.toneMapping=k0,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=Ct,a||o){this.composer=new KA(this.renderer);const f=new QA(this.scene,this.camera);if(this.composer.addPass(f),a){this.fxaaPass=new E_(ZA),typeof this.fxaaPass.material.fragmentShader=="string"&&(this.fxaaPass.material.fragmentShader=this.fxaaPass.material.fragmentShader.replace(/gl_FragColor\s*=\s*vec4\s*\(\s*([^,]+)\s*,\s*1\.0\s*\)\s*;/,"gl_FragColor = vec4($1, texture2D(tDiffuse, vUv).a);"),this.fxaaPass.material.needsUpdate=!0);const h=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(r.width*h),1/(r.height*h)),this.composer.addPass(this.fxaaPass)}o&&(this.bloomPass=new Zs(new Ye(r.width,r.height),e.bloomStrength??.5,e.bloomRadius??.4,.85),this.composer.addPass(this.bloomPass))}}resize(e,n){if(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1),this.composer){if(this.composer.setSize(e,n),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.fxaaPass){const i=this.renderer.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.set(1/(e*i),1/(n*i))}this.bloomPass&&this.bloomPass.resolution.set(e,n)}}getSize(e){return this.renderer.getSize(e)}render(){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}dispose(){this.scene.traverse(e=>{const n=e;n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>r.dispose())}),this.renderer.dispose()}}const tR={lowScale:1,midScale:1,highScale:1,minFloor:0,maxCeiling:1};class nR{constructor(e={}){Se(this,"config");this.config={...tR,...e}}setConfig(e){Object.assign(this.config,e)}map(e){const{minFloor:n,maxCeiling:i,lowScale:r,midScale:s,highScale:a}=this.config,o=h=>Math.max(n,Math.min(i,h)),l=o(e.low*r),u=o(e.mid*s),f=o(e.high*a);return{low:l,mid:u,high:f,energy:Math.min(1,(l+u+f)/3)}}}class iR{constructor(){Se(this,"effects",[])}setEffects(e,n){this.dispose(),this.effects=[],e.forEach(i=>{i.init(n),this.effects.push(i)})}update(e,n){for(const i of this.effects)i.update(e,n)}getEffects(){return this.effects}dispose(){for(const e of this.effects)e.dispose();this.effects=[]}}const qi=800,Ea=20;function rR(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");if(!n)return new Qs(e);n.clearRect(0,0,128,128);const i=128/2,r=n.createRadialGradient(i,i,0,i,i,i);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.beginPath(),n.arc(i,i,i,0,Math.PI*2),n.closePath(),n.fill();const s=new Qs(e);return s.needsUpdate=!0,s}function sR(){const n=document.createElement("canvas");n.width=256,n.height=8;const i=n.getContext("2d");if(!i)return new Qs(n);i.clearRect(0,0,256,8);const r=i.createLinearGradient(0,0,256,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.15,"rgba(255,255,255,0.15)"),r.addColorStop(.6,"rgba(255,255,255,0.65)"),r.addColorStop(1,"rgba(255,255,255,1)"),i.fillStyle=r,i.fillRect(0,0,256,8);const s=new Qs(n);return s.needsUpdate=!0,s.wrapS=Bt,s.wrapT=Bt,s.minFilter=kt,s.magFilter=kt,s}class nd{constructor(){Se(this,"scene",null);Se(this,"groups",[]);Se(this,"streakMeshes",[]);Se(this,"geometries",[]);Se(this,"streakGeometries",[]);Se(this,"material",null);Se(this,"streakMaterial",null);Se(this,"params",{baseSize:.04,rotationSpeed:2,maxGroups:20,hue:.55,opacity:.8,shape:0,tilt:0,rotationMode:0,planeDir:0});Se(this,"rotationY",0);Se(this,"rotationX",0);Se(this,"rotationZ",0);Se(this,"velocities",[]);Se(this,"streakPositions",[])}init(e){this.scene=e,this.rotationY=0,this.rotationX=0,this.rotationZ=0,this.velocities=[],this.streakPositions=[],this.streakMeshes=[],this.streakGeometries=[],this.material=new x_({size:this.params.baseSize,color:4491519,transparent:!0,opacity:this.params.opacity,sizeAttenuation:!0,depthWrite:!1,blending:Rn,map:rR(),alphaTest:.4}),this.streakMaterial=new pi({color:16777215,transparent:!0,opacity:1,depthWrite:!1,blending:Rn,map:sR()});for(let n=0;n<Ea;n++){const i=this.createPositionsForGroup(n),r=this.createVelocitiesForGroup(n),s=new Nn;s.setAttribute("position",new Jt(i,3));const a=new y_(s,this.material);this.groups.push(a),this.geometries.push(s),this.velocities.push(r),e.add(a);const o=qi*4,l=new Float32Array(o*3),u=new Float32Array(o*2),f=new Uint32Array(qi*6);for(let g=0;g<qi;g++){const _=g*4;u[(_+0)*2]=0,u[(_+0)*2+1]=0,u[(_+1)*2]=0,u[(_+1)*2+1]=1,u[(_+2)*2]=1,u[(_+2)*2+1]=0,u[(_+3)*2]=1,u[(_+3)*2+1]=1;const x=g*6;f[x+0]=_+0,f[x+1]=_+2,f[x+2]=_+1,f[x+3]=_+2,f[x+4]=_+3,f[x+5]=_+1}const h=new Nn;h.setAttribute("position",new Jt(l,3)),h.setAttribute("uv",new Jt(u,2)),h.setIndex(new Jt(f,1));const d=new en(h,this.streakMaterial);d.visible=!1,this.streakPositions.push(l),this.streakGeometries.push(h),this.streakMeshes.push(d),e.add(d)}}createPositionsForGroup(e){const n=new Float32Array(qi*3),i=this.params.shape,r=3.5;for(let s=0;s<qi;s++)if(i===0){const a=r*Math.pow(Math.random(),.3333333333333333),o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);n[s*3]=a*Math.sin(l)*Math.cos(o),n[s*3+1]=a*Math.cos(l),n[s*3+2]=a*Math.sin(l)*Math.sin(o)}else if(i===1){const a=r*Math.sqrt(Math.random()),o=Math.random()*Math.PI*2;n[s*3]=Math.cos(o)*a,n[s*3+1]=(Math.random()-.5)*.15,n[s*3+2]=Math.sin(o)*a}else n[s*3]=(Math.random()*2-1)*r,n[s*3+1]=(Math.random()*2-1)*r,n[s*3+2]=(Math.random()*2-1)*.15;return n}createVelocitiesForGroup(e){const n=new Float32Array(qi*3);if(this.params.shape!==2)return n;const i=nd.dirFromPad(this.params.planeDir),r=Math.atan2(i.y,i.x);for(let s=0;s<qi;s++){let a;this.params.planeDir===0?a=Math.random()*Math.PI*2:a=r+(Math.random()*2-1)*.25;const o=.8+Math.random()*.6;n[s*3]=Math.cos(a)*o,n[s*3+1]=Math.sin(a)*o,n[s*3+2]=(Math.random()*2-1)*.05}return n}static dirFromPad(e){const i=[[0,0],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]][Math.max(0,Math.min(8,Math.round(e)))],r=Math.hypot(i[0],i[1])||1;return{x:i[0]/r,y:i[1]/r}}update(e,n){var d;if(!this.material||!this.groups.length)return;const{mapped:i}=e;i.low;const r=i.mid,s=i.high,a=i.energy;this.material.size=this.params.baseSize*(.3+a*2);const o=this.params.hue+s*.3;this.material.color.copy(new Be().setHSL(o,.7,.6)),this.material.opacity=this.params.opacity,this.streakMaterial&&(this.streakMaterial.opacity=Math.min(1,.18+a*.55)*this.params.opacity,this.streakMaterial.color.copy(new Be().setHSL(o,.8,.65)));const l=Math.min(Ea,Math.max(1,Math.round(this.params.maxGroups))),u=Math.max(1,Math.floor(1+s*(l-1)));for(let g=0;g<Ea;g++)this.groups[g].visible=g<u;if(this.params.shape===2){const g=(.4+a*2.2)*this.params.rotationSpeed*.55,_=3.8;for(let x=0;x<Ea;x++){if(!((d=this.groups[x])!=null&&d.visible)){this.streakMeshes[x]&&(this.streakMeshes[x].visible=!1);continue}const c=this.geometries[x].getAttribute("position");if(!c)continue;const m=c.array,v=this.velocities[x]??new Float32Array(0),y=this.streakPositions[x];for(let M=0;M<qi;M++){const D=M*3;m[D]+=(v[D]??0)*g*n,m[D+1]+=(v[D+1]??0)*g*n,m[D+2]+=(v[D+2]??0)*g*n,m[D]>_?m[D]=-_:m[D]<-_&&(m[D]=_),m[D+1]>_?m[D+1]=-_:m[D+1]<-_&&(m[D+1]=_);const E=v[D]??0,w=v[D+1]??0,H=v[D+2]??0,X=1/(Math.hypot(E,w,H)+1e-6),ie=E*X,L=w*X,k=H*X,W=-L,V=ie,U=1/(Math.hypot(W,V)+1e-6),z=W*U,O=V*U,te=.35+a*1.1,J=.02+a*.035,j=m[D],ee=m[D+1],le=m[D+2],Ee=j-ie*te,oe=ee-L*te,Ae=le-k*te,I=M*4;pl(y,(I+0)*3,Ee-z*J,oe-O*J,Ae),pl(y,(I+1)*3,Ee+z*J,oe+O*J,Ae),pl(y,(I+2)*3,j-z*J,ee-O*J,le),pl(y,(I+3)*3,j+z*J,ee+O*J,le)}c.needsUpdate=!0,this.groups[x].rotation.set(0,0,0);const T=this.streakGeometries[x].getAttribute("position");T.needsUpdate=!0,this.streakMeshes[x]&&(this.streakMeshes[x].visible=!0)}return}this.streakMeshes.forEach(g=>g.visible=!1);const f=this.params.rotationMode;this.rotationY+=r*this.params.rotationSpeed*.03*60*n,f>=1&&(this.rotationX+=r*this.params.rotationSpeed*.018*60*n),f>=2&&(this.rotationZ+=r*this.params.rotationSpeed*.012*60*n);const h=this.params.shape===1?(1-this.params.tilt)*(Math.PI/2):0;this.groups.forEach(g=>{g.rotation.y=this.rotationY,g.rotation.x=h+(f>=1?this.rotationX:0),g.rotation.z=f>=2?this.rotationZ:0})}setParams(e){const n=e,i=this.params.shape,r=this.params.planeDir;if(typeof n.baseSize=="number"&&(this.params.baseSize=Math.max(.01,Math.min(.16,n.baseSize))),typeof n.rotationSpeed=="number"&&(this.params.rotationSpeed=Math.max(0,Math.min(6,n.rotationSpeed))),typeof n.maxGroups=="number"&&(this.params.maxGroups=Math.max(1,Math.min(20,Math.round(n.maxGroups)))),typeof n.hue=="number"&&(this.params.hue=Math.max(0,Math.min(1,n.hue))),typeof n.opacity=="number"&&(this.params.opacity=Math.max(.2,Math.min(1,n.opacity))),typeof n.shape=="number"&&(this.params.shape=Math.max(0,Math.min(2,Math.round(n.shape)))),typeof n.tilt=="number"&&(this.params.tilt=Math.max(0,Math.min(1,n.tilt))),typeof n.rotationMode=="number"&&(this.params.rotationMode=Math.max(0,Math.min(2,Math.round(n.rotationMode)))),typeof n.planeDir=="number"&&(this.params.planeDir=Math.max(0,Math.min(8,Math.round(n.planeDir)))),this.geometries.length>0&&(this.params.shape!==i||this.params.shape===2&&this.params.planeDir!==r)){for(let a=0;a<this.geometries.length;a++){const l=this.geometries[a].getAttribute("position");if(!l)continue;const u=this.createPositionsForGroup(a);l.array.set(u),l.needsUpdate=!0}this.velocities=[];for(let a=0;a<Ea;a++)this.velocities.push(this.createVelocitiesForGroup(a))}}dispose(){var e,n;this.scene&&(this.groups.forEach(i=>this.scene.remove(i)),this.streakMeshes.forEach(i=>this.scene.remove(i))),this.geometries.forEach(i=>i.dispose()),this.streakGeometries.forEach(i=>i.dispose()),(e=this.material)==null||e.dispose(),(n=this.streakMaterial)==null||n.dispose(),this.groups=[],this.streakMeshes=[],this.geometries=[],this.streakGeometries=[],this.velocities=[],this.streakPositions=[],this.material=null,this.streakMaterial=null,this.scene=null}}function pl(t,e,n,i,r){t[e]=n,t[e+1]=i,t[e+2]=r}const gs=64,aR=1.5,oR=`varying vec2 vUv; varying float vDepth; varying vec2 vNdc;
void main(){
  vUv=uv;
  vDepth=position.z;
  vec4 clip=projectionMatrix*modelViewMatrix*vec4(position,1.0);
  vNdc=clip.xy/clip.w;
  gl_Position=clip;
}`,lR=`uniform float uTime; uniform float uPulse; uniform float uWaveSpeed; uniform vec3 uColor1; uniform vec3 uColor2;
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
}`;class uR{constructor(){Se(this,"scene",null);Se(this,"mesh",null);Se(this,"geometry",null);Se(this,"material",null);Se(this,"texture",null);Se(this,"textureAspect",new Ye(1,1));Se(this,"loader",new GA);Se(this,"params",{imageEnabled:!1,imageMix:.6})}init(e){this.scene=e;const n=[],i=[];for(let o=0;o<=32;o++){const l=-o/32*6,u=aR*(1+l*.1);for(let f=0;f<=gs;f++){const h=f/gs*Math.PI*2;n.push(Math.cos(h)*u,Math.sin(h)*u,l),i.push(f/gs,o/32)}}const r=[];for(let o=0;o<32;o++)for(let l=0;l<gs;l++){const u=o*(gs+1)+l,f=u+gs+1;r.push(u,f,u+1,u+1,f,f+1)}this.geometry=new Nn,this.geometry.setAttribute("position",new ai(n,3)),this.geometry.setAttribute("uv",new ai(i,2)),this.geometry.setIndex(r);const s=new Be().setHSL(.6,.8,.5),a=new Be().setHSL(.75,.8,.6);this.material=new tn({vertexShader:oR,fragmentShader:lR,uniforms:{uTime:{value:0},uPulse:{value:1},uWaveSpeed:{value:1},uColor1:{value:new Y(s.r,s.g,s.b)},uColor2:{value:new Y(a.r,a.g,a.b)},uImage:{value:this.texture??new nn},uUseImage:{value:0},uImageMix:{value:this.params.imageMix},uImageAspect:{value:this.textureAspect},uImageRot:{value:0},uViewAspect:{value:1}},transparent:!0,depthWrite:!1,side:di}),this.mesh=new en(this.geometry,this.material),e.add(this.mesh),this.applyImageParams()}update(e,n){if(!this.material||!this.mesh)return;const{mapped:i}=e;this.material.uniforms.uTime.value+=n,this.material.uniforms.uPulse.value=.5+i.low,this.material.uniforms.uWaveSpeed.value=.5+i.mid;const r=.6+i.high*.2,s=new Be().setHSL(r,.8,.5),a=new Be().setHSL(r+.1,.8,.6);this.material.uniforms.uColor1.value.set(s.r,s.g,s.b),this.material.uniforms.uColor2.value.set(a.r,a.g,a.b),this.mesh.rotation.z+=n*(.2+i.mid*.3),this.material.uniforms.uImageRot.value=this.mesh.rotation.z;const o=e.resolution&&e.resolution.height>0?e.resolution.width/e.resolution.height:1;this.material.uniforms.uViewAspect.value=o}setParams(e){const n=e;typeof n.imageEnabled=="boolean"&&(this.params.imageEnabled=n.imageEnabled),typeof n.imageMix=="number"&&(this.params.imageMix=Math.max(0,Math.min(1,n.imageMix))),this.applyImageParams()}setImage(e){var n;if(!e){(n=this.texture)==null||n.dispose(),this.texture=null,this.material&&(this.material.uniforms.uUseImage.value=0);return}this.loader.load(e,i=>{this.texture&&this.texture!==i&&this.texture.dispose(),this.texture=i,i.colorSpace=Ct,i.wrapS=Bt,i.wrapT=Bt,i.minFilter=qs,i.magFilter=kt,i.generateMipmaps=!0,i.needsUpdate=!0;const r=i.image,s=typeof(r==null?void 0:r.width)=="number"?r.width:1,a=typeof(r==null?void 0:r.height)=="number"?r.height:1;this.textureAspect.set(Math.max(1,s),Math.max(1,a)),this.material&&(this.material.uniforms.uImage.value=i,this.material.uniforms.uImageAspect.value=this.textureAspect,this.applyImageParams())},void 0,()=>{})}applyImageParams(){if(!this.material)return;this.material.uniforms.uImageMix.value=this.params.imageMix;const e=this.params.imageEnabled&&!!this.texture;this.material.uniforms.uUseImage.value=e?1:0,this.texture&&(this.material.uniforms.uImage.value=this.texture,this.material.uniforms.uImageAspect.value=this.textureAspect)}dispose(){var e,n,i;this.scene&&this.mesh&&this.scene.remove(this.mesh),(e=this.geometry)==null||e.dispose(),(n=this.material)==null||n.dispose(),(i=this.texture)==null||i.dispose(),this.texture=null,this.mesh=this.geometry=this.material=null,this.scene=null}}const Tn=128,ml=.08;class cR{constructor(){Se(this,"scene",null);Se(this,"group",null);Se(this,"bars",[]);Se(this,"geometries",[]);Se(this,"material",null);Se(this,"heights",new Float32Array(Tn));Se(this,"bandMeans",new Float32Array(Tn));Se(this,"params",{tilt:0,style:0,radius:.7,barMode:1,heightScale:.7,barWidth:.5});Se(this,"angles",[]);Se(this,"radialDirs",[])}init(e){this.scene=e,this.group=new Ur,this.group.renderOrder=10,this.material=new pi({color:43775,transparent:!0,opacity:1,depthTest:!0});for(let n=0;n<Tn;n++){const i=new Kr(.02,ml,.02);this.geometries.push(i);const r=new en(i,this.material),s=n/Tn*Math.PI*2;this.angles[n]=s,this.radialDirs[n]=new Y(Math.cos(s),0,Math.sin(s)).normalize(),r.position.set(Math.cos(s)*2,ml/2,Math.sin(s)*2),r.rotation.y=-s,this.group.add(r),this.bars.push(r),this.bandMeans[n]=.05}e.add(this.group)}update(e,n){var Ee;if(!this.group)return;const{frequencyData:i,binCount:r,mapped:s}=e,a=r>0?r/Tn:1,o=new Float32Array(Tn);for(let oe=0;oe<Tn;oe++){let Ae=0;const I=Math.floor(oe*a),q=Math.floor((oe+1)*a),F=q-I;if(F>0){for(let ue=I;ue<q;ue++)Ae+=i[ue]??0;o[oe]=Ae/F/255}else o[oe]=0;const P=this.bandMeans[oe],de=.01;this.bandMeans[oe]=P+(o[oe]-P)*de}const l=new Float32Array(Tn),u=.001;for(let oe=0;oe<Tn;oe++){const Ae=Math.max(u,this.bandMeans[oe]);l[oe]=o[oe]/Ae}let f=l[0],h=l[0];for(let oe=1;oe<Tn;oe++){const Ae=l[oe];Ae<f&&(f=Ae),Ae>h&&(h=Ae)}const d=h-f,g=.75,_=d<1e-6;for(let oe=0;oe<Tn;oe++){const Ae=_?0:(l[oe]-f)/d,I=Math.pow(Math.min(1,Ae),g),q=_?.05:I*(.4+s.energy*.6);this.heights[oe]+=(q-this.heights[oe])*.1}const x=.55+s.high*.2;(Ee=this.material)==null||Ee.color.copy(new Be().setHSL(x,.8,.6));const p=.9+s.low*.8,c=.8+s.energy*3,m=this.params.heightScale,v=this.params.barMode>=.5,y=this.params.radius,A=this.params.barWidth,T=.008,D=T+(.18-T)*A,E=5,w=60*Math.PI/180,H=E*Math.tan(w/2),X=e.resolution&&e.resolution.height>0?e.resolution.width/e.resolution.height:1,ie=H*X,L=H*.95,k=2,W=k*y,V=Math.max(.2,ie*.95-W),U=L*m,z=V*m,O=Math.PI*2/Tn,te=W*O,J=Math.max(0,te*.7),j=Math.min(D,J||D);for(let oe=0;oe<Tn;oe++){const Ae=this.heights[oe]*1.3*c*p,I=Math.min(1,Ae),q=I*I;let F=Math.max(.04,q);const P=this.bars[oe];if(P)if(P.scale.x=j/.02,P.scale.z=j/.02,v){F=Math.min(z,q*z);const de=this.radialDirs[oe],ce=de.clone().multiplyScalar(k).clone().addScaledVector(de,F/2);P.position.copy(ce),P.scale.y=F/ml}else F=Math.min(U,q*U),P.scale.y=F/ml,P.position.y=F/2}const ee=(1-this.params.tilt)*(Math.PI/2);this.group.rotation.x=ee,this.group.scale.set(y,y,y);const le=this.params.style>=.5;this.material&&(this.material.blending=le?Rn:Or),this.group.rotation.y=0}setParams(e){const n=e;typeof n.tilt=="number"&&(this.params.tilt=Math.max(0,Math.min(1,n.tilt))),typeof n.style=="number"&&(this.params.style=Math.max(0,Math.min(1,n.style))),typeof n.radius=="number"&&(this.params.radius=Math.max(.3,Math.min(2,n.radius))),typeof n.barMode=="number"&&(this.params.barMode=Math.max(0,Math.min(1,n.barMode))),typeof n.heightScale=="number"&&(this.params.heightScale=Math.max(.2,Math.min(1,n.heightScale))),typeof n.barWidth=="number"&&(this.params.barWidth=Math.max(0,Math.min(1,n.barWidth)))}dispose(){var e;this.scene&&this.group&&this.scene.remove(this.group),this.geometries.forEach(n=>n.dispose()),this.geometries=[],(e=this.material)==null||e.dispose(),this.bars=[],this.group=null,this.material=null,this.scene=null}}const fR=.02;class hR{constructor(){Se(this,"scene",null);Se(this,"group",null);Se(this,"bars",null);Se(this,"barsRef",null);Se(this,"barsGlow",null);Se(this,"barsRefGlow",null);Se(this,"mat",null);Se(this,"matRef",null);Se(this,"matGlow",null);Se(this,"matRefGlow",null);Se(this,"glow",null);Se(this,"glowMat",null);Se(this,"barGeo",null);Se(this,"glowGeo",null);Se(this,"barCount",128);Se(this,"heights",new Float32Array(128));Se(this,"params",{barCount:128,length:.95,color:"#4fc3ff",showReflection:!0,showBaseline:!0,flipX:!1,flipY:!1,hue:.55,saturation:.85,lightness:.65,opacity:.95,heightScale:1,reflection:.65,glow:.9,glowSize:.9,gap:.25,smoothing:.18})}init(e){this.scene=e,this.group=new Ur,this.group.renderOrder=50,this.barGeo=new Kr(1,1,1),this.mat=new pi({color:16777215,transparent:!0,opacity:this.params.opacity,depthWrite:!1,blending:Rn}),this.matRef=new pi({color:16777215,transparent:!0,opacity:this.params.opacity*this.params.reflection,depthWrite:!1,blending:Rn}),this.matGlow=new pi({color:16777215,transparent:!0,opacity:.4,depthWrite:!1,blending:Rn}),this.matRefGlow=new pi({color:16777215,transparent:!0,opacity:.2,depthWrite:!1,blending:Rn}),this.rebuildBars(this.barCount);const n=this.createGlowTexture();this.glowMat=new pi({map:n,transparent:!0,opacity:.8,depthWrite:!1,blending:Rn}),this.glowGeo=new po(1,1),this.glow=new en(this.glowGeo,this.glowMat),this.glow.frustumCulled=!1,this.glow.renderOrder=49,this.group.add(this.glow),e.add(this.group)}update(e,n){if(!this.group||!this.bars||!this.barsRef||!this.barsGlow||!this.barsRefGlow||!this.mat||!this.matRef||!this.matGlow||!this.matRefGlow||!this.glow)return;const{frequencyData:i,binCount:r,mapped:s}=e,a=this.barCount,o=r>0?r/a:1,l=5,u=60*Math.PI/180,f=l*Math.tan(u/2),h=e.resolution&&e.resolution.height>0?e.resolution.width/e.resolution.height:1,d=f*h,g=f*.9*this.params.heightScale,_=d*2*this.params.length,x=_/a,p=Math.max(.004,x*(1-this.params.gap)),c=Math.max(.002,Math.min(.08,fR*(.6+p*6))),m=0,v=this.params.showReflection,y=this.params.showBaseline;this.barsRef.visible=v,this.barsRefGlow.visible=v,this.glow.visible=y,this.group.scale.x=this.params.flipX?-1:1,this.group.scale.y=this.params.flipY?-1:1;const A=dR(this.params.color)??new Be().setHSL(this.params.hue,this.params.saturation,this.params.lightness);this.mat.color.copy(A),this.mat.opacity=this.params.opacity,this.matRef.color.copy(A),this.matRef.opacity=v?this.params.opacity*this.params.reflection:0,this.matGlow.color.copy(A),this.matGlow.opacity=this.params.opacity*.5*this.params.glow,this.matRefGlow.color.copy(A),this.matRefGlow.opacity=v?this.params.opacity*this.params.reflection*.35*this.params.glow:0,this.glowMat.color.copy(A),this.glowMat.opacity=y?.35+s.energy*.6:0,this.glow.position.set(0,m,0),this.glow.scale.set(_,Math.max(.06,g*.12),1);let T=1,M=0;const D=new Float32Array(a);for(let V=0;V<a;V++){let U=0;const z=Math.floor(V*o),O=Math.floor((V+1)*o),te=O-z;if(te>0){for(let J=z;J<O;J++)U+=i[J]??0;D[V]=U/te/255}else D[V]=0;D[V]<T&&(T=D[V]),D[V]>M&&(M=D[V])}const E=Math.max(1e-6,M-T),w=new ht,H=new ht,X=new ht,ie=new ht,L=new ia,k=new Y,W=new Y;for(let V=0;V<a;V++){const U=(D[V]-T)/E,O=Math.pow(Math.min(1,U),.75)*(.2+s.energy*1.2),te=this.params.smoothing;this.heights[V]+=(O-this.heights[V])*te;const J=Math.max(.01,this.heights[V]*g),j=-_/2+(V+.5)*x;k.set(j,m+J/2,0),W.set(p,J,c),w.compose(k,L,W),this.bars.setMatrixAt(V,w);const ee=J*(.65+this.params.reflection*.35);k.set(j,m-ee/2,0),W.set(p,ee,c),H.compose(k,L,W),this.barsRef.setMatrixAt(V,H);const le=1+this.params.glowSize*.9;k.set(j,m+J/2,0),W.set(p*le,J*le,c*(1.2+this.params.glowSize)),X.compose(k,L,W),this.barsGlow.setMatrixAt(V,X),k.set(j,m-ee/2,0),W.set(p*le,ee*le,c*(1.2+this.params.glowSize)),ie.compose(k,L,W),this.barsRefGlow.setMatrixAt(V,ie)}this.bars.instanceMatrix.needsUpdate=!0,this.barsRef.instanceMatrix.needsUpdate=!0,this.barsGlow.instanceMatrix.needsUpdate=!0,this.barsRefGlow.instanceMatrix.needsUpdate=!0}setParams(e){const n=e;if(typeof n.barCount=="number"){const i=Math.max(16,Math.min(512,Math.round(n.barCount)));i!==this.barCount&&(this.barCount=i,this.params.barCount=i,this.heights=new Float32Array(i),this.group&&this.rebuildBars(i))}typeof n.length=="number"&&(this.params.length=Math.max(.5,Math.min(2,n.length))),typeof n.color=="string"&&(this.params.color=n.color),typeof n.showReflection=="boolean"&&(this.params.showReflection=n.showReflection),typeof n.showBaseline=="boolean"&&(this.params.showBaseline=n.showBaseline),typeof n.flipX=="boolean"&&(this.params.flipX=n.flipX),typeof n.flipY=="boolean"&&(this.params.flipY=n.flipY),typeof n.hue=="number"&&(this.params.hue=Math.max(0,Math.min(1,n.hue))),typeof n.saturation=="number"&&(this.params.saturation=Math.max(0,Math.min(1,n.saturation))),typeof n.lightness=="number"&&(this.params.lightness=Math.max(0,Math.min(1,n.lightness))),typeof n.opacity=="number"&&(this.params.opacity=Math.max(.05,Math.min(1,n.opacity))),typeof n.heightScale=="number"&&(this.params.heightScale=Math.max(.2,Math.min(1.5,n.heightScale))),typeof n.reflection=="number"&&(this.params.reflection=Math.max(0,Math.min(1,n.reflection))),typeof n.glow=="number"&&(this.params.glow=Math.max(0,Math.min(2,n.glow))),typeof n.glowSize=="number"&&(this.params.glowSize=Math.max(0,Math.min(2,n.glowSize))),typeof n.gap=="number"&&(this.params.gap=Math.max(0,Math.min(.8,n.gap))),typeof n.smoothing=="number"&&(this.params.smoothing=Math.max(.02,Math.min(.6,n.smoothing)))}dispose(){var e,n,i,r,s,a,o,l,u;this.scene&&this.group&&this.scene.remove(this.group),(e=this.barGeo)==null||e.dispose(),(n=this.mat)==null||n.dispose(),(i=this.matRef)==null||i.dispose(),(r=this.matGlow)==null||r.dispose(),(s=this.matRefGlow)==null||s.dispose(),(a=this.glowGeo)==null||a.dispose(),(l=(o=this.glowMat)==null?void 0:o.map)==null||l.dispose(),(u=this.glowMat)==null||u.dispose(),this.group=null,this.bars=null,this.barsRef=null,this.barsGlow=null,this.barsRefGlow=null,this.mat=null,this.matRef=null,this.matGlow=null,this.matRefGlow=null,this.glow=null,this.glowMat=null,this.barGeo=null,this.glowGeo=null,this.scene=null}rebuildBars(e){!this.group||!this.barGeo||!this.mat||!this.matRef||(this.bars&&this.group.remove(this.bars),this.barsRef&&this.group.remove(this.barsRef),this.barsGlow&&this.group.remove(this.barsGlow),this.barsRefGlow&&this.group.remove(this.barsRefGlow),this.bars=new fl(this.barGeo,this.mat,e),this.barsRef=new fl(this.barGeo,this.matRef,e),this.barsGlow=new fl(this.barGeo,this.matGlow,e),this.barsRefGlow=new fl(this.barGeo,this.matRefGlow,e),this.bars.frustumCulled=!1,this.barsRef.frustumCulled=!1,this.barsGlow.frustumCulled=!1,this.barsRefGlow.frustumCulled=!1,this.group.add(this.bars),this.group.add(this.barsRef),this.group.add(this.barsGlow),this.group.add(this.barsRefGlow))}createGlowTexture(){const i=document.createElement("canvas");i.width=256,i.height=64;const r=i.getContext("2d");if(!r)return new Qs(i);r.clearRect(0,0,256,64);const s=r.createLinearGradient(0,64/2,0,64);s.addColorStop(0,"rgba(255,255,255,0.9)"),s.addColorStop(.4,"rgba(255,255,255,0.35)"),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,256,64);const a=new Qs(i);return a.needsUpdate=!0,a.wrapS=Bt,a.wrapT=Bt,a.minFilter=kt,a.magFilter=kt,a}}function dR(t){const e=t.trim();if(!e)return null;const n=new Be;try{return n.set(e),n}catch{return null}}const pR=new po(2,2),mR=`varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,gR=`
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
`;class vR{constructor(){Se(this,"scene",null);Se(this,"mesh",null);Se(this,"material",null);Se(this,"params",{color:"#3fd2ff",opacity:.95,intensity:1.1,radius:.62,thickness:.08,noise:1,speed:.9})}init(e){this.scene=e,this.material=new tn({vertexShader:mR,fragmentShader:gR,uniforms:{uResolution:{value:new Ye(1,1)},uTime:{value:0},uEnergy:{value:.4},uColor:{value:new Y(.25,.8,1)},uOpacity:{value:this.params.opacity},uIntensity:{value:this.params.intensity},uRadius:{value:this.params.radius},uThickness:{value:this.params.thickness},uNoise:{value:this.params.noise},uSpeed:{value:this.params.speed}},transparent:!0,depthWrite:!1,depthTest:!1,blending:Rn}),this.mesh=new en(pR,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,e.add(this.mesh),this.applyParams()}update(e,n){var i,r;this.material&&(this.material.uniforms.uTime.value+=n,this.material.uniforms.uEnergy.value=e.mapped.energy,this.material.uniforms.uResolution.value.set(((i=e.resolution)==null?void 0:i.width)??1,((r=e.resolution)==null?void 0:r.height)??1))}setParams(e){const n=e;typeof n.color=="string"&&(this.params.color=n.color),typeof n.opacity=="number"&&(this.params.opacity=Math.max(.05,Math.min(1,n.opacity))),typeof n.intensity=="number"&&(this.params.intensity=Math.max(.1,Math.min(3,n.intensity))),typeof n.radius=="number"&&(this.params.radius=Math.max(.1,Math.min(1.2,n.radius))),typeof n.thickness=="number"&&(this.params.thickness=Math.max(.01,Math.min(.4,n.thickness))),typeof n.noise=="number"&&(this.params.noise=Math.max(0,Math.min(2,n.noise))),typeof n.speed=="number"&&(this.params.speed=Math.max(0,Math.min(2,n.speed))),this.applyParams()}dispose(){var e;this.scene&&this.mesh&&this.scene.remove(this.mesh),(e=this.material)==null||e.dispose(),this.mesh=null,this.material=null,this.scene=null}applyParams(){if(!this.material)return;const e=new Be;try{e.set(this.params.color)}catch{e.set("#3fd2ff")}this.material.uniforms.uColor.value.set(e.r,e.g,e.b),this.material.uniforms.uOpacity.value=this.params.opacity,this.material.uniforms.uIntensity.value=this.params.intensity,this.material.uniforms.uRadius.value=this.params.radius,this.material.uniforms.uThickness.value=this.params.thickness,this.material.uniforms.uNoise.value=this.params.noise,this.material.uniforms.uSpeed.value=this.params.speed}}const _R=`
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
`,xR=`
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
`;class yR{constructor(){Se(this,"scene",null);Se(this,"points",null);Se(this,"geo",null);Se(this,"mat",null);Se(this,"group",null);Se(this,"t",0);Se(this,"params",{color:"#ff2b2b",opacity:.95,pointSize:.018,grid:18,spacing:.22,k:2.8,theta:.08,phi:.52,omega:2.2,sharpness:4.2,amp:1,rotateSpeed:.18,reactOmega:.9,reactPointSize:.9,reactSharpness:.35,reactK:.35,reactRotate:.65})}init(e){this.scene=e,this.t=0,this.group=new Ur,this.group.renderOrder=20,e.add(this.group),this.build(),this.applyParams()}update(e,n){if(!this.mat||!this.group)return;this.t+=n,this.mat.uniforms.uTime.value=this.t;const i=e.mapped.energy;this.mat.uniforms.uEnergy.value=i;const r=this.params.omega*(1+i*this.params.reactOmega),s=this.params.pointSize*(1+i*this.params.reactPointSize),a=this.params.sharpness*(1+i*this.params.reactSharpness),o=this.params.k*(1+i*this.params.reactK),l=this.computeDir();this.mat.uniforms.uK.value.copy(l.multiplyScalar(o)),this.mat.uniforms.uOmega.value=It(r,0,8),this.mat.uniforms.uPointSize.value=It(s,.004,.06),this.mat.uniforms.uSharpness.value=It(a,1,10);const u=this.params.rotateSpeed*(.35+e.mapped.mid*1.2)*(1+i*this.params.reactRotate);this.group.rotation.y+=u*n,this.group.rotation.x+=u*.35*n}setParams(e){const n=e,i=this.params.grid,r=this.params.spacing;typeof n.color=="string"&&(this.params.color=n.color),typeof n.opacity=="number"&&(this.params.opacity=It(n.opacity,.05,1)),typeof n.pointSize=="number"&&(this.params.pointSize=It(n.pointSize,.004,.06)),typeof n.grid=="number"&&(this.params.grid=Math.max(6,Math.min(40,Math.round(n.grid)))),typeof n.spacing=="number"&&(this.params.spacing=It(n.spacing,.08,.55)),typeof n.k=="number"&&(this.params.k=It(n.k,.2,10)),typeof n.theta=="number"&&(this.params.theta=It(n.theta,0,1)),typeof n.phi=="number"&&(this.params.phi=It(n.phi,0,1)),typeof n.omega=="number"&&(this.params.omega=It(n.omega,0,8)),typeof n.sharpness=="number"&&(this.params.sharpness=It(n.sharpness,1,10)),typeof n.amp=="number"&&(this.params.amp=It(n.amp,0,2)),typeof n.rotateSpeed=="number"&&(this.params.rotateSpeed=It(n.rotateSpeed,0,1.2)),typeof n.reactOmega=="number"&&(this.params.reactOmega=It(n.reactOmega,0,2)),typeof n.reactPointSize=="number"&&(this.params.reactPointSize=It(n.reactPointSize,0,2)),typeof n.reactSharpness=="number"&&(this.params.reactSharpness=It(n.reactSharpness,0,2)),typeof n.reactK=="number"&&(this.params.reactK=It(n.reactK,0,2)),typeof n.reactRotate=="number"&&(this.params.reactRotate=It(n.reactRotate,0,2)),!!this.geo&&(this.params.grid!==i||this.params.spacing!==r)&&this.build(),this.applyParams()}dispose(){var e,n;this.scene&&this.group&&this.scene.remove(this.group),this.group&&this.points&&this.group.remove(this.points),(e=this.geo)==null||e.dispose(),(n=this.mat)==null||n.dispose(),this.points=null,this.geo=null,this.mat=null,this.group=null,this.scene=null}build(){var u;if(!this.group)return;this.points&&this.group.remove(this.points),(u=this.geo)==null||u.dispose();const e=this.params.grid,n=this.params.spacing,i=(e-1)*.5*n,r=e*e*e,s=new Float32Array(r*3);let a=0;for(let f=0;f<e;f++)for(let h=0;h<e;h++)for(let d=0;d<e;d++)s[a++]=d*n-i,s[a++]=h*n-i,s[a++]=f*n-i;const o=new Nn;o.setAttribute("position",new Jt(s,3)),o.computeBoundingSphere(),this.geo=o,this.mat||(this.mat=new tn({vertexShader:_R,fragmentShader:xR,uniforms:{uTime:{value:0},uEnergy:{value:.4},uK:{value:new Y(1,0,0)},uOmega:{value:this.params.omega},uAmp:{value:this.params.amp},uSharpness:{value:this.params.sharpness},uPointSize:{value:this.params.pointSize},uColor:{value:new Be(16722731)},uOpacity:{value:this.params.opacity}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Rn}));const l=new y_(o,this.mat);l.frustumCulled=!1,this.points=l,this.group.add(l),this.group.scale.setScalar(1),this.group.position.set(0,0,0),this.group.rotation.set(.15,.55,0)}applyParams(){if(!this.mat)return;const e=new Be;try{e.set(this.params.color)}catch{e.set("#ff2b2b")}const n=this.computeDir();this.mat.uniforms.uK.value.copy(n.multiplyScalar(this.params.k)),this.mat.uniforms.uOmega.value=this.params.omega,this.mat.uniforms.uAmp.value=this.params.amp,this.mat.uniforms.uSharpness.value=this.params.sharpness,this.mat.uniforms.uPointSize.value=this.params.pointSize,this.mat.uniforms.uColor.value.copy(e),this.mat.uniforms.uOpacity.value=this.params.opacity}computeDir(){const e=this.params.theta*Math.PI*2,n=(this.params.phi*2-1)*(Math.PI/2)*.85;return new Y(Math.cos(e)*Math.cos(n),Math.sin(n),Math.sin(e)*Math.cos(n)).normalize()}}function It(t,e,n){return Math.max(e,Math.min(n,t))}function SR({audioFile:t,isPlaying:e,onProgressUpdate:n,onSeekRef:i,onExportRef:r,activeImageUrl:s,backgroundVideoUrl:a,backgroundVideoFit:o,layers:l,activeLayerId:u,onLayerRectChange:f,audioMapping:h,canvasConfig:d}){const{setLayerParam:g,setActiveLayer:_}=co(),x=Z.useRef(null),p=Z.useRef(null),c=Z.useRef(null),[m,v]=Z.useState({w:800,h:600}),[y,A]=Z.useState({w:800,h:600}),T=Z.useRef(y);T.current=y;const[M,D]=Z.useState({}),[E,w]=Z.useState(!0),H=Z.useRef({}),X=Z.useRef(null),ie=Z.useRef(h);ie.current=h;const L=Z.useRef(null),k=Z.useRef(null),W=Z.useRef(!0),V=Z.useRef(new Map),U=Z.useMemo(()=>l.filter(I=>I.visible),[l]),z=Z.useRef(U);z.current=U;const O=Z.useMemo(()=>({w:Math.max(1,d.width),h:Math.max(1,d.height)}),[d.height,d.width]),te=Z.useRef(O);te.current=O;const J=Z.useCallback(I=>{switch(I){case"particles":return new nd;case"tunnel":return new uR;case"spectrum":return new cR;case"equalizer":return new hR;case"energyField":return new vR;case"planeWaveLattice":return new yR;default:throw new Error(`Unknown effect id: ${I}`)}},[]),j=Z.useCallback((I,q=!1)=>{const F=c.current;if(!F||!F.src)return;const P=Number.isFinite(F.duration)&&F.duration>0?F.duration:0;let de=P>0?I%P:I;P>0&&de>P-.05&&(de=P-.05);const ue=Number.isFinite(F.currentTime)?F.currentTime:0,ce=Math.abs(ue-de);if(q||ce>.12)try{F.currentTime=Math.max(0,de)}catch{}},[]);Z.useEffect(()=>{const I=q=>{const F=p.current;if(!F)return;const P=q.target,de=!!P&&F.contains(P);w(de)};return window.addEventListener("pointerdown",I,!0),()=>window.removeEventListener("pointerdown",I,!0)},[]),Z.useEffect(()=>{u&&w(!0)},[u]),Z.useEffect(()=>{const I=p.current;if(!I)return;const q=document.createElement("canvas");q.style.position="absolute",q.style.inset="0",q.style.width="100%",q.style.height="100%",q.style.display="block",q.style.pointerEvents="none",q.style.zIndex="1",I.appendChild(q);const F=Math.max(I.clientWidth||800,1),P=Math.max(I.clientHeight||600,1);q.width=F,q.height=P;const de=new jA,ue=new nR,ce=new eR({canvas:q,transparent:!0,bloom:!1,fxaa:!1,preserveDrawingBuffer:!0,pixelRatio:Math.min(1.5,window.devicePixelRatio||1)});ce.renderer.autoClear=!1,L.current={audio:de,mapping:ue,visual:ce,canvas:q};let pe,He=0;const we=S=>{var Ie;const B=L.current;if(!B)return;const{mapping:se,visual:ae}=B,re=ie.current,ve=z.current,me=S.stageW,xe=S.stageH;se.setConfig({lowScale:re.sensitivity,midScale:re.sensitivity,highScale:re.sensitivity,minFloor:re.min,maxCeiling:re.max});const Ce=se.map(S.bands),Ue=re.enabled?Ce:{low:.3,mid:.3,high:.3,energy:.3},ne=ae.renderer,ze=ae.camera;ne.setScissorTest(!1),ne.setViewport(0,0,me,xe),ne.setClearColor(0,0),ne.clear(!0,!0,!0);const We=V.current;for(let Re=0;Re<ve.length;Re++){const Me=ve[Re],Ne=We.get(Me.id);if(!Ne)continue;const Ge=H.current[Me.id]??Me.rect,at=Ge.x*me,je=Ge.y*xe,ge=Math.max(1,Ge.w*me),N=Math.max(1,Ge.h*xe),fe=xe-je-N,_e=Math.max(0,at),Pe=Math.max(0,fe),Le=Math.min(me,at+ge)-_e,Qe=Math.min(xe,fe+N)-Pe;if(Le<=0||Qe<=0)continue;ne.setScissorTest(!0),ne.setViewport(at,fe,ge,N),ne.setScissor(_e,Pe,Le,Qe),ne.clearDepth(),ze.aspect=ge/N;const Fe=(Ie=Me.params)==null?void 0:Ie.viewRotation,nt=typeof Fe=="number"?Fe:0;ze.rotation.set(0,0,nt),ze.updateProjectionMatrix(),ze.updateMatrixWorld();const lt=Math.max(1,S.vstageW*Ge.w),it=Math.max(1,S.vstageH*Ge.h),bt={mapped:Ue,frequencyData:S.frequencyData,binCount:S.frequencyData.length,resolution:{width:lt,height:it}};Ne.effectManager.update(bt,S.dt),ne.render(Ne.scene,ze)}ne.setScissorTest(!1),ze.rotation.set(0,0,0),ze.updateMatrixWorld()},b=()=>{const S=L.current;if(!S||!W.current)return;const{audio:B}=S,se=ie.current,ae=T.current,re=te.current;B.setSmoothingFactor(se.smoothing);const ve=B.getFrequencyBands(),me=B.getFrequencyData();if(we({stageW:ae.w,stageH:ae.h,vstageW:re.w,vstageH:re.h,bands:ve,frequencyData:me,dt:1/60}),c.current&&a&&e){const Ce=performance.now();Ce-He>250&&(j(B.currentTime,!1),He=Ce)}pe=requestAnimationFrame(b),k.current=pe};return pe=requestAnimationFrame(b),k.current=pe,r.current={beginExport:({width:S,height:B,pixelRatio:se})=>{const ae=L.current;if(!ae)return()=>{};const{canvas:re,visual:ve}=ae,me=W.current;W.current=!1,k.current!=null&&cancelAnimationFrame(k.current);const xe={w:re.width,h:re.height,pr:ve.renderer.getPixelRatio()},Ce=typeof se=="number"&&Number.isFinite(se)?se:xe.pr;return ve.renderer.setPixelRatio(Ce),re.width=Math.max(1,Math.floor(S)),re.height=Math.max(1,Math.floor(B)),ve.resize(re.width,re.height),()=>{try{ve.renderer.setPixelRatio(xe.pr),re.width=xe.w,re.height=xe.h,ve.resize(xe.w,xe.h)}finally{W.current=me,me&&(k.current=requestAnimationFrame(b))}}},renderExportFrame:({width:S,height:B,virtualWidth:se,virtualHeight:ae,bands:re,frequencyData:ve,dt:me})=>{we({stageW:S,stageH:B,vstageW:se,vstageH:ae,bands:re,frequencyData:ve,dt:me})},getCanvas:()=>{var S;return((S=L.current)==null?void 0:S.canvas)??q}},()=>{cancelAnimationFrame(pe),r.current&&(r.current=null);for(const[,S]of V.current)S.effectManager.dispose();V.current.clear(),ce.dispose(),de.dispose(),L.current=null,I.removeChild(q)}},[]),Z.useEffect(()=>{const I=L.current;if(!I)return;const{canvas:q,visual:F}=I;q.width=Math.max(1,Math.floor(y.w)),q.height=Math.max(1,Math.floor(y.h)),F.resize(q.width,q.height)},[y.h,y.w]),Z.useEffect(()=>{const I=L.current;if(!I)return;(async()=>{if(t){await I.audio.loadFile(t);const F=c.current;if(F)try{F.pause(),F.currentTime=0}catch{}}})()},[t]),Z.useEffect(()=>{var q,F;const I=L.current;I&&(e?(I.audio.play(),j(I.audio.currentTime,!0),(q=c.current)==null||q.play().catch(()=>{})):(I.audio.pause(),(F=c.current)==null||F.pause()))},[e,j]),Z.useEffect(()=>{var P;const I=L.current,q=c.current;if(!q)return;const F=((P=I==null?void 0:I.audio)==null?void 0:P.currentTime)??0;j(F,!0),e?q.play().catch(()=>{}):q.pause()},[a,e,j]),Z.useEffect(()=>{var P;const I=(P=x.current)==null?void 0:P.parentElement;if(!I)return;const q=()=>v({w:Math.max(1,I.clientWidth),h:Math.max(1,I.clientHeight)}),F=new ResizeObserver(q);return F.observe(I),q(),()=>F.disconnect()},[]),Z.useEffect(()=>{const I=p.current;if(!I)return;const q=new ResizeObserver(()=>{const P=I.getBoundingClientRect();A({w:Math.max(1,P.width),h:Math.max(1,P.height)})});q.observe(I);const F=I.getBoundingClientRect();return A({w:Math.max(1,F.width),h:Math.max(1,F.height)}),()=>q.disconnect()},[]);const ee=Z.useCallback(I=>{const ue=Math.max(.05,Math.min(4,I.w)),ce=Math.max(.05,Math.min(4,I.h)),pe=.03,He=-ue+pe,we=1-pe,b=-ce+pe,S=1-pe,B=Math.max(He,Math.min(we,I.x)),se=Math.max(b,Math.min(S,I.y));return{x:B,y:se,w:ue,h:ce}},[]),le=Z.useCallback((I,q)=>{D(F=>{const P={...F};return q?P[I]=q:delete P[I],H.current=P,P})},[]),Ee=Z.useCallback(I=>H.current[I.id]??I.rect,[]);Z.useEffect(()=>{var F,P;const I=V.current,q=new Set(U.map(de=>de.id));for(const[de,ue]of I)q.has(de)||(ue.effectManager.dispose(),I.delete(de));for(const de of U){const ue=I.get(de.id);if(!ue||ue.effectId!==de.effectId){ue&&ue.effectManager.dispose();const pe=new __,He=new iR,we=J(de.effectId);if(we.setParams(de.params),"setImage"in we&&typeof we.setImage=="function"){const b=(F=de.params)==null?void 0:F.imageUrl;we.setImage(typeof b=="string"&&b.length?b:null)}He.setEffects([we],pe),I.set(de.id,{scene:pe,effectManager:He,effect:we,effectId:de.effectId})}else if(ue.effect.setParams(de.params),"setImage"in ue.effect&&typeof ue.effect.setImage=="function"){const pe=(P=de.params)==null?void 0:P.imageUrl;ue.effect.setImage(typeof pe=="string"&&pe.length?pe:null)}const ce=I.get(de.id);if(ce){const pe=de.rect,He=Math.max(1,O.w*pe.w),we=Math.max(1,O.h*pe.h);for(const b of ce.effectManager.getEffects())"setResolution"in b&&b.setResolution(He,we)}}},[J,O.h,O.w,U]),Z.useEffect(()=>{const I=L.current;if(!I)return;const q=setInterval(()=>{n(I.audio.currentTime,I.audio.duration)},100);return()=>clearInterval(q)},[n]),Z.useEffect(()=>{const I=L.current;if(I)return i.current=q=>{var F;I.audio.currentTime=q,j(q,!0),e&&((F=c.current)==null||F.play().catch(()=>{}))},()=>{i.current=()=>{}}},[e,i,j]);const oe=Z.useMemo(()=>{const I=Math.max(1,d.width),q=Math.max(1,d.height),F=I/q,P=m;let de=P.w,ue=de/F;return ue>P.h&&(ue=P.h,de=ue*F),{w:Math.max(1,Math.floor(de)),h:Math.max(1,Math.floor(ue))}},[d.width,d.height,m]),Ae=Z.useCallback((I,q)=>{f(I,q),le(I,null)},[f,le]);return C.jsx("div",{ref:x,className:"canvas-container",style:{width:oe.w,height:oe.h},children:C.jsxs("div",{ref:p,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:10,border:"1px solid var(--border)",backgroundColor:"transparent",backgroundImage:"linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%),linear-gradient(-45deg, rgba(255,255,255,0.06) 25%, transparent 25%),linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.06) 75%),linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.06) 75%)",backgroundSize:"16px 16px",backgroundPosition:"0 0, 0 8px, 8px -8px, -8px 0px"},children:[a?C.jsx("video",{ref:c,src:a,muted:!0,playsInline:!0,preload:"auto",onCanPlay:I=>{var de;const q=I.currentTarget,F=L.current,P=((de=F==null?void 0:F.audio)==null?void 0:de.currentTime)??0;j(P,!0),e?q.play().catch(()=>{}):q.pause()},style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:o,pointerEvents:"none",zIndex:0,transform:"translateZ(0)",backfaceVisibility:"hidden"}}):null,s?C.jsx("img",{src:s,alt:"",draggable:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.35,pointerEvents:"none",zIndex:0}}):null,U.map((I,q)=>{const F=Ee(I),P=E&&I.id===u,de=F.x*y.w,ue=F.y*y.h,ce=F.w*y.w,pe=F.h*y.h;return C.jsx(DM,{position:{x:de,y:ue},size:{width:ce,height:pe},enableResizing:{top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1},resizeHandleStyles:{bottomRight:{width:14,height:14,right:0,bottom:0,background:P?"rgba(58, 143, 255, 0.9)":"rgba(255,255,255,0.15)",borderRadius:2}},style:{zIndex:10+q,border:P?"1px solid var(--accent)":"1px solid transparent",boxSizing:"border-box"},onMouseDown:()=>{_(I.id),w(!0)},onDragStart:()=>{_(I.id),w(!0),X.current=I.id,le(I.id,I.rect)},onDrag:(He,we)=>{const b=H.current[I.id]??I.rect,S=ee({...b,x:we.x/y.w,y:we.y/y.h});le(I.id,S)},onDragStop:(He,we)=>{const b=H.current[I.id]??I.rect,S=ee({...b,x:we.x/y.w,y:we.y/y.h});X.current=null,Ae(I.id,S)},onResizeStart:()=>{_(I.id),w(!0),X.current=I.id,le(I.id,I.rect)},onResize:(He,we,b,S,B)=>{const se=ee({x:B.x/y.w,y:B.y/y.h,w:b.offsetWidth/y.w,h:b.offsetHeight/y.h});le(I.id,se)},onResizeStop:(He,we,b,S,B)=>{const se=ee({x:B.x/y.w,y:B.y/y.h,w:b.offsetWidth/y.w,h:b.offsetHeight/y.h});X.current=null,Ae(I.id,se)},children:C.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:C.jsx("button",{type:"button",className:"top-bar-btn",onClick:He=>{var B;He.stopPropagation();const we=(B=I.params)==null?void 0:B.viewRotation,S=(typeof we=="number"?we:0)+Math.PI/2;g(I.id,"viewRotation",S)},style:{position:"absolute",top:6,right:6,padding:"2px 6px",fontSize:12,lineHeight:1.2,opacity:.9},title:"Rotate 90°",children:"⟳"})})},I.id)})]})})}function MR({open:t,exporting:e,progress:n,message:i,defaultSize:r,onCancel:s,onConfirm:a}){const o=Z.useMemo(()=>[{label:`当前画布（${r.width}×${r.height}）`,w:r.width,h:r.height},{label:"1280×720 (720p)",w:1280,h:720},{label:"1920×1080 (1080p)",w:1920,h:1080},{label:"1080×1920 (竖屏)",w:1080,h:1920},{label:"3840×2160 (4K)",w:3840,h:2160}],[r.height,r.width]),[l,u]=Z.useState("preset"),[f,h]=Z.useState(0),[d,g]=Z.useState(r.width),[_,x]=Z.useState(r.height),[p,c]=Z.useState("libx264"),[m,v]=Z.useState("veryfast"),[y,A]=Z.useState(20);if(Z.useEffect(()=>{t&&(u("preset"),h(0),g(r.width),x(r.height),c("libx264"),v("veryfast"),A(20))},[r.height,r.width,t]),!t)return null;const T=l==="preset"?{width:o[Math.max(0,Math.min(o.length-1,f))].w,height:o[Math.max(0,Math.min(o.length-1,f))].h}:{width:Math.max(16,Math.floor(d)),height:Math.max(16,Math.floor(_))};return C.jsx("div",{className:"sw-modal-overlay",role:"dialog","aria-modal":"true",children:C.jsxs("div",{className:"sw-modal",children:[C.jsx("div",{className:"sw-modal-title",children:"导出视频（离线渲染）"}),C.jsxs("div",{className:"sw-modal-section",children:[C.jsx("div",{className:"sw-modal-row",children:C.jsxs("label",{className:"sw-radio",children:[C.jsx("input",{type:"radio",checked:l==="preset",onChange:()=>u("preset"),disabled:e}),"预设尺寸"]})}),C.jsx("select",{className:"sw-input",value:f,onChange:M=>h(Number(M.target.value)),disabled:e||l!=="preset",children:o.map((M,D)=>C.jsx("option",{value:D,children:M.label},M.label))})]}),C.jsxs("div",{className:"sw-modal-section",children:[C.jsx("div",{className:"sw-modal-row",children:C.jsxs("label",{className:"sw-radio",children:[C.jsx("input",{type:"radio",checked:l==="custom",onChange:()=>u("custom"),disabled:e}),"自定义尺寸"]})}),C.jsxs("div",{className:"sw-grid2",children:[C.jsxs("div",{children:[C.jsx("div",{className:"sw-label",children:"宽度"}),C.jsx("input",{className:"sw-input",type:"number",value:d,min:16,max:7680,onChange:M=>g(Number(M.target.value)),disabled:e||l!=="custom"})]}),C.jsxs("div",{children:[C.jsx("div",{className:"sw-label",children:"高度"}),C.jsx("input",{className:"sw-input",type:"number",value:_,min:16,max:7680,onChange:M=>x(Number(M.target.value)),disabled:e||l!=="custom"})]})]})]}),C.jsxs("div",{className:"sw-modal-section",children:[C.jsx("div",{className:"sw-label",children:"编码器"}),C.jsxs("select",{className:"sw-input",value:p,onChange:M=>c(M.target.value),disabled:e,children:[C.jsx("option",{value:"libx264",children:"CPU（H.264 / libx264）"}),C.jsx("option",{value:"h264_nvenc",children:"NVIDIA（NVENC）"}),C.jsx("option",{value:"h264_qsv",children:"Intel（QSV）"}),C.jsx("option",{value:"h264_amf",children:"AMD（AMF）"})]}),C.jsx("div",{className:"sw-help",children:"硬件编码取决于你的 FFmpeg/驱动是否支持；失败会提示错误。"})]}),C.jsxs("div",{className:"sw-modal-section",children:[C.jsxs("div",{className:"sw-grid2",children:[C.jsxs("div",{children:[C.jsx("div",{className:"sw-label",children:"速度（preset）"}),C.jsxs("select",{className:"sw-input",value:m,onChange:M=>v(M.target.value),disabled:e||p!=="libx264",children:[C.jsx("option",{value:"ultrafast",children:"ultrafast（最快）"}),C.jsx("option",{value:"veryfast",children:"veryfast（推荐）"}),C.jsx("option",{value:"faster",children:"faster"}),C.jsx("option",{value:"medium",children:"medium（更慢更小）"})]})]}),C.jsxs("div",{children:[C.jsx("div",{className:"sw-label",children:"质量（CRF）"}),C.jsx("input",{className:"sw-input",type:"number",min:14,max:28,value:y,onChange:M=>A(Number(M.target.value)),disabled:e||p!=="libx264"})]})]}),C.jsx("div",{className:"sw-help",children:"只有 CPU（libx264）使用 preset/CRF；硬件编码使用各自默认参数。"})]}),e?C.jsxs("div",{className:"sw-modal-section",children:[C.jsx("div",{className:"sw-progress",children:C.jsx("div",{className:"sw-progress-bar",style:{width:`${Math.round(n*100)}%`}})}),C.jsx("div",{className:"sw-help",children:i??"导出中…"})]}):C.jsx("div",{className:"sw-help",children:"将离线逐帧渲染，并通过管道直接交给 FFmpeg 编码（不写图片序列）。"}),C.jsxs("div",{className:"sw-modal-actions",children:[C.jsx("button",{className:"top-bar-btn",onClick:s,disabled:e,children:"取消"}),C.jsx("button",{className:"top-bar-btn",onClick:()=>a(T,{encoder:p,preset:m,crf:Math.max(14,Math.min(28,Math.floor(y)))}),disabled:e||T.width<=0||T.height<=0,children:"开始导出"})]})]})})}const ig=30;function Gc(t,e,n){if(e>=n)return 0;let i=0;for(let r=e;r<n;r++)i+=t[r];return i/(n-e)}function ER(t,e){const n=t.length;if(!n)return{low:0,mid:0,high:0};const i=e.lowCutoff??250,r=e.midCutoff??4e3,s=e.sampleRate/Math.max(1,e.fftSize),a=Math.max(1,Math.min(n,Math.floor(i/s))),o=Math.max(a+1,Math.min(n,Math.floor(r/s))),l=Gc(t,0,a)/255,u=Gc(t,a,o)/255,f=Gc(t,o,n)/255,h=Number.isFinite(e.gain)?e.gain:2.2,d=g=>Math.max(0,Math.min(1,g));return{low:d(l*h),mid:d(u*h),high:d(f*h)}}async function wR(t,e=.92){return await new Promise((n,i)=>{t.toBlob(r=>r?n(r):i(new Error("canvas.toBlob failed")),"image/jpeg",Math.max(.1,Math.min(1,e)))})}async function TR(t){Number.isFinite(t.duration)&&t.duration>0||await new Promise((e,n)=>{const i=()=>{s(),e()},r=()=>{s(),n(new Error("video load failed"))},s=()=>{t.removeEventListener("loadedmetadata",i),t.removeEventListener("canplay",i),t.removeEventListener("error",r)};t.addEventListener("loadedmetadata",i,{once:!0}),t.addEventListener("canplay",i,{once:!0}),t.addEventListener("error",r,{once:!0})})}async function bR(t,e){const n=Math.max(0,e);Math.abs((t.currentTime??0)-n)<5e-4||await new Promise((i,r)=>{const s=()=>{o(),i()},a=()=>{o(),r(new Error("video seek failed"))},o=()=>{t.removeEventListener("seeked",s),t.removeEventListener("error",a)};t.addEventListener("seeked",s,{once:!0}),t.addEventListener("error",a,{once:!0});try{t.currentTime=n}catch(l){o(),r(l instanceof Error?l:new Error("video.currentTime set failed"))}})}function rg(t,e,n,i,r){const s=t/Math.max(1,e),a=n/Math.max(1,i);let o=n,l=i;r==="cover"?s>a?(l=i,o=l*s):(o=n,l=o/s):s>a?(o=n,l=o/s):(l=i,o=l*s);const u=(n-o)/2,f=(i-l)/2;return{dx:u,dy:f,dw:o,dh:l}}function AR(){const{audioFile:t,isPlaying:e,images:n,activeImageId:i,backgroundVideoUrl:r,backgroundVideoFit:s,activeEffectId:a,layers:o,activeLayerId:l,effectParams:u,audioMapping:f,setAudioFile:h,setPlaying:d,addImage:g,setActiveImage:_,addLayer:x,setEffectParam:p,setLayerRect:c,setAudioMapping:m,canvasConfig:v}=co(),[y,A]=Z.useState(0),[T,M]=Z.useState(0),D=Z.useRef(()=>{}),E=Z.useRef(null),[w,H]=Z.useState(!1),[X,ie]=Z.useState(!1),[L,k]=Z.useState(0),[W,V]=Z.useState(null),U=n.find(F=>F.id===i),z=(U==null?void 0:U.url)??null,O=Z.useCallback(F=>{},[]),te=Z.useCallback(async F=>{h(F,F.name),d(!1)},[h,d]),J=Z.useCallback(F=>{const P=`img-${Date.now()}`,de=URL.createObjectURL(F);g(P,F.name,de),_(P)},[g,_]),j=Z.useCallback(()=>{d(!e)},[e,d]),ee=Z.useCallback(F=>{var P;A(F),(P=D.current)==null||P.call(D,F)},[]);Z.useCallback(F=>{const P=n.find(de=>de.url===F);P&&_(P.id)},[n,_]);const le=Z.useCallback(F=>{F==="energyField"?x("energyField",{color:"#3fd2ff",opacity:.95,intensity:1.1,radius:.62,thickness:.08,noise:1,speed:.9}):F==="planeWaveLattice"?x("planeWaveLattice",{color:"#ff2b2b",opacity:.95,pointSize:.018,grid:18,spacing:.22,k:2.8,theta:.08,phi:.52,omega:2.2,sharpness:4.2,amp:1,rotateSpeed:.18,reactOmega:.9,reactPointSize:.9,reactSharpness:.35,reactK:.35,reactRotate:.65}):F==="particles"?x("particles",{baseSize:.04,rotationSpeed:2,maxGroups:20,hue:.55,opacity:.8,shape:0,tilt:0,rotationMode:0,planeDir:0}):F==="equalizer"?x("equalizer",{barCount:128,length:.95,color:"#4fc3ff",showReflection:!0,showBaseline:!0,flipX:!1,flipY:!1,hue:.55,saturation:.85,lightness:.65,opacity:.95,heightScale:1,reflection:.65,glow:.9,glowSize:.9,gap:.25,smoothing:.18}):F==="spectrum"?x("spectrum",{tilt:0,style:0,radius:.7,barMode:1,heightScale:.7,barWidth:.5}):F==="tunnel"?x("tunnel",{imageEnabled:!1,imageMix:.6}):x(F)},[x]),Ee=Z.useCallback((F,P)=>{p(F,P)},[p]),oe=Z.useCallback((F,P)=>{m({[F]:P})},[m]),Ae=Z.useCallback((F,P)=>{A(F),M(P)},[]),I=Z.useCallback(()=>{var F;if(!((F=window.electronAPI)!=null&&F.export)){alert("当前是浏览器环境，无法导出。\n\n请用桌面窗口导出：运行 `npm run dev` 后，在弹出的 SonicWeave（Electron）窗口里点 Export，不要在浏览器打开 localhost:5173 来操作。");return}H(!0)},[]),q=Z.useCallback(async(F,P)=>{var S,B,se,ae,re;if(X)return;const de=E.current;if(!de){alert("导出失败：画布尚未就绪");return}if(Math.max(F.width,F.height)>1920&&!confirm(`你选择的尺寸是 ${F.width}×${F.height}。

超过 1920 的导出在部分 Windows/GPU 环境下可能触发崩溃或非常慢，建议先用 1920×1080 验证流程。

仍然继续导出吗？`))return;const ce=window.electronAPI;if(!(ce!=null&&ce.export)){alert("导出失败：当前运行环境不支持（缺少 Electron IPC）");return}ie(!0),k(0),V("准备导出…"),H(!0);let pe=null,He=null,we=!1,b=null;try{await ce.export.log("export: start");const ve=`SonicWeave_${F.width}x${F.height}.mp4`,me=await ce.export.showSaveDialog(ve);if(me.canceled||!me.filePath){await ce.export.log("export: canceled in save dialog"),V(null),ie(!1);return}await ce.export.log("export: savePath chosen");const{dir:xe}=await ce.export.createTempDir();pe=xe,await ce.export.log(`export: tempDir=${xe}`),V("初始化渲染器…"),He=de.beginExport({width:F.width,height:F.height,pixelRatio:1}),await ce.export.log(`export: beginExport ok (${F.width}x${F.height})`);const Ce=document.createElement("canvas");Ce.width=F.width,Ce.height=F.height;const Ue=Ce.getContext("2d");if(!Ue)throw new Error("无法创建 2D 画布上下文");let ne=null;r&&(await ce.export.log("export: load background video"),ne=document.createElement("video"),ne.muted=!0,ne.playsInline=!0,ne.preload="auto",ne.src=r,await TR(ne),await ce.export.log("export: background video ready"));let ze=null;z&&(await ce.export.log("export: load overlay image"),ze=new Image,ze.src=z,await new Promise((fe,_e)=>{ze.onload=()=>fe(),ze.onerror=()=>_e(new Error("image load failed"))}),await ce.export.log("export: overlay image ready"));let We=null,Ie=10,Re=new Uint8Array(256),Me=null;if(t){V("解析音频…"),await ce.export.log("export: read audio file");const fe=await t.arrayBuffer(),_e=await ce.export.writeAudio({dir:xe,name:t.name||"audio",data:fe});We=_e.path,await ce.export.log("export: audio written to temp"),await ce.export.log("export: analyze audio in main process");const Pe=await ce.export.analyzeAudio({audioPath:_e.path,fps:ig,binCount:256}),Le=new DataView(Pe.data),Qe=Le.getUint32(0,!0),Fe=Le.getUint32(4,!0),nt=Le.getFloat32(8,!0),lt=16,it=Qe*4*4,bt=new Float32Array(Pe.data,lt,Qe*4),Fn=new Uint8Array(Pe.data,lt+it,Qe*Fe);Me={frames:Qe,binCount:Fe,fps:nt,bands:bt,bins:Fn},Ie=Math.max(.01,Qe/Math.max(1,nt)),Re=new Uint8Array(Fe),await ce.export.log(`export: analyze ok frames=${Qe} binCount=${Fe} fps=${nt}`)}const Ne=ig,Ge=(Me==null?void 0:Me.frames)??Math.max(1,Math.ceil(Ie*Ne));V(`导出中… 0 / ${Ge}`),await ce.export.log(`export: frames=${Ge} fps=${Ne}`),V("启动编码器（FFmpeg）…"),await ce.export.log(`export: pipe start encoder=${P.encoder}`),b=(await ce.export.pipeStart({outPath:me.filePath,fps:Ne,audioPath:We,encoder:P.encoder,preset:P.preset,crf:P.crf})).id;const je=()=>de.renderExportFrame,ge=de.getCanvas(),N={low:.3,mid:.3,high:.3};await ce.export.log(`export: render loop start (audio=${!!Me})`);for(let fe=0;fe<Ge;fe++){const _e=Math.min(fe/Ne,Math.max(0,Ie-1/Ne));let Pe=N;if(Me){const Fe=fe*Me.binCount,nt=Fe+Me.binCount;Re=Me.bins.subarray(Fe,nt),Pe=ER(Re,{sampleRate:44100,fftSize:2048,gain:2.2}),fe===0&&await ce.export.log(`export: bands0 low=${Pe.low.toFixed(3)} mid=${Pe.mid.toFixed(3)} high=${Pe.high.toFixed(3)}`)}else Re=new Uint8Array(256);if(je()({width:F.width,height:F.height,virtualWidth:F.width,virtualHeight:F.height,bands:Pe,frequencyData:Re,dt:1/Ne}),Ue.clearRect(0,0,F.width,F.height),ne){const Fe=Number.isFinite(ne.duration)&&ne.duration>0?ne.duration:0;let nt=Fe>0?_e%Fe:_e;Fe>0&&nt>Fe-.05&&(nt=Fe-.05),await bR(ne,nt);const lt=rg(ne.videoWidth||F.width,ne.videoHeight||F.height,F.width,F.height,s);Ue.drawImage(ne,lt.dx,lt.dy,lt.dw,lt.dh)}if(ze){Ue.save(),Ue.globalAlpha=.35;const Fe=rg(ze.naturalWidth,ze.naturalHeight,F.width,F.height,"cover");Ue.drawImage(ze,Fe.dx,Fe.dy,Fe.dw,Fe.dh),Ue.restore()}Ue.drawImage(ge,0,0,F.width,F.height);const Le=await wR(Ce,.88);await ce.export.pipeWrite({id:b,data:await Le.arrayBuffer()});const Qe=(fe+1)/Ge;k(Qe),(fe%10===0||fe===Ge-1)&&V(`导出中… ${fe+1} / ${Ge}`),fe%30===0&&await ce.export.log(`export: frame ${fe+1}/${Ge}`),fe%5===0&&await new Promise(Fe=>setTimeout(Fe,0))}V("收尾编码…"),await ce.export.log("export: pipe finish"),await ce.export.pipeFinish({id:b}),await ce.export.log("export: pipe done"),V("完成"),k(1),we=!0}catch(ve){console.error(ve);try{await ce.export.log(`export: error ${ve instanceof Error?ve.stack??ve.message:String(ve)}`)}catch{}alert(`导出失败：${ve instanceof Error?ve.message:String(ve)}`)}finally{try{He==null||He()}catch{}if(b)try{await((se=(B=(S=window.electronAPI)==null?void 0:S.export)==null?void 0:B.pipeFinish)==null?void 0:se.call(B,{id:b}))}catch{}if(pe)try{const ve=window.electronAPI;await((re=(ae=ve==null?void 0:ve.export)==null?void 0:ae.cleanup)==null?void 0:re.call(ae,{dir:pe}))}catch{}ie(!1),we||V(null)}},[z,t,s,r,X]);return C.jsxs(C.Fragment,{children:[C.jsx(sS,{onImportAudio:te,onImportImage:J,onImportBackgroundVideo:O,onExport:I}),C.jsxs("div",{className:"main-layout",children:[C.jsx(aS,{onPlayPause:j,onSeek:ee,progress:y,duration:T,onSetActiveImage:F=>{const P=n.find(de=>de.url===F);P&&_(P.id)},onSelectEffect:le}),C.jsx("main",{className:"center-panel",children:C.jsx(SR,{audioFile:t,isPlaying:e,onProgressUpdate:Ae,onSeekRef:D,onExportRef:E,activeImageUrl:z,backgroundVideoUrl:r,backgroundVideoFit:s,layers:o,activeLayerId:l,onLayerRectChange:c,audioMapping:f,canvasConfig:v})}),C.jsx(ES,{onEffectParamChange:Ee,onAudioMappingChange:oe})]}),C.jsx(MR,{open:w,exporting:X,progress:L,message:W,defaultSize:{width:v.width,height:v.height},onCancel:()=>{X||H(!1)},onConfirm:(F,P)=>void q(F,P)})]})}function RR(){return C.jsx(rS,{children:C.jsx(AR,{})})}Vc.createRoot(document.getElementById("root")).render(C.jsx(Ht.StrictMode,{children:C.jsx(RR,{})}));
