(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[179],{5846:(n,t,e)=>{"use strict";var r=e(7294),o=e(3935),i=e(9704);function a(n,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},a(n,t)}function c(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,a(n,t)}var u=e(5697),s=e.n(u),l=e(7462);function f(n){return"/"===n.charAt(0)}function p(n,t){for(var e=t,r=e+1,o=n.length;r<o;e+=1,r+=1)n[e]=n[r];n.pop()}const h=function(n,t){void 0===t&&(t="");var e,r=n&&n.split("/")||[],o=t&&t.split("/")||[],i=n&&f(n),a=t&&f(t),c=i||a;if(n&&f(n)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];e="."===u||".."===u||""===u}else e=!1;for(var s=0,l=o.length;l>=0;l--){var h=o[l];"."===h?p(o,l):".."===h?(p(o,l),s++):s&&(p(o,l),s--)}if(!c)for(;s--;s)o.unshift("..");!c||""===o[0]||o[0]&&f(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d};var d="Invariant failed";function v(n,t){if(!n)throw new Error(d)}function m(n){return"/"===n.charAt(0)?n:"/"+n}function y(n){return"/"===n.charAt(0)?n.substr(1):n}function g(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function x(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function w(n){var t=n.pathname,e=n.search,r=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function b(n,t,e,r){var o;"string"==typeof n?(o=function(n){var t=n||"/",e="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===r?"":r}}(n),o.state=t):(void 0===(o=(0,l.Z)({},n)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=h(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function E(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(n){var e=!0;function r(){e&&n.apply(void 0,arguments)}return t.push(r),function(){e=!1,t=t.filter((function(n){return n!==r}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];t.forEach((function(n){return n.apply(void 0,e)}))}}}var C=!("undefined"==typeof window||!window.document||!window.document.createElement);function O(n,t){t(window.confirm(n))}var P="popstate",k="hashchange";function A(){try{return window.history.state||{}}catch(n){return{}}}function T(n){void 0===n&&(n={}),C||v(!1);var t,e=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=n,a=i.forceRefresh,c=void 0!==a&&a,u=i.getUserConfirmation,s=void 0===u?O:u,f=i.keyLength,p=void 0===f?6:f,h=n.basename?x(m(n.basename)):"";function d(n){var t=n||{},e=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return h&&(i=g(i,h)),b(i,r,e)}function y(){return Math.random().toString(36).substr(2,p)}var T=E();function R(n){(0,l.Z)($,n),$.length=e.length,T.notifyListeners($.location,$.action)}function _(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||S(d(n.state))}function L(){S(d(A()))}var j=!1;function S(n){if(j)j=!1,R();else{T.confirmTransitionTo(n,"POP",s,(function(t){t?R({action:"POP",location:n}):function(n){var t=$.location,e=I.indexOf(t.key);-1===e&&(e=0);var r=I.indexOf(n.key);-1===r&&(r=0);var o=e-r;o&&(j=!0,B(o))}(n)}))}}var U=d(A()),I=[U.key];function M(n){return h+w(n)}function B(n){e.go(n)}var Z=0;function H(n){1===(Z+=n)&&1===n?(window.addEventListener(P,_),o&&window.addEventListener(k,L)):0===Z&&(window.removeEventListener(P,_),o&&window.removeEventListener(k,L))}var N=!1;var $={length:e.length,action:"POP",location:U,createHref:M,push:function(n,t){var o="PUSH",i=b(n,t,y(),$.location);T.confirmTransitionTo(i,o,s,(function(n){if(n){var t=M(i),a=i.key,u=i.state;if(r)if(e.pushState({key:a,state:u},null,t),c)window.location.href=t;else{var s=I.indexOf($.location.key),l=I.slice(0,s+1);l.push(i.key),I=l,R({action:o,location:i})}else window.location.href=t}}))},replace:function(n,t){var o="REPLACE",i=b(n,t,y(),$.location);T.confirmTransitionTo(i,o,s,(function(n){if(n){var t=M(i),a=i.key,u=i.state;if(r)if(e.replaceState({key:a,state:u},null,t),c)window.location.replace(t);else{var s=I.indexOf($.location.key);-1!==s&&(I[s]=i.key),R({action:o,location:i})}else window.location.replace(t)}}))},go:B,goBack:function(){B(-1)},goForward:function(){B(1)},block:function(n){void 0===n&&(n=!1);var t=T.setPrompt(n);return N||(H(1),N=!0),function(){return N&&(N=!1,H(-1)),t()}},listen:function(n){var t=T.appendListener(n);return H(1),function(){H(-1),t()}}};return $}var R="hashchange",_={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+y(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:y,decodePath:m},slash:{encodePath:m,decodePath:m}};function L(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function j(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function S(n){window.location.replace(L(window.location.href)+"#"+n)}function U(n){void 0===n&&(n={}),C||v(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),r=e.getUserConfirmation,o=void 0===r?O:r,i=e.hashType,a=void 0===i?"slash":i,c=n.basename?x(m(n.basename)):"",u=_[a],s=u.encodePath,f=u.decodePath;function p(){var n=f(j());return c&&(n=g(n,c)),b(n)}var h=E();function d(n){(0,l.Z)(N,n),N.length=t.length,h.notifyListeners(N.location,N.action)}var y=!1,P=null;function k(){var n,t,e=j(),r=s(e);if(e!==r)S(r);else{var i=p(),a=N.location;if(!y&&(t=i,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(P===w(i))return;P=null,function(n){if(y)y=!1,d();else{var t="POP";h.confirmTransitionTo(n,t,o,(function(e){e?d({action:t,location:n}):function(n){var t=N.location,e=I.lastIndexOf(w(t));-1===e&&(e=0);var r=I.lastIndexOf(w(n));-1===r&&(r=0);var o=e-r;o&&(y=!0,M(o))}(n)}))}}(i)}}var A=j(),T=s(A);A!==T&&S(T);var U=p(),I=[w(U)];function M(n){t.go(n)}var B=0;function Z(n){1===(B+=n)&&1===n?window.addEventListener(R,k):0===B&&window.removeEventListener(R,k)}var H=!1;var N={length:t.length,action:"POP",location:U,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=L(window.location.href)),e+"#"+s(c+w(n))},push:function(n,t){var e="PUSH",r=b(n,void 0,void 0,N.location);h.confirmTransitionTo(r,e,o,(function(n){if(n){var t=w(r),o=s(c+t);if(j()!==o){P=t,function(n){window.location.hash=n}(o);var i=I.lastIndexOf(w(N.location)),a=I.slice(0,i+1);a.push(t),I=a,d({action:e,location:r})}else d()}}))},replace:function(n,t){var e="REPLACE",r=b(n,void 0,void 0,N.location);h.confirmTransitionTo(r,e,o,(function(n){if(n){var t=w(r),o=s(c+t);j()!==o&&(P=t,S(o));var i=I.indexOf(w(N.location));-1!==i&&(I[i]=t),d({action:e,location:r})}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(n){void 0===n&&(n=!1);var t=h.setPrompt(n);return H||(Z(1),H=!0),function(){return H&&(H=!1,Z(-1)),t()}},listen:function(n){var t=h.appendListener(n);return Z(1),function(){Z(-1),t()}}};return N}function I(n,t,e){return Math.min(Math.max(n,t),e)}function M(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,r=t.initialEntries,o=void 0===r?["/"]:r,i=t.initialIndex,a=void 0===i?0:i,c=t.keyLength,u=void 0===c?6:c,s=E();function f(n){(0,l.Z)(y,n),y.length=y.entries.length,s.notifyListeners(y.location,y.action)}function p(){return Math.random().toString(36).substr(2,u)}var h=I(a,0,o.length-1),d=o.map((function(n){return b(n,void 0,"string"==typeof n?p():n.key||p())})),v=w;function m(n){var t=I(y.index+n,0,y.entries.length-1),r=y.entries[t];s.confirmTransitionTo(r,"POP",e,(function(n){n?f({action:"POP",location:r,index:t}):f()}))}var y={length:d.length,action:"POP",location:d[h],index:h,entries:d,createHref:v,push:function(n,t){var r="PUSH",o=b(n,t,p(),y.location);s.confirmTransitionTo(o,r,e,(function(n){if(n){var t=y.index+1,e=y.entries.slice(0);e.length>t?e.splice(t,e.length-t,o):e.push(o),f({action:r,location:o,index:t,entries:e})}}))},replace:function(n,t){var r="REPLACE",o=b(n,t,p(),y.location);s.confirmTransitionTo(o,r,e,(function(n){n&&(y.entries[y.index]=o,f({action:r,location:o}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(n){var t=y.index+n;return t>=0&&t<y.entries.length},block:function(n){return void 0===n&&(n=!1),s.setPrompt(n)},listen:function(n){return s.appendListener(n)}};return y}var B=e(4779),Z=e.n(B);e(9864);function H(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}e(8679);var N=1073741823,$="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function W(n){var t=[];return{on:function(n){t.push(n)},off:function(n){t=t.filter((function(t){return t!==n}))},get:function(){return n},set:function(e,r){n=e,t.forEach((function(t){return t(n,r)}))}}}var D=r.createContext||function(n,t){var e,o,i="__create-react-context-"+function(){var n="__global_unique_id__";return $[n]=($[n]||0)+1}()+"__",a=function(n){function e(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).emitter=W(t.props.value),t}c(e,n);var r=e.prototype;return r.getChildContext=function(){var n;return(n={})[i]=this.emitter,n},r.componentWillReceiveProps=function(n){if(this.props.value!==n.value){var e,r=this.props.value,o=n.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof t?t(r,o):N,0!==(e|=0)&&this.emitter.set(n.value,e))}var i,a},r.render=function(){return this.props.children},e}(r.Component);a.childContextTypes=((e={})[i]=s().object.isRequired,e);var u=function(t){function e(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).observedBits=void 0,n.state={value:n.getValue()},n.onUpdate=function(t,e){0!=((0|n.observedBits)&e)&&n.setState({value:n.getValue()})},n}c(e,t);var r=e.prototype;return r.componentWillReceiveProps=function(n){var t=n.observedBits;this.observedBits=null==t?N:t},r.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var n=this.props.observedBits;this.observedBits=null==n?N:n},r.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},r.getValue=function(){return this.context[i]?this.context[i].get():n},r.render=function(){return(n=this.props.children,Array.isArray(n)?n[0]:n)(this.state.value);var n},e}(r.Component);return u.contextTypes=((o={})[i]=s().object,o),{Provider:a,Consumer:u}},F=function(n){var t=D();return t.displayName=n,t},V=F("Router-History"),q=F("Router"),K=function(n){function t(t){var e;return(e=n.call(this,t)||this).state={location:t.history.location},e._isMounted=!1,e._pendingLocation=null,t.staticContext||(e.unlisten=t.history.listen((function(n){e._pendingLocation=n}))),e}c(t,n),t.computeRootMatch=function(n){return{path:"/",url:"/",params:{},isExact:"/"===n}};var e=t.prototype;return e.componentDidMount=function(){var n=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(t){n._isMounted&&n.setState({location:t})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return r.createElement(q.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},r.createElement(V.Provider,{children:this.props.children||null,value:this.props.history}))},t}(r.Component);r.Component;r.Component;var J={},z=0;function G(n,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var e=t,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,e){if(!e&&""!==e)return null;if(t)return t;var r=function(n,t){var e=""+t.end+t.strict+t.sensitive,r=J[e]||(J[e]={});if(r[n])return r[n];var o=[],i={regexp:Z()(n,o,t),keys:o};return z<1e4&&(r[n]=i,z++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(n);if(!u)return null;var l=u[0],f=u.slice(1),p=n===l;return i&&!p?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:p,params:a.reduce((function(n,t,e){return n[t.name]=f[e],n}),{})}}),null)}var Y=function(n){function t(){return n.apply(this,arguments)||this}return c(t,n),t.prototype.render=function(){var n=this;return r.createElement(q.Consumer,null,(function(t){t||v(!1);var e=n.props.location||t.location,o=n.props.computedMatch?n.props.computedMatch:n.props.path?G(e.pathname,n.props):t.match,i=(0,l.Z)({},t,{location:e,match:o}),a=n.props,c=a.children,u=a.component,s=a.render;return Array.isArray(c)&&function(n){return 0===r.Children.count(n)}(c)&&(c=null),r.createElement(q.Provider,{value:i},i.match?c?"function"==typeof c?c(i):c:u?r.createElement(u,i):s?s(i):null:"function"==typeof c?c(i):null)}))},t}(r.Component);function Q(n){return"/"===n.charAt(0)?n:"/"+n}function X(n,t){if(!n)return t;var e=Q(n);return 0!==t.pathname.indexOf(e)?t:(0,l.Z)({},t,{pathname:t.pathname.substr(e.length)})}function nn(n){return"string"==typeof n?n:w(n)}function tn(n){return function(){v(!1)}}function en(){}r.Component;var rn=function(n){function t(){return n.apply(this,arguments)||this}return c(t,n),t.prototype.render=function(){var n=this;return r.createElement(q.Consumer,null,(function(t){t||v(!1);var e,o,i=n.props.location||t.location;return r.Children.forEach(n.props.children,(function(n){if(null==o&&r.isValidElement(n)){e=n;var a=n.props.path||n.props.from;o=a?G(i.pathname,(0,l.Z)({},n.props,{path:a})):t.match}})),o?r.cloneElement(e,{location:i,computedMatch:o}):null}))},t}(r.Component);r.useContext;var on=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=T(t.props),t}return c(t,n),t.prototype.render=function(){return r.createElement(K,{history:this.history,children:this.props.children})},t}(r.Component);r.Component;var an=function(n,t){return"function"==typeof n?n(t):n},cn=function(n,t){return"string"==typeof n?b(n,null,null,t):n},un=function(n){return n},sn=r.forwardRef;void 0===sn&&(sn=un);var ln=sn((function(n,t){var e=n.innerRef,o=n.navigate,i=n.onClick,a=H(n,["innerRef","navigate","onClick"]),c=a.target,u=(0,l.Z)({},a,{onClick:function(n){try{i&&i(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||c&&"_self"!==c||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),o())}});return u.ref=un!==sn&&t||e,r.createElement("a",u)}));var fn=sn((function(n,t){var e=n.component,o=void 0===e?ln:e,i=n.replace,a=n.to,c=n.innerRef,u=H(n,["component","replace","to","innerRef"]);return r.createElement(q.Consumer,null,(function(n){n||v(!1);var e=n.history,s=cn(an(a,n.location),n.location),f=s?e.createHref(s):"",p=(0,l.Z)({},u,{href:f,navigate:function(){var t=an(a,n.location),r=w(n.location)===w(cn(t));(i||r?e.replace:e.push)(t)}});return un!==sn?p.ref=t||c:p.innerRef=c,r.createElement(o,p)}))})),pn=function(n){return n},hn=r.forwardRef;void 0===hn&&(hn=pn);hn((function(n,t){var e=n["aria-current"],o=void 0===e?"page":e,i=n.activeClassName,a=void 0===i?"active":i,c=n.activeStyle,u=n.className,s=n.exact,f=n.isActive,p=n.location,h=n.sensitive,d=n.strict,m=n.style,y=n.to,g=n.innerRef,x=H(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return r.createElement(q.Consumer,null,(function(n){n||v(!1);var e=p||n.location,i=cn(an(y,e),e),w=i.pathname,b=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),E=b?G(e.pathname,{path:b,exact:s,sensitive:h,strict:d}):null,C=!!(f?f(E,e):E),O="function"==typeof u?u(C):u,P="function"==typeof m?m(C):m;C&&(O=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(O,a),P=(0,l.Z)({},P,c));var k=(0,l.Z)({"aria-current":C&&o||null,className:O,style:P,to:i},x);return pn!==hn?k.ref=t||g:k.innerRef=g,r.createElement(fn,k)}))}));var dn=e(9253),vn=e(4058),mn=e(5893);function yn(){return(0,mn.jsxs)("div",{children:[(0,mn.jsxs)("nav",{children:[(0,mn.jsx)(fn,{"data-testid":"link-home",to:"/",children:"Home"}),(0,mn.jsx)(fn,{to:"/about",children:"About"})]}),(0,mn.jsxs)(rn,{children:[(0,mn.jsx)(Y,{path:"/about",children:(0,mn.jsx)(dn.C,{})}),(0,mn.jsx)(Y,{path:"/",children:(0,mn.jsx)(vn.S,{})})]})]})}var gn=(0,e(6205).N2)();o.render((0,mn.jsx)(on,{children:(0,mn.jsx)(i.zt,{store:gn,children:(0,mn.jsx)(yn,{})})}),document.getElementById("root"))},5826:n=>{n.exports=Array.isArray||function(n){return"[object Array]"==Object.prototype.toString.call(n)}},4779:(n,t,e)=>{var r=e(5826);n.exports=h,n.exports.parse=i,n.exports.compile=function(n,t){return c(i(n,t),t)},n.exports.tokensToFunction=c,n.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(n,t){for(var e,r=[],i=0,a=0,c="",l=t&&t.delimiter||"/";null!=(e=o.exec(n));){var f=e[0],p=e[1],h=e.index;if(c+=n.slice(a,h),a=h+f.length,p)c+=p[1];else{var d=n[a],v=e[2],m=e[3],y=e[4],g=e[5],x=e[6],w=e[7];c&&(r.push(c),c="");var b=null!=v&&null!=d&&d!==v,E="+"===x||"*"===x,C="?"===x||"*"===x,O=e[2]||l,P=y||g;r.push({name:m||i++,prefix:v||"",delimiter:O,optional:C,repeat:E,partial:b,asterisk:!!w,pattern:P?s(P):w?".*":"[^"+u(O)+"]+?"})}}return a<n.length&&(c+=n.substr(a)),c&&r.push(c),r}function a(n){return encodeURI(n).replace(/[\/?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()}))}function c(n,t){for(var e=new Array(n.length),o=0;o<n.length;o++)"object"==typeof n[o]&&(e[o]=new RegExp("^(?:"+n[o].pattern+")$",f(t)));return function(t,o){for(var i="",c=t||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<n.length;s++){var l=n[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!e[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function l(n,t){return n.keys=t,n}function f(n){return n&&n.sensitive?"":"i"}function p(n,t,e){r(t)||(e=t||e,t=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<n.length;c++){var s=n[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,f(e)),t)}function h(n,t,e){return r(t)||(e=t||e,t=[]),e=e||{},n instanceof RegExp?function(n,t){var e=n.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(n,t)}(n,t):r(n)?function(n,t,e){for(var r=[],o=0;o<n.length;o++)r.push(h(n[o],t,e).source);return l(new RegExp("(?:"+r.join("|")+")",f(e)),t)}(n,t,e):function(n,t,e){return p(i(n,e),t,e)}(n,t,e)}},2703:(n,t,e)=>{"use strict";var r=e(414);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},5697:(n,t,e)=>{n.exports=e(2703)()},414:n=>{"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},n=>{n.O(0,[893,443,177],(()=>{return t=5846,n(n.s=t);var t}));n.O()}]);