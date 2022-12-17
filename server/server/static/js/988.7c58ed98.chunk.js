"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[988],{6485:function(e,n,r){var t=r(1413),a=r(4925),o=r(184),i=["label","name","type","placeholder","onClick","onBlur","value","error"];n.Z=function(e){var n=e.label,r=e.name,l=e.type,u=void 0===l?"text":l,c=e.placeholder,s=e.onClick,d=e.onBlur,f=e.value,m=e.error,p=(0,a.Z)(e,i);return(0,o.jsxs)("div",{className:"relative mb-7",children:[(0,o.jsx)("label",{htmlFor:r,className:"mb-4 block font-medium text-heading",children:n}),(0,o.jsx)("input",(0,t.Z)({id:r,type:u,className:"block w-full rounded-ms border border-border bg-body-bg px-5 py-2.5 font-medium text-heading transition duration-150 placeholder:font-medium placeholder:text-heading/60 focus:border-primary focus:ring-0",placeholder:c,value:f,onClick:s,onBlur:d},p)),(0,o.jsx)("span",{className:"absolute bottom-0.5 -mb-5 block text-xs text-danger",children:m})]})}},3988:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var t=r(4427),a=r(1413),o=r(6485),i=r(5705),l=r(7942),u=r(4925),c=r(885),s=r(2791),d=r(5612),f=r(7003),m=r(7369),p=r(2953),v=r(2982),h=r(4705),b=r(4159),g=["passive"],w=(0,s.createContext)(null);function y(){var e=(0,s.useContext)(w);if(null===e){var n=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,y),n}return e}var Z=(0,d.yV)((function(e,n){var r=e.passive,t=void 0!==r&&r,o=(0,u.Z)(e,g),i=y(),l="headlessui-label-".concat((0,f.M)()),c=(0,b.T)(n);(0,h.e)((function(){return i.register(l)}),[l,i.register]);var s=(0,a.Z)((0,a.Z)({ref:c},i.props),{},{id:l});return t&&("onClick"in s&&delete s.onClick,"onClick"in o&&delete o.onClick),(0,d.sY)({ourProps:s,theirProps:o,slot:i.slot||{},defaultTag:"label",name:i.name||"Label"})})),A=(0,s.createContext)(null);function E(){var e=(0,s.useContext)(A);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,E),n}return e}function x(){var e=(0,s.useState)([]),n=(0,c.Z)(e,2),r=n[0],t=n[1];return[r.length>0?r.join(" "):void 0,(0,s.useMemo)((function(){return function(e){var n=(0,s.useCallback)((function(e){return t((function(n){return[].concat((0,v.Z)(n),[e])})),function(){return t((function(n){var r=n.slice(),t=r.indexOf(e);return-1!==t&&r.splice(t,1),r}))}}),[]),r=(0,s.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return s.createElement(A.Provider,{value:r},e.children)}}),[t])]}var k=(0,d.yV)((function(e,n){var r=E(),t="headlessui-description-".concat((0,f.M)()),o=(0,b.T)(n);(0,h.e)((function(){return r.register(t)}),[t,r.register]);var i=e,l=(0,a.Z)((0,a.Z)({ref:o},r.props),{},{id:t});return(0,d.sY)({ourProps:l,theirProps:i,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})})),j=r(4381),N=(0,d.yV)((function(e,n){return(0,d.sY)({ourProps:{ref:n,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",display:"none"}},theirProps:e,slot:{},defaultTag:"div",name:"VisuallyHidden"})})),S=r(7762);var T=["checked","onChange","name","value"],R=(0,s.createContext)(null);R.displayName="GroupContext";var M=s.Fragment;var C=(0,d.yV)((function(e,n){var r=e.checked,t=e.onChange,o=e.name,i=e.value,l=(0,u.Z)(e,T),c="headlessui-switch-".concat((0,f.M)()),v=(0,s.useContext)(R),h=(0,s.useRef)(null),g=(0,b.T)(h,n,null===v?null:v.setSwitch),w=(0,s.useCallback)((function(){return t(!r)}),[t,r]),y=(0,s.useCallback)((function(e){if((0,p.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),w()}),[w]),Z=(0,s.useCallback)((function(e){e.key===m.R.Space?(e.preventDefault(),w()):e.key===m.R.Enter&&function(e){var n,r=null!=(n=null==e?void 0:e.form)?n:e.closest("form");if(r){var t,a=(0,S.Z)(r.elements);try{for(a.s();!(t=a.n()).done;){var o=t.value;if("INPUT"===o.tagName&&"submit"===o.type||"BUTTON"===o.tagName&&"submit"===o.type||"INPUT"===o.nodeName&&"image"===o.type)return void o.click()}}catch(i){a.e(i)}finally{a.f()}}}(e.currentTarget)}),[w]),A=(0,s.useCallback)((function(e){return e.preventDefault()}),[]),E=(0,s.useMemo)((function(){return{checked:r}}),[r]),x={id:c,ref:g,role:"switch",type:(0,j.f)(e,h),tabIndex:0,"aria-checked":r,"aria-labelledby":null==v?void 0:v.labelledby,"aria-describedby":null==v?void 0:v.describedby,onClick:y,onKeyUp:Z,onKeyPress:A};return s.createElement(s.Fragment,null,null!=o&&r&&s.createElement(N,(0,a.Z)({},(0,d.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:r,name:o,value:i}))),(0,d.sY)({ourProps:x,theirProps:l,slot:E,defaultTag:"button",name:"Switch"}))})),P=Object.assign(C,{Group:function(e){var n=(0,s.useState)(null),r=(0,c.Z)(n,2),t=r[0],a=r[1],o=function(){var e=(0,s.useState)([]),n=(0,c.Z)(e,2),r=n[0],t=n[1];return[r.length>0?r.join(" "):void 0,(0,s.useMemo)((function(){return function(e){var n=(0,s.useCallback)((function(e){return t((function(n){return[].concat((0,v.Z)(n),[e])})),function(){return t((function(n){var r=n.slice(),t=r.indexOf(e);return-1!==t&&r.splice(t,1),r}))}}),[]),r=(0,s.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return s.createElement(w.Provider,{value:r},e.children)}}),[t])]}(),i=(0,c.Z)(o,2),l=i[0],u=i[1],f=x(),m=(0,c.Z)(f,2),p=m[0],h=m[1],b=(0,s.useMemo)((function(){return{switch:t,setSwitch:a,labelledby:l,describedby:p}}),[t,a,l,p]),g=e;return s.createElement(h,{name:"Switch.Description"},s.createElement(u,{name:"Switch.Label",props:{onClick:function(){!t||(t.click(),t.focus({preventScroll:!0}))}}},s.createElement(R.Provider,{value:b},(0,d.sY)({ourProps:{},theirProps:g,defaultTag:M,name:"Switch.Group"}))))},Label:Z,Description:k}),D=r(184),I=function(e){var n=e.enabled,r=e.setEnabled,t=e.label;return(0,D.jsxs)(P.Group,{as:"div",className:"flex items-center gap-3",children:[(0,D.jsxs)(P,{checked:n,onChange:r,className:"".concat(n?"bg-success":"bg-[#E8EDFC]"," relative inline-flex h-5 w-11 items-center rounded-full transition duration-300"),children:[(0,D.jsx)("span",{className:"sr-only",children:t}),(0,D.jsx)("span",{className:"".concat(n?"translate-x-[1.625rem]":"translate-x-0.5"," inline-block h-4 w-4 transform rounded-full bg-white transition duration-300")})]}),(0,D.jsx)(P.Label,{className:"font-medium text-heading",children:t})]})},G=r(6871),U=r(3575),Y={email:"",password:"",rememberMe:!1},F=l.Ry().shape({email:l.Z_().email("Please enter a valid email address").required("This field is required."),password:l.Z_().required("This field is required.").min(6,"Password must be at least 6 characters long."),rememberMe:l.O7()}),V=function(){var e=(0,U.a)().login,n=(0,G.s0)(),r=(0,i.TA)({initialValues:Y,validationSchema:F,onSubmit:function(r){console.log(r),e(r,(function(){return n("/")}))}});return(0,D.jsxs)("div",{className:"mx-4 rounded-xl border border-border bg-white shadow-card",children:[(0,D.jsx)("h4",{className:"border-b border-border p-5 text-center text-lg font-medium  text-heading",children:"Sign In"}),(0,D.jsxs)("form",{className:"p-5 ",onSubmit:r.handleSubmit,children:[(0,D.jsx)(o.Z,(0,a.Z)((0,a.Z)({label:"Email",type:"email",placeholder:"hello@example.com"},r.getFieldProps("email")),{},{error:r.touched.email&&r.errors.email})),(0,D.jsx)(o.Z,(0,a.Z)((0,a.Z)({label:"Password",type:"password",placeholder:"Password"},r.getFieldProps("password")),{},{error:r.touched.password&&r.errors.password})),(0,D.jsx)("div",{className:"flex flex-wrap justify-between",children:(0,D.jsx)(I,{label:"Remember me",enabled:r.values.rememberMe,setEnabled:function(e){return r.setFieldValue("rememberMe",e)}})}),(0,D.jsx)("button",{className:"mt-8 w-full rounded-full bg-success p-3 font-medium text-white",children:"Sign in"})]})]})},O=function(){return(0,D.jsx)("div",{className:"flex  h-screen w-screen items-center justify-center",children:(0,D.jsxs)("div",{className:"w-full max-w-md",children:[(0,D.jsx)("img",{src:t,alt:"logo",className:"mx-auto my-12"}),(0,D.jsx)(V,{})]})})}},4427:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAnCAYAAACbgcH8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkUzM0M2QjAyNjdDMTFFQkFCOTBFNUE5NUU3Rjg4REYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkUzM0M2QjEyNjdDMTFFQkFCOTBFNUE5NUU3Rjg4REYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RTMzQzZBRTI2N0MxMUVCQUI5MEU1QTk1RTdGODhERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RTMzQzZBRjI2N0MxMUVCQUI5MEU1QTk1RTdGODhERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvEyuaIAAAJDSURBVHja1JnLLwNRFMbv0IiwIrGwsCBWbCUWEtb+AFthZSGxIjSh3oQFsWDhlQjFTiwsxKMr1I4FESTEI54RbQiRaH03TpO6mU47M9f09iS/dnrnzszXm3PuOafVasvDV4yxAhACYfZrGh1r9FkcZzqfNfbXxPEwM2eiBm5p4MmFFx+opYFUsH0utA1cpIjgV9DKV/oODILJFBA9NudnxxGXmAV+xQWfg1EW5cffwKO46B6scoAJwbcBFhUVvA3B89FbSLR1g6BigkOiF4iiTyN+o5DNYJV3jEQzEn2miOBn0CcO6okOKBSUA1jlK3HQFWPyMngAxbSzhHVSeLR9ggrQaCDAC9ZApsGcyHPSwS1Y15vkMriBj0jUMuKcPwJL4uCchewgq97IBZ1x5rSAIhkPkyW6GRTGmZMDOlQRXQKaEpxbB6pUEN0Fss2kY53a21HR1aDG5DWVoD5ZojNo1axYOwWv46IbQJnFawtpN3FUdD5w23QtHrylTop2k3A7lkVBbNo0dONWEskJyJOw83zx1UZWPP/vlX6RWAVegnun3KNTkuherPKbU6I3qWqzY1tgwektz05rFrJTs9sRzf16xGoLBXaTlcZHqa80Y0/cl5NZewQtpPJhcJ3sKs9LgZmIHYJxVZoAD/WSiWyVH6qI3gPTceasEsq0W9z6Kchidetdsh4kUzQPrqEY5ybAgYqiGQXZoTB2Y/BllBD9qVOXcLd5VFl0JOBW6JhnvSnZD/ivP4f4j4bv9P4t++Y/AgwA9hp9xOVgKLsAAAAASUVORK5CYII="},7369:function(e,n,r){r.d(n,{R:function(){return a}});var t,a=((t=a||{}).Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t)},7003:function(e,n,r){r.d(n,{M:function(){return s}});var t,a=r(885),o=r(2791),i=r(4705),l=r(1511),u=0;function c(){return++u}var s=null!=(t=o.useId)?t:function(){var e=(0,l.H)(),n=o.useState(e?c:null),r=(0,a.Z)(n,2),t=r[0],u=r[1];return(0,i.e)((function(){null===t&&u(c())}),[t]),null!=t?""+t:void 0}},4705:function(e,n,r){r.d(n,{e:function(){return a}});var t=r(2791),a="undefined"!=typeof window?t.useLayoutEffect:t.useEffect},4381:function(e,n,r){r.d(n,{f:function(){return l}});var t=r(885),a=r(2791),o=r(4705);function i(e){var n;if(e.type)return e.type;var r=null!=(n=e.as)?n:"button";return"string"==typeof r&&"button"===r.toLowerCase()?"button":void 0}function l(e,n){var r=(0,a.useState)((function(){return i(e)})),l=(0,t.Z)(r,2),u=l[0],c=l[1];return(0,o.e)((function(){c(i(e))}),[e.type,e.as]),(0,o.e)((function(){u||!n.current||n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&c("button")}),[u,n]),u}},1511:function(e,n,r){r.d(n,{H:function(){return i}});var t=r(885),a=r(2791),o={serverHandoffComplete:!1};function i(){var e=(0,a.useState)(o.serverHandoffComplete),n=(0,t.Z)(e,2),r=n[0],i=n[1];return(0,a.useEffect)((function(){!0!==r&&i(!0)}),[r]),(0,a.useEffect)((function(){!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),r}},4159:function(e,n,r){r.d(n,{T:function(){return i}});var t=r(7762),a=r(2791),o=Symbol();function i(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=(0,a.useRef)(n);(0,a.useEffect)((function(){i.current=n}),[n]);var l=(0,a.useCallback)((function(e){var n,r=(0,t.Z)(i.current);try{for(r.s();!(n=r.n()).done;){var a=n.value;null!=a&&("function"==typeof a?a(e):a.current=e)}}catch(o){r.e(o)}finally{r.f()}}),[i]);return n.every((function(e){return null==e||(null==e?void 0:e[o])}))?void 0:l}},2953:function(e,n,r){function t(e){for(var n=e.parentElement,r=null;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(r=n),n=n.parentElement;var t=""===(null==n?void 0:n.getAttribute("disabled"));return(!t||!function(e){if(!e)return!1;for(var n=e.previousElementSibling;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(r))&&t}r.d(n,{P:function(){return t}})},9904:function(e,n,r){function t(e,n){if(e in n){for(var r=n[e],a=arguments.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];return"function"==typeof r?r.apply(void 0,o):r}var l=new Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(n).map((function(e){return'"'.concat(e,'"')})).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(l,t),l}r.d(n,{E:function(){return t}})},5612:function(e,n,r){r.d(n,{AN:function(){return p},l4:function(){return v},oA:function(){return y},sY:function(){return h},yV:function(){return w}});var t,a,o=r(7762),i=r(4942),l=r(1413),u=r(4925),c=r(2791),s=r(9904),d=["static"],f=["unmount"],m=["as","children","refName"],p=((a=p||{})[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a),v=((t=v||{})[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t);function h(e){var n=e.ourProps,r=e.theirProps,t=e.slot,a=e.defaultTag,o=e.features,c=e.visible,m=void 0===c||c,p=e.name,v=g(r,n);if(m)return b(v,t,a,p);var h=null!=o?o:0;if(2&h){var w=v.static,y=void 0!==w&&w,Z=(0,u.Z)(v,d);if(y)return b(Z,t,a,p)}if(1&h){var A,E=v.unmount,x=void 0===E||E,k=(0,u.Z)(v,f);return(0,s.E)(x?0:1,(A={},(0,i.Z)(A,0,(function(){return null})),(0,i.Z)(A,1,(function(){return b((0,l.Z)((0,l.Z)({},k),{},{hidden:!0,style:{display:"none"}}),t,a,p)})),A))}return b(v,t,a,p)}function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0,a=Z(e,["unmount","static"]),o=a.as,l=void 0===o?r:o,s=a.children,d=a.refName,f=void 0===d?"ref":d,p=(0,u.Z)(a,m),v=void 0!==e.ref?(0,i.Z)({},f,e.ref):{},h="function"==typeof s?s(n):s;if(p.className&&"function"==typeof p.className&&(p.className=p.className(n)),l===c.Fragment&&Object.keys(y(p)).length>0){if(!(0,c.isValidElement)(h)||Array.isArray(h)&&h.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <".concat(t,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(p).map((function(e){return"  - ".concat(e)})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - ".concat(e)})).join("\n")].join("\n"));return(0,c.cloneElement)(h,Object.assign({},g(h.props,y(Z(p,["ref"]))),v))}return(0,c.createElement)(l,Object.assign({},Z(p,["ref"]),l!==c.Fragment&&v),h)}function g(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(0===n.length)return{};if(1===n.length)return n[0];for(var t={},a={},l=0,u=n;l<u.length;l++){var c=u[l];for(var s in c)s.startsWith("on")&&"function"==typeof c[s]?(null!=a[s]||(a[s]=[]),a[s].push(c[s])):t[s]=c[s]}if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(a).map((function(e){return[e,void 0]}))));var d=function(e){Object.assign(t,(0,i.Z)({},e,(function(n){var r,t=a[e],i=(0,o.Z)(t);try{for(i.s();!(r=i.n()).done;){var l=r.value;if(n.defaultPrevented)return;l(n)}}catch(u){i.e(u)}finally{i.f()}})))};for(var f in a)d(f);return t}function w(e){var n;return Object.assign((0,c.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function y(e){var n=Object.assign({},e);for(var r in n)void 0===n[r]&&delete n[r];return n}function Z(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object.assign({},e),a=(0,o.Z)(r);try{for(a.s();!(n=a.n()).done;){var i=n.value;i in t&&delete t[i]}}catch(l){a.e(l)}finally{a.f()}return t}}}]);
//# sourceMappingURL=988.7c58ed98.chunk.js.map