(this.webpackJsonpcovidash=this.webpackJsonpcovidash||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(5),o=n.n(r),i=(n(15),n(2)),h=n.n(i),u=n(4),l=n(6),d=n(7),j=n(9),p=n(8),f=(n(17),n(18),function(e){var t=e.stats;return Object(a.jsxs)("div",{className:"country",children:[Object(a.jsx)("img",{src:"https://www.countryflags.io/".concat(t.countryCode,"/flat/64.png"),alt:"Flag of ".concat(t.name)}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsxs)("div",{className:"cases",children:[Object(a.jsx)("p",{children:"Confirmed :  ".concat(t.total)}),Object(a.jsx)("p",{children:"Active :  ".concat(t.actives)}),Object(a.jsx)("p",{children:"Deaths :  ".concat(t.deceased)}),Object(a.jsx)("p",{children:"Recovered :  ".concat(t.healthy)})]})]})}),b=(n(19),function(e){var t=e.stats;return Object(a.jsx)("div",{className:"showCountry",children:t.map((function(e){return Object(a.jsx)(f,{stats:e},e.countryCode)}))})}),v=(n(20),function(e){var t=e.placeholder,n=e.handleChange;return Object(a.jsx)("div",{className:"search-box",children:Object(a.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})})}),x=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){return e.setState({searchField:t.target.value})},e.state={stats:[],countries:[],searchField:""},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(h.a.mark((function e(){var t,n,a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19-api.org/api/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({countries:n}),this.state.countries.forEach(function(){var e=Object(u.a)(h.a.mark((function e(t){var n,c,s,r,o,i,u,l,d,j;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19-api.org/api/status/".concat(t.alpha2));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,s=parseInt(c.cases),r=parseInt(c.recovered),o=parseInt(c.deaths),i=s-(r+o),u=c.country,e.next=13,fetch("https://covid19-api.org/api/country/".concat(t.alpha2));case 13:return l=e.sent,e.next=16,l.json();case 16:d=e.sent,j=d.name,c&&a.setState((function(e){return{stats:e.stats.concat({name:j,countryCode:u,total:s,healthy:r,deceased:o,actives:i})}}));case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.searchField,n=e.stats.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{className:"dashboard text-center",children:"Covid 2019 Dashboard"}),Object(a.jsxs)("p",{className:"text-beige text-center",children:["This dashboard is powered by data from"," ",Object(a.jsx)("a",{href:"https://covid19-api.org/",target:"_blank",children:"Covid19 API.org"})," ","and flags from"," ",Object(a.jsx)("a",{href:"https://www.countryflags.io",target:"_blank",children:"Country Flags.io"})]}),Object(a.jsx)(v,{placeholder:"Search by country name..",handleChange:this.handleChange,className:"search-box"}),Object(a.jsx)(b,{stats:n}),Object(a.jsx)("div",{className:"allproject text-center",children:Object(a.jsx)("a",{href:"https://tioye.dev/dist/projects/allproject.html",target:"_blank",rel:"noreferrer",children:"View my other projects"})})]})}}]),n}(s.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),m()}],[[21,1,2]]]);
//# sourceMappingURL=main.30e01852.chunk.js.map