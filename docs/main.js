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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_ui_navigation_header_navigation_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/ui/navigation-header/navigation-header.component */ 491);
/* harmony import */ var _shared_ui_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/ui/app-footer/app-footer.component */ 9523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 0,
      consts: [[1, "app-shell"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "dr-navigation-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "dr-app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_ui_navigation_header_navigation_header_component__WEBPACK_IMPORTED_MODULE_0__.NavigationHeaderComponent, _shared_ui_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_1__.AppFooterComponent],
      styles: ["main[_ngcontent-%COMP%] {\n  padding-block: clamp(2rem, 4vw, 3.5rem);\n}\n\n@media (max-width: 600px) {\n  main[_ngcontent-%COMP%] {\n    padding-block: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUNBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UscUJBQUE7RUFERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcblxubWFpbiB7XG4gIHBhZGRpbmctYmxvY2s6IGNsYW1wKDJyZW0sIDR2dywgMy41cmVtKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmctYmxvY2s6IDEuNXJlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);




const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.withViewTransitions)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.withInMemoryScrolling)({
    scrollPositionRestoration: 'enabled'
  })), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.withFetch)())]
};

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
const routes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(541), __webpack_require__.e(435), __webpack_require__.e(670)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/map/ui/map-page.component */ 2670)).then(m => m.MapPageComponent),
  title: 'DocRoster — Explore healthcare on the map'
}, {
  path: 'search',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(541), __webpack_require__.e(74), __webpack_require__.e(874), __webpack_require__.e(422)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/search/ui/search-page.component */ 1422)).then(m => m.SearchPageComponent),
  title: 'DocRoster — Search specialists'
}, {
  path: 'filters',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(541), __webpack_require__.e(74), __webpack_require__.e(874), __webpack_require__.e(76), __webpack_require__.e(892)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/filters/ui/filters-page.component */ 892)).then(m => m.FiltersPageComponent),
  title: 'DocRoster — Smart filters'
}, {
  path: 'specialists/:id',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(435), __webpack_require__.e(76), __webpack_require__.e(714)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/specialist/ui/specialist-page.component */ 9714)).then(m => m.SpecialistPageComponent),
  title: 'DocRoster — Specialist profile'
}, {
  path: 'organizations/:id/assessments',
  loadComponent: () => __webpack_require__.e(/*! import() */ 609).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/organizations/ui/organization-assessments-page.component */ 9609)).then(m => m.OrganizationAssessmentsPageComponent),
  title: 'DocRoster — Organization assessments'
}, {
  path: 'profile',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(74), __webpack_require__.e(76), __webpack_require__.e(488)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/profile/ui/profile-page.component */ 3488)).then(m => m.ProfilePageComponent),
  title: 'DocRoster — Your profile'
}, {
  path: 'upload',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(456), __webpack_require__.e(50)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/upload/ui/upload-page.component */ 2050)).then(m => m.UploadPageComponent),
  title: 'DocRoster — Upload assessments'
}, {
  path: 'review/:id',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(541), __webpack_require__.e(76), __webpack_require__.e(566)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/review/ui/review-page.component */ 6566)).then(m => m.ReviewPageComponent),
  title: 'DocRoster — Review submission'
}, {
  path: 'auth',
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }, {
    path: 'login',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(456), __webpack_require__.e(187)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/auth/ui/login-page.component */ 8187)).then(m => m.LoginPageComponent),
    title: 'DocRoster — Sign in'
  }, {
    path: 'register',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(456), __webpack_require__.e(63)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/auth/ui/register-page.component */ 5063)).then(m => m.RegisterPageComponent),
    title: 'DocRoster — Create account'
  }, {
    path: 'recover',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(456), __webpack_require__.e(768)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/auth/ui/recover-page.component */ 5768)).then(m => m.RecoverPageComponent),
    title: 'DocRoster — Recover access'
  }, {
    path: 'verify',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(456), __webpack_require__.e(851)]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/auth/ui/verify-page.component */ 1851)).then(m => m.VerifyPageComponent),
    title: 'DocRoster — Verify identity'
  }]
}, {
  path: '**',
  redirectTo: ''
}];

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/data-access/mocks/doc-roster.mocks */ 4981);
/* harmony import */ var _shared_data_access_mock_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data-access/mock-http-client.service */ 2592);





