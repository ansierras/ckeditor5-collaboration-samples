(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],u=0,h=[];u<s.length;u++)i=s[u],a[i]&&h.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"1df5":function(t,e,n){},3448:function(t,e,n){"use strict";var r=n("1df5"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.configuration?n("sample",{attrs:{configuration:t.configuration}}):n("configuration-dialog",{attrs:{onSubmit:t.handleUpdate}})],1)},o=[],i=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"overlay"}},[r("form",{staticClass:"body",on:{submit:function(t){return e.handleSubmit(t)}}},[r("h2",[e._v("Connect CKEditor Cloud Services")]),e._m(0),r("div",[r("label",{attrs:{for:"upload-url"}},[e._v("Upload URL")]),r("input",{attrs:{required:"",name:"upload-url",id:"upload-url"},domProps:{value:e.config.uploadUrl},on:{change:function(t){return e.handleConfigChange(t.target.value,"uploadUrl")}}})]),r("div",[r("label",{attrs:{for:"web-socket-url"}},[e._v("WebSocket URL")]),r("input",{attrs:{required:"",name:"web-socket-url",id:"web-socket-url"},domProps:{value:e.config.webSocketUrl},on:{change:function(t){return e.handleConfigChange(t.target.value,"webSocketUrl")}}})]),r("div",[r("label",{attrs:{for:"token-url"}},[e._v("Token URL")]),r("input",{attrs:{required:"",name:"token-url",id:"token-url"},domProps:{value:e.config.tokenUrl},on:{change:function(t){return e.handleConfigChange(t.target.value,"tokenUrl")}}})]),r("div",{class:e.isCloudServicesTokenEndpoint(e.config.tokenUrl)?"visible":"",attrs:{id:"additional"}},[e._m(1),r("div",{attrs:{id:"user-container"}},e._l(e.users,function(t){return r("div",{key:t.id,class:e.selectedUser==t.id?"active":"",on:{click:function(){return e.selectUser(t)}}},[t.avatar?r("img",{attrs:{alt:"",src:t.avatar}}):e._e(),!t.avatar&&t.name?r("span",{staticClass:"pseudo-avatar"},[e._v(e._s(e.getUserInitials(t.name)))]):e._e(),t.avatar||t.name?e._e():r("span",{staticClass:"pseudo-avatar anonymous"}),e._v("\n\t\t\t\t\t"+e._s(t.name||"(anonymous)")+"\n\t\t\t\t")])}),0)]),r("div",[r("label",{attrs:{for:"document-id"}},[e._v("Document ID")]),r("input",{attrs:{name:"document-id",id:"document-id",required:""},domProps:{value:e.documentId},on:{change:function(e){return t.documentId=e.target.value}}})]),r("button",{attrs:{id:"start"}},[e._v("Start")])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n\t\t\tIf you do not have Cloud Services URLs yet, \n\t\t\t"),n("a",{attrs:{href:"https://ckeditor.com/docs/cs/latest/guides/collaboration/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("see the documentation")]),t._v(".\n\t\t")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n\t\t\t\tCKEditor Cloud Services development token endpoint lets you \n\t\t\t\t"),n("a",{attrs:{href:"https://ckeditor.com/docs/cs/latest/guides/collaboration/quick-start.html#simulating-random-users",target:"_blank",rel:"noopener noreferrer"}},[t._v("simulate a random user")]),t._v(".\n\t\t\t\t"),n("br"),t._v("\n\t\t\t\tUse one of the following to define the user data.\n\t\t\t")])}],l={name:"configuration-dialog",props:["onSubmit"],data(){return{LOCAL_STORAGE_KEY:"CKEDITOR_CS_CONFIG",users:[{id:"e1",name:"Tom Rowling",avatar:"https://randomuser.me/api/portraits/men/30.jpg"},{id:"e2",name:"Wei Hong",avatar:"https://randomuser.me/api/portraits/women/51.jpg"},{id:"e3",name:"Rani Patel"},{id:"e4",name:"Henrik Jensen"},{id:this.randomString()}],config:null,documentId:this.handleDocIdInUrl(),selectedUser:null}},created(){this.config=this.getStoredConfig()},methods:{handleConfigChange(t,e){const n=this.config;n[e]=t,this.config=n},selectUser(t){this.selectedUser=t.id;const e=this.config,n=`${this.getRawTokenUrl(e.tokenUrl)}?`+Object.keys(t).filter(e=>t[e]).map(e=>`user.${e}=${t[e]}`).join("&");e.tokenUrl=n,this.config=e},handleSubmit(t){t.preventDefault();const{config:e,documentId:n}=this;this.setStoredConfig(Object.assign({},e,{tokenUrl:this.getRawTokenUrl(e.tokenUrl)})),this.updateDocIdInUrl(n),this.onSubmit(Object.assign(e,{documentId:n}))},getUserInitials(t){return t.split(" ",2).map(t=>t.charAt(0)).join("").toUpperCase()},handleDocIdInUrl(){let t=this.getDocIdFromUrl();return t||(t=this.randomString(),this.updateDocIdInUrl(t)),t},updateDocIdInUrl(t){window.history.replaceState({},document.title,this.generateUrlWithDocId(t))},generateUrlWithDocId(t){return`${window.location.href.split("?")[0]}?docId=${t}`},getDocIdFromUrl(){const t=location.search.match(/docId=(.+)$/);return t?decodeURIComponent(t[1]):null},isCloudServicesTokenEndpoint(t){return/cke-cs[\w-]*\.com\/token\/dev/.test(t)},getRawTokenUrl(t){return this.isCloudServicesTokenEndpoint(t)?t.split("?")[0]:t},randomString(){return Math.floor(Math.random()*Math.pow(2,52)).toString(32)},setStoredConfig(t){localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify(t))},getStoredConfig(){const t=JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY)||"{}");return{tokenUrl:t.tokenUrl||"",uploadUrl:t.uploadUrl||"",webSocketUrl:t.webSocketUrl||""}}}},c=l,d=(n("3448"),n("2877")),u=Object(d["a"])(c,i,s,!1,null,"1301a1b0",null),h=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"App"},[n("sample-header"),n("main",[t._m(0),n("div",{staticClass:"centered"},[n("div",{staticClass:"row row-editor"},[t.isLayoutReady?n("ckeditor",{attrs:{editor:t.classicEditor,config:t.config},on:{change:function(e,n){return t.console.log({event:e,editor:n})}},model:{value:t.initialData,callback:function(e){t.initialData=e},expression:"initialData"}}):t._e(),n("div",{staticClass:"sidebar-container"},[n("div",{ref:"presenceListElement",staticClass:"presence"}),n("div",{ref:"sidebarElement",staticClass:"sidebar"})])],1)])]),n("sample-footer")],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message"},[n("div",{staticClass:"centered"},[n("h2",[t._v("CKEditor 5 Vue integration of classic editor with real-time collaboration")]),n("p",[t._v("\n\t\t\t\t\tOpen this sample in another browser tab to start collaborative editing.\n\t\t\t\t")])])])}],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"centered"},[n("p",[t._v("\n\t\t\tCKEditor 5 – The text editor for the Internet – "),n("a",{attrs:{href:"https://ckeditor.com/ckeditor-5/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ckeditor.com/ckeditor-5")])]),n("p",[t._v("\n\t\t\tCopyright © 2019, "),n("a",{attrs:{href:"https://cksource.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CKSource")]),t._v(" – Frederico Knabben. All rights reserved.\n\t\t")])])])}],b={name:"sample-footer"},v=b,_=Object(d["a"])(v,m,g,!1,null,null,null),k=_.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"centered"},[n("h1",[n("a",{attrs:{href:"https://ckeditor.com/ckeditor-5/",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://c.cksource.com/a/1/logos/ckeditor5.svg",alt:"CKEditor 5 logo"}}),t._v(" CKEditor 5\n\t\t\t")])]),n("nav",[n("ul",[n("li",[n("a",{attrs:{href:"https://ckeditor.com/collaboration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Website")])]),n("li",[n("a",{attrs:{href:"https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentation")])])])])])])}],U={name:"sample-header"},C=U,S=Object(d["a"])(C,y,w,!1,null,null,null),E=S.exports,I=n("0469"),O=n("c4b1"),T=n("8a91"),L=n("85a9"),j=n("2d79"),x=n("41ae"),D=n("fb67"),R=n("290f"),$=n("191f"),A=n("2566"),K=n("8b25"),P=n("7695"),F=n("39a0"),M=n("233a"),q=n("0bf6"),J=n("56b3"),W=n("7212"),G=n("d4c1"),H=n("8068"),z=n("4801"),N=n("0e17"),Y=n("f61b"),B=n("2b10"),V=n("634d"),Q=n("0c85"),X=n("5e96"),Z=n("613a"),tt=n("643c"),et=n("f4e9"),nt=n("7041"),rt=n("e25f"),at={name:"sample",components:{SampleHeader:E,SampleFooter:k},props:["configuration"],data(){return{isLayoutReady:!1,classicEditor:I["a"],initialData:'\n                \t<h2>Bilingual Personality Disorder</h2>\n\n\t            \t<figure class="image image-style-side">\n\t\t            \t<img alt="" src="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg">\n\t\t            \t<figcaption>\n\t\t\t            \tOne language, one person.\n\t\t            \t</figcaption>\n\t            \t</figure>\n\n\t            \t<p>\n\t\t            \tThis may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth. Even the studies\n\t\t            \tthat were conducted almost half a century show that <strong>the language you speak has more effects on you then you realise</strong>.\n\t            \t</p>\n\t            \t<p>\n\t\t            \tOne of the very first experiments conducted on this topic dates back to 1964.\n\t\t            \t<a href="https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals">In the experiment</a>\n\t\t            \tdesigned by linguist Ervin-Tripp who is an expert in psycholinguistic and sociolinguistic studies, adults who are bilungual\n\t\t            \tin English in French were showed series of pictures and were asked to create 3-minute stories. In the end participants emphasized\n\t\t            drastically different dynamics for stories in English and French.\n                \t</p>\n                \t<p>\n                    \tAnother ground-breaking experiment which included bilingual Japanese women married to American men in San Francisco were asked\n                    \tto complete sentences. The goal of the experiment was to investigate whether or not human feelings and thoughts are expressed\n                    \tdifferently in <strong>different language mindsets</strong>.\n                \t</p>\n                \t<p>Here is a sample from the the experiment:</p>\n\n                \t<table>\n                    \t<thead>\n                        \t<tr>\n                            \t<th></th>\n                            \t<th>English</th>\n                            \t<th>Japanese</th>\n                        \t</tr>\n                    \t</thead>\n                    \t<tbody>\n                        \t<tr>\n                            \t<td>Real friends should</td>\n                            \t<td>Be very frank</td>\n                            \t<td>Help each other</td>\n                        \t</tr>\n                        \t<tr>\n                            \t<td>I will probably become</td>\n                            \t<td>A teacher</td>\n                            \t<td>A housewife</td>\n                        \t</tr>\n                        \t<tr>\n                            \t<td>When there is a conflict with family</td>\n                            \t<td>I do what I want</td>\n                            \t<td>It\'s a time of great unhappiness</td>\n                        \t</tr>\n                    \t</tbody>\n                \t</table>\n\n                \t<p>\n                    \tMore recent <a href="https://books.google.pl/books?id=1LMhWGHGkRUC">studies</a> show, the language a person speaks affects\n                    \ttheir cognition, behaviour, emotions and hence <strong>their personality</strong>. This shouldn’t come as a surprise\n                    \t<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since wealready know</a> that different regions\n                    \tof the brain become more active depending on the person’s activity at hand. Since structure, information and especially\n                    \t<strong>the culture</strong> of languages varies substantially and the language a person speaks is an essential element of daily life.\n                \t</p>\n            \t',config:{plugins:[O["a"],T["a"],L["a"],j["a"],x["a"],D["a"],R["a"],$["a"],A["a"],K["a"],P["a"],F["a"],M["a"],q["a"],J["a"],W["a"],G["a"],H["a"],z["a"],N["a"],Y["a"],B["a"],V["a"],Q["a"],X["a"],Z["a"],tt["a"],et["a"],nt["a"],rt["a"]],toolbar:["heading","|","fontsize","fontfamily","|","bold","italic","underline","strikethrough","removeFormat","highlight","|","alignment","|","numberedList","bulletedList","|","link","blockquote","imageUpload","insertTable","mediaEmbed","|","undo","redo","|","comment"],cloudServices:{tokenUrl:this.configuration.tokenUrl,uploadUrl:this.configuration.uploadUrl,webSocketUrl:this.configuration.webSocketUrl,documentId:this.configuration.documentId},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative","|","comment"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"],tableToolbar:["comment"]},mediaEmbed:{toolbar:["comment"]},sidebar:{container:null},presenceList:{container:null}}}},mounted(){this.config.presenceList.container=this.$refs.presenceListElement,this.config.sidebar.container=this.$refs.sidebarElement,this.isLayoutReady=!0}},ot=at,it=Object(d["a"])(ot,p,f,!1,null,null,null),st=it.exports,lt={name:"app",components:{ConfigurationDialog:h,Sample:st},data(){return{configuration:null}},methods:{handleUpdate(t){this.configuration=t}}},ct=lt,dt=Object(d["a"])(ct,a,o,!1,null,null,null),ut=dt.exports,ht=n("3730"),pt=n.n(ht);
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * This file is licensed under the terms of the MIT License (see LICENSE.md).
 */
r["a"].use(pt.a),new r["a"]({render:t=>t(ut)}).$mount("#app")}});