(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{400:function(t,e,s){"use strict";s.r(e);var a=s(45),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"组合式api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组合式api"}},[t._v("#")]),t._v(" 组合式API")]),t._v(" "),s("p",[t._v("在vue中，方法都堆在methods里面，数据在data里面，另外还有computed和watch选项，每个生命周期方法也都是单独的。对于小型组件来说，直接在选项中填入逻辑十分方便，然而一旦组件变得稍微大一些，所有的逻辑方法都堆在methods中会让维护和理解变得困难，调试和阅读的过程中不得不多次跨过大段的无关代码。")]),t._v(" "),s("p",[t._v("组合式API就是来解决这个问题的。我不打算在这篇过多地记组合式API怎么用，更多地关注它带来的变化。")]),t._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" setup")]),t._v(" "),s("p",[t._v("一旦props被解析，setup就会成为组合式API的入口（在beforeCreate触发之前就调用setup），在setup内，this不会被绑定到组件实例。setup是一个接受props和context的函数，它的返回值们可以在组件的其他地方被使用。")]),t._v(" "),s("p",[t._v("setup就是用来将组件的逻辑初始化好，就不用都堆在methods里面了，各个功能还能有机会独立出来，或是被抽取成更小的模块方便复用，也减少了setup中的代码数量。")]),t._v(" "),s("p",[t._v("文档的结尾回答了一句话：使用setup正是把所有代码都移动到它里面并把它变得非常大，但是我认为这样的合并是有助于把一些逻辑抽离出来的，它们可以被变成更小的js模块，更容易被复用了。")]),t._v(" "),s("p",[t._v("但是也不是所有情况都应该使用组合式API，如果只是单纯的把原本的代码堆进setup反而会更难阅读。")]),t._v(" "),s("p",[t._v("个人感觉组合式API会比较适合我，因为ASD这个项目让我感觉，我设计组件的能力还是比较弱的（数据流来流去太难顶了）很容易弄出一个中型组件来，使用组合式API能够帮助我分离一些逻辑，调试起来也会更加方便。还有就是生命周期方法直接可以在setup中设置回调。主要是没有实际用过，都是空谈。")]),t._v(" "),s("p",[t._v("还有一些查到的特性，虽然不是我自己的理解，但好歹跟组合式API是相关的。setup里面不使用this，方便了类型推断，简化了生命周期。")]),t._v(" "),s("h2",{attrs:{id:"ref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),s("p",[t._v("因为不用data了，就需要手动指定响应式数据（就是监听数据变化，通知watcher）。reactive方法同样实现这个功能，但是本质稍有不同。ref对基本类型使用的话就会把基本类型包装成一个响应式的对象，reactive就是对对象使用的。")]),t._v(" "),s("h2",{attrs:{id:"torefs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#torefs"}},[t._v("#")]),t._v(" toRefs")]),t._v(" "),s("p",[t._v("解构赋值一个响应式的对象会破坏内部的响应性。对这个响应式对象使用toRefs包装起来就没有问题了。")])])}),[],!1,null,null,null);e.default=r.exports}}]);