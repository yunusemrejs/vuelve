(function(e,f){typeof exports=="object"&&typeof module<"u"?module.exports=f(require("vue"),require("lodash.clonedeep")):typeof define=="function"&&define.amd?define(["vue","lodash.clonedeep"],f):(e=typeof globalThis<"u"?globalThis:e||self,e.vuelve=f(e.Vue,e.cloneDeep))})(this,function(e,f){"use strict";const u={mounted:e.onMounted,beforeUpdate:e.onBeforeUpdate,updated:e.onUpdated,beforeUnmount:e.onBeforeUnmount,unmounted:e.onUnmounted,errorCaptured:e.onErrorCaptured,renderTracked:e.onRenderTracked,renderTriggered:e.onRenderTriggered,activated:e.onActivated,deactivated:e.onDeactivated,serverPrefetch:e.onServerPrefetch};function h(n){return function(...p){const c={},a={},s={},o={};return p.forEach((t,r)=>{var i;const d=(i=n.props)==null?void 0:i[r];d&&(c[d]=t)}),n.data&&Object.entries(n.data).forEach(([t,r])=>{c[t]=e.ref(f(r))}),Object.assign(o,c),n.methods&&Object.entries(n.methods).forEach(([t,r])=>{a[t]=(...d)=>r.apply(o,d)}),Object.assign(o,a),Object.entries(u).forEach(([t,r])=>{const d=t;if(n[d]){const i=n[d];r((...E)=>i.apply(o,E))}}),n.watch&&Object.entries(n.watch).forEach(([t,r])=>{c[t]&&e.watch(c[t],r)}),n.watchEffect&&Object.values(n.watchEffect).forEach(t=>{e.watchEffect(t.bind(o))}),n.computed&&Object.keys(n.computed).forEach(t=>{var d;const r=(d=n.computed)==null?void 0:d[t];r&&(s[t]=e.computed(r.bind(o)))}),{...c,...a,...s}}}return h});