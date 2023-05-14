"use strict";(self.webpackChunkmath=self.webpackChunkmath||[]).push([[871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"reference/docs/classes/Faction",id:"reference/docs/classes/Faction",title:"Faction",description:"Faction",source:"@site/docs/reference/docs/classes/Faction.md",sourceDirName:"reference/docs/classes",slug:"/reference/docs/classes/Faction",permalink:"/mathematicsjs/docs/reference/docs/classes/Faction",draft:!1,editUrl:"https://github.com/Pangea-Studios/mathematicsjs/blob/docs/website/docs/reference/docs/classes/Faction.md",tags:[],version:"current",lastUpdatedBy:"Noinkin",lastUpdatedAt:1684093968,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{},sidebar:"reference",previous:{title:"convertBase",permalink:"/mathematicsjs/docs/reference/docs/Functions/convertBase"},next:{title:"Indices",permalink:"/mathematicsjs/docs/reference/docs/classes/Indices"}},c={},p=[{value:"Faction",id:"faction",level:2},{value:"new Faction(numerator, denominator)",id:"new-factionnumerator-denominator",level:3},{value:"faction.simplified() \u21d2 <code>Array.&lt;number&gt;</code>",id:"factionsimplified--arraynumber",level:3},{value:"faction.decimal() \u21d2 <code>number</code>",id:"factiondecimal--number",level:3},{value:"faction.percentage() \u21d2 <code>number</code>",id:"factionpercentage--number",level:3},{value:"faction.toString() \u21d2 <code>string</code>",id:"factiontostring--string",level:3},{value:"faction.toSimplifiedString() \u21d2 <code>string</code>",id:"factiontosimplifiedstring--string",level:3}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"Faction"}),(0,r.kt)("h2",{id:"faction"},"Faction"),(0,r.kt)("p",null,"Creates a Fraction."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Faction"},"Faction"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_Faction_new"},"new Faction(numerator, denominator)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Faction+simplified"},".simplified()")," \u21d2 ",(0,r.kt)("code",null,"Array.","<","number",">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Faction+decimal"},".decimal()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Faction+percentage"},".percentage()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Faction+toString"},".toString()")," \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Faction+toSimplifiedString"},".toSimplifiedString()")," \u21d2 ",(0,r.kt)("code",null,"string"))))),(0,r.kt)("a",{name:"new_Faction_new"}),(0,r.kt)("h3",{id:"new-factionnumerator-denominator"},"new Faction(numerator, denominator)"),(0,r.kt)("p",null,"Creates the fraction"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numerator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The numerator(upper number) of the fraction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"denominator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The denominator(lower number) of the fraction")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Example - Create Fraction)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// returns { numerator: 3, denominator: 6 }\nnew Fraction(3,6)\n")),(0,r.kt)("a",{name:"Faction+simplified"}),(0,r.kt)("h3",{id:"factionsimplified--arraynumber"},"faction.simplified() \u21d2 ",(0,r.kt)("code",null,"Array.","<","number",">")),(0,r.kt)("p",null,"Simplify the number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Faction"},(0,r.kt)("code",null,"Faction")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"Array.","<","number",">")," - Simplified Fraction",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Example - Simplify Fraction)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Returns [1,2]\nconst myFraction = new Fraction(3,6)\nmyFraction.simplified()\n")),(0,r.kt)("a",{name:"Faction+decimal"}),(0,r.kt)("h3",{id:"factiondecimal--number"},"faction.decimal() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Converts the fraction to a decimal"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Faction"},(0,r.kt)("code",null,"Faction")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - Decimal",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Example - Convert Fraction to Decimal)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// returns 0.5\nconst myFraction = new Fraction(3,6)\nmyFraction.decimal()\n")),(0,r.kt)("a",{name:"Faction+percentage"}),(0,r.kt)("h3",{id:"factionpercentage--number"},"faction.percentage() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Converts the fraction to a percentage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Faction"},(0,r.kt)("code",null,"Faction")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - Percentage",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Example - Convert Fraction to Percentage)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// returns 50\nconst myFraction = new Fraction(3,6)\nmyFraction.percentage()\n")),(0,r.kt)("a",{name:"Faction+toString"}),(0,r.kt)("h3",{id:"factiontostring--string"},"faction.toString() \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,"Converts the fraction to a string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Faction"},(0,r.kt)("code",null,"Faction")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"string")," - Fraction String",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Example - Convert Fraction to String)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// returns "3/6"\nconst myFraction = new Fraction(3,6)\nmyFraction.toString()\n')),(0,r.kt)("a",{name:"Faction+toSimplifiedString"}),(0,r.kt)("h3",{id:"factiontosimplifiedstring--string"},"faction.toSimplifiedString() \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,"Converts the fraction to a simplified string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Faction"},(0,r.kt)("code",null,"Faction")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"string")," - Simplified Fraction String",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Example - Convert Fraction Simplified String)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// returns "1/2"\nconst myFraction = new Fraction(3,6)\nmyFraction.toSimplifiedString()\n')))}s.isMDXComponent=!0}}]);