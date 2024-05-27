(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f1951aa"],{"021a":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("d3b7"),a("159b");function o(t){t.forEach((function(t){4==t.status?(t.disabled=!0,t.projectName+=" (已暂停)"):t.disabled=!1}))}},"2b1a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{title:"任务设置",visible:t.visible,width:"1200px","before-close":t.handleClose},on:{"update:visible":function(e){t.visible=e},open:t.handleOpen}},[e("el-tabs",{attrs:{"tab-position":"left"},model:{value:t.tabActiveName,callback:function(e){t.tabActiveName=e},expression:"tabActiveName"}},[t.taskId?e("el-tab-pane",{staticClass:"deliverable-wrapper",attrs:{label:"交付物模板",name:"交付物模板"}},[e("el-card",{attrs:{shadow:"never"}},[e("el-upload",{attrs:{action:t.uploadFileUrl,headers:t.uploadFileHeaders,data:t.uploadTemplateFileData,"show-file-list":!1,"auto-upload":!0,"before-upload":t.handleBeforeUpload,"on-success":t.handleUploadSuccess,"on-error":t.handleUploadError}},[e("el-button",{attrs:{type:"text"}},[t._v("上传交付物模板")])],1)],1),e("el-card",{attrs:{shadow:"never"}},[e("el-table",{attrs:{data:t.templateList}},[e("el-table-column",{attrs:{label:"文件名",prop:"fileName",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"上传人",prop:"nickName",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"文件大小（KB）",prop:"fileSize",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"上传时间",prop:"createdTime",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleDownload(a.row)}}},[t._v("下载")]),e("el-button",{staticStyle:{color:"#f56c6c"},attrs:{type:"text"},on:{click:function(e){return t.handleDelete(a.row)}}},[t._v("删除")])]}}],null,!1,2586962659)})],1)],1)],1):t._e(),e("el-tab-pane",{staticClass:"approval-wrapper",attrs:{label:"审批设置",name:"审批设置"}},[e("el-card",{attrs:{shadow:"never"}},[e("el-radio-group",{model:{value:t.isApproval,callback:function(e){t.isApproval=e},expression:"isApproval"}},[e("el-radio",{attrs:{label:!1}},[t._v("无需审批")]),e("el-radio",{attrs:{label:!0}},[t._v("需要审批")])],1)],1),e("el-card",{directives:[{name:"show",rawName:"v-show",value:t.isApproval,expression:"isApproval"}],attrs:{shadow:"never"}},[e("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0,"label-width":"68px"}},[e("el-form-item",{attrs:{label:"流程标识",prop:"processKey"}},[e("el-input",{attrs:{placeholder:"请输入流程标识",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery.apply(null,arguments)}},model:{value:t.queryParams.processKey,callback:function(e){t.$set(t.queryParams,"processKey",e)},expression:"queryParams.processKey"}})],1),e("el-form-item",{attrs:{label:"流程名称",prop:"processName"}},[e("el-input",{attrs:{placeholder:"请输入流程名称",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery.apply(null,arguments)}},model:{value:t.queryParams.processName,callback:function(e){t.$set(t.queryParams,"processName",e)},expression:"queryParams.processName"}})],1),e("el-form-item",{attrs:{label:"流程分类",prop:"category"}},[e("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择",size:"small"},model:{value:t.queryParams.category,callback:function(e){t.$set(t.queryParams,"category",e)},expression:"queryParams.category"}},t._l(t.categoryOptions,(function(t){return e("el-option",{key:t.categoryId,attrs:{label:t.categoryName,value:t.code}})})),1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.handleQuery}},[t._v("搜索")]),e("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:t.resetQuery}},[t._v("重置")])],1)],1),e("el-table",{attrs:{fit:"",data:t.processList}},[e("el-table-column",{attrs:{label:"序号",type:"index",width:"50"}}),e("el-table-column",{attrs:{label:"流程标识",align:"center",prop:"processKey","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"流程名称",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleProcessView(a.row)}}},[e("span",[t._v(t._s(a.row.processName))])])]}}])}),e("el-table-column",{attrs:{label:"流程分类",align:"center",prop:"categoryName",formatter:t.categoryFormat}}),e("el-table-column",{attrs:{label:"流程版本",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tag",{attrs:{size:"medium"}},[t._v("v"+t._s(a.row.version))])]}}])}),e("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.suspended?t._e():e("el-tag",{attrs:{type:"success"}},[t._v("激活")]),a.row.suspended?e("el-tag",{attrs:{type:"warning"}},[t._v("挂起")]):t._e()]}}])}),e("el-table-column",{attrs:{label:"部署时间",align:"center",prop:"deploymentTime",width:"180"}}),e("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-radio",{attrs:{value:t.taskDefinitionId,label:a.row.definitionId},on:{input:function(e){return t.changeTaskDefinitionId(a.row)}}},[t._v(" "+t._s(t.taskDefinitionId===a.row.definitionId?"已绑定":"未绑定")+" ")])]}}])})],1),e("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),e("el-dialog",{attrs:{title:t.processView.title,visible:t.processView.open,width:"70%","append-to-body":""},on:{"update:visible":function(e){return t.$set(t.processView,"open",e)}}},[e("process-viewer",{key:"designer-".concat(t.processView.index),style:{height:"400px"},attrs:{xml:t.processView.xmlData}})],1)],1)],1)],1),e("template",{slot:"footer"},[e("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("确 定")])],1)],2)],1)},r=[],n=(a("d3b7"),a("7db0"),a("5f87")),i=a("ca94"),l=a("fef2"),s=a("f8fa"),c=a("95c7"),d=a("ff87"),u={name:"SetTaskDialog",components:{ProcessViewer:d["a"]},props:{visible:{type:Boolean,default:!1},taskId:{type:String,default:""},workFlowable:{type:Object},getTableData:{type:Function}},watch:{taskId:{handler:function(t){this.tabActiveName=t?"交付物模板":"审批设置"},immediate:!0}},data:function(){return{tabActiveName:"",uploadFileUrl:"/prod-api/project/file/upload",uploadFileHeaders:{Authorization:"Bearer "+Object(n["a"])()},uploadTemplateFileData:{id:"",type:"template"},templateList:[],isApproval:!1,taskDefinitionId:"",taskDeploymentId:"",taskApprovalName:"",queryParams:{pageNum:1,pageSize:10,processKey:void 0,processName:void 0,category:void 0},total:0,filterCategoryText:"",categoryOptions:[],categoryProps:{label:"categoryName",value:"code"},processList:[],processView:{title:"",open:!1,index:void 0,xmlData:""}}},methods:{handleCreate:function(){var t=this;this.isApproval&&""===this.taskDefinitionId?this.$modal.msgWarning("请绑定流程"):(this.taskId?Object(s["l"])({approved:this.isApproval?"0":"1",definitionId:this.isApproval?this.taskDefinitionId:"",deploymentId:this.isApproval?this.taskDeploymentId:"",taskId:this.taskId}).then((function(){t.$modal.msgSuccess("设置成功"),t.getTableData()})):this.$emit("change",{isApproval:this.isApproval,taskDefinitionId:this.taskDefinitionId,taskDeploymentId:this.taskDeploymentId,taskApprovalName:this.taskApprovalName}),this.handleClose())},handleClose:function(){this.queryParams.pageNum=1,this.$emit("update:visible",!1)},handleOpen:function(){var t,e,a,o,r;(this.getCategoryList(),this.getList(),this.taskId)&&(this.getTemplateList(),this.uploadTemplateFileData.id=this.taskId,this.isApproval="0"===(null===(t=this.workFlowable)||void 0===t?void 0:t.approved),this.taskDefinitionId=null!==(e=null===(a=this.workFlowable)||void 0===a?void 0:a.definitionId)&&void 0!==e?e:"",this.taskDeploymentId=null!==(o=null===(r=this.workFlowable)||void 0===r?void 0:r.deploymentId)&&void 0!==o?o:"")},handleBeforeUpload:function(t){this.$modal.loading("上传文件中...");var e=t.size/1024/1024<50;return e||(this.$message.error("上传文件大小不能超过 50MB!"),this.$modal.closeLoading()),e},handleUploadError:function(){this.$modal.closeLoading(),this.$modal.msgError("上传文件失败")},handleUploadSuccess:function(t){this.$modal.closeLoading(),200===t.code?(this.$modal.msgSuccess("上传文件成功"),this.getTemplateList()):this.$modal.msgError(t.msg||"上传文件异常")},getTemplateList:function(){var t=this;Object(c["h"])({pageNum:1,pageSize:1,fileName:void 0,id:this.taskId,type:"template"}).then((function(e){t.templateList=e.data.list})).catch((function(){t.templateList=[]}))},handleDownload:function(t){this.download("/project/file/download",{projectFileId:t.projectFileId,fileUrl:t.fileUrl},t.fileName)},handleDelete:function(t){var e=this,a={fileVOList:[{projectFileId:t.projectFileId,fileUrl:t.fileUrl}]};this.$modal.confirm("是否确认删除文件：".concat(t.fileName,"？")).then((function(){return Object(c["d"])(a)})).then((function(){e.$modal.msgSuccess("删除成功"),e.getTemplateList()})).catch((function(){}))},getCategoryList:function(){var t=this;Object(l["d"])().then((function(e){return t.categoryOptions=e.data}))},getList:function(){var t=this;this.$modal.loading("获取数据中..."),Object(i["i"])(this.queryParams).then((function(e){t.processList=e.rows,t.total=e.total})).finally((function(){t.$modal.closeLoading()}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleProcessView:function(t){var e=this,a=t.definitionId;this.processView.title="流程图",this.processView.index=a,Object(i["c"])(a).then((function(t){e.processView.xmlData=t.data})),this.processView.open=!0},categoryFormat:function(t,e){var a,o;return null!==(a=null===(o=this.categoryOptions.find((function(e){return e.code===t.category})))||void 0===o?void 0:o.categoryName)&&void 0!==a?a:""},changeTaskDefinitionId:function(t){this.taskDefinitionId=t.definitionId,this.taskDeploymentId=t.deploymentId,this.taskApprovalName=t.processName}},mounted:function(){}},p=u,m=(a("fdf1"),a("2877")),f=Object(m["a"])(p,o,r,!1,null,"55189338",null);e["default"]=f.exports},"31ed":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return l}));var o=a("b775");function r(){return Object(o["a"])({url:"/project/statistics",method:"get"})}function n(){return Object(o["a"])({url:"/project/doing",method:"get"})}function i(){return Object(o["a"])({url:"/project/select",method:"get"})}function l(t){return Object(o["a"])({url:"/project/queryMyTaskList",method:"post",data:t})}},5079:function(t,e,a){},"95c7":function(t,e,a){"use strict";a.d(e,"k",(function(){return r})),a.d(e,"u",(function(){return n})),a.d(e,"t",(function(){return i})),a.d(e,"e",(function(){return l})),a.d(e,"b",(function(){return s})),a.d(e,"m",(function(){return c})),a.d(e,"x",(function(){return d})),a.d(e,"a",(function(){return u})),a.d(e,"f",(function(){return p})),a.d(e,"v",(function(){return m})),a.d(e,"o",(function(){return f})),a.d(e,"c",(function(){return h})),a.d(e,"g",(function(){return b})),a.d(e,"z",(function(){return g})),a.d(e,"s",(function(){return v})),a.d(e,"w",(function(){return y})),a.d(e,"j",(function(){return k})),a.d(e,"q",(function(){return j})),a.d(e,"p",(function(){return D})),a.d(e,"r",(function(){return I})),a.d(e,"l",(function(){return w})),a.d(e,"i",(function(){return O})),a.d(e,"n",(function(){return T})),a.d(e,"h",(function(){return N})),a.d(e,"d",(function(){return S})),a.d(e,"y",(function(){return x}));var o=a("b775");function r(t){return Object(o["a"])({url:"/project/list",method:"post",data:t})}function n(t){return Object(o["a"])({url:"/project/collect",method:"post",data:{projectId:t}})}function i(t){return Object(o["a"])({url:"/project/cancelCollect",method:"post",data:{projectId:t}})}function l(t){return Object(o["a"])({url:"/project/delete",method:"delete",data:{projectId:t}})}function s(t){return Object(o["a"])({url:"/project/add",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/project/member/queryUserListById",method:"post",data:{projectId:t}})}function d(t,e){return Object(o["a"])({url:"/project/queryUserList",method:"post",data:{projectId:t,keyword:e}})}function u(t){return Object(o["a"])({url:"/project/inviteMemberList",method:"post",data:t})}function p(t){return Object(o["a"])({url:"/project/removeMemberList",method:"post",data:t})}function m(t){return Object(o["a"])({url:"/project/edit",method:"post",data:t})}function f(t){return Object(o["a"])({url:"/project/stage/list",method:"post",data:{projectId:t}})}function h(t,e){return Object(o["a"])({url:"/project/stage/add",method:"post",data:{projectId:t,stageName:e}})}function b(t){return Object(o["a"])({url:"/project/stage/delete",method:"delete",data:{stageId:t}})}function g(t,e){return Object(o["a"])({url:"/project/stage/edit",method:"post",data:{stageId:t,stageName:e}})}function v(t){return Object(o["a"])({url:"/project/archive",method:"post",data:{projectId:t}})}function y(t){return Object(o["a"])({url:"/project/quit",method:"post",data:{projectId:t}})}function k(t){return Object(o["a"])({url:"/project/detail",method:"post",data:{projectId:t}})}function j(t){return Object(o["a"])({url:"/project/task/situation",method:"post",data:{projectId:t}})}function D(t){return Object(o["a"])({url:"/project/task/burnDownChart",method:"post",data:{projectId:t}})}function I(t){return Object(o["a"])({url:"/project/taskStatisticsByDate",method:"post",data:{projectId:t}})}function w(t){return Object(o["a"])({url:"/project/log/list",method:"post",data:t})}function O(t){return Object(o["a"])({url:"/project/member/list",method:"post",data:t})}function T(t){return Object(o["a"])({url:"/project/detail/taskList",method:"post",data:t})}function N(t){return Object(o["a"])({url:"/project/file/list",method:"post",data:t})}function S(t){return Object(o["a"])({url:"/project/file/delete",method:"post",data:t})}function x(t){return Object(o["a"])({url:"/project/file/rename",method:"post",data:t})}},"996e":function(t,e,a){"use strict";a.r(e);a("a4d3"),a("e01a");var o=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{title:"新建任务",visible:t.visible,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.visible=e},open:t.handleOpen}},[e("el-form",{ref:"formRef",attrs:{rules:t.rules,model:t.formData,"label-width":"150px","label-position":"top",inline:""}},[e("el-form-item",{attrs:{prop:"taskName",label:"任务名称"}},[e("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formData.taskName,callback:function(e){t.$set(t.formData,"taskName",e)},expression:"formData.taskName"}})],1),e("el-form-item",{attrs:{prop:"approvalName"}},[e("template",{slot:"label"},[e("span",[t._v("审批设置")]),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{click:function(e){t.setTaskDialogVisible=!0}}},[t._v("去设置")])],1),e("el-input",{attrs:{disabled:""},model:{value:t.formData.approvalName,callback:function(e){t.$set(t.formData,"approvalName",e)},expression:"formData.approvalName"}})],2),e("el-form-item",{attrs:{prop:"projectId",label:"所属项目"}},[e("el-select",{attrs:{placeholder:"请选择",disabled:t.isSubTask||t.isProjectInfo,filterable:""},on:{change:t.changeDialogProject},model:{value:t.formData.projectId,callback:function(e){t.$set(t.formData,"projectId",e)},expression:"formData.projectId"}},t._l(t.projectOptions,(function(t,a){return e("el-option",{key:a,attrs:{label:t.projectName,value:t.projectId,disabled:t.disabled}})})),1)],1),e("el-form-item",{attrs:{prop:"taskPriority",label:"优先级"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData.taskPriority,callback:function(e){t.$set(t.formData,"taskPriority",e)},expression:"formData.taskPriority"}},t._l(t.taskPriorityOptions,(function(t,a){return e("el-option",{key:a,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",{attrs:{prop:"userId",label:"执行人"}},[e("el-select",{attrs:{placeholder:"请选择",filterable:""},model:{value:t.formData.userId,callback:function(e){t.$set(t.formData,"userId",e)},expression:"formData.userId"}},t._l(t.userOptions,(function(t,a){return e("el-option",{key:a,attrs:{label:t.nickName,value:t.userId}})})),1)],1),e("el-form-item",{attrs:{prop:"projectStageId",label:"所属阶段"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData.projectStageId,callback:function(e){t.$set(t.formData,"projectStageId",e)},expression:"formData.projectStageId"}},t._l(t.dialogStageOptions,(function(t,a){return e("el-option",{key:a,attrs:{label:t.stageName,value:t.stageId}})})),1)],1),e("el-row",[e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{prop:"description",label:"描述"}},[e("editor",{attrs:{"min-height":192},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1)],1),e("el-form-item",{attrs:{prop:"taskFlow",label:"所属流程"}},[e("el-input",{attrs:{placeholder:"请输入所属流程名"},model:{value:t.formData.taskFlow,callback:function(e){t.$set(t.formData,"taskFlow",e)},expression:"formData.taskFlow"}})],1),e("el-form-item",{attrs:{prop:"beginTime",label:"预计开始时间"}},[e("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.formData.beginTime,callback:function(e){t.$set(t.formData,"beginTime",e)},expression:"formData.beginTime"}})],1),e("el-form-item",{attrs:{prop:"endTime",label:"预计结束时间"}},[e("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.formData.endTime,callback:function(e){t.$set(t.formData,"endTime",e)},expression:"formData.endTime"}})],1),e("el-form-item",{attrs:{prop:"closeTime",label:"截止时间"}},[e("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.formData.closeTime,callback:function(e){t.$set(t.formData,"closeTime",e)},expression:"formData.closeTime"}})],1)],1),e("template",{slot:"footer"},[e("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("确 定")])],1)],2),t.visible?e("SetTaskDialog",{attrs:{visible:t.setTaskDialogVisible},on:{"update:visible":function(e){t.setTaskDialogVisible=e},change:t.changeApproval}}):t._e()],1)},r=[],n=a("f8fa"),i=a("95c7"),l=a("2b1a"),s={name:"CreateTaskDialog",components:{SetTaskDialog:l["default"]},props:{visible:{type:Boolean,default:!1},getTableData:{type:Function,required:!0},projectOptions:{type:Array,required:!0},taskPriorityOptions:{type:Array,required:!0},isSubTask:{type:Boolean,default:!1},taskId:{type:String,default:""},isProjectInfo:{type:Boolean,default:!1},projectId:{type:String,default:""}},data:function(){return{formData:{taskName:"",projectId:"",taskPriority:"",userId:"",projectStageId:"",description:"",taskFlow:"",beginTime:"",endTime:"",closeTime:"",approvalName:"当前审批流：无需审批",approved:"1",definitionId:"",deploymentId:""},userOptions:[],dialogStageOptions:[],rules:{taskName:[{required:!0,message:"必填",trigger:"blur"}],approvalName:[{required:!0,message:"必填",trigger:"blur"}],projectId:[{required:!0,message:"必填",trigger:"change"}],taskPriority:[{required:!0,message:"必填",trigger:"change"}],userId:[{required:!0,message:"必填",trigger:"change"}]},setTaskDialogVisible:!1}},methods:{handleCreate:function(){var t=this;this.$refs["formRef"].validate((function(e){if(!e)return!1;t.isSubTask?Object(n["b"])({taskId:t.taskId,taskName:t.formData.taskName,projectId:t.formData.projectId,taskPriority:t.formData.taskPriority,userId:t.formData.userId,projectStageId:t.formData.projectStageId,description:t.formData.description,taskFlow:t.formData.taskFlow,beginTime:t.formData.beginTime?t.formData.beginTime:void 0,endTime:t.formData.endTime?t.formData.endTime:void 0,closeTime:t.formData.closeTime?t.formData.closeTime:void 0,approved:t.formData.approved,definitionId:t.formData.definitionId,deploymentId:t.formData.deploymentId}).then((function(e){t.$modal.msgSuccess("创建子任务成功"),t.getTableData()})):Object(n["c"])({taskName:t.formData.taskName,projectId:t.formData.projectId,taskPriority:t.formData.taskPriority,userId:t.formData.userId,projectStageId:t.formData.projectStageId,description:t.formData.description,taskFlow:t.formData.taskFlow,beginTime:t.formData.beginTime?t.formData.beginTime:void 0,endTime:t.formData.endTime?t.formData.endTime:void 0,closeTime:t.formData.closeTime?t.formData.closeTime:void 0,approved:t.formData.approved,definitionId:t.formData.definitionId,deploymentId:t.formData.deploymentId}).then((function(e){t.$modal.msgSuccess("创建任务成功"),t.getTableData(),t.handleClose()}))}))},handleClose:function(){this.$refs["formRef"].resetFields(),this.userOptions=[],this.dialogStageOptions=[],this.resetApproval(),this.$emit("update:visible",!1)},handleOpen:function(){(this.isSubTask||this.isProjectInfo)&&(this.formData.projectId=this.projectId,this.changeDialogProject(this.projectId))},changeDialogProject:function(t){var e=this;this.formData.userId="",this.formData.projectStageId="",this.userOptions=[],this.dialogStageOptions=[],Object(n["g"])(t).then((function(t){e.userOptions=t.data})),Object(i["o"])(t).then((function(t){e.dialogStageOptions=t.data}))},changeApproval:function(t){this.formData.approvalName="当前审批流："+(t.isApproval?t.taskApprovalName:"无需审批"),this.formData.approved=t.isApproval?"0":"1",this.formData.definitionId=t.isApproval?t.taskDefinitionId:"",this.formData.deploymentId=t.isApproval?t.taskDeploymentId:"",this.setTaskDialogVisible=!1},resetApproval:function(){this.formData.approvalName="当前审批流：无需审批",this.formData.approved="",this.formData.definitionId="",this.formData.deploymentId=""}},mounted:function(){}},c=s,d=a("2877"),u=Object(d["a"])(c,o,r,!1,null,"cf5c2510",null);e["default"]=u.exports},f8fa:function(t,e,a){"use strict";a.d(e,"h",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"g",(function(){return l})),a.d(e,"k",(function(){return s})),a.d(e,"l",(function(){return c})),a.d(e,"f",(function(){return d})),a.d(e,"m",(function(){return u})),a.d(e,"e",(function(){return p})),a.d(e,"b",(function(){return m})),a.d(e,"i",(function(){return f})),a.d(e,"j",(function(){return h})),a.d(e,"a",(function(){return b}));a("99af");var o=a("b775");function r(t){return Object(o["a"])({url:"/project/task/list",method:"post",data:t})}function n(t){return Object(o["a"])({url:"/project/task/add",method:"post",data:t})}function i(t){return Object(o["a"])({url:"/project/task/delete",method:"delete",data:t})}function l(t){return Object(o["a"])({url:"/project/task/queryExecutorList",method:"post",data:{projectId:t}})}function s(t,e,a,r){return Object(o["a"])({url:"/workflow/process/startTaskApprove/".concat(t,"/").concat(e,"?url=").concat(a),method:"post",data:r})}function c(t){return Object(o["a"])({url:"/project/task/updateApprovalSet",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/project/task/detail",method:"post",data:{taskId:t}})}function u(t){return Object(o["a"])({url:"/project/task/edit",method:"post",data:t})}function p(t){return Object(o["a"])({url:"/project/task/queryChildTask",method:"post",data:{taskId:t}})}function m(t){return Object(o["a"])({url:"/project/task/addChildTask",method:"post",data:t})}function f(t){return Object(o["a"])({url:"/project/task/log/list",method:"post",data:t})}function h(t){return Object(o["a"])({url:"/project/task/queryUserList",method:"post",data:{taskId:t}})}function b(t){return Object(o["a"])({url:"/project/task/addComment",method:"post",data:t})}},fdf1:function(t,e,a){"use strict";a("5079")},fef2:function(t,e,a){"use strict";a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return l})),a.d(e,"f",(function(){return s})),a.d(e,"b",(function(){return c}));var o=a("b775");function r(t){return Object(o["a"])({url:"/workflow/category/list",method:"get",params:t})}function n(t){return Object(o["a"])({url:"/workflow/category/listAll",method:"get",params:t})}function i(t){return Object(o["a"])({url:"/workflow/category/"+t,method:"get"})}function l(t){return Object(o["a"])({url:"/workflow/category",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/workflow/category",method:"put",data:t})}function c(t){return Object(o["a"])({url:"/workflow/category/"+t,method:"delete"})}}}]);