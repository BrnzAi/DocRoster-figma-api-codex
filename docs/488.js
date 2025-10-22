"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[488],{

/***/ 5504:
/*!***************************************************************!*\
  !*** ./src/app/feature/profile/data-access/profile.facade.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileFacade: () => (/* binding */ ProfileFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);





class ProfileFacade {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__.DocRosterApiService);
    this.savingNotificationPreference = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.profileSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
    this.profile$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.toObservable)(this.profileSignal);
    this.isSaving = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.savingNotificationPreference());
    this.api.getUserProfile().subscribe(profile => this.profileSignal.set(profile));
  }
  updateNotificationPreference(enabled) {
    this.savingNotificationPreference.set(true);
    return this.api.updateNotificationPreference(enabled).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(profile => this.profileSignal.set(profile)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.savingNotificationPreference.set(false)));
  }
  static {
    this.ɵfac = function ProfileFacade_Factory(t) {
      return new (t || ProfileFacade)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProfileFacade,
      factory: ProfileFacade.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3488:
/*!**************************************************************!*\
  !*** ./src/app/feature/profile/ui/profile-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageComponent: () => (/* binding */ ProfilePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);
/* harmony import */ var _data_access_profile_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-access/profile.facade */ 5504);








function ProfilePageComponent_section_0_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "mailto:" + vm_r1.profile.email, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](vm_r1.profile.email);
  }
}
function ProfilePageComponent_section_0_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "tel:" + (vm_r1.profile == null ? null : vm_r1.profile.phone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](vm_r1.profile == null ? null : vm_r1.profile.phone);
  }
}
function ProfilePageComponent_section_0_li_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "button", 26)(11, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specialist_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", specialist_r2.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", specialist_r2.doctor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](specialist_r2.doctor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](specialist_r2.doctor.specialty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](specialist_r2.schedule);
  }
}
function ProfilePageComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "button", 6)(6, "span", 7)(7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10)(10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProfilePageComponent_section_0_a_13_Template, 2, 2, "a", 12)(14, ProfilePageComponent_section_0_a_14_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "section", 14)(17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15)(20, "div", 16)(21, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "503");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Total active pins");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16)(26, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Added in 30 d.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "section", 19)(31, "header")(32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Your specialists");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ProfilePageComponent_section_0_li_39_Template, 12, 5, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](vm_r1.profile == null ? null : vm_r1.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", vm_r1.profile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", vm_r1.profile == null ? null : vm_r1.profile.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", vm_r1.specialists);
  }
}
class ProfilePageComponent {
  constructor() {
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_data_access_profile_facade__WEBPACK_IMPORTED_MODULE_1__.ProfileFacade);
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__.DocRosterApiService);
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
  static {
    this.ɵfac = function ProfilePageComponent_Factory(t) {
      return new (t || ProfilePageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProfilePageComponent,
      selectors: [["dr-profile-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "profile-view", 4, "ngIf"], [1, "profile-view"], [1, "profile-view__frame"], [1, "profile-view__card"], ["src", "assets/figma/profile/1814_483.png", "alt", "Organization logo", 1, "profile-view__hero"], [1, "profile-view__header-actions"], ["type", "button", "aria-label", "Edit profile", 1, "profile-view__icon", "profile-view__icon--edit"], ["aria-hidden", "true", 1, "profile-view__header-divider"], ["type", "button", "aria-label", "Logout", 1, "profile-view__icon", "profile-view__icon--logout"], ["type", "button", "routerLink", "/search", "aria-label", "Back to search", 1, "profile-view__close"], [1, "profile-view__summary"], [1, "profile-view__contact"], [3, "href", 4, "ngIf"], [1, "profile-view__divider"], [1, "profile-view__stats"], [1, "profile-view__stats-grid"], [1, "profile-view__stat"], [1, "profile-view__stat-value"], [1, "profile-view__stat-label"], [1, "profile-view__specialists"], ["type", "button", 1, "profile-view__add"], [1, "profile-view__add-icon"], [4, "ngFor", "ngForOf"], [3, "href"], [3, "src", "alt"], [1, "profile-view__result-actions"], ["type", "button", "aria-label", "Edit specialist", 1, "profile-view__icon", "profile-view__icon--edit"], ["type", "button", "aria-label", "Remove specialist", 1, "profile-view__icon", "profile-view__icon--delete"]],
      template: function ProfilePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProfilePageComponent_section_0_Template, 40, 4, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.vm$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      styles: [".profile-view[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(2rem, 6vw, 4rem);\n  font-family: \"SF Pro Text\", \"SF Pro Display\", \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n\n.profile-view[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: fixed;\n  inset: 0;\n  background: url('background-large.png') center/cover no-repeat;\n  z-index: -2;\n}\n\n.profile-view__frame[_ngcontent-%COMP%] {\n  width: min(100%, 393px);\n  margin: 0 auto;\n}\n\n.profile-view__card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  border-radius: 32px;\n  background: rgba(255, 255, 255, 0.24);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(24px);\n  padding: 240px 24px 24px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  overflow: hidden;\n}\n\n.profile-view__hero[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: -36px;\n  width: 140%;\n  max-width: 520px;\n  height: 420px;\n  transform: translateX(-50%);\n  object-fit: cover;\n  z-index: -1;\n}\n\n.profile-view__header-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 24px;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.75);\n  backdrop-filter: blur(12px);\n  box-shadow: 0 12px 32px rgba(10, 23, 72, 0.12);\n}\n\n.profile-view__header-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: rgba(10, 23, 72, 0.12);\n  display: inline-block;\n}\n\n.profile-view__icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 0.5px solid rgba(10, 23, 72, 0.12);\n  background: rgba(10, 23, 72, 0.08);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.profile-view__icon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 18px;\n  height: 18px;\n  background: rgb(10, 23, 72);\n}\n\n.profile-view__icon--edit[_ngcontent-%COMP%]::before {\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z\"/></svg>') center/contain;\n}\n\n.profile-view__icon--logout[_ngcontent-%COMP%]::before {\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3h-8a2 2 0 00-2 2v3h2V5h8v14h-8v-3h-2v3a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3h-8a2 2 0 00-2 2v3h2V5h8v14h-8v-3h-2v3a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z\"/></svg>') center/contain;\n}\n\n.profile-view__icon--delete[_ngcontent-%COMP%]::before {\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z\"/></svg>') center/contain;\n}\n\n.profile-view__close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 24px;\n  top: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  padding: 6px 9px;\n  border-radius: 750px;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  background: rgba(0, 0, 0, 0);\n  box-shadow: 0 0 48px rgba(10, 23, 72, 0.24);\n  cursor: pointer;\n}\n\n.profile-view__close[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>') center/contain;\n}\n\n.profile-view__summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  color: rgb(10, 23, 72);\n}\n\n.profile-view__summary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.374px;\n}\n\n.profile-view__contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.profile-view__contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px 8px 40px;\n  border-radius: 999px;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  background: rgba(10, 23, 72, 0.08);\n  color: rgb(10, 23, 72);\n  text-decoration: none;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  backdrop-filter: blur(12px);\n}\n\n.profile-view__contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 16px;\n  width: 18px;\n  height: 18px;\n  background: rgb(10, 23, 72);\n}\n\n.profile-view__contact[_ngcontent-%COMP%]   a[href^=mailto][_ngcontent-%COMP%]::before {\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 3.25L12 12 4.4 7.25V6l7.6 4.75L19.6 6v1.25z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 3.25L12 12 4.4 7.25V6l7.6 4.75L19.6 6v1.25z\"/></svg>') center/contain;\n}\n\n.profile-view__contact[_ngcontent-%COMP%]   a[href^=tel][_ngcontent-%COMP%]::before {\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M17.707 14.293l-3-3a1 1 0 00-1.414 0l-1 1a1 1 0 000 1.414l1.293 1.293a16.08 16.08 0 01-3.293-2.293A16.08 16.08 0 017.207 9.414L8.5 10.707a1 1 0 001.414 0l1-1a1 1 0 000-1.414l-3-3A1 1 0 006.5 5H4.5A1.5 1.5 0 003 6.5C3 14.508 9.492 21 17.5 21a1.5 1.5 0 001.5-1.5v-2a1 1 0 00-.293-.707z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M17.707 14.293l-3-3a1 1 0 00-1.414 0l-1 1a1 1 0 000 1.414l1.293 1.293a16.08 16.08 0 01-3.293-2.293A16.08 16.08 0 017.207 9.414L8.5 10.707a1 1 0 001.414 0l1-1a1 1 0 000-1.414l-3-3A1 1 0 006.5 5H4.5A1.5 1.5 0 003 6.5C3 14.508 9.492 21 17.5 21a1.5 1.5 0 001.5-1.5v-2a1 1 0 00-.293-.707z\"/></svg>') center/contain;\n}\n\n.profile-view__divider[_ngcontent-%COMP%] {\n  margin: 0;\n  border: 0;\n  height: 1px;\n  background: rgba(10, 23, 72, 0.12);\n}\n\n.profile-view__stats[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  color: rgb(10, 23, 72);\n}\n\n.profile-view__stats[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.408px;\n  text-transform: uppercase;\n}\n\n.profile-view__stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n@media (max-width: 420px) {\n  .profile-view__stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.profile-view__stat[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 24px;\n  border: 1px solid rgba(10, 23, 72, 0.1);\n  background: rgba(0, 0, 0, 0.05);\n  backdrop-filter: blur(12px);\n  display: grid;\n  gap: 6px;\n}\n\n.profile-view__stat-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.374px;\n}\n\n.profile-view__stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.408px;\n  color: rgba(10, 23, 72, 0.6);\n}\n\n.profile-view__specialists[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: rgb(10, 23, 72);\n  text-transform: uppercase;\n  letter-spacing: -0.408px;\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.profile-view__add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  border: 0.5px solid rgba(10, 23, 72, 0.08);\n  background: rgba(10, 23, 72, 0.08);\n  color: rgb(10, 23, 72);\n  cursor: pointer;\n  font-size: 14px;\n  letter-spacing: -0.408px;\n  backdrop-filter: blur(12px);\n}\n\n.profile-view__add-icon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background: rgb(10, 23, 72);\n  mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z\"/></svg>') center/contain;\n  -webkit-mask: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"%230A1748\" d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z\"/></svg>') center/contain;\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 56px 1fr auto;\n  gap: 16px;\n  align-items: center;\n  padding: 16px 0;\n  border-bottom: 1px solid rgba(10, 23, 72, 0.08);\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 28px;\n  object-fit: cover;\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: rgb(10, 23, 72);\n}\n\n.profile-view__specialists[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 14px;\n  color: rgba(10, 23, 72, 0.6);\n}\n\n.profile-view__result-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 8px;\n}\n\n@media (max-width: 768px) {\n  .profile-view[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .profile-view__frame[_ngcontent-%COMP%] {\n    width: min(100%, 360px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9wcm9maWxlL3VpL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkhBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU9BO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4Q0FBQTtBQUpGOztBQU9BO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQTNGYztBQXVGaEI7O0FB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QTtFQUNBLGdCQUFBO0VBQ0Esc0JBaFVjO0FBMlRoQjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBclVZO0FBZ1VkOztBQVFBO0VBQ0Usb0JBQUE7RUFDQSxRQUFBO0FBTEY7O0FBUUE7RUFDRTtJQUNFLGtCQUFBO0VBTEY7RUFRQTtJQUNFLHVCQUFBO0VBTkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3N0eWxlcy92YXJpYWJsZXMnIGFzICo7XG5cbiRmaWdtYS1wcmltYXJ5OiByZ2JhKDEwLCAyMywgNzIsIDEpO1xuJGZpZ21hLW11dGVkOiByZ2JhKDEwLCAyMywgNzIsIDAuNik7XG5cbi5wcm9maWxlLXZpZXcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogY2xhbXAoMnJlbSwgNnZ3LCA0cmVtKTtcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gRGlzcGxheScsICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJvZmlsZS12aWV3OjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvZmlnbWEvbG9naW4vYmFja2dyb3VuZC1sYXJnZS5wbmcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICB6LWluZGV4OiAtMjtcbn1cblxuLnByb2ZpbGUtdmlld19fZnJhbWUge1xuICB3aWR0aDogbWluKDEwMCUsIDM5M3B4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wcm9maWxlLXZpZXdfX2NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICBib3gtc2hhZG93OiAwIDQwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjRweCk7XG4gIHBhZGRpbmc6IDI0MHB4IDI0cHggMjRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZmlsZS12aWV3X19oZXJvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogLTM2cHg7XG4gIHdpZHRoOiAxNDAlO1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuICBoZWlnaHQ6IDQyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnByb2ZpbGUtdmlld19faGVhZGVyLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMnB4IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMTIpO1xufVxuXG4ucHJvZmlsZS12aWV3X19oZWFkZXItZGl2aWRlciB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4xMik7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnByb2ZpbGUtdmlld19faWNvbiB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjEyKTtcbiAgYmFja2dyb3VuZDogcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4wOCk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZmlsZS12aWV3X19pY29uOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZDogJGZpZ21hLXByaW1hcnk7XG59XG5cbi5wcm9maWxlLXZpZXdfX2ljb24tLWVkaXQ6OmJlZm9yZSB7XG4gIG1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1TDMgMTcuMjV6TTIwLjcxIDcuMDRhMS4wMDMgMS4wMDMgMCAwMDAtMS40MmwtMi4zNC0yLjM0YTEuMDAzIDEuMDAzIDAgMDAtMS40MiAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODQtMS44MnpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIC13ZWJraXQtbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGExLjAwMyAxLjAwMyAwIDAwMC0xLjQybC0yLjM0LTIuMzRhMS4wMDMgMS4wMDMgMCAwMC0xLjQyIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44NC0xLjgyelwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbn1cblxuLnByb2ZpbGUtdmlld19faWNvbi0tbG9nb3V0OjpiZWZvcmUge1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTAuMDkgMTUuNTlMMTEuNSAxN2w1LTUtNS01LTEuNDEgMS40MUwxMi42NyAxMUgzdjJoOS42N2wtMi41OCAyLjU5ek0xOSAzaC04YTIgMiAwIDAwLTIgMnYzaDJWNWg4djE0aC04di0zaC0ydjNhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMnpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIC13ZWJraXQtbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTEwLjA5IDE1LjU5TDExLjUgMTdsNS01LTUtNS0xLjQxIDEuNDFMMTIuNjcgMTFIM3YyaDkuNjdsLTIuNTggMi41OXpNMTkgM2gtOGEyIDIgMCAwMC0yIDJ2M2gyVjVoOHYxNGgtOHYtM2gtMnYzYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJ6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4ucHJvZmlsZS12aWV3X19pY29uLS1kZWxldGU6OmJlZm9yZSB7XG4gIG1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0xNiA5djEwSDhWOWg4bS0xLjUtNmgtNWwtMSAxSDV2MmgxNFY0aC00LjVsLTEtMXpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIC13ZWJraXQtbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTE2IDl2MTBIOFY5aDhtLTEuNS02aC01bC0xIDFINXYyaDE0VjRoLTQuNWwtMS0xelwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbn1cblxuLnByb2ZpbGUtdmlld19fY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNHB4O1xuICB0b3A6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiA2cHggOXB4O1xuICBib3JkZXItcmFkaXVzOiA3NTBweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjA4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm94LXNoYWRvdzogMCAwIDQ4cHggcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4yNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2ZpbGUtdmlld19fY2xvc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAkZmlnbWEtcHJpbWFyeTtcbiAgbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTE5IDYuNDEgMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIC13ZWJraXQtbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTE5IDYuNDEgMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG59XG5cbi5wcm9maWxlLXZpZXdfX3N1bW1hcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbn1cblxuLnByb2ZpbGUtdmlld19fc3VtbWFyeSBoMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zNzRweDtcbn1cblxuLnByb2ZpbGUtdmlld19fY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucHJvZmlsZS12aWV3X19jb250YWN0IGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHggOHB4IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMDgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjA4KTtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQwOHB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG59XG5cbi5wcm9maWxlLXZpZXdfX2NvbnRhY3QgYTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZDogJGZpZ21hLXByaW1hcnk7XG59XG5cbi5wcm9maWxlLXZpZXdfX2NvbnRhY3QgYVtocmVmXj0nbWFpbHRvJ106OmJlZm9yZSB7XG4gIG1hc2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiJTIzMEExNzQ4XCIgZD1cIk0yMCA0SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptLS40IDMuMjVMMTIgMTIgNC40IDcuMjVWNmw3LjYgNC43NUwxOS42IDZ2MS4yNXpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIC13ZWJraXQtbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTIwIDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tLjQgMy4yNUwxMiAxMiA0LjQgNy4yNVY2bDcuNiA0Ljc1TDE5LjYgNnYxLjI1elwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbn1cblxuLnByb2ZpbGUtdmlld19fY29udGFjdCBhW2hyZWZePSd0ZWwnXTo6YmVmb3JlIHtcbiAgbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTE3LjcwNyAxNC4yOTNsLTMtM2ExIDEgMCAwMC0xLjQxNCAwbC0xIDFhMSAxIDAgMDAwIDEuNDE0bDEuMjkzIDEuMjkzYTE2LjA4IDE2LjA4IDAgMDEtMy4yOTMtMi4yOTNBMTYuMDggMTYuMDggMCAwMTcuMjA3IDkuNDE0TDguNSAxMC43MDdhMSAxIDAgMDAxLjQxNCAwbDEtMWExIDEgMCAwMDAtMS40MTRsLTMtM0ExIDEgMCAwMDYuNSA1SDQuNUExLjUgMS41IDAgMDAzIDYuNUMzIDE0LjUwOCA5LjQ5MiAyMSAxNy41IDIxYTEuNSAxLjUgMCAwMDEuNS0xLjV2LTJhMSAxIDAgMDAtLjI5My0uNzA3elwiLz48L3N2Zz4nKSBjZW50ZXIvY29udGFpbjtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTcuNzA3IDE0LjI5M2wtMy0zYTEgMSAwIDAwLTEuNDE0IDBsLTEgMWExIDEgMCAwMDAgMS40MTRsMS4yOTMgMS4yOTNhMTYuMDggMTYuMDggMCAwMS0zLjI5My0yLjI5M0ExNi4wOCAxNi4wOCAwIDAxNy4yMDcgOS40MTRMOC41IDEwLjcwN2ExIDEgMCAwMDEuNDE0IDBsMS0xYTEgMSAwIDAwMC0xLjQxNGwtMy0zQTEgMSAwIDAwNi41IDVINC41QTEuNSAxLjUgMCAwMDMgNi41QzMgMTQuNTA4IDkuNDkyIDIxIDE3LjUgMjFhMS41IDEuNSAwIDAwMS41LTEuNXYtMmExIDEgMCAwMC0uMjkzLS43MDd6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4ucHJvZmlsZS12aWV3X19kaXZpZGVyIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjEyKTtcbn1cblxuLnByb2ZpbGUtdmlld19fc3RhdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE2cHg7XG4gIGNvbG9yOiAkZmlnbWEtcHJpbWFyeTtcbn1cblxuLnByb2ZpbGUtdmlld19fc3RhdHMgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQwOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJvZmlsZS12aWV3X19zdGF0cy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDE2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAucHJvZmlsZS12aWV3X19zdGF0cy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG4ucHJvZmlsZS12aWV3X19zdGF0IHtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDZweDtcbn1cblxuLnByb2ZpbGUtdmlld19fc3RhdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMzc0cHg7XG59XG5cbi5wcm9maWxlLXZpZXdfX3N0YXQtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MDhweDtcbiAgY29sb3I6ICRmaWdtYS1tdXRlZDtcbn1cblxuLnByb2ZpbGUtdmlld19fc3BlY2lhbGlzdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE2cHg7XG59XG5cbi5wcm9maWxlLXZpZXdfX3NwZWNpYWxpc3RzIGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICRmaWdtYS1wcmltYXJ5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnByb2ZpbGUtdmlld19fYWRkIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgkZmlnbWEtcHJpbWFyeSwgMC4wOCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGZpZ21hLXByaW1hcnksIDAuMDgpO1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDA4cHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbn1cblxuLnByb2ZpbGUtdmlld19fYWRkLWljb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICRmaWdtYS1wcmltYXJ5O1xuICBtYXNrOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cIiUyMzBBMTc0OFwiIGQ9XCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnpcIi8+PC9zdmc+JykgY2VudGVyL2NvbnRhaW47XG4gIC13ZWJraXQtbWFzazogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCIlMjMwQTE3NDhcIiBkPVwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCIvPjwvc3ZnPicpIGNlbnRlci9jb250YWluO1xufVxuXG4ucHJvZmlsZS12aWV3X19zcGVjaWFsaXN0cyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwO1xufVxuXG4ucHJvZmlsZS12aWV3X19zcGVjaWFsaXN0cyBsaSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTZweCAxZnIgYXV0bztcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRmaWdtYS1wcmltYXJ5LCAwLjA4KTtcbn1cblxuLnByb2ZpbGUtdmlld19fc3BlY2lhbGlzdHMgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5wcm9maWxlLXZpZXdfX3NwZWNpYWxpc3RzIGltZyB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucHJvZmlsZS12aWV3X19zcGVjaWFsaXN0cyBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJGZpZ21hLXByaW1hcnk7XG59XG5cbi5wcm9maWxlLXZpZXdfX3NwZWNpYWxpc3RzIHAge1xuICBtYXJnaW46IDJweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAkZmlnbWEtbXV0ZWQ7XG59XG5cbi5wcm9maWxlLXZpZXdfX3Jlc3VsdC1hY3Rpb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2ZpbGUtdmlldyB7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICB9XG5cbiAgLnByb2ZpbGUtdmlld19fZnJhbWUge1xuICAgIHdpZHRoOiBtaW4oMTAwJSwgMzYwcHgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}
const PROFILE_AVATARS = ['assets/figma/profile/1814_506.png', 'assets/figma/profile/1814_521.png', 'assets/figma/profile/1814_536.png', 'assets/figma/profile/1814_551.png'];
function formatSchedule(entry) {
  if (!entry) {
    return '';
  }
  const firstTime = entry.times?.[0] ?? '';
  return `${entry.day}${firstTime ? ' · ' + firstTime : ''}`;
}

/***/ })

}]);
//# sourceMappingURL=488.js.map