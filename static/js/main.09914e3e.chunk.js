(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(34),i=c.n(s),o=(c(43),c(44),c(13)),l=c(2),j=Object(a.createContext)(),u=function(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),b=u[0],d=u[1],O=Object(a.useState)(""),m=Object(l.a)(O,2),p=m[0],h=m[1],x=Object(a.useState)(null),f=Object(l.a)(x,2),v=f[0],g=f[1],N=Object(a.useState)([]),z=Object(l.a)(N,2),S=z[0],C=z[1],w=Object(a.useState)(null),k=Object(l.a)(w,2),y=k[0],P=k[1],I=Object(a.useState)(null),F=Object(l.a)(I,2),L=F[0],E=F[1];return Object(n.jsx)(j.Provider,{value:{pizzas:r,setPizzas:s,addPizzas:function(e){s([].concat(Object(o.a)(r),[e]))},search:b,setSearch:d,selectedPizza:y,setSelectedPizza:P,message:L,setMessage:E,token:p,setToken:h,user:v,setUser:g,ingredients:S,setIngredients:C,addIngredients:function(e){C([].concat(Object(o.a)(S),[e]))}},children:e.children})},b=c(7),d=c(5),O=c(3),m=c.n(O),p=c(6),h=c(35),x=c.n(h).a.create({baseURL:"https://pizzaflash.herokuapp.com"}),f=function(e){var t=e.headers,c=e.onSorting,r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)("asc"),u=Object(l.a)(j,2),b=u[0],d=u[1];return Object(n.jsx)("thead",{className:"bg-primary text-white",children:Object(n.jsx)("tr",{children:t.map((function(e){var t=e.name,a=e.field,r=e.sortable;return Object(n.jsxs)("th",{onClick:function(){return r?function(e){var t=e===i&&"asc"===b?"desc":"asc";o(e),d(t),c(e,t)}(a):null},children:[t,i&&i===a&&("asc"===b?Object(n.jsx)("i",{className:"fas fa-arrow-down"}):Object(n.jsx)("i",{class:"fas fa-arrow-up"}))]},t)}))})})},v=function(e){var t=e.onSearch,c=Object(a.useState)(""),r=Object(l.a)(c,2),s=r[0],i=r[1];return Object(n.jsx)("input",{type:"text",className:"form-control",style:{width:"240px"},placeholder:"Recherche",value:s,onChange:function(e){var c;c=e.target.value,i(c),t(c)}})},g=c(17),N=function(e){var t=e.total,c=void 0===t?0:t,r=e.itemsPerPage,s=void 0===r?3:r,i=e.currentPage,o=void 0===i?1:i,j=e.onPageChange,u=Object(a.useState)(0),b=Object(l.a)(u,2),d=b[0],O=b[1];Object(a.useEffect)((function(){c>0&&s>0&&O(Math.ceil(c/s))}),[c,s]);var m=Object(a.useMemo)((function(){for(var e=[],t=function(t){e.push(Object(n.jsx)(g.a.Item,{active:t===o,onClick:function(){return j(t)},children:t},t))},c=1;c<=d;c++)t(c);return e}),[d,o,j]);return 0===d?null:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(g.a.Prev,{onClick:function(){return j(o-1)},disabled:1===o}),m,Object(n.jsx)(g.a.Next,{onClick:function(){return j(o+1)},disabled:o===d})]})},z=c.p+"static/media/loading.6f3798d6.gif",S=function(){return Object(n.jsx)("div",{className:"fp-container",children:Object(n.jsx)("img",{src:z,alt:"chargement",className:"fp-loader"})})},C=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1];return[c?Object(n.jsx)(S,{}):null,function(){return r(!0)},function(){return r(!1)}]};function w(e){var t=Object(a.useContext)(j),c=t.user,r=t.pizzas,s=t.setPizzas,i=t.token,u=t.setIngredients,b=C(),O=Object(l.a)(b,3),h=O[0],g=O[1],z=O[2],S=Object(a.useState)(0),w=Object(l.a)(S,2),k=w[0],y=w[1],P=Object(a.useState)(1),I=Object(l.a)(P,2),F=I[0],L=I[1],E=Object(a.useState)(""),M=Object(l.a)(E,2),_=M[0],B=M[1],A=Object(a.useState)({field:"",order:""}),D=Object(l.a)(A,2),U=D[0],T=D[1],J=Object(a.useState)([{name:"Nom",field:"name",sortable:!0},{name:"Base",field:"base",sortable:!0},{name:"Ingr\xe9dients",field:"ingredients",sortable:!0},{name:"\u20ac",field:"price",sortable:!0}]),R=Object(l.a)(J,2),H=R[0],V=R[1],G=Object(d.g)();Object(a.useEffect)((function(){c&&!0===c.is_admin&&V([].concat(Object(o.a)(H),[{name:"actions",field:"actions"}]))}),[c]),Object(a.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(),e.prev=1,e.next=4,x.get("/pizzas");case 4:return t=e.sent,e.next=7,x.get("/ingredients");case 7:c=e.sent,s(t.data.Pizza),u(c.data.Ingredient),z(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}})()()}),[s]);var q=function(){var e=Object(p.a)(m.a.mark((function e(t,c){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(c),t.stopPropagation(),e.prev=2,e.next=5,x.delete("/pizzas/".concat(c),{headers:{Authorization:"Bearer ".concat(i)}});case 5:n=e.sent,s(r.filter((function(e){return e._id!==c}))),console.log(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,c){return e.apply(this,arguments)}}(),K=Object(a.useMemo)((function(){var e=r;if(_&&(e=e.filter((function(e){return e.name.toLowerCase().includes(_.toLowerCase())||e.base.toLowerCase().includes(_.toLowerCase())||e.ingredients.toLowerCase().includes(_.toLowerCase())||e.price.toString().toLowerCase().includes(_.toLowerCase())}))),y(e.length),U.field){var t="asc"===U.order?1:-1;e=e.sort((function(e,c){return t*e[U.field].localeCompare(c[U.field])}))}return e.slice(10*(F-1),10*(F-1)+10)}),[r,F,_,U]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"row w-100",children:Object(n.jsx)("div",{className:"col mb-3 col-12 text-center",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)(N,{total:k,itemsPerPage:10,currentPage:F,onPageChange:function(e){return L(e)}})}),Object(n.jsx)("div",{className:"col-md-6 d-flex flex-row-reverse",children:Object(n.jsx)(v,{onSearch:function(e){B(e),L(1)}})})]})})}),Object(n.jsxs)("table",{className:"table table-hover",children:[Object(n.jsx)(f,{headers:H,onSorting:function(e,t){return T({field:e,order:t})}}),Object(n.jsx)("tbody",{children:K&&K.map((function(e){return Object(n.jsxs)("tr",{onClick:function(){return t=e._id,void G.push("/pizzas/".concat(t));var t},children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.base}),Object(n.jsx)("td",{children:e.ingredients}),Object(n.jsx)("td",{children:e.price}),c&&c.is_admin?Object(n.jsxs)("td",{className:"row",children:[Object(n.jsx)("button",{className:"btn btn-warning",onClick:function(t){return function(e,t){e.stopPropagation(),G.push("/pizzas/".concat(t,"/update"))}(t,e._id)},children:"M\xe0j"}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(t){return q(t,e._id)},children:"Sup"})]}):null]},e._id)}))})]}),h]})}function k(){var e=Object(a.useContext)(j),t=e.message,c=e.user;return Object(n.jsxs)("div",{children:[t?Object(n.jsx)("div",{className:"alert alert-success",children:t}):null,Object(n.jsx)("h1",{children:"Home Page"}),c?Object(n.jsxs)("h2",{children:["Bienvenue ",c.email]}):null,Object(n.jsx)(w,{})]})}var y=c(14),P=function(){var e=Object(d.g)(),t=Object(a.useContext)(j),c=t.message,r=t.setMessage,s=t.setToken,i=t.setUser,o=Object(a.useState)(""),u=Object(l.a)(o,2),O=u[0],h=u[1],f=Object(a.useState)(""),v=Object(l.a)(f,2),g=v[0],N=v[1],z=Object(a.useState)(""),S=Object(l.a)(z,2),C=(S[0],S[1]),w=Object(a.useState)(""),k=Object(l.a)(w,2),P=k[0],I=k[1],F=function(){var t=Object(p.a)(m.a.mark((function t(c){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,x.post("/users/login",{email:O,password:g});case 4:n=t.sent,C(""),I(""),n.data.pizzatoken&&(localStorage.setItem("pizzatoken",n.data.pizzatoken),s(n.data.pizzatoken),i(Object(y.a)(n.data.pizzatoken)),r("Vous \xeates connect\xe9"),e.push("/")),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(JSON.stringify(t.t0.message.substr(-3))),I(t.t0.message.substr(-3)),console.log("code",P),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Login"}),c?Object(n.jsx)("div",{className:"alert alert-success",children:c}):null,Object(n.jsxs)("form",{className:"mb-2",action:"submit",children:[Object(n.jsxs)("div",{className:"form-row",children:[Object(n.jsxs)("div",{className:"form-group col-8",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)("input",{value:O,onChange:function(e){return h(e.target.value)},id:"email",placeholder:"Email",type:"text",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group col-8",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(n.jsx)("input",{value:g,onChange:function(e){return N(e.target.value)},id:"password",placeholder:"Mot de passe",type:"password",className:"form-control"})]})]}),Object(n.jsx)("button",{type:"submit",onClick:F,className:"btn btn-primary",children:"Submit"})]}),Object(n.jsx)(b.b,{to:"/register",children:Object(n.jsx)("button",{className:"btn btn-primary",children:"Go to Register"})}),Object(n.jsx)(b.b,{to:"/",children:Object(n.jsx)("button",{className:"btn btn-primary",children:"Home"})})]})},I=function(){var e=Object(d.g)(),t=Object(a.useState)(""),c=Object(l.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),u=o[0],O=o[1],h=Object(a.useState)(""),f=Object(l.a)(h,2),v=f[0],g=f[1],N=Object(a.useState)(""),z=Object(l.a)(N,2),S=z[0],C=z[1],w=Object(a.useState)(""),k=Object(l.a)(w,2),y=k[0],P=k[1],I=Object(a.useContext)(j).setMessage,F=function(){var t=Object(p.a)(m.a.mark((function t(c){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,x.post("/users/register",{email:r,password:u});case 4:n=t.sent,g(""),P(""),I("Votre compte a bien \xe9t\xe9 cr\xe9\xe9. Vous pouvez vous connecter."),e.push("/login"),console.log(JSON.stringify(n)),t.next=18;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(JSON.stringify(t.t0.message.substr(-3))),P(t.t0.message.substr(-3)),console.log("code",y),t.t0?g("Erreur d'identifiants ou de mot de passe"):g("");case 18:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){C("500"===y?"L'identifiant n'est pas un email":""),C("409"===y?"L'adresse email existe d\xe9j\xe0":"")}),[y]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Register"}),Object(n.jsxs)("div",{className:"mb-2",children:[Object(n.jsxs)("div",{className:"form-row",children:[Object(n.jsxs)("div",{className:"form-group col-8",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)("input",{value:r,onChange:function(e){return s(e.target.value)},id:"email",placeholder:"Email",type:"text",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group col-8",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(n.jsx)("input",{value:u,onChange:function(e){return O(e.target.value)},id:"password",placeholder:"Mot de passe",type:"password",className:"form-control"})]})]}),S?Object(n.jsx)("p",{className:"alert alert-danger",children:S}):"",v?Object(n.jsx)("p",{className:"alert alert-danger",children:v}):"",Object(n.jsx)("button",{type:"submit",onClick:F,className:"btn btn-primary",children:"Submit"})]}),Object(n.jsx)(b.b,{to:"/login",children:Object(n.jsx)("button",{className:"btn btn-primary",children:"Go to Login"})})]})};function F(e){var t=Object(a.useContext)(j).token,c=Object(d.h)().id,r=Object(d.g)(),s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],b=Object(a.useState)(""),O=Object(l.a)(b,2),h=O[0],f=O[1],v=Object(a.useState)(""),g=Object(l.a)(v,2),N=g[0],z=g[1],S=Object(a.useState)(""),C=Object(l.a)(S,2),w=C[0],k=C[1],y=Object(a.useState)(""),P=Object(l.a)(y,2),I=P[0],F=P[1],L=Object(a.useState)(""),E=Object(l.a)(L,2),M=E[0],_=E[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/pizzas/".concat(c));case 2:t=e.sent,console.log(t.data.Pizza),u(t.data.Pizza.name),f(t.data.Pizza.ingredients),k(t.data.Pizza.price),F(t.data.Pizza.base),_(t.data.Pizza.status),z(t.data.Pizza.special);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var B=function(){var e=Object(p.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=JSON.stringify([{propName:"name",value:o},{propName:"price",value:w},{propName:"base",value:I},{propName:"special",value:N},{propName:"status",value:M},{propName:"ingredients",value:h}]),e.prev=2,e.next=5,x("/pizzas/".concat(c),{method:"patch",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},data:a});case 5:r.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"text-center",children:"Update Pizza"}),Object(n.jsx)("p",{className:"text-center",children:"secret page"}),Object(n.jsxs)("form",{action:"submit",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"name",children:"Name"}),Object(n.jsx)("input",{value:o,onChange:function(e){return u(e.target.value)},id:"name",type:"text",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"ingredients",children:"Ingr\xe9dients"}),Object(n.jsx)("input",{value:h,onChange:function(e){return f(e.target.value)},id:"ingredients",type:"text",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"price",children:"Prix"}),Object(n.jsx)("input",{value:w,onChange:function(e){return k(e.target.value)},id:"price",type:"text",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"base",children:"Base"}),Object(n.jsx)("input",{value:I,onChange:function(e){return F(e.target.value)},id:"base",type:"text",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"status",children:"Statut"}),Object(n.jsx)("input",{value:M,onChange:function(e){return _(e.target.value)},id:"status",type:"text",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"special",children:"Speciale ?"}),Object(n.jsx)("input",{value:N,onChange:function(e){return z(e.target.value)},id:"special",type:"text",className:"form-control"})]}),Object(n.jsx)("button",{type:"submit",onClick:B,className:"btn btn-primary",children:"Submit"}),Object(n.jsx)("button",{onClick:function(){return r.push("/")},className:" btn btn-primary mx-5",children:"Cancel"})]})]})}function L(){var e=Object(d.h)().id,t=Object(a.useState)(""),c=Object(l.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(a.useEffect)((function(){(function(){var t=Object(p.a)(m.a.mark((function t(){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/pizzas/".concat(e));case 2:c=t.sent,console.log(c.data.Pizza),s(c.data.Pizza.name),u(c.data.Pizza.ingredients);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"text-center",children:"Detail Pizza"}),Object(n.jsxs)("form",{action:"",children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("h2",{children:r})}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"ingredients",children:"Ingr\xe9dients :"}),Object(n.jsx)("p",{children:j})]})]})]})}function E(){var e=Object(a.useContext)(j),t=e.addPizzas,c=e.token,r=e.ingredients,s=Object(a.useState)(""),i=Object(l.a)(s,2),u=i[0],b=i[1],O=Object(a.useState)([]),h=Object(l.a)(O,2),f=h[0],v=h[1],g=Object(a.useState)(""),N=Object(l.a)(g,2),z=N[0],S=N[1],C=Object(a.useState)("Sauce tomate"),w=Object(l.a)(C,2),k=w[0],y=w[1],P=Object(a.useState)(!1),I=Object(l.a)(P,2),F=I[0],L=I[1],E=Object(a.useState)("disponible"),M=Object(l.a)(E,2),_=M[0],B=M[1],A=Object(d.g)(),D=function(){var e=Object(p.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,x.post("/pizzas",{name:u,ingredients:f[0]?f[0].substr(0,1).toUpperCase()+f.join(", ").substr(1):"",price:z,special:F,base:k,status:_},{headers:{Authorization:"Bearer ".concat(c)}});case 4:a=e.sent,t(a.data.createdPizza),A.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"text-center",children:"Add Pizza"}),Object(n.jsx)("p",{className:"text-center",children:"secret page"})]}),Object(n.jsxs)("form",{className:"mb-4",action:"",children:[Object(n.jsxs)("div",{className:"row form-row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{type:"text",value:u,onChange:function(e){return b(e.target.value)},className:"form-control",placeholder:"Nom"})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{type:"text",value:z,onChange:function(e){return S(e.target.value)},className:"form-control",placeholder:"Prix"})})]}),Object(n.jsxs)("div",{className:"row form-row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("select",{className:" form-control",value:k,onChange:function(e){return y(e.target.value)},children:[Object(n.jsx)("option",{children:"Sauce tomate"}),Object(n.jsx)("option",{children:"Cr\xe8me fra\xeeche"})]})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("select",{className:" form-control",value:F,onChange:function(e){return L(e.target.value)},children:[Object(n.jsx)("option",{value:"false",children:"Ordinaire"}),Object(n.jsx)("option",{value:"true",children:"Sp\xe9ciale"})]})})]}),Object(n.jsx)("div",{className:"row form-row",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("select",{className:" form-control",value:_,onChange:function(e){return B(e.target.value)},children:[Object(n.jsx)("option",{value:"true",children:"Disponible"}),Object(n.jsx)("option",{value:"false",children:"Non disponible"})]})})}),Object(n.jsx)("div",{className:"row from-row",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("p",{className:"mt-3",children:"Ingr\xe9dients :"}),Object(n.jsxs)("p",{children:[f[0]?f[0].substr(0,1).toUpperCase()+f.join(", ").substr(1):""," "]})]})}),Object(n.jsx)("div",{className:"form-group"}),r?r.map((function(e){return Object(n.jsxs)("div",{className:"form-check form-check-inline",children:[Object(n.jsx)("input",{className:"form-check-input",type:"checkbox",id:e._id,value:e.name,onClick:function(e){return function(e){var t=f.includes(e);v(t?f.filter((function(t){return t!==e})):[].concat(Object(o.a)(f),[e]))}(e.target.value)}}),Object(n.jsx)("label",{className:"form-check-label",htmlFor:e._id,children:e.name.substr(0,1).toUpperCase()+e.name.substr(1)})]},e._id)})):null,Object(n.jsx)("button",{type:"submit",onClick:D,className:"btn btn-primary col mx-3",children:"Add"})]})]})}var M=c(18),_=c(37),B=function(e){var t=e.component,c=Object(_.a)(e,["component"]),r=Object(a.useContext)(j).setUser;return Object(a.useEffect)((function(){localStorage.getItem("pizzatoken")?r(Object(y.a)(localStorage.getItem("pizzatoken"))):r(null)}),[r]),localStorage.getItem("pizzatoken")?Object(n.jsx)(d.b,Object(M.a)(Object(M.a)({},c),{},{render:function(e){return Object(n.jsx)(t,Object(M.a)(Object(M.a)({},c),e))}})):Object(n.jsx)(d.a,{to:"/login"})},A=function(){var e=Object(a.useContext)(j),t=e.ingredients,c=e.addIngredients,r=e.token,s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],b=Object(a.useState)(!1),d=Object(l.a)(b,2),O=d[0],h=d[1],f=Object(a.useState)(null),v=Object(l.a)(f,2),g=v[0],N=v[1],z=Object(a.useState)(""),S=Object(l.a)(z,2),C=S[0],w=S[1],k=Object(a.useState)(!1),y=Object(l.a)(k,2),P=y[0],I=y[1],F="Ingr\xe9dient cr\xe9\xe9 avec succ\xe8s",L="Ingr\xe9dient d\xe9j\xe0 enregistr\xe9",E=function(){var e=Object(p.a)(m.a.mark((function e(n){var a,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})),w("error"),!(a.length>0&&!1===P)){e.next=7;break}N(L),e.next=23;break;case 7:return e.prev=7,e.next=10,x.post("/ingredients",{name:o,base:O},{headers:{Authorization:"Bearer ".concat(r)}});case 10:s=e.sent,c(s.data.createdIngredient),u(""),h(!1),I(!1),N(F),w("success"),setTimeout((function(){N(""),w("")}),2e3),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[7,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"mb-4",children:[Object(n.jsx)("form",{action:"submit",children:Object(n.jsxs)("div",{className:"row form-row",children:[Object(n.jsxs)("div",{className:"col text-center",children:[Object(n.jsx)("label",{htmlFor:"nom",children:"Ingr\xe9dient"}),Object(n.jsx)("input",{type:"text",id:"nom",value:o,onChange:function(e){return u(e.target.value)},className:"form-control",placeholder:"Nom"})]}),Object(n.jsxs)("div",{className:"col text-center",children:[Object(n.jsx)("label",{htmlFor:"base",children:"Base"}),Object(n.jsxs)("select",{id:"base",value:O,onChange:function(e){return h(e.target.value)},className:"form-control mr-sm-2",children:[Object(n.jsx)("option",{disabled:!0,children:"Base"}),Object(n.jsx)("option",{value:"true",children:"Oui"}),Object(n.jsx)("option",{value:"false",children:"Non"})]})]}),Object(n.jsxs)("div",{className:"col text-center",children:[Object(n.jsx)("label",{htmlFor:"forceRecord",children:"Forcer Enregistrement"}),Object(n.jsx)("input",{className:"form-check-input ",type:"checkbox",id:"forceRecord",value:P,onClick:function(){I(!P)}})]}),Object(n.jsx)("button",{type:"submit",onClick:E,className:"btn btn-primary col mx-3",children:"Add"})]})}),g&&C&&"success"===C?Object(n.jsx)("div",{className:"alert alert-success",children:F}):null,g&&C&&"error"===C?Object(n.jsx)("div",{className:"alert alert-danger",children:L}):null]})},D=function(){var e=Object(a.useContext)(j),t=e.ingredients,c=e.setIngredients,r=e.token,s=C(),i=Object(l.a)(s,3),o=i[0],u=i[1],b=i[2],d=Object(a.useState)(0),O=Object(l.a)(d,2),h=O[0],g=O[1],z=Object(a.useState)(1),S=Object(l.a)(z,2),w=S[0],k=S[1],y=Object(a.useState)(""),P=Object(l.a)(y,2),I=P[0],F=P[1],L=Object(a.useState)({field:"",order:""}),E=Object(l.a)(L,2),M=E[0],_=E[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.prev=1,e.next=4,x("/ingredients");case 4:t=e.sent,b(),c(t.data.Ingredient),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[c]);var B=Object(a.useMemo)((function(){var e=t;if(I&&(e=e.filter((function(e){return e.name.toLowerCase().includes(I.toLowerCase())}))),g(e.length),M.field){var c="asc"===M.order?1:-1;e=e.sort((function(e,t){return c*e[M.field].localeCompare(t[M.field])}))}return e.slice(10*(w-1),10*(w-1)+10)}),[t,w,I,M]),D=function(){var e=Object(p.a)(m.a.mark((function e(n,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.prev=1,e.next=4,x.delete("/ingredients/".concat(a),{headers:{Authorization:"Bearer ".concat(r)}});case 4:c(t.filter((function(e){return e._id!==a}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"text-center",children:"Ingredients disponibles"}),Object(n.jsxs)("div",{className:"row w-100",children:[Object(n.jsx)("div",{className:"col mb-3 col-12 text-center",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)(N,{total:h,itemsPerPage:10,currentPage:w,onPageChange:function(e){return k(e)}})}),Object(n.jsx)("div",{className:"col-md-6 d-flex flex-row-reverse",children:Object(n.jsx)(v,{onSearch:function(e){F(e),k(1)}})})]})}),Object(n.jsx)(A,{})]}),Object(n.jsxs)("table",{className:"table table-hover",children:[Object(n.jsx)(f,{headers:[{name:"Nom",field:"name",sortable:!0},{name:"Base",field:"base"},{name:"actions"}],onSorting:function(e,t){return _({field:e,order:t})}}),Object(n.jsx)("tbody",{children:B.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:!0===e.base?"Oui":"Non"}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(t){return D(t,e._id)},children:"Sup"})})]},e._id)}))})]}),o]})},U=function(){var e=Object(a.useContext)(j),t=e.message,c=e.setMessage,r=e.user,s=e.setUser,i=e.setToken;Object(a.useEffect)((function(){setTimeout((function(){c("")}),5e3)}),[t,c]),Object(a.useEffect)((function(){localStorage.getItem("pizzatoken")?(s(Object(y.a)(localStorage.getItem("pizzatoken"))),i(localStorage.getItem("pizzatoken"))):s(null)}),[s,i]);return Object(n.jsxs)("div",{children:[r?Object(n.jsx)(b.b,{to:"/",children:Object(n.jsx)("button",{className:"btn btn-primary float-right",onClick:function(){s(null),localStorage.removeItem("pizzatoken")},children:"D\xe9connecter"})}):Object(n.jsx)(b.b,{to:"/login",children:Object(n.jsx)("button",{className:"btn btn-primary float-right",children:"Login"})}),Object(n.jsx)(b.b,{to:"/",children:Object(n.jsx)("button",{className:"btn btn-primary",children:"Home"})}),r&&!0===r.is_admin?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.b,{to:"/addpizza",children:Object(n.jsx)("button",{className:"btn btn-primary",children:"Add a Pizza"})}),Object(n.jsx)(b.b,{to:"/ingredients",children:Object(n.jsx)("button",{className:"btn btn-primary",children:"Ingredients"})})]}):null]})};var T=function(){return Object(n.jsx)(u,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(U,{}),Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/",component:k}),Object(n.jsx)(B,{exact:!0,path:"/ingredients",component:D}),Object(n.jsx)(B,{exact:!0,path:"/addpizza",component:E}),Object(n.jsx)(d.b,{exact:!0,path:"/login",component:P}),Object(n.jsx)(d.b,{exact:!0,path:"/register",component:I}),Object(n.jsx)(d.b,{exact:!0,path:"/pizzas/:id",component:L}),Object(n.jsx)(d.b,{exact:!0,path:"/pizzas/:id/update",component:F}),Object(n.jsx)(d.b,{component:k})]})]})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),J()}},[[69,1,2]]]);
//# sourceMappingURL=main.09914e3e.chunk.js.map