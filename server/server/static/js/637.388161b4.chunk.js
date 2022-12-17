"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[637],{6485:function(e,r,a){var s=a(1413),l=a(4925),t=a(184),o=["label","name","type","placeholder","onClick","onBlur","value","error"];r.Z=function(e){var r=e.label,a=e.name,i=e.type,n=void 0===i?"text":i,d=e.placeholder,c=e.onClick,m=e.onBlur,u=e.value,p=e.error,h=(0,l.Z)(e,o);return(0,t.jsxs)("div",{className:"relative mb-7",children:[(0,t.jsx)("label",{htmlFor:a,className:"mb-4 block font-medium text-heading",children:r}),(0,t.jsx)("input",(0,s.Z)({id:a,type:n,className:"block w-full rounded-ms border border-border bg-body-bg px-5 py-2.5 font-medium text-heading transition duration-150 placeholder:font-medium placeholder:text-heading/60 focus:border-primary focus:ring-0",placeholder:d,value:u,onClick:c,onBlur:m},h)),(0,t.jsx)("span",{className:"absolute bottom-0.5 -mb-5 block text-xs text-danger",children:p})]})}},9637:function(e,r,a){a.r(r);var s=a(1413),l=a(6485),t=a(5705),o=a(7942),i=a(6871),n=a(888),d=a(577),c=a(184),m={name:"",email:"",password:""},u=o.Ry({name:o.Z_().required("Username is required"),email:o.Z_().email("Invalid email").required("Email is required"),password:o.Z_().min(6,"Password must be at least 6 characters").required("Password is required")});r.default=function(){var e=(0,i.s0)(),r=(0,t.TA)({initialValues:m,validationSchema:u,onSubmit:function(r){n.vq.createUser(r).then((function(){e("/admin/users")})).catch((function(e){d.Am.error(e.response.data.message)}))}});return(0,c.jsx)("div",{className:"flex items-center justify-center py-16",children:(0,c.jsxs)("div",{className:"w-full max-w-md rounded-2xl bg-white shadow-card",children:[(0,c.jsx)("h4",{className:"border-b border-border p-5 text-lg font-medium  text-heading",children:"Add a new user"}),(0,c.jsxs)("form",{className:"p-5",onSubmit:r.handleSubmit,children:[(0,c.jsx)(l.Z,(0,s.Z)((0,s.Z)({label:"Username",placeholder:"John Doe"},r.getFieldProps("name")),{},{error:r.touched.name&&r.errors.name})),(0,c.jsx)(l.Z,(0,s.Z)((0,s.Z)({label:"Email",type:"email",placeholder:"hello@example.com"},r.getFieldProps("email")),{},{error:r.touched.email&&r.errors.email})),(0,c.jsx)(l.Z,(0,s.Z)((0,s.Z)({label:"Password",type:"password",placeholder:"Password"},r.getFieldProps("password")),{},{error:r.touched.password&&r.errors.password})),(0,c.jsxs)("div",{className:"mt-7 flex items-center justify-center gap-4",children:[(0,c.jsx)("button",{type:"button",className:"rounded-full bg-primary px-12 py-3 font-medium text-white",onClick:function(){return e(-1)},children:"Back"}),(0,c.jsx)("button",{type:"submit",className:"rounded-full bg-success px-12 py-3 font-medium text-white",children:"Save"})]})]})]})})}}}]);
//# sourceMappingURL=637.388161b4.chunk.js.map