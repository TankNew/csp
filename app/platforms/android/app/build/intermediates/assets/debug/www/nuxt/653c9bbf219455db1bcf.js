(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{267:function(e,t,a){"use strict";a(73),a(138),a(136),a(137),a(40);var n=a(268),i=n.HttpUrl+"/handlers/kefuLogin.ashx?method=",r=n.HttpUrl+"/handlers/userLogin.ashx?method=",o={CurTime:function(){return Date.parse(new Date)/1e3},DateToUnix:function(e){var t=e.split(" ",2),a=(t[0]?t[0]:"").split("-",3),n=(t[1]?t[1]:"").split(":",3);return new Date(parseInt(a[0],10)||null,(parseInt(a[1],10)||1)-1,parseInt(a[2],10)||null,parseInt(n[0],10)||null,parseInt(n[1],10)||null,parseInt(n[2],10)||null).getTime()/1e3},UnixToDate:function(e,t,a){"number"==typeof a&&(e=parseInt(e)+60*parseInt(a)*60);var n=new Date(1e3*e),i="";return i+=n.getUTCFullYear()+"-",i+=n.getUTCMonth()+1+"-",i+=n.getUTCDate(),!0===t&&(i+=" "+n.getUTCHours()+":",i+=n.getUTCMinutes()+":",i+=n.getUTCSeconds()),i},UnixToShortDate:function(e,t,a){"number"==typeof a&&(e=parseInt(e)+60*parseInt(a)*60);var n=new Date(1e3*e),i="";i+=n.getUTCFullYear()+".";var r=n.getUTCMonth()+1;if(r<10&&(r="0"+r),i+=r,!0===t){var o=n.getUTCDate();o<10&&(o="0"+o),i+="."+o}return i}};t.a={kefuUrl:i,visitorUrl:r,date:function(e){if(null!==e){-1===e.indexOf("T")&&(e=e.replace(/-/g,"/"));var t=new Date(e),a=t.getDate(),n=t.getMonth()+1;a<10&&(a="0"+a),n<10&&(n="0"+n);var i=t.getFullYear()+"."+n+"."+a;return i}},trimspace:function(e){return e.replace(/(^\s+)|(\s+$)/g,"")},getUrlParam:function(e){var t=new RegExp("(?:[?&]|&)"+e+"=([^&]+)","i"),a=window.location.search.match(t);return a&&a.length>1?a[1]:null},countpage:function(e,t){var a=e/t;return 0===(a=Math.ceil(a))&&(a=1),a},getint:function(e){var t=parseInt(e);return isNaN(t)&&(t=0),t},_filter:function(e){if(null!==e&&""!==e)return e.replace(/(<([^>]+)>)/gi,"");return e},myTime:o,cutString:function(e,t){if(null===e)return null;if(2*e.length<=t)return e;for(var a=0,n="",i=0;i<e.length;i++)if(n+=e.charAt(i),e.charCodeAt(i)>128){if((a+=2)>=t)return n.substring(0,n.length-1)+".."}else if((a+=1)>=t)return n.substring(0,n.length-2)+"..";return n},loadMce:function(e,t){tinymce.init({selector:e,init_instance_callback:function(e){e.on("keyup",function(e){})},inline:!0,fixed_toolbar_container:"#mytoolbar",language:"zh_CN",visualblocks_default_state:!1,menubar:!1,image_advtab:!0,content_css:"../static/css/bootstrap.css",paste_remove_styles_if_webkit:!1,forced_root_block:"p",plugin_preview_width:800,plugin_preview_height:600,relative_urls:!1,imagetools_toolbar:"rotateleft rotateright | flipv fliph | editimage imageoptions",imagetools_cors_hosts:["ednet.cn","localhost","103.24.231.235"],plugins:["advlist anchor autolink autoresize charmap code colorpicker contextmenu directionality emoticons fullscreen","hr image imagetools insertdatetime link lists media nonbreaking","pagebreak paste preview print searchreplace spellchecker table template textcolor textpattern visualblocks visualchars wordcount"],toolbar:[" undo redo bullist numlist outdent indent alignleft aligncenter alignright alignjustify link | image | picload insertdatetime template","fontsizeselect fontselect styleselect | bold italic underline forecolor backcolor removeformat hr blockquote visualblocks"],contextmenu:"paste inserttable insertdatetime | link | bold underline formats removeformat | preview  | code",font_formats:"Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Courier New=courier new,courier;Times New Roman=times new roman,times;Verdana=verdana,geneva;微软雅黑=微软雅黑;宋体=宋体;黑体=黑体;楷体=楷体;仿宋=仿宋;",fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",setup:function(e){e.addButton("picload",{text:"文件管理器",icon:"emoticons",tooltip:"文件管理器",onclick:t}),e.addMenuItem("myMenuItem",{text:"文件管理器",icon:"image",onclick:function(){MceBrowse()}}),e.addMenuItem("myformat",{text:"引用",icon:"blockquote",onClick:function(t){e.execCommand("mceBlockQuote",!1,t.control.settings.commentText)}})},style_formats:[{title:"Head 1",format:"h1"},{title:"Head 2",format:"h2"},{title:"Head 3",format:"h3"},{title:"Head 4",format:"h4"},{title:"Head 5",format:"h5"},{title:"Head 6",format:"h6"},{title:"正文",format:"p"}],template_cdate_classes:"cdate creationdate",template_cdate_format:"%Y/%m/%d",template_popup_height:"600",template_popup_width:"950",templates:[{title:"新闻模板",description:"适用于一般新闻使用",url:"../template/tmp.html"}]})},removeMce:function(e){null!=tinymce.get(e)&&tinymce.get(e).remove()},addMce:function(e){tinymce.execCommand("mceAddControl",!0,e)}}},268:function(e){e.exports={HttpUrl:"http://kefu.ednet.cn",wsUrl:"kefu.ednet.cn:4502",wssUrl:"kefu.ednet.cn:4503"}},269:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return s});a(40);var n=a(267),i=a(74),r=a(41),o=function(e){var t=e.UserDomain,a=e.UserName,o=e.UserPass,s=e.SessionId,l=n.a.kefuUrl+"login";i.a.post(l,{domain:t,username:a,password:o,sessionid:s}).then(function(e){var n=e.data;if(0===n.error){var i={UserDomain:t,UserName:a,NickName:n.nickname,HeadImg:n.headimage,UserSign:n.sign};Object(r.c)(i),Object(r.d)(s),window.location.replace("/#/home")}else console.error(n.content)}).catch(function(e){console.error(e)})},s=function(){Object(r.e)(),window.location.replace("".concat(window.location.protocol,"//").concat(window.location.host))}},271:function(e,t,a){var n=a(286);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(4).default)("6ffa2362",n,!0,{sourceMap:!1})},284:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),window.FileReader||console.error("Your browser does not support FileReader API!"),t.default={name:"vue-base64-file-upload",props:{imageClass:{type:String,default:""},inputClass:{type:String,default:""},accept:{type:String,default:"image/png,image/gif,image/jpeg"},maxSize:{type:Number,default:10},disablePreview:{type:Boolean,default:!1},fileName:{type:String,default:""},placeholder:{type:String,default:"Click here to upload image"},defaultPreview:{type:String,default:""}},data:function(){return{file:null,preview:null,visiblePreview:!1}},computed:{wrapperStyles:function(){return{position:"relative",width:"100%"}},fileInputStyles:function(){return{width:"100%",position:"absolute",top:0,left:0,right:0,bottom:0,opacity:0,overflow:"hidden",outline:"none",cursor:"pointer"}},textInputStyles:function(){return{width:"100%",cursor:"pointer"}},previewImage:function(){return this.preview||this.defaultPreview}},methods:{onChange:function(e){var t=this,a=e.target.files||e.dataTransfer.files;if(a.length){var n=a[0],i=n.size&&n.size/Math.pow(1e3,2);if(i>this.maxSize)this.$emit("size-exceeded",i);else{this.file=n,this.$emit("file",n);var r=new FileReader;r.onload=function(e){var a=e.target.result;a&&(t.$emit("load",a),t.preview=a)},r.readAsDataURL(n)}}}},template:'\n    <div class="vue-base64-file-upload">\n      <img\n        v-show="previewImage && !disablePreview"\n        :src="previewImage"\n        :class="imageClass" />\n      <div class="vue-base64-file-upload-wrapper" :style="wrapperStyles">\n        <input\n          type="file"\n          @change="onChange"\n          :style="fileInputStyles"\n          :accept=accept />\n        <input\n          type="text"\n          :class="inputClass"\n          :style="textInputStyles"\n          :value="fileName || file && file.name"\n          :placeholder="placeholder"\n          disabled />\n      </div>\n    </div>\n  '}},285:function(e,t,a){"use strict";var n=a(271);a.n(n).a},286:function(e,t,a){(e.exports=a(3)(!1)).push([e.i,"\n.mu-avatar[data-v-db6a4c36]{margin:0 20px;vertical-align:middle\n}\n.mu-divider[data-v-db6a4c36]{margin:10px\n}\n.v1[data-v-db6a4c36]{width:120px;height:100%;position:absolute;left:0;right:0;top:0;bottom:0;opacity:0\n}\n.v1-image[data-v-db6a4c36]{display:none\n}",""])},305:function(e,t,a){"use strict";a.r(t);var n=a(31),i=a.n(n),r=a(284),o=a.n(r),s=(a(57),a(37)),l=a(267),c=a(41),u=a(269),d={middleware:"authenticated",components:{VueBase64FileUpload:o.a},data:function(){return{kefuData:{},kefuTemp:{username:null,headimage:null,nickname:null,domain:null,sign:null,state:1,oldPassword:null,password:null,confirmPassword:null},customImageMaxSize:.2,isPawword:!1}},computed:i()({},Object(s.b)(["isAuthenticated","currentUser","macAddress"])),watch:{kefuData:{handler:function(e,t){null!==e.password&&""!==e.password?this.isPawword=!0:this.isPawword=!1},deep:!0}},created:function(){this.reset()},methods:{onFile:function(e){},onLoad:function(e){this.kefuData.headimage=e},onSizeExceeded:function(e){alert({title:"客服头像不超过200K",icon:"error"})},reset:function(){this.kefuTemp.username=this.currentUser.UserName,this.kefuTemp.headimage=this.currentUser.HeadImg,this.kefuTemp.nickname=this.currentUser.NickName,this.kefuTemp.domain=this.currentUser.UserDomain,this.kefuTemp.sign=this.currentUser.UserSign,this.kefuData=JSON.parse(JSON.stringify(this.kefuTemp))},submitForm:function(){var e=this;this.$validator.validateAll().then(function(t){if(t){var a=e,n=l.a.kefuUrl+"Update",i={domain:a.kefuData.domain,username:a.kefuData.username,sign:a.kefuData.sign,sessionid:a.macAddress,ischpw:!1,content:a.kefuData};null!=a.kefuData.password&&""!==a.kefuData.password&&(i.ischpw=!0),e.$httpform.post(n,JSON.stringify(i)).then(function(e){var t=e.data;if(0===t.error)if(i.ischpw)a.alertInfo("您更新了密码, 请重新登陆",function(e){return Object(u.a)()});else{var n={UserDomain:a.kefuData.domain,UserName:a.kefuData.username,NickName:a.kefuData.nickname,HeadImg:a.kefuData.headimage,UserSign:a.kefuData.sign};Object(c.c)(n),a.$emit("back")}else a.alertInfo(t.error+":"+t.content)}).catch(function(e){a.alertError("系统错误"),console.log(e)})}}).catch(function(e){console.log(e)})},alertInfo:function(e,t){console.log(e)},alertError:function(e){console.log(e)}}},m=(a(285),a(1)),f=Object(m.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("form",{staticClass:"form-horizontal",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[a("div",{staticClass:"p-3"},[a("mu-avatar",{attrs:{slot:"avatar",src:e.kefuData.headimage},slot:"avatar"}),e._v(" "),a("mu-raised-button",{staticClass:"align-middle",attrs:{label:"上传头像",icon:"folder","background-color":"#ba68c8"}},[a("vue-base64-file-upload",{staticClass:"v1",attrs:{"max-size":e.customImageMaxSize,"disable-preview":!0,accept:"image/png, image/jpeg","image-class":"v1-image","input-class":"v1-file"},on:{"size-exceeded":e.onSizeExceeded,file:e.onFile,load:e.onLoad}})],1),e._v(" "),a("mu-divider"),e._v(" "),a("mu-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-text":e.errors.has("昵称")?e.errors.first("昵称"):"",label:"昵称","hint-text":"昵称",name:"昵称",icon:"location_city","label-float":""},model:{value:e.kefuData.nickname,callback:function(t){e.$set(e.kefuData,"nickname",t)},expression:"kefuData.nickname"}}),e._v(" "),e.isPawword?a("mu-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6",expression:"'required|min:6'"}],attrs:{"error-text":e.errors.has("旧的密码")?e.errors.first("旧的密码"):"",label:"旧的密码","hhint-text":"旧的密码",name:"旧的密码",icon:"lock","label-float":"",type:"password"},model:{value:e.kefuData.oldPassword,callback:function(t){e.$set(e.kefuData,"oldPassword",t)},expression:"kefuData.oldPassword"}}):a("mu-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"min:6",expression:"'min:6'"}],attrs:{"error-text":e.errors.has("旧的密码")?e.errors.first("旧的密码"):"",label:"旧的密码","hhint-text":"旧的密码",name:"旧的密码",icon:"lock","label-float":"",type:"password"},model:{value:e.kefuData.oldPassword,callback:function(t){e.$set(e.kefuData,"oldPassword",t)},expression:"kefuData.oldPassword"}}),e._v(" "),a("mu-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"min:6",expression:"'min:6'"}],ref:"新的密码",attrs:{"error-text":e.errors.has("新的密码")?e.errors.first("新的密码"):"",label:"新的密码","hhint-text":"新的密码",name:"新的密码",icon:"lock","label-float":"",type:"password"},model:{value:e.kefuData.password,callback:function(t){e.$set(e.kefuData,"password",t)},expression:"kefuData.password"}}),e._v(" "),a("mu-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|confirmed:新的密码",expression:"'min:6|confirmed:新的密码'"}],attrs:{"error-text":e.errors.has("确认密码")?e.errors.first("确认密码"):"",label:"确认密码","hhint-text":"确认密码",name:"确认密码",icon:"lock","label-float":"",type:"password"},model:{value:e.kefuData.confirmPassword,callback:function(t){e.$set(e.kefuData,"confirmPassword",t)},expression:"kefuData.confirmPassword"}}),e._v(" "),a("p",{staticClass:"ml-4"},[a("mu-flat-button",{attrs:{slot:"actions",primary:"",label:"提交",type:"submit"},slot:"actions"})],1)],1)])])},[],!1,null,"db6a4c36",null);f.options.__file="setting.vue";t.default=f.exports}}]);