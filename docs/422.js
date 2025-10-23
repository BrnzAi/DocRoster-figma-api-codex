"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[422],{

/***/ 1422:
/*!************************************************************!*\
  !*** ./src/app/feature/search/ui/search-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPageComponent: () => (/* binding */ SearchPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var _data_access_search_facade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data-access/search.facade */ 2566);
/* harmony import */ var _shared_data_access_map_state_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/data-access/map-state.service */ 6991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;











function SearchPageComponent_ng_container_0_ng_container_18_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mouseenter", function SearchPageComponent_ng_container_0_ng_container_18_li_2_Template_li_mouseenter_0_listener() {
      const result_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.setActiveDoctor(result_r4.doctor.id));
    })("focusin", function SearchPageComponent_ng_container_0_ng_container_18_li_2_Template_li_focusin_0_listener() {
      const result_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.setActiveDoctor(result_r4.doctor.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_ng_container_18_li_2_Template_button_click_1_listener() {
      const result_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openDoctor(result_r4.doctor.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-active", ctx_r1.mapState.activeDoctorId() === result_r4.doctor.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", result_r4.doctor.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("alt", result_r4.doctor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](result_r4.doctor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](result_r4.doctor.specialty);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](result_r4.clinic.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"]("", result_r4.clinic.address.street, ", ", result_r4.clinic.address.city, ", ", result_r4.clinic.address.state);
  }
}
function SearchPageComponent_ng_container_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, SearchPageComponent_ng_container_0_ng_container_18_li_2_Template, 13, 10, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const results_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", results_r5)("ngForTrackBy", ctx_r1.trackByDoctor);
  }
}
function SearchPageComponent_ng_container_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No specialists match the current filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SearchPageComponent_ng_container_0_div_21_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_div_21_button_18_Template_button_click_0_listener() {
      const option_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectSorting(option_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-active", ctx_r1.isSortingActive(option_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r8.label, " ");
  }
}
function SearchPageComponent_ng_container_0_div_21_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_div_21_button_23_Template_button_click_0_listener() {
      const option_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleFee(option_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-active", ctx_r1.isFeeActive(option_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r10.label, " ");
  }
}
function SearchPageComponent_ng_container_0_div_21_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_div_21_button_28_Template_button_click_0_listener() {
      const option_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectGender(option_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-active", ctx_r1.isGenderActive(option_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r12.label, " ");
  }
}
function SearchPageComponent_ng_container_0_div_21_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_div_21_button_33_Template_button_click_0_listener() {
      const option_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleLocation(option_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-active", ctx_r1.isLocationActive(option_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r14.label, " ");
  }
}
function SearchPageComponent_ng_container_0_div_21_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_div_21_button_38_Template_button_click_0_listener() {
      const option_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleCare(option_r16.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-active", ctx_r1.isCareActive(option_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r16.label, " ");
  }
}
function SearchPageComponent_ng_container_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_div_21_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "article", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_div_21_Template_article_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "header", 24)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Filter specialists");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 25)(9, "div", 26)(10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_div_21_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.applyFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_div_21_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_div_21_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 30)(14, "section", 31)(15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Sorting");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, SearchPageComponent_ng_container_0_div_21_button_18_Template, 2, 3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "section", 31)(20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, SearchPageComponent_ng_container_0_div_21_button_23_Template, 2, 3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "section", 31)(25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, SearchPageComponent_ng_container_0_div_21_button_28_Template, 2, 3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "section", 31)(30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, SearchPageComponent_ng_container_0_div_21_button_33_Template, 2, 3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "section", 31)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, SearchPageComponent_ng_container_0_div_21_button_38_Template, 2, 3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.sortingOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.feeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.genderOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.locationOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.careOptions);
  }
}
function SearchPageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "section", 2)(2, "div", 3)(3, "label", 4)(4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SearchPageComponent_ng_container_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "input", 6)(6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "a", 8)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 9)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Search results for");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, SearchPageComponent_ng_container_0_ng_container_18_Template, 3, 2, "ng-container", 11)(19, SearchPageComponent_ng_container_0_ng_template_19_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, SearchPageComponent_ng_container_0_div_21_Template, 39, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const results_r5 = ctx.ngIf;
    const emptyList_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("is-active", ctx_r1.hasActiveFilters());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.searchControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.searchControl.value ? ctx_r1.searchControl.value : ctx_r1.defaultPrompt);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", results_r5.length, " specialists");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("search-panel__results--empty", !results_r5.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", results_r5.length)("ngIfElse", emptyList_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.showFilters());
  }
}
const FEE_ORDER = {
  low: 0,
  medium: 1,
  high: 2
};
const LOCATION_LOOKUP = {
  belleville: 'Belleville',
  'sault-ste-marie': 'Sault Ste. Marie',
  'thunder-bay': 'Thunder Bay'
};
const SORTING_OPTIONS = [{
  id: 'fee',
  label: 'Fee'
}, {
  id: 'distance',
  label: 'Distance'
}, {
  id: 'availability',
  label: 'Availability'
}];
const FEE_OPTIONS = [{
  id: 'low',
  label: 'Low'
}, {
  id: 'medium',
  label: 'Medium'
}, {
  id: 'high',
  label: 'High'
}];
const GENDER_OPTIONS = [{
  id: 'any',
  label: 'Any'
}, {
  id: 'male',
  label: 'Male'
}, {
  id: 'female',
  label: 'Female'
}];
const LOCATION_OPTIONS = [{
  id: 'belleville',
  label: 'Belleville'
}, {
  id: 'sault-ste-marie',
  label: 'Sault Ste. Marie'
}, {
  id: 'thunder-bay',
  label: 'Thunder Bay'
}];
const CARE_OPTIONS = [{
  id: 'hybrid',
  label: 'Hybrid'
}, {
  id: 'inperson',
  label: 'In-person'
}, {
  id: 'virtual',
  label: 'Virtual'
}];
const createDefaultFilters = () => ({
  sorting: 'availability',
  fee: null,
  gender: 'any',
  location: null,
  care: null
});
const cloneFilters = filters => ({
  ...filters
});
const filtersEqual = (a, b) => a.sorting === b.sorting && a.fee === b.fee && a.gender === b.gender && a.location === b.location && a.care === b.care;
const parseTimeToMinutes = value => {
  const [hours, minutes] = value.split(':').map(part => Number.parseInt(part, 10));
  if (Number.isFinite(hours) && Number.isFinite(minutes)) {
    return hours * 60 + minutes;
  }
  return Number.MAX_SAFE_INTEGER;
};
const resolveFeeRank = tier => {
  if (!tier) {
    return Number.MAX_SAFE_INTEGER;
  }
  return FEE_ORDER[tier];
};
class SearchPageComponent {
  constructor() {
    this.searchFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_search_facade__WEBPACK_IMPORTED_MODULE_10__.SearchFacade);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.mapState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_shared_data_access_map_state_service__WEBPACK_IMPORTED_MODULE_11__.MapStateService);
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
      nonNullable: true
    });
    this.searchTerm$ = this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''));
    this.results$ = this.searchFacade.results$;
    this.defaultPrompt = 'Find me an Occupational Therapist who travels to Thunder Bay for catastrophic assessments';
    this.appliedFilters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(createDefaultFilters(), ...(ngDevMode ? [{
      debugName: "appliedFilters"
    }] : []));
    this.workingFilters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(createDefaultFilters(), ...(ngDevMode ? [{
      debugName: "workingFilters"
    }] : []));
    this.showFilters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "showFilters"
    }] : []));
    this.hasActiveFilters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => !filtersEqual(this.appliedFilters(), createDefaultFilters()), ...(ngDevMode ? [{
      debugName: "hasActiveFilters"
    }] : []));
    this.appliedFilters$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.toObservable)(this.appliedFilters);
    this.filteredResults$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.results$, this.searchTerm$, this.appliedFilters$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([results, term, filters]) => {
      const query = (term ?? '').trim().toLowerCase();
      const normalizedLocation = filters.location ? LOCATION_LOOKUP[filters.location].toLowerCase() : null;
      let filtered = results;
      if (filters.fee) {
        filtered = filtered.filter(result => result.doctor.feeTier === filters.fee);
      }
      if (filters.gender !== 'any') {
        filtered = filtered.filter(result => result.doctor.gender === filters.gender);
      }
      if (normalizedLocation) {
        filtered = filtered.filter(result => result.clinic.address.city.toLowerCase() === normalizedLocation);
      }
      if (filters.care) {
        filtered = filtered.filter(result => result.doctor.careType === filters.care);
      }
      if (query) {
        filtered = filtered.filter(result => {
          const haystack = [result.doctor.name, result.doctor.specialty, result.clinic.name, result.clinic.address.city, result.clinic.address.state].join(' ').toLowerCase();
          return haystack.includes(query);
        });
      }
      const sorted = [...filtered];
      switch (filters.sorting) {
        case 'fee':
          {
            sorted.sort((a, b) => resolveFeeRank(a.doctor.feeTier ?? null) - resolveFeeRank(b.doctor.feeTier ?? null));
            break;
          }
        case 'distance':
          {
            sorted.sort((a, b) => a.distanceInMinutes - b.distanceInMinutes);
            break;
          }
        case 'availability':
        default:
          {
            sorted.sort((a, b) => parseTimeToMinutes(a.nextAvailable) - parseTimeToMinutes(b.nextAvailable));
          }
      }
      return sorted;
    }));
    this.visibleResults = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.toSignal)(this.filteredResults$, {
      initialValue: []
    });
    this.sortingOptions = SORTING_OPTIONS;
    this.feeOptions = FEE_OPTIONS;
    this.genderOptions = GENDER_OPTIONS;
    this.locationOptions = LOCATION_OPTIONS;
    this.careOptions = CARE_OPTIONS;
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.effect)(() => {
      this.mapState.setResults(this.visibleResults());
    });
  }
  openFilters() {
    this.workingFilters.set(cloneFilters(this.appliedFilters()));
    this.showFilters.set(true);
  }
  closeFilters() {
    this.showFilters.set(false);
    this.workingFilters.set(cloneFilters(this.appliedFilters()));
  }
  applyFilters() {
    this.appliedFilters.set(cloneFilters(this.workingFilters()));
    this.showFilters.set(false);
  }
  resetFilters() {
    this.workingFilters.set(createDefaultFilters());
  }
  selectSorting(option) {
    this.workingFilters.update(state => ({
      ...state,
      sorting: option
    }));
  }
  toggleFee(option) {
    this.workingFilters.update(state => ({
      ...state,
      fee: state.fee === option ? null : option
    }));
  }
  selectGender(option) {
    this.workingFilters.update(state => ({
      ...state,
      gender: option
    }));
  }
  toggleLocation(option) {
    this.workingFilters.update(state => ({
      ...state,
      location: state.location === option ? null : option
    }));
  }
  toggleCare(option) {
    this.workingFilters.update(state => ({
      ...state,
      care: state.care === option ? null : option
    }));
  }
  isSortingActive(option) {
    return this.workingFilters().sorting === option;
  }
  isFeeActive(option) {
    return this.workingFilters().fee === option;
  }
  isGenderActive(option) {
    return this.workingFilters().gender === option;
  }
  isLocationActive(option) {
    return this.workingFilters().location === option;
  }
  isCareActive(option) {
    return this.workingFilters().care === option;
  }
  setActiveDoctor(doctorId) {
    this.mapState.setActiveDoctor(doctorId);
  }
  openDoctor(doctorId) {
    this.mapState.setActiveDoctor(doctorId);
    this.router.navigate(['/specialists', doctorId]);
  }
  trackByDoctor(_index, result) {
    return result.doctor.id;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SearchPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SearchPageComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: SearchPageComponent,
    selectors: [["dr-search-page"]],
    decls: 1,
    vars: 1,
    consts: [["emptyList", ""], [4, "ngIf"], [1, "search-panel"], [1, "search-panel__header"], [1, "search-panel__search"], ["type", "button", "aria-label", "Filter specialists", 1, "search-panel__filter-trigger", 3, "click"], ["type", "search", "placeholder", "Find a specialist...", "aria-label", "Search specialists", 3, "formControl"], ["aria-hidden", "true", 1, "search-panel__search-icon"], ["routerLink", "/profile", 1, "search-panel__profile"], [1, "search-panel__summary"], [1, "search-panel__results"], [4, "ngIf", "ngIfElse"], ["class", "search-panel__filters", 4, "ngIf"], ["tabIndex", "0", 3, "is-active", "mouseenter", "focusin", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabIndex", "0", 3, "mouseenter", "focusin"], ["type", "button", 3, "click"], [3, "src", "alt"], [1, "meta"], ["aria-hidden", "true"], [1, "search-panel__empty"], [1, "search-panel__filters"], [1, "search-panel__filters-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Filter specialists", 1, "search-panel__filters-card", 3, "click"], [1, "search-panel__filters-label"], [1, "search-panel__filters-header"], [1, "search-panel__filters-actions"], [1, "search-panel__filters-actions-pill"], ["type", "button", "aria-label", "Apply filters", 1, "search-panel__filters-action", 3, "click"], ["type", "button", "aria-label", "Reset filters", 1, "search-panel__filters-action", 3, "click"], ["type", "button", "aria-label", "Close filters", 1, "search-panel__filters-action", 3, "click"], [1, "search-panel__filters-body"], [1, "search-panel__filters-group"], [1, "search-panel__filters-options"], ["type", "button", "class", "search-panel__filters-option", 3, "is-active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "search-panel__filters-option", 3, "click"]],
    template: function SearchPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, SearchPageComponent_ng_container_0_Template, 22, 10, "ng-container", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.visibleResults());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  pointer-events: none;\n}\n\n.search-panel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: min(420px, 92vw);\n  margin: clamp(1.5rem, 4vw, 2.5rem);\n  padding: clamp(1.75rem, 4vw, 2.75rem);\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.26);\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  box-shadow: 0 48px 120px rgba(0, 0, 0, 0.28);\n  -webkit-backdrop-filter: blur(26px);\n          backdrop-filter: blur(26px);\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  max-height: calc(100vh - clamp(1.5rem, 4vw, 2.5rem) * 2);\n  overflow: hidden;\n  pointer-events: auto;\n}\n\n.search-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.search-panel__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1 1 auto;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 24px;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n}\n.search-panel__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font-size: 13.5px;\n  font-weight: 500;\n  letter-spacing: -0.306px;\n  color: rgb(10, 23, 72);\n}\n.search-panel__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(10, 23, 72, 0.65);\n}\n\n.search-panel__filter-trigger[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  border: none;\n  background: rgba(10, 23, 72, 0.12);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n  padding: 0;\n}\n.search-panel__filter-trigger[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M10 18h4v-2h-4v2Zm-7-8v2h18v-2H3Zm3-6v2h12V4H6Zm12 12h-6v2h6v-2Z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M10 18h4v-2h-4v2Zm-7-8v2h18v-2H3Zm3-6v2h12V4H6Zm12 12h-6v2h6v-2Z\"/></svg>') center/contain;\n}\n.search-panel__filter-trigger.is-active[_ngcontent-%COMP%] {\n  background: rgba(255, 61, 150, 0.24);\n  transform: translateY(-1px);\n}\n\n.search-panel__search-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.99 5L20.5 19l-5-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.99 5L20.5 19l-5-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z\"/></svg>') center/contain;\n  opacity: 0.72;\n}\n\n.search-panel__profile[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 24px;\n  border: 0.5px solid rgba(10, 23, 72, 0.1);\n  background: rgba(255, 255, 255, 0.95);\n  text-decoration: none;\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: rgb(10, 23, 72);\n}\n.search-panel__profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 18px;\n  height: 18px;\n  margin: 0 auto 4px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V21h19.2v-1.8c0-3.2-6.4-4.8-9.6-4.8z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V21h19.2v-1.8c0-3.2-6.4-4.8-9.6-4.8z\"/></svg>') center/contain;\n}\n\n.search-panel__summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.search-panel__summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: -0.408px;\n  font-weight: 700;\n}\n.search-panel__summary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  font-weight: 700;\n  letter-spacing: 0.374px;\n}\n.search-panel__summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: rgba(10, 23, 72, 0.7);\n}\n\n.search-panel__results[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: hidden;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.16);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.search-panel__results--empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-panel__results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  max-height: clamp(320px, 40vh, 480px);\n  overflow-y: auto;\n}\n.search-panel__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(10, 23, 72, 0.1);\n}\n.search-panel__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.search-panel__results[_ngcontent-%COMP%]   li.is-active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.35);\n}\n.search-panel__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 56px 1fr auto;\n  align-items: center;\n  gap: 16px;\n  padding: 18px;\n  background: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  color: inherit;\n  transition: transform 0.2s ease;\n}\n.search-panel__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n.search-panel__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 20px;\n  object-fit: cover;\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);\n}\n.search-panel__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.search-panel__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: rgba(10, 23, 72, 0.85);\n}\n.search-panel__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M9.29 6.71L13.58 11l-4.29 4.29 1.42 1.42L16.41 11l-5.7-5.71z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M9.29 6.71L13.58 11l-4.29 4.29 1.42 1.42L16.41 11l-5.7-5.71z\"/></svg>') center/contain;\n  opacity: 0.55;\n}\n\n.search-panel__empty[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 24px 16px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: rgba(10, 23, 72, 0.72);\n}\n\n.search-panel__filters[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 4;\n}\n\n.search-panel__filters-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(10, 23, 72, 0.45);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n}\n\n.search-panel__filters-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 360px);\n  margin: 24px;\n  border-radius: 32px;\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  background: rgba(255, 255, 255, 0.28);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  -webkit-backdrop-filter: blur(24px);\n          backdrop-filter: blur(24px);\n  --search-filter-padding: 24px;\n  padding: var(--search-filter-padding);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  z-index: 5;\n}\n\n.search-panel__filters-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.24em;\n  text-transform: uppercase;\n  color: rgba(10, 23, 72, 0.5);\n}\n\n.search-panel__filters-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.search-panel__filters-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: rgb(10, 23, 72);\n}\n\n.search-panel__filters-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.search-panel__filters-actions-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(255, 61, 150, 0.16);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n}\n\n.search-panel__filters-action[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  transition: transform 0.2s ease;\n}\n.search-panel__filters-action[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n}\n.search-panel__filters-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.search-panel__filters-action--apply[_ngcontent-%COMP%]::before, \n.search-panel__filters-action[_ngcontent-%COMP%]:nth-child(1)::before {\n  width: 15px;\n  height: 12px;\n  background: #0a1748;\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 12\"><path fill=\"%230A1748\" d=\"M4.65833 8.81667L1.18333 5.34167L0 6.51667L4.65833 11.175L14.6583 1.175L13.4833 0L4.65833 8.81667Z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 12\"><path fill=\"%230A1748\" d=\"M4.65833 8.81667L1.18333 5.34167L0 6.51667L4.65833 11.175L14.6583 1.175L13.4833 0L4.65833 8.81667Z\"/></svg>') center/contain;\n}\n\n.search-panel__filters-action--reset[_ngcontent-%COMP%]::before, \n.search-panel__filters-action[_ngcontent-%COMP%]:nth-child(2)::before {\n  width: 20px;\n  height: 20px;\n  background: rgba(10, 23, 72, 0.9);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path fill=\"%230A1748\" d=\"M11.6667 10C11.6667 9.08333 10.9167 8.33333 10 8.33333C9.08333 8.33333 8.33333 9.08333 8.33333 10C8.33333 10.9167 9.08333 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10ZM10 2.5C8.01088 2.5 6.10322 3.29018 4.6967 4.6967C3.29018 6.10322 2.5 8.01088 2.5 10H0L3.33333 13.3333L6.66667 10H4.16667C4.16667 6.775 6.775 4.16667 10 4.16667C13.225 4.16667 15.8333 6.775 15.8333 10C15.8345 11.0715 15.5402 12.1226 14.983 13.0377C14.4257 13.9529 13.627 14.6968 12.6746 15.1877C11.7221 15.6785 10.6528 15.8974 9.58411 15.8202C8.5154 15.743 7.48866 15.3727 6.61667 14.75L5.43333 15.95C6.37887 16.6756 7.48372 17.1654 8.65631 17.3788C9.8289 17.5922 11.0355 17.5231 12.176 17.1772C13.3166 16.8312 14.3582 16.2185 15.2147 15.3897C16.0712 14.5609 16.7179 13.5398 17.1011 12.4113C17.4842 11.2827 17.5929 10.079 17.4181 8.90008C17.2434 7.72112 16.7901 6.60078 16.096 5.63193C15.4018 4.66308 14.4868 3.87361 13.4266 3.32895C12.3665 2.78429 11.1919 2.50012 10 2.5Z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path fill=\"%230A1748\" d=\"M11.6667 10C11.6667 9.08333 10.9167 8.33333 10 8.33333C9.08333 8.33333 8.33333 9.08333 8.33333 10C8.33333 10.9167 9.08333 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10ZM10 2.5C8.01088 2.5 6.10322 3.29018 4.6967 4.6967C3.29018 6.10322 2.5 8.01088 2.5 10H0L3.33333 13.3333L6.66667 10H4.16667C4.16667 6.775 6.775 4.16667 10 4.16667C13.225 4.16667 15.8333 6.775 15.8333 10C15.8345 11.0715 15.5402 12.1226 14.983 13.0377C14.4257 13.9529 13.627 14.6968 12.6746 15.1877C11.7221 15.6785 10.6528 15.8974 9.58411 15.8202C8.5154 15.743 7.48866 15.3727 6.61667 14.75L5.43333 15.95C6.37887 16.6756 7.48372 17.1654 8.65631 17.3788C9.8289 17.5922 11.0355 17.5231 12.176 17.1772C13.3166 16.8312 14.3582 16.2185 15.2147 15.3897C16.0712 14.5609 16.7179 13.5398 17.1011 12.4113C17.4842 11.2827 17.5929 10.079 17.4181 8.90008C17.2434 7.72112 16.7901 6.60078 16.096 5.63193C15.4018 4.66308 14.4868 3.87361 13.4266 3.32895C12.3665 2.78429 11.1919 2.50012 10 2.5Z\"/></svg>') center/contain;\n}\n\n.search-panel__filters-action[_ngcontent-%COMP%]:last-child::before {\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.4 4.3 19.71 2.89 18.3 9.18 12 2.89 5.71 4.3 4.3l6.29 6.29 6.3-6.29z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.4 4.3 19.71 2.89 18.3 9.18 12 2.89 5.71 4.3 4.3l6.29 6.29 6.3-6.29z\"/></svg>') center/contain;\n}\n\n.search-panel__filters-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.search-panel__filters-group[_ngcontent-%COMP%]    + .search-panel__filters-group[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(10, 23, 72, 0.1);\n  margin: 0 calc(-1 * var(--search-filter-padding));\n  padding: 20px var(--search-filter-padding) 0;\n}\n\n.search-panel__filters-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.search-panel__filters-option[_ngcontent-%COMP%] {\n  min-width: 96px;\n  padding: 10px 18px;\n  border-radius: 999px;\n  border: 1px solid rgba(10, 23, 72, 0.1);\n  background: rgba(255, 255, 255, 0.82);\n  color: rgba(10, 23, 72, 0.75);\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.16px;\n  cursor: pointer;\n  transition: background 0.2s ease, color 0.2s ease, border 0.2s ease;\n}\n.search-panel__filters-option.is-active[_ngcontent-%COMP%] {\n  background: rgba(255, 61, 150, 0.16);\n  border-color: rgba(255, 61, 150, 0.32);\n  color: rgb(10, 23, 72);\n}\n.search-panel__filters-option[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(255, 61, 150, 0.4);\n  outline-offset: 2px;\n}\n\n@media (max-width: 768px) {\n  .search-panel[_ngcontent-%COMP%] {\n    width: min(480px, 100%);\n    margin: clamp(1rem, 4vw, 1.5rem);\n    padding: clamp(1.5rem, 4vw, 2rem);\n    max-height: none;\n  }\n  .search-panel__results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    max-height: 280px;\n  }\n  .search-panel__filters-card[_ngcontent-%COMP%] {\n    margin: 16px;\n    width: min(100%, 360px);\n    --search-filter-padding: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9zZWFyY2gvdWkvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUNBVFk7RUFVWiwyQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSx3REFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FBSkY7QUFNRTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBaERZO0FBNENoQjtBQU1JO0VBQ0UsNkJBQUE7QUFKTjs7QUFTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7RUFDQSxVQUFBO0FBTkY7QUFRRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQXpFWTtFQTBFWiw4TUFBQTtFQUNBLHNOQUFBO0FBTko7QUFTRTtFQUNFLG9DQUFBO0VBQ0EsMkJBQUE7QUFQSjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBdkZjO0VBd0ZkLGtWQUFBO0VBQ0EsMFZBQUE7RUFDQSxhQUFBO0FBUkY7O0FBV0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkExR2M7QUFrR2hCO0FBVUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFsSFk7RUFtSFoseVJBQUE7RUFDQSxpU0FBQTtBQVJKOztBQVlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQVRGO0FBV0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQVRKO0FBWUU7RUFDRSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBVko7QUFhRTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBWEo7O0FBZUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMENBQUE7QUFaRjtBQWNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFaSjtBQWVFO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQWdCRTtFQUNFLDhDQUFBO0FBZEo7QUFnQkk7RUFDRSxtQkFBQTtBQWROO0FBaUJJO0VBQ0UscUNBQUE7QUFmTjtBQWtCSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FBaEJOO0FBa0JNO0VBQ0UsMEJBQUE7QUFoQlI7QUFtQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQWpCUjtBQW9CTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFsQlI7QUFxQk07RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQW5CUjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBN05RO0VBOE5SLDBNQUFBO0VBQ0Esa05BQUE7RUFDQSxhQUFBO0FBcEJSOztBQTBCQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQXZCRjs7QUEwQkE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQXZCRjs7QUEwQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUF2QkY7O0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQXZCRjs7QUEwQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUF2QkY7QUF5QkU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBbFNZO0FBMlFoQjs7QUEyQkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXhCRjs7QUEyQkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FBeEJGOztBQTJCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwrQkFBQTtBQXhCRjtBQTBCRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXhCSjtBQTJCRTtFQUNFLDJCQUFBO0FBekJKOztBQTZCQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ1BBQUE7RUFDQSx3UEFBQTtBQTFCRjs7QUE2QkE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDBrQ0FBQTtFQUNBLGtsQ0FBQTtBQTFCRjs7QUE2QkE7RUFDRSwyQkFqV2M7RUFrV2QsOFBBQUE7RUFDQSxzUUFBQTtBQTFCRjs7QUE2QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBMUJGOztBQTZCQTtFQUNFLDJDQUFBO0VBQ0EsaURBQUE7RUFDQSw0Q0FBQTtBQTFCRjs7QUE2QkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUExQkY7O0FBNkJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtRUFBQTtBQTFCRjtBQTRCRTtFQUNFLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkF4WVk7QUE4V2hCO0FBNkJFO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtBQTNCSjs7QUErQkE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxpQ0FBQTtJQUNBLGdCQUFBO0VBNUJGO0VBK0JBO0lBQ0UsaUJBQUE7RUE3QkY7RUFnQ0E7SUFDRSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSw2QkFBQTtFQTlCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiRmaWdtYS1wcmltYXJ5OiByZ2JhKDEwLCAyMywgNzIsIDEpO1xuJHBhbmVsLWdsYXNzOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xuXG4uc2VhcmNoLXBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogbWluKDQyMHB4LCA5MnZ3KTtcbiAgbWFyZ2luOiBjbGFtcCgxLjVyZW0sIDR2dywgMi41cmVtKTtcbiAgcGFkZGluZzogY2xhbXAoMS43NXJlbSwgNHZ3LCAyLjc1cmVtKTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogJHBhbmVsLWdsYXNzO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgpO1xuICBib3gtc2hhZG93OiAwIDQ4cHggMTIwcHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI2cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSBjbGFtcCgxLjVyZW0sIDR2dywgMi41cmVtKSAqIDIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnNlYXJjaC1wYW5lbF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc2VhcmNoLXBhbmVsX19zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjA4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xuXG4gIGlucHV0IHtcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjMwNnB4O1xuICAgIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjY1KTtcbiAgICB9XG4gIH1cbn1cblxuLnNlYXJjaC1wYW5lbF9fZmlsdGVyLXRyaWdnZXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMTIpO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG4gIHBhZGRpbmc6IDA7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogJGZpZ21hLXByaW1hcnk7XG4gICAgbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTEwIDE4aDR2LTJoLTR2MlptLTctOHYyaDE4di0ySDNabTMtNnYyaDEyVjRINlptMTIgMTJoLTZ2Mmg2di0yWlwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgICAtd2Via2l0LW1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xMCAxOGg0di0yaC00djJabS03LTh2MmgxOHYtMkgzWm0zLTZ2MmgxMlY0SDZabTEyIDEyaC02djJoNnYtMlpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIH1cblxuICAmLmlzLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDYxLCAxNTAsIDAuMjQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgfVxufVxuXG4uc2VhcmNoLXBhbmVsX19zZWFyY2gtaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICRmaWdtYS1wcmltYXJ5O1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QTYuNDcxIDYuNDcxIDAgMDAxNiA5LjUgNi41IDYuNSAwIDEwOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw0Ljk5IDVMMjAuNSAxOWwtNS01em0tNiAwQzguMDEgMTQgNiAxMS45OSA2IDkuNVM4LjAxIDUgMTAuNSA1IDE1IDcuMDEgMTUgOS41IDEyLjk5IDE0IDEwLjUgMTR6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xuICAtd2Via2l0LW1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwMDE2IDkuNSA2LjUgNi41IDAgMTA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDQuOTkgNUwyMC41IDE5bC01LTV6bS02IDBDOC4wMSAxNCA2IDExLjk5IDYgOS41UzguMDEgNSAxMC41IDUgMTUgNy4wMSAxNSA5LjUgMTIuOTkgMTQgMTAuNSAxNHpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIG9wYWNpdHk6IDAuNzI7XG59XG5cbi5zZWFyY2gtcGFuZWxfX3Byb2ZpbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuXG4gIHNwYW46OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDRweDtcbiAgICBiYWNrZ3JvdW5kOiAkZmlnbWEtcHJpbWFyeTtcbiAgICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTIgMTJjMi43IDAgNC44LTIuMSA0LjgtNC44UzE0LjcgMi40IDEyIDIuNCA3LjIgNC41IDcuMiA3LjIgOS4zIDEyIDEyIDEyem0wIDIuNGMtMy4yIDAtOS42IDEuNi05LjYgNC44VjIxaDE5LjJ2LTEuOGMwLTMuMi02LjQtNC44LTkuNi00Ljh6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xuICAgIC13ZWJraXQtbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTEyIDEyYzIuNyAwIDQuOC0yLjEgNC44LTQuOFMxNC43IDIuNCAxMiAyLjQgNy4yIDQuNSA3LjIgNy4yIDkuMyAxMiAxMiAxMnptMCAyLjRjLTMuMiAwLTkuNiAxLjYtOS42IDQuOFYyMWgxOS4ydi0xLjhjMC0zLjItNi40LTQuOC05LjYtNC44elwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgfVxufVxuXG4uc2VhcmNoLXBhbmVsX19zdW1tYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjZyZW0sIDN2dywgMi4ycmVtKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjM3NHB4O1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNyk7XG4gIH1cbn1cblxuLnNlYXJjaC1wYW5lbF9fcmVzdWx0cyB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cbiAgJi0tZW1wdHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtaGVpZ2h0OiBjbGFtcCgzMjBweCwgNDB2aCwgNDgwcHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuICBsaSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMSk7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU2cHggMWZyIGF1dG87XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgcGFkZGluZzogMThweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cblxuICAgICAgLm1ldGEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjg1KTtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRmaWdtYS1wcmltYXJ5O1xuICAgICAgICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNOS4yOSA2LjcxTDEzLjU4IDExbC00LjI5IDQuMjkgMS40MiAxLjQyTDE2LjQxIDExbC01LjctNS43MXpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gICAgICAgIC13ZWJraXQtbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTkuMjkgNi43MUwxMy41OCAxMWwtNC4yOSA0LjI5IDEuNDIgMS40MkwxNi40MSAxMWwtNS43LTUuNzF6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xuICAgICAgICBvcGFjaXR5OiAwLjU1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2VhcmNoLXBhbmVsX19lbXB0eSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweCAxNnB4O1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjcyKTtcbn1cblxuLnNlYXJjaC1wYW5lbF9fZmlsdGVycyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA0O1xufVxuXG4uc2VhcmNoLXBhbmVsX19maWx0ZXJzLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC40NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbn1cblxuLnNlYXJjaC1wYW5lbF9fZmlsdGVycy1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogbWluKDEwMCUsIDM2MHB4KTtcbiAgbWFyZ2luOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgpO1xuICBib3gtc2hhZG93OiAwIDQwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjRweCk7XG4gIC0tc2VhcmNoLWZpbHRlci1wYWRkaW5nOiAyNHB4O1xuICBwYWRkaW5nOiB2YXIoLS1zZWFyY2gtZmlsdGVyLXBhZGRpbmcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5zZWFyY2gtcGFuZWxfX2ZpbHRlcnMtbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNSk7XG59XG5cbi5zZWFyY2gtcGFuZWxfX2ZpbHRlcnMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG4gIH1cbn1cblxuLnNlYXJjaC1wYW5lbF9fZmlsdGVycy1hY3Rpb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLnNlYXJjaC1wYW5lbF9fZmlsdGVycy1hY3Rpb25zLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDYxLCAxNTAsIDAuMTYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG59XG5cbi5zZWFyY2gtcGFuZWxfX2ZpbHRlcnMtYWN0aW9uIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICB9XG59XG5cbi5zZWFyY2gtcGFuZWxfX2ZpbHRlcnMtYWN0aW9uLS1hcHBseTo6YmVmb3JlLFxuLnNlYXJjaC1wYW5lbF9fZmlsdGVycy1hY3Rpb246bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMGExNzQ4O1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE1IDEyXCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNNC42NTgzMyA4LjgxNjY3TDEuMTgzMzMgNS4zNDE2N0wwIDYuNTE2NjdMNC42NTgzMyAxMS4xNzVMMTQuNjU4MyAxLjE3NUwxMy40ODMzIDBMNC42NTgzMyA4LjgxNjY3WlwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE1IDEyXCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNNC42NTgzMyA4LjgxNjY3TDEuMTgzMzMgNS4zNDE2N0wwIDYuNTE2NjdMNC42NTgzMyAxMS4xNzVMMTQuNjU4MyAxLjE3NUwxMy40ODMzIDBMNC42NTgzMyA4LjgxNjY3WlwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbn1cblxuLnNlYXJjaC1wYW5lbF9fZmlsdGVycy1hY3Rpb24tLXJlc2V0OjpiZWZvcmUsXG4uc2VhcmNoLXBhbmVsX19maWx0ZXJzLWFjdGlvbjpudGgtY2hpbGQoMik6OmJlZm9yZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuOSk7XG4gIG1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xMS42NjY3IDEwQzExLjY2NjcgOS4wODMzMyAxMC45MTY3IDguMzMzMzMgMTAgOC4zMzMzM0M5LjA4MzMzIDguMzMzMzMgOC4zMzMzMyA5LjA4MzMzIDguMzMzMzMgMTBDOC4zMzMzMyAxMC45MTY3IDkuMDgzMzMgMTEuNjY2NyAxMCAxMS42NjY3QzEwLjkxNjcgMTEuNjY2NyAxMS42NjY3IDEwLjkxNjcgMTEuNjY2NyAxMFpNMTAgMi41QzguMDEwODggMi41IDYuMTAzMjIgMy4yOTAxOCA0LjY5NjcgNC42OTY3QzMuMjkwMTggNi4xMDMyMiAyLjUgOC4wMTA4OCAyLjUgMTBIMEwzLjMzMzMzIDEzLjMzMzNMNi42NjY2NyAxMEg0LjE2NjY3QzQuMTY2NjcgNi43NzUgNi43NzUgNC4xNjY2NyAxMCA0LjE2NjY3QzEzLjIyNSA0LjE2NjY3IDE1LjgzMzMgNi43NzUgMTUuODMzMyAxMEMxNS44MzQ1IDExLjA3MTUgMTUuNTQwMiAxMi4xMjI2IDE0Ljk4MyAxMy4wMzc3QzE0LjQyNTcgMTMuOTUyOSAxMy42MjcgMTQuNjk2OCAxMi42NzQ2IDE1LjE4NzdDMTEuNzIyMSAxNS42Nzg1IDEwLjY1MjggMTUuODk3NCA5LjU4NDExIDE1LjgyMDJDOC41MTU0IDE1Ljc0MyA3LjQ4ODY2IDE1LjM3MjcgNi42MTY2NyAxNC43NUw1LjQzMzMzIDE1Ljk1QzYuMzc4ODcgMTYuNjc1NiA3LjQ4MzcyIDE3LjE2NTQgOC42NTYzMSAxNy4zNzg4QzkuODI4OSAxNy41OTIyIDExLjAzNTUgMTcuNTIzMSAxMi4xNzYgMTcuMTc3MkMxMy4zMTY2IDE2LjgzMTIgMTQuMzU4MiAxNi4yMTg1IDE1LjIxNDcgMTUuMzg5N0MxNi4wNzEyIDE0LjU2MDkgMTYuNzE3OSAxMy41Mzk4IDE3LjEwMTEgMTIuNDExM0MxNy40ODQyIDExLjI4MjcgMTcuNTkyOSAxMC4wNzkgMTcuNDE4MSA4LjkwMDA4QzE3LjI0MzQgNy43MjExMiAxNi43OTAxIDYuNjAwNzggMTYuMDk2IDUuNjMxOTNDMTUuNDAxOCA0LjY2MzA4IDE0LjQ4NjggMy44NzM2MSAxMy40MjY2IDMuMzI4OTVDMTIuMzY2NSAyLjc4NDI5IDExLjE5MTkgMi41MDAxMiAxMCAyLjVaXCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xuICAtd2Via2l0LW1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xMS42NjY3IDEwQzExLjY2NjcgOS4wODMzMyAxMC45MTY3IDguMzMzMzMgMTAgOC4zMzMzM0M5LjA4MzMzIDguMzMzMzMgOC4zMzMzMyA5LjA4MzMzIDguMzMzMzMgMTBDOC4zMzMzMyAxMC45MTY3IDkuMDgzMzMgMTEuNjY2NyAxMCAxMS42NjY3QzEwLjkxNjcgMTEuNjY2NyAxMS42NjY3IDEwLjkxNjcgMTEuNjY2NyAxMFpNMTAgMi41QzguMDEwODggMi41IDYuMTAzMjIgMy4yOTAxOCA0LjY5NjcgNC42OTY3QzMuMjkwMTggNi4xMDMyMiAyLjUgOC4wMTA4OCAyLjUgMTBIMEwzLjMzMzMzIDEzLjMzMzNMNi42NjY2NyAxMEg0LjE2NjY3QzQuMTY2NjcgNi43NzUgNi43NzUgNC4xNjY2NyAxMCA0LjE2NjY3QzEzLjIyNSA0LjE2NjY3IDE1LjgzMzMgNi43NzUgMTUuODMzMyAxMEMxNS44MzQ1IDExLjA3MTUgMTUuNTQwMiAxMi4xMjI2IDE0Ljk4MyAxMy4wMzc3QzE0LjQyNTcgMTMuOTUyOSAxMy42MjcgMTQuNjk2OCAxMi42NzQ2IDE1LjE4NzdDMTEuNzIyMSAxNS42Nzg1IDEwLjY1MjggMTUuODk3NCA5LjU4NDExIDE1LjgyMDJDOC41MTU0IDE1Ljc0MyA3LjQ4ODY2IDE1LjM3MjcgNi42MTY2NyAxNC43NUw1LjQzMzMzIDE1Ljk1QzYuMzc4ODcgMTYuNjc1NiA3LjQ4MzcyIDE3LjE2NTQgOC42NTYzMSAxNy4zNzg4QzkuODI4OSAxNy41OTIyIDExLjAzNTUgMTcuNTIzMSAxMi4xNzYgMTcuMTc3MkMxMy4zMTY2IDE2LjgzMTIgMTQuMzU4MiAxNi4yMTg1IDE1LjIxNDcgMTUuMzg5N0MxNi4wNzEyIDE0LjU2MDkgMTYuNzE3OSAxMy41Mzk4IDE3LjEwMTEgMTIuNDExM0MxNy40ODQyIDExLjI4MjcgMTcuNTkyOSAxMC4wNzkgMTcuNDE4MSA4LjkwMDA4QzE3LjI0MzQgNy43MjExMiAxNi43OTAxIDYuNjAwNzggMTYuMDk2IDUuNjMxOTNDMTUuNDAxOCA0LjY2MzA4IDE0LjQ4NjggMy44NzM2MSAxMy40MjY2IDMuMzI4OTVDMTIuMzY2NSAyLjc4NDI5IDExLjE5MTkgMi41MDAxMiAxMCAyLjVaXCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4uc2VhcmNoLXBhbmVsX19maWx0ZXJzLWFjdGlvbjpsYXN0LWNoaWxkOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAkZmlnbWEtcHJpbWFyeTtcbiAgbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTE4LjMgNS43MSAxMiAxMmw2LjMgNi4yOS0xLjQxIDEuNDFMMTAuNTkgMTMuNCA0LjMgMTkuNzEgMi44OSAxOC4zIDkuMTggMTIgMi44OSA1LjcxIDQuMyA0LjNsNi4yOSA2LjI5IDYuMy02LjI5elwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTguMyA1LjcxIDEyIDEybDYuMyA2LjI5LTEuNDEgMS40MUwxMC41OSAxMy40IDQuMyAxOS43MSAyLjg5IDE4LjMgOS4xOCAxMiAyLjg5IDUuNzEgNC4zIDQuM2w2LjI5IDYuMjkgNi4zLTYuMjl6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4uc2VhcmNoLXBhbmVsX19maWx0ZXJzLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbi5zZWFyY2gtcGFuZWxfX2ZpbHRlcnMtZ3JvdXAgKyAuc2VhcmNoLXBhbmVsX19maWx0ZXJzLWdyb3VwIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMSk7XG4gIG1hcmdpbjogMCBjYWxjKC0xICogdmFyKC0tc2VhcmNoLWZpbHRlci1wYWRkaW5nKSk7XG4gIHBhZGRpbmc6IDIwcHggdmFyKC0tc2VhcmNoLWZpbHRlci1wYWRkaW5nKSAwO1xufVxuXG4uc2VhcmNoLXBhbmVsX19maWx0ZXJzLW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cblxuLnNlYXJjaC1wYW5lbF9fZmlsdGVycy1vcHRpb24ge1xuICBtaW4td2lkdGg6IDk2cHg7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Mik7XG4gIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjc1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSwgY29sb3IgMC4ycyBlYXNlLCBib3JkZXIgMC4ycyBlYXNlO1xuXG4gICYuaXMtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNjEsIDE1MCwgMC4xNik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNjEsIDE1MCwgMC4zMik7XG4gICAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuICB9XG5cbiAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgyNTUsIDYxLCAxNTAsIDAuNCk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC1wYW5lbCB7XG4gICAgd2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XG4gICAgbWFyZ2luOiBjbGFtcCgxcmVtLCA0dncsIDEuNXJlbSk7XG4gICAgcGFkZGluZzogY2xhbXAoMS41cmVtLCA0dncsIDJyZW0pO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cblxuICAuc2VhcmNoLXBhbmVsX19yZXN1bHRzIHVsIHtcbiAgICBtYXgtaGVpZ2h0OiAyODBweDtcbiAgfVxuXG4gIC5zZWFyY2gtcGFuZWxfX2ZpbHRlcnMtY2FyZCB7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIHdpZHRoOiBtaW4oMTAwJSwgMzYwcHgpO1xuICAgIC0tc2VhcmNoLWZpbHRlci1wYWRkaW5nOiAyMHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ }),

/***/ 2566:
/*!*************************************************************!*\
  !*** ./src/app/feature/search/data-access/search.facade.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFacade: () => (/* binding */ SearchFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);
var _staticBlock;



class SearchFacade {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_1__.DocRosterApiService);
    this.results$ = this.api.getSearchResults();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SearchFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SearchFacade)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SearchFacade,
    factory: SearchFacade.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=422.js.map