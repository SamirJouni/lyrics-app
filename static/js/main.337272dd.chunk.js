(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/spinner.f3ac8eb8.gif"},26:function(e,t,a){e.exports=a(44)},32:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),s=(a(31),a(32),a(5)),o=a(6),i=a(8),m=a(7),u=a(9),d=a(11),h=a(10),p=a(21),f=c.a.createContext(),g=function(e,t){switch(t.type){case"SEARCH_TRACKS":return Object(p.a)({},e,{track_list:t.payload,heading:"Search Results"});default:return e}},b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={track_list:[],heading:"Top 10",dispatch:function(e){return a.setState(function(t){return g(t,e)})},loading:!1,toggle_loading:function(){return a.setState({loading:!a.state.loading})},no_results:!1,toggle_no_results:function(){return a.setState({no_results:!a.state.no_results})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=de&f_has_lyrics=1&apikey=".concat("50ad0c2d383aa6a6f08c4dace10ddb95")).then(function(e){return e.json()}).then(function(t){return e.setState({track_list:t.message.body.track_list})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),E=f.Consumer,y=function(){return c.a.createElement("nav",{className:"navbar navbar-dark bg-main-color mb-5"},c.a.createElement("span",{className:"navbar-brand mb-0 h1 mx-auto"},"Lyrics Search"))},v=a(13),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={trackTitle:""},a.onChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.findTrack=function(e,t,n,c,r){return r.preventDefault(),a.state.trackTitle?(t(),n&&c(),a.setState({trackTitle:""}),void fetch("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=".concat(a.state.trackTitle,"&page_size=10&page=1&s_track_rating=desc&apikey=").concat("50ad0c2d383aa6a6f08c4dace10ddb95")).then(function(e){return e.json()}).then(function(a){e({type:"SEARCH_TRACKS",payload:a.message.body.track_list}),t(),a.message.body.track_list.length||c()}).catch(function(e){return console.log(e)})):alert("Please Provide A Song Name.")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(E,null,function(t){var a=t.dispatch,n=t.toggle_loading,r=t.no_results,l=t.toggle_no_results;return c.a.createElement("div",{className:"card card-body mb-4 p-4"},c.a.createElement("h1",{className:"display-4 text-center text-secondary-color"},c.a.createElement("i",{className:"fas fa-music mr-2"})," Find Those Lyrics"),c.a.createElement("p",{className:"lead text-center"},"Search For Your Song And View It's Lyrics"),c.a.createElement("form",{onSubmit:e.findTrack.bind(e,a,n,r,l)},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Type In The Song Title...",name:"trackTitle",value:e.state.trackTitle,onChange:e.onChange})),c.a.createElement("button",{className:"btn btn-primary btn-lg btn-block mb-5 btn-secondary-color",type:"submit"},c.a.createElement("i",{className:"fas fa-search mr-2"}),"Search")))})}}]),t}(n.Component),N=a(22),_=a.n(N),w=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:_.a,alt:"loading...",style:{width:"500px",margin:"40px auto",display:"block"}}))},j=function(e){var t=e.track;return c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card mb-4 shadow-sm"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,t.artist_name),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,c.a.createElement("i",{className:"fas fa-play"})," Track"),": ",t.track_name," ",c.a.createElement("br",null),c.a.createElement("strong",null,c.a.createElement("i",{className:"fas fa-compact-disc"})," Album"),": ",t.album_name),c.a.createElement(d.b,{to:"lyrics/track/".concat(t.track_id),className:"btn btn-light text-secondary-color btn-secondary-color-light btn-block"},c.a.createElement("i",{className:"fas fa-chevron-right"})," View Lyrics"))))},O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(E,null,function(e){var t=e.track_list,a=e.heading,n=e.loading,r=e.no_results;return void 0===t||0===t.length||!0===n?0===t.length&&!0===r?c.a.createElement("div",{className:"h5 text-center"},c.a.createElement("i",{className:"far fa-file mr-2"}),"No Results"):c.a.createElement(w,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"text-center mb-4"},a),c.a.createElement("div",{className:"scroll-parent"},c.a.createElement("div",{className:"row scroll-child"},t.map(function(e){return c.a.createElement(j,{track:e.track,key:e.track.track_id})}))))})}}]),t}(n.Component),x=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null),c.a.createElement("div",{className:"shape3"}),c.a.createElement(O,null))},S=a(25),T=a.n(S),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={track:{},lyrics:{}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(this.props.match.params.id,"&apikey=").concat("50ad0c2d383aa6a6f08c4dace10ddb95")).then(function(e){return e.json()}).then(function(t){return e.setState({lyrics:t.message.body.lyrics}),fetch("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=".concat(e.props.match.params.id,"&apikey=").concat("50ad0c2d383aa6a6f08c4dace10ddb95"))}).then(function(e){return e.json()}).then(function(t){return e.setState({track:t.message.body.track})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.track,a=e.lyrics;return void 0===t||void 0===a||0===Object.keys(t).length||0===Object.keys(a).length?c.a.createElement(w,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.b,{to:"/",className:"btn btn-light btn-sm mb-4 btn-secondary-color-light"},c.a.createElement("i",{className:"fas fa-chevron-left mr-1"})," Back"),c.a.createElement("div",{className:"card"},c.a.createElement("h5",{className:"card-header"},t.track_name," By"," ",c.a.createElement("span",{className:"text-secondary"},t.artist_name)),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},a.lyrics_body))),c.a.createElement("div",{className:"shape3"}),c.a.createElement("ul",{className:"list-group mt-3"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Album"),":",c.a.createElement("span",{className:"ml-2"},t.album_name)),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Genre"),":",c.a.createElement("span",{className:"ml-2"},function(){try{return t.primary_genres.music_genre_list[0].music_genre.music_genre_name}catch(e){return"\xd8"}}())),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Explicit"),":",c.a.createElement("span",{className:"ml-2"},0===t.explicit?"No":"Yes")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Release"),":",c.a.createElement("span",{className:"ml-2"},c.a.createElement(T.a,{format:"DD-MM-YYYY"},t.first_release_date)))))}}]),t}(n.Component),A=(a(43),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(b,null,c.a.createElement(d.a,{basename:"/lyrics-app/"},c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"shape-container"},c.a.createElement("div",{className:"shape1"}),c.a.createElement("div",{className:"shape2"})),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:x}),c.a.createElement(h.a,{exact:!0,path:"/lyrics/track/:id",component:C}))))))}}]),t}(n.Component)),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(c.a.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/lyrics-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/lyrics-app","/service-worker.js");R?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):F(e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.337272dd.chunk.js.map