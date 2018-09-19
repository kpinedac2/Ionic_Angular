webpackJsonp([7],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosDetallePageModule", function() { return EmpleadosDetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empleados_detalle__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmpleadosDetallePageModule = /** @class */ (function () {
    function EmpleadosDetallePageModule() {
    }
    EmpleadosDetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__empleados_detalle__["a" /* EmpleadosDetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__empleados_detalle__["a" /* EmpleadosDetallePage */]),
            ],
        })
    ], EmpleadosDetallePageModule);
    return EmpleadosDetallePageModule;
}());

//# sourceMappingURL=empleados-detalle.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empleados_empleados__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_empleados_update_empleados__ = __webpack_require__(357);
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
 * Generated class for the EmpleadosDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmpleadosDetallePage = /** @class */ (function () {
    function EmpleadosDetallePage(navCtrl, navParams, empleadoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.empleadoProvider = empleadoProvider;
        this.getEmpleados();
    }
    EmpleadosDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmpleadosDetallePage');
    };
    EmpleadosDetallePage.prototype.getEmpleados = function () {
        var _this = this;
        this.empleadoProvider.getEmpleados()
            .then(function (data) {
            _this.empleados = data;
            console.log(_this.empleados);
        });
    };
    EmpleadosDetallePage.prototype.sendEmpleados = function (Empleados) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__update_empleados_update_empleados__["a" /* UpdateEmpleadosPage */], { empleado: Empleados });
    };
    EmpleadosDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-empleados-detalle',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\empleados-detalle\empleados-detalle.html"*/'<!--\n  Generated template for the EmpleadosDetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n        <button ion-button icon-only menuToggle="left">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-title>Empleados/Detalle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content>\n        <ion-list inset>\n          <ion-item *ngFor="let empleado of empleados">\n            <h2><b>Id:</b> {{empleado.Empleado_Id}}</h2>\n            <p><b>Nombre1:</b> {{empleado.Empleado_Nombre1}}</p>\n            <p><b>Nombre2:</b> {{empleado.Empleado_Nombre2}}</p>\n            <p><b>Apellido1:</b> {{empleado.Empleado_Apellido1}}</p>\n            <p><b>Apellido2:</b> {{empleado.Empleado_Apellido2}}</p>\n            <button ion-button color="secondary" (click)="sendEmpleados(empleado)">Actualizar</button>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\empleados-detalle\empleados-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_empleados_empleados__["a" /* EmpleadosProvider */]])
    ], EmpleadosDetallePage);
    return EmpleadosDetallePage;
}());

//# sourceMappingURL=empleados-detalle.js.map

/***/ })

});
//# sourceMappingURL=7.js.map