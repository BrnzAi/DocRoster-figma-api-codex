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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message());
  }
}
function RecoverPageComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
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
    this.form = this.fb.nonNullable.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
    });
    this.message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
  }
  submit() {
    if (this.form.invalid || this.status() === 'pending') {
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
      decls: 17,
      vars: 5,
      consts: [[1, "auth", "section"], [1, "container", "auth__container"], [1, "auth__lead"], [1, "auth__form", 3, "ngSubmit", "formGroup"], ["type", "email", "formControlName", "email", "placeholder", "you@example.com"], ["type", "submit", 1, "button", 3, "disabled"], ["class", "auth__success", 4, "ngIf"], ["class", "auth__error", 4, "ngIf"], [1, "auth__links"], ["routerLink", "/auth/login"], [1, "auth__success"], [1, "auth__error"]],
      template: function RecoverPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Recover your access");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Enter the email you use for DocRoster to receive recovery instructions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RecoverPageComponent_Template_form_ngSubmit_6_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Email address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RecoverPageComponent_p_12_Template, 2, 1, "p", 6)(13, RecoverPageComponent_p_13_Template, 2, 1, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Return to sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.status() === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.status() === "pending" ? "Sending\u2026" : "Send recovery link", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "error");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".auth[_ngcontent-%COMP%] {\n  background: #f9fafc;\n}\n.auth__container[_ngcontent-%COMP%] {\n  max-width: 480px;\n  margin: 0 auto;\n  display: grid;\n  gap: 1.5rem;\n  text-align: center;\n}\n.auth__lead[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.auth__form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  text-align: left;\n}\n.auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 600;\n}\n.auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  font-size: 1rem;\n}\n.auth__links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n.auth__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3552ff;\n  font-weight: 600;\n}\n.auth__success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.auth__error[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL3JlY292ZXItcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJDR2tCO0FESnBCO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0NXUztFRFZULGtCQUFBO0FBREo7QUFJRTtFQUNFLGNDTmU7QURJbkI7QUFLRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUhOO0FBS007RUFDRSxxQkFBQTtFQUNBLG1CQ2RJO0VEZUosMENBQUE7RUFDQSxlQUFBO0FBSFI7QUFRRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNDcEJTO0FEY2I7QUFRSTtFQUNFLGNDMUNVO0VEMkNWLGdCQUFBO0FBTk47QUFVRTtFQUNFLGNDdENZO0FEOEJoQjtBQVdFO0VBQ0UsY0N4Q1c7QUQrQmYiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuXG4uYXV0aCB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlLWFsdDtcblxuICAmX19jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6ICRzcGFjaW5nLWxnO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX2xlYWQge1xuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tdXRlZDtcbiAgfVxuXG4gICZfX2Zvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAkc3BhY2luZy1tZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgbGFiZWwge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdhcDogMC4zNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgcGFkZGluZzogMC44NXJlbSAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLW1kO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuOSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6ICRzcGFjaW5nLW1kO1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuXG4gICZfX3N1Y2Nlc3Mge1xuICAgIGNvbG9yOiAkY29sb3Itc3VjY2VzcztcbiAgfVxuXG4gICZfX2Vycm9yIHtcbiAgICBjb2xvcjogJGNvbG9yLWRhbmdlcjtcbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzNTUyZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWYzYmIzO1xuJGNvbG9yLXNlY29uZGFyeTogIzEzYzRhMztcbiRjb2xvci1hY2NlbnQ6ICNmOTczMTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjdmYjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZjlmYWZjO1xuJGNvbG9yLXRleHQ6ICMxMTE4Mjc7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZiNzI4MDtcbiRjb2xvci1ib3JkZXI6ICNlMmU4ZjA7XG4kY29sb3Itc3VjY2VzczogIzE2YTM0YTtcbiRjb2xvci13YXJuaW5nOiAjZmFjYzE1O1xuJGNvbG9yLWRhbmdlcjogI2RjMjYyNjtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=768.js.map