"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[792],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var _shared_ui_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/ui/app-footer/app-footer.component */ 9523);
/* harmony import */ var _shared_ui_map_shell_map_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/ui/map-shell/map-shell.component */ 8483);
/* harmony import */ var _shared_ui_navigation_header_navigation_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/ui/navigation-header/navigation-header.component */ 491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;









function AppComponent_dr_navigation_header_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "dr-navigation-header");
  }
}
function AppComponent_dr_app_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "dr-app-footer");
  }
}
class AppComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.currentUrl = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.toSignal)(this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(event => event.urlAfterRedirects), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this.router.url)), {
      initialValue: this.router.url
    });
    this.showChrome = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const url = this.currentUrl();
      const hiddenRoutes = ['/auth', '/search', '/profile', '/specialists'];
      return !hiddenRoutes.some(path => url.startsWith(path));
    }, ...(ngDevMode ? [{
      debugName: "showChrome"
    }] : []));
    this.isMapInteractive = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const url = this.currentUrl();
      return url.startsWith('/search') || url.startsWith('/specialists');
    }, ...(ngDevMode ? [{
      debugName: "isMapInteractive"
    }] : []));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 7,
    vars: 6,
    consts: [[1, "app-shell"], [1, "app-shell__overlay"], [4, "ngIf"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "dr-map-shell");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, AppComponent_dr_navigation_header_3_Template, 1, 0, "dr-navigation-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, AppComponent_dr_app_footer_6_Template, 1, 0, "dr-app-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("app-shell--map-active", ctx.isMapInteractive());
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("app-shell__overlay--map-active", ctx.isMapInteractive());
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showChrome());
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showChrome());
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_ui_navigation_header_navigation_header_component__WEBPACK_IMPORTED_MODULE_10__.NavigationHeaderComponent, _shared_ui_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__.AppFooterComponent, _shared_ui_map_shell_map_shell_component__WEBPACK_IMPORTED_MODULE_9__.MapShellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    styles: [".app-shell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  width: 100%;\n  overflow: hidden;\n}\n\n.app-shell[_ngcontent-%COMP%]:not(.app-shell--map-active)   dr-map-shell[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.app-shell__overlay[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n}\n\n.app-shell__overlay--map-active[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.app-shell__overlay--map-active[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.app-shell__overlay--map-active[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.app-shell__overlay--map-active[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\nmain[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0FBREY7QUFHRTtFQUNFLG9CQUFBO0FBREo7QUFJRTtFQUNFLG9CQUFBO0FBRko7QUFJSTtFQUNFLG9CQUFBO0FBRk47O0FBT0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUpGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuLmFwcC1zaGVsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYXBwLXNoZWxsOm5vdCguYXBwLXNoZWxsLS1tYXAtYWN0aXZlKSBkci1tYXAtc2hlbGwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFwcC1zaGVsbF9fb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uYXBwLXNoZWxsX19vdmVybGF5LS1tYXAtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgPiAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuXG4gIG1haW4ge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgPiAqIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG5tYWluIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ 2181);




const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_3__.routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.withViewTransitions)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.withInMemoryScrolling)({
    scrollPositionRestoration: 'enabled'
  })), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.withFetch)())]
};

/***/ }),

/***/ 491:
/*!****************************************************************************!*\
  !*** ./src/app/shared/ui/navigation-header/navigation-header.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationHeaderComponent: () => (/* binding */ NavigationHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _feature_auth_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../feature/auth/data-access/auth.facade */ 5990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






