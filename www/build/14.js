webpackJsonp([14],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientePageModule", function() { return CreateClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_cliente__ = __webpack_require__(719);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateClientePageModule = /** @class */ (function () {
    function CreateClientePageModule() {
    }
    CreateClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_cliente__["a" /* CreateClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_cliente__["a" /* CreateClientePage */]),
            ],
        })
    ], CreateClientePageModule);
    return CreateClientePageModule;
}());

//# sourceMappingURL=create-cliente.module.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__ = __webpack_require__(156);
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
 * Generated class for the CreateClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation..
 *
 *
 * Cliente_Nombre1 nvarchar(50),
Cliente_Nombre2 nvarchar(50),
Cliente_Nombre3 nvarchar(50),
Cliente_Apellido1 nvarchar(50),
Cliente_Apellido2 nvarchar(50),
Cliente_Apellido3 nvarchar(50),
Cliente_Nacimiento Date,
Cliente_Direccion nvarchar(50),
Cliente_Telefono varchar(15),
Cliente_Correo nvarchar (50),
Cliente_Nit varchar(15),
Cliente_Genero varchar(1));

 */
var CreateClientePage = /** @class */ (function () {
    function CreateClientePage(navCtrl, navParams, clientesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientesProvider = clientesProvider;
        this.clientes = {
            Cliente_Nombre1: '',
            Cliente_Nombre2: '',
            Cliente_Nombre3: '',
            Cliente_Apellido1: '',
            Cliente_Apellido2: '',
            Cliente_Apellido3: '',
            Cliente_Nacimiento: '',
            Cliente_Direccion: '',
            Cliente_Telefono: '',
            Cliente_Correo: '',
            Cliente_Nit: '',
            Cliente_Genero: ''
        };
    }
    CreateClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateClientePage');
    };
    CreateClientePage.prototype.saveCliente = function () {
        this.clientesProvider.addClientes(this.clientes).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    CreateClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-cliente',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-cliente\create-cliente.html"*/'<!--\n  Generated template for the CreateClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle="left">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-title>CreateCliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h2>Formulario de Creación de Cliente</h2>\n    <ion-list>\n        <ion-item>\n          <ion-label stacked><h1>Cliente Nombre1</h1></ion-label>\n          <ion-input type="text" placeholder="Ingrese aquí su Primer Nombre" name="Cliente_Nombre1" [(ngModel)]="clientes.Cliente_Nombre1"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Cliente Nombre2</h1></ion-label>\n            <ion-input type="text" placeholder="Ingrese aquí su Segundo Nombre" name="Cliente_Nombre2" [(ngModel)]="clientes.Cliente_Nombre2"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Cliente Nombre3</h1></ion-label>\n            <ion-input type="text" placeholder="Ingrese aquí su Tercer Nombre" name="Cliente_Nombre3" [(ngModel)]="clientes.Cliente_Nombre3"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Cliente Apellido1</h1></ion-label>\n            <ion-input type="text" placeholder="Ingrese aquí su Primer Apellido" name="Cliente_Apellido1" [(ngModel)]="clientes.Cliente_Apellido1"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n              <ion-label stacked><h1>Cliente Apellido2</h1></ion-label>\n              <ion-input type="text" placeholder="Ingrese aquí su Segundo Apellido" name="Cliente_Apellido2" [(ngModel)]="clientes.Cliente_Apellido2"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n              <ion-label stacked><h1>Cliente Apellido3</h1></ion-label>\n              <ion-input type="text" placeholder="Ingrese aquí su Tercer Apellido" name="Cliente_Apellido3" [(ngModel)]="clientes.Cliente_Apellido3"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked><h1>Fecha de Nacimiento</h1></ion-label>\n              <ion-input type="date" placeholder="Ingrese su fecha de Nacimiento" name="Cliente_Nacimiento" [(ngModel)]="clientes.Cliente_Nacimiento"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked><h1>Dirección</h1></ion-label>\n              <ion-input type="text" placeholder="Ingrese aquí su Direccion" name="Cliente_Direccion" [(ngModel)]="clientes.Cliente_Direccion"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked><h1>Cliente Telefono</h1></ion-label>\n              <ion-input type="text" placeholder="Ingrese aquí su Num. de Telefono" name="Cliente_Telefono" [(ngModel)]="clientes.Cliente_Telefono"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked><h1>Cliente Nit</h1></ion-label>\n              <ion-input type="text" placeholder="Ingrese aquí su Nit" name="Cliente_Nit" [(ngModel)]="clientes.Cliente_Nit"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label><h1>Genero</h1></ion-label>\n              <ion-select [(ngModel)]="clientes.Cliente_Genero">\n                <ion-option value="F">Femenino</ion-option>\n                <ion-option value="M">Masculino</ion-option>\n              </ion-select>\n          </ion-item>\n          \n          <button ion-button block (click)="saveCliente()" color="primary">Crear Cliente</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-cliente\create-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__["a" /* ClientesProvider */]])
    ], CreateClientePage);
    return CreateClientePage;
}());

//# sourceMappingURL=create-cliente.js.map

/***/ })

});
//# sourceMappingURL=14.js.map