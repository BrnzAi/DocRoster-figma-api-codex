"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[768],{

/***/ 5768:
/*!***********************************************************!*\
  !*** ./src/app/feature/auth/ui/recover-page.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecoverPageComponent: () => (/* binding */ RecoverPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _data_access_auth_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-access/auth.facade */ 5990);







function RecoverPageComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RecoverPageComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message());
  }
}
function RecoverPageComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message());
  }
}
class RecoverPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_0__.AuthFacade);
    this.status = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('idle');
    this.submitted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.form = this.fb.nonNullable.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
    });
    this.message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
  }
  submit() {
    if (this.form.invalid || this.status() === 'pending') {
      this.submitted.set(true);
      this.form.markAllAsTouched();
      return;
    }
    this.status.set('pending');
    this.auth.recover(this.form.getRawValue()).subscribe({
      next: result => {
        this.status.set('success');
        this.message.set(`Recovery email sent to ${result.email}`);
      },
      error: error => {
        this.status.set('error');
        this.message.set(error.message);
      }
    });
  }
  isInvalid() {
    const control = this.form.controls.email;
    return control.invalid && (control.dirty || control.touched || this.submitted());
  }
  static {
    this.ɵfac = function RecoverPageComponent_Factory(t) {
      return new (t || RecoverPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RecoverPageComponent,
      selectors: [["dr-recover-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 9,
      consts: [[1, "auth", "auth--recover"], [1, "auth__frame"], ["src", "assets/figma/login/background-large.png", "alt", "", "aria-hidden", "true", 1, "auth__frame-bg"], [1, "auth__card"], ["aria-hidden", "true", 1, "auth__card-map"], ["type", "button", "aria-label", "Back to sign in", "routerLink", "/auth/login", 1, "auth__close"], ["src", "assets/figma/recover/1850_2321.png", "alt", ""], [1, "auth__title"], [1, "auth__subtitle"], ["novalidate", "", 1, "auth__form", 3, "ngSubmit", "formGroup"], ["class", "auth__form-error", 4, "ngIf"], [1, "auth__field"], ["type", "email", "formControlName", "email", "placeholder", "Registered email", "autocomplete", "email"], ["type", "submit", 1, "auth__submit", 3, "disabled"], ["class", "auth__form-status auth__form-status--success", 4, "ngIf"], ["class", "auth__form-status auth__form-status--error", 4, "ngIf"], [1, "auth__form-error"], [1, "auth__form-status", "auth__form-status--success"], [1, "auth__form-status", "auth__form-status--error"]],
      template: function RecoverPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Recover access");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Enter the email associated with your DocRoster account.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RecoverPageComponent_Template_form_ngSubmit_11_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RecoverPageComponent_p_12_Template, 2, 0, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13)(16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RecoverPageComponent_p_18_Template, 2, 1, "p", 14)(19, RecoverPageComponent_p_19_Template, 2, 1, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted() && ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("auth__field--invalid", ctx.isInvalid());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-invalid", ctx.isInvalid());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.status() === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.status() === "pending" ? "Sending\u2026" : "Recover password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "error");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".auth--recover[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  background: #f1f1f1;\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  overflow: auto;\n}\n\n.auth__frame[_ngcontent-%COMP%] {\n  position: relative;\n  width: 1048px;\n  height: 752px;\n  border-radius: 13px;\n  overflow: hidden;\n  background: #f1f1f1;\n}\n\n.auth__frame-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.auth__card[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 328px;\n  top: 84px;\n  width: 393px;\n  height: 374px;\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  backdrop-filter: blur(24px);\n}\n\n.auth__card-map[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 68px;\n  top: 44px;\n  width: 258px;\n  height: 160px;\n  background: url('background-card.png') center/cover no-repeat;\n}\n\n.auth__close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 24px;\n  top: 24px;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n.auth__close[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n.auth__close[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(61, 122, 255, 0.4);\n  border-radius: 50%;\n}\n\n.auth__title[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 218px;\n  margin: 0;\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.374px;\n  color: rgb(10, 23, 72);\n}\n\n.auth__subtitle[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 264px;\n  width: 345px;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: -0.5px;\n  color: rgba(10, 23, 72, 0.8);\n}\n\n.auth__form[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 312px;\n  width: 345px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.auth__form-error[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: -0.2px;\n  color: #ff3d00;\n}\n\n.auth__field[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(10, 23, 72, 0.05);\n  border: 1px solid transparent;\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 13px 16px;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  color: rgb(10, 23, 72);\n}\n.auth__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(10, 23, 72, 0.6);\n}\n.auth__field--invalid[_ngcontent-%COMP%] {\n  border-color: rgba(255, 61, 0, 0.5);\n  box-shadow: 0 0 0 2px rgba(255, 61, 0, 0.12);\n}\n\n.auth__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  border-radius: 24px;\n  border: none;\n  background: rgba(10, 23, 72, 0.8);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  cursor: pointer;\n}\n.auth__submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.auth__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.auth__form-status[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 12px;\n  letter-spacing: -0.2px;\n  font-weight: 600;\n}\n.auth__form-status--success[_ngcontent-%COMP%] {\n  color: #21b128;\n}\n.auth__form-status--error[_ngcontent-%COMP%] {\n  color: #ff3d00;\n}\n\n@media (max-width: 1160px) {\n  .auth__frame[_ngcontent-%COMP%] {\n    transform: scale(0.85);\n  }\n}\n@media (max-width: 960px) {\n  .auth__frame[_ngcontent-%COMP%] {\n    transform: scale(0.7);\n  }\n}\n@media (max-width: 720px) {\n  .auth__frame[_ngcontent-%COMP%] {\n    transform: scale(0.6);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL3JlY292ZXItcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJIQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSkY7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFuRmM7QUE2RWhCOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBTkY7O0FBU0E7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ3ZHYTtBRGlHZjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQXhIbUI7RUF5SG5CLDZCQUFBO0FBTkY7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkF0SVk7QUFnSWhCO0FBUUk7RUFDRSw0QkFBQTtBQU5OO0FBVUU7RUFDRSxtQ0FBQTtFQUNBLDRDQUFBO0FBUko7O0FBWUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQVRGO0FBV0U7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBVEo7QUFZRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQVZKOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBWEY7QUFhRTtFQUNFLGNDM0tZO0FEZ0toQjtBQWNFO0VBQ0UsY0M3S1c7QURpS2Y7O0FBZ0JBO0VBQ0U7SUFDRSxzQkFBQTtFQWJGO0FBQ0Y7QUFnQkE7RUFDRTtJQUNFLHFCQUFBO0VBZEY7QUFDRjtBQWlCQTtFQUNFO0lBQ0UscUJBQUE7RUFmRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuJGZpZ21hLXByaW1hcnk6IHJnYmEoMTAsIDIzLCA3MiwgMSk7XG4kZmlnbWEtcHJpbWFyeS1zb2Z0OiByZ2JhKDEwLCAyMywgNzIsIDAuMDUpO1xuXG4uYXV0aC0tcmVjb3ZlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gRGlzcGxheScsICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmF1dGhfX2ZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTA0OHB4O1xuICBoZWlnaHQ6IDc1MnB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4uYXV0aF9fZnJhbWUtYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmF1dGhfX2NhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMyOHB4O1xuICB0b3A6IDg0cHg7XG4gIHdpZHRoOiAzOTNweDtcbiAgaGVpZ2h0OiAzNzRweDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgYm94LXNoYWRvdzogMCA0MHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI0cHgpO1xufVxuXG4uYXV0aF9fY2FyZC1tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDY4cHg7XG4gIHRvcDogNDRweDtcbiAgd2lkdGg6IDI1OHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9maWdtYS9sb2dpbi9iYWNrZ3JvdW5kLWNhcmQucG5nJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbn1cblxuLmF1dGhfX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgdG9wOiAyNHB4O1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4uYXV0aF9fdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogMjE4cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zNzRweDtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xufVxuXG4uYXV0aF9fc3VidGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogMjY0cHg7XG4gIHdpZHRoOiAzNDVweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjgpO1xufVxuXG4uYXV0aF9fZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjRweDtcbiAgdG9wOiAzMTJweDtcbiAgd2lkdGg6IDM0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5hdXRoX19mb3JtLWVycm9yIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGNvbG9yOiAkY29sb3ItZGFuZ2VyO1xufVxuXG4uYXV0aF9fZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICRmaWdtYS1wcmltYXJ5LXNvZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMTNweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNik7XG4gICAgfVxuICB9XG5cbiAgJi0taW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci1kYW5nZXIsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoJGNvbG9yLWRhbmdlciwgMC4xMik7XG4gIH1cbn1cblxuLmF1dGhfX3N1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwgMjMsIDcyLCAwLjgpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cblxuLmF1dGhfX2Zvcm0tc3RhdHVzIHtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgJi0tc3VjY2VzcyB7XG4gICAgY29sb3I6ICRjb2xvci1zdWNjZXNzO1xuICB9XG5cbiAgJi0tZXJyb3Ige1xuICAgIGNvbG9yOiAkY29sb3ItZGFuZ2VyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTYwcHgpIHtcbiAgLmF1dGhfX2ZyYW1lIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuYXV0aF9fZnJhbWUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmF1dGhfX2ZyYW1lIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjM2Q3YWZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzFlM2E4YTtcbiRjb2xvci1zZWNvbmRhcnk6ICMyMWIxMjg7XG4kY29sb3ItYWNjZW50OiAjZmYzZDk2O1xuJGNvbG9yLWJhY2tncm91bmQ6ICNmNWY2ZmY7XG4kY29sb3Itc3VyZmFjZTogI2ZmZmZmZjtcbiRjb2xvci1zdXJmYWNlLWFsdDogI2VlZjFmZjtcbiRjb2xvci10ZXh0OiAjMGExNzQ4O1xuJGNvbG9yLXRleHQtbXV0ZWQ6ICM2ZDdiYTE7XG4kY29sb3ItYm9yZGVyOiAjZDVkY2YwO1xuJGNvbG9yLXN1Y2Nlc3M6ICMyMWIxMjg7XG4kY29sb3Itd2FybmluZzogI2ZmNTczZDtcbiRjb2xvci1kYW5nZXI6ICNmZjNkMDA7XG4kcmFkaXVzLXhsOiAyNHB4O1xuJHJhZGl1cy1sZzogMTZweDtcbiRyYWRpdXMtbWQ6IDEycHg7XG4kcmFkaXVzLXNtOiA4cHg7XG4kc3BhY2luZy14czogMC41cmVtO1xuJHNwYWNpbmctc206IDAuNzVyZW07XG4kc3BhY2luZy1tZDogMXJlbTtcbiRzcGFjaW5nLWxnOiAxLjVyZW07XG4kc3BhY2luZy14bDogMnJlbTtcbiRzcGFjaW5nLXh4bDogM3JlbTtcbiRzaGFkb3ctc29mdDogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiRzaGFkb3ctY2FyZDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbiR0cmFuc2l0aW9uLWJhc2U6IDE4MG1zIGVhc2UtaW4tb3V0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gRGlzcGxheScsICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuJG1heC1jb250ZW50LXdpZHRoOiAxMTgwcHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=768.js.map