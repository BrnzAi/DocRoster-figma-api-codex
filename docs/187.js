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







function LoginPageComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email and password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_p_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 6 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage());
  }
}
function LoginPageComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 33);
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
    this.submitted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.form = this.fb.nonNullable.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      remember: [false]
    });
  }
  submit() {
    if (this.form.invalid || this.status() === 'pending') {
      this.submitted.set(true);
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
    this.status.set('pending');
    this.auth.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.status.set('success');
        this.router.navigate(['/search']);
      },
      error: () => {
        this.status.set('error');
      }
    });
  }
  isEmailInvalid() {
    const control = this.form.controls.email;
    return control.invalid && (control.dirty || control.touched || this.submitted());
  }
  isPasswordInvalid() {
    const control = this.form.controls.password;
    return control.invalid && (control.dirty || control.touched || this.submitted());
  }
  showValidationErrors() {
    return this.submitted() && this.form.invalid;
  }
  openRecovery() {
    this.router.navigate(['/auth/recover']);
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
      decls: 38,
      vars: 14,
      consts: [[1, "auth", "auth--login"], [1, "auth__frame"], ["src", "assets/figma/login/background-large.png", "alt", "", "aria-hidden", "true", 1, "auth__frame-bg"], [1, "auth__card"], ["aria-hidden", "true", 1, "auth__card-map"], ["type", "button", "aria-label", "Sign in with Google", 1, "auth__provider", "auth__provider--google"], ["src", "assets/figma/login/google.png", "alt", "", 1, "auth__provider-icon"], [1, "auth__provider-label"], ["type", "button", "aria-label", "Sign in with Apple", 1, "auth__provider", "auth__provider--apple"], ["src", "assets/figma/login/apple.png", "alt", "", 1, "auth__provider-icon"], ["aria-hidden", "true", 1, "auth__divider"], [1, "auth__divider-line", "auth__divider-line--left"], [1, "auth__divider-label"], [1, "auth__divider-line", "auth__divider-line--right"], ["novalidate", "", 1, "auth__form", 3, "ngSubmit", "formGroup"], ["class", "auth__form-error", 4, "ngIf"], [1, "auth__field", "auth__field--email"], ["type", "email", "formControlName", "email", "placeholder", "Email address", "autocomplete", "email", "aria-describedby", "auth-email-error"], [1, "auth__field", "auth__field--password"], ["type", "password", "formControlName", "password", "placeholder", "Password", "autocomplete", "current-password", "aria-describedby", "auth-password-error"], ["type", "button", "aria-label", "Forgot password?", 1, "auth__field-help", 3, "click"], ["src", "assets/figma/login/help.png", "alt", ""], ["type", "submit", 1, "auth__submit", 3, "disabled"], ["id", "auth-email-error", "class", "auth__field-message", 4, "ngIf"], ["id", "auth-password-error", "class", "auth__field-message auth__field-message--password", 4, "ngIf"], ["class", "auth__form-status auth__form-status--error", 4, "ngIf"], ["class", "auth__form-status auth__form-status--success", 4, "ngIf"], [1, "auth__footnote"], ["routerLink", "/auth/register"], [1, "auth__form-error"], ["id", "auth-email-error", 1, "auth__field-message"], ["id", "auth-password-error", 1, "auth__field-message", "auth__field-message--password"], [1, "auth__form-status", "auth__form-status--error"], [1, "auth__form-status", "auth__form-status--success"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_18_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginPageComponent_p_19_Template, 2, 0, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_24_listener() {
            return ctx.openRecovery();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 22)(27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LoginPageComponent_p_29_Template, 2, 0, "p", 23)(30, LoginPageComponent_p_30_Template, 2, 0, "p", 24)(31, LoginPageComponent_p_31_Template, 2, 1, "p", 25)(32, LoginPageComponent_p_32_Template, 2, 0, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 27)(34, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Does not have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Register now!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showValidationErrors());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("auth__field--invalid", ctx.isEmailInvalid());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-invalid", ctx.isEmailInvalid());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("auth__field--invalid", ctx.isPasswordInvalid());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-invalid", ctx.isPasswordInvalid());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.status() === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.status() === "pending" ? "Signing in\u2026" : "Sign in to DocRoster");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmailInvalid());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPasswordInvalid());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "error");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "success");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".auth--login[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  background: #f1f1f1;\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  overflow: auto;\n}\n\n.auth__frame[_ngcontent-%COMP%] {\n  position: relative;\n  width: 1048px;\n  height: 752px;\n  border-radius: 13px;\n  overflow: hidden;\n  background: #f1f1f1;\n}\n\n.auth__frame-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.auth__card[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 328px;\n  top: 84px;\n  width: 393px;\n  height: 585px;\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  backdrop-filter: blur(24px);\n}\n\n.auth__card-map[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 68px;\n  top: 44px;\n  width: 258px;\n  height: 160px;\n  background-image: url('background-card.png');\n  background-size: cover;\n  background-position: center;\n}\n\n.auth__provider[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  width: 168.5px;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgb(0, 0, 0);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  line-height: 22.4px;\n  cursor: pointer;\n}\n.auth__provider--google[_ngcontent-%COMP%] {\n  left: 24px;\n  top: 248px;\n}\n.auth__provider--apple[_ngcontent-%COMP%] {\n  left: 200.5px;\n  top: 248px;\n}\n.auth__provider[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  outline-offset: 3px;\n}\n\n.auth__provider-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.auth__provider-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n\n.auth__divider-line[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 1px;\n  background-color: rgb(10, 23, 72);\n}\n.auth__divider-line--left[_ngcontent-%COMP%] {\n  left: 24px;\n  top: 328.5px;\n  width: 146.5px;\n}\n.auth__divider-line--right[_ngcontent-%COMP%] {\n  left: 222.5px;\n  top: 328.5px;\n  width: 146.5px;\n}\n\n.auth__divider-label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 186.5px;\n  top: 318px;\n  width: 20px;\n  height: 22px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.408px;\n  line-height: 22.4px;\n  color: rgb(10, 23, 72);\n  text-align: center;\n}\n\n.auth__form[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 364px;\n  width: 345px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.auth__form-error[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: -0.2px;\n  color: #ff3d00;\n}\n\n.auth__field[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(10, 23, 72, 0.05);\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 13px 16px;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  line-height: 21.6px;\n  color: rgb(10, 23, 72);\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(10, 23, 72, 0.6);\n}\n.auth__field--invalid[_ngcontent-%COMP%] {\n  border-color: rgba(255, 61, 0, 0.5);\n  box-shadow: 0 0 0 2px rgba(255, 61, 0, 0.15);\n}\n\n.auth__field-help[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 12px;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n.auth__field-help[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.auth__field-help[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  border-radius: 50%;\n}\n\n.auth__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgba(10, 23, 72, 0.8);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  line-height: 22.4px;\n  cursor: pointer;\n}\n.auth__submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.auth__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.auth__field-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  letter-spacing: -0.2px;\n  color: #ff3d00;\n}\n.auth__field-message--password[_ngcontent-%COMP%] {\n  margin-top: -4px;\n}\n\n.auth__form-status[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  letter-spacing: -0.2px;\n  font-weight: 600;\n}\n.auth__form-status--error[_ngcontent-%COMP%] {\n  color: #ff3d00;\n}\n.auth__form-status--success[_ngcontent-%COMP%] {\n  color: #21b128;\n}\n\n.auth__footnote[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 69.5px;\n  top: 546px;\n  width: 254px;\n  height: 15px;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: -0.408px;\n  line-height: 15.4px;\n  color: rgb(10, 23, 72);\n}\n.auth__footnote[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: underline;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwySEFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkJBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTEY7QUFPRTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBTEo7QUFRRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBTko7QUFTRTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUkY7O0FBV0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FyR2M7QUE2RmhCO0FBVUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFSSjtBQVdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBVEo7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBOUhjO0VBK0hkLGtCQUFBO0FBVkY7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFWRjs7QUFhQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNDeklhO0FEK0hmOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBMUptQjtFQTJKbkIsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFWRjtBQVlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBM0tZO0FBaUtoQjtBQVlJO0VBQ0UsNEJBQUE7QUFWTjtBQWNFO0VBQ0UsbUNBQUE7RUFDQSw0Q0FBQTtBQVpKOztBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBYkY7QUFlRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBYko7QUFnQkU7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0FBZEo7O0FBa0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWZGO0FBaUJFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQWZKO0FBa0JFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBaEJKOztBQW9CQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ2xPYTtBRGlOZjtBQW1CRTtFQUNFLGdCQUFBO0FBakJKOztBQXFCQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWxCRjtBQW9CRTtFQUNFLGNDaFBXO0FEOE5mO0FBcUJFO0VBQ0UsY0N0UFk7QURtT2hCOztBQXVCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBN1FjO0FBeVBoQjtBQXNCRTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFwQkoiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuXG4kZmlnbWEtcHJpbWFyeTogcmdiYSgxMCwgMjMsIDcyLCAxKTtcbiRmaWdtYS1wcmltYXJ5LXNvZnQ6IHJnYmEoMTAsIDIzLCA3MiwgMC4wNSk7XG4kZmlnbWEtZGl2aWRlcjogcmdiYSgxMCwgMjMsIDcyLCAxKTtcblxuLmF1dGgtLWxvZ2luIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBmb250LWZhbWlseTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uYXV0aF9fZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDQ4cHg7XG4gIGhlaWdodDogNzUycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi5hdXRoX19mcmFtZS1iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYXV0aF9fY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzI4cHg7XG4gIHRvcDogODRweDtcbiAgd2lkdGg6IDM5M3B4O1xuICBoZWlnaHQ6IDU4NXB4O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICBib3gtc2hhZG93OiAwIDQwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjRweCk7XG59XG5cbi5hdXRoX19jYXJkLW1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjhweDtcbiAgdG9wOiA0NHB4O1xuICB3aWR0aDogMjU4cHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ZpZ21hL2xvZ2luL2JhY2tncm91bmQtY2FyZC5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uYXV0aF9fcHJvdmlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHdpZHRoOiAxNjguNXB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQwOHB4O1xuICBsaW5lLWhlaWdodDogMjIuNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJi0tZ29vZ2xlIHtcbiAgICBsZWZ0OiAyNHB4O1xuICAgIHRvcDogMjQ4cHg7XG4gIH1cblxuICAmLS1hcHBsZSB7XG4gICAgbGVmdDogMjAwLjVweDtcbiAgICB0b3A6IDI0OHB4O1xuICB9XG5cbiAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgMC40KTtcbiAgICBvdXRsaW5lLW9mZnNldDogM3B4O1xuICB9XG59XG5cbi5hdXRoX19wcm92aWRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmF1dGhfX3Byb3ZpZGVyLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hdXRoX19kaXZpZGVyLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlnbWEtZGl2aWRlcjtcblxuICAmLS1sZWZ0IHtcbiAgICBsZWZ0OiAyNHB4O1xuICAgIHRvcDogMzI4LjVweDtcbiAgICB3aWR0aDogMTQ2LjVweDtcbiAgfVxuXG4gICYtLXJpZ2h0IHtcbiAgICBsZWZ0OiAyMjIuNXB4O1xuICAgIHRvcDogMzI4LjVweDtcbiAgICB3aWR0aDogMTQ2LjVweDtcbiAgfVxufVxuXG4uYXV0aF9fZGl2aWRlci1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTg2LjVweDtcbiAgdG9wOiAzMThweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMi40cHg7XG4gIGNvbG9yOiAkZmlnbWEtZGl2aWRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXV0aF9fZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjRweDtcbiAgdG9wOiAzNjRweDtcbiAgd2lkdGg6IDM0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLmF1dGhfX2Zvcm0tZXJyb3Ige1xuICBtYXJnaW46IDAgMCA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgY29sb3I6ICRjb2xvci1kYW5nZXI7XG59XG5cbi5hdXRoX19maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogJGZpZ21hLXByaW1hcnktc29mdDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAxM3B4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICBsaW5lLWhlaWdodDogMjEuNnB4O1xuICAgIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjYpO1xuICAgIH1cbiAgfVxuXG4gICYtLWludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgkY29sb3ItZGFuZ2VyLCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKCRjb2xvci1kYW5nZXIsIDAuMTUpO1xuICB9XG59XG5cbi5hdXRoX19maWVsZC1oZWxwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgdG9wOiAxMnB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4uYXV0aF9fc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAyMywgNzIsIDAuOCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgbGluZS1oZWlnaHQ6IDIyLjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxufVxuXG4uYXV0aF9fZmllbGQtbWVzc2FnZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICBjb2xvcjogJGNvbG9yLWRhbmdlcjtcblxuICAmLS1wYXNzd29yZCB7XG4gICAgbWFyZ2luLXRvcDogLTRweDtcbiAgfVxufVxuXG4uYXV0aF9fZm9ybS1zdGF0dXMge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAmLS1lcnJvciB7XG4gICAgY29sb3I6ICRjb2xvci1kYW5nZXI7XG4gIH1cblxuICAmLS1zdWNjZXNzIHtcbiAgICBjb2xvcjogJGNvbG9yLXN1Y2Nlc3M7XG4gIH1cbn1cblxuLmF1dGhfX2Zvb3Rub3RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2OS41cHg7XG4gIHRvcDogNTQ2cHg7XG4gIHdpZHRoOiAyNTRweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQwOHB4O1xuICBsaW5lLWhlaWdodDogMTUuNHB4O1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG5cbiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG4iLCIkY29sb3ItcHJpbWFyeTogIzNkN2FmZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMxZTNhOGE7XG4kY29sb3Itc2Vjb25kYXJ5OiAjMjFiMTI4O1xuJGNvbG9yLWFjY2VudDogI2ZmM2Q5NjtcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZjVmNmZmO1xuJGNvbG9yLXN1cmZhY2U6ICNmZmZmZmY7XG4kY29sb3Itc3VyZmFjZS1hbHQ6ICNlZWYxZmY7XG4kY29sb3ItdGV4dDogIzBhMTc0ODtcbiRjb2xvci10ZXh0LW11dGVkOiAjNmQ3YmExO1xuJGNvbG9yLWJvcmRlcjogI2Q1ZGNmMDtcbiRjb2xvci1zdWNjZXNzOiAjMjFiMTI4O1xuJGNvbG9yLXdhcm5pbmc6ICNmZjU3M2Q7XG4kY29sb3ItZGFuZ2VyOiAjZmYzZDAwO1xuJHJhZGl1cy14bDogMjRweDtcbiRyYWRpdXMtbGc6IDE2cHg7XG4kcmFkaXVzLW1kOiAxMnB4O1xuJHJhZGl1cy1zbTogOHB4O1xuJHNwYWNpbmcteHM6IDAuNXJlbTtcbiRzcGFjaW5nLXNtOiAwLjc1cmVtO1xuJHNwYWNpbmctbWQ6IDFyZW07XG4kc3BhY2luZy1sZzogMS41cmVtO1xuJHNwYWNpbmcteGw6IDJyZW07XG4kc3BhY2luZy14eGw6IDNyZW07XG4kc2hhZG93LXNvZnQ6IDAgMjBweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4kc2hhZG93LWNhcmQ6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG4kdHJhbnNpdGlvbi1iYXNlOiAxODBtcyBlYXNlLWluLW91dDtcbiRmb250LWZhbWlseS1iYXNlOiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIERpc3BsYXknLCAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiRtYXgtY29udGVudC13aWR0aDogMTE4MHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=187.js.map