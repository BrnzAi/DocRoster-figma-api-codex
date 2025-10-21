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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shared_ui_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/doctor-card/doctor-card.component */ 5831);
/* harmony import */ var _shared_ui_filter_group_filter_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/filter-group/filter-group.component */ 9253);
/* harmony import */ var _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/section-header/section-header.component */ 9719);
/* harmony import */ var _shared_ui_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/tag-list/tag-list.component */ 1159);
/* harmony import */ var _data_access_filters_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-access/filters.facade */ 1560);








function FiltersPageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Active filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "dr-tag-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tags", ctx_r0.selectedTags());
  }
}
function FiltersPageComponent_div_8_ng_container_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FiltersPageComponent_div_8_ng_container_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const group_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.clearGroup(group_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Clear ", group_r3.title.toLowerCase(), " ");
  }
}
function FiltersPageComponent_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13)(2, "dr-filter-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggled", function FiltersPageComponent_div_8_ng_container_1_Template_dr_filter_group_toggled_2_listener($event) {
      const group_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.onToggle(group_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FiltersPageComponent_div_8_ng_container_1_button_3_Template, 2, 1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", group_r3)("selected", ctx_r0.selectionForGroup(group_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.selectionForGroup(group_r3.id).length);
  }
}
function FiltersPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FiltersPageComponent_div_8_ng_container_1_Template, 4, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const groups_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", groups_r5);
  }
}
function FiltersPageComponent_div_10_dr_doctor_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "dr-doctor-card", 19);
  }
  if (rf & 2) {
    const result_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("doctor", result_r6.doctor)("clinic", result_r6.clinic)("nextAvailable", result_r6.nextAvailable)("highlightDistance", result_r6.distanceInMinutes);
  }
}
function FiltersPageComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Preview results");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, FiltersPageComponent_div_10_dr_doctor_card_5_Template, 1, 4, "dr-doctor-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const results_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Showing ", results_r7.length, " matches across the pilot network.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", results_r7);
  }
}
class FiltersPageComponent {
  constructor() {
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_data_access_filters_facade__WEBPACK_IMPORTED_MODULE_4__.FiltersFacade);
    this.filters$ = this.facade.filters$;
    this.selections = this.facade.selectionsSignal;
    this.filteredResults$ = this.facade.filteredResults$;
    this.activeFilters = this.facade.activeFilterCount;
    this.hasActiveFilters = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => this.activeFilters() > 0);
    this.selectedTags = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => Object.values(this.selections()).flatMap(values => values ?? []));
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
  static {
    this.ɵfac = function FiltersPageComponent_Factory(t) {
      return new (t || FiltersPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FiltersPageComponent,
      selectors: [["dr-filters-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 7,
      consts: [[1, "filters-hero", "section"], [1, "container"], ["title", "Design smart filters", "subtitle", "Combine access modes, availability and language support to build reusable filter presets for DocRoster.", "badge", "Configurator"], ["actions", "", 1, "filters-hero__actions"], ["type", "button", 1, "button", 3, "click"], ["class", "filters-hero__selected", 4, "ngIf"], [1, "filters-layout", "container"], ["class", "filters-layout__groups", 4, "ngIf"], ["class", "filters-layout__results", 4, "ngIf"], [1, "filters-hero__selected"], [3, "tags"], [1, "filters-layout__groups"], [4, "ngFor", "ngForOf"], [1, "filters-layout__group"], [3, "toggled", "group", "selected"], ["class", "filters-layout__clear", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "filters-layout__clear", 3, "click"], [1, "filters-layout__results"], [3, "doctor", "clinic", "nextAvailable", "highlightDistance", 4, "ngFor", "ngForOf"], [3, "doctor", "clinic", "nextAvailable", "highlightDistance"]],
      template: function FiltersPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "dr-section-header", 2)(3, "div", 3)(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FiltersPageComponent_Template_button_click_4_listener() {
            return ctx.resetAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Clear all");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, FiltersPageComponent_div_6_Template, 4, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "section", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FiltersPageComponent_div_8_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, FiltersPageComponent_div_10_Template, 6, 2, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasActiveFilters());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 3, ctx.filters$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 5, ctx.filteredResults$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_ui_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_2__.SectionHeaderComponent, _shared_ui_filter_group_filter_group_component__WEBPACK_IMPORTED_MODULE_1__.FilterGroupComponent, _shared_ui_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_3__.TagListComponent, _shared_ui_doctor_card_doctor_card_component__WEBPACK_IMPORTED_MODULE_0__.DoctorCardComponent],
      styles: [".filters-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(53, 82, 255, 0.1), rgba(19, 196, 163, 0.08));\n}\n.filters-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.filters-hero__selected[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: grid;\n  gap: 0.5rem;\n}\n.filters-hero__selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n\n.filters-layout[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.filters-layout__group[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);\n  display: grid;\n  gap: 0.75rem;\n}\n.filters-layout__clear[_ngcontent-%COMP%] {\n  justify-self: flex-start;\n  background: none;\n  border: none;\n  color: #3552ff;\n  font-weight: 600;\n  cursor: pointer;\n}\n.filters-layout__results[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9maWx0ZXJzL3VpL2ZpbHRlcnMtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUZBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGtCQ1FTO0VEUFQsYUFBQTtFQUNBLFdBQUE7QUFGSjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxjQ1hPO0FEU2I7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsU0NKVztFREtYLDJEQUFBO0FBSkY7QUFNRTtFQUNFLG1CQ3hCWTtFRHlCWixtQkNoQlE7RURpQlIsZUFBQTtFQUNBLDhDQ1RVO0VEVVYsYUFBQTtFQUNBLFlBQUE7QUFKSjtBQU9FO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQ3pDWTtFRDBDWixnQkFBQTtFQUNBLGVBQUE7QUFMSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLFdDNUJTO0FEc0JiIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuLmZpbHRlcnMtaGVybyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMSksIHJnYmEoJGNvbG9yLXNlY29uZGFyeSwgMC4wOCkpO1xuXG4gICZfX2FjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gICZfX3NlbGVjdGVkIHtcbiAgICBtYXJnaW4tdG9wOiAkc3BhY2luZy1sZztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC41cmVtO1xuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0O1xuICAgIH1cbiAgfVxufVxuXG4uZmlsdGVycy1sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6ICRzcGFjaW5nLXhsO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcblxuICAmX19ncm91cCB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXN1cmZhY2U7XG4gICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy1sZztcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1zb2Z0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICB9XG5cbiAgJl9fY2xlYXIge1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmX19yZXN1bHRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogJHNwYWNpbmctbGc7XG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjMzU1MmZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzFmM2JiMztcbiRjb2xvci1zZWNvbmRhcnk6ICMxM2M0YTM7XG4kY29sb3ItYWNjZW50OiAjZjk3MzE2O1xuJGNvbG9yLWJhY2tncm91bmQ6ICNmNWY3ZmI7XG4kY29sb3Itc3VyZmFjZTogI2ZmZmZmZjtcbiRjb2xvci1zdXJmYWNlLWFsdDogI2Y5ZmFmYztcbiRjb2xvci10ZXh0OiAjMTExODI3O1xuJGNvbG9yLXRleHQtbXV0ZWQ6ICM2YjcyODA7XG4kY29sb3ItYm9yZGVyOiAjZTJlOGYwO1xuJGNvbG9yLXN1Y2Nlc3M6ICMxNmEzNGE7XG4kY29sb3Itd2FybmluZzogI2ZhY2MxNTtcbiRjb2xvci1kYW5nZXI6ICNkYzI2MjY7XG4kcmFkaXVzLXhsOiAyNHB4O1xuJHJhZGl1cy1sZzogMTZweDtcbiRyYWRpdXMtbWQ6IDEycHg7XG4kcmFkaXVzLXNtOiA4cHg7XG4kc3BhY2luZy14czogMC41cmVtO1xuJHNwYWNpbmctc206IDAuNzVyZW07XG4kc3BhY2luZy1tZDogMXJlbTtcbiRzcGFjaW5nLWxnOiAxLjVyZW07XG4kc3BhY2luZy14bDogMnJlbTtcbiRzcGFjaW5nLXh4bDogM3JlbTtcbiRzaGFkb3ctc29mdDogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiRzaGFkb3ctY2FyZDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcbiR0cmFuc2l0aW9uLWJhc2U6IDE4MG1zIGVhc2UtaW4tb3V0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuJG1heC1jb250ZW50LXdpZHRoOiAxMTgwcHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=892.js.map