(this.webpackJsonp3=this.webpackJsonp3||[]).push([[0],{16:function(t,e,n){"use strict";n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return p}));var r=n(3),a=n(39),c=(n(0),n(22)),s=n.n(c),i=(n(18),n(28)),u=n(1),o=["input","meta"],l=["input","meta"],d=function(t){var e=t.meta,n=e.touched,r=e.error,a=t.children,c=n&&r;return Object(u.jsxs)("div",{className:s.a.formsControlls+" "+(c?s.a.error:""),children:[Object(u.jsx)("div",{children:a}),c&&Object(u.jsx)("span",{children:r})]})},b=function(t){var e=t.input,n=(t.meta,Object(a.a)(t,o));return Object(u.jsx)(d,Object(r.a)(Object(r.a)({},t),{},{children:Object(u.jsx)("textarea",Object(r.a)(Object(r.a)({},e),n))}))},f=function(t){var e=t.input,n=(t.meta,Object(a.a)(t,l));return Object(u.jsx)(d,Object(r.a)(Object(r.a)({},t),{},{children:Object(u.jsx)("input",Object(r.a)(Object(r.a)({},e),n))}))},p=function(t,e,n,r,a){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)(i.a,{placeholder:t,type:e,name:n,component:r,validate:a}),c]})}},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(t){return function(e){return e.length>t?"Max lenght is ".concat(t," simbols"):void 0}},a=function(t){return t?void 0:"Field is required!"}},20:function(t,e,n){t.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},22:function(t,e,n){t.exports={formsControlls:"FormsControls_formsControlls__6trj8",error:"FormsControls_error__3xLcw",Error:"FormsControls_Error__TGQ_a"}},29:function(t,e,n){"use strict";var r=n.p+"static/media/Spinner-0.8s-227px.f7946f87.svg",a=(n(0),n(1));e.a=function(){return Object(a.jsx)("img",{src:r,style:{display:"block",marginLeft:"auto",marginRight:"auto"}})}},32:function(t,e,n){t.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItem:"Dialogs_dialogsItem__8wYI2",dialog:"Dialogs_dialog__lk_cw",activ:"Dialogs_activ__1b0EK",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},38:function(t,e,n){t.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},41:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"c",(function(){return g})),n.d(e,"d",(function(){return O})),n.d(e,"f",(function(){return h}));var r=n(4),a=n.n(r),c=n(7),s=n(19),i=n(3),u=n(8),o="ADD_POST",l="SET_USER_PROFILE",d="SET_USER_STATUS",b={posts:[{id:1,message:"Hello, do you really want it?",likesCount:11},{id:2,message:"Yes, it's my first time!!!",likesCount:28},{id:3,message:"I learn React by Dymych!",likesCount:54},{id:4,message:"Congratulates!",likesCount:2}],profile:null,status:""},f=function(t){return{type:o,post:t}},p=function(t){return{type:l,profile:t}},j=function(t){return{type:d,status:t}},g=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getUserProfile(t);case 2:r=e.sent,n(p(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getUserStatus(t);case 2:r=e.sent,n(j(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(j(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:var n={id:5,message:e.post,likesCount:0},r=Object(i.a)(Object(i.a)({},t),{},{posts:Object(s.a)(t.posts)});return r.posts.push(n),r;case l:return Object(i.a)(Object(i.a)({},t),{},{profile:e.profile});case d:return Object(i.a)(Object(i.a)({},t),{},{status:e.status});default:return t}}},42:function(t,e,n){"use strict";n(0);var r=n(14),a=n(32),c=n.n(a),s=n(1);e.a=function(t){var e="/dialogs/"+t.id;return Object(s.jsx)("div",{className:c.a.dialog,children:Object(s.jsxs)(r.b,{to:e,activeClassName:c.a.activ,children:[Object(s.jsx)("img",{src:t.ava}),"  ",t.name]})})}},52:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(19),a=n(3),c="ADD_MESSAGE",s=function(t){return{type:c,text:t}},i={messages:[{id:1,message:"Hello"},{id:2,message:"Hi"},{id:3,message:"What are you doing tonight?"},{id:4,message:"Not decided yet"},{id:5,message:"How about clubbing?"},{id:6,message:"Ye.. Sure!"},{id:7,message:"See you soon"},{id:8,message:"Bye"}],dialogs:[{id:1,name:"Alex",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwiNUolGE_ybMJdnOfdtkwG0knyyporBK6A&usqp=CAU"},{id:2,name:"Sveta",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7E51tmHxujSQLzkC3ZZ_OmoqynSghQPmbYA&usqp=CAU"},{id:3,name:"Artur",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshW2NpetcJKgpq6jaRpnFR2uxuGAXWEN8KQ&usqp=CAU"},{id:4,name:"Lera",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kEMUrjjp-dl3Y1q5b-lNC_m10w_ta96cJA&usqp=CAU"},{id:5,name:"Mikola",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9_BYmlCyl0Ea9J8KoLOcmoPpZQ-tWpTW5w&usqp=CAU"},{id:6,name:"Marina",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8e9_pBuEdTiKdBm0Gw3eWWCBb1CxIAbI8AQ&usqp=CAU"}],injectedText:""};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:return Object(a.a)(Object(a.a)({},t),{},{messages:[].concat(Object(r.a)(t.messages),[{id:9,message:e.text}])});default:return t}}},53:function(t,e,n){"use strict";n.d(e,"e",(function(){return v})),n.d(e,"d",(function(){return x})),n.d(e,"f",(function(){return _})),n.d(e,"c",(function(){return y})),n.d(e,"b",(function(){return C})),n.d(e,"g",(function(){return A}));var r=n(4),a=n.n(r),c=n(7),s=n(19),i=n(3),u=n(8),o=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(i.a)(Object(i.a)({},t),r):t}))},l="FOLLOW",d="UNFOLLOW",b="SET_USERS",f="CURRENT_PAGE",p="SET_TOTAL_USERS_COUNT",j="TOGGLE_IS_FETCHING",g="TOGGLE_FOLLOWING_PROGRESS",O={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},h=function(t){return{type:l,userId:t}},m=function(t){return{type:d,userId:t}},v=function(t){return{type:b,users:t}},x=function(t){return{type:p,count:t}},_=function(t){return{type:j,isFetching:t}},w=function(t,e){return{type:g,isFetching:t,userId:e}},y=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(_(!0)),n.next=3,u.d.getUsers(t,e);case 3:c=n.sent,r(_(!1)),r({type:f,currentPage:t}),r(v(c.data.items)),r(x(c.data.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},S=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(w(!0,n)),t.next=3,r(n);case 3:0===t.sent.data.resultCode&&e(c(n)),e(w(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),C=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(n,t,u.b.follow.bind(u.b),h);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(n,t,u.b.unfollow.bind(u.b),m);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(i.a)(Object(i.a)({},t),{},{users:o(t.users,e.userId,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},t),{},{users:o(t.users,e.userId,"id",{followed:!1})});case b:return Object(i.a)(Object(i.a)({},t),{},{users:e.users});case f:return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.currentPage});case p:return Object(i.a)(Object(i.a)({},t),{},{totalUsersCount:e.count});case j:return Object(i.a)(Object(i.a)({},t),{},{isFetching:e.isFetching});case g:return Object(i.a)(Object(i.a)({},t),{},{followingInProgress:e.isFetching?[].concat(Object(s.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!=e.userId}))});default:return t}}},56:function(t,e,n){t.exports={login:"Login_login__2Px22"}},62:function(t,e,n){},63:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return d}));var r=n(4),a=n.n(r),c=n(7),s=n(55),i=s.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"00adb810-fa6f-4427-8bcb-00218cb88b97"}}),u={getUsers:function(){var t=arguments;return Object(c.a)(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,r=t.length>1&&void 0!==t[1]?t[1]:50,e.next=4,i.get("users?page=".concat(n,"&count=").concat(r));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()}},o={follow:function(t){return Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("follow/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},unfollow:function(t){return Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.delete("follow/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},l={getUserProfile:function(t){return i.get("profile/".concat(t))},getUserStatus:function(t){return i.get("profile/status/".concat(t))},updateStatus:function(t){return i.put("profile/status",{status:t})}},d={me:function(){return i.get("auth/me")},login:function(t,e,n){return i.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return i.delete("auth/login")}}},96:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var r=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,106)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),c(t),s(t)}))},a=n(30),c=n.n(a),s=n(0),i=n.n(s),u=n(24),o=n(25),l=n(27),d=n(26),b=n(5),f=n(14),p=(n(62),n(63),n(1)),j=function(t){return Object(p.jsx)("div",{children:"Music"})},g=(n(65),function(t){return Object(p.jsx)("div",{children:"News"})}),O=(n(66),function(t){return Object(p.jsx)("div",{children:"Settings"})}),h=n(20),m=n.n(h),v=n(42),x=function(t){var e=t.dialogsPage,n=t.sidebar,r=e.dialogs.map((function(t){return Object(p.jsx)(v.a,{ava:t.ava,name:t.name,id:t.id},t.id)})),a=n.sidebar.map((function(t){return Object(p.jsxs)(f.b,{to:t.path,id:t.id,activeClassName:m.a.active,children:[t.page,Object(p.jsx)("br",{})]},t.id)}));return Object(p.jsxs)("nav",{className:m.a.nav,children:[Object(p.jsx)("div",{className:m.a.item,children:Object(p.jsx)("a",{children:a})}),r]})},_=n(13),w=n(54),y=n.n(w),S=Object(_.b)((function(t){return{dialogsPage:t.dialogsPage,sidebar:t.sidebar}}),y.a)(x),C=n(3),A=n(38),k=n.n(A),E=function(t){return Object(p.jsxs)("header",{className:k.a.header,children:[Object(p.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1K_40DbvsDK8kukz4tEGuwDBRlkapCS2pdQ&usqp=CAU"}),Object(p.jsx)("div",{className:k.a.loginBlock,children:t.isAuth?Object(p.jsxs)("div",{children:[t.login," - ",Object(p.jsx)("button",{onClick:t.logout,children:"Log out"})," "]}):Object(p.jsx)(f.b,{to:"/login",children:"Login"})})]})},N=n(4),I=n.n(N),U=n(7),P=n(8),L="samuraj-network/auth/SET_USER_DATA",R="samuraj-network/auth/LOGIN_ERROR",T={userId:null,email:null,login:null,isFetching:!1,isAuth:!1,error:"",authPhoto:""},G=function(t,e,n,r){return{type:L,payload:{userId:t,email:e,login:n,isAuth:r}}},D=function(){return function(){var t=Object(U.a)(I.a.mark((function t(e){var n,r,a,c,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.me();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,s=r.login,e(G(a,c,s,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return Object(C.a)(Object(C.a)(Object(C.a)({},t),e.payload),{},{error:null});case R:return Object(C.a)(Object(C.a)({},t),{},{error:e.error});default:return t}},q=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(E,Object(C.a)({},this.props))}}]),n}(i.a.Component),M=Object(_.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{setAuthUserData:G,logout:function(){return function(){var t=Object(U.a)(I.a.mark((function t(e){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.logout();case 2:0===t.sent.data.resultCode&&e(G(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(q),z=n(56),B=n.n(z),K=n(28),W=n(18),H=n(16),Q=n(22),Y=n.n(Q),J=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce((function(e,n){return e||n(t)}),void 0)}},X=function(t){var e=t.onSubmit,n=t.error;return Object(p.jsx)(K.b,{onSubmit:e,render:function(t){var e=t.handleSubmit;return Object(p.jsxs)("form",{onSubmit:e,children:[Object(H.c)("login","text","email",H.a,J(W.b,Object(W.a)(20))),Object(H.c)("password","password","password",H.a,J(W.b,Object(W.a)(20))),n&&Object(p.jsx)("div",{className:Y.a.Error,children:n}),Object(H.c)("","checkbox","rememberMe",H.a,null,"remember Me"),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",children:"Login"})})]})}})},Z=Object(_.b)((function(t){return{error:t.auth.error,isAuth:t.auth.isAuth}}),{login:function(t,e,n){return function(){var r=Object(U.a)(I.a.mark((function r(a){var c;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.a.login(t,e,n);case 2:0===(c=r.sent).data.resultCode?a(D()):a((s=c.data.messages[0],{type:R,error:s}));case 4:case"end":return r.stop()}var s}),r)})));return function(t){return r.apply(this,arguments)}}()}})((function(t){var e=t.login,n=t.isAuth,r=t.error;return n?Object(p.jsx)(b.a,{to:"/profile"}):Object(p.jsxs)("div",{className:B.a.login,children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(X,{onSubmit:function(t){e(t.email,t.password,t.rememberMe)},error:r})]})})),V="INITIAL_SUCCESS",$={initialized:!1},tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case V:return Object(C.a)(Object(C.a)({},t),{},{initialized:!0});default:return t}},et=n(29),nt=n(15),rt=n(52),at=n(41),ct={sidebar:[{path:"/profile",page:"Profile"},{path:"/dialogs",page:"Message"},{path:"/news",page:"News"},{path:"/music",page:"Music"},{path:"/users",page:"Users"},{path:"/settings",page:"Settings"}]},st=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct;return t},it=n(53),ut=n(57),ot=(0,n(15).createStore)(Object(nt.combineReducers)({dialogsPage:rt.b,profilePage:at.b,sidebar:st,usersPage:it.a,auth:F,app:tt}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||nt.compose)(Object(nt.applyMiddleware)(ut.a)));window.__store__=ot;var lt=ot,dt=function(t){return function(e){return Object(p.jsx)(s.Suspense,{fallback:Object(p.jsx)(et.a,{}),children:Object(p.jsx)(t,Object(C.a)({},e))})}},bt=i.a.lazy((function(){return n.e(3).then(n.bind(null,107))})),ft=i.a.lazy((function(){return n.e(5).then(n.bind(null,109))})),pt=i.a.lazy((function(){return n.e(4).then(n.bind(null,108))})),jt=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(M,{}),Object(p.jsx)(S,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsx)(b.b,{path:"/dialogs",render:dt(ft)}),Object(p.jsx)(b.b,{path:"/profile/:userId?",render:dt(bt)}),Object(p.jsx)(b.b,{path:"/news",render:function(){return Object(p.jsx)(g,{})}}),Object(p.jsx)(b.b,{path:"/settings",render:function(){return Object(p.jsx)(O,{})}}),Object(p.jsx)(b.b,{path:"/music",render:function(){return Object(p.jsx)(j,{})}}),Object(p.jsx)(b.b,{path:"/users",render:dt(pt)}),Object(p.jsx)(b.b,{path:"/login",render:function(){return Object(p.jsx)(Z,{})}})]})]}):Object(p.jsx)(et.a,{})}}]),n}(i.a.Component),gt=Object(nt.compose)(b.f,Object(_.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(D());Promise.all([e]).then((function(){t({type:V})}))}}}))(jt),Ot=function(t){return Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(f.a,{children:Object(p.jsx)(_.a,{store:lt,children:Object(p.jsx)(gt,{})})})})};n(96);c.a.render(Object(p.jsx)(Ot,{}),document.getElementById("root")),r()}},[[97,1,2]]]);
//# sourceMappingURL=main.b3be221a.chunk.js.map