class NavigationHeaderComponent {
  constructor() {
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_feature_auth_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_5__.AuthFacade);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.isAuthenticated = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => Boolean(this.auth.session()), ...(ngDevMode ? [{
      debugName: "isAuthenticated"
    }] : []));
    this.profileLink = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.isAuthenticated() ? '/profile' : '/auth/login', ...(ngDevMode ? [{
      debugName: "profileLink"
    }] : []));
    this.profileLabel = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.isAuthenticated() ? 'Profile' : 'Sign in', ...(ngDevMode ? [{
      debugName: "profileLabel"
    }] : []));
    this.searchForm = this.fb.group({
      query: ['']
    });
  }
  submitSearch() {
    const value = (this.searchForm.get('query')?.value ?? '').trim();
    this.router.navigate(['/search'], {
      queryParams: value ? {
        q: value
      } : {}
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NavigationHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NavigationHeaderComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: NavigationHeaderComponent,
    selectors: [["dr-navigation-header"]],
    decls: 21,
    vars: 3,
    consts: [[1, "navigation"], [1, "navigation__inner", "container"], ["routerLink", "/", 1, "navigation__brand"], ["src", "assets/images/logos/docroster-mark.svg", "alt", "DocRoster"], [1, "navigation__search", 3, "ngSubmit", "formGroup"], ["aria-hidden", "true", 1, "material-symbols-rounded"], ["type", "search", "formControlName", "query", "placeholder", "Search organizations...", "aria-label", "Search organizations"], [1, "navigation__actions"], ["routerLink", "/filters", 1, "navigation__pill"], [1, "navigation__pill", "navigation__pill--profile", 3, "routerLink"]],
    template: function NavigationHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "DocRoster");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function NavigationHeaderComponent_Template_form_ngSubmit_6_listener() {
          return ctx.submitSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7)(11, "a", 8)(12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "filter_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 9)(17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.profileLink());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.profileLabel());
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: [".navigation[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(18px);\n          backdrop-filter: blur(18px);\n  background: rgba(255, 255, 255, 0.86);\n  border-bottom: 1px solid rgba(213, 220, 240, 0.5);\n}\n.navigation__inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(220px, 1fr) auto;\n  align-items: center;\n  gap: clamp(1rem, 4vw, 2.5rem);\n  min-height: 72px;\n}\n.navigation__brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 700;\n  font-size: 1.15rem;\n  color: #0a1748;\n  text-decoration: none;\n}\n.navigation__brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.navigation__search[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  border-radius: 16px;\n  border: 1px solid rgba(213, 220, 240, 0.7);\n  background: rgba(255, 255, 255, 0.95);\n  box-shadow: 0 18px 48px rgba(10, 23, 72, 0.12);\n}\n.navigation__search[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font: inherit;\n  color: #0a1748;\n  background: transparent;\n}\n.navigation__search[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  color: #3d7aff;\n  font-size: 1.3rem;\n}\n.navigation__actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.navigation__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.65rem 1.1rem;\n  border-radius: 999px;\n  border: 1px solid rgba(213, 220, 240, 0.65);\n  background: rgba(255, 255, 255, 0.92);\n  color: #0a1748;\n  font-weight: 600;\n  text-decoration: none;\n  transition: transform 180ms ease-in-out, box-shadow 180ms ease-in-out;\n}\n.navigation__pill[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 16px 36px rgba(10, 23, 72, 0.12);\n}\n.navigation__pill[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #3d7aff;\n}\n.navigation__pill--profile[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(61, 122, 255, 0.1), rgba(30, 58, 138, 0.12));\n  border-color: rgba(61, 122, 255, 0.35);\n}\n.navigation__pill--profile[_ngcontent-%COMP%]   .material-symbols-rounded[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n}\n@media (max-width: 900px) {\n  .navigation__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.25rem;\n  }\n  .navigation__actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL25hdmlnYXRpb24taGVhZGVyL25hdmlnYXRpb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaURBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBREo7QUFJRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNDakJTO0VEa0JULHFCQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRk47QUFNRTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJDekJRO0VEMEJSLDBDQUFBO0VBQ0EscUNBQUE7RUFDQSw4Q0FBQTtBQUpKO0FBTUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQ3pDTztFRDBDUCx1QkFBQTtBQUpOO0FBT0k7RUFDRSxjQ3JEVTtFRHNEVixpQkFBQTtBQUxOO0FBU0U7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVBKO0FBVUU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsY0NqRVM7RURrRVQsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFFQUFBO0FBUko7QUFVSTtFQUNFLDJCQUFBO0VBQ0EsOENBQUE7QUFSTjtBQVdJO0VBQ0UsaUJBQUE7RUFDQSxjQ3BGVTtBRDJFaEI7QUFhRTtFQUNFLHFGQUFBO0VBQ0Esc0NBQUE7QUFYSjtBQWFJO0VBQ0UsY0M1RmU7QURpRnJCO0FBZUU7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsWUFBQTtFQWJKO0VBZ0JFO0lBQ0UsMkJBQUE7RUFkSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuLm5hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3Itc3VyZmFjZSwgMC44Nik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuNSk7XG5cbiAgJl9faW5uZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbm1heCgyMjBweCwgMWZyKSBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiBjbGFtcCgxcmVtLCA0dncsIDIuNXJlbSk7XG4gICAgbWluLWhlaWdodDogNzJweDtcbiAgfVxuXG4gICZfX2JyYW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC43NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3NlYXJjaCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLWxnO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLWJvcmRlciwgMC43KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1zdXJmYWNlLCAwLjk1KTtcbiAgICBib3gtc2hhZG93OiAwIDE4cHggNDhweCByZ2JhKCRjb2xvci10ZXh0LCAwLjEyKTtcblxuICAgIGlucHV0W3R5cGU9J3NlYXJjaCddIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBmb250OiBpbmhlcml0O1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG4gIH1cblxuICAmX19hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC43NXJlbTtcbiAgfVxuXG4gICZfX3BpbGwge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjQ1cmVtO1xuICAgIHBhZGRpbmc6IDAuNjVyZW0gMS4xcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLWJvcmRlciwgMC42NSk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3Itc3VyZmFjZSwgMC45Mik7XG4gICAgY29sb3I6ICRjb2xvci10ZXh0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkdHJhbnNpdGlvbi1iYXNlLCBib3gtc2hhZG93ICR0cmFuc2l0aW9uLWJhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTZweCAzNnB4IHJnYmEoJGNvbG9yLXRleHQsIDAuMTIpO1xuICAgIH1cblxuICAgIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgfVxuICB9XG5cbiAgJl9fcGlsbC0tcHJvZmlsZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4xKSwgcmdiYSgkY29sb3ItcHJpbWFyeS1kYXJrLCAwLjEyKSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjM1KTtcblxuICAgIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcms7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgJl9faW5uZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBnYXA6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgJl9fYWN0aW9ucyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3ItcHJpbWFyeTogIzNkN2FmZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMxZTNhOGE7XG4kY29sb3Itc2Vjb25kYXJ5OiAjMjFiMTI4O1xuJGNvbG9yLWFjY2VudDogI2ZmM2Q5NjtcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZjVmNmZmO1xuJGNvbG9yLXN1cmZhY2U6ICNmZmZmZmY7XG4kY29sb3Itc3VyZmFjZS1hbHQ6ICNlZWYxZmY7XG4kY29sb3ItdGV4dDogIzBhMTc0ODtcbiRjb2xvci10ZXh0LW11dGVkOiAjNmQ3YmExO1xuJGNvbG9yLWJvcmRlcjogI2Q1ZGNmMDtcbiRjb2xvci1zdWNjZXNzOiAjMjFiMTI4O1xuJGNvbG9yLXdhcm5pbmc6ICNmZjU3M2Q7XG4kY29sb3ItZGFuZ2VyOiAjZmYzZDAwO1xuJHJhZGl1cy14bDogMjRweDtcbiRyYWRpdXMtbGc6IDE2cHg7XG4kcmFkaXVzLW1kOiAxMnB4O1xuJHJhZGl1cy1zbTogOHB4O1xuJHNwYWNpbmcteHM6IDAuNXJlbTtcbiRzcGFjaW5nLXNtOiAwLjc1cmVtO1xuJHNwYWNpbmctbWQ6IDFyZW07XG4kc3BhY2luZy1sZzogMS41cmVtO1xuJHNwYWNpbmcteGw6IDJyZW07XG4kc3BhY2luZy14eGw6IDNyZW07XG4kc2hhZG93LXNvZnQ6IDAgMjBweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4kc2hhZG93LWNhcmQ6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG4kdHJhbnNpdGlvbi1iYXNlOiAxODBtcyBlYXNlLWluLW91dDtcbiRmb250LWZhbWlseS1iYXNlOiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIERpc3BsYXknLCAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiRtYXgtY29udGVudC13aWR0aDogMTE4MHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _shared_data_access_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/data-access/guards/auth.guard */ 4658);

const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'auth/login'
}, {
  path: 'map',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(541), __webpack_require__.e(670)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/map/ui/map-page.component */ 2670)).then(m => m.MapPageComponent),
  title: 'DocRoster — Explore healthcare on the map'
}, {
  path: 'search',
  canActivate: [_shared_data_access_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard],
  loadComponent: () => __webpack_require__.e(/*! import() */ 422).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/search/ui/search-page.component */ 1422)).then(m => m.SearchPageComponent),
  title: 'DocRoster — Search specialists'
}, {
  path: 'filters',
  canActivate: [_shared_data_access_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(541), __webpack_require__.e(892)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/filters/ui/filters-page.component */ 892)).then(m => m.FiltersPageComponent),
  title: 'DocRoster — Smart filters'
}, {
  path: 'specialists/:id',
  canActivate: [_shared_data_access_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard],
  loadComponent: () => __webpack_require__.e(/*! import() */ 714).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/specialist/ui/specialist-page.component */ 9714)).then(m => m.SpecialistPageComponent),
  title: 'DocRoster — Specialist profile'
}, {
  path: 'organizations/:id/assessments',
  canActivate: [_shared_data_access_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard],
  loadComponent: () => __webpack_require__.e(/*! import() */ 609).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/organizations/ui/organization-assessments-page.component */ 9609)).then(m => m.OrganizationAssessmentsPageComponent),
  title: 'DocRoster — Organization assessments'
}, {
  path: 'profile',
  canActivate: [_shared_data_access_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard],
  loadComponent: () => __webpack_require__.e(/*! import() */ 488).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/profile/ui/profile-page.component */ 3488)).then(m => m.ProfilePageComponent),
  title: 'DocRoster — Your profile'
}, {
  path: 'upload',
  canActivate: [_shared_data_access_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard],
  loadComponent: () => __webpack_require__.e(/*! import() */ 50).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/upload/ui/upload-page.component */ 2050)).then(m => m.UploadPageComponent),
  title: 'DocRoster — Upload assessments'
}, {
  path: 'review/:id',
  canActivate: [_shared_data_access_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(541), __webpack_require__.e(566)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/review/ui/review-page.component */ 6566)).then(m => m.ReviewPageComponent),
  title: 'DocRoster — Review submission'
}, {
  path: 'auth',
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }, {
    path: 'login',
    loadComponent: () => __webpack_require__.e(/*! import() */ 187).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/auth/ui/login-page.component */ 8187)).then(m => m.LoginPageComponent),
    title: 'DocRoster — Sign in'
  }, {
    path: 'register',
    loadComponent: () => __webpack_require__.e(/*! import() */ 63).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/auth/ui/register-page.component */ 5063)).then(m => m.RegisterPageComponent),
    title: 'DocRoster — Create account'
  }, {
    path: 'recover',
    loadComponent: () => __webpack_require__.e(/*! import() */ 768).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/auth/ui/recover-page.component */ 5768)).then(m => m.RecoverPageComponent),
    title: 'DocRoster — Recover access'
  }, {
    path: 'verify',
    loadComponent: () => __webpack_require__.e(/*! import() */ 851).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/auth/ui/verify-page.component */ 1851)).then(m => m.VerifyPageComponent),
    title: 'DocRoster — Verify identity'
  }]
}, {
  path: '**',
  redirectTo: 'auth/login'
}];