class DocRosterApiService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_shared_data_access_mock_http_client_service__WEBPACK_IMPORTED_MODULE_1__.MockHttpClientService);
    this.metricsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_COMMUNITY_METRICS);
    this.metrics = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.metricsSignal());
  }
  getClinics() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_CLINICS);
  }
  getClinicById(id) {
    return this.getClinics().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(clinics => clinics.find(clinic => clinic.id === id)));
  }
  getDoctors() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_DOCTORS);
  }
  getDoctorById(id) {
    return this.getDoctors().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(doctors => doctors.find(doctor => doctor.id === id)));
  }
  getOrganizations() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_ORGANIZATIONS);
  }
  getAssessmentsByOrganization(organizationId) {
    const assessments = _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_ASSESSMENTS.filter(assessment => assessment.organizationId === organizationId);
    return this.http.get(assessments);
  }
  getReviewsForDoctor(doctorId) {
    const reviews = _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_REVIEWS.filter(review => review.doctorId === doctorId);
    return this.http.get(reviews);
  }
  getReviewById(reviewId) {
    const review = _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_REVIEWS.find(item => item.id === reviewId);
    return this.http.get(review);
  }
  getFilters() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_FILTERS);
  }
  getSearchResults() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_SEARCH_RESULTS);
  }
  getUserProfile() {
    return this.http.get(_shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_PROFILE);
  }
  updateNotificationPreference(enabled) {
    return this.http.mutate(() => {
      const nextProfile = {
        ..._shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_PROFILE,
        notificationsEnabled: enabled
      };
      _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_0__.MOCK_PROFILE.notificationsEnabled = enabled;
      return nextProfile;
    });
  }
  static {
    this.ɵfac = function DocRosterApiService_Factory(t) {
      return new (t || DocRosterApiService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DocRosterApiService,
      factory: DocRosterApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data-access/doc-roster-api.service */ 3944);
/* harmony import */ var _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/data-access/mocks/doc-roster.mocks */ 4981);
/* harmony import */ var _shared_data_access_mock_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/data-access/mock-http-client.service */ 2592);







