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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _data_access_auth_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-access/auth.facade */ 5990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







const _c0 = ["avatarInput"];
function RegisterPageComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please fill in the required details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegisterPageComponent_p_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.errorMessage());
  }
}
function RegisterPageComponent_p_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Account created! Check your inbox for verification. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class RegisterPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_5__.AuthFacade);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.status = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('idle', ...(ngDevMode ? [{
      debugName: "status"
    }] : []));
    this.submitted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "submitted"
    }] : []));
    this.avatarUploading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "avatarUploading"
    }] : []));
    this.avatarSrc = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('assets/figma/register/1848_1718.png', ...(ngDevMode ? [{
      debugName: "avatarSrc"
    }] : []));
    this.form = this.fb.nonNullable.group({
      fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      phone: [''],
      agreeToTerms: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.requiredTrue]]
    });
    this.errorMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "errorMessage"
    }] : []));
    this.showValidationErrors = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.submitted() && this.form.invalid, ...(ngDevMode ? [{
      debugName: "showValidationErrors"
    }] : []));
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
  static #_ = _staticBlock = () => (this.ɵfac = function RegisterPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegisterPageComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: RegisterPageComponent,
    selectors: [["dr-register-page"]],
    viewQuery: function RegisterPageComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.avatarInput = _t.first);
      }
    },
    decls: 53,
    vars: 14,
    consts: [["avatarInput", ""], [1, "auth", "auth--register"], [1, "auth__frame"], ["src", "assets/figma/login/background-large.png", "alt", "", "aria-hidden", "true", 1, "auth__frame-bg"], [1, "auth__card"], [1, "auth__card-header"], [1, "auth__avatar-shell"], ["alt", "Profile preview", 1, "auth__avatar", 3, "src"], ["type", "button", "aria-label", "Upload photo", 1, "auth__avatar-action", 3, "click", "disabled"], ["src", "assets/figma/register/1848_1719.png", "alt", ""], ["type", "file", "accept", "image/*", 1, "auth__avatar-input", 3, "change"], ["type", "button", "aria-label", "Back to sign in", 1, "auth__close", 3, "click"], ["src", "assets/figma/register/1850_2318.png", "alt", ""], [1, "auth__intro"], [1, "auth__title"], [1, "auth__subtitle"], [1, "auth__providers"], ["type", "button", "aria-label", "Sign up with Google", 1, "auth__provider"], ["src", "assets/figma/login/google.png", "alt", "", 1, "auth__provider-icon"], ["type", "button", "aria-label", "Sign up with Apple", 1, "auth__provider"], ["src", "assets/figma/login/apple.png", "alt", "", 1, "auth__provider-icon"], ["aria-hidden", "true", 1, "auth__divider"], [1, "auth__divider-line"], [1, "auth__divider-label"], ["novalidate", "", 1, "auth__form", 3, "ngSubmit", "formGroup"], ["class", "auth__form-error", 4, "ngIf"], [1, "auth__field"], ["type", "text", "formControlName", "fullName", "placeholder", "Person or company name", "autocomplete", "name"], ["type", "email", "formControlName", "email", "placeholder", "Email used for login", "autocomplete", "email"], ["type", "tel", "formControlName", "phone", "placeholder", "Phone number (optional)", "autocomplete", "tel"], [1, "auth__terms"], ["type", "checkbox", "formControlName", "agreeToTerms"], [1, "auth__terms-box"], ["src", "assets/figma/register/1848_1714.png", "alt", ""], [1, "auth__terms-label"], ["href", "#", 3, "click"], ["type", "submit", 1, "auth__submit", 3, "disabled"], ["class", "auth__form-status auth__form-status--error", 4, "ngIf"], ["class", "auth__form-status auth__form-status--success", 4, "ngIf"], [1, "auth__form-error"], [1, "auth__form-status", "auth__form-status--error"], [1, "auth__form-status", "auth__form-status--success"]],
    template: function RegisterPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 1)(1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.triggerAvatarUpload());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 10, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RegisterPageComponent_Template_input_change_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onAvatarSelected($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.goToLogin());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 13)(14, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Register account");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Sign up to view and manage specialists");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 16)(19, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Sign up with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Sign up with Apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.submit());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, RegisterPageComponent_p_33_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " I\u2019ve read and agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegisterPageComponent_Template_a_click_46_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.preventDefault());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "button", 36)(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, RegisterPageComponent_p_51_Template, 2, 1, "p", 37)(52, RegisterPageComponent_p_52_Template, 2, 0, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.avatarSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.avatarUploading());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showValidationErrors());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("auth__field--invalid", ctx.isInvalid("fullName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-invalid", ctx.isInvalid("fullName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("auth__field--invalid", ctx.isInvalid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-invalid", ctx.isInvalid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.status() === "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.status() === "pending" ? "Creating account\u2026" : "Sign up to DocRoster");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.status() === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.status() === "success");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    styles: [".auth--register[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(16px, 4vw, 32px);\n  background: url('background-large.png') center/cover no-repeat fixed;\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  overflow-y: auto;\n}\n\n.auth__frame[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 1048px);\n  border-radius: 24px;\n  overflow: visible;\n  display: flex;\n  justify-content: center;\n  padding: clamp(32px, 6vw, 48px);\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(28px);\n          backdrop-filter: blur(28px);\n}\n\n.auth__frame-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.4;\n  z-index: -1;\n}\n\n.auth__card[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 393px);\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  -webkit-backdrop-filter: blur(24px);\n          backdrop-filter: blur(24px);\n  padding: 32px 24px 36px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.auth__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.auth__avatar-shell[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.auth__avatar[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 24px;\n  box-shadow: 0 18px 38px rgba(10, 23, 72, 0.25);\n}\n\n.auth__avatar-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.auth__avatar-action[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  bottom: 8px;\n  width: 48px;\n  height: 48px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 12px 32px rgba(10, 23, 72, 0.18);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.auth__avatar-action[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.auth__avatar-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.auth__avatar-action[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  outline-offset: 3px;\n}\n.auth__avatar-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: wait;\n  transform: none;\n}\n\n.auth__close[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 24px 48px rgba(10, 23, 72, 0.18);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.auth__close[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.auth__close[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.auth__close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  outline-offset: 4px;\n}\n\n.auth__intro[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.auth__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.374px;\n  color: rgb(10, 23, 72);\n}\n\n.auth__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: -0.5px;\n  color: rgba(10, 23, 72, 0.78);\n}\n\n.auth__providers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n\n.auth__provider[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgb(0, 0, 0);\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.auth__provider[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: rgba(0, 0, 0, 0.92);\n}\n.auth__provider[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  outline-offset: 3px;\n}\n\n.auth__provider-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.auth__divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.auth__divider-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: rgba(10, 23, 72, 0.6);\n}\n\n.auth__divider-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.408px;\n  color: rgba(10, 23, 72, 0.78);\n}\n\n.auth__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.auth__form-error[_ngcontent-%COMP%] {\n  margin: -12px 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: -0.2px;\n  color: #ff3d00;\n}\n\n.auth__field[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(10, 23, 72, 0.05);\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 13px 16px;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  color: rgb(10, 23, 72);\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(10, 23, 72, 0.6);\n}\n.auth__field--invalid[_ngcontent-%COMP%] {\n  border-color: rgba(255, 61, 0, 0.5);\n  box-shadow: 0 0 0 2px rgba(255, 61, 0, 0.1);\n}\n\n.auth__terms[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: -0.408px;\n  color: rgb(10, 23, 72);\n}\n.auth__terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.auth__terms-box[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth__terms-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  transition: opacity 160ms ease;\n}\n\n.auth__terms-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  line-height: 15.4px;\n}\n.auth__terms-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: underline;\n  margin-left: 4px;\n}\n\n.auth__terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .auth__terms-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n.auth__submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 100%;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgba(10, 23, 72, 0.88);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  cursor: pointer;\n}\n.auth__submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.auth__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.auth__form-status[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  letter-spacing: -0.2px;\n  font-weight: 600;\n}\n.auth__form-status--error[_ngcontent-%COMP%] {\n  color: #ff3d00;\n}\n.auth__form-status--success[_ngcontent-%COMP%] {\n  color: #21b128;\n}\n\n@media (max-width: 640px) {\n  .auth__providers[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .auth__card[_ngcontent-%COMP%] {\n    padding: 28px 20px 32px;\n  }\n  .auth__avatar[_ngcontent-%COMP%] {\n    width: 124px;\n    height: 124px;\n  }\n  .auth__avatar-action[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9FQUFBO0VBQ0EsMkhBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSw4Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7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QUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQW5CRjtBQXFCRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFuQko7QUFzQkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFwQko7O0FBd0JBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBckJGO0FBdUJFO0VBQ0UsY0MvVVc7QUQwVGY7QUF3QkU7RUFDRSxjQ3JWWTtBRCtUaEI7O0FBMEJBO0VBQ0U7SUFDRSxzQkFBQTtFQXZCRjtFQTBCQTtJQUNFLHVCQUFBO0VBeEJGO0VBMkJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUF6QkY7RUE0QkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQTFCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuJGZpZ21hLXByaW1hcnk6IHJnYmEoMTAsIDIzLCA3MiwgMSk7XG4kZmlnbWEtcHJpbWFyeS1zb2Z0OiByZ2JhKDEwLCAyMywgNzIsIDAuMDUpO1xuXG4uYXV0aC0tcmVnaXN0ZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IGNsYW1wKDE2cHgsIDR2dywgMzJweCk7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ZpZ21hL2xvZ2luL2JhY2tncm91bmQtbGFyZ2UucG5nJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCBmaXhlZDtcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gRGlzcGxheScsICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXV0aF9fZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBtaW4oMTAwJSwgMTA0OHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiBjbGFtcCgzMnB4LCA2dncsIDQ4cHgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjhweCk7XG59XG5cbi5hdXRoX19mcmFtZS1iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvcGFjaXR5OiAwLjQ7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYXV0aF9fY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IG1pbigxMDAlLCAzOTNweCk7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJveC1zaGFkb3c6IDAgNDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNHB4KTtcbiAgcGFkZGluZzogMzJweCAyNHB4IDM2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cblxuLmF1dGhfX2NhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmF1dGhfX2F2YXRhci1zaGVsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmF1dGhfX2F2YXRhciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMThweCAzOHB4IHJnYmEoMTAsIDIzLCA3MiwgMC4yNSk7XG59XG5cbi5hdXRoX19hdmF0YXItaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXV0aF9fYXZhdGFyLWFjdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgYm90dG9tOiA4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuICBib3gtc2hhZG93OiAwIDEycHggMzJweCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjE4KTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAzcHg7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgY3Vyc29yOiB3YWl0O1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uYXV0aF9fY2xvc2Uge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDQ4cHggcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4xOCk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICB9XG5cbiAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgkY29sb3ItcHJpbWFyeSwgMC40KTtcbiAgICBvdXRsaW5lLW9mZnNldDogNHB4O1xuICB9XG59XG5cbi5hdXRoX19pbnRybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uYXV0aF9fdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMzc0cHg7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbn1cblxuLmF1dGhfX3N1YnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjc4KTtcbn1cblxuLmF1dGhfX3Byb3ZpZGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYXV0aF9fcHJvdmlkZXIge1xuICBmbGV4OiAxIDEgMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45Mik7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAzcHg7XG4gIH1cbn1cblxuLmF1dGhfX3Byb3ZpZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uYXV0aF9fZGl2aWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLmF1dGhfX2RpdmlkZXItbGluZSB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjYpO1xufVxuXG4uYXV0aF9fZGl2aWRlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQwOHB4O1xuICBjb2xvcjogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC43OCk7XG59XG5cbi5hdXRoX19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYXV0aF9fZm9ybS1lcnJvciB7XG4gIG1hcmdpbjogLTEycHggMCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGNvbG9yOiAkY29sb3ItZGFuZ2VyO1xufVxuXG4uYXV0aF9fZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICRmaWdtYS1wcmltYXJ5LXNvZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMTNweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNik7XG4gICAgfVxuICB9XG5cbiAgJi0taW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci1kYW5nZXIsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoJGNvbG9yLWRhbmdlciwgMC4xKTtcbiAgfVxufVxuXG4uYXV0aF9fdGVybXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcblxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLmF1dGhfX3Rlcm1zLWJveCB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE2MG1zIGVhc2U7XG4gIH1cbn1cblxuLmF1dGhfX3Rlcm1zLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNS40cHg7XG5cbiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgfVxufVxuXG4uYXV0aF9fdGVybXMgaW5wdXQ6bm90KDpjaGVja2VkKSArIC5hdXRoX190ZXJtcy1ib3ggaW1nIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uYXV0aF9fc3VibWl0IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAyMywgNzIsIDAuODgpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cblxuLmF1dGhfX2Zvcm0tc3RhdHVzIHtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgJi0tZXJyb3Ige1xuICAgIGNvbG9yOiAkY29sb3ItZGFuZ2VyO1xuICB9XG5cbiAgJi0tc3VjY2VzcyB7XG4gICAgY29sb3I6ICRjb2xvci1zdWNjZXNzO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuYXV0aF9fcHJvdmlkZXJzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmF1dGhfX2NhcmQge1xuICAgIHBhZGRpbmc6IDI4cHggMjBweCAzMnB4O1xuICB9XG5cbiAgLmF1dGhfX2F2YXRhciB7XG4gICAgd2lkdGg6IDEyNHB4O1xuICAgIGhlaWdodDogMTI0cHg7XG4gIH1cblxuICAuYXV0aF9fYXZhdGFyLWFjdGlvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG4iLCIkY29sb3ItcHJpbWFyeTogIzNkN2FmZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMxZTNhOGE7XG4kY29sb3Itc2Vjb25kYXJ5OiAjMjFiMTI4O1xuJGNvbG9yLWFjY2VudDogI2ZmM2Q5NjtcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZjVmNmZmO1xuJGNvbG9yLXN1cmZhY2U6ICNmZmZmZmY7XG4kY29sb3Itc3VyZmFjZS1hbHQ6ICNlZWYxZmY7XG4kY29sb3ItdGV4dDogIzBhMTc0ODtcbiRjb2xvci10ZXh0LW11dGVkOiAjNmQ3YmExO1xuJGNvbG9yLWJvcmRlcjogI2Q1ZGNmMDtcbiRjb2xvci1zdWNjZXNzOiAjMjFiMTI4O1xuJGNvbG9yLXdhcm5pbmc6ICNmZjU3M2Q7XG4kY29sb3ItZGFuZ2VyOiAjZmYzZDAwO1xuJHJhZGl1cy14bDogMjRweDtcbiRyYWRpdXMtbGc6IDE2cHg7XG4kcmFkaXVzLW1kOiAxMnB4O1xuJHJhZGl1cy1zbTogOHB4O1xuJHNwYWNpbmcteHM6IDAuNXJlbTtcbiRzcGFjaW5nLXNtOiAwLjc1cmVtO1xuJHNwYWNpbmctbWQ6IDFyZW07XG4kc3BhY2luZy1sZzogMS41cmVtO1xuJHNwYWNpbmcteGw6IDJyZW07XG4kc3BhY2luZy14eGw6IDNyZW07XG4kc2hhZG93LXNvZnQ6IDAgMjBweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4kc2hhZG93LWNhcmQ6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG4kdHJhbnNpdGlvbi1iYXNlOiAxODBtcyBlYXNlLWluLW91dDtcbiRmb250LWZhbWlseS1iYXNlOiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIERpc3BsYXknLCAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiRtYXgtY29udGVudC13aWR0aDogMTE4MHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=63.js.map