/***/ }),

/***/ 2592:
/*!****************************************************************!*\
  !*** ./src/app/shared/data-access/mock-http-client.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockHttpClientService: () => (/* binding */ MockHttpClientService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;



class MockHttpClientService {
  constructor() {
    this.defaultLatency = 280;
  }
  get(payload, latency = this.defaultLatency) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(structuredClone(payload)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(latency));
  }
  post(payload, _body, latency = this.defaultLatency) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(structuredClone(payload)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(latency));
  }
  mutate(updater, latency = this.defaultLatency) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(updater()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(latency));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MockHttpClientService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MockHttpClientService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MockHttpClientService,
    factory: MockHttpClientService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();
function structuredClone(value) {
  if (value === undefined || value === null) {
    return value;
  }
  if (typeof globalThis.structuredClone === 'function') {
    return globalThis.structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

/***/ }),

/***/ 3944:
/*!*******************************************************!*\
  !*** ./src/app/data-access/doc-roster-api.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocRosterApiService: () => (/* binding */ DocRosterApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data-access/mocks/doc-roster.mocks */ 4981);
/* harmony import */ var _shared_data_access_mock_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data-access/mock-http-client.service */ 2592);
var _staticBlock;





class DocRosterApiService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_shared_data_access_mock_http_client_service__WEBPACK_IMPORTED_MODULE_4__.MockHttpClientService);
    this.metricsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_COMMUNITY_METRICS, ...(ngDevMode ? [{
      debugName: "metricsSignal"
    }] : []));
    this.metrics = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.metricsSignal(), ...(ngDevMode ? [{
      debugName: "metrics"
    }] : []));
  }
  getClinics() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_CLINICS);
  }
  getClinicById(id) {
    return this.getClinics().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(clinics => clinics.find(clinic => clinic.id === id)));
  }
  getDoctors() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_DOCTORS);
  }
  getDoctorById(id) {
    return this.getDoctors().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(doctors => doctors.find(doctor => doctor.id === id)));
  }
  getOrganizations() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_ORGANIZATIONS);
  }
  getAssessmentsByOrganization(organizationId) {
    const assessments = _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_ASSESSMENTS.filter(assessment => assessment.organizationId === organizationId);
    return this.http.get(assessments);
  }
  getReviewsForDoctor(doctorId) {
    const reviews = _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_REVIEWS.filter(review => review.doctorId === doctorId);
    return this.http.get(reviews);
  }
  getReviewById(reviewId) {
    const review = _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_REVIEWS.find(item => item.id === reviewId);
    return this.http.get(review);
  }
  getFilters() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_FILTERS);
  }
  getSearchResults() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_SEARCH_RESULTS);
  }
  getUserProfile() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_PROFILE);
  }
  updateNotificationPreference(enabled) {
    return this.http.mutate(() => {
      const nextProfile = {
        ..._shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_PROFILE,
        notificationsEnabled: enabled
      };
      _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_3__.MOCK_PROFILE.notificationsEnabled = enabled;
      return nextProfile;
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function DocRosterApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DocRosterApiService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DocRosterApiService,
    factory: DocRosterApiService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.config */ 289);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_2__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 4658:
/*!*********************************************************!*\
  !*** ./src/app/shared/data-access/guards/auth.guard.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _feature_auth_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../feature/auth/data-access/auth.facade */ 5990);



const authGuard = () => {
  const auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_feature_auth_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_2__.AuthFacade);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  if (auth.session()) {
    return true;
  }
  return router.createUrlTree(['/auth/login']);
};

/***/ }),

/***/ 4981:
/*!**************************************************************!*\
  !*** ./src/app/shared/data-access/mocks/doc-roster.mocks.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_ASSESSMENTS: () => (/* binding */ MOCK_ASSESSMENTS),
