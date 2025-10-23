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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _data_access_auth_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data-access/auth.facade */ 5990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







function LoginPageComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Please enter a valid email and password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Password must be at least 6 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.errorMessage());
  }
}
function LoginPageComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Signed in \u2014 redirecting\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class LoginPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_6__.AuthFacade);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.status = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('idle', ...(ngDevMode ? [{
      debugName: "status"
    }] : []));
    this.errorMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.auth.lastError(), ...(ngDevMode ? [{
      debugName: "errorMessage"
    }] : []));
    this.submitted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "submitted"
    }] : []));
    this.form = this.fb.nonNullable.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
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
  static #_ = _staticBlock = () => (this.ɵfac = function LoginPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginPageComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: LoginPageComponent,
    selectors: [["dr-login-page"]],
    decls: 39,
    vars: 14,
    consts: [[1, "auth", "auth--login"], [1, "auth__frame"], ["src", "assets/figma/login/background-large.png", "alt", "", "aria-hidden", "true", 1, "auth__frame-bg"], [1, "auth__card"], ["aria-hidden", "true", 1, "auth__card-map"], [1, "auth__providers"], ["type", "button", "aria-label", "Sign in with Google", 1, "auth__provider"], ["src", "assets/figma/login/google.png", "alt", "", 1, "auth__provider-icon"], [1, "auth__provider-label"], ["type", "button", "aria-label", "Sign in with Apple", 1, "auth__provider"], ["src", "assets/figma/login/apple.png", "alt", "", 1, "auth__provider-icon"], ["aria-hidden", "true", 1, "auth__divider"], [1, "auth__divider-line"], [1, "auth__divider-label"], ["novalidate", "", 1, "auth__form", 3, "ngSubmit", "formGroup"], ["class", "auth__form-error", 4, "ngIf"], [1, "auth__field", "auth__field--email"], ["type", "email", "formControlName", "email", "placeholder", "Email address", "autocomplete", "email", "aria-describedby", "auth-email-error"], [1, "auth__field", "auth__field--password"], ["type", "password", "formControlName", "password", "placeholder", "Password", "autocomplete", "current-password", "aria-describedby", "auth-password-error"], ["type", "button", "aria-label", "Forgot password?", 1, "auth__field-help", 3, "click"], ["src", "assets/figma/login/help.png", "alt", ""], ["type", "submit", 1, "auth__submit", 3, "disabled"], ["id", "auth-email-error", "class", "auth__field-message", 4, "ngIf"], ["id", "auth-password-error", "class", "auth__field-message auth__field-message--password", 4, "ngIf"], ["class", "auth__form-status auth__form-status--error", 4, "ngIf"], ["class", "auth__form-status auth__form-status--success", 4, "ngIf"], [1, "auth__footnote"], ["routerLink", "/auth/register"], [1, "auth__form-error"], ["id", "auth-email-error", 1, "auth__field-message"], ["id", "auth-password-error", 1, "auth__field-message", "auth__field-message--password"], [1, "auth__form-status", "auth__form-status--error"], [1, "auth__form-status", "auth__form-status--success"]],
    template: function LoginPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_19_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, LoginPageComponent_p_20_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_25_listener() {
          return ctx.openRecovery();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 22)(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, LoginPageComponent_p_30_Template, 2, 0, "p", 23)(31, LoginPageComponent_p_31_Template, 2, 0, "p", 24)(32, LoginPageComponent_p_32_Template, 2, 1, "p", 25)(33, LoginPageComponent_p_33_Template, 2, 0, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "p", 27)(35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Don\u2019t have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Register now");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showValidationErrors());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("auth__field--invalid", ctx.isEmailInvalid());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", ctx.isEmailInvalid());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("auth__field--invalid", ctx.isPasswordInvalid());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", ctx.isPasswordInvalid());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.status() === "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.status() === "pending" ? "Signing in\u2026" : "Sign in to DocRoster");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEmailInvalid());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isPasswordInvalid());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status() === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status() === "success");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    styles: [".auth--login[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(16px, 4vw, 32px);\n  background: url('background-large.png') center/cover no-repeat fixed;\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  overflow-y: auto;\n}\n\n.auth__frame[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 1048px);\n  border-radius: 24px;\n  overflow: visible;\n  display: flex;\n  justify-content: center;\n  padding: clamp(32px, 6vw, 48px);\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(28px);\n          backdrop-filter: blur(28px);\n}\n\n.auth__frame-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.4;\n  z-index: -1;\n}\n\n.auth__card[_ngcontent-%COMP%] {\n  width: min(100%, 393px);\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.24);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  -webkit-backdrop-filter: blur(24px);\n          backdrop-filter: blur(24px);\n  padding: 40px 24px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 24px;\n}\n\n.auth__card-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  border-radius: 24px;\n  background: url('background-card.png') 50% 50% no-repeat;\n}\n\n.auth__providers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n\n.auth__provider[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgb(0, 0, 0);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  line-height: 1.4;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.auth__provider[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: rgba(0, 0, 0, 0.92);\n}\n.auth__provider[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  outline-offset: 3px;\n}\n\n.auth__provider-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.auth__divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.auth__divider-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background-color: rgba(10, 23, 72, 0.6);\n}\n\n.auth__divider-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.408px;\n  color: rgba(10, 23, 72, 0.8);\n}\n\n.auth__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.auth__form-error[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: -0.2px;\n  color: #ff3d00;\n}\n\n.auth__field[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(10, 23, 72, 0.05);\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 13px 16px;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  line-height: 21.6px;\n  color: rgb(10, 23, 72);\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(10, 23, 72, 0.6);\n}\n.auth__field--invalid[_ngcontent-%COMP%] {\n  border-color: rgba(255, 61, 0, 0.5);\n  box-shadow: 0 0 0 2px rgba(255, 61, 0, 0.15);\n}\n\n.auth__field-help[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 12px;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n.auth__field-help[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.auth__field-help[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  border-radius: 50%;\n}\n\n.auth__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgba(10, 23, 72, 0.8);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  line-height: 22.4px;\n  cursor: pointer;\n}\n.auth__submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.auth__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.auth__field-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  letter-spacing: -0.2px;\n  color: #ff3d00;\n}\n.auth__field-message--password[_ngcontent-%COMP%] {\n  margin-top: -4px;\n}\n\n.auth__form-status[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  letter-spacing: -0.2px;\n  font-weight: 600;\n}\n.auth__form-status--error[_ngcontent-%COMP%] {\n  color: #ff3d00;\n}\n.auth__form-status--success[_ngcontent-%COMP%] {\n  color: #21b128;\n}\n\n.auth__footnote[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.2px;\n  line-height: 1.5;\n  color: rgb(10, 23, 72);\n  text-align: center;\n}\n.auth__footnote[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: underline;\n  opacity: 0.85;\n}\n.auth__footnote[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n@media (max-width: 640px) {\n  .auth__providers[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .auth__frame[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .auth__card[_ngcontent-%COMP%] {\n    padding: 32px 20px 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9FQUFBO0VBQ0EsMkhBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0RBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUFMRjtBQU9FO0VBQ0UsMkJBQUE7RUFDQSwrQkFBQTtBQUxKO0FBUUU7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0FBTko7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVBGOztBQVVBO0VBQ0UsT0FBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0N0SGE7QUQrR2Y7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0F2SW1CO0VBd0luQiw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBGO0FBU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkF4Slk7QUFpSmhCO0FBU0k7RUFDRSw0QkFBQTtBQVBOO0FBV0U7RUFDRSxtQ0FBQTtFQUNBLDRDQUFBO0FBVEo7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVZGO0FBWUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVZKO0FBYUU7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0FBWEo7O0FBZUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBWkY7QUFjRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFaSjtBQWVFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBYko7O0FBaUJBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNDL01hO0FEaU1mO0FBZ0JFO0VBQ0UsZ0JBQUE7QUFkSjs7QUFrQkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFmRjtBQWlCRTtFQUNFLGNDN05XO0FEOE1mO0FBa0JFO0VBQ0UsY0NuT1k7QURtTmhCOztBQW9CQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBclBjO0VBc1BkLGtCQUFBO0FBakJGO0FBbUJFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQWpCSjtBQW1CSTtFQUNFLFVBQUE7QUFqQk47O0FBc0JBO0VBQ0U7SUFDRSxzQkFBQTtFQW5CRjtFQXNCQTtJQUNFLGFBQUE7RUFwQkY7RUF1QkE7SUFDRSx1QkFBQTtFQXJCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuJGZpZ21hLXByaW1hcnk6IHJnYmEoMTAsIDIzLCA3MiwgMSk7XG4kZmlnbWEtcHJpbWFyeS1zb2Z0OiByZ2JhKDEwLCAyMywgNzIsIDAuMDUpO1xuJGZpZ21hLWRpdmlkZXI6IHJnYmEoMTAsIDIzLCA3MiwgMSk7XG5cbi5hdXRoLS1sb2dpbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogY2xhbXAoMTZweCwgNHZ3LCAzMnB4KTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvZmlnbWEvbG9naW4vYmFja2dyb3VuZC1sYXJnZS5wbmcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0IGZpeGVkO1xuICBmb250LWZhbWlseTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5hdXRoX19mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IG1pbigxMDAlLCAxMDQ4cHgpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IGNsYW1wKDMycHgsIDZ2dywgNDhweCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyOHB4KTtcbn1cblxuLmF1dGhfX2ZyYW1lLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5hdXRoX19jYXJkIHtcbiAgd2lkdGg6IG1pbigxMDAlLCAzOTNweCk7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJveC1zaGFkb3c6IDAgNDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNHB4KTtcbiAgcGFkZGluZzogNDBweCAyNHB4IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBnYXA6IDI0cHg7XG59XG5cbi5hdXRoX19jYXJkLW1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9maWdtYS9sb2dpbi9iYWNrZ3JvdW5kLWNhcmQucG5nJykgNTAlIDUwJSBuby1yZXBlYXQ7XG59XG5cbi5hdXRoX19wcm92aWRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmF1dGhfX3Byb3ZpZGVyIHtcbiAgZmxleDogMSAxIDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQwOHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJhY2tncm91bmQgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTIpO1xuICB9XG5cbiAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgMC40KTtcbiAgICBvdXRsaW5lLW9mZnNldDogM3B4O1xuICB9XG59XG5cbi5hdXRoX19wcm92aWRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmF1dGhfX2RpdmlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5hdXRoX19kaXZpZGVyLWxpbmUge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZmlnbWEtZGl2aWRlciwgMC42KTtcbn1cblxuLmF1dGhfX2RpdmlkZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgY29sb3I6IHJnYmEoJGZpZ21hLWRpdmlkZXIsIDAuOCk7XG59XG5cbi5hdXRoX19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYXV0aF9fZm9ybS1lcnJvciB7XG4gIG1hcmdpbjogMCAwIDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICBjb2xvcjogJGNvbG9yLWRhbmdlcjtcbn1cblxuLmF1dGhfX2ZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAkZmlnbWEtcHJpbWFyeS1zb2Z0O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDEzcHggMTZweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMS42cHg7XG4gICAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNik7XG4gICAgfVxuICB9XG5cbiAgJi0taW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci1kYW5nZXIsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoJGNvbG9yLWRhbmdlciwgMC4xNSk7XG4gIH1cbn1cblxuLmF1dGhfX2ZpZWxkLWhlbHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDEycHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59XG5cbi5hdXRoX19zdWJtaXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDIzLCA3MiwgMC44KTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQwOHB4O1xuICBsaW5lLWhlaWdodDogMjIuNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG5cbi5hdXRoX19maWVsZC1tZXNzYWdlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGNvbG9yOiAkY29sb3ItZGFuZ2VyO1xuXG4gICYtLXBhc3N3b3JkIHtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICB9XG59XG5cbi5hdXRoX19mb3JtLXN0YXR1cyB7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gICYtLWVycm9yIHtcbiAgICBjb2xvcjogJGNvbG9yLWRhbmdlcjtcbiAgfVxuXG4gICYtLXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAkY29sb3Itc3VjY2VzcztcbiAgfVxufVxuXG4uYXV0aF9fZm9vdG5vdGUge1xuICBtYXJnaW46IDhweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgb3BhY2l0eTogMC44NTtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5hdXRoX19wcm92aWRlcnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuYXV0aF9fZnJhbWUge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cblxuICAuYXV0aF9fY2FyZCB7XG4gICAgcGFkZGluZzogMzJweCAyMHB4IDI4cHg7XG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjM2Q3YWZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzFlM2E4YTtcbiRjb2xvci1zZWNvbmRhcnk6ICMyMWIxMjg7XG4kY29sb3ItYWNjZW50OiAjZmYzZDk2O1xuJGNvbG9yLWJhY2tncm91bmQ6ICNmNWY2ZmY7XG4kY29sb3Itc3VyZmFjZTogI2ZmZmZmZjtcbiRjb2xvci1zdXJmYWNlLWFsdDogI2VlZjFmZjtcbiRjb2xvci10ZXh0OiAjMGExNzQ4O1xuJGNvbG9yLXRleHQtbXV0ZWQ6ICM2ZDdiYTE7XG4kY29sb3ItYm9yZGVyOiAjZDVkY2YwO1xuJGNvbG9yLXN1Y2Nlc3M6ICMyMWIxMjg7XG4kY29sb3Itd2FybmluZzogI2ZmNTczZDtcbiRjb2xvci1kYW5nZXI6ICNmZjNkMDA7XG4kcmFkaXVzLXhsOiAyNHB4O1xuJHJhZGl1cy1sZzogMTZweDtcbiRyYWRpdXMtbWQ6IDEycHg7XG4kcmFkaXVzLXNtOiA4cHg7XG4kc3BhY2luZy14czogMC41cmVtO1xuJHNwYWNpbmctc206IDAuNzVyZW07XG4kc3BhY2luZy1tZDogMXJlbTtcbiRzcGFjaW5nLWxnOiAxLjVyZW07XG4kc3BhY2luZy14bDogMnJlbTtcbiRzcGFjaW5nLXh4bDogM3JlbTtcbiRzaGFkb3ctc29mdDogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiRzaGFkb3ctY2FyZDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbiR0cmFuc2l0aW9uLWJhc2U6IDE4MG1zIGVhc2UtaW4tb3V0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gRGlzcGxheScsICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuJG1heC1jb250ZW50LXdpZHRoOiAxMTgwcHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=187.js.map