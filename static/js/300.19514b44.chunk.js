"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[300],{13:function(t,r,e){e.d(r,{r:function(){return i}});var n=e(861),a=e(439),u=e(757),c=e.n(u),s=e(791),i=function(t,r){var e=(0,s.useState)(null),u=(0,a.Z)(e,2),i=u[0],o=u[1],p=(0,s.useState)(null),f=(0,a.Z)(p,2),h=f[0],l=f[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(r);case 3:n=e.sent,o(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t,r]),[i,o,h]}},300:function(t,r,e){e.r(r),e.d(r,{default:function(){return o}});var n=e(439),a=(e(791),e(689)),u=e(390),c=e(13),s={castList:"Cast_castList__H+DTm"},i=e(184),o=function(){var t=(0,a.UO)().movieId,r=(0,c.r)(u.xc,t),e=(0,n.Z)(r,1)[0];return e?(0,i.jsx)("ul",{className:s.castList,children:e.cast.map((function(t){var r=t.id,e=t.name,n=t.profile_path,a=t.character;return(0,i.jsxs)("li",{className:s.castItem,children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n),width:"250",alt:e,className:s.castImg}),(0,i.jsx)("p",{children:e}),(0,i.jsxs)("p",{children:["Character: ",a]})]},r)}))}):(0,i.jsx)("h1",{children:"Loading..."})}},390:function(t,r,e){e.d(r,{Hx:function(){return h},LI:function(){return l},Y5:function(){return p},wr:function(){return o},xc:function(){return f}});var n=e(413),a=e(861),u=e(757),c=e.n(u),s=e(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTM1M2YyYWMwYWI3ZDk4YThlN2E5Y2RjMzVhMjk0YSIsInN1YiI6IjY1ZGY2Y2Q3YTliOWE0MDE0YThlMjI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uN2kueWrb_iU8a5pq2oQ8enPNjekCz6SDXHHaVkpRKI"}},o=function(){var t=(0,a.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/movie/day",i);case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(r),i);case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(r,"/credits"),i);case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(r,"/reviews"),i);case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)(c().mark((function t(r){var e,a,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.query,t.next=3,s.Z.get("search/movie",(0,n.Z)((0,n.Z)({},i),{},{params:(0,n.Z)((0,n.Z)({},i.params),{},{query:e})}));case 3:return a=t.sent,u=a.data,t.abrupt("return",u.results);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=300.19514b44.chunk.js.map