/* harmony export */   MOCK_CLINICS: () => (/* binding */ MOCK_CLINICS),
/* harmony export */   MOCK_COMMUNITY_METRICS: () => (/* binding */ MOCK_COMMUNITY_METRICS),
/* harmony export */   MOCK_DOCTORS: () => (/* binding */ MOCK_DOCTORS),
/* harmony export */   MOCK_FILTERS: () => (/* binding */ MOCK_FILTERS),
/* harmony export */   MOCK_ORGANIZATIONS: () => (/* binding */ MOCK_ORGANIZATIONS),
/* harmony export */   MOCK_PROFILE: () => (/* binding */ MOCK_PROFILE),
/* harmony export */   MOCK_REVIEWS: () => (/* binding */ MOCK_REVIEWS),
/* harmony export */   MOCK_SEARCH_RESULTS: () => (/* binding */ MOCK_SEARCH_RESULTS)
/* harmony export */ });
const MOCK_CLINICS = [{
  id: 'clinic-aurora',
  name: 'Aurora Integrative Care',
  description: 'Whole-person medical practice blending advanced diagnostics with lifestyle medicine and personalized coaching.',
  specialties: ['Primary care', 'Lifestyle medicine', 'Virtual visits'],
  rating: 4.9,
  reviewCount: 268,
  phone: '+1 (415) 555-1845',
  email: 'hello@aurora.care',
  address: {
    street: '580 Market Street',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94104',
    country: 'USA'
  },
  coordinates: {
    latitude: 37.79248,
    longitude: -122.4012
  },
  heroImage: 'assets/images/clinics/aurora-clinic.svg',
  openingHours: 'Mon–Fri · 7:00–19:00',
  isVerified: true
}, {
  id: 'clinic-riverbend',
  name: 'Riverbend Pediatrics Collective',
  description: 'Community-first pediatric group with collaborative team care, extended hours and on-call guidance.',
  specialties: ['Pediatrics', 'Care coordination', 'Weekend clinic'],
  rating: 4.7,
  reviewCount: 184,
  phone: '+1 (206) 555-9087',
  email: 'support@riverbendpeds.org',
  address: {
    street: '910 Union Street',
    city: 'Seattle',
    state: 'WA',
    postalCode: '98101',
    country: 'USA'
  },
  coordinates: {
    latitude: 47.6101,
    longitude: -122.3321
  },
  heroImage: 'assets/images/clinics/riverbend.svg',
  openingHours: 'Mon–Sat · 8:00–20:00',
  isVerified: true
}, {
  id: 'clinic-lakeside',
  name: 'Lakeside Women’s Health',
  description: 'Evidence-led obstetrics and gynecology practice featuring remote monitoring and on-site diagnostics.',
  specialties: ['Obstetrics', 'Gynecology', 'Telehealth'],
  rating: 4.8,
  reviewCount: 312,
  phone: '+1 (312) 555-7400',
  email: 'contact@lakesidewh.com',
  address: {
    street: '220 West Ontario Street',
    city: 'Chicago',
    state: 'IL',
    postalCode: '60654',
    country: 'USA'
  },
  coordinates: {
    latitude: 41.8938,
    longitude: -87.6347
  },
  heroImage: 'assets/images/clinics/lakeside.svg',
  openingHours: 'Mon–Fri · 8:30–17:30',
  isVerified: false
}];
const MOCK_DOCTORS = [{
  id: 'dr-lopez',
  name: 'Dr. Mariah López',
  title: 'MD, IFMCP',
  specialty: 'Functional medicine',
  clinicId: 'clinic-aurora',
  biography: 'Dr. López leads Aurora Integrative Care with a focus on whole-person medicine, precision diagnostics and sustainable habit design.',
  experienceYears: 14,
  rating: 4.9,
  reviewCount: 142,
  avatarUrl: 'assets/figma/search/1814_1178.png',
  highlights: [{
    label: 'Programs designed',
    value: '58'
  }, {
    label: 'Community rating',
    value: '4.9/5'
  }, {
    label: 'Virtual consults',
    value: 'Yes'
  }],
  availability: [{
    day: 'Monday',
    times: ['09:30', '11:00', '15:30']
  }, {
    day: 'Wednesday',
    times: ['08:45', '13:00']
  }, {
    day: 'Friday',
    times: ['10:00', '12:30', '16:30']
  }],
  languages: ['English', 'Spanish'],
  acceptedPlans: ['ppo', 'direct'],
  virtualCare: true,
  feeTier: 'medium',
  gender: 'female',
  careType: 'hybrid'
}, {
  id: 'dr-fujiwara',
  name: 'Dr. Kenji Fujiwara',
  title: 'MD',
  specialty: 'Pediatric primary care',
  clinicId: 'clinic-riverbend',
  biography: 'Pediatrician focused on collaborative family partnerships, neurodiversity affirming care and rapid access messaging.',
  experienceYears: 11,
  rating: 4.8,
  reviewCount: 97,
  avatarUrl: 'assets/figma/search/1814_1186.png',
  highlights: [{
    label: 'Patient panel',
    value: '420 families'
  }, {
    label: 'After-hours chat',
    value: 'Under 15 min'
  }],
  availability: [{
    day: 'Tuesday',
    times: ['09:00', '13:30', '16:00']
  }, {
    day: 'Thursday',
    times: ['10:15', '14:00', '18:30']
  }],
  languages: ['English', 'Japanese'],
  acceptedPlans: ['hmo', 'ppo'],
  virtualCare: true,
  feeTier: 'low',
  gender: 'male',
  careType: 'virtual'
}, {
  id: 'dr-okafor',
  name: 'Dr. Amara Okafor',
  title: 'DO, FACOG',
  specialty: 'Obstetrics & gynecology',
  clinicId: 'clinic-lakeside',
  biography: 'Board certified obstetrician championing equitable maternal care, postpartum support and remote monitoring.',
  experienceYears: 16,
  rating: 4.9,
  reviewCount: 188,
  avatarUrl: 'assets/figma/search/1814_1194.png',
  highlights: [{
    label: 'Deliveries',
    value: '1,240+'
  }, {
    label: 'Cesarean rate',
    value: '12%'
  }],
  availability: [{
    day: 'Monday',
    times: ['08:00', '13:30']
  }, {
    day: 'Wednesday',
    times: ['10:45', '15:15']
  }, {
    day: 'Friday',
    times: ['09:30', '14:45']
  }],
  languages: ['English', 'Igbo'],
  acceptedPlans: ['ppo'],
  virtualCare: false,
  feeTier: 'high',
  gender: 'female',
  careType: 'inperson'
}, {
  id: 'dr-fernandez',
  name: 'Dr. Leo Fernández',
  title: 'PhD, PT',
  specialty: 'Sports physical therapy',
  clinicId: 'clinic-aurora',
  biography: 'Movement specialist using digital twins and progressive rehab for endurance athletes and performing artists.',
  experienceYears: 9,
  rating: 4.7,
  reviewCount: 63,
  avatarUrl: 'assets/figma/search/1814_1202.png',
  highlights: [{
    label: 'Return-to-play',
    value: '92%'
  }, {
    label: 'Avg recovery',
    value: '4.5 weeks'
  }],
  availability: [{
    day: 'Tuesday',
    times: ['08:30', '10:30', '15:00']
  }, {
    day: 'Thursday',
    times: ['09:00', '13:30', '17:00']
  }],
  languages: ['English', 'Spanish'],
  acceptedPlans: ['direct'],
  virtualCare: true,
  feeTier: 'medium',
  gender: 'male',
  careType: 'hybrid'
}];
const MOCK_ORGANIZATIONS = [{
  id: 'org-northstar',
  name: 'Northstar Health Alliance',
  location: 'Denver, CO',
  accreditationLevel: 'Level 3 Coordinated Care',
  logoUrl: 'assets/images/organizations/northstar.svg',
  focusAreas: ['Population health', 'Telehealth expansion', 'Behavioral health integration']
}];
const MOCK_ASSESSMENTS = [{
  id: 'assessment-1',
  organizationId: 'org-northstar',
  title: 'Coordinated Care Readiness Review',
  summary: '360° review of cross-team routing, shared care plans and escalations readiness.',
  category: 'Care coordination',
  progress: 86,
  updatedAt: '2024-03-18T10:15:00Z',
  reviewer: 'Harper Sloan',
  actions: ['Schedule interdisciplinary debrief', 'Publish shared protocols']
}, {
  id: 'assessment-2',
  organizationId: 'org-northstar',
  title: 'Digital Front Door Audit',
  summary: 'Benchmark virtual intake, asynchronous touchpoints and language accessibility.',
  category: 'Digital transformation',
  progress: 72,
  updatedAt: '2024-03-11T14:05:00Z',
  reviewer: 'Kimber Reyes',
  actions: ['Launch Spanish onboarding', 'Integrate triage chatbot insights']
}];
const MOCK_REVIEWS = [{
  id: 'rev-aurora-1',
  doctorId: 'dr-lopez',
  author: 'Riley Cameron',
  role: 'Chronic care member',
  rating: 5,
  createdAt: '2024-02-02T09:00:00Z',
  headline: 'Care plans that finally connect the dots',
  comment: 'DocRoster matched me with Dr. López and I finally have a plan that connects nutrition, meds and stress tracking. Virtual check-ins are so easy.',
  tags: ['Coaching', 'Virtual care', 'Lab syncing']
}, {
  id: 'rev-aurora-2',
  doctorId: 'dr-fernandez',
  author: 'Keisha B.',
  role: 'Marathoner',
  rating: 5,
  createdAt: '2024-01-18T15:30:00Z',
  headline: 'Back in my training cycle weeks sooner',
  comment: 'The rehab plan updated after every wearable upload and the messaging team coached me through the sticky parts. Felt like a pro team.',
  tags: ['Wearables', 'Recovery', 'Community']
}, {
  id: 'rev-riverbend-1',
  doctorId: 'dr-fujiwara',
  author: 'Taylor & Jordan',
  role: 'Parents of a neurodivergent kid',
  rating: 4,
  createdAt: '2024-03-05T12:10:00Z',
  headline: 'Support that spans school and home',
  comment: 'We have direct chat with our care navigator and Dr. Fujiwara loops in therapists quickly. Only wish weekend clinic had more slots.',
  tags: ['Care team', 'Messaging', 'Family support']
}];
const MOCK_FILTERS = [{
  id: 'care-mode',
  title: 'Care delivery mode',
  description: 'Match specialists by how they see patients.',
  type: 'multi',
  options: [{
    id: 'filter-inperson',
    label: 'In-person visits',
    value: 'inperson',
    icon: 'maps_home_work'
  }, {
    id: 'filter-virtual',
    label: 'Virtual first',
    value: 'virtual',
    icon: 'videocam'
  }, {
    id: 'filter-hybrid',
    label: 'Hybrid',
    value: 'hybrid',
    icon: 'sync_alt'
  }]
}, {
  id: 'accessibility',
  title: 'Accessibility preferences',
  type: 'multi',
  options: [{
    id: 'filter-evening',
    label: 'Evening hours',
    value: 'evening',
    icon: 'nightlight'
  }, {
    id: 'filter-weekend',
    label: 'Weekend appointments',
    value: 'weekend',
    icon: 'event'
  }, {
    id: 'filter-transport',
    label: 'Transit friendly',
    value: 'transit',
    icon: 'directions_subway'
  }, {
    id: 'filter-multilingual',
    label: 'Multilingual team',
    value: 'multilingual',
    icon: 'language'
  }]
}, {
  id: 'insurance',
  title: 'Coverage alignment',
  type: 'single',
  options: [{
    id: 'filter-hmo',
    label: 'HMO',
    value: 'hmo'
  }, {
    id: 'filter-ppo',
    label: 'PPO',
    value: 'ppo'
  }, {
    id: 'filter-direct',
    label: 'Direct care',
    value: 'direct'
  }]
}];
const MOCK_SEARCH_RESULTS = MOCK_DOCTORS.map(doctor => ({
  doctor,
  clinic: MOCK_CLINICS.find(clinic => clinic.id === doctor.clinicId),
  distanceInMinutes: 12 + Math.floor(Math.random() * 18),
  nextAvailable: doctor.availability[0]?.times[0] ?? '09:00'
}));
const MOCK_PROFILE = {
  id: 'user-coordinator',
  name: 'Morgan Ellis',
  email: 'morgan.ellis@docroster.com',
  role: 'coordinator',
  avatarUrl: 'assets/images/avatars/morgan-ellis.svg',
  organization: 'DocRoster Pilot Network',
  bio: 'Care operations coordinator aligning teams, analytics and community insights for seamless patient journeys.',
  skills: ['Care coordination', 'Data storytelling', 'Quality improvement'],
  notificationsEnabled: true,
  preferredLanguage: 'English',
  lastLogin: '2024-03-20T08:45:00Z',
  phone: '+1 (416) 123-9870'
};
const MOCK_COMMUNITY_METRICS = {
  membersServed: 18452,
  activeClinics: MOCK_CLINICS.length,
  availableSpecialists: MOCK_DOCTORS.length,
  averageSatisfaction: 4.82
};

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  googleMapsApiKey: 'AIzaSyCD8jcJuPEbDCeE77zbBzhWCY6djGOBq9U',
  googleMapsMapId: 'e59061660b2b49d1bef3986c',
  googleMapsMapStyles: [{
    featureType: 'poi',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    featureType: 'transit.line',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    featureType: 'transit.station.rail',
    stylers: [{
      visibility: 'off'
    }]
  }]
};

