function $d(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function iu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var au={exports:{}},Bi={},lu={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=Symbol.for("react.element"),Ad=Symbol.for("react.portal"),Id=Symbol.for("react.fragment"),Fd=Symbol.for("react.strict_mode"),Ud=Symbol.for("react.profiler"),Bd=Symbol.for("react.provider"),Wd=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Qd=Symbol.for("react.memo"),qd=Symbol.for("react.lazy"),Ro=Symbol.iterator;function Kd(e){return e===null||typeof e!="object"?null:(e=Ro&&e[Ro]||e["@@iterator"],typeof e=="function"?e:null)}var ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},su=Object.assign,uu={};function An(e,t,n){this.props=e,this.context=t,this.refs=uu,this.updater=n||ou}An.prototype.isReactComponent={};An.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};An.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cu(){}cu.prototype=An.prototype;function Ol(e,t,n){this.props=e,this.context=t,this.refs=uu,this.updater=n||ou}var $l=Ol.prototype=new cu;$l.constructor=Ol;su($l,An.prototype);$l.isPureReactComponent=!0;var Oo=Array.isArray,du=Object.prototype.hasOwnProperty,Dl={current:null},fu={key:!0,ref:!0,__self:!0,__source:!0};function pu(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)du.call(t,r)&&!fu.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:zr,type:e,key:a,ref:l,props:i,_owner:Dl.current}}function Gd(e,t){return{$$typeof:zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Al(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr}function Yd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $o=/\/+/g;function la(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yd(""+e.key):t.toString(36)}function ri(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case zr:case Ad:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+la(l,0):r,Oo(i)?(n="",e!=null&&(n=e.replace($o,"$&/")+"/"),ri(i,t,n,"",function(c){return c})):i!=null&&(Al(i)&&(i=Gd(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace($o,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Oo(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+la(a,s);l+=ri(a,t,n,u,i)}else if(u=Kd(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+la(a,s++),l+=ri(a,t,n,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Dr(e,t,n){if(e==null)return e;var r=[],i=0;return ri(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Xd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},ii={transition:null},Jd={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:ii,ReactCurrentOwner:Dl};function mu(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Dr,forEach:function(e,t,n){Dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Dr(e,function(){t++}),t},toArray:function(e){return Dr(e,function(t){return t})||[]},only:function(e){if(!Al(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=An;$.Fragment=Id;$.Profiler=Ud;$.PureComponent=Ol;$.StrictMode=Fd;$.Suspense=Vd;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jd;$.act=mu;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=su({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Dl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)du.call(t,u)&&!fu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:zr,type:e.type,key:i,ref:a,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:Wd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bd,_context:e},e.Consumer=e};$.createElement=pu;$.createFactory=function(e){var t=pu.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Hd,render:e}};$.isValidElement=Al;$.lazy=function(e){return{$$typeof:qd,_payload:{_status:-1,_result:e},_init:Xd}};$.memo=function(e,t){return{$$typeof:Qd,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=ii.transition;ii.transition={};try{e()}finally{ii.transition=t}};$.unstable_act=mu;$.useCallback=function(e,t){return Ne.current.useCallback(e,t)};$.useContext=function(e){return Ne.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ne.current.useEffect(e,t)};$.useId=function(){return Ne.current.useId()};$.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ne.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};$.useRef=function(e){return Ne.current.useRef(e)};$.useState=function(e){return Ne.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ne.current.useTransition()};$.version="18.3.1";lu.exports=$;var k=lu.exports;const hu=iu(k),Zd=$d({__proto__:null,default:hu},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef=k,tf=Symbol.for("react.element"),nf=Symbol.for("react.fragment"),rf=Object.prototype.hasOwnProperty,af=ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lf={key:!0,ref:!0,__self:!0,__source:!0};function gu(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)rf.call(t,r)&&!lf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:tf,type:e,key:a,ref:l,props:i,_owner:af.current}}Bi.Fragment=nf;Bi.jsx=gu;Bi.jsxs=gu;au.exports=Bi;var o=au.exports,Da={},vu={exports:{}},Ie={},xu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,T){var O=_.length;_.push(T);e:for(;0<O;){var W=O-1>>>1,Q=_[W];if(0<i(Q,T))_[W]=T,_[O]=Q,O=W;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var T=_[0],O=_.pop();if(O!==T){_[0]=O;e:for(var W=0,Q=_.length,ke=Q>>>1;W<ke;){var re=2*(W+1)-1,Ce=_[re],ce=re+1,Z=_[ce];if(0>i(Ce,O))ce<Q&&0>i(Z,Ce)?(_[W]=Z,_[ce]=O,W=ce):(_[W]=Ce,_[re]=O,W=re);else if(ce<Q&&0>i(Z,O))_[W]=Z,_[ce]=O,W=ce;else break e}}return T}function i(_,T){var O=_.sortIndex-T.sortIndex;return O!==0?O:_.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],g=1,d=null,f=3,x=!1,v=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=_)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function w(_){if(y=!1,m(_),!v)if(n(u)!==null)v=!0,we(N);else{var T=n(c);T!==null&&Ue(w,T.startTime-_)}}function N(_,T){v=!1,y&&(y=!1,h(C),C=-1),x=!0;var O=f;try{for(m(T),d=n(u);d!==null&&(!(d.expirationTime>T)||_&&!L());){var W=d.callback;if(typeof W=="function"){d.callback=null,f=d.priorityLevel;var Q=W(d.expirationTime<=T);T=e.unstable_now(),typeof Q=="function"?d.callback=Q:d===n(u)&&r(u),m(T)}else r(u);d=n(u)}if(d!==null)var ke=!0;else{var re=n(c);re!==null&&Ue(w,re.startTime-T),ke=!1}return ke}finally{d=null,f=O,x=!1}}var S=!1,E=null,C=-1,A=5,R=-1;function L(){return!(e.unstable_now()-R<A)}function z(){if(E!==null){var _=e.unstable_now();R=_;var T=!0;try{T=E(!0,_)}finally{T?D():(S=!1,E=null)}}else S=!1}var D;if(typeof p=="function")D=function(){p(z)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,ue=M.port2;M.port1.onmessage=z,D=function(){ue.postMessage(null)}}else D=function(){b(z,0)};function we(_){E=_,S||(S=!0,D())}function Ue(_,T){C=b(function(){_(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,we(N))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var O=f;f=T;try{return _()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,T){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var O=f;f=_;try{return T()}finally{f=O}},e.unstable_scheduleCallback=function(_,T,O){var W=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?W+O:W):O=W,_){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=O+Q,_={id:g++,callback:T,priorityLevel:_,startTime:O,expirationTime:Q,sortIndex:-1},O>W?(_.sortIndex=O,t(c,_),n(u)===null&&_===n(c)&&(y?(h(C),C=-1):y=!0,Ue(w,O-W))):(_.sortIndex=Q,t(u,_),v||x||(v=!0,we(N))),_},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(_){var T=f;return function(){var O=f;f=T;try{return _.apply(this,arguments)}finally{f=O}}}})(yu);xu.exports=yu;var of=xu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=k,Ae=of;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,ur={};function rn(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(ur[e]=t,e=0;e<t.length;e++)wu.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,uf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Do={},Ao={};function cf(e){return Aa.call(Ao,e)?!0:Aa.call(Do,e)?!1:uf.test(e)?Ao[e]=!0:(Do[e]=!0,!1)}function df(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ff(e,t,n,r){if(t===null||typeof t>"u"||df(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Il=/[\-:]([a-z])/g;function Fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Il,Fl);he[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Il,Fl);he[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Il,Fl);he[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ul(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ff(t,n,i,r)&&(n=null),r||i===null?cf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ar=Symbol.for("react.element"),fn=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),Bl=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),ku=Symbol.for("react.provider"),bu=Symbol.for("react.context"),Wl=Symbol.for("react.forward_ref"),Fa=Symbol.for("react.suspense"),Ua=Symbol.for("react.suspense_list"),Hl=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),ju=Symbol.for("react.offscreen"),Io=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=Io&&e[Io]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,oa;function Yn(e){if(oa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);oa=t&&t[1]||""}return`
`+oa+e}var sa=!1;function ua(e,t){if(!e||sa)return"";sa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,s=a.length-1;1<=l&&0<=s&&i[l]!==a[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==a[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==a[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{sa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yn(e):""}function pf(e){switch(e.tag){case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 2:case 15:return e=ua(e.type,!1),e;case 11:return e=ua(e.type.render,!1),e;case 1:return e=ua(e.type,!0),e;default:return""}}function Ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pn:return"Fragment";case fn:return"Portal";case Ia:return"Profiler";case Bl:return"StrictMode";case Fa:return"Suspense";case Ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bu:return(e.displayName||"Context")+".Consumer";case ku:return(e._context.displayName||"Context")+".Provider";case Wl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hl:return t=e.displayName||null,t!==null?t:Ba(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Ba(e(t))}catch{}}return null}function mf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ba(t);case 8:return t===Bl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hf(e){var t=Nu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=hf(e))}function Su(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cu(e,t){t=t.checked,t!=null&&Ul(e,"checked",t,!1)}function Ha(e,t){Cu(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Va(e,t.type,n):t.hasOwnProperty("defaultValue")&&Va(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Va(e,t,n){(t!=="number"||hi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xn=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Xn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function Eu(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_u(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gf=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){gf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function Pu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function Lu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var vf=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ka(e,t){if(t){if(vf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ya=null;function Vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,Cn=null,En=null;function Ho(e){if(e=Tr(e)){if(typeof Xa!="function")throw Error(j(280));var t=e.stateNode;t&&(t=qi(t),Xa(e.stateNode,e.type,t))}}function Tu(e){Cn?En?En.push(e):En=[e]:Cn=e}function Mu(){if(Cn){var e=Cn,t=En;if(En=Cn=null,Ho(e),t)for(e=0;e<t.length;e++)Ho(t[e])}}function Ru(e,t){return e(t)}function Ou(){}var ca=!1;function $u(e,t,n){if(ca)return e(t,n);ca=!0;try{return Ru(e,t,n)}finally{ca=!1,(Cn!==null||En!==null)&&(Ou(),Mu())}}function dr(e,t){var n=e.stateNode;if(n===null)return null;var r=qi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ja=!1;if(mt)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Ja=!1}function xf(e,t,n,r,i,a,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var tr=!1,gi=null,vi=!1,Za=null,yf={onError:function(e){tr=!0,gi=e}};function wf(e,t,n,r,i,a,l,s,u){tr=!1,gi=null,xf.apply(yf,arguments)}function kf(e,t,n,r,i,a,l,s,u){if(wf.apply(this,arguments),tr){if(tr){var c=gi;tr=!1,gi=null}else throw Error(j(198));vi||(vi=!0,Za=c)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Du(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vo(e){if(an(e)!==e)throw Error(j(188))}function bf(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Vo(i),e;if(a===r)return Vo(i),t;a=a.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Au(e){return e=bf(e),e!==null?Iu(e):null}function Iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Iu(e);if(t!==null)return t;e=e.sibling}return null}var Fu=Ae.unstable_scheduleCallback,Qo=Ae.unstable_cancelCallback,jf=Ae.unstable_shouldYield,Nf=Ae.unstable_requestPaint,ne=Ae.unstable_now,Sf=Ae.unstable_getCurrentPriorityLevel,Ql=Ae.unstable_ImmediatePriority,Uu=Ae.unstable_UserBlockingPriority,xi=Ae.unstable_NormalPriority,Cf=Ae.unstable_LowPriority,Bu=Ae.unstable_IdlePriority,Wi=null,at=null;function Ef(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Wi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Pf,_f=Math.log,zf=Math.LN2;function Pf(e){return e>>>=0,e===0?32:31-(_f(e)/zf|0)|0}var Ur=64,Br=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Jn(s):(a&=l,a!==0&&(r=Jn(a)))}else l=n&~i,l!==0?r=Jn(l):a!==0&&(r=Jn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Lf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Ze(a),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Lf(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function el(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wu(){var e=Ur;return Ur<<=1,!(Ur&4194240)&&(Ur=64),e}function da(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function Mf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Hu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vu,Kl,Qu,qu,Ku,tl=!1,Wr=[],Lt=null,Tt=null,Mt=null,fr=new Map,pr=new Map,Ct=[],Rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(t.pointerId)}}function Wn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tr(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Of(e,t,n,r,i){switch(t){case"focusin":return Lt=Wn(Lt,e,t,n,r,i),!0;case"dragenter":return Tt=Wn(Tt,e,t,n,r,i),!0;case"mouseover":return Mt=Wn(Mt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return fr.set(a,Wn(fr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,pr.set(a,Wn(pr.get(a)||null,e,t,n,r,i)),!0}return!1}function Gu(e){var t=qt(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=Du(n),t!==null){e.blockedOn=t,Ku(e.priority,function(){Qu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ya=r,n.target.dispatchEvent(r),Ya=null}else return t=Tr(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ko(e,t,n){ai(e)&&n.delete(t)}function $f(){tl=!1,Lt!==null&&ai(Lt)&&(Lt=null),Tt!==null&&ai(Tt)&&(Tt=null),Mt!==null&&ai(Mt)&&(Mt=null),fr.forEach(Ko),pr.forEach(Ko)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,$f)))}function mr(e){function t(i){return Hn(i,e)}if(0<Wr.length){Hn(Wr[0],e);for(var n=1;n<Wr.length;n++){var r=Wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&Hn(Lt,e),Tt!==null&&Hn(Tt,e),Mt!==null&&Hn(Mt,e),fr.forEach(t),pr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Gu(n),n.blockedOn===null&&Ct.shift()}var _n=xt.ReactCurrentBatchConfig,wi=!0;function Df(e,t,n,r){var i=F,a=_n.transition;_n.transition=null;try{F=1,Gl(e,t,n,r)}finally{F=i,_n.transition=a}}function Af(e,t,n,r){var i=F,a=_n.transition;_n.transition=null;try{F=4,Gl(e,t,n,r)}finally{F=i,_n.transition=a}}function Gl(e,t,n,r){if(wi){var i=nl(e,t,n,r);if(i===null)ka(e,t,r,ki,n),qo(e,r);else if(Of(i,e,t,n,r))r.stopPropagation();else if(qo(e,r),t&4&&-1<Rf.indexOf(e)){for(;i!==null;){var a=Tr(i);if(a!==null&&Vu(a),a=nl(e,t,n,r),a===null&&ka(e,t,r,ki,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ka(e,t,r,null,n)}}var ki=null;function nl(e,t,n,r){if(ki=null,e=Vl(r),e=qt(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Du(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ki=e,null}function Yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sf()){case Ql:return 1;case Uu:return 4;case xi:case Cf:return 16;case Bu:return 536870912;default:return 16}default:return 16}}var _t=null,Yl=null,li=null;function Xu(){if(li)return li;var e,t=Yl,n=t.length,r,i="value"in _t?_t.value:_t.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return li=i.slice(e,1<r?1-r:void 0)}function oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function Go(){return!1}function Fe(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Hr:Go,this.isPropagationStopped=Go,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Fe(In),Lr=J({},In,{view:0,detail:0}),If=Fe(Lr),fa,pa,Vn,Hi=J({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vn&&(Vn&&e.type==="mousemove"?(fa=e.screenX-Vn.screenX,pa=e.screenY-Vn.screenY):pa=fa=0,Vn=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:pa}}),Yo=Fe(Hi),Ff=J({},Hi,{dataTransfer:0}),Uf=Fe(Ff),Bf=J({},Lr,{relatedTarget:0}),ma=Fe(Bf),Wf=J({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),Hf=Fe(Wf),Vf=J({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qf=Fe(Vf),qf=J({},In,{data:0}),Xo=Fe(qf),Kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yf[e])?!!t[e]:!1}function Jl(){return Xf}var Jf=J({},Lr,{key:function(e){if(e.key){var t=Kf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(e){return e.type==="keypress"?oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zf=Fe(Jf),ep=J({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=Fe(ep),tp=J({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),np=Fe(tp),rp=J({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),ip=Fe(rp),ap=J({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lp=Fe(ap),op=[9,13,27,32],Zl=mt&&"CompositionEvent"in window,nr=null;mt&&"documentMode"in document&&(nr=document.documentMode);var sp=mt&&"TextEvent"in window&&!nr,Ju=mt&&(!Zl||nr&&8<nr&&11>=nr),Zo=" ",es=!1;function Zu(e,t){switch(e){case"keyup":return op.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function up(e,t){switch(e){case"compositionend":return ec(t);case"keypress":return t.which!==32?null:(es=!0,Zo);case"textInput":return e=t.data,e===Zo&&es?null:e;default:return null}}function cp(e,t){if(mn)return e==="compositionend"||!Zl&&Zu(e,t)?(e=Xu(),li=Yl=_t=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dp[e.type]:t==="textarea"}function tc(e,t,n,r){Tu(r),t=bi(t,"onChange"),0<t.length&&(n=new Xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rr=null,hr=null;function fp(e){fc(e,0)}function Vi(e){var t=vn(e);if(Su(t))return e}function pp(e,t){if(e==="change")return t}var nc=!1;if(mt){var ha;if(mt){var ga="oninput"in document;if(!ga){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),ga=typeof ns.oninput=="function"}ha=ga}else ha=!1;nc=ha&&(!document.documentMode||9<document.documentMode)}function rs(){rr&&(rr.detachEvent("onpropertychange",rc),hr=rr=null)}function rc(e){if(e.propertyName==="value"&&Vi(hr)){var t=[];tc(t,hr,e,Vl(e)),$u(fp,t)}}function mp(e,t,n){e==="focusin"?(rs(),rr=t,hr=n,rr.attachEvent("onpropertychange",rc)):e==="focusout"&&rs()}function hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(hr)}function gp(e,t){if(e==="click")return Vi(t)}function vp(e,t){if(e==="input"||e==="change")return Vi(t)}function xp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:xp;function gr(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Aa.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,t){var n=is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=is(n)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(){for(var e=window,t=hi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hi(e.document)}return t}function eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yp(e){var t=ac(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ic(n.ownerDocument.documentElement,n)){if(r!==null&&eo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=as(n,a);var l=as(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wp=mt&&"documentMode"in document&&11>=document.documentMode,hn=null,rl=null,ir=null,il=!1;function ls(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;il||hn==null||hn!==hi(r)||(r=hn,"selectionStart"in r&&eo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&gr(ir,r)||(ir=r,r=bi(rl,"onSelect"),0<r.length&&(t=new Xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Vr("Animation","AnimationEnd"),animationiteration:Vr("Animation","AnimationIteration"),animationstart:Vr("Animation","AnimationStart"),transitionend:Vr("Transition","TransitionEnd")},va={},lc={};mt&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Qi(e){if(va[e])return va[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lc)return va[e]=t[n];return e}var oc=Qi("animationend"),sc=Qi("animationiteration"),uc=Qi("animationstart"),cc=Qi("transitionend"),dc=new Map,os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){dc.set(e,t),rn(t,[e])}for(var xa=0;xa<os.length;xa++){var ya=os[xa],kp=ya.toLowerCase(),bp=ya[0].toUpperCase()+ya.slice(1);Bt(kp,"on"+bp)}Bt(oc,"onAnimationEnd");Bt(sc,"onAnimationIteration");Bt(uc,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(cc,"onTransitionEnd");Ln("onMouseEnter",["mouseout","mouseover"]);Ln("onMouseLeave",["mouseout","mouseover"]);Ln("onPointerEnter",["pointerout","pointerover"]);Ln("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));function ss(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,kf(r,t,void 0,e),e.currentTarget=null}function fc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==a&&i.isPropagationStopped())break e;ss(i,s,c),a=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==a&&i.isPropagationStopped())break e;ss(i,s,c),a=u}}}if(vi)throw e=Za,vi=!1,Za=null,e}function H(e,t){var n=t[ul];n===void 0&&(n=t[ul]=new Set);var r=e+"__bubble";n.has(r)||(pc(t,e,2,!1),n.add(r))}function wa(e,t,n){var r=0;t&&(r|=4),pc(n,e,r,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[Qr]){e[Qr]=!0,wu.forEach(function(n){n!=="selectionchange"&&(jp.has(n)||wa(n,!1,e),wa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,wa("selectionchange",!1,t))}}function pc(e,t,n,r){switch(Yu(t)){case 1:var i=Df;break;case 4:i=Af;break;default:i=Gl}n=i.bind(null,t,n,e),i=void 0,!Ja||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ka(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=qt(s),l===null)return;if(u=l.tag,u===5||u===6){r=a=l;continue e}s=s.parentNode}}r=r.return}$u(function(){var c=a,g=Vl(n),d=[];e:{var f=dc.get(e);if(f!==void 0){var x=Xl,v=e;switch(e){case"keypress":if(oi(n)===0)break e;case"keydown":case"keyup":x=Zf;break;case"focusin":v="focus",x=ma;break;case"focusout":v="blur",x=ma;break;case"beforeblur":case"afterblur":x=ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=np;break;case oc:case sc:case uc:x=Hf;break;case cc:x=ip;break;case"scroll":x=If;break;case"wheel":x=lp;break;case"copy":case"cut":case"paste":x=Qf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Jo}var y=(t&4)!==0,b=!y&&e==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=dr(p,h),w!=null&&y.push(xr(p,w,m)))),b)break;p=p.return}0<y.length&&(f=new x(f,v,null,n,g),d.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==Ya&&(v=n.relatedTarget||n.fromElement)&&(qt(v)||v[ht]))break e;if((x||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=c,v=v?qt(v):null,v!==null&&(b=an(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=c),x!==v)){if(y=Yo,w="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Jo,w="onPointerLeave",h="onPointerEnter",p="pointer"),b=x==null?f:vn(x),m=v==null?f:vn(v),f=new y(w,p+"leave",x,n,g),f.target=b,f.relatedTarget=m,w=null,qt(g)===c&&(y=new y(h,p+"enter",v,n,g),y.target=m,y.relatedTarget=b,w=y),b=w,x&&v)t:{for(y=x,h=v,p=0,m=y;m;m=un(m))p++;for(m=0,w=h;w;w=un(w))m++;for(;0<p-m;)y=un(y),p--;for(;0<m-p;)h=un(h),m--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break t;y=un(y),h=un(h)}y=null}else y=null;x!==null&&us(d,f,x,y,!1),v!==null&&b!==null&&us(d,b,v,y,!0)}}e:{if(f=c?vn(c):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var N=pp;else if(ts(f))if(nc)N=vp;else{N=hp;var S=mp}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=gp);if(N&&(N=N(e,c))){tc(d,N,n,g);break e}S&&S(e,f,c),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Va(f,"number",f.value)}switch(S=c?vn(c):window,e){case"focusin":(ts(S)||S.contentEditable==="true")&&(hn=S,rl=c,ir=null);break;case"focusout":ir=rl=hn=null;break;case"mousedown":il=!0;break;case"contextmenu":case"mouseup":case"dragend":il=!1,ls(d,n,g);break;case"selectionchange":if(wp)break;case"keydown":case"keyup":ls(d,n,g)}var E;if(Zl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else mn?Zu(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Ju&&n.locale!=="ko"&&(mn||C!=="onCompositionStart"?C==="onCompositionEnd"&&mn&&(E=Xu()):(_t=g,Yl="value"in _t?_t.value:_t.textContent,mn=!0)),S=bi(c,C),0<S.length&&(C=new Xo(C,e,null,n,g),d.push({event:C,listeners:S}),E?C.data=E:(E=ec(n),E!==null&&(C.data=E)))),(E=sp?up(e,n):cp(e,n))&&(c=bi(c,"onBeforeInput"),0<c.length&&(g=new Xo("onBeforeInput","beforeinput",null,n,g),d.push({event:g,listeners:c}),g.data=E))}fc(d,t)})}function xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=dr(e,n),a!=null&&r.unshift(xr(e,a,i)),a=dr(e,t),a!=null&&r.push(xr(e,a,i))),e=e.return}return r}function un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=dr(n,a),u!=null&&l.unshift(xr(n,u,s))):i||(u=dr(n,a),u!=null&&l.push(xr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Np=/\r\n?/g,Sp=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(Np,`
`).replace(Sp,"")}function qr(e,t,n){if(t=cs(t),cs(e)!==t&&n)throw Error(j(425))}function ji(){}var al=null,ll=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sl=typeof setTimeout=="function"?setTimeout:void 0,Cp=typeof clearTimeout=="function"?clearTimeout:void 0,ds=typeof Promise=="function"?Promise:void 0,Ep=typeof queueMicrotask=="function"?queueMicrotask:typeof ds<"u"?function(e){return ds.resolve(null).then(e).catch(_p)}:sl;function _p(e){setTimeout(function(){throw e})}function ba(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),it="__reactFiber$"+Fn,yr="__reactProps$"+Fn,ht="__reactContainer$"+Fn,ul="__reactEvents$"+Fn,zp="__reactListeners$"+Fn,Pp="__reactHandles$"+Fn;function qt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fs(e);e!==null;){if(n=e[it])return n;e=fs(e)}return t}e=n,n=e.parentNode}return null}function Tr(e){return e=e[it]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function qi(e){return e[yr]||null}var cl=[],xn=-1;function Wt(e){return{current:e}}function V(e){0>xn||(e.current=cl[xn],cl[xn]=null,xn--)}function B(e,t){xn++,cl[xn]=e.current,e.current=t}var Ut={},ye=Wt(Ut),Le=Wt(!1),Jt=Ut;function Tn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function Ni(){V(Le),V(ye)}function ps(e,t,n){if(ye.current!==Ut)throw Error(j(168));B(ye,t),B(Le,n)}function mc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,mf(e)||"Unknown",i));return J({},n,r)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,Jt=ye.current,B(ye,e),B(Le,Le.current),!0}function ms(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=mc(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,V(Le),V(ye),B(ye,e)):V(Le),B(Le,n)}var ct=null,Ki=!1,ja=!1;function hc(e){ct===null?ct=[e]:ct.push(e)}function Lp(e){Ki=!0,hc(e)}function Ht(){if(!ja&&ct!==null){ja=!0;var e=0,t=F;try{var n=ct;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,Ki=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),Fu(Ql,Ht),i}finally{F=t,ja=!1}}return null}var yn=[],wn=0,Ci=null,Ei=0,Be=[],We=0,Zt=null,dt=1,ft="";function Vt(e,t){yn[wn++]=Ei,yn[wn++]=Ci,Ci=e,Ei=t}function gc(e,t,n){Be[We++]=dt,Be[We++]=ft,Be[We++]=Zt,Zt=e;var r=dt;e=ft;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var a=32-Ze(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,dt=1<<32-Ze(t)+i|n<<i|r,ft=a+e}else dt=1<<a|n<<i|r,ft=e}function to(e){e.return!==null&&(Vt(e,1),gc(e,1,0))}function no(e){for(;e===Ci;)Ci=yn[--wn],yn[wn]=null,Ei=yn[--wn],yn[wn]=null;for(;e===Zt;)Zt=Be[--We],Be[We]=null,ft=Be[--We],Be[We]=null,dt=Be[--We],Be[We]=null}var De=null,$e=null,q=!1,Je=null;function vc(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,$e=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,$e=null,!0):!1;default:return!1}}function dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fl(e){if(q){var t=$e;if(t){var n=t;if(!hs(e,t)){if(dl(e))throw Error(j(418));t=Rt(n.nextSibling);var r=De;t&&hs(e,t)?vc(r,n):(e.flags=e.flags&-4097|2,q=!1,De=e)}}else{if(dl(e))throw Error(j(418));e.flags=e.flags&-4097|2,q=!1,De=e}}}function gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function Kr(e){if(e!==De)return!1;if(!q)return gs(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=$e)){if(dl(e))throw xc(),Error(j(418));for(;t;)vc(e,t),t=Rt(t.nextSibling)}if(gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=De?Rt(e.stateNode.nextSibling):null;return!0}function xc(){for(var e=$e;e;)e=Rt(e.nextSibling)}function Mn(){$e=De=null,q=!1}function ro(e){Je===null?Je=[e]:Je.push(e)}var Tp=xt.ReactCurrentBatchConfig;function Qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var s=i.refs;l===null?delete s[a]:s[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Gr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vs(e){var t=e._init;return t(e._payload)}function yc(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=At(h,p),h.index=0,h.sibling=null,h}function a(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,m,w){return p===null||p.tag!==6?(p=Pa(m,h.mode,w),p.return=h,p):(p=i(p,m),p.return=h,p)}function u(h,p,m,w){var N=m.type;return N===pn?g(h,p,m.props.children,w,m.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Nt&&vs(N)===p.type)?(w=i(p,m.props),w.ref=Qn(h,p,m),w.return=h,w):(w=mi(m.type,m.key,m.props,null,h.mode,w),w.ref=Qn(h,p,m),w.return=h,w)}function c(h,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=La(m,h.mode,w),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function g(h,p,m,w,N){return p===null||p.tag!==7?(p=Xt(m,h.mode,w,N),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Pa(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ar:return m=mi(p.type,p.key,p.props,null,h.mode,m),m.ref=Qn(h,null,p),m.return=h,m;case fn:return p=La(p,h.mode,m),p.return=h,p;case Nt:var w=p._init;return d(h,w(p._payload),m)}if(Xn(p)||Un(p))return p=Xt(p,h.mode,m,null),p.return=h,p;Gr(h,p)}return null}function f(h,p,m,w){var N=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:s(h,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ar:return m.key===N?u(h,p,m,w):null;case fn:return m.key===N?c(h,p,m,w):null;case Nt:return N=m._init,f(h,p,N(m._payload),w)}if(Xn(m)||Un(m))return N!==null?null:g(h,p,m,w,null);Gr(h,m)}return null}function x(h,p,m,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,s(p,h,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ar:return h=h.get(w.key===null?m:w.key)||null,u(p,h,w,N);case fn:return h=h.get(w.key===null?m:w.key)||null,c(p,h,w,N);case Nt:var S=w._init;return x(h,p,m,S(w._payload),N)}if(Xn(w)||Un(w))return h=h.get(m)||null,g(p,h,w,N,null);Gr(p,w)}return null}function v(h,p,m,w){for(var N=null,S=null,E=p,C=p=0,A=null;E!==null&&C<m.length;C++){E.index>C?(A=E,E=null):A=E.sibling;var R=f(h,E,m[C],w);if(R===null){E===null&&(E=A);break}e&&E&&R.alternate===null&&t(h,E),p=a(R,p,C),S===null?N=R:S.sibling=R,S=R,E=A}if(C===m.length)return n(h,E),q&&Vt(h,C),N;if(E===null){for(;C<m.length;C++)E=d(h,m[C],w),E!==null&&(p=a(E,p,C),S===null?N=E:S.sibling=E,S=E);return q&&Vt(h,C),N}for(E=r(h,E);C<m.length;C++)A=x(E,h,C,m[C],w),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?C:A.key),p=a(A,p,C),S===null?N=A:S.sibling=A,S=A);return e&&E.forEach(function(L){return t(h,L)}),q&&Vt(h,C),N}function y(h,p,m,w){var N=Un(m);if(typeof N!="function")throw Error(j(150));if(m=N.call(m),m==null)throw Error(j(151));for(var S=N=null,E=p,C=p=0,A=null,R=m.next();E!==null&&!R.done;C++,R=m.next()){E.index>C?(A=E,E=null):A=E.sibling;var L=f(h,E,R.value,w);if(L===null){E===null&&(E=A);break}e&&E&&L.alternate===null&&t(h,E),p=a(L,p,C),S===null?N=L:S.sibling=L,S=L,E=A}if(R.done)return n(h,E),q&&Vt(h,C),N;if(E===null){for(;!R.done;C++,R=m.next())R=d(h,R.value,w),R!==null&&(p=a(R,p,C),S===null?N=R:S.sibling=R,S=R);return q&&Vt(h,C),N}for(E=r(h,E);!R.done;C++,R=m.next())R=x(E,h,C,R.value,w),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?C:R.key),p=a(R,p,C),S===null?N=R:S.sibling=R,S=R);return e&&E.forEach(function(z){return t(h,z)}),q&&Vt(h,C),N}function b(h,p,m,w){if(typeof m=="object"&&m!==null&&m.type===pn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ar:e:{for(var N=m.key,S=p;S!==null;){if(S.key===N){if(N=m.type,N===pn){if(S.tag===7){n(h,S.sibling),p=i(S,m.props.children),p.return=h,h=p;break e}}else if(S.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Nt&&vs(N)===S.type){n(h,S.sibling),p=i(S,m.props),p.ref=Qn(h,S,m),p.return=h,h=p;break e}n(h,S);break}else t(h,S);S=S.sibling}m.type===pn?(p=Xt(m.props.children,h.mode,w,m.key),p.return=h,h=p):(w=mi(m.type,m.key,m.props,null,h.mode,w),w.ref=Qn(h,p,m),w.return=h,h=w)}return l(h);case fn:e:{for(S=m.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=La(m,h.mode,w),p.return=h,h=p}return l(h);case Nt:return S=m._init,b(h,p,S(m._payload),w)}if(Xn(m))return v(h,p,m,w);if(Un(m))return y(h,p,m,w);Gr(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=Pa(m,h.mode,w),p.return=h,h=p),l(h)):n(h,p)}return b}var Rn=yc(!0),wc=yc(!1),_i=Wt(null),zi=null,kn=null,io=null;function ao(){io=kn=zi=null}function lo(e){var t=_i.current;V(_i),e._currentValue=t}function pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){zi=e,io=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(io!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(zi===null)throw Error(j(308));kn=e,zi.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var Kt=null;function oo(e){Kt===null?Kt=[e]:Kt.push(e)}function kc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,oo(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function so(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,oo(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function si(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}function xs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Pi(e,t,n,r){var i=e.updateQueue;St=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?a=c:l.next=c,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(a!==null){var d=i.baseState;l=0,g=c=u=null,s=a;do{var f=s.lane,x=s.eventTime;if((r&f)===f){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,y=s;switch(f=t,x=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(x,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(x,d,f):v,f==null)break e;d=J({},d,f);break e;case 2:St=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else x={eventTime:x,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=x,u=d):g=g.next=x,l|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(g===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=d}}function ys(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Mr={},lt=Wt(Mr),wr=Wt(Mr),kr=Wt(Mr);function Gt(e){if(e===Mr)throw Error(j(174));return e}function uo(e,t){switch(B(kr,t),B(wr,e),B(lt,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qa(t,e)}V(lt),B(lt,t)}function On(){V(lt),V(wr),V(kr)}function jc(e){Gt(kr.current);var t=Gt(lt.current),n=qa(t,e.type);t!==n&&(B(wr,e),B(lt,n))}function co(e){wr.current===e&&(V(lt),V(wr))}var Y=Wt(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Na=[];function fo(){for(var e=0;e<Na.length;e++)Na[e]._workInProgressVersionPrimary=null;Na.length=0}var ui=xt.ReactCurrentDispatcher,Sa=xt.ReactCurrentBatchConfig,en=0,X=null,oe=null,de=null,Ti=!1,ar=!1,br=0,Mp=0;function ge(){throw Error(j(321))}function po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function mo(e,t,n,r,i,a){if(en=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ui.current=e===null||e.memoizedState===null?Dp:Ap,e=n(r,i),ar){a=0;do{if(ar=!1,br=0,25<=a)throw Error(j(301));a+=1,de=oe=null,t.updateQueue=null,ui.current=Ip,e=n(r,i)}while(ar)}if(ui.current=Mi,t=oe!==null&&oe.next!==null,en=0,de=oe=X=null,Ti=!1,t)throw Error(j(300));return e}function ho(){var e=br!==0;return br=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?X.memoizedState=de=e:de=de.next=e,de}function qe(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=de===null?X.memoizedState:de.next;if(t!==null)de=t,oe=e;else{if(e===null)throw Error(j(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},de===null?X.memoizedState=de=e:de=de.next=e}return de}function jr(e,t){return typeof t=="function"?t(e):t}function Ca(e){var t=qe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=l=null,u=null,c=a;do{var g=c.lane;if((en&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=d,l=r):u=u.next=d,X.lanes|=g,tn|=g}c=c.next}while(c!==null&&c!==a);u===null?l=r:u.next=s,tt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,X.lanes|=a,tn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ea(e){var t=qe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);tt(a,t.memoizedState)||(Pe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Nc(){}function Sc(e,t){var n=X,r=qe(),i=t(),a=!tt(r.memoizedState,i);if(a&&(r.memoizedState=i,Pe=!0),r=r.queue,go(_c.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Nr(9,Ec.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(j(349));en&30||Cc(n,t,i)}return i}function Cc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ec(e,t,n,r){t.value=n,t.getSnapshot=r,zc(t)&&Pc(e)}function _c(e,t,n){return n(function(){zc(t)&&Pc(e)})}function zc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Pc(e){var t=gt(e,1);t!==null&&et(t,e,1,-1)}function ws(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},t.queue=e,e=e.dispatch=$p.bind(null,X,e),[t.memoizedState,e]}function Nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lc(){return qe().memoizedState}function ci(e,t,n,r){var i=rt();X.flags|=e,i.memoizedState=Nr(1|t,n,void 0,r===void 0?null:r)}function Gi(e,t,n,r){var i=qe();r=r===void 0?null:r;var a=void 0;if(oe!==null){var l=oe.memoizedState;if(a=l.destroy,r!==null&&po(r,l.deps)){i.memoizedState=Nr(t,n,a,r);return}}X.flags|=e,i.memoizedState=Nr(1|t,n,a,r)}function ks(e,t){return ci(8390656,8,e,t)}function go(e,t){return Gi(2048,8,e,t)}function Tc(e,t){return Gi(4,2,e,t)}function Mc(e,t){return Gi(4,4,e,t)}function Rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oc(e,t,n){return n=n!=null?n.concat([e]):null,Gi(4,4,Rc.bind(null,t,e),n)}function vo(){}function $c(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dc(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&po(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ac(e,t,n){return en&21?(tt(n,t)||(n=Wu(),X.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function Rp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Sa.transition;Sa.transition={};try{e(!1),t()}finally{F=n,Sa.transition=r}}function Ic(){return qe().memoizedState}function Op(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(e))Uc(t,n);else if(n=kc(e,t,n,r),n!==null){var i=je();et(n,e,r,i),Bc(n,t,r)}}function $p(e,t,n){var r=Dt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Uc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,s=a(l,n);if(i.hasEagerState=!0,i.eagerState=s,tt(s,l)){var u=t.interleaved;u===null?(i.next=i,oo(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=kc(e,t,i,r),n!==null&&(i=je(),et(n,e,r,i),Bc(n,t,r))}}function Fc(e){var t=e.alternate;return e===X||t!==null&&t===X}function Uc(e,t){ar=Ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}var Mi={readContext:Qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Dp={readContext:Qe,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ci(4194308,4,Rc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return ci(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Op.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:ws,useDebugValue:vo,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=ws(!1),t=e[0];return e=Rp.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=rt();if(q){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),fe===null)throw Error(j(349));en&30||Cc(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ks(_c.bind(null,r,a,e),[e]),r.flags|=2048,Nr(9,Ec.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=rt(),t=fe.identifierPrefix;if(q){var n=ft,r=dt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ap={readContext:Qe,useCallback:$c,useContext:Qe,useEffect:go,useImperativeHandle:Oc,useInsertionEffect:Tc,useLayoutEffect:Mc,useMemo:Dc,useReducer:Ca,useRef:Lc,useState:function(){return Ca(jr)},useDebugValue:vo,useDeferredValue:function(e){var t=qe();return Ac(t,oe.memoizedState,e)},useTransition:function(){var e=Ca(jr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Nc,useSyncExternalStore:Sc,useId:Ic,unstable_isNewReconciler:!1},Ip={readContext:Qe,useCallback:$c,useContext:Qe,useEffect:go,useImperativeHandle:Oc,useInsertionEffect:Tc,useLayoutEffect:Mc,useMemo:Dc,useReducer:Ea,useRef:Lc,useState:function(){return Ea(jr)},useDebugValue:vo,useDeferredValue:function(e){var t=qe();return oe===null?t.memoizedState=e:Ac(t,oe.memoizedState,e)},useTransition:function(){var e=Ea(jr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Nc,useSyncExternalStore:Sc,useId:Ic,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yi={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=Dt(e),a=pt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Ot(e,a,i),t!==null&&(et(t,e,i,r),si(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=Dt(e),a=pt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ot(e,a,i),t!==null&&(et(t,e,i,r),si(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Dt(e),i=pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ot(e,i,r),t!==null&&(et(t,e,r,n),si(t,e,r))}};function bs(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(i,a):!0}function Wc(e,t,n){var r=!1,i=Ut,a=t.contextType;return typeof a=="object"&&a!==null?a=Qe(a):(i=Te(t)?Jt:ye.current,r=t.contextTypes,a=(r=r!=null)?Tn(e,i):Ut),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function hl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},so(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Qe(a):(a=Te(t)?Jt:ye.current,i.context=Tn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ml(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yi.enqueueReplaceState(i,i.state,null),Pi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var n="",r=t;do n+=pf(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function _a(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Fp=typeof WeakMap=="function"?WeakMap:Map;function Hc(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,Cl=r),gl(e,t)},n}function Vc(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){gl(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ns(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=em.bind(null,e,t,n),t.then(e,e))}function Ss(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var Up=xt.ReactCurrentOwner,Pe=!1;function be(e,t,n,r){t.child=e===null?wc(t,null,n,r):Rn(t,e.child,n,r)}function Es(e,t,n,r,i){n=n.render;var a=t.ref;return zn(t,i),r=mo(e,t,n,r,a,i),n=ho(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(q&&n&&to(t),t.flags|=1,be(e,t,r,i),t.child)}function _s(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!So(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Qc(e,t,a,r,i)):(e=mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:gr,n(l,r)&&e.ref===t.ref)return vt(e,t,i)}return t.flags|=1,e=At(a,r),e.ref=t.ref,e.return=t,t.child=e}function Qc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(gr(a,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,vt(e,t,i)}return vl(e,t,n,r,i)}function qc(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(jn,Oe),Oe|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(jn,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,B(jn,Oe),Oe|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,B(jn,Oe),Oe|=r;return be(e,t,i,n),t.child}function Kc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vl(e,t,n,r,i){var a=Te(n)?Jt:ye.current;return a=Tn(t,a),zn(t,i),n=mo(e,t,n,r,a,i),r=ho(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(q&&r&&to(t),t.flags|=1,be(e,t,n,i),t.child)}function zs(e,t,n,r,i){if(Te(n)){var a=!0;Si(t)}else a=!1;if(zn(t,i),t.stateNode===null)di(e,t),Wc(t,n,r),hl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qe(c):(c=Te(n)?Jt:ye.current,c=Tn(t,c));var g=n.getDerivedStateFromProps,d=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&js(t,l,r,c),St=!1;var f=t.memoizedState;l.state=f,Pi(t,r,l,i),u=t.memoizedState,s!==r||f!==u||Le.current||St?(typeof g=="function"&&(ml(t,n,g,r),u=t.memoizedState),(s=St||bs(t,n,s,r,f,u,c))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,bc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ye(t.type,s),l.props=c,d=t.pendingProps,f=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Qe(u):(u=Te(n)?Jt:ye.current,u=Tn(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||f!==u)&&js(t,l,r,u),St=!1,f=t.memoizedState,l.state=f,Pi(t,r,l,i);var v=t.memoizedState;s!==d||f!==v||Le.current||St?(typeof x=="function"&&(ml(t,n,x,r),v=t.memoizedState),(c=St||bs(t,n,c,r,f,v,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return xl(e,t,n,r,a,i)}function xl(e,t,n,r,i,a){Kc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ms(t,n,!1),vt(e,t,a);r=t.stateNode,Up.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Rn(t,e.child,null,a),t.child=Rn(t,null,s,a)):be(e,t,s,a),t.memoizedState=r.state,i&&ms(t,n,!0),t.child}function Gc(e){var t=e.stateNode;t.pendingContext?ps(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ps(e,t.context,!1),uo(e,t.containerInfo)}function Ps(e,t,n,r,i){return Mn(),ro(i),t.flags|=256,be(e,t,n,r),t.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yc(e,t,n){var r=t.pendingProps,i=Y.current,a=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Y,i&1),e===null)return fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Zi(l,r,0,null),e=Xt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=wl(n),t.memoizedState=yl,e):xo(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Bp(e,t,l,r,s,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=At(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=At(s,a):(a=Xt(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?wl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=yl,r}return a=e.child,e=a.sibling,r=At(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xo(e,t){return t=Zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yr(e,t,n,r){return r!==null&&ro(r),Rn(t,e.child,null,n),e=xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bp(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=_a(Error(j(422))),Yr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Zi({mode:"visible",children:r.children},i,0,null),a=Xt(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Rn(t,e.child,null,l),t.child.memoizedState=wl(l),t.memoizedState=yl,a);if(!(t.mode&1))return Yr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(j(419)),r=_a(a,r,void 0),Yr(e,t,l,r)}if(s=(l&e.childLanes)!==0,Pe||s){if(r=fe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,gt(e,i),et(r,e,i,-1))}return No(),r=_a(Error(j(421))),Yr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=tm.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,$e=Rt(i.nextSibling),De=t,q=!0,Je=null,e!==null&&(Be[We++]=dt,Be[We++]=ft,Be[We++]=Zt,dt=e.id,ft=e.overflow,Zt=t),t=xo(t,r.children),t.flags|=4096,t)}function Ls(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pl(e.return,t,n)}function za(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Xc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(be(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,n,t);else if(e.tag===19)Ls(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Li(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),za(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Li(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}za(t,!0,n,null,a);break;case"together":za(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wp(e,t,n){switch(t.tag){case 3:Gc(t),Mn();break;case 5:jc(t);break;case 1:Te(t.type)&&Si(t);break;case 4:uo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(_i,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Yc(e,t,n):(B(Y,Y.current&1),e=vt(e,t,n),e!==null?e.sibling:null);B(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,qc(e,t,n)}return vt(e,t,n)}var Jc,kl,Zc,ed;Jc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kl=function(){};Zc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gt(lt.current);var a=null;switch(n){case"input":i=Wa(e,i),r=Wa(e,r),a=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),a=[];break;case"textarea":i=Qa(e,i),r=Qa(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ji)}Ka(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ur.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(a||(a=[]),a.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ur.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&H("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};ed=function(e,t,n,r){n!==r&&(t.flags|=4)};function qn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hp(e,t,n){var r=t.pendingProps;switch(no(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Te(t.type)&&Ni(),ve(t),null;case 3:return r=t.stateNode,On(),V(Le),V(ye),fo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(zl(Je),Je=null))),kl(e,t),ve(t),null;case 5:co(t);var i=Gt(kr.current);if(n=t.type,e!==null&&t.stateNode!=null)Zc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ve(t),null}if(e=Gt(lt.current),Kr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[it]=t,r[yr]=a,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Zn.length;i++)H(Zn[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Fo(r,a),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},H("invalid",r);break;case"textarea":Bo(r,a),H("invalid",r)}Ka(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&qr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&qr(r.textContent,s,e),i=["children",""+s]):ur.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":Ir(r),Uo(r,a,!0);break;case"textarea":Ir(r),Wo(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ji)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_u(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[it]=t,e[yr]=r,Jc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ga(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zn.length;i++)H(Zn[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Fo(e,r),i=Wa(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),H("invalid",e);break;case"textarea":Bo(e,r),i=Qa(e,r),H("invalid",e);break;default:i=r}Ka(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?Lu(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&zu(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&cr(e,u):typeof u=="number"&&cr(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ur.hasOwnProperty(a)?u!=null&&a==="onScroll"&&H("scroll",e):u!=null&&Ul(e,a,u,l))}switch(n){case"input":Ir(e),Uo(e,r,!1);break;case"textarea":Ir(e),Wo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Sn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ji)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)ed(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Gt(kr.current),Gt(lt.current),Kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(a=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return ve(t),null;case 13:if(V(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&$e!==null&&t.mode&1&&!(t.flags&128))xc(),Mn(),t.flags|=98560,a=!1;else if(a=Kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(j(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[it]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),a=!1}else Je!==null&&(zl(Je),Je=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?se===0&&(se=3):No())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return On(),kl(e,t),e===null&&vr(t.stateNode.containerInfo),ve(t),null;case 10:return lo(t.type._context),ve(t),null;case 17:return Te(t.type)&&Ni(),ve(t),null;case 19:if(V(Y),a=t.memoizedState,a===null)return ve(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)qn(a,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Li(e),l!==null){for(t.flags|=128,qn(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Y,Y.current&1|2),t.child}e=e.sibling}a.tail!==null&&ne()>Dn&&(t.flags|=128,r=!0,qn(a,!1),t.lanes=4194304)}else{if(!r)if(e=Li(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!q)return ve(t),null}else 2*ne()-a.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,qn(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ne(),t.sibling=null,n=Y.current,B(Y,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return jo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Vp(e,t){switch(no(t),t.tag){case 1:return Te(t.type)&&Ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),V(Le),V(ye),fo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return co(t),null;case 13:if(V(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Y),null;case 4:return On(),null;case 10:return lo(t.type._context),null;case 22:case 23:return jo(),null;case 24:return null;default:return null}}var Xr=!1,xe=!1,Qp=typeof WeakSet=="function"?WeakSet:Set,P=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function bl(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Ts=!1;function qp(e,t){if(al=wi,e=ac(),eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,g=0,d=e,f=null;t:for(;;){for(var x;d!==n||i!==0&&d.nodeType!==3||(s=l+i),d!==a||r!==0&&d.nodeType!==3||(u=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(x=d.firstChild)!==null;)f=d,d=x;for(;;){if(d===e)break t;if(f===n&&++c===i&&(s=l),f===a&&++g===r&&(u=l),(x=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ll={focusedElem:e,selectionRange:n},wi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,b=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ye(t.type,y),b);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=Ts,Ts=!1,v}function lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&bl(t,n,a)}i=i.next}while(i!==r)}}function Xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function jl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function td(e){var t=e.alternate;t!==null&&(e.alternate=null,td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[yr],delete t[ul],delete t[zp],delete t[Pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nd(e){return e.tag===5||e.tag===3||e.tag===4}function Ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(r!==4&&(e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}var pe=null,Xe=!1;function bt(e,t,n){for(n=n.child;n!==null;)rd(e,t,n),n=n.sibling}function rd(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Wi,n)}catch{}switch(n.tag){case 5:xe||bn(n,t);case 6:var r=pe,i=Xe;pe=null,bt(e,t,n),pe=r,Xe=i,pe!==null&&(Xe?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Xe?(e=pe,n=n.stateNode,e.nodeType===8?ba(e.parentNode,n):e.nodeType===1&&ba(e,n),mr(e)):ba(pe,n.stateNode));break;case 4:r=pe,i=Xe,pe=n.stateNode.containerInfo,Xe=!0,bt(e,t,n),pe=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&bl(n,t,l),i=i.next}while(i!==r)}bt(e,t,n);break;case 1:if(!xe&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,bt(e,t,n),xe=r):bt(e,t,n);break;default:bt(e,t,n)}}function Rs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qp),t.forEach(function(r){var i=nm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,Xe=!1;break e;case 3:pe=s.stateNode.containerInfo,Xe=!0;break e;case 4:pe=s.stateNode.containerInfo,Xe=!0;break e}s=s.return}if(pe===null)throw Error(j(160));rd(a,l,i),pe=null,Xe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ee(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)id(t,e),t=t.sibling}function id(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),nt(e),r&4){try{lr(3,e,e.return),Xi(3,e)}catch(y){ee(e,e.return,y)}try{lr(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:Ke(t,e),nt(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(Ke(t,e),nt(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var i=e.stateNode;try{cr(i,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Cu(i,a),Ga(s,l);var c=Ga(s,a);for(l=0;l<u.length;l+=2){var g=u[l],d=u[l+1];g==="style"?Lu(i,d):g==="dangerouslySetInnerHTML"?zu(i,d):g==="children"?cr(i,d):Ul(i,g,d,c)}switch(s){case"input":Ha(i,a);break;case"textarea":Eu(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?Sn(i,!!a.multiple,x,!1):f!==!!a.multiple&&(a.defaultValue!=null?Sn(i,!!a.multiple,a.defaultValue,!0):Sn(i,!!a.multiple,a.multiple?[]:"",!1))}i[yr]=a}catch(y){ee(e,e.return,y)}}break;case 6:if(Ke(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){ee(e,e.return,y)}}break;case 3:if(Ke(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:Ke(t,e),nt(e);break;case 13:Ke(t,e),nt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ko=ne())),r&4&&Rs(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(c=xe)||g,Ke(t,e),xe=c):Ke(t,e),nt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(P=e,g=e.child;g!==null;){for(d=P=g;P!==null;){switch(f=P,x=f.child,f.tag){case 0:case 11:case 14:case 15:lr(4,f,f.return);break;case 1:bn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:bn(f,f.return);break;case 22:if(f.memoizedState!==null){$s(d);continue}}x!==null?(x.return=f,P=x):$s(d)}g=g.sibling}e:for(g=null,d=e;;){if(d.tag===5){if(g===null){g=d;try{i=d.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,u=d.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Pu("display",l))}catch(y){ee(e,e.return,y)}}}else if(d.tag===6){if(g===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){ee(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;g===d&&(g=null),d=d.return}g===d&&(g=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ke(t,e),nt(e),r&4&&Rs(e);break;case 21:break;default:Ke(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nd(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cr(i,""),r.flags&=-33);var a=Ms(e);Sl(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ms(e);Nl(e,s,l);break;default:throw Error(j(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kp(e,t,n){P=e,ad(e)}function ad(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Xr;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||xe;s=Xr;var c=xe;if(Xr=l,(xe=u)&&!c)for(P=i;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?Ds(i):u!==null?(u.return=l,P=u):Ds(i);for(;a!==null;)P=a,ad(a),a=a.sibling;P=i,Xr=s,xe=c}Os(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,P=a):Os(e)}}function Os(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Xi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ys(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ys(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var d=g.dehydrated;d!==null&&mr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}xe||t.flags&512&&jl(t)}catch(f){ee(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function $s(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Ds(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xi(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ee(t,i,u)}}var a=t.return;try{jl(t)}catch(u){ee(t,a,u)}break;case 5:var l=t.return;try{jl(t)}catch(u){ee(t,l,u)}}}catch(u){ee(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Gp=Math.ceil,Ri=xt.ReactCurrentDispatcher,yo=xt.ReactCurrentOwner,Ve=xt.ReactCurrentBatchConfig,I=0,fe=null,ie=null,me=0,Oe=0,jn=Wt(0),se=0,Sr=null,tn=0,Ji=0,wo=0,or=null,ze=null,ko=0,Dn=1/0,ut=null,Oi=!1,Cl=null,$t=null,Jr=!1,zt=null,$i=0,sr=0,El=null,fi=-1,pi=0;function je(){return I&6?ne():fi!==-1?fi:fi=ne()}function Dt(e){return e.mode&1?I&2&&me!==0?me&-me:Tp.transition!==null?(pi===0&&(pi=Wu()),pi):(e=F,e!==0||(e=window.event,e=e===void 0?16:Yu(e.type)),e):1}function et(e,t,n,r){if(50<sr)throw sr=0,El=null,Error(j(185));Pr(e,n,r),(!(I&2)||e!==fe)&&(e===fe&&(!(I&2)&&(Ji|=n),se===4&&Et(e,me)),Me(e,r),n===1&&I===0&&!(t.mode&1)&&(Dn=ne()+500,Ki&&Ht()))}function Me(e,t){var n=e.callbackNode;Tf(e,t);var r=yi(e,e===fe?me:0);if(r===0)n!==null&&Qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qo(n),t===1)e.tag===0?Lp(As.bind(null,e)):hc(As.bind(null,e)),Ep(function(){!(I&6)&&Ht()}),n=null;else{switch(Hu(r)){case 1:n=Ql;break;case 4:n=Uu;break;case 16:n=xi;break;case 536870912:n=Bu;break;default:n=xi}n=pd(n,ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ld(e,t){if(fi=-1,pi=0,I&6)throw Error(j(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var r=yi(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Di(e,r);else{t=r;var i=I;I|=2;var a=sd();(fe!==e||me!==t)&&(ut=null,Dn=ne()+500,Yt(e,t));do try{Jp();break}catch(s){od(e,s)}while(!0);ao(),Ri.current=a,I=i,ie!==null?t=0:(fe=null,me=0,t=se)}if(t!==0){if(t===2&&(i=el(e),i!==0&&(r=i,t=_l(e,i))),t===1)throw n=Sr,Yt(e,0),Et(e,r),Me(e,ne()),n;if(t===6)Et(e,r);else{if(i=e.current.alternate,!(r&30)&&!Yp(i)&&(t=Di(e,r),t===2&&(a=el(e),a!==0&&(r=a,t=_l(e,a))),t===1))throw n=Sr,Yt(e,0),Et(e,r),Me(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Qt(e,ze,ut);break;case 3:if(Et(e,r),(r&130023424)===r&&(t=ko+500-ne(),10<t)){if(yi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sl(Qt.bind(null,e,ze,ut),t);break}Qt(e,ze,ut);break;case 4:if(Et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ze(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gp(r/1960))-r,10<r){e.timeoutHandle=sl(Qt.bind(null,e,ze,ut),r);break}Qt(e,ze,ut);break;case 5:Qt(e,ze,ut);break;default:throw Error(j(329))}}}return Me(e,ne()),e.callbackNode===n?ld.bind(null,e):null}function _l(e,t){var n=or;return e.current.memoizedState.isDehydrated&&(Yt(e,t).flags|=256),e=Di(e,t),e!==2&&(t=ze,ze=n,t!==null&&zl(t)),e}function zl(e){ze===null?ze=e:ze.push.apply(ze,e)}function Yp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!tt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~wo,t&=~Ji,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function As(e){if(I&6)throw Error(j(327));Pn();var t=yi(e,0);if(!(t&1))return Me(e,ne()),null;var n=Di(e,t);if(e.tag!==0&&n===2){var r=el(e);r!==0&&(t=r,n=_l(e,r))}if(n===1)throw n=Sr,Yt(e,0),Et(e,t),Me(e,ne()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,ze,ut),Me(e,ne()),null}function bo(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Dn=ne()+500,Ki&&Ht())}}function nn(e){zt!==null&&zt.tag===0&&!(I&6)&&Pn();var t=I;I|=1;var n=Ve.transition,r=F;try{if(Ve.transition=null,F=1,e)return e()}finally{F=r,Ve.transition=n,I=t,!(I&6)&&Ht()}}function jo(){Oe=jn.current,V(jn)}function Yt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cp(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(no(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ni();break;case 3:On(),V(Le),V(ye),fo();break;case 5:co(r);break;case 4:On();break;case 13:V(Y);break;case 19:V(Y);break;case 10:lo(r.type._context);break;case 22:case 23:jo()}n=n.return}if(fe=e,ie=e=At(e.current,null),me=Oe=t,se=0,Sr=null,wo=Ji=tn=0,ze=or=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}Kt=null}return e}function od(e,t){do{var n=ie;try{if(ao(),ui.current=Mi,Ti){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ti=!1}if(en=0,de=oe=X=null,ar=!1,br=0,yo.current=null,n===null||n.return===null){se=1,Sr=t,ie=null;break}e:{var a=e,l=n.return,s=n,u=t;if(t=me,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,d=g.tag;if(!(g.mode&1)&&(d===0||d===11||d===15)){var f=g.alternate;f?(g.updateQueue=f.updateQueue,g.memoizedState=f.memoizedState,g.lanes=f.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Ss(l);if(x!==null){x.flags&=-257,Cs(x,l,s,a,t),x.mode&1&&Ns(a,c,t),t=x,u=c;var v=t.updateQueue;if(v===null){var y=new Set;y.add(u),t.updateQueue=y}else v.add(u);break e}else{if(!(t&1)){Ns(a,c,t),No();break e}u=Error(j(426))}}else if(q&&s.mode&1){var b=Ss(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Cs(b,l,s,a,t),ro($n(u,s));break e}}a=u=$n(u,s),se!==4&&(se=2),or===null?or=[a]:or.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Hc(a,u,t);xs(a,h);break e;case 1:s=u;var p=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&($t===null||!$t.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=Vc(a,s,t);xs(a,w);break e}}a=a.return}while(a!==null)}cd(n)}catch(N){t=N,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function sd(){var e=Ri.current;return Ri.current=Mi,e===null?Mi:e}function No(){(se===0||se===3||se===2)&&(se=4),fe===null||!(tn&268435455)&&!(Ji&268435455)||Et(fe,me)}function Di(e,t){var n=I;I|=2;var r=sd();(fe!==e||me!==t)&&(ut=null,Yt(e,t));do try{Xp();break}catch(i){od(e,i)}while(!0);if(ao(),I=n,Ri.current=r,ie!==null)throw Error(j(261));return fe=null,me=0,se}function Xp(){for(;ie!==null;)ud(ie)}function Jp(){for(;ie!==null&&!jf();)ud(ie)}function ud(e){var t=fd(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?cd(e):ie=t,yo.current=null}function cd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vp(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}else if(n=Hp(n,t,Oe),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function Qt(e,t,n){var r=F,i=Ve.transition;try{Ve.transition=null,F=1,Zp(e,t,n,r)}finally{Ve.transition=i,F=r}return null}function Zp(e,t,n,r){do Pn();while(zt!==null);if(I&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Mf(e,a),e===fe&&(ie=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jr||(Jr=!0,pd(xi,function(){return Pn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ve.transition,Ve.transition=null;var l=F;F=1;var s=I;I|=4,yo.current=null,qp(e,n),id(n,e),yp(ll),wi=!!al,ll=al=null,e.current=n,Kp(n),Nf(),I=s,F=l,Ve.transition=a}else e.current=n;if(Jr&&(Jr=!1,zt=e,$i=i),a=e.pendingLanes,a===0&&($t=null),Ef(n.stateNode),Me(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oi)throw Oi=!1,e=Cl,Cl=null,e;return $i&1&&e.tag!==0&&Pn(),a=e.pendingLanes,a&1?e===El?sr++:(sr=0,El=e):sr=0,Ht(),null}function Pn(){if(zt!==null){var e=Hu($i),t=Ve.transition,n=F;try{if(Ve.transition=null,F=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,$i=0,I&6)throw Error(j(331));var i=I;for(I|=4,P=e.current;P!==null;){var a=P,l=a.child;if(P.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(P=c;P!==null;){var g=P;switch(g.tag){case 0:case 11:case 15:lr(8,g,a)}var d=g.child;if(d!==null)d.return=g,P=d;else for(;P!==null;){g=P;var f=g.sibling,x=g.return;if(td(g),g===c){P=null;break}if(f!==null){f.return=x,P=f;break}P=x}}}var v=a.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}P=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,P=l;else e:for(;P!==null;){if(a=P,a.flags&2048)switch(a.tag){case 0:case 11:case 15:lr(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,P=h;break e}P=a.return}}var p=e.current;for(P=p;P!==null;){l=P;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,P=m;else e:for(l=p;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Xi(9,s)}}catch(N){ee(s,s.return,N)}if(s===l){P=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,P=w;break e}P=s.return}}if(I=i,Ht(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Wi,e)}catch{}r=!0}return r}finally{F=n,Ve.transition=t}}return!1}function Is(e,t,n){t=$n(n,t),t=Hc(e,t,1),e=Ot(e,t,1),t=je(),e!==null&&(Pr(e,1,t),Me(e,t))}function ee(e,t,n){if(e.tag===3)Is(e,e,n);else for(;t!==null;){if(t.tag===3){Is(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=$n(n,e),e=Vc(t,e,1),t=Ot(t,e,1),e=je(),t!==null&&(Pr(t,1,e),Me(t,e));break}}t=t.return}}function em(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(se===4||se===3&&(me&130023424)===me&&500>ne()-ko?Yt(e,0):wo|=n),Me(e,t)}function dd(e,t){t===0&&(e.mode&1?(t=Br,Br<<=1,!(Br&130023424)&&(Br=4194304)):t=1);var n=je();e=gt(e,t),e!==null&&(Pr(e,t,n),Me(e,n))}function tm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dd(e,n)}function nm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),dd(e,n)}var fd;fd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,Wp(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,q&&t.flags&1048576&&gc(t,Ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;di(e,t),e=t.pendingProps;var i=Tn(t,ye.current);zn(t,n),i=mo(null,t,r,e,i,n);var a=ho();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(a=!0,Si(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,so(t),i.updater=Yi,t.stateNode=i,i._reactInternals=t,hl(t,r,e,n),t=xl(null,t,r,!0,a,n)):(t.tag=0,q&&a&&to(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(di(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=im(r),e=Ye(r,e),i){case 0:t=vl(null,t,r,e,n);break e;case 1:t=zs(null,t,r,e,n);break e;case 11:t=Es(null,t,r,e,n);break e;case 14:t=_s(null,t,r,Ye(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),vl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),zs(e,t,r,i,n);case 3:e:{if(Gc(t),e===null)throw Error(j(387));r=t.pendingProps,a=t.memoizedState,i=a.element,bc(e,t),Pi(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=$n(Error(j(423)),t),t=Ps(e,t,r,n,i);break e}else if(r!==i){i=$n(Error(j(424)),t),t=Ps(e,t,r,n,i);break e}else for($e=Rt(t.stateNode.containerInfo.firstChild),De=t,q=!0,Je=null,n=wc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===i){t=vt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return jc(t),e===null&&fl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,ol(r,i)?l=null:a!==null&&ol(r,a)&&(t.flags|=32),Kc(e,t),be(e,t,l,n),t.child;case 6:return e===null&&fl(t),null;case 13:return Yc(e,t,n);case 4:return uo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Es(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,B(_i,r._currentValue),r._currentValue=l,a!==null)if(tt(a.value,l)){if(a.children===i.children&&!Le.current){t=vt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){l=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=pt(-1,n&-n),u.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),pl(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(j(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),pl(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zn(t,n),i=Qe(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),_s(e,t,r,i,n);case 15:return Qc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),di(e,t),t.tag=1,Te(r)?(e=!0,Si(t)):e=!1,zn(t,n),Wc(t,r,i),hl(t,r,i,n),xl(null,t,r,!0,e,n);case 19:return Xc(e,t,n);case 22:return qc(e,t,n)}throw Error(j(156,t.tag))};function pd(e,t){return Fu(e,t)}function rm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new rm(e,t,n,r)}function So(e){return e=e.prototype,!(!e||!e.isReactComponent)}function im(e){if(typeof e=="function")return So(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wl)return 11;if(e===Hl)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mi(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")So(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case pn:return Xt(n.children,i,a,t);case Bl:l=8,i|=8;break;case Ia:return e=He(12,n,t,i|2),e.elementType=Ia,e.lanes=a,e;case Fa:return e=He(13,n,t,i),e.elementType=Fa,e.lanes=a,e;case Ua:return e=He(19,n,t,i),e.elementType=Ua,e.lanes=a,e;case ju:return Zi(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ku:l=10;break e;case bu:l=9;break e;case Wl:l=11;break e;case Hl:l=14;break e;case Nt:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=He(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Xt(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Zi(e,t,n,r){return e=He(22,e,r,t),e.elementType=ju,e.lanes=n,e.stateNode={isHidden:!1},e}function Pa(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function La(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function am(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=da(0),this.expirationTimes=da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Co(e,t,n,r,i,a,l,s,u){return e=new am(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=He(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},so(a),e}function lm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function md(e){if(!e)return Ut;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Te(n))return mc(e,n,t)}return t}function hd(e,t,n,r,i,a,l,s,u){return e=Co(n,r,!0,e,i,a,l,s,u),e.context=md(null),n=e.current,r=je(),i=Dt(n),a=pt(r,i),a.callback=t??null,Ot(n,a,i),e.current.lanes=i,Pr(e,i,r),Me(e,r),e}function ea(e,t,n,r){var i=t.current,a=je(),l=Dt(i);return n=md(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(i,t,l),e!==null&&(et(e,i,l,a),si(e,i,l)),l}function Ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eo(e,t){Fs(e,t),(e=e.alternate)&&Fs(e,t)}function om(){return null}var gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function _o(e){this._internalRoot=e}ta.prototype.render=_o.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));ea(e,t,null,null)};ta.prototype.unmount=_o.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){ea(null,e,null,null)}),t[ht]=null}};function ta(e){this._internalRoot=e}ta.prototype.unstable_scheduleHydration=function(e){if(e){var t=qu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Gu(e)}};function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Us(){}function sm(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var c=Ai(l);a.call(c)}}var l=hd(t,r,e,0,null,!1,!1,"",Us);return e._reactRootContainer=l,e[ht]=l.current,vr(e.nodeType===8?e.parentNode:e),nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Ai(u);s.call(c)}}var u=Co(e,0,!1,null,null,!1,!1,"",Us);return e._reactRootContainer=u,e[ht]=u.current,vr(e.nodeType===8?e.parentNode:e),nn(function(){ea(t,u,n,r)}),u}function ra(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var s=i;i=function(){var u=Ai(l);s.call(u)}}ea(t,l,e,i)}else l=sm(n,t,e,i,r);return Ai(l)}Vu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jn(t.pendingLanes);n!==0&&(ql(t,n|1),Me(t,ne()),!(I&6)&&(Dn=ne()+500,Ht()))}break;case 13:nn(function(){var r=gt(e,1);if(r!==null){var i=je();et(r,e,1,i)}}),Eo(e,1)}};Kl=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=je();et(t,e,134217728,n)}Eo(e,134217728)}};Qu=function(e){if(e.tag===13){var t=Dt(e),n=gt(e,t);if(n!==null){var r=je();et(n,e,t,r)}Eo(e,t)}};qu=function(){return F};Ku=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Xa=function(e,t,n){switch(t){case"input":if(Ha(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qi(r);if(!i)throw Error(j(90));Su(r),Ha(r,i)}}}break;case"textarea":Eu(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};Ru=bo;Ou=nn;var um={usingClientEntryPoint:!1,Events:[Tr,vn,qi,Tu,Mu,bo]},Kn={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cm={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Au(e),e===null?null:e.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance||om,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Wi=Zr.inject(cm),at=Zr}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=um;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zo(t))throw Error(j(200));return lm(e,t,null,n)};Ie.createRoot=function(e,t){if(!zo(e))throw Error(j(299));var n=!1,r="",i=gd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Co(e,1,!1,null,null,n,!1,r,i),e[ht]=t.current,vr(e.nodeType===8?e.parentNode:e),new _o(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Au(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return nn(e)};Ie.hydrate=function(e,t,n){if(!na(t))throw Error(j(200));return ra(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!zo(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=gd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=hd(t,null,e,1,n??null,i,!1,a,l),e[ht]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ta(t)};Ie.render=function(e,t,n){if(!na(t))throw Error(j(200));return ra(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!na(e))throw Error(j(40));return e._reactRootContainer?(nn(function(){ra(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};Ie.unstable_batchedUpdates=bo;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!na(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return ra(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd)}catch(e){console.error(e)}}vd(),vu.exports=Ie;var dm=vu.exports,Bs=dm;Da.createRoot=Bs.createRoot,Da.hydrateRoot=Bs.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cr.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const Ws="popstate";function fm(e){e===void 0&&(e={});function t(i,a){let{pathname:l="/",search:s="",hash:u=""}=ln(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Pl("",{pathname:l,search:s,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let l=i.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");s=c===-1?u:u.slice(0,c)}return s+"#"+(typeof a=="string"?a:Ii(a))}function r(i,a){ia(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return mm(t,n,r,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ia(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pm(){return Math.random().toString(36).substr(2,8)}function Hs(e,t){return{usr:e.state,key:e.key,idx:t}}function Pl(e,t,n,r){return n===void 0&&(n=null),Cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ln(t):t,{state:n,key:t&&t.key||r||pm()})}function Ii(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function mm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,s=Pt.Pop,u=null,c=g();c==null&&(c=0,l.replaceState(Cr({},l.state,{idx:c}),""));function g(){return(l.state||{idx:null}).idx}function d(){s=Pt.Pop;let b=g(),h=b==null?null:b-c;c=b,u&&u({action:s,location:y.location,delta:h})}function f(b,h){s=Pt.Push;let p=Pl(y.location,b,h);n&&n(p,b),c=g()+1;let m=Hs(p,c),w=y.createHref(p);try{l.pushState(m,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(w)}a&&u&&u({action:s,location:y.location,delta:1})}function x(b,h){s=Pt.Replace;let p=Pl(y.location,b,h);n&&n(p,b),c=g();let m=Hs(p,c),w=y.createHref(p);l.replaceState(m,"",w),a&&u&&u({action:s,location:y.location,delta:0})}function v(b){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof b=="string"?b:Ii(b);return p=p.replace(/ $/,"%20"),ae(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let y={get action(){return s},get location(){return e(i,l)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ws,d),u=b,()=>{i.removeEventListener(Ws,d),u=null}},createHref(b){return t(i,b)},createURL:v,encodeLocation(b){let h=v(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:x,go(b){return l.go(b)}};return y}var Vs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vs||(Vs={}));function hm(e,t,n){return n===void 0&&(n="/"),gm(e,t,n)}function gm(e,t,n,r){let i=typeof t=="string"?ln(t):t,a=Po(i.pathname||"/",n);if(a==null)return null;let l=xd(e);vm(l);let s=null;for(let u=0;s==null&&u<l.length;++u){let c=zm(a);s=Cm(l[u],c)}return s}function xd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,s)=>{let u={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};u.relativePath.startsWith("/")&&(ae(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=It([r,u.relativePath]),g=n.concat(u);a.children&&a.children.length>0&&(ae(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xd(a.children,t,g,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:Nm(c,a.index),routesMeta:g})};return e.forEach((a,l)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,l);else for(let u of yd(a.path))i(a,l,u)}),t}function yd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=yd(r.join("/")),s=[];return s.push(...l.map(u=>u===""?a:[a,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function vm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Sm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xm=/^:[\w-]+$/,ym=3,wm=2,km=1,bm=10,jm=-2,Qs=e=>e==="*";function Nm(e,t){let n=e.split("/"),r=n.length;return n.some(Qs)&&(r+=jm),t&&(r+=wm),n.filter(i=>!Qs(i)).reduce((i,a)=>i+(xm.test(a)?ym:a===""?km:bm),r)}function Sm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Cm(e,t,n){let{routesMeta:r}=e,i={},a="/",l=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,g=a==="/"?t:t.slice(a.length)||"/",d=Em({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),f=u.route;if(!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:It([a,d.pathname]),pathnameBase:Rm(It([a,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(a=It([a,d.pathnameBase]))}return l}function Em(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_m(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,g,d)=>{let{paramName:f,isOptional:x}=g;if(f==="*"){let y=s[d]||"";l=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const v=s[d];return x&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:l,pattern:e}}function _m(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ia(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function zm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ia(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Po(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lm=e=>Pm.test(e);function Tm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ln(e):e,a;if(n)if(Lm(n))a=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),ia(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?a=qs(n.substring(1),"/"):a=qs(n,t)}else a=t;return{pathname:a,search:Om(r),hash:$m(i)}}function qs(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ta(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wd(e,t){let n=Mm(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ln(e):(i=Cr({},e),ae(!i.pathname||!i.pathname.includes("?"),Ta("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),Ta("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),Ta("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,s;if(l==null)s=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}s=d>=0?t[d]:"/"}let u=Tm(i,s),c=l&&l!=="/"&&l.endsWith("/"),g=(a||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const It=e=>e.join("/").replace(/\/\/+/g,"/"),Rm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Om=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$m=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bd=["post","put","patch","delete"];new Set(bd);const Am=["get",...bd];new Set(Am);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Er(){return Er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Er.apply(this,arguments)}const Lo=k.createContext(null),Im=k.createContext(null),on=k.createContext(null),aa=k.createContext(null),sn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),jd=k.createContext(null);function Fm(e,t){let{relative:n}=t===void 0?{}:t;Rr()||ae(!1);let{basename:r,navigator:i}=k.useContext(on),{hash:a,pathname:l,search:s}=Sd(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:It([r,l])),i.createHref({pathname:u,search:s,hash:a})}function Rr(){return k.useContext(aa)!=null}function Or(){return Rr()||ae(!1),k.useContext(aa).location}function Nd(e){k.useContext(on).static||k.useLayoutEffect(e)}function Um(){let{isDataRoute:e}=k.useContext(sn);return e?e0():Bm()}function Bm(){Rr()||ae(!1);let e=k.useContext(Lo),{basename:t,future:n,navigator:r}=k.useContext(on),{matches:i}=k.useContext(sn),{pathname:a}=Or(),l=JSON.stringify(wd(i,n.v7_relativeSplatPath)),s=k.useRef(!1);return Nd(()=>{s.current=!0}),k.useCallback(function(c,g){if(g===void 0&&(g={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let d=kd(c,JSON.parse(l),a,g.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:It([t,d.pathname])),(g.replace?r.replace:r.push)(d,g.state,g)},[t,r,l,a,e])}function Sd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(on),{matches:i}=k.useContext(sn),{pathname:a}=Or(),l=JSON.stringify(wd(i,r.v7_relativeSplatPath));return k.useMemo(()=>kd(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function Wm(e,t){return Hm(e,t)}function Hm(e,t,n,r){Rr()||ae(!1);let{navigator:i}=k.useContext(on),{matches:a}=k.useContext(sn),l=a[a.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=Or(),g;if(t){var d;let b=typeof t=="string"?ln(t):t;u==="/"||(d=b.pathname)!=null&&d.startsWith(u)||ae(!1),g=b}else g=c;let f=g.pathname||"/",x=f;if(u!=="/"){let b=u.replace(/^\//,"").split("/");x="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=hm(e,{pathname:x}),y=Gm(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:It([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:It([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n,r);return t&&y?k.createElement(aa.Provider,{value:{location:Er({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Pt.Pop}},y):y}function Vm(){let e=Zm(),t=Dm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const Qm=k.createElement(Vm,null);class qm extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(sn.Provider,{value:this.props.routeContext},k.createElement(jd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Km(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Lo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(sn.Provider,{value:t},r)}function Gm(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let g=l.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);g>=0||ae(!1),l=l.slice(0,Math.min(l.length,g+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let d=l[g];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=g),d.route.id){let{loaderData:f,errors:x}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!x||x[d.route.id]===void 0);if(d.route.lazy||v){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((g,d,f)=>{let x,v=!1,y=null,b=null;n&&(x=s&&d.route.id?s[d.route.id]:void 0,y=d.route.errorElement||Qm,u&&(c<0&&f===0?(t0("route-fallback"),v=!0,b=null):c===f&&(v=!0,b=d.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,f+1)),p=()=>{let m;return x?m=y:v?m=b:d.route.Component?m=k.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=g,k.createElement(Km,{match:d,routeContext:{outlet:g,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?k.createElement(qm,{location:n.location,revalidation:n.revalidation,component:y,error:x,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Cd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cd||{}),Ed=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ed||{});function Ym(e){let t=k.useContext(Lo);return t||ae(!1),t}function Xm(e){let t=k.useContext(Im);return t||ae(!1),t}function Jm(e){let t=k.useContext(sn);return t||ae(!1),t}function _d(e){let t=Jm(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function Zm(){var e;let t=k.useContext(jd),n=Xm(),r=_d();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function e0(){let{router:e}=Ym(Cd.UseNavigateStable),t=_d(Ed.UseNavigateStable),n=k.useRef(!1);return Nd(()=>{n.current=!0}),k.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Er({fromRouteId:t},a)))},[e,t])}const Ks={};function t0(e,t,n){Ks[e]||(Ks[e]=!0)}function n0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function dn(e){ae(!1)}function r0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pt.Pop,navigator:a,static:l=!1,future:s}=e;Rr()&&ae(!1);let u=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:a,static:l,future:Er({v7_relativeSplatPath:!1},s)}),[u,s,a,l]);typeof r=="string"&&(r=ln(r));let{pathname:g="/",search:d="",hash:f="",state:x=null,key:v="default"}=r,y=k.useMemo(()=>{let b=Po(g,u);return b==null?null:{location:{pathname:b,search:d,hash:f,state:x,key:v},navigationType:i}},[u,g,d,f,x,v,i]);return y==null?null:k.createElement(on.Provider,{value:c},k.createElement(aa.Provider,{children:n,value:y}))}function i0(e){let{children:t,location:n}=e;return Wm(Ll(t),n)}new Promise(()=>{});function Ll(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let a=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Ll(r.props.children,a));return}r.type!==dn&&ae(!1),!r.props.index||!r.props.children||ae(!1);let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ll(r.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tl.apply(this,arguments)}function a0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function l0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function o0(e,t){return e.button===0&&(!t||t==="_self")&&!l0(e)}const s0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],u0="6";try{window.__reactRouterVersion=u0}catch{}const c0="startTransition",Gs=Zd[c0];function d0(e){let{basename:t,children:n,future:r,window:i}=e,a=k.useRef();a.current==null&&(a.current=fm({window:i,v5Compat:!0}));let l=a.current,[s,u]=k.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},g=k.useCallback(d=>{c&&Gs?Gs(()=>u(d)):u(d)},[u,c]);return k.useLayoutEffect(()=>l.listen(g),[l,g]),k.useEffect(()=>n0(r),[r]),k.createElement(r0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const f0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nn=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:l,state:s,target:u,to:c,preventScrollReset:g,viewTransition:d}=t,f=a0(t,s0),{basename:x}=k.useContext(on),v,y=!1;if(typeof c=="string"&&p0.test(c)&&(v=c,f0))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),N=Po(w.pathname,x);w.origin===m.origin&&N!=null?c=N+w.search+w.hash:y=!0}catch{}let b=Fm(c,{relative:i}),h=m0(c,{replace:l,state:s,target:u,preventScrollReset:g,relative:i,viewTransition:d});function p(m){r&&r(m),m.defaultPrevented||h(m)}return k.createElement("a",Tl({},f,{href:v||b,onClick:y||a?r:p,ref:n,target:u}))});var Ys;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ys||(Ys={}));var Xs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xs||(Xs={}));function m0(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:l,viewTransition:s}=t===void 0?{}:t,u=Um(),c=Or(),g=Sd(e,{relative:l});return k.useCallback(d=>{if(o0(d,n)){d.preventDefault();let f=r!==void 0?r:Ii(c)===Ii(g);u(e,{replace:f,state:i,preventScrollReset:a,relative:l,viewTransition:s})}},[c,u,g,r,i,n,e,a,l,s])}var zd={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Dd,function(){return function(n){function r(a){if(i[a])return i[a].exports;var l=i[a]={exports:{},id:a,loaded:!1};return n[a].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var i={};return r.m=n,r.c=i,r.p="dist/",r(0)}([function(n,r,i){function a(M){return M&&M.__esModule?M:{default:M}}var l=Object.assign||function(M){for(var ue=1;ue<arguments.length;ue++){var we=arguments[ue];for(var Ue in we)Object.prototype.hasOwnProperty.call(we,Ue)&&(M[Ue]=we[Ue])}return M},s=i(1),u=(a(s),i(6)),c=a(u),g=i(7),d=a(g),f=i(8),x=a(f),v=i(9),y=a(v),b=i(10),h=a(b),p=i(11),m=a(p),w=i(14),N=a(w),S=[],E=!1,C={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){var M=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(M&&(E=!0),E)return S=(0,m.default)(S,C),(0,h.default)(S,C.once),S},R=function(){S=(0,N.default)(),A()},L=function(){S.forEach(function(M,ue){M.node.removeAttribute("data-aos"),M.node.removeAttribute("data-aos-easing"),M.node.removeAttribute("data-aos-duration"),M.node.removeAttribute("data-aos-delay")})},z=function(M){return M===!0||M==="mobile"&&y.default.mobile()||M==="phone"&&y.default.phone()||M==="tablet"&&y.default.tablet()||typeof M=="function"&&M()===!0},D=function(M){C=l(C,M),S=(0,N.default)();var ue=document.all&&!window.atob;return z(C.disable)||ue?L():(C.disableMutationObserver||x.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),C.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",C.easing),document.querySelector("body").setAttribute("data-aos-duration",C.duration),document.querySelector("body").setAttribute("data-aos-delay",C.delay),C.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):C.startEvent==="load"?window.addEventListener(C.startEvent,function(){A(!0)}):document.addEventListener(C.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,d.default)(A,C.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(A,C.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,h.default)(S,C.once)},C.throttleDelay)),C.disableMutationObserver||x.default.ready("[data-aos]",R),S)};n.exports={init:D,refresh:A,refreshHard:R}},function(n,r){},,,,,function(n,r){(function(i){function a(z,D,M){function ue(U){var Ee=re,kt=Ce;return re=Ce=void 0,yt=U,Z=z.apply(kt,Ee)}function we(U){return yt=U,le=setTimeout(T,D),wt?ue(U):Z}function Ue(U){var Ee=U-Re,kt=U-yt,Mo=D-Ee;return ot?R(Mo,ce-kt):Mo}function _(U){var Ee=U-Re,kt=U-yt;return Re===void 0||Ee>=D||Ee<0||ot&&kt>=ce}function T(){var U=L();return _(U)?O(U):void(le=setTimeout(T,Ue(U)))}function O(U){return le=void 0,K&&re?ue(U):(re=Ce=void 0,Z)}function W(){le!==void 0&&clearTimeout(le),yt=0,re=Re=Ce=le=void 0}function Q(){return le===void 0?Z:O(L())}function ke(){var U=L(),Ee=_(U);if(re=arguments,Ce=this,Re=U,Ee){if(le===void 0)return we(Re);if(ot)return le=setTimeout(T,D),ue(Re)}return le===void 0&&(le=setTimeout(T,D)),Z}var re,Ce,ce,Z,le,Re,yt=0,wt=!1,ot=!1,K=!0;if(typeof z!="function")throw new TypeError(f);return D=g(D)||0,s(M)&&(wt=!!M.leading,ot="maxWait"in M,ce=ot?A(g(M.maxWait)||0,D):ce,K="trailing"in M?!!M.trailing:K),ke.cancel=W,ke.flush=Q,ke}function l(z,D,M){var ue=!0,we=!0;if(typeof z!="function")throw new TypeError(f);return s(M)&&(ue="leading"in M?!!M.leading:ue,we="trailing"in M?!!M.trailing:we),a(z,D,{leading:ue,maxWait:D,trailing:we})}function s(z){var D=typeof z>"u"?"undefined":d(z);return!!z&&(D=="object"||D=="function")}function u(z){return!!z&&(typeof z>"u"?"undefined":d(z))=="object"}function c(z){return(typeof z>"u"?"undefined":d(z))=="symbol"||u(z)&&C.call(z)==v}function g(z){if(typeof z=="number")return z;if(c(z))return x;if(s(z)){var D=typeof z.valueOf=="function"?z.valueOf():z;z=s(D)?D+"":D}if(typeof z!="string")return z===0?z:+z;z=z.replace(y,"");var M=h.test(z);return M||p.test(z)?m(z.slice(2),M?2:8):b.test(z)?x:+z}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},f="Expected a function",x=NaN,v="[object Symbol]",y=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,w=(typeof i>"u"?"undefined":d(i))=="object"&&i&&i.Object===Object&&i,N=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,S=w||N||Function("return this")(),E=Object.prototype,C=E.toString,A=Math.max,R=Math.min,L=function(){return S.Date.now()};n.exports=l}).call(r,function(){return this}())},function(n,r){(function(i){function a(L,z,D){function M(K){var U=ke,Ee=re;return ke=re=void 0,Re=K,ce=L.apply(Ee,U)}function ue(K){return Re=K,Z=setTimeout(_,z),yt?M(K):ce}function we(K){var U=K-le,Ee=K-Re,kt=z-U;return wt?A(kt,Ce-Ee):kt}function Ue(K){var U=K-le,Ee=K-Re;return le===void 0||U>=z||U<0||wt&&Ee>=Ce}function _(){var K=R();return Ue(K)?T(K):void(Z=setTimeout(_,we(K)))}function T(K){return Z=void 0,ot&&ke?M(K):(ke=re=void 0,ce)}function O(){Z!==void 0&&clearTimeout(Z),Re=0,ke=le=re=Z=void 0}function W(){return Z===void 0?ce:T(R())}function Q(){var K=R(),U=Ue(K);if(ke=arguments,re=this,le=K,U){if(Z===void 0)return ue(le);if(wt)return Z=setTimeout(_,z),M(le)}return Z===void 0&&(Z=setTimeout(_,z)),ce}var ke,re,Ce,ce,Z,le,Re=0,yt=!1,wt=!1,ot=!0;if(typeof L!="function")throw new TypeError(d);return z=c(z)||0,l(D)&&(yt=!!D.leading,wt="maxWait"in D,Ce=wt?C(c(D.maxWait)||0,z):Ce,ot="trailing"in D?!!D.trailing:ot),Q.cancel=O,Q.flush=W,Q}function l(L){var z=typeof L>"u"?"undefined":g(L);return!!L&&(z=="object"||z=="function")}function s(L){return!!L&&(typeof L>"u"?"undefined":g(L))=="object"}function u(L){return(typeof L>"u"?"undefined":g(L))=="symbol"||s(L)&&E.call(L)==x}function c(L){if(typeof L=="number")return L;if(u(L))return f;if(l(L)){var z=typeof L.valueOf=="function"?L.valueOf():L;L=l(z)?z+"":z}if(typeof L!="string")return L===0?L:+L;L=L.replace(v,"");var D=b.test(L);return D||h.test(L)?p(L.slice(2),D?2:8):y.test(L)?f:+L}var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},d="Expected a function",f=NaN,x="[object Symbol]",v=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,h=/^0o[0-7]+$/i,p=parseInt,m=(typeof i>"u"?"undefined":g(i))=="object"&&i&&i.Object===Object&&i,w=(typeof self>"u"?"undefined":g(self))=="object"&&self&&self.Object===Object&&self,N=m||w||Function("return this")(),S=Object.prototype,E=S.toString,C=Math.max,A=Math.min,R=function(){return N.Date.now()};n.exports=a}).call(r,function(){return this}())},function(n,r){function i(g){var d=void 0,f=void 0;for(d=0;d<g.length;d+=1)if(f=g[d],f.dataset&&f.dataset.aos||f.children&&i(f.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function l(){return!!a()}function s(g,d){var f=window.document,x=a(),v=new x(u);c=d,v.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function u(g){g&&g.forEach(function(d){var f=Array.prototype.slice.call(d.addedNodes),x=Array.prototype.slice.call(d.removedNodes),v=f.concat(x);if(i(v))return c()})}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){};r.default={isSupported:l,ready:s}},function(n,r){function i(f,x){if(!(f instanceof x))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var l=function(){function f(x,v){for(var y=0;y<v.length;y++){var b=v[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(x,b.key,b)}}return function(x,v,y){return v&&f(x.prototype,v),y&&f(x,y),x}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,g=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function f(){i(this,f)}return l(f,[{key:"phone",value:function(){var x=a();return!(!s.test(x)&&!u.test(x.substr(0,4)))}},{key:"mobile",value:function(){var x=a();return!(!c.test(x)&&!g.test(x.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();r.default=new d},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(l,s,u){var c=l.node.getAttribute("data-aos-once");s>l.position?l.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!u&&c!=="true")&&l.node.classList.remove("aos-animate")},a=function(l,s){var u=window.pageYOffset,c=window.innerHeight;l.forEach(function(g,d){i(g,c+u,s)})};r.default=a},function(n,r,i){function a(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(r,"__esModule",{value:!0});var l=i(12),s=a(l),u=function(c,g){return c.forEach(function(d,f){d.node.classList.add("aos-init"),d.position=(0,s.default)(d.node,g.offset)}),c};r.default=u},function(n,r,i){function a(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(r,"__esModule",{value:!0});var l=i(13),s=a(l),u=function(c,g){var d=0,f=0,x=window.innerHeight,v={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(f=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(c=document.querySelectorAll(v.anchor)[0]),d=(0,s.default)(c).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=c.offsetHeight/2;break;case"bottom-bottom":d+=c.offsetHeight;break;case"top-center":d+=x/2;break;case"bottom-center":d+=x/2+c.offsetHeight;break;case"center-center":d+=x/2+c.offsetHeight/2;break;case"top-top":d+=x;break;case"bottom-top":d+=c.offsetHeight+x;break;case"center-top":d+=c.offsetHeight/2+x}return v.anchorPlacement||v.offset||isNaN(g)||(f=g),d+f};r.default=u},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a){for(var l=0,s=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)l+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),s+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:s,left:l}};r.default=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(l){return{node:l}})};r.default=i}])})})(zd);var h0=zd.exports;const g0=iu(h0),Pd=k.createContext();function v0({children:e}){const[t,n]=k.useState(()=>{const i=localStorage.getItem("theme-mode");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});k.useEffect(()=>{localStorage.setItem("theme-mode",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]);const r=()=>n(!t);return o.jsx(Pd.Provider,{value:{isDark:t,toggleTheme:r},children:e})}function x0(){return k.useEffect(()=>{[{name:"description",content:"55 años de excelencia en instalaciones deportivas. Piscinas, canchas, gimnasio, restaurante. Club Campestre La Cueva en Alajuela, Costa Rica."},{name:"keywords",content:"club campestre, piscina, tenis, fútbol, gimnasio, Alajuela, Costa Rica"},{name:"author",content:"Club Campestre La Cueva"},{name:"viewport",content:"width=device-width, initial-scale=1.0"},{property:"og:title",content:"Club Campestre La Cueva - 55 años de excelencia"},{property:"og:description",content:"Disfruta de piscinas, canchas deportivas, gimnasio y más en Alajuela."},{property:"og:url",content:"https://cesarluiscr.github.io/lacueva-club/"},{property:"og:image",content:"https://cesarluiscr.github.io/lacueva-club/images/piscina-olimpica.jpg"},{property:"og:type",content:"business.business"},{property:"og:locale",content:"es_CR"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"Club Campestre La Cueva"},{name:"twitter:description",content:"Instalaciones deportivas de clase mundial en Alajuela"},{name:"twitter:image",content:"https://cesarluiscr.github.io/lacueva-club/images/piscina-olimpica.jpg"},{name:"theme-color",content:"#0061FF"},{name:"mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}].forEach(a=>{let l=document.querySelector(`meta[${a.name?"name":"property"}="${a.name||a.property}"]`);l||(l=document.createElement("meta"),a.name&&l.setAttribute("name",a.name),a.property&&l.setAttribute("property",a.property),document.head.appendChild(l)),l.setAttribute("content",a.content)});const t={"@context":"https://schema.org","@type":"SportsClub",name:"Club Campestre La Cueva",description:"55 años de excelencia en instalaciones deportivas y de esparcimiento en Alajuela, Costa Rica",url:"https://cesarluiscr.github.io/lacueva-club/",telephone:"+50624337171",email:"info@lacuevasa.com",address:{"@type":"PostalAddress",streetAddress:"Alajuela",addressLocality:"Alajuela",addressRegion:"Alajuela",postalCode:"4050",addressCountry:"CR"},geo:{"@type":"GeoCoordinates",latitude:"10.01622",longitude:"-84.21447"},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"06:00",closes:"21:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:"Saturday",opens:"08:00",closes:"18:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:"Sunday",opens:"08:00",closes:"17:00"}],image:["https://cesarluiscr.github.io/lacueva-club/images/logo-lacueva.jpg","https://cesarluiscr.github.io/lacueva-club/images/piscina-olimpica.jpg"],priceRange:"₡60 - ₡200",amenityFeature:[{"@type":"LocationFeatureSpecification",name:"Piscina Olímpica",value:!0},{"@type":"LocationFeatureSpecification",name:"Canchas de Fútbol",value:!0},{"@type":"LocationFeatureSpecification",name:"Canchas de Tenis",value:!0},{"@type":"LocationFeatureSpecification",name:"Gimnasio",value:!0},{"@type":"LocationFeatureSpecification",name:"Restaurante",value:!0},{"@type":"LocationFeatureSpecification",name:"Salones para Eventos",value:!0}],sameAs:["https://github.com/cesarluiscr/lacueva-club"]},n={"@context":"https://schema.org","@type":"Organization",name:"Club Campestre La Cueva",url:"https://cesarluiscr.github.io/lacueva-club/",logo:"https://cesarluiscr.github.io/lacueva-club/images/logo-lacueva.jpg",sameAs:["https://facebook.com/lacuevaclub","https://instagram.com/lacuevaclub","https://github.com/cesarluiscr/lacueva-club"],contact:{"@type":"ContactPoint",contactType:"Customer Service",telephone:"+50624337171",email:"info@lacuevasa.com",areaServed:"CR",availableLanguage:["es","en"]}},i=[{type:"application/ld+json",content:JSON.stringify(t)},{type:"application/ld+json",content:JSON.stringify(n)}].map(a=>{const l=document.createElement("script");return l.type=a.type,l.textContent=a.content,document.head.appendChild(l),l});return()=>{i.forEach(a=>{a.parentNode&&a.parentNode.removeChild(a)})}},[]),null}/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=e=>{const t=w0(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ma={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},b0=k.createContext({}),j0=()=>k.useContext(b0),N0=k.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:a,iconNode:l,...s},u)=>{const{size:c=24,strokeWidth:g=2,absoluteStrokeWidth:d=!1,color:f="currentColor",className:x=""}=j0()??{},v=r??d?Number(n??g)*24/Number(t??c):n??g;return k.createElement("svg",{ref:u,...Ma,width:t??c??Ma.width,height:t??c??Ma.height,stroke:e??f,strokeWidth:v,className:Ld("lucide",x,i),...!a&&!k0(s)&&{"aria-hidden":"true"},...s},[...l.map(([y,b])=>k.createElement(y,b)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=(e,t)=>{const n=k.forwardRef(({className:r,...i},a)=>k.createElement(N0,{ref:a,iconNode:t,className:Ld(`lucide-${y0(Js(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Js(e),n};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ml=te("arrow-right",S0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Fi=te("calendar",C0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],_0=te("circle-alert",E0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Rl=te("circle-check",z0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],_r=te("clock",P0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],T0=te("credit-card",L0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],R0=te("external-link",M0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],$0=te("heart",O0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],A0=te("loader-circle",D0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Td=te("mail",I0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],$r=te("map-pin",F0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],B0=te("menu",U0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Md=te("message-circle",W0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Rd=te("phone",H0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Zs=te("share-2",V0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],q0=te("shield-alert",Q0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],G0=te("shield-check",K0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ui=te("sparkles",Y0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],J0=te("trophy",X0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],To=te("users",Z0);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],th=te("waves",eh);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Od=te("x",nh),cn="#C9A84C";function rh(){const[e,t]=k.useState(!1),{isDark:n}=k.useContext(Pd),r=Or(),i=[{to:"/",label:"Inicio"},{to:"/instalaciones",label:"Instalaciones"},{to:"/reservas",label:"Reservas"},{to:"/contacto",label:"Contacto"}],a=l=>r.pathname===l;return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .navbar {
          background: #0A0A0A;
          border-bottom: 1px solid rgba(201,168,76,0.2);
          box-shadow: 0 2px 20px rgba(0,0,0,0.5);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          height: 60px;
          gap: 8px;
        }
        .nav-link {
          padding: 6px 20px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(201,168,76,0.55);
          border-bottom: 2px solid transparent;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: ${cn};
          border-bottom-color: rgba(201,168,76,0.4);
        }
        .nav-link.active {
          color: ${cn};
          border-bottom-color: ${cn};
        }
        .navbar-spacer { flex: 1; }
        .navbar-gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent);
        }
        .hamburger {
          display: none;
          padding: 8px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px;
          color: ${cn};
          cursor: pointer;
        }
        .mobile-menu {
          background: #0d0d0d;
          border-top: 1px solid rgba(201,168,76,0.15);
          padding: 8px 0 16px;
        }
        .mobile-link {
          display: block;
          padding: 12px 24px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(201,168,76,0.55);
          border-left: 3px solid transparent;
          transition: all 0.2s;
        }
        .mobile-link:hover, .mobile-link.active {
          color: ${cn};
          border-left-color: ${cn};
          background: rgba(201,168,76,0.05);
        }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 768px) {
          .hamburger { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
      `}),o.jsxs("nav",{className:"navbar",children:[o.jsx("div",{className:"navbar-gold-line"}),o.jsxs("div",{className:"navbar-inner",children:[o.jsx("div",{className:"nav-desktop",style:{display:"flex",alignItems:"center",gap:"4px"},children:i.map(({to:l,label:s})=>o.jsx(Nn,{to:l,className:`nav-link ${a(l)?"active":""}`,children:s},l))}),o.jsx("div",{className:"navbar-spacer"}),o.jsx("button",{className:"hamburger",onClick:()=>t(!e),children:e?o.jsx(Od,{size:20}):o.jsx(B0,{size:20})})]}),o.jsx("div",{className:"navbar-gold-line"}),e&&o.jsx("div",{className:"mobile-menu",children:i.map(({to:l,label:s})=>o.jsx(Nn,{to:l,className:`mobile-link ${a(l)?"active":""}`,onClick:()=>t(!1),children:s},l))})]})]})}function ih(){const e=new Date().getFullYear(),t=[{icon:Zs,href:"https://facebook.com/lacuevaclub",label:"Facebook",colorClass:"text-blue-600",bgHoverClass:"hover:bg-blue-700"},{icon:Zs,href:"https://instagram.com/lacuevaclub",label:"Instagram",colorClass:"text-pink-600",bgHoverClass:"hover:bg-pink-700"},{icon:R0,href:"https://github.com/cesarluiscr/lacueva-club",label:"Repositorio GitHub",colorClass:"text-gray-400",bgHoverClass:"hover:bg-gray-700"}];return o.jsx("footer",{className:"bg-gray-900 dark:bg-gray-950 text-white mt-12 transition-colors",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 py-12",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("svg",{width:"40",height:"40",viewBox:"0 0 200 240",className:"h-10 w-auto",xmlns:"http://www.w3.org/2000/svg",children:o.jsxs("g",{id:"tree",children:[o.jsx("ellipse",{cx:"60",cy:"40",rx:"8",ry:"12",fill:"white",transform:"rotate(-35 60 40)",opacity:"0.9"}),o.jsx("ellipse",{cx:"100",cy:"35",rx:"8",ry:"12",fill:"white",transform:"rotate(0 100 35)",opacity:"0.95"}),o.jsx("ellipse",{cx:"140",cy:"40",rx:"8",ry:"12",fill:"white",transform:"rotate(35 140 40)",opacity:"0.9"}),o.jsx("rect",{x:"95",y:"125",width:"10",height:"60",fill:"white",rx:"5"})]})}),o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-bold text-blue-400 tracking-widest",style:{letterSpacing:"2px"},children:"CLUB CAMPESTRE"}),o.jsx("div",{style:{fontFamily:"Georgia, 'Playfair Display', serif",fontSize:"1.75rem",fontWeight:"700",fontStyle:"italic",color:"white",letterSpacing:"0.5px",lineHeight:"1.2",display:"block"},children:"La Cueva"})]})]}),o.jsx("p",{className:"text-gray-400 text-sm",children:"55 años de excelencia en Alajuela, Costa Rica."}),o.jsx("div",{className:"flex gap-4 mt-6",role:"navigation","aria-label":"Redes sociales del club",children:t.map(n=>{const r=n.icon;return o.jsx("a",{href:n.href,"aria-label":`Visita nuestro ${n.label}`,title:`Club Campestre La Cueva en ${n.label}`,target:"_blank",rel:"noopener noreferrer",className:`p-3 rounded-lg bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 focus:ring-2 focus:ring-green-500 focus:outline-none ${n.bgHoverClass}`,children:o.jsx(r,{size:24,className:n.colorClass,"aria-hidden":"true"})},n.label)})})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-montserrat font-bold text-lg mb-4 text-white",children:"Contacto"}),o.jsxs("div",{className:"space-y-4 text-sm",children:[o.jsxs("div",{className:"flex items-center gap-3 group cursor-pointer",children:[o.jsx("div",{className:"p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition",children:o.jsx(Rd,{size:20,className:"text-blue-400"})}),o.jsx("a",{href:"tel:24337171",className:"text-gray-300 group-hover:text-blue-400 transition",children:"2433-7171"})]}),o.jsxs("div",{className:"flex items-center gap-3 group cursor-pointer",children:[o.jsx("div",{className:"p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition",children:o.jsx(Md,{size:20,className:"text-green-400"})}),o.jsx("a",{href:"https://wa.me/50672434203",className:"text-gray-300 group-hover:text-green-400 transition",children:"7243-4203 (WhatsApp)"})]}),o.jsxs("div",{className:"flex items-center gap-3 group cursor-pointer",children:[o.jsx("div",{className:"p-2 rounded-lg bg-red-500/20 group-hover:bg-red-500/30 transition",children:o.jsx(Td,{size:20,className:"text-red-400"})}),o.jsx("a",{href:"mailto:info@lacuevasa.com",className:"text-gray-300 group-hover:text-red-400 transition",children:"info@lacuevasa.com"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"p-2 rounded-lg bg-purple-500/20",children:o.jsx($r,{size:20,className:"text-purple-400"})}),o.jsx("span",{className:"text-gray-300",children:"Alajuela, Costa Rica"})]})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-montserrat font-bold text-lg mb-4",children:"Enlaces"}),o.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[o.jsx("li",{children:o.jsx("a",{href:"/instalaciones",className:"hover:text-white",children:"Instalaciones"})}),o.jsx("li",{children:o.jsx("a",{href:"/reservas",className:"hover:text-white",children:"Reservas"})}),o.jsx("li",{children:o.jsx("a",{href:"/contacto",className:"hover:text-white",children:"Contacto"})})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-montserrat font-bold text-lg mb-4",children:"Horarios"}),o.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[o.jsx("li",{children:"Lunes - Viernes: 6:00 AM - 9:00 PM"}),o.jsx("li",{children:"Sábado: 8:00 AM - 6:00 PM"}),o.jsx("li",{children:"Domingo: 8:00 AM - 5:00 PM"})]})]})]}),o.jsxs("div",{className:"border-t border-gray-800 py-6 text-center text-sm text-gray-400",children:[o.jsxs("p",{children:["© ",e," Club Campestre La Cueva. Todos los derechos reservados."]}),o.jsxs("p",{className:"mt-2",children:[o.jsx("a",{href:"#",className:"hover:text-white mr-4",children:"Política de Privacidad"}),"|",o.jsx("a",{href:"#",className:"hover:text-white ml-4",children:"Términos de Servicio"})]})]})]})})}const ah="/lacueva-club/assets/logo-lacueva-elegante-D5dPX6sp.jpg",G="#C9A84C",ei="#E8C96B",lh="rgba(201,168,76,0.6)",Ra="#0A0A0A",oh="#111111";function sh(){return o.jsxs("div",{children:[o.jsx("style",{children:`
        /* ─── Tipografía y base ─── */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');

        .gold { color: ${G}; }
        .gold-bright { color: ${ei}; }

        /* ─── HERO ─── */
        .hero {
          position: relative;
          min-height: 100vh;
          background: ${Ra};
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Textura de red geométrica */
        .hero-mesh {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(201,168,76,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.07) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }

        /* Líneas diagonales del fondo */
        .hero-lines {
          position: absolute;
          inset: 0;
          opacity: 0.12;
          background-image:
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(201,168,76,0.3) 40px,
              rgba(201,168,76,0.3) 41px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(201,168,76,0.3) 40px,
              rgba(201,168,76,0.3) 41px
            );
        }

        /* Viñeta oscura en bordes */
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%);
        }

        /* Línea horizontal dorada top */
        .hero-line-top {
          position: absolute;
          top: 32px; left: 32px; right: 32px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${G}, transparent);
          opacity: 0.6;
        }
        .hero-line-bottom {
          position: absolute;
          bottom: 32px; left: 32px; right: 32px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${G}, transparent);
          opacity: 0.6;
        }

        /* Esquinas ornamentales SVG */
        .corner { position: absolute; width: 120px; height: 120px; opacity: 0.7; }
        .corner-tl { top: 16px; left: 16px; }
        .corner-tr { top: 16px; right: 16px; transform: scaleX(-1); }
        .corner-bl { bottom: 16px; left: 16px; transform: scaleY(-1); }
        .corner-br { bottom: 16px; right: 16px; transform: scale(-1); }

        /* Contenido central */
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 40px 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .hero-logo-img {
          height: 110px;
          width: auto;
          filter: drop-shadow(0 0 20px rgba(201,168,76,0.3));
          border-radius: 8px;
        }

        .hero-club-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 6px;
          color: ${lh};
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .hero-title {
          font-family: Georgia, 'Playfair Display', serif;
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-style: italic;
          font-weight: 700;
          color: ${G};
          text-shadow: 0 0 60px rgba(201,168,76,0.55), 0 0 20px rgba(201,168,76,0.3), 2px 2px 8px rgba(0,0,0,0.8);
          line-height: 1;
          margin: 0;
        }

        /* Línea separadora dorada central */
        .gold-divider {
          width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${G}, transparent);
          margin: 28px auto;
          opacity: 0.8;
        }

        .hero-desc {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: rgba(255,255,255,0.75);
          line-height: 1.9;
          max-width: 600px;
          margin: 0 auto 40px;
          font-weight: 300;
          letter-spacing: 0.3px;
        }

        .hero-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 36px;
          border-radius: 4px;
          background: linear-gradient(135deg, ${G} 0%, ${ei} 100%);
          color: ${Ra};
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(201,168,76,0.35);
          transition: all 0.3s ease;
          border: none;
        }
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(201,168,76,0.5);
        }

        .btn-gold-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 36px;
          border-radius: 4px;
          border: 1px solid ${G};
          color: ${G};
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          background: rgba(201,168,76,0.05);
          transition: all 0.3s ease;
        }
        .btn-gold-outline:hover {
          background: rgba(201,168,76,0.12);
          transform: translateY(-2px);
        }

        /* ─── SECCIONES ─── */
        .section-dark {
          background: ${oh};
          padding: 80px 24px;
        }
        .section-darker {
          background: ${Ra};
          padding: 80px 24px;
        }
        .section-title-gold {
          font-family: Georgia, 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-style: italic;
          color: ${ei};
          margin-bottom: 12px;
          text-align: center;
        }
        .section-sub-gold {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
          text-align: center;
          letter-spacing: 0.5px;
        }
        .gold-divider-sm {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${G}, transparent);
          margin: 16px auto 0;
          opacity: 0.6;
        }

        /* Cards */
        .card-gold {
          background: linear-gradient(145deg, #161616, #1e1e1e);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.35s ease;
        }
        .card-gold:hover {
          border-color: rgba(201,168,76,0.5);
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.5), 0 0 20px rgba(201,168,76,0.1);
        }
        .card-top-bar {
          height: 2px;
          background: linear-gradient(90deg, transparent, ${G}, transparent);
          opacity: 0.7;
        }
        .card-icon-wrap {
          width: 56px; height: 56px; border-radius: 8px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.25);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 18px;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        /* Stats */
        .stat-box {
          padding: 36px 20px;
          text-align: center;
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 8px;
          background: rgba(201,168,76,0.03);
          transition: all 0.3s;
        }
        .stat-box:hover {
          background: rgba(201,168,76,0.07);
          border-color: rgba(201,168,76,0.35);
        }
        .stat-num {
          font-family: Georgia, serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: ${ei};
          margin-bottom: 8px;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 20px;
        }

        /* Noticias */
        .news-date {
          font-size: 0.72rem;
          font-weight: 700;
          color: ${G};
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .news-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          margin: 10px 0 10px;
          line-height: 1.4;
        }
        .news-desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .news-link {
          font-size: 0.82rem;
          font-weight: 700;
          color: ${G};
          text-decoration: none;
          letter-spacing: 0.5px;
          border-bottom: 1px solid rgba(201,168,76,0.3);
          padding-bottom: 2px;
          transition: border-color 0.2s;
        }
        .news-link:hover { border-color: ${G}; }

        /* Responsive */
        @media (max-width: 640px) {
          .hero-logo-img { height: 80px; }
          .corner { width: 80px; height: 80px; }
          .hero-line-top, .hero-line-bottom { left: 16px; right: 16px; }
          .hero-btns { flex-direction: column; align-items: center; }
          .btn-gold, .btn-gold-outline { width: 100%; justify-content: center; }
          .section-dark, .section-darker { padding: 56px 16px; }
          .grid-3 { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 380px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}),o.jsxs("section",{className:"hero",children:[o.jsx("div",{className:"hero-mesh"}),o.jsx("div",{className:"hero-lines"}),o.jsx("div",{className:"hero-vignette"}),o.jsx("div",{className:"hero-line-top"}),o.jsx("div",{className:"hero-line-bottom"}),["corner-tl","corner-tr","corner-bl","corner-br"].map(e=>o.jsxs("svg",{className:`corner ${e}`,viewBox:"0 0 120 120",fill:"none",children:[o.jsx("path",{d:"M10 10 L10 50 M10 10 L50 10",stroke:G,strokeWidth:"1.5",opacity:"0.8"}),o.jsx("path",{d:"M10 10 Q40 10 40 40 Q40 70 70 70",stroke:G,strokeWidth:"1",opacity:"0.4",fill:"none"}),o.jsx("circle",{cx:"10",cy:"10",r:"3",fill:G,opacity:"0.9"}),o.jsx("path",{d:"M18 10 Q60 10 60 50 Q60 90 100 90",stroke:G,strokeWidth:"0.5",opacity:"0.2",fill:"none"}),o.jsxs("g",{transform:"translate(55,55)",opacity:"0.5",children:[o.jsx("circle",{cx:"0",cy:"0",r:"3",fill:G}),o.jsx("ellipse",{cx:"0",cy:"-10",rx:"2.5",ry:"6",fill:G,opacity:"0.6"}),o.jsx("ellipse",{cx:"0",cy:"10",rx:"2.5",ry:"6",fill:G,opacity:"0.6"}),o.jsx("ellipse",{cx:"-10",cy:"0",rx:"6",ry:"2.5",fill:G,opacity:"0.6"}),o.jsx("ellipse",{cx:"10",cy:"0",rx:"6",ry:"2.5",fill:G,opacity:"0.6"})]})]},e)),o.jsxs("div",{className:"hero-content",children:[o.jsxs("div",{className:"hero-logo-wrap",children:[o.jsx("img",{src:ah,alt:"Logo Club Campestre La Cueva",className:"hero-logo-img",onError:e=>e.target.style.display="none"}),o.jsxs("div",{style:{textAlign:"left"},children:[o.jsx("div",{className:"hero-club-label",children:"Club Campestre"}),o.jsx("h1",{className:"hero-title",children:"La Cueva"})]})]}),o.jsx("div",{className:"gold-divider"}),o.jsx("p",{className:"hero-desc",children:"Vive una experiencia única con nuestras instalaciones de clase mundial en Alajuela. Piscinas, canchas, gimnasio, restaurante y mucho más."}),o.jsxs("div",{className:"hero-btns",children:[o.jsxs(Nn,{to:"/reservas",className:"btn-gold",children:["Reservar Ahora ",o.jsx(Ml,{size:16})]}),o.jsx(Nn,{to:"/instalaciones",className:"btn-gold-outline",children:"Ver Instalaciones"})]})]})]}),o.jsx("section",{className:"section-dark",children:o.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[o.jsx("h2",{className:"section-title-gold",children:"Nuestras Instalaciones"}),o.jsx("p",{className:"section-sub-gold",children:"Bellísimas instalaciones para toda la familia"}),o.jsx("div",{className:"gold-divider-sm"}),o.jsx("div",{className:"grid-3",children:[{icon:th,title:"Piscinas",description:"Piscina olímpica de 50 metros y áreas de recreación acuática para toda la familia."},{icon:J0,title:"Canchas Deportivas",description:"Fútbol, tenis y otras disciplinas con equipamiento de nivel profesional."},{icon:$0,title:"Gimnasio",description:"Equipos modernos y entrenadores certificados disponibles para nuestros socios."}].map((e,t)=>o.jsxs("div",{className:"card-gold","data-aos":"fade-up","data-aos-delay":t*100,children:[o.jsx("div",{className:"card-top-bar"}),o.jsxs("div",{style:{padding:"32px",textAlign:"center"},children:[o.jsx("div",{className:"card-icon-wrap",children:o.jsx(e.icon,{size:26,color:G})}),o.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:700,color:"rgba(255,255,255,0.9)",marginBottom:"10px"},children:e.title}),o.jsx("p",{style:{fontSize:"0.88rem",color:"rgba(255,255,255,0.45)",lineHeight:1.7},children:e.description})]})]},t))}),o.jsx("div",{style:{textAlign:"center",marginTop:"48px"},children:o.jsxs(Nn,{to:"/instalaciones",className:"btn-gold",children:["Ver Todas las Instalaciones ",o.jsx(Ml,{size:16})]})})]})}),o.jsx("section",{className:"section-darker",style:{textAlign:"center",borderTop:"1px solid rgba(201,168,76,0.15)",borderBottom:"1px solid rgba(201,168,76,0.15)"},children:o.jsxs("div",{style:{maxWidth:"700px",margin:"0 auto"},children:[o.jsx("div",{className:"gold-divider"}),o.jsx("h2",{className:"section-title-gold",children:"¿Listo para disfrutar?"}),o.jsx("p",{style:{color:"rgba(255,255,255,0.5)",marginBottom:"36px",marginTop:"12px",lineHeight:1.8},children:"Únete a nuestra comunidad y disfruta de las mejores instalaciones de Alajuela."}),o.jsx(Nn,{to:"/contacto",className:"btn-gold",children:"Contáctanos"}),o.jsx("div",{className:"gold-divider",style:{marginTop:"48px"}})]})}),o.jsx("section",{className:"section-dark",children:o.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[o.jsx("h2",{className:"section-title-gold",children:"Noticias y Eventos"}),o.jsx("p",{className:"section-sub-gold",children:"Mantente informado sobre lo que sucede en el club"}),o.jsx("div",{className:"gold-divider-sm"}),o.jsx("div",{className:"grid-3",style:{marginTop:"48px"},children:[{date:"Abril 2026",title:"Inauguración del nuevo gimnasio",description:"Equipos modernos y entrenadores certificados disponibles para todos nuestros visitantes."},{date:"Marzo 2026",title:"Torneo de Tenis 2026",description:"Participación de equipos de toda la región. Premiación para los ganadores."},{date:"Febrero 2026",title:"Clases de natación para niños",description:"Programa especial de verano con instructores certificados. Inscripciones abiertas."}].map((e,t)=>o.jsxs("article",{className:"card-gold","data-aos":"fade-up","data-aos-delay":t*100,children:[o.jsx("div",{className:"card-top-bar"}),o.jsxs("div",{style:{padding:"28px"},children:[o.jsx("div",{className:"news-date",children:e.date}),o.jsx("h3",{className:"news-title",children:e.title}),o.jsx("p",{className:"news-desc",children:e.description}),o.jsx("a",{href:"#",className:"news-link",children:"Leer más →"})]})]},t))})]})}),o.jsx("section",{className:"section-darker",children:o.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:o.jsx("div",{className:"stats-grid",children:[{number:"55",label:"Años de Historia"},{number:"1000+",label:"Visitantes Felices"},{number:"10",label:"Instalaciones"},{number:"24/7",label:"Acceso Club"}].map((e,t)=>o.jsxs("div",{className:"stat-box","data-aos":"fade-up","data-aos-delay":t*100,children:[o.jsx("div",{className:"stat-num",children:e.number}),o.jsx("div",{className:"stat-label",children:e.label})]},t))})})})]})}function uh({instalacion:e}){const[t,n]=k.useState(""),[r,i]=k.useState(""),[a,l]=k.useState(1),[s,u]=k.useState(!1),c=["06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30"],g=new Date;g.setDate(g.getDate()+1);const d=g.toISOString().split("T")[0],f=new Date;f.setDate(f.getDate()+30);const x=f.toISOString().split("T")[0],v=async y=>{if(y.preventDefault(),!t||!r){alert("Por favor selecciona una fecha y hora");return}u(!0);try{const b=new URLSearchParams({action:"TEMPLATE",text:`Visita: ${(e==null?void 0:e.nombre)||"Club Campestre La Cueva"}`,dates:`${t.replace(/-/g,"")}T${r.replace(/:/g,"")}00/${t.replace(/-/g,"")}T${String(parseInt(r.split(":")[0])+1).padStart(2,"0")}${r.split(":")[1]}00`,location:"Club Campestre La Cueva, Alajuela, Costa Rica",description:`Visita a ${e==null?void 0:e.nombre}
Personas: ${a}`,ctz:"America/Costa_Rica"});window.open(`https://calendar.google.com/calendar/render?${b.toString()}`,"_blank"),alert("¡Se abrió Google Calendar! Confirma tu visita.")}catch(b){console.error("Error al agendar:",b),alert("Error al agendar la visita")}finally{u(!1)}};return o.jsxs("div",{className:"card p-8 bg-white dark:bg-slate-800",children:[o.jsxs("h3",{className:"text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2",children:[o.jsx(Fi,{size:28,className:"text-blue-600"}),"Agendar Visita en Google Calendar"]}),o.jsxs("form",{onSubmit:v,className:"space-y-6",children:[o.jsxs("div",{children:[o.jsxs("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:[o.jsx(Fi,{size:18,className:"inline mr-2"}),"Fecha"]}),o.jsx("input",{type:"date",value:t,onChange:y=>n(y.target.value),min:d,max:x,required:!0,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white","aria-label":"Selecciona una fecha para tu visita"}),o.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Mínimo mañana, máximo 30 días"})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:[o.jsx(_r,{size:18,className:"inline mr-2"}),"Hora"]}),o.jsxs("select",{value:r,onChange:y=>i(y.target.value),required:!0,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white","aria-label":"Selecciona una hora",children:[o.jsx("option",{value:"",children:"-- Selecciona una hora --"}),c.map(y=>o.jsx("option",{value:y,children:y},y))]})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:[o.jsx(To,{size:18,className:"inline mr-2"}),"Número de personas"]}),o.jsx("input",{type:"number",value:a,onChange:y=>l(Math.max(1,parseInt(y.target.value))),min:"1",max:"20",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white","aria-label":"Número de personas que asistirán"})]}),e&&o.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-start gap-3",children:[o.jsx($r,{size:20,className:"text-blue-600 flex-shrink-0 mt-0.5"}),o.jsxs("div",{className:"text-sm text-blue-800 dark:text-blue-200",children:[o.jsx("p",{className:"font-semibold",children:e.nombre}),o.jsx("p",{className:"text-xs",children:e.descripcion})]})]}),o.jsx("button",{type:"submit",disabled:s,"aria-label":"Agendar visita en Google Calendar",className:"w-full btn-primary py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Agendando...":"Agendar en Google Calendar"}),o.jsx("p",{className:"text-xs text-gray-500 text-center",children:"Se abrirá Google Calendar para confirmar tu visita"})]})]})}const st="#C9A84C",Gn="rgba(201,168,76,0.55)",eu="#0A0A0A",ch="#161616";function dh(){const[e,t]=k.useState(null),n=[{id:1,nombre:"Piscina Olímpica",descripcion:"Piscina de competencia con 50 metros de largo",imagen:"https://via.placeholder.com/400x300?text=Piscina+Olimpica",capacidad:300,horarios:"6:00 AM - 6:00 PM",servicios:["Clases de natación","Salvavidas","Vestuarios"],tarifa_visitante:15},{id:2,nombre:"Canchas de Fútbol",descripcion:"Dos canchas de césped sintético de calidad profesional",imagen:"https://via.placeholder.com/400x300?text=Canchas+Futbol",capacidad:40,horarios:"7:00 AM - 9:00 PM",servicios:["Vestuarios","Agua potable","Iluminación"],tarifa_visitante:25},{id:3,nombre:"Canchas de Tenis",descripcion:"Cuatro canchas con iluminación nocturna",imagen:"https://via.placeholder.com/400x300?text=Canchas+Tenis",capacidad:8,horarios:"7:00 AM - 9:00 PM",servicios:["Lecciones","Vestuarios","Almacén"],tarifa_visitante:20},{id:4,nombre:"Gimnasio",descripcion:"Equipos modernos con entrenadores certificados",imagen:"https://via.placeholder.com/400x300?text=Gimnasio",capacidad:50,horarios:"6:00 AM - 9:00 PM",servicios:["Entrenadores","Clases grupales","Duchas"],tarifa_visitante:10},{id:5,nombre:"Salones para Eventos",descripcion:"Espacios versátiles para conferencias, bodas y eventos",imagen:"https://via.placeholder.com/400x300?text=Salones",capacidad:200,horarios:"Flexible",servicios:["Catering","Equipamiento","Estacionamiento"],tarifa_visitante:0},{id:6,nombre:"Restaurante",descripcion:"Restaurante con vista a las instalaciones",imagen:"https://via.placeholder.com/400x300?text=Restaurante",capacidad:100,horarios:"11:00 AM - 9:00 PM",servicios:["Menú variado","Bebidas","Postres"],tarifa_visitante:0}];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .inst-page {
          background: ${eu};
          min-height: 100vh;
          color: #e8e8e8;
        }

        /* ── HERO ── */
        .inst-hero {
          position: relative;
          background: ${eu};
          padding: 72px 24px 56px;
          text-align: center;
          overflow: hidden;
        }
        .inst-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px);
        }
        .inst-hero-inner {
          position: relative;
          max-width: 760px;
          margin: 0 auto;
        }
        .inst-hero-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: ${Gn};
          border: 1px solid rgba(201,168,76,0.25);
          padding: 5px 18px;
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .inst-hero-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: 1px;
          margin-bottom: 12px;
          font-style: italic;
        }
        .inst-hero-title span { color: ${st}; }
        .inst-hero-line {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${st}, transparent);
          margin: 16px auto;
        }
        .inst-hero-sub {
          font-size: 1rem;
          color: rgba(255,255,255,0.55);
          max-width: 480px;
          margin: 0 auto;
        }

        /* ── GRID ── */
        .inst-section {
          padding: 64px 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .inst-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 28px;
        }
        .inst-card {
          background: ${ch};
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }
        .inst-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${Gn}, transparent);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .inst-card:hover {
          transform: translateY(-4px);
          border-color: rgba(201,168,76,0.45);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(201,168,76,0.08);
        }
        .inst-card:hover::before { opacity: 1; }
        .inst-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          filter: brightness(0.85) saturate(0.7);
          transition: filter 0.3s;
        }
        .inst-card:hover img { filter: brightness(0.95) saturate(0.9); }
        .inst-card-body { padding: 20px 22px 22px; }
        .inst-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }
        .inst-card-desc {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          margin-bottom: 14px;
          line-height: 1.5;
        }
        .inst-card-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.8rem;
          color: ${Gn};
        }
        .inst-card-meta-row {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        /* ── MODAL ── */
        .inst-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.82);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 16px;
        }
        .inst-modal {
          background: #111111;
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 14px;
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(201,168,76,0.06);
          position: relative;
        }
        .inst-modal-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          filter: brightness(0.8) saturate(0.6);
        }
        .inst-modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(0,0,0,0.7);
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${st};
          cursor: pointer;
          transition: background 0.2s;
          z-index: 2;
        }
        .inst-modal-close:hover { background: rgba(201,168,76,0.15); }
        .inst-modal-body { padding: 28px; }
        .inst-modal-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 6px;
        }
        .inst-modal-desc {
          color: rgba(255,255,255,0.5);
          font-size: 0.95rem;
          margin-bottom: 22px;
          line-height: 1.6;
        }
        .inst-modal-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 24px;
        }
        .inst-stat-box {
          background: rgba(201,168,76,0.06);
          border: 1px solid rgba(201,168,76,0.18);
          border-radius: 8px;
          padding: 16px;
        }
        .inst-stat-label {
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${Gn};
          margin-bottom: 6px;
        }
        .inst-stat-value {
          font-size: 1.6rem;
          font-weight: 700;
          color: ${st};
        }
        .inst-stat-unit {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.35);
          margin-top: 2px;
        }
        .inst-modal-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${Gn};
          margin-bottom: 10px;
          margin-top: 20px;
        }
        .inst-modal-horario {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
        }
        .inst-modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .inst-tag {
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.22);
          color: ${st};
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .inst-modal-divider {
          border: none;
          border-top: 1px solid rgba(201,168,76,0.15);
          margin: 24px 0;
        }
        .inst-modal-btn {
          width: 100%;
          padding: 13px;
          background: transparent;
          border: 1px solid rgba(201,168,76,0.35);
          color: ${st};
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 16px;
        }
        .inst-modal-btn:hover {
          background: rgba(201,168,76,0.08);
          border-color: ${st};
        }

        /* ── MAP SECTION ── */
        .inst-map-section {
          padding: 64px 24px;
          background: #0d0d0d;
          border-top: 1px solid rgba(201,168,76,0.1);
        }
        .inst-map-inner {
          max-width: 1000px;
          margin: 0 auto;
        }
        .inst-map-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 8px;
        }
        .inst-map-title span { color: ${st}; }
        .inst-map-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${st}, transparent);
          margin: 0 auto 32px;
        }
        .inst-map-frame {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(201,168,76,0.2);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        /* scrollbar */
        .inst-modal::-webkit-scrollbar { width: 5px; }
        .inst-modal::-webkit-scrollbar-track { background: #111; }
        .inst-modal::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 3px; }
      `}),o.jsxs("div",{className:"inst-page",children:[o.jsx("section",{className:"inst-hero",children:o.jsxs("div",{className:"inst-hero-inner",children:[o.jsx("span",{className:"inst-hero-eyebrow",children:"Club Campestre La Cueva"}),o.jsxs("h1",{className:"inst-hero-title",children:["Nuestras ",o.jsx("span",{children:"Instalaciones"})]}),o.jsx("div",{className:"inst-hero-line"}),o.jsx("p",{className:"inst-hero-sub",children:"Descubre todas las comodidades que tenemos para ti"})]})}),o.jsx("section",{className:"inst-section",children:o.jsx("div",{className:"inst-grid",children:n.map(r=>o.jsxs("div",{className:"inst-card",onClick:()=>t(r),children:[o.jsx("img",{src:r.imagen,alt:`${r.nombre} - Club Campestre La Cueva`,loading:"lazy"}),o.jsxs("div",{className:"inst-card-body",children:[o.jsx("h3",{className:"inst-card-title",children:r.nombre}),o.jsx("p",{className:"inst-card-desc",children:r.descripcion}),o.jsxs("div",{className:"inst-card-meta",children:[o.jsxs("div",{className:"inst-card-meta-row",children:[o.jsx(To,{size:14}),"Capacidad: ",r.capacidad," personas"]}),o.jsxs("div",{className:"inst-card-meta-row",children:[o.jsx(_r,{size:14}),r.horarios]})]})]})]},r.id))})}),e&&o.jsx("div",{className:"inst-overlay",role:"dialog","aria-modal":"true","aria-labelledby":`modal-title-${e.id}`,onClick:r=>{r.target===r.currentTarget&&t(null)},children:o.jsxs("div",{className:"inst-modal",children:[o.jsx("img",{src:e.imagen,alt:`Imagen de ${e.nombre}`,className:"inst-modal-img",loading:"lazy"}),o.jsx("button",{onClick:()=>t(null),className:"inst-modal-close","aria-label":"Cerrar",children:o.jsx(Od,{size:16})}),o.jsxs("div",{className:"inst-modal-body",children:[o.jsx("h2",{id:`modal-title-${e.id}`,className:"inst-modal-title",children:e.nombre}),o.jsx("p",{className:"inst-modal-desc",children:e.descripcion}),o.jsxs("div",{className:"inst-modal-stats",children:[o.jsxs("div",{className:"inst-stat-box",children:[o.jsx("div",{className:"inst-stat-label",children:"Capacidad"}),o.jsx("div",{className:"inst-stat-value",children:e.capacidad}),o.jsx("div",{className:"inst-stat-unit",children:"personas"})]}),o.jsxs("div",{className:"inst-stat-box",children:[o.jsx("div",{className:"inst-stat-label",children:"Tarifa Visitante"}),o.jsxs("div",{className:"inst-stat-value",children:["₡",e.tarifa_visitante]})]})]}),o.jsxs("div",{className:"inst-modal-section-title",children:[o.jsx(_r,{size:14})," Horarios"]}),o.jsx("p",{className:"inst-modal-horario",children:e.horarios}),o.jsxs("div",{className:"inst-modal-section-title",children:[o.jsx($r,{size:14})," Servicios Disponibles"]}),o.jsx("div",{className:"inst-modal-tags",children:e.servicios.map((r,i)=>o.jsx("span",{className:"inst-tag",children:r},i))}),o.jsx("hr",{className:"inst-modal-divider"}),o.jsx(uh,{instalacion:e}),o.jsx("button",{onClick:()=>t(null),className:"inst-modal-btn",children:"Cerrar"})]})]})}),o.jsx("section",{className:"inst-map-section",children:o.jsxs("div",{className:"inst-map-inner",children:[o.jsxs("h2",{className:"inst-map-title",children:["Nuestra ",o.jsx("span",{children:"Ubicación"})]}),o.jsx("div",{className:"inst-map-line"}),o.jsx("div",{className:"inst-map-frame",children:o.jsx("iframe",{width:"100%",height:"400",frameBorder:"0",style:{border:0,display:"block"},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.8373916357543!2d-84.21447!3d10.01622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sAlajuela%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1234567890",allowFullScreen:"",loading:"lazy",title:"Ubicación Club Campestre La Cueva"})})]})})]})]})}const Ge="#C9A84C",jt="rgba(201,168,76,0.55)",tu="#0A0A0A",nu="#161616",Oa="http://localhost:3000/api",fh=["token","authToken","jwtToken"],ru=e=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",maximumFractionDigits:0}).format(Number(e||0)),ph=()=>{for(const e of fh){const t=window.localStorage.getItem(e);if(t)return t}return""},mh=(e,t)=>{if(!e)return"";const[n,r]=e.split(":").map(Number),i=new Date(2e3,0,1,n,r);return i.setHours(i.getHours()+Number(t)),`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`},hh=[{title:"Validación en tiempo real",description:"Antes de confirmar, el sistema consulta disponibilidad real para reducir conflictos."},{title:"Capacidad controlada",description:"Cada reserva respeta el máximo de asistentes permitido por la instalación."},{title:"Horarios claros",description:"La hora de cierre se calcula automáticamente según la duración seleccionada."},{title:"Acceso protegido",description:"La reserva requiere sesión activa con JWT válido para proteger la cuenta del socio."}];function gh(){const[e,t]=k.useState([]),[n,r]=k.useState(!0),[i,a]=k.useState(!1),[l,s]=k.useState(!1),[u,c]=k.useState(""),[g,d]=k.useState({type:"idle",message:""}),[f,x]=k.useState({instalacion_id:"",fecha:"",hora_inicio:"",duracion:"1",numero_asistentes:"1"});k.useEffect(()=>{(async()=>{try{const w=await fetch(`${Oa}/instalaciones`),N=await w.json();if(!w.ok||!N.success)throw new Error(N.error||"No fue posible cargar las instalaciones");const S=(N.data||[]).filter(E=>E.estado!=="cerrada");t(S)}catch(w){d({type:"error",message:w.message||"Error al cargar instalaciones."})}finally{r(!1)}})()},[]);const v=k.useMemo(()=>e.find(m=>m.id===f.instalacion_id)||null,[e,f.instalacion_id]),y=k.useMemo(()=>mh(f.hora_inicio,f.duracion),[f.hora_inicio,f.duracion]),b=k.useMemo(()=>i?{label:"Consultando",color:jt}:u?u.includes("No hay")||u.includes("no esta disponible")?{label:"Limitado",color:"#e8a855"}:u.includes("Horarios disponibles")?{label:"Disponible",color:"#7bc87b"}:{label:"Revisar",color:"#e07070"}:{label:"Pendiente",color:"rgba(255,255,255,0.35)"},[u,i]);k.useEffect(()=>{(async()=>{if(!f.instalacion_id||!f.fecha){c("");return}a(!0),c("");try{const w=await fetch(`${Oa}/reservas/disponibilidad/${f.instalacion_id}?fecha=${f.fecha}`),N=await w.json();if(!w.ok)throw new Error(N.error||"No se pudo consultar la disponibilidad");const E=(N.horarios_disponibles||[]).filter(C=>C.disponible).map(C=>C.hora);if(!E.length){c("No hay horarios disponibles para esa fecha.");return}if(f.hora_inicio&&!E.includes(f.hora_inicio)){c("La hora elegida ya no está disponible. Selecciona otra opción.");return}c(`Horarios disponibles: ${E.join(", ")}`)}catch(w){c(w.message||"No se pudo cargar la disponibilidad.")}finally{a(!1)}})()},[f.fecha,f.hora_inicio,f.instalacion_id]);const h=m=>{const{name:w,value:N}=m.target;d({type:"idle",message:""}),x(S=>({...S,[w]:N}))},p=async m=>{var N;if(m.preventDefault(),d({type:"idle",message:""}),!v){d({type:"error",message:"Selecciona una instalación válida."});return}const w=ph();if(!w){d({type:"warning",message:"Necesitas iniciar sesión para reservar. Guarda el JWT del login en localStorage."});return}if(!y||y<=f.hora_inicio){d({type:"error",message:"La hora final calculada es inválida."});return}s(!0);try{const S=await fetch(`${Oa}/reservas`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`},body:JSON.stringify({instalacion_id:f.instalacion_id,fecha:f.fecha,hora_inicio:f.hora_inicio,hora_fin:y,numero_asistentes:Number(f.numero_asistentes)})}),E=await S.json();if(!S.ok)throw new Error(E.error||"No fue posible crear la reserva");d({type:"success",message:`Reserva confirmada para ${((N=E.reserva)==null?void 0:N.instalacion)||v.nombre} el ${f.fecha} de ${f.hora_inicio} a ${y}.`}),x({instalacion_id:"",fecha:"",hora_inicio:"",duracion:"1",numero_asistentes:"1"}),c("")}catch(S){d({type:"error",message:S.message||"Error al procesar la reserva."})}finally{s(!1)}};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .res-page {
          background: ${tu};
          min-height: 100vh;
          color: #e8e8e8;
        }

        /* ── HERO ── */
        .res-hero {
          position: relative;
          padding: 72px 24px 56px;
          background: ${tu};
          overflow: hidden;
        }
        .res-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px);
        }
        .res-hero-inner {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .res-hero-inner { grid-template-columns: 1fr; }
          .res-hero-preview { display: none; }
        }
        .res-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: ${jt};
          border: 1px solid rgba(201,168,76,0.25);
          padding: 5px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .res-hero-title {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 700;
          color: #fff;
          font-style: italic;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .res-hero-title span { color: ${Ge}; }
        .res-hero-sub {
          color: rgba(255,255,255,0.5);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 20px;
        }
        .res-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .res-hero-tag {
          background: rgba(201,168,76,0.07);
          border: 1px solid rgba(201,168,76,0.2);
          color: ${jt};
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* ── PREVIEW CARD ── */
        .res-preview {
          background: #111;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 14px;
          padding: 28px;
          position: relative;
          overflow: hidden;
        }
        .res-preview::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${Ge}, transparent);
        }
        .res-preview-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .res-preview-label {
          font-size: 0.68rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${jt};
          margin-bottom: 4px;
        }
        .res-preview-heading {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
        }
        .res-status-badge {
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 8px;
          padding: 8px 14px;
          text-align: right;
        }
        .res-status-label { font-size: 0.6rem; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 3px; }
        .res-status-value { font-size: 0.85rem; font-weight: 700; color: ${Ge}; }
        .res-preview-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }
        .res-preview-stat {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.1);
          border-radius: 8px;
          padding: 12px;
        }
        .res-preview-stat-label { font-size: 0.6rem; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 6px; }
        .res-preview-stat-value { font-size: 1.5rem; font-weight: 700; color: #fff; }
        .res-preview-inst {
          background: rgba(201,168,76,0.05);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 10px;
          padding: 16px;
        }
        .res-preview-inst-name { font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .res-preview-inst-desc { font-size: 0.82rem; color: rgba(255,255,255,0.4); line-height: 1.5; }
        .res-preview-inst-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 12px; }
        .res-preview-inst-tag {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.55);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
        }

        /* ── MAIN SECTION ── */
        .res-section {
          padding: 56px 24px 64px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .res-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .res-grid { grid-template-columns: 1fr; }
        }

        /* ── FORM CARD ── */
        .res-form-card {
          background: ${nu};
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 14px;
          padding: 36px;
          position: relative;
          overflow: hidden;
        }
        .res-form-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${Ge}, transparent);
        }
        .res-form-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
          gap: 16px;
          flex-wrap: wrap;
        }
        .res-form-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${jt};
          margin-bottom: 6px;
        }
        .res-form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
        }
        .res-form-title span { color: ${Ge}; }
        .res-form-sub {
          color: rgba(255,255,255,0.4);
          font-size: 0.85rem;
          margin-top: 4px;
          max-width: 400px;
        }
        .res-avail-badge {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 1px solid rgba(201,168,76,0.3);
          color: ${Ge};
          background: rgba(201,168,76,0.06);
          white-space: nowrap;
        }
        .res-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 600px) {
          .res-form-grid { grid-template-columns: 1fr; }
        }
        .res-col-full { grid-column: 1 / -1; }
        .res-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${jt};
          margin-bottom: 8px;
        }
        .res-input-wrap { position: relative; }
        .res-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(201,168,76,0.45);
          pointer-events: none;
        }
        .res-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 8px;
          padding: 13px 14px 13px 42px;
          color: #e8e8e8;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
          -webkit-appearance: none;
          appearance: none;
        }
        .res-input-noicon {
          padding-left: 14px;
        }
        .res-input:focus {
          border-color: rgba(201,168,76,0.55);
          background: rgba(201,168,76,0.04);
        }
        .res-input option { background: #1a1a1a; color: #e8e8e8; }
        .res-feedback {
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .res-feedback-success {
          background: rgba(123,200,123,0.08);
          border: 1px solid rgba(123,200,123,0.3);
          color: #7bc87b;
        }
        .res-feedback-warning {
          background: rgba(232,168,85,0.08);
          border: 1px solid rgba(232,168,85,0.3);
          color: #e8a855;
        }
        .res-feedback-error {
          background: rgba(224,112,112,0.08);
          border: 1px solid rgba(224,112,112,0.3);
          color: #e07070;
        }
        .res-submit {
          width: 100%;
          padding: 14px;
          background: transparent;
          border: 1px solid ${Ge};
          color: ${Ge};
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .res-submit:hover:not(:disabled) {
          background: rgba(201,168,76,0.1);
          box-shadow: 0 0 20px rgba(201,168,76,0.15);
        }
        .res-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        /* ── SIDEBAR ── */
        .res-sidebar { display: flex; flex-direction: column; gap: 20px; }
        .res-summary-card {
          background: ${nu};
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 12px;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }
        .res-summary-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${Ge}, transparent);
        }
        .res-summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }
        .res-summary-title { font-size: 1rem; font-weight: 700; color: #fff; }
        .res-summary-icon {
          width: 36px; height: 36px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: ${Ge};
        }
        .res-inst-box {
          background: rgba(201,168,76,0.04);
          border: 1px solid rgba(201,168,76,0.12);
          border-radius: 8px;
          padding: 14px;
          margin-bottom: 12px;
        }
        .res-inst-box-label { font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; color: ${jt}; margin-bottom: 4px; }
        .res-inst-box-name { font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .res-inst-box-desc { font-size: 0.8rem; color: rgba(255,255,255,0.4); line-height: 1.5; }
        .res-mini-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 12px;
        }
        .res-mini-stat {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.1);
          border-radius: 8px;
          padding: 10px 12px;
        }
        .res-mini-stat-label { font-size: 0.6rem; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 4px; }
        .res-mini-stat-value { font-size: 1.2rem; font-weight: 700; color: #fff; }
        .res-avail-box {
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 0.82rem;
          line-height: 1.6;
        }
        .res-avail-box-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .res-warning-box {
          background: rgba(232,168,85,0.06);
          border: 1px solid rgba(232,168,85,0.2);
          border-radius: 8px;
          padding: 12px 14px;
        }
        .res-warning-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e8a855;
          margin-bottom: 6px;
        }
        .res-warning-text { font-size: 0.8rem; color: rgba(232,168,85,0.7); line-height: 1.6; }

        /* ── POLICY CARDS ── */
        .res-policy-grid {
          display: grid;
          gap: 12px;
        }
        .res-policy-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(201,168,76,0.1);
          border-radius: 10px;
          padding: 16px 18px;
          transition: border-color 0.2s;
        }
        .res-policy-card:hover { border-color: rgba(201,168,76,0.25); }
        .res-policy-icon {
          width: 32px; height: 32px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          color: ${Ge};
          margin-bottom: 10px;
        }
        .res-policy-title { font-size: 0.88rem; font-weight: 700; color: #fff; margin-bottom: 5px; }
        .res-policy-desc { font-size: 0.8rem; color: rgba(255,255,255,0.4); line-height: 1.5; }

        /* date/time input color-scheme */
        .res-input[type="date"], .res-input[type="time"] { color-scheme: dark; }
      `}),o.jsxs("div",{className:"res-page",children:[o.jsx("section",{className:"res-hero",children:o.jsxs("div",{className:"res-hero-inner",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"res-hero-eyebrow",children:[o.jsx(Ui,{size:12}),"Reserva digital del club"]}),o.jsxs("h1",{className:"res-hero-title",children:["Reserva tu espacio",o.jsx("br",{}),o.jsx("span",{children:"de forma elegante"})]}),o.jsx("p",{className:"res-hero-sub",children:"Consulta disponibilidad real, revisa capacidad y confirma tu espacio de manera rápida y segura."}),o.jsxs("div",{className:"res-hero-tags",children:[o.jsx("span",{className:"res-hero-tag",children:"Disponibilidad en tiempo real"}),o.jsx("span",{className:"res-hero-tag",children:"Validación por capacidad"}),o.jsx("span",{className:"res-hero-tag",children:"Confirmación con JWT"})]})]}),o.jsxs("div",{className:"res-preview res-hero-preview",children:[o.jsxs("div",{className:"res-preview-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"res-preview-label",children:"Vista rápida"}),o.jsx("div",{className:"res-preview-heading",children:"Tu próxima reserva"})]}),o.jsxs("div",{className:"res-status-badge",children:[o.jsx("div",{className:"res-status-label",children:"Estado"}),o.jsx("div",{className:"res-status-value",children:b.label})]})]}),o.jsxs("div",{className:"res-preview-stats",children:[o.jsxs("div",{className:"res-preview-stat",children:[o.jsx("div",{className:"res-preview-stat-label",children:"Instalaciones"}),o.jsx("div",{className:"res-preview-stat-value",children:e.length})]}),o.jsxs("div",{className:"res-preview-stat",children:[o.jsx("div",{className:"res-preview-stat-label",children:"Hora final"}),o.jsx("div",{className:"res-preview-stat-value",children:y||"--"})]}),o.jsxs("div",{className:"res-preview-stat",children:[o.jsx("div",{className:"res-preview-stat-label",children:"Tarifa"}),o.jsx("div",{className:"res-preview-stat-value",style:{fontSize:"1rem"},children:v?ru(v.tarifa_socio):"--"})]})]}),o.jsxs("div",{className:"res-preview-inst",children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("div",{className:"res-preview-inst-name",children:(v==null?void 0:v.nombre)||"Selecciona una opción"}),o.jsx(Ml,{size:18,color:jt})]}),o.jsx("div",{className:"res-preview-inst-desc",children:(v==null?void 0:v.descripcion)||"Cuando elijas una instalación verás aquí su capacidad, horario y tarifa."}),v&&o.jsxs("div",{className:"res-preview-inst-tags",children:[o.jsxs("span",{className:"res-preview-inst-tag",children:["Cap: ",v.capacidad]}),o.jsxs("span",{className:"res-preview-inst-tag",children:["Apertura: ",v.horario_apertura||"--"]}),o.jsxs("span",{className:"res-preview-inst-tag",children:["Cierre: ",v.horario_cierre||"--"]})]})]})]})]})}),o.jsx("section",{className:"res-section",children:o.jsxs("div",{className:"res-grid",children:[o.jsxs("div",{className:"res-form-card",children:[o.jsxs("div",{className:"res-form-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"res-form-eyebrow",children:"Nueva reserva"}),o.jsxs("div",{className:"res-form-title",children:["Agenda tu ",o.jsx("span",{children:"espacio"})]}),o.jsx("div",{className:"res-form-sub",children:"Selecciona instalación, horario y asistentes."})]}),o.jsx("div",{className:"res-avail-badge",children:b.label})]}),o.jsxs("form",{onSubmit:p,children:[o.jsxs("div",{className:"res-form-grid",children:[o.jsxs("div",{className:"res-col-full",children:[o.jsx("label",{className:"res-label",children:"Instalación"}),o.jsxs("div",{className:"res-input-wrap",children:[o.jsx("span",{className:"res-input-icon",children:o.jsx($r,{size:16})}),o.jsxs("select",{name:"instalacion_id",value:f.instalacion_id,onChange:h,className:"res-input",disabled:n,required:!0,children:[o.jsx("option",{value:"",children:n?"Cargando...":"Selecciona una instalación"}),e.map(m=>o.jsx("option",{value:m.id,children:m.nombre},m.id))]})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"res-label",children:"Fecha"}),o.jsxs("div",{className:"res-input-wrap",children:[o.jsx("span",{className:"res-input-icon",children:o.jsx(Fi,{size:16})}),o.jsx("input",{name:"fecha",type:"date",value:f.fecha,onChange:h,className:"res-input",required:!0})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"res-label",children:"Hora de inicio"}),o.jsxs("div",{className:"res-input-wrap",children:[o.jsx("span",{className:"res-input-icon",children:o.jsx(_r,{size:16})}),o.jsx("input",{name:"hora_inicio",type:"time",value:f.hora_inicio,onChange:h,className:"res-input",required:!0})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"res-label",children:"Duración"}),o.jsxs("select",{name:"duracion",value:f.duracion,onChange:h,className:"res-input res-input-noicon",children:[o.jsx("option",{value:"1",children:"1 hora"}),o.jsx("option",{value:"2",children:"2 horas"}),o.jsx("option",{value:"3",children:"3 horas"}),o.jsx("option",{value:"4",children:"4 horas"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"res-label",children:"Asistentes"}),o.jsxs("div",{className:"res-input-wrap",children:[o.jsx("span",{className:"res-input-icon",children:o.jsx(To,{size:16})}),o.jsx("input",{name:"numero_asistentes",type:"number",min:"1",value:f.numero_asistentes,onChange:h,className:"res-input",required:!0})]})]})]}),g.message&&o.jsx("div",{style:{marginTop:"18px"},children:o.jsx("div",{className:`res-feedback ${g.type==="success"?"res-feedback-success":g.type==="warning"?"res-feedback-warning":"res-feedback-error"}`,children:g.message})}),o.jsx("div",{style:{marginTop:"22px"},children:o.jsxs("button",{type:"submit",className:"res-submit",disabled:l||n,children:[l?o.jsx(A0,{size:16,className:"animate-spin"}):o.jsx(Rl,{size:16}),l?"Procesando reserva...":"Confirmar Reserva"]})})]})]}),o.jsxs("div",{className:"res-sidebar",children:[o.jsxs("div",{className:"res-summary-card",children:[o.jsxs("div",{className:"res-summary-header",children:[o.jsx("div",{className:"res-summary-title",children:"Resumen automático"}),o.jsx("div",{className:"res-summary-icon",children:o.jsx(Ui,{size:16})})]}),o.jsxs("div",{className:"res-inst-box",children:[o.jsx("div",{className:"res-inst-box-label",children:"Instalación"}),o.jsx("div",{className:"res-inst-box-name",children:(v==null?void 0:v.nombre)||"Pendiente"}),o.jsx("div",{className:"res-inst-box-desc",children:(v==null?void 0:v.descripcion)||"Elige una instalación para ver sus detalles."})]}),o.jsxs("div",{className:"res-mini-stats",children:[o.jsxs("div",{className:"res-mini-stat",children:[o.jsx("div",{className:"res-mini-stat-label",children:"Hora final"}),o.jsx("div",{className:"res-mini-stat-value",children:y||"--:--"})]}),o.jsxs("div",{className:"res-mini-stat",children:[o.jsx("div",{className:"res-mini-stat-label",children:"Tarifa socio"}),o.jsx("div",{className:"res-mini-stat-value",style:{fontSize:"0.9rem"},children:v?ru(v.tarifa_socio):"--"})]})]}),o.jsxs("div",{className:"res-avail-box",style:{background:"rgba(201,168,76,0.05)",border:"1px solid rgba(201,168,76,0.18)",color:b.color},children:[o.jsxs("div",{className:"res-avail-box-header",children:[o.jsx(Fi,{size:12}),"Disponibilidad"]}),o.jsx("span",{children:i?"Consultando horarios disponibles...":u||"Selecciona instalación y fecha para consultar."})]}),o.jsxs("div",{className:"res-warning-box",style:{marginTop:"12px"},children:[o.jsxs("div",{className:"res-warning-header",children:[o.jsx(q0,{size:12}),"Sesión requerida"]}),o.jsx("div",{className:"res-warning-text",children:"Para confirmar necesitas un JWT válido guardado en localStorage."})]})]}),o.jsx("div",{className:"res-policy-grid",children:hh.map(m=>o.jsxs("div",{className:"res-policy-card",children:[o.jsx("div",{className:"res-policy-icon",children:o.jsx(_0,{size:15})}),o.jsx("div",{className:"res-policy-title",children:m.title}),o.jsx("div",{className:"res-policy-desc",children:m.description})]},m.title))})]})]})})]})]})}const _e="#C9A84C",ti="rgba(201,168,76,0.55)",$a="#0A0A0A",vh="#161616";function xh(){const[e,t]=k.useState({nombre:"",email:"",telefono:"",asunto:"",mensaje:""}),[n,r]=k.useState(!1),i=s=>{s.preventDefault(),r(!0),t({nombre:"",email:"",telefono:"",asunto:"",mensaje:""}),setTimeout(()=>r(!1),5e3)},a=[{icon:o.jsx(Rd,{size:22,strokeWidth:2.5}),label:"Teléfono",value:"2433-7171",href:"tel:24337171"},{icon:o.jsx(Md,{size:22,strokeWidth:2.5}),label:"WhatsApp",value:"7243-4203",href:"https://wa.me/50672434203"},{icon:o.jsx(Td,{size:22,strokeWidth:2.5}),label:"Email",value:"info@lacuevasa.com",href:"mailto:info@lacuevasa.com"},{icon:o.jsx($r,{size:22,strokeWidth:2.5}),label:"Ubicación",value:"Alajuela, Costa Rica",href:null},{icon:o.jsx(_r,{size:22,strokeWidth:2.5}),label:"Horarios",value:"Lun–Vie 8–5 PM · Sáb 9–1 PM",href:null}],l=[{q:"¿Cuál es el horario de atención?",a:"Estamos abiertos de lunes a viernes 8:00 AM - 5:00 PM, y sábados 9:00 AM - 1:00 PM."},{q:"¿Cómo reporto un problema con mi reserva?",a:"Puedes llamar al 2433-7171 o enviar un email a info@lacuevasa.com con detalles del problema."},{q:"¿Ofrecen servicios de catering?",a:"Sí, contamos con restaurante y servicio de catering para eventos. Contacta para cotización."},{q:"¿Hay estacionamiento disponible?",a:"Sí, contamos con amplio estacionamiento gratuito para nuestros visitantes."}];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .cnt-page {
          background: ${$a};
          min-height: 100vh;
          color: #e8e8e8;
        }

        /* ── HERO ── */
        .cnt-hero {
          position: relative;
          padding: 72px 24px 56px;
          text-align: center;
          overflow: hidden;
          background: ${$a};
        }
        .cnt-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,168,76,0.04) 40px);
        }
        .cnt-hero-inner { position: relative; max-width: 640px; margin: 0 auto; }
        .cnt-hero-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: ${ti};
          border: 1px solid rgba(201,168,76,0.25);
          padding: 5px 18px;
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .cnt-hero-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 10px;
        }
        .cnt-hero-title span { color: ${_e}; }
        .cnt-hero-line {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, ${_e}, transparent);
          margin: 14px auto;
        }
        .cnt-hero-sub {
          color: rgba(255,255,255,0.5);
          font-size: 1rem;
        }

        /* ── MAIN SECTION ── */
        .cnt-section {
          padding: 64px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .cnt-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        @media (max-width: 900px) {
          .cnt-grid { grid-template-columns: 1fr; }
        }

        /* ── FORM ── */
        .cnt-card {
          background: ${vh};
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 12px;
          padding: 36px;
          position: relative;
          overflow: hidden;
        }
        .cnt-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${_e}, transparent);
        }
        .cnt-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 24px;
        }
        .cnt-card-title span { color: ${_e}; }
        .cnt-form-group { margin-bottom: 18px; }
        .cnt-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${ti};
          margin-bottom: 8px;
        }
        .cnt-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 6px;
          padding: 12px 14px;
          color: #e8e8e8;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
        }
        .cnt-input:focus {
          border-color: rgba(201,168,76,0.55);
          background: rgba(201,168,76,0.04);
        }
        .cnt-input::placeholder { color: rgba(255,255,255,0.2); }
        textarea.cnt-input { resize: vertical; min-height: 110px; }
        .cnt-submit {
          width: 100%;
          padding: 14px;
          background: transparent;
          border: 1px solid ${_e};
          color: ${_e};
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.25s;
          margin-top: 6px;
        }
        .cnt-submit:hover {
          background: rgba(201,168,76,0.1);
          box-shadow: 0 0 20px rgba(201,168,76,0.15);
        }
        .cnt-success {
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 6px;
          padding: 12px 16px;
          color: ${_e};
          font-size: 0.85rem;
          margin-bottom: 16px;
          text-align: center;
        }

        /* ── CONTACT ITEMS ── */
        .cnt-info-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .cnt-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.12);
          border-radius: 10px;
          padding: 16px 18px;
          transition: border-color 0.2s, background 0.2s;
        }
        .cnt-info-item:hover {
          border-color: rgba(201,168,76,0.3);
          background: rgba(201,168,76,0.04);
        }
        .cnt-info-icon {
          width: 44px;
          height: 44px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${_e};
          flex-shrink: 0;
        }
        .cnt-info-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${ti};
          margin-bottom: 3px;
        }
        .cnt-info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: #e8e8e8;
        }
        .cnt-info-value a {
          color: #e8e8e8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .cnt-info-value a:hover { color: ${_e}; }
        .cnt-response-note {
          margin-top: 20px;
          background: rgba(201,168,76,0.05);
          border: 1px solid rgba(201,168,76,0.18);
          border-radius: 8px;
          padding: 16px 18px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
        }
        .cnt-response-note strong { color: ${_e}; font-size: 0.75rem; letter-spacing: 1.5px; text-transform: uppercase; display: block; margin-bottom: 5px; }

        /* ── MAP ── */
        .cnt-map-section {
          padding: 56px 24px;
          background: #0d0d0d;
          border-top: 1px solid rgba(201,168,76,0.1);
        }
        .cnt-map-inner { max-width: 1000px; margin: 0 auto; }
        .cnt-map-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 6px;
        }
        .cnt-map-title span { color: ${_e}; }
        .cnt-map-line {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, ${_e}, transparent);
          margin: 0 auto 28px;
        }
        .cnt-map-frame {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(201,168,76,0.2);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        /* ── FAQ ── */
        .cnt-faq-section {
          padding: 64px 24px;
          background: ${$a};
          border-top: 1px solid rgba(201,168,76,0.1);
        }
        .cnt-faq-inner { max-width: 760px; margin: 0 auto; }
        .cnt-faq-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          font-style: italic;
          margin-bottom: 6px;
        }
        .cnt-faq-title span { color: ${_e}; }
        .cnt-faq-line {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, ${_e}, transparent);
          margin: 0 auto 32px;
        }
        .cnt-faq-item {
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 8px;
          margin-bottom: 10px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .cnt-faq-item:hover { border-color: rgba(201,168,76,0.3); }
        .cnt-faq-item summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.85);
          list-style: none;
          background: rgba(255,255,255,0.02);
          transition: background 0.2s;
        }
        .cnt-faq-item summary:hover { background: rgba(201,168,76,0.04); }
        .cnt-faq-item summary::-webkit-details-marker { display: none; }
        .cnt-faq-chevron { color: ${ti}; font-size: 0.8rem; transition: transform 0.25s; }
        .cnt-faq-item[open] summary { background: rgba(201,168,76,0.04); }
        .cnt-faq-item[open] .cnt-faq-chevron { transform: rotate(180deg); }
        .cnt-faq-answer {
          padding: 14px 20px 18px;
          font-size: 0.87rem;
          color: rgba(255,255,255,0.5);
          border-top: 1px solid rgba(201,168,76,0.1);
          line-height: 1.7;
        }
      `}),o.jsxs("div",{className:"cnt-page",children:[o.jsx("section",{className:"cnt-hero",children:o.jsxs("div",{className:"cnt-hero-inner",children:[o.jsx("span",{className:"cnt-hero-eyebrow",children:"Club Campestre La Cueva"}),o.jsxs("h1",{className:"cnt-hero-title",children:["Ponte en ",o.jsx("span",{children:"Contacto"})]}),o.jsx("div",{className:"cnt-hero-line"}),o.jsx("p",{className:"cnt-hero-sub",children:"Estamos aquí para ayudarte. ¡Comunícate con nosotros!"})]})}),o.jsx("section",{className:"cnt-section",children:o.jsxs("div",{className:"cnt-grid",children:[o.jsxs("div",{className:"cnt-card",children:[o.jsxs("h2",{className:"cnt-card-title",children:["Envíanos un ",o.jsx("span",{children:"Mensaje"})]}),n&&o.jsx("div",{className:"cnt-success",children:"✦ Tu mensaje ha sido enviado. Pronto nos pondremos en contacto."}),o.jsxs("form",{onSubmit:i,children:[o.jsxs("div",{className:"cnt-form-group",children:[o.jsx("label",{className:"cnt-label",children:"Nombre"}),o.jsx("input",{type:"text",className:"cnt-input",placeholder:"Tu nombre completo",value:e.nombre,onChange:s=>t({...e,nombre:s.target.value}),required:!0})]}),o.jsxs("div",{className:"cnt-form-group",children:[o.jsx("label",{className:"cnt-label",children:"Email"}),o.jsx("input",{type:"email",className:"cnt-input",placeholder:"correo@ejemplo.com",value:e.email,onChange:s=>t({...e,email:s.target.value}),required:!0})]}),o.jsxs("div",{className:"cnt-form-group",children:[o.jsx("label",{className:"cnt-label",children:"Teléfono"}),o.jsx("input",{type:"tel",className:"cnt-input",placeholder:"Opcional",value:e.telefono,onChange:s=>t({...e,telefono:s.target.value})})]}),o.jsxs("div",{className:"cnt-form-group",children:[o.jsx("label",{className:"cnt-label",children:"Asunto"}),o.jsx("input",{type:"text",className:"cnt-input",placeholder:"¿Sobre qué trata tu mensaje?",value:e.asunto,onChange:s=>t({...e,asunto:s.target.value}),required:!0})]}),o.jsxs("div",{className:"cnt-form-group",children:[o.jsx("label",{className:"cnt-label",children:"Mensaje"}),o.jsx("textarea",{className:"cnt-input",placeholder:"Escribe tu mensaje aquí...",value:e.mensaje,onChange:s=>t({...e,mensaje:s.target.value}),required:!0})]}),o.jsx("button",{type:"submit",className:"cnt-submit",children:"Enviar Mensaje"})]})]}),o.jsx("div",{children:o.jsxs("div",{className:"cnt-card",style:{marginBottom:"24px"},children:[o.jsxs("h2",{className:"cnt-card-title",children:["Información de ",o.jsx("span",{children:"Contacto"})]}),o.jsx("div",{className:"cnt-info-list",children:a.map(s=>o.jsxs("div",{className:"cnt-info-item",children:[o.jsx("div",{className:"cnt-info-icon",children:s.icon}),o.jsxs("div",{children:[o.jsx("div",{className:"cnt-info-label",children:s.label}),o.jsx("div",{className:"cnt-info-value",children:s.href?o.jsx("a",{href:s.href,target:s.href.startsWith("http")?"_blank":void 0,rel:"noopener noreferrer",children:s.value}):s.value})]})]},s.label))}),o.jsxs("div",{className:"cnt-response-note",children:[o.jsx("strong",{children:"⏱ Tiempo de Respuesta"}),"Respondemos mensajes dentro de 24 horas hábiles. Para consultas urgentes, llama directamente."]})]})})]})}),o.jsx("section",{className:"cnt-map-section",children:o.jsxs("div",{className:"cnt-map-inner",children:[o.jsxs("h2",{className:"cnt-map-title",children:["Ubícanos en el ",o.jsx("span",{children:"Mapa"})]}),o.jsx("div",{className:"cnt-map-line"}),o.jsx("div",{className:"cnt-map-frame",children:o.jsx("iframe",{width:"100%",height:"400",frameBorder:"0",style:{border:0,display:"block"},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.8373916357543!2d-84.21447!3d10.01622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sAlajuela%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1234567890",allowFullScreen:"",loading:"lazy",title:"Ubicación Club Campestre La Cueva"})})]})}),o.jsx("section",{className:"cnt-faq-section",children:o.jsxs("div",{className:"cnt-faq-inner",children:[o.jsxs("h2",{className:"cnt-faq-title",children:["Preguntas ",o.jsx("span",{children:"Frecuentes"})]}),o.jsx("div",{className:"cnt-faq-line"}),l.map((s,u)=>o.jsxs("details",{className:"cnt-faq-item",children:[o.jsxs("summary",{children:[s.q,o.jsx("span",{className:"cnt-faq-chevron",children:"▼"})]}),o.jsx("p",{className:"cnt-faq-answer",children:s.a})]},u))]})})]})]})}const yh="http://localhost:3000/api",ni=[{id:"individual",nombre:"Membresia Individual",precio:"CRC 65.000",descripcion:"Ideal para quienes quieren entrenar, nadar y reservar con tarifa preferencial.",etiqueta:"Mas elegida",beneficios:["Acceso completo a piscinas y gimnasio","Reservas con precio preferencial","Invitaciones a eventos del club"]},{id:"familiar",nombre:"Membresia Familiar",precio:"CRC 120.000",descripcion:"Pensada para familias que quieren disfrutar el club durante todo el mes.",etiqueta:"Mejor valor",beneficios:["Hasta 4 personas incluidas","Actividades recreativas con descuento","Prioridad en eventos familiares"]},{id:"corporativa",nombre:"Membresia Corporativa",precio:"CRC 185.000",descripcion:"Una opcion flexible para equipos de trabajo y alianzas empresariales.",etiqueta:"Empresas",beneficios:["Hasta 8 accesos corporativos","Tarifas especiales para salones","Atencion personalizada"]}];function wh(){const[e,t]=k.useState(ni[1].id),[n,r]=k.useState({nombre:"",email:""}),[i,a]=k.useState({tipo:"idle",mensaje:""}),[l,s]=k.useState(!1),u=k.useMemo(()=>ni.find(d=>d.id===e)||ni[0],[e]);k.useEffect(()=>{const f=new URLSearchParams(window.location.search).get("checkout");f==="success"?a({tipo:"success",mensaje:"Tu pago fue procesado correctamente. En breve te contactaremos para activar la membresia."}):f==="cancel"&&a({tipo:"warning",mensaje:"El proceso de pago fue cancelado. Puedes retomarlo cuando quieras."})},[]);const c=d=>{const{name:f,value:x}=d.target;r(v=>({...v,[f]:x}))},g=async d=>{d.preventDefault(),s(!0),a({tipo:"idle",mensaje:""});try{const f=await fetch(`${yh}/pagos/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({membresia_id:u.id,nombre:n.nombre,email:n.email})}),x=await f.json();if(!f.ok||!x.success)throw new Error(x.error||"No fue posible iniciar el checkout");if(x.checkout_url){window.location.href=x.checkout_url;return}a({tipo:"info",mensaje:x.message||"Checkout preparado en modo demo."})}catch(f){a({tipo:"error",mensaje:f.message||"Ocurrio un error al procesar la solicitud."})}finally{s(!1)}};return o.jsxs("div",{className:"bg-slate-50 dark:bg-slate-950",children:[o.jsxs("section",{className:"relative overflow-hidden text-white",style:{background:"linear-gradient(135deg, #003AAD 0%, #0061FF 48%, #1DB87B 100%)"},children:[o.jsxs("div",{className:"absolute inset-0 opacity-15",children:[o.jsx("div",{className:"absolute -top-16 right-0 h-72 w-72 rounded-full bg-white blur-3xl"}),o.jsx("div",{className:"absolute bottom-0 left-10 h-60 w-60 rounded-full bg-cyan-300 blur-3xl"})]}),o.jsx("div",{className:"relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-3xl",children:[o.jsxs("p",{className:"mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em]",children:[o.jsx(Ui,{size:16}),"Fase 5 en marcha"]}),o.jsx("h1",{className:"mb-6 text-4xl font-extrabold leading-tight md:text-6xl",children:"Membresias listas para convertirse en una experiencia de compra real"}),o.jsx("p",{className:"max-w-2xl text-lg text-blue-50 md:text-xl",children:"Ya puedes presentar planes, capturar datos del cliente y conectar el checkout con Stripe cuando configures la llave secreta del backend."})]})})]}),o.jsxs("section",{className:"mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.9fr] lg:px-8",children:[o.jsxs("div",{className:"space-y-8",children:[o.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:ni.map(d=>{const f=d.id===e;return o.jsxs("article",{className:`card cursor-pointer p-6 ${f?"ring-2 ring-blue-500":""}`,onClick:()=>t(d.id),children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[o.jsx("span",{className:"rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700",children:d.etiqueta}),o.jsx(Rl,{className:f?"text-emerald-500":"text-slate-300",size:20})]}),o.jsx("h2",{className:"mb-2 text-2xl font-bold text-slate-900 dark:text-white",children:d.nombre}),o.jsx("p",{className:"mb-4 text-sm text-slate-600 dark:text-slate-300",children:d.descripcion}),o.jsx("p",{className:"mb-6 text-3xl font-extrabold text-blue-700 dark:text-cyan-300",children:d.precio}),o.jsx("ul",{className:"space-y-3 text-sm text-slate-700 dark:text-slate-200",children:d.beneficios.map(x=>o.jsxs("li",{className:"flex items-start gap-3",children:[o.jsx(Rl,{size:18,className:"mt-0.5 text-emerald-500"}),o.jsx("span",{children:x})]},x))})]},d.id)})}),o.jsxs("div",{className:"card grid gap-6 p-8 md:grid-cols-3",children:[o.jsxs("div",{children:[o.jsx(G0,{className:"mb-4 text-blue-600",size:28}),o.jsx("h3",{className:"mb-2 text-lg font-bold text-slate-900 dark:text-white",children:"Checkout preparado"}),o.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300",children:"El backend ya responde con un flujo de checkout y puede activar Stripe con variables de entorno."})]}),o.jsxs("div",{children:[o.jsx(T0,{className:"mb-4 text-emerald-600",size:28}),o.jsx("h3",{className:"mb-2 text-lg font-bold text-slate-900 dark:text-white",children:"Catalogo claro"}),o.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300",children:"La tienda muestra planes listos para que el usuario compare y elija sin friccion."})]}),o.jsxs("div",{children:[o.jsx(Ui,{className:"mb-4 text-cyan-600",size:28}),o.jsx("h3",{className:"mb-2 text-lg font-bold text-slate-900 dark:text-white",children:"Base para crecer"}),o.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Queda lista la base para sumar carrito, productos fisicos y automatizacion de comprobantes."})]})]})]}),o.jsxs("aside",{className:"card h-fit p-8",children:[o.jsx("p",{className:"mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700",children:"Checkout"}),o.jsx("h2",{className:"mb-2 text-3xl font-extrabold text-slate-900 dark:text-white",children:u.nombre}),o.jsx("p",{className:"mb-6 text-sm text-slate-600 dark:text-slate-300",children:u.descripcion}),o.jsxs("div",{className:"mb-6 rounded-2xl bg-slate-100 p-5 dark:bg-slate-900",children:[o.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:"Monto mensual"}),o.jsx("p",{className:"mt-1 text-4xl font-extrabold text-blue-700 dark:text-cyan-300",children:u.precio})]}),o.jsxs("form",{className:"space-y-4",onSubmit:g,children:[o.jsxs("div",{children:[o.jsx("label",{className:"mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200",htmlFor:"nombre",children:"Nombre completo"}),o.jsx("input",{id:"nombre",name:"nombre",type:"text",value:n.nombre,onChange:c,className:"w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white",placeholder:"Ej. Maria Fernandez",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200",htmlFor:"email",children:"Correo electronico"}),o.jsx("input",{id:"email",name:"email",type:"email",value:n.email,onChange:c,className:"w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white",placeholder:"correo@ejemplo.com",required:!0})]}),o.jsx("button",{type:"submit",className:"btn-primary inline-flex w-full items-center justify-center gap-2",disabled:l,children:l?"Procesando...":"Continuar al pago"})]}),i.mensaje&&o.jsx("div",{className:`mt-5 rounded-2xl border px-4 py-3 text-sm ${i.tipo==="success"?"border-emerald-200 bg-emerald-50 text-emerald-700":i.tipo==="error"?"border-red-200 bg-red-50 text-red-700":i.tipo==="warning"?"border-amber-200 bg-amber-50 text-amber-700":"border-blue-200 bg-blue-50 text-blue-700"}`,children:i.mensaje}),o.jsx("div",{className:"mt-6 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400",children:"Si Stripe no esta configurado todavia, el backend respondera en modo demo para que puedas validar el flujo sin cortar el desarrollo."})]})]})]})}function kh(){return k.useEffect(()=>{g0.init({duration:800,easing:"ease-in-out",once:!0,mirror:!1,offset:50})},[]),o.jsx(v0,{children:o.jsxs(d0,{children:[o.jsx(x0,{}),o.jsxs("div",{className:"flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors",children:[o.jsx(rh,{}),o.jsx("main",{className:"flex-grow",children:o.jsxs(i0,{children:[o.jsx(dn,{path:"/",element:o.jsx(sh,{})}),o.jsx(dn,{path:"/instalaciones",element:o.jsx(dh,{})}),o.jsx(dn,{path:"/reservas",element:o.jsx(gh,{})}),o.jsx(dn,{path:"/tienda",element:o.jsx(wh,{})}),o.jsx(dn,{path:"/contacto",element:o.jsx(xh,{})})]})}),o.jsx(ih,{}),o.jsx("a",{href:"https://wa.me/50624337171?text=Hola,%20me%20gustaria%20mas%20informacion%20sobre%20el%20Club%20Campestre%20La%20Cueva",target:"_blank",rel:"noopener noreferrer","aria-label":"Contactanos por WhatsApp",style:{position:"fixed",bottom:"24px",right:"24px",zIndex:9999,width:"60px",height:"60px",borderRadius:"50%",backgroundColor:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(37, 211, 102, 0.5)",transition:"transform 0.2s ease, box-shadow 0.2s ease",textDecoration:"none"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.12)",e.currentTarget.style.boxShadow="0 6px 24px rgba(37, 211, 102, 0.7)"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.boxShadow="0 4px 16px rgba(37, 211, 102, 0.5)"},children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"white",children:o.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})})]})]})})}Da.createRoot(document.getElementById("root")).render(o.jsx(hu.StrictMode,{children:o.jsx(kh,{})}));
