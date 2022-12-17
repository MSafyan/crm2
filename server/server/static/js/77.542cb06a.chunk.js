"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[77],{6485:function(e,i,l){var r=l(1413),a=l(4925),s=l(184),o=["label","name","type","placeholder","onClick","onBlur","value","error"];i.Z=function(e){var i=e.label,l=e.name,n=e.type,d=void 0===n?"text":n,t=e.placeholder,c=e.onClick,m=e.onBlur,b=e.value,u=e.error,h=(0,a.Z)(e,o);return(0,s.jsxs)("div",{className:"relative mb-7",children:[(0,s.jsx)("label",{htmlFor:l,className:"mb-4 block font-medium text-heading",children:i}),(0,s.jsx)("input",(0,r.Z)({id:l,type:d,className:"block w-full rounded-ms border border-border bg-body-bg px-5 py-2.5 font-medium text-heading transition duration-150 placeholder:font-medium placeholder:text-heading/60 focus:border-primary focus:ring-0",placeholder:t,value:b,onClick:c,onBlur:m},h)),(0,s.jsx)("span",{className:"absolute bottom-0.5 -mb-5 block text-xs text-danger",children:u})]})}},9077:function(e,i,l){l.r(i),l.d(i,{default:function(){return h}});var r=l(4427),a=l(1413),s=l(6485),o=l(5705),n=l(7942),d=l(6871),t=l(3575),c=l(184),m={email:"",password:""},b=n.Ry().shape({email:n.Z_().email("Please enter a valid email address").required("This field is required."),password:n.Z_().required("This field is required.").min(6,"Password must be at least 6 characters long.")}),u=function(){var e=(0,t.a)().login,i=(0,d.s0)(),l=(0,o.TA)({initialValues:m,validationSchema:b,onSubmit:function(l){console.log(l),e(l,(function(){return i("/admin")}))}});return(0,c.jsxs)("div",{className:"mx-4 rounded-xl border border-border bg-white shadow-card",children:[(0,c.jsx)("h4",{className:"border-b border-border p-5 text-center text-lg font-medium  text-heading",children:"Sign In"}),(0,c.jsxs)("form",{className:"p-5 ",onSubmit:l.handleSubmit,children:[(0,c.jsx)(s.Z,(0,a.Z)((0,a.Z)({label:"Email",type:"email",placeholder:"hello@example.com"},l.getFieldProps("email")),{},{error:l.touched.email&&l.errors.email})),(0,c.jsx)(s.Z,(0,a.Z)((0,a.Z)({label:"Password",type:"password",placeholder:"Password"},l.getFieldProps("password")),{},{error:l.touched.password&&l.errors.password})),(0,c.jsx)("button",{className:"mt-8 w-full rounded-full bg-success p-3 font-medium text-white",children:"Sign in"})]})]})},h=function(){return(0,c.jsx)("div",{className:"flex  h-screen w-screen items-center justify-center",children:(0,c.jsxs)("div",{className:"w-full max-w-md",children:[(0,c.jsx)("img",{src:r,alt:"logo",className:"mx-auto my-12"}),(0,c.jsx)(u,{})]})})}},4427:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAnCAYAAACbgcH8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkUzM0M2QjAyNjdDMTFFQkFCOTBFNUE5NUU3Rjg4REYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkUzM0M2QjEyNjdDMTFFQkFCOTBFNUE5NUU3Rjg4REYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RTMzQzZBRTI2N0MxMUVCQUI5MEU1QTk1RTdGODhERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RTMzQzZBRjI2N0MxMUVCQUI5MEU1QTk1RTdGODhERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvEyuaIAAAJDSURBVHja1JnLLwNRFMbv0IiwIrGwsCBWbCUWEtb+AFthZSGxIjSh3oQFsWDhlQjFTiwsxKMr1I4FESTEI54RbQiRaH03TpO6mU47M9f09iS/dnrnzszXm3PuOafVasvDV4yxAhACYfZrGh1r9FkcZzqfNfbXxPEwM2eiBm5p4MmFFx+opYFUsH0utA1cpIjgV9DKV/oODILJFBA9NudnxxGXmAV+xQWfg1EW5cffwKO46B6scoAJwbcBFhUVvA3B89FbSLR1g6BigkOiF4iiTyN+o5DNYJV3jEQzEn2miOBn0CcO6okOKBSUA1jlK3HQFWPyMngAxbSzhHVSeLR9ggrQaCDAC9ZApsGcyHPSwS1Y15vkMriBj0jUMuKcPwJL4uCchewgq97IBZ1x5rSAIhkPkyW6GRTGmZMDOlQRXQKaEpxbB6pUEN0Fss2kY53a21HR1aDG5DWVoD5ZojNo1axYOwWv46IbQJnFawtpN3FUdD5w23QtHrylTop2k3A7lkVBbNo0dONWEskJyJOw83zx1UZWPP/vlX6RWAVegnun3KNTkuherPKbU6I3qWqzY1tgwektz05rFrJTs9sRzf16xGoLBXaTlcZHqa80Y0/cl5NZewQtpPJhcJ3sKs9LgZmIHYJxVZoAD/WSiWyVH6qI3gPTceasEsq0W9z6Kchidetdsh4kUzQPrqEY5ybAgYqiGQXZoTB2Y/BllBD9qVOXcLd5VFl0JOBW6JhnvSnZD/ivP4f4j4bv9P4t++Y/AgwA9hp9xOVgKLsAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=77.542cb06a.chunk.js.map