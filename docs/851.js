"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[851],{

/***/ 1851:
/*!**********************************************************!*\
  !*** ./src/app/feature/auth/ui/verify-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyPageComponent: () => (/* binding */ VerifyPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _data_access_auth_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-access/auth.facade */ 5990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







function VerifyPageComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.message());
  }
}
function VerifyPageComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.message());
  }
}
class VerifyPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_5__.AuthFacade);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
    this.email = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(this.route.snapshot.queryParamMap.get('email') ?? '', ...(ngDevMode ? [{
      debugName: "email"
    }] : []));
    this.status = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('idle', ...(ngDevMode ? [{
      debugName: "status"
    }] : []));
    this.message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('', ...(ngDevMode ? [{
      debugName: "message"
    }] : []));
    this.form = this.fb.nonNullable.group({
      code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(6)]]
    });
  }
  submit() {
    if (this.form.invalid || this.status() === 'pending') {
      this.form.markAllAsTouched();
      return;
    }
    this.status.set('pending');
    this.message.set('');
    this.auth.verify({
      email: this.email(),
      code: this.form.getRawValue().code
    }).subscribe({
      next: valid => {
        if (valid) {
          this.status.set('success');
          this.message.set('Verification successful. Redirecting…');
          this.router.navigate(['/profile']);
        } else {
          this.status.set('error');
          this.message.set('The verification code was not accepted.');
        }
      },
      error: error => {
        this.status.set('error');
        this.message.set(error.message);
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function VerifyPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || VerifyPageComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: VerifyPageComponent,
    selectors: [["dr-verify-page"]],
    decls: 22,
    vars: 6,
    consts: [[1, "auth", "section"], [1, "container", "auth__container"], [1, "auth__lead"], [1, "auth__form", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "code", "placeholder", "123456", "maxlength", "6"], ["type", "submit", 1, "button", 3, "disabled"], ["class", "auth__success", 4, "ngIf"], ["class", "auth__error", 4, "ngIf"], [1, "auth__links"], ["routerLink", "/auth/recover"], ["routerLink", "/auth/login"], [1, "auth__success"], [1, "auth__error"]],
    template: function VerifyPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Verify your DocRoster account");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Enter the 6-digit code sent to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function VerifyPageComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Verification code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, VerifyPageComponent_p_15_Template, 2, 1, "p", 6)(16, VerifyPageComponent_p_16_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 8)(18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Resend code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Back to sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.email() || "your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.status() === "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.status() === "pending" ? "Verifying\u2026" : "Verify account", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.status() === "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.status() === "error");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    styles: [".auth[_ngcontent-%COMP%] {\n  background: #eef1ff;\n}\n.auth__container[_ngcontent-%COMP%] {\n  max-width: 440px;\n  margin: 0 auto;\n  display: grid;\n  gap: 1.5rem;\n  text-align: center;\n}\n.auth__lead[_ngcontent-%COMP%] {\n  color: #6d7ba1;\n}\n.auth__form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  text-align: left;\n}\n.auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 600;\n}\n.auth__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgba(213, 220, 240, 0.9);\n  font-size: 1.2rem;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n  text-align: center;\n}\n.auth__links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n.auth__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3d7aff;\n  font-weight: 600;\n}\n.auth__success[_ngcontent-%COMP%] {\n  color: #21b128;\n}\n.auth__error[_ngcontent-%COMP%] {\n  color: #ff3d00;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hdXRoL3VpL3ZlcmlmeS1wYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkNHa0I7QURKcEI7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQ1dTO0VEVlQsa0JBQUE7QUFESjtBQUlFO0VBQ0UsY0NOZTtBREluQjtBQUtFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSE47QUFLTTtFQUNFLHFCQUFBO0VBQ0EsbUJDZEk7RURlSiwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSFI7QUFRRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNDdkJTO0FEaUJiO0FBUUk7RUFDRSxjQzdDVTtFRDhDVixnQkFBQTtBQU5OO0FBVUU7RUFDRSxjQ3pDWTtBRGlDaEI7QUFXRTtFQUNFLGNDM0NXO0FEa0NmIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuLmF1dGgge1xuICBiYWNrZ3JvdW5kOiAkY29sb3Itc3VyZmFjZS1hbHQ7XG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAkc3BhY2luZy1sZztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmX19sZWFkIHtcbiAgICBjb2xvcjogJGNvbG9yLXRleHQtbXV0ZWQ7XG4gIH1cblxuICAmX19mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogJHNwYWNpbmctbWQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBnYXA6IDAuMzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHBhZGRpbmc6IDAuODVyZW0gMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1tZDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItYm9yZGVyLCAwLjkpO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2xpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogJHNwYWNpbmctbWQ7XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cbiAgJl9fc3VjY2VzcyB7XG4gICAgY29sb3I6ICRjb2xvci1zdWNjZXNzO1xuICB9XG5cbiAgJl9fZXJyb3Ige1xuICAgIGNvbG9yOiAkY29sb3ItZGFuZ2VyO1xuICB9XG59XG4iLCIkY29sb3ItcHJpbWFyeTogIzNkN2FmZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMxZTNhOGE7XG4kY29sb3Itc2Vjb25kYXJ5OiAjMjFiMTI4O1xuJGNvbG9yLWFjY2VudDogI2ZmM2Q5NjtcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZjVmNmZmO1xuJGNvbG9yLXN1cmZhY2U6ICNmZmZmZmY7XG4kY29sb3Itc3VyZmFjZS1hbHQ6ICNlZWYxZmY7XG4kY29sb3ItdGV4dDogIzBhMTc0ODtcbiRjb2xvci10ZXh0LW11dGVkOiAjNmQ3YmExO1xuJGNvbG9yLWJvcmRlcjogI2Q1ZGNmMDtcbiRjb2xvci1zdWNjZXNzOiAjMjFiMTI4O1xuJGNvbG9yLXdhcm5pbmc6ICNmZjU3M2Q7XG4kY29sb3ItZGFuZ2VyOiAjZmYzZDAwO1xuJHJhZGl1cy14bDogMjRweDtcbiRyYWRpdXMtbGc6IDE2cHg7XG4kcmFkaXVzLW1kOiAxMnB4O1xuJHJhZGl1cy1zbTogOHB4O1xuJHNwYWNpbmcteHM6IDAuNXJlbTtcbiRzcGFjaW5nLXNtOiAwLjc1cmVtO1xuJHNwYWNpbmctbWQ6IDFyZW07XG4kc3BhY2luZy1sZzogMS41cmVtO1xuJHNwYWNpbmcteGw6IDJyZW07XG4kc3BhY2luZy14eGw6IDNyZW07XG4kc2hhZG93LXNvZnQ6IDAgMjBweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4kc2hhZG93LWNhcmQ6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG4kdHJhbnNpdGlvbi1iYXNlOiAxODBtcyBlYXNlLWluLW91dDtcbiRmb250LWZhbWlseS1iYXNlOiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIERpc3BsYXknLCAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiRtYXgtY29udGVudC13aWR0aDogMTE4MHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=851.js.map