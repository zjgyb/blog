(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{643:function(t,e,a){"use strict";a.r(e);var n=a(4),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[t._v("#")]),t._v(" 来源")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js技术揭秘"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"前置知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[t._v("#")]),t._v(" 前置知识")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("Flow")]),t._v("-Vue2.x类型检查工具")]),t._v(" "),a("li",[t._v("类型检查的两种方式：类型推断和类型注释")])]),t._v(" "),a("p",[t._v("Runtime Only 和Runtime + Compiler")]),t._v(" "),a("ol",[a("li",[t._v("Runtime Only需要借助webpack把.vue文件编译成JavaScript")]),t._v(" "),a("li",[t._v("Runtime + Compiler，没有做预编译时需要渲染时编译")])]),t._v(" "),a("h2",{attrs:{id:"virtual-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[t._v("#")]),t._v(" Virtual DOM")]),t._v(" "),a("p",[t._v("问题：频繁操作DOM会有一定的性能问题")]),t._v(" "),a("p",[t._v("用一个原生的JS对象去描述一个DOM节点比创建一个DOM代价小，Vue中用VNode描述Virtual DOM")]),t._v(" "),a("p",[t._v("映射到真实DOM还要经历"),a("code",[t._v("VNode")]),t._v("的create、diff、patch等过程")]),t._v(" "),a("h2",{attrs:{id:"数据驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动"}},[t._v("#")]),t._v(" 数据驱动")]),t._v(" "),a("p",[t._v("目的：弄清楚模板和数据如何渲染成最终的 DOM。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("所谓数据驱动，是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作DOM，而是通过修改数据。")])]),a("p",[t._v("new Vue发生的事情")]),t._v(" "),a("ol",[a("li",[t._v("调用"),a("code",[t._v("this._init")]),t._v("方法，其中干了几件事：合并配置"),a("code",[t._v("mergeOptions")]),t._v("、初始化生命周期"),a("code",[t._v("initLifecycle")]),t._v("、初始化事件"),a("code",[t._v("initEvents")]),t._v("、初始化渲染"),a("code",[t._v("initRender")]),t._v("、初始化data、props、computed、watcher。")])]),t._v(" "),a("p",[t._v("调用$mount方法")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("$mount方法实现功能")])]),t._v(" "),a("ul",[a("li",[t._v("对"),a("code",[t._v("el")]),t._v("做了限制，不能挂载在body、html根节点（由于会对原有元素进行替换，缺少了body或者html标签造成结构体不完整，不符合规范）")]),t._v(" "),a("li",[t._v("如果没有定义"),a("code",[t._v("render")]),t._v("方法，则会把"),a("code",[t._v("el")]),t._v("或者"),a("code",[t._v("template")]),t._v("字符串转成"),a("code",[t._v("render")])]),t._v(" "),a("li",[t._v("调用原先原型上的"),a("code",[t._v("$mount")]),t._v("方法挂载，调用"),a("code",[t._v("mountComponent")])])]),t._v(" "),a("p",[t._v("mountComponent")]),t._v(" "),a("ul",[a("li",[t._v("先实例化一个渲染"),a("code",[t._v("Watcher")]),t._v("：初始化时执行回调函数、当vm实例中数据变化时执行回调函数。回调函数为：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("_render()")])]),t._v(" "),a("p",[t._v("执行createElement方法并返回vnode")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("createElement")])]),t._v(" "),a("p",[t._v("对_createElement的封装")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("_createElement")])]),t._v(" "),a("p",[t._v("函数参数:")]),t._v(" "),a("ul",[a("li",[t._v("context: VNode的上下文")]),t._v(" "),a("li",[t._v("tag: 标签")]),t._v(" "),a("li",[t._v("data: VNode数据")]),t._v(" "),a("li",[t._v("children: 当前VNode的子节点")]),t._v(" "),a("li",[t._v("normalizationType: 子节点规范的类型（编译生成还是用户手写）")])]),t._v(" "),a("p",[t._v("children的规范化："),a("code",[t._v("normalizeChildren(children)")]),t._v("(render函数编译生成)和"),a("code",[t._v("simpleNormalizeChildren(children)")])]),t._v(" "),a("p",[t._v("simpleNormalizeChildren: 由于"),a("code",[t._v("functional component")]),t._v("返回的是一个数组")]),t._v(" "),a("p",[t._v("normalizeChildren: render函数用户手写同时children只有一个节点，则创建createTextVNode；当编译"),a("code",[t._v("slot")]),t._v("、"),a("code",[t._v("v-for")]),t._v("时调用"),a("code",[t._v("normalizeArrayChildren")])]),t._v(" "),a("p",[t._v("VNode创建")]),t._v(" "),a("ul",[a("li",[t._v("判断tag是否为内置节点，如果是，则创建一个普通的VNode")]),t._v(" "),a("li",[t._v("如果是已注册的组件名，则通过"),a("code",[t._v("createComponent")]),t._v("创建一个组件类型的VNode")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("update")])]),t._v(" "),a("ul",[a("li",[t._v("首次渲染调用或数据更新调用")])]),t._v(" "),a("ol",[a("li",[t._v("核心是调用"),a("code",[t._v("vm.__patch__")]),t._v("方法，浏览器端把VNode转成DOM使用了"),a("code",[t._v("patch")]),t._v("方法")]),t._v(" "),a("li",[a("code",[t._v("patch")]),t._v("方法调用了"),a("code",[t._v("createPathFunction")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// params: 旧的VNode节点（可以不存在或者一个DOM对象）、_render后返回的VNode节点、hydrating-是否是服务端渲染、给transition-group使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" removeOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])}),[],!1,null,null,null);e.default=s.exports}}]);