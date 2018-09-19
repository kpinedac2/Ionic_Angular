webpackJsonp([6],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcaDetallePageModule", function() { return MarcaDetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marca_detalle__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MarcaDetallePageModule = /** @class */ (function () {
    function MarcaDetallePageModule() {
    }
    MarcaDetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__marca_detalle__["a" /* MarcaDetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marca_detalle__["a" /* MarcaDetallePage */]),
            ],
        })
    ], MarcaDetallePageModule);
    return MarcaDetallePageModule;
}());

//# sourceMappingURL=marca-detalle.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarcaDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_marcas_marcas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_marca_update_marca__ = __webpack_require__(353);
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
 * Generated class for the MarcaDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarcaDetallePage = /** @class */ (function () {
    function MarcaDetallePage(navCtrl, navParams, marcaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.marcaProvider = marcaProvider;
        this.getMarcas();
    }
    MarcaDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarcaDetallePage');
    };
    MarcaDetallePage.prototype.getMarcas = function () {
        var _this = this;
        this.marcaProvider.getMarcas()
            .then(function (data) {
            _this.marcas = data;
            console.log(_this.marcas);
        });
    };
    MarcaDetallePage.prototype.sendMarcas = function (Marcas) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__update_marca_update_marca__["a" /* UpdateMarcaPage */], { marcas: Marcas });
    };
    MarcaDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marca-detalle',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\marca-detalle\marca-detalle.html"*/'<!--\n  Generated template for the MarcaDetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.3\n\n  sendMarcas\n\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>marca-detalle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content>\n      <h1>Detalle de Marcas</h1>\n        <ion-list inset>\n          <ion-item *ngFor="let marca of marcas">\n            <h2><b>Id:</b> {{marca.Marcas_Id}}</h2>\n            <h2><b>Marca:</b> {{marca.Marca_Descripcion}}</h2>\n            <button ion-button color="secondary" (click)="sendMarcas(marca)">Actualizar</button>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\marca-detalle\marca-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_marcas_marcas__["a" /* MarcasProvider */]])
    ], MarcaDetallePage);
    return MarcaDetallePage;
}());

//# sourceMappingURL=marca-detalle.js.map

/***/ })

});
//# sourceMappingURL=6.js.map