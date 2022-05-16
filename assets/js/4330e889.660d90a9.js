"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[801],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5405:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},p="Props Factory",l={unversionedId:"miscellaneous/props-factory",id:"miscellaneous/props-factory",isDocsHomePage:!1,title:"Props Factory",description:"Using propsFactory is ideal when there are a number of stores that need the same properties. For example, let's say we want to have a version property for each of our stores:",source:"@site/docs/miscellaneous/props-factory.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/props-factory",permalink:"/elf/docs/miscellaneous/props-factory",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/miscellaneous/props-factory.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Production Mode",permalink:"/elf/docs/miscellaneous/production"},next:{title:"Operators",permalink:"/elf/docs/miscellaneous/operators"}},c=[{value:"Props Array Factory",id:"props-array-factory",children:[],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"props-factory"},"Props Factory"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"propsFactory")," is ideal when there are a number of stores that need the same properties. For example, let's say we want to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," property for each of our stores:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="store-props.ts"',title:'"store-props.ts"'},"import { propsFactory } from '@ngneat/elf';\n\nexport const {\n  withVersion,\n  updateVersion,\n  selectVersion,\n  resetVersion,\n  getVersion,\n  setVersion,\n} = propsFactory('version', {\n  initialValue: 1,\n});\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"propsFactory")," function takes the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of a property and the initial value and returns everything we need to add, query, and mutate that property. The ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of a property is inferred based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"initialValue"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.repository.ts"',title:'"todos.repository.ts"'},"import { withVersion, updateVersion, selectVersion } from '@app/store-props.ts';\n\nconst store = createStore({ name: 'todos' }, withVersion());\n\nstore.update(updateVersion(2));\nstore.pipe(selectVersion());\nstore.query(getVersion);\n")),(0,a.kt)("p",null,"If you need to use a complex type you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"initialValue: {} as MyInterface"),"."),(0,a.kt)("h2",{id:"props-array-factory"},"Props Array Factory"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"propsArrayFactory")," is similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"propsFactory")," but for properties of type ",(0,a.kt)("inlineCode",{parentName:"p"},"array"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="store-props.ts"',title:'"store-props.ts"'},"import { propsArrayFactory } from '@ngneat/elf';\n\nexport const {\n  withSkills,\n  addSkills,\n  removeSkills,\n  toggleSkills,\n  updateSkills,\n  getSkills,\n  resetSkills,\n  selectSkills,\n  setSkills,\n  inSkills,\n} = propsFactory('skills', {\n  initialValue: [] as string[],\n});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"propsArrayFactory")," is designed to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"primitive")," arrays. For managing collections of ",(0,a.kt)("inlineCode",{parentName:"p"},"objects"),", it's recommended to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/features/entities/entities-props-factory"},"entitiesPropsFactory"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In addition, it's useful for managing a collection of ",(0,a.kt)("inlineCode",{parentName:"p"},"primitives")," in one store. Consider the case of a ",(0,a.kt)("inlineCode",{parentName:"p"},"books")," store, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"userCollectionIds")," that contains ",(0,a.kt)("inlineCode",{parentName:"p"},"book")," ids."))))}m.isMDXComponent=!0}}]);