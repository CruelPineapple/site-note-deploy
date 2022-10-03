(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{411:function(t,a,n){"use strict";n.r(a);var e=n(45),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),n("h2",{attrs:{id:"事件流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),n("p",[t._v("分为事件冒泡和事件捕获，事件冒泡中，事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点。事件捕获中相反，不具体的节点先接收到事件，具体的节点最后接收。\nDOM2级事件规定事件流包括三个阶段：事件捕获，处于目标阶段和事件冒泡阶段。首先发生事件捕获，此阶段实际目标元素不会接收到事件，接下来才是处于目标和冒泡阶段。")]),t._v(" "),n("h2",{attrs:{id:"事件处理程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件处理程序"}},[t._v("#")]),t._v(" 事件处理程序")]),t._v(" "),n("p",[t._v("事件处理程序以on开头，元素上设置的onclick处理程序有权调用全局作用域的任何方法，原理是使用with扩展了作用域。这样指定事件处理程序时，会创建一个封装了元素属性的函数，此函数拥有局部变量event，也就是事件对象。函数中，this值等于事件的目标元素，这样事件处理程序就能很方便的访问自己的属性。")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("通过js指定事件处理程序：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('var btn = document.getElementById("myBtn");\nbtn.onclick = function(){\n    alert(this.id);  // myBtn\n};\n\nbtn.onclick = null; //删除事件处理程序\n')])])]),n("p",[t._v("直接使用onclick，叫做DOM0级事件处理程序，而使用event Listener属于DOM2级事件处理程序\naddEventListener和removeEventListener这两个方法在所有DOM节点上都有，它们接收三个参数：要处理的事件名，事件处理函数和一个布尔值，布尔值为true表示在捕获阶段调用事件处理程序，false表示在冒泡阶段调用。主要好处是可以添加多个事件处理程序，会按照添加顺序触发。\n需要注意！addEventListener添加的事件处理程序只能用removeEventListener移除，但是，如果添加的时候使用了匿名函数，就没办法移除了。正确的例子：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('var btn = document.getElementById("myBtn");\nvar handler = function(){\n    alert(this.id);\n};\nbtn.addEventListener("click", handler, false);\n//\nbtn.removeEventListener("click", handler, false);\n')])])]),n("p",[t._v("IE还有一套事件处理程序，attachEvent和detachEvent，只侦测冒泡阶段，且第一个参数使用的是onclick而不是click")]),t._v(" "),n("h2",{attrs:{id:"事件对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件对象"}},[t._v("#")]),t._v(" 事件对象")]),t._v(" "),n("p",[t._v("包括许多属性，例如currentTarget记录了当前处理事件的元素，detail里有事件的细节信息（曾经在飞书小程序开发中用过）target记录事件的目标，type记录事件的类型等等：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('var btn = document.getElementById("myBtn");\nvar handler = function(event){\n    switch(event.type){\n        case "click":\n            alert("click");\n            break;\n        case "mouseover":\n            event.target.style.backgroundColor = "red";\n            break;\n        case "mouseout":\n            event.target.style.backgroundColor = "";\n            break;\n    }\n};\n\nbtn.addEventListener("click", handler, false);\nbtn.addEventListener("mouseover", handler, false);\nbtn.addEventListener("mouseout", handler, false);\n')])])]),n("p",[t._v("阻止事件的默认行为，可以使用preventDefault()方法，例如链接的默认行为就是跳转导航。只有cancelable属性为true的事件才可以使用preventDefault来取消默认行为。\nstopPropagation方法可以立即停止事件在DOM层次中传播，避免触发外层元素的事件处理程序\neventPhase属性可以确定事件当前位于事件流的那个阶段，1表示捕获阶段，2表示正在目标对象上，3表示冒泡阶段：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('var btn = document.getElementById("myBtn");\nbnt.onclick = function(event){\n    alert(eventPhase); //2\n};\ndocument.body.addEventListener("click", function(event){\n    alert(event.eventPhase); //1\n}, true);// tru表示在捕获阶段触发\ndocument.body.onclick = function(event){\n    alert(event.eventPhase); // 3\n};\n')])])]),n("h2",{attrs:{id:"事件类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件类型"}},[t._v("#")]),t._v(" 事件类型")]),t._v(" "),n("p",[t._v("DOM3级事件规定了如下几类：UI事件，焦点事件，鼠标事件，滚轮事件，文本事件，键盘事件，合成事件（输入法编辑器输入字符时），变动事件（底层DOM变动）\n顺便提一句EventUtil，这是跨浏览器事件对象，用于弥补IE和DOM的区别：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('var EventUtil = {\n    addHandler: function(element, type, handler){\n        if(element.addEventLiatener){\n            element.addEventListener(type, handler, false);\n        }else if(element.attachEvent){\n            element.attachEvent("on"+type, handler);\n        }else{\n            element["on"+type] = handler;\n        }\n    }\n\n    // 省略\n}\n')])])]),n("h3",{attrs:{id:"ui事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ui事件"}},[t._v("#")]),t._v(" UI事件")]),t._v(" "),n("p",[t._v("UI事件中包括load事件：在加载完成后触发，例如侦测图片加载：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('var image = document.getElementById("myImage");\nEventUtil.addHandler(image, "load", function(event){\n    event = EventUtil.getEvent(event);\n    alert(EventUtil.getTarget(event).src+"loaded");\n})\n')])])]),n("p",[t._v("unload事件，在切换到另一个页面的时候触发；resize事件，在窗口调整大小时触发；scroll事件，在窗口滚动时触发")]),t._v(" "),n("h3",{attrs:{id:"焦点事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#焦点事件"}},[t._v("#")]),t._v(" 焦点事件")]),t._v(" "),n("p",[t._v("blur事件，元素失去焦点时触发；focus在获得焦点时触发。\n上面两个事件都不会冒泡，所有浏览器支持，focusin和focusout部分浏览器支持，会冒泡")]),t._v(" "),n("h3",{attrs:{id:"鼠标和滚轮"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#鼠标和滚轮"}},[t._v("#")]),t._v(" 鼠标和滚轮")]),t._v(" "),n("p",[t._v("click事件，鼠标左键触发，回车也会触发；dbclick，左键双击；mousedown，按下鼠标任意按钮，mouseup，松开鼠标触发；mouseenter，鼠标进入；mouseleave，鼠标离开。\n鼠标事件的坐标在事件对象中有记录，client坐标是浏览器视口坐标，page坐标是页面坐标，screen是屏幕坐标。此外，是否按下了ctrl等特殊按键也会有相应布尔值记录，detail属性中包含更多信息\n在触摸设备中，不支持dbclick，按下屏幕会触发mousemove，若显示内容无变化，会再依次触发mousedown，mouseup和click，否则什么都不会发生。")]),t._v(" "),n("h3",{attrs:{id:"键盘和文本事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#键盘和文本事件"}},[t._v("#")]),t._v(" 键盘和文本事件")]),t._v(" "),n("p",[t._v("每个键都有对应键码\ntextInput事件，可以获取文本输入文本框的方式。在这里插入合成事件，比较冷门，某些语言的键盘通过按住多个键可以输入其他语言的字符")]),t._v(" "),n("h2",{attrs:{id:"一些h5事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一些h5事件"}},[t._v("#")]),t._v(" 一些h5事件")]),t._v(" "),n("p",[t._v("beforeunload事件，可以在页面卸载前提示用户：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("EventUtil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"beforeunload"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tevent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EventUtil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"going to reload"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnValue "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" message\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("DOMContentLoaded事件，在完整形成DOM树的时候就触发而不是像load事件那样，所有东西加载完才触发。")]),t._v(" "),n("p",[t._v("pageshow和pagehide是在后退和前进的时候，页面完全恢复或是消失的时候触发")]),t._v(" "),n("h3",{attrs:{id:"一些设备事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一些设备事件"}},[t._v("#")]),t._v(" 一些设备事件")]),t._v(" "),n("p",[t._v("比如设备角度还有运动状态啥的")]),t._v(" "),n("h3",{attrs:{id:"触摸事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#触摸事件"}},[t._v("#")]),t._v(" 触摸事件")]),t._v(" "),n("p",[t._v("移动端发生的事件，虽然不在DOM规定内，却是兼容DOM的。")]),t._v(" "),n("p",[t._v("touchstart：触摸屏幕时触发")]),t._v(" "),n("p",[t._v("touchmove：滑动时触发，此事件期间可以调用preventDevault组织滑动")]),t._v(" "),n("p",[t._v("touchend：手指离开屏幕")]),t._v(" "),n("h2",{attrs:{id:"事件委托"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),n("p",[t._v("避免过多的事件处理程序导致性能下降，利用事件冒泡，只通过一个事件处理程序来管理一类型的所有事件。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myLinks"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nEventUtil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \tevent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EventUtil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EventUtil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTarget")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  \t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doSth"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title changed"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        location"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx.xxx.xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("在移除具有事件的元素时，先移除它的事件处理程序以便释放内存")]),t._v(" "),n("h2",{attrs:{id:"模拟事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模拟事件"}},[t._v("#")]),t._v(" 模拟事件")]),t._v(" "),n("p",[t._v("通过createEvent模拟鼠标事件，它有15个参数，我认为具体使用时再查阅。此外，还有键盘事件的模拟")])])}),[],!1,null,null,null);a.default=s.exports}}]);