"use strict";(self.webpackChunkmath=self.webpackChunkmath||[]).push([[255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=c,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),c=(n(7294),n(3905));const a={},o=void 0,i={unversionedId:"reference/docs/functions/decimal",id:"reference/docs/functions/decimal",title:"decimal",description:"faction.decimal() \u21d2 number",source:"@site/docs/reference/docs/functions/decimal.md",sourceDirName:"reference/docs/functions",slug:"/reference/docs/functions/decimal",permalink:"/mathematicsjs/docs/reference/docs/functions/decimal",draft:!1,editUrl:"https://github.com/pangea-studios/math/blob/docs/website/docs/reference/docs/functions/decimal.md",tags:[],version:"current",lastUpdatedBy:"Noinkin",lastUpdatedAt:1666185082,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{},sidebar:"reference",previous:{title:"Indices",permalink:"/mathematicsjs/docs/reference/docs/classes/Indices"},next:{title:"gcd",permalink:"/mathematicsjs/docs/reference/docs/functions/gcd"}},l={},s=[{value:"faction.decimal() \u21d2 <code>number</code>",id:"factiondecimal--number",level:2}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("a",{name:"Faction+decimal"}),(0,c.kt)("h2",{id:"factiondecimal--number"},"faction.decimal() \u21d2 ",(0,c.kt)("code",null,"number")),(0,c.kt)("p",null,"Converts the fraction to a decimal"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,c.kt)("a",{parentName:"p",href:"#Faction"},(0,c.kt)("code",null,"Faction")),(0,c.kt)("br",{parentName:"p"}),"\n",(0,c.kt)("strong",{parentName:"p"},"Returns"),": ",(0,c.kt)("code",null,"number")," - Decimal",(0,c.kt)("br",{parentName:"p"}),"\n",(0,c.kt)("strong",{parentName:"p"},"Example")," ",(0,c.kt)("em",{parentName:"p"},"(Example - Convert Fraction to Decimal)"),"  "),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"// returns 0.5\nconst myFraction = new Fraction(3,6)\nmyFraction.decimal()\n")))}p.isMDXComponent=!0}}]);