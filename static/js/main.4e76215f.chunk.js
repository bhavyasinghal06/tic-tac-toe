(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{59:function(e,t,a){e.exports=a(73)},64:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=(a(64),a(15)),i=a(50),u=a(103),s=a(104),m=a(100),d=a(22),f=a(105),E=a(44),h=a(18),p=a(51),b=a(53),O=a(30),v=a(97),y=a(99),g=a(102),w=a(101),S=Object(v.a)((function(e){return{root:{position:"absolute",flexGrow:1},paper:{height:96.5,width:98,backgroundColor:"white",borderColor:"black",borderRadius:0},paperFlash:{height:96.5,width:98,backgroundColor:"white",borderColor:"black",borderRadius:0},control:{margin:e.spacing(0,"auto")},textO:{textAlign:"center",fontSize:50,justifyContent:"centre",color:"pink",fontStyle:"roman"},textX:{textAlign:"center",justifyContent:"centre",fontSize:50,color:"yellow",fontStyle:"roman"}}}));var j=function(e){var t=e.grid,a=e.clickHandler,c=e.flashIndices,l=void 0===c?[]:c,i=Object(n.useState)(0),u=(Object(o.a)(i,1)[0],S()),s=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=(t[0],t[1]);return function(){return a((function(e){return++e}))}}(),d=function(e){a(e),s()},f=function(e){return"O"===e||"X"===e?e:""};return r.a.createElement(y.a,{className:u.root},r.a.createElement(y.a,{style:{width:"20rem"}},r.a.createElement(m.a,null,[0,1,2].map((function(e){return r.a.createElement(w.a,{xs:3},r.a.createElement(g.a,{className:l.includes()?u.paperFlash:u.paper,variant:"outlined",onClick:function(){return d(e)}},r.a.createElement("p",{className:"O"===f(t[e])?u.textO:u.textX},f(t[e]))))}))),r.a.createElement(m.a,null,[3,4,5].map((function(e){return r.a.createElement(w.a,{xs:3},r.a.createElement(g.a,{className:l.includes()?u.paperFlash:u.paper,variant:"outlined",onClick:function(){return d(e)}},r.a.createElement("p",{className:"O"===f(t[e])?u.textO:u.textX},f(t[e]))))}))),r.a.createElement(m.a,null,[6,7,8].map((function(e){return r.a.createElement(w.a,{xs:3},r.a.createElement(g.a,{className:l.includes()?u.paperFlash:u.paper,variant:"outlined",onClick:function(){return d(e)}},r.a.createElement("p",{className:"O"===f(t[e])?u.textO:u.textX},f(t[e]))))})))))};function x(e,t,a){var n=k(e);if(C(e,N))return{score:-10};if(C(e,H))return{score:10};if(0===n.length)return{score:0};if(0===a)return{score:0};for(var r,c=[],l=0;l<n.length;l++){var o={};if(o.index=e[n[l]],e[n[l]]=t,t===H){var i=x(e,N);o.score=i.score}else{i=x(e,H);o.score=i.score}e[n[l]]=o.index,c.push(o)}if(t===H){var u=-1e4;for(l=0;l<c.length;l++)c[l].score>u&&(u=c[l].score,r=l)}else for(u=1e4,l=0;l<c.length;l++)c[l].score<u&&(u=c[l].score,r=l);return c[r]}function k(e){return e.filter((function(e){return"O"!==e&&"X"!==e}))}function C(e,t){return e[0]===t&&e[1]===t&&e[2]===t||e[3]===t&&e[4]===t&&e[5]===t||e[6]===t&&e[7]===t&&e[8]===t||e[0]===t&&e[3]===t&&e[6]===t||e[1]===t&&e[4]===t&&e[7]===t||e[2]===t&&e[5]===t&&e[8]===t||e[0]===t&&e[4]===t&&e[8]===t||e[2]===t&&e[4]===t&&e[6]===t}a(69);var N="O",H="X",X={ai:"Computer",human:"Human"};var I=function(){var e=Object(n.useState)([0,1,2,3,4,5,6,7,8]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("human"),v=Object(o.a)(l,2),y=v[0],g=v[1],w=Object(n.useState)(1),S=Object(o.a)(w,2),I=S[0],B=S[1],T=Object(n.useState)(!1),F=Object(o.a)(T,2),J=F[0],G=F[1],K=Object(n.useState)(""),M=Object(o.a)(K,2),A=M[0],R=M[1],D=function(e){B(Number(e)),G(!1)},z=function(e){g(e),G(!1),c([0,1,2,3,4,5,6,7,8])},P=Object(n.useState)(!1),W=Object(o.a)(P,2),L=W[0],$=W[1],q=function(){return $(!1)},Q=function(){return $(!0)};Object(n.useEffect)((function(){if("ai"===y){var e=x(JSON.parse(JSON.stringify(a)),H,I);U(e.index,H),0===e.score&&k(a).length<=2&&te(),g("human")}}),[J,y]);var U=function(e,t){a[e]=t,C(a,N)&&(R("human"),Q()),C(a,H)&&(R("ai"),Q())},V=Object(n.useState)(!1),Y=Object(o.a)(V,2),Z=Y[0],_=Y[1],ee=function(){return _(!1)},te=function(){return _(!0)};return r.a.createElement(u.a,{className:"p-3"},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Hello, hooman!"),r.a.createElement("p",null,"This is a react-app for AI powered Tic-Tac-Toe Game.")),r.a.createElement(s.a,null,r.a.createElement(d.a,{border:"secondary",style:{width:"18rem"}},r.a.createElement(d.a.Body,null,r.a.createElement(m.a,null,r.a.createElement(E.a,{id:"dropdown-basic-button",title:"Player",style:{marginRight:10}},r.a.createElement(h.a.Item,{as:"button",eventKey:"human",onSelect:z},"Human (O)"),r.a.createElement(h.a.Item,{as:"button",eventKey:"ai",onSelect:z},"Computer (X)")),r.a.createElement(E.a,{id:"dropdown-basic-button",title:"Depth/Level",style:{marginRight:10}},r.a.createElement(h.a.Item,{as:"button",eventKey:"1",onSelect:D},"Easy"),r.a.createElement(h.a.Item,{as:"button",eventKey:"5",onSelect:D},"Medium"),r.a.createElement(h.a.Item,{as:"button",eventKey:"100",onSelect:D},"Hard")))),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,"Selections Made"),r.a.createElement(b.a,{className:"list-group-flush"},r.a.createElement(O.a,null,"Player: ",X[y]),r.a.createElement(O.a,null,"Depth: ",100!==I?I:"MAX"))),r.a.createElement(i.a,{variant:"primary",onClick:function(){return G(!0),B(1),c([0,1,2,3,4,5,6,7,8]),void g("human")}},"New Game")),r.a.createElement(d.a,{style:{border:0,alignItems:"center"}},r.a.createElement(j,{grid:a,clickHandler:function(e){"X"!==a[e]&&"O"!==a[e]&&("human"===y&&(U(e,N),g("ai"),k(a).length<=2&&0===x(JSON.parse(JSON.stringify(a)),N,I).score&&te()))}})),L>0?r.a.createElement(f.a,{show:L,onHide:q},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,null,"Game Ends")),r.a.createElement(f.a.Body,null,"human"===A?"Congratulations, you won!":"Oops, you lost!"),r.a.createElement(f.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:q},"Close"))):null,Z>0?r.a.createElement(f.a,{show:Z,onHide:ee},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,null,"Game Ends")),r.a.createElement(f.a.Body,null,"Match Drawn!"),r.a.createElement(f.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:ee},"Close"))):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.4e76215f.chunk.js.map