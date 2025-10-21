"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[874],{

/***/ 1560:
/*!***************************************************************!*\
  !*** ./src/app/feature/filters/data-access/filters.facade.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltersFacade: () => (/* binding */ FiltersFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);






const FILTER_PREDICATES = {
  virtual: result => result.doctor.virtualCare,
  multilingual: result => result.doctor.languages.length > 1,
  evening: result => result.doctor.availability.some(slot => slot.times.some(time => parseInt(time.split(':')[0], 10) >= 17)),
  weekend: result => result.doctor.availability.some(slot => ['Saturday', 'Sunday'].includes(slot.day)),
  transit: () => true,
  hybrid: () => true,
  inperson: () => true,
  hmo: result => result.doctor.acceptedPlans.includes('hmo'),
  ppo: result => result.doctor.acceptedPlans.includes('ppo'),
  direct: result => result.doctor.acceptedPlans.includes('direct')
};
class FiltersFacade {
  constructor() {
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__.DocRosterApiService);
    this.selections = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({});
    this.filters$ = this.api.getFilters();
    this.selectionsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.selections());
    this.selections$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.toObservable)(this.selectionsSignal);
    this.activeFilterCount = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => Object.values(this.selections()).reduce((total, values) => total + values.length, 0));
    this.filteredResults$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this.api.getSearchResults(), this.selections$, this.filters$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([results, selections, groups]) => {
      if (!Object.keys(selections).length) {
        return results;
      }
      return results.filter(result => Object.entries(selections).every(([groupId, values]) => {
        if (!values.length) {
          return true;
        }
        const group = groups.find(g => g.id === groupId);
        if (!group) {
          return true;
        }
        return values.every(value => {
          const predicate = FILTER_PREDICATES[value];
          return predicate ? predicate(result) : true;
        });
      }));
    }));
  }
  toggleOption(group, optionValue) {
    const current = {
      ...this.selections()
    };
    const currentValues = current[group.id] ?? [];
    if (group.type === 'single') {
      current[group.id] = currentValues[0] === optionValue ? [] : [optionValue];
    } else {
      const nextValues = currentValues.includes(optionValue) ? currentValues.filter(value => value !== optionValue) : [...currentValues, optionValue];
      current[group.id] = nextValues;
    }
    this.selections.set(current);
  }
  clearGroup(groupId) {
    if (!this.selections()[groupId]) {
      return;
    }
    const next = {
      ...this.selections()
    };
    delete next[groupId];
    this.selections.set(next);
  }
  resetAll() {
    this.selections.set({});
  }
  static {
    this.ɵfac = function FiltersFacade_Factory(t) {
      return new (t || FiltersFacade)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FiltersFacade,
      factory: FiltersFacade.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9253:
/*!******************************************************************!*\
  !*** ./src/app/shared/ui/filter-group/filter-group.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterGroupComponent: () => (/* binding */ FilterGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const _c0 = a0 => ({
  "filter-group__option--active": a0
});
function FilterGroupComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.group.description);
  }
}
function FilterGroupComponent_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r3.icon);
  }
}
function FilterGroupComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterGroupComponent_button_6_Template_button_click_0_listener() {
      const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onToggle(option_r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterGroupComponent_button_6_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.isActive(option_r3.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3.label, " ");
  }
}
class FilterGroupComponent {
  constructor() {
    this.selected = [];
    this.toggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onToggle(value) {
    this.toggled.emit(value);
  }
  isActive(value) {
    return this.selected.includes(value);
  }
  static {
    this.ɵfac = function FilterGroupComponent_Factory(t) {
      return new (t || FilterGroupComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FilterGroupComponent,
      selectors: [["dr-filter-group"]],
      inputs: {
        group: "group",
        selected: "selected"
      },
      outputs: {
        toggled: "toggled"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 3,
      consts: [[1, "filter-group"], [4, "ngIf"], [1, "filter-group__options"], ["type", "button", "class", "filter-group__option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "filter-group__option", 3, "click", "ngClass"], ["class", "material-symbols-rounded", 4, "ngIf"], [1, "material-symbols-rounded"]],
      template: function FilterGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "header")(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterGroupComponent_p_4_Template, 2, 1, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilterGroupComponent_button_6_Template, 3, 5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.group.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.group.options);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".filter-group[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.filter-group[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.filter-group[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0 0;\n  color: #6d7ba1;\n}\n.filter-group__options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.filter-group__option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1px solid rgba(213, 220, 240, 0.8);\n  font-weight: 500;\n  color: #0a1748;\n  transition: background 180ms ease-in-out, color 180ms ease-in-out, border-color 180ms ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid rgba(213, 220, 240, 0.9);\n  cursor: pointer;\n  background: #ffffff;\n}\n.filter-group__option--active[_ngcontent-%COMP%] {\n  background: rgba(61, 122, 255, 0.12);\n  color: #3d7aff;\n  border-color: rgba(61, 122, 255, 0.4);\n}\n.filter-group__option--active[_ngcontent-%COMP%] {\n  background: rgba(61, 122, 255, 0.12);\n  border-color: rgba(61, 122, 255, 0.4);\n  color: #3d7aff;\n}\n.filter-group__option[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2ZpbHRlci1ncm91cC9maWx0ZXItZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3V0aWxpdGllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLFlDYVc7QURmYjtBQUtJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBSE47QUFNSTtFQUNFLG9CQUFBO0VBQ0EsY0NQYTtBREduQjtBQVFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTko7QUFTRTtFRWVBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CRHhDYztFQ3lDZCwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0R6Q1c7RUMwQ1gsaUdBQUE7RUZ0QkUsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkMzQlk7QUQ2QmhCO0FFaUJFO0VBQ0Usb0NBQUE7RUFDQSxjRHJEWTtFQ3NEWixxQ0FBQTtBRmZKO0FBTEk7RUFDRSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsY0NyQ1U7QUQ0Q2hCO0FBSkk7RUFDRSxlQUFBO0FBTU4iLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuQHVzZSAnc3R5bGVzL3V0aWxpdGllcycgYXMgdXRpbDtcblxuLmZpbHRlci1ncm91cCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogJHNwYWNpbmctc207XG5cbiAgaGVhZGVyIHtcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMC40cmVtIDAgMCAwO1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgIH1cbiAgfVxuXG4gICZfX29wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMC41cmVtO1xuICB9XG5cbiAgJl9fb3B0aW9uIHtcbiAgICBAaW5jbHVkZSB1dGlsLmNoaXA7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNHJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuOSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlO1xuXG4gICAgJi0tYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIH1cblxuICAgIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzZDdhZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWUzYThhO1xuJGNvbG9yLXNlY29uZGFyeTogIzIxYjEyODtcbiRjb2xvci1hY2NlbnQ6ICNmZjNkOTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjZmZjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZWVmMWZmO1xuJGNvbG9yLXRleHQ6ICMwYTE3NDg7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZkN2JhMTtcbiRjb2xvci1ib3JkZXI6ICNkNWRjZjA7XG4kY29sb3Itc3VjY2VzczogIzIxYjEyODtcbiRjb2xvci13YXJuaW5nOiAjZmY1NzNkO1xuJGNvbG9yLWRhbmdlcjogI2ZmM2QwMDtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiIsIkB1c2UgJ3ZhcmlhYmxlcycgYXMgKjtcblxuQG1peGluIGJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4xMik7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuQG1peGluIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRjb2xvci1wcmltYXJ5LCAkY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgY29sb3I6ICRjb2xvci1zdXJmYWNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb24tYmFzZSwgYm94LXNoYWRvdyAkdHJhbnNpdGlvbi1iYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWNhcmQ7XG4gIH1cblxuICAmLS1naG9zdCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4wOCk7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICB9XG59XG5cbkBtaXhpbiBjaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuOCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAkY29sb3ItdGV4dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAkdHJhbnNpdGlvbi1iYXNlLCBjb2xvciAkdHJhbnNpdGlvbi1iYXNlLCBib3JkZXItY29sb3IgJHRyYW5zaXRpb24tYmFzZTtcblxuICAmLS1hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=874.js.map