(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{jVKi:function(e,t,a){"use strict";var l=a("4Gf+"),r=a("GyWo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("U7p0");var n=l(a("pXLU"));a("t0lF");var d=l(a("kDCt"));a("Ljnx");var s=l(a("EfNK"));a("Odsp");var u=l(a("0LJ2"));a("YvrW");var o=l(a("uG6z")),i=l(a("RSNA"));a("baa/");var c=l(a("6wzi"));a("BrD1");var f=l(a("SpN2"));a("K1xq");var m=l(a("lmRu"));a("ZkGU");var p=l(a("zOAu")),g=l(a("OjS7"));a("I9VT");var h=l(a("OsYg"));a("mXkF");var v=l(a("J7Y1"));a("3wa/");var y=l(a("lJUX")),E=l(a("jx1L")),b=l(a("pvd2")),S=l(a("RPUv")),w=l(a("1KPh")),C=l(a("ZA+g"));a("1EyM");var L=l(a("VEhp"));a("VfK5");var x=l(a("LcI5"));a("K5T9");var k,I,U,O=l(a("xn9m")),R=r(a("4G06")),V=a("LneV"),N=l(a("zHco")),M=l(a("CkN6")),F=a("+n12"),T=l(a("kISo")),q=O.default.Item,K=x.default.Group,z=L.default.Search,B=L.default.TextArea,D=(k=(0,V.connect)(function(e){var t=e.api,a=e.loading;return{api:t,loading:a.models.api}}),I=O.default.create(),k(U=I(U=function(e){function t(){var e,a;(0,E.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,S.default)(this,(e=(0,w.default)(t)).call.apply(e,[this].concat(r))),a.state={visible:!1,selectedRows:[],isEdit:!1,current:{},uploading:!1,search:{},params:{orderBy:"id",sortedBy:"desc",search:""}},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.columns=[{title:"\u5206\u7c7b\u540d",render:function(e){return R.default.createElement(R.Fragment,null,R.default.createElement(y.default,{size:"small",shape:"square",style:{marginRight:"5px"},src:e.logo}),R.default.createElement("span",null,e.name))}},{title:"\u7c7b\u578b",dataIndex:"type",align:"left",filters:[{text:"\u6587\u7ae0\u5206\u7c7b",value:1},{text:"\u4ea7\u54c1\u5206\u7c7b",value:2}],filterMultiple:!1,render:function(e){return 1===e?R.default.createElement(v.default,{color:"magenta"},"\u6587\u7ae0"):R.default.createElement(v.default,{color:"green"},"\u4ea7\u54c1")}},{title:"\u6392\u5e8f",dataIndex:"sort",sorter:!0,align:"left"},{title:"\u7c7b\u578b",dataIndex:"status",align:"left",filters:[{text:"\u6b63\u5e38",value:1},{text:"\u7981\u7528",value:0}],filterMultiple:!1,render:function(e){return 1===e?R.default.createElement(v.default,{color:"#87d068"},"\u6b63\u5e38"):R.default.createElement(v.default,{color:"#f50"},"\u7981\u7528")}},{title:"\u64cd\u4f5c",render:function(e,t){return R.default.createElement(R.Fragment,null,R.default.createElement("a",{onClick:function(e){e.preventDefault(),a.showEditModal(t)}},"\u7f16\u8f91"),R.default.createElement(h.default,{type:"vertical"}),R.default.createElement("a",{style:{color:"#c92c2c"},onClick:function(e){e.preventDefault(),a.deleteItem(t)}},"\u5220\u9664"))}}],a.showModal=function(){a.setState({visible:!0,current:void 0,isEdit:!1,imageUrl:void 0})},a.showEditModal=function(e){a.setState({visible:!0,current:e,imageUrl:e.logo,isEdit:!0})},a.handleCancel=function(){a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.dispatch,r=t.form,n=a.state,d=n.current,s=n.imageUrl,u=d?d.id:void 0;a.setState({visible:!1}),r.setFieldsValue({logo:s}),r.validateFields(function(e,t){e||l({type:"api/submit",payload:{apiname:"cms/category",id:u,params:(0,g.default)({},t)},callback:function(e){return 1001===e.code?p.default.success(e.message):p.default.error(e.message)}})})},a.deleteItem=function(e){var t=a.props.dispatch;m.default.confirm({title:"\u5220\u9664",content:"\u786e\u5b9a\u5220\u9664\u8be5\u6761\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){t({type:"api/submit",payload:{apiname:"cms/category",id:e.id},callback:function(e){return 1001===e.code?p.default.success(e.message):p.default.error(e.message)}})}})},a.onSearch=function(e){var t=a.props.dispatch,l=a.state,r=l.search,n=l.params,d=(0,g.default)({},r,{name:e}),s=(0,g.default)({},n,{search:(0,F.getSearchParams)(d)});t({type:"api/fetch",payload:{apiname:"cms/category",params:s}})},a.beforeUpload=function(e){var t="image/jpeg"===e.type;t||p.default.error("You can only upload JPG file!");var a=e.size/1024/1024<2;return a||p.default.error("Image must smaller than 2MB!"),t&&a},a.handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&a.setState({imageUrl:e.fileList[0].response.data.url,uploading:!1}):a.setState({uploading:!0})},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.handleStandardTableChange=function(e,t,l){var r=a.props.dispatch,n=a.state,d=n.search,s=n.params,u=(0,g.default)({},s,{page:e.current,limit:e.pageSize,searchJoin:"and"}),o=(0,g.default)({},d),i=l.field,c=l.order;void 0!==i&&void 0!==c&&(u=(0,g.default)({},u,{orderBy:i,sortedBy:"descend"===c?"desc":"asc"}));var f=t.type,m=t.status;void 0!==f&&(o=(0,g.default)({},o,{type:f[0]})),void 0!==m&&(o=(0,g.default)({},o,{status:m[0]})),u=(0,g.default)({},u,{search:(0,F.getSearchParams)(o)}),a.setState({params:u,search:o}),console.log(u,o),r({type:"api/fetch",payload:{apiname:"cms/category",params:u}})},a}return(0,C.default)(t,e),(0,b.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.state.params;e({type:"api/fetch",payload:{apiname:"cms/category",params:t},callback:function(e){1001===e.code?p.default.success(e.message):p.default.error(e.message)}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.api,l=t.loading,r=this.props.form.getFieldDecorator,p=this.state,g=p.selectedRows,h=p.visible,v=p.isEdit,y=p.current,E=void 0===y?{}:y,b=R.default.createElement(f.default,{onClick:this.handleMenuClick,selectedKeys:[]},R.default.createElement(f.default.Item,{key:"remove"},"\u5220\u9664"),R.default.createElement(f.default.Item,{key:"approval"},"\u6279\u91cf\u5ba1\u6279")),S={okText:"\u63d0\u4ea4",onOk:this.handleSubmit,onCancel:this.handleCancel},w=R.default.createElement("div",null,R.default.createElement(z,{className:T.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165\u5206\u7c7b\u540d\u641c\u7d22",onSearch:this.onSearch})),C=function(){var t=e.state,a=t.imageUrl,l=t.uploading,n=R.default.createElement("div",null,R.default.createElement(c.default,{type:l?"loading":"plus"}),R.default.createElement("div",{className:"ant-upload-text"},"\u4e0a\u4f20"));return R.default.createElement(O.default,{onSubmit:e.handleSubmit},R.default.createElement(q,(0,i.default)({label:"\u5206\u7c7b\u540d"},e.formLayout),r("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5206\u7c7b\u540d"}],initialValue:E.name})(R.default.createElement(L.default,{placeholder:"\u8bf7\u8f93\u5165\u5206\u7c7b\u540d"}))),R.default.createElement(q,(0,i.default)({label:"\u5173\u952e\u8bcd"},e.formLayout),r("keywords",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5206\u7c7b\u63cf\u8ff0"}],initialValue:E.keywords})(R.default.createElement(B,{rows:2,placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd\uff0c\u6709\u5229\u4e8eSEO"}))),R.default.createElement(q,(0,i.default)({label:"\u63cf\u8ff0"},e.formLayout),r("description",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5206\u7c7b\u63cf\u8ff0"}],initialValue:E.description})(R.default.createElement(B,{rows:2,placeholder:"\u8bf7\u8f93\u5165\u5206\u7c7b\u63cf\u8ff0\uff0c\u6709\u5229\u4e8eSEO"}))),R.default.createElement(q,(0,i.default)({label:"\u6392\u5e8f"},e.formLayout),r("sort",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5206\u7c7b\u6392\u5e8f"}],initialValue:E.sort?E.sort:100})(R.default.createElement(o.default,{min:1,max:1e5}))),R.default.createElement(q,(0,i.default)({label:"\u72b6\u6001"},e.formLayout),r("status",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u56fe\u7247\u72b6\u6001"}],initialValue:E.status?E.status:1})(R.default.createElement(K,{name:"status"},R.default.createElement(x.default,{value:1},"\u663e\u793a"),R.default.createElement(x.default,{value:0},"\u9690\u85cf")))),R.default.createElement(q,(0,i.default)({label:"\u7c7b\u578b"},e.formLayout),r("type",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5206\u7c7b\u7c7b\u578b"}],initialValue:E.type?E.type:1})(R.default.createElement(K,{name:"type"},R.default.createElement(x.default,{value:1},"\u6587\u7ae0"),R.default.createElement(x.default,{value:2},"\u4ea7\u54c1")))),R.default.createElement(q,(0,i.default)({label:"\u56fe\u6807"},e.formLayout),r("logo",{rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\u5206\u7c7b\u56fe\u6807"}],initialValue:E.logo})(R.default.createElement(u.default,{name:"file",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"//lv5.vaiwan.com:8081/api/admin/image/file/upload",beforeUpload:e.beforeUpload,onChange:e.handleChange},a?R.default.createElement("img",{src:a,alt:"avatar",style:{width:100,height:100},className:"thumb"}):n))))};return R.default.createElement(N.default,null,R.default.createElement("div",{className:T.default.standardList},R.default.createElement(n.default,{bordered:!1,title:"\u5206\u7c7b\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:w},R.default.createElement("div",{className:T.default.tableList},R.default.createElement("div",{className:T.default.tableListOperator},g.length>0&&R.default.createElement("span",null,R.default.createElement(s.default,null,"\u6279\u91cf\u64cd\u4f5c"),R.default.createElement(d.default,{overlay:b},R.default.createElement(s.default,null,"\u66f4\u591a\u64cd\u4f5c ",R.default.createElement(c.default,{type:"down"}))))),R.default.createElement(s.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal},"\u6dfb\u52a0"),R.default.createElement(M.default,{selectedRows:g,loading:l,data:a,rowKey:"id",columns:this.columns,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange})))),R.default.createElement(m.default,(0,i.default)({title:v?"\u7f16\u8f91\u5206\u7c7b":"\u6dfb\u52a0\u5206\u7c7b",className:T.default.standardListForm,width:640,bodyStyle:{padding:"28px 0 0"},destroyOnClose:!0,visible:h},S),C()))}}]),t}(R.PureComponent))||U)||U),G=D;t.default=G},kISo:function(e,t,a){e.exports={tableList:"antd-pro-pages-cms-category-list-tableList",tableListOperator:"antd-pro-pages-cms-category-list-tableListOperator",standardList:"antd-pro-pages-cms-category-list-standardList",headerInfo:"antd-pro-pages-cms-category-list-headerInfo",listContent:"antd-pro-pages-cms-category-list-listContent",listContentItem:"antd-pro-pages-cms-category-list-listContentItem",extraContentSearch:"antd-pro-pages-cms-category-list-extraContentSearch",listCard:"antd-pro-pages-cms-category-list-listCard",standardListForm:"antd-pro-pages-cms-category-list-standardListForm",formResult:"antd-pro-pages-cms-category-list-formResult"}}}]);