(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9738:function(t,e,n){Promise.resolve().then(n.bind(n,2217)),Promise.resolve().then(n.bind(n,7082)),Promise.resolve().then(n.bind(n,5784)),Promise.resolve().then(n.t.bind(n,1359,23))},2217:function(t,e,n){"use strict";n.r(e),n.d(e,{Logo:function(){return k}});var r=n(5737),i=n(4648),o=n(4387),c=function(t){return"string"==typeof t?t:4*t},a={paddingTop:function(t){var e;return[{paddingTop:"xbobb8a",$$css:!0},{"--paddingTop":"number"==typeof(e=c(t))?e+"px":null!=e?e:"initial"}]},paddingBottom:function(t){var e;return[{paddingBottom:"x9q6w0x",$$css:!0},{"--paddingBottom":"number"==typeof(e=c(t))?e+"px":null!=e?e:"initial"}]},paddingLeft:function(t){var e;return[{paddingLeft:"x1k3zc6d",paddingInlineStart:null,paddingInlineEnd:null,$$css:!0},{"--paddingLeft":"number"==typeof(e=c(t))?e+"px":null!=e?e:"initial"}]},paddingRight:function(t){var e;return[{paddingRight:"x1af1tl5",paddingInlineStart:null,paddingInlineEnd:null,$$css:!0},{"--paddingRight":"number"==typeof(e=c(t))?e+"px":null!=e?e:"initial"}]}},u={marginTop:function(t){var e;return[{marginTop:"x1v67u4u",$$css:!0},{"--marginTop":"number"==typeof(e=c(t))?e+"px":null!=e?e:"initial"}]},marginBottom:function(t){var e;return[{marginBottom:"xld31j7",$$css:!0},{"--marginBottom":"number"==typeof(e=c(t))?e+"px":null!=e?e:"initial"}]},marginLeft:function(t){var e;return[{marginLeft:"xwmvlbq",marginInlineStart:null,marginInlineEnd:null,$$css:!0},{"--marginLeft":"number"==typeof(e=c(t))?e+"px":null!=e?e:"initial"}]},marginRight:function(t){var e;return[{marginRight:"xy982vn",marginInlineStart:null,marginInlineEnd:null,$$css:!0},{"--marginRight":"number"==typeof(e=c(t))?e+"px":null!=e?e:"initial"}]}},l={gap:function(t){var e;return[{gap:"x1m5cjb",rowGap:null,columnGap:null,$$css:!0},{"--gap":"number"==typeof(e=c(t))?e+"px":null!=e?e:"initial"}]}},s=function(t){var e=t.gap,n=t.marginsProps,r=t.paddingsProps,i=[];return e&&i.push(l.gap(e)),n&&(i=[].concat((0,o.Z)(i),[Object.keys(n).map(function(t){var e;return u[t](null!==(e=n[t])&&void 0!==e?e:0)})])),r&&(i=[].concat((0,o.Z)(i),[Object.keys(r).map(function(t){var e;return a[t](null!==(e=r[t])&&void 0!==e?e:0)})])),i},f=n(230),p=n(7437);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var d={flex:{display:"x78zum5",$$css:!0},alignItems:function(t){return[{alignItems:"x1bdtpbn",$$css:!0},{"--alignItems":null!=t?t:"initial"}]},flexDirection:function(t){return[{flexDirection:"xcr92ck",$$css:!0},{"--flexDirection":null!=t?t:"initial"}]},justifyContent:function(t){return[{justifyContent:"x1qa288d",$$css:!0},{"--justifyContent":null!=t?t:"initial"}]}},h=function(t){var e=t.alignItems,n=t.children,r=t.flexDirection,i=t.gap,o=t.justifyContent,c=t.styles;return(0,p.jsx)("div",b(b({},f.ZP.props(s({gap:i}),d.flex,d.alignItems(e),d.flexDirection(r),d.justifyContent(o),c)),{},{children:n}))},m=n(2265),x=n(611),y={dash:{animationName:"x15tgt8z",animationDuration:"x1q3qbx4",animationIterationCount:"xa4qsjk",$$css:!0}},O=function(t){var e=t.delay,n=void 0===e?0:e,r=t.text,i=t.time,c=void 0===i?1200:i,a=t.showDashAfterFinish,u=(0,m.useState)(0),l=u[0],s=u[1],f=(0,m.useRef)(),g=l>1,b=l+1<r.length,d=g&&b,h=(0,m.useMemo)(function(){var t=r.length,e=c/t,i=.2*e,a=Math.floor(e-i),u=Math.ceil(e+i),l=(0,o.Z)(Array(t)).reduce(function(e,r,i){if(0===i&&n)return[].concat((0,o.Z)(e),[0]);var l=e.reduce(function(t,e){return t+e},0),s=Math.max(a,.2*l),f=Math.max(Math.min(c-l,u),s);return[].concat((0,o.Z)(e),[i+1===t?Math.max(0,c-l):Math.floor(Math.random()*(f-s)+s)])},[]);return[l[0]+n].concat((0,o.Z)(l.slice(1)))},[n,r,c]);return(0,m.useEffect)(function(){s(0)},[h]),(0,m.useEffect)(function(){return(h[l]||0===h[l])&&(f.current=setTimeout(function(){s(function(t){return t+1})},h[l])),function(){f.current&&(clearTimeout(f.current),f.current=null)}},[l,h]),(0,p.jsxs)(p.Fragment,{children:[r.slice(0,l),(d||g&&a)&&(0,p.jsx)(x.D,{styles:!d&&y.dash,children:"_"})]})},v=n(2433);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var w={text:{lineHeight:"xo5v014",$$css:!0},textContainer:{height:"xsdox4t",$$css:!0}},$="PRZEMEK",D="RATAJCZAK",k=function(){var t=(0,m.useState)($),e=t[0],n=t[1],r=(0,m.useState)(D),o=r[0],c=r[1];return(0,m.useEffect)(function(){var t=setInterval(function(){n(function(t){return t===$?"SOFTWARE":$}),c(function(t){return t===D?"DEVELOPER":D})},1e4);return function(){clearInterval(t)}},[]),(0,p.jsx)(v.default,P(P({href:"/"},{className:"x1hl2dhg"}),{},{children:(0,p.jsxs)(h,{alignItems:"center",gap:3,children:[(0,p.jsx)(i.default,{src:"/logo.svg",width:54,height:54,alt:"Logo"}),(0,p.jsxs)(h,{flexDirection:"column",styles:w.textContainer,children:[(0,p.jsx)(x.D,{color:"black",fontSize:"large",fontWeight:"semiBold",styles:w.text,children:(0,p.jsx)(O,{text:e})}),(0,p.jsx)(x.D,{color:"black",fontSize:"large",fontWeight:"light",styles:w.text,children:(0,p.jsx)(O,{delay:1200,text:o,showDashAfterFinish:!0})})]})]})}))}},7082:function(t,e,n){"use strict";n.r(e),n.d(e,{NavigationIconLink:function(){return l}});var r=n(5737),i=n(2433),o=n(4648);n(9920);var c=n(7437);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var l=function(t){var e=t.alt,n=t.href,r=t.src;return(0,c.jsx)(i.default,u(u({href:n,target:"_blank"},{className:"x14ju556"}),{},{children:(0,c.jsx)(o.default,u({alt:e,height:32,src:r,width:32},{className:"xxj42n0 x17swi2o x14ju556 x1ws9a6j"}))}))}},5784:function(t,e,n){"use strict";n.r(e),n.d(e,{NavigationLink:function(){return f}});var r=n(5737),i=n(2433),o=n(2652),c=n(611),a=n(9920),u=n(7437);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}a.J.green1;var f=function(t){var e=t.href,n=t.text,r=(0,o.usePathname)();return(0,u.jsx)(i.default,s(s({href:e},{0:{className:"x1hl2dhg x19pm5ym xvqvyku x1m0r69b"},1:{className:"x1hl2dhg x1m0r69b x1qm82lx"}}[!(r!==e)<<0]),{},{children:(0,u.jsx)(c.D,{color:"black",fontWeight:"semiBold",children:n})}))}},611:function(t,e,n){"use strict";n.d(e,{D:function(){return m}});var r=n(5737),i=n(8249),o=n(230),c=n(9920),a={base:"var(--xwgyrio)",medium:"var(--x76al2v)",large:"var(--xrey4cb)",xLarge:"var(--x1tkrb36)",xxLarge:"var(--xv8mag0)",__themeName__:"x1la7q9a"},u={light:"var(--x1qy0b78)",normal:"var(--x8b0671)",medium:"var(--x189d1bp)",semiBold:"var(--xnoxpya)",bold:"var(--x3u2g1l)",__themeName__:"x5zi3uy"},l=n(7437);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var p={color:function(t){return[{color:"x19dipnz",$$css:!0},{"--color":null!=c.J[t]?c.J[t]:"initial"}]},fontSize:function(t){var e;return[{fontSize:"x13jbg0v",$$css:!0},{"--fontSize":"number"==typeof(e=a[t])?e+"px":null!=e?e:"initial"}]},fontWeight:function(t){return[{fontWeight:"x1d8kn6q",$$css:!0},{"--fontWeight":null!=u[t]?u[t]:"initial"}]},lineHeight:function(t){return[{lineHeight:"xatrb82",$$css:!0},{"--lineHeight":null!=t?t:"initial"}]}},g=function(t){var e=t.children,n=t.color,r=t.component,i=t.fontSize,c=t.fontWeight,a=t.lineHeight,u=t.styles;return(0,l.jsx)(void 0===r?"div":r,f(f({},o.ZP.props(n&&p.color(n),i&&p.fontSize(i),c&&p.fontWeight(c),("number"==typeof a||"string"==typeof a)&&p.lineHeight(a),u)),{},{children:e}))},b=["children"];function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var m=function(t){var e=t.children,n=(0,i.Z)(t,b);return(0,l.jsx)(g,h(h({component:"span",lineHeight:1},n),{},{children:e}))}},9920:function(t,e,n){"use strict";n.d(e,{J:function(){return r}});var r={black:"var(--x13yxma5)",green1:"var(--x12yoddp)",green2:"var(--x1tgvrkm)",grey1:"var(--x136nktm)",grey2:"var(--xyvkafo)",grey3:"var(--x1qbptt8)",transparent:"var(--x53l9lu)",white:"var(--xl0wz27)",__themeName__:"xv71pod"}},1359:function(){}},function(t){t.O(0,[785,674,971,678,744],function(){return t(t.s=9738)}),_N_E=t.O()}]);