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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/section-header/section-header.component */ 9719);
/* harmony import */ var _shared_ui_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/tag-list/tag-list.component */ 1159);
/* harmony import */ var _data_access_profile_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-access/profile.facade */ 5504);






function ProfilePageComponent_section_0_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Updating\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProfilePageComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "dr-section-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Account overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul")(8, "li")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li")(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li")(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Organization");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li")(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Last login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 5)(31, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Skills & focus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "dr-tag-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 7)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Keep me updated when new assessments or specialists match my teams.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 8)(40, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProfilePageComponent_section_0_Template_input_change_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onToggleNotifications($event.target.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, ProfilePageComponent_section_0_span_44_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const profile_r3 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", profile_r3.name)("subtitle", profile_r3.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](profile_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 10, profile_r3.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](profile_r3.organization);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](29, 12, profile_r3.lastLogin, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tags", profile_r3.skills);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", profile_r3.notificationsEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](profile_r3.notificationsEnabled ? "Enabled" : "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isSaving());
  }
}
class ProfilePageComponent {
  constructor() {
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_data_access_profile_facade__WEBPACK_IMPORTED_MODULE_2__.ProfileFacade);
    this.profile$ = this.facade.profile$;
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
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProfilePageComponent,
      selectors: [["dr-profile-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "profile section", 4, "ngIf"], [1, "profile", "section"], [1, "container"], ["badge", "Your coordination cockpit", 3, "title", "subtitle"], [1, "profile__grid"], [1, "profile__card"], [3, "tags"], [1, "profile__card", "profile__notifications"], [1, "toggle"], ["type", "checkbox", 3, "change", "checked"], ["class", "profile__saving", 4, "ngIf"], [1, "profile__saving"]],
      template: function ProfilePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ProfilePageComponent_section_0_Template, 45, 15, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.profile$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_0__.SectionHeaderComponent, _shared_ui_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_1__.TagListComponent],
      styles: [".profile__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n}\n.profile__card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);\n}\n.profile__card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.profile__card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 1rem 0 0 0;\n  display: grid;\n  gap: 0.75rem;\n}\n.profile__card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  color: #6b7280;\n}\n.profile__card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.profile__notifications[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.profile__saving[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.75rem;\n  color: #3552ff;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  width: 42px;\n  height: 24px;\n  border-radius: 999px;\n  background: rgba(226, 232, 240, 0.9);\n  transition: background 180ms ease-in-out;\n}\n.toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #ffffff;\n  transition: transform 180ms ease-in-out;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  background: #3552ff;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]::after {\n  transform: translateX(18px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9wcm9maWxlL3VpL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLFdDZVM7RURkVCwyREFBQTtBQUZKO0FBS0U7RUFDRSxtQkNMWTtFRE1aLG1CQ0dRO0VERlIsZUFBQTtFQUNBLDhDQ1VVO0FEYmQ7QUFLSTtFQUNFLGFBQUE7QUFITjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUpOO0FBTU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsY0N0Qlc7QURrQm5CO0FBTVE7RUFDRSxjQzFCRztBRHNCYjtBQVdJO0VBQ0UsY0NqQ2E7QUR3Qm5CO0FBYUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0NoRFk7QURxQ2hCOztBQWVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBWkY7QUFjRTtFQUNFLGFBQUE7QUFaSjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtBQWJKO0FBZUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkN6RVU7RUQwRVYsdUNBQUE7QUFiTjtBQWlCRTtFQUNFLG1CQ3BGWTtBRHFFaEI7QUFpQkk7RUFDRSwyQkFBQTtBQWZOIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuLnByb2ZpbGUge1xuICAmX19ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogJHNwYWNpbmctbGc7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNjBweCwgMWZyKSk7XG4gIH1cblxuICAmX19jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3Itc3VyZmFjZTtcbiAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWxnO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LXNvZnQ7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAkc3BhY2luZy1tZCAwIDAgMDtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBnYXA6IDAuNzVyZW07XG5cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tdXRlZDtcblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItdGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX25vdGlmaWNhdGlvbnMge1xuICAgIHAge1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgIH1cbiAgfVxuXG4gICZfX3NhdmluZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICB9XG59XG5cbi50b2dnbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBzcGFuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLWJvcmRlciwgMC45KTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kICR0cmFuc2l0aW9uLWJhc2U7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMnB4O1xuICAgICAgbGVmdDogMnB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itc3VyZmFjZTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkdHJhbnNpdGlvbi1iYXNlO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjMzU1MmZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzFmM2JiMztcbiRjb2xvci1zZWNvbmRhcnk6ICMxM2M0YTM7XG4kY29sb3ItYWNjZW50OiAjZjk3MzE2O1xuJGNvbG9yLWJhY2tncm91bmQ6ICNmNWY3ZmI7XG4kY29sb3Itc3VyZmFjZTogI2ZmZmZmZjtcbiRjb2xvci1zdXJmYWNlLWFsdDogI2Y5ZmFmYztcbiRjb2xvci10ZXh0OiAjMTExODI3O1xuJGNvbG9yLXRleHQtbXV0ZWQ6ICM2YjcyODA7XG4kY29sb3ItYm9yZGVyOiAjZTJlOGYwO1xuJGNvbG9yLXN1Y2Nlc3M6ICMxNmEzNGE7XG4kY29sb3Itd2FybmluZzogI2ZhY2MxNTtcbiRjb2xvci1kYW5nZXI6ICNkYzI2MjY7XG4kcmFkaXVzLXhsOiAyNHB4O1xuJHJhZGl1cy1sZzogMTZweDtcbiRyYWRpdXMtbWQ6IDEycHg7XG4kcmFkaXVzLXNtOiA4cHg7XG4kc3BhY2luZy14czogMC41cmVtO1xuJHNwYWNpbmctc206IDAuNzVyZW07XG4kc3BhY2luZy1tZDogMXJlbTtcbiRzcGFjaW5nLWxnOiAxLjVyZW07XG4kc3BhY2luZy14bDogMnJlbTtcbiRzcGFjaW5nLXh4bDogM3JlbTtcbiRzaGFkb3ctc29mdDogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiRzaGFkb3ctY2FyZDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbiR0cmFuc2l0aW9uLWJhc2U6IDE4MG1zIGVhc2UtaW4tb3V0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuJG1heC1jb250ZW50LXdpZHRoOiAxMTgwcHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9719:
/*!**********************************************************************!*\
  !*** ./src/app/shared/ui/section-header/section-header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionHeaderComponent: () => (/* binding */ SectionHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = [[["", "actions", ""]]];
const _c1 = ["[actions]"];
function SectionHeaderComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.badge);
  }
}
function SectionHeaderComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.subtitle);
  }
}
class SectionHeaderComponent {
  static {
    this.ɵfac = function SectionHeaderComponent_Factory(t) {
      return new (t || SectionHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionHeaderComponent,
      selectors: [["dr-section-header"]],
      inputs: {
        title: "title",
        subtitle: "subtitle",
        badge: "badge"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 3,
      consts: [[1, "section-header"], [1, "section-header__titles"], ["class", "section-header__badge", 4, "ngIf"], [1, "section-header__title"], ["class", "section-header__subtitle", 4, "ngIf"], [1, "section-header__actions"], [1, "section-header__badge"], [1, "section-header__subtitle"]],
      template: function SectionHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectionHeaderComponent_span_2_Template, 2, 1, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SectionHeaderComponent_p_5_Template, 2, 1, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.badge);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.section-header__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  background: rgba(53, 82, 255, 0.12);\n  color: #3552ff;\n  margin-bottom: 0.75rem;\n}\n.section-header__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.75rem, 3vw, 2.4rem);\n  font-weight: 700;\n}\n.section-header__subtitle[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0 0;\n  color: #6b7280;\n  max-width: 560px;\n  line-height: 1.6;\n}\n.section-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL191dGlsaXRpZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0NhVztFRFpYLGVBQUE7QUFGRjtBQUlFO0VFUEEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0RYYztFRFlaLHNCQUFBO0FBTUo7QUFIRTtFQUNFLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FBS0o7QUFGRTtFQUNFLHFCQUFBO0VBQ0EsY0NmZTtFRGdCZixnQkFBQTtFQUNBLGdCQUFBO0FBSUo7QUFERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFHSiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3N0eWxlcy92YXJpYWJsZXMnIGFzICo7XG5AdXNlICdzdHlsZXMvdXRpbGl0aWVzJyBhcyB1dGlsO1xuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6ICRzcGFjaW5nLWxnO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgJl9fYmFkZ2Uge1xuICAgIEBpbmNsdWRlIHV0aWwuYmFkZ2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjc1cmVtLCAzdncsIDIuNHJlbSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gICZfX3N1YnRpdGxlIHtcbiAgICBtYXJnaW46IDAuNzVyZW0gMCAwIDA7XG4gICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgIG1heC13aWR0aDogNTYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgfVxuXG4gICZfX2FjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjMzU1MmZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzFmM2JiMztcbiRjb2xvci1zZWNvbmRhcnk6ICMxM2M0YTM7XG4kY29sb3ItYWNjZW50OiAjZjk3MzE2O1xuJGNvbG9yLWJhY2tncm91bmQ6ICNmNWY3ZmI7XG4kY29sb3Itc3VyZmFjZTogI2ZmZmZmZjtcbiRjb2xvci1zdXJmYWNlLWFsdDogI2Y5ZmFmYztcbiRjb2xvci10ZXh0OiAjMTExODI3O1xuJGNvbG9yLXRleHQtbXV0ZWQ6ICM2YjcyODA7XG4kY29sb3ItYm9yZGVyOiAjZTJlOGYwO1xuJGNvbG9yLXN1Y2Nlc3M6ICMxNmEzNGE7XG4kY29sb3Itd2FybmluZzogI2ZhY2MxNTtcbiRjb2xvci1kYW5nZXI6ICNkYzI2MjY7XG4kcmFkaXVzLXhsOiAyNHB4O1xuJHJhZGl1cy1sZzogMTZweDtcbiRyYWRpdXMtbWQ6IDEycHg7XG4kcmFkaXVzLXNtOiA4cHg7XG4kc3BhY2luZy14czogMC41cmVtO1xuJHNwYWNpbmctc206IDAuNzVyZW07XG4kc3BhY2luZy1tZDogMXJlbTtcbiRzcGFjaW5nLWxnOiAxLjVyZW07XG4kc3BhY2luZy14bDogMnJlbTtcbiRzcGFjaW5nLXh4bDogM3JlbTtcbiRzaGFkb3ctc29mdDogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiRzaGFkb3ctY2FyZDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbiR0cmFuc2l0aW9uLWJhc2U6IDE4MG1zIGVhc2UtaW4tb3V0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuJG1heC1jb250ZW50LXdpZHRoOiAxMTgwcHg7XG4iLCJAdXNlICd2YXJpYWJsZXMnIGFzICo7XG5cbkBtaXhpbiBiYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG59XG5cbkBtaXhpbiBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkY29sb3ItcHJpbWFyeSwgJGNvbG9yLXByaW1hcnktZGFyayk7XG4gIGNvbG9yOiAkY29sb3Itc3VyZmFjZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR0cmFuc2l0aW9uLWJhc2UsIGJveC1zaGFkb3cgJHRyYW5zaXRpb24tYmFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1jYXJkO1xuICB9XG5cbiAgJi0tZ2hvc3Qge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMDgpO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgfVxufVxuXG5AbWl4aW4gY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAkY29sb3Itc3VyZmFjZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItYm9yZGVyLCAwLjgpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgJHRyYW5zaXRpb24tYmFzZSwgY29sb3IgJHRyYW5zaXRpb24tYmFzZSwgYm9yZGVyLWNvbG9yICR0cmFuc2l0aW9uLWJhc2U7XG5cbiAgJi0tYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjEyKTtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=488.js.map