class AuthFacade {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_shared_data_access_mock_http_client_service__WEBPACK_IMPORTED_MODULE_2__.MockHttpClientService);
    this.api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_data_access_doc_roster_api_service__WEBPACK_IMPORTED_MODULE_0__.DocRosterApiService);
    this.sessionSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(null);
    this.errorSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(null);
    this.session = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => this.sessionSignal());
    this.lastError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => this.errorSignal());
  }
  login(request) {
    this.errorSignal.set(null);
    return this.http.mutate(() => {
      const isValidUser = request.email.toLowerCase() === _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_1__.MOCK_PROFILE.email.toLowerCase() && request.password.length >= 6;
      if (!isValidUser) {
        throw new Error('The email or password is incorrect.');
      }
      const session = {
        token: crypto.randomUUID(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(),
        userId: _shared_data_access_mocks_doc_roster_mocks__WEBPACK_IMPORTED_MODULE_1__.MOCK_PROFILE.id
      };
      this.sessionSignal.set(session);
      return session;
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      this.errorSignal.set(error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  register(request) {
    this.errorSignal.set(null);
    if (request.password !== request.confirmPassword) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('Passwords do not match.'));
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
  verify(request) {
    this.errorSignal.set(null);
    return this.http.mutate(() => request.code.trim().length === 6).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(isValid => {
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
  static {
    this.ɵfac = function AuthFacade_Factory(t) {
      return new (t || AuthFacade)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthFacade,
      factory: AuthFacade.ɵfac,
      providedIn: 'root'
    });
  }
}

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



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
  static {
    this.ɵfac = function MockHttpClientService_Factory(t) {
      return new (t || MockHttpClientService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MockHttpClientService,
      factory: MockHttpClientService.ɵfac,
      providedIn: 'root'
    });
  }
}
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
  heroImage: 'assets/images/aurora-clinic.jpg',
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
  heroImage: 'assets/images/riverbend.jpg',
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
  heroImage: 'assets/images/lakeside.jpg',
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
  avatarUrl: 'assets/images/doctors/mariah-lopez.png',
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
  virtualCare: true
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
  avatarUrl: 'assets/images/doctors/kenji-fujiwara.png',
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
  virtualCare: true
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
  avatarUrl: 'assets/images/doctors/amara-okafor.png',
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
  virtualCare: false
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
  avatarUrl: 'assets/images/doctors/leo-fernandez.png',
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
  virtualCare: true
}];
const MOCK_ORGANIZATIONS = [{
  id: 'org-northstar',
  name: 'Northstar Health Alliance',
  location: 'Denver, CO',
  accreditationLevel: 'Level 3 Coordinated Care',
  logoUrl: 'assets/images/organizations/northstar.png',
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
  avatarUrl: 'assets/images/avatars/morgan-ellis.png',
  organization: 'DocRoster Pilot Network',
  bio: 'Care operations coordinator aligning teams, analytics and community insights for seamless patient journeys.',
  skills: ['Care coordination', 'Data storytelling', 'Quality improvement'],
  notificationsEnabled: true,
  preferredLanguage: 'English',
  lastLogin: '2024-03-20T08:45:00Z'
};
const MOCK_COMMUNITY_METRICS = {
  membersServed: 18452,
  activeClinics: MOCK_CLINICS.length,
  availableSpecialists: MOCK_DOCTORS.length,
  averageSatisfaction: 4.82
};

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function AppFooterComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
  }
}
function AppFooterComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
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
  static {
    this.ɵfac = function AppFooterComponent_Factory(t) {
      return new (t || AppFooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppFooterComponent,
      selectors: [["dr-app-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 3,
      consts: [[1, "footer"], [1, "container", "footer__grid"], [1, "footer__brand"], [1, "footer__logo"], [1, "footer__section"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "footer__meta"], [3, "routerLink"]],
      template: function AppFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DocRoster");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Coordinating healthcare stories, assessments and talent in one connected platform.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Resources");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppFooterComponent_a_10_Template, 2, 2, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppFooterComponent_a_14_Template, 2, 2, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6)(16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Designed for the DocRoster pilot preview.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resources);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.support);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " DocRoster.");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgFor],
      styles: [".footer[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(53, 82, 255, 0.08), rgba(19, 196, 163, 0.08));\n  padding-block: 2rem;\n  color: rgba(17, 24, 39, 0.86);\n}\n.footer__grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  align-items: start;\n}\n.footer__brand[_ngcontent-%COMP%] {\n  max-width: 320px;\n}\n.footer__brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  line-height: 1.6;\n  color: #6b7280;\n}\n.footer__logo[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n.footer__section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n.footer__section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #111827;\n}\n.footer__section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-weight: 500;\n  transition: color 180ms ease-in-out;\n}\n.footer__section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3552ff;\n}\n.footer__meta[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  font-size: 0.85rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2FwcC1mb290ZXIvYXBwLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0ZBQUE7RUFDQSxtQkNpQlc7RURoQlgsNkJBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLFdDV1M7RURWVCwyREFBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0FBRko7QUFJSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ1phO0FEVW5CO0FBTUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBTEo7QUFPSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQy9CTztBRDBCYjtBQVFJO0VBQ0UsY0NsQ2E7RURtQ2IsZ0JBQUE7RUFDQSxtQ0FBQTtBQU5OO0FBUU07RUFDRSxjQy9DUTtBRHlDaEI7QUFXRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ2xEZTtBRHlDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4wOCksIHJnYmEoJGNvbG9yLXNlY29uZGFyeSwgMC4wOCkpO1xuICBwYWRkaW5nLWJsb2NrOiAkc3BhY2luZy14bDtcbiAgY29sb3I6IHJnYmEoJGNvbG9yLXRleHQsIDAuODYpO1xuXG4gICZfX2dyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAkc3BhY2luZy1sZztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cblxuICAmX19icmFuZCB7XG4gICAgbWF4LXdpZHRoOiAzMjBweDtcblxuICAgIHAge1xuICAgICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBjb2xvcjogJGNvbG9yLXRleHQtbXV0ZWQ7XG4gICAgfVxuICB9XG5cbiAgJl9fbG9nbyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAmX19zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC42NXJlbTtcblxuICAgIGg0IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yICR0cmFuc2l0aW9uLWJhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbWV0YSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDAuNzVyZW07XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tdXRlZDtcbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzNTUyZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWYzYmIzO1xuJGNvbG9yLXNlY29uZGFyeTogIzEzYzRhMztcbiRjb2xvci1hY2NlbnQ6ICNmOTczMTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjdmYjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZjlmYWZjO1xuJGNvbG9yLXRleHQ6ICMxMTE4Mjc7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZiNzI4MDtcbiRjb2xvci1ib3JkZXI6ICNlMmU4ZjA7XG4kY29sb3Itc3VjY2VzczogIzE2YTM0YTtcbiRjb2xvci13YXJuaW5nOiAjZmFjYzE1O1xuJGNvbG9yLWRhbmdlcjogI2RjMjYyNjtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _feature_auth_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../feature/auth/data-access/auth.facade */ 5990);





function NavigationHeaderComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationHeaderComponent_a_8_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r4.label);
  }
}
function NavigationHeaderComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavigationHeaderComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationHeaderComponent_ng_template_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.signOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class NavigationHeaderComponent {
  constructor() {
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_feature_auth_data_access_auth_facade__WEBPACK_IMPORTED_MODULE_0__.AuthFacade);
    this.menuOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.links = [{
      label: 'Map',
      path: '/'
    }, {
      label: 'Search',
      path: '/search'
    }, {
      label: 'Filters',
      path: '/filters'
    }, {
      label: 'Assessments',
      path: '/organizations/org-northstar/assessments'
    }, {
      label: 'Upload',
      path: '/upload'
    }];
    this.isAuthenticated = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => Boolean(this.auth.session()));
  }
  toggleMenu() {
    this.menuOpen.update(open => !open);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }
  signOut() {
    this.auth.signOut();
    this.closeMenu();
  }
  static {
    this.ɵfac = function NavigationHeaderComponent_Factory(t) {
      return new (t || NavigationHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavigationHeaderComponent,
      selectors: [["dr-navigation-header"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 7,
      consts: [["accountLink", ""], [1, "navigation"], [1, "navigation__inner", "container"], ["routerLink", "/", 1, "navigation__brand", 3, "click"], [1, "navigation__logo"], [1, "navigation__beta"], [1, "navigation__links"], ["routerLink", "link.path", "routerLinkActive", "navigation__link--active", "class", "navigation__link", 3, "click", 4, "ngFor", "ngForOf"], [1, "navigation__actions"], ["routerLink", "/review/rev-aurora-1", 1, "navigation__action", "navigation__action--ghost"], ["class", "navigation__action", "routerLink", "/auth/login", 4, "ngIf", "ngIfElse"], ["type", "button", 1, "navigation__menu", 3, "click"], ["routerLink", "link.path", "routerLinkActive", "navigation__link--active", 1, "navigation__link", 3, "click"], ["routerLink", "/auth/login", 1, "navigation__action"], ["type", "button", 1, "navigation__action", 3, "click"]],
      template: function NavigationHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 1)(1, "div", 2)(2, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationHeaderComponent_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.closeMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "DocRoster");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Pilot");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavigationHeaderComponent_a_8_Template, 2, 1, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Community stories");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NavigationHeaderComponent_a_12_Template, 2, 0, "a", 10)(13, NavigationHeaderComponent_ng_template_13_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationHeaderComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.toggleMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span")(17, "span")(18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const accountLink_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("navigation--open", ctx.menuOpen());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("navigation__links--visible", ctx.menuOpen());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated())("ngIfElse", accountLink_r6);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor],
      styles: [".navigation[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.94);\n  backdrop-filter: blur(18px);\n  border-bottom: 1px solid rgba(226, 232, 240, 0.7);\n}\n.navigation__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 72px;\n  gap: 1rem;\n}\n.navigation__brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 700;\n  font-size: 1.15rem;\n  color: #111827;\n}\n.navigation__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem 0.9rem;\n  border-radius: 999px;\n  background: linear-gradient(135deg, #3552ff, #1f3bb3);\n  color: #ffffff;\n  letter-spacing: 0.04em;\n}\n.navigation__beta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #3552ff;\n  background: rgba(53, 82, 255, 0.12);\n  border-radius: 999px;\n  padding: 0.25rem 0.75rem;\n}\n.navigation__links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n@media (max-width: 960px) {\n  .navigation__links[_ngcontent-%COMP%] {\n    position: absolute;\n    inset: 72px 0 auto 0;\n    flex-direction: column;\n    align-items: flex-start;\n    background: #ffffff;\n    padding: 1.5rem;\n    border-bottom: 1px solid rgba(226, 232, 240, 0.8);\n    transform-origin: top;\n    transform: scaleY(0);\n    opacity: 0;\n    pointer-events: none;\n    transition: transform 180ms ease-in-out, opacity 180ms ease-in-out;\n  }\n  .navigation__links--visible[_ngcontent-%COMP%] {\n    transform: scaleY(1);\n    opacity: 1;\n    pointer-events: auto;\n  }\n}\n.navigation__link[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  border-radius: 12px;\n  color: #6b7280;\n  font-weight: 500;\n  transition: background 180ms ease-in-out, color 180ms ease-in-out;\n}\n.navigation__link[_ngcontent-%COMP%]:hover {\n  background: rgba(53, 82, 255, 0.12);\n  color: #3552ff;\n}\n.navigation__link--active[_ngcontent-%COMP%] {\n  background: rgba(53, 82, 255, 0.18);\n  color: #3552ff;\n  font-weight: 600;\n}\n.navigation__actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.navigation__action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 999px;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: linear-gradient(135deg, #3552ff, #1f3bb3);\n  color: #ffffff;\n  transition: transform 180ms ease-in-out, box-shadow 180ms ease-in-out;\n  padding-block: 0.6rem;\n  padding-inline: 1.35rem;\n  font-size: 0.95rem;\n}\n.navigation__action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);\n}\n.navigation__action--ghost[_ngcontent-%COMP%] {\n  background: rgba(53, 82, 255, 0.08);\n  color: #3552ff;\n}\n.navigation__action--ghost[_ngcontent-%COMP%] {\n  background: rgba(53, 82, 255, 0.08);\n  color: #3552ff;\n}\n@media (max-width: 960px) {\n  .navigation__action[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navigation__menu[_ngcontent-%COMP%] {\n  display: none;\n  background: transparent;\n  border: none;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding: 0.5rem;\n}\n.navigation__menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 2px;\n  border-radius: 999px;\n  background: #111827;\n}\n@media (max-width: 960px) {\n  .navigation__menu[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n.navigation--open[_ngcontent-%COMP%]   .navigation__action[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 960px) {\n  .navigation--open[_ngcontent-%COMP%]   .navigation__actions[_ngcontent-%COMP%] {\n    align-items: flex-end;\n  }\n  .navigation--open[_ngcontent-%COMP%]   .navigation__action[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL25hdmlnYXRpb24taGVhZGVyL25hdmlnYXRpb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL191dGlsaXRpZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaURBQUE7QUFGRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFNDR1M7QURMYjtBQUtFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0NsQlM7QURlYjtBQU1FO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFEQUFBO0VBQ0EsY0M5Qlk7RUQrQlosc0JBQUE7QUFKSjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNDMUNZO0VEMkNaLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQUxKO0FBUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBTko7QUFRSTtFQUxGO0lBTUksa0JBQUE7SUFDQSxvQkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkNyRFU7SURzRFYsZUFBQTtJQUNBLGlEQUFBO0lBQ0EscUJBQUE7SUFDQSxvQkFBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtJQUNBLGtFQUFBO0VBTEo7RUFPSTtJQUNFLG9CQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0VBTE47QUFDRjtBQVNFO0VBQ0Usb0JBQUE7RUFDQSxtQkM5RFE7RUQrRFIsY0N0RWU7RUR1RWYsZ0JBQUE7RUFDQSxpRUFBQTtBQVBKO0FBU0k7RUFDRSxtQ0FBQTtFQUNBLGNDcEZVO0FENkVoQjtBQVVJO0VBQ0UsbUNBQUE7RUFDQSxjQ3pGVTtFRDBGVixnQkFBQTtBQVJOO0FBWUU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVZKO0FBYUU7RUVyRkEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7RUFDQSxjRHBCYztFQ3FCZCxxRUFBQTtFRjRFRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBRTVFRTtFQUNFLDJCQUFBO0VBQ0EsOENETlU7QURvRmQ7QUUzRUU7RUFDRSxtQ0FBQTtFQUNBLGNEbkNZO0FEZ0hoQjtBQU5JO0VBQ0UsbUNBQUE7RUFDQSxjQzVHVTtBRG9IaEI7QUFMSTtFQVhGO0lBWUksYUFBQTtFQVFKO0FBQ0Y7QUFMRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBT0o7QUFMSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkN6SE87QURnSWI7QUFKSTtFQWZGO0lBZ0JJLG9CQUFBO0VBT0o7QUFDRjtBQUhJO0VBQ0UsYUFBQTtBQUtOO0FBRkk7RUFDRTtJQUNFLHFCQUFBO0VBSU47RUFESTtJQUNFLG9CQUFBO0VBR047QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3N0eWxlcy92YXJpYWJsZXMnIGFzICo7XG5AdXNlICdzdHlsZXMvdXRpbGl0aWVzJyBhcyB1dGlsO1xuXG4ubmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3Itc3VyZmFjZSwgMC45NCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLWJvcmRlciwgMC43KTtcblxuICAmX19pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtaW4taGVpZ2h0OiA3MnB4O1xuICAgIGdhcDogJHNwYWNpbmctbWQ7XG4gIH1cblxuICAmX19icmFuZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgY29sb3I6ICRjb2xvci10ZXh0O1xuICB9XG5cbiAgJl9fbG9nbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjM1cmVtIDAuOXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkY29sb3ItcHJpbWFyeSwgJGNvbG9yLXByaW1hcnktZGFyayk7XG4gICAgY29sb3I6ICRjb2xvci1zdXJmYWNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIH1cblxuICAmX19iZXRhIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4xMik7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICB9XG5cbiAgJl9fbGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiA3MnB4IDAgYXV0byAwO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXN1cmZhY2U7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3ItYm9yZGVyLCAwLjgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb24tYmFzZSwgb3BhY2l0eSAkdHJhbnNpdGlvbi1iYXNlO1xuXG4gICAgICAmLS12aXNpYmxlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2xpbmsge1xuICAgIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtbWQ7XG4gICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAkdHJhbnNpdGlvbi1iYXNlLCBjb2xvciAkdHJhbnNpdGlvbi1iYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjEyKTtcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB9XG5cbiAgICAmLS1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4xOCk7XG4gICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuXG4gICZfX2FjdGlvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICB9XG5cbiAgJl9fYWN0aW9uIHtcbiAgICBAaW5jbHVkZSB1dGlsLmJ1dHRvbjtcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjZyZW07XG4gICAgcGFkZGluZy1pbmxpbmU6IDEuMzVyZW07XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuXG4gICAgJi0tZ2hvc3Qge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4wOCk7XG4gICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZfX21lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjM1cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcblxuICAgIHNwYW4ge1xuICAgICAgd2lkdGg6IDIycHg7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXRleHQ7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB9XG4gIH1cblxuICAmLS1vcGVuIHtcbiAgICAubmF2aWdhdGlvbl9fYWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAubmF2aWdhdGlvbl9fYWN0aW9ucyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLm5hdmlnYXRpb25fX2FjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzNTUyZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWYzYmIzO1xuJGNvbG9yLXNlY29uZGFyeTogIzEzYzRhMztcbiRjb2xvci1hY2NlbnQ6ICNmOTczMTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjdmYjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZjlmYWZjO1xuJGNvbG9yLXRleHQ6ICMxMTE4Mjc7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZiNzI4MDtcbiRjb2xvci1ib3JkZXI6ICNlMmU4ZjA7XG4kY29sb3Itc3VjY2VzczogIzE2YTM0YTtcbiRjb2xvci13YXJuaW5nOiAjZmFjYzE1O1xuJGNvbG9yLWRhbmdlcjogI2RjMjYyNjtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiIsIkB1c2UgJ3ZhcmlhYmxlcycgYXMgKjtcblxuQG1peGluIGJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4xMik7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuQG1peGluIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRjb2xvci1wcmltYXJ5LCAkY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgY29sb3I6ICRjb2xvci1zdXJmYWNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb24tYmFzZSwgYm94LXNoYWRvdyAkdHJhbnNpdGlvbi1iYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWNhcmQ7XG4gIH1cblxuICAmLS1naG9zdCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4wOCk7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICB9XG59XG5cbkBtaXhpbiBjaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuOCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAkY29sb3ItdGV4dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAkdHJhbnNpdGlvbi1iYXNlLCBjb2xvciAkdHJhbnNpdGlvbi1iYXNlLCBib3JkZXItY29sb3IgJHRyYW5zaXRpb24tYmFzZTtcblxuICAmLS1hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 289);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [502], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map