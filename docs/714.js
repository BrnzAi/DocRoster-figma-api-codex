"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[714],{

/***/ 4272:
/*!*********************************************************************!*\
  !*** ./src/app/feature/specialist/data-access/specialist.facade.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecialistFacade: () => (/* binding */ SpecialistFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);
var _staticBlock;





class SpecialistFacade {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_4__.DocRosterApiService);
  }
  getDoctor(id) {
    return this.api.getDoctorById(id);
  }
  getClinicForDoctor(doctorId) {
    return this.getDoctor(doctorId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(doctor => doctor ? this.api.getClinicById(doctor.clinicId) : this.api.getClinics().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => undefined))));
  }
  getReviews(doctorId) {
    return this.api.getReviewsForDoctor(doctorId);
  }
  getDoctorProfileContext(doctorId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.getDoctor(doctorId), this.getClinicForDoctor(doctorId), this.getReviews(doctorId)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([doctor, clinic, reviews]) => ({
      doctor,
      clinic,
      reviews
    })));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SpecialistFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SpecialistFacade)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SpecialistFacade,
    factory: SpecialistFacade.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 9714:
/*!********************************************************************!*\
  !*** ./src/app/feature/specialist/ui/specialist-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecialistPageComponent: () => (/* binding */ SpecialistPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _data_access_specialist_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data-access/specialist.facade */ 4272);
/* harmony import */ var _shared_data_access_map_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/data-access/map-state.service */ 6991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







