"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[595],{13:function(e,n,t){t.d(n,{r:function(){return u}});var r=t(861),s=t(439),a=t(757),i=t.n(a),c=t(791),u=function(e,n){var t=(0,c.useState)(null),a=(0,s.Z)(t,2),u=a[0],o=a[1],l=(0,c.useState)(null),p=(0,s.Z)(l,2),h=p[0],v=p[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(n);case 3:r=t.sent,o(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),v(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e,n]),[u,o,h]}},595:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(439),s=t(791),a=t(689),i=t(87),c=t(390),u=t(13),o={moviesDetails:"MoviesDetails_moviesDetails__rOWgt",btnGoBack:"MoviesDetails_btnGoBack__WB2gv",listLinks:"MoviesDetails_listLinks__jnS51",itemLink:"MoviesDetails_itemLink__vSA8J"},l=t(184),p=function(){var e,n=(0,a.UO)().movieId,t=(0,u.r)(c.Y5,n),p=(0,r.Z)(t,1)[0],h=(0,a.TH)(),v=(0,s.useRef)((null===(e=h.state)||void 0===e?void 0:e.from)||"/");return p?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("section",{className:o.moviesDetails,children:[(0,l.jsx)(i.rU,{to:v.current,className:o.btnGoBack,children:"Go back"}),(0,l.jsxs)("div",{className:o.wrapper,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(p.poster_path),alt:p.title||p.name,width:"300"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:p.title||p.name}),(0,l.jsxs)("p",{children:["User score: ",p.vote_average," "]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:p.overview}),(0,l.jsx)("h4",{children:"Genres"}),(0,l.jsx)("p",{children:p.genres.map((function(e){return"".concat(e.name," ")}))})]})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("nav",{children:(0,l.jsxs)("ul",{className:o.listLinks,children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.OL,{to:"cast",className:o.itemLink,children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.OL,{to:"reviews",className:o.itemLink,children:"Reviews"})})]})}),(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)("h2",{children:"Loading..."}),children:(0,l.jsx)(a.j3,{})})]})]}):(0,l.jsx)("h2",{children:"Loading..."})}},390:function(e,n,t){t.d(n,{Hx:function(){return h},LI:function(){return v},Y5:function(){return l},wr:function(){return o},xc:function(){return p}});var r=t(413),s=t(861),a=t(757),i=t.n(a),c=t(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTM1M2YyYWMwYWI3ZDk4YThlN2E5Y2RjMzVhMjk0YSIsInN1YiI6IjY1ZGY2Y2Q3YTliOWE0MDE0YThlMjI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uN2kueWrb_iU8a5pq2oQ8enPNjekCz6SDXHHaVkpRKI"}},o=function(){var e=(0,s.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day",u);case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,s.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n),u);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,s.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits"),u);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,s.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews"),u);case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,s.Z)(i().mark((function e(n){var t,s,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,e.next=3,c.Z.get("search/movie",(0,r.Z)((0,r.Z)({},u),{},{params:(0,r.Z)((0,r.Z)({},u.params),{},{query:t})}));case 3:return s=e.sent,a=s.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=595.fd3e0f78.chunk.js.map