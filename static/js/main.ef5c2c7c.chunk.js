(this.webpackJsonpsalario=this.webpackJsonpsalario||[]).push([[0],{120:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n,c,r,s=a(1),i=a.n(s),o=a(70),l=a.n(o),b=a(208),u=a(76),j=a(97),d=a(21),h=a(12),m=a(98),f=a.n(m),O=(a(120),a(36)),p=a(31),x=a(181),g=a(215),v=a(214),y=a(177),k=a(180),w=a(209),L=a(2),S=Object(y.a)((function(e){return{root:{marginTop:"15px"},formControl:{}}})),_=function(e){var t=e.checkboxes,a=e.label,n=e.update,c=S(),r=function(e){return function(t){n(e,t.target.checked)}},s=t.map((function(e){var t=e.label,a=e.name,n=e.checked;return Object(L.jsx)("div",{children:Object(L.jsx)(k.a,{control:Object(L.jsx)(w.a,{checked:n,onChange:r(e),value:a,color:"primary"}),label:t})},a)}));return Object(L.jsxs)("div",{className:c.root,children:[Object(L.jsx)(x.a,{component:"legend",children:a}),s]})},C=function(e){return function(t){e.displayName||e.name;return Object(s.useEffect)((function(){return function(){}}),[]),Object(L.jsx)(e,Object(h.a)({},t))}},z=a(182),E=a(212),A="pl",M="en",N=(n={},Object(p.a)(n,A,"\ud83c\uddf5\ud83c\uddf1"),Object(p.a)(n,M,"\ud83c\uddec\ud83c\udde7"),n),R=(c={},Object(p.a)(c,A,{noFiltersLabel:"Nie wybrano filtr\xf3w",errorLabel:"Co\u015b posz\u0142o nie tak...",tryAgainLabel:"Pon\xf3w",salaryPerHourLabel:"na godzin\u0119",employmentTypeLabel:"Wybierz form\u0119 zatrudnienia",measuresLabel:"Wybierz miary",salaryRangesLabel:"Wybierz zakres zarobk\xf3w",submitButtonLabel:"Por\xf3wnaj",dataGeneratedLabel:"Dane wygenerowano",contractOfEmploymentLabel:"Umowa o prac\u0119 - KUP",lowZusLabel:"ma\u0142y ZUS",highZusLabel:"du\u017cy ZUS",averageLabel:"\u015arednia",sumLabel:"Suma",grossLabel:"Brutto",additionalFiltersLabel:"Dodatkowe opcje",showEmployerCost:"Poka\u017c koszty pracodawcy"}),Object(p.a)(c,M,{noFiltersLabel:"No filters selected",errorLabel:"Something went wrong...",tryAgainLabel:"Try again",salaryPerHourLabel:"per hour",employmentTypeLabel:"Choose types of employment",measuresLabel:"Choose measures",salaryRangesLabel:"Choose gross ranges",submitButtonLabel:"Compare",dataGeneratedLabel:"Data generated at",contractOfEmploymentLabel:"CoE - CR",lowZusLabel:"low ZUS",highZusLabel:"high ZUS",averageLabel:"Avg",sumLabel:"Sum",grossLabel:"Gross",additionalFiltersLabel:"Additional options",showEmployerCost:"Show employer costs"}),c),F="salario::lang",P=function(e){localStorage.setItem(F,e)},T=function(){var e="pl-PL"===window.navigator.language?A:M,t=localStorage.getItem(F);return t||(e||A)},I=function(e){window.dataLayer.push({event:"language-changed",lang:e})},B=i.a.createContext({lang:T(),toggle:function(){}}),D={},H=function(){var e=Object(s.useContext)(B),t=e.lang;return{changeLanguage:e.changeLanguage,activeLang:t,translations:R[t],LANGS:N,t:function(e){return D[e]||(D[e]=Object.keys(R[t]).filter((function(t){return e.includes(t)})).reduce((function(e,a){return e.replace(a,R[t][a])}),e)),D[e]}}},W=void 0,U=Object(y.a)({root:{},input:{width:80}}),Y=function(e){return Math.floor(e/160)},Z=function(e){var t=e.update,a=e.min,n=e.max,c=e.step,r=e.from,s=e.to,i=U(),o=H().translations,l=function(e,n){n.persist(),t(e,""===n.target.value?a:Number(n.target.value),!1)},b=function(e,c){c.persist();var i=""===c.target.value?a:Number(c.target.value),o="from"===e?r:s;return o<a?t(e,a):o>n?t(e,n):void t(e,i)};return Object(L.jsx)("div",{children:Object(L.jsxs)(z.a,{container:!0,spacing:2,alignItems:"center",children:[Object(L.jsx)(z.a,{item:!0,xs:5,children:Object(L.jsx)(E.a,{className:i.input,value:r,margin:"dense",onChange:l.bind(W,"from"),onBlur:b.bind(W,"from"),inputProps:{step:c,min:a,max:n,type:"number","aria-labelledby":"input-slider"}})}),Object(L.jsx)(z.a,{item:!0,xs:2,children:"-"}),Object(L.jsx)(z.a,{item:!0,xs:5,children:Object(L.jsx)(E.a,{className:i.input,value:s,margin:"dense",onChange:l.bind(W,"to"),onBlur:b.bind(W,"to"),inputProps:{step:c,min:a,max:n,type:"number","aria-labelledby":"input-slider"}})}),Object(L.jsxs)(z.a,{item:!0,xs:5,className:"filters__perHourValue",children:[Y(r)," ",o.salaryPerHourLabel]}),Object(L.jsx)(z.a,{item:!0,xs:2}),Object(L.jsxs)(z.a,{item:!0,xs:5,className:"filters__perHourValue",children:[Y(s)," ",o.salaryPerHourLabel]})]})})},G=a(28),V=[].concat(Object(O.a)(G.CREATIVE_RIGHTS_STEPS.map((function(e){return{label:"contractOfEmploymentLabel ".concat(e,"%"),name:"uop-".concat(e)}}))),[{label:"B2B(19%) - lowZusLabel",name:"b2b-low-zus"},{label:"B2B(19%) - highZusLabel",name:"b2b-high-zus"}]),X=[{label:"Min",name:"nettoMin",additionalFields:[{name:"costMin",labelSuffix:"costMinLabelSuffix",enabler:"showEmployerCost"}]},{label:"Max",name:"nettoMax",additionalFields:[{name:"costMax",labelSuffix:"costMaxLabelSuffix",enabler:"showEmployerCost"}]},{label:"averageLabel",name:"nettoAvg",additionalFields:[{name:"costAvg",labelSuffix:"costAvgLabelSuffix",enabler:"showEmployerCost"}]},{label:"sumLabel",name:"nettoSum",additionalFields:[{name:"costSum",labelSuffix:"costSumLabelSuffix",enabler:"showEmployerCost"}]}],K=[{label:"showEmployerCostLabel",name:"showEmployerCost"},{label:"showTaxesLabel",name:"showTaxes"}],q=G.SALARY_MIN,J=G.SALARY_MAX,Q=G.SALARY_SLIDER_STEP,$=C((function(e){var t=e.submitAction,a=e.values,n=H(),c=n.translations,r=n.t,i=Object(s.useState)({from:a.from<q?q:a.from,to:a.to>J?J:a.to,types:a.types,measures:a.measures,additionalFilters:a.additionalFilters}),o=Object(d.a)(i,2),l=o[0],b=o[1],u=Object(s.useState)(!0),j=Object(d.a)(u,2),m=j[0],f=j[1],y=Object(s.useCallback)((function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=Object(h.a)(Object(h.a)({},l),{},Object(p.a)({},e,t));a&&(n.to<n.from&&"from"===e&&(n.to=n.from),n.from>n.to&&"to"===e&&(n.from=n.to)),b(n),f(!0)}),[b,f,l]),k=Object(s.useCallback)((function(e,t){var a=e.name;b(Object(h.a)(Object(h.a)({},l),{},{types:Object(h.a)(Object(h.a)({},l.types),{},Object(p.a)({},a,{checked:t,data:e}))})),f(!0)}),[f,l,b]),w=Object(s.useCallback)((function(e,t){var a=e.name;b(Object(h.a)(Object(h.a)({},l),{},{measures:Object(h.a)(Object(h.a)({},l.measures),{},Object(p.a)({},a,{checked:t,data:e}))})),f(!0)}),[f,l,b]),S=Object(s.useCallback)((function(e,t){var a=e.name;b(Object(h.a)(Object(h.a)({},l),{},{additionalFilters:Object(h.a)(Object(h.a)({},l.additionalFilters),{},Object(p.a)({},a,{checked:t,data:e}))})),f(!0)}),[f,l,b]),C=Object(s.useCallback)((function(){t(l),f(!1)}),[t,f,l]),z={update:y,min:q,max:J,step:G.SALARY_SLIDER_STEP,from:l.from,to:l.to},E={label:c.employmentTypeLabel,checkboxes:V.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{label:r(e.label),checked:(l.types[e.name]||{checked:!1}).checked||!1})})),update:k},A={label:c.measuresLabel,checkboxes:X.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{label:r(e.label),checked:(l.measures[e.name]||{checked:!1}).checked||!1})})),update:w},M={label:c.additionalFiltersLabel,checkboxes:K.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{label:r(e.label),checked:(l.additionalFilters[e.name]||{checked:!1}).checked||!1})})),update:S},N=Object(s.useCallback)((function(e,t){b(Object(h.a)(Object(h.a)({},l),{},{from:Math.min.apply(Math,Object(O.a)(t)),to:Math.max.apply(Math,Object(O.a)(t))}))}),[b,l]);return Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{children:[Object(L.jsx)(x.a,{component:"legend",children:c.salaryRangesLabel}),Object(L.jsx)(v.a,{value:[l.from,l.to],valueLabelDisplay:"auto",onChange:N,onChangeCommitted:function(){f(!0)},"aria-labelledby":"input-slider",min:q,max:J,step:Q}),Object(L.jsx)(Z,Object(h.a)({},z))]}),Object(L.jsx)(_,Object(h.a)({},E)),Object(L.jsx)(_,Object(h.a)({},A)),Object(L.jsx)(_,Object(h.a)({},M)),Object(L.jsx)(g.a,{variant:"outlined",color:"primary",onClick:C,disabled:!m,children:c.submitButtonLabel})]})})),ee=a(42),te=a.n(ee),ae=a(59),ne=a(213),ce=a(183),re="salario::theme",se="dark",ie="light",oe=function(e){localStorage.setItem(re,e)},le=function(){var e=!(!window.matchMedia||!window.matchMedia("(prefers-color-scheme: dark)").matches),t=localStorage.getItem(re);return t||(e||ie)},be=function(e){window.dataLayer.push({event:"theme-changed",theme:e})},ue=i.a.createContext({light:le(),toggle:function(){}}),je=function(){var e=Object(s.useContext)(ue),t=e.light;return{toggle:e.toggle,isLight:t,isDark:!t,theme:t?ie:se}},de=function(){var e=je(),t=e.isLight,a=e.toggle,n=["themeSwitcher__container"];return!t&&n.push("active"),Object(L.jsx)("div",{className:n.join(" "),onClick:a,children:Object(L.jsx)("span",{})})},he=function(e){var t=new Date(parseInt(e));return"".concat(t.getDate(),".").concat(t.getMonth()+1,".").concat(t.getFullYear())},me=function(){var e=Object(ae.a)(te.a.mark((function e(){var t,a,n,c;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(G.API_URL,"/api/metadata"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,c=n.created,e.abrupt("return",he(c));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=C((function(e){var t=e.toogleSidebar,a=H().translations,n=i.a.useState(!0),c=Object(d.a)(n,2),r=c[0],o=c[1],l=Object(ne.a)(["metadata"],me,{enabled:r}),b=l.loading,u=l.data;return Object(s.useEffect)((function(){!b&&u&&o(!1)}),[u,b]),Object(L.jsxs)("header",{className:"appHeader",children:[Object(L.jsx)("button",{className:"sidebarToggle",onClick:function(){return t()},children:Object(L.jsx)("svg",{className:"sidebarToggleIcon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(L.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})})}),Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{children:Object(L.jsx)("h6",{className:"appName",children:"Salario"})}),Object(L.jsxs)("div",{className:"dataGeneratedTime",children:[a.dataGeneratedLabel," ",null!==u&&void 0!==u?u:""]})]}),Object(L.jsxs)("div",{className:"header__controls",children:[Object(L.jsx)(de,{}),Object(L.jsx)("a",{href:"https://github.com/krzys1u/salaryComparer",className:"github__button",title:"Contribute me",children:Object(L.jsx)(ce.a,{})})]})]})})),Oe=a(184),pe=function(){return Object(L.jsx)("div",{style:{width:400,height:400},children:Object(L.jsx)("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsx)("g",{className:"loader__icon",children:Object(L.jsxs)("g",{children:[Object(L.jsx)("g",{children:Object(L.jsx)("g",{className:"loader__icon--animation",children:Object(L.jsx)("path",{strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#3f51b5",fill:"none",d:"M71.172 23.77H36.885c-7.243 0-13.115 5.872-13.115 13.115v0C23.77 44.128 29.642 50 36.885 50h26.23c7.243 0 13.115 5.872 13.115 13.115v0c0 7.243-5.872 13.115-13.115 13.115H23.77",className:"loader__icon--letter"})})}),Object(L.jsx)("g",{children:Object(L.jsx)("g",{className:"loader__icon--animation",children:Object(L.jsx)("path",{className:"loader__icon--pipe",d:"M41.631 10v80",strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#849b87",fill:"none"})})}),Object(L.jsx)("g",{children:Object(L.jsx)("g",{className:"loader__icon--animation",children:Object(L.jsx)("path",{className:"loader__icon--pipe",d:"M56.746 10v80",strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#849b87",fill:"none"})})})]})})})})},xe=C((function(){return Object(Oe.a)()?Object(L.jsx)("div",{className:"loader",children:Object(L.jsx)(pe,{})}):null})),ge=function(){return Object(L.jsx)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsxs)("g",{children:[Object(L.jsx)("path",{d:"m494.5 60.514h-113.627c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h113.627c1.378 0 2.5 1.122 2.5 2.5v45.527h-482v-45.527c0-1.378 1.122-2.5 2.5-2.5h328.85c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-328.85c-9.649 0-17.5 7.851-17.5 17.5v355.973c0 9.649 7.851 17.5 17.5 17.5h399.347c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-399.347c-1.378 0-2.5-1.122-2.5-2.5v-295.446h482v97.409c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-157.936c0-9.65-7.851-17.5-17.5-17.5z"}),Object(L.jsx)("path",{d:"m504.5 262.972c-4.142 0-7.5 3.358-7.5 7.5v163.515c0 1.378-1.122 2.5-2.5 2.5h-43.13c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h43.13c9.649 0 17.5-7.851 17.5-17.5v-163.515c0-4.142-3.358-7.5-7.5-7.5z"}),Object(L.jsx)("path",{d:"m47.433 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(L.jsx)("path",{d:"m70.076 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(L.jsx)("path",{d:"m92.719 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(L.jsx)("path",{d:"m464.567 107.027c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-13.956c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"}),Object(L.jsx)("path",{d:"m336.078 240.496c0-44.155-35.923-80.078-80.078-80.078s-80.078 35.923-80.078 80.078 35.923 80.078 80.078 80.078 80.078-35.923 80.078-80.078zm-80.078 65.078c-35.884 0-65.078-29.194-65.078-65.078s29.194-65.078 65.078-65.078 65.078 29.194 65.078 65.078-29.194 65.078-65.078 65.078z"}),Object(L.jsx)("path",{d:"m229.518 330.68c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h52.965c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(L.jsx)("path",{d:"m328.26 388.997c0-4.142-3.358-7.5-7.5-7.5h-187.453c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h187.453c4.142 0 7.5-3.358 7.5-7.5z"}),Object(L.jsx)("path",{d:"m378.693 381.497h-27.484c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h27.484c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(L.jsx)("path",{d:"m133.307 404.334c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h59.876c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(L.jsx)("path",{d:"m221.632 419.334h157.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-157.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"}),Object(L.jsx)("path",{d:"m283.801 212.695c-2.929-2.929-7.678-2.929-10.606 0l-17.195 17.195-17.195-17.195c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l17.195 17.195-17.195 17.195c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l17.195-17.194 17.195 17.195c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-17.195-17.195 17.195-17.195c2.929-2.929 2.929-7.678 0-10.607z"})]})})},ve=a(137),ye=function(e){var t=e.label,a=e.code,n=e.icon,c=e.button;return Object(L.jsx)("div",{className:"info__wrapper",children:Object(L.jsxs)("div",{children:[Object(L.jsx)(ve.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t}),Object(L.jsx)("div",{className:"image__wrapper",children:n}),a&&a.length?Object(L.jsx)("code",{children:a}):"",c?Object(L.jsx)("div",{className:"buttons",children:c}):""]})})},ke=C((function(e){var t=e.error,a=e.onClick,n=H().translations;return Object(L.jsx)(ye,{label:n.errorLabel,code:t.message,icon:Object(L.jsx)(ge,{}),button:Object(L.jsx)(g.a,{variant:"outlined",color:"primary",onClick:a,children:n.tryAgainLabel})})})),we=a(199),Le=a(204),Se=a(201),_e=a(202),Ce=a(206),ze=a(203),Ee=a(207),Ae=a(103),Me=a(104),Ne=a(205),Re=i.a.createContext({width:0,height:0}),Fe=500,Pe=["#c92a2a","#862e9c","#5f3dc4","#364fc7","#2b8a3e","#5c940d","#e67700","#d9480f","#69d2e7","#f38630","#f215b7","#db6991","#cfb5fc","#ffdac9","#b71013","#dca2f2","#606ff2","#dd18ca","#fffa7a","#f4bcab","#eabb10","#d4f473"],Te=function(e){return Pe[e]},Ie=function(e,t,a){var n=t.translations,c=t.t,r=a.datum,s=e[r.x];return Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{children:Object(L.jsxs)("strong",{children:[n.grossLabel,": ",r.x]})}),s.map((function(e,t){var a=Object(d.a)(e,2),n=a[0],s=a[1],i=Te(t),o=r.label===n;return Object(L.jsxs)("div",{children:[Object(L.jsx)("span",{style:{color:i,textDecoration:o?"underline solid ".concat(i):null,fontWeight:o?600:200},children:c(n)}),s]},n)}))]})},Be=function(e){var t=e.filters,a=e.dataSeries,n=e.dataPoints,c=e.dataRange,r=Object(s.useContext)(Re),i=r.width,o=r.height,l=je().isLight,b=H(),u=b.translations,j=b.t,h={stroke:l?"black":"#e8eef4"},m=Object(Ne.a)({range:a.map((function(e,t){return{stroke:Te(t),strokeDasharray:""}})),domain:a.map((function(e){return e.label}))}),f=Object(d.a)(c,2),p=f[0],x=f[1],g=[Math.min.apply(Math,Object(O.a)(n[p].map((function(e){var t=Object(d.a)(e,2);t[0];return t[1]}))))-Fe,Math.max.apply(Math,Object(O.a)(n[x].map((function(e){var t=Object(d.a)(e,2);t[0];return t[1]}))))+Fe],v=[t.from-Fe,t.to+Fe],y=Math.min(Math.floor(i/50),10);return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(we.a,{renderTooltip:Ie.bind(null,n,{translations:u,t:j}),children:function(e){var t=e.onMouseLeave,n=e.onMouseMove,c=e.tooltipData;return Object(L.jsxs)(Le.a,{ariaLabel:"Salaries",eventTrigger:"container",onMouseMove:n,onMouseLeave:t,renderTooltip:null,showVoronoi:!1,snapTooltipToDataX:!0,snapTooltipToDataY:!1,tooltipData:c,width:i,height:.75*o,xScale:{type:"linear",domain:v},yScale:{type:"linear",domain:g},children:[Object(L.jsx)(Se.a,{label:u.grossLabel,numTicks:y,axisStyles:h,tickStyles:h}),Object(L.jsx)(_e.a,{orientation:"left",numTicks:6,axisStyles:h,tickStyles:h}),a.map((function(e,t){var a=e.label,n=e.data,c=Te(t);return Object(L.jsx)(Ce.a,{data:n,seriesKey:a,strokeWidth:3,stroke:c},a)})),Object(L.jsx)(ze.a,{fullHeight:!0,showHorizontalLine:!1,strokeDasharray:"",circleSize:function(e){return e.y===c.datum.y?6:4},circleStroke:function(e){var t=e.label,a=Te(Object.keys(c.series).indexOf(t));return e.y===c.datum.y?"#fff":a},circleStyles:{strokeWidth:1.5},circleFill:function(e){var t=e.label,a=Te(Object.keys(c.series).indexOf(t));return e.y===c.datum.y?a:"#fff"},showCircle:!0,showMultipleCircles:!0})]})}}),Object(L.jsx)(Ee.a,{scale:m,children:function(e){return Object(L.jsx)("div",{className:"diagram__legend",children:e.map((function(e,t){return Object(L.jsxs)(Ae.a,{margin:"0 5px",className:"diagram__legendItem",children:[Object(L.jsx)("svg",{width:15,height:15,children:Object(L.jsx)("rect",{fill:e.value.stroke,width:15,height:15})}),Object(L.jsx)(Me.a,{align:"left",margin:"0 0 0 4px",children:j(e.text)})]},"legend-".concat(t))}))})}})]})},De=function(){return Object(L.jsx)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsxs)("g",{children:[Object(L.jsx)("g",{children:Object(L.jsxs)("g",{children:[Object(L.jsxs)("g",{children:[Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m313.604 170.975h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m395.052 132.478h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]}),Object(L.jsxs)("g",{children:[Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m313.604 296.662h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m395.052 258.164h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]}),Object(L.jsxs)("g",{children:[Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m313.604 422.349h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m395.052 383.851h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]})]})}),Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m320.852 70.651h-129.704c-12.328 0-22.358-10.029-22.358-22.357v-25.936c.001-12.328 10.03-22.358 22.358-22.358h129.703c12.328 0 22.358 10.03 22.358 22.358v25.936c0 12.328-10.029 22.357-22.357 22.357zm-129.704-55.651c-4.057 0-7.358 3.301-7.358 7.358v25.936c0 4.057 3.301 7.357 7.358 7.357h129.703c4.057 0 7.358-3.301 7.358-7.357v-25.936c0-4.058-3.301-7.358-7.358-7.358z"})}),Object(L.jsxs)("g",{children:[Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m162.917 181.028h-33.333c-11.103 0-20.136-9.033-20.136-20.136v-33.332c0-11.103 9.033-20.136 20.136-20.136h33.333c11.103 0 20.136 9.033 20.136 20.136v33.333c0 11.102-9.033 20.135-20.136 20.135zm-33.333-58.604c-2.832 0-5.136 2.304-5.136 5.136v33.333c0 2.832 2.304 5.136 5.136 5.136h33.333c2.832 0 5.136-2.304 5.136-5.136v-33.333c0-2.832-2.304-5.136-5.136-5.136z"})}),Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m162.917 306.715h-33.333c-11.103 0-20.136-9.033-20.136-20.136v-33.333c0-11.103 9.033-20.136 20.136-20.136h33.333c11.103 0 20.136 9.033 20.136 20.136v33.333c0 11.103-9.033 20.136-20.136 20.136zm-33.333-58.605c-2.832 0-5.136 2.304-5.136 5.136v33.333c0 2.832 2.304 5.136 5.136 5.136h33.333c2.832 0 5.136-2.304 5.136-5.136v-33.333c0-2.832-2.304-5.136-5.136-5.136z"})}),Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m162.917 432.402h-33.333c-11.103 0-20.136-9.033-20.136-20.137v-33.332c0-11.104 9.033-20.137 20.136-20.137h33.333c11.103 0 20.136 9.033 20.136 20.137v33.332c0 11.104-9.033 20.137-20.136 20.137zm-33.333-58.605c-2.832 0-5.136 2.305-5.136 5.137v33.332c0 2.832 2.304 5.137 5.136 5.137h33.333c2.832 0 5.136-2.305 5.136-5.137v-33.332c0-2.832-2.304-5.137-5.136-5.137z"})})]}),Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"m415.551 512h-319.102c-17.916 0-32.491-14.575-32.491-32.491v-419.193c0-17.915 14.576-32.49 32.491-32.49h44.945c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5h-44.945c-9.645 0-17.491 7.846-17.491 17.49v419.192c0 9.645 7.847 17.491 17.491 17.491h319.102c9.645 0 17.491-7.847 17.491-17.491v-419.192c0-9.645-7.847-17.49-17.491-17.49h-44.945c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h44.945c17.916 0 32.491 14.575 32.491 32.49v419.192c0 17.917-14.576 32.492-32.491 32.492z"})})]})})},He=C((function(){var e=H().translations;return Object(L.jsx)(ye,{label:e.noFiltersLabel,icon:Object(L.jsx)(De,{})})})),We=function(e){return Object.keys(e).map((function(t){return(a=t,n=e[t],Array.isArray(n)?[n.map((function(e){return[a,e].join("=")})).join("&")]:[a,n]).join("=");var a,n})).join("&")},Ue=function(){var e=Object(ae.a)(te.a.mark((function e(t){var a,n,c,r;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(G.API_URL,"/api/salary?").concat(We(t)),e.next=3,fetch(a,t);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,r=c.data,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(ae.a)(te.a.mark((function e(t){var a,n,c,r,s;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(d.a)(t.queryKey,5),n=a[1],c=a[2],r=a[3],s=a[4],e.next=3,Ue({types:Object.keys(n).filter((function(e){return!!n[e].checked})),additionalFilters:Object.keys(s).filter((function(e){return!!s[e].checked})),from:c,to:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ze=function(e,t){e.types;var a=e.measures,n=e.additionalFilters,c={},r={},s=[];return t.forEach((function(e){Object.values(a).filter((function(e){return!!e.checked})).forEach((function(t){var a=t.data,i=a.name,o=a.label,l=a.additionalFields,b=e.type,u=e.gross,j=function(e,t){return"".concat(e," (").concat((a=t,V.find((function(e){return e.name===a})).label),")");var a}(o,b);(!s[0]||u<s[0])&&(s[0]=u),(!s[1]||u>s[1])&&(s[1]=u),r[u]||(r[u]=[]),[{name:i,label:j}].concat(Object(O.a)(l.filter((function(e){var t=e.enabler;return!!n[t]})).map((function(e){var t=e.name,a=e.labelSuffix;return{name:t,label:"".concat(j," - ").concat(a)}})))).forEach((function(t){var a=t.name,n=t.label;e[a]&&(r[u].push([n,e[a]]),c[n]||(c[n]=[]),c[n].push({x:u,y:e[a],label:n}))}))}))})),{dataSeries:Object.keys(c).map((function(e){return{label:e,data:c[e]}})),dataPoints:r,range:s}},Ge=C((function(e){var t=e.filters,a=function(e){var t=e.types,a=e.measures;return e.additionalFilters,!Object.keys(t).filter((function(e){return!!t[e].checked})).length||!Object.keys(a).filter((function(e){return!!a[e].checked})).length}(t),n=Object(ne.a)(["data",t.types,t.from,t.to,t.additionalFilters],Ye,{enabled:!a}),c=n.isError,r=n.error,i=n.refetch,o=n.data,l=Object(s.useCallback)((function(){i({throwOnError:!1})}),[i]);if(!o||a)return Object(L.jsx)(He,{});if(c&&r)return Object(L.jsx)(ke,{error:r,onClick:l});var b=Ze(t,o),u=b.dataSeries,j=b.dataPoints,d=b.range;return Object(L.jsx)(Be,{filters:t,dataSeries:u,dataPoints:j,dataRange:d})})),Ve=function(){var e=H(),t=e.activeLang,a=e.changeLanguage,n=e.LANGS;return Object(L.jsx)("div",{className:"languageSelector__container",children:Object.keys(n).map((function(e){var c=["languageSelector__item"];return t===e&&c.push("active"),Object(L.jsx)("div",{className:c.join(" "),onClick:function(){a(e)},children:Object(L.jsx)("div",{children:n[e]})},"lang-".concat(e))}))})},Xe=function(){var e=document.getElementById("Workspace");return{width:e.offsetWidth-25,height:e.offsetHeight}},Ke=C((function(){var e=Object(s.useState)(function(){var e=window.location.search,t=new URLSearchParams(e),a=Object.fromEntries(V.map((function(e){return[e.name,1]}))),n=Object.fromEntries(X.map((function(e){return[e.name,1]}))),c=Object.fromEntries(K.map((function(e){return[e.name,1]}))),r=(t.get("types")||"uop-0").split(",").filter((function(e){return a[e]})),s=(t.get("measures")||"nettoMin").split(",").filter((function(e){return n[e]})),i=(t.get("additionalFilters")||"").split(",").filter((function(e){return c[e]})),o=parseInt(t.get("from"))||G.SALARY_MIN,l=parseInt(t.get("to"))||G.SALARY_MAX;return{types:Object.fromEntries(r.map((function(e){return[e,{data:V.find((function(t){return t.name===e})),checked:!0}]}))),measures:Object.fromEntries(s.map((function(e){return[e,{data:X.find((function(t){return t.name===e})),checked:!0}]}))),additionalFilters:Object.fromEntries(i.map((function(e){return[e,{data:K.find((function(t){return t.name===e})),checked:!0}]}))),from:o<l?o:l,to:o>l?o:l}}()),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(window.innerWidth<=640),r=Object(d.a)(c,2),i=r[0],o=r[1],l=Object(s.useState)({}),b=Object(d.a)(l,2),u=b[0],j=b[1],m=Object(s.useState)(!0),O=Object(d.a)(m,2),p=O[0],x=O[1],g=je().theme,v=Object(s.useCallback)((function(){i&&x(!1)}),[i]);Object(s.useEffect)((function(){!function(e){var t=[["types",Object.keys(e.types).filter((function(t){return!!e.types[t].checked})).join(",")],["measures",Object.keys(e.measures).filter((function(t){return!!e.measures[t].checked})).join(",")],["additionalFilters",Object.keys(e.additionalFilters).filter((function(t){return!!e.additionalFilters[t].checked})).join(",")],["from",e.from],["to",e.to]].reduce((function(e,t){var a=Object(d.a)(t,2),n=a[0],c=a[1];return c?(e.searchParams.set(n,c),e):e}),new URL(window.location));window.history.pushState({},"",t)}(a)}),[a]);var y=Object(s.useCallback)((function(e){v(),n(e),function(e){window.dataLayer.push(Object(h.a)({event:"formSubmit"},e))}(e)}),[n,v]),k=Object(s.useCallback)((function(){x(!p)}),[p]);return Object(s.useEffect)((function(){j(Xe())}),[p,i]),Object(s.useEffect)((function(){var e=f()((function(){var e=window.innerWidth<=640;i!==e&&o(e),j(Xe())}),400);return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(L.jsxs)("div",{className:"App","data-theme":g,children:[Object(L.jsx)(xe,{}),Object(L.jsx)(fe,{toogleSidebar:k}),Object(L.jsxs)("section",{className:"content",children:[p&&Object(L.jsxs)("aside",{className:"sidebar",children:[Object(L.jsx)($,{submitAction:y,values:a}),Object(L.jsx)(Ve,{})]}),Object(L.jsx)("section",{className:"workspace ".concat(p?"":"nosidebar"),id:"Workspace",children:Object(L.jsx)(Re.Provider,{value:u,children:Object(L.jsx)(Ge,{filters:a})})})]})]})})),qe=new b.a({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:!1}}}),Je=function(e){return function(){for(var t=le(),a=Object(s.useState)(t===ie),n=Object(d.a)(a,2),c=n[0],r=n[1],i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return Object(L.jsx)(ue.Provider,{value:{light:c,toggle:function(){oe(c?se:ie),r(!c),be(c?se:ie)}},children:Object(L.jsx)(e,Object(h.a)({},o))})}}((r=Ke,function(){for(var e=T(),t=Object(s.useState)(e),a=Object(d.a)(t,2),n=a[0],c=a[1],i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return Object(L.jsx)(B.Provider,{value:{lang:n,changeLanguage:function(e){var t=e;P(t),c(t),I(t),D={}}},children:Object(L.jsx)(r,Object(h.a)({},o))})}));function Qe(){return Object(L.jsxs)(u.a,{client:qe,children:[Object(L.jsx)(Je,{}),Object(L.jsx)(j.ReactQueryDevtools,{initialIsOpen:!1})]})}var $e=document.getElementById("root");l.a.render(Object(L.jsx)(Qe,{}),$e)},28:function(e,t){e.exports={FIREBASE_URL:"https://salario-a6a4b.firebaseio.com",API_URL:"https://salario.vercel.app",SALARY_MIN:2e3,SALARY_MAX:5e4,SALARY_STEP:250,SALARY_SLIDER_STEP:500,CREATIVE_RIGHTS_STEPS:[0,50,60,70,80]}}},[[136,1,2]]]);
//# sourceMappingURL=main.ef5c2c7c.chunk.js.map