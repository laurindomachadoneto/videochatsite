(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t){},133:function(e,t){},151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(9),i=a.n(c),r=a(22),l=a(192),s=a(187),o=a(182),d=a(185),j=a(153),u=a(19),b=a(82),m=a(54),p=a.n(m),x=a(4),O=Object(n.createContext)(),h=Object(b.io)("https://video-chat-app-sk.herokuapp.com"),f=new Audio("bell.mp3");var g=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(u.a)(a,2),i=c[0],r=c[1],l=Object(n.useState)(!1),s=Object(u.a)(l,2),o=s[0],d=s[1],j=Object(n.useState)(),b=Object(u.a)(j,2),m=b[0],g=b[1],v=Object(n.useState)(""),C=Object(u.a)(v,2),w=C[0],y=C[1],N=Object(n.useState)({}),k=Object(u.a)(N,2),I=k[0],D=k[1],S=Object(n.useState)(""),B=Object(u.a)(S,2),R=B[0],A=B[1],V=Object(n.useRef)(),E=Object(n.useRef)(),U=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){g(e),V.current.srcObject=e})),h.on("me",(function(e){return A(e)})),h.on("callUser",(function(e){var t=e.from,a=e.name,n=e.signal;f.play(),f.loop=!0,D({isReceivingCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(x.jsx)(O.Provider,{value:{call:I,callAccepted:i,myVideo:V,userVideo:E,stream:m,name:w,setName:y,callEnded:o,me:R,callUser:function(e){var t=new p.a({initiator:!0,trickle:!1,stream:m});t.on("signal",(function(t){h.emit("callUser",{userToCall:e,signalData:t,from:R,name:w})})),t.on("stream",(function(e){E.current.srcObject=e})),h.on("callAccepted",(function(e){r(!0),t.signal(e)})),U.current=t},leaveCall:function(){d(!0),U.current.destroy(),window.location.reload()},answerCall:function(){f.pause(),r(!0);var e=new p.a({initiator:!1,trickle:!1,stream:m});e.on("signal",(function(e){h.emit("answerCall",{signal:e,to:I.from})})),e.on("stream",(function(e){E.current.srcObject=e})),e.signal(I.signal),U.current=e}},children:t})},v=Object(o.a)((function(e){return{video:Object(r.a)({width:"550px"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:Object(r.a)({justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),paper:{padding:"10px",border:"2px solid black",margin:"10px"}}})),C=function(){var e=Object(n.useContext)(O),t=e.name,a=e.callAccepted,c=e.myVideo,i=e.userVideo,r=e.callEnded,l=e.stream,o=e.call,u=v();return Object(x.jsxs)(d.a,{container:!0,className:u.gridContainer,children:[l&&Object(x.jsx)(j.a,{className:u.paper,children:Object(x.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(x.jsx)(s.a,{variant:"h5",gutterBottom:!0,children:t||"Nome"}),Object(x.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0,className:u.video})]})}),a&&!r&&Object(x.jsx)(j.a,{className:u.paper,children:Object(x.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(x.jsx)(s.a,{variant:"h5",gutterBottom:!0,children:o.name||"Nome"}),Object(x.jsx)("video",{playsInline:!0,ref:i,autoPlay:!0,className:u.video})]})})]})},w=a(188),y=a(193),N=a(194),k=a(88),I=a(189),D=a(190),S=a(191),B=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(r.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(r.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),R=function(e){var t=e.children,a=Object(n.useContext)(O),c=a.me,i=a.callAccepted,r=a.name,l=a.setName,o=a.callEnded,b=a.leaveCall,m=a.callUser,p=Object(n.useState)(""),h=Object(u.a)(p,2),f=h[0],g=h[1],v=B();return Object(x.jsx)(w.a,{className:v.container,children:Object(x.jsxs)(j.a,{elevation:10,className:v.paper,children:[Object(x.jsx)("form",{className:v.root,noValidate:!0,autoComplete:"off",children:Object(x.jsxs)(d.a,{container:!0,className:v.gridContainer,children:[Object(x.jsxs)(d.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(x.jsx)(s.a,{gutterBottom:!0,variant:"h6",children:"Info da Conta"}),Object(x.jsx)(y.a,{label:"Nome",value:r,onChange:function(e){return l(e.target.value)},fullWidth:!0}),Object(x.jsx)(k.CopyToClipboard,{text:c,className:v.margin,children:Object(x.jsx)(N.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(x.jsx)(I.a,{fontSize:"large"}),children:"Copiar sua ID"})})]}),Object(x.jsxs)(d.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(x.jsx)(s.a,{gutterBottom:!0,variant:"h6",children:"Fazer Liga\xe7\xe3o"}),Object(x.jsx)(y.a,{label:"ID a ser chamado",value:f,onChange:function(e){return g(e.target.value)},fullWidth:!0}),i&&!o?Object(x.jsx)(N.a,{variant:"contained",color:"secondary",startIcon:Object(x.jsx)(D.a,{fontSize:"large"}),fullWidth:!0,onClick:b,className:v.margin,children:"Desligar"}):Object(x.jsx)(N.a,{variant:"contained",color:"primary",startIcon:Object(x.jsx)(S.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return m(f)},className:v.margin,children:"Chamar"})]})]})}),t]})})},A=function(){var e=Object(n.useContext)(O),t=e.answerCall,a=e.call,c=e.callAccepted;return Object(x.jsx)(x.Fragment,{children:a.isReceivingCall&&!c&&Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(x.jsxs)("h1",{children:[a.name," est\xe1 chamando:"]}),Object(x.jsx)(N.a,{variant:"contained",color:"primary",onClick:t,children:"Responder"})]})})},V=Object(o.a)((function(e){return{appBar:Object(r.a)({borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"600px",border:"2px solid black"},e.breakpoints.down("xs"),{width:"90%"}),image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}})),E=function(){var e=V();return Object(x.jsxs)("div",{className:e.wrapper,children:[Object(x.jsx)(l.a,{className:e.appBar,position:"static",color:"inherit",children:Object(x.jsx)(s.a,{variant:"h5",align:"center",children:"V\xeddeo Chamada"})}),Object(x.jsx)(C,{}),Object(x.jsx)(R,{children:Object(x.jsx)(A,{})})]})};a(151);i.a.render(Object(x.jsx)(g,{children:Object(x.jsx)(E,{})}),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.2414d1a3.chunk.js.map