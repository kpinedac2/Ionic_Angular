webpackJsonp([10],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProveedorPageModule", function() { return CreateProveedorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_proveedor__ = __webpack_require__(723);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateProveedorPageModule = /** @class */ (function () {
    function CreateProveedorPageModule() {
    }
    CreateProveedorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_proveedor__["a" /* CreateProveedorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_proveedor__["a" /* CreateProveedorPage */]),
            ],
        })
    ], CreateProveedorPageModule);
    return CreateProveedorPageModule;
}());

//# sourceMappingURL=create-proveedor.module.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_proveedor_proveedor__ = __webpack_require__(90);
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
 * Generated class for the CreateProveedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateProveedorPage = /** @class */ (function () {
    function CreateProveedorPage(navCtrl, navParams, proveedorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedorProvider = proveedorProvider;
        this.proveedores = {
            Proveedor_Nombre: '',
            Proveedor_Representante: '',
            Proveedor_Telefono: '',
            Proveedor_Correo: ''
        };
    }
    CreateProveedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateProveedorPage');
    };
    CreateProveedorPage.prototype.saveProveedor = function () {
        this.proveedorProvider.addProveedor(this.proveedores).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    CreateProveedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-proveedor',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-proveedor\create-proveedor.html"*/'<!--\n  Generated template for the CreateProveedorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>create-proveedor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label stacked><h1>Nombre del Proveedor</h1></ion-label>\n        \n        <ion-input type="text" placeholder="Ingrese el Nombre del Proveedor" name="Proveedor_Nombre" [(ngModel)]="proveedores.Proveedor_Nombre"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked><h1>Nombre del Representante del Proveedor</h1></ion-label>\n        \n        <ion-input type="text" placeholder="Ingrese del Representante del Proveedor" name="Proveedor_Representante" [(ngModel)]="proveedores.Proveedor_Representante"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Teléfono del Proveedor </h1></ion-label>\n          \n          <ion-input type="text" placeholder="Ingrese el Teléfono del Proveedor" name="Proveedor_Telefono" [(ngModel)]="proveedores.Proveedor_Telefono"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n              <ion-label stacked><h1>Correo del Proveedor</h1></ion-label>\n            \n            <ion-input type="text" placeholder="Ingrese el Correo del Proveedor" name="Proveedor_Correo" [(ngModel)]="proveedores.Proveedor_Correo"></ion-input>\n            </ion-item>\n          \n          <button ion-button block (click)="saveProveedor()" color="primary">Crear Proveedor</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-proveedor\create-proveedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_proveedor_proveedor__["a" /* ProveedorProvider */]])
    ], CreateProveedorPage);
    return CreateProveedorPage;
}());

//# sourceMappingURL=create-proveedor.js.map

/***/ })

});
//# sourceMappingURL=10.js.map