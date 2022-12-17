"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[623],{6485:function(e,r,a){var s=a(1413),l=a(4925),t=a(184),i=["label","name","type","placeholder","onClick","onBlur","value","error"];r.Z=function(e){var r=e.label,a=e.name,n=e.type,o=void 0===n?"text":n,d=e.placeholder,c=e.onClick,u=e.onBlur,m=e.value,h=e.error,p=(0,l.Z)(e,i);return(0,t.jsxs)("div",{className:"relative mb-7",children:[(0,t.jsx)("label",{htmlFor:a,className:"mb-4 block font-medium text-heading",children:r}),(0,t.jsx)("input",(0,s.Z)({id:a,type:o,className:"block w-full rounded-ms border border-border bg-body-bg px-5 py-2.5 font-medium text-heading transition duration-150 placeholder:font-medium placeholder:text-heading/60 focus:border-primary focus:ring-0",placeholder:d,value:m,onClick:c,onBlur:u},p)),(0,t.jsx)("span",{className:"absolute bottom-0.5 -mb-5 block text-xs text-danger",children:h})]})}},3991:function(e,r,a){var s=a(885),l=a(4882),t=a(2791),i=a(184);r.Z=function(e){var r=e.value,a=e.onChange,n=e.maxFileSize,o=e.name,d=(0,t.useState)(null),c=(0,s.Z)(d,2),u=c[0],m=c[1],h=function(e){if(0===e)return"0 Byte";var r=Math.floor(Math.log(e)/Math.log(1024));return"".concat(Math.round(e/Math.pow(1024,r),2)," ").concat(["Bytes","KB","MB","GB","TB"][r])};return(0,i.jsxs)("div",{className:"relative mb-7",children:[(0,i.jsxs)("div",{className:"mb-4 flex items-center gap-4",children:[(0,i.jsx)("div",{className:"h-14 w-14 flex-shrink-0 rounded-full bg-muted",children:r?(0,i.jsx)("img",{src:"string"===typeof r?r:URL.createObjectURL(r),alt:"Profile Pic",className:"h-full w-full object-cover"}):(0,i.jsx)("div",{className:"flex h-full w-full items-center justify-center text-white/80 ",children:(0,i.jsx)(l.Z,{className:"h-10 w-10"})})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{className:"text-lg font-medium leading-6 text-heading",children:o}),(0,i.jsxs)("p",{children:["Max file size is ",h(n)]})]})]}),(0,i.jsxs)("div",{className:"relative cursor-pointer",children:[(0,i.jsx)("input",{className:"inside-0 absolute cursor-pointer opacity-0 file:cursor-pointer",type:"file",accept:"image/*",onChange:function(e){var r=e.target.files[0];r.size>n&&m("File size is too large. Max file size is ".concat(h(n))),a(r)}}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("div",{className:"form-input w-full flex-1 rounded-l-ms border border-border bg-body-bg px-5 py-2.5 font-medium text-heading transition duration-150 placeholder:font-medium placeholder:text-heading focus:border-primary focus:ring-0",children:"Change Photo"}),(0,i.jsx)("div",{className:"flex items-center justify-center rounded-r-ms bg-primary px-4 font-medium text-white",children:"Upload"})]})]}),(0,i.jsx)("span",{className:"absolute bottom-0.5 -mb-5 block text-xs text-danger",children:u})]})}},439:function(e,r,a){var s=a(1413),l=a(4925),t=a(184),i=["label","name","placeholder","onClick","onBlur","value","error","options","Icon","noGap"];r.Z=function(e){var r=e.label,a=e.name,n=e.placeholder,o=e.onClick,d=e.onBlur,c=e.value,u=e.error,m=e.options,h=e.Icon,p=e.noGap,x=(0,l.Z)(e,i);return(0,t.jsxs)("div",{className:"relative ".concat(p?"mb-0":"mb-7"),children:[r&&(0,t.jsx)("label",{htmlFor:a,className:"mb-4 block font-medium text-heading",children:r}),(0,t.jsxs)("div",{className:"box-border flex w-full divide-x divide-border rounded-ms border border-border bg-body-bg",children:[h&&(0,t.jsx)("div",{className:"flex items-center justify-center rounded-ms bg-white px-3 text-heading",children:(0,t.jsx)(h,{className:"h-7 w-7"})}),(0,t.jsxs)("select",(0,s.Z)((0,s.Z)({id:a,className:"block min-w-0 flex-1 rounded-ms border-0 bg-transparent px-5 font-medium text-heading transition duration-150 focus:ring-1 focus:ring-primary",placeholder:n,value:c,onClick:o,onBlur:d},x),{},{children:[(0,t.jsx)("option",{value:"",children:"Select"}),m.map((function(e){return(0,t.jsx)("option",{value:e.value,children:e.label},e.value)}))]}))]}),(0,t.jsx)("span",{className:"absolute bottom-0.5 -mb-5 block text-xs text-danger",children:u})]})}},9623:function(e,r,a){a.r(r),a.d(r,{default:function(){return B}});var s=a(885),l=a(1413),t=a(6485),i=a(5705),n=a(7942),o=a(2791),d=a(888),c=a(184),u={balance:""},m=n.Ry({balance:n.Rx().min(0,"Balance must be greater than or equal to 0").required("Balance is required")}),h=function(e){var r=e.user,a=(0,i.TA)({initialValues:u,validationSchema:m,onSubmit:function(e){d.vq.updateUser(r._id,{balance:parseFloat(e.balance)})}});return(0,o.useEffect)((function(){a.setValues({balance:r.balance})}),[r]),(0,c.jsxs)("div",{className:" col-span-1 w-full rounded-2xl bg-white shadow-card md:col-span-2 lg:col-span-1",children:[(0,c.jsx)("h4",{className:"border-b border-border p-5 text-lg font-medium  text-heading",children:"Wallet"}),(0,c.jsxs)("form",{className:"p-5",onSubmit:a.handleSubmit,children:[(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"Balance",placeholder:"Balance"},a.getFieldProps("balance")),{},{error:a.touched.balance&&a.errors.balance})),(0,c.jsx)("button",{className:"rounded-full bg-success px-12 py-3 font-medium text-white",children:"Save"})]})]})},p=a(439),x={name:"",email:"",dateOfBirth:"",presentAddress:"",permanentAddress:"",city:"",postalCode:"",country:""},f=n.Ry({name:n.Z_().required("Name is required"),email:n.Z_().email("Invalid email address").required("Email is required"),dateOfBirth:n.hT(),presentAddress:n.Z_(),permanentAddress:n.Z_(),city:n.Z_(),postalCode:n.Z_(),country:n.Z_()}),b=function(e){var r=e.user,a=(0,o.useState)([]),n=(0,s.Z)(a,2),u=n[0],m=n[1];(0,o.useEffect)((function(){d.sR.getAll().then((function(e){m(e)}))}),[]);var h=(0,i.TA)({initialValues:x,validationSchema:f,onSubmit:function(e){d.vq.updateUser(r._id,{name:e.name,email:e.email,dateOfBirth:e.dateOfBirth,presentAddress:e.presentAddress,permanentAddress:e.permanentAddress,city:e.city,postalCode:e.postalCode,country:e.country})}});return(0,o.useEffect)((function(){h.setValues(r)}),[r]),(0,c.jsxs)("div",{className:"col-span-1 w-full rounded-2xl bg-white shadow-card md:col-span-2 lg:col-span-3",children:[(0,c.jsx)("h4",{className:"border-b border-border p-5 text-lg font-medium  text-heading",children:"Personal Information"}),(0,c.jsxs)("form",{className:"grid grid-cols-1 gap-x-3 p-5 lg:grid-cols-2",onSubmit:h.handleSubmit,children:[(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"Your Name",placeholder:"Name"},h.getFieldProps("name")),{},{error:h.touched.name&&h.errors.name})),(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"Email",placeholder:"Email"},h.getFieldProps("email")),{},{error:h.touched.email&&h.errors.email})),(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"Date of Birth",placeholder:"Date of Birth",type:"date"},h.getFieldProps("dateOfBirth")),{},{error:h.touched.dateOfBirth&&h.errors.dateOfBirth})),(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"Present Address",placeholder:"Present Address"},h.getFieldProps("presentAddress")),{},{error:h.touched.presentAddress&&h.errors.presentAddress})),(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"Permanent Address",placeholder:"Permanent Address"},h.getFieldProps("permanentAddress")),{},{error:h.touched.permanentAddress&&h.errors.permanentAddress})),(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"City",placeholder:"City"},h.getFieldProps("city")),{},{error:h.touched.city&&h.errors.city})),(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"Postal Code",placeholder:"Postal Code"},h.getFieldProps("postalCode")),{},{error:h.touched.postalCode&&h.errors.postalCode})),(0,c.jsx)(p.Z,(0,l.Z)((0,l.Z)({label:"Country",placeholder:"Country",options:null===u||void 0===u?void 0:u.map((function(e){return{label:e.country,value:e._id}}))},h.getFieldProps("country")),{},{error:h.touched.country&&h.errors.country})),(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:"rounded-full bg-success px-12 py-3 font-medium text-white",children:"Save"})})]})]})},g=a(3991),v={name:"",profilePic:""},j=n.Ry({name:n.Z_().required("Name is required"),profilePic:n.nK()}),Z=function(e){var r=e.user,a=(0,i.TA)({initialValues:v,validationSchema:j,onSubmit:function(e){var a=new FormData;a.append("name",e.name),e.profilePic instanceof File&&a.append("profilePic",e.profilePic),d.vq.updateUser(r._id,a,!0)}});return(0,o.useEffect)((function(){a.setValues(r)}),[r]),(0,c.jsxs)("div",{className:" w-full rounded-2xl bg-white shadow-card ",children:[(0,c.jsx)("h4",{className:"border-b border-border p-5 text-lg font-medium  text-heading",children:"User Profile"}),(0,c.jsxs)("form",{className:"p-5",onSubmit:a.handleSubmit,children:[(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"Your Name",placeholder:"Name"},a.getFieldProps("name")),{},{error:a.touched.name&&a.errors.name})),(0,c.jsx)(g.Z,{value:a.values.profilePic,onChange:function(e){a.setFieldValue("profilePic",e)},maxFileSize:2e6,name:a.values.name||"Profile Picture"}),(0,c.jsx)("button",{className:"rounded-full bg-success px-12 py-3 font-medium text-white",children:"Save"})]})]})},y={email:"",password:""},N=n.Ry({email:n.Z_().email("Invalid email address").required("Email is required"),password:n.Z_().min(6,"Password must be at least 6 characters")}),w=function(e){var r=e.user,a=(0,i.TA)({initialValues:y,validationSchema:N,onSubmit:function(e){d.vq.updateUser(r._id,{email:e.email,password:e.password}).then((function(){a.setFieldValue("password","")}))}});return(0,o.useEffect)((function(){a.setValues(r)}),[r]),(0,c.jsxs)("div",{className:" w-full rounded-2xl bg-white shadow-card ",children:[(0,c.jsx)("h4",{className:"border-b border-border p-5 text-lg font-medium  text-heading",children:"User Profile"}),(0,c.jsxs)("form",{className:"p-5",onSubmit:a.handleSubmit,children:[(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"New Email",placeholder:"Email",type:"email"},a.getFieldProps("email")),{},{error:a.touched.email&&a.errors.email})),(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({label:"New Password",type:"password",placeholder:"**********"},a.getFieldProps("password")),{},{error:a.touched.password&&a.errors.password})),(0,c.jsx)("button",{className:"rounded-full bg-success px-12 py-3 font-medium text-white",children:"Save"})]})]})},P=a(6871),B=function(){var e=(0,P.s0)(),r=(0,P.UO)().id,a=(0,o.useState)({}),l=(0,s.Z)(a,2),t=l[0],i=l[1];return(0,o.useEffect)((function(){d.vq.getUser(r).then((function(e){i(e)})).catch((function(){e("/admin/users")}))}),[r]),(0,c.jsx)("div",{className:"max-h-[85vh] overflow-auto py-5",children:(0,c.jsxs)("div",{className:"mx-auto max-w-lg px-4 md:max-w-6xl",children:[(0,c.jsx)("div",{children:(0,c.jsx)("button",{type:"button",className:"rounded-full bg-primary px-12 py-3 font-medium text-white",onClick:function(){return e(-1)},children:"Back"})}),(0,c.jsxs)("div",{className:"mt-6 grid grid-cols-1 items-start gap-7 md:grid-cols-2 lg:grid-cols-3",children:[(0,c.jsx)(h,{user:t}),(0,c.jsx)(Z,{user:t}),(0,c.jsx)(w,{user:t}),(0,c.jsx)(b,{user:t})]})]})})}}}]);
//# sourceMappingURL=623.9b0395a8.chunk.js.map