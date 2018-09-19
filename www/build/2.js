webpackJsonp([2],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoproductoDetallePageModule", function() { return TipoproductoDetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tipoproducto_detalle__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TipoproductoDetallePageModule = /** @class */ (function () {
    function TipoproductoDetallePageModule() {
    }
    TipoproductoDetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tipoproducto_detalle__["a" /* TipoproductoDetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tipoproducto_detalle__["a" /* TipoproductoDetallePage */]),
            ],
        })
    ], TipoproductoDetallePageModule);
    return TipoproductoDetallePageModule;
}());

//# sourceMappingURL=tipoproducto-detalle.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoproductoDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tipoproducto_tipoproducto__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_tipoproductos_update_tipoproductos__ = __webpack_require__(358);
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
 * Generated class for the TipoproductoDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TipoproductoDetallePage = /** @class */ (function () {
    function TipoproductoDetallePage(navCtrl, navParams, tipoproductoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tipoproductoProvider = tipoproductoProvider;
        this.getTipoProducto();
    }
    TipoproductoDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TipoproductoDetallePage');
    };
    TipoproductoDetallePage.prototype.getTipoProducto = function () {
        var _this = this;
        this.tipoproductoProvider.getTipoProductos()
            .then(function (data) {
            _this.tipoproductos = data;
            console.log(_this.tipoproductos);
        });
    };
    TipoproductoDetallePage.prototype.sendTiposProductos = function (TiposProductos) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__update_tipoproductos_update_tipoproductos__["a" /* UpdateTipoproductosPage */], { tipoproductos: TiposProductos });
    };
    TipoproductoDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tipoproducto-detalle',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\tipoproducto-detalle\tipoproducto-detalle.html"*/'<!--\n  Generated template for the TipoproductoDetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>tipoproducto-detalle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content>\n        <ion-list inset>\n          <ion-item *ngFor="let tipoproducto of tipoproductos">\n            <hr>\n            <h2><b>Id:</b> {{tipoproducto.TipoProducto_Id}}</h2>\n            <h2><b>Tipo de Producto:</b> {{tipoproducto.TipoProducto_Descripcion}}</h2>\n            <button ion-button color="secondary" (click)="sendTiposProductos(tipoproducto)">Actualizar</button>\n            <hr>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\tipoproducto-detalle\tipoproducto-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tipoproducto_tipoproducto__["a" /* TipoproductoProvider */]])
    ], TipoproductoDetallePage);
    return TipoproductoDetallePage;
}());

//# sourceMappingURL=tipoproducto-detalle.js.map

/***/ })

});
//# sourceMappingURL=2.js.map