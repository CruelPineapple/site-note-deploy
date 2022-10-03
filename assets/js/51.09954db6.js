(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{405:function(v,_,t){"use strict";t.r(_);var s=t(45),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[v._v("#")]),v._v(" 查询")]),v._v(" "),t("h2",{attrs:{id:"lhs和rhs查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lhs和rhs查询"}},[v._v("#")]),v._v(" LHS和RHS查询")]),v._v(" "),t("p",[v._v("LHS查找变量的容器，RHS查找变量的值")]),v._v(" "),t("p",[v._v("LHS的情形：")]),v._v(" "),t("ol",[t("li",[v._v("试图为一个变量赋值（查找赋值操作的容器）")]),v._v(" "),t("li",[v._v("获取函数的形式参数（只关心这个参数容器）")]),v._v(" "),t("li",[v._v("函数执行的时候将实际参数传给形式参数（隐式传值）")])]),v._v(" "),t("p",[v._v("RHS的情形：")]),v._v(" "),t("ol",[t("li",[v._v("取得变量的值")]),v._v(" "),t("li",[v._v("取得对象的引用")])]),v._v(" "),t("p",[v._v("LHS和RHS都是沿着作用域链查找")]),v._v(" "),t("p",[v._v("LHS找不到变量时，引擎会贴心地在全局环境创建这个变量（严格模式不会，而是抛出引用异常）；RHS找不到变量时会抛出引用错误，如果对RHS结果进行不合理的操作会抛出类型错误（例如试图对一个非函数类型进行函数调用）")]),v._v(" "),t("h2",{attrs:{id:"编译原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译原理"}},[v._v("#")]),v._v(" 编译原理")]),v._v(" "),t("p",[v._v("插入一点编译原理内容，大多数语言编译过程主要包含三步：词法分析，语法分析，代码生成。词法分析会将代码拆分成词法单元，语法分析会根据词法单元将代码生成AST抽象语法树，最后根据AST生成可执行代码。")]),v._v(" "),t("p",[v._v("JS引擎的编译比这要复杂，它包含特殊的步骤，例如在语法分析和代码生成阶段会有一些性能优化，包括对冗余元素的优化。JS的编译一般发生在执行前的几微秒，它使用JIT（及时编译）；JIT是提前编译和解释的结合，它是动态编译的一种形式，在理论上比静态编译能够产生更快的执行速度")]),v._v(" "),t("p",[v._v("需要关注的编译要点主要有这么几个：")]),v._v(" "),t("ol",[t("li",[v._v("声明会被提升，赋值不会")]),v._v(" "),t("li",[v._v("LHS创建全局变量")])])])}),[],!1,null,null,null);_.default=a.exports}}]);