import{E as e}from"./index-BZ1CGDjA.js";function t(e,t){return function(){return e.apply(t,arguments)}}const{toString:n}=Object.prototype,{getPrototypeOf:r}=Object,o=(e=>t=>{const r=n.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),s=e=>(e=e.toLowerCase(),t=>o(t)===e),i=e=>t=>typeof t===e,{isArray:a}=Array,c=i("undefined");const u=s("ArrayBuffer");const l=i("string"),f=i("function"),d=i("number"),p=e=>null!==e&&"object"==typeof e,h=e=>{if("object"!==o(e))return!1;const t=r(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},m=s("Date"),y=s("File"),b=s("Blob"),g=s("FileList"),w=s("URLSearchParams"),[E,O,R,S]=["ReadableStream","Request","Response","Headers"].map(s);function T(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),a(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function A(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,x=e=>!c(e)&&e!==v;const j=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&r(Uint8Array)),C=s("HTMLFormElement"),N=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=s("RegExp"),_=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};T(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},L="abcdefghijklmnopqrstuvwxyz",U="0123456789",B={DIGIT:U,ALPHA:L,ALPHA_DIGIT:L+L.toUpperCase()+U};const F=s("AsyncFunction"),D=(k="function"==typeof setImmediate,q=f(v.postMessage),k?setImmediate:q?(I=`axios@${Math.random()}`,M=[],v.addEventListener("message",(({source:e,data:t})=>{e===v&&t===I&&M.length&&M.shift()()}),!1),e=>{M.push(e),v.postMessage(I,"*")}):e=>setTimeout(e));var k,q,I,M;const z="undefined"!=typeof queueMicrotask?queueMicrotask.bind(v):"undefined"!=typeof process&&process.nextTick||D,H={isArray:a,isArrayBuffer:u,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&f(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||f(e.append)&&("formdata"===(t=o(e))||"object"===t&&f(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer),t},isString:l,isNumber:d,isBoolean:e=>!0===e||!1===e,isObject:p,isPlainObject:h,isReadableStream:E,isRequest:O,isResponse:R,isHeaders:S,isUndefined:c,isDate:m,isFile:y,isBlob:b,isRegExp:P,isFunction:f,isStream:e=>p(e)&&f(e.pipe),isURLSearchParams:w,isTypedArray:j,isFileList:g,forEach:T,merge:function e(){const{caseless:t}=x(this)&&this||{},n={},r=(r,o)=>{const s=t&&A(n,o)||o;h(n[s])&&h(r)?n[s]=e(n[s],r):h(r)?n[s]=e({},r):a(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&T(arguments[o],r);return n},extend:(e,n,r,{allOwnKeys:o}={})=>(T(n,((n,o)=>{r&&f(n)?e[o]=t(n,r):e[o]=n}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,o)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],o&&!o(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&r(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:s,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(a(e))return e;let t=e.length;if(!d(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:C,hasOwnProperty:N,hasOwnProp:N,reduceDescriptors:_,freezeMethods:e=>{_(e,((t,n)=>{if(f(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];f(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return a(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:A,global:v,isContextDefined:x,ALPHABET:B,generateString:(e=16,t=B.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&f(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(p(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=a(e)?[]:{};return T(e,((e,t)=>{const s=n(e,r+1);!c(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:F,isThenable:e=>e&&(p(e)||f(e))&&f(e.then)&&f(e.catch),setImmediate:D,asap:z};function J(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}H.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const W=J.prototype,K={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{K[e]={value:e}})),Object.defineProperties(J,K),Object.defineProperty(W,"isAxiosError",{value:!0}),J.from=(e,t,n,r,o,s)=>{const i=Object.create(W);return H.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),J.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function V(e){return H.isPlainObject(e)||H.isArray(e)}function $(e){return H.endsWith(e,"[]")?e.slice(0,-2):e}function G(e,t,n){return e?e.concat(t).map((function(e,t){return e=$(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const X=H.toFlatObject(H,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Q(e,t,n){if(!H.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!H.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&H.isSpecCompliantForm(t);if(!H.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(H.isDate(e))return e.toISOString();if(!a&&H.isBlob(e))throw new J("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(e)||H.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(H.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(H.isArray(e)&&function(e){return H.isArray(e)&&!e.some(V)}(e)||(H.isFileList(e)||H.endsWith(n,"[]"))&&(a=H.toArray(e)))return n=$(n),a.forEach((function(e,r){!H.isUndefined(e)&&null!==e&&t.append(!0===i?G([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!V(e)||(t.append(G(o,n,s),c(e)),!1)}const l=[],f=Object.assign(X,{defaultVisitor:u,convertValue:c,isVisitable:V});if(!H.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!H.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),H.forEach(n,(function(n,s){!0===(!(H.isUndefined(n)||null===n)&&o.call(t,n,H.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function Z(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Y(e,t){this._pairs=[],e&&Q(e,this,t)}const ee=Y.prototype;function te(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ne(e,t,n){if(!t)return e;const r=n&&n.encode||te,o=n&&n.serialize;let s;if(s=o?o(t,n):H.isURLSearchParams(t)?t.toString():new Y(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}ee.append=function(e,t){this._pairs.push([e,t])},ee.toString=function(e){const t=e?function(t){return e.call(this,t,Z)}:Z;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class re{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},se={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Y,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ie="undefined"!=typeof window&&"undefined"!=typeof document,ae="object"==typeof navigator&&navigator||void 0,ce=ie&&(!ae||["ReactNative","NativeScript","NS"].indexOf(ae.product)<0),ue="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,le=ie&&window.location.href||"http://localhost",fe={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ie,hasStandardBrowserEnv:ce,hasStandardBrowserWebWorkerEnv:ue,navigator:ae,origin:le},Symbol.toStringTag,{value:"Module"})),...se};function de(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&H.isArray(r)?r.length:s,a)return H.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&H.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&H.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(H.isFormData(e)&&H.isFunction(e.entries)){const n={};return H.forEachEntry(e,((e,r)=>{t(function(e){return H.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const pe={transitional:oe,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=H.isObject(e);o&&H.isHTMLForm(e)&&(e=new FormData(e));if(H.isFormData(e))return r?JSON.stringify(de(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Q(e,new fe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return fe.isNode&&H.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=H.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Q(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t){if(H.isString(e))try{return(t||JSON.parse)(e),H.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||pe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw J.from(o,J.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:fe.classes.FormData,Blob:fe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],(e=>{pe.headers[e]={}}));const he=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),me=Symbol("internals");function ye(e){return e&&String(e).trim().toLowerCase()}function be(e){return!1===e||null==e?e:H.isArray(e)?e.map(be):String(e)}function ge(e,t,n,r,o){return H.isFunction(r)?r.call(this,t,n):(o&&(t=n),H.isString(t)?H.isString(r)?-1!==t.indexOf(r):H.isRegExp(r)?r.test(t):void 0:void 0)}class we{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ye(t);if(!o)throw new Error("header name must be a non-empty string");const s=H.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=be(e))}const s=(e,t)=>H.forEach(e,((e,n)=>o(e,n,t)));if(H.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(H.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&he[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(H.isHeaders(e))for(const[i,a]of e.entries())o(a,i,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=ye(e)){const n=H.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(H.isFunction(t))return t.call(this,e,n);if(H.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ye(e)){const n=H.findKey(this,e);return!(!n||void 0===this[n]||t&&!ge(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ye(e)){const o=H.findKey(n,e);!o||t&&!ge(0,n[o],o,t)||(delete n[o],r=!0)}}return H.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ge(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return H.forEach(this,((r,o)=>{const s=H.findKey(n,o);if(s)return t[s]=be(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=be(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return H.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&H.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[me]=this[me]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ye(e);t[r]||(!function(e,t){const n=H.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return H.isArray(e)?e.forEach(r):r(e),this}}function Ee(e,t){const n=this||pe,r=t||n,o=we.from(r.headers);let s=r.data;return H.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Oe(e){return!(!e||!e.__CANCEL__)}function Re(e,t,n){J.call(this,null==e?"canceled":e,J.ERR_CANCELED,t,n),this.name="CanceledError"}function Se(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}we.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),H.reduceDescriptors(we.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),H.freezeMethods(we),H.inherits(Re,J,{__CANCEL__:!0});const Te=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let n,r,o=0,s=1e3/t;const i=(t,s=Date.now())=>{o=s,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=s?i(e,t):(n=e,r||(r=setTimeout((()=>{r=null,i(n)}),s-a)))},()=>n&&i(n)]}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s;e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},Ae=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ve=e=>(...t)=>H.asap((()=>e(...t))),xe=fe.hasStandardBrowserEnv?function(){const e=fe.navigator&&/(msie|trident)/i.test(fe.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=H.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}(),je=fe.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];H.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),H.isString(r)&&i.push("path="+r),H.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ce(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ne=e=>e instanceof we?{...e}:e;function Pe(e,t){t=t||{};const n={};function r(e,t,n){return H.isPlainObject(e)&&H.isPlainObject(t)?H.merge.call({caseless:n},e,t):H.isPlainObject(t)?H.merge({},t):H.isArray(t)?t.slice():t}function o(e,t,n){return H.isUndefined(t)?H.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!H.isUndefined(t))return r(void 0,t)}function i(e,t){return H.isUndefined(t)?H.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ne(e),Ne(t),!0)};return H.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);H.isUndefined(i)&&s!==a||(n[r]=i)})),n}const _e=e=>{const t=Pe({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=we.from(a),t.url=ne(Ce(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),H.isFormData(r))if(fe.hasStandardBrowserEnv||fe.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(fe.hasStandardBrowserEnv&&(o&&H.isFunction(o)&&(o=o(t)),o||!1!==o&&xe(t.url))){const e=s&&i&&je.read(i);e&&a.set(s,e)}return t},Le="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=_e(e);let o=r.data;const s=we.from(r.headers).normalize();let i,a,c,u,l,{responseType:f,onUploadProgress:d,onDownloadProgress:p}=r;function h(){u&&u(),l&&l(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function y(){if(!m)return;const r=we.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Se((function(e){t(e),h()}),(function(e){n(e),h()}),{data:f&&"text"!==f&&"json"!==f?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(n(new J("Request aborted",J.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new J("Network Error",J.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||oe;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new J(t,o.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,m)),m=null},void 0===o&&s.setContentType(null),"setRequestHeader"in m&&H.forEach(s.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),H.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),f&&"json"!==f&&(m.responseType=r.responseType),p&&([c,l]=Te(p,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,u]=Te(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",u)),(r.cancelToken||r.signal)&&(i=t=>{m&&(n(!t||t.type?new Re(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const b=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);b&&-1===fe.protocols.indexOf(b)?n(new J("Unsupported protocol "+b+":",J.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Ue=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof J?t:new Re(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{s=null,o(new J(`timeout ${t} of ms exceeded`,J.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=()=>H.asap(i),a}},Be=function*(e,t){let n=e.byteLength;if(n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Fe=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},De=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of Fe(e))yield*Be(n,t)}(e,t);let s,i=0,a=e=>{s||(s=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return a(),void e.close();let s=r.byteLength;if(n){let e=i+=s;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw a(t),t}},cancel:e=>(a(e),o.return())},{highWaterMark:2})},ke="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,qe=ke&&"function"==typeof ReadableStream,Ie=ke&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Me=(e,...t)=>{try{return!!e(...t)}catch(n){return!1}},ze=qe&&Me((()=>{let e=!1;const t=new Request(fe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),He=qe&&Me((()=>H.isReadableStream(new Response("").body))),Je={stream:He&&(e=>e.body)};var We;ke&&(We=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Je[e]&&(Je[e]=H.isFunction(We[e])?t=>t[e]():(t,n)=>{throw new J(`Response type '${e}' is not supported`,J.ERR_NOT_SUPPORT,n)})})));const Ke=async(e,t)=>{const n=H.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(H.isBlob(e))return e.size;if(H.isSpecCompliantForm(e)){const t=new Request(fe.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return H.isArrayBufferView(e)||H.isArrayBuffer(e)?e.byteLength:(H.isURLSearchParams(e)&&(e+=""),H.isString(e)?(await Ie(e)).byteLength:void 0)})(t):n},Ve={http:null,xhr:Le,fetch:ke&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:d}=_e(e);u=u?(u+"").toLowerCase():"text";let p,h=Ue([o,s&&s.toAbortSignal()],i);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(c&&ze&&"get"!==n&&"head"!==n&&0!==(y=await Ke(l,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(H.isFormData(r)&&(e=n.headers.get("content-type"))&&l.setContentType(e),n.body){const[e,t]=Ae(y,Te(ve(c)));r=De(n.body,65536,e,t)}}H.isString(f)||(f=f?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...d,signal:h,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:o?f:void 0});let s=await fetch(p);const i=He&&("stream"===u||"response"===u);if(He&&(a||i&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=H.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&Ae(t,Te(ve(a),!0))||[];s=new Response(De(s.body,65536,n,(()=>{r&&r(),m&&m()})),e)}u=u||"text";let b=await Je[H.findKey(Je,u)||"text"](s,e);return!i&&m&&m(),await new Promise(((t,n)=>{Se(t,n,{data:b,headers:we.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:p})}))}catch(b){if(m&&m(),b&&"TypeError"===b.name&&/fetch/i.test(b.message))throw Object.assign(new J("Network Error",J.ERR_NETWORK,e,p),{cause:b.cause||b});throw J.from(b,b&&b.code,e,p)}})};H.forEach(Ve,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const $e=e=>`- ${e}`,Ge=e=>H.isFunction(e)||null===e||!1===e,Xe=e=>{e=H.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Ge(n)&&(r=Ve[(t=String(n)).toLowerCase()],void 0===r))throw new J(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new J("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map($e).join("\n"):" "+$e(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Qe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Re(null,e)}function Ze(e){Qe(e),e.headers=we.from(e.headers),e.data=Ee.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Xe(e.adapter||pe.adapter)(e).then((function(t){return Qe(e),t.data=Ee.call(e,e.transformResponse,t),t.headers=we.from(t.headers),t}),(function(t){return Oe(t)||(Qe(e),t&&t.response&&(t.response.data=Ee.call(e,e.transformResponse,t.response),t.response.headers=we.from(t.response.headers))),Promise.reject(t)}))}const Ye="1.7.7",et={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{et[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const tt={};et.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new J(function(e,t){return"[Axios v1.7.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),J.ERR_DEPRECATED);return t&&!tt[o]&&(tt[o]=!0),!e||e(r,o,s)}};const nt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new J("option "+s+" must be "+n,J.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new J("Unknown option "+s,J.ERR_BAD_OPTION)}},validators:et},rt=nt.validators;class ot{constructor(e){this.defaults=e,this.interceptors={request:new re,response:new re}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Pe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&nt.assertOptions(n,{silentJSONParsing:rt.transitional(rt.boolean),forcedJSONParsing:rt.transitional(rt.boolean),clarifyTimeoutError:rt.transitional(rt.boolean)},!1),null!=r&&(H.isFunction(r)?t.paramsSerializer={serialize:r}:nt.assertOptions(r,{encode:rt.function,serialize:rt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&H.merge(o.common,o[t.method]);o&&H.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=we.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ze.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=Ze.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return ne(Ce((e=Pe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}H.forEach(["delete","get","head","options"],(function(e){ot.prototype[e]=function(t,n){return this.request(Pe(n||{},{method:e,url:t,data:(n||{}).data}))}})),H.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Pe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ot.prototype[e]=t(),ot.prototype[e+"Form"]=t(!0)}));class st{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Re(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new st((function(t){e=t})),cancel:e}}}const it={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(it).forEach((([e,t])=>{it[t]=e}));const at=function e(n){const r=new ot(n),o=t(ot.prototype.request,r);return H.extend(o,ot.prototype,r,{allOwnKeys:!0}),H.extend(o,r,null,{allOwnKeys:!0}),o.create=function(t){return e(Pe(n,t))},o}(pe);at.Axios=ot,at.CanceledError=Re,at.CancelToken=st,at.isCancel=Oe,at.VERSION=Ye,at.toFormData=Q,at.AxiosError=J,at.Cancel=at.CanceledError,at.all=function(e){return Promise.all(e)},at.spread=function(e){return function(t){return e.apply(null,t)}},at.isAxiosError=function(e){return H.isObject(e)&&!0===e.isAxiosError},at.mergeConfig=Pe,at.AxiosHeaders=we,at.formToJSON=e=>de(H.isHTMLForm(e)?new FormData(e):e),at.getAdapter=Xe,at.HttpStatusCode=it,at.default=at;const ct=at.create({baseURL:"/api",timeout:3e4});ct.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e))),ct.interceptors.response.use((t=>{const n=t.data;return n.success?n.data:(e.error(n.error||"请求失败"),Promise.reject(new Error(n.error||"请求失败")))}),(t=>{var n,r;return"ECONNABORTED"===t.code?e.error("请求超时，请重试"):e.error((null==(r=null==(n=t.response)?void 0:n.data)?void 0:r.error)||t.message||"请求失败"),Promise.reject(t)}));export{ct as s};