/***/ }),

/***/ 5972:
/*!******************************************************************!*\
  !*** ./src/app/shared/data-access/google-maps-loader.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleMapsLoaderService: () => (/* binding */ GoogleMapsLoaderService)
/* harmony export */ });
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ 5708);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;



class GoogleMapsLoaderService {
  constructor() {
    this.loadingPromise = null;
    this.optionsInitialised = false;
  }
  load() {
    if (typeof window !== 'undefined' && window.google?.maps) {
      return Promise.resolve();
    }
    const apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.googleMapsApiKey?.trim();
    if (!apiKey) {
      console.warn('Google Maps API key is not configured. Update googleMapsApiKey in your environment files to enable the interactive map.');
      return Promise.reject(new Error('Missing Google Maps API key'));
    }
    if (!this.loadingPromise) {
      if (!this.optionsInitialised) {
        (0,_googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.setOptions)({
          key: apiKey,
          v: 'weekly'
        });
        this.optionsInitialised = true;
      }
      this.loadingPromise = (0,_googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.importLibrary)('maps').then(() => (0,_googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.importLibrary)('marker')).then(() => void 0).catch(error => {
        this.loadingPromise = null;
        throw error;
      });
    }
    return this.loadingPromise;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function GoogleMapsLoaderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GoogleMapsLoaderService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: GoogleMapsLoaderService,
    factory: GoogleMapsLoaderService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 5990:
/*!*********************************************************!*\
  !*** ./src/app/feature/auth/data-access/auth.facade.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthFacade: () => (/* binding */ AuthFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);
/* harmony import */ var _shared_data_access_mock_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/data-access/mock-http-client.service */ 2592);
var _staticBlock;






