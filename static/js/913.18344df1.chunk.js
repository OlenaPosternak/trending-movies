"use strict";(self.webpackChunktrending_movies=self.webpackChunktrending_movies||[]).push([[913],{9546:function(n,t,e){e.d(t,{Tg:function(){return u},W0:function(){return h},ad:function(){return p},pI:function(){return v},vq:function(){return l}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1044),o="457f80f59e5c5ed289022502f172a9f5";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("trending/movie/day?api_key=".concat(o));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}i.ZP.defaults.baseURL="https://api.themoviedb.org/3"},9913:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,c,i,o,u,s=e(5861),p=e(885),d=e(4687),l=e.n(d),f=e(9546),h=e(2791),g=e(7689),v=e(168),x=e(7402),w=e(6731),y=x.Z.ul(r||(r=(0,v.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 0;\n  justify-content: center;\n"]))),m=x.Z.li(a||(a=(0,v.Z)(["\n  width: 350px;\n  text-align: center;\n  list-style: none;\n  border: 1px solid #212121;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  :hover,\n  :focus {\n    background-color: teal;\n    color: white;\n    border-radius: 4px;\n  }\n"]))),Z=(0,x.Z)(w.rU)(c||(c=(0,v.Z)(["\n  text-decoration: none;\n  font-size: 24px;\n  display: inline-block;\n  color: black;\n  padding: 5px;\n  margin: 0;\n  padding: 0;\n\n\n"]))),b=x.Z.img(i||(i=(0,v.Z)(["\n  width: 350px;\n  height: 525px;\n  display: block;\n  max-width: 100%;\n"]))),k=e(184),_=function(n){var t=n.trendingMovies,e=n.state;return(0,k.jsx)(y,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,k.jsx)(m,{children:(0,k.jsxs)(Z,{to:"movies/".concat(t),state:e,children:[(0,k.jsx)(b,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"".concat("https://cdn.pixabay.com/photo/2021/12/29/17/34/girl-6902365_1280.png"),alt:r,width:"200"}),(0,k.jsx)("p",{children:r})]})},t)}))})},j=x.Z.div(o||(o=(0,v.Z)(["\n  padding: 20px;\n"]))),E=x.Z.h1(u||(u=(0,v.Z)(["\ntext-align:center;"]))),P=function(){var n=(0,h.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,g.TH)();return(0,h.useEffect)((function(){function n(){return(n=(0,s.Z)(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{(0,f.Tg)().then((function(n){return r(n.results)}))}catch(t){console.log(t)}case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,k.jsxs)(j,{children:[(0,k.jsx)(E,{children:"Trending Today"}),(0,k.jsx)(_,{trendingMovies:e,state:{from:a}})]})}}}]);
//# sourceMappingURL=913.18344df1.chunk.js.map