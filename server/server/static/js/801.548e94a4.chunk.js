"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[801],{439:function(e,n,t){var r=t(1413),a=t(4925),s=t(184),c=["label","name","placeholder","onClick","onBlur","value","error","options","Icon","noGap"];n.Z=function(e){var n=e.label,t=e.name,l=e.placeholder,i=e.onClick,o=e.onBlur,d=e.value,u=e.error,m=e.options,h=e.Icon,x=e.noGap,f=(0,a.Z)(e,c);return(0,s.jsxs)("div",{className:"relative ".concat(x?"mb-0":"mb-7"),children:[n&&(0,s.jsx)("label",{htmlFor:t,className:"mb-4 block font-medium text-heading",children:n}),(0,s.jsxs)("div",{className:"box-border flex w-full divide-x divide-border rounded-ms border border-border bg-body-bg",children:[h&&(0,s.jsx)("div",{className:"flex items-center justify-center rounded-ms bg-white px-3 text-heading",children:(0,s.jsx)(h,{className:"h-7 w-7"})}),(0,s.jsxs)("select",(0,r.Z)((0,r.Z)({id:t,className:"block min-w-0 flex-1 rounded-ms border-0 bg-transparent px-5 font-medium text-heading transition duration-150 focus:ring-1 focus:ring-primary",placeholder:l,value:d,onClick:i,onBlur:o},f),{},{children:[(0,s.jsx)("option",{value:"",children:"Select"}),m.map((function(e){return(0,s.jsx)("option",{value:e.value,children:e.label},e.value)}))]}))]}),(0,s.jsx)("span",{className:"absolute bottom-0.5 -mb-5 block text-xs text-danger",children:u})]})}},3481:function(e,n,t){t.d(n,{tl:function(){return w},iA:function(){return l},p3:function(){return h},Td:function(){return o},Th:function(){return p},hr:function(){return f},Tr:function(){return u}});var r=t(1413),a=t(4925),s=t(184),c=["children","className"],l=function(e){var n=e.children,t=e.className,l=(0,a.Z)(e,c);return(0,s.jsx)("table",(0,r.Z)((0,r.Z)({className:"table-spacing z-0 w-full border-separate ".concat(t)},l),{},{children:n}))},i=["children","className"],o=function(e){var n=e.children,t=e.className,c=(0,a.Z)(e,i);return(0,s.jsx)("td",(0,r.Z)((0,r.Z)({className:"border-0 bg-body-bg p-4 text-left align-middle font-semibold first:rounded-l-md last:rounded-r-md ".concat(t)},c),{},{children:n}))},d=["children","className"],u=function(e){var n=e.children,t=e.className,c=(0,a.Z)(e,d);return(0,s.jsx)("tr",(0,r.Z)((0,r.Z)({className:"".concat(t)},c),{},{children:n}))},m=["children","className"],h=function(e){var n=e.children,t=e.className,c=(0,a.Z)(e,m);return(0,s.jsx)("tbody",(0,r.Z)((0,r.Z)({className:"".concat(t)},c),{},{children:n}))},x=["children","className"],f=function(e){var n=e.children,t=e.className,c=(0,a.Z)(e,x);return(0,s.jsx)("thead",(0,r.Z)((0,r.Z)({className:" z-10 shadow-card ".concat(t)},c),{},{children:n}))},v=["children","className"],p=function(e){var n=e.children,t=e.className,c=(0,a.Z)(e,v);return(0,s.jsx)("th",(0,r.Z)((0,r.Z)({className:"border-0 bg-body-bg p-4 text-left align-middle font-semibold text-heading first:rounded-l-md last:rounded-r-md ".concat(t)},c),{},{children:n}))},j=t(2359),b=t(2791);var g=b.forwardRef((function(e,n){return b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),b.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"}))}));var N=b.forwardRef((function(e,n){return b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),b.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"}))})),w=function(e){var n=e.totalPages,t=e.noOfButtons,r=void 0===t?5:t,a=e.showNext,c=void 0===a||a,l=e.showPrevious,i=void 0===l||l,o=(0,j.Z)(),d=o.search,u=o.setSearchParam,m=parseInt(parseInt(d.page)||1),h=[];if(n>r){var x=m-Math.floor((r-1)/2),f=x+r-1;x<1?f=(x=1)+r-1:f>n&&(x=(f=n)-r+1);for(var v=x;v<=f;v++)h.push(v)}else for(var p=1;p<=n;p++)h.push(p);var b=m<n,w=m>1;return(0,s.jsxs)("div",{className:"flex items-center justify-center",children:[i&&(0,s.jsx)("button",{onClick:function(){u("page",m-1)},className:"mr-2 p-2 transition hover:text-primary disabled:text-muted",disabled:!w,children:(0,s.jsx)(g,{className:"h-4 w-4"})}),h.map((function(e){var t=e,r=m===t?"bg-primary text-white":"bg-white text-primary",a=t>n?null:function(){return u("page",t)};return(0,s.jsx)("button",{className:"".concat(r," mx-2 flex h-10 w-10 items-center justify-center rounded-lg "),onClick:a,children:t},e)})),c&&(0,s.jsx)("button",{onClick:function(){u("page",m+1)},className:"ml-2 p-2 transition hover:text-primary disabled:text-muted",disabled:!b,children:(0,s.jsx)(N,{className:"h-4 w-4"})})]})}},2359:function(e,n,t){var r=t(4942),a=t(1413),s=t(885),c=t(3504);n.Z=function(){var e=(0,c.lr)(),n=(0,s.Z)(e,2),t=n[0],l=n[1],i=Object.fromEntries(new URLSearchParams(t));return{search:i,setSearch:l,setSearchParam:function(e,n){l((0,a.Z)((0,a.Z)({},i),{},(0,r.Z)({},e,n)))}}}},4801:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(885),a=t(2791),s=t(3481),c=t(7947),l=t(7096),i=t(7448),o=t(3504),d=t(888),u=t(184),m=function(e){var n=e.requests,t=e.pageCount,r=e.loading,a=e.reload;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(s.iA,{children:[(0,u.jsx)(s.hr,{children:(0,u.jsxs)(s.Tr,{children:[(0,u.jsx)(s.Th,{children:"User"}),(0,u.jsx)(s.Th,{className:"text-center",children:"Bank Name"}),(0,u.jsx)(s.Th,{className:"text-center",children:"IBAN"}),(0,u.jsx)(s.Th,{className:"text-center",children:"Request Amount"}),(0,u.jsx)(s.Th,{className:"text-center",children:"Total"}),(0,u.jsx)(s.Th,{})]})}),(0,u.jsxs)(s.p3,{children:[null===n||void 0===n?void 0:n.map((function(e){return(0,u.jsxs)(s.Tr,{children:[(0,u.jsx)(s.Td,{children:(0,u.jsx)(o.rU,{to:"/admin/users/".concat(e.user._id),className:"transition hover:text-primary",children:e.user.name})}),(0,u.jsx)(s.Td,{className:"text-center",children:e.paymentMethod.bankName}),(0,u.jsx)(s.Td,{className:"text-center",children:e.paymentMethod.iban}),(0,u.jsx)(s.Td,{className:"text-center",children:(0,i.a)(e.amount)}),(0,u.jsx)(s.Td,{className:"text-center",children:(0,i.Z)(e.totalAmount)}),(0,u.jsx)(s.Td,{className:"text-center",children:"pending"===e.status?(0,u.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,u.jsx)("button",{className:"transition hover:text-success",onClick:function(){var n;n=e._id,d.Qb.approveWithdrawRequest(n,!0).then((function(){a()}))},children:(0,u.jsx)(c.Z,{className:"h-5 w-5"})}),(0,u.jsx)("button",{className:"transition hover:text-danger",onClick:function(){var n;n=e._id,d.Qb.approveWithdrawRequest(n,!1).then((function(){a()}))},children:(0,u.jsx)(l.Z,{className:"h-5 w-5"})})]}):"approved"===e.status?(0,u.jsx)("div",{className:"text-success",children:(0,u.jsx)(c.Z,{className:"mx-auto h-6 w-6"})}):(0,u.jsx)("div",{className:"text-danger",children:(0,u.jsx)(l.Z,{className:"mx-auto h-6 w-6"})})})]},e._id)})),!r&&0===(null===n||void 0===n?void 0:n.length)&&(0,u.jsx)(s.Tr,{children:(0,u.jsx)(s.Td,{colSpan:6,className:"text-center",children:"No users found"})}),r&&(0,u.jsx)(s.Tr,{children:(0,u.jsx)(s.Td,{colSpan:6,className:"text-center",children:"Loading..."})})]})]}),t>1&&(0,u.jsx)(s.tl,{totalPages:t})]})},h=t(439),x=t(2359),f=[{name:"Pending",value:"pending"},{name:"Approved",value:"approved"},{name:"Rejected",value:"rejected"}],v=function(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],s=n[1],c=(0,x.Z)().search,l=parseInt(c.page||"1",10),i=parseInt(c.perPage||"10",10),o=(0,a.useState)([]),v=(0,r.Z)(o,2),p=v[0],j=v[1],b=(0,a.useState)(0),g=(0,r.Z)(b,2),N=g[0],w=g[1],Z=(0,a.useState)(!1),y=(0,r.Z)(Z,2),k=y[0],T=y[1],C=function(){T(!0),d.Qb.getWithdrawRequests({status:t,page:l,limit:i}).then((function(e){j(e.withdrawRequests),w(e.totalPages),T(!1)}))};return(0,a.useEffect)((function(){C()}),[t,l,i]),(0,u.jsx)("div",{className:"max-h-[85vh] overflow-auto py-5",children:(0,u.jsx)("div",{className:"mx-auto max-w-lg px-4 md:max-w-6xl",children:(0,u.jsxs)("div",{className:"col-span-2 w-full rounded-2xl bg-white shadow-card",children:[(0,u.jsxs)("div",{className:"flex items-center justify-between border-b border-border px-5 py-3.5",children:[(0,u.jsx)("h4",{className:"text-lg font-medium text-heading",children:"Withdraw Requests"}),(0,u.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,u.jsx)("span",{children:"Request Status"}),(0,u.jsx)(h.Z,{name:"status",options:f.map((function(e){return{label:e.name,value:e.value}})),noGap:!0,value:t,onChange:function(e){return s(e.target.value)}})]})]}),(0,u.jsx)("div",{className:"p-5",children:(0,u.jsx)(m,{requests:p,pageCount:N,loading:k,reload:C})})]})})})}},7448:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var r=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)},a=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"BTC"}).format(e)}},7096:function(e,n,t){var r=t(2791);var a=r.forwardRef((function(e,n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),r.createElement("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",clipRule:"evenodd"}))}));n.Z=a},7947:function(e,n,t){var r=t(2791);var a=r.forwardRef((function(e,n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),r.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));n.Z=a}}]);
//# sourceMappingURL=801.548e94a4.chunk.js.map