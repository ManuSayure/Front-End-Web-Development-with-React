(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{107:function(e,t,s){},176:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(2),r=s.n(c),a=s(23),o=s.n(a),i=(s(107),s(75),s(16)),l=s(17),d=s(19),j=s(18),m=s(10),h=s(177),b=s(178),u=s(179),O=s(180),x=s(181),f=s(182),p="http://localhost:3001/";function g(e){var t=e.dish;e.onClick;return console.log(t),Object(n.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(n.jsx)(h.a,{children:Object(n.jsxs)(m.b,{to:"/menu/".concat(t.id),children:[Object(n.jsx)(b.a,{width:"100%",src:p+t.image,alt:t.name}),Object(n.jsx)(u.a,{children:Object(n.jsx)(O.a,{children:t.name})})]})})})}var N=function(e){var t=e.dishes.map((function(e){return Object(n.jsx)(g,{dish:e},e.id)}));return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(x.a,{children:[Object(n.jsx)(f.a,{children:Object(n.jsx)(m.b,{to:"/home",children:"Home"})}),Object(n.jsx)(f.a,{active:!0,children:"Menu"})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:"Menu"}),Object(n.jsx)("hr",{})]})]}),Object(n.jsx)("div",{className:"row",children:t})]})},v=function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row justify-content-center",children:[Object(n.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(n.jsx)("h5",{children:"Links"}),Object(n.jsxs)("ul",{className:"list-unstyled",children:[Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/aboutus",children:"About Us"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/menu",children:"Menu"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(n.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(n.jsx)("h5",{children:"Our Address"}),Object(n.jsxs)("address",{children:["121, Clear Water Bay Road",Object(n.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(n.jsx)("br",{}),"HONG KONG",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(n.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(n.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(n.jsx)("i",{className:"fa fa-google-plus"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(n.jsx)("i",{className:"fa fa-facebook"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(n.jsx)("i",{className:"fa fa-linkedin"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(n.jsx)("i",{className:"fa fa-twitter"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(n.jsx)("i",{className:"fa fa-youtube"})}),Object(n.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(n.jsx)("i",{className:"fa fa-envelope-o"})})]})}),Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{className:"col-auto",children:Object(n.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})})},y=s(14),w=s(190),M=s(191),L=s(192),k=s(193),C=s(194),E=s(195),S=s(189),F=s(196),D=s(205),T=s(183),I=s(184),R=s(185),A=s(186),q=s(187),P=s(188),H=(r.a.Component,function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(y.a)(n)),n.toggleModal=n.toggleModal.bind(Object(y.a)(n)),n.handleLogin=n.handleLogin.bind(Object(y.a)(n)),n}return Object(l.a)(s,[{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(w.a,{className:"navbar-color",expand:"lg",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(M.a,{onClick:this.toggleNav}),Object(n.jsx)(L.a,{className:"mr-auto",href:"/",children:Object(n.jsx)("img",{src:"".concat("/Front-End-Web-Development-with-React","/assets/images/logo.png"),height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(n.jsxs)(k.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(n.jsxs)(C.a,{navbar:!0,children:[Object(n.jsx)(E.a,{className:"ml-3",children:Object(n.jsxs)(m.c,{className:"nav-link nav-estilo",to:"/home",children:[Object(n.jsx)("span",{className:"fa fa-home fa-lg mr-1"}),"Home"]})}),Object(n.jsx)(E.a,{className:"ml-3",children:Object(n.jsxs)(m.c,{className:"nav-link nav-estilo",to:"/aboutus",children:[Object(n.jsx)("span",{className:" fa fa-info fa-lg mr-1"}),"About Us"]})}),Object(n.jsx)(E.a,{className:"ml-3",children:Object(n.jsxs)(m.c,{className:"nav-link nav-estilo",to:"/menu",children:[Object(n.jsx)("span",{className:"fa fa-list fa-lg mr-1"}),"Menu"]})}),Object(n.jsx)(E.a,{className:"ml-3",children:Object(n.jsxs)(m.c,{className:"nav-link nav-estilo",to:"/contactus",children:[Object(n.jsx)("span",{className:"fa fa-address-card fa-lg mr-1"}),"Contact Us"]})})]}),Object(n.jsx)(C.a,{className:"ml-auto",navbar:!0,children:Object(n.jsx)(E.a,{children:Object(n.jsxs)(S.a,{outline:!0,onClick:this.toggleModal,children:[Object(n.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(n.jsx)(F.a,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row-row-header",children:Object(n.jsxs)("div",{className:"col-6 col sm-6",children:[Object(n.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(n.jsx)("p",{className:"text-justify",children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})}),Object(n.jsxs)(D.a,{toggle:this.toggleModal,isOpen:this.state.isModalOpen,children:[Object(n.jsx)(T.a,{children:"Login"}),Object(n.jsx)(I.a,{children:Object(n.jsxs)(R.a,{onSubmit:this.handleLogin,children:[Object(n.jsxs)(A.a,{children:[Object(n.jsx)(q.a,{htmlFor:"username",children:"Username"}),Object(n.jsx)(P.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)(q.a,{htmlFor:"password",children:"Password"}),Object(n.jsx)(P.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(n.jsx)(A.a,{check:!0,children:Object(n.jsxs)(q.a,{check:!0,children:[Object(n.jsx)(P.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(n.jsx)(S.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(r.a.Component)),B=function(){return Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(n.jsx)("p",{children:"Loading . . ."})]})},_=s(197),W=s(198),U=s(199),Y=s(28),G=function(e){var t=e.item,s=e.isLoading,c=e.errMess;return console.log(s),s?Object(n.jsx)(B,{}):c?Object(n.jsx)("h4",{children:c}):Object(n.jsx)("div",{className:"col-12 col-md m-1",children:Object(n.jsx)(Y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(b.a,{src:p+t.image}),Object(n.jsxs)(_.a,{children:[Object(n.jsx)(O.a,{children:t.name}),t.designation?Object(n.jsx)(W.a,{children:t.designation}):null,Object(n.jsx)(U.a,{className:"text-justify",children:t.description})]})]})})})},K=function(e){console.log(e.dishesLoading),console.log(e.promoLoading),console.log(e.leaderLoading),console.log(e.dish),console.log(e.promotion),console.log(e.leader);var t=function(){return Object(n.jsxs)("div",{className:"row align-items-start",children:[Object(n.jsx)(G,{item:e.dish,isLoading:e.dishesLoading,errMess:e.disheErrMess},1),Object(n.jsx)(G,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess},2),Object(n.jsx)(G,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess},3)]})};return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"col-12 col-md m-1",children:Object(n.jsx)(t,{})})})},z=s(7),J=s(101),Z=s(60),$=s(34),Q=s(200),V=s(201),X=s(9),ee=(r.a.Component,s(202)),te=function(e){return e&&e.length},se=function(e){return function(t){return!t||t.length<=e}},ne=function(e){return function(t){return t&&t.length>=e}},ce=function(e){return!isNaN(Number(e))},re=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ae=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).resetForm=function(){n.setState(n.baseState)},n.state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},console.log(e),n.baseState=n.state,n.handleInputChange=n.handleInputChange.bind(Object(y.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n}return Object(l.a)(s,[{key:"handleInputChange",value:function(e){var t=e.target,s=t.name,n=t.value;"checkbox"===e.target.type&&(Object(Z.a)("value"),n=e.target.checked),this.setState(Object($.a)({},s,n))}},{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.postFeedback(e),this.props.resetFeedbackForm(),this.resetForm()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(X.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(n.jsxs)(ee.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"firstname",md:2,children:"First Name"}),Object(n.jsxs)(Q.a,{md:10,children:[Object(n.jsx)(X.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:te,minLength:ne(3),maxLength:se(15)}}),Object(n.jsx)(X.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(n.jsxs)(ee.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(n.jsxs)(Q.a,{md:10,children:[Object(n.jsx)(X.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:te,minLength:ne(3),maxLength:se(15)}}),Object(n.jsx)(X.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(n.jsxs)(ee.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(n.jsxs)(Q.a,{md:10,children:[Object(n.jsx)(X.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:te,minLength:ne(3),maxLength:se(15),isNumber:ce}}),Object(n.jsx)(X.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(n.jsxs)(ee.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"email",md:2,children:"Email"}),Object(n.jsxs)(Q.a,{md:10,children:[Object(n.jsx)(X.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:te,validEmail:re}}),Object(n.jsx)(X.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(n.jsxs)(ee.a,{className:"form-group",children:[Object(n.jsx)(Q.a,{md:{size:6,offset:2},children:Object(n.jsx)("div",{className:"form-check",children:Object(n.jsxs)(q.a,{check:!0,children:[Object(n.jsx)(X.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(n.jsx)("strong",{children:"May we contact you?"})]})})}),Object(n.jsx)(Q.a,{md:{size:3,offset:1},children:Object(n.jsxs)(X.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(n.jsx)("option",{children:"Tel."}),Object(n.jsx)("option",{children:"Email"})]})})]}),Object(n.jsxs)(ee.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(n.jsx)(Q.a,{md:10,children:Object(n.jsx)(X.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(n.jsx)(ee.a,{className:"form-group",children:Object(n.jsx)(Q.a,{md:{size:10,offset:2},children:Object(n.jsx)(S.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})}}]),s}(r.a.Component),oe=function(e){var t=Object(c.useState)(!1),s=Object(J.a)(t,2),r=s[0],a=s[1];return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(x.a,{children:[Object(n.jsx)(f.a,{children:Object(n.jsx)(m.b,{to:"/home",children:"Home"})}),Object(n.jsx)(f.a,{active:!0,children:"Contact Us"})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:"Contact Us"}),Object(n.jsx)("hr",{})]})]}),Object(n.jsxs)("div",{className:"row row-content",style:{float:"left",background:"#e4dede"},children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h3",{children:" Location Informations"})}),Object(n.jsxs)("div",{className:"col-12  col-sm-4 offset-sm-1",children:[Object(n.jsx)("h5",{children:"Our Address"}),Object(n.jsxs)("address",{children:["121, Clear Water Bay Road",Object(n.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(n.jsx)("br",{}),"HONG KONG",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-envelope"}),": ",Object(n.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(n.jsxs)("div",{className:"col-12  col-sm-6  offset-sm-1",children:[Object(n.jsx)("h5",{children:"Map of our Location"}),Object(n.jsx)("div",{children:Object(n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.17908595958!2d114.28275111426868!3d22.30906584821582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040381be582409%3A0x5ca78cbef899f174!2s121%20Clear%20Water%20Bay%20Rd%2C%20Clear%20Water%20Bay%2C%20Hong%20Kong!5e0!3m2!1spt-BR!2sbr!4v1604597793228!5m2!1spt-BR!2sbr",style:{width:"600",height:"450",frameborder:"0",border:"0",allowfullscreen:"",tabindex:"0"}})})]}),Object(n.jsx)("div",{className:"col-12  col-sm-6 offset-sm-1 ",style:{},children:Object(n.jsxs)("div",{className:"btn btn-group ",role:"group",children:[Object(n.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(n.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(n.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(n.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(n.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(n.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("h3",{onClick:function(){return a(!r)},style:{cursor:"pointer"},children:[Object(n.jsxs)("span",{children:[" ",Object(n.jsx)("i",{className:"fa fa-pencil fa-lg "})]}),"   Send us your Feedback"]})}),Object(n.jsx)("div",{className:"col-12",children:r?Object(n.jsx)(ae,Object(z.a)({},e)):null})]})]})},ie=s(203),le=s(204),de=function(e){var t=e.isLoading,s=e.errMess,c=e.leaders;return t?Object(n.jsx)(B,{}):s?Object(n.jsx)("h4",{children:s}):Object(n.jsx)(ie.a,{className:"mt-3",list:!0,children:Object(n.jsx)(Y.Stagger,{in:!0,children:c.map((function(e){return Object(n.jsx)(Y.Fade,{in:!0,children:Object(n.jsxs)("div",{children:[Object(n.jsxs)(ie.a,{className:"mb-3",children:[Object(n.jsx)(ie.a,{left:!0,top:!0,href:"#",children:Object(n.jsx)(ie.a,{object:!0,src:p+e.image})}),Object(n.jsxs)(ie.a,{body:!0,top:!0,className:"ml-4 mb-3 text-justify",children:[Object(n.jsxs)(ie.a,{heading:!0,children:[" ",e.name," "]}),e.designation?Object(n.jsx)(W.a,{className:"mt-2 mb-3 cardsubtitle",children:e.designation}):null,e.description]})]}),Object(n.jsx)("hr",{})]},e.id)})}))})})};var je=function(e){return console.log(e.leaders),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(x.a,{children:[Object(n.jsx)(f.a,{children:Object(n.jsx)(m.b,{to:"/home",children:"Home"})}),Object(n.jsx)(f.a,{active:!0,children:"About Us"})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:"About Us"}),Object(n.jsx)("hr",{})]})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsxs)("div",{className:"col-12 col-md-6",children:[Object(n.jsx)("h2",{children:"Our History"}),Object(n.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(n.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(n.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(n.jsx)("div",{className:"col-12 col-md-5",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(le.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(n.jsx)(_.a,{children:Object(n.jsxs)("dl",{className:"row p-1",children:[Object(n.jsx)("dt",{className:"col-6",children:"Started"}),Object(n.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(n.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(n.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(n.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(n.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(n.jsx)("dt",{className:"col-6",children:"Employees"}),Object(n.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(h.a,{children:Object(n.jsx)(_.a,{className:"bg-faded",children:Object(n.jsxs)("blockquote",{className:"blockquote",children:[Object(n.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(n.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(n.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h2",{children:"Corporate Leadership"})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(de,{leaders:e.leaders,errMess:e.errMess,isLoading:e.isLoading})})]})]})},me="ADD_COMMENT",he="ADD_COMMENTS",be="COMMENTS_FAILED",ue="DISHES_LOADING",Oe="DISHES_FAILED",xe="ADD_DISHES",fe="PROMOS_LOADING",pe="ADD_PROMOS",ge="PROMOS_FAILED",Ne="LEADERS_LOADING",ve="ADD_LEADERS",ye="LEADERS_FAILED",we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(z.a)(Object(z.a)({},e),{},{errMess:null,comments:t.payload});case be:return Object(z.a)(Object(z.a)({},e),{},{errMess:t.payload});case me:var s=t.payload;return s.id=e.comments.length,s.date=(new Date).toISOString(),Object(z.a)(Object(z.a)({},e),{},{comments:e.comments.concat(s)});default:return e}};console.log(we);var Me=function(e){return e&&e.length},Le=function(e){return function(t){return!t||t.length<=e}};function ke(e){var t=e.errMess,s=e.isLoading,c=e.dish;return console.log(),s?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(B,{})})}):t?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("h4",{children:t})})}):null!=c?Object(n.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(n.jsx)(Y.FadeTransform,{in:!0,tranformProps:{exitTransform:"scale(0.5) translateY(-50%0"},children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(b.a,{top:!0,src:p+c.image,alt:c.name}),Object(n.jsxs)(_.a,{children:[Object(n.jsx)(O.a,{children:c.name}),Object(n.jsx)(U.a,{children:c.description})]})]})})}):void 0}function Ce(e){var t=e.comments,s=e.postComment,c=e.dishId;return e.commentsErrMess?Object(n.jsx)("h4",{children:this.props.errMess}):null!=t?Object(n.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(n.jsx)("h4",{children:"Coment\xe1rios"}),Object(n.jsx)("ul",{className:"list-unstyled",children:Object(n.jsx)(Y.Stagger,{in:!0,children:t.map((function(e){return Object(n.jsx)(Y.Fade,{in:!0,children:Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:[e.comment," ",Object(n.jsx)("br",{}),"-- ",e.author,",",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})},e.id)})}))})}),Object(n.jsx)(Ee,{dishId:c,postComment:s})]}):Object(n.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(n.jsx)("h4",{children:" Be the first to comment"}),Object(n.jsx)(Ee,{dishId:c,postComment:s})]})}var Ee=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).toggleModal=function(){console.log("click"),n.setState({showModalComment:!n.state.showModalComment}),console.log(n.state.showModalComment)},n.handleSubmit=function(e){n.toggleModal(),n.props.postComment(n.props.dishId,e.rating,e.author,e.comment)},n.state={showModalComment:!1},n.options=[1,2,3,4,5],n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n.toggleModal=n.toggleModal.bind(Object(y.a)(n)),console.log(n.props),n}return Object(l.a)(s,[{key:"render",value:function(){var e,t=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)(S.a,{color:"secondary",onClick:this.toggleModal,children:[" ",Object(n.jsxs)("span",{children:[" ",Object(n.jsx)("i",{className:"fa fa-pencil fa-lg "})]})," Submit Comment"]}),Object(n.jsxs)(D.a,{isOpen:this.state.showModalComment,children:[Object(n.jsx)(T.a,{toggle:this.toggleModal,children:"Submit"}),Object(n.jsx)(I.a,{children:Object(n.jsxs)(X.LocalForm,{onSubmit:function(){return t.handleSubmit},children:[Object(n.jsxs)(ee.a,{children:[Object(n.jsx)(q.a,{for:"selectRating",md:10,children:"Rating"}),Object(n.jsx)(Q.a,{md:12,children:Object(n.jsx)(X.Control.select,{model:".seletRating",name:"seletRating",default:"1",className:"form-control custom-select mr-sm-2",children:this.options.map((function(e){return 1===e?Object(n.jsx)("option",{selected:!0,children:e},e):Object(n.jsx)("option",{children:e},e)}))})}),Object(n.jsx)(X.Errors,{className:"text-danger",model:".seletRating",show:"touched",messages:{required:"Required"}})]}),Object(n.jsxs)(ee.a,{children:[Object(n.jsx)(q.a,{htmlFor:"author",md:10,children:" Your Name"}),Object(n.jsxs)(Q.a,{md:12,children:[Object(n.jsx)(X.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:Me,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:Le(15)}}),Object(n.jsx)(X.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(n.jsxs)(ee.a,{className:"form-group",children:[Object(n.jsx)(q.a,{htmlFor:"comment",md:10,children:" Comment"}),Object(n.jsx)(Q.a,{md:12,children:Object(n.jsx)(X.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})})]}),Object(n.jsx)(ee.a,{children:Object(n.jsx)(Q.a,{md:{size:10,offset:0},children:Object(n.jsx)(S.a,{type:"button",color:"primary",onClick:this.toggleModal,children:"Submit"})})})]})})]})]})}}]),s}(r.a.Component),Se=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),n=t.call(this,e),console.log(n.props.isLoading),n}return Object(l.a)(s,[{key:"render",value:function(){return this.props.isLoading?Object(n.jsx)(B,{}):this.props.errMess?Object(n.jsx)("h4",{children:this.props.errMess}):(console.log("aqui"),console.log(this.props),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(x.a,{children:[Object(n.jsx)(f.a,{children:Object(n.jsx)(m.b,{to:"/menu",children:"Menu"})}),Object(n.jsx)(f.a,{active:!0,children:this.props.dish.name})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:this.props.dish.name}),Object(n.jsx)("hr",{})]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(ke,{dish:this.props.dish,isLoading:this.props.isLoading,errMess:this.props.errMess}),Object(n.jsx)(Ce,{comments:this.props.comments,postComment:this.props.postComment,dishId:this.props.dish.id,commentsErrMess:this.props.commentsErrMess})]})]}))}}]),s}(r.a.Component),Fe=s(11),De=s(26),Te=s(59),Ie=s(35),Re=s.n(Ie),Ae=function(e,t,s,n){return function(c){var r={dishId:e,rating:t,author:s,comment:n};return r.date=(new Date).toISOString(),Re()(p+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return c(function(e){return{type:me,payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}},qe=function(){return{type:ue}},Pe=function(e){return{type:Oe,payload:e}},He=function(e){return{type:xe,payload:e}},Be=function(e){return{type:be,payload:e}},_e=function(e){return{type:he,payload:e}},We=function(){return{type:fe}},Ue=function(e){return{type:ge,payload:e}},Ye=function(e){return{type:pe,payload:e}},Ge=function(){return{type:Ne}},Ke=function(e){return{type:ye,payload:e}},ze=function(e){return{type:ve,payload:e}},Je=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),n=t.call(this,e),console.log(e),n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(H,{}),Object(n.jsx)(Te.TransitionGroup,{children:Object(n.jsx)(Te.CSSTransition,{classNames:"page",timeout:300,children:Object(n.jsxs)(Fe.d,{location:this.props.location,children:[Object(n.jsx)(Fe.b,{path:"/home",component:function(){return Object(n.jsx)(K,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),Object(n.jsx)(Fe.b,{exact:!0,path:"/menu",component:function(){return Object(n.jsx)(N,{dishes:e.props.dishes.dishes})}}),Object(n.jsx)(Fe.b,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(n.jsx)(Se,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(n.jsx)(Fe.b,{exact:!0,path:"/contactus",component:function(){return Object(n.jsx)(oe,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(n.jsx)(Fe.b,{exact:!0,path:"/aboutus",component:function(){return Object(n.jsx)(je,{leaders:e.props.leaders.leaders,isLoading:e.props.leaders.isLoading,errMess:e.props.leaders.errMess})}}),Object(n.jsx)(Fe.a,{to:"/home"})]})},this.props.location.key)}),Object(n.jsx)(v,{})]})}}]),s}(c.Component),Ze=Object(Fe.g)(Object(De.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{resetFeedbackForm:function(){e(X.actions.reset("feedback"))},fetchDishes:function(){e((function(e){return e(qe(!0)),Re()(p+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(He(t))})).catch((function(t){return e(Pe(t.message))}))}))},fetchComments:function(){e((function(e){return Re()(p+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(_e(t))})).catch((function(t){return e(Be(t.message))}))}))},fetchPromos:function(){e((function(e){return e(We()),Re()(p+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Ye(t))})).catch((function(t){return e(Ue(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(Ge()),Re()(p+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ze(t))})).catch((function(t){return e(Ke(t.message))}))}))},postComment:function(t,s,n,c){return e(Ae(t,s,n,c))},postFeedback:function(t,s,n,c,r,a,o){return e(function(e,t,s,n,c,r,a){return function(o){var i={firstname:e,lastname:t,telnum:s,email:n,agree:c,contactType:r,message:a};return Re()(p+"feedback",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return o({type:"ADD_FEEDBACK",payload:e})})).catch((function(e){console.log("post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(t,s,n,c,r,a,o))}}}))(Je)),$e=s(27),Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case ue:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case Oe:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case fe:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case ge:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:null,leaders:t.payload});case Ne:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case ye:return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},et=s(99),tt=s(100),st=s.n(tt),nt={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},ct=function(){var e=Object($e.createStore)(Object($e.combineReducers)(Object(z.a)({dishes:Qe,comments:we,promotions:Ve,leaders:Xe},Object(X.createForms)({feedback:nt}))),Object($e.applyMiddleware)(et.a,st.a));return console.log(e.getState()),e},rt=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)(De.Provider,{store:ct(),children:Object(n.jsx)(m.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(Ze,{})})})})}}]),s}(r.a.Component),at=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,206)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};s(173),s(174),s(175);o.a.render(Object(n.jsx)(rt,{}),document.getElementById("root")),at()},75:function(e,t,s){}},[[176,1,2]]]);
//# sourceMappingURL=main.cd2ca2bf.chunk.js.map