(this.webpackJsonpsalario=this.webpackJsonpsalario||[]).push([[0],{107:function(e,t,c){},127:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(59),s=c.n(r),i=c(177),o=c(66),j=c(86),l=c(26),b=(c(107),c(58)),u=c(42),h=c(17),d=c(170),O=c(183),m=c(182),x=c(166),p=c(169),f=c(178),v=c(2),g=Object(x.a)((function(e){return{root:{marginTop:"15px"},formControl:{}}})),y=function(e){var t=e.checkboxes,c=e.label,n=e.update,a=g(),r=function(e){return function(t){n(e,t.target.checked)}},s=t.map((function(e){var t=e.label,c=e.name,n=e.checked;return Object(v.jsx)("div",{children:Object(v.jsx)(p.a,{control:Object(v.jsx)(f.a,{checked:n,onChange:r(c),value:c,color:"primary"}),label:t})},c)}));return Object(v.jsxs)("div",{className:a.root,children:[Object(v.jsx)(d.a,{component:"legend",children:c}),s]})},k=function(e){return function(t){e.displayName||e.name;return Object(n.useEffect)((function(){return function(){}}),[]),Object(v.jsx)(e,Object(h.a)({},t))}},w=c(171),_=c(180),z=void 0,S=Object(x.a)({root:{},input:{width:80}}),A=function(e){return Math.floor(e/160)},N=function(e){var t=e.update,c=e.min,n=e.max,a=e.step,r=e.from,s=e.to,i=S(),o=function(e,c){c.persist(),t(e,""===c.target.value?"":Number(c.target.value))},j=function(e){var a="from"===e?r:s;a<c?t(e,c):a>n&&t(e,n)};return Object(v.jsx)("div",{children:Object(v.jsxs)(w.a,{container:!0,spacing:2,alignItems:"center",children:[Object(v.jsx)(w.a,{item:!0,xs:5,children:Object(v.jsx)(_.a,{className:i.input,value:r,margin:"dense",onChange:o.bind(z,"from"),onBlur:j.bind(z,"from"),inputProps:{step:a,min:c,max:n,type:"number","aria-labelledby":"input-slider"}})}),Object(v.jsx)(w.a,{item:!0,xs:2,children:"-"}),Object(v.jsx)(w.a,{item:!0,xs:5,children:Object(v.jsx)(_.a,{className:i.input,value:s,margin:"dense",onChange:o.bind(z,"to"),onBlur:j.bind(z,"to"),inputProps:{step:a,min:c,max:n,type:"number","aria-labelledby":"input-slider"}})}),Object(v.jsxs)(w.a,{item:!0,xs:5,className:"filters__perHourValue",children:[A(r)," per hour"]}),Object(v.jsx)(w.a,{item:!0,xs:2}),Object(v.jsxs)(w.a,{item:!0,xs:5,className:"filters__perHourValue",children:[A(s)," per hour"]})]})})},C=c(24),L=[].concat(Object(b.a)(C.CREATIVE_RIGHTS_STEPS.map((function(e){return{label:"CoE - CR ".concat(e,"%"),name:"uop-".concat(e)}}))),[{label:"B2B(19%) - low ZUS",name:"b2b-low-zus"},{label:"B2B(19%) - high ZUS",name:"b2b-high-zus"}]),M=[{label:"Min",name:"nettoMin"},{label:"Max",name:"nettoMax"},{label:"Avg",name:"nettoAvg"}],E=C.SALARY_MIN,R=C.SALARY_MAX,T=C.SALARY_STEP,I=k((function(e){var t=e.submitAction,c=e.values,a=Object(n.useState)({from:c.from,to:c.to,types:c.types,measures:c.measures}),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(!0),j=Object(l.a)(o,2),x=j[0],p=j[1],f=Object(n.useCallback)((function(e,t){var c=Object(h.a)(Object(h.a)({},s),{},Object(u.a)({},e,t));c.to<c.from&&"from"===e&&(c.to=c.from),c.from>c.to&&"to"===e&&(c.from=c.to),i(c),p(!0)}),[i,p,s]),g=Object(n.useCallback)((function(e,t){i(Object(h.a)(Object(h.a)({},s),{},{types:Object(h.a)(Object(h.a)({},s.types),{},Object(u.a)({},e,t))})),p(!0)}),[p,s,i]),k=Object(n.useCallback)((function(e,t){i(Object(h.a)(Object(h.a)({},s),{},{measures:Object(h.a)(Object(h.a)({},s.measures),{},Object(u.a)({},e,t))})),p(!0)}),[p,s,i]),w=Object(n.useCallback)((function(){t(s),p(!1)}),[t,p,s]),_={update:f,min:E,max:R,step:T,from:s.from,to:s.to},z={label:"Choose types of employment",checkboxes:L.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{checked:s.types[e.name]||!1})})),update:g},S={label:"Choose measures",checkboxes:M.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{checked:s.measures[e.name]||!1})})),update:k},A=Object(n.useCallback)((function(e,t){i(Object(h.a)(Object(h.a)({},s),{},{from:Math.min.apply(Math,Object(b.a)(t)),to:Math.max.apply(Math,Object(b.a)(t))}))}),[i,s]);return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(d.a,{component:"legend",children:"Choose gross ranges"}),Object(v.jsx)(m.a,{value:[s.from,s.to],valueLabelDisplay:"auto",onChange:A,onChangeCommitted:function(){p(!0)},"aria-labelledby":"input-slider",min:E,max:R,step:T}),Object(v.jsx)(N,Object(h.a)({},_))]}),Object(v.jsx)(y,Object(h.a)({},z)),Object(v.jsx)(y,Object(h.a)({},S)),Object(v.jsx)(O.a,{variant:"outlined",color:"primary",onClick:w,disabled:!x,children:"Compare"})]})})),B=c(36),H=c.n(B),P=c(53),Y=c(181),D=function(e){return Object(v.jsx)("a",{href:e.repository,style:{float:"right",position:"absolute",right:0,top:0},children:Object(v.jsx)("img",{src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149",width:"149",height:"149","data-recalc-dims":"1",alt:"Fork me on GitHub"})})},G=function(e){var t=new Date(e);return"".concat(t.getDate(),".").concat(t.getMonth()+1,".").concat(t.getFullYear())},U=function(){var e=Object(P.a)(H.a.mark((function e(){var t,c,n,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(C.API_URL,"/api/metadata"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,a=n.created,e.abrupt("return",G(a));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=k((function(e){var t=e.toogleSidebar,c=a.a.useState(!0),r=Object(l.a)(c,2),s=r[0],i=r[1],o=Object(Y.a)(["metadata"],U,{enabled:s}),j=o.loading,b=o.data;return Object(n.useEffect)((function(){!j&&b&&i(!1)}),[b,j]),Object(v.jsxs)("header",{className:"appHeader",children:[Object(v.jsx)("button",{className:"sidebarToggle",onClick:function(){return t()},children:Object(v.jsx)("svg",{className:"sidebarToggleIcon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(v.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:Object(v.jsx)("h6",{className:"appName",children:"Salario"})}),Object(v.jsxs)("div",{className:"dataGeneratedTime",children:["Data generated at ",null!==b&&void 0!==b?b:""]})]}),Object(v.jsx)(D,{repository:"https://github.com/krzys1u/salaryComparer"})]})})),V=c(172),F=function(){return Object(v.jsx)("div",{style:{width:400,height:400},children:Object(v.jsx)("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("g",{className:"loader__icon",children:Object(v.jsxs)("g",{children:[Object(v.jsx)("g",{children:Object(v.jsx)("g",{className:"loader__icon--animation",children:Object(v.jsx)("path",{strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#3f51b5",fill:"none",d:"M71.172 23.77H36.885c-7.243 0-13.115 5.872-13.115 13.115v0C23.77 44.128 29.642 50 36.885 50h26.23c7.243 0 13.115 5.872 13.115 13.115v0c0 7.243-5.872 13.115-13.115 13.115H23.77",className:"loader__icon--letter"})})}),Object(v.jsx)("g",{children:Object(v.jsx)("g",{className:"loader__icon--animation",children:Object(v.jsx)("path",{className:"loader__icon--pipe",d:"M41.631 10v80",strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#849b87",fill:"none"})})}),Object(v.jsx)("g",{children:Object(v.jsx)("g",{className:"loader__icon--animation",children:Object(v.jsx)("path",{className:"loader__icon--pipe",d:"M56.746 10v80",strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#849b87",fill:"none"})})})]})})})})},X=k((function(){return Object(V.a)()?Object(v.jsx)("div",{className:"loader",children:Object(v.jsx)(F,{})}):null})),q=function(){return Object(v.jsx)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsxs)("g",{children:[Object(v.jsx)("path",{d:"m494.5 60.514h-113.627c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h113.627c1.378 0 2.5 1.122 2.5 2.5v45.527h-482v-45.527c0-1.378 1.122-2.5 2.5-2.5h328.85c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-328.85c-9.649 0-17.5 7.851-17.5 17.5v355.973c0 9.649 7.851 17.5 17.5 17.5h399.347c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-399.347c-1.378 0-2.5-1.122-2.5-2.5v-295.446h482v97.409c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-157.936c0-9.65-7.851-17.5-17.5-17.5z"}),Object(v.jsx)("path",{d:"m504.5 262.972c-4.142 0-7.5 3.358-7.5 7.5v163.515c0 1.378-1.122 2.5-2.5 2.5h-43.13c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h43.13c9.649 0 17.5-7.851 17.5-17.5v-163.515c0-4.142-3.358-7.5-7.5-7.5z"}),Object(v.jsx)("path",{d:"m47.433 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(v.jsx)("path",{d:"m70.076 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(v.jsx)("path",{d:"m92.719 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(v.jsx)("path",{d:"m464.567 107.027c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-13.956c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"}),Object(v.jsx)("path",{d:"m336.078 240.496c0-44.155-35.923-80.078-80.078-80.078s-80.078 35.923-80.078 80.078 35.923 80.078 80.078 80.078 80.078-35.923 80.078-80.078zm-80.078 65.078c-35.884 0-65.078-29.194-65.078-65.078s29.194-65.078 65.078-65.078 65.078 29.194 65.078 65.078-29.194 65.078-65.078 65.078z"}),Object(v.jsx)("path",{d:"m229.518 330.68c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h52.965c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(v.jsx)("path",{d:"m328.26 388.997c0-4.142-3.358-7.5-7.5-7.5h-187.453c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h187.453c4.142 0 7.5-3.358 7.5-7.5z"}),Object(v.jsx)("path",{d:"m378.693 381.497h-27.484c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h27.484c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(v.jsx)("path",{d:"m133.307 404.334c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h59.876c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(v.jsx)("path",{d:"m221.632 419.334h157.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-157.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"}),Object(v.jsx)("path",{d:"m283.801 212.695c-2.929-2.929-7.678-2.929-10.606 0l-17.195 17.195-17.195-17.195c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l17.195 17.195-17.195 17.195c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l17.195-17.194 17.195 17.195c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-17.195-17.195 17.195-17.195c2.929-2.929 2.929-7.678 0-10.607z"})]})})},J=c(129),K=function(e){var t=e.label,c=e.code,n=e.icon,a=e.button;return Object(v.jsx)("div",{className:"info__wrapper",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t}),Object(v.jsx)("div",{className:"image__wrapper",children:n}),c&&c.length?Object(v.jsx)("code",{children:c}):"",a?Object(v.jsx)("div",{className:"buttons",children:a}):""]})})},Z=k((function(e){var t=e.error,c=e.onClick;return Object(v.jsx)(K,{label:"Something went wrong...",code:t.message,icon:Object(v.jsx)(q,{}),button:Object(v.jsx)(O.a,{variant:"outlined",color:"primary",onClick:c,children:"Try again"})})})),Q=c(176),$=c(173),ee=c(174),te=c(175),ce=c(92),ne=c.n(ce),ae=function(e){var t=e.datum;e.color;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("strong",{children:"Gross: "}),t.x]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("strong",{children:[t.label,": "]}),t.y]})]})},re=function(e){var t=e.dataSeries;return Object(v.jsxs)(Q.a,{ariaLabel:"Salary diagram",width:500,height:500,xScale:{type:"linear"},yScale:{type:"linear"},renderTooltip:ae,snapTooltipToDataX:!0,children:[Object(v.jsx)($.a,{label:"Gross"}),Object(v.jsx)(ee.a,{label:"Net"}),t.map((function(e){var t=e.label,c=e.data;return Object(v.jsx)(ne.a,{data:c,seriesKey:t},t)})),Object(v.jsx)(te.a,{showHorizontalLine:!1,fullHeight:!0,stroke:"pink"})]})},se=function(){return Object(v.jsx)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsxs)("g",{children:[Object(v.jsx)("g",{children:Object(v.jsxs)("g",{children:[Object(v.jsxs)("g",{children:[Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m313.604 170.975h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m395.052 132.478h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]}),Object(v.jsxs)("g",{children:[Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m313.604 296.662h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m395.052 258.164h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]}),Object(v.jsxs)("g",{children:[Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m313.604 422.349h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m395.052 383.851h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]})]})}),Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m320.852 70.651h-129.704c-12.328 0-22.358-10.029-22.358-22.357v-25.936c.001-12.328 10.03-22.358 22.358-22.358h129.703c12.328 0 22.358 10.03 22.358 22.358v25.936c0 12.328-10.029 22.357-22.357 22.357zm-129.704-55.651c-4.057 0-7.358 3.301-7.358 7.358v25.936c0 4.057 3.301 7.357 7.358 7.357h129.703c4.057 0 7.358-3.301 7.358-7.357v-25.936c0-4.058-3.301-7.358-7.358-7.358z"})}),Object(v.jsxs)("g",{children:[Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m162.917 181.028h-33.333c-11.103 0-20.136-9.033-20.136-20.136v-33.332c0-11.103 9.033-20.136 20.136-20.136h33.333c11.103 0 20.136 9.033 20.136 20.136v33.333c0 11.102-9.033 20.135-20.136 20.135zm-33.333-58.604c-2.832 0-5.136 2.304-5.136 5.136v33.333c0 2.832 2.304 5.136 5.136 5.136h33.333c2.832 0 5.136-2.304 5.136-5.136v-33.333c0-2.832-2.304-5.136-5.136-5.136z"})}),Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m162.917 306.715h-33.333c-11.103 0-20.136-9.033-20.136-20.136v-33.333c0-11.103 9.033-20.136 20.136-20.136h33.333c11.103 0 20.136 9.033 20.136 20.136v33.333c0 11.103-9.033 20.136-20.136 20.136zm-33.333-58.605c-2.832 0-5.136 2.304-5.136 5.136v33.333c0 2.832 2.304 5.136 5.136 5.136h33.333c2.832 0 5.136-2.304 5.136-5.136v-33.333c0-2.832-2.304-5.136-5.136-5.136z"})}),Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m162.917 432.402h-33.333c-11.103 0-20.136-9.033-20.136-20.137v-33.332c0-11.104 9.033-20.137 20.136-20.137h33.333c11.103 0 20.136 9.033 20.136 20.137v33.332c0 11.104-9.033 20.137-20.136 20.137zm-33.333-58.605c-2.832 0-5.136 2.305-5.136 5.137v33.332c0 2.832 2.304 5.137 5.136 5.137h33.333c2.832 0 5.136-2.305 5.136-5.137v-33.332c0-2.832-2.304-5.137-5.136-5.137z"})})]}),Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"m415.551 512h-319.102c-17.916 0-32.491-14.575-32.491-32.491v-419.193c0-17.915 14.576-32.49 32.491-32.49h44.945c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5h-44.945c-9.645 0-17.491 7.846-17.491 17.49v419.192c0 9.645 7.847 17.491 17.491 17.491h319.102c9.645 0 17.491-7.847 17.491-17.491v-419.192c0-9.645-7.847-17.49-17.491-17.49h-44.945c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h44.945c17.916 0 32.491 14.575 32.491 32.49v419.192c0 17.917-14.576 32.492-32.491 32.492z"})})]})})},ie=k((function(){return Object(v.jsx)(K,{label:"No filters selected",icon:Object(v.jsx)(se,{})})})),oe=function(e){return Object.keys(e).map((function(t){return[t,(c=t,n=e[t],Array.isArray(n)?n.map((function(e){return[c,e].join("=")})).join("&"):n)].join("=");var c,n})).join("&")},je=function(){var e=Object(P.a)(H.a.mark((function e(t){var c,n,a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.info({params:t}),c="".concat(C.API_URL,"/api/salary?").concat(oe(t)),e.next=4,fetch(c,t);case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,r=a.data,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(P.a)(H.a.mark((function e(t){var c,n,a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(l.a)(t.queryKey,4),n=c[1],a=c[2],r=c[3],e.next=3,je({types:Object.keys(n).filter((function(e){return!!e})),from:a,to:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(e,t){e.types;var c=e.measures,n={},a=function(e,t){return e.find((function(e){return e.name===t})).label};return t.forEach((function(e){Object.keys(c).filter((function(e){return!!c[e]})).forEach((function(t){var c=function(e,t){return"".concat(a(M,e)," (").concat(a(L,t),")")}(t,e.type);n[c]||(n[c]=[]),n[c].push({x:e.brutto,y:e[t],label:c})}))})),Object.keys(n).map((function(e){return{label:e,data:n[e]}}))},ue=k((function(e){var t=e.filters,c=function(e){var t=e.types,c=e.measures;return!Object.keys(t).filter((function(e){return!!t[e]})).length||!Object.keys(c).filter((function(e){return!!c[e]})).length}(t),a=Object(Y.a)(["data",t.types,t.from,t.to],le,{enabled:!c}),r=a.isError,s=a.error,i=a.refetch,o=a.data,j=Object(n.useCallback)((function(){i({throwOnError:!1})}),[i]);if(!o||c)return Object(v.jsx)(ie,{});if(r&&s)return Object(v.jsx)(Z,{error:s,onClick:j});var l=be(t,o);return console.log("dataSeries",l),Object(v.jsx)(re,{dataSeries:l})})),he=k((function(){var e=Object(n.useState)({types:{"uop-0":!0},measures:{nettoMin:!0},from:C.SALARY_MIN,to:C.SALARY_MAX}),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(window.innerWidth<=640),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(!0),b=Object(l.a)(j,2),u=b[0],h=b[1],d=Object(n.useCallback)((function(){i&&h(!1)}),[i]),O=Object(n.useCallback)((function(e){d(),a(e)}),[a,d]),m=Object(n.useCallback)((function(){h(!u)}),[u]);return Object(n.useEffect)((function(){var e=function(){var e=window.innerWidth<=640;i!==e&&o(e)};return document.addEventListener("resize",e),function(){return document.removeEventListener("click",e)}}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(X,{}),Object(v.jsx)(W,{toogleSidebar:m}),Object(v.jsxs)("section",{className:"content",children:[u&&Object(v.jsx)("aside",{className:"sidebar",children:Object(v.jsx)(I,{submitAction:O,values:c})}),Object(v.jsx)("section",{className:"workspace ".concat(u?"":"nosidebar"),children:Object(v.jsx)(ue,{filters:c})})]})]})})),de=new i.a({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:!1}}});function Oe(){return Object(v.jsxs)(o.a,{client:de,children:[Object(v.jsx)(he,{}),Object(v.jsx)(j.ReactQueryDevtools,{initialIsOpen:!1})]})}s.a.render(Object(v.jsx)(Oe,{}),document.getElementById("root"))},24:function(e,t){e.exports={FIREBASE_URL:"https://salario-a6a4b.firebaseio.com",API_URL:"https://salary-comparer.vercel.app",SALARY_MIN:2e3,SALARY_MAX:3e4,SALARY_STEP:250,SALARY_SLIDER_STEP:1e3,CREATIVE_RIGHTS_STEPS:[0,20,30,40,50,60,70,80]}}},[[127,1,2]]]);
//# sourceMappingURL=main.e219266f.chunk.js.map