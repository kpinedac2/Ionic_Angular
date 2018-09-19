webpackJsonp([13],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmpleadoPageModule", function() { return CreateEmpleadoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_empleado__ = __webpack_require__(720);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateEmpleadoPageModule = /** @class */ (function () {
    function CreateEmpleadoPageModule() {
    }
    CreateEmpleadoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_empleado__["a" /* CreateEmpleadoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_empleado__["a" /* CreateEmpleadoPage */]),
            ],
        })
    ], CreateEmpleadoPageModule);
    return CreateEmpleadoPageModule;
}());

//# sourceMappingURL=create-empleado.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEmpleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empleados_empleados__ = __webpack_require__(88);
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
 * Generated class for the CreateEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateEmpleadoPage = /** @class */ (function () {
    function CreateEmpleadoPage(navCtrl, navParams, empleadoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.empleadoProvider = empleadoProvider;
        this.empleados = {
            Empleado_Nombre1: '',
            Empleado_Nombre2: '',
            Empleado_Nombre3: '',
            Empleado_Apellido1: '',
            Empleado_Apellido2: '',
            Empleado_Apellido3: '',
            Empleado_Nacimiento: '',
            Empleado_Direccion: '',
            Cliente_Telefono: '',
            Empleado_Telefono: ''
        };
    }
    CreateEmpleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateEmpleadoPage');
    };
    CreateEmpleadoPage.prototype.saveEmpleado = function () {
        var _this = this;
        this.empleadoProvider.addEmpleados(this.empleados).then(function (result) {
            console.log(result);
            _this.message = 'Esta bien';
        }, function (err) {
            console.log(err);
        });
    };
    CreateEmpleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-empleado',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-empleado\create-empleado.html"*/'<!--\n  Generated template for the CreateEmpleadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n  empleados = {\n    Empleado_Nombre1: \'\',\n    Empleado_Nombre2: \'\',\n    Empleado_Nombre3: \'\',\n    Empleado_Apellido1:\'\',\n    Empleado_Apellido2: \'\',\n    Empleado_Apellido3:\'\',\n    Empleado_Nacimiento: \'\',\n    Empleado_Direccion: \'\',\n    Empleado_Telefono: \'\',\n    Empleado_Genero:\'\'\n  };\n\n\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle="left">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-title>Create-Empleado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h1>Formulario de Creación de Empleado</h1>\n    <ion-list>\n        <ion-item>\n          <ion-label stacked><h1>Empleado Nombre1</h1></ion-label>\n          <ion-input type="text" placeholder="Ingrese el Primer Nombre" name="Empleado_Nombre1" [(ngModel)]="empleados.Empleado_Nombre1"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Empleado Nombre2</h1></ion-label>\n            <ion-input type="text" placeholder="Ingrese el Segundo Nombre" name="Empleado_Nombre2" [(ngModel)]="empleados.Empleado_Nombre2"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Empleado Nombre3</h1></ion-label>\n            <ion-input type="text" placeholder="Ingrese el Tercer Nombre" name="Empleado_Nombre3" [(ngModel)]="empleados.Empleado_Nombre3"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Empleado Apellido1</h1></ion-label>\n            <ion-input type="text" placeholder="Ingrese el Primer Apellido" name="Empleado_Apellido1" [(ngModel)]="empleados.Empleado_Apellido1"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n              <ion-label stacked><h1>Empleado Apellido2</h1></ion-label>\n              <ion-input type="text" placeholder="Ingrese el Segundo Apellido" name="Empleado_Apellido2" [(ngModel)]="empleados.Empleado_Apellido2"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n              <ion-label stacked><h1>Empleado Apellido3</h1></ion-label>\n              <ion-input type="text" placeholder="Ingrese el Tercer Apellido" name="Empleado_Apellido3" [(ngModel)]="empleados.Empleado_Apellido3"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked><h1>Empleado Nacimiento</h1></ion-label>\n              <ion-input type="date" name="Empleado_Nacimiento" [(ngModel)]="empleados.Empleado_Nacimiento"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked><h1>Empleado Dirección</h1></ion-label>\n              <ion-input type="text" placeholder="Ingrese la Dirección" name="Empleado_Direccion" [(ngModel)]="empleados.Empleado_Direccion"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked><h1>Empleado Telefono:</h1></ion-label>\n              <ion-input type="text" placeholder="Ingrese el Num. Telefono" name="Empleado_Telefono" [(ngModel)]="empleados.Empleado_Telefono"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label><h1>Genero</h1></ion-label>\n              <ion-select [(ngModel)]="empleados.Empleado_Genero">\n                <ion-option value="F">Femenino</ion-option>\n                <ion-option value="M">Masculino</ion-option>\n              </ion-select>\n          </ion-item>\n          \n          <button ion-button color="primary" block (click)="saveEmpleado()" color="primary">Crear Empleado</button>\n      </ion-list>\n</ion-content>\n\n<div *ngIf="message" [ngClass]="{ \'alert\': message, \'alert-success\': message.type === \'success\', \'alert-danger\': message.type === \'error\' }">{{message.text}}</div>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-empleado\create-empleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_empleados_empleados__["a" /* EmpleadosProvider */]])
    ], CreateEmpleadoPage);
    return CreateEmpleadoPage;
}());

//# sourceMappingURL=create-empleado.js.map

/***/ })

});
//# sourceMappingURL=13.js.map