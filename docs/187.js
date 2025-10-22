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







function LoginPageComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email and password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 6 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_p_32_Template(rf, ctx) {
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
function LoginPageComponent_p_33_Template(rf, ctx) {
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
      decls: 39,
      vars: 14,
      consts: [[1, "auth", "auth--login"], [1, "auth__frame"], ["src", "assets/figma/login/background-large.png", "alt", "", "aria-hidden", "true", 1, "auth__frame-bg"], [1, "auth__card"], ["aria-hidden", "true", 1, "auth__card-map"], [1, "auth__providers"], ["type", "button", "aria-label", "Sign in with Google", 1, "auth__provider"], ["src", "assets/figma/login/google.png", "alt", "", 1, "auth__provider-icon"], [1, "auth__provider-label"], ["type", "button", "aria-label", "Sign in with Apple", 1, "auth__provider"], ["src", "assets/figma/login/apple.png", "alt", "", 1, "auth__provider-icon"], ["aria-hidden", "true", 1, "auth__divider"], [1, "auth__divider-line"], [1, "auth__divider-label"], ["novalidate", "", 1, "auth__form", 3, "ngSubmit", "formGroup"], ["class", "auth__form-error", 4, "ngIf"], [1, "auth__field", "auth__field--email"], ["type", "email", "formControlName", "email", "placeholder", "Email address", "autocomplete", "email", "aria-describedby", "auth-email-error"], [1, "auth__field", "auth__field--password"], ["type", "password", "formControlName", "password", "placeholder", "Password", "autocomplete", "current-password", "aria-describedby", "auth-password-error"], ["type", "button", "aria-label", "Forgot password?", 1, "auth__field-help", 3, "click"], ["src", "assets/figma/login/help.png", "alt", ""], ["type", "submit", 1, "auth__submit", 3, "disabled"], ["id", "auth-email-error", "class", "auth__field-message", 4, "ngIf"], ["id", "auth-password-error", "class", "auth__field-message auth__field-message--password", 4, "ngIf"], ["class", "auth__form-status auth__form-status--error", 4, "ngIf"], ["class", "auth__form-status auth__form-status--success", 4, "ngIf"], [1, "auth__footnote"], ["routerLink", "/auth/register"], [1, "auth__form-error"], ["id", "auth-email-error", 1, "auth__field-message"], ["id", "auth-password-error", 1, "auth__field-message", "auth__field-message--password"], [1, "auth__form-status", "auth__form-status--error"], [1, "auth__form-status", "auth__form-status--success"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_19_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginPageComponent_p_20_Template, 2, 0, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_25_listener() {
            return ctx.openRecovery();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 22)(28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LoginPageComponent_p_30_Template, 2, 0, "p", 23)(31, LoginPageComponent_p_31_Template, 2, 0, "p", 24)(32, LoginPageComponent_p_32_Template, 2, 1, "p", 25)(33, LoginPageComponent_p_33_Template, 2, 0, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 27)(35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Don\u2019t have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Register now");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
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
      styles: [".auth--login[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(16px, 4vw, 32px);\n  background: url('background-large.png') center/cover no-repeat fixed;\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  overflow-y: auto;\n}\n\n.auth__frame[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 1048px);\n  border-radius: 24px;\n  overflow: visible;\n  display: flex;\n  justify-content: center;\n  padding: clamp(32px, 6vw, 48px);\n  background: rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(28px);\n}\n\n.auth__frame-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.4;\n  z-index: -1;\n}\n\n.auth__card[_ngcontent-%COMP%] {\n  width: min(100%, 393px);\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.24);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(24px);\n  padding: 40px 24px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 24px;\n}\n\n.auth__card-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  border-radius: 24px;\n  background: url('background-card.png') center/cover no-repeat;\n}\n\n.auth__providers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n\n.auth__provider[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgb(0, 0, 0);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  line-height: 1.4;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.auth__provider[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: rgba(0, 0, 0, 0.92);\n}\n.auth__provider[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  outline-offset: 3px;\n}\n\n.auth__provider-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.auth__divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.auth__divider-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background-color: rgba(10, 23, 72, 0.6);\n}\n\n.auth__divider-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.408px;\n  color: rgba(10, 23, 72, 0.8);\n}\n\n.auth__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.auth__form-error[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: -0.2px;\n  color: #ff3d00;\n}\n\n.auth__field[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(10, 23, 72, 0.05);\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 13px 16px;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  line-height: 21.6px;\n  color: rgb(10, 23, 72);\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(10, 23, 72, 0.6);\n}\n.auth__field--invalid[_ngcontent-%COMP%] {\n  border-color: rgba(255, 61, 0, 0.5);\n  box-shadow: 0 0 0 2px rgba(255, 61, 0, 0.15);\n}\n\n.auth__field-help[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 12px;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n.auth__field-help[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.auth__field-help[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  border-radius: 50%;\n}\n\n.auth__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgba(10, 23, 72, 0.8);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  line-height: 22.4px;\n  cursor: pointer;\n}\n.auth__submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.auth__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.auth__field-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  letter-spacing: -0.2px;\n  color: #ff3d00;\n}\n.auth__field-message--password[_ngcontent-%COMP%] {\n  margin-top: -4px;\n}\n\n.auth__form-status[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  letter-spacing: -0.2px;\n  font-weight: 600;\n}\n.auth__form-status--error[_ngcontent-%COMP%] {\n  color: #ff3d00;\n}\n.auth__form-status--success[_ngcontent-%COMP%] {\n  color: #21b128;\n}\n\n.auth__footnote[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.2px;\n  line-height: 1.5;\n  color: rgb(10, 23, 72);\n  text-align: center;\n}\n.auth__footnote[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: underline;\n  opacity: 0.85;\n}\n.auth__footnote[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n@media (max-width: 640px) {\n  .auth__providers[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .auth__frame[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .auth__card[_ngcontent-%COMP%] {\n    padding: 32px 20px 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9FQUFBO0VBQ0EsMkhBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2REFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtBQUxGO0FBT0U7RUFDRSwyQkFBQTtFQUNBLCtCQUFBO0FBTEo7QUFRRTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBUEY7O0FBVUE7RUFDRSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ3RIYTtBRCtHZjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQXZJbUI7RUF3SW5CLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUEY7QUFTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQXhKWTtBQWlKaEI7QUFTSTtFQUNFLDRCQUFBO0FBUE47QUFXRTtFQUNFLG1DQUFBO0VBQ0EsNENBQUE7QUFUSjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBVkY7QUFZRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBVko7QUFhRTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFaRjtBQWNFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVpKO0FBZUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFiSjs7QUFpQkE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0MvTWE7QURpTWY7QUFnQkU7RUFDRSxnQkFBQTtBQWRKOztBQWtCQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWZGO0FBaUJFO0VBQ0UsY0M3Tlc7QUQ4TWY7QUFrQkU7RUFDRSxjQ25PWTtBRG1OaEI7O0FBb0JBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFyUGM7RUFzUGQsa0JBQUE7QUFqQkY7QUFtQkU7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FBakJKO0FBbUJJO0VBQ0UsVUFBQTtBQWpCTjs7QUFzQkE7RUFDRTtJQUNFLHNCQUFBO0VBbkJGO0VBc0JBO0lBQ0UsYUFBQTtFQXBCRjtFQXVCQTtJQUNFLHVCQUFBO0VBckJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuXG4kZmlnbWEtcHJpbWFyeTogcmdiYSgxMCwgMjMsIDcyLCAxKTtcbiRmaWdtYS1wcmltYXJ5LXNvZnQ6IHJnYmEoMTAsIDIzLCA3MiwgMC4wNSk7XG4kZmlnbWEtZGl2aWRlcjogcmdiYSgxMCwgMjMsIDcyLCAxKTtcblxuLmF1dGgtLWxvZ2luIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiBjbGFtcCgxNnB4LCA0dncsIDMycHgpO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9maWdtYS9sb2dpbi9iYWNrZ3JvdW5kLWxhcmdlLnBuZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQgZml4ZWQ7XG4gIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIERpc3BsYXknLCAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmF1dGhfX2ZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogbWluKDEwMCUsIDEwNDhweCk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogY2xhbXAoMzJweCwgNnZ3LCA0OHB4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI4cHgpO1xufVxuXG4uYXV0aF9fZnJhbWUtYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3BhY2l0eTogMC40O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmF1dGhfX2NhcmQge1xuICB3aWR0aDogbWluKDEwMCUsIDM5M3B4KTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgYm94LXNoYWRvdzogMCA0MHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI0cHgpO1xuICBwYWRkaW5nOiA0MHB4IDI0cHggMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGdhcDogMjRweDtcbn1cblxuLmF1dGhfX2NhcmQtbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ZpZ21hL2xvZ2luL2JhY2tncm91bmQtY2FyZC5wbmcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xufVxuXG4uYXV0aF9fcHJvdmlkZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hdXRoX19wcm92aWRlciB7XG4gIGZsZXg6IDEgMSAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkyKTtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNCk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDNweDtcbiAgfVxufVxuXG4uYXV0aF9fcHJvdmlkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5hdXRoX19kaXZpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYXV0aF9fZGl2aWRlci1saW5lIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGZpZ21hLWRpdmlkZXIsIDAuNik7XG59XG5cbi5hdXRoX19kaXZpZGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGNvbG9yOiByZ2JhKCRmaWdtYS1kaXZpZGVyLCAwLjgpO1xufVxuXG4uYXV0aF9fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLmF1dGhfX2Zvcm0tZXJyb3Ige1xuICBtYXJnaW46IDAgMCA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgY29sb3I6ICRjb2xvci1kYW5nZXI7XG59XG5cbi5hdXRoX19maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogJGZpZ21hLXByaW1hcnktc29mdDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAxM3B4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICBsaW5lLWhlaWdodDogMjEuNnB4O1xuICAgIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjYpO1xuICAgIH1cbiAgfVxuXG4gICYtLWludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgkY29sb3ItZGFuZ2VyLCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKCRjb2xvci1kYW5nZXIsIDAuMTUpO1xuICB9XG59XG5cbi5hdXRoX19maWVsZC1oZWxwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgdG9wOiAxMnB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4uYXV0aF9fc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAyMywgNzIsIDAuOCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgbGluZS1oZWlnaHQ6IDIyLjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxufVxuXG4uYXV0aF9fZmllbGQtbWVzc2FnZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICBjb2xvcjogJGNvbG9yLWRhbmdlcjtcblxuICAmLS1wYXNzd29yZCB7XG4gICAgbWFyZ2luLXRvcDogLTRweDtcbiAgfVxufVxuXG4uYXV0aF9fZm9ybS1zdGF0dXMge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAmLS1lcnJvciB7XG4gICAgY29sb3I6ICRjb2xvci1kYW5nZXI7XG4gIH1cblxuICAmLS1zdWNjZXNzIHtcbiAgICBjb2xvcjogJGNvbG9yLXN1Y2Nlc3M7XG4gIH1cbn1cblxuLmF1dGhfX2Zvb3Rub3RlIHtcbiAgbWFyZ2luOiA4cHggMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIG9wYWNpdHk6IDAuODU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuYXV0aF9fcHJvdmlkZXJzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmF1dGhfX2ZyYW1lIHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICB9XG5cbiAgLmF1dGhfX2NhcmQge1xuICAgIHBhZGRpbmc6IDMycHggMjBweCAyOHB4O1xuICB9XG59XG4iLCIkY29sb3ItcHJpbWFyeTogIzNkN2FmZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMxZTNhOGE7XG4kY29sb3Itc2Vjb25kYXJ5OiAjMjFiMTI4O1xuJGNvbG9yLWFjY2VudDogI2ZmM2Q5NjtcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZjVmNmZmO1xuJGNvbG9yLXN1cmZhY2U6ICNmZmZmZmY7XG4kY29sb3Itc3VyZmFjZS1hbHQ6ICNlZWYxZmY7XG4kY29sb3ItdGV4dDogIzBhMTc0ODtcbiRjb2xvci10ZXh0LW11dGVkOiAjNmQ3YmExO1xuJGNvbG9yLWJvcmRlcjogI2Q1ZGNmMDtcbiRjb2xvci1zdWNjZXNzOiAjMjFiMTI4O1xuJGNvbG9yLXdhcm5pbmc6ICNmZjU3M2Q7XG4kY29sb3ItZGFuZ2VyOiAjZmYzZDAwO1xuJHJhZGl1cy14bDogMjRweDtcbiRyYWRpdXMtbGc6IDE2cHg7XG4kcmFkaXVzLW1kOiAxMnB4O1xuJHJhZGl1cy1zbTogOHB4O1xuJHNwYWNpbmcteHM6IDAuNXJlbTtcbiRzcGFjaW5nLXNtOiAwLjc1cmVtO1xuJHNwYWNpbmctbWQ6IDFyZW07XG4kc3BhY2luZy1sZzogMS41cmVtO1xuJHNwYWNpbmcteGw6IDJyZW07XG4kc3BhY2luZy14eGw6IDNyZW07XG4kc2hhZG93LXNvZnQ6IDAgMjBweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4kc2hhZG93LWNhcmQ6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG4kdHJhbnNpdGlvbi1iYXNlOiAxODBtcyBlYXNlLWluLW91dDtcbiRmb250LWZhbWlseS1iYXNlOiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIERpc3BsYXknLCAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiRtYXgtY29udGVudC13aWR0aDogMTE4MHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=187.js.map