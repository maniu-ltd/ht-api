(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{YiZ1:function(e,t,a){e.exports={avatarHolder:"antd-pro-pages-account-center-center-avatarHolder",name:"antd-pro-pages-account-center-center-name",detail:"antd-pro-pages-account-center-center-detail",title:"antd-pro-pages-account-center-center-title",group:"antd-pro-pages-account-center-center-group",address:"antd-pro-pages-account-center-center-address",tagsTitle:"antd-pro-pages-account-center-center-tagsTitle",teamTitle:"antd-pro-pages-account-center-center-teamTitle",tags:"antd-pro-pages-account-center-center-tags",team:"antd-pro-pages-account-center-center-team",tabsCard:"antd-pro-pages-account-center-center-tabsCard"}},zMb4:function(e,t,a){"use strict";var n=a("4Gf+"),l=a("GyWo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("U7p0");var r=n(a("pXLU"));a("XW8r");var c=n(a("y+tk"));a("T7DU");var u=n(a("/72G"));a("X5VD");var d=n(a("bA53"));a("3wa/");var s=n(a("lJUX"));a("baa/");var i=n(a("6wzi"));a("1EyM");var o=n(a("VEhp"));a("mXkF");var f=n(a("J7Y1"));a("I9VT");var p,m,g=n(a("OsYg")),h=n(a("h+HB")),v=n(a("jx1L")),E=n(a("pvd2")),b=n(a("RPUv")),y=n(a("1KPh")),k=n(a("ZA+g")),w=n(a("fKDl")),C=l(a("4G06")),T=a("LneV"),N=n(a("FepY")),j=n(a("RBPO")),V=n(a("v99g")),I=n(a("YiZ1")),L=(p=(0,T.connect)(function(e){var t=e.loading,a=e.user,n=e.project;return{listLoading:t.effects["list/fetch"],currentUser:a.currentUser,currentUserLoading:t.effects["user/fetchCurrent"],project:n,projectLoading:t.effects["project/fetchNotice"]}}),p(m=function(e){function t(){var e,a;(0,v.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,b.default)(this,(e=(0,y.default)(t)).call.apply(e,[this].concat(l))),a.state={newTags:[],inputVisible:!1,inputValue:""},a.onTabChange=function(e){var t=a.props.match;switch(e){case"articles":j.default.push("".concat(t.url,"/articles"));break;case"applications":j.default.push("".concat(t.url,"/applications"));break;case"projects":j.default.push("".concat(t.url,"/projects"));break;default:break}},a.showInput=function(){a.setState({inputVisible:!0},function(){return a.input.focus()})},a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=(0,w.default)((0,w.default)(a)),t=e.state,n=t.inputValue,l=t.newTags;n&&0===l.filter(function(e){return e.label===n}).length&&(l=(0,h.default)(l).concat([{key:"new-".concat(l.length),label:n}])),a.setState({newTags:l,inputVisible:!1,inputValue:""})},a}return(0,k.default)(t,e),(0,E.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"user/fetchCurrent"}),e({type:"list/fetch",payload:{count:8}}),e({type:"project/fetchNotice"})}},{key:"render",value:function(){var e=this.state,t=e.newTags,a=e.inputVisible,n=e.inputValue,l=this.props,p=l.listLoading,m=l.currentUser,h=l.currentUserLoading,v=l.project.notice,E=l.projectLoading,b=l.match,y=l.location,k=l.children,w=[{key:"articles",tab:C.default.createElement("span",null,"\u6587\u7ae0 ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"applications",tab:C.default.createElement("span",null,"\u5e94\u7528 ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"projects",tab:C.default.createElement("span",null,"\u9879\u76ee ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))}];return C.default.createElement(V.default,{className:I.default.userCenter},C.default.createElement(u.default,{gutter:24},C.default.createElement(d.default,{lg:7,md:24},C.default.createElement(r.default,{bordered:!1,style:{marginBottom:24},loading:h},m&&Object.keys(m).length?C.default.createElement("div",null,C.default.createElement("div",{className:I.default.avatarHolder},C.default.createElement("img",{alt:"",src:m.avatar}),C.default.createElement("div",{className:I.default.name},m.name),C.default.createElement("div",null,m.signature)),C.default.createElement("div",{className:I.default.detail},C.default.createElement("p",null,C.default.createElement("i",{className:I.default.title}),m.title),C.default.createElement("p",null,C.default.createElement("i",{className:I.default.group}),m.group),C.default.createElement("p",null,C.default.createElement("i",{className:I.default.address}),m.geographic.province.label,m.geographic.city.label)),C.default.createElement(g.default,{dashed:!0}),C.default.createElement("div",{className:I.default.tags},C.default.createElement("div",{className:I.default.tagsTitle},"\u6807\u7b7e"),m.tags.concat(t).map(function(e){return C.default.createElement(f.default,{key:e.key},e.label)}),a&&C.default.createElement(o.default,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:n,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!a&&C.default.createElement(f.default,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},C.default.createElement(i.default,{type:"plus"}))),C.default.createElement(g.default,{style:{marginTop:16},dashed:!0}),C.default.createElement("div",{className:I.default.team},C.default.createElement("div",{className:I.default.teamTitle},"\u56e2\u961f"),C.default.createElement(c.default,{spinning:E},C.default.createElement(u.default,{gutter:36},v.map(function(e){return C.default.createElement(d.default,{key:e.id,lg:24,xl:12},C.default.createElement(N.default,{to:e.href},C.default.createElement(s.default,{size:"small",src:e.logo}),e.member))}))))):"loading...")),C.default.createElement(d.default,{lg:17,md:24},C.default.createElement(r.default,{className:I.default.tabsCard,bordered:!1,tabList:w,activeTabKey:y.pathname.replace("".concat(b.path,"/"),""),onTabChange:this.onTabChange,loading:p},k))))}}]),t}(C.PureComponent))||m),U=L;t.default=U}}]);