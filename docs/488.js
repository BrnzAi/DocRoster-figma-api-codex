"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[488],{

/***/ 3488:
/*!**************************************************************!*\
  !*** ./src/app/feature/profile/ui/profile-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageComponent: () => (/* binding */ ProfilePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);
/* harmony import */ var _data_access_profile_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data-access/profile.facade */ 5504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








function ProfilePageComponent_section_0_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "mailto:" + vm_r1.profile.email, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](vm_r1.profile.email);
  }
}
function ProfilePageComponent_section_0_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", "tel:" + (vm_r1.profile == null ? null : vm_r1.profile.phone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](vm_r1.profile == null ? null : vm_r1.profile.phone);
  }
}
function ProfilePageComponent_section_0_li_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "button", 26)(11, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specialist_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", specialist_r2.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", specialist_r2.doctor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](specialist_r2.doctor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](specialist_r2.doctor.specialty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](specialist_r2.schedule);
  }
}
function ProfilePageComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "button", 6)(6, "span", 7)(7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 10)(10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ProfilePageComponent_section_0_a_13_Template, 2, 2, "a", 12)(14, ProfilePageComponent_section_0_a_14_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "section", 14)(17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 15)(20, "div", 16)(21, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "503");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Total active pins");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 16)(26, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Added in 30 d.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "section", 19)(31, "header")(32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Your specialists");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, ProfilePageComponent_section_0_li_39_Template, 12, 5, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](vm_r1.profile == null ? null : vm_r1.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", vm_r1.profile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", vm_r1.profile == null ? null : vm_r1.profile.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", vm_r1.specialists);
  }
}
class ProfilePageComponent {
  constructor() {
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_profile_facade__WEBPACK_IMPORTED_MODULE_6__.ProfileFacade);
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_5__.DocRosterApiService);
    this.vm$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this.facade.profile$, this.api.getDoctors()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([profile, doctors]) => ({
      profile,
      specialists: doctors.slice(0, 4).map((doctor, index) => ({
        doctor,
        avatar: PROFILE_AVATARS[index % PROFILE_AVATARS.length],
        schedule: formatSchedule(doctor.availability?.[0])
      }))
    })));
    this.isSaving = this.facade.isSaving;
  }
  onToggleNotifications(enabled) {
    this.facade.updateNotificationPreference(enabled).subscribe();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ProfilePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfilePageComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ProfilePageComponent,
    selectors: [["dr-profile-page"]],
    decls: 2,
    vars: 3,
    consts: [["class", "profile-view", 4, "ngIf"], [1, "profile-view"], [1, "profile-view__frame"], [1, "profile-view__card"], ["src", "assets/figma/profile/1814_483.png", "alt", "Organization logo", 1, "profile-view__hero"], [1, "profile-view__header-actions"], ["type", "button", "aria-label", "Edit profile", 1, "profile-view__icon", "profile-view__icon--edit"], ["aria-hidden", "true", 1, "profile-view__header-divider"], ["type", "button", "aria-label", "Logout", 1, "profile-view__icon", "profile-view__icon--logout"], ["type", "button", "routerLink", "/search", "aria-label", "Back to search", 1, "profile-view__close"], [1, "profile-view__summary"], [1, "profile-view__contact"], [3, "href", 4, "ngIf"], [1, "profile-view__divider"], [1, "profile-view__stats"], [1, "profile-view__stats-grid"], [1, "profile-view__stat"], [1, "profile-view__stat-value"], [1, "profile-view__stat-label"], [1, "profile-view__specialists"], ["type", "button", 1, "profile-view__add"], [1, "profile-view__add-icon"], [4, "ngFor", "ngForOf"], [3, "href"], [3, "src", "alt"], [1, "profile-view__result-actions"], ["type", "button", "aria-label", "Edit specialist", 1, "profile-view__icon", "profile-view__icon--edit"], ["type", "button", "aria-label", "Remove specialist", 1, "profile-view__icon", "profile-view__icon--delete"]],
    template: function ProfilePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ProfilePageComponent_section_0_Template, 40, 4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.vm$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe],
    styles: [".profile-view[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(2rem, 6vw, 4rem);\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n\n.profile-view[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: fixed;\n  inset: 0;\n  background: url('background-large.png') center/cover no-repeat;\n  z-index: -2;\n}\n\n.profile-view__frame[_ngcontent-%COMP%] {\n  width: min(100%, 393px);\n  margin: 0 auto;\n}\n\n.profile-view__card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.24);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  -webkit-backdrop-filter: blur(24px);\n          backdrop-filter: blur(24px);\n  padding: 240px 24px 24px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  overflow: hidden;\n}\n\n.profile-view__hero[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: -36px;\n  width: 140%;\n  max-width: 520px;\n  height: 420px;\n  transform: translateX(-50%);\n  object-fit: cover;\n  z-index: -1;\n}\n\n.profile-view__header-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 24px;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.75);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  box-shadow: 0 12px 32px rgba(10, 23, 72, 0.12);\n}\n\n.profile-view__header-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: rgba(10, 23, 72, 0.12);\n  display: inline-block;\n}\n\n.profile-view__icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 0.5px solid rgba(10, 23, 72, 0.12);\n  background: rgba(10, 23, 72, 0.08);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.profile-view__icon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 18px;\n  height: 18px;\n  background: rgb(10, 23, 72);\n}\n\n.profile-view__icon--edit[_ngcontent-%COMP%]::before {\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z\"/></svg>') center/contain;\n}\n\n.profile-view__icon--logout[_ngcontent-%COMP%]::before {\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3h-8a2 2 0 00-2 2v3h2V5h8v14h-8v-3h-2v3a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3h-8a2 2 0 00-2 2v3h2V5h8v14h-8v-3h-2v3a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z\"/></svg>') center/contain;\n}\n\n.profile-view__icon--delete[_ngcontent-%COMP%]::before {\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z\"/></svg>') center/contain;\n}\n\n.profile-view__close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 24px;\n  top: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  padding: 6px 9px;\n  border-radius: 750px;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  background: rgba(10, 23, 72, 0.08);\n  box-shadow: 0 0 48px rgba(10, 23, 72, 0.24);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  cursor: pointer;\n}\n\n.profile-view__close[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>') center/contain;\n}\n\n.profile-view__summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  color: rgb(10, 23, 72);\n}\n\n.profile-view__summary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.374px;\n}\n\n.profile-view__contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.profile-view__contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px 8px 40px;\n  border-radius: 999px;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  background: rgba(10, 23, 72, 0.08);\n  color: rgb(10, 23, 72);\n  text-decoration: none;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n}\n\n.profile-view__contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 16px;\n  width: 18px;\n  height: 18px;\n  background: rgb(10, 23, 72);\n}\n\n.profile-view__contact[_ngcontent-%COMP%]   a[href^=mailto][_ngcontent-%COMP%]::before {\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 3.25L12 12 4.4 7.25V6l7.6 4.75L19.6 6v1.25z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 3.25L12 12 4.4 7.25V6l7.6 4.75L19.6 6v1.25z\"/></svg>') center/contain;\n}\n\n.profile-view__contact[_ngcontent-%COMP%]   a[href^=tel][_ngcontent-%COMP%]::before {\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M17.707 14.293l-3-3a1 1 0 00-1.414 0l-1 1a1 1 0 000 1.414l1.293 1.293a16.08 16.08 0 01-3.293-2.293A16.08 16.08 0 017.207 9.414L8.5 10.707a1 1 0 001.414 0l1-1a1 1 0 000-1.414l-3-3A1 1 0 006.5 5H4.5A1.5 1.5 0 003 6.5C3 14.508 9.492 21 17.5 21a1.5 1.5 0 001.5-1.5v-2a1 1 0 00-.293-.707z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M17.707 14.293l-3-3a1 1 0 00-1.414 0l-1 1a1 1 0 000 1.414l1.293 1.293a16.08 16.08 0 01-3.293-2.293A16.08 16.08 0 017.207 9.414L8.5 10.707a1 1 0 001.414 0l1-1a1 1 0 000-1.414l-3-3A1 1 0 006.5 5H4.5A1.5 1.5 0 003 6.5C3 14.508 9.492 21 17.5 21a1.5 1.5 0 001.5-1.5v-2a1 1 0 00-.293-.707z\"/></svg>') center/contain;\n}\n\n.profile-view__divider[_ngcontent-%COMP%] {\n  margin: 0;\n  border: 0;\n  height: 1px;\n  background: rgba(10, 23, 72, 0.12);\n}\n\n.profile-view__stats[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  color: rgb(10, 23, 72);\n}\n\n.profile-view__stats[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.408px;\n  text-transform: uppercase;\n}\n\n.profile-view__stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n@media (max-width: 420px) {\n  .profile-view__stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.profile-view__stat[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 24px;\n  border: 1px solid rgba(10, 23, 72, 0.1);\n  background: rgba(0, 0, 0, 0.05);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  display: grid;\n  gap: 6px;\n}\n\n.profile-view__stat-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.374px;\n}\n\n.profile-view__stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.408px;\n  color: rgba(10, 23, 72, 0.6);\n}\n\n.profile-view__specialists[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: rgb(10, 23, 72);\n  text-transform: uppercase;\n  letter-spacing: -0.408px;\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.profile-view__add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  background: rgba(10, 23, 72, 0.08);\n  color: rgb(10, 23, 72);\n  cursor: pointer;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n}\n\n.profile-view__add-icon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z\"/></svg>') center/contain;\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 56px 1fr auto;\n  gap: 16px;\n  align-items: center;\n  padding: 16px 0;\n  border-bottom: 1px solid rgba(10, 23, 72, 0.08);\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 28px;\n  object-fit: cover;\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: rgb(10, 23, 72);\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 14px;\n  color: rgba(10, 23, 72, 0.6);\n}\n\n.profile-view__result-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 8px;\n}\n\n@media (max-width: 768px) {\n  .profile-view[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .profile-view__frame[_ngcontent-%COMP%] {\n    width: min(100%, 360px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9wcm9maWxlL3VpL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkhBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU9BO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsOENBQUE7QUFKRjs7QUFPQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7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O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFMRjs7QUFRQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFqVWM7QUE0VGhCOztBQVFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw0QkF0VVk7QUFpVWQ7O0FBUUE7RUFDRSxvQkFBQTtFQUNBLFFBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQ0Usa0JBQUE7RUFMRjtFQVFBO0lBQ0UsdUJBQUE7RUFORjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuJGZpZ21hLXByaW1hcnk6IHJnYmEoMTAsIDIzLCA3MiwgMSk7XG4kZmlnbWEtbXV0ZWQ6IHJnYmEoMTAsIDIzLCA3MiwgMC42KTtcblxuLnByb2ZpbGUtdmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiBjbGFtcCgycmVtLCA2dncsIDRyZW0pO1xuICBmb250LWZhbWlseTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG59XG5cbi5wcm9maWxlLXZpZXc6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9maWdtYS9sb2dpbi9iYWNrZ3JvdW5kLWxhcmdlLnBuZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IC0yO1xufVxuXG4ucHJvZmlsZS12aWV3X19mcmFtZSB7XG4gIHdpZHRoOiBtaW4oMTAwJSwgMzkzcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByb2ZpbGUtdmlld19fY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIGJveC1zaGFkb3c6IDAgNDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNHB4KTtcbiAgcGFkZGluZzogMjQwcHggMjRweCAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9maWxlLXZpZXdfX2hlcm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAtMzZweDtcbiAgd2lkdGg6IDE0MCU7XG4gIG1heC13aWR0aDogNTIwcHg7XG4gIGhlaWdodDogNDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucHJvZmlsZS12aWV3X19oZWFkZXItYWN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjRweDtcbiAgdG9wOiAyNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDMycHggcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4xMik7XG59XG5cbi5wcm9maWxlLXZpZXdfX2hlYWRlci1kaXZpZGVyIHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjEyKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucHJvZmlsZS12aWV3X19pY29uIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjA4KTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9maWxlLXZpZXdfX2ljb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAkZmlnbWEtcHJpbWFyeTtcbn1cblxuLnByb2ZpbGUtdmlld19faWNvbi0tZWRpdDo6YmVmb3JlIHtcbiAgbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGExLjAwMyAxLjAwMyAwIDAwMC0xLjQybC0yLjM0LTIuMzRhMS4wMDMgMS4wMDMgMCAwMC0xLjQyIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44NC0xLjgyelwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0YTEuMDAzIDEuMDAzIDAgMDAwLTEuNDJsLTIuMzQtMi4zNGExLjAwMyAxLjAwMyAwIDAwLTEuNDIgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjg0LTEuODJ6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4ucHJvZmlsZS12aWV3X19pY29uLS1sb2dvdXQ6OmJlZm9yZSB7XG4gIG1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xMC4wOSAxNS41OUwxMS41IDE3bDUtNS01LTUtMS40MSAxLjQxTDEyLjY3IDExSDN2Mmg5LjY3bC0yLjU4IDIuNTl6TTE5IDNoLThhMiAyIDAgMDAtMiAydjNoMlY1aDh2MTRoLTh2LTNoLTJ2M2EyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0yelwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTAuMDkgMTUuNTlMMTEuNSAxN2w1LTUtNS01LTEuNDEgMS40MUwxMi42NyAxMUgzdjJoOS42N2wtMi41OCAyLjU5ek0xOSAzaC04YTIgMiAwIDAwLTIgMnYzaDJWNWg4djE0aC04di0zaC0ydjNhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMnpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG59XG5cbi5wcm9maWxlLXZpZXdfX2ljb24tLWRlbGV0ZTo6YmVmb3JlIHtcbiAgbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTE2IDl2MTBIOFY5aDhtLTEuNS02aC01bC0xIDFINXYyaDE0VjRoLTQuNWwtMS0xelwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTYgOXYxMEg4VjloOG0tMS41LTZoLTVsLTEgMUg1djJoMTRWNGgtNC41bC0xLTF6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4ucHJvZmlsZS12aWV3X19jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI0cHg7XG4gIHRvcDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDZweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDc1MHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMDgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjA4KTtcbiAgYm94LXNoYWRvdzogMCAwIDQ4cHggcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4yNCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZmlsZS12aWV3X19jbG9zZTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICRmaWdtYS1wcmltYXJ5O1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTkgNi40MSAxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTkgNi40MSAxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbn1cblxuLnByb2ZpbGUtdmlld19fc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xufVxuXG4ucHJvZmlsZS12aWV3X19zdW1tYXJ5IGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjM3NHB4O1xufVxuXG4ucHJvZmlsZS12aWV3X19jb250YWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEycHg7XG59XG5cbi5wcm9maWxlLXZpZXdfX2NvbnRhY3QgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiA4cHggMTZweCA4cHggNDBweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4wOCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMDgpO1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbn1cblxuLnByb2ZpbGUtdmlld19fY29udGFjdCBhOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNnB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAkZmlnbWEtcHJpbWFyeTtcbn1cblxuLnByb2ZpbGUtdmlld19fY29udGFjdCBhW2hyZWZePSdtYWlsdG8nXTo6YmVmb3JlIHtcbiAgbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTIwIDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tLjQgMy4yNUwxMiAxMiA0LjQgNy4yNVY2bDcuNiA0Ljc1TDE5LjYgNnYxLjI1elwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMjAgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bS0uNCAzLjI1TDEyIDEyIDQuNCA3LjI1VjZsNy42IDQuNzVMMTkuNiA2djEuMjV6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4ucHJvZmlsZS12aWV3X19jb250YWN0IGFbaHJlZl49J3RlbCddOjpiZWZvcmUge1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTcuNzA3IDE0LjI5M2wtMy0zYTEgMSAwIDAwLTEuNDE0IDBsLTEgMWExIDEgMCAwMDAgMS40MTRsMS4yOTMgMS4yOTNhMTYuMDggMTYuMDggMCAwMS0zLjI5My0yLjI5M0ExNi4wOCAxNi4wOCAwIDAxNy4yMDcgOS40MTRMOC41IDEwLjcwN2ExIDEgMCAwMDEuNDE0IDBsMS0xYTEgMSAwIDAwMC0xLjQxNGwtMy0zQTEgMSAwIDAwNi41IDVINC41QTEuNSAxLjUgMCAwMDMgNi41QzMgMTQuNTA4IDkuNDkyIDIxIDE3LjUgMjFhMS41IDEuNSAwIDAwMS41LTEuNXYtMmExIDEgMCAwMC0uMjkzLS43MDd6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xuICAtd2Via2l0LW1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xNy43MDcgMTQuMjkzbC0zLTNhMSAxIDAgMDAtMS40MTQgMGwtMSAxYTEgMSAwIDAwMCAxLjQxNGwxLjI5MyAxLjI5M2ExNi4wOCAxNi4wOCAwIDAxLTMuMjkzLTIuMjkzQTE2LjA4IDE2LjA4IDAgMDE3LjIwNyA5LjQxNEw4LjUgMTAuNzA3YTEgMSAwIDAwMS40MTQgMGwxLTFhMSAxIDAgMDAwLTEuNDE0bC0zLTNBMSAxIDAgMDA2LjUgNUg0LjVBMS41IDEuNSAwIDAwMyA2LjVDMyAxNC41MDggOS40OTIgMjEgMTcuNSAyMWExLjUgMS41IDAgMDAxLjUtMS41di0yYTEgMSAwIDAwLS4yOTMtLjcwN3pcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG59XG5cbi5wcm9maWxlLXZpZXdfX2RpdmlkZXIge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMTIpO1xufVxuXG4ucHJvZmlsZS12aWV3X19zdGF0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTZweDtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xufVxuXG4ucHJvZmlsZS12aWV3X19zdGF0cyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wcm9maWxlLXZpZXdfX3N0YXRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5wcm9maWxlLXZpZXdfX3N0YXRzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbi5wcm9maWxlLXZpZXdfX3N0YXQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjEpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNnB4O1xufVxuXG4ucHJvZmlsZS12aWV3X19zdGF0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zNzRweDtcbn1cblxuLnByb2ZpbGUtdmlld19fc3RhdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQwOHB4O1xuICBjb2xvcjogJGZpZ21hLW11dGVkO1xufVxuXG4ucHJvZmlsZS12aWV3X19zcGVjaWFsaXN0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTZweDtcbn1cblxuLnByb2ZpbGUtdmlld19fc3BlY2lhbGlzdHMgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucHJvZmlsZS12aWV3X19hZGQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjA4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4wOCk7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xufVxuXG4ucHJvZmlsZS12aWV3X19hZGQtaWNvbjo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogJGZpZ21hLXByaW1hcnk7XG4gIG1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2elwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG59XG5cbi5wcm9maWxlLXZpZXdfX3NwZWNpYWxpc3RzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDA7XG59XG5cbi5wcm9maWxlLXZpZXdfX3NwZWNpYWxpc3RzIGxpIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1NnB4IDFmciBhdXRvO1xuICBnYXA6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMDgpO1xufVxuXG4ucHJvZmlsZS12aWV3X19zcGVjaWFsaXN0cyBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnByb2ZpbGUtdmlld19fc3BlY2lhbGlzdHMgaW1nIHtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wcm9maWxlLXZpZXdfX3NwZWNpYWxpc3RzIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbn1cblxuLnByb2ZpbGUtdmlld19fc3BlY2lhbGlzdHMgcCB7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICRmaWdtYS1tdXRlZDtcbn1cblxuLnByb2ZpbGUtdmlld19fcmVzdWx0LWFjdGlvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZmlsZS12aWV3IHtcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XG4gIH1cblxuICAucHJvZmlsZS12aWV3X19mcmFtZSB7XG4gICAgd2lkdGg6IG1pbigxMDAlLCAzNjBweCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  }));
}
_staticBlock();
const PROFILE_AVATARS = ['assets/figma/profile/1814_506.png', 'assets/figma/profile/1814_521.png', 'assets/figma/profile/1814_536.png', 'assets/figma/profile/1814_551.png'];
function formatSchedule(entry) {
  if (!entry) {
    return '';
  }
  const firstTime = entry.times?.[0] ?? '';
  return `${entry.day}${firstTime ? ' · ' + firstTime : ''}`;
}

/***/ }),

/***/ 5504:
/*!***************************************************************!*\
  !*** ./src/app/feature/profile/data-access/profile.facade.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileFacade: () => (/* binding */ ProfileFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);
var _staticBlock;





class ProfileFacade {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_5__.DocRosterApiService);
    this.savingNotificationPreference = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "savingNotificationPreference"
    }] : []));
    this.profileSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "profileSignal"
    }] : []));
    this.profile$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.toObservable)(this.profileSignal);
    this.isSaving = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.savingNotificationPreference(), ...(ngDevMode ? [{
      debugName: "isSaving"
    }] : []));
    this.api.getUserProfile().subscribe(profile => this.profileSignal.set(profile));
  }
  updateNotificationPreference(enabled) {
    this.savingNotificationPreference.set(true);
    return this.api.updateNotificationPreference(enabled).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(profile => this.profileSignal.set(profile)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => this.savingNotificationPreference.set(false)));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ProfileFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfileFacade)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProfileFacade,
    factory: ProfileFacade.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=488.js.map