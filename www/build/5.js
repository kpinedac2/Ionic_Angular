webpackJsonp([5],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDetallePageModule", function() { return ProductoDetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_detalle__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductoDetallePageModule = /** @class */ (function () {
    function ProductoDetallePageModule() {
    }
    ProductoDetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__producto_detalle__["a" /* ProductoDetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__producto_detalle__["a" /* ProductoDetallePage */]),
            ],
        })
    ], ProductoDetallePageModule);
    return ProductoDetallePageModule;
}());

//# sourceMappingURL=producto-detalle.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productos_productos__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_productos_update_productos__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_existencia_update_existencia__ = __webpack_require__(355);
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
 * Generated class for the ProductoDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductoDetallePage = /** @class */ (function () {
    function ProductoDetallePage(navCtrl, navParams, productosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productosProvider = productosProvider;
        this.productosx = {
            Producto_Id: 0,
            Producto_Codigo: '',
            Producto_Nombre: '',
            Producto_Costo: 0.0,
            Producto_Precio: 0.0,
            Producto_Proveedor: 0,
            Producto_Caducidad: '',
            Producto_TipoProducto: 0,
            Producto_Marca: 0
        };
        this.getProductos();
    }
    ProductoDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoDetallePage');
    };
    ProductoDetallePage.prototype.getProductos = function () {
        var _this = this;
        this.productosProvider.getProductos()
            .then(function (data) {
            _this.productos = data;
            console.log(_this.productos);
        });
    };
    ProductoDetallePage.prototype.sendProductos = function (Producto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__update_productos_update_productos__["a" /* UpdateProductosPage */], { producto: Producto });
    };
    ProductoDetallePage.prototype.updateExistencia = function (Productos) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__update_existencia_update_existencia__["a" /* UpdateExistenciaPage */], { producto: Productos });
    };
    ProductoDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-producto-detalle',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\producto-detalle\producto-detalle.html"*/'<!--\n  Generated template for the ProductoDetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>producto-detalle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content>\n    <ion-list inset>\n        <ion-item *ngFor="let producto of productos">\n          <h2><b>Id:</b> {{producto.Producto_Id}}</h2>\n          <h2><b>Nombre del Producto:</b> {{producto.Producto_Nombre}}</h2>\n          <h2><b>Costo del Producto:</b> {{producto.Producto_Costo}}</h2>\n          <h2><b>Precio del Producto:</b> {{producto.Producto_Precio}}</h2>\n\n          <button ion-button full color="secondary" (click)="sendProductos(producto)">Actualizar Info</button>\n          <button ion-button full color="primary" (click)="updateExistencia(producto)">Actualizar Existencia</button>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\producto-detalle\producto-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productos_productos__["a" /* ProductosProvider */]])
    ], ProductoDetallePage);
    return ProductoDetallePage;
}());

//# sourceMappingURL=producto-detalle.js.map

/***/ })

});
//# sourceMappingURL=5.js.map