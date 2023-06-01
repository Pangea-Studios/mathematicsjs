"use strict";(self.webpackChunkmath=self.webpackChunkmath||[]).push([[661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"reference/docs/Classes/Fraction",id:"reference/docs/Classes/Fraction",title:"Fraction",description:"Fraction",source:"@site/docs/reference/docs/Classes/Fraction.md",sourceDirName:"reference/docs/Classes",slug:"/reference/docs/Classes/Fraction",permalink:"/mathematicsjs/docs/reference/docs/Classes/Fraction",draft:!1,editUrl:"https://github.com/Pangea-Studios/mathematicsjs/blob/docs/website/docs/reference/docs/Classes/Fraction.md",tags:[],version:"current",lastUpdatedBy:"Noinkin",lastUpdatedAt:1685647386,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{},sidebar:"reference",previous:{title:"Faction",permalink:"/mathematicsjs/docs/reference/docs/Classes/Faction"},next:{title:"Indices",permalink:"/mathematicsjs/docs/reference/docs/Classes/Indices"}},c={},p=[{value:"Fraction",id:"fraction",level:2},{value:"new Fraction(numerator, denominator)",id:"new-fractionnumerator-denominator",level:3},{value:"fraction.simplified() \u21d2 <code>Array.&lt;number&gt;</code>",id:"fractionsimplified--arraynumber",level:3},{value:"fraction.decimal() \u21d2 <code>number</code>",id:"fractiondecimal--number",level:3},{value:"fraction.percentage() \u21d2 <code>number</code>",id:"fractionpercentage--number",level:3},{value:"fraction.toString() \u21d2 <code>string</code>",id:"fractiontostring--string",level:3},{value:"fraction.toSimplifiedString() \u21d2 <code>string</code>",id:"fractiontosimplifiedstring--string",level:3}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"Fraction"}),(0,a.kt)("h2",{id:"fraction"},"Fraction"),(0,a.kt)("p",null,"Creates a Fraction."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global class  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Fraction"},"Fraction"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new_Fraction_new"},"new Fraction(numerator, denominator)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Fraction+simplified"},".simplified()")," \u21d2 ",(0,a.kt)("code",null,"Array.","<","number",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Fraction+decimal"},".decimal()")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Fraction+percentage"},".percentage()")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Fraction+toString"},".toString()")," \u21d2 ",(0,a.kt)("code",null,"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Fraction+toSimplifiedString"},".toSimplifiedString()")," \u21d2 ",(0,a.kt)("code",null,"string"))))),(0,a.kt)("a",{name:"new_Fraction_new"}),(0,a.kt)("h3",{id:"new-fractionnumerator-denominator"},"new Fraction(numerator, denominator)"),(0,a.kt)("p",null,"Creates the fraction"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"numerator"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The numerator(upper number) of the fraction")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"denominator"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The denominator(lower number) of the fraction")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example - Create Fraction)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns { numerator: 3, denominator: 6 }\nnew Fraction(3,6)\n")),(0,a.kt)("a",{name:"Fraction+simplified"}),(0,a.kt)("h3",{id:"fractionsimplified--arraynumber"},"fraction.simplified() \u21d2 ",(0,a.kt)("code",null,"Array.","<","number",">")),(0,a.kt)("p",null,"Simplify the number"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Fraction"},(0,a.kt)("code",null,"Fraction")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Array.","<","number",">")," - Simplified Fraction",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example - Simplify Fraction)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Returns [1,2]\nconst myFraction = new Fraction(3,6)\nmyFraction.simplified()\n")),(0,a.kt)("a",{name:"Fraction+decimal"}),(0,a.kt)("h3",{id:"fractiondecimal--number"},"fraction.decimal() \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts the fraction to a decimal"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Fraction"},(0,a.kt)("code",null,"Fraction")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - Decimal",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example - Convert Fraction to Decimal)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns 0.5\nconst myFraction = new Fraction(3,6)\nmyFraction.decimal()\n")),(0,a.kt)("a",{name:"Fraction+percentage"}),(0,a.kt)("h3",{id:"fractionpercentage--number"},"fraction.percentage() \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts the fraction to a percentage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Fraction"},(0,a.kt)("code",null,"Fraction")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - Percentage",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example - Convert Fraction to Percentage)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// returns 50\nconst myFraction = new Fraction(3,6)\nmyFraction.percentage()\n")),(0,a.kt)("a",{name:"Fraction+toString"}),(0,a.kt)("h3",{id:"fractiontostring--string"},"fraction.toString() \u21d2 ",(0,a.kt)("code",null,"string")),(0,a.kt)("p",null,"Converts the fraction to a string"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Fraction"},(0,a.kt)("code",null,"Fraction")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"string")," - Fraction String",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example - Convert Fraction to String)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// returns "3/6"\nconst myFraction = new Fraction(3,6)\nmyFraction.toString()\n')),(0,a.kt)("a",{name:"Fraction+toSimplifiedString"}),(0,a.kt)("h3",{id:"fractiontosimplifiedstring--string"},"fraction.toSimplifiedString() \u21d2 ",(0,a.kt)("code",null,"string")),(0,a.kt)("p",null,"Converts the fraction to a simplified string"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Fraction"},(0,a.kt)("code",null,"Fraction")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"string")," - Simplified Fraction String",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example")," ",(0,a.kt)("em",{parentName:"p"},"(Example - Convert Fraction Simplified String)"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// returns "1/2"\nconst myFraction = new Fraction(3,6)\nmyFraction.toSimplifiedString()\n')))}s.isMDXComponent=!0}}]);