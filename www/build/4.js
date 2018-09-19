webpackJsonp([4],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorDetallePageModule", function() { return ProveedorDetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proveedor_detalle__ = __webpack_require__(728);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProveedorDetallePageModule = /** @class */ (function () {
    function ProveedorDetallePageModule() {
    }
    ProveedorDetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__proveedor_detalle__["a" /* ProveedorDetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__proveedor_detalle__["a" /* ProveedorDetallePage */]),
            ],
        })
    ], ProveedorDetallePageModule);
    return ProveedorDetallePageModule;
}());

//# sourceMappingURL=proveedor-detalle.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProveedorDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_proveedor_proveedor__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_proveedores_update_proveedores__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProveedorDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProveedorDetallePage = /** @class */ (function () {
    function ProveedorDetallePage(navCtrl, navParams, proveedorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedorProvider = proveedorProvider;
        this.getProveedores();
    }
    ProveedorDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProveedorDetallePage');
    };
    ProveedorDetallePage.prototype.getProveedores = function () {
        var _this = this;
        this.proveedorProvider.getProveedor()
            .then(function (data) {
            _this.proveedores = data;
            console.log(_this.proveedores);
        });
    };
    ProveedorDetallePage.prototype.sendProveedores = function (Proveedor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__update_proveedores_update_proveedores__["a" /* UpdateProveedoresPage */], { proveedor: Proveedor });
    };
    ProveedorDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proveedor-detalle',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\proveedor-detalle\proveedor-detalle.html"*/'<!--\n  Generated template for the ProveedorDetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>proveedor-detalle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content>\n      <h1>Detalle del Proveedor</h1>\n        <ion-list inset>\n          <ion-item *ngFor="let proveedor of proveedores">\n            <h2><b>Id:</b> {{proveedor.Proveedor_Id }}</h2>\n            <h2><b>Nombre del Proveedor:</b> {{proveedor.Proveedor_Nombre }}</h2>\n            <h2><b>Representante del Proveedor:</b> {{proveedor.Proveedor_Representante}}</h2>\n            <button ion-button color="secondary" (click)="sendProveedores(proveedor)">Actualizar</button>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\proveedor-detalle\proveedor-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_proveedor_proveedor__["a" /* ProveedorProvider */]])
    ], ProveedorDetallePage);
    return ProveedorDetallePage;
}());

//# sourceMappingURL=proveedor-detalle.js.map

/***/ })

});
//# sourceMappingURL=4.js.map