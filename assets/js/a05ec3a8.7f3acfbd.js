"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60947],{15995:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(62540);n(63696);var s=n(11750);function i({children:e,hidden:t,className:n}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)("tabItem_pnkT",n),hidden:t,children:e})}},27446:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(62540),s=n(63696),i=n(11750),o=n(7846),c=n(49519),a=n(96439),l=n(19739),u=n(66904),p=n(79244);function d(e){var t,n;return null!==(n=null===(t=s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function h({value:e,tabValues:t}){return t.some(t=>t.value===e)}var f=n(10709);function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function y({className:e,block:t,selectedValue:n,selectValue:s,tabValues:c}){let a=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{let t=e.currentTarget,r=c[a.indexOf(t)].value;r!==n&&(l(t),s(r))},p=e=>{var t,n;let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=a.indexOf(e.currentTarget)+1;r=null!==(t=a[n])&&void 0!==t?t:a[0];break}case"ArrowLeft":{let t=a.indexOf(e.currentTarget)-1;r=null!==(n=a[t])&&void 0!==n?n:a[a.length-1]}}null==r||r.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},e),children:c.map(({value:e,label:t,attributes:s})=>(0,r.jsx)("li",g(m({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>a.push(e),onKeyDown:p,onClick:u},s),{className:(0,i.A)("tabs__item","tabItem_AQgk",null==s?void 0:s.className,{"tabs__item--active":n===e}),children:null!=t?t:e}),e))})}function j({lazy:e,children:t,selectedValue:n}){let o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===n);return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))})}function x(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,i=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=null!=t?t:d(n).map(({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r}));return!function(e){let t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[o,f]=(0,s.useState)(()=>(function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=null!==(n=t.find(e=>e.default))&&void 0!==n?n:t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[m,g]=function({queryString:e=!1,groupId:t}){let n=(0,c.W6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,l.aZ)(r),(0,s.useCallback)(e=>{var t,s;if(!r)return;let i=new URLSearchParams(n.location.search);i.set(r,e),n.replace((t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},n.location),s=s={search:i.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(s)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}),t))},[r,n])]}({queryString:n,groupId:r}),[y,j]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[n,r]=(0,p.Dv)(t);return[n,(0,s.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:r}),x=(()=>{let e=null!=m?m:y;return h({value:e,tabValues:i})?e:null})();return(0,a.A)(()=>{x&&f(x)},[x]),{selectedValue:o,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),j(e)},[g,j,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.A)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(y,m({},t,e)),(0,r.jsx)(j,m({},t,e))]})}function b(e){let t=(0,f.A)();return(0,r.jsx)(x,g(m({},e),{children:d(e.children)}),String(t))}},15526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>p});let r=JSON.parse('{"id":"typescript-support","title":"TypeScript Support","description":"Docusaurus is written in TypeScript and provides first-class TypeScript support.","source":"@site/docs/typescript-support.mdx","sourceDirName":".","slug":"/typescript-support","permalink":"/docs/typescript-support","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/typescript-support.mdx","tags":[],"version":"current","lastUpdatedBy":"k-seltzer","lastUpdatedAt":1727303246000,"frontMatter":{"description":"Docusaurus is written in TypeScript and provides first-class TypeScript support."},"sidebar":"docs","previous":{"title":"Playground","permalink":"/docs/playground"},"next":{"title":"Guides","permalink":"/docs/category/guides"}}');var s=n(62540),i=n(43023),o=n(27446),c=n(15995);let a={description:"Docusaurus is written in TypeScript and provides first-class TypeScript support."},l="TypeScript Support",u={},p=[{value:"Initialization",id:"initialization",level:2},{value:"Setup",id:"setup",level:2},{value:"Typing the config file",id:"typing-config",level:2},{value:"Swizzling TypeScript theme components",id:"swizzling-typescript-theme-components",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"typescript-support",children:"TypeScript Support"})}),"\n",(0,s.jsx)(t.p,{children:"Docusaurus is written in TypeScript and provides first-class TypeScript support."}),"\n",(0,s.jsxs)(t.p,{children:["The minimum required version is ",(0,s.jsx)(t.strong,{children:"TypeScript 5.1"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsxs)(t.p,{children:["Docusaurus supports writing and using TypeScript theme components. If the init template provides a TypeScript variant, you can directly initialize a site with full TypeScript support by using the ",(0,s.jsx)(t.code,{children:"--typescript"})," flag."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website classic --typescript\n"})}),"\n",(0,s.jsx)(t.p,{children:"Below are some guides on how to migrate an existing project to TypeScript."}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(t.p,{children:"Add the following packages to your project:"}),"\n",(0,s.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,s.jsx)(c.A,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types\n"})})}),(0,s.jsx)(c.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add --dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types\n"})})}),(0,s.jsx)(c.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Then add ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," to your project root with the following content:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "extends": "@docusaurus/tsconfig",\n  "compilerOptions": {\n    "baseUrl": "."\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Docusaurus doesn't use this ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," to compile your project. It is added just for a nicer Editor experience, although you can choose to run ",(0,s.jsx)(t.code,{children:"tsc"})," to type check your code for yourself or on CI."]}),"\n",(0,s.jsx)(t.p,{children:"Now you can start writing TypeScript theme components."}),"\n",(0,s.jsx)(t.h2,{id:"typing-config",children:"Typing the config file"}),"\n",(0,s.jsx)(t.p,{children:"It is possible to use a TypeScript config file in Docusaurus."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"import type {Config} from '@docusaurus/types';\nimport type * as Preset from '@docusaurus/preset-classic';\n\n// highlight-next-line\nconst config: Config = {\n  title: 'My Site',\n  favicon: 'img/favicon.ico',\n\n  /* Your site config here */\n\n  presets: [\n    [\n      'classic',\n      {\n        /* Your preset config here */\n        // highlight-next-line\n      } satisfies Preset.Options,\n    ],\n  ],\n\n  themeConfig: {\n    /* Your theme config here */\n    // highlight-next-line\n  } satisfies Preset.ThemeConfig,\n};\n\nexport default config;\n"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:["It is also possible to use ",(0,s.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html",children:"JSDoc type annotations"})," within a ",(0,s.jsx)(t.code,{children:".js"})," file:"]}),(0,s.jsx)(t.p,{children:"By default, the Docusaurus TypeScript config does not type-check JavaScript files."}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"// @ts-check"})," comment ensures the config file is properly type-checked when running ",(0,s.jsx)(t.code,{children:"npx tsc"}),"."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-next-line\n// @ts-check\n\n// highlight-next-line\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  tagline: 'Dinosaurs are cool',\n  favicon: 'img/favicon.ico',\n\n  /* Your site config here */\n\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      // highlight-next-line\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      (\n        {\n          /* Your preset config here */\n        }\n      ),\n    ],\n  ],\n  themeConfig:\n    // highlight-next-line\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    (\n      {\n        /* Your theme config here */\n      }\n    ),\n};\n\nexport default config;\n"})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"Type annotations are very useful and help your IDE understand the type of config objects!"}),(0,s.jsx)(t.p,{children:"The best IDEs (VS Code, WebStorm, IntelliJ...) will provide a nice auto-completion experience."})]}),"\n",(0,s.jsx)(t.h2,{id:"swizzling-typescript-theme-components",children:"Swizzling TypeScript theme components"}),"\n",(0,s.jsxs)(t.p,{children:["For themes that support TypeScript theme components, you can add the ",(0,s.jsx)(t.code,{children:"--typescript"})," flag to the end of the ",(0,s.jsx)(t.code,{children:"swizzle"})," command to get TypeScript source code. For example, the following command will generate ",(0,s.jsx)(t.code,{children:"index.tsx"})," and ",(0,s.jsx)(t.code,{children:"styles.module.css"})," into ",(0,s.jsx)(t.code,{children:"src/theme/Footer"}),"."]}),"\n",(0,s.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,s.jsx)(c.A,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic Footer -- --typescript\n"})})}),(0,s.jsx)(c.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-classic Footer --typescript\n"})})}),(0,s.jsx)(c.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-classic Footer --typescript\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["All official Docusaurus themes support TypeScript theme components, including ",(0,s.jsx)(t.a,{href:"/docs/api/themes/@docusaurus/theme-classic",children:(0,s.jsx)(t.code,{children:"theme-classic"})}),", ",(0,s.jsx)(t.a,{href:"/docs/api/themes/@docusaurus/theme-live-codeblock",children:(0,s.jsx)(t.code,{children:"theme-live-codeblock"})}),", and ",(0,s.jsx)(t.a,{href:"/docs/api/themes/@docusaurus/theme-search-algolia",children:(0,s.jsx)(t.code,{children:"theme-search-algolia"})}),". If you are a Docusaurus theme package author who wants to add TypeScript support, see the ",(0,s.jsx)(t.a,{href:"/docs/api/plugin-methods/extend-infrastructure#getTypeScriptThemePath",children:"Lifecycle APIs docs"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(63696);let s={},i=r.createContext(s);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);