class AuthFacade {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_shared_data_access_mock_http_client_service__WEBPACK_IMPORTED_MODULE_6__.MockHttpClientService);
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_5__.DocRosterApiService);
    this.sessionSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "sessionSignal"
    }] : []));
    this.errorSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "errorSignal"
    }] : []));
    this.session = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.sessionSignal(), ...(ngDevMode ? [{
      debugName: "session"
    }] : []));
    this.lastError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.errorSignal(), ...(ngDevMode ? [{
      debugName: "lastError"
    }] : []));
  }
  login(request) {
    this.errorSignal.set(null);
    return this.http.mutate(() => {
      const session = {
        token: crypto.randomUUID(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(),
        userId: request.email.toLowerCase()
      };
      this.sessionSignal.set(session);
      return session;
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      this.errorSignal.set(error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  register(request) {
    this.errorSignal.set(null);
    if (!request.agreeToTerms) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('You must agree to the terms to continue.'));
    }
    return this.http.mutate(() => {
      const session = {
        token: crypto.randomUUID(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 12).toISOString(),
        userId: crypto.randomUUID()
      };
      this.sessionSignal.set(session);
      return session;
    });
  }
  recover(request) {
    this.errorSignal.set(null);
    return this.http.mutate(() => ({
      email: request.email,
      sentAt: new Date().toISOString()
    }));
  }
  uploadAvatar(file) {
    const reference = `avatar-${crypto.randomUUID()}-${file.name}`;
    return this.http.mutate(() => reference);
  }
  verify(request) {
    this.errorSignal.set(null);
    return this.http.mutate(() => request.code.trim().length === 6).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(isValid => {
      if (!isValid) {
        this.errorSignal.set('The verification code is invalid.');
      }
    }));
  }
  loadProfile() {
    return this.api.getUserProfile();
  }
  signOut() {
    this.sessionSignal.set(null);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthFacade)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AuthFacade,
    factory: AuthFacade.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 6991:
/*!*********************************************************!*\
  !*** ./src/app/shared/data-access/map-state.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapStateService: () => (/* binding */ MapStateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;


class MapStateService {
  constructor() {
    this.resultsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "resultsSignal"
    }] : []));
    this.activeDoctorIdSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "activeDoctorIdSignal"
    }] : []));
    this.results = this.resultsSignal.asReadonly();
    this.activeDoctorId = this.activeDoctorIdSignal.asReadonly();
  }
  setResults(results) {
    this.resultsSignal.set(results);
    if (!results.length) {
      this.activeDoctorIdSignal.set(null);
      return;
    }
    const current = this.activeDoctorIdSignal();
    if (!current || !results.some(item => item.doctor.id === current)) {
      this.activeDoctorIdSignal.set(results[0].doctor.id);
    }
  }
  setActiveDoctor(doctorId) {
    this.activeDoctorIdSignal.set(doctorId);
  }
  clear() {
    this.resultsSignal.set([]);
    this.activeDoctorIdSignal.set(null);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MapStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapStateService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MapStateService,
    factory: MapStateService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 8483:
/*!************************************************************!*\
  !*** ./src/app/shared/ui/map-shell/map-shell.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapShellComponent: () => (/* binding */ MapShellComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/google-maps */ 3428);
/* harmony import */ var _data_access_map_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data-access/map-state.service */ 6991);
/* harmony import */ var _data_access_google_maps_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data-access/google-maps-loader.service */ 5972);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








