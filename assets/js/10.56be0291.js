(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{366:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("p",[t._v("同步任务会按照顺序进入执行栈，执行完毕后出栈：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",[a("li",[t._v("a函数入栈")]),t._v(" "),a("li",[t._v("a中的b入栈")]),t._v(" "),a("li",[t._v("执行b，console.log('b')入栈")]),t._v(" "),a("li",[t._v("输出b，console.log('b')出栈")]),t._v(" "),a("li",[t._v("b执行完毕，出栈")]),t._v(" "),a("li",[t._v("console.log('a')入栈，输出a，出栈")]),t._v(" "),a("li",[t._v("a执行完毕，出栈")])]),t._v(" "),a("h2",{attrs:{id:"事件队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件队列"}},[t._v("#")]),t._v(" 事件队列")]),t._v(" "),a("p",[t._v("遇到异步任务后，会将异步任务挂起（其它Api接管，如计时器，监听器等），继续执行执行栈的任务。异步任务的返回结果会进入事件队列，等到执行栈空了，主线程空闲下来，就会去事件队列里面按顺序把它们的回调放入执行栈。从事件队列取得任务并执行的过程就是一次事件循环，事件循环将任务区分为宏任务和微任务。")]),t._v(" "),a("h2",{attrs:{id:"宏任务和微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务和微任务"}},[t._v("#")]),t._v(" 宏任务和微任务")]),t._v(" "),a("p",[t._v("就是说，各种任务还是有轻重缓急的，所以还是得分两种队列，一个放微任务，它们会在一个事件循环中优先于宏任务执行，另一个就是宏任务队列。")]),t._v(" "),a("p",[t._v("宏任务有：setTimeout  setInterval  postMessage  xmlHttpRequest  I/O  UI交互事件（DOM事件）")]),t._v(" "),a("p",[t._v("微任务有：Promise.then()回调  MutationObserver")]),t._v(" "),a("h2",{attrs:{id:"事件循环-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环-2"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("p",[t._v("根据异步事件的类型，它们会进入不同的队列。")]),t._v(" "),a("p",[t._v("当执行栈空时，主线程会查看微任务队列是否有事件，")]),t._v(" "),a("ul",[a("li",[t._v("如果存在，依次执行队列中的事件回调，直到清空微任务队列，然后去宏任务队列取出最前面的事件回调加入调用栈")]),t._v(" "),a("li",[t._v("如果不存在，那就直接去宏任务队列取出第一个事件的回调加入调用栈")])]),t._v(" "),a("p",[t._v("执行栈被执行完毕后会立刻处理所有微任务队列的事件，然后再去宏任务队列取出一个事件。同一个事件循环中，微任务永远在宏任务之前执行。")]),t._v(" "),a("p",[t._v("在事件循环中，每一次循环被成为tick，每次tick的关键步骤如下：")]),t._v(" "),a("ul",[a("li",[t._v("执行一个宏任务（如果执行栈没有就从宏任务队列中取第一个）")]),t._v(" "),a("li",[t._v("执行过程中遇到微任务，就把它添加到微任务队列")]),t._v(" "),a("li",[t._v("宏任务执行完毕后，立刻执行微任务队列中的所有微任务（按进入顺序）")]),t._v(" "),a("li",[t._v("检查渲染，然后主线程去执行UI渲染工作（如果有）")]),t._v(" "),a("li",[t._v("执行下一个宏任务")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",[a("li",[t._v("全局代码入栈，执行console.log('start')")]),t._v(" "),a("li",[t._v("setTimeout设置的回调进入宏任务队列，Promise.then()进入微任务队列，最后执行console.log('end')")]),t._v(" "),a("li",[t._v("此时调用栈代码执行完毕，开始执行微任务队列，输出promise1，然后下一个then进入微任务队列，为了清空微任务队列，promise2也会被输出")]),t._v(" "),a("li",[t._v("这时候会执行UI渲染（如果需要）然后开始下一轮事件循环，执行宏任务队列内的setTimeout回调，输出setTimeout")])]),t._v(" "),a("p",[t._v("有一种说法，每个宏任务都单独关联一个微任务队列，而且还引入了层级的概念。我目前并不是特别认可，因为每个循环微任务队列都会被清空，执行了宏任务之后就该下一个循环了。这样理解感觉会更复杂。")]),t._v(" "),a("h2",{attrs:{id:"node的事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node的事件循环"}},[t._v("#")]),t._v(" node的事件循环")]),t._v(" "),a("p",[t._v("node的宏任务有：setImmediate  setTimeout  setInterval  script（整体代码）  I/O操作")]),t._v(" "),a("p",[t._v("微任务有：process.nextTick  Promise.then")]),t._v(" "),a("p",[t._v("循环内容也不太一样：")]),t._v(" "),a("ol",[a("li",[t._v("定时器检查阶段，setTimeout和setInterval回调")]),t._v(" "),a("li",[t._v("I/O回调")]),t._v(" "),a("li",[t._v("轮询，等待新的I/O，没有其它异步任务就会停在这个阶段")]),t._v(" "),a("li",[t._v("检查，setImmediate回调在这里执行")]),t._v(" "),a("li",[t._v("关闭事件回调，执行close事件的回调")])]),t._v(" "),a("p",[t._v("process.nextTick是一个独立队列，在每个循环阶段完成之后都会去检查这个队列，如果里面有任务，就会让它优先于微任务执行。")]),t._v(" "),a("h2",{attrs:{id:"三种推迟执行的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三种推迟执行的区别"}},[t._v("#")]),t._v(" 三种推迟执行的区别")]),t._v(" "),a("h3",{attrs:{id:"process-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick"}},[t._v("#")]),t._v(" process.nextTick")]),t._v(" "),a("p",[t._v("最快速的队列，比其它微任务还要优先。每一个阶段开始前都会检查nextTick队列，并把其中的任务全部执行完。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'listening'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("当listen方法被调用的时候，除非端口被占用，否则会立刻被绑定到对应的端口上，这时候端口已经可以触发listneing事件的回调了，但是on方法还没有设置好回调。为了避免这种情况，node会在listen事件中使用nextTick方法，确保事件触发的时候回调函数已经准备好了")]),t._v(" "),a("h3",{attrs:{id:"settimeout和setimmediate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout和setimmediate"}},[t._v("#")]),t._v(" setTimeout和setImmediate")]),t._v(" "),a("p",[t._v("同时设置立即执行的setTimeout和setImmediate是不能确定谁先执行的。但是在I/O回调中设置这两个，Immediate会首先执行，然后才是setTimeout")])])}),[],!1,null,null,null);s.default=e.exports}}]);