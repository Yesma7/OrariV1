"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_orari_Register_vue"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orari/Register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orari/Register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = "http://localhost:8000/";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  user: {},
  data: function data() {
    return {
      form: {
        name_first: "",
        name_last: "",
        position: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/sanctum/csrf-cookie').then(function () {
        axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/register', _this.form).then(function (response) {
          console.log(response.data.msg);
        });
      });
      console.log('Register', this.form);
    }
  }
}); //Validador Contraseñas

$(document).ready(function () {
  //Contraseña segura
  $('#txtPassword').keyup(function () {
    $('#strengthMessage').html(checkStrength($('#txtPassword').val()));
  });

  function checkStrength(password) {
    var strength = 0;

    if (password.length < 6) {
      $('#strengthMessage').removeClass();
      $('#strengthMessage').addClass('Short');
      return 'Muy cortita, un poco más';
    }

    if (password.length > 7) strength += 1; // If password contains both lower and uppercase characters, increase strength value.

    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1; // If it has numbers and characters, increase strength value.

    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1; // If it has one special character, increase strength value.

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1; // If it has two special characters, increase strength value.

    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1; // Calculated strength value, we can return messages
    // If value is less than 2

    if (strength < 2) {
      $('#strengthMessage').removeClass();
      $('#strengthMessage').addClass('Weak');
      return 'Algo debil, más por favor';
    } else if (strength == 2) {
      $('#strengthMessage').removeClass();
      $('#strengthMessage').addClass('Good');
      return 'Está bién, puede ser mejor';
    } else {
      $('#strengthMessage').removeClass();
      $('#strengthMessage').addClass('Strong');
      return 'Perfecta!';
    }
  }

  var cambioDePass = function cambioDePass() {
    var cont = $('#txtPassword').val();
    var cont2 = $('#txtPasswordConfirm').val();

    if (cont == cont2) {
      $('#equalMessage').removeClass();
      $('#equalMessage').addClass('equal');
      $('#equalMessage').html('Genial, son iguales');
    } else {
      $('#equalMessage').removeClass();
      $('#equalMessage').addClass('noEqual');
      $('#equalMessage').html('Ops, no son iguales');
    }
  }; //$("#txtPassword").on('keyup', cambioDePass);


  $("#txtPasswordConfirm").on('keyup', cambioDePass);
});

/***/ }),

/***/ "./resources/js/components/orari/Register.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/orari/Register.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_6dc45688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=6dc45688& */ "./resources/js/components/orari/Register.vue?vue&type=template&id=6dc45688&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/orari/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_6dc45688___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_6dc45688___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/orari/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/orari/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/orari/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orari/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/orari/Register.vue?vue&type=template&id=6dc45688&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/orari/Register.vue?vue&type=template&id=6dc45688& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_6dc45688___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_6dc45688___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_6dc45688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=6dc45688& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orari/Register.vue?vue&type=template&id=6dc45688&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orari/Register.vue?vue&type=template&id=6dc45688&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/orari/Register.vue?vue&type=template&id=6dc45688& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "register-box" }, [
    _c(
      "div",
      { staticClass: "card card-outline card-primary col col-sm-8 centrar" },
      [
        _c(
          "div",
          { staticClass: "card-header text-center" },
          [
            _c(
              "router-link",
              {
                staticClass: "h1",
                attrs: { "exact-active-class": "active", to: "/" },
              },
              [_c("b", [_vm._v("Ora")]), _vm._v("ri")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("p", { staticClass: "login-box-msg" }, [_vm._v("Registrate")]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.register.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name_first,
                        expression: "form.name_first",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Nombres" },
                    domProps: { value: _vm.form.name_first },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name_first", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm._m(0),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name_last,
                        expression: "form.name_last",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Apellidos" },
                    domProps: { value: _vm.form.name_last },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name_last", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm._m(1),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.position,
                        expression: "form.position",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Cargo" },
                    domProps: { value: _vm.form.position },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "position", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm._m(2),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "email", placeholder: "Email" },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm._m(3),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("div", { staticClass: "input-group mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password,
                          expression: "form.password",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "txtPassword",
                        type: "password",
                        placeholder: "Contraseña",
                      },
                      domProps: { value: _vm.form.password },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "password", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm._m(4),
                  ]),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "strengthMessage" } }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("div", { staticClass: "input-group mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password_confirmation,
                          expression: "form.password_confirmation",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "txtPasswordConfirm",
                        type: "password",
                        placeholder: "Confirma la contraseña",
                      },
                      domProps: { value: _vm.form.password_confirmation },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "password_confirmation",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm._m(5),
                  ]),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "equalMessage" } }),
                ]),
                _vm._v(" "),
                _vm._m(6),
              ]
            ),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "text-center",
                attrs: { "exact-active-class": "active", to: "/login" },
              },
              [_vm._v("Ya estás registrado? Inicia sesión aquí")]
            ),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-user" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-user" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-user" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-envelope" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-lock" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("span", { staticClass: "fas fa-lock" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-4" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-block",
            attrs: { type: "submit" },
          },
          [_vm._v("Registrarse")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "social-auth-links text-center" }, [
      _c(
        "a",
        { staticClass: "btn btn-block btn-primary", attrs: { href: "#" } },
        [
          _c("i", { staticClass: "fab fa-facebook mr-2" }),
          _vm._v("\n          Sign up using Facebook\n        "),
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "btn btn-block btn-danger", attrs: { href: "#" } },
        [
          _c("i", { staticClass: "fab fa-google-plus mr-2" }),
          _vm._v("\n          Sign up using Google+\n        "),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);