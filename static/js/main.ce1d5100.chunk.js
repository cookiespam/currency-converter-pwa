(this["webpackJsonpcurrency-converter-pwa"]=this["webpackJsonpcurrency-converter-pwa"]||[]).push([[0],{369:function(e,t,n){},436:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n(0),c=n.n(a),i=n(16),s=n.n(i),o=(n(369),n(110)),u=n(477),l=n(476),f=n(117),d=n(308),p=n(309),b=n(115);function j(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=e?"dark":"light",n=e?f.a[900]:d.a[900],r=e?"#616161":p.a[500];return Object(b.a)({palette:{type:t,primary:{main:n},secondary:{main:r}}})}var h=n(310),v=n(464),O=n(470),y=n(316),g=n(96),w=n(241),x=n(474),m=n(471),E=n(473),k=n(329),C=n(20),S=n.n(C),R=n(38),I=n(91),T=n.n(I),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){if("serviceWorker"in navigator){if(new URL("/currency-converter-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/currency-converter-pwa","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=n(355),G=n(58),U=n(460),W=n(311),L=Object(h.a)((function(e){return{root:{flexGrow:1},currencyText:{display:"flex",flexDirection:"column",justifyContent:"center"},currencyInput:{width:"100%"}}}));var M=function(e){var t=e.currency,n=e.change,a=L();return Object(r.jsxs)(U.a,{container:!0,spacing:3,children:[Object(r.jsx)(U.a,{className:a.currencyText,item:!0,sm:3,children:Object(r.jsxs)(g.a,{variant:"body1",children:[t.name," (",t.id,")"]})}),Object(r.jsx)(U.a,{item:!0,sm:9,children:Object(r.jsx)(W.a,{id:"outlined-number",className:a.currencyInput,label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"outlined",value:t.rates,onChange:function(e){n(t.id,e.target.value)}})})]})},F=n(109),B=n(349),P=n(350),z=n(462),H=n.n(z),J=n(351);n.n(J).a.config({silent:!0});var V=[{id:"EUR",name:"Euro",rates:"1.00"},{id:"GBP",name:"British Pound Sterling",rates:"0.1"},{id:"USD",name:"United States Dollar",rates:"1.17"}],K=new(function(){function e(){Object(B.a)(this,e)}return Object(P.a)(e,[{key:"updateRates",value:function(){var e=Object(R.a)(S.a.mark((function e(){var t,n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,n=null,e.prev=2,e.next=5,this.getAllRates();case 5:return t=e.sent,e.next=8,this.getCurrencyList();case 8:n=(n=e.sent).symbols,e.next=18;break;case 12:return e.prev=12,e.t0=e.catch(2),console.log(e.t0),e.next=17,this.getOfflineData();case 17:return e.abrupt("return",e.sent);case 18:return e.next=20,this.populate(n,t);case 20:return r=e.sent,e.abrupt("return",r);case 22:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"getCurrencyList",value:function(){var e=Object(R.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("//jiasheng.tech/api","/currencylist/"),e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getAllRates",value:function(){var e=Object(R.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("//jiasheng.tech/api","/rates/"),e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getOfflineData",value:function(){var e=Object(R.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.getItem("data");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getSelectedCurrencies",value:function(){var e=Object(R.a)(S.a.mark((function e(t){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,T.a.getItem("selectedCurrencies");case 3:if(r=e.sent){e.next=8;break}return e.next=7,T.a.setItem("selectedCurrencies",V);case 7:r=e.sent;case 8:if(!t){e.next=11;break}return Object.entries(t).forEach((function(e){var t,a=Object(F.a)(r);try{for(a.s();!(t=a.n()).done;){var c=t.value;e[1].id===c.id&&n.push(e[1])}}catch(i){a.e(i)}finally{a.f()}})),e.abrupt("return",n);case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"setSelectedCurrencies",value:function(){var e=Object(R.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.setItem("selectedCurrencies",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"populate",value:function(){var e=Object(R.a)(S.a.mark((function e(t,n){var r,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in r=[],t)(c={}).id=a,c.name=t[a],c.rates=n.rates[a].toFixed(2)||0,r.push(c);return e.next=4,T.a.setItem("data",r);case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getDate",value:function(e){var t=new Date(1e3*e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(("0"+t.getMinutes()).slice(-2))}},{key:"change",value:function(e,t,n,r){var a,c={},i=Object(F.a)(e);try{for(i.s();!(a=i.n()).done;){var s=a.value;c[s.id]=Number(s.rates)}}catch(p){i.e(p)}finally{i.f()}var o,u=[],l=Object(F.a)(t);try{for(l.s();!(o=l.n()).done;){var f=o.value,d={};d.name=f.name,d.id=f.id;try{d.rates=H()(Number(r),{from:n,to:f.id,base:"EUR",rates:c}),d.id===n?d.rates=r:d.rates=d.rates.toFixed(2)}catch(b){console.log(b)}u.push(d)}}catch(p){l.e(p)}finally{l.f()}return u}}]),e}());Object.freeze(K);var Y=K,$="GET_CURRENCIES",q="GET_CURRENCIES_SUCCESS",Q="GET_CURRENCIES_FAILURE",X="GET_SELECTED_CURRENCIES",Z="SET_SELECTED_CURRENCIES",ee="CHANGE_RATE",te="GET_TABLE_DATA",ne=function(e){return{type:q,payload:e}};var re=Object(h.a)((function(e){return{root:{flexGrow:1,margin:24}}}));var ae=Object(G.b)((function(e){return{selected:e.currencies.selectedCurrencies,rates:e.currencies.currencies}}))((function(e){var t=e.dispatch,n=e.selected,c=e.rates,i=re();Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(R.a)(S.a.mark((function t(n){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.getSelectedCurrencies(e);case 2:r=t.sent,n({type:X,payload:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(c))}),[t,c]);var s=function(e,r){if(!isNaN(r)){var a=Object(_.a)(n);t(function(e,t,n,r){return function(){var a=Object(R.a)(S.a.mark((function a(c){var i;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=Y.change(e,t,n,r),c({type:ee,payload:i});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(c,a,e,r))}};return Object(r.jsx)("div",{className:i.root,children:function(){if("object"===typeof n&&0!==n.length)return n.map((function(e){return Object(r.jsx)(M,{currency:e,change:s},e.id)}))}()})})),ce=n(240),ie=n.n(ce),se=Object(h.a)((function(e){return{root:{flexGrow:1,margin:24,maxWidth:"100%"}}}));var oe=Object(G.b)((function(e){return{tableData:e.currencies.tableData,rates:e.currencies.currencies}}))((function(e){var t=e.dispatch,n=e.tableData,c=e.rates,i=se();return Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(R.a)(S.a.mark((function t(n){var r,a,c,i,s,o,u;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.getSelectedCurrencies(e);case 2:r=t.sent,a=Object(F.a)(e);try{for(a.s();!(c=a.n()).done;){i=c.value,s=Object(F.a)(r);try{for(s.s();!(o=s.n()).done;)u=o.value,i.id===u.id&&(i.tableData={checked:!0})}catch(l){s.e(l)}finally{s.f()}}}catch(l){a.e(l)}finally{a.f()}n({type:te,payload:e});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(c))}),[t,c]),Object(r.jsx)("div",{className:i.root,children:Object(r.jsx)(ie.a,{columns:[{title:"Name",field:"name"},{title:"ID",field:"id"},{title:"Rate",field:"rates",type:"numeric"}],data:n,title:"",options:{sorting:!0,selection:!0,pageSize:20},onSelectionChange:function(e){return t((n=e,function(){var e=Object(R.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.setSelectedCurrencies(n);case 2:t({type:Z,payload:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var n}})})})),ue=function(e){return{type:"SET_VIEW",view:e}},le="HOME",fe="ALL",de="STATS",pe=n(472),be=n(475),je=n(209),he=n(29),ve=Object(h.a)((function(e){return{root:{flexGrow:1},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}}}));var Oe=Object(G.b)((function(e){return{view:e.views.view}}))((function(e){var t=e.dispatch,n=e.view,a=ve();return Object(r.jsxs)(je.a,{children:[Object(r.jsxs)(he.d,{children:[Object(r.jsx)(he.b,{path:"/all",render:function(){return t(ue(fe)),Object(r.jsx)(oe,{})}}),Object(r.jsx)(he.b,{path:"/",render:function(){return t(ue(le)),Object(r.jsx)(ae,{})}}),Object(r.jsx)(he.a,{to:"/"})]}),function(e){switch(e){case le:return Object(r.jsx)(pe.a,{component:je.b,to:"/all",color:"primary",className:a.fab,children:Object(r.jsx)(be.a,{})});case fe:return Object(r.jsx)(pe.a,{component:je.b,to:"/",color:"primary",className:a.fab,children:Object(r.jsx)(l.a,{})});case de:default:return null}}(n)]})})),ye=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},fab:{position:"relative",bottom:e.spacing(2),right:e.spacing(2)}}}));var ge=Object(G.b)((function(e){return{loading:e.currencies.loading,rates:e.currencies.currencies,hasErrors:e.currencies.hasErrors,view:e.views.view}}))((function(e){var t=e.dispatch,n=e.loading,c=e.rates,i=e.hasErrors,s=(e.view,ye()),f=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(R.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.getItem("darkMode");case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),[n,function(){T.a.setItem("darkMode",!n),r(!n)}]}(),d=Object(o.a)(f,2),p=d[0],b=d[1],h=Object(a.useState)(!1),C=Object(o.a)(h,2),I=C[0],N=C[1],A=Object(a.useState)({}),_=Object(o.a)(A,2),G=_[0],U=_[1],W=Object(a.useState)(!1),L=Object(o.a)(W,2),M=L[0],F=L[1],B=function(e,t){"clickaway"!==t&&F(!1)};Object(a.useEffect)((function(){t(function(){var e=Object(R.a)(S.a.mark((function e(t){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:$}),e.prev=1,e.next=4,Y.getOfflineData();case 4:return n=e.sent,t(ne(n)),e.next=8,Y.updateRates();case 8:r=e.sent,t(ne(r)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t({type:Q});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()),D({onUpdate:P}),I&&F(!0)}),[t,I]);var P=function(e){N(!0),U(e&&e.waiting)};return Object(r.jsx)(v.a,{theme:j(p),children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(O.a,{position:"static",children:Object(r.jsxs)(y.a,{children:[Object(r.jsx)(g.a,{variant:"h6",className:s.title,children:"Currency Conveter"}),Object(r.jsx)(w.a,{color:"inherit","aria-label":"statistics",children:Object(r.jsx)(u.a,{})}),Object(r.jsx)(x.a,{checked:p||!1,onChange:b})]})}),Object(r.jsx)(m.a,{}),function(){if(!n&&!i&&c&&0!==c.length)return Object(r.jsx)(Oe,{})}(),Object(r.jsx)(E.a,{open:M,onClose:B,message:"A new version was released",action:Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(k.a,{color:"secondary",size:"small",onClick:function(e,t){G&&G.postMessage({type:"SKIP_WAITING"}),N(!1),window.location.reload()},children:"REFRESH"}),Object(r.jsx)(w.a,{size:"small","aria-label":"close",color:"inherit",onClick:B,children:Object(r.jsx)(l.a,{fontSize:"small"})})]})})]})})})),we=n(59),xe=n(27),me={loading:!1,hasErrors:!1,currencies:[],selectedCurrencies:[],tableData:[]};var Ee="GET CurrencyS",ke="GET_Currency_SUCCESS",Ce="GET_Currency_FAILURE";var Se={loading:!1,hasErrors:!1,currency:{}};var Re={view:le};var Ie=Object(we.combineReducers)({currency:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(xe.a)(Object(xe.a)({},e),{},{loading:!0});case ke:return Object(xe.a)(Object(xe.a)({},e),{},{currency:t.payload,loading:!1,hasErrors:!1});case Ce:return Object(xe.a)(Object(xe.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},currencies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(xe.a)(Object(xe.a)({},e),{},{loading:!0});case q:return Object(xe.a)(Object(xe.a)({},e),{},{currencies:t.payload,loading:!1,hasErrors:!1});case Q:return Object(xe.a)(Object(xe.a)({},e),{},{loading:!1,hasErrors:!0});case X:case Z:case ee:return Object(xe.a)(Object(xe.a)({},e),{},{selectedCurrencies:t.payload});case te:return Object(xe.a)(Object(xe.a)({},e),{},{tableData:t.payload});default:return e}},views:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VIEW":return Object(xe.a)(Object(xe.a)({},e),{},{view:t.view});default:return e}}}),Te=n(353),Ne=n(354),De=Object(we.createStore)(Ie,Object(Ne.composeWithDevTools)(Object(we.applyMiddleware)(Te.a)));s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(G.a,{store:De,children:Object(r.jsx)(ge,{})})}),document.getElementById("root")),D()}},[[436,1,2]]]);
//# sourceMappingURL=main.ce1d5100.chunk.js.map