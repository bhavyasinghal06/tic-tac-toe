(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{58:function(e,t,a){e.exports=a(70)},63:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),c=(a(63),a(18)),i=a(50),u=a(95),s=a(96),m=a(92),d=a(23),f=a(97),E=a(44),h=a(17),p=a(51),b=a(53),g=a(22),O=a(89),v=a(91),w=a(94),y=a(93),S=Object(O.a)((function(e){return{root:{position:"absolute",flexGrow:1},paper:{height:96.5,width:98,backgroundColor:"white",borderColor:"black",borderRadius:0},paperFlash:{height:96.5,width:98,backgroundColor:"pink",borderColor:"black",borderRadius:0},control:{margin:e.spacing(0,"auto")},textO:{textAlign:"center",fontSize:50,justifyContent:"centre",color:"purple",fontStyle:"roman"},textX:{textAlign:"center",justifyContent:"centre",fontSize:50,color:"red",fontStyle:"roman"}}})),j=function(e){var t=e.grid,a=e.clickHandler,n=e.flashIndices,l=void 0===n?[]:n,o=S(),c=function(e){return"O"===e||"X"===e?e:""};return r.a.createElement(v.a,{className:o.root},r.a.createElement(v.a,{style:{width:"20rem"}},r.a.createElement(m.a,null,[0,1,2].map((function(e){return r.a.createElement(y.a,{xs:3},r.a.createElement(w.a,{className:l.includes(e)?o.paperFlash:o.paper,variant:"outlined",onClick:function(){return a(e)}},r.a.createElement("p",{className:"O"===c(t[e])?o.textO:o.textX},c(t[e]))))}))),r.a.createElement(m.a,null,[3,4,5].map((function(e){return r.a.createElement(y.a,{xs:3},r.a.createElement(w.a,{className:l.includes(e)?o.paperFlash:o.paper,variant:"outlined",onClick:function(){return a(e)}},r.a.createElement("p",{className:"O"===c(t[e])?o.textO:o.textX},c(t[e]))))}))),r.a.createElement(m.a,null,[6,7,8].map((function(e){return r.a.createElement(y.a,{xs:3},r.a.createElement(w.a,{className:l.includes(e)?o.paperFlash:o.paper,variant:"outlined",onClick:function(){return a(e)}},r.a.createElement("p",{className:"O"===c(t[e])?o.textO:o.textX},c(t[e]))))})))))};function k(e,t,a){var n=x(e);if(C(e,N))return{score:-10};if(C(e,H))return{score:10};if(0===n.length)return{score:0};if(0===a)return{score:0};for(var r,l=[],o=0;o<n.length;o++){var c={};if(c.index=e[n[o]],e[n[o]]=t,t===H){var i=k(e,N,a--);c.score=i.score}else{i=k(e,H,a--);c.score=i.score}e[n[o]]=c.index,l.push(c)}if(t===H){var u=-1e4;for(o=0;o<l.length;o++)l[o].score>u&&(u=l[o].score,r=o)}else for(u=1e4,o=0;o<l.length;o++)l[o].score<u&&(u=l[o].score,r=o);return l[r]}function x(e){return e.filter((function(e){return"O"!==e&&"X"!==e}))}function C(e,t){return e[0]===t&&e[1]===t&&e[2]===t||e[3]===t&&e[4]===t&&e[5]===t||e[6]===t&&e[7]===t&&e[8]===t||e[0]===t&&e[3]===t&&e[6]===t||e[1]===t&&e[4]===t&&e[7]===t||e[2]===t&&e[5]===t&&e[8]===t||e[0]===t&&e[4]===t&&e[8]===t||e[2]===t&&e[4]===t&&e[6]===t}var N="O",H="X",I={ai:"Computer",human:"Human"};var X=function(){var e=Object(n.useState)([0,1,2,3,4,5,6,7,8]),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)("human"),O=Object(c.a)(o,2),v=O[0],w=O[1],y=Object(n.useState)(1),S=Object(c.a)(y,2),X=S[0],B=S[1],F=Object(n.useState)(!1),J=Object(c.a)(F,2),M=J[0],T=J[1],z=Object(n.useState)(""),G=Object(c.a)(z,2),K=G[0],A=G[1],R=Object(n.useState)([]),D=Object(c.a)(R,2),P=D[0],W=D[1],L=Object(n.useState)(""),$=Object(c.a)(L,2),q=$[0],Q=$[1],U=function(e){B(Number(e)),T(!1)},V=function(e){w(e),T(!1),l([0,1,2,3,4,5,6,7,8]),W([])},Y=function(e,t){a[e]=t,C(a,N)&&(_(),A("human"),le(),Q("")),C(a,H)&&(_(),A("ai"),le(),Q(""))};Object(n.useEffect)((function(){if("human"===v){var e=k(JSON.parse(JSON.stringify(a)),N,100);Z(e.index)}if("ai"===v){e=k(JSON.parse(JSON.stringify(a)),H,X);Y(e.index,H),0===e.score&&x(a).length<2&&me(),w("human")}}),[M,v]);var Z=function(e){0===e&&Q("1st row 1st col"),1===e&&Q("1st row 2nd col"),2===e&&Q("1st row 3rd col"),3===e&&Q("2nd row 1st col"),4===e&&Q("2nd row 2nd col"),5===e&&Q("2nd row 3rd col"),6===e&&Q("3rd row 1st col"),7===e&&Q("3rd row 2nd col"),8===e&&Q("3nd row 3nd col"),x(a).length<1&&Q("")};function _(){a[0]===a[1]&&a[2]===a[1]?W([0,1,2]):a[3]&&a[3]===a[4]&&a[5]===a[4]&&W([3,4,5]),a[6]&&a[6]===a[7]&&a[7]===a[8]?W([6,7,8]):a[0]&&a[3]===a[0]&&a[3]===a[6]&&W([0,3,6]),a[1]===a[4]&&a[4]===a[7]?W([1,4,7]):a[2]===a[5]&&a[5]===a[8]&&W([2,5,8]),a[0]===a[4]&&a[4]===a[8]?W([0,4,8]):a[2]===a[4]&&a[4]===a[6]&&W([2,4,6])}var ee=Object(n.useState)(!1),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],re=function(){return ne(!1)},le=function(){return ne(!0)},oe=Object(n.useState)(!1),ce=Object(c.a)(oe,2),ie=ce[0],ue=ce[1],se=function(){return ue(!1)},me=function(){return ue(!0)};return r.a.createElement(u.a,{className:"p-4",style:{backgroundcolor:"black"}},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Hello, hooman!"),r.a.createElement("p",null,"AI powered Tic-Tac-Toe Game.")),r.a.createElement(s.a,null,r.a.createElement(d.a,{border:"secondary",style:{width:"18rem"}},r.a.createElement(d.a.Body,null,r.a.createElement(m.a,null,r.a.createElement(E.a,{id:"dropdown-basic-button",title:"Player",variant:"success",size:"lg",style:{marginRight:10}},r.a.createElement(h.a.Item,{as:"button",eventKey:"human",onSelect:V},"Human (O)"),r.a.createElement(h.a.Item,{as:"button",eventKey:"ai",onSelect:V},"Computer (X)")),r.a.createElement(E.a,{id:"dropdown-basic-button",title:"Depth/Level",style:{marginRight:10},variant:"info",size:"lg"},r.a.createElement(h.a.Item,{as:"button",eventKey:"1",onSelect:U},"Easy"),r.a.createElement(h.a.Item,{as:"button",eventKey:"5",onSelect:U},"Medium"),r.a.createElement(h.a.Item,{as:"button",eventKey:"100",onSelect:U},"Hard")))),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,"Selections Made"),r.a.createElement(b.a,{className:"list-group-flush"},r.a.createElement(g.a,null,"Player: ",I[v]),r.a.createElement(g.a,null,"Depth: ",100!==X?X:"MAX"),r.a.createElement(g.a,null,"Suggested Move: ",q))),r.a.createElement(i.a,{size:"lg",variant:"warning",onClick:function(){return T(!0),B(1),l([0,1,2,3,4,5,6,7,8]),w("human"),void W([])}},"New Game")),r.a.createElement(d.a,{style:{border:0,alignItems:"center"}},r.a.createElement(j,{grid:a,clickHandler:function(e){"X"!==a[e]&&"O"!==a[e]&&(Y(e,N),w("ai"))},flashIndices:P})),ae>0?r.a.createElement(f.a,{show:ae,onHide:re},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,null,"Game Ends")),r.a.createElement(f.a.Body,null,"human"===K?"Congratulations, you won!":"Oops, you lost!"),r.a.createElement(f.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:re},"Close"))):null,ie>0?r.a.createElement(f.a,{show:ie,onHide:se},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,null,"Game Ends")),r.a.createElement(f.a.Body,null,"Match Drawn!"),r.a.createElement(f.a.Footer,null,r.a.createElement(i.a,{variant:"secondary",onClick:se},"Close"))):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(69);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.4cb5cae9.chunk.js.map