"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{6785:function(e,t,r){var n=r(1348),i=r(2539),o=r(8958),a=r(5236),u=["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return C}});var l=r(6234),d=r(9800),f=r(7437),p=d._(r(2265)),g=l._(r(4887)),h=l._(r(8785)),m=r(2278),v=r(6821),y=r(2479);r(9637);var b=r(8117),j=l._(r(9990)),w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function O(e,t,r,n,i,o){var a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){var o=new Event("load");Object.defineProperty(o,"target",{writable:!1,value:e});var a=!1,u=!1;r.current(s(s({},o),{},{nativeEvent:o,currentTarget:e,target:e,isDefaultPrevented:function(){return a},isPropagationStopped:function(){return u},persist:function(){},preventDefault:function(){a=!0,o.preventDefault()},stopPropagation:function(){u=!0,o.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}}))}function P(e){var t=o(p.version.split(".",2),2),r=t[0],n=t[1],i=parseInt(r,10),a=parseInt(n,10);return i>18||18===i&&a>=3?{fetchPriority:e}:{fetchpriority:e}}var S=(0,p.forwardRef)(function(e,t){var r=e.src,n=e.srcSet,o=e.sizes,a=e.height,c=e.width,l=e.decoding,d=e.className,g=e.style,h=e.fetchPriority,m=e.placeholder,v=e.loading,y=e.unoptimized,b=e.fill,j=e.onLoadRef,w=e.onLoadingCompleteRef,S=e.setBlurComplete,_=e.setShowAltText,C=(e.onLoad,e.onError),x=i(e,u);return(0,f.jsx)("img",s(s(s({},x),P(h)),{},{loading:v,width:c,height:a,decoding:l,"data-nimg":b?"fill":"1",className:d,style:g,sizes:o,srcSet:n,src:r,ref:(0,p.useCallback)(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&O(e,m,j,w,S,y))},[r,m,j,w,S,C,y,t]),onLoad:function(e){O(e.currentTarget,m,j,w,S,y)},onError:function(e){_(!0),"empty"!==m&&S(!0),C&&C(e)}}))});function _(e){var t=e.isAppRouter,r=e.imgAttributes,n=s({as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy},P(r.fetchPriority));return t&&g.default.preload?(g.default.preload(r.src,n),null):(0,f.jsx)(h.default,{children:(0,f.jsx)("link",s({rel:"preload",href:r.srcSet?void 0:r.src},n),"__nimg-"+r.src+r.srcSet+r.sizes)})}var C=(0,p.forwardRef)(function(e,t){var r=(0,p.useContext)(b.RouterContext),i=(0,p.useContext)(y.ImageConfigContext),a=(0,p.useMemo)(function(){var e=w||i||v.imageConfigDefault,t=[].concat(n(e.deviceSizes),n(e.imageSizes)).sort(function(e,t){return e-t}),r=e.deviceSizes.sort(function(e,t){return e-t});return s(s({},e),{},{allSizes:t,deviceSizes:r})},[i]),u=e.onLoad,c=e.onLoadingComplete,l=(0,p.useRef)(u);(0,p.useEffect)(function(){l.current=u},[u]);var d=(0,p.useRef)(c);(0,p.useEffect)(function(){d.current=c},[c]);var g=o((0,p.useState)(!1),2),h=g[0],O=g[1],P=o((0,p.useState)(!1),2),C=P[0],x=P[1],z=(0,m.getImgProps)(e,{defaultLoader:j.default,imgConf:a,blurComplete:h,showAltText:C}),E=z.props,M=z.meta;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(S,s(s({},E),{},{unoptimized:M.unoptimized,placeholder:M.placeholder,fill:M.fill,onLoadRef:l,onLoadingCompleteRef:d,setBlurComplete:O,setShowAltText:x,ref:t})),M.priority?(0,f.jsx)(_,{isAppRouter:!r,imgAttributes:E}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6876:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(6234)._(r(2265)).default.createContext({})},3303:function(e,t){function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,i=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==i&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2278:function(e,t,r){r(8958);var n=r(5236),i=r(2539),o=r(1348),a=["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"],u=["config"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return g}}),r(9637);var l=r(3785),d=r(6821);function f(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t){var r,n,c,g,h=e.src,m=e.sizes,v=e.unoptimized,y=void 0!==v&&v,b=e.priority,j=void 0!==b&&b,w=e.loading,O=e.className,P=e.quality,S=e.width,_=e.height,C=e.fill,x=void 0!==C&&C,z=e.style,E=(e.onLoad,e.onLoadingComplete,e.placeholder),M=void 0===E?"empty":E,k=e.blurDataURL,D=e.fetchPriority,R=e.layout,I=e.objectFit,A=e.objectPosition,L=(e.lazyBoundary,e.lazyRoot,i(e,a)),N=t.imgConf,U=t.showAltText,F=t.blurComplete,B=t.defaultLoader,T=N||d.imageConfigDefault;if("allSizes"in T)n=T;else{var q=[].concat(o(T.deviceSizes),o(T.imageSizes)).sort(function(e,t){return e-t}),W=T.deviceSizes.sort(function(e,t){return e-t});n=s(s({},T),{},{allSizes:q,deviceSizes:W})}var G=L.loader||B;delete L.loader,delete L.srcSet;var H="__next_img_default"in G;if(H){if("custom"===n.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{var V=G;G=function(e){return e.config,V(i(e,u))}}if(R){"fill"===R&&(x=!0);var $={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];$&&(z=s(s({},z),$));var J={responsive:"100vw",fill:"100vw"}[R];J&&!m&&(m=J)}var Y="",Q=p(S),K=p(_);if("object"==typeof(r=h)&&(f(r)||void 0!==r.src)){var X=f(h)?h.default:h;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(X));if(!X.height||!X.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(X));if(c=X.blurWidth,g=X.blurHeight,k=k||X.blurDataURL,Y=X.src,!x){if(Q||K){if(Q&&!K){var Z=Q/X.width;K=Math.round(X.height*Z)}else if(!Q&&K){var ee=K/X.height;Q=Math.round(X.width*ee)}}else Q=X.width,K=X.height}}var et=!j&&("lazy"===w||void 0===w);(!(h="string"==typeof h?h:Y)||h.startsWith("data:")||h.startsWith("blob:"))&&(y=!0,et=!1),n.unoptimized&&(y=!0),H&&h.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(y=!0),j&&(D="high");var er=p(P),en=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:A}:{},U?{}:{color:"transparent"},z),ei=F||"empty"===M?null:"blur"===M?'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:Q,heightInt:K,blurWidth:c,blurHeight:g,blurDataURL:k||"",objectFit:en.objectFit})+'")':'url("'+M+'")',eo=ei?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:ei}:{},ea=function(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.width,a=e.quality,u=e.sizes,c=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var s=function(e,t,r){var n=e.deviceSizes,i=e.allSizes;if(r){for(var a,u=/(^|\s)(1?\d?\d)vw/g,c=[];a=u.exec(r);a)c.push(parseInt(a[2]));if(c.length){var s=.01*Math.min.apply(Math,c);return{widths:i.filter(function(e){return e>=n[0]*s}),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return i.find(function(t){return t>=e})||i[i.length-1]}))),kind:"x"}}(t,i,u),l=s.widths,d=s.kind,f=l.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:l.map(function(e,n){return c({config:t,src:r,quality:a,width:e})+" "+("w"===d?e:n+1)+d}).join(", "),src:c({config:t,src:r,quality:a,width:l[f]})}}({config:n,src:h,unoptimized:y,width:Q,quality:er,sizes:m,loader:G});return{props:s(s({},L),{},{loading:et?"lazy":w,fetchPriority:D,width:Q,height:K,decoding:"async",className:O,style:s(s({},en),eo),sizes:ea.sizes,srcSet:ea.srcSet,src:ea.src}),meta:{unoptimized:y,priority:j,placeholder:M,fill:x}}}},8785:function(e,t,r){var n=r(5236);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return p},default:function(){return v}});var o=r(6234),a=r(9800),u=r(7437),c=a._(r(2265)),s=o._(r(8533)),l=r(6876),d=r(2601),f=r(3303);function p(e){void 0===e&&(e=!1);var t=[(0,u.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,u.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function g(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(9637);var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){var r,o,a,u,s=t.inAmpMode;return e.reduce(g,[]).reverse().concat(p(s).reverse()).filter((r=new Set,o=new Set,a=new Set,u={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var i=e.key.slice(e.key.indexOf("$")+1);r.has(i)?t=!1:r.add(i)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var c=0,s=h.length;c<s;c++){var l=h[c];if(e.props.hasOwnProperty(l)){if("charSet"===l)a.has(l)?t=!1:a.add(l);else{var d=e.props[l],f=u[l]||new Set;("name"!==l||!n)&&f.has(d)?t=!1:(f.add(d),u[l]=f)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!s&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,c.default.cloneElement(e,o)}return c.default.cloneElement(e,{key:r})})}var v=function(e){var t=e.children,r=(0,c.useContext)(l.AmpStateContext),n=(0,c.useContext)(d.HeadManagerContext);return(0,u.jsx)(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,f.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3785:function(e,t){function r(e){var t=e.widthInt,r=e.heightInt,n=e.blurWidth,i=e.blurHeight,o=e.blurDataURL,a=e.objectFit,u=n?40*n:t,c=i?40*i:r,s=u&&c?"viewBox='0 0 "+u+" "+c+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2479:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});var n=r(6234)._(r(2265)),i=r(6821),o=n.default.createContext(i.imageConfigDefault)},6821:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});var r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9990:function(e,t){function r(e){var t=e.config,r=e.src,n=e.width,i=e.quality;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;var n=r},8117:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});var n=r(6234)._(r(2265)).default.createContext(null)},8533:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var n=r(2265),i=n.useLayoutEffect,o=n.useEffect;function a(e){var t=e.headManager,r=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return i(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}}),o(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}}}]);