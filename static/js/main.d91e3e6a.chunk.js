(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{43:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,s,d,u,l,b,j,x,p,f,h,m,O,g,k=t(1),v=t.n(k),w=t(18),y=t.n(w),C=t(6),D=t(5),T=Object(D.b)(r||(r=Object(C.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: #eee;\n    margin: 0 20px;\n    word-break: break-all;\n  }\n"]))),z=t(29),E=t(11),S=t(7),F=D.d.form(o||(o=Object(C.a)(["\n  display: flex;\n  padding: 20px;\n\n  @media (max-width:","px) {\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.breakpoints.medium})),I=D.d.input(c||(c=Object(C.a)(["\n  flex-grow: 1;\n  padding: 10px;\n  border: 1px solid #ddd;\n"]))),H=D.d.button(a||(a=Object(C.a)(["\n  background-color: ",";\n  color: white;\n  border: none;\n  padding: 10px;\n  margin-left: 20px;\n  transition: background-color 0.3s, transform 0.3s;\n\n  @media (max-width:","px) {\n    margin-left: 0;\n    margin-top: 10px;\n  }\n\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n    transform: scale(1.1);\n\n    @media (max-width:","px) {\n      transform: scale(1.05);\n    }\n  }\n\n  &:active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.breakpoints.medium}),(function(n){return n.theme.colors.hoverColor}),(function(n){return n.theme.breakpoints.medium}),(function(n){return n.theme.colors.activeColor})),J=t(28),L=t(25),P="tasks",A=function(n){return localStorage.setItem(P,JSON.stringify(n))},B=Object(E.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(P))||[],hideDone:!1,loading:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(L.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(o){r.e(o)}finally{r.f()}},fetchExampleTasks:function(n){n.loading=!0},setExampleTasks:function(n,e){var t,r=e.payload;(t=n.tasks).push.apply(t,Object(J.a)(r)),n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1}}}),M=B.actions,N=M.addTask,U=M.toggleHideDone,R=M.toggleTaskDone,q=M.removeTask,G=M.setAllDone,K=M.fetchExampleTasks,Q=M.setExampleTasks,V=M.fetchExampleTasksError,W=function(n){return n.tasks},X=function(n){return W(n).tasks},Y=function(n){return W(n).hideDone},Z=function(n){return X(n).every((function(n){return n.done}))},$=function(n){return X(n).every((function(n){return!n.done}))},_=function(n){return 0===X(n).length},nn=function(n){return!0===W(n).loading},en=B.reducer,tn=t(3),rn=function(){var n=Object(S.b)(),e=Object(k.useState)(""),t=Object(z.a)(e,2),r=t[0],o=t[1],c=Object(k.useRef)(null);return Object(tn.jsxs)(F,{onSubmit:function(e){e.preventDefault(),""!==r.trim()&&(n(N({content:r,done:!1,id:Object(E.c)()})),o(""))},children:[Object(tn.jsx)(I,{value:r,onChange:function(n){return o(n.target.value)},placeholder:"Co jest do zrobienia?",ref:c,autoFocus:!0}),Object(tn.jsx)(H,{onClick:function(){c.current.focus()},children:"Dodaj zadanie"})]})},on=D.d.ul(i||(i=Object(C.a)(["\n  padding: 0 20px 20px;\n  margin-top: 20px;\n"]))),cn=D.d.li(s||(s=Object(C.a)(["\n  list-style-type: none;\n  border-bottom: 1px solid #ddd;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-gap: 10px;\n  align-items: center;\n\n  ","\n"])),(function(n){return n.hidden&&Object(D.c)(d||(d=Object(C.a)(["\n    display:none;\n  "])))})),an=D.d.span(u||(u=Object(C.a)(["\n  ","\n"])),(function(n){return n.done&&Object(D.c)(l||(l=Object(C.a)(["\n    text-decoration:line-through;\n  "])))})),sn=D.d.button(b||(b=Object(C.a)(["\n  height: 30px;\n  width: 30px;\n  background-color: hsl(120, 88%, 27%);\n  color: white;\n  justify-self: center;\n  border: none;\n  transition: 0.4s;\n\n  &:hover {\n  background-color: hsl(120, 88%, 32%);\n  cursor: pointer;\n  }\n\n  &:active {\n    background-color: hsl(120, 88%, 37%);\n  }\n\n  ","\n"])),(function(n){return n.remove&&Object(D.c)(j||(j=Object(C.a)(["\n    background-color: hsl(0, 93%, 58%);\n\n    &:hover {\n      background-color: hsl(0, 93%, 63%);\n    }\n\n    &:active {\n      background-color: hsl(0, 93%, 68%);\n    }\n  "])))})),dn=function(){var n=Object(S.c)(X),e=Object(S.c)(Y),t=Object(S.b)();return Object(tn.jsx)(on,{children:n.map((function(n){return Object(tn.jsxs)(cn,{hidden:n.done&&e,children:[Object(tn.jsx)(sn,{onClick:function(){return t(R(n.id))},children:n.done?"\u2714":""}),Object(tn.jsx)(an,{done:n.done,children:n.content}),Object(tn.jsx)(sn,{remove:!0,onClick:function(){return t(q(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},un=D.d.section(x||(x=Object(C.a)(["\n  background-color: white;\n  box-shadow: 1px -1px 5px 0px #DDDDDD;\n"]))),ln=D.d.header(p||(p=Object(C.a)(["\n  display: flex;\n  border-bottom: 1px solid #ddd;\n  margin-top: 10px;\n  padding: 0 20px;\n\n  @media (max-width:","px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.breakpoints.small})),bn=D.d.h2(f||(f=Object(C.a)(["\n  padding: 20px 0;\n  margin: 0;\n  font-size: 20px;\n"]))),jn=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(tn.jsxs)(un,{children:[Object(tn.jsxs)(ln,{children:[Object(tn.jsx)(bn,{children:e}),r]}),t]})},xn=D.d.h1(h||(h=Object(C.a)(["\n  margin: 30px 0 20px;\n"]))),pn=function(n){var e=n.title;return Object(tn.jsx)("header",{children:Object(tn.jsx)(xn,{children:e})})},fn=D.d.main(m||(m=Object(C.a)(["\n  max-width: 850px;\n  margin: 0 auto;\n"]))),hn=D.d.div(O||(O=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-grow: 1;\n\n  @media (max-width:","px) {\n    flex-direction: column;\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.breakpoints.small})),mn=D.d.button(g||(g=Object(C.a)(["\n  border: none;\n  background-color: inherit;\n  color: ",";\n  padding: 10px 0;\n  margin: 0 0 0 20px;\n  transition: color 0.4s;\n\n  &:hover {\n    color: ",";\n    cursor: pointer;\n  }\n\n  &:disabled {\n    color: #c0c0c5;\n  }\n\n  @media (max-width:","px) {\n    margin: 0;\n  }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.hoverColor}),(function(n){return n.theme.breakpoints.small})),On=function(){var n=Object(S.c)(nn),e=Object(S.b)();return Object(tn.jsx)(hn,{children:Object(tn.jsx)(mn,{onClick:function(){return e(K())},disabled:n,children:n?"\u0141adowanie...":"Pobierz przyk\u0142adowe zadania"})})},gn=function(){var n=Object(S.c)(Y),e=Object(S.c)(Z),t=Object(S.c)($),r=Object(S.c)(_),o=Object(S.b)();return Object(tn.jsx)(hn,{children:!r&&Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsxs)(mn,{onClick:function(){return o(U())},disabled:t,children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(tn.jsx)(mn,{onClick:function(){return o(G())},disabled:e,children:"Uko\u0144cz wszystkie"})]})})},kn=function(){return Object(tn.jsxs)(fn,{children:[Object(tn.jsx)(pn,{title:"Lista zada\u0144"}),Object(tn.jsx)(jn,{title:"Dodaj nowe zadanie",body:Object(tn.jsx)(rn,{}),extraHeaderContent:Object(tn.jsx)(On,{})}),Object(tn.jsx)(jn,{title:"Lista zada\u0144",body:Object(tn.jsx)(dn,{}),extraHeaderContent:Object(tn.jsx)(gn,{})})]})},vn=function(){return Object(tn.jsx)(kn,{})},wn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))},yn=t(27),Cn=t(8),Dn=t.n(Cn),Tn=t(10),zn=t(15),En=t(26),Sn=function(){var n=Object(En.a)(Dn.a.mark((function n(){var e;return Dn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/to-do-list-react/exampleTasks.json");case 2:if((e=n.sent).ok){n.next=5;break}throw new Error(e.statusText);case 5:return n.next=8,e.json();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Fn=Dn.a.mark(Jn),In=Dn.a.mark(Ln),Hn=Dn.a.mark(Pn);function Jn(){var n,e;return Dn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Tn.c)(1e3);case 3:return t.next=5,Object(Tn.b)(Sn);case 5:return n=t.sent,e=n.map((function(n){return Object(zn.a)(Object(zn.a)({},n),{},{id:Object(E.c)()})})),t.next=9,Object(Tn.d)(Q(e));case 9:t.next=17;break;case 11:return t.prev=11,t.t0=t.catch(0),t.next=15,Object(Tn.d)(V());case 15:return t.next=17,Object(Tn.b)(alert,"Co\u015b posz\u0142o nie tak");case 17:case"end":return t.stop()}}),Fn,null,[[0,11]])}function Ln(){var n;return Dn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Tn.e)(X);case 2:return n=e.sent,e.next=5,Object(Tn.b)(A,n);case 5:case"end":return e.stop()}}),In)}function Pn(){return Dn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Tn.g)(K.type,Jn);case 2:return n.next=4,Object(Tn.f)("*",Ln);case 4:case"end":return n.stop()}}),Hn)}var An=Dn.a.mark(Bn);function Bn(){return Dn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Tn.a)([Pn()]);case 2:case"end":return n.stop()}}),An)}var Mn=Object(yn.a)(),Nn=Object(E.a)({reducer:{tasks:en},middleware:[Mn]});Mn.run(Bn);var Un=Nn;y.a.render(Object(tn.jsx)(v.a.StrictMode,{children:Object(tn.jsx)(S.a,{store:Un,children:Object(tn.jsxs)(D.a,{theme:{colors:{primaryColor:"hsl(180, 100%, 25%)",hoverColor:"hsl(180, 100%, 30%)",activeColor:"hsl(180, 100%, 35%)"},breakpoints:{medium:768,small:540}},children:[Object(tn.jsx)(T,{}),Object(tn.jsx)(vn,{})]})})}),document.getElementById("root")),wn()}},[[43,1,2]]]);
//# sourceMappingURL=main.d91e3e6a.chunk.js.map