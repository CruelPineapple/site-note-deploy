(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(t,a,r){"use strict";r.r(a);var e=r(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"array-unshift-实现可选picker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#array-unshift-实现可选picker"}},[t._v("#")]),t._v(" Array.unshift()实现可选picker")]),t._v(" "),r("p",[t._v("最近在开发字节小程序的时候涉及到许多multipicker选择器，也就是多列picker。这些选择器大多需要后台传输选项内容。但是，"),r("strong",[t._v("picker似乎没有缺省值")]),t._v("，也就是说，没有一个空值选项。当然我们可以通过给picker控制的index数组赋一个值来代表缺省值，然而每当用户不小心点到了picker，缺省值就会被替换为picker选中的值。此时用户是无法选择一个空选项的。")]),t._v(" "),r("h4",{attrs:{id:"看看我是怎么做的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#看看我是怎么做的"}},[t._v("#")]),t._v(" 看看我是怎么做的")]),t._v(" "),r("p",[t._v("首先接收到后台传入的picker选项数组：")]),t._v(" "),r("p",[t._v("叫final是因为之前还有一个去除json转义的步骤，网上抄的，使用eval完成字符串到对象的转换：")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("微信小程序不支持eval()，转换还需另想办法"),r("br"),t._v("\n最新发现：飞书小程序也不支持（只是调试工具恰巧能运行eval）")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("            let row=res.data.data;\n            let reg=/\\\\/g;\n            let replaced=row.replace(reg,'');\n            //console.log(replaced);\n            //console.log('final',eval('(' + replaced + ')'));\n            let finalArr=eval('(' + replaced + ')');\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v(" finalArr = [\n\t['第一列第一个', '第一列第二个'],//0\n  \t[// 1\n\t\t['第一列第一个的第二列第一个', '第一列第一个的第二列第二个'],\n\t\t['第一列第二个的第二列第一个'，‘第一列第二个的第二列第二个]\n  ],\n];\n")])])]),r("p",[t._v("然后生成picker显示默认值的数组：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("            let dataArr=[];\n            dataArr[0]=finalArr[0];\n            dataArr[1]=finalArr[1][0];\n         //   dataArr=[\n         //\t\t['第一列第一个', '第一列第二个'],\n         //\t\t['第一列第一个的第二列第一个', '第一列第一个的第二列第二个']\n         // ]\n")])])]),r("p",[t._v("接下来复制一份dataArr（因为必选的picker可以直接使用dataArr，而我们做的处理都是为了可选的picker），并使用Array.unshift()在数组头部添加元素。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('            let dataArr1=JSON.parse(JSON.stringify(dataArr));\n            dataArr1[0].unshift("可选");\n            dataArr1[1]=[];\n')])])]),r("p",[t._v("这时候picker的默认显示数组变成了：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("            dataArr=[\n         \t\t['可选','第一列第一个', '第一列第二个'],\n         \t\t[]\n          \t]\n")])])]),r("p",[t._v("同样的方法处理picker的完整选项数组：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("            let finalArr1=JSON.parse(JSON.stringify(finalArr));\n            finalArr1[0].unshift(\"可选\");\n            finalArr1[1].unshift([]);\n        //  finalArr = [\n\t\t//\t\t\t['可选','第一列第一个', '第一列第二个'],//0\n  \t\t//\t\t[// 1\n  \t\t//\t\t\t[],\n\t\t//\t\t\t['第一列第一个的第二列第一个', '第一列第一个的第二列第二个'],\n\t\t//\t\t\t['第一列第二个的第二列第一个'，‘第一列第二个的第二列第二个]\n  \t\t//\t\t],\n\t\t//\t];\n")])])]),r("p",[t._v("这时候picker默认的时候就会处于一个可选的状态了，之后获取到picker的值传输给后台前，将pickerValue数组的第一个元素减去1即是原始picker数据的对应index。")])])}),[],!1,null,null,null);a.default=n.exports}}]);