"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[50],{

/***/ 1768:
/*!*************************************************************!*\
  !*** ./src/app/feature/upload/data-access/upload.facade.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFacade: () => (/* binding */ UploadFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _shared_data_access_mock_http_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data-access/mock-http-client.service */ 2592);




class UploadFacade {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_shared_data_access_mock_http_client_service__WEBPACK_IMPORTED_MODULE_0__.MockHttpClientService);
    this.progressSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(0);
    this.uploadingSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.progress = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.progressSignal());
    this.isUploading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.uploadingSignal());
  }
  upload(request) {
    this.uploadingSignal.set(true);
    this.progressSignal.set(30);
    return this.http.mutate(() => {
      this.progressSignal.set(85);
      const result = {
        id: `upload-${crypto.randomUUID()}`,
        nextStep: `Our clinical review team will audit ${request.title} and structure the submission.`,
        eta: '24 business hours'
      };
      return result;
    }, 450).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this.progressSignal.set(100)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.uploadingSignal.set(false)));
  }
  reset() {
    this.progressSignal.set(0);
    this.uploadingSignal.set(false);
  }
  static {
    this.ɵfac = function UploadFacade_Factory(t) {
      return new (t || UploadFacade)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UploadFacade,
      factory: UploadFacade.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2050:
/*!************************************************************!*\
  !*** ./src/app/feature/upload/ui/upload-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadPageComponent: () => (/* binding */ UploadPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/section-header/section-header.component */ 9719);
/* harmony import */ var _data_access_upload_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-access/upload.facade */ 1768);







function UploadPageComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Progress: ", ctx_r0.progress(), "%");
  }
}
function UploadPageComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.result());
  }
}
function UploadPageComponent_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.result());
  }
}
class UploadPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder);
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_data_access_upload_facade__WEBPACK_IMPORTED_MODULE_1__.UploadFacade);
    this.form = this.fb.nonNullable.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4)]],
      organization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      summary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(12)]],
      fileName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.status = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('idle');
    this.progress = this.facade.progress;
    this.isUploading = this.facade.isUploading;
    this.result = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null);
  }
  submit() {
    if (this.form.invalid || this.status() === 'uploading') {
      this.form.markAllAsTouched();
      return;
    }
    this.status.set('uploading');
    this.facade.upload(this.form.getRawValue()).subscribe({
      next: response => {
        this.status.set('complete');
        this.result.set(`Submission ${response.id} queued · ${response.nextStep} (ETA ${response.eta})`);
        this.form.reset({
          title: '',
          organization: '',
          category: '',
          summary: '',
          fileName: ''
        });
      },
      error: error => {
        this.status.set('error');
        this.result.set(error.message);
      }
    });
  }
  static {
    this.ɵfac = function UploadPageComponent_Factory(t) {
      return new (t || UploadPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: UploadPageComponent,
      selectors: [["dr-upload-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 24,
      vars: 6,
      consts: [[1, "upload", "section"], [1, "container"], ["title", "Upload organization assessments", "subtitle", "Share structured assessments, readiness scans or checklists with the DocRoster review team.", "badge", "Uploader"], [1, "upload__form", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "title", "placeholder", "Northstar Quality Sprint"], ["type", "text", "formControlName", "organization", "placeholder", "Northstar Health Alliance"], ["type", "text", "formControlName", "category", "placeholder", "Care coordination"], ["formControlName", "summary", "rows", "4", "placeholder", "Outline the goal, scope and next actions"], ["type", "text", "formControlName", "fileName", "placeholder", "assessment.pdf"], ["type", "submit", 1, "button", 3, "disabled"], ["class", "upload__progress", 4, "ngIf"], ["class", "upload__message", 4, "ngIf"], ["class", "upload__error", 4, "ngIf"], [1, "upload__progress"], [1, "upload__message"], [1, "upload__error"]],
      template: function UploadPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "dr-section-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UploadPageComponent_Template_form_ngSubmit_3_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Title ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Organization ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Category ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Summary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "textarea", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " File name (mock) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, UploadPageComponent_div_21_Template, 3, 1, "div", 10)(22, UploadPageComponent_p_22_Template, 2, 1, "p", 11)(23, UploadPageComponent_p_23_Template, 2, 1, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isUploading());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isUploading() ? "Uploading\u2026" : "Submit for review", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUploading());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status() === "complete");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status() === "error");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_0__.SectionHeaderComponent],
      styles: [".upload[_ngcontent-%COMP%] {\n  background: #f9fafc;\n}\n.upload__form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  max-width: 640px;\n  margin: 0 auto;\n}\n.upload__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 600;\n}\n.upload__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .upload__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  font-size: 1rem;\n}\n.upload__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.upload__progress[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 0.75rem 1rem;\n  color: #3552ff;\n}\n.upload__message[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.upload__error[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS91cGxvYWQvdWkvdXBsb2FkLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0drQjtBREpwQjtBQUdFO0VBQ0UsYUFBQTtFQUNBLFNDWVM7RURYVCxnQkFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUROO0FBR007O0VBRUUscUJBQUE7RUFDQSxtQkNKSTtFREtKLDBDQUFBO0VBQ0EsZUFBQTtBQURSO0FBSU07RUFDRSxnQkFBQTtBQUZSO0FBT0U7RUFDRSxtQkMxQlk7RUQyQlosbUJDakJRO0VEa0JSLHFCQUFBO0VBQ0EsY0NsQ1k7QUQ2QmhCO0FBUUU7RUFDRSxjQzVCWTtBRHNCaEI7QUFTRTtFQUNFLGNDOUJXO0FEdUJmIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuLnVwbG9hZCB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlLWFsdDtcblxuICAmX19mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogJHNwYWNpbmctbWQ7XG4gICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBnYXA6IDAuMzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICBpbnB1dCxcbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgcGFkZGluZzogMC44NXJlbSAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLW1kO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuOSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgdGV4dGFyZWEge1xuICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX3Byb2dyZXNzIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3Itc3VyZmFjZTtcbiAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLW1kO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gIH1cblxuICAmX19tZXNzYWdlIHtcbiAgICBjb2xvcjogJGNvbG9yLXN1Y2Nlc3M7XG4gIH1cblxuICAmX19lcnJvciB7XG4gICAgY29sb3I6ICRjb2xvci1kYW5nZXI7XG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjMzU1MmZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzFmM2JiMztcbiRjb2xvci1zZWNvbmRhcnk6ICMxM2M0YTM7XG4kY29sb3ItYWNjZW50OiAjZjk3MzE2O1xuJGNvbG9yLWJhY2tncm91bmQ6ICNmNWY3ZmI7XG4kY29sb3Itc3VyZmFjZTogI2ZmZmZmZjtcbiRjb2xvci1zdXJmYWNlLWFsdDogI2Y5ZmFmYztcbiRjb2xvci10ZXh0OiAjMTExODI3O1xuJGNvbG9yLXRleHQtbXV0ZWQ6ICM2YjcyODA7XG4kY29sb3ItYm9yZGVyOiAjZTJlOGYwO1xuJGNvbG9yLXN1Y2Nlc3M6ICMxNmEzNGE7XG4kY29sb3Itd2FybmluZzogI2ZhY2MxNTtcbiRjb2xvci1kYW5nZXI6ICNkYzI2MjY7XG4kcmFkaXVzLXhsOiAyNHB4O1xuJHJhZGl1cy1sZzogMTZweDtcbiRyYWRpdXMtbWQ6IDEycHg7XG4kcmFkaXVzLXNtOiA4cHg7XG4kc3BhY2luZy14czogMC41cmVtO1xuJHNwYWNpbmctc206IDAuNzVyZW07XG4kc3BhY2luZy1tZDogMXJlbTtcbiRzcGFjaW5nLWxnOiAxLjVyZW07XG4kc3BhY2luZy14bDogMnJlbTtcbiRzcGFjaW5nLXh4bDogM3JlbTtcbiRzaGFkb3ctc29mdDogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiRzaGFkb3ctY2FyZDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbiR0cmFuc2l0aW9uLWJhc2U6IDE4MG1zIGVhc2UtaW4tb3V0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuJG1heC1jb250ZW50LXdpZHRoOiAxMTgwcHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9719:
/*!**********************************************************************!*\
  !*** ./src/app/shared/ui/section-header/section-header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionHeaderComponent: () => (/* binding */ SectionHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = [[["", "actions", ""]]];
const _c1 = ["[actions]"];
function SectionHeaderComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.badge);
  }
}
function SectionHeaderComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.subtitle);
  }
}
class SectionHeaderComponent {
  static {
    this.ɵfac = function SectionHeaderComponent_Factory(t) {
      return new (t || SectionHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionHeaderComponent,
      selectors: [["dr-section-header"]],
      inputs: {
        title: "title",
        subtitle: "subtitle",
        badge: "badge"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 3,
      consts: [[1, "section-header"], [1, "section-header__titles"], ["class", "section-header__badge", 4, "ngIf"], [1, "section-header__title"], ["class", "section-header__subtitle", 4, "ngIf"], [1, "section-header__actions"], [1, "section-header__badge"], [1, "section-header__subtitle"]],
      template: function SectionHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectionHeaderComponent_span_2_Template, 2, 1, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SectionHeaderComponent_p_5_Template, 2, 1, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.badge);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.section-header__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  background: rgba(53, 82, 255, 0.12);\n  color: #3552ff;\n  margin-bottom: 0.75rem;\n}\n.section-header__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.75rem, 3vw, 2.4rem);\n  font-weight: 700;\n}\n.section-header__subtitle[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0 0;\n  color: #6b7280;\n  max-width: 560px;\n  line-height: 1.6;\n}\n.section-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL191dGlsaXRpZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0NhVztFRFpYLGVBQUE7QUFGRjtBQUlFO0VFUEEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0RYYztFRFlaLHNCQUFBO0FBTUo7QUFIRTtFQUNFLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FBS0o7QUFGRTtFQUNFLHFCQUFBO0VBQ0EsY0NmZTtFRGdCZixnQkFBQTtFQUNBLGdCQUFBO0FBSUo7QUFERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFHSiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3N0eWxlcy92YXJpYWJsZXMnIGFzICo7XG5AdXNlICdzdHlsZXMvdXRpbGl0aWVzJyBhcyB1dGlsO1xuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6ICRzcGFjaW5nLWxnO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgJl9fYmFkZ2Uge1xuICAgIEBpbmNsdWRlIHV0aWwuYmFkZ2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjc1cmVtLCAzdncsIDIuNHJlbSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gICZfX3N1YnRpdGxlIHtcbiAgICBtYXJnaW46IDAuNzVyZW0gMCAwIDA7XG4gICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgIG1heC13aWR0aDogNTYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgfVxuXG4gICZfX2FjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjMzU1MmZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzFmM2JiMztcbiRjb2xvci1zZWNvbmRhcnk6ICMxM2M0YTM7XG4kY29sb3ItYWNjZW50OiAjZjk3MzE2O1xuJGNvbG9yLWJhY2tncm91bmQ6ICNmNWY3ZmI7XG4kY29sb3Itc3VyZmFjZTogI2ZmZmZmZjtcbiRjb2xvci1zdXJmYWNlLWFsdDogI2Y5ZmFmYztcbiRjb2xvci10ZXh0OiAjMTExODI3O1xuJGNvbG9yLXRleHQtbXV0ZWQ6ICM2YjcyODA7XG4kY29sb3ItYm9yZGVyOiAjZTJlOGYwO1xuJGNvbG9yLXN1Y2Nlc3M6ICMxNmEzNGE7XG4kY29sb3Itd2FybmluZzogI2ZhY2MxNTtcbiRjb2xvci1kYW5nZXI6ICNkYzI2MjY7XG4kcmFkaXVzLXhsOiAyNHB4O1xuJHJhZGl1cy1sZzogMTZweDtcbiRyYWRpdXMtbWQ6IDEycHg7XG4kcmFkaXVzLXNtOiA4cHg7XG4kc3BhY2luZy14czogMC41cmVtO1xuJHNwYWNpbmctc206IDAuNzVyZW07XG4kc3BhY2luZy1tZDogMXJlbTtcbiRzcGFjaW5nLWxnOiAxLjVyZW07XG4kc3BhY2luZy14bDogMnJlbTtcbiRzcGFjaW5nLXh4bDogM3JlbTtcbiRzaGFkb3ctc29mdDogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiRzaGFkb3ctY2FyZDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbiR0cmFuc2l0aW9uLWJhc2U6IDE4MG1zIGVhc2UtaW4tb3V0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuJG1heC1jb250ZW50LXdpZHRoOiAxMTgwcHg7XG4iLCJAdXNlICd2YXJpYWJsZXMnIGFzICo7XG5cbkBtaXhpbiBiYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG59XG5cbkBtaXhpbiBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkY29sb3ItcHJpbWFyeSwgJGNvbG9yLXByaW1hcnktZGFyayk7XG4gIGNvbG9yOiAkY29sb3Itc3VyZmFjZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR0cmFuc2l0aW9uLWJhc2UsIGJveC1zaGFkb3cgJHRyYW5zaXRpb24tYmFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1jYXJkO1xuICB9XG5cbiAgJi0tZ2hvc3Qge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMDgpO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgfVxufVxuXG5AbWl4aW4gY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAkY29sb3Itc3VyZmFjZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItYm9yZGVyLCAwLjgpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgJHRyYW5zaXRpb24tYmFzZSwgY29sb3IgJHRyYW5zaXRpb24tYmFzZSwgYm9yZGVyLWNvbG9yICR0cmFuc2l0aW9uLWJhc2U7XG5cbiAgJi0tYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjEyKTtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=50.js.map