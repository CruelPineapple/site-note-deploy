(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{431:function(a,r,t){"use strict";t.r(r);var e=t(45),s=Object(e.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"数值转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数值转换"}},[a._v("#")]),a._v(" 数值转换")]),a._v(" "),t("p",[a._v("有三个函数可以将非数值转换为数值"),t("br"),a._v("\nNumber()可以处理任何数据类型，parseInt()和parseFloat()用于处理字符串。")]),a._v(" "),t("h2",{attrs:{id:"number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[a._v("#")]),a._v(" Number()")]),a._v(" "),t("p",[a._v("传入布尔值，true和false会分别被转换为1和0"),t("br"),a._v("\n传入数字值，将直接返回"),t("br"),a._v("\n传入null，将返回0"),t("br"),a._v("\n传入undefined，返回NaN"),t("br"),a._v("\n传入字符串，则按以下规则转换："),t("br"),a._v("\n只包含数字的字符串（包括前面带正负号的情况），返回对应的十进制数值（前导0将忽略）"),t("br"),a._v("\n有效的浮点格式，将返回对应的浮点值\n有效的十六进制格式，返回对应的十进制整数"),t("br"),a._v("\n空字符串，返回0"),t("br"),a._v("\n除上述情况以外，返回NaN")]),a._v(" "),t("h2",{attrs:{id:"parseint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parseint"}},[a._v("#")]),a._v(" parseInt()")]),a._v(" "),t("p",[a._v("会忽略字符串前面的空格，直到第一个非空格字符。如果第一个字符不是数字或者负号，就会返回NaN，否则继续解析第二个字符，直到全部解析完成或者遇到一个非数字字符，例如："),t("br"),a._v("\n“111hello”将转换为111，“2.5”会转换为2，因为小数点不是有效的数字字符"),t("br"),a._v("\n0x开头会被转换为十六进制整数，es5之后，无法自动解析八进制数值，因为前导0会被认为无效，即“070”会返回70而不是56"),t("br"),a._v("\n可以传入第二个参数指定进制，例如")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('parseInt("AF",16) //175\n')])])]),t("h2",{attrs:{id:"parsefloat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parsefloat"}},[a._v("#")]),a._v(" parseFloat()")]),a._v(" "),t("p",[a._v("类似parseInt()\n需要注意的是，第一个小数点会被正确解析，而第二个小数点就是无效的了，另外，此函数始终忽略前导0（它只解析十进制值）")])])}),[],!1,null,null,null);r.default=s.exports}}]);