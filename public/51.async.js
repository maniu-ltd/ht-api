(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{OosE:function(e,t,a){"use strict";var l=a("4Gf+"),n=a("GyWo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("B1oH");var u=l(a("6p6/"));a("3wa/");var d=l(a("lJUX"));a("U7p0");var r=l(a("pXLU"));a("T7DU");var i=l(a("/72G"));a("X5VD");var o=l(a("bA53"));a("Xe2/");var f=l(a("PRXz")),c=l(a("RSNA"));a("Ljnx");var s=l(a("EfNK"));a("t0lF");var m=l(a("kDCt"));a("baa/");var p=l(a("6wzi"));a("BrD1");var E=l(a("SpN2"));a("N/b1");var v=l(a("YdcP"));a("K1xq");var h=l(a("lmRu")),y=l(a("OjS7")),b=l(a("jx1L")),w=l(a("pvd2")),g=l(a("RPUv")),C=l(a("1KPh")),S=l(a("ZA+g"));a("1EyM");var x=l(a("VEhp"));a("9RKC");var D=l(a("6RLy"));a("VfK5");var k=l(a("LcI5"));a("K5T9");var N,L,I,M=l(a("xn9m")),T=n(a("4G06")),A=a("Wq8l"),O=l(a("I9Uw")),V=a("LneV"),Y=l(a("zHco")),B=l(a("ALo4")),z=l(a("uCNL")),K=M.default.Item,R=k.default.Button,q=k.default.Group,H=D.default.Option,P=x.default.Search,U=x.default.TextArea,G=(N=(0,V.connect)(function(e){var t=e.list,a=e.loading;return{list:t,loading:a.models.list}}),L=M.default.create(),N(I=L(I=function(e){function t(){var e,a;(0,b.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,g.default)(this,(e=(0,C.default)(t)).call.apply(e,[this].concat(n))),a.state={visible:!1,done:!1},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0})},a.showEditModal=function(e){a.setState({visible:!0,current:e})},a.handleDone=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({done:!1,visible:!1})},a.handleCancel=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,u=a.state.current,d=u?u.id:"";setTimeout(function(){return a.addBtn.blur()},0),n.validateFields(function(e,t){e||(a.setState({done:!0}),l({type:"list/submit",payload:(0,y.default)({id:d},t)}))})},a.deleteItem=function(e){var t=a.props.dispatch;t({type:"list/submit",payload:{id:e}})},a}return(0,S.default)(t,e),(0,w.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"list/fetch",payload:{count:5}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list.list,l=t.loading,n=this.props.form.getFieldDecorator,y=this.state,b=y.visible,w=y.done,g=y.current,C=void 0===g?{}:g,S=function(t,a){"edit"===t?e.showEditModal(a):"delete"===t&&h.default.confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id)}})},k=w?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},N=function(e){var t=e.title,a=e.value,l=e.bordered;return T.default.createElement("div",{className:z.default.headerInfo},T.default.createElement("span",null,t),T.default.createElement("p",null,a),l&&T.default.createElement("em",null))},L=T.default.createElement("div",{className:z.default.extraContent},T.default.createElement(q,{defaultValue:"all"},T.default.createElement(R,{value:"all"},"\u5168\u90e8"),T.default.createElement(R,{value:"progress"},"\u8fdb\u884c\u4e2d"),T.default.createElement(R,{value:"waiting"},"\u7b49\u5f85\u4e2d")),T.default.createElement(P,{className:z.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),I={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},V=function(e){var t=e.data,a=t.owner,l=t.createdAt,n=t.percent,u=t.status;return T.default.createElement("div",{className:z.default.listContent},T.default.createElement("div",{className:z.default.listContentItem},T.default.createElement("span",null,"Owner"),T.default.createElement("p",null,a)),T.default.createElement("div",{className:z.default.listContentItem},T.default.createElement("span",null,"\u5f00\u59cb\u65f6\u95f4"),T.default.createElement("p",null,(0,O.default)(l).format("YYYY-MM-DD HH:mm"))),T.default.createElement("div",{className:z.default.listContentItem},T.default.createElement(v.default,{percent:n,status:u,strokeWidth:6,style:{width:180}})))},G=function(e){return T.default.createElement(m.default,{overlay:T.default.createElement(E.default,{onClick:function(t){var a=t.key;return S(a,e.current)}},T.default.createElement(E.default.Item,{key:"edit"},"\u7f16\u8f91"),T.default.createElement(E.default.Item,{key:"delete"},"\u5220\u9664"))},T.default.createElement("a",null,"\u66f4\u591a ",T.default.createElement(p.default,{type:"down"})))},X=function(){return w?T.default.createElement(B.default,{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:T.default.createElement(s.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:z.default.formResult}):T.default.createElement(M.default,{onSubmit:e.handleSubmit},T.default.createElement(K,(0,c.default)({label:"\u4efb\u52a1\u540d\u79f0"},e.formLayout),n("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}],initialValue:C.title})(T.default.createElement(x.default,{placeholder:"\u8bf7\u8f93\u5165"}))),T.default.createElement(K,(0,c.default)({label:"\u5f00\u59cb\u65f6\u95f4"},e.formLayout),n("createdAt",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4"}],initialValue:C.createdAt?(0,O.default)(C.createdAt):null})(T.default.createElement(f.default,{showTime:!0,placeholder:"\u8bf7\u9009\u62e9",format:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}}))),T.default.createElement(K,(0,c.default)({label:"\u4efb\u52a1\u8d1f\u8d23\u4eba"},e.formLayout),n("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4efb\u52a1\u8d1f\u8d23\u4eba"}],initialValue:C.owner})(T.default.createElement(D.default,{placeholder:"\u8bf7\u9009\u62e9"},T.default.createElement(H,{value:"\u4ed8\u6653\u6653"},"\u4ed8\u6653\u6653"),T.default.createElement(H,{value:"\u5468\u6bdb\u6bdb"},"\u5468\u6bdb\u6bdb")))),T.default.createElement(K,(0,c.default)({},e.formLayout,{label:"\u4ea7\u54c1\u63cf\u8ff0"}),n("subDescription",{rules:[{message:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26\u7684\u4ea7\u54c1\u63cf\u8ff0\uff01",min:5}],initialValue:C.subDescription})(T.default.createElement(U,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"}))))};return T.default.createElement(Y.default,null,T.default.createElement("div",{className:z.default.standardList},T.default.createElement(r.default,{bordered:!1},T.default.createElement(i.default,null,T.default.createElement(o.default,{sm:8,xs:24},T.default.createElement(N,{title:"\u6211\u7684\u5f85\u529e",value:"8\u4e2a\u4efb\u52a1",bordered:!0})),T.default.createElement(o.default,{sm:8,xs:24},T.default.createElement(N,{title:"\u672c\u5468\u4efb\u52a1\u5e73\u5747\u5904\u7406\u65f6\u95f4",value:"32\u5206\u949f",bordered:!0})),T.default.createElement(o.default,{sm:8,xs:24},T.default.createElement(N,{title:"\u672c\u5468\u5b8c\u6210\u4efb\u52a1\u6570",value:"24\u4e2a\u4efb\u52a1"})))),T.default.createElement(r.default,{className:z.default.listCard,bordered:!1,title:"\u6807\u51c6\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:L},T.default.createElement(s.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal,ref:function(t){e.addBtn=(0,A.findDOMNode)(t)}},"\u6dfb\u52a0"),T.default.createElement(u.default,{size:"large",rowKey:"id",loading:l,pagination:I,dataSource:a,renderItem:function(t){return T.default.createElement(u.default.Item,{actions:[T.default.createElement("a",{onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"\u7f16\u8f91"),T.default.createElement(G,{current:t})]},T.default.createElement(u.default.Item.Meta,{avatar:T.default.createElement(d.default,{src:t.logo,shape:"square",size:"large"}),title:T.default.createElement("a",{href:t.href},t.title),description:t.subDescription}),T.default.createElement(V,{data:t}))}}))),T.default.createElement(h.default,(0,c.default)({title:w?null:"\u4efb\u52a1".concat(C?"\u7f16\u8f91":"\u6dfb\u52a0"),className:z.default.standardListForm,width:640,bodyStyle:w?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:b},k),X()))}}]),t}(T.PureComponent))||I)||I),X=G;t.default=X}}]);