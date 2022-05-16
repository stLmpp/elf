"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[357],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=s.createContext({}),d=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return s.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return n?s.createElement(f,a(a({ref:t},l),{},{components:n})):s.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<r;d++)a[d]=n[d];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3688:function(e,t,n){n.d(t,{S:function(){return N}});var s=n(7294);function o(e){return e&&e.origin?e.origin:"https://stackblitz.com"}function r(){return Math.random().toString(36).substring(7)}function a(e){var t="";return e?(e.forceEmbedLayout&&(t+="embed=1"),e.clickToLoad&&(t+=(t.length?"&":"")+"ctl=1"),e.openFile&&(t+=(t.length?"&":"")+"file="+e.openFile),!e.view||"preview"!==e.view&&"editor"!==e.view||(t+=(t.length?"&":"")+"view="+e.view),e.theme&&(t+=(t.length?"&":"")+"theme="+e.theme),e.hideExplorer&&(t+=(t.length?"&":"")+"hideExplorer=1"),e.hideNavigation&&(t+=(t.length?"&":"")+"hideNavigation=1;"),e.hideDevTools&&(t+=(t.length?"&":"")+"hidedevtools=1"),e.initialPath&&(t+=(t.length?"&":"")+"initialpath="+encodeURIComponent(e.initialPath)),"number"==typeof e.devToolsHeight&&e.devToolsHeight>0&&e.devToolsHeight<100&&(t+=(t.length?"&":"")+"devtoolsheight="+e.devToolsHeight),t.length?"?"+t:t):t}function i(e,t,n){if(null===e.parentNode)throw new Error("Invalid Element");t.id=e.id,l(t,n),e.parentNode.replaceChild(t,e)}function u(e){if("string"==typeof e){var t=document.getElementById(e);if(null!==t)return t}else if(e instanceof HTMLElement)return e;throw new Error("Invalid Element")}function d(e){return e&&!1===e.newWindow?"_self":"_blank"}function l(e,t){t&&(t.hasOwnProperty("height")&&(e.height=""+t.height),t.hasOwnProperty("width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}var c=function(e){var t=this;this.pending={},this.port=e,this.port.onmessage=function(e){if(e.data.payload.__reqid){var n=e.data.payload.__reqid,s=e.data.payload.__success;if(t.pending[n]){if(delete e.data.payload.__reqid,delete e.data.payload.__success,s){var o=0===Object.keys(e.data.payload).length&&e.data.payload.constructor===Object?null:e.data.payload;t.pending[n].resolve(o)}else{var r=e.data.payload.error?e.data.type+": "+e.data.payload.error:e.data.type;t.pending[n].reject(r)}delete t.pending[n]}}}};c.prototype.request=function(e){var t=this,n=r();return new Promise((function(s,o){t.pending[n]={resolve:s,reject:o},e.payload.__reqid=n,t.port.postMessage(e)}))};var p=function(e,t){var n=this;this.rdc=new c(e),this.preview={},Object.defineProperty(this.preview,"origin",{value:t.previewOrigin,writable:!1}),this.editor={openFile:function(e){return n.rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})}}};p.prototype.applyFsDiff=function(e){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},p.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},p.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var m=[],f=function(e){var t=this;this.id=r(),this.element=e,this.pending=new Promise((function(e,n){var s=function(n){n.data.action&&"SDK_INIT_SUCCESS"===n.data.action&&n.data.id===t.id&&(t.vm=new p(n.ports[0],n.data.payload),e(t.vm),r())},o=function(){t.element.contentWindow&&t.element.contentWindow.postMessage({action:"SDK_INIT",id:t.id},"*")};function r(){window.clearInterval(i),window.removeEventListener("message",s)}window.addEventListener("message",s),o();var a=0,i=window.setInterval((function(){if(t.vm)r();else{if(a>=20)return r(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void m.forEach((function(e,n){e.id===t.id&&m.splice(n,1)}));a++,o()}}),500)})),m.push(this)},h=["typescript","create-react-app","angular-cli","javascript","polymer","vue"];function g(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function y(e){-1===h.indexOf(e.template)&&console.warn("Unsupported project template, must be one of: "+h.join(", "));var t=document.createElement("form");return t.method="POST",t.setAttribute("style","display:none;"),t.appendChild(g("project[title]",e.title)),t.appendChild(g("project[description]",e.description)),t.appendChild(g("project[template]",e.template)),e.tags&&e.tags.forEach((function(e){t.appendChild(g("project[tags][]",e))})),e.dependencies&&t.appendChild(g("project[dependencies]",JSON.stringify(e.dependencies))),e.settings&&t.appendChild(g("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(n){t.appendChild(g("project[files]["+n+"]",e.files[n]))})),t}function v(e,t){var n=y(e);return n.action=o(t)+"/run"+a(t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}function q(e,t){var n=y(e);n.action=o(t)+"/run"+a(t),n.target=d(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}var k={connect:function(e){if(!e||!e.contentWindow)return Promise.reject("Provided element is not an iframe.");var t=function(e){var t=e instanceof Element?"element":"id";return m.find((function(n){return n[t]===e}))||null}(e);return t?t.pending:new f(e).pending},openGithubProject:function(e,t){window.open(o(t)+"/github/"+e+a(t),d(t))},openProject:function(e,t){q(e,t)},openProjectId:function(e,t){window.open(o(t)+"/edit/"+e+a(t),d(t))},embedGithubProject:function(e,t,n){var s=u(e),r=document.createElement("iframe");return r.src=o(n)+"/github/"+t+a(n),i(s,r,n),k.connect(r)},embedProject:function(e,t,n){var s=u(e),o=v(t,n),r=document.createElement("iframe");return i(s,r,n),r.contentDocument&&r.contentDocument.write(o),k.connect(r)},embedProjectId:function(e,t,n){var s=u(e),r=document.createElement("iframe");return r.src=o(n)+"/edit/"+t+a(n),i(s,r,n),k.connect(r)}},S=k,w=n(5350),b={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function N(e){var t=e.src,n=e.packages,o=void 0===n?[]:n,r=(0,s.useRef)(),a=["core","rxjs"].concat(o),i=(0,w.Z)().isDarkTheme;return(0,s.useEffect)((function(){var e=a.reduce((function(e,t){return Object.assign(e,b[t]),e}),{});S.embedProject(r.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:i?"dark":"light",height:"500px"})}),[]),s.createElement("section",{style:{height:"500px"}},s.createElement("div",{ref:r}))}},2924:function(e,t,n){var s=n(7294).createContext(void 0);t.Z=s},5350:function(e,t,n){var s=n(7294),o=n(2924);t.Z=function(){var e=(0,s.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},9367:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var s=n(7462),o=n(3366),r=(n(7294),n(3905)),a=n(3688),i=["components"],u={},d="Status",l={unversionedId:"features/requests/requests-status",id:"features/requests/requests-status",isDocsHomePage:!1,title:"Status",description:"Using this feature, you can manage the status of API calls in your store. First, you need to install the package by",source:"@site/docs/features/requests/requests-status.mdx",sourceDirName:"features/requests",slug:"/features/requests/requests-status",permalink:"/elf/docs/features/requests/requests-status",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/requests/requests-status.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Entities Props Factory",permalink:"/elf/docs/features/entities/entities-props-factory"},next:{title:"Cache",permalink:"/elf/docs/features/requests/requests-cache"}},c=[{value:"Queries",id:"queries",children:[{value:"<code>selectRequestStatus</code>",id:"selectrequeststatus",children:[],level:3},{value:"<code>getRequestStatus</code>",id:"getrequeststatus",children:[],level:3},{value:"<code>selectIsRequestPending</code>",id:"selectisrequestpending",children:[],level:3}],level:2},{value:"Mutations",id:"mutations",children:[{value:"<code>updateRequestStatus</code>",id:"updaterequeststatus",children:[],level:3},{value:"<code>updateRequestsStatus</code>",id:"updaterequestsstatus",children:[],level:3},{value:"<code>clearRequestsStatus</code>",id:"clearrequestsstatus",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"status"},"Status"),(0,r.kt)("p",null,"Using this feature, you can manage the status of API calls in your store. First, you need to install the package by\nusing the CLI command ",(0,r.kt)("inlineCode",{parentName:"p"},"elf-cli install")," and selecting the requests package, or via npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-requests\n")),(0,r.kt)("p",null,"To use this feature, provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"withRequestsStatus")," props factory function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"createStore")," call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.repository"',title:'"todos.repository"'},"import { createStore } from '@ngneat/elf';\nimport { withEntities } from '@ngneat/elf-entities';\nimport {\n  withRequestsStatus,\n  createRequestsStatusOperator,\n} from '@ngneat/elf-requests';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  // You can pass the keys type\n  // highlight-next-line\n  withRequestsStatus<`todos` | `todo-${string}`>()\n);\n")),(0,r.kt)("p",null,"Now we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createRequestsStatusOperator")," function that takes a store and returns a custom operator. That operator takes the request key and sets its initial status to ",(0,r.kt)("inlineCode",{parentName:"p"},"pending"),". It also updates it to ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," when it fails."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.repository"',title:'"todos.repository"'},"import {\n  withRequestsStatus,\n  createRequestsStatusOperator,\n} from '@ngneat/elf-requests';\n\n// ...\nconst todosStore = createStore({ name: 'todos', withEntities<Todo>(); });\n// highlight-next-line\nexport const trackTodosRequestsStatus =\n  createRequestsStatusOperator(todosStore);\n")),(0,r.kt)("p",null,"And use it with our ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { setTodos, trackTodosRequestsStatus } from './todos.repository';\n\nexport function fetchTodos() {\n  return http.get(todosUrl).pipe(\n    tap(setTodos),\n    // highlight-next-line\n    trackTodosRequestsStatus('todos')\n  );\n}\n")),(0,r.kt)("p",null,"Upon successful completion, the ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," status must be manually set as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.repository.ts"',title:'"todos.repository.ts"'},"import { updateRequestStatus } from '@ngneat/elf-requests';\nimport { setTodos } from './todos.repository';\n\nexport function setTodos(todos: Todo[]) {\n  store.update(\n    addEntities(todos),\n    // highlight-next-line\n    updateRequestStatus('todos', 'success')\n  );\n}\n")),(0,r.kt)("p",null,"You need to set it manually to avoid a ",(0,r.kt)("strong",{parentName:"p"},"redundant"),' update and have the option to define what a "successful" response is. You can give up these advantages by using the ',(0,r.kt)("inlineCode",{parentName:"p"},"handleSuccess")," option:"),(0,r.kt)("p",null,"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," of any request is ",(0,r.kt)("inlineCode",{parentName:"p"},"idle"),". You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeAsPending")," function to initialize a request as ",(0,r.kt)("inlineCode",{parentName:"p"},"pending"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@ngneat/elf';\nimport { withEntities } from '@ngneat/elf-entities';\nimport { withRequestsStatus, initializeAsPending } from '@ngneat/elf-requests';\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  withRequestsStatus(\n    // highlight-next-line\n    initializeAsPending('todos')\n  )\n);\n")),(0,r.kt)(a.S,{src:"import { createStore } from '@ngneat/elf';\nimport { setEntities, withEntities } from '@ngneat/elf-entities';\nimport {\n  createRequestsStatusOperator,\n  selectRequestStatus,\n  updateRequestStatus,\n  withRequestsStatus,\n} from '@ngneat/elf-requests';\nimport { fromFetch } from 'rxjs/fetch';\nimport { tap } from 'rxjs/operators';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  withRequestsStatus<'todos'>()\n);\n\nconst trackTodosRequestsStatus = createRequestsStatusOperator(todosStore);\n\ntodosStore.pipe(selectRequestStatus('todos')).subscribe((status) => {\n  console.log(status);\n});\n\nfunction setTodos(todos: Todo[]) {\n  todosStore.update(\n    setEntities(todos),\n    updateRequestStatus('todos', 'success')\n  );\n}\n\n// todos.service.ts\n\nfunction fecthTodos() {\n  return fromFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos', {\n    selector: (response) => response.json(),\n  }).pipe(tap(setTodos), trackTodosRequestsStatus('todos'));\n}\n\nsetTimeout(() => {\n  fecthTodos().subscribe();\n}, 2000);\n",packages:["entities","requests"],mdxType:"LiveDemo"}),(0,r.kt)("br",null),"You can monitor and change the request status for your APIs using the following queries and mutations:",(0,r.kt)("h2",{id:"queries"},"Queries"),(0,r.kt)("h3",{id:"selectrequeststatus"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectRequestStatus")),(0,r.kt)("p",null,"Select the status of the provided request key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectRequestStatus } from '@ngneat/elf-requests';\n\ntodosStatus$ = store.pipe(selectRequestStatus('todos'));\n\n// This will return success when either the `todos` key or the `todo-1` key is succeeded\ntodoStatus$ = store.pipe(selectRequestStatus('todo-1', { groupKey: 'todos' }));\n")),(0,r.kt)("h3",{id:"getrequeststatus"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRequestStatus")),(0,r.kt)("p",null,"Get the status of the provided request key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getRequestStatus } from '@ngneat/elf-requests';\n\ntodosStatus = store.query(getRequestStatus('todos'));\n")),(0,r.kt)("h3",{id:"selectisrequestpending"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectIsRequestPending")),(0,r.kt)("p",null,"Select whether the status of the provided request key is ",(0,r.kt)("inlineCode",{parentName:"p"},"pending"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectIsRequestPending } from '@ngneat/elf-requests';\n\npending$ = store.pipe(selectIsRequestPending('todos'));\n")),(0,r.kt)("h2",{id:"mutations"},"Mutations"),(0,r.kt)("h3",{id:"updaterequeststatus"},(0,r.kt)("inlineCode",{parentName:"h3"},"updateRequestStatus")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { updateRequestStatus } from '@ngneat/elf-requests';\n\nstore.update(updateRequestStatus('todos', 'idle'));\nstore.update(updateRequestStatus('todos', 'pending'));\nstore.update(updateRequestStatus('todos', 'success'));\nstore.update(updateRequestStatus('todos', 'error', error));\n")),(0,r.kt)("h3",{id:"updaterequestsstatus"},(0,r.kt)("inlineCode",{parentName:"h3"},"updateRequestsStatus")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { updateRequestsStatus } from '@ngneat/elf-requests';\n\nstore.update(\n  updateRequestsStatus({\n    keyOne: {\n      value: 'success',\n    },\n  })\n);\n\nstore.update(updateRequestsStatus(['keyOne', 'keyTwo'], 'success'));\nstore.update(updateRequestStatus(['keyOne', 'keyTwo'], 'error', error));\n")),(0,r.kt)("h3",{id:"clearrequestsstatus"},(0,r.kt)("inlineCode",{parentName:"h3"},"clearRequestsStatus")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { clearRequestsStatus } from '@ngneat/elf-requests';\n\nstore.update(clearRequestsStatus());\n")))}m.isMDXComponent=!0}}]);