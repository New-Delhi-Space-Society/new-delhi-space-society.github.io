(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{2528:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/links",function(){return e(8314)}])},8314:function(n,r,e){"use strict";function t(n,r,e,t,o,i,c){try{var a=n[i](c),u=a.value}catch(s){return void e(s)}a.done?r(u):Promise.resolve(u).then(t,o)}e.r(r),e.d(r,{default:function(){return x}});var o=e(7297),i=e(4051),c=e.n(i),a=e(5893),u=e(7294),s=e(7379),l=e(7734),d=e(5248),f=e(4155);function h(){var n=(0,o.Z)(["\n    min-height: calc(100vh - 150px);\n    max-width: 500px;\n    width: 100%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n  "]);return h=function(){return n},n}function v(){var n=(0,o.Z)(["\n    display: block;\n    margin: 20px 10px;\n    padding: 20px;\n    text-align: center;\n    width: 100%;\n    border: 2px solid ",";\n    transition: background 0.3s ease, color 0.3s ease;\n    color: #444;\n    cursor: pointer;\n    text-decoration: none;\n\n    &:hover,\n    &:active {\n      background: ",";\n      color: white;\n    }\n  "]);return v=function(){return n},n}function p(){var n=(0,o.Z)(["\n    display: block;\n    margin: 12px auto;\n    width: 70%;\n    height: auto;\n  "]);return p=function(){return n},n}function x(){var n=(0,u.useState)([]),r=n[0],e=n[1];(0,u.useEffect)((function(){console.log("https://api.airtable.com/v0/".concat(f.env.NEXT_PUBLIC_AIRTABLE_BASE_ID,"/Linktree%20Links?maxRecords=10&view=Grid%20view"));var n=function(){var n,r=(n=c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.airtable.com/v0/".concat(f.env.NEXT_PUBLIC_AIRTABLE_BASE_ID,"/Linktree%20Links?maxRecords=10&view=Grid%20view"),{headers:{Authorization:"Bearer ".concat("echo NEXT_PUBLIC_AIRTABLE_BASE_ID=")}});case 2:return n.next=4,n.sent.json();case 4:r=n.sent,console.log(r),e(r.records.map((function(n){return n.fields})));case 7:case"end":return n.stop()}}),n)})),function(){var r=this,e=arguments;return new Promise((function(o,i){var c=n.apply(r,e);function a(n){t(c,o,i,a,u,"next",n)}function u(n){t(c,o,i,a,u,"throw",n)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();try{n()}catch(r){console.error(r)}}),[]);var o=s.ZP.main(h()),i=s.ZP.a(v(),d.Wb.colors.secondaryMain,d.Wb.colors.secondaryMain),x=s.ZP.img(p());return(0,a.jsxs)(o,{children:[(0,a.jsx)("a",{href:"//newdelhi.nss.org",children:(0,a.jsx)(x,{src:"/badge.png",alt:"Logo"})}),(0,a.jsx)("div",{style:{flex:1},children:r.length>0&&r.map((function(n){return(0,a.jsx)(i,{href:n.URL,target:"_blank",rel:"noreferrer",children:(0,a.jsx)(l.ul,{children:n.Name})})}))})]})}}},function(n){n.O(0,[774,888,179],(function(){return r=2528,n(n.s=r);var r}));var r=n.O();_N_E=r}]);