"use strict";(self.webpackChunkmath=self.webpackChunkmath||[]).push([[199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},c=void 0,l={unversionedId:"reference/docs/functions/gcd",id:"reference/docs/functions/gcd",title:"gcd",description:"gcd(arr, [options]) \u21d2 number",source:"@site/docs/reference/docs/functions/gcd.md",sourceDirName:"reference/docs/functions",slug:"/reference/docs/functions/gcd",permalink:"/mathematicsjs/docs/reference/docs/functions/gcd",draft:!1,editUrl:"https://github.com/pangea-studios/math/blob/docs/website/docs/reference/docs/functions/gcd.md",tags:[],version:"current",lastUpdatedBy:"Noinkin",lastUpdatedAt:1666458349,formattedLastUpdatedAt:"Oct 22, 2022",frontMatter:{},sidebar:"reference",previous:{title:"decimal",permalink:"/mathematicsjs/docs/reference/docs/functions/decimal"},next:{title:"gcd2",permalink:"/mathematicsjs/docs/reference/docs/functions/gcd2"}},p={},i=[{value:"gcd(arr, options) \u21d2 <code>number</code>",id:"gcdarr-options--number",level:2}],u={toc:i};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"gcd"}),(0,a.kt)("h2",{id:"gcdarr-options--number"},"gcd(arr, ","[options]",") \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Find the GCD of the inputted numbers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - The GCD of the inputted numbers  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"arr"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Array.","<","number",">")),(0,a.kt)("td",{parentName:"tr",align:null},"The numbers to find the GCD of")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[options]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"Extra options")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[options.base]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The base of the numbers you inputted")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example 1 - Non Prime Numbers)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns 2\ngcd([8,12,16])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example 2 - Prime Numbers)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns 1\ngcd([7,13,5])\n")))}s.isMDXComponent=!0}}]);