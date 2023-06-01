"use strict";(self.webpackChunkmath=self.webpackChunkmath||[]).push([[96],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(r),k=a,d=u["".concat(c,".").concat(k)]||u[k]||m[k]||l;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const l={},i=void 0,p={unversionedId:"reference/docs/Classes/Circle",id:"reference/docs/Classes/Circle",title:"Circle",description:"Circle",source:"@site/docs/reference/docs/Classes/Circle.md",sourceDirName:"reference/docs/Classes",slug:"/reference/docs/Classes/Circle",permalink:"/mathematicsjs/docs/reference/docs/Classes/Circle",draft:!1,editUrl:"https://github.com/Pangea-Studios/mathematicsjs/blob/docs/website/docs/reference/docs/Classes/Circle.md",tags:[],version:"current",lastUpdatedBy:"Noinkin",lastUpdatedAt:1685647386,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{},sidebar:"reference",previous:{title:"Intro",permalink:"/mathematicsjs/docs/intro"},next:{title:"Conversions",permalink:"/mathematicsjs/docs/reference/docs/Classes/Conversions"}},c={},o=[{value:"Circle",id:"circle",level:2},{value:"new Circle(options)",id:"new-circleoptions",level:3},{value:"circle.pi \u21d2 <code>number</code>",id:"circlepi--number",level:3}],s={toc:o};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"Circle"}),(0,a.kt)("h2",{id:"circle"},"Circle"),(0,a.kt)("p",null,"Creates a circle"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"See")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Circumference"},"https://en.wikipedia.org/wiki/Circumference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Area"},"https://en.wikipedia.org/wiki/Area")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pi"},"https://en.wikipedia.org/wiki/Pi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Radius"},"https://en.wikipedia.org/wiki/Radius")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Diameter"},"https://en.wikipedia.org/wiki/Diameter"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Circle"},"Circle"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new_Circle_new"},"new Circle(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Circle+pi"},".pi")," \u21d2 ",(0,a.kt)("code",null,"number"))))),(0,a.kt)("a",{name:"new_Circle_new"}),(0,a.kt)("h3",{id:"new-circleoptions"},"new Circle(options)"),(0,a.kt)("p",null,"Creates a circle"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Object")," - All Measurements  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Object")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[options.radius]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The radius of the circle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[options.diameter]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The diameter of the circle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[options.circumference]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The circumference of the circle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[options.area]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The area of the circle")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example 1 - Create Circle by Radius)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }\nnew Circle({ radius: 1 })\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example 2 - Create Circle by Diameter)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }\nnew Circle({ diameter: 2 })\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example 3 - Create Circle by Circumference)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }\nnew Circle({ circumference: 3.14 })\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example 4 - Create Circle by Area)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }\nnew Circle({ area: 3.14 })\n")),(0,a.kt)("a",{name:"Circle+pi"}),(0,a.kt)("h3",{id:"circlepi--number"},"circle.pi \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Gets the value of pi"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,a.kt)("a",{parentName:"p",href:"#Circle"},(0,a.kt)("code",null,"Circle")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pi"},"https://en.wikipedia.org/wiki/Pi"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example - Get Pi)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns 3.14\nCircle.pi\n")))}m.isMDXComponent=!0}}]);