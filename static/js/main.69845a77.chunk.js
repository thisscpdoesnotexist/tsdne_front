(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{111:function(t,e,n){},119:function(t,e){},121:function(t,e){},131:function(t,e,n){},133:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),a=n(11),i=n.n(a),r=(n(111),n(78),n(20)),o=n(175),l=(n(79),n(88)),j=n(89),h=n(97),b=n(96),d=n(179),u=n(180),x=n(182),O=n(181),p=n(59),f=n(2),m=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).state={n_votes:t.votes,hasClicked:!1},c}return Object(j.a)(n,[{key:"handleClick",value:function(t){fetch("https://thisscpdoesnotexist.pythonanywhere.com/vote/?n="+t.toString()+"&ip="+Math.floor(1e4*Math.random()).toString()),this.setState((function(t){return{n_votes:t.n_votes+1,hasClicked:!0}}))}},{key:"render",value:function(){var t=this;return Object(f.jsx)(o.a,{item:!0,xs:12,sm:6,md:3,children:Object(f.jsx)(d.a,{children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)(p.a,{bg:"Keter"===this.props.scpClass?"danger":"Euclid"===this.props.scpClass?"warning":"Thaumiel"===this.props.scpClass?"dark":"success",children:this.props.scpClass}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),this.props.prompt,Object(f.jsx)(O.a,{children:Object(f.jsxs)(x.a,{size:"small",onClick:function(){return t.handleClick(t.props.idx)},disabled:this.state.hasClicked,children:[Object(f.jsx)("strong",{children:"Vote \xa0"})," ",this.state.n_votes]})})]})})})}}]),n}(c.Component),v=n(190),g=n(194),C=n(186),S=n(184),y=n(185),k=n(183),w=n(193),_=n(191),P=n(195);function I(t){var e=Object(c.useState)(t.starting_value),n=Object(r.a)(e,2),s=n[0],a=n[1];return Object(f.jsx)("textarea",{type:"text",name:"user_prompt",value:s,fullWidth:!0,maxlength:300,onChange:function(e){e.target.value.startsWith(t.starting_value)&&(a(e.target.value),t.onValueChange(e))}})}function L(t){var e=s.a.useState(t.value),n=Object(r.a)(e,2),c=n[0],a=n[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(P.a,{id:"scpClassLabel",children:"Classe"}),Object(f.jsxs)(_.a,{labelId:"SCP-Class",id:"scpClassSelect",value:c,onChange:function(e){a(e.target.value),t.onClassChange(e)},children:[Object(f.jsx)(w.a,{value:0,children:"Safe"}),Object(f.jsx)(w.a,{value:1,children:"Euclide"}),Object(f.jsx)(w.a,{value:2,children:"Keter"}),Object(f.jsx)(w.a,{value:3,children:"Thomiel"})]})]})}function E(t){var e=s.a.useState(!1),n=Object(r.a)(e,2),c=n[0],a=n[1],i=s.a.useState(""),o=Object(r.a)(i,2),l=o[0],j=o[1],h=s.a.useState(0),b=Object(r.a)(h,2),d=b[0],u=b[1],O=function(){a(!1)};return Object(f.jsxs)("div",{children:[Object(f.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){a(!0)},children:Object(f.jsx)("h5",{children:"Submit a prompt"})}),Object(f.jsxs)(g.a,{fullWidth:!0,maxWidth:"sm",open:c,onClose:O,"aria-labelledby":"form-dialog-title",children:[Object(f.jsx)(k.a,{id:"form-dialog-title",children:"Submit your SCP idea !"}),Object(f.jsxs)(S.a,{children:[Object(f.jsx)(y.a,{children:"Describe your SCP :"}),Object(f.jsx)(I,{starting_value:"SCP-"+t.curscp+" is ",onValueChange:function(t){j(t.target.value)}}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(L,{onClassChange:function(t){console.log(t.target.value),u(t.target.value)},value:d})]}),Object(f.jsxs)(C.a,{children:[Object(f.jsx)(x.a,{onClick:O,color:"primary",children:"Cancel"}),Object(f.jsx)(x.a,{onClick:function(){var t="https://thisscpdoesnotexist.pythonanywhere.com/add_prompt/?prompt="+l.substring(11)+"&class="+d.toString()+"&ip="+Math.floor(100*Math.random()).toString();fetch(t),console.log("fetched"),O()},color:"primary",children:"Submit"})]})]})]})}function N(t){var e=t.pollingItems.sort((function(t,e){return e.votes-t.votes})).map((function(t){return Object(f.jsx)(m,{prompt:t.prompt,scpClass:t.scpClass,votes:t.votes,idx:t.index})}));return Object(f.jsx)("div",{className:"poll-list",children:Object(f.jsx)(o.a,{container:!0,spacing:3,children:e})})}function T(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1];return console.log("coucou"),Object(c.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/last_scp_desc/").then((function(t){return t.text()})).then((function(t){s(t)}))}),[]),Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})}var D=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)(""),i=Object(r.a)(a,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/get_poll/").then((function(t){return t.json()})).then((function(t){s(t.poll)})),fetch("https://thisscpdoesnotexist.pythonanywhere.com/current_scp_number/").then((function(t){return t.json()})).then((function(t){l(t)}))}),[]),Object(f.jsxs)("div",{className:"CurrentPoll",children:[Object(f.jsx)("strong",{children:"Current Poll :"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(N,{pollingItems:n}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(E,{className:"openDialogBtn",curscp:o}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("strong",{children:"Last SCP :"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(v.a.Item,{children:Object(f.jsx)(v.a.Body,{children:Object(f.jsx)(T,{})})})]})},A=n(70),M=n.n(A),B=n(92),G=n(93);function W(t){return fetch("https://raw.githubusercontent.com/thisscpdoesnotexist/SCP-GPT_db/master/"+t).then((function(t){return t.text()})).then((function(t){return t}))}function F(t){return void 0===t.data?"Loading...":t.data.map((function(t,e){return Object(f.jsxs)(v.a.Item,{eventKey:e.toString(),children:[Object(f.jsxs)(v.a.Header,{children:[Object(f.jsxs)("strong",{children:[t.prompt," \xa0"]}),Object(f.jsx)(p.a,{bg:"Keter"===t.class?"danger":"Euclid"===t.class?"warning":"success",children:t.class})]}),Object(f.jsxs)(v.a.Body,{children:[Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:t.desc}}),";"]})]})}))}var H=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],s=e[1];return Object(c.useEffect)(function(){var t=Object(B.a)(M.a.mark((function t(){var e,n,c,a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W("scp_list.csv");case 2:e=t.sent,3!=(n=Object(G.a)(e)).data[n.data.length-1].length&&n.data.pop(),c=[],a=0;case 7:if(!(a<n.data.length)){t.next=19;break}return t.t0=c,t.t1=n.data[a][0],t.t2=n.data[a][1],t.next=13,W(n.data[a][2]);case 13:t.t3=t.sent,t.t4={prompt:t.t1,class:t.t2,desc:t.t3},t.t0.push.call(t.t0,t.t4);case 16:a++,t.next=7;break;case 19:s(c);case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),[]),Object(f.jsxs)("div",{className:"ReadRawGithub",children:[Object(f.jsx)("h2",{children:" List of Past SCPs"}),Object(f.jsx)(v.a,{children:Object(f.jsx)(F,{data:n})})]})},K=(n(130),n(131),n(24)),R=n(13);Object(R.f)((function(t){return Object(f.jsx)("div",{className:"navigation",children:Object(f.jsx)("nav",{class:"navbar navbar-expand navbar-dark bg-dark",children:Object(f.jsxs)("div",{class:"container",children:[Object(f.jsx)(K.b,{class:"navbar-brand",to:"/",children:"This SCP Does Not Exist !"}),Object(f.jsx)("div",{children:Object(f.jsxs)("ul",{class:"navbar-nav ml-auto",children:[Object(f.jsx)("li",{class:"nav-item  ".concat("/"===t.location.pathname?"active":""),children:Object(f.jsx)(K.b,{class:"nav-link",to:"/",children:"Poll"})}),Object(f.jsx)("li",{class:"nav-item  ".concat("/list"===t.location.pathname?"active":""),children:Object(f.jsx)(K.b,{class:"nav-link",to:"/list",children:"List SCPs"})}),Object(f.jsx)("li",{class:"nav-item  ".concat("/about"===t.location.pathname?"active":""),children:Object(f.jsx)(K.b,{class:"nav-link",to:"/about",children:"About"})})]})})]})})})}));var V=function(){return Object(f.jsxs)("div",{className:"App",style:{textAlign:"left",backgroundColor:"white"},children:[Object(f.jsx)("h2",{children:"Authors"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"Ruben Gr\xe8s"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:" Looking for a datascientist job in Germany"}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://www.linkedin.com/in/ruben-gres-484930158/",children:"LinkedIn"})})]}),Object(f.jsx)("br",{}),Object(f.jsx)("li",{children:"Philippe Saad\xe9"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:" Looking for a phd in Western Europe"}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://www.linkedin.com/in/philippe-saad%C3%A9-26972b149/",children:"LinkedIn"})})]})]})]})},J=n(187),z=n(188),q=n(189),Q=n(100),U=n(95),X=n.p+"static/media/favicon.9f756375.ico",Y=Object(J.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function Z(t){console.log(t.time-Date.now()),console.log(Date.now()),console.log(t.time);var e=t.time-Date.now();return console.log(e),Object(f.jsx)("h2",{children:Object(f.jsx)("h1",{children:Object(f.jsx)(U.a,{date:t.time,daysInHours:!0},"MyTimer")})})}function $(){var t=Object(c.useState)(Date.now()+36e5),e=Object(r.a)(t,2),n=e[0],s=e[1];Object(c.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/next_time/").then((function(t){return t.text()})).then((function(t){console.log(t),s(parseInt(t))}))}),[]);var a=Y();return Object(f.jsx)("div",{className:a.root,children:Object(f.jsx)(z.a,{position:"static",children:Object(f.jsx)(q.a,{children:Object(f.jsxs)(o.a,{container:!0,spacing:1,style:{display:"flex",alignItems:"center"},children:[Object(f.jsxs)(o.a,{item:!0,xs:12,sm:4,children:[Object(f.jsx)("img",{src:X}),Object(f.jsx)(x.a,{color:"inherit",children:Object(f.jsx)(Q.a,{variant:"h6",className:a.title,children:"This SCP Does Not Exist"})})]}),Object(f.jsx)(o.a,{item:!0,xs:12,sm:4,children:Object(f.jsx)(Z,{time:n})}),Object(f.jsx)(o.a,{item:!0,xs:0,sm:1,children:" "}),Object(f.jsx)(o.a,{item:!0,xs:12,sm:1,children:Object(f.jsx)(K.b,{to:"/",children:Object(f.jsx)(x.a,{color:"inherit",children:Object(f.jsx)("strong",{children:"Poll"})})})}),Object(f.jsx)(o.a,{item:!0,xs:12,sm:1,children:Object(f.jsx)(K.b,{to:"/list",children:Object(f.jsx)(x.a,{color:"inherit",children:Object(f.jsx)("strong",{children:"Archives"})})})}),Object(f.jsx)(o.a,{item:!0,xs:12,sm:1,children:Object(f.jsx)(K.b,{to:"/about",children:Object(f.jsx)(x.a,{color:"inherit",children:Object(f.jsx)("strong",{children:"About"})})})})]})})})})}var tt=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(K.a,{children:[Object(f.jsx)($,{}),Object(f.jsx)("br",{}),Object(f.jsxs)(R.c,{children:[Object(f.jsx)(R.a,{path:"/",exact:!0,component:D}),Object(f.jsx)(R.a,{path:"/list",exact:!0,component:H}),Object(f.jsx)(R.a,{path:"/about",exact:!0,component:V}),Object(f.jsx)(R.a,{path:"/*",exact:!0,component:D})]})]})})},et=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),a(t),i(t)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(tt,{})}),document.getElementById("root")),et()},78:function(t,e,n){},79:function(t,e,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.69845a77.chunk.js.map