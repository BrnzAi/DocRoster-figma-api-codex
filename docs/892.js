"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[892],{

/***/ 892:
/*!**************************************************************!*\
  !*** ./src/app/feature/filters/ui/filters-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltersPageComponent: () => (/* binding */ FiltersPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _shared_ui_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/doctor-card/doctor-card.component */ 5831);
/* harmony import */ var _shared_ui_filter_group_filter_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/ui/filter-group/filter-group.component */ 9253);
/* harmony import */ var _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/ui/section-header/section-header.component */ 9719);
/* harmony import */ var _shared_ui_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/tag-list/tag-list.component */ 1159);
/* harmony import */ var _data_access_filters_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data-access/filters.facade */ 1560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








function FiltersPageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Active filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "dr-tag-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tags", ctx_r0.selectedTags());
  }
}
function FiltersPageComponent_div_8_ng_container_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersPageComponent_div_8_ng_container_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const group_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.clearGroup(group_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Clear ", group_r3.title.toLowerCase(), " ");
  }
}
function FiltersPageComponent_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13)(2, "dr-filter-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggled", function FiltersPageComponent_div_8_ng_container_1_Template_dr_filter_group_toggled_2_listener($event) {
      const group_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onToggle(group_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FiltersPageComponent_div_8_ng_container_1_button_3_Template, 2, 1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("group", group_r3)("selected", ctx_r0.selectionForGroup(group_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.selectionForGroup(group_r3.id).length);
  }
}
function FiltersPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FiltersPageComponent_div_8_ng_container_1_Template, 4, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const groups_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", groups_r5);
  }
}
function FiltersPageComponent_div_10_dr_doctor_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "dr-doctor-card", 19);
  }
  if (rf & 2) {
    const result_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("doctor", result_r6.doctor)("clinic", result_r6.clinic)("nextAvailable", result_r6.nextAvailable)("highlightDistance", result_r6.distanceInMinutes);
  }
}
function FiltersPageComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Preview results");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, FiltersPageComponent_div_10_dr_doctor_card_5_Template, 1, 4, "dr-doctor-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const results_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Showing ", results_r7.length, " matches across the pilot network.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", results_r7);
  }
}
class FiltersPageComponent {
  constructor() {
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_filters_facade__WEBPACK_IMPORTED_MODULE_7__.FiltersFacade);
    this.filters$ = this.facade.filters$;
    this.selections = this.facade.selectionsSignal;
    this.filteredResults$ = this.facade.filteredResults$;
    this.activeFilters = this.facade.activeFilterCount;
    this.hasActiveFilters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.activeFilters() > 0, ...(ngDevMode ? [{
      debugName: "hasActiveFilters"
    }] : []));
    this.selectedTags = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => Object.values(this.selections()).flatMap(values => values ?? []), ...(ngDevMode ? [{
      debugName: "selectedTags"
    }] : []));
  }
  onToggle(group, value) {
    this.facade.toggleOption(group, value);
  }
  clearGroup(groupId) {
    this.facade.clearGroup(groupId);
  }
  resetAll() {
    this.facade.resetAll();
  }
  selectionForGroup(groupId) {
    return this.selections()[groupId] ?? [];
  }
  static #_ = _staticBlock = () => (this.ɵfac = function FiltersPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FiltersPageComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: FiltersPageComponent,
    selectors: [["dr-filters-page"]],
    decls: 12,
    vars: 7,
    consts: [[1, "filters-hero", "section"], [1, "container"], ["title", "Design smart filters", "subtitle", "Combine access modes, availability and language support to build reusable filter presets for DocRoster.", "badge", "Configurator"], ["actions", "", 1, "filters-hero__actions"], ["type", "button", 1, "button", 3, "click"], ["class", "filters-hero__selected", 4, "ngIf"], [1, "filters-layout", "container"], ["class", "filters-layout__groups", 4, "ngIf"], ["class", "filters-layout__results", 4, "ngIf"], [1, "filters-hero__selected"], [3, "tags"], [1, "filters-layout__groups"], [4, "ngFor", "ngForOf"], [1, "filters-layout__group"], [3, "toggled", "group", "selected"], ["class", "filters-layout__clear", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "filters-layout__clear", 3, "click"], [1, "filters-layout__results"], [3, "doctor", "clinic", "nextAvailable", "highlightDistance", 4, "ngFor", "ngForOf"], [3, "doctor", "clinic", "nextAvailable", "highlightDistance"]],
    template: function FiltersPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "dr-section-header", 2)(3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersPageComponent_Template_button_click_4_listener() {
          return ctx.resetAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Clear all");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, FiltersPageComponent_div_6_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, FiltersPageComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, FiltersPageComponent_div_10_Template, 6, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.hasActiveFilters());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 3, ctx.filters$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 5, ctx.filteredResults$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_5__.SectionHeaderComponent, _shared_ui_filter_group_filter_group_component__WEBPACK_IMPORTED_MODULE_4__.FilterGroupComponent, _shared_ui_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_6__.TagListComponent, _shared_ui_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_3__.DoctorCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe],
    styles: [".filters-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(61, 122, 255, 0.1), rgba(33, 177, 40, 0.08));\n}\n.filters-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.filters-hero__selected[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: grid;\n  gap: 0.5rem;\n}\n.filters-hero__selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0a1748;\n}\n\n.filters-layout[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.filters-layout__group[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);\n  display: grid;\n  gap: 0.75rem;\n}\n.filters-layout__clear[_ngcontent-%COMP%] {\n  justify-self: flex-start;\n  background: none;\n  border: none;\n  color: #3d7aff;\n  font-weight: 600;\n  cursor: pointer;\n}\n.filters-layout__results[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9maWx0ZXJzL3VpL2ZpbHRlcnMtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUZBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGtCQ1FTO0VEUFQsYUFBQTtFQUNBLFdBQUE7QUFGSjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxjQ1hPO0FEU2I7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsU0NKVztFREtYLDJEQUFBO0FBSkY7QUFNRTtFQUNFLG1CQ3hCWTtFRHlCWixtQkNoQlE7RURpQlIsZUFBQTtFQUNBLDhDQ1RVO0VEVVYsYUFBQTtFQUNBLFlBQUE7QUFKSjtBQU9FO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQ3pDWTtFRDBDWixnQkFBQTtFQUNBLGVBQUE7QUFMSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLFdDNUJTO0FEc0JiIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuLmZpbHRlcnMtaGVybyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMSksIHJnYmEoJGNvbG9yLXNlY29uZGFyeSwgMC4wOCkpO1xuXG4gICZfX2FjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gICZfX3NlbGVjdGVkIHtcbiAgICBtYXJnaW4tdG9wOiAkc3BhY2luZy1sZztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC41cmVtO1xuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0O1xuICAgIH1cbiAgfVxufVxuXG4uZmlsdGVycy1sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6ICRzcGFjaW5nLXhsO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcblxuICAmX19ncm91cCB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXN1cmZhY2U7XG4gICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1sZztcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1zb2Z0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICB9XG5cbiAgJl9fY2xlYXIge1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmX19yZXN1bHRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogJHNwYWNpbmctbGc7XG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjM2Q3YWZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzFlM2E4YTtcbiRjb2xvci1zZWNvbmRhcnk6ICMyMWIxMjg7XG4kY29sb3ItYWNjZW50OiAjZmYzZDk2O1xuJGNvbG9yLWJhY2tncm91bmQ6ICNmNWY2ZmY7XG4kY29sb3Itc3VyZmFjZTogI2ZmZmZmZjtcbiRjb2xvci1zdXJmYWNlLWFsdDogI2VlZjFmZjtcbiRjb2xvci10ZXh0OiAjMGExNzQ4O1xuJGNvbG9yLXRleHQtbXV0ZWQ6ICM2ZDdiYTE7XG4kY29sb3ItYm9yZGVyOiAjZDVkY2YwO1xuJGNvbG9yLXN1Y2Nlc3M6ICMyMWIxMjg7XG4kY29sb3Itd2FybmluZzogI2ZmNTczZDtcbiRjb2xvci1kYW5nZXI6ICNmZjNkMDA7XG4kcmFkaXVzLXhsOiAyNHB4O1xuJHJhZGl1cy1sZzogMTZweDtcbiRyYWRpdXMtbWQ6IDEycHg7XG4kcmFkaXVzLXNtOiA4cHg7XG4kc3BhY2luZy14czogMC41cmVtO1xuJHNwYWNpbmctc206IDAuNzVyZW07XG4kc3BhY2luZy1tZDogMXJlbTtcbiRzcGFjaW5nLWxnOiAxLjVyZW07XG4kc3BhY2luZy14bDogMnJlbTtcbiRzcGFjaW5nLXh4bDogM3JlbTtcbiRzaGFkb3ctc29mdDogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiRzaGFkb3ctY2FyZDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbiR0cmFuc2l0aW9uLWJhc2U6IDE4MG1zIGVhc2UtaW4tb3V0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gRGlzcGxheScsICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuJG1heC1jb250ZW50LXdpZHRoOiAxMTgwcHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ }),

/***/ 1159:
/*!**********************************************************!*\
  !*** ./src/app/shared/ui/tag-list/tag-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagListComponent: () => (/* binding */ TagListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;


function TagListComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r1);
  }
}
class TagListComponent {
  constructor() {
    this.tags = [];
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TagListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TagListComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TagListComponent,
    selectors: [["dr-tag-list"]],
    inputs: {
      tags: "tags"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "tag-list"], [4, "ngFor", "ngForOf"]],
    template: function TagListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagListComponent_li_1_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
    styles: [".tag-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.tag-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1px solid rgba(213, 220, 240, 0.8);\n  font-weight: 500;\n  color: #0a1748;\n  transition: background 180ms ease-in-out, color 180ms ease-in-out, border-color 180ms ease-in-out;\n  font-size: 0.85rem;\n}\n.tag-list[_ngcontent-%COMP%]   li--active[_ngcontent-%COMP%] {\n  background: rgba(61, 122, 255, 0.12);\n  color: #3d7aff;\n  border-color: rgba(61, 122, 255, 0.4);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL3RhZy1saXN0L3RhZy1saXN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdXRpbGl0aWVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VDNkJBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQ3hDYztFRHlDZCwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0N6Q1c7RUQwQ1gsaUdBQUE7RURwQ0Usa0JBQUE7QUFPSjtBQytCRTtFQUNFLG9DQUFBO0VBQ0EsY0NyRFk7RURzRFoscUNBQUE7QUQ3QkoiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuQHVzZSAnc3R5bGVzL3V0aWxpdGllcycgYXMgdXRpbDtcblxuLnRhZy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIGxpIHtcbiAgICBAaW5jbHVkZSB1dGlsLmNoaXA7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG59XG4iLCJAdXNlICd2YXJpYWJsZXMnIGFzICo7XG5cbkBtaXhpbiBiYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG59XG5cbkBtaXhpbiBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkY29sb3ItcHJpbWFyeSwgJGNvbG9yLXByaW1hcnktZGFyayk7XG4gIGNvbG9yOiAkY29sb3Itc3VyZmFjZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR0cmFuc2l0aW9uLWJhc2UsIGJveC1zaGFkb3cgJHRyYW5zaXRpb24tYmFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1jYXJkO1xuICB9XG5cbiAgJi0tZ2hvc3Qge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMDgpO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgfVxufVxuXG5AbWl4aW4gY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAkY29sb3Itc3VyZmFjZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItYm9yZGVyLCAwLjgpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgJHRyYW5zaXRpb24tYmFzZSwgY29sb3IgJHRyYW5zaXRpb24tYmFzZSwgYm9yZGVyLWNvbG9yICR0cmFuc2l0aW9uLWJhc2U7XG5cbiAgJi0tYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjEyKTtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICB9XG59XG4iLCIkY29sb3ItcHJpbWFyeTogIzNkN2FmZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMxZTNhOGE7XG4kY29sb3Itc2Vjb25kYXJ5OiAjMjFiMTI4O1xuJGNvbG9yLWFjY2VudDogI2ZmM2Q5NjtcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZjVmNmZmO1xuJGNvbG9yLXN1cmZhY2U6ICNmZmZmZmY7XG4kY29sb3Itc3VyZmFjZS1hbHQ6ICNlZWYxZmY7XG4kY29sb3ItdGV4dDogIzBhMTc0ODtcbiRjb2xvci10ZXh0LW11dGVkOiAjNmQ3YmExO1xuJGNvbG9yLWJvcmRlcjogI2Q1ZGNmMDtcbiRjb2xvci1zdWNjZXNzOiAjMjFiMTI4O1xuJGNvbG9yLXdhcm5pbmc6ICNmZjU3M2Q7XG4kY29sb3ItZGFuZ2VyOiAjZmYzZDAwO1xuJHJhZGl1cy14bDogMjRweDtcbiRyYWRpdXMtbGc6IDE2cHg7XG4kcmFkaXVzLW1kOiAxMnB4O1xuJHJhZGl1cy1zbTogOHB4O1xuJHNwYWNpbmcteHM6IDAuNXJlbTtcbiRzcGFjaW5nLXNtOiAwLjc1cmVtO1xuJHNwYWNpbmctbWQ6IDFyZW07XG4kc3BhY2luZy1sZzogMS41cmVtO1xuJHNwYWNpbmcteGw6IDJyZW07XG4kc3BhY2luZy14eGw6IDNyZW07XG4kc2hhZG93LXNvZnQ6IDAgMjBweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4kc2hhZG93LWNhcmQ6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG4kdHJhbnNpdGlvbi1iYXNlOiAxODBtcyBlYXNlLWluLW91dDtcbiRmb250LWZhbWlseS1iYXNlOiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIERpc3BsYXknLCAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiRtYXgtY29udGVudC13aWR0aDogMTE4MHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ }),

/***/ 1560:
/*!***************************************************************!*\
  !*** ./src/app/feature/filters/data-access/filters.facade.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltersFacade: () => (/* binding */ FiltersFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);
var _staticBlock;






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
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_5__.DocRosterApiService);
    this.selections = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({}, ...(ngDevMode ? [{
      debugName: "selections"
    }] : []));
    this.filters$ = this.api.getFilters();
    this.selectionsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.selections(), ...(ngDevMode ? [{
      debugName: "selectionsSignal"
    }] : []));
    this.selections$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.toObservable)(this.selectionsSignal);
    this.activeFilterCount = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => Object.values(this.selections()).reduce((total, values) => total + values.length, 0), ...(ngDevMode ? [{
      debugName: "activeFilterCount"
    }] : []));
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
  static #_ = _staticBlock = () => (this.ɵfac = function FiltersFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FiltersFacade)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FiltersFacade,
    factory: FiltersFacade.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;



