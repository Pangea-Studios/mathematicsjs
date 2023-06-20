"use strict";(self.webpackChunkmath=self.webpackChunkmath||[]).push([[6102],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),m=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),k=m(n),d=a,c=k["".concat(i,".").concat(d)]||k[d]||s[d]||l;return n?r.createElement(c,o(o({ref:e},p),{},{components:n})):r.createElement(c,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6888:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,u={unversionedId:"reference/docs/Classes/Conversions",id:"reference/docs/Classes/Conversions",title:"Conversions",description:"This reference has been auto-generated and therefore is not guaranteed to be using the stable release.",source:"@site/docs/reference/docs/Classes/Conversions.md",sourceDirName:"reference/docs/Classes",slug:"/reference/docs/Classes/Conversions",permalink:"/mathematicsjs/docs/reference/docs/Classes/Conversions",draft:!1,editUrl:"https://github.com/Pangea-Studios/mathematicsjs/blob/docs/website/docs/reference/docs/Classes/Conversions.md",tags:[],version:"current",lastUpdatedBy:"PokyBread",lastUpdatedAt:1687287025,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{},sidebar:"reference",previous:{title:"Circle",permalink:"/mathematicsjs/docs/reference/docs/Classes/Circle"},next:{title:"Fraction",permalink:"/mathematicsjs/docs/reference/docs/Classes/Fraction"}},i={},m=[{value:"Conversions",id:"conversions",level:2},{value:"Conversions.convertAngle(value, fromUnit, toUnit) \u21d2 <code>number</code>",id:"conversionsconvertanglevalue-fromunit-tounit--number",level:3},{value:"Conversions.convertLength(value, fromUnit, toUnit) \u21d2 <code>number</code>",id:"conversionsconvertlengthvalue-fromunit-tounit--number",level:3},{value:"Conversions.convertTime(value, fromUnit, toUnit) \u21d2 <code>number</code>",id:"conversionsconverttimevalue-fromunit-tounit--number",level:3},{value:"Conversions.convertMass(value, fromUnit, toUnit) \u21d2 <code>number</code>",id:"conversionsconvertmassvalue-fromunit-tounit--number",level:3},{value:"Conversions.convertEnergy(value, fromUnit, toUnit) \u21d2 <code>number</code>",id:"conversionsconvertenergyvalue-fromunit-tounit--number",level:3},{value:"Conversions.convertTemperature(value, fromUnit, toUnit) \u21d2 <code>number</code>",id:"conversionsconverttemperaturevalue-fromunit-tounit--number",level:3},{value:"Conversions.convertSpeed(value, fromUnit, toUnit) \u21d2 <code>number</code>",id:"conversionsconvertspeedvalue-fromunit-tounit--number",level:3},{value:"Conversions.convertPressure(value, fromUnit, toUnit) \u21d2 <code>number</code>",id:"conversionsconvertpressurevalue-fromunit-tounit--number",level:3},{value:"Conversions.convertArea(value, fromUnit, toUnit) \u21d2 <code>number</code>",id:"conversionsconvertareavalue-fromunit-tounit--number",level:3},{value:"Conversions.convertVolume(value, fromUnit, toUnit) \u21d2 <code>number</code>",id:"conversionsconvertvolumevalue-fromunit-tounit--number",level:3}],p={toc:m};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This reference has been auto-generated and therefore is not guaranteed to be using the stable release.")),(0,a.kt)("a",{name:"Conversions"}),(0,a.kt)("h2",{id:"conversions"},"Conversions"),(0,a.kt)("p",null,"Class for Conversions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions"},"Conversions"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions.convertAngle"},".convertAngle(value, fromUnit, toUnit)")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions.convertLength"},".convertLength(value, fromUnit, toUnit)")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions.convertTime"},".convertTime(value, fromUnit, toUnit)")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions.convertMass"},".convertMass(value, fromUnit, toUnit)")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions.convertEnergy"},".convertEnergy(value, fromUnit, toUnit)")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions.convertTemperature"},".convertTemperature(value, fromUnit, toUnit)")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions.convertSpeed"},".convertSpeed(value, fromUnit, toUnit)")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions.convertPressure"},".convertPressure(value, fromUnit, toUnit)")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions.convertArea"},".convertArea(value, fromUnit, toUnit)")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Conversions.convertVolume"},".convertVolume(value, fromUnit, toUnit)")," \u21d2 ",(0,a.kt)("code",null,"number"))))),(0,a.kt)("a",{name:"Conversions.convertAngle"}),(0,a.kt)("h3",{id:"conversionsconvertanglevalue-fromunit-tounit--number"},"Conversions.convertAngle(value, fromUnit, toUnit) \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts an angle from one unit to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Conversions"},(0,a.kt)("code",null,"Conversions")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - The converted angle value."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The value of the angle to convert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"AngleType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit of the input angle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"AngleType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The desired unit of the output angle.")))),(0,a.kt)("a",{name:"Conversions.convertLength"}),(0,a.kt)("h3",{id:"conversionsconvertlengthvalue-fromunit-tounit--number"},"Conversions.convertLength(value, fromUnit, toUnit) \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts a length value from one unit to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Conversions"},(0,a.kt)("code",null,"Conversions")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - The converted value."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The value to convert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"LengthType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit to convert from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"LengthType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit to convert to.")))),(0,a.kt)("a",{name:"Conversions.convertTime"}),(0,a.kt)("h3",{id:"conversionsconverttimevalue-fromunit-tounit--number"},"Conversions.convertTime(value, fromUnit, toUnit) \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts a time value from one unit to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Conversions"},(0,a.kt)("code",null,"Conversions")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - - The converted value in the desired unit."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The value to convert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"TimeType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit of the input value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"TimeType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The desired unit of the output value.")))),(0,a.kt)("a",{name:"Conversions.convertMass"}),(0,a.kt)("h3",{id:"conversionsconvertmassvalue-fromunit-tounit--number"},"Conversions.convertMass(value, fromUnit, toUnit) \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts a mass value from one unit to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Conversions"},(0,a.kt)("code",null,"Conversions")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - The converted mass value."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The mass value to be converted.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"MassType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit to convert from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"MassType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit to convert to.")))),(0,a.kt)("a",{name:"Conversions.convertEnergy"}),(0,a.kt)("h3",{id:"conversionsconvertenergyvalue-fromunit-tounit--number"},"Conversions.convertEnergy(value, fromUnit, toUnit) \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Convert an energy value from one unit to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Conversions"},(0,a.kt)("code",null,"Conversions")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - - the converted energy value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"the energy value to convert")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"EnergyType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"the unit of the input value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"EnergyType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"the desired output unit")))),(0,a.kt)("a",{name:"Conversions.convertTemperature"}),(0,a.kt)("h3",{id:"conversionsconverttemperaturevalue-fromunit-tounit--number"},"Conversions.convertTemperature(value, fromUnit, toUnit) \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts a temperature value from one unit to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Conversions"},(0,a.kt)("code",null,"Conversions")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - The converted temperature value in the desired unit."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The temperature value to be converted.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"TemperatureType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit of the input temperature value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"TemperatureType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit of the output temperature value.")))),(0,a.kt)("a",{name:"Conversions.convertSpeed"}),(0,a.kt)("h3",{id:"conversionsconvertspeedvalue-fromunit-tounit--number"},"Conversions.convertSpeed(value, fromUnit, toUnit) \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts a speed value from one unit to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Conversions"},(0,a.kt)("code",null,"Conversions")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - - the converted value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"the value to be converted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"SpeedType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"the unit to convert from")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"SpeedType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"the unit to convert to")))),(0,a.kt)("a",{name:"Conversions.convertPressure"}),(0,a.kt)("h3",{id:"conversionsconvertpressurevalue-fromunit-tounit--number"},"Conversions.convertPressure(value, fromUnit, toUnit) \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts a pressure value from one unit to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Conversions"},(0,a.kt)("code",null,"Conversions")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - The converted pressure value."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The pressure value to convert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#PressureType"},(0,a.kt)("code",null,"PressureType"))," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit to convert from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#PressureType"},(0,a.kt)("code",null,"PressureType"))," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit to convert to.")))),(0,a.kt)("a",{name:"Conversions.convertArea"}),(0,a.kt)("h3",{id:"conversionsconvertareavalue-fromunit-tounit--number"},"Conversions.convertArea(value, fromUnit, toUnit) \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts an area measurement from one unit to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Conversions"},(0,a.kt)("code",null,"Conversions")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - - The numerical value of the converted area measurement in the toUnit."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The numerical value of the area measurement in the fromUnit.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"AreaType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit to convert from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"AreaType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit to convert to.")))),(0,a.kt)("a",{name:"Conversions.convertVolume"}),(0,a.kt)("h3",{id:"conversionsconvertvolumevalue-fromunit-tounit--number"},"Conversions.convertVolume(value, fromUnit, toUnit) \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Converts an volume measurement from one unit to another."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Conversions"},(0,a.kt)("code",null,"Conversions")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - - The numerical value of the converted volume measurement in the toUnit."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The numerical value of the volume measurement in the fromUnit.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fromUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"VolumeType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit to convert from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toUnit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"VolumeType")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The unit to convert to.")))))}s.isMDXComponent=!0}}]);