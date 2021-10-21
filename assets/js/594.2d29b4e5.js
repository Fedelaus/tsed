(window.webpackJsonp=window.webpackJsonp||[]).push([[594],{1319:function(e,s,t){"use strict";t.r(s);var a=t(1),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"interface-os2schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interface-os2schema"}},[e._v("#")]),e._v(" Interface OS2Schema")]),e._v(" "),t("Badge",{attrs:{text:"Interface",type:"interface"}}),e._v(" "),t("section",{staticClass:"table-features"},[t("table",{staticClass:"is-full-width"},[t("tbody",[t("tr",[t("th",[e._v("Module")]),t("td",[t("div",{staticClass:"lang-typescript"},[t("span",{staticClass:"token keyword"},[e._v("import")]),e._v(" { OS2Schema } "),t("span",{staticClass:"token keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"token string"},[e._v('"@tsed/specs"')])])])]),t("tr",[t("th",[e._v("Source")]),t("td",[t("a",{attrs:{href:"https://github.com/tsedio/tsed/blob/v6.75.4/packages/specs/openspec/src/openspec2/OS2Schema.ts#L0-L0"}},[e._v("/packages/specs/openspec/src/openspec2/OS2Schema.ts")])])])])])]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("div",{staticClass:"language-typescript"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" OS2Schema "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("a",{pre:!0,attrs:{href:"/api/specs/openspec/common/OpenSpecJsonSchema.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecJsonSchema")])]),e._v("<OS2Schema> "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),t("div",{pre:!0,attrs:{class:"language- extra-class"}},[t("pre",[t("code",[e._v('discriminator?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nreadOnly?<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n\nxml?<span class="token punctuation">:</span> <a href="/api/specs/openspec/common/OpenSpecXML.html"><span class="token">OpenSpecXML</span></a><span class="token punctuation">;</span>\n\nexternalDocs?<span class="token punctuation">:</span> <a href="/api/specs/openspec/common/OpenSpecExternalDocs.html"><span class="token">OpenSpecExternalDocs</span></a><span class="token punctuation">;</span>\n')])])]),t("p",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[e._v("#")]),e._v(" Members")]),e._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("discriminator?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),t("p",[e._v("Adds support for polymorphism.\nThe discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it.")])]),t("hr"),e._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("readOnly?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),t("p",[e._v('Relevant only for Schema "properties" definitions. Declares the property as "read only". This means that it MAY be sent as part of a response but MUST NOT be sent as part of the request. Properties marked as readOnly being true SHOULD NOT be in the required list of the defined schema. Default value is false.')])]),t("hr"),e._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("xml?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("a",{pre:!0,attrs:{href:"/api/specs/openspec/common/OpenSpecXML.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecXML")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),t("p",[e._v("This MAY be used only on properties schemas. It has no effect on root schemas. Adds Additional metadata to describe the XML representation format of this property.")])]),t("hr"),e._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("externalDocs?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("a",{pre:!0,attrs:{href:"/api/specs/openspec/common/OpenSpecExternalDocs.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecExternalDocs")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),t("p",[e._v("Additional external documentation for this schema.")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);