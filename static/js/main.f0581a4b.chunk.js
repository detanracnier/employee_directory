(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(4),c=n.n(o),s=(n(10),n(2)),i=(n(11),n(5)),d=n(0);var l=function(e){return Object(d.jsx)("input",{onChange:e.handleOnChange,className:"",type:"text",maxLength:"40",placeholder:"employee name"})};var m=function(e){var t=e.keys;return Object(d.jsx)("div",{className:"row",onClick:e.handleBtnClick,children:t.map((function(e){return Object(d.jsx)("div",{className:"col btn-info","data-col-name":e,children:e},e.id+e)}))})};var u=function(e){var t=e.employeeInfo;return Object(d.jsx)("div",{className:"row employee-row",children:Object.keys(t).map((function(e){return Object(d.jsx)("div",{className:"col",children:t[e]},e)}))})};n(13);var p=function(){var e=Object(r.useState)([{}]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)({sortCol:"id",sortOrder:1}),c=Object(s.a)(o,2),p=c[0],j=c[1],b=Object(r.useState)(""),h=Object(s.a)(b,2),O=h[0],f=h[1];Object(r.useEffect)((function(){a(i)}),[]);var g=[];try{g=n.filter((function(e){return e.name.toLowerCase().includes(O)})).sort((function(e,t){return("string"===typeof e[p.sortCol]?e[p.sortCol].toLowerCase():e[p.sortCol])>("string"===typeof t[p.sortCol]?t[p.sortCol].toLowerCase():t[p.sortCol])?p.sortOrder:-1*p.sortOrder}))}catch(C){}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{handleOnChange:function(e){f(e.target.value)}}),Object(d.jsx)(m,{keys:Object.keys(n[0]),handleBtnClick:function(e){var t=e.target.getAttribute("data-col-name");console.log("col clicked"),j({sortCol:t,sortOrder:-1*p.sortOrder})}}),g.map((function(e){return Object(d.jsx)(u,{employeeInfo:e},e.id+e.name)}))]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),j()},5:function(e){e.exports=JSON.parse('[{"id":1,"name":"james","department":"human resources"},{"id":2,"name":"carl","department":"human resources"},{"id":3,"name":"jessica","department":"human resources"},{"id":4,"name":"Riana","department":"IT"},{"id":5,"name":"Michael","department":"IT"},{"id":6,"name":"greg","department":"sales"},{"id":7,"name":"bob","department":"sales"},{"id":8,"name":"brianna","department":"sales"},{"id":9,"name":"Bran","department":"graphic design"},{"id":10,"name":"Harvey","department":"graphic design"},{"id":11,"name":"Holly","department":"graphic design"}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.f0581a4b.chunk.js.map