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

/***/ }),

/***/ 9331:
/*!****************************************************************!*\
  !*** ./src/app/shared/ui/review-card/review-card.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewCardComponent: () => (/* binding */ ReviewCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


function ReviewCardComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", tag_r1, "");
  }
}
class ReviewCardComponent {
  static {
    this.ɵfac = function ReviewCardComponent_Factory(t) {
      return new (t || ReviewCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewCardComponent,
      selectors: [["dr-review-card"]],
      inputs: {
        review: "review"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 10,
      consts: [[1, "review-card", "surface"], [1, "review-card__header"], [1, "review-card__date"], [1, "review-card__comment"], [1, "review-card__footer"], ["class", "review-card__tag", 4, "ngFor", "ngForOf"], [1, "review-card__tag"]],
      template: function ReviewCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0)(1, "header", 1)(2, "div")(3, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReviewCardComponent_span_13_Template, 2, 1, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review.headline);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Rated ", ctx.review.rating, "/5 by ", ctx.review.author, " \u00B7 ", ctx.review.role, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, ctx.review.createdAt, "mediumDate"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review.comment);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.review.tags);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgFor],
      styles: [".review-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  padding: clamp(1.5rem, 3vw, 2rem);\n}\n.review-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.review-card__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n}\n.review-card__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0 0;\n  color: #6d7ba1;\n}\n.review-card__date[_ngcontent-%COMP%] {\n  color: #6d7ba1;\n  font-size: 0.9rem;\n}\n.review-card__comment[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.7;\n  font-size: 1.02rem;\n}\n.review-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.review-card__tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1px solid rgba(213, 220, 240, 0.8);\n  font-weight: 500;\n  color: #0a1748;\n  transition: background 180ms ease-in-out, color 180ms ease-in-out, border-color 180ms ease-in-out;\n  background: rgba(33, 177, 40, 0.12);\n  border: none;\n  color: #21b128;\n}\n.review-card__tag--active[_ngcontent-%COMP%] {\n  background: rgba(61, 122, 255, 0.12);\n  color: #3d7aff;\n  border-color: rgba(61, 122, 255, 0.4);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL3Jldmlldy1jYXJkL3Jldmlldy1jYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL191dGlsaXRpZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxTQ2NXO0VEYlgsaUNBQUE7QUFGRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0NRUztFRFBULGVBQUE7QUFGSjtBQUlJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBRk47QUFLSTtFQUNFLG9CQUFBO0VBQ0EsY0NiYTtBRFVuQjtBQU9FO0VBQ0UsY0NsQmU7RURtQmYsaUJBQUE7QUFMSjtBQVFFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUEo7QUFVRTtFRUZBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CRHhDYztFQ3lDZCwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0R6Q1c7RUMwQ1gsaUdBQUE7RUZMRSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQzVDYztBRDZDbEI7QUVJRTtFQUNFLG9DQUFBO0VBQ0EsY0RyRFk7RUNzRFoscUNBQUE7QUZGSiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3N0eWxlcy92YXJpYWJsZXMnIGFzICo7XG5AdXNlICdzdHlsZXMvdXRpbGl0aWVzJyBhcyB1dGlsO1xuXG4ucmV2aWV3LWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6ICRzcGFjaW5nLW1kO1xuICBwYWRkaW5nOiBjbGFtcCgxLjVyZW0sIDN2dywgMnJlbSk7XG5cbiAgJl9faGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6ICRzcGFjaW5nLW1kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMC40cmVtIDAgMCAwO1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgIH1cbiAgfVxuXG4gICZfX2RhdGUge1xuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tdXRlZDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuXG4gICZfX2NvbW1lbnQge1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICAgIGZvbnQtc2l6ZTogMS4wMnJlbTtcbiAgfVxuXG4gICZfX2Zvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cblxuICAmX190YWcge1xuICAgIEBpbmNsdWRlIHV0aWwuY2hpcDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1zZWNvbmRhcnksIDAuMTIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzZDdhZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWUzYThhO1xuJGNvbG9yLXNlY29uZGFyeTogIzIxYjEyODtcbiRjb2xvci1hY2NlbnQ6ICNmZjNkOTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjZmZjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZWVmMWZmO1xuJGNvbG9yLXRleHQ6ICMwYTE3NDg7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZkN2JhMTtcbiRjb2xvci1ib3JkZXI6ICNkNWRjZjA7XG4kY29sb3Itc3VjY2VzczogIzIxYjEyODtcbiRjb2xvci13YXJuaW5nOiAjZmY1NzNkO1xuJGNvbG9yLWRhbmdlcjogI2ZmM2QwMDtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiIsIkB1c2UgJ3ZhcmlhYmxlcycgYXMgKjtcblxuQG1peGluIGJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4xMik7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuQG1peGluIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRjb2xvci1wcmltYXJ5LCAkY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgY29sb3I6ICRjb2xvci1zdXJmYWNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb24tYmFzZSwgYm94LXNoYWRvdyAkdHJhbnNpdGlvbi1iYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWNhcmQ7XG4gIH1cblxuICAmLS1naG9zdCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4wOCk7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICB9XG59XG5cbkBtaXhpbiBjaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuOCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAkY29sb3ItdGV4dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAkdHJhbnNpdGlvbi1iYXNlLCBjb2xvciAkdHJhbnNpdGlvbi1iYXNlLCBib3JkZXItY29sb3IgJHRyYW5zaXRpb24tYmFzZTtcblxuICAmLS1hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=566.js.map