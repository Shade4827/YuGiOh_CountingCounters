(this["webpackJsonpreact-ts-app"]=this["webpackJsonpreact-ts-app"]||[]).push([[0],{10:function(e,t,n){},5:function(e,t,n){"use strict";n.r(t);var c=n(4),i=n(1),s=n(3),l=n.n(s),r=(n(10),n(0)),a=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"zone",children:e.value})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){return e.onClickL()},children:"+"}),Object(r.jsx)("button",{onClick:function(){return e.onClickR()},children:"-"})]})]})},o=function(e){var t=function(t){return Object(r.jsx)(a,{value:e.zones[t],onClickL:function(){return e.onClickL(t)},onClickR:function(){return e.onClickR(t)}})};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"field-spelltrap",children:[t(0),t(1),t(2),t(3),t(4)]}),Object(r.jsxs)("div",{className:"field-monster-top",children:[t(5),t(6),t(7),t(8),t(9),t(10)]}),Object(r.jsxs)("div",{className:"field-ex",children:[t(11),Object(r.jsx)("a",{}),t(12)]}),Object(r.jsxs)("div",{className:"field-monster-bottom",children:[t(13),t(14),t(15),t(16),t(17),t(18)]}),Object(r.jsxs)("div",{className:"field-spelltrap",children:[t(19),t(20),t(21),t(22),t(23)]})]})},d=function(){var e=Object(i.useState)({field:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],total:0}),t=Object(c.a)(e,2),n=t[0],s=t[1],l=n,a="total:"+l.total,d=function(){s({field:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],total:0})};return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("div",{className:"app-field",children:Object(r.jsx)(o,{zones:l.field,onClickL:function(e){var t=function(t){var n=t.field,c=t.total,i=n;return i[e]++,{field:i,total:c+1}}(l);s(t)},onClickR:function(e){var t=function(t){var n=t.field,c=t.total;return n[e]>0&&(n[e]-=1,c-=1),{field:n,total:c}}(l);s(t)}})}),Object(r.jsxs)("div",{className:"app-button",children:[Object(r.jsx)("div",{className:"text",children:a}),Object(r.jsx)("button",{onClick:d,children:"Reset"})]})]})};l.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))}},[[5,1,2]]]);
//# sourceMappingURL=main.d72a29d1.chunk.js.map