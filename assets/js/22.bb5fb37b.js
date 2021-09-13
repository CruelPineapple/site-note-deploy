(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{377:function(t,a,n){"use strict";n.r(a);var e=n(45),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"模仿块级作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模仿块级作用域"}},[t._v("#")]),t._v(" 模仿块级作用域")]),t._v(" "),n("p",[t._v("js没有块级作用域的概念：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function foo(n){\n    for(let i = 0; i < n; i++){\n        alert(i);\n    }\n    var i; //重新声明i\n    alert(i);\n}\n")])])]),n("p",[t._v("像这样的情况，i并没有在for结束后被销毁。从i定义开始，函数内部便可访问它，即使重新声明i也不会改变它的值。遇到重复声明的情况，js会对后续声明视而不见（不过会执行后续声明的初始化内容）。匿名函数可以用来模仿块级作用域并避免这个问题：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("(function(){\n    //块级作用域\n})();\n")])])]),n("p",[t._v("上述代码定义并立即调用了一个匿名函数。将函数声明包含在一对圆括号中，表示它实际上是一个函数表达式，而后面的圆括号会立即调用这个函数。需要注意，函数声明后方不能使用括号进行立即调用，这是函数表达式的功能")])])}),[],!1,null,null,null);a.default=s.exports}}]);