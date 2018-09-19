webpackJsonp([1],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioDetallePageModule", function() { return UsuarioDetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_detalle__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsuarioDetallePageModule = /** @class */ (function () {
    function UsuarioDetallePageModule() {
    }
    UsuarioDetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usuario_detalle__["a" /* UsuarioDetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usuario_detalle__["a" /* UsuarioDetallePage */]),
            ],
        })
    ], UsuarioDetallePageModule);
    return UsuarioDetallePageModule;
}());

//# sourceMappingURL=usuario-detalle.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_usuario_update_usuario__ = __webpack_require__(359);
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
 * Generated class for the UsuarioDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioDetallePage = /** @class */ (function () {
    function UsuarioDetallePage(navCtrl, navParams, usuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.getUsuarios();
    }
    UsuarioDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioDetallePage');
    };
    UsuarioDetallePage.prototype.getUsuarios = function () {
        var _this = this;
        this.usuarioProvider.getUsuarios()
            .then(function (data) {
            _this.usuarios = data;
            console.log(_this.usuarios);
        });
    };
    UsuarioDetallePage.prototype.sendUsuario = function (Usuario) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__update_usuario_update_usuario__["a" /* UpdateUsuarioPage */], { usuario: Usuario });
    };
    UsuarioDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuario-detalle',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\usuario-detalle\usuario-detalle.html"*/'<!--\n  Generated template for the UsuarioDetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n       <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>usuario-detalle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content>\n      <h1>Detalle de Usuarios</h1>\n        <ion-list inset>\n          <ion-item *ngFor="let usuario of usuarios">\n            <hr>\n            <h2><b>Id:</b> {{usuario.Usuario_Id}}</h2>\n            <h2><b>Nombre:</b> {{usuario.Usuario_Nombre}}</h2>\n            <button ion-button color="secondary" (click)="sendUsuario(usuario)">Actualizar</button>\n            <hr>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\usuario-detalle\usuario-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__["a" /* UsuariosProvider */]])
    ], UsuarioDetallePage);
    return UsuarioDetallePage;
}());

//# sourceMappingURL=usuario-detalle.js.map

/***/ })

});
//# sourceMappingURL=1.js.map