"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[63],{

/***/ 5063:
/*!************************************************************!*\
  !*** ./src/app/feature/auth/ui/register-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPageComponent: () => (/* binding */ RegisterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _data_access_auth_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-access/auth.facade */ 5990);







function RegisterPageComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please fill in the required details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterPageComponent_p_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage());
  }
}
function RegisterPageComponent_p_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Account created! Check your inbox for verification. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class RegisterPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_0__.AuthFacade);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.status = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('idle');
    this.submitted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.form = this.fb.nonNullable.group({
      fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      phone: [''],
      agreeToTerms: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue]]
    });
    this.errorMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
    this.showValidationErrors = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.submitted() && this.form.invalid);
  }
  submit() {
    if (this.form.invalid || this.status() === 'pending') {
      this.submitted.set(true);
      this.form.markAllAsTouched();
      return;
    }
    this.status.set('pending');
    this.errorMessage.set(null);
    this.auth.register(this.form.getRawValue()).subscribe({
      next: () => {
        this.status.set('success');
        this.router.navigate(['/auth/verify'], {
          queryParams: {
            email: this.form.getRawValue().email
          }
        });
      },
      error: error => {
        this.status.set('error');
        this.errorMessage.set(error.message);
      }
    });
  }
  isInvalid(controlName) {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched || this.submitted());
  }
  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
  static {
    this.ɵfac = function RegisterPageComponent_Factory(t) {
      return new (t || RegisterPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterPageComponent,
      selectors: [["dr-register-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 45,
      vars: 12,
      consts: [[1, "auth", "auth--register"], [1, "auth__frame"], ["src", "assets/figma/login/background-large.png", "alt", "", "aria-hidden", "true", 1, "auth__frame-bg"], [1, "auth__card"], ["src", "assets/figma/register/1848_1718.png", "alt", "", "aria-hidden", "true", 1, "auth__avatar"], ["type", "button", "aria-label", "Upload photo", 1, "auth__avatar-action"], ["src", "assets/figma/register/1848_1719.png", "alt", ""], ["type", "button", "aria-label", "Back to sign in", 1, "auth__close", 3, "click"], ["src", "assets/figma/register/1850_2318.png", "alt", ""], [1, "auth__title"], [1, "auth__subtitle"], ["type", "button", "aria-label", "Sign up with Google", 1, "auth__provider", "auth__provider--google"], ["src", "assets/figma/login/google.png", "alt", "", 1, "auth__provider-icon"], ["type", "button", "aria-label", "Sign up with Apple", 1, "auth__provider", "auth__provider--apple"], ["src", "assets/figma/login/apple.png", "alt", "", 1, "auth__provider-icon"], ["aria-hidden", "true", 1, "auth__divider"], [1, "auth__divider-line", "auth__divider-line--left"], [1, "auth__divider-label"], [1, "auth__divider-line", "auth__divider-line--right"], ["novalidate", "", 1, "auth__form", 3, "ngSubmit", "formGroup"], ["class", "auth__form-error", 4, "ngIf"], [1, "auth__field"], ["type", "text", "formControlName", "fullName", "placeholder", "Person or company name", "autocomplete", "name"], ["type", "email", "formControlName", "email", "placeholder", "Email used for login", "autocomplete", "email"], ["type", "tel", "formControlName", "phone", "placeholder", "Phone number (optional)", "autocomplete", "tel"], [1, "auth__terms"], ["type", "checkbox", "formControlName", "agreeToTerms"], [1, "auth__terms-box"], ["src", "assets/figma/register/1848_1714.png", "alt", ""], [1, "auth__terms-label"], ["type", "submit", 1, "auth__submit", 3, "disabled"], ["class", "auth__form-status auth__form-status--error", 4, "ngIf"], ["class", "auth__form-status auth__form-status--success", 4, "ngIf"], [1, "auth__form-error"], [1, "auth__form-status", "auth__form-status--error"], [1, "auth__form-status", "auth__form-status--success"]],
      template: function RegisterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_7_listener() {
            return ctx.goToLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Register account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Sign up to view and manage specialists");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Sign up");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Sign up");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "form", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_26_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RegisterPageComponent_p_27_Template, 2, 0, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "I\u2019ve read and agree to the Terms and Conditions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 30)(41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, RegisterPageComponent_p_43_Template, 2, 1, "p", 31)(44, RegisterPageComponent_p_44_Template, 2, 0, "p", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showValidationErrors());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("auth__field--invalid", ctx.isInvalid("fullName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-invalid", ctx.isInvalid("fullName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("auth__field--invalid", ctx.isInvalid("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-invalid", ctx.isInvalid("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.status() === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.status() === "pending" ? "Creating account\u2026" : "Sign up to DocRoster");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "error");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "success");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".auth--register[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  background: #f1f1f1;\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  overflow: auto;\n}\n\n.auth__frame[_ngcontent-%COMP%] {\n  position: relative;\n  width: 1048px;\n  height: 752px;\n  border-radius: 13px;\n  overflow: hidden;\n  background: #f1f1f1;\n}\n\n.auth__frame-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.auth__card[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 328px;\n  top: 84px;\n  width: 393px;\n  height: 718px;\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  backdrop-filter: blur(24px);\n}\n\n.auth__avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 119px;\n  top: 44px;\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 24px;\n}\n\n.auth__avatar-action[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 227px;\n  top: 144px;\n  width: 48px;\n  height: 48px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n.auth__avatar-action[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.auth__avatar-action[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  border-radius: 50%;\n}\n\n.auth__close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 24px;\n  top: 24px;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth__close[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n.auth__close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  border-radius: 50%;\n}\n\n.auth__title[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 218px;\n  margin: 0;\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.374px;\n  color: rgb(10, 23, 72);\n}\n\n.auth__subtitle[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 264px;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: -0.5px;\n  color: rgba(10, 23, 72, 0.8);\n}\n\n.auth__provider[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  width: 168.5px;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgb(0, 0, 0);\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  cursor: pointer;\n}\n.auth__provider--google[_ngcontent-%COMP%] {\n  left: 24px;\n  top: 310px;\n}\n.auth__provider--apple[_ngcontent-%COMP%] {\n  left: 200.5px;\n  top: 310px;\n}\n.auth__provider[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  outline-offset: 3px;\n}\n\n.auth__provider-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.auth__divider-line[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 1px;\n  background: rgb(10, 23, 72);\n  opacity: 0.7;\n}\n.auth__divider-line--left[_ngcontent-%COMP%] {\n  left: 24px;\n  top: 390.5px;\n  width: 146.5px;\n}\n.auth__divider-line--right[_ngcontent-%COMP%] {\n  left: 222.5px;\n  top: 390.5px;\n  width: 146.5px;\n}\n\n.auth__divider-label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 186.5px;\n  top: 380px;\n  width: 20px;\n  height: 22px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.408px;\n  color: rgb(10, 23, 72);\n}\n\n.auth__form[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 432px;\n  width: 345px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.auth__form-error[_ngcontent-%COMP%] {\n  margin: -12px 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: -0.2px;\n  color: #ff3d00;\n}\n\n.auth__field[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(10, 23, 72, 0.05);\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 13px 16px;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  color: rgb(10, 23, 72);\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(10, 23, 72, 0.6);\n}\n.auth__field--invalid[_ngcontent-%COMP%] {\n  border-color: rgba(255, 61, 0, 0.5);\n  box-shadow: 0 0 0 2px rgba(255, 61, 0, 0.1);\n}\n\n.auth__terms[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 16px;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: -0.408px;\n  color: rgb(10, 23, 72);\n}\n.auth__terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.auth__terms-box[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth__terms-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  transition: opacity 160ms ease;\n}\n\n.auth__terms-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  line-height: 15.4px;\n}\n\n.auth__terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .auth__terms-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n.auth__submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 100%;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgba(10, 23, 72, 0.8);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  cursor: pointer;\n}\n.auth__submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.auth__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.auth__form-status[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  letter-spacing: -0.2px;\n  font-weight: 600;\n}\n.auth__form-status--error[_ngcontent-%COMP%] {\n  color: #ff3d00;\n}\n.auth__form-status--success[_ngcontent-%COMP%] {\n  color: #21b128;\n}\n\n@media (max-width: 1160px) {\n  .auth__frame[_ngcontent-%COMP%] {\n    transform: scale(0.85);\n  }\n}\n@media (max-width: 960px) {\n  .auth__frame[_ngcontent-%COMP%] {\n    transform: scale(0.7);\n  }\n}\n@media (max-width: 720px) {\n  .auth__frame[_ngcontent-%COMP%] {\n    transform: scale(0.6);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwySEFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSkY7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFORjtBQVFFO0VBQ0Us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QTtFQUNBLGdCQUFBO0FBcEJGO0FBc0JFO0VBQ0UsY0NyVFc7QURpU2Y7QUF1QkU7RUFDRSxjQzNUWTtBRHNTaEI7O0FBeUJBO0VBQ0U7SUFDRSxzQkFBQTtFQXRCRjtBQUNGO0FBeUJBO0VBQ0U7SUFDRSxxQkFBQTtFQXZCRjtBQUNGO0FBMEJBO0VBQ0U7SUFDRSxxQkFBQTtFQXhCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuJGZpZ21hLXByaW1hcnk6IHJnYmEoMTAsIDIzLCA3MiwgMSk7XG4kZmlnbWEtcHJpbWFyeS1zb2Z0OiByZ2JhKDEwLCAyMywgNzIsIDAuMDUpO1xuXG4uYXV0aC0tcmVnaXN0ZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIERpc3BsYXknLCAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5hdXRoX19mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwNDhweDtcbiAgaGVpZ2h0OiA3NTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLmF1dGhfX2ZyYW1lLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5hdXRoX19jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMjhweDtcbiAgdG9wOiA4NHB4O1xuICB3aWR0aDogMzkzcHg7XG4gIGhlaWdodDogNzE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJveC1zaGFkb3c6IDAgNDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNHB4KTtcbn1cblxuLmF1dGhfX2F2YXRhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTE5cHg7XG4gIHRvcDogNDRweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLmF1dGhfX2F2YXRhci1hY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIyN3B4O1xuICB0b3A6IDE0NHB4O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4uYXV0aF9fY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNHB4O1xuICB0b3A6IDI0cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4uYXV0aF9fdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogMjE4cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zNzRweDtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xufVxuXG4uYXV0aF9fc3VidGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogMjY0cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICBjb2xvcjogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC44KTtcbn1cblxuLmF1dGhfX3Byb3ZpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICB3aWR0aDogMTY4LjVweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYtLWdvb2dsZSB7XG4gICAgbGVmdDogMjRweDtcbiAgICB0b3A6IDMxMHB4O1xuICB9XG5cbiAgJi0tYXBwbGUge1xuICAgIGxlZnQ6IDIwMC41cHg7XG4gICAgdG9wOiAzMTBweDtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNCk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDNweDtcbiAgfVxufVxuXG4uYXV0aF9fcHJvdmlkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5hdXRoX19kaXZpZGVyLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAkZmlnbWEtcHJpbWFyeTtcbiAgb3BhY2l0eTogMC43O1xuXG4gICYtLWxlZnQge1xuICAgIGxlZnQ6IDI0cHg7XG4gICAgdG9wOiAzOTAuNXB4O1xuICAgIHdpZHRoOiAxNDYuNXB4O1xuICB9XG5cbiAgJi0tcmlnaHQge1xuICAgIGxlZnQ6IDIyMi41cHg7XG4gICAgdG9wOiAzOTAuNXB4O1xuICAgIHdpZHRoOiAxNDYuNXB4O1xuICB9XG59XG5cbi5hdXRoX19kaXZpZGVyLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxODYuNXB4O1xuICB0b3A6IDM4MHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQwOHB4O1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG59XG5cbi5hdXRoX19mb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDQzMnB4O1xuICB3aWR0aDogMzQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLmF1dGhfX2Zvcm0tZXJyb3Ige1xuICBtYXJnaW46IC0xMnB4IDAgMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICBjb2xvcjogJGNvbG9yLWRhbmdlcjtcbn1cblxuLmF1dGhfX2ZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAkZmlnbWEtcHJpbWFyeS1zb2Z0O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDEzcHggMTZweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjYpO1xuICAgIH1cbiAgfVxuXG4gICYtLWludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgkY29sb3ItZGFuZ2VyLCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKCRjb2xvci1kYW5nZXIsIDAuMSk7XG4gIH1cbn1cblxuLmF1dGhfX3Rlcm1zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQwOHB4O1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG5cbiAgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbi5hdXRoX190ZXJtcy1ib3gge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNjBtcyBlYXNlO1xuICB9XG59XG5cbi5hdXRoX190ZXJtcy1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTUuNHB4O1xufVxuXG4uYXV0aF9fdGVybXMgaW5wdXQ6bm90KDpjaGVja2VkKSArIC5hdXRoX190ZXJtcy1ib3ggaW1nIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uYXV0aF9fc3VibWl0IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAyMywgNzIsIDAuOCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxufVxuXG4uYXV0aF9fZm9ybS1zdGF0dXMge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAmLS1lcnJvciB7XG4gICAgY29sb3I6ICRjb2xvci1kYW5nZXI7XG4gIH1cblxuICAmLS1zdWNjZXNzIHtcbiAgICBjb2xvcjogJGNvbG9yLXN1Y2Nlc3M7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExNjBweCkge1xuICAuYXV0aF9fZnJhbWUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5hdXRoX19mcmFtZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuYXV0aF9fZnJhbWUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzZDdhZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWUzYThhO1xuJGNvbG9yLXNlY29uZGFyeTogIzIxYjEyODtcbiRjb2xvci1hY2NlbnQ6ICNmZjNkOTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjZmZjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZWVmMWZmO1xuJGNvbG9yLXRleHQ6ICMwYTE3NDg7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZkN2JhMTtcbiRjb2xvci1ib3JkZXI6ICNkNWRjZjA7XG4kY29sb3Itc3VjY2VzczogIzIxYjEyODtcbiRjb2xvci13YXJuaW5nOiAjZmY1NzNkO1xuJGNvbG9yLWRhbmdlcjogI2ZmM2QwMDtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=63.js.map