function MapShellComponent_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "map-advanced-marker", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mapClick", function MapShellComponent_ng_container_1_ng_container_3_ng_container_1_Template_map_advanced_marker_mapClick_1_listener() {
      const marker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onMarkerClick(marker_r2.doctorId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MapShellComponent_ng_container_1_ng_container_3_ng_container_1_Template_button_click_2_listener($event) {
      const marker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      ctx_r2.onMarkerClick(marker_r2.doctorId);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    })("keydown.enter", function MapShellComponent_ng_container_1_ng_container_3_ng_container_1_Template_button_keydown_enter_2_listener($event) {
      const marker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      ctx_r2.onMarkerClick(marker_r2.doctorId);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    })("keydown.space", function MapShellComponent_ng_container_1_ng_container_3_ng_container_1_Template_button_keydown_space_2_listener($event) {
      const marker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      ctx_r2.onMarkerClick(marker_r2.doctorId);
      $event.preventDefault();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onMarkerClick(marker_r2.doctorId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const marker_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("position", marker_r2.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-active", marker_r2.doctorId === ctx_r2.mapState.activeDoctorId());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵariaProperty"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinterpolate1"]("View ", marker_r2.title, " details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", marker_r2.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", marker_r2.title);
  }
}
function MapShellComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MapShellComponent_ng_container_1_ng_container_3_ng_container_1_Template, 4, 7, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.markers())("ngForTrackBy", ctx_r2.trackByDoctor);
  }
}
function MapShellComponent_ng_container_1_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "map-marker", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mapClick", function MapShellComponent_ng_container_1_ng_template_4_ng_container_0_Template_map_marker_mapClick_1_listener() {
      const marker_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onMarkerClick(marker_r5.doctorId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const marker_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("position", marker_r5.position)("options", ctx_r2.getFallbackMarkerOptions(marker_r5));
  }
}
function MapShellComponent_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, MapShellComponent_ng_container_1_ng_template_4_ng_container_0_Template, 2, 2, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.markers())("ngForTrackBy", ctx_r2.trackByDoctor);
  }
}
function MapShellComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "google-map", 5, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MapShellComponent_ng_container_1_ng_container_3_Template, 2, 2, "ng-container", 4)(4, MapShellComponent_ng_container_1_ng_template_4_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const fallbackMarkers_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("center", ctx_r2.mapCenter())("options", ctx_r2.mapOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.useAdvancedMarkers)("ngIfElse", fallbackMarkers_r6);
  }
}
function MapShellComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.loadError() ? "Map unavailable" : "Loading map");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.loadError() ? ctx_r2.loadError() : "Fetching locations and interactive map tiles\u2026");
  }
}
class MapShellComponent {
  constructor() {
    this.mapState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_map_state_service__WEBPACK_IMPORTED_MODULE_5__.MapStateService);
    this.mapsLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_data_access_google_maps_loader_service__WEBPACK_IMPORTED_MODULE_6__.GoogleMapsLoaderService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.markers = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
      debugName: "markers"
    }] : []));
    this.mapCenter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
      lat: 43.6532,
      lng: -79.3832
    }, ...(ngDevMode ? [{
      debugName: "mapCenter"
    }] : []));
    this.apiReady = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "apiReady"
    }] : []));
    this.loadError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "loadError"
    }] : []));
    this.mapOptions = {
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      clickableIcons: false,
      mapId: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.googleMapsMapId?.trim() || undefined,
      styles: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.googleMapsMapStyles?.length ? _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.googleMapsMapStyles : undefined
    };
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.effect)(() => {
      this.updateMarkers(this.mapState.results());
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.effect)(() => {
      if (!this.apiReady()) {
        return;
      }
      this.panToActiveMarker(this.mapState.activeDoctorId());
    });
    void this.mapsLoader.load().then(() => {
      if (typeof google === 'undefined' || !google.maps) {
        this.loadError.set('Unable to initialise Google Maps API. Check your API key restrictions.');
        return;
      }
      this.apiReady.set(true);
      this.panToActiveMarker(this.mapState.activeDoctorId());
    }).catch(error => {
      console.error('Failed to load Google Maps script', error);
      this.loadError.set('Map unavailable. Please try again later.');
    });
  }
  onMarkerClick(doctorId) {
    this.mapState.setActiveDoctor(doctorId);
    this.router.navigate(['/specialists', doctorId]);
  }
  updateMarkers(results) {
    const markers = results.map(result => {
      const coordinates = result.clinic.coordinates;
      if (!coordinates) {
        return null;
      }
      return {
        doctorId: result.doctor.id,
        title: result.doctor.name,
        avatar: result.doctor.avatarUrl,
        position: {
          lat: coordinates.latitude,
          lng: coordinates.longitude
        }
      };
    }).filter(marker => marker !== null);
    this.markers.set(markers);
    if (markers.length) {
      this.mapCenter.set(markers[0].position);
      this.fitToMarkers();
    }
  }
  fitToMarkers() {
    const googleMap = this.map?.googleMap;
    const markers = this.markers();
    if (!googleMap || !markers.length || typeof google === 'undefined' || !google.maps) {
      return;
    }
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(marker => bounds.extend(marker.position));
    if (!bounds.isEmpty()) {
      googleMap.fitBounds(bounds, {
        top: 48,
        right: 48,
        bottom: 48,
        left: 48
      });
    }
  }
  panToActiveMarker(activeDoctorId) {
    if (!activeDoctorId) {
      return;
    }
    const googleMap = this.map?.googleMap;
    const markers = this.markers();
    if (!googleMap || !markers.length || typeof google === 'undefined' || !google.maps) {
      return;
    }
    const target = markers.find(marker => marker.doctorId === activeDoctorId);
    if (!target) {
      return;
    }
    googleMap.panTo(target.position);
    if (googleMap.getZoom() && googleMap.getZoom() < 6) {
      googleMap.setZoom(11);
    }
  }
  get useAdvancedMarkers() {
    return Boolean(this.mapOptions.mapId);
  }
  trackByDoctor(_index, marker) {
    return marker.doctorId;
  }
  getFallbackMarkerOptions(marker) {
    const maps = window.google?.maps;
    const isActive = marker.doctorId === this.mapState.activeDoctorId();
    const size = 84;
    const circleRadius = 30;
    const highlightColor = isActive ? '#FF3D96' : '#0A1748';
    const tailColor = isActive ? '#FF3D96' : '#0A1748';
    const clipId = `avatarClip-${marker.doctorId}`;
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
      <svg width="${size}" height="110" viewBox="0 0 ${size} 110" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="${clipId}">
            <circle cx="${size / 2}" cy="${circleRadius + 8}" r="${circleRadius}" />
          </clipPath>
        </defs>
        <path d="M${size / 2},105 L${size / 2 - 12},70 L${size / 2 + 12},70 Z" fill="${tailColor}" opacity="0.95" />
        <circle cx="${size / 2}" cy="${circleRadius + 8}" r="${circleRadius}" fill="${highlightColor}" opacity="0.95" />
        <image href="${marker.avatar}" x="${size / 2 - circleRadius}" y="8" width="${circleRadius * 2}" height="${circleRadius * 2}" clip-path="url(#${clipId})" preserveAspectRatio="xMidYMid slice" />
        <circle cx="${size / 2}" cy="${circleRadius + 8}" r="${circleRadius}" fill="transparent" stroke="#FFFFFF" stroke-width="4" />
      </svg>`;
    if (!maps) {
      return {
        title: marker.title,
        icon: {
          url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
        }
      };
    }
    return {
      icon: {
        url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
        scaledSize: new maps.Size(size, 110),
        anchor: new maps.Point(size / 2, 100)
      }
    };
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MapShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapShellComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: MapShellComponent,
    selectors: [["dr-map-shell"]],
    viewQuery: function MapShellComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_4__.GoogleMap, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
      }
    },
    decls: 4,
    vars: 2,
    consts: [["loading", ""], ["map", ""], ["fallbackMarkers", ""], [1, "map-shell"], [4, "ngIf", "ngIfElse"], ["height", "100%", "width", "100%", 1, "map-shell__map", 3, "center", "options"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mapClick", "position"], ["type", "button", 1, "map-shell__marker", 3, "click", "keydown.enter", "keydown.space", "aria-label"], [3, "src", "alt"], [3, "mapClick", "position", "options"], [1, "map-shell__fallback"], [1, "map-shell__fallback-card"]],
    template: function MapShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MapShellComponent_ng_container_1_Template, 6, 4, "ng-container", 4)(2, MapShellComponent_ng_template_2_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const loading_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.apiReady())("ngIfElse", loading_r7);
      }
    },
    dependencies: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_4__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__.MapAdvancedMarker, _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__.MapMarker, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
    styles: [".map-shell[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n}\n\n.map-shell__map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.map-shell__fallback[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: url('background-large.png') center/cover no-repeat;\n}\n\n.map-shell__fallback-card[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.86);\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.24);\n  text-align: center;\n  color: rgba(61, 122, 255, 0.82);\n}\n.map-shell__fallback-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.map-shell__fallback-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: rgba(61, 122, 255, 0.7);\n}\n\n.map-shell__marker[_ngcontent-%COMP%] {\n  --marker-bg: rgba(10, 23, 72, 0.92);\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  border-radius: 24px;\n  border: 2px solid rgba(255, 255, 255, 0.9);\n  background: var(--marker-bg);\n  color: inherit;\n  padding: 8px;\n  box-shadow: 0 24px 48px rgba(10, 23, 72, 0.35);\n  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n  cursor: pointer;\n}\n.map-shell__marker[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);\n}\n.map-shell__marker[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgba(255, 61, 150, 0.6);\n  outline-offset: 2px;\n}\n.map-shell__marker[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  border-top: 16px solid var(--marker-bg, rgba(10, 23, 72, 0.92));\n  filter: drop-shadow(0 8px 12px rgba(10, 23, 72, 0.25));\n}\n.map-shell__marker.is-active[_ngcontent-%COMP%] {\n  --marker-bg: rgba(255, 61, 150, 0.88);\n  transform: translateY(-6px) scale(1.08);\n  border-color: rgba(255, 255, 255, 0.95);\n  box-shadow: 0 34px 70px rgba(255, 61, 150, 0.32);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL21hcC1zaGVsbC9tYXAtc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhEQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFNQTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7RUFDQSw2RUFBQTtFQUNBLGVBQUE7QUFIRjtBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUFISjtBQU1FO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtBQUpKO0FBT0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0RBQUE7RUFDQSxzREFBQTtBQUxKO0FBUUU7RUFDRSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxnREFBQTtBQU5KIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxuLm1hcC1zaGVsbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5tYXAtc2hlbGxfX21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXAtc2hlbGxfX2ZhbGxiYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ZpZ21hL2xvZ2luL2JhY2tncm91bmQtbGFyZ2UucG5nJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbn1cblxuLm1hcC1zaGVsbF9fZmFsbGJhY2stY2FyZCB7XG4gIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2KTtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDY0cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC44Mik7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBjb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC43KTtcbiAgfVxufVxuXG4ubWFwLXNoZWxsX19tYXJrZXIge1xuICAtLW1hcmtlci1iZzogcmdiYSgxMCwgMjMsIDcyLCAwLjkyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFya2VyLWJnKTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDQ4cHggcmdiYSgxMCwgMjMsIDcyLCAwLjM1KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2UsIGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogM3B4IHNvbGlkIHJnYmEoMjU1LCA2MSwgMTUwLCAwLjYpO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTEycHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgdmFyKC0tbWFya2VyLWJnLCByZ2JhKDEwLCAyMywgNzIsIDAuOTIpKTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgOHB4IDEycHggcmdiYSgxMCwgMjMsIDcyLCAwLjI1KSk7XG4gIH1cblxuICAmLmlzLWFjdGl2ZSB7XG4gICAgLS1tYXJrZXItYmc6IHJnYmEoMjU1LCA2MSwgMTUwLCAwLjg4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCkgc2NhbGUoMS4wOCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICAgIGJveC1zaGFkb3c6IDAgMzRweCA3MHB4IHJnYmEoMjU1LCA2MSwgMTUwLCAwLjMyKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ }),

/***/ 9523:
/*!**************************************************************!*\
  !*** ./src/app/shared/ui/app-footer/app-footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFooterComponent: () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;



function AppFooterComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.label);
  }
}
function AppFooterComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.label);
  }
}
class AppFooterComponent {
  constructor() {
    this.currentYear = new Date().getFullYear();
    this.resources = [{
      label: 'Product roadmap',
      path: '/review/rev-aurora-1'
    }, {
      label: 'Clinical library',
      path: '/search'
    }, {
      label: 'DocRoster pilots',
      path: '/map'
    }];
    this.support = [{
      label: 'Help centre',
      path: '/auth/recover'
    }, {
      label: 'Privacy',
      path: '/profile'
    }, {
      label: 'Status',
      path: '/upload'
    }];
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AppFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppFooterComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppFooterComponent,
    selectors: [["dr-app-footer"]],
    decls: 20,
    vars: 3,
    consts: [[1, "footer"], [1, "container", "footer__grid"], [1, "footer__brand"], [1, "footer__logo"], [1, "footer__section"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "footer__meta"], [3, "routerLink"]],
    template: function AppFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "DocRoster");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Coordinating healthcare stories, assessments and talent in one connected platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppFooterComponent_a_10_Template, 2, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AppFooterComponent_a_14_Template, 2, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6)(16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Designed for the DocRoster pilot preview.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.resources);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.support);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " DocRoster.");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
    styles: [".footer[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(61, 122, 255, 0.08), rgba(33, 177, 40, 0.08));\n  padding-block: 2rem;\n  color: rgba(10, 23, 72, 0.86);\n}\n.footer__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  align-items: start;\n}\n.footer__brand[_ngcontent-%COMP%] {\n  max-width: 320px;\n}\n.footer__brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  line-height: 1.6;\n  color: #6d7ba1;\n}\n.footer__logo[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n.footer__section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n.footer__section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #0a1748;\n}\n.footer__section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6d7ba1;\n  font-weight: 500;\n  transition: color 180ms ease-in-out;\n}\n.footer__section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3d7aff;\n}\n.footer__meta[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  font-size: 0.85rem;\n  color: #6d7ba1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2FwcC1mb290ZXIvYXBwLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0ZBQUE7RUFDQSxtQkNpQlc7RURoQlgsNkJBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLFdDV1M7RURWVCwyREFBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0FBRko7QUFJSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ1phO0FEVW5CO0FBTUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBTEo7QUFPSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQy9CTztBRDBCYjtBQVFJO0VBQ0UsY0NsQ2E7RURtQ2IsZ0JBQUE7RUFDQSxtQ0FBQTtBQU5OO0FBUU07RUFDRSxjQy9DUTtBRHlDaEI7QUFXRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ2xEZTtBRHlDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4wOCksIHJnYmEoJGNvbG9yLXNlY29uZGFyeSwgMC4wOCkpO1xuICBwYWRkaW5nLWJsb2NrOiAkc3BhY2luZy14bDtcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXRleHQsIDAuODYpO1xuXG4gICZfX2dyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAkc3BhY2luZy1sZztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cblxuICAmX19icmFuZCB7XG4gICAgbWF4LXdpZHRoOiAzMjBweDtcblxuICAgIHAge1xuICAgICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBjb2xvcjogJGNvbG9yLXRleHQtbXV0ZWQ7XG4gICAgfVxuICB9XG5cbiAgJl9fbG9nbyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAmX19zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC42NXJlbTtcblxuICAgIGg0IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yICR0cmFuc2l0aW9uLWJhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbWV0YSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDAuNzVyZW07XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tdXRlZDtcbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzZDdhZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWUzYThhO1xuJGNvbG9yLXNlY29uZGFyeTogIzIxYjEyODtcbiRjb2xvci1hY2NlbnQ6ICNmZjNkOTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjZmZjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZWVmMWZmO1xuJGNvbG9yLXRleHQ6ICMwYTE3NDg7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZkN2JhMTtcbiRjb2xvci1ib3JkZXI6ICNkNWRjZjA7XG4kY29sb3Itc3VjY2VzczogIzIxYjEyODtcbiRjb2xvci13YXJuaW5nOiAjZmY1NzNkO1xuJGNvbG9yLWRhbmdlcjogI2ZmM2QwMDtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBEaXNwbGF5JywgJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [502], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map