"use strict";(self.webpackChunkchartsgouv=self.webpackChunkchartsgouv||[]).push([[610],{6752:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(5893),s=(a(7294),a(7692)),r=a(3578);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(r.Z,{permalink:a,title:(0,n.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,n.jsx)(r.Z,{permalink:i,title:(0,n.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9393:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(5893),s=(a(7294),a(3895)),r=a(5477);function i({items:e,component:t=r.Z}){return(0,n.jsx)(n.Fragment,{children:e.map((({content:e})=>(0,n.jsx)(s.n,{content:e,children:(0,n.jsx)(t,{children:(0,n.jsx)(e,{})})},e.metadata.permalink)))})}},7444:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(5893),s=(a(7294),a(6010)),r=a(7692),i=a(5211),l=a(3355),o=a(7560),g=a(1596),c=a(1224),u=a(6752),p=a(2417),d=a(9393);function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){h(e,t,a[t])}))}return e}function m(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function f({tag:e}){const t=m(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.d,{title:t}),(0,n.jsx)(p.Z,{tag:"blog_tags_posts"})]})}function j({tag:e,items:t,sidebar:a,listMetadata:s}){const i=m(e);return(0,n.jsxs)(c.Z,{sidebar:a,children:[(0,n.jsxs)("header",{className:"margin-bottom--xl",children:[(0,n.jsx)("h1",{children:i}),(0,n.jsx)(g.Z,{href:e.allTagsPath,children:(0,n.jsx)(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,n.jsx)(d.Z,{items:t}),(0,n.jsx)(u.Z,{metadata:s})]})}function x(e){return(0,n.jsxs)(l.FG,{className:(0,s.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage),children:[(0,n.jsx)(f,b({},e)),(0,n.jsx)(j,b({},e))]})}}}]);