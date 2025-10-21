"use strict";
(self["webpackChunkdoc_roster"] = self["webpackChunkdoc_roster"] || []).push([[76],{

/***/ 9331:
/*!****************************************************************!*\
  !*** ./src/app/shared/ui/review-card/review-card.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewCardComponent: () => (/* binding */ ReviewCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


function ReviewCardComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", tag_r1, "");
  }
}
class ReviewCardComponent {
  static {
    this.ɵfac = function ReviewCardComponent_Factory(t) {
      return new (t || ReviewCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewCardComponent,
      selectors: [["dr-review-card"]],
      inputs: {
        review: "review"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 10,
      consts: [[1, "review-card", "surface"], [1, "review-card__header"], [1, "review-card__date"], [1, "review-card__comment"], [1, "review-card__footer"], ["class", "review-card__tag", 4, "ngFor", "ngForOf"], [1, "review-card__tag"]],
      template: function ReviewCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0)(1, "header", 1)(2, "div")(3, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReviewCardComponent_span_13_Template, 2, 1, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review.headline);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Rated ", ctx.review.rating, "/5 by ", ctx.review.author, " \u00B7 ", ctx.review.role, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, ctx.review.createdAt, "mediumDate"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review.comment);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.review.tags);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgFor],
      styles: [".review-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  padding: clamp(1.5rem, 3vw, 2rem);\n}\n.review-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.review-card__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n}\n.review-card__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0 0;\n  color: #6b7280;\n}\n.review-card__date[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n}\n.review-card__comment[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.7;\n  font-size: 1.02rem;\n}\n.review-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.review-card__tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  font-weight: 500;\n  color: #111827;\n  transition: background 180ms ease-in-out, color 180ms ease-in-out, border-color 180ms ease-in-out;\n  background: rgba(19, 196, 163, 0.12);\n  border: none;\n  color: #13c4a3;\n}\n.review-card__tag--active[_ngcontent-%COMP%] {\n  background: rgba(53, 82, 255, 0.12);\n  color: #3552ff;\n  border-color: rgba(53, 82, 255, 0.4);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL3Jldmlldy1jYXJkL3Jldmlldy1jYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL191dGlsaXRpZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxTQ2NXO0VEYlgsaUNBQUE7QUFGRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0NRUztFRFBULGVBQUE7QUFGSjtBQUlJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBRk47QUFLSTtFQUNFLG9CQUFBO0VBQ0EsY0NiYTtBRFVuQjtBQU9FO0VBQ0UsY0NsQmU7RURtQmYsaUJBQUE7QUFMSjtBQVFFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUEo7QUFVRTtFRUZBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CRHhDYztFQ3lDZCwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0R6Q1c7RUMwQ1gsaUdBQUE7RUZMRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQzVDYztBRDZDbEI7QUVJRTtFQUNFLG1DQUFBO0VBQ0EsY0RyRFk7RUNzRFosb0NBQUE7QUZGSiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3N0eWxlcy92YXJpYWJsZXMnIGFzICo7XG5AdXNlICdzdHlsZXMvdXRpbGl0aWVzJyBhcyB1dGlsO1xuXG4ucmV2aWV3LWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6ICRzcGFjaW5nLW1kO1xuICBwYWRkaW5nOiBjbGFtcCgxLjVyZW0sIDN2dywgMnJlbSk7XG5cbiAgJl9faGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6ICRzcGFjaW5nLW1kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMC40cmVtIDAgMCAwO1xuICAgICAgY29sb3I6ICRjb2xvci10ZXh0LW11dGVkO1xuICAgIH1cbiAgfVxuXG4gICZfX2RhdGUge1xuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1tdXRlZDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuXG4gICZfX2NvbW1lbnQge1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICAgIGZvbnQtc2l6ZTogMS4wMnJlbTtcbiAgfVxuXG4gICZfX2Zvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cblxuICAmX190YWcge1xuICAgIEBpbmNsdWRlIHV0aWwuY2hpcDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1zZWNvbmRhcnksIDAuMTIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgfVxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzNTUyZmY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMWYzYmIzO1xuJGNvbG9yLXNlY29uZGFyeTogIzEzYzRhMztcbiRjb2xvci1hY2NlbnQ6ICNmOTczMTY7XG4kY29sb3ItYmFja2dyb3VuZDogI2Y1ZjdmYjtcbiRjb2xvci1zdXJmYWNlOiAjZmZmZmZmO1xuJGNvbG9yLXN1cmZhY2UtYWx0OiAjZjlmYWZjO1xuJGNvbG9yLXRleHQ6ICMxMTE4Mjc7XG4kY29sb3ItdGV4dC1tdXRlZDogIzZiNzI4MDtcbiRjb2xvci1ib3JkZXI6ICNlMmU4ZjA7XG4kY29sb3Itc3VjY2VzczogIzE2YTM0YTtcbiRjb2xvci13YXJuaW5nOiAjZmFjYzE1O1xuJGNvbG9yLWRhbmdlcjogI2RjMjYyNjtcbiRyYWRpdXMteGw6IDI0cHg7XG4kcmFkaXVzLWxnOiAxNnB4O1xuJHJhZGl1cy1tZDogMTJweDtcbiRyYWRpdXMtc206IDhweDtcbiRzcGFjaW5nLXhzOiAwLjVyZW07XG4kc3BhY2luZy1zbTogMC43NXJlbTtcbiRzcGFjaW5nLW1kOiAxcmVtO1xuJHNwYWNpbmctbGc6IDEuNXJlbTtcbiRzcGFjaW5nLXhsOiAycmVtO1xuJHNwYWNpbmcteHhsOiAzcmVtO1xuJHNoYWRvdy1zb2Z0OiAwIDIwcHggNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuJHNoYWRvdy1jYXJkOiAwIDI0cHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuJHRyYW5zaXRpb24tYmFzZTogMTgwbXMgZWFzZS1pbi1vdXQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ0ludGVyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4kbWF4LWNvbnRlbnQtd2lkdGg6IDExODBweDtcbiIsIkB1c2UgJ3ZhcmlhYmxlcycgYXMgKjtcblxuQG1peGluIGJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4xMik7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuQG1peGluIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRjb2xvci1wcmltYXJ5LCAkY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgY29sb3I6ICRjb2xvci1zdXJmYWNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb24tYmFzZSwgYm94LXNoYWRvdyAkdHJhbnNpdGlvbi1iYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWNhcmQ7XG4gIH1cblxuICAmLS1naG9zdCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC4wOCk7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICB9XG59XG5cbkBtaXhpbiBjaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1zdXJmYWNlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ib3JkZXIsIDAuOCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAkY29sb3ItdGV4dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAkdHJhbnNpdGlvbi1iYXNlLCBjb2xvciAkdHJhbnNpdGlvbi1iYXNlLCBib3JkZXItY29sb3IgJHRyYW5zaXRpb24tYmFzZTtcblxuICAmLS1hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


function TagListComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1);
  }
}
class TagListComponent {
  constructor() {
    this.tags = [];
  }
  static {
    this.ɵfac = function TagListComponent_Factory(t) {
      return new (t || TagListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagListComponent,
      selectors: [["dr-tag-list"]],
      inputs: {
        tags: "tags"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 1,
      consts: [[1, "tag-list"], [4, "ngFor", "ngForOf"]],
      template: function TagListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagListComponent_li_1_Template, 2, 1, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgFor],
      styles: [".tag-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.tag-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  font-weight: 500;\n  color: #111827;\n  transition: background 180ms ease-in-out, color 180ms ease-in-out, border-color 180ms ease-in-out;\n  font-size: 0.85rem;\n}\n.tag-list[_ngcontent-%COMP%]   li--active[_ngcontent-%COMP%] {\n  background: rgba(53, 82, 255, 0.12);\n  color: #3552ff;\n  border-color: rgba(53, 82, 255, 0.4);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL3RhZy1saXN0L3RhZy1saXN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdXRpbGl0aWVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VDNkJBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQ3hDYztFRHlDZCwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0N6Q1c7RUQwQ1gsaUdBQUE7RURwQ0Usa0JBQUE7QUFPSjtBQytCRTtFQUNFLG1DQUFBO0VBQ0EsY0NyRFk7RURzRFosb0NBQUE7QUQ3QkoiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xuQHVzZSAnc3R5bGVzL3V0aWxpdGllcycgYXMgdXRpbDtcblxuLnRhZy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIGxpIHtcbiAgICBAaW5jbHVkZSB1dGlsLmNoaXA7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG59XG4iLCJAdXNlICd2YXJpYWJsZXMnIGFzICo7XG5cbkBtaXhpbiBiYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMTIpO1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG59XG5cbkBtaXhpbiBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkY29sb3ItcHJpbWFyeSwgJGNvbG9yLXByaW1hcnktZGFyayk7XG4gIGNvbG9yOiAkY29sb3Itc3VyZmFjZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR0cmFuc2l0aW9uLWJhc2UsIGJveC1zaGFkb3cgJHRyYW5zaXRpb24tYmFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1jYXJkO1xuICB9XG5cbiAgJi0tZ2hvc3Qge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuMDgpO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgfVxufVxuXG5AbWl4aW4gY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAkY29sb3Itc3VyZmFjZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItYm9yZGVyLCAwLjgpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgJHRyYW5zaXRpb24tYmFzZSwgY29sb3IgJHRyYW5zaXRpb24tYmFzZSwgYm9yZGVyLWNvbG9yICR0cmFuc2l0aW9uLWJhc2U7XG5cbiAgJi0tYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjEyKTtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci1wcmltYXJ5LCAwLjQpO1xuICB9XG59XG4iLCIkY29sb3ItcHJpbWFyeTogIzM1NTJmZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMxZjNiYjM7XG4kY29sb3Itc2Vjb25kYXJ5OiAjMTNjNGEzO1xuJGNvbG9yLWFjY2VudDogI2Y5NzMxNjtcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZjVmN2ZiO1xuJGNvbG9yLXN1cmZhY2U6ICNmZmZmZmY7XG4kY29sb3Itc3VyZmFjZS1hbHQ6ICNmOWZhZmM7XG4kY29sb3ItdGV4dDogIzExMTgyNztcbiRjb2xvci10ZXh0LW11dGVkOiAjNmI3MjgwO1xuJGNvbG9yLWJvcmRlcjogI2UyZThmMDtcbiRjb2xvci1zdWNjZXNzOiAjMTZhMzRhO1xuJGNvbG9yLXdhcm5pbmc6ICNmYWNjMTU7XG4kY29sb3ItZGFuZ2VyOiAjZGMyNjI2O1xuJHJhZGl1cy14bDogMjRweDtcbiRyYWRpdXMtbGc6IDE2cHg7XG4kcmFkaXVzLW1kOiAxMnB4O1xuJHJhZGl1cy1zbTogOHB4O1xuJHNwYWNpbmcteHM6IDAuNXJlbTtcbiRzcGFjaW5nLXNtOiAwLjc1cmVtO1xuJHNwYWNpbmctbWQ6IDFyZW07XG4kc3BhY2luZy1sZzogMS41cmVtO1xuJHNwYWNpbmcteGw6IDJyZW07XG4kc3BhY2luZy14eGw6IDNyZW07XG4kc2hhZG93LXNvZnQ6IDAgMjBweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4kc2hhZG93LWNhcmQ6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG4kdHJhbnNpdGlvbi1iYXNlOiAxODBtcyBlYXNlLWluLW91dDtcbiRmb250LWZhbWlseS1iYXNlOiAnSW50ZXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiRtYXgtY29udGVudC13aWR0aDogMTE4MHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map