(this.webpackJsonpaprendiendoreact=this.webpackJsonpaprendiendoreact||[]).push([[0],{102:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(40),s=r.n(c),i=(r(89),r(90),r(7)),o=r(0),l=r.n(o),d=r(2),j=r(12),u=r(81),b=r(4);var p=function(e){var t=e.loading,r=e.children,a=e.configuration;return t?Object(b.jsx)(u.a,{style:{position:"fixed",top:"50%",left:"50%"},animation:(null===a||void 0===a?void 0:a.animation)||"border",role:"status",variant:(null===a||void 0===a?void 0:a.variant)||"dark",children:Object(b.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(b.jsx)(b.Fragment,{children:r})},O=r(32),x=r(41),h=r(63),m=(r(93),{cardContainer:{marginBottom:"10px",width:"18rem"},cardBody:{}});var v=function(e){var t=e.datos;return Object(b.jsxs)(x.a,{style:m.cardContainer,children:[Object(b.jsx)(x.a.Img,{className:"imgProducto",variant:"top",src:t.thumbnail}),Object(b.jsxs)(x.a.Body,{children:[Object(b.jsx)(x.a.Title,{children:t.name}),Object(b.jsxs)(x.a.Subtitle,{children:["Categoria: ",t.category_id]}),Object(b.jsx)(x.a.Text,{children:Object(b.jsxs)("p",{children:["$ ",t.price]})}),Object(b.jsx)(h.a,{variant:"primary",as:O.b,to:"/producto/"+t.id,children:"Ver Detalle"})]})]})},f=r(49);r(103),r(95);f.a.initializeApp({apiKey:"AIzaSyA3W0IQRz-VSEo40zFH6bI1H7ghycRle2Y",authDomain:"database-shop-641f6.firebaseapp.com",projectId:"database-shop-641f6",storageBucket:"database-shop-641f6.appspot.com",messagingSenderId:"234346068713",appId:"1:234346068713:web:2c25a755eb9e9f3be28e78"}),f.a.db=f.a.firestore(),f.a.auth=f.a.auth();var g=f.a;function y(){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.db.collection("productos").get();case 2:return t=e.sent,e.abrupt("return",t.docs);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return S.apply(this,arguments)}function S(){return(S=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.db.doc("productos/"+t).get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=r(109);var I=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(!0),s=Object(j.a)(c,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:(t=e.sent)&&(n(t),u(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsx)(p,{loading:o,children:Object(b.jsx)(C.a,{xs:"auto",md:"auto",children:r.map((function(e,t){return Object(b.jsx)(v,{datos:Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id})},e.id)}))})})},E=r(19),L=r(44),A=r(65);var N=function(e){var t=e.label,r=e.type,a=e.register,n=e.placeholder,c=e.helpText;return Object(b.jsxs)(A.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(A.a.Label,{children:t}),Object(b.jsx)(A.a.Control,Object(i.a)(Object(i.a)({type:r||"text"},a),{},{placeholder:n||""})),Object(b.jsx)(A.a.Text,{className:"text-muted",children:c||""})]})};var P=function(){var e,t,r=Object(L.a)(),a=r.register,n=r.handleSubmit,c=r.formState.errors,s=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Estos son los datos",t,t.email,t.password),e.next=4,g.auth.createUserWithEmailAndPassword(t.email,t.password);case 4:if(r=e.sent,console.log(r),!r.user.uid){e.next=10;break}return e.next=9,g.db.collection("usuarios").add({name:t.name,lastname:t.lastname,userId:r.user.uid});case 9:e.sent;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Registrate en Nuestro Portal"}),Object(b.jsxs)("form",{onSubmit:n(s),children:[Object(b.jsx)(N,{label:"Nombre",register:Object(i.a)({},a("name",{required:!0}))}),c.name&&Object(b.jsx)("div",{children:"El campo nombre es Obligatorio"}),Object(b.jsx)(N,{label:"Apellido",register:Object(i.a)({},a("lastname"))}),Object(b.jsx)(N,{label:"Email",type:"email",register:Object(i.a)({},a("email"))}),Object(b.jsx)(N,{label:"Contrase\xf1a",type:"password",register:Object(i.a)({},a("password",{required:!0,minLength:6}))}),"required"===(null===(e=c.password)||void 0===e?void 0:e.type)&&Object(b.jsx)("div",{children:"El campo Contrase\xf1a es Obligatorio"}),"minLength"===(null===(t=c.password)||void 0===t?void 0:t.type)&&Object(b.jsx)("div",{children:"Completa la Contrase\xf1a con al menos 6 caracteres"}),Object(b.jsx)(h.a,{type:"submit",variant:"primary",children:"Registrarme"})]})]})};var T=function(){var e,t,r=Object(L.a)(),a=r.register,n=r.handleSubmit,c=r.formState.errors,s=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.auth.signInWithEmailAndPassword(t.email,t.password);case 3:r=e.sent,console.log(r.user.uid),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.code);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Ingresa a Nuestro Portal"}),Object(b.jsxs)("form",{onSubmit:n(s),children:[Object(b.jsx)(N,{label:"Email",type:"email",register:Object(i.a)({},a("email"))}),Object(b.jsx)(N,{label:"Contrase\xf1a",type:"password",register:Object(i.a)({},a("password",{required:!0,minLength:6}))}),"required"===(null===(e=c.password)||void 0===e?void 0:e.type)&&Object(b.jsx)("div",{children:"El campo Contrase\xf1a es Obligatorio"}),"minLength"===(null===(t=c.password)||void 0===t?void 0:t.type)&&Object(b.jsx)("div",{children:"Completa la Contrase\xf1a con al menos 6 caracteres"}),Object(b.jsx)(h.a,{type:"submit",variant:"primary",children:"Ingresar"})]})]})},q={cardContainer:{backGroundColor:"#333",padding:"25px",maxWidht:"350px",width:"100%",textAlign:"center",borderRadius:"5px",margin:"0 auto",marginTop:"15%"}},B=new Date;var D=function(){var e=Object(a.useState)({hours:B.getHours(),minutes:B.getMinutes(),seconds:B.getSeconds()}),t=Object(j.a)(e,2),r=t[0],n=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){var e=new Date;n({hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()})}),1e3);return function(){return clearInterval(e)}}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{style:q.cardContainer,children:[" ",r.hours,":",r.minutes,":",r.seconds," "]}),Object(b.jsx)(x.a,{style:q.cardContainer})]})})},F=r(111),R=r(112),H=r(110);var z=function(){return Object(b.jsxs)(F.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(b.jsx)(F.a.Brand,{as:O.b,to:"/",children:"Andes Argentinos"}),Object(b.jsx)(F.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(R.a,{className:"me-auto",children:[Object(b.jsx)(R.a.Link,{as:O.b,to:"/",children:"Inicio"}),Object(b.jsx)(R.a.Link,{as:O.b,to:"/registro",children:"Registro"}),Object(b.jsx)(R.a.Link,{as:O.b,to:"/ingresar",children:"Ingresar"}),Object(b.jsx)(R.a.Link,{as:O.b,to:"/alta/productos",children:"Alta"}),Object(b.jsx)(R.a.Link,{as:O.b,to:"/reloj",children:"Horario"}),"|"]}),Object(b.jsx)(H.a,{title:"Mas Opciones",id:"basic-nav-dropdown"}),Object(b.jsxs)(H.a,{title:"Productos",id:"basic-nav-dropdown",children:[Object(b.jsx)(H.a.Item,{}),Object(b.jsx)(H.a.Item,{children:"Tablets"}),Object(b.jsx)(H.a.Divider,{}),Object(b.jsx)(H.a.Item,{children:"PC"})]})]})};var G=function(){var e,t=Object(L.a)(),r=t.register,a=t.handleSubmit,n=t.formState.errors,c=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.db.collection("productos").add(t);case 3:r=e.sent,console.log(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.code);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Ingresa el Producto"}),Object(b.jsxs)("form",{onSubmit:a(c),children:[Object(b.jsx)(N,{label:"Nombre",register:Object(i.a)({},r("name",{required:!0}))}),n.name&&Object(b.jsx)("div",{children:"El campo nombre es Obligatorio"}),Object(b.jsx)(N,{label:"Precio",register:Object(i.a)({},r("price",{required:!0}))}),n.price&&Object(b.jsx)("div",{children:"El campo Contrase\xf1a es Obligatorio"}),Object(b.jsx)(N,{label:"Descripcion",type:"text",register:Object(i.a)({},r("description"))}),"minLength"===(null===(e=n.password)||void 0===e?void 0:e.type)&&Object(b.jsx)("div",{children:"Completa la Contrase\xf1a con al menos 6 caracteres"}),Object(b.jsx)(h.a,{type:"submit",variant:"primary",children:"Guardar"})]})]})};var M=function(){var e=Object(L.a)(),t=e.register,r=e.handleSubmit,n=e.setValue,c=e.formState.errors,s=Object(E.g)().id,o=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.db.doc("productos/"+s).set(t);case 3:r=e.sent,console.log(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.code);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(s);case 3:(t=e.sent)&&(n("name",t.data().name),n("price",t.data().price),n("description",t.data().description)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s,n]);var j=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.db.doc("productos/"+s).delete();case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(h.a,{onClick:j,variant:"danger",children:"Eliminar"}),Object(b.jsxs)("form",{onSubmit:r(o),children:[Object(b.jsx)(N,{label:"Nombre",register:Object(i.a)({},t("name",{required:!0})),placeholder:"Ingrese su nombre",helpText:"El nombre de tener al menos 1 caracter"}),c.name&&Object(b.jsx)("div",{children:"El campo nombre es obligatorio"}),Object(b.jsx)(N,{label:"Precio",register:Object(i.a)({},t("price",{required:!0}))}),c.price&&Object(b.jsx)("div",{children:"El campo nombre es obligatorio"}),Object(b.jsx)(N,{label:"Descripcion",register:Object(i.a)({},t("description",{required:!0}))}),c.description&&Object(b.jsx)("div",{children:"El campo nombre es obligatorio"}),Object(b.jsx)(h.a,{type:"submit",variant:"primary",children:"Guardar"})]})]})};var W=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("b",{children:[" Copyright / Todos los derechos reservados 2021 ",Object(b.jsx)("br",{})," "]})})};var V=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(!0),s=Object(j.a)(c,2),i=s[0],o=s[1],u=Object(E.g)().id;return console.log("id",u),Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(u);case 3:(t=e.sent)&&(n(t.data()),o(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[u]),Object(b.jsxs)(p,{loading:i,configuration:{animation:"grow",variant:"primary"},children:[Object(b.jsx)("p",{children:r.name}),Object(b.jsx)("p",{children:r.price}),Object(b.jsx)("p",{children:r.description})]})};var J=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.a,{children:[Object(b.jsx)(z,{}),Object(b.jsxs)(E.c,{children:[Object(b.jsx)(E.a,{path:"/",element:Object(b.jsx)(I,{})}),Object(b.jsx)(E.a,{path:"/registro",element:Object(b.jsx)(P,{})}),Object(b.jsx)(E.a,{path:"/ingresar",element:Object(b.jsx)(T,{})}),Object(b.jsx)(E.a,{path:"/alta/productos",element:Object(b.jsx)(G,{})}),Object(b.jsx)(E.a,{path:"/modificar/producto/:id",element:Object(b.jsx)(M,{})}),Object(b.jsx)(E.a,{path:"/producto/:id",element:Object(b.jsx)(V,{})}),Object(b.jsx)(E.a,{path:"/reloj",element:Object(b.jsx)(D,{})})]}),Object(b.jsx)(W,{})]})})};var K=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(J,{})})},Q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,113)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};r(101);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root")),Q()},89:function(e,t,r){},90:function(e,t,r){},93:function(e,t,r){}},[[102,1,2]]]);
//# sourceMappingURL=main.4e67d6d5.chunk.js.map