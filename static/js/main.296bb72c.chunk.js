(this["webpackJsonpcart-project"]=this["webpackJsonpcart-project"]||[]).push([[0],{50:function(t,e,c){},51:function(t,e,c){},84:function(t,e,c){"use strict";c.r(e);var r=c(1),n=c.n(r),a=c(16),s=c.n(a),i=(c(50),c(17)),d=c(18),u=c(22),o=c(21),j=(c(51),c(2));function l(){return Object(j.jsx)("h2",{children:"Home"})}var b=c(85),h=c(86),O=c(87),m=c(88),x=c(89),f=c(90),v=c(13),C=c(12),p=c(14),P=c(43),I=c.n(P),k=n.a.createContext(),g=function(t){Object(u.a)(c,t);var e=Object(o.a)(c);function c(t){var r;return Object(i.a)(this,c),(r=e.call(this,t)).state={products:[],cartItems:[]},r.addToCart=r.addToCart.bind(Object(p.a)(r)),r.addCartProduct=r.addCartProduct.bind(Object(p.a)(r)),r.subCartProduct=r.subCartProduct.bind(Object(p.a)(r)),r.delCartProduct=r.delCartProduct.bind(Object(p.a)(r)),r}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var t=this;I.a.get("http://localhost:3000/products").then((function(e){return t.setState({products:e.data})}))}},{key:"addToCart",value:function(t){var e=this.state.cartItems,c=e.map((function(t){return t.id})).indexOf(t.id);if(c>=0){var r=e[c].amount;this.setState({cartItems:[].concat(Object(C.a)(e.slice(0,c)),[Object(v.a)(Object(v.a)({},t),{},{amount:r+1})],Object(C.a)(e.slice(c+1)))})}else this.setState({cartItems:e.concat(Object(v.a)(Object(v.a)({},t),{},{amount:1}))})}},{key:"addCartProduct",value:function(t){var e=this.state.cartItems,c=e.map((function(t){return t.id})).indexOf(t.id),r=e[c].amount;this.setState({cartItems:[].concat(Object(C.a)(e.slice(0,c)),[Object(v.a)(Object(v.a)({},t),{},{amount:r+1})],Object(C.a)(e.slice(c+1)))})}},{key:"subCartProduct",value:function(t){var e=this;this.setState((function(c){var r=c.cartItems,n=r.map((function(t){return t.id})).indexOf(t.id),a=r[n].amount;return a<1&&e.delCartProduct(t),{cartItems:[].concat(Object(C.a)(r.slice(0,n)),[Object(v.a)(Object(v.a)({},t),{},{amount:a-1})],Object(C.a)(r.slice(n+1)))}})),this.setState((function(c){var r=c.cartItems,n=r.map((function(t){return t.id}));r[n.indexOf(t.id)].amount<=0&&e.delCartProduct(t)}))}},{key:"delCartProduct",value:function(t){var e=this.state.cartItems,c=e.map((function(t){return t.id})).indexOf(t.id);this.setState({cartItems:[].concat(Object(C.a)(e.slice(0,c)),Object(C.a)(e.slice(c+1)))})}},{key:"render",value:function(){return Object(j.jsx)(k.Provider,{value:{products:this.state.products,cartItems:this.state.cartItems,addToCart:this.addToCart,addCartProduct:this.addCartProduct,subCartProduct:this.subCartProduct,delCartProduct:this.delCartProduct},children:this.props.children})}}]),c}(r.Component),N=function(t){var e=t.children;return Object(j.jsx)("div",{className:"Product",children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)(h.a,{top:!0,width:"100%",src:e.imageUrl,alt:"Card image cap"}),Object(j.jsxs)(O.a,{children:[Object(j.jsx)(m.a,{tag:"h5",children:e.title}),Object(j.jsx)(x.a,{children:e.description}),Object(j.jsx)(k.Consumer,{children:function(t){var c=t.addToCart;return Object(j.jsx)(f.a,{onClick:function(){return c(e)},children:"Add to cart"})}})]})]})})},y=c(91),S=c(92);function T(t){t.products;return Object(j.jsx)(y.a,{children:Object(j.jsx)(k.Consumer,{children:function(t){return t.products.map((function(t){return Object(j.jsx)(S.a,{lg:"3",md:"6",sm:"12",children:Object(j.jsx)(N,{children:t})})}))}})})}function F(t){var e=t.children;return Object(j.jsxs)("div",{className:"CartItem",children:[Object(j.jsxs)("div",{className:"CartItem-content",children:[Object(j.jsx)("div",{className:"CartItem-image d-sm-block d-none",children:Object(j.jsx)("img",{src:e.imageUrl,alt:"..."})}),Object(j.jsxs)("div",{className:"CartItem-info",children:[Object(j.jsx)("h5",{children:e.title}),Object(j.jsx)("p",{className:"d-md-block d-none",children:e.description})]})]}),Object(j.jsxs)("div",{className:"CartItem-amount",children:[Object(j.jsx)(k.Consumer,{children:function(t){var c=t.subCartProduct;return Object(j.jsx)("div",{onClick:function(){return c(e)},children:"-"})}}),Object(j.jsx)("input",{type:"text",value:e.amount,readonly:!0}),Object(j.jsx)(k.Consumer,{children:function(t){var c=t.addCartProduct;return Object(j.jsx)("div",{onClick:function(){return c(e)},children:"+"})}})]}),Object(j.jsx)(k.Consumer,{children:function(t){var c=t.delCartProduct;return Object(j.jsx)("div",{className:"CartItem-delete",onClick:function(){return c(e)},children:"X"})}})]})}function w(){return Object(j.jsx)(k.Consumer,{children:function(t){return t.cartItems.map((function(t){return Object(j.jsx)(F,{children:t})}))}})}var M=c(27),A=c(7),B=c(97),D=c(45),J=c(93),L=c(94),U=c(98),E=c(95),H=c(96);function R(t){var e=Object(r.useState)(!1),c=Object(D.a)(e,2),n=c[0],a=c[1],s=t.children;return Object(j.jsx)("div",{className:"NavMenu",children:Object(j.jsxs)(J.a,{color:"light",light:!0,expand:"md",children:[Object(j.jsx)(s,{className:"navbar-brand",to:"/",children:"Reactstrap"}),Object(j.jsx)(L.a,{onClick:function(){return a(!n)}}),Object(j.jsxs)(U.a,{isOpen:n,navbar:!0,children:[Object(j.jsx)(E.a,{className:"mr-auto",navbar:!0,children:Object(j.jsx)(H.a,{children:Object(j.jsx)(s,{className:"nav-link",to:"/products",children:"Products"})})}),Object(j.jsx)(E.a,{children:Object(j.jsx)(H.a,{children:Object(j.jsx)(k,{children:function(t){var e=t.cartItems;return Object(j.jsxs)(s,{className:"nav-link",to:"/cart",children:["Cart(",e.length,")"]})}})})})]})]})})}var X=function(t){Object(u.a)(c,t);var e=Object(o.a)(c);function c(){return Object(i.a)(this,c),e.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(j.jsx)(g,{children:Object(j.jsx)(M.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(R,{children:M.b}),Object(j.jsx)(B.a,{children:Object(j.jsxs)(A.c,{children:[Object(j.jsx)(A.a,{path:"/products",children:Object(j.jsx)(T,{})}),Object(j.jsx)(A.a,{path:"/cart",children:Object(j.jsx)(w,{})}),Object(j.jsx)(A.a,{path:"/",children:Object(j.jsx)(l,{})})]})})]})})})}}]),c}(r.Component),q=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,99)).then((function(e){var c=e.getCLS,r=e.getFID,n=e.getFCP,a=e.getLCP,s=e.getTTFB;c(t),r(t),n(t),a(t),s(t)}))};c(83);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root")),q()}},[[84,1,2]]]);
//# sourceMappingURL=main.296bb72c.chunk.js.map