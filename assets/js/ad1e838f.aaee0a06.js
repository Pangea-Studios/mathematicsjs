"use strict";(self.webpackChunkmath=self.webpackChunkmath||[]).push([[8109],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),p=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(a),c=n,k=s["".concat(m,".").concat(c)]||s[c]||u[c]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8173:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},i=void 0,o={unversionedId:"reference/docs/Classes/Matrix",id:"reference/docs/Classes/Matrix",title:"Matrix",description:"This reference has been auto-generated and therefore is not guaranteed to be using the stable release.",source:"@site/docs/reference/docs/Classes/Matrix.md",sourceDirName:"reference/docs/Classes",slug:"/reference/docs/Classes/Matrix",permalink:"/mathematicsjs/docs/reference/docs/Classes/Matrix",draft:!1,editUrl:"https://github.com/Pangea-Studios/mathematicsjs/blob/docs/website/docs/reference/docs/Classes/Matrix.md",tags:[],version:"current",lastUpdatedBy:"Noinkin",lastUpdatedAt:1687378226,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{},sidebar:"reference",previous:{title:"Logarithms",permalink:"/mathematicsjs/docs/reference/docs/Classes/Logarithms"},next:{title:"Summation",permalink:"/mathematicsjs/docs/reference/docs/Classes/Summation"}},m={},p=[{value:"Matrix",id:"matrix",level:2},{value:"new Matrix(rows, columns, values)",id:"new-matrixrows-columns-values",level:3},{value:"matrix.multiply(other) \u21d2 <code>Matrix</code>",id:"matrixmultiplyother--codematrixcode",level:3},{value:"matrix.add(other) \u21d2 <code>Matrix</code>",id:"matrixaddother--codematrixcode",level:3},{value:"matrix.divide(other) \u21d2 <code>Matrix</code>",id:"matrixdivideother--codematrixcode",level:3},{value:"matrix.subtract(other) \u21d2 <code>Matrix</code>",id:"matrixsubtractother--codematrixcode",level:3},{value:"matrix.multiplyScalar(scalar) \u21d2 <code>Matrix</code>",id:"matrixmultiplyscalarscalar--codematrixcode",level:3},{value:"matrix.divideScalar(scalar) \u21d2 <code>Matrix</code>",id:"matrixdividescalarscalar--codematrixcode",level:3}],d={toc:p};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This reference has been auto-generated and therefore is not guaranteed to be using the stable release.")),(0,n.kt)("a",{name:"Matrix"}),(0,n.kt)("h2",{id:"matrix"},"Matrix"),(0,n.kt)("p",null,"Class to create and manipulate Matrices"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global class  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Matrix"},"Matrix"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_Matrix_new"},"new Matrix(rows, columns, values)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Matrix+multiply"},".multiply(other)")," \u21d2 ",(0,n.kt)("a",{parentName:"li",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Matrix+add"},".add(other)")," \u21d2 ",(0,n.kt)("a",{parentName:"li",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Matrix+divide"},".divide(other)")," \u21d2 ",(0,n.kt)("a",{parentName:"li",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Matrix+subtract"},".subtract(other)")," \u21d2 ",(0,n.kt)("a",{parentName:"li",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Matrix+multiplyScalar"},".multiplyScalar(scalar)")," \u21d2 ",(0,n.kt)("a",{parentName:"li",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Matrix+divideScalar"},".divideScalar(scalar)")," \u21d2 ",(0,n.kt)("a",{parentName:"li",href:"#Matrix"},(0,n.kt)("code",null,"Matrix")))))),(0,n.kt)("a",{name:"new_Matrix_new"}),(0,n.kt)("h3",{id:"new-matrixrows-columns-values"},"new Matrix(rows, columns, values)"),(0,n.kt)("p",null,"Creates a new matrix"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rows"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"The number of rows")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"columns"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"The number of columns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"values"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Array.","<","Array.","<","number",">",">")),(0,n.kt)("td",{parentName:"tr",align:null},"The values of the matrix")))),(0,n.kt)("a",{name:"Matrix+multiply"}),(0,n.kt)("h3",{id:"matrixmultiplyother--codematrixcode"},"matrix.multiply(other) \u21d2 ",(0,n.kt)("a",{parentName:"h3",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("p",null,"Calculates the product of two matrices."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))," - A new matrix that is the product of this matrix and other.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Throws"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Error")," If the number of columns of this matrix does not match the number of rows of the other matrix.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"other"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"MatrixConstructor")),(0,n.kt)("td",{parentName:"tr",align:null},"The matrix to multiply with.")))),(0,n.kt)("a",{name:"Matrix+add"}),(0,n.kt)("h3",{id:"matrixaddother--codematrixcode"},"matrix.add(other) \u21d2 ",(0,n.kt)("a",{parentName:"h3",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("p",null,"Adds the values of two matrices together."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))," - A new matrix with the added values.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Throws"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Error")," If matrices do not have the same number of rows and columns.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"other"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"MatrixConstructor")),(0,n.kt)("td",{parentName:"tr",align:null},"The matrix to add to this one.")))),(0,n.kt)("a",{name:"Matrix+divide"}),(0,n.kt)("h3",{id:"matrixdivideother--codematrixcode"},"matrix.divide(other) \u21d2 ",(0,n.kt)("a",{parentName:"h3",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("p",null,"Divides this matrix by another one element-wise and returns the result as a new matrix."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))," - A new matrix that is the result of the element-wise division",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Throws"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Error")," When matrices do not have the same dimensions or when dividing by 0")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"other"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"MatrixConstructor")),(0,n.kt)("td",{parentName:"tr",align:null},"the matrix to divide by")))),(0,n.kt)("a",{name:"Matrix+subtract"}),(0,n.kt)("h3",{id:"matrixsubtractother--codematrixcode"},"matrix.subtract(other) \u21d2 ",(0,n.kt)("a",{parentName:"h3",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("p",null,"Subtract two matrices of the same dimensions and return the result."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))," - a new matrix that is the result of the subtraction",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Throws"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Error")," if matrices do not have the same dimensions")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"other"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"MatrixConstructor")),(0,n.kt)("td",{parentName:"tr",align:null},"the matrix to subtract from this one")))),(0,n.kt)("a",{name:"Matrix+multiplyScalar"}),(0,n.kt)("h3",{id:"matrixmultiplyscalarscalar--codematrixcode"},"matrix.multiplyScalar(scalar) \u21d2 ",(0,n.kt)("a",{parentName:"h3",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("p",null,"Multiplies the matrix by a scalar."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))," - a new Matrix object that is the result of the scalar multiplication.  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"scalar"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the scalar to multiply with.")))),(0,n.kt)("a",{name:"Matrix+divideScalar"}),(0,n.kt)("h3",{id:"matrixdividescalarscalar--codematrixcode"},"matrix.divideScalar(scalar) \u21d2 ",(0,n.kt)("a",{parentName:"h3",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))),(0,n.kt)("p",null,"Divides every element in the matrix by a scalar."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("a",{parentName:"p",href:"#Matrix"},(0,n.kt)("code",null,"Matrix"))," - a new matrix with the results of the division",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Throws"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Error")," if scalar is zero")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"scalar"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the scalar to divide by")))))}u.isMDXComponent=!0}}]);