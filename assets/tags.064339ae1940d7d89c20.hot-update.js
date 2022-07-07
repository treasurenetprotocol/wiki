webpackHotUpdate("tags",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./client/components/tags.vue?vue&type=template&id=e0b8ed88&lang=pug&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./client/components/tags.vue?vue&type=template&id=e0b8ed88&lang=pug& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-app\",\n    { staticClass: \"tags\", attrs: { dark: _vm.$vuetify.theme.dark } },\n    [\n      _c(\"nav-header\"),\n      _c(\n        \"v-navigation-drawer\",\n        {\n          staticClass: \"pb-0 elevation-1\",\n          attrs: {\n            app: \"\",\n            fixed: \"\",\n            clipped: \"\",\n            right: _vm.$vuetify.rtl,\n            permanent: \"\",\n            width: \"256\",\n          },\n        },\n        [\n          _c(\n            \"vue-scroll\",\n            { attrs: { ops: _vm.scrollStyle } },\n            [\n              _c(\n                \"v-list\",\n                { attrs: { dense: \"\", nav: \"\" } },\n                [\n                  _c(\n                    \"v-list-item\",\n                    { attrs: { href: \"/\" } },\n                    [\n                      _c(\n                        \"v-list-item-icon\",\n                        [_c(\"v-icon\", [_vm._v(\"mdi-home\")])],\n                        1\n                      ),\n                      _c(\"v-list-item-title\", [\n                        _vm._v(_vm._s(_vm.$t(\"common:header.home\"))),\n                      ]),\n                    ],\n                    1\n                  ),\n                  _vm._l(_vm.tagsGrouped, function (tags, groupName) {\n                    return [\n                      _c(\"v-divider\", { staticClass: \"my-2\" }),\n                      _c(\n                        \"v-subheader\",\n                        { key: \"tagGroup-\" + groupName, staticClass: \"pl-4\" },\n                        [_vm._v(_vm._s(groupName))]\n                      ),\n                      _vm._l(tags, function (tag) {\n                        return _c(\n                          \"v-list-item\",\n                          {\n                            key: \"tag-\" + tag.tag,\n                            on: {\n                              click: function ($event) {\n                                return _vm.toggleTag(tag.tag)\n                              },\n                            },\n                          },\n                          [\n                            _c(\n                              \"v-list-item-icon\",\n                              [\n                                _vm.isSelected(tag.tag)\n                                  ? _c(\n                                      \"v-icon\",\n                                      { attrs: { color: \"primary\" } },\n                                      [_vm._v(\"mdi-checkbox-intermediate\")]\n                                    )\n                                  : _c(\"v-icon\", [\n                                      _vm._v(\"mdi-checkbox-blank-outline\"),\n                                    ]),\n                              ],\n                              1\n                            ),\n                            _c(\"v-list-item-title\", [\n                              _vm._v(_vm._s(tag.title)),\n                            ]),\n                          ],\n                          1\n                        )\n                      }),\n                    ]\n                  }),\n                ],\n                2\n              ),\n            ],\n            1\n          ),\n        ],\n        1\n      ),\n      _c(\n        \"v-content\",\n        {\n          staticClass: \"grey\",\n          class: _vm.$vuetify.theme.dark ? \"darken-4-d5\" : \"lighten-3\",\n        },\n        [\n          _c(\n            \"v-toolbar\",\n            { attrs: { color: \"primary\", dark: \"\", flat: \"\", height: \"58\" } },\n            [\n              _vm.selection.length > 0\n                ? [\n                    _c(\n                      \"div\",\n                      { staticClass: \"overline mr-3 animated fadeInLeft\" },\n                      [_vm._v(_vm._s(_vm.$t(\"tags:currentSelection\")))]\n                    ),\n                    _vm._l(_vm.tagsSelected, function (tag) {\n                      return _c(\n                        \"v-chip\",\n                        {\n                          key: \"tagSelected-\" + tag.tag,\n                          staticClass: \"mr-3 primary--text\",\n                          attrs: { color: \"white\", close: \"\" },\n                          on: {\n                            \"click:close\": function ($event) {\n                              return _vm.toggleTag(tag.tag)\n                            },\n                          },\n                        },\n                        [_vm._v(_vm._s(tag.title))]\n                      )\n                    }),\n                    _c(\"v-spacer\"),\n                    _c(\n                      \"v-btn\",\n                      {\n                        staticClass: \"animated fadeIn\",\n                        attrs: {\n                          small: \"\",\n                          outlined: \"\",\n                          color: \"blue lighten-4\",\n                          rounded: \"\",\n                        },\n                        on: {\n                          click: function ($event) {\n                            _vm.selection = []\n                          },\n                        },\n                      },\n                      [\n                        _c(\"v-icon\", { attrs: { left: \"\" } }, [\n                          _vm._v(\"mdi-close\"),\n                        ]),\n                        _c(\"span\", [\n                          _vm._v(_vm._s(_vm.$t(\"tags:clearSelection\"))),\n                        ]),\n                      ],\n                      1\n                    ),\n                  ]\n                : [\n                    _c(\"v-icon\", { staticClass: \"mr-3 animated fadeInRight\" }, [\n                      _vm._v(\"mdi-arrow-left\"),\n                    ]),\n                    _c(\n                      \"div\",\n                      { staticClass: \"overline animated fadeInRight\" },\n                      [_vm._v(_vm._s(_vm.$t(\"tags:selectOneMoreTags\")))]\n                    ),\n                  ],\n            ],\n            2\n          ),\n          _c(\n            \"v-toolbar\",\n            {\n              attrs: {\n                color: _vm.$vuetify.theme.dark\n                  ? \"grey darken-4-l5\"\n                  : \"grey lighten-4\",\n                flat: \"\",\n                height: \"58\",\n              },\n            },\n            [\n              _c(\"v-text-field\", {\n                staticClass: \"tags-search\",\n                attrs: {\n                  label: _vm.$t(\"tags:searchWithinResultsPlaceholder\"),\n                  solo: \"\",\n                  \"hide-details\": \"\",\n                  flat: \"\",\n                  rounded: \"\",\n                  \"single-line\": \"\",\n                  height: \"40\",\n                  \"prepend-icon\": \"mdi-text-box-search-outline\",\n                  \"append-icon\": \"mdi-arrow-right\",\n                  clearable: \"\",\n                },\n                model: {\n                  value: _vm.innerSearch,\n                  callback: function ($$v) {\n                    _vm.innerSearch = $$v\n                  },\n                  expression: \"innerSearch\",\n                },\n              }),\n              _vm.locales.length > 1\n                ? [\n                    _c(\"v-divider\", {\n                      staticClass: \"mx-3\",\n                      attrs: { vertical: \"\" },\n                    }),\n                    _c(\"div\", { staticClass: \"overline\" }, [\n                      _vm._v(_vm._s(_vm.$t(\"tags:locale\"))),\n                    ]),\n                    _c(\"v-select\", {\n                      staticClass: \"ml-2\",\n                      staticStyle: { \"max-width\": \"170px\" },\n                      attrs: {\n                        items: _vm.locales,\n                        \"background-color\": _vm.$vuetify.theme.dark\n                          ? \"grey darken-3\"\n                          : \"white\",\n                        \"hide-details\": \"\",\n                        label: _vm.$t(\"tags:locale\"),\n                        \"item-text\": \"name\",\n                        \"item-value\": \"code\",\n                        rounded: \"\",\n                        \"single-line\": \"\",\n                        dense: \"\",\n                        height: \"40\",\n                      },\n                      model: {\n                        value: _vm.locale,\n                        callback: function ($$v) {\n                          _vm.locale = $$v\n                        },\n                        expression: \"locale\",\n                      },\n                    }),\n                  ]\n                : _vm._e(),\n              _c(\"v-divider\", { staticClass: \"mx-3\", attrs: { vertical: \"\" } }),\n              _c(\"div\", { staticClass: \"overline\" }, [\n                _vm._v(_vm._s(_vm.$t(\"tags:orderBy\"))),\n              ]),\n              _c(\"v-select\", {\n                staticClass: \"ml-2\",\n                staticStyle: { \"max-width\": \"250px\" },\n                attrs: {\n                  items: _vm.orderByItems,\n                  \"background-color\": _vm.$vuetify.theme.dark\n                    ? \"grey darken-3\"\n                    : \"white\",\n                  \"hide-details\": \"\",\n                  label: _vm.$t(\"tags:orderBy\"),\n                  rounded: \"\",\n                  \"single-line\": \"\",\n                  dense: \"\",\n                  height: \"40\",\n                },\n                model: {\n                  value: _vm.orderBy,\n                  callback: function ($$v) {\n                    _vm.orderBy = $$v\n                  },\n                  expression: \"orderBy\",\n                },\n              }),\n              _c(\n                \"v-btn-toggle\",\n                {\n                  staticClass: \"ml-2\",\n                  attrs: { rounded: \"\", mandatory: \"\" },\n                  model: {\n                    value: _vm.orderByDirection,\n                    callback: function ($$v) {\n                      _vm.orderByDirection = $$v\n                    },\n                    expression: \"orderByDirection\",\n                  },\n                },\n                [\n                  _c(\n                    \"v-btn\",\n                    { attrs: { text: \"\", height: \"40\" } },\n                    [\n                      _c(\"v-icon\", { attrs: { size: \"20\" } }, [\n                        _vm._v(\"mdi-chevron-double-up\"),\n                      ]),\n                    ],\n                    1\n                  ),\n                  _c(\n                    \"v-btn\",\n                    { attrs: { text: \"\", height: \"40\" } },\n                    [\n                      _c(\"v-icon\", { attrs: { size: \"20\" } }, [\n                        _vm._v(\"mdi-chevron-double-down\"),\n                      ]),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n            ],\n            2\n          ),\n          _c(\"v-divider\"),\n          _vm.selection.length < 1\n            ? _c(\"div\", { staticClass: \"text-center pt-10\" }, [\n                _c(\"img\", {\n                  attrs: { src: \"/_assets/svg/icon-price-tag.svg\" },\n                }),\n                _c(\"div\", { staticClass: \"subtitle-2 grey--text\" }, [\n                  _vm._v(_vm._s(_vm.$t(\"tags:selectOneMoreTagsHint\"))),\n                ]),\n              ])\n            : _c(\n                \"div\",\n                { staticClass: \"px-5 py-2\" },\n                [\n                  _c(\"v-data-iterator\", {\n                    ref: \"dude\",\n                    attrs: {\n                      items: _vm.pages,\n                      \"items-per-page\": 4,\n                      search: _vm.innerSearch,\n                      loading: _vm.isLoading,\n                      options: _vm.pagination,\n                      \"hide-default-footer\": \"\",\n                    },\n                    on: {\n                      \"update:options\": function ($event) {\n                        _vm.pagination = $event\n                      },\n                    },\n                    scopedSlots: _vm._u([\n                      {\n                        key: \"loading\",\n                        fn: function () {\n                          return [\n                            _c(\n                              \"div\",\n                              { staticClass: \"text-center pt-10\" },\n                              [\n                                _c(\"v-progress-circular\", {\n                                  attrs: {\n                                    indeterminate: \"\",\n                                    color: \"primary\",\n                                    size: \"96\",\n                                    width: \"2\",\n                                  },\n                                }),\n                                _c(\n                                  \"div\",\n                                  { staticClass: \"subtitle-2 grey--text mt-5\" },\n                                  [\n                                    _vm._v(\n                                      _vm._s(\n                                        _vm.$t(\"tags:retrievingResultsLoading\")\n                                      )\n                                    ),\n                                  ]\n                                ),\n                              ],\n                              1\n                            ),\n                          ]\n                        },\n                        proxy: true,\n                      },\n                      {\n                        key: \"no-data\",\n                        fn: function () {\n                          return [\n                            _c(\"div\", { staticClass: \"text-center pt-10\" }, [\n                              _c(\"img\", {\n                                attrs: { src: \"/_assets/svg/icon-info.svg\" },\n                              }),\n                              _c(\n                                \"div\",\n                                { staticClass: \"subtitle-2 grey--text\" },\n                                [_vm._v(_vm._s(_vm.$t(\"tags:noResults\")))]\n                              ),\n                            ]),\n                          ]\n                        },\n                        proxy: true,\n                      },\n                      {\n                        key: \"no-results\",\n                        fn: function () {\n                          return [\n                            _c(\"div\", { staticClass: \"text-center pt-10\" }, [\n                              _c(\"img\", {\n                                attrs: { src: \"/_assets/svg/icon-info.svg\" },\n                              }),\n                              _c(\n                                \"div\",\n                                { staticClass: \"subtitle-2 grey--text\" },\n                                [\n                                  _vm._v(\n                                    _vm._s(_vm.$t(\"tags:noResultsWithFilter\"))\n                                  ),\n                                ]\n                              ),\n                            ]),\n                          ]\n                        },\n                        proxy: true,\n                      },\n                      {\n                        key: \"default\",\n                        fn: function (props) {\n                          return [\n                            _c(\n                              \"v-row\",\n                              { attrs: { align: \"stretch\" } },\n                              _vm._l(props.items, function (item) {\n                                return _c(\n                                  \"v-col\",\n                                  {\n                                    key: \"page-\" + item.id,\n                                    attrs: { cols: \"12\", lg: \"6\" },\n                                  },\n                                  [\n                                    _c(\n                                      \"v-card\",\n                                      {\n                                        staticClass: \"radius-7\",\n                                        class: _vm.$vuetify.theme.dark\n                                          ? \"grey darken-4\"\n                                          : \"\",\n                                        staticStyle: { height: \"100%\" },\n                                        on: {\n                                          click: function ($event) {\n                                            return _vm.goTo(item)\n                                          },\n                                        },\n                                      },\n                                      [\n                                        _c(\n                                          \"v-card-text\",\n                                          [\n                                            _c(\n                                              \"div\",\n                                              {\n                                                staticClass:\n                                                  \"d-flex flex-row align-center\",\n                                              },\n                                              [\n                                                _c(\n                                                  \"div\",\n                                                  { staticClass: \"body-1\" },\n                                                  [\n                                                    _c(\n                                                      \"strong\",\n                                                      {\n                                                        staticClass:\n                                                          \"primary--text\",\n                                                      },\n                                                      [\n                                                        _vm._v(\n                                                          _vm._s(item.title)\n                                                        ),\n                                                      ]\n                                                    ),\n                                                  ]\n                                                ),\n                                                _c(\"v-spacer\"),\n                                                _c(\n                                                  \"i18next\",\n                                                  {\n                                                    staticClass: \"caption\",\n                                                    attrs: {\n                                                      tag: \"div\",\n                                                      path: \"tags:pageLastUpdated\",\n                                                    },\n                                                  },\n                                                  [\n                                                    _c(\n                                                      \"span\",\n                                                      {\n                                                        attrs: {\n                                                          place: \"date\",\n                                                        },\n                                                      },\n                                                      [\n                                                        _vm._v(\n                                                          _vm._s(\n                                                            _vm._f(\"moment\")(\n                                                              item.updatedAt,\n                                                              \"from\"\n                                                            )\n                                                          )\n                                                        ),\n                                                      ]\n                                                    ),\n                                                  ]\n                                                ),\n                                              ],\n                                              1\n                                            ),\n                                            _c(\n                                              \"div\",\n                                              {\n                                                staticClass:\n                                                  \"body-2 grey--text\",\n                                              },\n                                              [\n                                                _vm._v(\n                                                  _vm._s(\n                                                    item.description || \"---\"\n                                                  )\n                                                ),\n                                              ]\n                                            ),\n                                            _c(\"v-divider\", {\n                                              staticClass: \"my-2\",\n                                            }),\n                                            _c(\n                                              \"div\",\n                                              {\n                                                staticClass:\n                                                  \"d-flex flex-row align-center\",\n                                              },\n                                              [\n                                                _c(\n                                                  \"v-chip\",\n                                                  {\n                                                    staticClass: \"overline\",\n                                                    attrs: {\n                                                      small: \"\",\n                                                      label: \"\",\n                                                      color: _vm.$vuetify.theme\n                                                        .dark\n                                                        ? \"grey darken-3-l5\"\n                                                        : \"grey lighten-4\",\n                                                    },\n                                                  },\n                                                  [_vm._v(_vm._s(item.locale))]\n                                                ),\n                                                _c(\n                                                  \"div\",\n                                                  {\n                                                    staticClass: \"caption ml-1\",\n                                                  },\n                                                  [\n                                                    _vm._v(\n                                                      \"/ \" + _vm._s(item.path)\n                                                    ),\n                                                  ]\n                                                ),\n                                              ],\n                                              1\n                                            ),\n                                          ],\n                                          1\n                                        ),\n                                      ],\n                                      1\n                                    ),\n                                  ],\n                                  1\n                                )\n                              }),\n                              1\n                            ),\n                          ]\n                        },\n                      },\n                    ]),\n                  }),\n                  this.pageTotal > 1\n                    ? _c(\n                        \"div\",\n                        { staticClass: \"text-center py-2 animated fadeInDown\" },\n                        [\n                          _c(\"v-pagination\", {\n                            attrs: { length: _vm.pageTotal },\n                            model: {\n                              value: _vm.pagination.page,\n                              callback: function ($$v) {\n                                _vm.$set(_vm.pagination, \"page\", $$v)\n                              },\n                              expression: \"pagination.page\",\n                            },\n                          }),\n                        ],\n                        1\n                      )\n                    : _vm._e(),\n                ],\n                1\n              ),\n        ],\n        1\n      ),\n      _c(\"nav-footer\"),\n      _c(\"notify\"),\n      _c(\"search-results\"),\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./client/components/tags.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})