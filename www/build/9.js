webpackJsonp([9],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTipoproductoPageModule", function() { return CreateTipoproductoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_tipoproducto__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateTipoproductoPageModule = /** @class */ (function () {
    function CreateTipoproductoPageModule() {
    }
    CreateTipoproductoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_tipoproducto__["a" /* CreateTipoproductoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_tipoproducto__["a" /* CreateTipoproductoPage */]),
            ],
        })
    ], CreateTipoproductoPageModule);
    return CreateTipoproductoPageModule;
}());

//# sourceMappingURL=create-tipoproducto.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTipoproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tipoproducto_tipoproducto__ = __webpack_require__(91);
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
 * Generated class for the CreateTipoproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateTipoproductoPage = /** @class */ (function () {
    function CreateTipoproductoPage(navCtrl, navParams, tipoproductoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tipoproductoProvider = tipoproductoProvider;
        this.tipoproductos = {
            TipoProducto_Descripcion: ' '
        };
    }
    CreateTipoproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateTipoproductoPage');
    };
    CreateTipoproductoPage.prototype.saveTipoProducto = function () {
        this.tipoproductoProvider.addtipoProducto(this.tipoproductos).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    CreateTipoproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-tipoproducto',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-tipoproducto\create-tipoproducto.html"*/'<!--\n  Generated template for the CreateTipoproductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>create-tipoproducto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label stacked><h1>Ingrese un tipo o categoría de producto</h1></ion-label>\n          <ion-input type="text" placeholder="Ingrese su Tipo de Producto aqui" name="TipoProducto_Descripcion " [(ngModel)]="tipoproductos.TipoProducto_Descripcion  "></ion-input>\n        </ion-item>\n          \n          \n          <button ion-button block (click)="saveTipoProducto()" color="primary">Crear Tipo Producto</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-tipoproducto\create-tipoproducto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tipoproducto_tipoproducto__["a" /* TipoproductoProvider */]])
    ], CreateTipoproductoPage);
    return CreateTipoproductoPage;
}());

//# sourceMappingURL=create-tipoproducto.js.map

/***/ })

});
//# sourceMappingURL=9.js.map