(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{PfV2:function(e,a,t){"use strict";var l=t("4Gf+"),u=t("GyWo");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("U7p0");var r=l(t("pXLU"));t("Ljnx");var n=l(t("EfNK"));t("Odsp");var d=l(t("0LJ2"));t("VfK5");var i=l(t("LcI5"));t("YvrW");var f=l(t("uG6z"));t("ryTD");var s=l(t("dOo4")),m=l(t("RSNA"));t("baa/");var o=l(t("6wzi"));t("ZkGU");var c=l(t("zOAu")),p=l(t("OjS7")),E=l(t("jx1L")),g=l(t("pvd2")),v=l(t("RPUv")),b=l(t("1KPh")),h=l(t("ZA+g"));t("1EyM");var y=l(t("VEhp"));t("K5T9");var V,q,x,w=l(t("xn9m")),U=u(t("4G06")),_=t("LneV"),G=l(t("zHco")),k=w.default.Item,L=y.default.TextArea,S=(V=(0,_.connect)(function(e){var a=e.api,t=e.loading;return{api:a,loading:t.models.api,submitting:t.effects["api/submit"]}}),q=w.default.create(),V(x=q(x=function(e){function a(){var e,t;(0,E.default)(this,a);for(var l=arguments.length,u=new Array(l),r=0;r<l;r++)u[r]=arguments[r];return t=(0,v.default)(this,(e=(0,b.default)(a)).call.apply(e,[this].concat(u))),t.state={loading:!1},t.handleSubmit=function(e){var a=t.props,l=a.dispatch,u=a.form,r=a.match.params.id;e.preventDefault();var n=t.state.imageUrl;u.setFieldsValue({logo:n}),u.validateFieldsAndScroll(function(e,a){e||l({type:"api/submit",payload:{apiname:"member/level",id:r,params:(0,p.default)({},a)},callback:function(e){1001===e.code?c.default.success(e.message):c.default.error(e.message)}})})},t.beforeUpload=function(e){var a="image/jpeg"===e.type;a||c.default.error("You can only upload JPG file!");var t=e.size/1024/1024<2;return t||c.default.error("Image must smaller than 2MB!"),a&&t},t.handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&t.setState({imageUrl:e.fileList[0].response.data.url,loading:!1}):t.setState({loading:!0})},t}return(0,h.default)(a,e),(0,g.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.dispatch,t=e.match.params;void 0!==t.id&&a({type:"api/detail",payload:{apiname:"member/level",id:t.id},callback:function(e){1001===e.code?c.default.success(e.message):c.default.error(e.message)}})}},{key:"render",value:function(){var e=this.props,a=e.api.detail,t=e.submitting,l=e.form.getFieldDecorator,u=this.state,c=u.imageUrl,p=u.loading,E={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},g={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},v=U.default.createElement("div",null,U.default.createElement(o.default,{type:p?"loading":"plus"}),U.default.createElement("div",{className:"ant-upload-text"},"Upload"));return U.default.createElement(G.default,null,U.default.createElement(r.default,{bordered:!1},U.default.createElement(w.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},U.default.createElement(k,(0,m.default)({},E,{label:"\u7b49\u7ea7\u540d\u79f0"}),l("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:a.name})(U.default.createElement(y.default,{placeholder:"\u7b49\u7ea7\u540d\u79f0"}))),U.default.createElement(k,(0,m.default)({},E,{label:"\u7b49\u7ea7\u63cf\u8ff0"}),l("description",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:a.description})(U.default.createElement(L,{rows:2,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"}))),U.default.createElement(k,(0,m.default)({},E,{label:U.default.createElement("span",null,"\u7b49\u7ea7\u5927\u5c0f\xa0",U.default.createElement(s.default,{title:"\u6570\u5b57\u8d8a\u5927\uff0c\u7b49\u7ea7\u8d8a\u5927"},U.default.createElement(o.default,{type:"question-circle-o"})))}),l("level",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:a.level})(U.default.createElement(f.default,{min:1,max:9999}))),U.default.createElement(k,(0,m.default)({},E,{label:"\u56e2\u961f\u8fd4\u4f63"}),l("group_rate1",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:a.group_rate1})(U.default.createElement(f.default,{min:.01,max:100,formatter:function(e){return"".concat(e,"%")}}))),U.default.createElement(k,(0,m.default)({},E,{label:"\u8865\u8d34\u8fd4\u4f63"}),l("group_rate2",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:a.group_rate2})(U.default.createElement(f.default,{min:.01,max:100,formatter:function(e){return"".concat(e,"%")}}))),U.default.createElement(k,(0,m.default)({},E,{label:"\u81ea\u8d2d\u8fd4\u4f63"}),l("commission_rate1",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:a.commission_rate1})(U.default.createElement(f.default,{min:.01,max:100,formatter:function(e){return"".concat(e,"%")}}))),U.default.createElement(k,(0,m.default)({},E,{label:"\u4e0b\u7ea7\u8fd4\u4f63"}),l("commission_rate2",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:a.commission_rate2})(U.default.createElement(f.default,{min:.01,max:100,formatter:function(e){return"".concat(e,"%")}}))),U.default.createElement(k,(0,m.default)({},E,{label:"\u5347\u7ea7\u6240\u9700\u6210\u957f\u503c"}),l("credit",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:a.credit})(U.default.createElement(f.default,{min:1,max:99999}))),U.default.createElement(k,(0,m.default)({},E,{label:"\u200b\u5347\u7ea7\u6240\u9700\u652f\u4ed8\u91d1\u989d"}),l("price",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:a.price})(U.default.createElement(f.default,{min:1,max:99999,formatter:function(e){return"".concat(e,"\u5143")}}))),U.default.createElement(k,(0,m.default)({},E,{label:U.default.createElement("span",null,"\u7b49\u7ea7\u6709\u6548\u65f6\u957f\xa0",U.default.createElement(s.default,{title:"\u586b\u51990\u5219\u4e3a\u6c38\u4e0d\u8fc7\u671f"},U.default.createElement(o.default,{type:"question-circle-o"})))}),l("duration",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:a.duration})(U.default.createElement(f.default,{min:1,max:99999,formatter:function(e){return"".concat(e,"\u5929")}}))),U.default.createElement(k,(0,m.default)({},E,{label:"\u9ed8\u8ba4\u7b49\u7ea7"}),U.default.createElement("div",null,l("default",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}],initialValue:a.default?a.default:1})(U.default.createElement(i.default.Group,null,U.default.createElement(i.default,{value:1},"\u5426"),U.default.createElement(i.default,{value:0},"\u662f"))))),U.default.createElement(k,(0,m.default)({},E,{label:"\u72b6\u6001"}),U.default.createElement("div",null,l("status",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}],initialValue:a.status?a.status:1})(U.default.createElement(i.default.Group,null,U.default.createElement(i.default,{value:1},"\u6b63\u5e38"),U.default.createElement(i.default,{value:0},"\u7981\u7528"))))),U.default.createElement(k,(0,m.default)({},E,{label:"\u8fd4\u4f63\u7c7b\u578b"}),U.default.createElement("div",null,l("is_group",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}],initialValue:a.is_group?a.status:1})(U.default.createElement(i.default.Group,null,U.default.createElement(i.default,{value:1},"\u65e0\u9650\u4ee3"),U.default.createElement(i.default,{value:0},"\u4e8c\u7ea7\u5206\u9500"))))),U.default.createElement(k,(0,m.default)({},E,{label:"\u4e0a\u4f20\u56fe\u7247"}),U.default.createElement("div",null,l("logo",{rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\u56fe\u7247"}],initialValue:a.logo})(U.default.createElement(d.default,{name:"file",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"//lv5.vaiwan.com:8081/api/admin/image/file/upload",beforeUpload:this.beforeUpload,onChange:this.handleChange},c?U.default.createElement("img",{src:c,style:{maxWidth:200},alt:"avatar"}):v)))),U.default.createElement(k,(0,m.default)({},g,{style:{marginTop:32}}),U.default.createElement(n.default,{type:"primary",htmlType:"submit",loading:t},"\u63d0\u4ea4")))))}}]),a}(U.PureComponent))||x)||x),C=S;a.default=C}}]);