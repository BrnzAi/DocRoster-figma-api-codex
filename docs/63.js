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







const _c0 = ["avatarInput"];
function RegisterPageComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please fill in the required details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterPageComponent_p_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage());
  }
}
function RegisterPageComponent_p_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 41);
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
    this.avatarUploading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.avatarSrc = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('assets/figma/register/1848_1718.png');
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
  triggerAvatarUpload() {
    this.avatarInput?.nativeElement.click();
  }
  onAvatarSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (result) {
        this.avatarSrc.set(result);
      }
      this.avatarUploading.set(true);
      this.auth.uploadAvatar(file).subscribe({
        next: () => {
          this.avatarUploading.set(false);
        },
        error: error => {
          console.error(error);
          this.avatarUploading.set(false);
        }
      });
      input.value = '';
    };
    reader.readAsDataURL(file);
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
      viewQuery: function RegisterPageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatarInput = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 53,
      vars: 14,
      consts: [["avatarInput", ""], [1, "auth", "auth--register"], [1, "auth__frame"], ["src", "assets/figma/login/background-large.png", "alt", "", "aria-hidden", "true", 1, "auth__frame-bg"], [1, "auth__card"], [1, "auth__card-header"], [1, "auth__avatar-shell"], ["alt", "Profile preview", 1, "auth__avatar", 3, "src"], ["type", "button", "aria-label", "Upload photo", 1, "auth__avatar-action", 3, "click", "disabled"], ["src", "assets/figma/register/1848_1719.png", "alt", ""], ["type", "file", "accept", "image/*", 1, "auth__avatar-input", 3, "change"], ["type", "button", "aria-label", "Back to sign in", 1, "auth__close", 3, "click"], ["src", "assets/figma/register/1850_2318.png", "alt", ""], [1, "auth__intro"], [1, "auth__title"], [1, "auth__subtitle"], [1, "auth__providers"], ["type", "button", "aria-label", "Sign up with Google", 1, "auth__provider"], ["src", "assets/figma/login/google.png", "alt", "", 1, "auth__provider-icon"], ["type", "button", "aria-label", "Sign up with Apple", 1, "auth__provider"], ["src", "assets/figma/login/apple.png", "alt", "", 1, "auth__provider-icon"], ["aria-hidden", "true", 1, "auth__divider"], [1, "auth__divider-line"], [1, "auth__divider-label"], ["novalidate", "", 1, "auth__form", 3, "ngSubmit", "formGroup"], ["class", "auth__form-error", 4, "ngIf"], [1, "auth__field"], ["type", "text", "formControlName", "fullName", "placeholder", "Person or company name", "autocomplete", "name"], ["type", "email", "formControlName", "email", "placeholder", "Email used for login", "autocomplete", "email"], ["type", "tel", "formControlName", "phone", "placeholder", "Phone number (optional)", "autocomplete", "tel"], [1, "auth__terms"], ["type", "checkbox", "formControlName", "agreeToTerms"], [1, "auth__terms-box"], ["src", "assets/figma/register/1848_1714.png", "alt", ""], [1, "auth__terms-label"], ["href", "#", 3, "click"], ["type", "submit", 1, "auth__submit", 3, "disabled"], ["class", "auth__form-status auth__form-status--error", 4, "ngIf"], ["class", "auth__form-status auth__form-status--success", 4, "ngIf"], [1, "auth__form-error"], [1, "auth__form-status", "auth__form-status--error"], [1, "auth__form-status", "auth__form-status--success"]],
      template: function RegisterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.triggerAvatarUpload());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterPageComponent_Template_input_change_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onAvatarSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.goToLogin());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13)(14, "h1", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Register account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Sign up to view and manage specialists");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16)(19, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sign up with Google");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Sign up with Apple");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "form", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.submit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RegisterPageComponent_p_33_Template, 2, 0, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " I\u2019ve read and agree to the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterPageComponent_Template_a_click_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.preventDefault());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Terms & Conditions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 36)(49, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, RegisterPageComponent_p_51_Template, 2, 1, "p", 37)(52, RegisterPageComponent_p_52_Template, 2, 0, "p", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.avatarSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.avatarUploading());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
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
      styles: [".auth--register[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(16px, 4vw, 32px);\n  background: url('background-large.png') center/cover no-repeat fixed;\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  overflow-y: auto;\n}\n\n.auth__frame[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 1048px);\n  border-radius: 24px;\n  overflow: visible;\n  display: flex;\n  justify-content: center;\n  padding: clamp(32px, 6vw, 48px);\n  background: rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(28px);\n}\n\n.auth__frame-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.4;\n  z-index: -1;\n}\n\n.auth__card[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 393px);\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  backdrop-filter: blur(24px);\n  padding: 32px 24px 36px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.auth__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.auth__avatar-shell[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.auth__avatar[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 24px;\n  box-shadow: 0 18px 38px rgba(10, 23, 72, 0.25);\n}\n\n.auth__avatar-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.auth__avatar-action[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  bottom: 8px;\n  width: 48px;\n  height: 48px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 12px 32px rgba(10, 23, 72, 0.18);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.auth__avatar-action[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.auth__avatar-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.auth__avatar-action[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  outline-offset: 3px;\n}\n.auth__avatar-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: wait;\n  transform: none;\n}\n\n.auth__close[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 24px 48px rgba(10, 23, 72, 0.18);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.auth__close[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.auth__close[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.auth__close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  outline-offset: 4px;\n}\n\n.auth__intro[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.auth__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.374px;\n  color: rgb(10, 23, 72);\n}\n\n.auth__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: -0.5px;\n  color: rgba(10, 23, 72, 0.78);\n}\n\n.auth__providers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n\n.auth__provider[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgb(0, 0, 0);\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.auth__provider[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: rgba(0, 0, 0, 0.92);\n}\n.auth__provider[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  outline-offset: 3px;\n}\n\n.auth__provider-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.auth__divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.auth__divider-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: rgba(10, 23, 72, 0.6);\n}\n\n.auth__divider-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.408px;\n  color: rgba(10, 23, 72, 0.78);\n}\n\n.auth__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.auth__form-error[_ngcontent-%COMP%] {\n  margin: -12px 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: -0.2px;\n  color: #ff3d00;\n}\n\n.auth__field[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(10, 23, 72, 0.05);\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 13px 16px;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  color: rgb(10, 23, 72);\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(10, 23, 72, 0.6);\n}\n.auth__field--invalid[_ngcontent-%COMP%] {\n  border-color: rgba(255, 61, 0, 0.5);\n  box-shadow: 0 0 0 2px rgba(255, 61, 0, 0.1);\n}\n\n.auth__terms[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: -0.408px;\n  color: rgb(10, 23, 72);\n}\n.auth__terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.auth__terms-box[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth__terms-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  transition: opacity 160ms ease;\n}\n\n.auth__terms-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  line-height: 15.4px;\n}\n.auth__terms-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: underline;\n  margin-left: 4px;\n}\n\n.auth__terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .auth__terms-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n.auth__submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 100%;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgba(10, 23, 72, 0.88);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  cursor: pointer;\n}\n.auth__submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.auth__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.auth__form-status[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  letter-spacing: -0.2px;\n  font-weight: 600;\n}\n.auth__form-status--error[_ngcontent-%COMP%] {\n  color: #ff3d00;\n}\n.auth__form-status--success[_ngcontent-%COMP%] {\n  color: #21b128;\n}\n\n@media (max-width: 640px) {\n  .auth__providers[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .auth__card[_ngcontent-%COMP%] {\n    padding: 28px 20px 32px;\n  }\n  .auth__avatar[_ngcontent-%COMP%] {\n    width: 124px;\n    height: 124px;\n  }\n  .auth__avatar-action[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9FQUFBO0VBQ0EsMkhBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDhDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBSkY7QUFNRTtF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Q0Esd0JBQUE7RUFDQSxlQUFBO0FBbkJGO0FBcUJFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQW5CSjtBQXNCRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXBCSjs7QUF3QkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7QUF1QkU7RUFDRSxjQy9VVztBRDBUZjtBQXdCRTtFQUNFLGNDclZZO0FEK1RoQjs7QUEwQkE7RUFDRTtJQUNFLHNCQUFBO0VBdkJGO0VBMEJBO0lBQ0UsdUJBQUE7RUF4QkY7RUEyQkE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQXpCRjtFQTRCQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBMUJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuXG4kZmlnbWEtcHJpbWFyeTogcmdiYSgxMCwgMjMsIDcyLCAxKTtcbiRmaWdtYS1wcmltYXJ5LXNvZnQ6IHJnYmEoMTAsIDIzLCA3MiwgMC4wNSk7XG5cbi5hdXRoLS1yZWdpc3RlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogY2xhbXAoMTZweCwgNHZ3LCAzMnB4KTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvZmlnbWEvbG9naW4vYmFja2dyb3VuZC1sYXJnZS5wbmcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0IGZpeGVkO1xuICBmb250LWZhbWlseTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5hdXRoX19mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IG1pbigxMDAlLCAxMDQ4cHgpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IGNsYW1wKDMycHgsIDZ2dywgNDhweCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyOHB4KTtcbn1cblxuLmF1dGhfX2ZyYW1lLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5hdXRoX19jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogbWluKDEwMCUsIDM5M3B4KTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgYm94LXNoYWRvdzogMCA0MHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI0cHgpO1xuICBwYWRkaW5nOiAzMnB4IDI0cHggMzZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xufVxuXG4uYXV0aF9fY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uYXV0aF9fYXZhdGFyLXNoZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXV0aF9fYXZhdGFyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm94LXNoYWRvdzogMCAxOHB4IDM4cHggcmdiYSgxMCwgMjMsIDcyLCAwLjI1KTtcbn1cblxuLmF1dGhfX2F2YXRhci1pbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdXRoX19hdmF0YXItYWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICBib3R0b206IDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMnB4IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMTgpO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNCk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDNweDtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBjdXJzb3I6IHdhaXQ7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5hdXRoX19jbG9zZSB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuICBib3gtc2hhZG93OiAwIDI0cHggNDhweCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjE4KTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG4gIH1cbn1cblxuLmF1dGhfX2ludHJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5hdXRoX190aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zNzRweDtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xufVxuXG4uYXV0aF9fc3VidGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNzgpO1xufVxuXG4uYXV0aF9fcHJvdmlkZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hdXRoX19wcm92aWRlciB7XG4gIGZsZXg6IDEgMSAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkyKTtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNCk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDNweDtcbiAgfVxufVxuXG4uYXV0aF9fcHJvdmlkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5hdXRoX19kaXZpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYXV0aF9fZGl2aWRlci1saW5lIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNik7XG59XG5cbi5hdXRoX19kaXZpZGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjc4KTtcbn1cblxuLmF1dGhfX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5hdXRoX19mb3JtLWVycm9yIHtcbiAgbWFyZ2luOiAtMTJweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgY29sb3I6ICRjb2xvci1kYW5nZXI7XG59XG5cbi5hdXRoX19maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogJGZpZ21hLXByaW1hcnktc29mdDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAxM3B4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC42KTtcbiAgICB9XG4gIH1cblxuICAmLS1pbnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLWRhbmdlciwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgkY29sb3ItZGFuZ2VyLCAwLjEpO1xuICB9XG59XG5cbi5hdXRoX190ZXJtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuXG4gIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4uYXV0aF9fdGVybXMtYm94IHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTYwbXMgZWFzZTtcbiAgfVxufVxuXG4uYXV0aF9fdGVybXMtbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE1LjRweDtcblxuICBhIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICB9XG59XG5cbi5hdXRoX190ZXJtcyBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmF1dGhfX3Rlcm1zLWJveCBpbWcge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5hdXRoX19zdWJtaXQge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDIzLCA3MiwgMC44OCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxufVxuXG4uYXV0aF9fZm9ybS1zdGF0dXMge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAmLS1lcnJvciB7XG4gICAgY29sb3I6ICRjb2xvci1kYW5nZXI7XG4gIH1cblxuICAmLS1zdWNjZXNzIHtcbiAgICBjb2xvcjogJGNvbG9yLXN1Y2Nlc3M7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5hdXRoX19wcm92aWRlcnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuYXV0aF9fY2FyZCB7XG4gICAgcGFkZGluZzogMjhweCAyMHB4IDMycHg7XG4gIH1cblxuICAuYXV0aF9fYXZhdGFyIHtcbiAgICB3aWR0aDogMTI0cHg7XG4gICAgaGVpZ2h0OiAxMjRweDtcbiAgfVxuXG4gIC5hdXRoX19hdmF0YXItYWN0aW9uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjM2Q3YWZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzFlM2E4YTtcbiRjb2xvci1zZWNvbmRhcnk6ICMyMWIxMjg7XG4kY29sb3ItYWNjZW50OiAjZmYzZDk2O1xuJGNvbG9yLWJhY2tncm91bmQ6ICNmNWY2ZmY7XG4kY29sb3Itc3VyZmFjZTogI2ZmZmZmZjtcbiRjb2xvci1zdXJmYWNlLWFsdDogI2VlZjFmZjtcbiRjb2xvci10ZXh0OiAjMGExNzQ4O1xuJGNvbG9yLXRleHQtbXV0ZWQ6ICM2ZDdiYTE7XG4kY29sb3ItYm9yZGVyOiAjZDVkY2YwO1xuJGNvbG9yLXN1Y2Nlc3M6ICMyMWIxMjg7XG4kY29sb3Itd2FybmluZzogI2ZmNTczZDtcbiRjb2xvci1kYW5nZXI6ICNmZjNkMDA7XG4kcmFkaXVzLXhsOiAyNHB4O1xuJHJhZGl1cy1sZzogMTZweDtcbiRyYWRpdXMtbWQ6IDEycHg7XG4kcmFkaXVzLXNtOiA4cHg7XG4kc3BhY2luZy14czogMC41cmVtO1xuJHNwYWNpbmctc206IDAuNzVyZW07XG4kc3BhY2luZy1tZDogMXJlbTtcbiRzcGFjaW5nLWxnOiAxLjVyZW07XG4kc3BhY2luZy14bDogMnJlbTtcbiRzcGFjaW5nLXh4bDogM3JlbTtcbiRzaGFkb3ctc29mdDogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiRzaGFkb3ctY2FyZDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbiR0cmFuc2l0aW9uLWJhc2U6IDE4MG1zIGVhc2UtaW4tb3V0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gRGlzcGxheScsICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuJG1heC1jb250ZW50LXdpZHRoOiAxMTgwcHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=63.js.map