function SpecialistPageComponent_section_0_ng_container_1_div_15_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Call now");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clinic_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx_r1.formatPhoneHref(clinic_r1.phone), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function SpecialistPageComponent_section_0_ng_container_1_div_15_a_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Navigate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clinic_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx_r1.buildMapsLink(clinic_r1.address), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function SpecialistPageComponent_section_0_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Clinic");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, SpecialistPageComponent_section_0_ng_container_1_div_15_a_8_Template, 2, 1, "a", 12)(9, SpecialistPageComponent_section_0_ng_container_1_div_15_a_9_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const clinic_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", clinic_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"](" ", clinic_r1.address.street, ", ", clinic_r1.address.city, ", ", clinic_r1.address.state, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", clinic_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", clinic_r1.address);
  }
}
function SpecialistPageComponent_section_0_ng_container_1_div_16_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const highlight_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](highlight_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](highlight_r3.value);
  }
}
function SpecialistPageComponent_section_0_ng_container_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Specializations");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SpecialistPageComponent_section_0_ng_container_1_div_16_li_4_Template, 5, 2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const doctor_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", doctor_r4.highlights);
  }
}
function SpecialistPageComponent_section_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div")(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 9)(11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, SpecialistPageComponent_section_0_ng_container_1_div_15_Template, 10, 6, "div", 10)(16, SpecialistPageComponent_section_0_ng_container_1_div_16_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const doctor_r4 = ctx.ngIf;
    const context_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", doctor_r4.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", doctor_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](doctor_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](doctor_r4.specialty);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](doctor_r4.biography);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", context_r5.clinic);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", doctor_r4.highlights == null ? null : doctor_r4.highlights.length);
  }
}
function SpecialistPageComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SpecialistPageComponent_section_0_ng_container_1_Template, 17, 7, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const context_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const notFound_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", context_r5.doctor)("ngIfElse", notFound_r6);
  }
}
function SpecialistPageComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 17)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Loading profile\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function SpecialistPageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 17)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "We could not find this specialist. Try exploring the map.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
class SpecialistPageComponent {
  constructor() {
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute);
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_specialist_facade__WEBPACK_IMPORTED_MODULE_7__.SpecialistFacade);
    this.mapState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_shared_data_access_map_state_service__WEBPACK_IMPORTED_MODULE_8__.MapStateService);
    this.context$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(params => params.get('id') ?? ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => this.facade.getDoctorProfileContext(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(context => {
      if (context.doctor) {
        this.mapState.setActiveDoctor(context.doctor.id);
      }
    }));
  }
  formatPhoneHref(phone) {
    return `tel:${phone.replace(/[^\d+]/g, '')}`;
  }
  buildMapsLink(address) {
    const query = `${address.street}, ${address.city}, ${address.state}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SpecialistPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SpecialistPageComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SpecialistPageComponent,
    selectors: [["dr-specialist-page"]],
    decls: 6,
    vars: 4,
    consts: [["loading", ""], ["notFound", ""], ["class", "specialist-panel", 4, "ngIf", "ngIfElse"], [1, "specialist-panel"], [4, "ngIf", "ngIfElse"], [1, "specialist-panel__header"], ["type", "button", "routerLink", "/search", "aria-label", "Back to search", 1, "specialist-panel__close"], [1, "specialist-panel__identity"], [3, "src", "alt"], [1, "specialist-panel__section"], ["class", "specialist-panel__section", 4, "ngIf"], [1, "specialist-panel__actions"], [3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], [3, "href"], ["target", "_blank", "rel", "noopener", 3, "href"], [4, "ngFor", "ngForOf"], [1, "specialist-panel__fallback"]],
    template: function SpecialistPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, SpecialistPageComponent_section_0_Template, 2, 2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SpecialistPageComponent_ng_template_2_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(4, SpecialistPageComponent_ng_template_4_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const loading_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, ctx.context$))("ngIfElse", loading_r7);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  pointer-events: none;\n}\n\n.specialist-panel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: min(420px, 92vw);\n  margin: clamp(1.5rem, 4vw, 2.5rem);\n  padding: clamp(1.75rem, 4vw, 2.75rem);\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.28);\n  border: 1px solid rgba(255, 255, 255, 0.32);\n  box-shadow: 0 48px 120px rgba(0, 0, 0, 0.28);\n  -webkit-backdrop-filter: blur(26px);\n          backdrop-filter: blur(26px);\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  color: rgb(10, 23, 72);\n  pointer-events: auto;\n}\n\n.specialist-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n\n.specialist-panel__close[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 0.5px solid rgba(10, 23, 72, 0.12);\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 24px 48px rgba(10, 23, 72, 0.24);\n  cursor: pointer;\n}\n.specialist-panel__close[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 16px;\n  height: 16px;\n  margin: auto;\n  background: rgb(10, 23, 72);\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>') center/contain;\n          mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>') center/contain;\n}\n\n.specialist-panel__identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.specialist-panel__identity[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 22px;\n  object-fit: cover;\n  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);\n}\n.specialist-panel__identity[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.specialist-panel__identity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-weight: 600;\n  color: rgba(10, 23, 72, 0.75);\n}\n\n.specialist-panel__section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.specialist-panel__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n}\n.specialist-panel__section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.6;\n  color: rgba(10, 23, 72, 0.78);\n}\n.specialist-panel__section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: grid;\n  gap: 12px;\n}\n.specialist-panel__section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.82);\n  border: 0.5px solid rgba(10, 23, 72, 0.1);\n}\n.specialist-panel__section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(10, 23, 72, 0.65);\n}\n.specialist-panel__section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(10, 23, 72);\n  font-weight: 700;\n}\n\n.specialist-panel__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.specialist-panel__actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: 999px;\n  text-decoration: none;\n  font-weight: 600;\n  letter-spacing: -0.05px;\n  border: 0.5px solid rgba(255, 61, 150, 0.24);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n}\n.specialist-panel__actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  background: rgba(255, 61, 150, 0.85);\n  color: #fff;\n}\n.specialist-panel__actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  background: rgba(255, 255, 255, 0.95);\n  color: rgb(10, 23, 72);\n}\n\n.specialist-panel__fallback[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: min(420px, 92vw);\n  margin: clamp(1.5rem, 4vw, 2.5rem);\n  padding: 24px;\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.32);\n  box-shadow: 0 48px 120px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  color: rgb(10, 23, 72);\n}\n\n@media (max-width: 768px) {\n  .specialist-panel[_ngcontent-%COMP%] {\n    width: min(480px, 100%);\n    margin: clamp(1rem, 4vw, 1.5rem);\n    padding: clamp(1.5rem, 4vw, 2rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9zcGVjaWFsaXN0L3VpL3NwZWNpYWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQURGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsNENBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQWhCYztFQWlCZCxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxxQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtBQUhGO0FBS0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQTFDWTtFQTJDWiwyUEFBQTtVQUFBLG1QQUFBO0FBSEo7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBSkY7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0FBSko7QUFPRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFRRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBTko7O0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBUEY7QUFTRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQVBKO0FBVUU7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQVJKO0FBV0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFUSjtBQVlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtBQVZKO0FBWUk7RUFDRSw2QkFBQTtBQVZOO0FBYUk7RUFDRSxzQkFsSFU7RUFtSFYsZ0JBQUE7QUFYTjs7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFiRjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQWJKO0FBZUk7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7QUFiTjtBQWdCSTtFQUNFLHFDQUFBO0VBQ0Esc0JBN0lVO0FBK0hoQjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkE3SmM7QUE2SWhCOztBQW1CQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxnQ0FBQTtJQUNBLGlDQUFBO0VBaEJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuJGZpZ21hLXByaW1hcnk6IHJnYmEoMTAsIDIzLCA3MiwgMSk7XG5cbi5zcGVjaWFsaXN0LXBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogbWluKDQyMHB4LCA5MnZ3KTtcbiAgbWFyZ2luOiBjbGFtcCgxLjVyZW0sIDR2dywgMi41cmVtKTtcbiAgcGFkZGluZzogY2xhbXAoMS43NXJlbSwgNHZ3LCAyLjc1cmVtKTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKTtcbiAgYm94LXNoYWRvdzogMCA0OHB4IDEyMHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNnB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc3BlY2lhbGlzdC1wYW5lbF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5zcGVjaWFsaXN0LXBhbmVsX19jbG9zZSB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjEyKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDQ4cHggcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4yNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZDogJGZpZ21hLXByaW1hcnk7XG4gICAgbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTE5IDYuNDEgMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIH1cbn1cblxuLnNwZWNpYWxpc3QtcGFuZWxfX2lkZW50aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm94LXNoYWRvdzogMCAxOHB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgfVxuXG4gIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjc1KTtcbiAgfVxufVxuXG4uc3BlY2lhbGlzdC1wYW5lbF9fc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBjb2xvcjogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC43OCk7XG4gIH1cblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Mik7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjEpO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC42NSk7XG4gICAgfVxuXG4gICAgc3Ryb25nIHtcbiAgICAgIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG59XG5cbi5zcGVjaWFsaXN0LXBhbmVsX19hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEycHg7XG5cbiAgYSB7XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNXB4O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDYxLCAxNTAsIDAuMjQpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDYxLCAxNTAsIDAuODUpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gICAgICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG4gICAgfVxuICB9XG59XG5cbi5zcGVjaWFsaXN0LXBhbmVsX19mYWxsYmFjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IG1pbig0MjBweCwgOTJ2dyk7XG4gIG1hcmdpbjogY2xhbXAoMS41cmVtLCA0dncsIDIuNXJlbSk7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKTtcbiAgYm94LXNoYWRvdzogMCA0OHB4IDEyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3BlY2lhbGlzdC1wYW5lbCB7XG4gICAgd2lkdGg6IG1pbig0ODBweCwgMTAwJSk7XG4gICAgbWFyZ2luOiBjbGFtcCgxcmVtLCA0dncsIDEuNXJlbSk7XG4gICAgcGFkZGluZzogY2xhbXAoMS41cmVtLCA0dncsIDJyZW0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=714.js.map