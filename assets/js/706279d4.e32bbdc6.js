"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86270],{22047:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(62540);t(63696);var s=t(11750),i=t(46222),a=t(36372),l=t(13111),o=t(14652),c=t(81912),d=t(37425);let h={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function u({href:e,children:n}){return(0,r.jsx)(a.A,{href:e,className:(0,s.A)("card padding--lg",h.cardContainer),children:n})}function p({href:e,icon:n,title:t,description:i}){return(0,r.jsxs)(u,{href:e,children:[(0,r.jsxs)(d.A,{as:"h2",className:(0,s.A)("text--truncate",h.cardTitle),title:t,children:[n," ",t]}),i&&(0,r.jsx)("p",{className:(0,s.A)("text--truncate",h.cardDescription),title:i,children:i})]})}function g({item:e}){var n;let t=(0,i.Nr)(e),s=function(){let{selectMessage:e}=(0,l.W)();return n=>e(n,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,r.jsx)(p,{href:t,icon:"\u{1F5C3}\uFE0F",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:s(e.items.length)}):null}function m({item:e}){var n,t;let s=(0,o.A)(e.href)?"\u{1F4C4}\uFE0F":"\u{1F517}",a=(0,i.cC)(null!==(n=e.docId)&&void 0!==n?n:void 0);return(0,r.jsx)(p,{href:e.href,icon:s,title:e.label,description:null!==(t=e.description)&&void 0!==t?t:null==a?void 0:a.description})}function b({item:e}){switch(e.type){case"link":return(0,r.jsx)(m,{item:e});case"category":return(0,r.jsx)(g,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function j({className:e}){let n=(0,i.$S)();return(0,r.jsx)(x,{items:n.items,className:e})}function x(e){let{items:n,className:t}=e;if(!n)return(0,r.jsx)(j,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}({},e));let a=(0,i.d1)(n);return(0,r.jsx)("section",{className:(0,s.A)("row",t),children:a.map((e,n)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(b,{item:e})},n))})}},15995:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(62540);t(63696);var s=t(11750);function i({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)("tabItem_pnkT",t),hidden:n,children:e})}},27446:(e,n,t)=>{t.d(n,{A:()=>f});var r=t(62540),s=t(63696),i=t(11750),a=t(7846),l=t(49519),o=t(96439),c=t(19739),d=t(66904),h=t(79244);function u(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function p({value:e,tabValues:n}){return n.some(n=>n.value===e)}var g=t(10709);function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}function b(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function j({className:e,block:n,selectedValue:t,selectValue:s,tabValues:l}){let o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{let n=e.currentTarget,r=l[o.indexOf(n)].value;r!==t&&(c(n),s(r))},h=e=>{var n,t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;r=null!==(n=o[t])&&void 0!==n?n:o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;r=null!==(t=o[n])&&void 0!==t?t:o[o.length-1]}}null==r||r.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},e),children:l.map(({value:e,label:n,attributes:s})=>(0,r.jsx)("li",b(m({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>o.push(e),onKeyDown:h,onClick:d},s),{className:(0,i.A)("tabs__item","tabItem_AQgk",null==s?void 0:s.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e))})}function x({lazy:e,children:n,selectedValue:t}){let a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=a.find(e=>e.props.value===t);return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function y(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,i=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=null!=n?n:u(t).map(({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r}));return!function(e){let n=(0,d.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[a,g]=(0,s.useState)(()=>(function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=null!==(t=n.find(e=>e.default))&&void 0!==t?t:n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[m,b]=function({queryString:e=!1,groupId:n}){let t=(0,l.W6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c.aZ)(r),(0,s.useCallback)(e=>{var n,s;if(!r)return;let i=new URLSearchParams(t.location.search);i.set(r,e),t.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}({},t.location),s=s={search:i.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(s)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}),n))},[r,t])]}({queryString:t,groupId:r}),[j,x]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[t,r]=(0,h.Dv)(n);return[t,(0,s.useCallback)(e=>{n&&r.set(e)},[n,r])]}({groupId:r}),y=(()=>{let e=null!=m?m:j;return p({value:e,tabValues:i})?e:null})();return(0,o.A)(()=>{y&&g(y)},[y]),{selectedValue:a,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);g(e),b(e),x(e)},[b,x,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.A)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(j,m({},n,e)),(0,r.jsx)(x,m({},n,e))]})}function f(e){let n=(0,g.A)();return(0,r.jsx)(y,b(m({},e),{children:u(e.children)}),String(n))}},13111:(e,n,t)=>{t.d(n,{W:()=>o});var r=t(63696),s=t(99468);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(n=>e.includes(n))}let l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)(()=>{try{return function(e){let n=new Intl.PluralRules(e);return{locale:e,pluralForms:a(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),l}},[e])}();return{selectMessage:(n,t)=>(function(e,n,t){let r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let s=t.select(n);return r[Math.min(t.pluralForms.indexOf(s),r.length-1)]})(t,n,e)}}},70361:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(62540);t(63696);var s=t(11750);let i="dot_giz1",a="bar_rrRL";function l({children:e,minHeight:n,url:t="http://localhost:3000",style:l,bodyStyle:o}){var c,d;return(0,r.jsxs)("div",{className:"browserWindow_my1Q",style:(c=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}({},l),d=d={minHeight:n},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(d)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(d)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(d,e))}),c),children:[(0,r.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,r.jsxs)("div",{className:"buttons_uHc7",children:[(0,r.jsx)("span",{className:i,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:i,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:i,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,s.A)("browserWindowAddressBar_Pd8y","text--truncate"),children:t}),(0,r.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:a}),(0,r.jsx)("span",{className:a}),(0,r.jsx)("span",{className:a})]})})]}),(0,r.jsx)("div",{className:"browserWindowBody_Idgs",style:o,children:e})]})}},74904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>p});let r=JSON.parse('{"id":"guides/docs/sidebar/items","title":"Sidebar items","description":"We have introduced three types of item types in the example in the previous section autogenerated, which we will explain in detail later.","source":"@site/docs/guides/docs/sidebar/items.mdx","sourceDirName":"guides/docs/sidebar","slug":"/sidebar/items","permalink":"/docs/sidebar/items","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/items.mdx","tags":[],"version":"current","lastUpdatedBy":"k-seltzer","lastUpdatedAt":1727303246000,"frontMatter":{"toc_max_heading_level":4,"slug":"/sidebar/items"},"sidebar":"docs","previous":{"title":"Sidebar","permalink":"/docs/sidebar"},"next":{"title":"Autogenerated","permalink":"/docs/sidebar/autogenerated"}}');var s=t(62540),i=t(43023),a=t(27446),l=t(15995),o=t(70361),c=t(22047);let d={toc_max_heading_level:4,slug:"/sidebar/items"},h="Sidebar items",u={},p=[{value:"Doc: link to a doc",id:"sidebar-item-doc",level:2},{value:"Link: link to any page",id:"sidebar-item-link",level:2},{value:"HTML: render custom markup",id:"sidebar-item-html",level:2},{value:"Category: create a hierarchy",id:"sidebar-item-category",level:2},{value:"Category links",id:"category-link",level:3},{value:"Generated index page",id:"generated-index-page",level:4},{value:"Doc link",id:"category-doc-link",level:4},{value:"Embedding generated index in doc page",id:"embedding-generated-index-in-doc-page",level:4},{value:"Collapsible categories",id:"collapsible-categories",level:3},{value:"Expanded categories by default",id:"expanded-categories-by-default",level:3},{value:"Using shorthands",id:"using-shorthands",level:2},{value:"Doc shorthand",id:"doc-shorthand",level:3},{value:"Category shorthand",id:"category-shorthand",level:3}];function g(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sidebar-items",children:"Sidebar items"})}),"\n","\n",(0,s.jsxs)(n.p,{children:["We have introduced three types of item types in the example in the previous section: ",(0,s.jsx)(n.code,{children:"doc"}),", ",(0,s.jsx)(n.code,{children:"category"}),", and ",(0,s.jsx)(n.code,{children:"link"}),", whose usages are fairly intuitive. We will formally introduce their APIs. There's also a fourth type: ",(0,s.jsx)(n.code,{children:"autogenerated"}),", which we will explain in detail later."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#sidebar-item-doc",children:"Doc"})}),": link to a doc page, associating it with the sidebar"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#sidebar-item-link",children:"Link"})}),": link to any internal or external page"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#sidebar-item-category",children:"Category"})}),": creates a dropdown of sidebar items"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"Autogenerated"})}),": generate a sidebar slice automatically"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#sidebar-item-html",children:"HTML"})}),": renders pure HTML in the item's position"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars#sidebar-item-ref",children:"*Ref"})}),": link to a doc page, without making the item take part in navigation generation"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sidebar-item-doc",children:"Doc: link to a doc"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"doc"})," type to link to a doc page and assign that doc to a sidebar:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: 'doc';\n      id: string;\n      label: string; // Sidebar label text\n      className?: string; // Class name for sidebar label\n      customProps?: Record<string, unknown>; // Custom props\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // Normal syntax:\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'doc1', // document ID\n      label: 'Getting started', // sidebar label\n    },\n    // highlight-end\n\n    // Shorthand syntax:\n    // highlight-start\n    'doc2', // document ID\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you use the doc shorthand or ",(0,s.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"autogenerated"})," sidebar, you would lose the ability to customize the sidebar label through item definition. You can, however, use the ",(0,s.jsx)(n.code,{children:"sidebar_label"})," Markdown front matter within that doc, which has higher precedence over the ",(0,s.jsx)(n.code,{children:"label"})," key in the sidebar item. Similarly, you can use ",(0,s.jsx)(n.code,{children:"sidebar_custom_props"})," to declare custom metadata for a doc page."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"doc"})," item sets an ",(0,s.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars#sidebar-association",children:"implicit sidebar association"}),". Don't assign the same doc to multiple sidebars: change the type to ",(0,s.jsx)(n.code,{children:"ref"})," instead."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Sidebar custom props is a useful way to propagate arbitrary doc metadata to the client side, so you can get additional information when using any doc-related hook that fetches a doc object."})}),"\n",(0,s.jsx)(n.h2,{id:"sidebar-item-link",children:"Link: link to any page"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"link"})," type to link to any page (internal or external) that is not a doc."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SidebarItemLink = {\n  type: 'link';\n  label: string;\n  href: string;\n  className?: string;\n  description?: string;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myLinksSidebar: [\n    // highlight-start\n    // External link\n    {\n      type: 'link',\n      label: 'Facebook', // The link label\n      href: 'https://facebook.com', // The external URL\n    },\n    // highlight-end\n\n    // highlight-start\n    // Internal link\n    {\n      type: 'link',\n      label: 'Home', // The link label\n      href: '/', // The internal path\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"sidebar-item-html",children:"HTML: render custom markup"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"html"})," type to render custom HTML within the item's ",(0,s.jsx)(n.code,{children:"<li>"})," tag."]}),"\n",(0,s.jsx)(n.p,{children:"This can be useful for inserting custom items such as dividers, section titles, ads, and images."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SidebarItemHtml = {\n  type: 'html';\n  value: string;\n  defaultStyle?: boolean; // Use default menu item styles\n  className?: string;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myHtmlSidebar: [\n    // highlight-start\n    {\n      type: 'html',\n      value: '<img src=\"sponsor.png\" alt=\"Sponsor\" />', // The HTML to be rendered\n      defaultStyle: true, // Use the default menu item styling\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["The menu item is already wrapped in an ",(0,s.jsx)(n.code,{children:"<li>"})," tag, so if your custom item is simple, such as a title, just supply a string as the value and use the ",(0,s.jsx)(n.code,{children:"className"})," property to style it:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  myHtmlSidebar: [\n    {\n      type: 'html',\n      value: 'Core concepts',\n      className: 'sidebar-title',\n    },\n  ],\n};\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"sidebar-item-category",children:"Category: create a hierarchy"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"category"})," type to create a hierarchy of sidebar items."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SidebarItemCategory = {\n  type: 'category';\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n  className?: string;\n  description?: string;\n\n  // Category options:\n  collapsible: boolean; // Set the category to be collapsible\n  collapsed: boolean; // Set the category to be initially collapsed or open by default\n  link: SidebarItemCategoryLinkDoc | SidebarItemCategoryLinkGeneratedIndex;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      collapsible: true,\n      collapsed: false,\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"#category-shorthand",children:(0,s.jsx)(n.strong,{children:"shorthand syntax"})})," when you don't need customizations:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        Docs: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n      },\n    ],\n  },\n};\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"category-link",children:"Category links"}),"\n",(0,s.jsx)(n.p,{children:"With category links, clicking on a category can navigate you to another page."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Use category links to introduce a category of documents."}),(0,s.jsxs)(n.p,{children:["Autogenerated categories can use the ",(0,s.jsx)(n.a,{href:"/docs/sidebar/autogenerated#category-item-metadata",children:(0,s.jsx)(n.code,{children:"_category_.yml"})})," file to declare the link."]})]}),"\n",(0,s.jsx)(n.h4,{id:"generated-index-page",children:"Generated index page"}),"\n",(0,s.jsxs)(n.p,{children:["You can auto-generate an index page that displays all the direct children of this category. The ",(0,s.jsx)(n.code,{children:"slug"})," allows you to customize the generated page's route, which defaults to ",(0,s.jsx)(n.code,{children:"/category/[categoryName]"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description: 'Learn about the most important Docusaurus concepts!',\n        slug: '/category/docusaurus-guides',\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See it in action on the ",(0,s.jsx)(n.a,{href:"/docs/category/guides",children:"Docusaurus Guides page"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"generated-index"})," links as a quick way to get an introductory document."]})}),"\n",(0,s.jsx)(n.h4,{id:"category-doc-link",children:"Doc link"}),"\n",(0,s.jsx)(n.p,{children:"A category can link to an existing document."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {type: 'doc', id: 'introduction'},\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See it in action on the ",(0,s.jsx)(n.a,{href:"/docs/i18n/introduction",children:"i18n introduction page"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"embedding-generated-index-in-doc-page",children:"Embedding generated index in doc page"}),"\n",(0,s.jsxs)(n.p,{children:["You can embed the generated cards list in a normal doc page as well with the ",(0,s.jsx)(n.code,{children:"DocCardList"})," component. It will display all the sidebar items of the parent category of the current document."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="docs/sidebar/index.md"',children:"import DocCardList from '@theme/DocCardList';\n\n<DocCardList />\n"})}),"\n",(0,s.jsx)(o.A,{children:(0,s.jsx)(c.A,{})}),"\n",(0,s.jsx)(n.h3,{id:"collapsible-categories",children:"Collapsible categories"}),"\n",(0,s.jsxs)(n.p,{children:["We support the option to expand/collapse categories. Categories are collapsible by default, but you can disable collapsing with ",(0,s.jsx)(n.code,{children:"collapsible: false"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          // highlight-next-line\n          collapsible: false,\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To make all categories non-collapsible by default, set the ",(0,s.jsx)(n.code,{children:"sidebarCollapsible"})," option in ",(0,s.jsx)(n.code,{children:"plugin-content-docs"})," to ",(0,s.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsible: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The option in ",(0,s.jsx)(n.code,{children:"sidebars.js"})," takes precedence over plugin configuration, so it is possible to make certain categories collapsible when ",(0,s.jsx)(n.code,{children:"sidebarCollapsible"})," is set to ",(0,s.jsx)(n.code,{children:"false"})," globally."]})}),"\n",(0,s.jsx)(n.h3,{id:"expanded-categories-by-default",children:"Expanded categories by default"}),"\n",(0,s.jsxs)(n.p,{children:["Collapsible categories are collapsed by default. If you want them to be expanded on the first render, you can set ",(0,s.jsx)(n.code,{children:"collapsed"})," to ",(0,s.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        type: 'category',\n        label: 'Docs',\n        // highlight-next-line\n        collapsed: false,\n        items: ['markdown-features', 'sidebar', 'versioning'],\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Similar to ",(0,s.jsx)(n.code,{children:"collapsible"}),", you can also set the global configuration ",(0,s.jsx)(n.code,{children:"options.sidebarCollapsed"})," to ",(0,s.jsx)(n.code,{children:"false"}),". Individual ",(0,s.jsx)(n.code,{children:"collapsed"})," options in ",(0,s.jsx)(n.code,{children:"sidebars.js"})," will still take precedence over this configuration."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsed: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["When a category has ",(0,s.jsx)(n.code,{children:"collapsed: true"})," but ",(0,s.jsx)(n.code,{children:"collapsible: false"})," (either through ",(0,s.jsx)(n.code,{children:"sidebars.js"})," or through plugin configuration), the latter takes precedence and the category is still rendered as expanded."]})}),"\n",(0,s.jsx)(n.h2,{id:"using-shorthands",children:"Using shorthands"}),"\n",(0,s.jsxs)(n.p,{children:["You can express typical sidebar items without much customization more concisely with ",(0,s.jsx)(n.strong,{children:"shorthand syntaxes"}),". There are two parts to this: ",(0,s.jsx)(n.a,{href:"#doc-shorthand",children:(0,s.jsx)(n.strong,{children:"doc shorthand"})})," and ",(0,s.jsx)(n.a,{href:"#category-shorthand",children:(0,s.jsx)(n.strong,{children:"category shorthand"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"doc-shorthand",children:"Doc shorthand"}),"\n",(0,s.jsxs)(n.p,{children:["An item with type ",(0,s.jsx)(n.code,{children:"doc"})," can be simply a string representing its ID:"]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{value:"Longhand",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'myDoc',\n    },\n    // highlight-end\n  ],\n};\n"})})}),(0,s.jsx)(l.A,{value:"Shorthand",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    'myDoc',\n    // highlight-end\n  ],\n};\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"So it's possible to simplify the example above to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        // highlight-next-line\n        'doc1',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        // highlight-start\n        'doc2',\n        'doc3',\n        // highlight-end\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"category-shorthand",children:"Category shorthand"}),"\n",(0,s.jsx)(n.p,{children:"A category item can be represented by an object whose key is its label, and the value is an array of subitems."}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{value:"Longhand",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'category',\n      label: 'Getting started',\n      items: ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"})})}),(0,s.jsx)(l.A,{value:"Shorthand",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"This permits us to simplify that example to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n    },\n    {\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Each shorthand object after this transformation will contain exactly one entry. Now consider the further simplified example below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note how the two consecutive category shorthands are compressed into one object with two entries. This syntax generates a ",(0,s.jsx)(n.strong,{children:"sidebar slice"}),': you shouldn\'t see that object as one bulk item\u2014this object is unwrapped, with each entry becoming a separate item, and they spliced together with the rest of the items (in this case, the "Learn more" link) to form the final sidebar level. Sidebar slices are also important when discussing ',(0,s.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"autogenerated sidebars"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Wherever you have an array of items that is reduced to one category shorthand, you can omit that enclosing array as well."}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{value:"Before",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: [\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: [\n        {\n          'Basic guides': ['doc2', 'doc3'],\n          'Advanced guides': ['doc4', 'doc5'],\n        },\n      ],\n    },\n  ],\n};\n"})})}),(0,s.jsx)(l.A,{value:"After",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  sidebar: {\n    'Getting started': ['doc1'],\n    Docusaurus: {\n      'Basic guides': ['doc2', 'doc3'],\n      'Advanced guides': ['doc4', 'doc5'],\n    },\n  },\n};\n"})})})]})]})}function m(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(63696);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);