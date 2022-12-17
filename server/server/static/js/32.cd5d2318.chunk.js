"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[32],{4032:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(885),a=n(2791),s=n(2447);var i=a.forwardRef((function(e,r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r},e),a.createElement("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),a.createElement("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}))})),c=n(9838),l=n(8419),d=n(870),o=n(7947),u=n(6871),m=n(888),f=n(184),h=function(e){var r=e.id,n=e.bankName,h=e.number,x=e.verified,v=e.reload,p=(0,u.s0)(),g=(0,a.useState)(!1),w=(0,t.Z)(g,2),j=w[0],b=w[1];return(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-8",children:[(0,f.jsxs)("div",{className:"col-span-3 flex flex-1 items-center justify-between rounded-ms border border-border p-5",children:[(0,f.jsxs)("div",{className:"flex items-center gap-4",children:[(0,f.jsx)("div",{className:"flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white",children:(0,f.jsx)(s.Z,{className:"h-4 w-4"})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h4",{className:"font-medium  text-heading",children:n}),(0,f.jsx)("p",{children:j?h:function(e){var r=e.substring(e.length-4),n="*".repeat(e.length-4);return"".concat(n).concat(r)}(h)})]})]}),(0,f.jsxs)("div",{className:"space-x-2",children:[(0,f.jsx)("button",{className:"transition hover:text-primary",onClick:function(){return b(!j)},children:j?(0,f.jsx)(i,{className:"h-5 w-5"}):(0,f.jsx)(c.Z,{className:"h-5 w-5"})}),(0,f.jsx)("button",{className:"transition hover:text-primary",onClick:function(){return p("/edit-bank-account/".concat(r))},children:(0,f.jsx)(l.Z,{className:"h-5 w-5"})}),(0,f.jsx)("button",{className:"text-danger",onClick:function(){m.vq.deleteBankAccount(r).then((function(){v()}))},children:(0,f.jsx)(d.Z,{className:"h-5 w-5"})})]})]}),(0,f.jsxs)("div",{className:"flex items-center gap-4",children:[(0,f.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-full border border-border text-white ".concat("approved"===x?"bg-success":"pending"===x?"bg-primary":"bg-danger"),children:"approved"===x&&(0,f.jsx)(o.Z,{className:"h-6 w-6"})}),"approved"===x?(0,f.jsx)("p",{className:"cursor-pointer hover:text-primary",children:"Verified"}):"pending"===x?(0,f.jsx)("p",{className:"cursor-pointer hover:text-primary",children:"Pending"}):(0,f.jsx)("p",{className:"cursor-pointer hover:text-primary",children:"Not Verified"})]})]})},x=n(3575),v=function(){var e=(0,u.s0)(),r=(0,x.a)().user,n=(0,a.useState)(null),s=(0,t.Z)(n,2),i=s[0],c=s[1],l=(0,a.useState)(!1),d=(0,t.Z)(l,2),o=d[0],v=d[1],p=function(){v(!0),m.vq.getBankAccounts({user:r._id}).then((function(e){c(e.bankAccounts),v(!1)}))};return(0,a.useEffect)((function(){p()}),[]),(0,f.jsxs)("div",{className:"col-span-2 w-full rounded-2xl bg-white shadow-card",children:[(0,f.jsx)("h4",{className:"border-b border-border p-5 text-lg font-medium  text-heading",children:"Linked Account"}),(0,f.jsxs)("div",{className:"space-y-6 p-5",children:[o?(0,f.jsx)("div",{className:"text-center",children:(0,f.jsx)("div",{className:"text-xl font-medium",children:"Loading..."})}):(0,f.jsx)(f.Fragment,{children:null===i||void 0===i?void 0:i.map((function(e){return(0,f.jsx)(h,{id:e._id,bankName:e.bankName,number:e.iban,verified:e.status,reload:p},e._id)}))}),(0,f.jsx)("div",{className:"pt-4",children:(0,f.jsx)("button",{className:"rounded-full bg-primary px-6 py-3 font-medium text-white",onClick:function(){return e("/add-bank-account")},children:"Add Bank Account"})})]})]})},p=function(){return(0,f.jsx)("div",{className:"grid grid-cols-2 items-start gap-7",children:(0,f.jsx)(v,{})})}},7947:function(e,r,n){var t=n(2791);var a=t.forwardRef((function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));r.Z=a},9838:function(e,r,n){var t=n(2791);var a=t.forwardRef((function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),t.createElement("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"}))}));r.Z=a},8419:function(e,r,n){var t=n(2791);var a=t.forwardRef((function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}))}));r.Z=a},870:function(e,r,n){var t=n(2791);var a=t.forwardRef((function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}))}));r.Z=a}}]);
//# sourceMappingURL=32.cd5d2318.chunk.js.map