(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{111:function(e,t,a){},122:function(e,t){},13:function(e,t,a){e.exports={item:"NavBar_item__Gue9x",link:"NavBar_link__1hpnf",nav:"NavBar_nav__gW3j1",active:"NavBar_active__14luG"}},141:function(e,t,a){"use strict";a.r(t),a.d(t,"rerenderEntireTree",(function(){return Ye}));a(72);var s=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,185)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))},n=a(69),c=a(59),i=a(11),r=a(183),o={messageData:[{id:Object(r.a)(),message:"Hello"},{id:Object(r.a)(),message:"Im here"},{id:Object(r.a)(),message:"Wow"},{id:Object(r.a)(),message:"How are you"}],dialogsData:[{id:1,name:"Andrey"},{id:2,name:"Alex"},{id:3,name:"Bob"},{id:4,name:"Nasty"}]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var a={id:Object(r.a)(),message:t.title};return Object(i.a)(Object(i.a)({},e),{},{messageData:[].concat(Object(c.a)(e.messageData),[a])});default:return e}},j="ADD-POST",d="ADD-MESSAGE",u=(Object(r.a)(),Object(r.a)(),Object(r.a)(),Object(r.a)(),Object(r.a)(),Object(r.a)(),{postsData:[{id:Object(r.a)(),messages:"Hi,How are you",likeCounts:15},{id:Object(r.a)(),messages:"It's me first post",likeCounts:23}]}),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var a={id:Object(r.a)(),messages:t.title,likeCounts:Math.floor(30*Math.random())};return Object(i.a)(Object(i.a)({},e),{},{postsData:[a].concat(Object(c.a)(e.postsData))});default:return e}},p="FOLLOW",h="UNFOLLOW",g="SET_USERS",x="SET_CURRENT_PAGE",O="SET_TOTAL_COUNT",m={users:[],pageSize:10,totalUsersCounts:0,currentPage:1},f=Object(n.a)({profilePage:b,dialogsPage:l,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case h:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case g:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case x:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case O:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCounts:t.totalCount});default:return e}}}),_=Object(n.b)(f),v=a(0),y=a.n(v),N=a(9),P=a.n(N),w=(a(111),a(33)),k=a(81),C=a.n(k),D=a(172),I=a(176),S=a(177),T=a(178),U=a(179),M=a(86),A=a.n(M),L=a(2),B=function(){var e=Object(v.useState)(!1),t=Object(w.a)(e,2),a=t[0],s=t[1];return console.log(a),Object(L.jsx)("header",{className:C.a.header,children:Object(L.jsx)(D.a,{position:"static",children:Object(L.jsxs)(I.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(L.jsx)(S.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(L.jsx)(A.a,{onClick:function(){s(!a)}})}),Object(L.jsx)(T.a,{variant:"h6",children:Object(L.jsx)("h2",{children:"MasterTatto"})}),Object(L.jsx)(U.a,{color:"inherit",children:"Login"})]})})})},z=a(49),F=a.n(z),E=a.p+"static/media/bg.4c9bb242.jpg",W=a.p+"static/media/me.9132473c.jpg",H=a(144),R=function(){return Object(L.jsx)("div",{children:Object(L.jsxs)("div",{className:F.a.content,children:[Object(L.jsx)("div",{children:Object(L.jsx)(H.a,{style:{width:"100%",borderRadius:"0",minHeight:"150px"},src:E,alt:"bi"})}),Object(L.jsx)("div",{className:F.a.description_block,children:Object(L.jsxs)("div",{className:F.a.boxImg,children:[Object(L.jsx)(H.a,{src:W,alt:"men",style:{width:"260px",height:"260px",borderRadius:"0"}}),Object(L.jsxs)("div",{className:F.a.paper,style:{maxWidth:"300px",display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(L.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:"14px"},children:[Object(L.jsx)("h3",{children:"Name:"}),Object(L.jsx)("span",{style:{marginLeft:"15px"},children:"Alex"})]}),Object(L.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:"14px"},children:[Object(L.jsx)("h3",{children:"Sity:"}),Object(L.jsx)("span",{style:{marginLeft:"15px"},children:"Minsk"})]}),Object(L.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:"14px"},children:[Object(L.jsx)("h3",{children:"Age:"}),Object(L.jsx)("span",{style:{marginLeft:"15px"},children:"23"})]})]})]})})]})})},G=a(65),J=a.n(G),Y=a(35),K=a.n(Y),X=a(87),q=a.n(X),V=function(e){var t=Object(v.useState)(e.likeCounts),a=Object(w.a)(t,2),s=a[0],n=a[1];return Object(L.jsx)("div",{className:K.a.contentPost,children:Object(L.jsxs)("div",{className:K.a.boxPost,children:[Object(L.jsx)(H.a,{style:{width:"70px",height:"70px"},className:K.a.postImg,src:"https://www.wallpapers4u.org/wp-content/uploads/cat_autumn_skinny_walk_tired_51170_1920x1080.jpg",alt:""}),Object(L.jsxs)("div",{className:K.a.infoBox,children:[Object(L.jsx)("span",{className:K.a.span,children:e.messages}),Object(L.jsxs)("span",{className:K.a.like,children:[Object(L.jsx)(q.a,{className:K.a.heart,onClick:function(){return n(++s)}})," ",s]})]})]})})},Z=a(182),Q=function(e){var t=Object(v.useState)(""),a=Object(w.a)(t,2),s=a[0],n=a[1],c=e.postsData.map((function(e){return Object(L.jsx)(V,{messages:e.messages,likeCounts:e.likeCounts},e.id)}));return Object(L.jsxs)("div",{className:J.a.posts_block,children:[Object(L.jsx)("h3",{children:"My posts"}),Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{children:Object(L.jsx)(Z.a,{id:"filled-full-width",label:"Post",placeholder:"Add new post...",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",value:s,onChange:function(e){return n(e.currentTarget.value)}})}),Object(L.jsx)("div",{children:Object(L.jsx)(U.a,{onClick:function(){e.addPost(s),n("")},style:{transition:"0.5s"},className:J.a.btn_grad,variant:"outlined",color:"primary",children:"Add post"})})]}),Object(L.jsx)("div",{children:c})]})},$=a(27),ee=Object($.b)((function(e){return{postsData:e.profilePage.postsData}}),(function(e){return{addPost:function(t){e({type:j,title:t})}}}))(Q),te=function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)(R,{}),Object(L.jsx)(ee,{})]})},ae=function(){return Object(L.jsx)("div",{children:"News"})},se=function(){return Object(L.jsx)("div",{children:"Music"})},ne=function(){return Object(L.jsx)("div",{children:"Settings"})},ce=a(25),ie=a.n(ce),re=a(21),oe=function(e){return Object(L.jsx)("div",{className:ie.a.dialog,children:Object(L.jsx)(re.b,{activeClassName:ie.a.active,to:"/dialogs/".concat(" ",e.id),children:e.name})})},le=function(e){return Object(L.jsx)("div",{className:ie.a.message,children:e.message})},je=function(e){var t=e.dialogsPage.dialogsData.map((function(e){return Object(L.jsx)(oe,{name:e.name,id:e.id},e.id)})),a=e.dialogsPage.messageData.map((function(e){return Object(L.jsx)(le,{message:e.message},e.id)})),s=Object(v.useState)(""),n=Object(w.a)(s,2),c=n[0],i=n[1];return Object(L.jsxs)("div",{className:ie.a.dialogs,children:[Object(L.jsx)("div",{className:ie.a.dialogs_item,children:t}),Object(L.jsxs)("div",{className:ie.a.messages,children:[a,Object(L.jsxs)("div",{className:ie.a.addBox,children:[Object(L.jsx)(Z.a,{label:"Write",variant:"outlined",size:"small",value:c,onChange:function(e){return i(e.currentTarget.value)}}),Object(L.jsx)(U.a,{onClick:function(){return e.addMessage(c),void i("")},style:{transition:"0.5s",marginLeft:"10px"},className:ie.a.btn_grad,variant:"outlined",color:"primary",children:"Send"})]})]})]})},de=Object($.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(t){e({type:d,title:t})}}}))(je),ue=a(13),be=a.n(ue),pe=a(181),he=a(90),ge=a.n(he),xe=a(89),Oe=a.n(xe),me=a(92),fe=a.n(me),_e=a(94),ve=a.n(_e),ye=a(91),Ne=a.n(ye),Pe=a(93),we=a.n(Pe),ke=a(180),Ce=a(88),De=a.n(Ce),Ie=function(){return Object(L.jsxs)(ke.a,{max:4,className:De.a.grup,children:[Object(L.jsx)(H.a,{style:{height:"60px",width:"60px"},alt:"Remy Sharp",src:"https://mocah.org/uploads/posts/1143997-cat-animals-nature-grass-wildlife-whiskers-wild-cat-kitten-fauna-mammal-vertebrate-cat-like-mammal-small-to-medium-sized-cats-tabby-cat.jpg"}),Object(L.jsx)(H.a,{style:{height:"60px",width:"60px"},alt:"Travis Howard",src:"https://www.wallpaperflare.com/static/256/891/705/blue-british-shorthair-cat-animals-wallpaper.jpg"}),Object(L.jsx)(H.a,{style:{height:"60px",width:"60px"},alt:"Cindy Baker",src:"https://images4.alphacoders.com/206/20658.jpg"}),Object(L.jsx)(H.a,{style:{height:"60px",width:"60px"},alt:"Agnes Walker",src:"/static/images/avatar/4.jpg"}),Object(L.jsx)(H.a,{style:{height:"60px",width:"60px"},alt:"Agnes Walker",src:"/static/images/avatar/4.jpg"})]})},Se=function(e){return Object(L.jsxs)("nav",{className:be.a.nav,children:[Object(L.jsxs)("ul",{children:[Object(L.jsxs)("li",{className:"".concat(be.a.item),children:[Object(L.jsx)(Oe.a,{style:{color:"#1f3bff"}}),Object(L.jsx)(re.b,{className:be.a.link,activeClassName:be.a.active,to:"/profile",children:"Profile"})]}),Object(L.jsxs)("li",{className:"".concat(be.a.item),children:[Object(L.jsx)(pe.a,{color:"secondary",badgeContent:e.mes.length,children:Object(L.jsx)(ge.a,{style:{color:"#1f3bff"}})}),Object(L.jsx)(re.b,{className:be.a.link,activeClassName:be.a.active,to:"/dialogs",children:"Messages"})]}),Object(L.jsxs)("li",{className:"".concat(be.a.item),children:[Object(L.jsx)(Ne.a,{style:{color:"#1f3bff"}}),Object(L.jsx)(re.b,{className:be.a.link,activeClassName:be.a.active,to:"/news",children:"News"})]}),Object(L.jsxs)("li",{className:"".concat(be.a.item),children:[Object(L.jsx)(fe.a,{style:{color:"#1f3bff"}}),Object(L.jsx)(re.b,{className:be.a.link,activeClassName:be.a.active,to:"/music",children:"Music"})]}),Object(L.jsxs)("li",{className:"".concat(be.a.item),children:[Object(L.jsx)(we.a,{style:{color:"#1f3bff"}}),Object(L.jsx)(re.b,{className:be.a.link,activeClassName:be.a.active,to:"/users",children:"Users"})]}),Object(L.jsxs)("li",{className:"".concat(be.a.item),children:[Object(L.jsx)(ve.a,{style:{color:"#1f3bff"}}),Object(L.jsx)(re.b,{className:be.a.link,activeClassName:be.a.active,to:"/settings",children:"Settings"})]})]}),Object(L.jsx)(Ie,{})]})},Te=Object($.b)((function(e){return{mes:Object(i.a)({},e).dialogsPage.messageData}}))(Se),Ue=(a(122),a(95)),Me=a(96),Ae=a(98),Le=a(97),Be=a(143),ze=a(68),Fe=a.n(ze),Ee=a(23),We=a.n(Ee),He=function(e){Object(Ae.a)(a,e);var t=Object(Le.a)(a);function a(){var e;Object(Ue.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){e.props.setCurrentPage(t),Fe.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize)).then((function(t){e.props.setUsers(t.data.items)}))},e.render=function(){var t=Math.ceil(e.props.totalUsers/e.props.pageSize);return Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{className:We.a.count,children:[Object(L.jsx)(U.a,{variant:"outlined",color:"secondary",onClick:function(){e.props.currentPage>1?e.onPageChanged(e.props.currentPage-1):e.onPageChanged(1)},children:"back"}),Object(L.jsxs)("span",{className:We.a.span,children:[e.props.currentPage," / ",t]}),Object(L.jsx)(Z.a,{label:"Page number",type:"text",onChange:function(t){e.onPageChanged(t.currentTarget.value)}}),Object(L.jsx)(U.a,{variant:"outlined",color:"secondary",onClick:function(){return e.onPageChanged(e.props.currentPage+1)},children:"next"})]}),Object(L.jsx)("div",{className:We.a.box,children:e.props.users.map((function(t){return Object(L.jsxs)(Be.a,{elevation:9,className:We.a.user_block,children:[Object(L.jsxs)("div",{className:We.a.first,children:[Object(L.jsxs)("div",{className:We.a.photo,children:[Object(L.jsx)(H.a,{src:null===t.photos.small?"https://yt3.ggpht.com/ytc/AAUvwnihIIjfolgDP46s4snHGuI9U1oY-gppxfU2l0YFNDc=s900-c-k-c0x00ffffff-no-rj":t.photos.small,alt:"",style:{height:"70px",width:"70px"}}),Object(L.jsxs)("span",{children:[Object(L.jsx)("div",{className:We.a.name,children:t.name}),Object(L.jsx)("div",{children:t.status})]})]}),Object(L.jsx)("div",{children:t.followed?Object(L.jsx)(U.a,{variant:"outlined",color:"primary",onClick:function(){return e.props.unfollowUser(t.id)},children:"Follow"}):Object(L.jsx)(U.a,{variant:"outlined",color:"secondary",onClick:function(){return e.props.followUser(t.id)},children:"UnFollow"})})]}),Object(L.jsx)("div",{className:We.a.info,children:Object(L.jsxs)("span",{className:We.a.location,children:[Object(L.jsx)("div",{className:We.a.location_city,children:t.location?t.location.city:"Minsk"}),Object(L.jsx)("div",{className:We.a.location_country,children:t.location?t.location.country:"Belarus"})]})})]},t.id)}))})]})},e}return Object(Me.a)(a,[{key:"componentDidMount",value:function(){var e=this;Fe.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){console.log(t.data),e.props.setUsers(t.data.items),e.props.setTotalCounts(t.data.totalCount)}))}}]),a}(y.a.Component),Re=Object($.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsers:e.usersPage.totalUsersCounts,currentPage:e.usersPage.currentPage}}),(function(e){return{followUser:function(t){e({type:p,userID:t})},unfollowUser:function(t){e({type:h,userID:t})},setUsers:function(t){e(function(e){return{type:g,users:e}}(t))},setCurrentPage:function(t){e(function(e){return{type:x,currentPage:e}}(t))},setTotalCounts:function(t){e({type:O,totalCount:t})}}}))(He),Ge=a(12);var Je=function(){return Object(L.jsxs)("div",{className:"app-wrapper",children:[Object(L.jsx)(B,{}),Object(L.jsx)(Te,{}),Object(L.jsxs)("div",{className:"app-wrapper-content",children:[Object(L.jsx)(Ge.a,{render:function(){return Object(L.jsx)(te,{})},path:"/profile"}),Object(L.jsx)(Ge.a,{render:function(){return Object(L.jsx)(de,{})},path:"/dialogs"}),Object(L.jsx)(Ge.a,{render:function(){return Object(L.jsx)(ae,{})},path:"/news"}),Object(L.jsx)(Ge.a,{render:function(){return Object(L.jsx)(se,{})},path:"/music"}),Object(L.jsx)(Ge.a,{render:function(){return Object(L.jsx)(Re,{})},path:"/users"}),Object(L.jsx)(Ge.a,{render:function(){return Object(L.jsx)(ne,{})},path:"/settings"})]})]})},Ye=function(){P.a.render(Object(L.jsx)(y.a.StrictMode,{children:Object(L.jsx)(re.a,{children:Object(L.jsx)($.a,{store:_,children:Object(L.jsx)(Je,{})})})}),document.getElementById("root"))};Ye(),s()},23:function(e,t,a){e.exports={user_block:"user_user_block__2n3L6",span:"user_span__2paRr",count:"user_count__2sDTk",box:"user_box__2Idnk",info:"user_info__1N_bD",name:"user_name__1C2Ks",location:"user_location__2nUhu",location_city:"user_location_city__2lcqH",location_country:"user_location_country__3kJdc",photo:"user_photo__2cvmY"}},25:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__35GVd",dialogs_item:"Dialogs_dialogs_item__1WAsM",messages:"Dialogs_messages__D6Lx8",dialog:"Dialogs_dialog__yr_hl",message:"Dialogs_message__2erMI",active:"Dialogs_active__1Cixb",addBox:"Dialogs_addBox__3scXj",btn_grad:"Dialogs_btn_grad__1gFK8"}},35:function(e,t,a){e.exports={boxPost:"Post_boxPost__2c19w",contentPost:"Post_contentPost__33SSv",postImg:"Post_postImg__3v31Z",infoBox:"Post_infoBox__2F4hz",like:"Post_like__3Jnpd",span:"Post_span__3XY5E",heart:"Post_heart__3zeog"}},49:function(e,t,a){e.exports={description_block:"ProfileInfo_description_block__13DWy",boxImg:"ProfileInfo_boxImg__2yyz-",paper:"ProfileInfo_paper__3d4zz"}},65:function(e,t,a){e.exports={content:"MyPosts_content__1i_ct",boxImg:"MyPosts_boxImg__2zrOf",posts_block:"MyPosts_posts_block__3JhwO",btn_grad:"MyPosts_btn_grad__1IiCb"}},72:function(e,t,a){},81:function(e,t,a){e.exports={header:"Header_header__RSx6g"}},88:function(e,t,a){e.exports={grup:"NavFriend_grup__1GjvL"}}},[[141,1,2]]]);
//# sourceMappingURL=main.e48c981f.chunk.js.map