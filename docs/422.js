"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[422],{

/***/ 2566:
/*!*************************************************************!*\
  !*** ./src/app/feature/search/data-access/search.facade.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFacade: () => (/* binding */ SearchFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);



class SearchFacade {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__.DocRosterApiService);
    this.results$ = this.api.getSearchResults();
  }
  static {
    this.ɵfac = function SearchFacade_Factory(t) {
      return new (t || SearchFacade)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SearchFacade,
      factory: SearchFacade.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1422:
/*!************************************************************!*\
  !*** ./src/app/feature/search/ui/search-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPageComponent: () => (/* binding */ SearchPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _data_access_search_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-access/search.facade */ 2566);










const _c0 = a0 => ["/specialists", a0];
function SearchPageComponent_ul_15_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const result_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, result_r1.doctor.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", result_r1.doctor.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", result_r1.doctor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r1.doctor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r1.doctor.specialty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r1.clinic.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", result_r1.clinic.address.street, ", ", result_r1.clinic.address.city, ", ", result_r1.clinic.address.state, "");
  }
}
function SearchPageComponent_ul_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchPageComponent_ul_15_li_1_Template, 13, 11, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const results_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", results_r2);
  }
}
function SearchPageComponent_div_17_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_div_17_button_18_Template_button_click_0_listener() {
      const option_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.selectSorting(option_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active", ctx_r3.isSortingActive(option_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r6.label, " ");
  }
}
function SearchPageComponent_div_17_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_div_17_button_23_Template_button_click_0_listener() {
      const option_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleFee(option_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active", ctx_r3.isFeeActive(option_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r8.label, " ");
  }
}
function SearchPageComponent_div_17_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_div_17_button_28_Template_button_click_0_listener() {
      const option_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.selectGender(option_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active", ctx_r3.isGenderActive(option_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r10.label, " ");
  }
}
function SearchPageComponent_div_17_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_div_17_button_33_Template_button_click_0_listener() {
      const option_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleLocation(option_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active", ctx_r3.isLocationActive(option_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r12.label, " ");
  }
}
function SearchPageComponent_div_17_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_div_17_button_38_Template_button_click_0_listener() {
      const option_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleCare(option_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active", ctx_r3.isCareActive(option_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r14.label, " ");
  }
}
function SearchPageComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_div_17_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.closeFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "article", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_div_17_Template_article_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "header", 22)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Filter specialists");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 23)(9, "div", 24)(10, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_div_17_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.applyFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_div_17_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_div_17_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.closeFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 28)(14, "section", 29)(15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Sorting");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SearchPageComponent_div_17_button_18_Template, 2, 3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section", 29)(20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SearchPageComponent_div_17_button_23_Template, 2, 3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "section", 29)(25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SearchPageComponent_div_17_button_28_Template, 2, 3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "section", 29)(30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, SearchPageComponent_div_17_button_33_Template, 2, 3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "section", 29)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SearchPageComponent_div_17_button_38_Template, 2, 3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.sortingOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.feeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.genderOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.locationOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.careOptions);
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
    this.searchFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_search_facade__WEBPACK_IMPORTED_MODULE_0__.SearchFacade);
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', {
      nonNullable: true
    });
    this.searchTerm$ = this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(''));
    this.results$ = this.searchFacade.results$;
    this.defaultPrompt = 'Find me an Occupational Therapist who travels to Thunder Bay for catastrophic assessments';
    this.appliedFilters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(createDefaultFilters());
    this.workingFilters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(createDefaultFilters());
    this.showFilters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.hasActiveFilters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => !filtersEqual(this.appliedFilters(), createDefaultFilters()));
    this.appliedFilters$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.toObservable)(this.appliedFilters);
    this.visibleResults$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.results$, this.searchTerm$, this.appliedFilters$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([results, term, filters]) => {
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
    this.sortingOptions = SORTING_OPTIONS;
    this.feeOptions = FEE_OPTIONS;
    this.genderOptions = GENDER_OPTIONS;
    this.locationOptions = LOCATION_OPTIONS;
    this.careOptions = CARE_OPTIONS;
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
  static {
    this.ɵfac = function SearchPageComponent_Factory(t) {
      return new (t || SearchPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SearchPageComponent,
      selectors: [["dr-search-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 8,
      consts: [[1, "search-view"], [1, "search-view__card"], [1, "search-view__header"], [1, "search-view__search"], ["type", "button", "aria-label", "Filter specialists", 1, "search-view__filter-trigger", 3, "click"], ["type", "search", "placeholder", "Find a specialist...", "aria-label", "Search specialists", 3, "formControl"], ["aria-hidden", "true", 1, "search-view__search-icon"], ["routerLink", "/profile", 1, "search-view__control", "search-view__control--profile"], [1, "search-view__summary"], ["class", "search-view__results", 4, "ngIf"], ["class", "search-view__filters", 4, "ngIf"], [1, "search-view__results"], [4, "ngFor", "ngForOf"], [1, "search-view__result", 3, "routerLink"], [1, "search-view__result-avatar", 3, "src", "alt"], [1, "search-view__result-body"], [1, "search-view__result-meta"], ["aria-hidden", "true", 1, "search-view__result-chevron"], [1, "search-view__filters"], [1, "search-view__filters-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Filter specialists", 1, "search-view__filters-card", 3, "click"], [1, "search-view__filters-label"], [1, "search-view__filters-header"], [1, "search-view__filters-actions"], [1, "search-view__filters-actions-pill"], ["type", "button", "aria-label", "Apply filters", 1, "search-view__filters-action", "search-view__filters-action--apply", 3, "click"], ["type", "button", "aria-label", "Reset filters", 1, "search-view__filters-action", "search-view__filters-action--reset", 3, "click"], ["type", "button", "aria-label", "Close filters", 1, "search-view__filters-action", "search-view__filters-action--close", 3, "click"], [1, "search-view__filters-body"], [1, "search-view__filters-group"], [1, "search-view__filters-options"], ["type", "button", "class", "search-view__filters-option", 3, "is-active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "search-view__filters-option", 3, "click"]],
      template: function SearchPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3)(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchPageComponent_Template_button_click_4_listener() {
            return ctx.openFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7)(8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search results for");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SearchPageComponent_ul_15_Template, 2, 1, "ul", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SearchPageComponent_div_17_Template, 39, 5, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active", ctx.hasActiveFilters());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.searchControl.value ? ctx.searchControl.value : ctx.defaultPrompt);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 6, ctx.visibleResults$));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFilters());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
      styles: [".search-view[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(2rem, 6vw, 4rem);\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n\n.search-view[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: fixed;\n  inset: 0;\n  background: url('background-large.png') center/cover no-repeat;\n  z-index: -2;\n}\n\n.search-view__card[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 393px);\n  border-radius: 32px;\n  padding: 24px;\n  background: rgba(255, 255, 255, 0.24);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(24px);\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-inline: auto;\n}\n\n.search-view__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n}\n\n.search-view__control[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 24px;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  background: rgba(10, 23, 72, 0.08);\n  backdrop-filter: blur(12px);\n  cursor: pointer;\n  flex: 0 0 auto;\n}\n\n.search-view__control--profile[_ngcontent-%COMP%] {\n  width: 67px;\n  padding: 6px 9px;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 9px;\n  font-weight: 500;\n  color: rgb(10, 23, 72);\n  text-decoration: none;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(12px);\n}\n\n.search-view__control--profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: -0.306px;\n}\n\n.search-view__control--profile[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 18px;\n  height: 18px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V21h19.2v-1.8c0-3.2-6.4-4.8-9.6-4.8z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V21h19.2v-1.8c0-3.2-6.4-4.8-9.6-4.8z\"/></svg>') center/contain;\n}\n\n.search-view__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1 1 auto;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 24px;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(12px);\n}\n\n.search-view__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13.5px;\n  font-weight: 500;\n  letter-spacing: -0.306px;\n  color: rgb(10, 23, 72);\n}\n\n.search-view__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(10, 23, 72, 0.7);\n}\n\n.search-view__filter-trigger[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  border: none;\n  background: rgba(10, 23, 72, 0.08);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n  mask: none;\n  padding: 0;\n  position: relative;\n}\n\n.search-view__filter-trigger[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M10 18h4v-2h-4v2Zm-7-8v2h18v-2H3Zm3-6v2h12V4H6Zm12 12h-6v2h6v-2Z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M10 18h4v-2h-4v2Zm-7-8v2h18v-2H3Zm3-6v2h12V4H6Zm12 12h-6v2h6v-2Z\"/></svg>') center/contain;\n}\n\n.search-view__filter-trigger.is-active[_ngcontent-%COMP%] {\n  background: rgba(10, 23, 72, 0.12);\n  transform: translateY(-1px);\n}\n\n.search-view__search-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.99 5L20.5 19l-5-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.99 5L20.5 19l-5-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z\"/></svg>') center/contain;\n  opacity: 0.7;\n}\n\n.search-view__summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.408px;\n  text-transform: uppercase;\n  color: rgb(10, 23, 72);\n}\n\n.search-view__summary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.374px;\n  color: rgb(10, 23, 72);\n}\n\n.search-view__results[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  overflow-y: auto;\n  max-height: 360px;\n}\n\n.search-view__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.search-view__result[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 56px 1fr auto;\n  gap: 16px;\n  padding: 16px 0;\n  color: inherit;\n  text-decoration: none;\n  border-bottom: 1px solid rgba(10, 23, 72, 0.08);\n  cursor: pointer;\n}\n\n.search-view__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   .search-view__result[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.search-view__result-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 28px;\n  object-fit: cover;\n}\n\n.search-view__result-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 18px;\n  font-weight: 700;\n  color: rgb(10, 23, 72);\n}\n\n.search-view__result-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  color: rgba(10, 23, 72, 0.6);\n}\n\n.search-view__result-chevron[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M9.29 6.71L13.58 11l-4.29 4.29 1.42 1.42L16.41 11l-5.7-5.71z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M9.29 6.71L13.58 11l-4.29 4.29 1.42 1.42L16.41 11l-5.7-5.71z\"/></svg>') center/contain;\n}\n\n.search-view__filters[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 12;\n}\n\n.search-view__filters-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(10, 23, 72, 0.4);\n  backdrop-filter: blur(20px);\n}\n\n.search-view__filters-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 345px);\n  margin: 24px;\n  border-radius: 32px;\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  background: rgba(255, 255, 255, 0.28);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(24px);\n  --search-filter-padding: 24px;\n  padding: var(--search-filter-padding);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  z-index: 1;\n}\n\n.search-view__filters-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.24em;\n  text-transform: uppercase;\n  color: rgba(10, 23, 72, 0.5);\n}\n\n.search-view__filters-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.search-view__filters-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 0.24px;\n  color: rgb(10, 23, 72);\n}\n\n.search-view__filters-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.search-view__filters-actions-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(255, 61, 150, 0.16);\n  backdrop-filter: blur(12px);\n}\n\n.search-view__filters-action[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  backdrop-filter: blur(12px);\n  transition: transform 0.2s ease;\n}\n\n.search-view__filters-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.search-view__filters-action[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n}\n\n.search-view__filters-action--apply[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.search-view__filters-action--apply[_ngcontent-%COMP%]::before {\n  width: 15px;\n  height: 12px;\n  background: #0a1748;\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 12\"><path fill=\"%230A1748\" d=\"M4.65833 8.81667L1.18333 5.34167L0 6.51667L4.65833 11.175L14.6583 1.175L13.4833 0L4.65833 8.81667Z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 12\"><path fill=\"%230A1748\" d=\"M4.65833 8.81667L1.18333 5.34167L0 6.51667L4.65833 11.175L14.6583 1.175L13.4833 0L4.65833 8.81667Z\"/></svg>') center/contain;\n}\n\n.search-view__filters-action--reset[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.search-view__filters-action--reset[_ngcontent-%COMP%]::before {\n  width: 20px;\n  height: 20px;\n  background: rgba(10, 23, 72, 0.9);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path fill=\"%230A1748\" d=\"M11.6667 10C11.6667 9.08333 10.9167 8.33333 10 8.33333C9.08333 8.33333 8.33333 9.08333 8.33333 10C8.33333 10.9167 9.08333 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10ZM10 2.5C8.01088 2.5 6.10322 3.29018 4.6967 4.6967C3.29018 6.10322 2.5 8.01088 2.5 10H0L3.33333 13.3333L6.66667 10H4.16667C4.16667 6.775 6.775 4.16667 10 4.16667C13.225 4.16667 15.8333 6.775 15.8333 10C15.8345 11.0715 15.5402 12.1226 14.983 13.0377C14.4257 13.9529 13.627 14.6968 12.6746 15.1877C11.7221 15.6785 10.6528 15.8974 9.58411 15.8202C8.5154 15.743 7.48866 15.3727 6.61667 14.75L5.43333 15.95C6.37887 16.6756 7.48372 17.1654 8.65631 17.3788C9.8289 17.5922 11.0355 17.5231 12.176 17.1772C13.3166 16.8312 14.3582 16.2185 15.2147 15.3897C16.0712 14.5609 16.7179 13.5398 17.1011 12.4113C17.4842 11.2827 17.5929 10.079 17.4181 8.90008C17.2434 7.72112 16.7901 6.60078 16.096 5.63193C15.4018 4.66308 14.4868 3.87361 13.4266 3.32895C12.3665 2.78429 11.1919 2.50012 10 2.5Z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path fill=\"%230A1748\" d=\"M11.6667 10C11.6667 9.08333 10.9167 8.33333 10 8.33333C9.08333 8.33333 8.33333 9.08333 8.33333 10C8.33333 10.9167 9.08333 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10ZM10 2.5C8.01088 2.5 6.10322 3.29018 4.6967 4.6967C3.29018 6.10322 2.5 8.01088 2.5 10H0L3.33333 13.3333L6.66667 10H4.16667C4.16667 6.775 6.775 4.16667 10 4.16667C13.225 4.16667 15.8333 6.775 15.8333 10C15.8345 11.0715 15.5402 12.1226 14.983 13.0377C14.4257 13.9529 13.627 14.6968 12.6746 15.1877C11.7221 15.6785 10.6528 15.8974 9.58411 15.8202C8.5154 15.743 7.48866 15.3727 6.61667 14.75L5.43333 15.95C6.37887 16.6756 7.48372 17.1654 8.65631 17.3788C9.8289 17.5922 11.0355 17.5231 12.176 17.1772C13.3166 16.8312 14.3582 16.2185 15.2147 15.3897C16.0712 14.5609 16.7179 13.5398 17.1011 12.4113C17.4842 11.2827 17.5929 10.079 17.4181 8.90008C17.2434 7.72112 16.7901 6.60078 16.096 5.63193C15.4018 4.66308 14.4868 3.87361 13.4266 3.32895C12.3665 2.78429 11.1919 2.50012 10 2.5Z\"/></svg>') center/contain;\n}\n\n.search-view__filters-action--close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.86);\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n}\n\n.search-view__filters-action--close[_ngcontent-%COMP%]::before {\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%23000\" d=\"M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.4 4.3 19.71 2.89 18.3 9.18 12 2.89 5.71 4.3 4.3l6.29 6.29 6.3-6.29z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%23000\" d=\"M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.4 4.3 19.71 2.89 18.3 9.18 12 2.89 5.71 4.3 4.3l6.29 6.29 6.3-6.29z\"/></svg>') center/contain;\n}\n\n.search-view__filters-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.search-view__filters-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.28px;\n  text-transform: uppercase;\n  color: rgba(10, 23, 72, 0.72);\n}\n\n.search-view__filters-group[_ngcontent-%COMP%]    + .search-view__filters-group[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(10, 23, 72, 0.1);\n  margin: 0 calc(-1 * var(--search-filter-padding));\n  padding: 20px var(--search-filter-padding) 0;\n}\n\n.search-view__filters-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.search-view__filters-option[_ngcontent-%COMP%] {\n  min-width: 88px;\n  padding: 10px 18px;\n  border-radius: 999px;\n  border: 1px solid rgba(10, 23, 72, 0.08);\n  background: rgba(255, 255, 255, 0.8);\n  color: rgba(10, 23, 72, 0.75);\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.16px;\n  cursor: pointer;\n  transition: background 0.2s ease, color 0.2s ease, border 0.2s ease;\n}\n\n.search-view__filters-option.is-active[_ngcontent-%COMP%] {\n  background: rgba(10, 23, 72, 0.12);\n  border-color: rgba(255, 61, 150, 0.24);\n  color: rgb(10, 23, 72);\n}\n\n.search-view__filters-option[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(255, 61, 150, 0.4);\n  outline-offset: 2px;\n}\n\n@media (max-width: 768px) {\n  .search-view__card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .search-view__header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .search-view__search[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .search-view__control--profile[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n  }\n  .search-view__filters-card[_ngcontent-%COMP%] {\n    margin: 16px;\n    width: min(100%, 360px);\n    --search-filter-padding: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9zZWFyY2gvdWkvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSwySEFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsOERBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQWpFYztFQWtFZCxxQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQWxGYztFQW1GZCx5UkFBQTtFQUNBLGlTQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7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QTtJQUNFLGNBQUE7RUFSRjtFQVdBO0lBQ0UsWUFBQTtJQUNBLHVCQUFBO0lBQ0EsNkJBQUE7RUFURjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuJGZpZ21hLXByaW1hcnk6IHJnYmEoMTAsIDIzLCA3MiwgMSk7XG4kZmlnbWEtbXV0ZWQ6IHJnYmEoMTAsIDIzLCA3MiwgMC42KTtcblxuLnNlYXJjaC12aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiBjbGFtcCgycmVtLCA2dncsIDRyZW0pO1xuICBmb250LWZhbWlseTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG59XG5cbi5zZWFyY2gtdmlldzo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ZpZ21hL2xvZ2luL2JhY2tncm91bmQtbGFyZ2UucG5nJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbiAgei1pbmRleDogLTI7XG59XG5cbi5zZWFyY2gtdmlld19fY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IG1pbigxMDAlLCAzOTNweCk7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJveC1zaGFkb3c6IDAgNDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4uc2VhcmNoLXZpZXdfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWFyY2gtdmlld19fY29udHJvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjA4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4wOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLnNlYXJjaC12aWV3X19jb250cm9sLS1wcm9maWxlIHtcbiAgd2lkdGg6IDY3cHg7XG4gIHBhZGRpbmc6IDZweCA5cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xuICBmb250LXNpemU6IDlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4wOCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xufVxuXG4uc2VhcmNoLXZpZXdfX2NvbnRyb2wtLXByb2ZpbGUgc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzA2cHg7XG59XG5cbi5zZWFyY2gtdmlld19fY29udHJvbC0tcHJvZmlsZTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQ6ICRmaWdtYS1wcmltYXJ5O1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTIgMTJjMi43IDAgNC44LTIuMSA0LjgtNC44UzE0LjcgMi40IDEyIDIuNCA3LjIgNC41IDcuMiA3LjIgOS4zIDEyIDEyIDEyem0wIDIuNGMtMy4yIDAtOS42IDEuNi05LjYgNC44VjIxaDE5LjJ2LTEuOGMwLTMuMi02LjQtNC44LTkuNi00Ljh6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xuICAtd2Via2l0LW1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xMiAxMmMyLjcgMCA0LjgtMi4xIDQuOC00LjhTMTQuNyAyLjQgMTIgMi40IDcuMiA0LjUgNy4yIDcuMiA5LjMgMTIgMTIgMTJ6bTAgMi40Yy0zLjIgMC05LjYgMS42LTkuNiA0LjhWMjFoMTkuMnYtMS44YzAtMy4yLTYuNC00LjgtOS42LTQuOHpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG59XG5cbi5zZWFyY2gtdmlld19fc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4wOCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xufVxuXG4uc2VhcmNoLXZpZXdfX3NlYXJjaCBpbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzA2cHg7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbn1cblxuLnNlYXJjaC12aWV3X19zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNyk7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVyLXRyaWdnZXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMDgpO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG4gIG1hc2s6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlYXJjaC12aWV3X19maWx0ZXItdHJpZ2dlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICRmaWdtYS1wcmltYXJ5O1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTAgMThoNHYtMmgtNHYyWm0tNy04djJoMTh2LTJIM1ptMy02djJoMTJWNEg2Wm0xMiAxMmgtNnYyaDZ2LTJaXCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xuICAtd2Via2l0LW1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xMCAxOGg0di0yaC00djJabS03LTh2MmgxOHYtMkgzWm0zLTZ2MmgxMlY0SDZabTEyIDEyaC02djJoNnYtMlpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVyLXRyaWdnZXIuaXMtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4xMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLnNlYXJjaC12aWV3X19zZWFyY2gtaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICRmaWdtYS1wcmltYXJ5O1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QTYuNDcxIDYuNDcxIDAgMDAxNiA5LjUgNi41IDYuNSAwIDEwOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw0Ljk5IDVMMjAuNSAxOWwtNS01em0tNiAwQzguMDEgMTQgNiAxMS45OSA2IDkuNVM4LjAxIDUgMTAuNSA1IDE1IDcuMDEgMTUgOS41IDEyLjk5IDE0IDEwLjUgMTR6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xuICAtd2Via2l0LW1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwMDE2IDkuNSA2LjUgNi41IDAgMTA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDQuOTkgNUwyMC41IDE5bC01LTV6bS02IDBDOC4wMSAxNCA2IDExLjk5IDYgOS41UzguMDEgNSAxMC41IDUgMTUgNy4wMSAxNSA5LjUgMTIuOTkgMTQgMTAuNSAxNHpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnNlYXJjaC12aWV3X19zdW1tYXJ5IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbn1cblxuLnNlYXJjaC12aWV3X19zdW1tYXJ5IGgxIHtcbiAgbWFyZ2luOiA4cHggMCAwO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjM3NHB4O1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG59XG5cbi5zZWFyY2gtdmlld19fcmVzdWx0cyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzNjBweDtcbn1cblxuLnNlYXJjaC12aWV3X19yZXN1bHRzIGxpIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2VhcmNoLXZpZXdfX3Jlc3VsdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTZweCAxZnIgYXV0bztcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjA4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoLXZpZXdfX3Jlc3VsdHMgbGk6bGFzdC1jaGlsZCAuc2VhcmNoLXZpZXdfX3Jlc3VsdCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zZWFyY2gtdmlld19fcmVzdWx0LWF2YXRhciB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc2VhcmNoLXZpZXdfX3Jlc3VsdC1ib2R5IGgyIHtcbiAgbWFyZ2luOiAwIDAgNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbn1cblxuLnNlYXJjaC12aWV3X19yZXN1bHQtYm9keSBwIHtcbiAgbWFyZ2luOiAycHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGNvbG9yOiAkZmlnbWEtbXV0ZWQ7XG59XG5cbi5zZWFyY2gtdmlld19fcmVzdWx0LWNoZXZyb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQ6ICRmaWdtYS1wcmltYXJ5O1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNOS4yOSA2LjcxTDEzLjU4IDExbC00LjI5IDQuMjkgMS40MiAxLjQyTDE2LjQxIDExbC01LjctNS43MXpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIC13ZWJraXQtbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTkuMjkgNi43MUwxMy41OCAxMWwtNC4yOSA0LjI5IDEuNDIgMS40MkwxNi40MSAxMWwtNS43LTUuNzF6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4uc2VhcmNoLXZpZXdfX2ZpbHRlcnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTI7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbn1cblxuLnNlYXJjaC12aWV3X19maWx0ZXJzLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBtaW4oMTAwJSwgMzQ1cHgpO1xuICBtYXJnaW46IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yOCk7XG4gIGJveC1zaGFkb3c6IDAgNDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNHB4KTtcbiAgLS1zZWFyY2gtZmlsdGVyLXBhZGRpbmc6IDI0cHg7XG4gIHBhZGRpbmc6IHZhcigtLXNlYXJjaC1maWx0ZXItcGFkZGluZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnNlYXJjaC12aWV3X19maWx0ZXJzLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI0ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjUpO1xufVxuXG4uc2VhcmNoLXZpZXdfX2ZpbHRlcnMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1oZWFkZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xufVxuXG4uc2VhcmNoLXZpZXdfX2ZpbHRlcnMtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1hY3Rpb25zLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDYxLCAxNTAsIDAuMTYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1hY3Rpb24ge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1hY3Rpb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1hY3Rpb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1hY3Rpb24tLWFwcGx5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1hY3Rpb24tLWFwcGx5OjpiZWZvcmUge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMGExNzQ4O1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE1IDEyXCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNNC42NTgzMyA4LjgxNjY3TDEuMTgzMzMgNS4zNDE2N0wwIDYuNTE2NjdMNC42NTgzMyAxMS4xNzVMMTQuNjU4MyAxLjE3NUwxMy40ODMzIDBMNC42NTgzMyA4LjgxNjY3WlwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE1IDEyXCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNNC42NTgzMyA4LjgxNjY3TDEuMTgzMzMgNS4zNDE2N0wwIDYuNTE2NjdMNC42NTgzMyAxMS4xNzVMMTQuNjU4MyAxLjE3NUwxMy40ODMzIDBMNC42NTgzMyA4LjgxNjY3WlwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbn1cblxuLnNlYXJjaC12aWV3X19maWx0ZXJzLWFjdGlvbi0tcmVzZXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlYXJjaC12aWV3X19maWx0ZXJzLWFjdGlvbi0tcmVzZXQ6OmJlZm9yZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuOSk7XG4gIG1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xMS42NjY3IDEwQzExLjY2NjcgOS4wODMzMyAxMC45MTY3IDguMzMzMzMgMTAgOC4zMzMzM0M5LjA4MzMzIDguMzMzMzMgOC4zMzMzMyA5LjA4MzMzIDguMzMzMzMgMTBDOC4zMzMzMyAxMC45MTY3IDkuMDgzMzMgMTEuNjY2NyAxMCAxMS42NjY3QzEwLjkxNjcgMTEuNjY2NyAxMS42NjY3IDEwLjkxNjcgMTEuNjY2NyAxMFpNMTAgMi41QzguMDEwODggMi41IDYuMTAzMjIgMy4yOTAxOCA0LjY5NjcgNC42OTY3QzMuMjkwMTggNi4xMDMyMiAyLjUgOC4wMTA4OCAyLjUgMTBIMEwzLjMzMzMzIDEzLjMzMzNMNi42NjY2NyAxMEg0LjE2NjY3QzQuMTY2NjcgNi43NzUgNi43NzUgNC4xNjY2NyAxMCA0LjE2NjY3QzEzLjIyNSA0LjE2NjY3IDE1LjgzMzMgNi43NzUgMTUuODMzMyAxMEMxNS44MzQ1IDExLjA3MTUgMTUuNTQwMiAxMi4xMjI2IDE0Ljk4MyAxMy4wMzc3QzE0LjQyNTcgMTMuOTUyOSAxMy42MjcgMTQuNjk2OCAxMi42NzQ2IDE1LjE4NzdDMTEuNzIyMSAxNS42Nzg1IDEwLjY1MjggMTUuODk3NCA5LjU4NDExIDE1LjgyMDJDOC41MTU0IDE1Ljc0MyA3LjQ4ODY2IDE1LjM3MjcgNi42MTY2NyAxNC43NUw1LjQzMzMzIDE1Ljk1QzYuMzc4ODcgMTYuNjc1NiA3LjQ4MzcyIDE3LjE2NTQgOC42NTYzMSAxNy4zNzg4QzkuODI4OSAxNy41OTIyIDExLjAzNTUgMTcuNTIzMSAxMi4xNzYgMTcuMTc3MkMxMy4zMTY2IDE2LjgzMTIgMTQuMzU4MiAxNi4yMTg1IDE1LjIxNDcgMTUuMzg5N0MxNi4wNzEyIDE0LjU2MDkgMTYuNzE3OSAxMy41Mzk4IDE3LjEwMTEgMTIuNDExM0MxNy40ODQyIDExLjI4MjcgMTcuNTkyOSAxMC4wNzkgMTcuNDE4MSA4LjkwMDA4QzE3LjI0MzQgNy43MjExMiAxNi43OTAxIDYuNjAwNzggMTYuMDk2IDUuNjMxOTNDMTUuNDAxOCA0LjY2MzA4IDE0LjQ4NjggMy44NzM2MSAxMy40MjY2IDMuMzI4OTVDMTIuMzY2NSAyLjc4NDI5IDExLjE5MTkgMi41MDAxMiAxMCAyLjVaXCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xuICAtd2Via2l0LW1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xMS42NjY3IDEwQzExLjY2NjcgOS4wODMzMyAxMC45MTY3IDguMzMzMzMgMTAgOC4zMzMzM0M5LjA4MzMzIDguMzMzMzMgOC4zMzMzMyA5LjA4MzMzIDguMzMzMzMgMTBDOC4zMzMzMyAxMC45MTY3IDkuMDgzMzMgMTEuNjY2NyAxMCAxMS42NjY3QzEwLjkxNjcgMTEuNjY2NyAxMS42NjY3IDEwLjkxNjcgMTEuNjY2NyAxMFpNMTAgMi41QzguMDEwODggMi41IDYuMTAzMjIgMy4yOTAxOCA0LjY5NjcgNC42OTY3QzMuMjkwMTggNi4xMDMyMiAyLjUgOC4wMTA4OCAyLjUgMTBIMEwzLjMzMzMzIDEzLjMzMzNMNi42NjY2NyAxMEg0LjE2NjY3QzQuMTY2NjcgNi43NzUgNi43NzUgNC4xNjY2NyAxMCA0LjE2NjY3QzEzLjIyNSA0LjE2NjY3IDE1LjgzMzMgNi43NzUgMTUuODMzMyAxMEMxNS44MzQ1IDExLjA3MTUgMTUuNTQwMiAxMi4xMjI2IDE0Ljk4MyAxMy4wMzc3QzE0LjQyNTcgMTMuOTUyOSAxMy42MjcgMTQuNjk2OCAxMi42NzQ2IDE1LjE4NzdDMTEuNzIyMSAxNS42Nzg1IDEwLjY1MjggMTUuODk3NCA5LjU4NDExIDE1LjgyMDJDOC41MTU0IDE1Ljc0MyA3LjQ4ODY2IDE1LjM3MjcgNi42MTY2NyAxNC43NUw1LjQzMzMzIDE1Ljk1QzYuMzc4ODcgMTYuNjc1NiA3LjQ4MzcyIDE3LjE2NTQgOC42NTYzMSAxNy4zNzg4QzkuODI4OSAxNy41OTIyIDExLjAzNTUgMTcuNTIzMSAxMi4xNzYgMTcuMTc3MkMxMy4zMTY2IDE2LjgzMTIgMTQuMzU4MiAxNi4yMTg1IDE1LjIxNDcgMTUuMzg5N0MxNi4wNzEyIDE0LjU2MDkgMTYuNzE3OSAxMy41Mzk4IDE3LjEwMTEgMTIuNDExM0MxNy40ODQyIDExLjI4MjcgMTcuNTkyOSAxMC4wNzkgMTcuNDE4MSA4LjkwMDA4QzE3LjI0MzQgNy43MjExMiAxNi43OTAxIDYuNjAwNzggMTYuMDk2IDUuNjMxOTNDMTUuNDAxOCA0LjY2MzA4IDE0LjQ4NjggMy44NzM2MSAxMy40MjY2IDMuMzI4OTVDMTIuMzY2NSAyLjc4NDI5IDExLjE5MTkgMi41MDAxMiAxMCAyLjVaXCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4uc2VhcmNoLXZpZXdfX2ZpbHRlcnMtYWN0aW9uLS1jbG9zZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nik7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4wOCk7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1hY3Rpb24tLWNsb3NlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAkZmlnbWEtcHJpbWFyeTtcbiAgbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwMDBcIiBkPVwiTTE4LjMgNS43MSAxMiAxMmw2LjMgNi4yOS0xLjQxIDEuNDFMMTAuNTkgMTMuNCA0LjMgMTkuNzEgMi44OSAxOC4zIDkuMTggMTIgMi44OSA1LjcxIDQuMyA0LjNsNi4yOSA2LjI5IDYuMy02LjI5elwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzAwMFwiIGQ9XCJNMTguMyA1LjcxIDEyIDEybDYuMyA2LjI5LTEuNDEgMS40MUwxMC41OSAxMy40IDQuMyAxOS43MSAyLjg5IDE4LjMgOS4xOCAxMiAyLjg5IDUuNzEgNC4zIDQuM2w2LjI5IDYuMjkgNi4zLTYuMjl6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4uc2VhcmNoLXZpZXdfX2ZpbHRlcnMtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLnNlYXJjaC12aWV3X19maWx0ZXJzLWdyb3VwIGgzIHtcbiAgbWFyZ2luOiAwIDAgMTJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC43Mik7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1ncm91cCArIC5zZWFyY2gtdmlld19fZmlsdGVycy1ncm91cCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjEpO1xuICBtYXJnaW46IDAgY2FsYygtMSAqIHZhcigtLXNlYXJjaC1maWx0ZXItcGFkZGluZykpO1xuICBwYWRkaW5nOiAyMHB4IHZhcigtLXNlYXJjaC1maWx0ZXItcGFkZGluZykgMDtcbn1cblxuLnNlYXJjaC12aWV3X19maWx0ZXJzLW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cblxuLnNlYXJjaC12aWV3X19maWx0ZXJzLW9wdGlvbiB7XG4gIG1pbi13aWR0aDogODhweDtcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4wOCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNzUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2UsIGJvcmRlciAwLjJzIGVhc2U7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1vcHRpb24uaXMtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4xMik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDYxLCAxNTAsIDAuMjQpO1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG59XG5cbi5zZWFyY2gtdmlld19fZmlsdGVycy1vcHRpb246Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDI1NSwgNjEsIDE1MCwgMC40KTtcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2gtdmlld19fY2FyZCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC5zZWFyY2gtdmlld19faGVhZGVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuc2VhcmNoLXZpZXdfX3NlYXJjaCB7XG4gICAgZmxleDogMSAxIDEwMCU7XG4gIH1cblxuICAuc2VhcmNoLXZpZXdfX2NvbnRyb2wtLXByb2ZpbGUge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG5cbiAgLnNlYXJjaC12aWV3X19maWx0ZXJzLWNhcmQge1xuICAgIG1hcmdpbjogMTZweDtcbiAgICB3aWR0aDogbWluKDEwMCUsIDM2MHB4KTtcbiAgICAtLXNlYXJjaC1maWx0ZXItcGFkZGluZzogMjBweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=422.js.map