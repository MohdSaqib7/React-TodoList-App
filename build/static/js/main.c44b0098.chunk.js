(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(37)},26:function(e,t,a){},28:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(14),o=a.n(l),s=(a(26),a(9)),c=a(16),i=(a(28),a(7));function m(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(i.b,{className:"navbar-brand",to:"/"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/about"},"About"))),e.searchBar?r.a.createElement("form",{className:"d-flex"},r.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")):"")))}m.defaultProps={title:"Your Title Here",searchBar:!0};var u=function(e){var t=e.todo,a=e.onDelete;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h4",null,t.title),r.a.createElement("p",null,t.desc),r.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)}},"Delete")),r.a.createElement("hr",null))},d=function(e){return r.a.createElement("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"}},r.a.createElement("h3",{className:"my-3"},"Todos List"),0===e.todos.length?"No Todos available":e.todos.map(function(t){return console.log(t.sno),r.a.createElement(u,{todo:t,key:t.sno,onDelete:e.onDelete})}))},p=function(){return r.a.createElement("footer",{className:"bg-dark text-light py-0.7"},r.a.createElement("p",{className:"text-center"},"Copyright \xa9 MyTodosAppList"))},h=function(e){var t=e.addTodo,a=Object(n.useState)(""),l=Object(s.a)(a,2),o=l[0],c=l[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),u=m[0],d=m[1];return r.a.createElement("div",{className:"container my-3"},r.a.createElement("h3",null,"Add a Todo"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o&&u?(t(o,u),c(""),d("")):alert("Title or Description cannot be blank")}},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"title",className:"form-label"},"Todo Title"),r.a.createElement("input",{type:"text",value:o,onChange:function(e){return c(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"desc",className:"form-label"},"Todo Description"),r.a.createElement("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)},className:"form-control",id:"desc"})),r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success"},"Add Todo")))},b=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h3",null,"My First React development")),r.a.createElement("p",null,"Hi! I am Saqib developer of this app using react. I made this app from the learning purpose because I wanted to check the knowledge of react. I have applied all my theoretical concept on this app and achieve real word experience. Latest is for stable, semver React releases. It\u2019s what you get when you install React from npm. This is the channel you\u2019re already using today. Use this for all user-facing React applications. Next tracks the main branch of the React source code repository. Think of these as release candidates for the next minor semver release. Use this for integration testing between React and third party projects. Experimental includes experimental APIs and features that aren\u2019t available in the stable releases. These also track the main branch, but with additional feature flags turned on. Use this to try out upcoming features before they are released. All releases are published to npm, but only Latest uses semantic versioning. Prereleases (those in the Next and Experimental channels) have versions generated from a hash of their contents,  for Next and next for Experimental. The only officially supported release channel for user-facing applications is Latest. Next and Experimental releases are provided for testing purposes only, and we provide no guarantees that behavior won\u2019t change between releases. They do not follow the semver protocol that we use for releases from Latest. By publishing prereleases to the same registry that we use for stable releases, we are able to take advantage of the many tools that support the npm workflow, like unpkg and CodeSandbox. Latest is the channel used for stable React releases. It corresponds to the latest tag on npm. It is the recommended channel for all React apps that are shipped to real users. If you\u2019re not sure which channel you should use, it\u2019s Latest. If you\u2019re a React developer, this is what you\u2019re already using. Our latest major version includes out-of-the-box improvements like automatic batching, new APIs like startTransition, and streaming server-side rendering with support for Suspense. React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. This is my first approach to build single page application in react, it is awesome experience because react switch one app to another without loading. So Thanks for Read."))},f=a(0);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){g(u.filter(function(t){return t!==e})),console.log("deleted",u),localStorage.setItem("todos",JSON.stringify(u))},a=function(e,t){var a={sno:0===u.length?0:u[u.length-1].sno+1,title:e,desc:t};g([].concat(Object(c.a)(u),[a]))},l=Object(n.useState)(e),o=Object(s.a)(l,2),u=o[0],g=o[1];return Object(n.useEffect)(function(){localStorage.setItem("todos",JSON.stringify(u))},[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(m,{title:"My Todos List",searchBar:!1}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{addTodo:a}),r.a.createElement(d,{todos:u,onDelete:t}))}}),r.a.createElement(f.a,{exact:!0,path:"/About"},r.a.createElement(b,null))),r.a.createElement(p,null)))},v=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,38)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null))),v()}},[[17,3,2]]]);
//# sourceMappingURL=main.c44b0098.chunk.js.map