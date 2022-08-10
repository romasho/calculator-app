/*! For license information please see 1.bundle.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=t(3).d.div.withConfig({displayName:"components__ButtonsContainer",componentId:"sc-4nhf97-0"})(["min-width:75%;height:calc(100% - 180px);display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(4,1fr);align-items:center;justify-items:center;gap:10px;margin:","px;font-size:","px;"],(function(e){return e.theme.fontSizes[2]}),(function(e){return e.theme.fontSizes[0]}))},101:function(e,n,t){"use strict";var r=t(12),o=t.n(r),c=t(15),i=t.n(c),a=t(21),u=t.n(a),l=t(22),s=t.n(l),d=t(23),m=t.n(d),f=t(0),p=t.n(f),h=t(3).d.button.withConfig({displayName:"components__CustomButton",componentId:"sc-1jyvrru-0"})(["background:"," 0% 0% no-repeat padding-box;border:1px solid ",";border-radius:","px;max-width:150px;max-height:150px;width:100%;height:100%;font-size:","px;cursor:pointer;color:",";"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondaryText}),(function(e){return e.theme.fontSizes[1]}),(function(e){return e.theme.fontSizes[0]}),(function(e){return e.theme.colors.mainText}));t.d(n,"a",(function(){return x}));var x=function(e){function n(){return o()(this,n),u()(this,s()(n).apply(this,arguments))}return m()(n,e),i()(n,[{key:"render",value:function(){return p.a.createElement(h,{onClick:this.props.onClick},this.props.value)}}]),n}(p.a.Component)},97:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(35),i=t(24),a=t(98);function u(){var e=Object(i.d)((function(e){return e.calculatorReducer})),n=e.secondOperand,t=e.firstOperand;return o.a.createElement(a.a,null,n||t)}var l=t(18),s=t.n(l),d=t(99);function m(){var e=Object(i.d)((function(e){return e.calculatorReducer})),n=e.firstOperand,t=e.secondOperand,r=e.operator,c=e.history;return o.a.createElement(d.a,null,o.a.createElement(d.c,null,"History"),o.a.createElement(d.b,null,["".concat(n," ").concat(r||""," ").concat(t||"")].concat(s()(c)).map((function(e,n){return o.a.createElement(d.d,{key:n},e)}))))}var f=t(100),p=t(101),h=t(13),x=t(10);function b(){var e=Object(i.c)();return o.a.createElement(f.a,null,h.d.map((function(n){return o.a.createElement(p.a,{key:n.value,value:n.value,onClick:function(){!function(n){switch(n.type){case"clear":e(Object(x.n)());break;case"clearEntry":e(Object(x.o)());break;case"equal":e(Object(x.m)());break;case"operators":e(Object(x.k)(n.value));break;case"number":e(Object(x.j)(n.value));break;case"dot":e(Object(x.i)());break;case"bracket":e(Object(x.l)(n.value))}}(n)}})})))}function w(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement(b,null),o.a.createElement(m,null))}n.default=function(){return o.a.createElement(c.b,null,o.a.createElement(c.a,null,o.a.createElement(w,null)))}},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=t(3).d.div.withConfig({displayName:"components__CustomInput",componentId:"sc-17khll6-0"})(["width:100%;font-size:","px;font-weight:normal;outline:none;max-width:calc(75% - 2rem);border-bottom:2px solid ",";padding:","px;margin:0 1rem;display:flex;align-items:center;justify-content:flex-end;height:120px;color:",";"],(function(e){return e.theme.fontSizes[0]}),(function(e){return e.theme.colors.secondaryText}),(function(e){return e.theme.fontSizes[1]}),(function(e){return e.theme.colors.mainText}))},99:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return a}));var r=t(3),o=r.d.div.withConfig({displayName:"components__CustomDiv",componentId:"sc-1ydwq76-0"})(["font-size:","px;width:calc(25% - 60px);height:calc(100% - 2rem);border-left:2px solid ",";margin:1rem 0;"],(function(e){return e.theme.fontSizes[0]}),(function(e){return e.theme.colors.secondaryText})),c=r.d.div.withConfig({displayName:"components__DivWithCustomScroll",componentId:"sc-1ydwq76-1"})(["max-height:calc(100% - 60px);overflow-x:hidden;overflow-y:auto;&::-webkit-scrollbar{width:1rem;};&::-webkit-scrollbar-track{box-Shadow:inset 0 0 0;};&::-webkit-scrollbar-thumb{background-Color:",";border-Radius:2rem;},"],(function(e){return e.theme.colors.secondaryText})),i=r.d.h2.withConfig({displayName:"components__Heading",componentId:"sc-1ydwq76-2"})(["height:37px;text-align:center;font-size:","px;color:",";font-weight:normal;"],(function(e){return e.theme.fontSizes[1]}),(function(e){return e.theme.colors.mainText})),a=r.d.p.withConfig({displayName:"components__HistoryExpression",componentId:"sc-1ydwq76-3"})(["padding:25px 0 15px 50px;font-size:","px;color:",";"],(function(e){return e.theme.fontSizes[2]}),(function(e){return e.theme.colors.mainText}))}}]);