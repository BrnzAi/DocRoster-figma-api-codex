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
    this.filters$ = this.api.getFilters();
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _shared_ui_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/doctor-card/doctor-card.component */ 5831);
/* harmony import */ var _shared_ui_filter_group_filter_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/filter-group/filter-group.component */ 9253);
/* harmony import */ var _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/section-header/section-header.component */ 9719);
/* harmony import */ var _filters_data_access_filters_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../filters/data-access/filters.facade */ 1560);
/* harmony import */ var _data_access_search_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-access/search.facade */ 2566);












function SearchPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchPageComponent_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.resetAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Reset filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SearchPageComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchPageComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SearchPageComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const count_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", count_r4, " specialists match your filters.");
  }
}
function SearchPageComponent_aside_13_ng_container_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchPageComponent_aside_13_ng_container_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const group_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearGroup(group_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Clear ", group_r6.title.toLowerCase(), " ");
  }
}
function SearchPageComponent_aside_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19)(2, "dr-filter-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggled", function SearchPageComponent_aside_13_ng_container_1_Template_dr_filter_group_toggled_2_listener($event) {
      const group_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onToggle(group_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SearchPageComponent_aside_13_ng_container_1_button_3_Template, 2, 1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", group_r6)("selected", ctx_r1.selectionForGroup(group_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectionForGroup(group_r6.id).length);
  }
}
function SearchPageComponent_aside_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "aside", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SearchPageComponent_aside_13_ng_container_1_Template, 4, 3, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const groups_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", groups_r8);
  }
}
function SearchPageComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No matches yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Adjust the filters or explore the DocRoster map to discover more pilot specialists.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SearchPageComponent_div_15_dr_doctor_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "dr-doctor-card", 27);
  }
  if (rf & 2) {
    const result_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("doctor", result_r9.doctor)("clinic", result_r9.clinic)("nextAvailable", result_r9.nextAvailable)("highlightDistance", result_r9.distanceInMinutes);
  }
}
function SearchPageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SearchPageComponent_div_15_div_1_Template, 5, 0, "div", 24)(2, SearchPageComponent_div_15_dr_doctor_card_2_Template, 1, 4, "dr-doctor-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const results_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !results_r10.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", results_r10);
  }
}
class SearchPageComponent {
  constructor() {
    this.filtersFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_filters_data_access_filters_facade__WEBPACK_IMPORTED_MODULE_3__.FiltersFacade);
    this.searchFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_data_access_search_facade__WEBPACK_IMPORTED_MODULE_4__.SearchFacade);
    this.filters$ = this.filtersFacade.filters$;
    this.selections = this.filtersFacade.selectionsSignal;
    this.filteredResults$ = this.filtersFacade.filteredResults$;
    this.activeFilters = this.filtersFacade.activeFilterCount;
    this.totalResults$ = this.searchFacade.results$;
    this.hasSelections = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => this.activeFilters() > 0);
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
      nonNullable: true
    });
    this.searchTerm$ = this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''));
    this.visibleResults$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.filteredResults$, this.searchTerm$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([results, term]) => {
      const query = term.trim().toLowerCase();
      if (!query.length) {
        return results;
      }
      return results.filter(result => {
        const haystack = [result.doctor.name, result.doctor.specialty, result.clinic.name, result.clinic.address.city, result.clinic.address.state].join(' ').toLowerCase();
        return haystack.includes(query);
      });
    }));
    this.visibleCount$ = this.visibleResults$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(items => items.length));
  }
  onToggle(group, value) {
    this.filtersFacade.toggleOption(group, value);
  }
  clearGroup(groupId) {
    this.filtersFacade.clearGroup(groupId);
  }
  resetAll() {
    this.filtersFacade.resetAll();
  }
  selectionForGroup(groupId) {
    return this.selections()[groupId] ?? [];
  }
  clearSearch() {
    this.searchControl.setValue('');
  }
  static {
    this.ɵfac = function SearchPageComponent_Factory(t) {
      return new (t || SearchPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SearchPageComponent,
      selectors: [["dr-search-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 12,
      consts: [[1, "search-hero", "section"], [1, "container"], ["title", "Search DocRoster specialists", "subtitle", "Blend map intelligence, filters and live availability to find the teams you need."], ["actions", "", "class", "search-hero__actions", 4, "ngIf"], [1, "search-hero__form", 3, "ngSubmit"], [1, "search-hero__field"], ["aria-hidden", "true", 1, "material-symbols-rounded"], ["type", "search", "placeholder", "Search by name, specialty or clinic", "aria-label", "Search specialists", 3, "formControl"], ["type", "button", "class", "search-hero__clear", 3, "click", 4, "ngIf"], ["class", "search-hero__meta", 4, "ngIf"], [1, "search-layout", "container"], ["class", "search-layout__filters", 4, "ngIf"], ["class", "search-layout__results", 4, "ngIf"], ["actions", "", 1, "search-hero__actions"], ["type", "button", 1, "button", "button--ghost", 3, "click"], ["type", "button", 1, "search-hero__clear", 3, "click"], [1, "search-hero__meta"], [1, "search-layout__filters"], [4, "ngFor", "ngForOf"], [1, "search-layout__filter-group"], [3, "toggled", "group", "selected"], ["type", "button", "class", "search-layout__clear", 3, "click", 4, "ngIf"], ["type", "button", 1, "search-layout__clear", 3, "click"], [1, "search-layout__results"], ["class", "search-layout__empty", 4, "ngIf"], [3, "doctor", "clinic", "nextAvailable", "highlightDistance", 4, "ngFor", "ngForOf"], [1, "search-layout__empty"], [3, "doctor", "clinic", "nextAvailable", "highlightDistance"]],
      template: function SearchPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "dr-section-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SearchPageComponent_div_3_Template, 3, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function SearchPageComponent_Template_form_ngSubmit_4_listener($event) {
            return $event.preventDefault();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SearchPageComponent_button_9_Template, 2, 0, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SearchPageComponent_p_10_Template, 2, 1, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "section", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SearchPageComponent_aside_13_Template, 2, 1, "aside", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, SearchPageComponent_div_15_Template, 3, 2, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasSelections());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchControl.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 6, ctx.visibleCount$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 8, ctx.filters$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 10, ctx.visibleResults$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_2__.SectionHeaderComponent, _shared_ui_filter_group_filter_group_component__WEBPACK_IMPORTED_MODULE_1__.FilterGroupComponent, _shared_ui_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_0__.DoctorCardComponent],
      styles: [".search-hero[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(145deg, rgba(61, 122, 255, 0.08), rgba(238, 241, 255, 0.9));\n  overflow: hidden;\n}\n.search-hero[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 20% -20% -30% 40%;\n  background: radial-gradient(circle, rgba(255, 61, 150, 0.18), transparent 60%);\n  pointer-events: none;\n}\n.search-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.search-hero__meta[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #6d7ba1;\n}\n.search-hero__form[_ngcontent-%COMP%] {\n  margin-top: clamp(1.5rem, 3vw, 2.5rem);\n}\n.search-hero__field[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.75rem 1rem;\n  border-radius: 16px;\n  border: 1px solid rgba(213, 220, 240, 0.7);\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: 0 22px 60px rgba(10, 23, 72, 0.15);\n  font-weight: 600;\n}\n.search-hero__field[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font: inherit;\n  font-size: 1rem;\n  color: #0a1748;\n  background: transparent;\n}\n.search-hero__field[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  color: #3d7aff;\n  font-size: 1.35rem;\n}\n.search-hero__clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #3d7aff;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.search-layout[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n  grid-template-columns: minmax(260px, 320px) 1fr;\n}\n@media (max-width: 960px) {\n  .search-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.search-layout__filters[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  align-content: start;\n}\n.search-layout__filter-group[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-radius: 16px;\n  background: #ffffff;\n  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);\n  display: grid;\n  gap: 0.75rem;\n}\n.search-layout__clear[_ngcontent-%COMP%] {\n  justify-self: flex-start;\n  background: none;\n  border: none;\n  color: #3d7aff;\n  font-weight: 600;\n  cursor: pointer;\n}\n.search-layout__results[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n.search-layout__empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 16px;\n  background: rgba(61, 122, 255, 0.06);\n  text-align: center;\n}\n.search-layout__empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.search-layout__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6d7ba1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9zZWFyY2gvdWkvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsdUZBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLDhFQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxjQ2RlO0FEV25CO0FBTUU7RUFDRSxzQ0FBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQ3JCUTtFRHNCUiwwQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0N2Q087RUR3Q1AsdUJBQUE7QUFMTjtBQVFJO0VBQ0UsY0NuRFU7RURvRFYsa0JBQUE7QUFOTjtBQVVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0MzRFk7RUQ0RFosZ0JBQUE7RUFDQSxlQUFBO0FBUko7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsV0MvQ1c7RURnRFgsK0NBQUE7QUFURjtBQVdFO0VBTEY7SUFNSSwwQkFBQTtFQVJGO0FBQ0Y7QUFVRTtFQUNFLGFBQUE7RUFDQSxTQ3pEUztFRDBEVCxvQkFBQTtBQVJKO0FBV0U7RUFDRSxnQkFBQTtFQUNBLG1CQ3BFUTtFRHFFUixtQkM5RVk7RUQrRVosOENDN0RVO0VEOERWLGFBQUE7RUFDQSxZQUFBO0FBVEo7QUFZRTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0M3Rlk7RUQ4RlosZ0JBQUE7RUFDQSxlQUFBO0FBVko7QUFhRTtFQUNFLGFBQUE7RUFDQSxXQ2hGUztBRHFFYjtBQWNFO0VBQ0UsYUFBQTtFQUNBLG1CQzNGUTtFRDRGUixvQ0FBQTtFQUNBLGtCQUFBO0FBWko7QUFjSTtFQUNFLGFBQUE7QUFaTjtBQWVJO0VBQ0UsY0MxR2E7QUQ2Rm5CIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuLnNlYXJjaC1oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjA4KSwgcmdiYSgkY29sb3Itc3VyZmFjZS1hbHQsIDAuOSkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDIwJSAtMjAlIC0zMCUgNDAlO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoJGNvbG9yLWFjY2VudCwgMC4xOCksIHRyYW5zcGFyZW50IDYwJSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAmX19hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC43NXJlbTtcbiAgfVxuXG4gICZfX21ldGEge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICB9XG5cbiAgJl9fZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogY2xhbXAoMS41cmVtLCAzdncsIDIuNXJlbSk7XG4gIH1cblxuICAmX19maWVsZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuODVyZW07XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtbGc7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItYm9yZGVyLCAwLjcpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXN1cmZhY2UsIDAuOTYpO1xuICAgIGJveC1zaGFkb3c6IDAgMjJweCA2MHB4IHJnYmEoJGNvbG9yLXRleHQsIDAuMTUpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICBpbnB1dFt0eXBlPSdzZWFyY2gnXSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGNvbG9yOiAkY29sb3ItdGV4dDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX2NsZWFyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLnNlYXJjaC1sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6ICRzcGFjaW5nLWxnO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNjBweCwgMzIwcHgpIDFmcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gICZfX2ZpbHRlcnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAkc3BhY2luZy1tZDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgfVxuXG4gICZfX2ZpbHRlci1ncm91cCB7XG4gICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWxnO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlO1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctc29mdDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC43NXJlbTtcbiAgfVxuXG4gICZfX2NsZWFyIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJl9fcmVzdWx0cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6ICRzcGFjaW5nLWxnO1xuICB9XG5cbiAgJl9fZW1wdHkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1sZztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjA2KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgIH1cbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzZDdhZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWUzYThhO1xuJGNvbG9yLXNlY29uZGFyeTogIzIxYjEyODtcbiRjb2xvci1hY2NlbnQ6ICNmZjNkOTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjZmZjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZWVmMWZmO1xuJGNvbG9yLXRleHQ6ICMwYTE3NDg7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZkN2JhMTtcbiRjb2xvci1ib3JkZXI6ICNkNWRjZjA7XG4kY29sb3Itc3VjY2VzczogIzIxYjEyODtcbiRjb2xvci13YXJuaW5nOiAjZmY1NzNkO1xuJGNvbG9yLWRhbmdlcjogI2ZmM2QwMDtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=422.js.map