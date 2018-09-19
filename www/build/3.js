webpackJsonp([3],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuPageModule", function() { return SideMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__side_menu__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SideMenuPageModule = /** @class */ (function () {
    function SideMenuPageModule() {
    }
    SideMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__side_menu__["a" /* SideMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__side_menu__["a" /* SideMenuPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__side_menu__["a" /* SideMenuPage */]
            ]
        })
    ], SideMenuPageModule);
    return SideMenuPageModule;
}());

//# sourceMappingURL=side-menu.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuPage = /** @class */ (function () {
    function SideMenuPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.MENU = {
            DEFAULT: 'menu-components',
            MATERIAL: 'menu-material',
            AVATAR: 'menu-avatar',
            DARK: 'menu-dark',
            RIGHT: 'menu-right',
        };
    }
    // Only enables right side menu for this page. Testing purposes.
    // ionViewWillEnter() {
    //   this.menuCtrl.enable(true, 'menu-right');
    // }
    //
    // ionViewWillLeave() {
    //   this.menuCtrl.enable(false, 'menu-right');
    // }
    SideMenuPage.prototype.changeMenu = function (menu) {
        var _this = this;
        // Disables all other sidemenus
        Object.keys(this.MENU).map(function (k) { return _this.menuCtrl.enable(false, _this.MENU[k]); });
        // Enables then open the selected menu
        this.menuCtrl.enable(true, menu);
        this.menuCtrl.open(menu);
    };
    SideMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-side-menu',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\side-menu\side-menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle="left">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Punto de Venta</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle="right">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding text-center>\n  <img src="https://cdn1.clickthecity.com/images/articles/content/5ab44d50447aa9.46494764.jpg">\n  <h2>Bienvenidos a nuestro punto de venta!</h2>\n  \n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\side-menu\side-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], SideMenuPage);
    return SideMenuPage;
}());

//# sourceMappingURL=side-menu.js.map

/***/ })

});
//# sourceMappingURL=3.js.map