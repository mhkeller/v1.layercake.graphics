(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{196:function(e,t,a){"use strict";a.r(t);var c=a(0),o=a(10),n=a.n(o),s=a(3),r=a(188);var i={async download(){this.set({downloading:!0});const{main:e,htmlExtras:t,imports:a,components:c,modules:o,componentModules:n,slug:s}=this.get(),i=await(await window.fetch("/svelte-app.json")).json(),l=await(await window.fetch("/deps.json")).json();if(a.length>0){const e=i.findIndex(({path:e})=>"package.json"===e),t=JSON.parse(i[e].data),c={};a.forEach(e=>{c[e]="layercake"===e?"github:mhkeller/layercake":l[e],c[e]||window.alert(`Missing dependency, add "${e}" to layercake.graphic's package.json`)}),t.dependencies=c,i[e].data=JSON.stringify(t,null,"  ")}if(i.push(...c.map(e=>({path:`src/${e.title.replace("./","")}`,data:e.contents}))),i.push(...o.map(e=>({path:`src/${e.title.replace("./","")}`,data:e.contents}))),i.push(...n.map(e=>({path:`src/${e.title.replace("../","")}`,data:e.contents}))),i.push({path:"src/main.js",data:e.contents}),t)for(let e=0;e<i.length;e++)"public/index.html"===i[e].path&&(i[e].data=i[e].data.replace("<body>",`<body>\n${t}`));((e,t)=>{const a=URL.createObjectURL(e),c=document.createElement("a");c.href=a,c.download=t,c.style.display="none",document.body.appendChild(c),c.click(),URL.revokeObjectURL(a),c.remove()})(Object(r.a)(i.filter(Boolean)),`layercake-${s}.zip`),this.set({downloading:!1})}};function l(e){if(Object(c.v)(this,e),this._state=Object(c.e)({downloading:!1},e.data),this._recompute({main:1,components:1},this._state),this._intro=!0,document.getElementById("svelte-1m5nccx-style")||function(){var e=Object(c.m)("style");e.id="svelte-1m5nccx-style",e.textContent="button.svelte-1m5nccx{font-weight:200;font-family:Helvetica, sans-serif;outline:0;padding:0;border:none;float:right;cursor:pointer;transform:translateY(-6px)}.icon.svelte-1m5nccx{color:transparent;font-size:16px;height:2em;background:transparent no-repeat 100% 0px;background-size:1.6em 1.6em;opacity:.6}.icon.svelte-1m5nccx:before{content:'Download';color:#000;display:inline-block;transform:translate(100%, 0)}.icon.svelte-1m5nccx:hover{opacity:1}.icon.svelte-1m5nccx:disabled{filter:grayscale(1);opacity:0.4;cursor:default}.icon.svelte-1m5nccx:disabled:before{content:'Please wait...';transform:translate(75%, 0)}@keyframes svelte-1m5nccx-zoom-in{0%{transform:scale(0);opacity:0 }100%{transform:scale(1);opacity:1}}@keyframes svelte-1m5nccx-fade-in{0%{opacity:0 }100%{opacity:0.6 }}",Object(c.d)(e,document.head)}(),this._fragment=function(e,t){var a,o;function n(t){e.download()}return{c(){a=Object(c.m)("button"),o=Object(c.o)("Download      "),this.h()},l(e){a=Object(c.j)(e,"BUTTON",{disabled:!0,title:!0,class:!0,style:!0},!1);var t=Object(c.i)(a);o=Object(c.k)(t,"Download      "),t.forEach(c.r),this.h()},h(){Object(c.c)(a,"click",n),a.disabled=t.downloading,a.title="download zip file",a.className="icon svelte-1m5nccx",Object(c.G)(a,"background-image","url(icons/download.svg)")},m(e,t){Object(c.w)(a,e,t),Object(c.d)(o,a)},p(e,t){e.downloading&&(a.disabled=t.downloading)},d(e){e&&Object(c.r)(a),Object(c.B)(a,"click",n)}}}(this,this._state),e.target){var t=Object(c.i)(e.target);e.hydrate?this._fragment.l(t):this._fragment.c(),t.forEach(c.r),this._mount(e.target,e.anchor)}}Object(c.e)(l.prototype,c.z),Object(c.e)(l.prototype,i),l.prototype._recompute=function(e,t){(e.main||e.components)&&this._differs(t.imports,t.imports=function({main:e,components:t}){return[e,...t].reduce((e,t)=>e.concat(function(e=""){return(e.match(/from\s'(.+)'?/gm)||[]).map(e=>e.replace(/(from |'|"|;)/g,"")).filter(e=>!e.startsWith("."))}(t.contents)),[]).reduce((e,t)=>e.includes(t)?e:(e.push(t),e),[])}(t))&&(e.imports=!0)};var p=l;const d=new Map;function b(e){const t=e.split("/");return t[t.length-1].split(".")[0].toLowerCase()}function m(e,t){return n.a.highlight(t.indexOf(".js")>-1?"js":"html",e).value}s.a.forEach(e=>{d.set(e.slug,e)});var h={copyToClipboard(){const{pages:e,active:t}=this.get(),a=e.filter(e=>b(e.title)===t)[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",a);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var c=document.createElement("textarea");c.textContent=a,c.style.position="fixed",document.body.appendChild(c),c.select();try{return document.execCommand("copy")}catch(e){return console.warn("Copy to clipboard failed.",e),!1}finally{document.body.removeChild(c)}}}};function j(e,t){var a,o,n=t.data.dek;return{c(){a=Object(c.m)("div"),o=Object(c.o)(n),this.h()},l(e){a=Object(c.j)(e,"DIV",{class:!0},!1);var t=Object(c.i)(a);o=Object(c.k)(t,n),t.forEach(c.r),this.h()},h(){a.className="dek svelte-bs7z8p"},m(e,t){Object(c.w)(a,e,t),Object(c.d)(o,a)},p(e,t){e.data&&n!==(n=t.data.dek)&&Object(c.F)(o,n)},d(e){e&&Object(c.r)(a)}}}function f(e,t){var a,o,n,s=t.page.title;return{c(){a=Object(c.m)("li"),o=Object(c.o)(s),this.h()},l(e){a=Object(c.j)(e,"LI",{class:!0},!1);var t=Object(c.i)(a);o=Object(c.k)(t,s),t.forEach(c.r),this.h()},h(){a._svelte={component:e,ctx:t},Object(c.c)(a,"click",v),a.className=n="tab "+(t.active===b(t.page.title)?"active":"")+" svelte-bs7z8p"},m(e,t){Object(c.w)(a,e,t),Object(c.d)(o,a)},p(e,t){e.pages&&s!==(s=t.page.title)&&Object(c.F)(o,s),a._svelte.ctx=t,(e.active||e.pages)&&n!==(n="tab "+(t.active===b(t.page.title)?"active":"")+" svelte-bs7z8p")&&(a.className=n)},d(e){e&&Object(c.r)(a),Object(c.B)(a,"click",v)}}}function g(e,t){var a,o,n=m(t.page.contents,t.page.title);return{c(){a=Object(c.m)("div"),o=Object(c.m)("pre"),this.h()},l(e){a=Object(c.j)(e,"DIV",{class:!0,style:!0},!1);var t=Object(c.i)(a);o=Object(c.j)(t,"PRE",{class:!0},!1),Object(c.i)(o).forEach(c.r),t.forEach(c.r),this.h()},h(){o.className="svelte-bs7z8p",a.className="contents",Object(c.G)(a,"display",t.active===b(t.page.title)?"block":"none")},m(e,t){Object(c.w)(a,e,t),Object(c.d)(o,a),o.innerHTML=n},p(e,t){e.pages&&n!==(n=m(t.page.contents,t.page.title))&&(o.innerHTML=n),(e.active||e.pages)&&Object(c.G)(a,"display",t.active===b(t.page.title)?"block":"none")},d(e){e&&Object(c.r)(a)}}}function u(e,t,a){const c=Object.create(e);return c.page=t[a],c.each_value=t,c.page_index=a,c}function v(e){const{component:t,ctx:a}=this._svelte;t.set({active:b(a.page.title)})}function O(e,t,a){const c=Object.create(e);return c.page=t[a],c.each_value_1=t,c.page_index_1=a,c}function y(e){if(Object(c.v)(this,e),this.refs={},this._state=Object(c.e)({active:"main"},e.data),this._recompute({params:1,data:1},this._state),this._intro=!0,document.getElementById("svelte-bs7z8p-style")||function(){var e=Object(c.m)("style");e.id="svelte-bs7z8p-style",e.textContent=".main.svelte-bs7z8p{position:relative;max-width:54em;background-color:white;padding:1.5em 2em 2em 2em;margin:0 auto;box-sizing:border-box}.chart-hero.svelte-bs7z8p{width:100%;height:200px;margin:1.5em 0 2em 0;position:relative}#pages.svelte-bs7z8p{margin-top:50px}#pages.has-dek.svelte-bs7z8p{margin-top:35px}.dek.svelte-bs7z8p{width:calc(100% - 80px)}#contents-container.svelte-bs7z8p{position:relative;border-left:3px solid #ccc;margin-top:7px}pre.svelte-bs7z8p{margin-top:7px 0 0 0;padding-left:14px;overflow-x:auto}#page-nav.svelte-bs7z8p{margin:0;padding:0}.tab.svelte-bs7z8p{display:inline-block;vertical-align:top;margin-right:14px;margin-bottom:8px;border-bottom:2px solid transparent;color:#ccc}.svelte-ref-copy.svelte-bs7z8p{position:absolute;top:0;right:0;width:20px;height:35px;opacity:0.25;background-image:url(copy.svg);background-repeat:no-repeat;background-size:contain;cursor:pointer}.svelte-ref-copy.svelte-bs7z8p:hover{opacity:1}.svelte-ref-copy.svelte-bs7z8p:active{opacity:0.7}.svelte-ref-copy.svelte-bs7z8p:hover:before{display:block}.svelte-ref-copy.svelte-bs7z8p:before{content:'Copy to clipboard';position:absolute;top:-7px;right:0;background-color:#000;border-radius:2px;color:#fff;display:none;font-size:13px;padding:3px 5px;white-space:nowrap;transform:translate(0%, -100%)}@media(max-width: 750px){.svelte-ref-copy.svelte-bs7z8p{transform:translate(0, -80%)}}@media(max-width: 475px){#pages.svelte-bs7z8p{margin-top:21px}.tab.svelte-bs7z8p{margin-top:8px;margin-bottom:0}.download.svelte-bs7z8p{display:none}.dek.svelte-bs7z8p{width:100%}}.tab.svelte-bs7z8p:hover{border-bottom:2px solid #aaa;cursor:pointer}.tab.active{color:#000;pointer-events:none;border-bottom:2px solid #000}",Object(c.d)(e,document.head)}(),e.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(e,t){var a,o,n,s,r,i,l,d,b,m,h,v,y,w,x,k,_,z,E,N=t.example.title;document.title=a="Layer Cake - "+t.example.title;var C=t.example.component;function D(t){return{root:e.root,store:e.store}}if(C)var I=new C(D());for(var L=[t.data,{slug:t.params.slug}],V={},$=0;$<L.length;$+=1)V=Object(c.e)(V,L[$]);var B=new p({root:e.root,store:e.store,data:V}),T=t.data.dek&&j(0,t),M=t.pages,U=[];for($=0;$<M.length;$+=1)U[$]=f(e,u(t,M,$));function R(t){e.copyToClipboard()}var H=t.pages,J=[];for($=0;$<H.length;$+=1)J[$]=g(0,O(t,H,$));return{c(){o=Object(c.m)("link"),n=Object(c.o)("\n\n"),s=Object(c.m)("div"),r=Object(c.m)("h1"),i=Object(c.o)(N),l=Object(c.o)("\n\n\t"),d=Object(c.m)("div"),I&&I._fragment.c(),b=Object(c.o)("\n\n\t"),m=Object(c.m)("div"),B._fragment.c(),h=Object(c.o)("\n\n\t"),T&&T.c(),v=Object(c.o)("\n\n\t"),y=Object(c.m)("div"),w=Object(c.m)("ul");for(var e=0;e<U.length;e+=1)U[e].c();for(x=Object(c.o)("\n\t\t"),k=Object(c.m)("div"),_=Object(c.m)("div"),z=Object(c.o)("\n\t\t\t"),e=0;e<J.length;e+=1)J[e].c();this.h()},l(e){o=Object(c.m)("link"),n=Object(c.k)(e,"\n\n"),s=Object(c.j)(e,"DIV",{class:!0},!1);var t=Object(c.i)(s);r=Object(c.j)(t,"H1",{},!1);var a=Object(c.i)(r);i=Object(c.k)(a,N),a.forEach(c.r),l=Object(c.k)(t,"\n\n\t"),d=Object(c.j)(t,"DIV",{class:!0},!1);var p=Object(c.i)(d);I&&I._fragment.l(p),p.forEach(c.r),b=Object(c.k)(t,"\n\n\t"),m=Object(c.j)(t,"DIV",{class:!0},!1);var j=Object(c.i)(m);B._fragment.l(j),j.forEach(c.r),h=Object(c.k)(t,"\n\n\t"),T&&T.l(t),v=Object(c.k)(t,"\n\n\t"),y=Object(c.j)(t,"DIV",{id:!0,class:!0},!1);var f=Object(c.i)(y);w=Object(c.j)(f,"UL",{id:!0,class:!0},!1);for(var g=Object(c.i)(w),u=0;u<U.length;u+=1)U[u].l(g);g.forEach(c.r),x=Object(c.k)(f,"\n\t\t"),k=Object(c.j)(f,"DIV",{id:!0,class:!0},!1);var O=Object(c.i)(k);for(_=Object(c.j)(O,"DIV",{class:!0},!1),Object(c.i)(_).forEach(c.r),z=Object(c.k)(O,"\n\t\t\t"),u=0;u<J.length;u+=1)J[u].l(O);O.forEach(c.r),f.forEach(c.r),t.forEach(c.r),this.h()},h(){o.rel="stylesheet",o.href="hljs.css",d.className="chart-hero svelte-bs7z8p",m.className="download svelte-bs7z8p",w.id="page-nav",w.className="svelte-bs7z8p",Object(c.c)(_,"click",R),_.className="svelte-bs7z8p svelte-ref-copy",k.id="contents-container",k.className="svelte-bs7z8p",y.id="pages",y.className=E=(t.data.dek?"has-dek":"")+" svelte-bs7z8p",s.className="main svelte-bs7z8p"},m(t,a){Object(c.d)(o,document.head),Object(c.w)(n,t,a),Object(c.w)(s,t,a),Object(c.d)(r,s),Object(c.d)(i,r),Object(c.d)(l,s),Object(c.d)(d,s),I&&I._mount(d,null),Object(c.d)(b,s),Object(c.d)(m,s),B._mount(m,null),Object(c.d)(h,s),T&&T.m(s,null),Object(c.d)(v,s),Object(c.d)(y,s),Object(c.d)(w,y);for(var p=0;p<U.length;p+=1)U[p].m(w,null);for(Object(c.d)(x,y),Object(c.d)(k,y),Object(c.d)(_,k),e.refs.copy=_,Object(c.d)(z,k),p=0;p<J.length;p+=1)J[p].m(k,null)},p(t,o){t.example&&a!==(a="Layer Cake - "+o.example.title)&&(document.title=a),t.example&&N!==(N=o.example.title)&&Object(c.F)(i,N),C!==(C=o.example.component)&&(I&&I.destroy(),C?((I=new C(D()))._fragment.c(),I._mount(d,null)):I=null);var n=t.data||t.params?Object(c.u)(L,[t.data&&o.data,t.params&&{slug:o.params.slug}]):{};if(B._set(n),o.data.dek?T?T.p(t,o):((T=j(0,o)).c(),T.m(s,v)):T&&(T.d(1),T=null),t.active||t.pages){M=o.pages;for(var r=0;r<M.length;r+=1){const a=u(o,M,r);U[r]?U[r].p(t,a):(U[r]=f(e,a),U[r].c(),U[r].m(w,null))}for(;r<U.length;r+=1)U[r].d(1);U.length=M.length}if(t.active||t.pages){for(H=o.pages,r=0;r<H.length;r+=1){const e=O(o,H,r);J[r]?J[r].p(t,e):(J[r]=g(0,e),J[r].c(),J[r].m(k,null))}for(;r<J.length;r+=1)J[r].d(1);J.length=H.length}t.data&&E!==(E=(o.data.dek?"has-dek":"")+" svelte-bs7z8p")&&(y.className=E)},d(t){Object(c.r)(o),t&&(Object(c.r)(n),Object(c.r)(s)),I&&I.destroy(),B.destroy(),T&&T.d(),Object(c.p)(U,t),Object(c.B)(_,"click",R),e.refs.copy===_&&(e.refs.copy=null),Object(c.p)(J,t)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){window.location.hash&&this.set({active:window.location.hash.replace("#","")}),window.onhashchange=(()=>{this.set({active:window.location.hash.replace("#","")})}),this.on("state",({changed:e,current:t})=>{if(!0===e.active){const e=`#${b(t.active)}`;window.location.hash=e}})}).call(this),this.fire("update",{changed:Object(c.f)({},this._state),current:this._state})}),e.target){var t=Object(c.i)(e.target);e.hydrate?this._fragment.l(t):this._fragment.c(),t.forEach(c.r),this._mount(e.target,e.anchor),this._lock=!0,Object(c.h)(this._beforecreate),Object(c.h)(this._oncreate),Object(c.h)(this._aftercreate),this._lock=!1}}Object(c.e)(y.prototype,c.z),Object(c.e)(y.prototype,h),y.prototype._recompute=function(e,t){e.params&&this._differs(t.example,t.example=function({params:e}){return d.get(e.slug)}(t))&&(e.example=!0),e.data&&this._differs(t.pages,t.pages=function({data:e}){return[e.main].concat(e.components).concat(e.modules).concat(e.componentModules)}(t))&&(e.pages=!0)},y.preload=async function({params:e,query:t}){const a=await this.fetch(`examples/${e.slug}.json`),c=await a.json();if(200===a.status)return{data:c};this.error(a.status,c.message)};t.default=y}}]);