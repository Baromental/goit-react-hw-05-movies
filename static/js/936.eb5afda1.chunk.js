"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{13:function(e,t,r){r.d(t,{r:function(){return c}});var n=r(861),a=r(439),u=r(757),i=r.n(u),s=r(791),c=function(e,t){var r=(0,s.useState)(null),u=(0,a.Z)(r,2),c=u[0],o=u[1],f=(0,s.useState)(null),p=(0,a.Z)(f,2),v=p[0],l=p[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e(t);case 3:n=r.sent,o(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),l(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e,t]),[c,o,v]}},936:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(439),a=(r(791),r(689)),u=r(87),i=r(390),s=r(13),c={moviesPageTitle:"Home_moviesPageTitle__Iyvtt",moviesLink:"Home_moviesLink__4wK6j"},o=r(184),f=function(){var e=(0,s.r)(i.wr),t=(0,n.Z)(e,1)[0],r=(0,a.TH)();return(0,o.jsxs)("section",{children:[(0,o.jsx)("h1",{className:c.moviesPageTitle,children:"Trending today"}),(0,o.jsx)("ul",{className:c.moviesList,children:null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)("li",{className:c.moviesItem,children:(0,o.jsx)(u.rU,{state:{from:r},to:"movies/".concat(e.id.toString()),className:c.moviesLink,children:e.title||e.name})},e.id)}))})]})}},390:function(e,t,r){r.d(t,{Hx:function(){return v},LI:function(){return l},Y5:function(){return f},wr:function(){return o},xc:function(){return p}});var n=r(413),a=r(861),u=r(757),i=r.n(u),s=r(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTM1M2YyYWMwYWI3ZDk4YThlN2E5Y2RjMzVhMjk0YSIsInN1YiI6IjY1ZGY2Y2Q3YTliOWE0MDE0YThlMjI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uN2kueWrb_iU8a5pq2oQ8enPNjekCz6SDXHHaVkpRKI"}},o=function(){var e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day",c);case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t),c);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits"),c);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews"),c);case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(i().mark((function e(t){var r,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,e.next=3,s.Z.get("search/movie",(0,n.Z)((0,n.Z)({},c),{},{params:(0,n.Z)((0,n.Z)({},c.params),{},{query:r})}));case 3:return a=e.sent,u=a.data,e.abrupt("return",u.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.eb5afda1.chunk.js.map