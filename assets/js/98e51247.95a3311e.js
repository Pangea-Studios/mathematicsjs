"use strict";(self.webpackChunkmath=self.webpackChunkmath||[]).push([[96],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(r),k=n,d=u["".concat(c,".").concat(k)]||u[k]||s[k]||l;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const l={},i=void 0,p={unversionedId:"reference/docs/Classes/Circle",id:"reference/docs/Classes/Circle",title:"Circle",description:"Circle",source:"@site/docs/reference/docs/Classes/Circle.md",sourceDirName:"reference/docs/Classes",slug:"/reference/docs/Classes/Circle",permalink:"/mathematicsjs/docs/reference/docs/Classes/Circle",draft:!1,editUrl:"https://github.com/Pangea-Studios/mathematicsjs/blob/docs/website/docs/reference/docs/Classes/Circle.md",tags:[],version:"current",lastUpdatedBy:"Noinkin",lastUpdatedAt:1684094233,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{},sidebar:"reference",previous:{title:"Intro",permalink:"/mathematicsjs/docs/intro"},next:{title:"Faction",permalink:"/mathematicsjs/docs/reference/docs/Classes/Faction"}},c={},o=[{value:"Circle",id:"circle",level:2},{value:"new Circle(options)",id:"new-circleoptions",level:3},{value:"circle.pi \u21d2 <code>number</code>",id:"circlepi--number",level:3}],m={toc:o};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"Circle"}),(0,n.kt)("h2",{id:"circle"},"Circle"),(0,n.kt)("p",null,"Creates a circle"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"See")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Circumference"},"https://en.wikipedia.org/wiki/Circumference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Area"},"https://en.wikipedia.org/wiki/Area")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pi"},"https://en.wikipedia.org/wiki/Pi")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Radius"},"https://en.wikipedia.org/wiki/Radius")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Diameter"},"https://en.wikipedia.org/wiki/Diameter"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Circle"},"Circle"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_Circle_new"},"new Circle(options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Circle+pi"},".pi")," \u21d2 ",(0,n.kt)("code",null,"number"))))),(0,n.kt)("a",{name:"new_Circle_new"}),(0,n.kt)("h3",{id:"new-circleoptions"},"new Circle(options)"),(0,n.kt)("p",null,"Creates a circle"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("code",null,"Object")," - All Measurements  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Object")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options.radius"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"The radius of the circle")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options.diameter"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"The diameter of the circle")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options.circumference"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"The circumference of the circle")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options.area"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"The area of the circle")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(Example 1 - Create Circle by Radius)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }\nnew Circle({ radius: 1 })\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(Example 2 - Create Circle by Diameter)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }\nnew Circle({ diameter: 2 })\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(Example 3 - Create Circle by Circumference)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }\nnew Circle({ circumference: 3.14 })\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(Example 4 - Create Circle by Area)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }\nnew Circle({ area: 3.14 })\n")),(0,n.kt)("a",{name:"Circle+pi"}),(0,n.kt)("h3",{id:"circlepi--number"},"circle.pi \u21d2 ",(0,n.kt)("code",null,"number")),(0,n.kt)("p",null,"Gets the value of pi"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,n.kt)("a",{parentName:"p",href:"#Circle"},(0,n.kt)("code",null,"Circle")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pi"},"https://en.wikipedia.org/wiki/Pi"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(Example - Get Pi)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// returns 3.14\nCircle.pi\n")))}s.isMDXComponent=!0}}]);