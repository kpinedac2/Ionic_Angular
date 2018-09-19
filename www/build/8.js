webpackJsonp([8],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUsuarioPageModule", function() { return CreateUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_usuario__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateUsuarioPageModule = /** @class */ (function () {
    function CreateUsuarioPageModule() {
    }
    CreateUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_usuario__["a" /* CreateUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_usuario__["a" /* CreateUsuarioPage */]),
            ],
        })
    ], CreateUsuarioPageModule);
    return CreateUsuarioPageModule;
}());

//# sourceMappingURL=create-usuario.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_empleados_empleados__ = __webpack_require__(88);
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
 * Generated class for the CreateUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateUsuarioPage = /** @class */ (function () {
    function CreateUsuarioPage(navCtrl, navParams, usuarioProvider, empleadoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.empleadoProvider = empleadoProvider;
        this.usuario = {
            Usuario_Nombre: '',
            Usuario_Password: '',
            Usuario_Estado: '',
            Usuario_Empleado: 0
        };
        this.getEmpleados();
    }
    CreateUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateUsuarioPage');
    };
    CreateUsuarioPage.prototype.saveUsuario = function () {
        this.usuarioProvider.addUsuarios(this.usuario).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    CreateUsuarioPage.prototype.getEmpleados = function () {
        var _this = this;
        this.empleadoProvider.getEmpleados()
            .then(function (data) {
            _this.empleados = data;
            console.log(_this.empleados);
        });
    };
    CreateUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-usuario',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-usuario\create-usuario.html"*/'<!--\n  Generated template for the CreateUsuarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>create-usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Formulario de Creación de Usuario</h1>\n    <ion-list>\n        <ion-item>\n          <ion-label stacked><h1>Nombre de Usuario</h1></ion-label>\n          <ion-input type="text" placeholder="Ingrese el Nombre de Usuario" name="Usuario_Nombre" [(ngModel)]="usuario.Usuario_Nombre "></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Password</h1></ion-label>\n            <ion-input type="password" placeholder="Ingrese la Clave de Usuario" name="Usuario_Passsword " [(ngModel)]="usuario.Usuario_Passsword "></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Estado de Usuario</h1></ion-label>\n            <ion-select [(ngModel)]="usuario.Usuario_Estado">\n              <ion-option value="A">Activo</ion-option>\n              <ion-option value="I">Inactivo</ion-option>\n            </ion-select>\n        </ion-item>\n\n\n         <ion-item>\n            <ion-label stacked><h1>Empleado al que pertenece el usuario</h1></ion-label>\n            <ion-select [(ngModel)]="usuario.Usuario_Empleado ">\n              <ion-option *ngFor="let empleado of empleados"  value="{{empleado.Empleado_Id}}">{{empleado.Empleado_Nombre1}} {{empleado.Empleado_Apellido1}}</ion-option>\n            </ion-select>\n        </ion-item>\n  \n          \n          \n          <button ion-button block (click)="saveUsuario()" color="primary">Crear Usuario</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-usuario\create-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__["a" /* UsuariosProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_empleados_empleados__["a" /* EmpleadosProvider */]])
    ], CreateUsuarioPage);
    return CreateUsuarioPage;
}());

//# sourceMappingURL=create-usuario.js.map

/***/ })

});
//# sourceMappingURL=8.js.map