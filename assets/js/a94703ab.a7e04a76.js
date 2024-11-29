"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["19914"],{54706:function(e,t,n){n.r(t),n.d(t,{default:()=>em});var a=n("24246"),i=n("27378"),r=n("90496"),o=n("79410"),l=n("2235"),s=n("80225"),d=n("75317"),c=n("80661"),u=n("12451"),m=n("58334");let b={backToTopButton:"backToTopButton_PuQw",backToTopButtonShow:"backToTopButtonShow_YSA3"};function h(){let{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e,[n,a]=(0,i.useState)(!1),r=(0,i.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,u.Ct)();return(0,u.RF)((e,n)=>{let{scrollY:i}=e,o=n?.scrollY;if(!!o)r.current?r.current=!1:i>=o?(l(),a(!1)):i<t?a(!1):i+window.innerHeight<document.documentElement.scrollHeight&&a(!0)}),(0,m.S)(e=>{e.location.hash&&(r.current=!0,a(!1))}),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return(0,a.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}var p=n("74370"),x=n("3620"),f=n("36173"),j=n("70341"),g=n("7180");function _(e){return(0,a.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,a.jsxs)("g",{fill:"#7a7a7a",children:[(0,a.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,a.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}let k="collapseSidebarButton_PUyN",v="collapseSidebarButtonIcon_DI0B";function S(e){let{onClick:t}=e;return(0,a.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",k),onClick:t,children:(0,a.jsx)(_,{className:v})})}var C=n("63160"),I=n("31008");let N=Symbol("EmptyContext"),T=i.createContext(N);function Z(e){let{children:t}=e,[n,r]=(0,i.useState)(null),o=(0,i.useMemo)(()=>({expandedItem:n,setExpandedItem:r}),[n]);return(0,a.jsx)(T.Provider,{value:o,children:t})}var L=n("43766"),y=n("30998"),A=n("64152"),w=n("8903");function B(e){let{collapsed:t,categoryLabel:n,onClick:i}=e;return(0,a.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:i})}function H(e){let{item:t,onItemClick:n,activePath:o,level:d,index:c,...u}=e,{items:m,label:b,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),g=function(e){let t=(0,w.Z)();return(0,i.useMemo)(()=>{if(e.href&&!e.linkUnlisted)return e.href;if(!t&&!!e.collapsible)return(0,s.LM)(e)},[e,t])}(t),_=(0,s._F)(t,o),k=(0,y.Mg)(x,o),{collapsed:v,setCollapsed:S}=(0,L.u)({initialState:()=>!!h&&!_&&t.collapsed}),{expandedItem:C,setExpandedItem:Z}=function(){let e=(0,i.useContext)(T);if(e===N)throw new I.i6("DocSidebarItemsExpandedStateProvider");return e}(),H=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!v;Z(e?null:c),S(e)};return!function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e,r=(0,I.D9)(t);(0,i.useEffect)(()=>{t&&!r&&n&&a(!1)},[t,r,n,a])}({isActive:_,collapsed:v,updateCollapsed:H}),(0,i.useEffect)(()=>{h&&null!=C&&C!==c&&f&&S(!0)},[h,C,c,S,f]),(0,a.jsxs)("li",{className:(0,r.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(d),"menu__list-item",{"menu__list-item--collapsed":v},p),children:[(0,a.jsxs)("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,a.jsx)(A.Z,{className:(0,r.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":_}),onClick:h?e=>{n?.(t),x?H(!1):(e.preventDefault(),H())}:()=>{n?.(t)},"aria-current":k?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!v:void 0,href:h?g??"#":g,...u,children:b}),x&&h&&(0,a.jsx)(B,{collapsed:v,categoryLabel:b,onClick:e=>{e.preventDefault(),H()}})]}),(0,a.jsx)(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:v,children:(0,a.jsx)(V,{items:m,tabIndex:v?-1:0,onItemClick:n,activePath:o,level:d+1})})]})}var E=n("2685"),M=n("56251");let F={menuExternalLink:"menuExternalLink_zaS2"};function P(e){let{item:t,onItemClick:n,activePath:i,level:o,index:d,...c}=e,{href:u,label:m,className:b,autoAddBaseUrl:h}=t,p=(0,s._F)(t,i),x=(0,E.Z)(u);return(0,a.jsx)("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",b),children:(0,a.jsxs)(A.Z,{className:(0,r.Z)("menu__link",!x&&F.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:u,...x&&{onClick:n?()=>n(t):void 0},...c,children:[m,!x&&(0,a.jsx)(M.Z,{})]})},m)}let R={menuHtmlItem:"menuHtmlItem_t1vY"};function W(e){let{item:t,level:n,index:i}=e,{value:o,defaultStyle:s,className:d}=t;return(0,a.jsx)("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(n),s&&[R.menuHtmlItem,"menu__list-item"],d),dangerouslySetInnerHTML:{__html:o}},i)}function D(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,a.jsx)(H,{item:t,...n});case"html":return(0,a.jsx)(W,{item:t,...n});default:return(0,a.jsx)(P,{item:t,...n})}}let V=(0,i.memo)(function(e){let{items:t,...n}=e,i=(0,s.f)(t,n.activePath);return(0,a.jsx)(Z,{children:i.map((e,t)=>(0,a.jsx)(D,{item:e,index:t,...n},t))})}),U={menu:"menu_rWGR",menuWithAnnouncementBar:"menuWithAnnouncementBar_Pf08"};function z(e){let{path:t,sidebar:n,className:o}=e,s=function(){let{isActive:e}=(0,C.n)(),[t,n]=(0,i.useState)(e);return(0,u.RF)(t=>{let{scrollY:a}=t;e&&n(0===a)},[e]),e&&t}();return(0,a.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",U.menu,s&&U.menuWithAnnouncementBar,o),children:(0,a.jsx)("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,a.jsx)(V,{items:n,activePath:t,level:1})})})}function Y(){return(0,a.jsx)("div",{style:{border:"solid thin red",padding:10,textAlign:"center"},children:"Sidebar Ad"})}function K(e){let{pathname:t}=(0,x.TH)(),n=t.includes("/tests/");return(0,a.jsxs)(a.Fragment,{children:[n&&(0,a.jsx)(Y,{}),(0,a.jsx)(z,{...e}),n&&(0,a.jsx)(Y,{})]})}let G={sidebar:"sidebar_vtcw",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_tZ9s",sidebarHidden:"sidebarHidden_PrHU",sidebarLogo:"sidebarLogo_UK0N"},q=i.memo(function(e){let{path:t,sidebar:n,onCollapse:i,isHidden:o}=e,{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:s}}}=(0,j.L)();return(0,a.jsxs)("div",{className:(0,r.Z)(G.sidebar,l&&G.sidebarWithHideableNavbar,o&&G.sidebarHidden),children:[l&&(0,a.jsx)(g.Z,{tabIndex:-1,className:G.sidebarLogo}),(0,a.jsx)(K,{path:t,sidebar:n}),s&&(0,a.jsx)(S,{onClick:i})]})});var O=n("82306"),Q=n("26150");let J=e=>{let{sidebar:t,path:n}=e,i=(0,Q.e)();return(0,a.jsx)("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,a.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&i.toggle(),"link"===e.type&&i.toggle()},level:1})})},X=i.memo(function(e){return(0,a.jsx)(O.Zo,{component:J,props:e})});function $(e){let t=(0,f.i)();return(0,a.jsxs)(a.Fragment,{children:[("desktop"===t||"ssr"===t)&&(0,a.jsx)(q,{...e}),"mobile"===t&&(0,a.jsx)(X,{...e})]})}let ee="expandButton_ockD",et="expandButtonIcon_H1n0";function en(e){let{toggleSidebar:t}=e;return(0,a.jsx)("div",{className:ee,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,a.jsx)(_,{className:et})})}let ea={docSidebarContainer:"docSidebarContainer_S51O",docSidebarContainerHidden:"docSidebarContainerHidden_gbDM",sidebarViewport:"sidebarViewport_K3q9"};function ei(e){let{children:t}=e,n=(0,d.V)();return(0,a.jsx)(i.Fragment,{children:t},n?.name??"noSidebar")}function er(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e,{pathname:s}=(0,x.TH)(),[d,c]=(0,i.useState)(!1),u=(0,i.useCallback)(()=>{d&&c(!1),!d&&(0,p.n)()&&c(!0),o(e=>!e)},[o,d]);return(0,a.jsx)("aside",{className:(0,r.Z)(l.k.docs.docSidebarContainer,ea.docSidebarContainer,n&&ea.docSidebarContainerHidden),onTransitionEnd:e=>{if(!!e.currentTarget.classList.contains(ea.docSidebarContainer))n&&c(!0)},children:(0,a.jsx)(ei,{children:(0,a.jsxs)("div",{className:(0,r.Z)(ea.sidebarViewport,d&&ea.sidebarViewportHidden),children:[(0,a.jsx)($,{sidebar:t,path:s,onCollapse:u,isHidden:d}),d&&(0,a.jsx)(en,{toggleSidebar:u})]})})})}let eo={docMainContainer:"docMainContainer_EfwR",docMainContainerEnhanced:"docMainContainerEnhanced_r8nV",docItemWrapperEnhanced:"docItemWrapperEnhanced_nA1F"};function el(e){let{hiddenSidebarContainer:t,children:n}=e,i=(0,d.V)();return(0,a.jsx)("main",{className:(0,r.Z)(eo.docMainContainer,(t||!i)&&eo.docMainContainerEnhanced),children:(0,a.jsx)("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",eo.docItemWrapper,t&&eo.docItemWrapperEnhanced),children:n})})}let es="docRoot_kBZ6",ed="docsWrapper_lLmf";function ec(e){let{children:t}=e,n=(0,d.V)(),[r,o]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:ed,children:[(0,a.jsx)(h,{}),(0,a.jsxs)("div",{className:es,children:[n&&(0,a.jsx)(er,{sidebar:n.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),(0,a.jsx)(el,{hiddenSidebarContainer:r,children:t})]})]})}var eu=n("11633");function em(e){let t=(0,s.SN)(e);if(!t)return(0,a.jsx)(eu.Z,{});let{docElement:n,sidebarName:i,sidebarItems:c}=t;return(0,a.jsx)(o.FG,{className:(0,r.Z)(l.k.page.docsDocPage),children:(0,a.jsx)(d.b,{name:i,items:c,children:(0,a.jsx)(ec,{children:n})})})}},11633:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(24246);n(27378);var i=n(90496),r=n(80661),o=n(17973);function l(e){let{className:t}=e;return(0,a.jsx)("main",{className:(0,i.Z)("container margin-vert--xl",t),children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,a.jsx)(o.Z,{as:"h1",className:"hero__title",children:(0,a.jsx)(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,a.jsx)("p",{children:(0,a.jsx)(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,a.jsx)("p",{children:(0,a.jsx)(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);