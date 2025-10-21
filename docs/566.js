"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[566],{

/***/ 7870:
/*!*************************************************************!*\
  !*** ./src/app/feature/review/data-access/review.facade.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewFacade: () => (/* binding */ ReviewFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);





class ReviewFacade {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__.DocRosterApiService);
  }
  getReview(reviewId) {
    return this.api.getReviewById(reviewId);
  }
  getDoctorForReview(reviewId) {
    return this.getReview(reviewId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(review => review ? this.api.getDoctorById(review.doctorId) : this.api.getDoctors().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => undefined))));
  }
  getClinicForReview(reviewId) {
    return this.getDoctorForReview(reviewId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(doctor => doctor ? this.api.getClinicById(doctor.clinicId) : this.api.getClinics().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => undefined))));
  }
  getReviewContext(reviewId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.getReview(reviewId), this.getDoctorForReview(reviewId), this.getClinicForReview(reviewId)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([review, doctor, clinic]) => ({
      review,
      doctor,
      clinic
    })));
  }
  static {
    this.ɵfac = function ReviewFacade_Factory(t) {
      return new (t || ReviewFacade)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ReviewFacade,
      factory: ReviewFacade.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6566:
/*!************************************************************!*\
  !*** ./src/app/feature/review/ui/review-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewPageComponent: () => (/* binding */ ReviewPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _shared_ui_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/doctor-card/doctor-card.component */ 5831);
/* harmony import */ var _shared_ui_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/review-card/review-card.component */ 9331);
/* harmony import */ var _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/section-header/section-header.component */ 9719);
/* harmony import */ var _data_access_review_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-access/review.facade */ 7870);









function ReviewPageComponent_section_0_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Specialist referenced");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "dr-doctor-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const context_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("doctor", context_r1.doctor)("clinic", context_r1.clinic)("showActions", false);
  }
}
function ReviewPageComponent_section_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "dr-section-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 7)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ReviewPageComponent_section_0_div_1_div_10_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "dr-review-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const review_r2 = ctx.ngIf;
    const context_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", review_r2.headline)("subtitle", review_r2.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Rated ", review_r2.rating, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", review_r2.author, " \u00B7 ", review_r2.role, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 8, review_r2.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", context_r1.doctor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("review", review_r2);
  }
}
function ReviewPageComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReviewPageComponent_section_0_div_1_Template, 13, 11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const context_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const notFound_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", context_r1.review)("ngIfElse", notFound_r3);
  }
}
function ReviewPageComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading story\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ReviewPageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Story not found. Explore other community stories from the map.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class ReviewPageComponent {
  constructor() {
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute);
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_data_access_review_facade__WEBPACK_IMPORTED_MODULE_3__.ReviewFacade);
    this.context$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(params => params.get('id') ?? ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(id => this.facade.getReviewContext(id)));
  }
  static {
    this.ɵfac = function ReviewPageComponent_Factory(t) {
      return new (t || ReviewPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ReviewPageComponent,
      selectors: [["dr-review-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 4,
      consts: [["loading", ""], ["notFound", ""], ["class", "review section", 4, "ngIf", "ngIfElse"], [1, "review", "section"], ["class", "container", 4, "ngIf", "ngIfElse"], [1, "container"], ["badge", "Community review", 3, "title", "subtitle"], [1, "review__meta"], ["class", "review__context", 4, "ngIf"], [1, "review__card"], [3, "review"], [1, "review__context"], [3, "doctor", "clinic", "showActions"], [1, "container", "section"]],
      template: function ReviewPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ReviewPageComponent_section_0_Template, 2, 2, "section", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ReviewPageComponent_ng_template_2_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(4, ReviewPageComponent_ng_template_4_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const loading_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.context$))("ngIfElse", loading_r4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_2__.SectionHeaderComponent, _shared_ui_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_1__.ReviewCardComponent, _shared_ui_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_0__.DoctorCardComponent],
      styles: [".review__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  color: #6d7ba1;\n  margin-top: 0.75rem;\n}\n.review__context[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.review__context[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.review__card[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9yZXZpZXcvdWkvcmV2aWV3LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNDQ2U7RURBZixtQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkNTUztBRFpiO0FBS0k7RUFDRSxtQkNJTztBRFBiO0FBT0U7RUFDRSxnQkNDUztBRE5iIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuLnJldmlldyB7XG4gICZfX21ldGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMC43NXJlbTtcbiAgICBjb2xvcjogJGNvbG9yLXRleHQtbXV0ZWQ7XG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgfVxuXG4gICZfX2NvbnRleHQge1xuICAgIG1hcmdpbi10b3A6ICRzcGFjaW5nLXhsO1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHNwYWNpbmctbWQ7XG4gICAgfVxuICB9XG5cbiAgJl9fY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogJHNwYWNpbmcteGw7XG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjM2Q3YWZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzFlM2E4YTtcbiRjb2xvci1zZWNvbmRhcnk6ICMyMWIxMjg7XG4kY29sb3ItYWNjZW50OiAjZmYzZDk2O1xuJGNvbG9yLWJhY2tncm91bmQ6ICNmNWY2ZmY7XG4kY29sb3Itc3VyZmFjZTogI2ZmZmZmZjtcbiRjb2xvci1zdXJmYWNlLWFsdDogI2VlZjFmZjtcbiRjb2xvci10ZXh0OiAjMGExNzQ4O1xuJGNvbG9yLXRleHQtbXV0ZWQ6ICM2ZDdiYTE7XG4kY29sb3ItYm9yZGVyOiAjZDVkY2YwO1xuJGNvbG9yLXN1Y2Nlc3M6ICMyMWIxMjg7XG4kY29sb3Itd2FybmluZzogI2ZmNTczZDtcbiRjb2xvci1kYW5nZXI6ICNmZjNkMDA7XG4kcmFkaXVzLXhsOiAyNHB4O1xuJHJhZGl1cy1sZzogMTZweDtcbiRyYWRpdXMtbWQ6IDEycHg7XG4kcmFkaXVzLXNtOiA4cHg7XG4kc3BhY2luZy14czogMC41cmVtO1xuJHNwYWNpbmctc206IDAuNzVyZW07XG4kc3BhY2luZy1tZDogMXJlbTtcbiRzcGFjaW5nLWxnOiAxLjVyZW07XG4kc3BhY2luZy14bDogMnJlbTtcbiRzcGFjaW5nLXh4bDogM3JlbTtcbiRzaGFkb3ctc29mdDogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiRzaGFkb3ctY2FyZDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbiR0cmFuc2l0aW9uLWJhc2U6IDE4MG1zIGVhc2UtaW4tb3V0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gRGlzcGxheScsICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuJG1heC1jb250ZW50LXdpZHRoOiAxMTgwcHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=566.js.map