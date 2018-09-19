webpackJsonp([12],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMarcasPageModule", function() { return CreateMarcasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_marcas__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateMarcasPageModule = /** @class */ (function () {
    function CreateMarcasPageModule() {
    }
    CreateMarcasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_marcas__["a" /* CreateMarcasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_marcas__["a" /* CreateMarcasPage */]),
            ],
        })
    ], CreateMarcasPageModule);
    return CreateMarcasPageModule;
}());

//# sourceMappingURL=create-marcas.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMarcasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_marcas_marcas__ = __webpack_require__(89);
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
 * Generated class for the CreateMarcasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateMarcasPage = /** @class */ (function () {
    function CreateMarcasPage(navCtrl, navParams, marcaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.marcaProvider = marcaProvider;
        this.marca = {
            Marca_Descripcion: ''
        };
    }
    CreateMarcasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateMarcasPage');
    };
    CreateMarcasPage.prototype.saveMarca = function () {
        this.marcaProvider.addMarca(this.marca).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    CreateMarcasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-marcas',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-marcas\create-marcas.html"*/'<!--\n  Generated template for the CreateMarcasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>create-marcas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Formulario de Creación de Marca</h1>\n  \n    <ion-list>\n        <ion-item>\n          <ion-label stacked><h1>Ingrese el nombre de la Marca</h1></ion-label>\n          <ion-input type="text" placeholder="Ingrese la marca" name="Usuario_Nombre" [(ngModel)]="marca.Marca_Descripcion  "></ion-input>\n        </ion-item>\n          \n          \n          <button ion-button block (click)="saveMarca()" color="primary">Crear Usuario</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-marcas\create-marcas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_marcas_marcas__["a" /* MarcasProvider */]])
    ], CreateMarcasPage);
    return CreateMarcasPage;
}());

//# sourceMappingURL=create-marcas.js.map

/***/ })

});
//# sourceMappingURL=12.js.map