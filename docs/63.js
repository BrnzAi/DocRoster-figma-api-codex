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







function RegisterPageComponent_p_24_Template(rf, ctx) {
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
function RegisterPageComponent_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Account created! Check your inbox for verification.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class RegisterPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_0__.AuthFacade);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.status = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('idle');
    this.form = this.fb.nonNullable.group({
      fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      organization: ['']
    });
    this.errorMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
  }
  submit() {
    if (this.form.invalid || this.status() === 'pending') {
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
      decls: 29,
      vars: 5,
      consts: [[1, "auth", "section"], [1, "container", "auth__container"], [1, "auth__lead"], [1, "auth__form", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "fullName", "placeholder", "Alex Morgan"], ["type", "email", "formControlName", "email", "placeholder", "you@organization.com"], ["type", "password", "formControlName", "password", "placeholder", "Create a strong password"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Repeat password"], ["type", "text", "formControlName", "organization", "placeholder", "DocRoster Pilot Network"], ["type", "submit", 1, "button", 3, "disabled"], ["class", "auth__error", 4, "ngIf"], ["class", "auth__success", 4, "ngIf"], [1, "auth__links"], ["routerLink", "/auth/login"], [1, "auth__error"], [1, "auth__success"]],
      template: function RegisterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Create your DocRoster account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Join the pilot workspace to manage assessments, network invites and specialists.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_6_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Full name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Work email ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Confirm password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Organization (optional) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterPageComponent_p_24_Template, 2, 1, "p", 10)(25, RegisterPageComponent_p_25_Template, 2, 0, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12)(27, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Already have an account?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.status() === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.status() === "pending" ? "Creating account\u2026" : "Continue", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "error");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status() === "success");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".auth[_ngcontent-%COMP%] {\n  background: #eef1ff;\n}\n.auth__container[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0 auto;\n  display: grid;\n  gap: 1.5rem;\n  text-align: center;\n}\n.auth__lead[_ngcontent-%COMP%] {\n  color: #6d7ba1;\n}\n.auth__form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  text-align: left;\n}\n.auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 600;\n}\n.auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgba(213, 220, 240, 0.9);\n  font-size: 1rem;\n}\n.auth__links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n.auth__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3d7aff;\n  font-weight: 600;\n}\n.auth__error[_ngcontent-%COMP%] {\n  color: #ff3d00;\n}\n.auth__success[_ngcontent-%COMP%] {\n  color: #21b128;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0drQjtBREpwQjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdDV1M7RURWVCxrQkFBQTtBQURKO0FBSUU7RUFDRSxjQ05lO0FESW5CO0FBS0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSEo7QUFLSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQUtNOzs7RUFHRSxxQkFBQTtFQUNBLG1CQ2hCSTtFRGlCSiwwQ0FBQTtFQUNBLGVBQUE7QUFIUjtBQVFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0N0QlM7QURnQmI7QUFRSTtFQUNFLGNDNUNVO0VENkNWLGdCQUFBO0FBTk47QUFVRTtFQUNFLGNDdENXO0FEOEJmO0FBV0U7RUFDRSxjQzVDWTtBRG1DaEIiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuXG4uYXV0aCB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlLWFsdDtcblxuICAmX19jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTIwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6ICRzcGFjaW5nLWxnO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX2xlYWQge1xuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tdXRlZDtcbiAgfVxuXG4gICZfX2Zvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAkc3BhY2luZy1tZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgbGFiZWwge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdhcDogMC4zNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgIGlucHV0W3R5cGU9J2VtYWlsJ10sXG4gICAgICBpbnB1dFt0eXBlPSdwYXNzd29yZCddLFxuICAgICAgaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgICAgICAgcGFkZGluZzogMC44NXJlbSAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLW1kO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuOSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6ICRzcGFjaW5nLW1kO1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuXG4gICZfX2Vycm9yIHtcbiAgICBjb2xvcjogJGNvbG9yLWRhbmdlcjtcbiAgfVxuXG4gICZfX3N1Y2Nlc3Mge1xuICAgIGNvbG9yOiAkY29sb3Itc3VjY2VzcztcbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzZDdhZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWUzYThhO1xuJGNvbG9yLXNlY29uZGFyeTogIzIxYjEyODtcbiRjb2xvci1hY2NlbnQ6ICNmZjNkOTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjZmZjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZWVmMWZmO1xuJGNvbG9yLXRleHQ6ICMwYTE3NDg7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZkN2JhMTtcbiRjb2xvci1ib3JkZXI6ICNkNWRjZjA7XG4kY29sb3Itc3VjY2VzczogIzIxYjEyODtcbiRjb2xvci13YXJuaW5nOiAjZmY1NzNkO1xuJGNvbG9yLWRhbmdlcjogI2ZmM2QwMDtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=63.js.map