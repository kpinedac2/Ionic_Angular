webpackJsonp([15],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesDetallePageModule", function() { return ClientesDetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes_detalle__ = __webpack_require__(718);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientesDetallePageModule = /** @class */ (function () {
    function ClientesDetallePageModule() {
    }
    ClientesDetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clientes_detalle__["a" /* ClientesDetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clientes_detalle__["a" /* ClientesDetallePage */]),
            ],
        })
    ], ClientesDetallePageModule);
    return ClientesDetallePageModule;
}());

//# sourceMappingURL=clientes-detalle.module.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_clientes_update_clientes__ = __webpack_require__(352);
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
 * Generated class for the ClientesDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientesDetallePage = /** @class */ (function () {
    function ClientesDetallePage(navCtrl, navParams, clientesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientesProvider = clientesProvider;
        this.getClientes();
    }
    ClientesDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientesDetallePage');
    };
    ClientesDetallePage.prototype.getClientes = function () {
        var _this = this;
        this.clientesProvider.getClientes()
            .then(function (data) {
            _this.clientes = data;
            console.log(_this.clientes);
        });
    };
    ClientesDetallePage.prototype.sendClientes = function (Cliente) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__update_clientes_update_clientes__["a" /* UpdateClientesPage */], { cliente: Cliente });
    };
    ClientesDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clientes-detalle',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\clientes-detalle\clientes-detalle.html"*/'<!--\n  Generated template for the ClientesDetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle="left">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-title>Clientes/Detalle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <h1>Detalle de Clientes</h1>\n      <ion-content>\n          <ion-list inset>\n            <ion-item *ngFor="let user of clientes">\n              <h2><b>Id:</b> {{user.Cliente_Id}}</h2>\n              <p><b>Nombre1:</b> {{user.Cliente_Nombre1}}</p>\n              <p><b>Nombre2:</b> {{user.Cliente_Nombre2}}</p>\n              <p><b>Apellido1:</b> {{user.Cliente_Apellido1}}</p>\n              <p><b>Apellido2:</b> {{user.Cliente_Apellido2}}</p>\n              <button ion-button color="secondary" (click)="sendClientes(user)">Actualizar</button>\n            </ion-item>\n          </ion-list>\n        </ion-content>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\clientes-detalle\clientes-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__["a" /* ClientesProvider */]])
    ], ClientesDetallePage);
    return ClientesDetallePage;
}());

//# sourceMappingURL=clientes-detalle.js.map

/***/ })

});
//# sourceMappingURL=15.js.map