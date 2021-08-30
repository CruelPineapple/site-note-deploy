(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{378:function(e,t,a){"use strict";a.r(t);var s=a(45),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"创建对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建对象"}},[e._v("#")]),e._v(" 创建对象")]),e._v(" "),a("p",[e._v("由于使用Object构造函数和字面量创建多个对象时，会存在许多重复的工作，因此首先想到的是使用类似工厂模式的方法")]),e._v(" "),a("h2",{attrs:{id:"工厂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[e._v("#")]),e._v(" 工厂模式")]),e._v(" "),a("p",[e._v("通过函数来批量创建对象")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('function createPerson(name, age, job){\n    let o = new Object();\n    o.name = name;\n    o.age = age;\n    o.job = job;\n    o.sayName = function(){\n        alert(this.name);\n    };\n    return o;\n}\n\nlet person1 = createPerson("Nicholas", 29, "Software Engineer");\nlet person2 = createPerson("Gerg", 27, "Doctor");\n')])])]),a("p",[e._v("工厂模式解决了批量创建对象的问题，但是却没有解决对象识别的问题")]),e._v(" "),a("h2",{attrs:{id:"构造函数模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数模式"}},[e._v("#")]),e._v(" 构造函数模式")]),e._v(" "),a("p",[e._v("构造函数与普通函数完全相同。通过new调用的函数会被作为构造函数运行。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('function Person(name, age, job){\n    this.name = name;\n    this.age = age;\n    this.job = job;\n    this.sayName = function(){\n        alert(this.name);\n    };\n}\n\nlet person1 = new Person("Nicholas", 29, "Software Engineer");\nlet person2 = new Person("Gerg", 27, "Doctor");\n')])])]),a("p",[e._v("实际上，使用new操作符调用构造函数将会执行如下步骤：")]),e._v(" "),a("ol",[a("li",[e._v("创建一个新的对象")]),e._v(" "),a("li",[e._v("将构造函数的作用域赋给新对象")]),e._v(" "),a("li",[e._v("执行构造函数中的代码")]),e._v(" "),a("li",[e._v("返回这个对象\n最后，person1和person2拥有了一个constructor属性，指向Person"),a("br"),e._v("\n这样一来，person1和person2就是Person的实例了，使用instanceof可以验证"),a("br"),e._v("\n但是构造函数也有一点问题，例如本例person1和person2，都分别单独实现了sayName方法——它们是不同的function实例。为了避免这个问题，可以把方法定义在构造函数的外面：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function Person(name, age, job){\n    this.name = name;\n    this.age = age;\n    this.job = job;\n    this.sayName = sayName;\n}\n\nfunction sayName(){\n    alert(this.name);\n}\n")])])]),a("p",[e._v("很明显感到不适，因为这样会导致全局环境充满构造函数的方法从而变得一团糟，接下来看看原型模式")]),e._v(" "),a("h2",{attrs:{id:"原型模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型模式"}},[e._v("#")]),e._v(" 原型模式")]),e._v(" "),a("p",[e._v("每个函数都有一个prototype属性，指向一个对象，这个对象的用途是保存所有创建实例共享的属性和方法，即每个被构造函数创建的对象的原型对象。这时候就不必在构造函数中定义重复的可复用内容，而是在原型对象中定义。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function Person(name, age, job){\n    this.name = name;\n    this.age = age;\n    this.job = job;\n}\nPerson.prototype.sayName = function(){\n    alert(this.name);\n}\n")])])]),a("p",[e._v("这时候通过Person创建的多个对象中，每个对象调用的sayName都会是同一个函数。")]),e._v(" "),a("h3",{attrs:{id:"原型对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型对象"}},[e._v("#")]),e._v(" 原型对象")]),e._v(" "),a("p",[e._v("每当创建了一个函数，就会为其创建一个prototype属性，指向函数的原型对象。所有原型对象会自动获得一个constructor属性，它保存着指向prototype属性所在函数的指针，在上面的例子中，Person.prorotype.constructor指向了Person。原型对象的其他方法是从Object继承来的。使用构造函数创建的实例会保存指向原型对象的指针[ prototype ]。")]),e._v(" "),a("h4",{attrs:{id:"isprototypeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isprototypeof"}},[e._v("#")]),e._v(" isPrototypeOf()")]),e._v(" "),a("p",[e._v("上言道，prototype从Object继承了方法，isPrototypeOf()就是其中之一，当实例保存的[ prototype ]指向了调用这个方法的原型对象，那么就会返回true：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Person.prototype.isPrototypeOf(person1); //true\nPerson.prototype.isPrototypeOf(person2); //true\n")])])]),a("p",[e._v("ES5新增方法Object.getPrototypeOf()，可以返回实例的[ prototype ]，也就是它的原型对象。")]),e._v(" "),a("h4",{attrs:{id:"读取属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取属性"}},[e._v("#")]),e._v(" 读取属性")]),e._v(" "),a("p",[e._v("在对象读取属性时，会按照自身到原型的顺序搜索。实例中的同名属性会屏蔽原型中的该属性，因为实例是优先搜索的。使用delete操作符删除实例中的属性后，该实例才可使用到原型中的同名属性。")]),e._v(" "),a("h4",{attrs:{id:"hasownproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hasownproperty"}},[e._v("#")]),e._v(" hasOwnProperty()")]),e._v(" "),a("p",[e._v("与isPrototypeOf()同继承于Object，它可以检测属性是存在实例中还是原型对象中。在给定属性存在于对象实例中时返回true：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('person1.hasOwnProperty("sayName"); //false\nperson1.hasOwnProperty("name"); //true\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);