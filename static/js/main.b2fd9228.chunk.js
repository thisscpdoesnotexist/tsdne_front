(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{111:function(e,t,c){},119:function(e,t){},121:function(e,t){},131:function(e,t,c){},133:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(11),i=c.n(a),r=(c(111),c(78),c(20)),l=c(175),j=(c(79),c(88)),o=c(89),h=c(97),b=c(96),d=c(179),u=c(180),x=c(182),O=c(181),p=c(59),m=c(2),f=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(j.a)(this,c),(n=t.call(this,e)).state={n_votes:e.votes,hasClicked:!1},n}return Object(o.a)(c,[{key:"handleClick",value:function(e){fetch("https://thisscpdoesnotexist.pythonanywhere.com/vote/?n="+e.toString()+"&ip="+Math.floor(1e4*Math.random()).toString()),this.setState((function(e){return{n_votes:e.n_votes+1,hasClicked:!0}}))}},{key:"render",value:function(){var e=this;return Object(m.jsx)(l.a,{item:!0,xs:12,sm:6,md:3,children:Object(m.jsx)(d.a,{children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(p.a,{bg:"Keter"===this.props.scpClass?"danger":"Euclid"===this.props.scpClass?"warning":"Thaumiel"===this.props.scpClass?"dark":"success",children:this.props.scpClass}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),this.props.prompt,Object(m.jsx)(O.a,{children:Object(m.jsxs)(x.a,{size:"small",onClick:function(){return e.handleClick(e.props.idx)},disabled:this.state.hasClicked,children:[Object(m.jsx)("strong",{children:"Vote \xa0"})," ",this.state.n_votes]})})]})})})}}]),c}(n.Component),v=c(190),g=c(194),C=c(186),S=c(184),y=c(185),k=c(183),w=c(193),P=c(191),_=c(195);function I(e){var t=Object(n.useState)(e.starting_value),c=Object(r.a)(t,2),s=c[0],a=c[1];return Object(m.jsx)("textarea",{type:"text",name:"user_prompt",value:s,fullWidth:!0,maxlength:300,onChange:function(t){t.target.value.startsWith(e.starting_value)&&(a(t.target.value),e.onValueChange(t))}})}function T(e){var t=s.a.useState(e.value),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(_.a,{id:"scpClassLabel",children:"Classe"}),Object(m.jsxs)(P.a,{labelId:"SCP-Class",id:"scpClassSelect",value:n,onChange:function(t){a(t.target.value),e.onClassChange(t)},children:[Object(m.jsx)(w.a,{value:0,children:"Safe"}),Object(m.jsx)(w.a,{value:1,children:"Euclide"}),Object(m.jsx)(w.a,{value:2,children:"Keter"}),Object(m.jsx)(w.a,{value:3,children:"Thomiel"})]})]})}function G(e){var t=s.a.useState(!1),c=Object(r.a)(t,2),n=c[0],a=c[1],i=s.a.useState(""),l=Object(r.a)(i,2),j=l[0],o=l[1],h=s.a.useState(0),b=Object(r.a)(h,2),d=b[0],u=b[1],O=function(){a(!1)};return Object(m.jsxs)("div",{children:[Object(m.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){a(!0)},children:Object(m.jsx)("h5",{children:"Submit a prompt"})}),Object(m.jsxs)(g.a,{fullWidth:!0,maxWidth:"sm",open:n,onClose:O,"aria-labelledby":"form-dialog-title",children:[Object(m.jsx)(k.a,{id:"form-dialog-title",children:"Submit your SCP idea !"}),Object(m.jsxs)(S.a,{children:[Object(m.jsx)(y.a,{children:"Describe your SCP :"}),Object(m.jsx)(I,{starting_value:"SCP-"+e.curscp+" is ",onValueChange:function(e){o(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(T,{onClassChange:function(e){console.log(e.target.value),u(e.target.value)},value:d})]}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(x.a,{onClick:O,color:"primary",children:"Cancel"}),Object(m.jsx)(x.a,{onClick:function(){var e="https://thisscpdoesnotexist.pythonanywhere.com/add_prompt/?prompt="+j.substring(11)+"&class="+d.toString()+"&ip="+Math.floor(100*Math.random()).toString();fetch(e),console.log("fetched"),O()},color:"primary",children:"Submit"})]})]})]})}function L(e){var t=e.pollingItems.sort((function(e,t){return t.votes-e.votes})).map((function(e){return Object(m.jsx)(f,{prompt:e.prompt,scpClass:e.scpClass,votes:e.votes,idx:e.index})}));return Object(m.jsx)("div",{className:"poll-list",children:Object(m.jsx)(l.a,{container:!0,spacing:3,children:t})})}function E(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1];return console.log("coucou"),Object(n.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/last_scp_desc/").then((function(e){return e.text()})).then((function(e){s(e)}))}),[]),Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})}var N=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),l=i[0],j=i[1];return Object(n.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/get_poll/").then((function(e){return e.json()})).then((function(e){s(e.poll)})),fetch("https://thisscpdoesnotexist.pythonanywhere.com/current_scp_number/").then((function(e){return e.json()})).then((function(e){j(e)}))}),[]),Object(m.jsxs)("div",{className:"CurrentPoll",children:[Object(m.jsx)("strong",{children:"Current Poll :"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(L,{pollingItems:c}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(G,{className:"openDialogBtn",curscp:l}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("strong",{children:"Last SCP :"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(v.a.Item,{children:Object(m.jsx)(v.a.Body,{children:Object(m.jsx)(E,{})})})]})},A=c(70),D=c.n(A),M=c(92),B=c(93);function H(e){return fetch("https://raw.githubusercontent.com/thisscpdoesnotexist/SCP-GPT_db/master/"+e).then((function(e){return e.text()})).then((function(e){return e}))}function W(e){return void 0===e.data?"Loading...":e.data.map((function(e,t){return Object(m.jsxs)(v.a.Item,{eventKey:t.toString(),children:[Object(m.jsxs)(v.a.Header,{children:[Object(m.jsxs)("strong",{children:[e.prompt," \xa0"]}),Object(m.jsx)(p.a,{bg:"Keter"===e.class?"danger":"Euclid"===e.class?"warning":"success",children:e.class})]}),Object(m.jsxs)(v.a.Body,{children:[Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:e.desc}}),";"]})]})}))}var R=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)(function(){var e=Object(M.a)(D.a.mark((function e(){var t,c,n,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("scp_list.csv");case 2:t=e.sent,3!=(c=Object(B.a)(t)).data[c.data.length-1].length&&c.data.pop(),n=[],a=0;case 7:if(!(a<c.data.length)){e.next=19;break}return e.t0=n,e.t1=c.data[a][0],e.t2=c.data[a][1],e.next=13,H(c.data[a][2]);case 13:e.t3=e.sent,e.t4={prompt:e.t1,class:e.t2,desc:e.t3},e.t0.push.call(e.t0,e.t4);case 16:a++,e.next=7;break;case 19:s(n);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[]),Object(m.jsxs)("div",{className:"ReadRawGithub",children:[Object(m.jsx)("h2",{children:" List of Past SCPs"}),Object(m.jsx)(v.a,{children:Object(m.jsx)(W,{data:c})})]})},F=(c(130),c(131),c(24)),K=c(13);Object(K.f)((function(e){return Object(m.jsx)("div",{className:"navigation",children:Object(m.jsx)("nav",{class:"navbar navbar-expand navbar-dark bg-dark",children:Object(m.jsxs)("div",{class:"container",children:[Object(m.jsx)(F.b,{class:"navbar-brand",to:"/",children:"This SCP Does Not Exist !"}),Object(m.jsx)("div",{children:Object(m.jsxs)("ul",{class:"navbar-nav ml-auto",children:[Object(m.jsx)("li",{class:"nav-item  ".concat("/"===e.location.pathname?"active":""),children:Object(m.jsx)(F.b,{class:"nav-link",to:"/",children:"Poll"})}),Object(m.jsx)("li",{class:"nav-item  ".concat("/list"===e.location.pathname?"active":""),children:Object(m.jsx)(F.b,{class:"nav-link",to:"/list",children:"List SCPs"})}),Object(m.jsx)("li",{class:"nav-item  ".concat("/about"===e.location.pathname?"active":""),children:Object(m.jsx)(F.b,{class:"nav-link",to:"/about",children:"About"})})]})})]})})})}));var V=function(){return Object(m.jsxs)("div",{className:"App",style:{textAlign:"left",backgroundColor:"white"},children:[Object(m.jsx)("center",{children:Object(m.jsx)("h1",{children:"About"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h3",{children:"What is this website ?"}),Object(m.jsx)("br",{}),"This website uses GPT-3 by OpenAI to generate SCP. Generative Pre-trained Transformer 3 (GPT-3) is an autoregressive language model that uses deep learning to produce human-like text. GPT-3's full version has a capacity of 175 billion machine learning parameters.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h3",{children:"Authors :"}),Object(m.jsx)("br",{}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Ruben Gres"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/ruben-gres-484930158/",children:"LinkedIn"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://github.com/RubenGres",children:"GitHub"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://ohmlet.itch.io/",children:"Itch.io"})})]}),Object(m.jsx)("br",{}),Object(m.jsx)("li",{children:"Philippe Saad\xe9"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:" Looking for a phd in Western Europe"}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/philippe-saad%C3%A9-26972b149/",children:"LinkedIn"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://github.com/PhilSad",children:"GitHub"})})]})]})]})},J=c(187),z=c(188),q=c(189),Q=c(100),U=c(95),X=c.p+"static/media/favicon.9f756375.ico",Y=Object(J.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Z(e){console.log(e.time-Date.now()),console.log(Date.now()),console.log(e.time);var t=e.time-Date.now();return console.log(t),Object(m.jsx)("h2",{children:Object(m.jsx)("h1",{children:Object(m.jsx)(U.a,{date:e.time,daysInHours:!0},"MyTimer")})})}function $(){var e=Object(n.useState)(Date.now()+36e5),t=Object(r.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/next_time/").then((function(e){return e.text()})).then((function(e){console.log(e),s(parseInt(e))}))}),[]);var a=Y();return Object(m.jsx)("div",{className:a.root,children:Object(m.jsx)(z.a,{position:"static",children:Object(m.jsx)(q.a,{children:Object(m.jsxs)(l.a,{container:!0,spacing:1,style:{display:"flex",alignItems:"center"},children:[Object(m.jsxs)(l.a,{item:!0,xs:12,sm:4,children:[Object(m.jsx)("img",{src:X}),Object(m.jsx)(x.a,{color:"inherit",children:Object(m.jsx)(Q.a,{variant:"h6",className:a.title,children:"This SCP Does Not Exist"})})]}),Object(m.jsx)(l.a,{item:!0,xs:12,sm:4,children:Object(m.jsx)(Z,{time:c})}),Object(m.jsx)(l.a,{item:!0,xs:0,sm:1,children:" "}),Object(m.jsx)(l.a,{item:!0,xs:12,sm:1,children:Object(m.jsx)(F.b,{to:"/",children:Object(m.jsx)(x.a,{color:"inherit",children:Object(m.jsx)("strong",{children:"Poll"})})})}),Object(m.jsx)(l.a,{item:!0,xs:12,sm:1,children:Object(m.jsx)(F.b,{to:"/list",children:Object(m.jsx)(x.a,{color:"inherit",children:Object(m.jsx)("strong",{children:"Archives"})})})}),Object(m.jsx)(l.a,{item:!0,xs:12,sm:1,children:Object(m.jsx)(F.b,{to:"/about",children:Object(m.jsx)(x.a,{color:"inherit",children:Object(m.jsx)("strong",{children:"About"})})})})]})})})})}var ee=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(F.a,{children:[Object(m.jsx)($,{}),Object(m.jsx)("br",{}),Object(m.jsxs)(K.c,{children:[Object(m.jsx)(K.a,{path:"/",exact:!0,component:N}),Object(m.jsx)(K.a,{path:"/list",exact:!0,component:R}),Object(m.jsx)(K.a,{path:"/about",exact:!0,component:V}),Object(m.jsx)(K.a,{path:"/*",exact:!0,component:N})]})]})})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,196)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(ee,{})}),document.getElementById("root")),te()},78:function(e,t,c){},79:function(e,t,c){}},[[133,1,2]]]);
//# sourceMappingURL=main.b2fd9228.chunk.js.map