"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[670],{

/***/ 8944:
/*!*******************************************************!*\
  !*** ./src/app/feature/map/data-access/map.facade.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapFacade: () => (/* binding */ MapFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);



class MapFacade {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__.DocRosterApiService);
    this.clinics$ = this.api.getClinics();
    this.searchResults$ = this.api.getSearchResults();
    this.metrics = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.api.metrics());
  }
  static {
    this.ɵfac = function MapFacade_Factory(t) {
      return new (t || MapFacade)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MapFacade,
      factory: MapFacade.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2670:
/*!******************************************************!*\
  !*** ./src/app/feature/map/ui/map-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPageComponent: () => (/* binding */ MapPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_ui_clinic_card_clinic_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/clinic-card/clinic-card.component */ 1435);
/* harmony import */ var _shared_ui_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/doctor-card/doctor-card.component */ 5831);
/* harmony import */ var _shared_ui_metric_pill_metric_pill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/metric-pill/metric-pill.component */ 79);
/* harmony import */ var _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/section-header/section-header.component */ 9719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _data_access_map_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-access/map.facade */ 8944);








function MapPageComponent_div_18_dr_clinic_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "dr-clinic-card", 19);
  }
  if (rf & 2) {
    const clinic_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("clinic", clinic_r1);
  }
}
function MapPageComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MapPageComponent_div_18_dr_clinic_card_1_Template, 1, 1, "dr-clinic-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clinics_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", clinics_r2);
  }
}
function MapPageComponent_div_23_dr_doctor_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "dr-doctor-card", 22);
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("doctor", result_r3.doctor)("clinic", result_r3.clinic)("nextAvailable", result_r3.nextAvailable)("highlightDistance", result_r3.distanceInMinutes);
  }
}
function MapPageComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MapPageComponent_div_23_dr_doctor_card_1_Template, 1, 4, "dr-doctor-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const results_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", results_r4);
  }
}
class MapPageComponent {
  constructor(facade) {
    this.facade = facade;
  }
  static {
    this.ɵfac = function MapPageComponent_Factory(t) {
      return new (t || MapPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_data_access_map_facade__WEBPACK_IMPORTED_MODULE_4__.MapFacade));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: MapPageComponent,
      selectors: [["dr-map-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 16,
      consts: [[1, "map-hero", "section"], [1, "container"], ["title", "Navigate the DocRoster care map", "subtitle", "Preview our connected network of clinics, specialists and assessment programs before the public rollout.", "badge", "Pilot preview"], ["actions", "", 1, "map-hero__actions"], ["routerLink", "/search", 1, "button"], ["routerLink", "/auth/register", 1, "button", "button--ghost"], [1, "map-hero__metrics"], ["label", "Members served", 3, "value"], ["tone", "secondary", "label", "Active clinics", 3, "value"], ["tone", "neutral", "label", "Specialists", 3, "value"], ["label", "Community rating", 3, "value"], [1, "map-section", "section"], ["title", "Featured pilot clinics", "subtitle", "See how DocRoster coordinates across physical and virtual fronts."], ["class", "map-section__grid", 4, "ngIf"], [1, "map-section", "section", "map-section--alt"], ["title", "Trending specialists", "subtitle", "Matching community stories with the right expertise."], ["class", "map-section__grid map-section__grid--doctors", 4, "ngIf"], [1, "map-section__grid"], [3, "clinic", 4, "ngFor", "ngForOf"], [3, "clinic"], [1, "map-section__grid", "map-section__grid--doctors"], [3, "doctor", "clinic", "nextAvailable", "highlightDistance", 4, "ngFor", "ngForOf"], [3, "doctor", "clinic", "nextAvailable", "highlightDistance"]],
      template: function MapPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "dr-section-header", 2)(3, "div", 3)(4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Search specialists");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Request access");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "dr-metric-pill", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "dr-metric-pill", 8)(12, "dr-metric-pill", 9)(13, "dr-metric-pill", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "section", 11)(16, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "dr-section-header", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, MapPageComponent_div_18_Template, 2, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "section", 14)(21, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "dr-section-header", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, MapPageComponent_div_23_Template, 2, 1, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 7, ctx.facade.metrics().membersServed));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.facade.metrics().activeClinics);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.facade.metrics().availableSpecialists);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("value", "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 9, ctx.facade.metrics().averageSatisfaction, "1.1-1"), " \u2605");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 12, ctx.facade.clinics$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 14, ctx.facade.searchResults$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_3__.SectionHeaderComponent, _shared_ui_metric_pill_metric_pill_component__WEBPACK_IMPORTED_MODULE_2__.MetricPillComponent, _shared_ui_clinic_card_clinic_card_component__WEBPACK_IMPORTED_MODULE_0__.ClinicCardComponent, _shared_ui_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_1__.DoctorCardComponent],
      styles: [".map-hero[_ngcontent-%COMP%] {\n  background: radial-gradient(circle at top left, rgba(53, 82, 255, 0.18), transparent 55%), linear-gradient(180deg, rgba(53, 82, 255, 0.08), transparent 60%);\n}\n.map-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.map-hero__metrics[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1rem;\n}\n\n.map-section__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n.map-section__grid--doctors[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\n}\n.map-section--alt[_ngcontent-%COMP%] {\n  background: #f9fafc;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9tYXAvdWkvbWFwLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDRKQUFBO0FBREY7QUFJRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZKO0FBS0U7RUFDRSxnQkNRUztFRFBULGFBQUE7RUFDQSwyREFBQTtFQUNBLFNDR1M7QUROYjs7QUFRRTtFQUNFLGFBQUE7RUFDQSxXQ0hTO0VESVQsMkRBQUE7QUFMSjtBQVFFO0VBQ0UsMkRBQUE7QUFOSjtBQVNFO0VBQ0UsbUJDMUJnQjtBRG1CcEIiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuXG4ubWFwLWhlcm8ge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IHRvcCBsZWZ0LCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjE4KSwgdHJhbnNwYXJlbnQgNTUlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjA4KSwgdHJhbnNwYXJlbnQgNjAlKTtcblxuICAmX19hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cblxuICAmX19tZXRyaWNzIHtcbiAgICBtYXJnaW4tdG9wOiAkc3BhY2luZy14bDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgIGdhcDogJHNwYWNpbmctbWQ7XG4gIH1cbn1cblxuLm1hcC1zZWN0aW9uIHtcbiAgJl9fZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6ICRzcGFjaW5nLWxnO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICB9XG5cbiAgJl9fZ3JpZC0tZG9jdG9ycyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNDBweCwgMWZyKSk7XG4gIH1cblxuICAmLS1hbHQge1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlLWFsdDtcbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzNTUyZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWYzYmIzO1xuJGNvbG9yLXNlY29uZGFyeTogIzEzYzRhMztcbiRjb2xvci1hY2NlbnQ6ICNmOTczMTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjdmYjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZjlmYWZjO1xuJGNvbG9yLXRleHQ6ICMxMTE4Mjc7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZiNzI4MDtcbiRjb2xvci1ib3JkZXI6ICNlMmU4ZjA7XG4kY29sb3Itc3VjY2VzczogIzE2YTM0YTtcbiRjb2xvci13YXJuaW5nOiAjZmFjYzE1O1xuJGNvbG9yLWRhbmdlcjogI2RjMjYyNjtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 79:
/*!****************************************************************!*\
  !*** ./src/app/shared/ui/metric-pill/metric-pill.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricPillComponent: () => (/* binding */ MetricPillComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class MetricPillComponent {
  constructor() {
    this.tone = 'primary';
  }
  static {
    this.ɵfac = function MetricPillComponent_Factory(t) {
      return new (t || MetricPillComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MetricPillComponent,
      selectors: [["dr-metric-pill"]],
      inputs: {
        value: "value",
        label: "label",
        tone: "tone"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [[1, "metric"], [1, "metric__value"], [1, "metric__label"]],
      template: function MetricPillComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("metric--secondary", ctx.tone === "secondary")("metric--neutral", ctx.tone === "neutral");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        }
      },
      styles: [".metric[_ngcontent-%COMP%] {\n  display: inline-grid;\n  gap: 0.2rem;\n  padding: 0.85rem 1.25rem;\n  border-radius: 16px;\n  background: linear-gradient(135deg, rgba(53, 82, 255, 0.12), rgba(31, 59, 179, 0.1));\n  min-width: 148px;\n}\n.metric__value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #1f3bb3;\n}\n.metric__label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6b7280;\n}\n.metric--secondary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(19, 196, 163, 0.15), rgba(53, 82, 255, 0.12));\n}\n.metric--secondary[_ngcontent-%COMP%]   .metric__value[_ngcontent-%COMP%] {\n  color: #13c4a3;\n}\n.metric--neutral[_ngcontent-%COMP%] {\n  background: rgba(226, 232, 240, 0.4);\n}\n.metric--neutral[_ngcontent-%COMP%]   .metric__value[_ngcontent-%COMP%] {\n  color: #111827;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL21ldHJpYy1waWxsL21ldHJpYy1waWxsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQ1FVO0VEUFYsb0ZBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NaaUI7QURXckI7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsY0NWZTtBRFFuQjtBQUtFO0VBQ0Usc0ZBQUE7QUFISjtBQUtJO0VBQ0UsY0N2Qlk7QURvQmxCO0FBT0U7RUFDRSxvQ0FBQTtBQUxKO0FBT0k7RUFDRSxjQzFCTztBRHFCYiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3N0eWxlcy92YXJpYWJsZXMnIGFzICo7XG5cbi5tZXRyaWMge1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgZ2FwOiAwLjJyZW07XG4gIHBhZGRpbmc6IDAuODVyZW0gMS4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1sZztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4xMiksIHJnYmEoJGNvbG9yLXByaW1hcnktZGFyaywgMC4xKSk7XG4gIG1pbi13aWR0aDogMTQ4cHg7XG5cbiAgJl9fdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcms7XG4gIH1cblxuICAmX19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICB9XG5cbiAgJi0tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKCRjb2xvci1zZWNvbmRhcnksIDAuMTUpLCByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjEyKSk7XG5cbiAgICAubWV0cmljX192YWx1ZSB7XG4gICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgICB9XG4gIH1cblxuICAmLS1uZXV0cmFsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1ib3JkZXIsIDAuNCk7XG5cbiAgICAubWV0cmljX192YWx1ZSB7XG4gICAgICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3ItcHJpbWFyeTogIzM1NTJmZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMxZjNiYjM7XG4kY29sb3Itc2Vjb25kYXJ5OiAjMTNjNGEzO1xuJGNvbG9yLWFjY2VudDogI2Y5NzMxNjtcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZjVmN2ZiO1xuJGNvbG9yLXN1cmZhY2U6ICNmZmZmZmY7XG4kY29sb3Itc3VyZmFjZS1hbHQ6ICNmOWZhZmM7XG4kY29sb3ItdGV4dDogIzExMTgyNztcbiRjb2xvci10ZXh0LW11dGVkOiAjNmI3MjgwO1xuJGNvbG9yLWJvcmRlcjogI2UyZThmMDtcbiRjb2xvci1zdWNjZXNzOiAjMTZhMzRhO1xuJGNvbG9yLXdhcm5pbmc6ICNmYWNjMTU7XG4kY29sb3ItZGFuZ2VyOiAjZGMyNjI2O1xuJHJhZGl1cy14bDogMjRweDtcbiRyYWRpdXMtbGc6IDE2cHg7XG4kcmFkaXVzLW1kOiAxMnB4O1xuJHJhZGl1cy1zbTogOHB4O1xuJHNwYWNpbmcteHM6IDAuNXJlbTtcbiRzcGFjaW5nLXNtOiAwLjc1cmVtO1xuJHNwYWNpbmctbWQ6IDFyZW07XG4kc3BhY2luZy1sZzogMS41cmVtO1xuJHNwYWNpbmcteGw6IDJyZW07XG4kc3BhY2luZy14eGw6IDNyZW07XG4kc2hhZG93LXNvZnQ6IDAgMjBweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4kc2hhZG93LWNhcmQ6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG4kdHJhbnNpdGlvbi1iYXNlOiAxODBtcyBlYXNlLWluLW91dDtcbiRmb250LWZhbWlseS1iYXNlOiAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiRtYXgtY29udGVudC13aWR0aDogMTE4MHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=670.js.map