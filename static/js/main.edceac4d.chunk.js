(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{55:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s,d,l,u,j,b,x,h,p,O,f,m,g,k,v,w,y,z,C,D,T,S,E,I,L,F,P=t(0),U=t.n(P),N=t(23),H=t.n(N),J=t(5),R=t(4),W=Object(R.b)(r||(r=Object(J.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: #eee;\n    margin: 0;\n    word-break: break-all;\n  }\n"]))),M=t(14),A=t(7),B=R.d.section(c||(c=Object(J.a)(["\n  background-color: white;\n  box-shadow: 1px -1px 5px 0px #DDDDDD;\n"]))),Z=R.d.header(a||(a=Object(J.a)(["\n  display: flex;\n  border-bottom: 1px solid #ddd;\n  margin-top: 10px;\n  padding: 0 20px;\n\n  @media (max-width:","px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.breakpoints.small})),X=R.d.h2(o||(o=Object(J.a)(["\n  padding: 20px 0;\n  margin: 0;\n  font-size: 20px;\n"]))),_=t(2),q=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(_.jsxs)(B,{children:[Object(_.jsxs)(Z,{children:[Object(_.jsx)(X,{children:e}),r]}),t]})},G=R.d.h1(i||(i=Object(J.a)(["\n  margin: 30px 0 20px;\n\n  @media (max-width:","px) {\n      text-align:center;\n    }\n"])),(function(n){return n.theme.breakpoints.small})),K=function(n){var e=n.title;return Object(_.jsx)("header",{children:Object(_.jsx)(G,{children:e})})},Q=R.d.main(s||(s=Object(J.a)(["\n  max-width: 850px;\n  margin: 0 auto;\n"]))),V=R.d.div(d||(d=Object(J.a)(["\n  padding:20px;\n"]))),Y=R.d.p(l||(l=Object(J.a)(["\n  margin: 0 0 16px;\n  word-break: normal;\n  line-height: 1.5;\n"]))),$=R.d.div(u||(u=Object(J.a)(["\n  text-align: center;\n"]))),nn=R.d.a(j||(j=Object(J.a)(["\ndisplay:block;\n"]))),en=R.d.img(b||(b=Object(J.a)(["\n  width: 40px;\n"]))),tn=R.d.a(x||(x=Object(J.a)(["\ncolor:#727171;\ntext-decoration: none;\nfont-size:15px;\n"]))),rn=t.p+"static/media/instagram.8ff7ce92.svg",cn=function(){return Object(_.jsxs)(Q,{children:[Object(_.jsx)(K,{title:"O autorze"}),Object(_.jsx)(q,{title:"Witaj!",body:Object(_.jsxs)(V,{children:[Object(_.jsxs)(Y,{children:["Nazywam si\u0119 Paulina i pochodze z Lublina, ale mieszkam w Warszawie. Moim celem jest zostanie ",Object(_.jsx)("strong",{children:"front-end developerem!"})]}),Object(_.jsx)(Y,{children:"W wolnym czasie lubi\u0119 w\u0119drowa\u0107 po g\xf3rach, miastach, lasach i polach oraz piec ciastka. Zdarza mi si\u0119 wstawi\u0107 zdj\u0119cia z tych w\u0119dr\xf3wek lub zdj\u0119cia kota na Instagram \ud83d\ude09. "}),Object(_.jsxs)($,{children:[Object(_.jsx)(nn,{href:"https://www.instagram.com/grymulska/",rel:"noopener noreferrer",target:"_blank",children:Object(_.jsx)(en,{src:rn,alt:"ig icon"})}),Object(_.jsx)(tn,{href:"https://icons8.com/icon/Xy10Jcu1L2Su/instagram",children:"Instagram icon by Icons8"})]})]})})]})},an=t(38),on=t(16),sn=t(8),dn=R.d.form(h||(h=Object(J.a)(["\n  display: flex;\n  padding: 20px;\n\n  @media (max-width:","px) {\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.breakpoints.medium})),ln=R.d.button(p||(p=Object(J.a)(["\n  background-color: ",";\n  color: white;\n  border: none;\n  padding: 10px;\n  margin-left: 20px;\n  transition: background-color 0.3s, transform 0.3s;\n\n  @media (max-width:","px) {\n    margin-left: 0;\n    margin-top: 10px;\n  }\n\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n    transform: scale(1.1);\n\n    @media (max-width:","px) {\n      transform: scale(1.05);\n    }\n  }\n\n  &:active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.breakpoints.medium}),(function(n){return n.theme.colors.hoverColor}),(function(n){return n.theme.breakpoints.medium}),(function(n){return n.theme.colors.activeColor})),un=t(37),jn=t(33),bn="tasks",xn=function(n){return localStorage.setItem(bn,JSON.stringify(n))},hn=Object(on.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(bn))||[],hideDone:!1,loading:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(jn.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(c){r.e(c)}finally{r.f()}},fetchExampleTasks:function(n){n.loading=!0},setExampleTasks:function(n,e){var t,r=e.payload;(t=n.tasks).push.apply(t,Object(un.a)(r)),n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1}}}),pn=hn.actions,On=pn.addTask,fn=pn.toggleHideDone,mn=pn.toggleTaskDone,gn=pn.removeTask,kn=pn.setAllDone,vn=pn.fetchExampleTasks,wn=pn.setExampleTasks,yn=pn.fetchExampleTasksError,zn=function(n){return n.tasks},Cn=function(n){return zn(n).tasks},Dn=function(n){return zn(n).hideDone},Tn=function(n){return Cn(n).every((function(n){return n.done}))},Sn=function(n){return Cn(n).every((function(n){return!n.done}))},En=function(n){return 0===Cn(n).length},In=function(n){return!0===zn(n).loading},Ln=hn.reducer,Fn=R.d.input(O||(O=Object(J.a)(["\n  flex-grow: 1;\n  padding: 10px;\n  border: 1px solid #ddd;\n"]))),Pn=function(){var n=Object(sn.b)(),e=Object(P.useState)(""),t=Object(an.a)(e,2),r=t[0],c=t[1],a=Object(P.useRef)(null);return Object(_.jsxs)(dn,{onSubmit:function(e){e.preventDefault(),""!==r.trim()&&(n(On({content:r,done:!1,id:Object(on.c)()})),c(""))},children:[Object(_.jsx)(Fn,{value:r,onChange:function(n){return c(n.target.value)},placeholder:"Co jest do zrobienia?",ref:a,autoFocus:!0}),Object(_.jsx)(ln,{onClick:function(){a.current.focus()},children:"Dodaj zadanie"})]})},Un="szukaj",Nn=R.d.ul(f||(f=Object(J.a)(["\n  padding: 0 20px 20px;\n  margin-top: 20px;\n"]))),Hn=R.d.li(m||(m=Object(J.a)(["\n  list-style-type: none;\n  border-bottom: 1px solid #ddd;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-gap: 10px;\n  align-items: center;\n\n  ","\n"])),(function(n){return n.hidden&&Object(R.c)(g||(g=Object(J.a)(["\n    display:none;\n  "])))})),Jn=R.d.span(k||(k=Object(J.a)(["\n  ","\n"])),(function(n){return n.done&&Object(R.c)(v||(v=Object(J.a)(["\n    text-decoration:line-through;\n  "])))})),Rn=R.d.button(w||(w=Object(J.a)(["\n  height: 30px;\n  width: 30px;\n  background-color: hsl(120, 88%, 27%);\n  color: white;\n  justify-self: center;\n  border: none;\n  transition: 0.4s;\n\n  &:hover {\n  background-color: hsl(120, 88%, 32%);\n  cursor: pointer;\n  }\n\n  &:active {\n    background-color: hsl(120, 88%, 37%);\n  }\n\n  ","\n"])),(function(n){return n.remove&&Object(R.c)(y||(y=Object(J.a)(["\n    background-color: hsl(0, 93%, 58%);\n\n    &:hover {\n      background-color: hsl(0, 93%, 63%);\n    }\n\n    &:active {\n      background-color: hsl(0, 93%, 68%);\n    }\n  "])))})),Wn=Object(R.d)(M.b)(z||(z=Object(J.a)(["\n  text-decoration:none;\n  color: #333;\n  transition: color 0.3s;\n\n  &:hover {\n      color: ",";\n    }\n"])),(function(n){return n.theme.colors.hoverColor})),Mn=function(){var n=Object(A.h)(),e=new URLSearchParams(n.search).get(Un),t=Object(sn.c)((function(n){return function(n,e){var t=Cn(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),r=Object(sn.c)(Dn),c=Object(sn.b)();return Object(_.jsx)(Nn,{children:t.map((function(n){return Object(_.jsxs)(Hn,{hidden:n.done&&r,children:[Object(_.jsx)(Rn,{onClick:function(){return c(mn(n.id))},children:n.done?"\u2714":""}),Object(_.jsx)(Jn,{done:n.done,children:Object(_.jsx)(Wn,{to:"/zadania/".concat(n.id),children:n.content})}),Object(_.jsx)(Rn,{remove:!0,onClick:function(){return c(gn(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},An=R.d.div(C||(C=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-grow: 1;\n\n  @media (max-width:","px) {\n    flex-direction: column;\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.breakpoints.small})),Bn=R.d.button(D||(D=Object(J.a)(["\n  border: none;\n  background-color: inherit;\n  color: ",";\n  padding: 10px 0;\n  margin: 0 0 0 20px;\n  transition: color 0.4s;\n\n  &:hover {\n    color: ",";\n    cursor: pointer;\n  }\n\n  &:disabled {\n    color: #c0c0c5;\n    cursor: not-allowed;\n  }\n\n  @media (max-width:","px) {\n    margin: 0;\n  }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.hoverColor}),(function(n){return n.theme.breakpoints.small})),Zn=function(){var n=Object(sn.c)(In),e=Object(sn.b)();return Object(_.jsx)(An,{children:Object(_.jsx)(Bn,{onClick:function(){return e(vn())},disabled:n,children:n?"\u0141adowanie...":"Pobierz przyk\u0142adowe zadania"})})},Xn=function(){var n=Object(sn.c)(Dn),e=Object(sn.c)(Tn),t=Object(sn.c)(Sn),r=Object(sn.c)(En),c=Object(sn.b)();return Object(_.jsx)(An,{children:!r&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(Bn,{onClick:function(){return c(fn())},disabled:t,children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(_.jsx)(Bn,{onClick:function(){return c(kn())},disabled:e,children:"Uko\u0144cz wszystkie"})]})})},_n=R.d.div(T||(T=Object(J.a)(["\n  display:flex;\n  padding:20px;\n"]))),qn=function(){var n=function(n){var e=Object(A.h)();return new URLSearchParams(e.search).get(n)}(Un),e=function(){var n=Object(A.h)(),e=Object(A.g)(),t=new URLSearchParams(n.search);return function(r){var c=r.key,a=r.value;void 0===a?t.delete(c):t.set(c,a),e.push("".concat(n.pathname,"?").concat(t.toString()))}}();return Object(_.jsx)(_n,{children:Object(_.jsx)(Fn,{placeholder:"Filtruj zadania",value:n||"",onChange:function(n){var t=n.target;e({key:Un,value:""!==t.value.trim()?t.value:void 0})}})})},Gn=function(){return Object(_.jsxs)(Q,{children:[Object(_.jsx)(K,{title:"Lista zada\u0144"}),Object(_.jsx)(q,{title:"Dodaj nowe zadanie",body:Object(_.jsx)(Pn,{}),extraHeaderContent:Object(_.jsx)(Zn,{})}),Object(_.jsx)(q,{title:"Wyszukiwarka",body:Object(_.jsx)(qn,{})}),Object(_.jsx)(q,{title:"Lista zada\u0144",body:Object(_.jsx)(Mn,{}),extraHeaderContent:Object(_.jsx)(Xn,{})})]})},Kn=R.d.div(S||(S=Object(J.a)(["\n  padding: 20px;\n"]))),Qn=function(){var n=Object(A.i)(),e=Object(sn.c)((function(e){return function(n,e){return Cn(n).find((function(n){return n.id===e}))}(e,n.id)}));return Object(_.jsxs)(Q,{children:[Object(_.jsx)(K,{title:"Szczeg\xf3\u0142y zadania"}),Object(_.jsx)(q,{title:e?e.content:"Nie znaleziono zadania",body:Object(_.jsx)(Kn,{children:!!e&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("strong",{children:"Uko\u0144czono:"})," ",e.done?"Tak":"Nie"]})})})]})},Vn=R.d.nav(E||(E=Object(J.a)(["\n  background-color:",";\n"])),(function(n){return n.theme.colors.primaryColor})),Yn=R.d.ul(I||(I=Object(J.a)(["\n  display:flex;\n  padding:16px 0;\n  margin:0;\n  justify-content:center;\n\n  @media (max-width:","px) {\n      flex-direction: column;\n      align-items:center;\n    }\n"])),(function(n){return n.theme.breakpoints.small})),$n=R.d.li(L||(L=Object(J.a)(["\n  list-style:none;\n  margin:6px 20px;\n"]))),ne=Object(R.d)(M.c).attrs((function(){return{activeClassName:"active"}}))(F||(F=Object(J.a)(["\n  text-decoration:none;\n  color:white;\n  \n  &.active{\n    font-weight:700;\n  }\n"]))),ee=function(){return Object(_.jsx)(Vn,{children:Object(_.jsxs)(Yn,{children:[Object(_.jsx)($n,{children:Object(_.jsx)(ne,{to:"/zadania",children:"Zadania"})}),Object(_.jsx)($n,{children:Object(_.jsx)(ne,{to:"/autor",children:"O autorze"})})]})})},te=function(){return Object(_.jsxs)(M.a,{children:[Object(_.jsx)(ee,{}),Object(_.jsxs)(A.d,{children:[Object(_.jsx)(A.b,{path:"/zadania/:id",children:Object(_.jsx)(Qn,{})}),Object(_.jsx)(A.b,{path:"/zadania",children:Object(_.jsx)(Gn,{})}),Object(_.jsx)(A.b,{path:"/autor",children:Object(_.jsx)(cn,{})}),Object(_.jsx)(A.b,{path:"/",children:Object(_.jsx)(A.a,{to:"/zadania"})})]})]})},re=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))},ce=t(36),ae=t(11),oe=t.n(ae),ie=t(13),se=t(20),de=t(35),le=function(){var n=Object(de.a)(oe.a.mark((function n(){var e;return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/to-do-list-react/exampleTasks.json");case 2:if((e=n.sent).ok){n.next=5;break}throw new Error(e.statusText);case 5:return n.next=8,e.json();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ue=oe.a.mark(xe),je=oe.a.mark(he),be=oe.a.mark(pe);function xe(){var n,e;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ie.c)(1e3);case 3:return t.next=5,Object(ie.b)(le);case 5:return n=t.sent,e=n.map((function(n){return Object(se.a)(Object(se.a)({},n),{},{id:Object(on.c)()})})),t.next=9,Object(ie.d)(wn(e));case 9:t.next=17;break;case 11:return t.prev=11,t.t0=t.catch(0),t.next=15,Object(ie.d)(yn());case 15:return t.next=17,Object(ie.b)(alert,"Co\u015b posz\u0142o nie tak");case 17:case"end":return t.stop()}}),ue,null,[[0,11]])}function he(){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.e)(Cn);case 2:return n=e.sent,e.next=5,Object(ie.b)(xn,n);case 5:case"end":return e.stop()}}),je)}function pe(){return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ie.g)(vn.type,xe);case 2:return n.next=4,Object(ie.f)("*",he);case 4:case"end":return n.stop()}}),be)}var Oe=oe.a.mark(fe);function fe(){return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ie.a)([pe()]);case 2:case"end":return n.stop()}}),Oe)}var me=Object(ce.a)(),ge=Object(on.a)({reducer:{tasks:Ln},middleware:[me]});me.run(fe);var ke=ge;H.a.render(Object(_.jsx)(U.a.StrictMode,{children:Object(_.jsx)(sn.a,{store:ke,children:Object(_.jsxs)(R.a,{theme:{colors:{primaryColor:"hsl(180, 100%, 25%)",hoverColor:"hsl(180, 100%, 30%)",activeColor:"hsl(180, 100%, 35%)"},breakpoints:{medium:768,small:540}},children:[Object(_.jsx)(W,{}),Object(_.jsx)(te,{})]})})}),document.getElementById("root")),re()}},[[55,1,2]]]);
//# sourceMappingURL=main.edceac4d.chunk.js.map