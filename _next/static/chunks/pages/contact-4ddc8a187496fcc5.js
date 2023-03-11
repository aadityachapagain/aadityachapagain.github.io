(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return s(383)}])},383:function(e,t,s){"use strict";s.r(t);var a=s(5893),l=s(3024),n=s(7814),i=s(7294);let r=()=>{let[e,t]=(0,i.useState)(""),[s,r]=(0,i.useState)(""),[o,d]=(0,i.useState)(""),[c,m]=(0,i.useState)(""),[h,u]=(0,i.useState)({}),[x,g]=(0,i.useState)("Send"),[p,f]=(0,i.useState)(!1),[j,b]=(0,i.useState)(!1),N=()=>{let t={},a=!0;return e.length<=0&&(t.fullname=!0,a=!1),s.length<=0&&(t.email=!0,a=!1),o.length<=0&&(t.subject=!0,a=!1),c.length<=0&&(t.message=!0,a=!1),u({...t}),a},w=async t=>{if(t.preventDefault(),N()){g("Sending");let t=await fetch("/api/sendemail/v1",{body:JSON.stringify({email:s,fullname:e,subject:o,message:c}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:a}=await t.json();if(a){f(!1),b(!0),g("Send");return}f(!0),b(!1),g("Send")}};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("header",{className:"p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-indigo-500 md:h-96 rounded-3xl shadow-xl shadow-gray-400",children:[(0,a.jsxs)("div",{className:"mx-auto mb-10 md:mt-20",children:[(0,a.jsx)("div",{className:"badge bg-green-500 inline-block rounded-xl",children:(0,a.jsx)("p",{className:"font-light text-base px-4 py-1 ",children:"Lets have a chat"})}),(0,a.jsx)("h1",{className:"text-4xl font-bold mt-4 text-white",children:"Reach out to me for any Business quries."}),(0,a.jsx)("p",{className:"text-sm text-gray-700 mt-4 font-light dark:text-gray-200",children:"Fill the form and send in your queries. I will respond as soon as I can. Alternatively, You can reach out to me at my email address."})]}),(0,a.jsxs)("form",{onSubmit:w,className:"rounded-lg shadow-lg flex flex-col px-8 py-8 text-white bg-purple-600 shadow-gray-300",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold ",children:"Send a message"}),(0,a.jsxs)("label",{htmlFor:"fullname",className:"0 font-light mt-8 ",children:["Full name",(0,a.jsx)("span",{className:"text-red-500 ",children:"*"})]}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>{t(e.target.value)},name:"fullname",className:"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light 0"}),(null==h?void 0:h.fullname)&&(0,a.jsx)("p",{className:"text-red-400 italic",children:"Fullname cannot be empty."}),(0,a.jsxs)("label",{htmlFor:"email",className:"0 font-light mt-4 ",children:["E-mail",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("input",{type:"email",name:"email",value:s,onChange:e=>{r(e.target.value)},className:"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light 0"}),(null==h?void 0:h.email)&&(0,a.jsx)("p",{className:"text-red-400 italic",children:"Email cannot be empty."}),(0,a.jsxs)("label",{htmlFor:"subject",className:"0 font-light mt-4 ",children:["Subject",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("input",{type:"text",name:"subject",value:o,onChange:e=>{d(e.target.value)},className:"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light 0"}),(null==h?void 0:h.subject)&&(0,a.jsx)("p",{className:"text-red-400 italic",children:"Subject cannot be empty."}),(0,a.jsxs)("label",{htmlFor:"message",className:"0 font-light mt-4 ",children:["Message",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("textarea",{name:"message",value:c,onChange:e=>{m(e.target.value)},className:"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light 0"}),(null==h?void 0:h.message)&&(0,a.jsx)("p",{className:"text-red-400 italic",children:"Message body cannot be empty."}),(0,a.jsx)("div",{className:"flex flex-row items-center justify-start",children:(0,a.jsxs)("button",{type:"submit",className:"px-10 mt-8 py-2 bg-[#130F49]  font-light rounded-md text-lg flex flex-row items-center",children:[x,(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:"text-cyan-500 ml-2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z",fill:"currentColor"})})]})}),(0,a.jsxs)("div",{className:"text-left",children:[p&&(0,a.jsx)("p",{className:"text-green-500 font-semibold text-sm my-2",children:"Thankyou! Your Message has been delivered."}),j&&(0,a.jsx)("p",{className:"text-red-400 italic",children:"Oops! Something went wrong, please try again."})]})]})]}),(0,a.jsxs)("section",{className:"",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-center md:mt-60 my-10 gradient-text text-gray-700 ".concat(h?"md:mt-80":"md:mt-60"),children:"Reach out"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 mx-2 md:grid-cols-2 gap-6 max-w-6xl md:mx-auto my-20",children:[(0,a.jsxs)("div",{className:"card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200",children:[(0,a.jsx)("svg",{width:"24",height:"24",className:"text-cyan-500 h-4 w-4",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z",fill:"currentColor"})}),(0,a.jsx)("p",{className:"0 font-light",children:"aadityachapagain101@gmail.com"})]}),(0,a.jsxs)("div",{className:"card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200",children:[(0,a.jsx)(n.G,{icon:l.hwn,style:{fontSize:18}}),(0,a.jsx)("p",{className:"0 font-light",children:"https://www.linkedin.com/in/aadityachapagain/"})]})]})]})]})};t.default=r}},function(e){e.O(0,[948,774,888,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);