const _c0 = a0 => ({
  "filter-group__option--active": a0
});
function FilterGroupComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.group.description);
  }
}
function FilterGroupComponent_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r3.icon);
  }
}
function FilterGroupComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterGroupComponent_button_6_Template_button_click_0_listener() {
      const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.onToggle(option_r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FilterGroupComponent_button_6_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r0.isActive(option_r3.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", option_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r3.label, " ");
  }
}
class FilterGroupComponent {
  constructor() {
    this.selected = [];
    this.toggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  onToggle(value) {
    this.toggled.emit(value);
  }
  isActive(value) {
    return this.selected.includes(value);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function FilterGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterGroupComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FilterGroupComponent,
    selectors: [["dr-filter-group"]],
    inputs: {
      group: "group",
      selected: "selected"
    },
    outputs: {
      toggled: "toggled"
    },
    decls: 7,
    vars: 3,
    consts: [[1, "filter-group"], [4, "ngIf"], [1, "filter-group__options"], ["type", "button", "class", "filter-group__option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "filter-group__option", 3, "click", "ngClass"], ["class", "material-symbols-rounded", 4, "ngIf"], [1, "material-symbols-rounded"]],
    template: function FilterGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "header")(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FilterGroupComponent_p_4_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FilterGroupComponent_button_6_Template, 3, 5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.group.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.group.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.group.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    styles: [".filter-group[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.filter-group[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.filter-group[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0 0;\n  color: #6d7ba1;\n}\n.filter-group__options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.filter-group__option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1px solid rgba(213, 220, 240, 0.8);\n  font-weight: 500;\n  color: #0a1748;\n  transition: background 180ms ease-in-out, color 180ms ease-in-out, border-color 180ms ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid rgba(213, 220, 240, 0.9);\n  cursor: pointer;\n  background: #ffffff;\n}\n.filter-group__option--active[_ngcontent-%COMP%] {\n  background: rgba(61, 122, 255, 0.12);\n  color: #3d7aff;\n  border-color: rgba(61, 122, 255, 0.4);\n}\n.filter-group__option--active[_ngcontent-%COMP%] {\n  background: rgba(61, 122, 255, 0.12);\n  border-color: rgba(61, 122, 255, 0.4);\n  color: #3d7aff;\n}\n.filter-group__option[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2ZpbHRlci1ncm91cC9maWx0ZXItZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3V0aWxpdGllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLFlDYVc7QURmYjtBQUtJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBSE47QUFNSTtFQUNFLG9CQUFBO0VBQ0EsY0NQYTtBREduQjtBQVFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTko7QUFTRTtFRWVBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CRHhDYztFQ3lDZCwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0R6Q1c7RUMwQ1gsaUdBQUE7RUZ0QkUsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkMzQlk7QUQ2QmhCO0FFaUJFO0VBQ0Usb0NBQUE7RUFDQSxjRHJEWTtFQ3NEWixxQ0FBQTtBRmZKO0FBTEk7RUFDRSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsY0NyQ1U7QUQ0Q2hCO0FBSkk7RUFDRSxlQUFBO0FBTU4iLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuQHVzZSAnc3R5bGVzL3V0aWxpdGllcycgYXMgdXRpbDtcblxuLmZpbHRlci1ncm91cCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogJHNwYWNpbmctc207XG5cbiAgaGVhZGVyIHtcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMC40cmVtIDAgMCAwO1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgIH1cbiAgfVxuXG4gICZfX29wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMC41cmVtO1xuICB9XG5cbiAgJl9fb3B0aW9uIHtcbiAgICBAaW5jbHVkZSB1dGlsLmNoaXA7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNHJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuOSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlO1xuXG4gICAgJi0tYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIH1cblxuICAgIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzZDdhZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWUzYThhO1xuJGNvbG9yLXNlY29uZGFyeTogIzIxYjEyODtcbiRjb2xvci1hY2NlbnQ6ICNmZjNkOTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjZmZjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZWVmMWZmO1xuJGNvbG9yLXRleHQ6ICMwYTE3NDg7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZkN2JhMTtcbiRjb2xvci1ib3JkZXI6ICNkNWRjZjA7XG4kY29sb3Itc3VjY2VzczogIzIxYjEyODtcbiRjb2xvci13YXJuaW5nOiAjZmY1NzNkO1xuJGNvbG9yLWRhbmdlcjogI2ZmM2QwMDtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiIsIkB1c2UgJ3ZhcmlhYmxlcycgYXMgKjtcblxuQG1peGluIGJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4xMik7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuQG1peGluIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRjb2xvci1wcmltYXJ5LCAkY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgY29sb3I6ICRjb2xvci1zdXJmYWNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb24tYmFzZSwgYm94LXNoYWRvdyAkdHJhbnNpdGlvbi1iYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWNhcmQ7XG4gIH1cblxuICAmLS1naG9zdCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4wOCk7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICB9XG59XG5cbkBtaXhpbiBjaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuOCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAkY29sb3ItdGV4dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAkdHJhbnNpdGlvbi1iYXNlLCBjb2xvciAkdHJhbnNpdGlvbi1iYXNlLCBib3JkZXItY29sb3IgJHRyYW5zaXRpb24tYmFzZTtcblxuICAmLS1hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ })

}]);
//# sourceMappingURL=892.js.map