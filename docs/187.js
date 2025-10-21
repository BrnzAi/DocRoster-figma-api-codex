"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[187],{

/***/ 8187:
/*!*********************************************************!*\
  !*** ./src/app/feature/auth/ui/login-page.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageComponent: () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _data_access_auth_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-access/auth.facade */ 5990);







function LoginPageComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage());
  }
}
function LoginPageComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Signed in \u2014 redirecting\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class LoginPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_0__.AuthFacade);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.status = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('idle');
    this.errorMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.auth.lastError());
    this.form = this.fb.nonNullable.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      remember: [true]
    });
  }
  submit() {
    if (this.form.invalid || this.status() === 'pending') {
      return;
    }
    this.status.set('pending');
    this.auth.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.status.set('success');
        this.router.navigate(['/profile']);
      },
      error: () => {
        this.status.set('error');
      }
    });
  }
  static {
    this.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["dr-login-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 5,
      consts: [[1, "auth", "section"], [1, "container", "auth__container"], [1, "auth__lead"], [1, "auth__form", 3, "ngSubmit", "formGroup"], ["type", "email", "formControlName", "email", "placeholder", "you@example.com"], ["type", "password", "formControlName", "password", "placeholder", "Minimum 6 characters"], [1, "auth__remember"], ["type", "checkbox", "formControlName", "remember"], ["type", "submit", 1, "button", 3, "disabled"], ["class", "auth__error", 4, "ngIf"], ["class", "auth__success", 4, "ngIf"], [1, "auth__links"], ["routerLink", "/auth/recover"], ["routerLink", "/auth/register"], [1, "auth__error"], [1, "auth__success"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Welcome back to DocRoster");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign in to continue curating assessments, specialists and network pilots.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_6_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Email address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Remember me on this device ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginPageComponent_p_18_Template, 2, 1, "p", 9)(19, LoginPageComponent_p_19_Template, 2, 0, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Forgot password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Create an account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.status() === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.status() === "pending" ? "Signing in\u2026" : "Sign in", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "error");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "success");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".auth[_ngcontent-%COMP%] {\n  background: #f9fafc;\n}\n.auth__container[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0 auto;\n  display: grid;\n  gap: 1.5rem;\n  text-align: center;\n}\n.auth__lead[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.auth__form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  text-align: left;\n}\n.auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 600;\n}\n.auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  font-size: 1rem;\n}\n.auth__remember[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n}\n.auth__remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.auth__links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n.auth__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3552ff;\n  font-weight: 600;\n}\n.auth__error[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.auth__success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0drQjtBREpwQjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdDV1M7RURWVCxrQkFBQTtBQURKO0FBSUU7RUFDRSxjQ05lO0FESW5CO0FBS0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSEo7QUFLSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQUtNOzs7RUFHRSxxQkFBQTtFQUNBLG1CQ2hCSTtFRGlCSiwwQ0FBQTtFQUNBLGVBQUE7QUFIUjtBQVFFO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU5KO0FBUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU5OO0FBVUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQ2xDUztBRDBCYjtBQVVJO0VBQ0UsY0N4RFU7RUR5RFYsZ0JBQUE7QUFSTjtBQVlFO0VBQ0UsY0NsRFc7QUR3Q2Y7QUFhRTtFQUNFLGNDeERZO0FENkNoQiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3N0eWxlcy92YXJpYWJsZXMnIGFzICo7XG5cbi5hdXRoIHtcbiAgYmFja2dyb3VuZDogJGNvbG9yLXN1cmZhY2UtYWx0O1xuXG4gICZfX2NvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogJHNwYWNpbmctbGc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJl9fbGVhZCB7XG4gICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICB9XG5cbiAgJl9fZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6ICRzcGFjaW5nLW1kO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ2FwOiAwLjM1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgaW5wdXRbdHlwZT0nZW1haWwnXSxcbiAgICAgIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXG4gICAgICBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgICAgICBwYWRkaW5nOiAwLjg1cmVtIDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtbWQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLWJvcmRlciwgMC45KTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX3JlbWVtYmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2xpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogJHNwYWNpbmctbWQ7XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cbiAgJl9fZXJyb3Ige1xuICAgIGNvbG9yOiAkY29sb3ItZGFuZ2VyO1xuICB9XG5cbiAgJl9fc3VjY2VzcyB7XG4gICAgY29sb3I6ICRjb2xvci1zdWNjZXNzO1xuICB9XG59XG4iLCIkY29sb3ItcHJpbWFyeTogIzM1NTJmZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMxZjNiYjM7XG4kY29sb3Itc2Vjb25kYXJ5OiAjMTNjNGEzO1xuJGNvbG9yLWFjY2VudDogI2Y5NzMxNjtcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZjVmN2ZiO1xuJGNvbG9yLXN1cmZhY2U6ICNmZmZmZmY7XG4kY29sb3Itc3VyZmFjZS1hbHQ6ICNmOWZhZmM7XG4kY29sb3ItdGV4dDogIzExMTgyNztcbiRjb2xvci10ZXh0LW11dGVkOiAjNmI3MjgwO1xuJGNvbG9yLWJvcmRlcjogI2UyZThmMDtcbiRjb2xvci1zdWNjZXNzOiAjMTZhMzRhO1xuJGNvbG9yLXdhcm5pbmc6ICNmYWNjMTU7XG4kY29sb3ItZGFuZ2VyOiAjZGMyNjI2O1xuJHJhZGl1cy14bDogMjRweDtcbiRyYWRpdXMtbGc6IDE2cHg7XG4kcmFkaXVzLW1kOiAxMnB4O1xuJHJhZGl1cy1zbTogOHB4O1xuJHNwYWNpbmcteHM6IDAuNXJlbTtcbiRzcGFjaW5nLXNtOiAwLjc1cmVtO1xuJHNwYWNpbmctbWQ6IDFyZW07XG4kc3BhY2luZy1sZzogMS41cmVtO1xuJHNwYWNpbmcteGw6IDJyZW07XG4kc3BhY2luZy14eGw6IDNyZW07XG4kc2hhZG93LXNvZnQ6IDAgMjBweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4kc2hhZG93LWNhcmQ6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG4kdHJhbnNpdGlvbi1iYXNlOiAxODBtcyBlYXNlLWluLW91dDtcbiRmb250LWZhbWlseS1iYXNlOiAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiRtYXgtY29udGVudC13aWR0aDogMTE4MHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=187.js.map