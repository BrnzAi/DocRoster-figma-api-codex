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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);





class SpecialistFacade {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__.DocRosterApiService);
  }
  getDoctor(id) {
    return this.api.getDoctorById(id);
  }
  getClinicForDoctor(doctorId) {
    return this.getDoctor(doctorId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(doctor => doctor ? this.api.getClinicById(doctor.clinicId) : this.api.getClinics().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => undefined))));
  }
  getReviews(doctorId) {
    return this.api.getReviewsForDoctor(doctorId);
  }
  getDoctorProfileContext(doctorId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.getDoctor(doctorId), this.getClinicForDoctor(doctorId), this.getReviews(doctorId)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([doctor, clinic, reviews]) => ({
      doctor,
      clinic,
      reviews
    })));
  }
  static {
    this.ɵfac = function SpecialistFacade_Factory(t) {
      return new (t || SpecialistFacade)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SpecialistFacade,
      factory: SpecialistFacade.ɵfac,
      providedIn: 'root'
    });
  }
}

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _data_access_specialist_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-access/specialist.facade */ 4272);






function SpecialistPageComponent_section_0_div_1_div_15_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Call now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clinic_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.formatPhoneHref(clinic_r1.phone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function SpecialistPageComponent_section_0_div_1_div_15_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Navigate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clinic_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.buildMapsLink(clinic_r1.address), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function SpecialistPageComponent_section_0_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpecialistPageComponent_section_0_div_1_div_15_a_1_Template, 2, 1, "a", 18)(2, SpecialistPageComponent_section_0_div_1_div_15_a_2_Template, 2, 1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clinic_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", clinic_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", clinic_r1.address);
  }
}
function SpecialistPageComponent_section_0_div_1_section_16_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const highlight_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](highlight_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](highlight_r3.value);
  }
}
function SpecialistPageComponent_section_0_div_1_section_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 22)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Specializations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SpecialistPageComponent_section_0_div_1_section_16_li_4_Template, 5, 2, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const doctor_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", doctor_r4.highlights);
  }
}
function SpecialistPageComponent_section_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "article", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "specialist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11)(8, "header", 12)(9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SpecialistPageComponent_section_0_div_1_div_15_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SpecialistPageComponent_section_0_div_1_section_16_Template, 5, 1, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const doctor_r4 = ctx.ngIf;
    const context_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", doctor_r4.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", doctor_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doctor_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doctor_r4.specialty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doctor_r4.biography);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", context_r5.clinic);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", doctor_r4.highlights == null ? null : doctor_r4.highlights.length);
  }
}
function SpecialistPageComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpecialistPageComponent_section_0_div_1_Template, 17, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const context_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const notFound_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", context_r5.doctor)("ngIfElse", notFound_r6);
  }
}
function SpecialistPageComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading profile\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function SpecialistPageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "We could not find this specialist. Try exploring the map.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class SpecialistPageComponent {
  constructor() {
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute);
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_specialist_facade__WEBPACK_IMPORTED_MODULE_0__.SpecialistFacade);
    this.context$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(params => params.get('id') ?? ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(id => this.facade.getDoctorProfileContext(id)));
  }
  formatPhoneHref(phone) {
    return `tel:${phone.replace(/[^\d+]/g, '')}`;
  }
  buildMapsLink(address) {
    const query = `${address.street}, ${address.city}, ${address.state}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }
  static {
    this.ɵfac = function SpecialistPageComponent_Factory(t) {
      return new (t || SpecialistPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SpecialistPageComponent,
      selectors: [["dr-specialist-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 4,
      consts: [["loading", ""], ["notFound", ""], ["class", "specialist-view", 4, "ngIf", "ngIfElse"], [1, "specialist-view"], ["class", "specialist-view__frame", 4, "ngIf", "ngIfElse"], [1, "specialist-view__frame"], [1, "specialist-view__card"], [1, "specialist-view__media"], [1, "specialist-view__portrait", 3, "src", "alt"], [1, "specialist-view__badge"], ["type", "button", "routerLink", "/search", "aria-label", "Back to search results", 1, "specialist-view__close"], [1, "specialist-view__content"], [1, "specialist-view__header"], [1, "specialist-view__specialty"], [1, "specialist-view__bio"], ["class", "specialist-view__contact", 4, "ngIf"], ["class", "specialist-view__section", 4, "ngIf"], [1, "specialist-view__contact"], ["class", "specialist-view__action specialist-view__action--primary", 3, "href", 4, "ngIf"], ["class", "specialist-view__action specialist-view__action--secondary", "target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], [1, "specialist-view__action", "specialist-view__action--primary", 3, "href"], ["target", "_blank", "rel", "noopener", 1, "specialist-view__action", "specialist-view__action--secondary", 3, "href"], [1, "specialist-view__section"], [4, "ngFor", "ngForOf"], [1, "specialist-view__fallback"]],
      template: function SpecialistPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpecialistPageComponent_section_0_Template, 2, 2, "section", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SpecialistPageComponent_ng_template_2_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(4, SpecialistPageComponent_ng_template_4_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const loading_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.context$))("ngIfElse", loading_r7);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".specialist-view[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(2rem, 6vw, 4rem);\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n\n.specialist-view[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: fixed;\n  inset: 0;\n  background: url('background-large.png') center/cover no-repeat;\n  z-index: -2;\n}\n\n.specialist-view__frame[_ngcontent-%COMP%] {\n  width: min(100%, 393px);\n  margin: 0 auto;\n}\n\n.specialist-view__card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  border-radius: 32px;\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  background: rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(24px);\n  overflow: hidden;\n}\n\n.specialist-view__media[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  height: 360px;\n  overflow: hidden;\n}\n\n.specialist-view__media[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(13, 23, 65, 0) 45%, rgba(13, 23, 65, 0.6) 100%);\n  z-index: 1;\n}\n\n.specialist-view__portrait[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.specialist-view__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 24px;\n  left: 24px;\n  z-index: 2;\n  padding: 8px 16px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.8);\n  color: rgb(10, 23, 72);\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  box-shadow: 0 12px 24px rgba(10, 23, 72, 0.16);\n}\n\n.specialist-view__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  z-index: 2;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 0.5px solid rgba(10, 23, 72, 0.12);\n  background: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 0 48px rgba(10, 23, 72, 0.24);\n  backdrop-filter: blur(12px);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.specialist-view__close[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>') center/contain;\n}\n\n.specialist-view__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 0 24px 8px;\n  color: rgb(10, 23, 72);\n}\n\n.specialist-view__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.374px;\n}\n\n.specialist-view__specialty[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.24px;\n  color: rgba(10, 23, 72, 0.8);\n}\n\n.specialist-view__bio[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  line-height: 1.6;\n  letter-spacing: 0.2px;\n  color: rgba(10, 23, 72, 0.82);\n}\n\n.specialist-view__contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.specialist-view__action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  padding: 12px 24px 12px 48px;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  text-decoration: none;\n  border: 1px solid rgba(255, 61, 150, 0.2);\n  transition: transform 0.2s ease;\n  backdrop-filter: blur(12px);\n}\n\n.specialist-view__action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.specialist-view__action[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 20px;\n  width: 18px;\n  height: 18px;\n}\n\n.specialist-view__action--primary[_ngcontent-%COMP%] {\n  background: rgb(10, 23, 72);\n  color: #fff;\n}\n\n.specialist-view__action--primary[_ngcontent-%COMP%]::before {\n  background: #fff;\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><path fill=\"%23000\" d=\"M12 9H14C14 6.24 11.76 4 9 4V6C10.66 6 12 7.34 12 9ZM16 9H18C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0V2C12.87 2 16 5.13 16 9ZM17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.33 11.9 13.22 11.88 13.12 11.88C12.86 11.88 12.61 11.98 12.41 12.17L10.21 14.37C7.37139 12.9259 5.06406 10.6186 3.62 7.78L5.82 5.57C5.95245 5.44434 6.04632 5.28352 6.0906 5.1064C6.13488 4.92928 6.12773 4.7432 6.07 4.57C5.69132 3.41789 5.4989 2.21274 5.5 1C5.5 0.45 5.05 0 4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.5C18 12.95 17.55 12.5 17 12.5ZM2.03 2H3.53C3.6 2.88 3.75 3.75 3.98 4.58L2.78 5.79C2.38 4.58 2.12 3.32 2.03 2ZM16 15.97C14.68 15.88 13.4 15.62 12.2 15.21L13.4 14.01C14.25 14.25 15.12 14.4 16 14.46V15.97Z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><path fill=\"%23000\" d=\"M12 9H14C14 6.24 11.76 4 9 4V6C10.66 6 12 7.34 12 9ZM16 9H18C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0V2C12.87 2 16 5.13 16 9ZM17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.33 11.9 13.22 11.88 13.12 11.88C12.86 11.88 12.61 11.98 12.41 12.17L10.21 14.37C7.37139 12.9259 5.06406 10.6186 3.62 7.78L5.82 5.57C5.95245 5.44434 6.04632 5.28352 6.0906 5.1064C6.13488 4.92928 6.12773 4.7432 6.07 4.57C5.69132 3.41789 5.4989 2.21274 5.5 1C5.5 0.45 5.05 0 4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.5C18 12.95 17.55 12.5 17 12.5ZM2.03 2H3.53C3.6 2.88 3.75 3.75 3.98 4.58L2.78 5.79C2.38 4.58 2.12 3.32 2.03 2ZM16 15.97C14.68 15.88 13.4 15.62 12.2 15.21L13.4 14.01C14.25 14.25 15.12 14.4 16 14.46V15.97Z\"/></svg>') center/contain;\n}\n\n.specialist-view__action--secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.92);\n  color: rgb(10, 23, 72);\n}\n\n.specialist-view__action--secondary[_ngcontent-%COMP%]::before {\n  width: 20px;\n  height: 20px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%23000\" d=\"M12 7.27L16.28 17.7L12.81 16.17L12 15.81L11.19 16.17L7.72 17.7L12 7.27ZM12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%23000\" d=\"M12 7.27L16.28 17.7L12.81 16.17L12 15.81L11.19 16.17L7.72 17.7L12 7.27ZM12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z\"/></svg>') center/contain;\n}\n\n.specialist-view__section[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n  color: rgb(10, 23, 72);\n  border-top: 1px solid rgba(10, 23, 72, 0.12);\n  margin-top: 4px;\n}\n\n.specialist-view__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 14px;\n  letter-spacing: 0.28px;\n  text-transform: uppercase;\n  color: rgba(10, 23, 72, 0.72);\n}\n\n.specialist-view__section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 12px;\n}\n\n.specialist-view__section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 18px;\n  padding: 12px 16px;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  letter-spacing: 0.1px;\n}\n\n.specialist-view__section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(10, 23, 72, 0.7);\n}\n\n.specialist-view__section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(10, 23, 72);\n  font-weight: 700;\n}\n\n.specialist-view__fallback[_ngcontent-%COMP%] {\n  width: min(100%, 420px);\n  margin: clamp(2rem, 6vw, 4rem) auto;\n  padding: 24px;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.32);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.18);\n  backdrop-filter: blur(18px);\n  text-align: center;\n  color: rgb(10, 23, 72);\n}\n\n@media (max-width: 480px) {\n  .specialist-view[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .specialist-view__card[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .specialist-view__media[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .specialist-view__content[_ngcontent-%COMP%] {\n    padding-inline: 20px;\n  }\n  .specialist-view__section[_ngcontent-%COMP%] {\n    padding: 0 20px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9zcGVjaWFsaXN0L3VpL3NwZWNpYWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkhBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx3RkFBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQXBFYztFQXFFZCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBbEdjO0VBbUdkLG1QQUFBO0VBQ0EsMlBBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQTVHYztBQXlHaEI7O0FBTUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBSEY7O0FBTUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBQUhGOztBQU1BO0VBQ0UsMkJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsMkJBMUtjO0VBMktkLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsMjNCQUFBO0VBQ0EsbTRCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQ0FBQTtFQUNBLHNCQXRMYztBQW1MaEI7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQTVMYztFQTZMZCx5UUFBQTtFQUNBLGlSQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLHNCQW5NYztFQW9NZCw0Q0FBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSw0QkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBek9jO0VBME9kLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQXZQYztBQW9QaEI7O0FBTUE7RUFDRTtJQUNFLGtCQUFBO0VBSEY7RUFNQTtJQUNFLFNBQUE7RUFKRjtFQU9BO0lBQ0UsYUFBQTtFQUxGO0VBUUE7SUFDRSxvQkFBQTtFQU5GO0VBU0E7SUFDRSxvQkFBQTtFQVBGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuXG4kZmlnbWEtcHJpbWFyeTogcmdiYSgxMCwgMjMsIDcyLCAxKTtcblxuLnNwZWNpYWxpc3QtdmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiBjbGFtcCgycmVtLCA2dncsIDRyZW0pO1xuICBmb250LWZhbWlseTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG59XG5cbi5zcGVjaWFsaXN0LXZpZXc6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9maWdtYS9sb2dpbi9iYWNrZ3JvdW5kLWxhcmdlLnBuZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IC0yO1xufVxuXG4uc3BlY2lhbGlzdC12aWV3X19mcmFtZSB7XG4gIHdpZHRoOiBtaW4oMTAwJSwgMzkzcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnNwZWNpYWxpc3Qtdmlld19fY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICBib3gtc2hhZG93OiAwIDQwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjRweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX21lZGlhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpc29sYXRpb246IGlzb2xhdGU7XG4gIGhlaWdodDogMzYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX21lZGlhOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDEzLCAyMywgNjUsIDApIDQ1JSwgcmdiYSgxMywgMjMsIDY1LCAwLjYpIDEwMCUpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc3BlY2lhbGlzdC12aWV3X19wb3J0cmFpdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNwZWNpYWxpc3Qtdmlld19fYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogMjRweDtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiAwIDEycHggMjRweCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjE2KTtcbn1cblxuLnNwZWNpYWxpc3Qtdmlld19fY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgcmlnaHQ6IDI0cHg7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjEyKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgYm94LXNoYWRvdzogMCAwIDQ4cHggcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4yNCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX2Nsb3NlOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogJGZpZ21hLXByaW1hcnk7XG4gIG1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xOSA2LjQxIDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xuICAtd2Via2l0LW1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xOSA2LjQxIDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4uc3BlY2lhbGlzdC12aWV3X19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuICBwYWRkaW5nOiAwIDI0cHggOHB4O1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX2hlYWRlciBoMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zNzRweDtcbn1cblxuLnNwZWNpYWxpc3Qtdmlld19fc3BlY2lhbHR5IHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xuICBjb2xvcjogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC44KTtcbn1cblxuLnNwZWNpYWxpc3Qtdmlld19fYmlvIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuODIpO1xufVxuXG4uc3BlY2lhbGlzdC12aWV3X19jb250YWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEycHg7XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX2FjdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTJweCAyNHB4IDEycHggNDhweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCA2MSwgMTUwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX2FjdGlvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLnNwZWNpYWxpc3Qtdmlld19fYWN0aW9uOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uc3BlY2lhbGlzdC12aWV3X19hY3Rpb24tLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAkZmlnbWEtcHJpbWFyeTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX2FjdGlvbi0tcHJpbWFyeTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOCAxOFwiPjxwYXRoIGZpbGw9XCIlMjMwMDBcIiBkPVwiTTEyIDlIMTRDMTQgNi4yNCAxMS43NiA0IDkgNFY2QzEwLjY2IDYgMTIgNy4zNCAxMiA5Wk0xNiA5SDE4QzE4IDYuNjEzMDUgMTcuMDUxOCA0LjMyMzg3IDE1LjM2NCAyLjYzNjA0QzEzLjY3NjEgMC45NDgyMTEgMTEuMzg2OSAwIDkgMFYyQzEyLjg3IDIgMTYgNS4xMyAxNiA5Wk0xNyAxMi41QzE1Ljc1IDEyLjUgMTQuNTUgMTIuMyAxMy40MyAxMS45M0MxMy4zMyAxMS45IDEzLjIyIDExLjg4IDEzLjEyIDExLjg4QzEyLjg2IDExLjg4IDEyLjYxIDExLjk4IDEyLjQxIDEyLjE3TDEwLjIxIDE0LjM3QzcuMzcxMzkgMTIuOTI1OSA1LjA2NDA2IDEwLjYxODYgMy42MiA3Ljc4TDUuODIgNS41N0M1Ljk1MjQ1IDUuNDQ0MzQgNi4wNDYzMiA1LjI4MzUyIDYuMDkwNiA1LjEwNjRDNi4xMzQ4OCA0LjkyOTI4IDYuMTI3NzMgNC43NDMyIDYuMDcgNC41N0M1LjY5MTMyIDMuNDE3ODkgNS40OTg5IDIuMjEyNzQgNS41IDFDNS41IDAuNDUgNS4wNSAwIDQuNSAwSDFDMC40NSAwIDAgMC40NSAwIDFDMCAxMC4zOSA3LjYxIDE4IDE3IDE4QzE3LjU1IDE4IDE4IDE3LjU1IDE4IDE3VjEzLjVDMTggMTIuOTUgMTcuNTUgMTIuNSAxNyAxMi41Wk0yLjAzIDJIMy41M0MzLjYgMi44OCAzLjc1IDMuNzUgMy45OCA0LjU4TDIuNzggNS43OUMyLjM4IDQuNTggMi4xMiAzLjMyIDIuMDMgMlpNMTYgMTUuOTdDMTQuNjggMTUuODggMTMuNCAxNS42MiAxMi4yIDE1LjIxTDEzLjQgMTQuMDFDMTQuMjUgMTQuMjUgMTUuMTIgMTQuNCAxNiAxNC40NlYxNS45N1pcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIC13ZWJraXQtbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOCAxOFwiPjxwYXRoIGZpbGw9XCIlMjMwMDBcIiBkPVwiTTEyIDlIMTRDMTQgNi4yNCAxMS43NiA0IDkgNFY2QzEwLjY2IDYgMTIgNy4zNCAxMiA5Wk0xNiA5SDE4QzE4IDYuNjEzMDUgMTcuMDUxOCA0LjMyMzg3IDE1LjM2NCAyLjYzNjA0QzEzLjY3NjEgMC45NDgyMTEgMTEuMzg2OSAwIDkgMFYyQzEyLjg3IDIgMTYgNS4xMyAxNiA5Wk0xNyAxMi41QzE1Ljc1IDEyLjUgMTQuNTUgMTIuMyAxMy40MyAxMS45M0MxMy4zMyAxMS45IDEzLjIyIDExLjg4IDEzLjEyIDExLjg4QzEyLjg2IDExLjg4IDEyLjYxIDExLjk4IDEyLjQxIDEyLjE3TDEwLjIxIDE0LjM3QzcuMzcxMzkgMTIuOTI1OSA1LjA2NDA2IDEwLjYxODYgMy42MiA3Ljc4TDUuODIgNS41N0M1Ljk1MjQ1IDUuNDQ0MzQgNi4wNDYzMiA1LjI4MzUyIDYuMDkwNiA1LjEwNjRDNi4xMzQ4OCA0LjkyOTI4IDYuMTI3NzMgNC43NDMyIDYuMDcgNC41N0M1LjY5MTMyIDMuNDE3ODkgNS40OTg5IDIuMjEyNzQgNS41IDFDNS41IDAuNDUgNS4wNSAwIDQuNSAwSDFDMC40NSAwIDAgMC40NSAwIDFDMCAxMC4zOSA3LjYxIDE4IDE3IDE4QzE3LjU1IDE4IDE4IDE3LjU1IDE4IDE3VjEzLjVDMTggMTIuOTUgMTcuNTUgMTIuNSAxNyAxMi41Wk0yLjAzIDJIMy41M0MzLjYgMi44OCAzLjc1IDMuNzUgMy45OCA0LjU4TDIuNzggNS43OUMyLjM4IDQuNTggMi4xMiAzLjMyIDIuMDMgMlpNMTYgMTUuOTdDMTQuNjggMTUuODggMTMuNCAxNS42MiAxMi4yIDE1LjIxTDEzLjQgMTQuMDFDMTQuMjUgMTQuMjUgMTUuMTIgMTQuNCAxNiAxNC40NlYxNS45N1pcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX2FjdGlvbi0tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xufVxuXG4uc3BlY2lhbGlzdC12aWV3X19hY3Rpb24tLXNlY29uZGFyeTo6YmVmb3JlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogJGZpZ21hLXByaW1hcnk7XG4gIG1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMDAwXCIgZD1cIk0xMiA3LjI3TDE2LjI4IDE3LjdMMTIuODEgMTYuMTdMMTIgMTUuODFMMTEuMTkgMTYuMTdMNy43MiAxNy43TDEyIDcuMjdaTTEyIDJMNC41IDIwLjI5TDUuMjEgMjFMMTIgMThMMTguNzkgMjFMMTkuNSAyMC4yOUwxMiAyWlwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzAwMFwiIGQ9XCJNMTIgNy4yN0wxNi4yOCAxNy43TDEyLjgxIDE2LjE3TDEyIDE1LjgxTDExLjE5IDE2LjE3TDcuNzIgMTcuN0wxMiA3LjI3Wk0xMiAyTDQuNSAyMC4yOUw1LjIxIDIxTDEyIDE4TDE4Ljc5IDIxTDE5LjUgMjAuMjlMMTIgMlpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX3NlY3Rpb24ge1xuICBwYWRkaW5nOiAwIDI0cHggMjRweDtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4xMik7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnNwZWNpYWxpc3Qtdmlld19fc2VjdGlvbiBoMiB7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNzIpO1xufVxuXG4uc3BlY2lhbGlzdC12aWV3X19zZWN0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEycHg7XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX3NlY3Rpb24gbGkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjA4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbn1cblxuLnNwZWNpYWxpc3Qtdmlld19fc2VjdGlvbiBsaSBzcGFuIHtcbiAgY29sb3I6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuNyk7XG59XG5cbi5zcGVjaWFsaXN0LXZpZXdfX3NlY3Rpb24gbGkgc3Ryb25nIHtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3BlY2lhbGlzdC12aWV3X19mYWxsYmFjayB7XG4gIHdpZHRoOiBtaW4oMTAwJSwgNDIwcHgpO1xuICBtYXJnaW46IGNsYW1wKDJyZW0sIDZ2dywgNHJlbSkgYXV0bztcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgYm94LXNoYWRvdzogMCAzMnB4IDY0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE4cHgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zcGVjaWFsaXN0LXZpZXcge1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgfVxuXG4gIC5zcGVjaWFsaXN0LXZpZXdfX2NhcmQge1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5zcGVjaWFsaXN0LXZpZXdfX21lZGlhIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgLnNwZWNpYWxpc3Qtdmlld19fY29udGVudCB7XG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XG4gIH1cblxuICAuc3BlY2lhbGlzdC12aWV3X19zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=714.js.map