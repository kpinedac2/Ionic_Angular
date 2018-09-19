webpackJsonp([11],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductoPageModule", function() { return CreateProductoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_producto__ = __webpack_require__(722);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateProductoPageModule = /** @class */ (function () {
    function CreateProductoPageModule() {
    }
    CreateProductoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_producto__["a" /* CreateProductoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_producto__["a" /* CreateProductoPage */]),
            ],
        })
    ], CreateProductoPageModule);
    return CreateProductoPageModule;
}());

//# sourceMappingURL=create-producto.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productos_productos__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_proveedor_proveedor__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tipoproducto_tipoproducto__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_marcas_marcas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_existencias_existencias__ = __webpack_require__(159);
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
 * Generated class for the CreateProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateProductoPage = /** @class */ (function () {
    function CreateProductoPage(navCtrl, navParams, productosProvider, proveedorProvider, tipoproductoProvider, marcaProvider, existenciasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productosProvider = productosProvider;
        this.proveedorProvider = proveedorProvider;
        this.tipoproductoProvider = tipoproductoProvider;
        this.marcaProvider = marcaProvider;
        this.existenciasProvider = existenciasProvider;
        this.productos = {
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
        this.existencias = {
            Existencia_Producto: 0,
            Existencia_Cantidad: 0
        };
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
        this.getProveedores();
        this.getTipoProducto();
        this.getMarcas();
    }
    CreateProductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateProductoPage');
    };
    CreateProductoPage.prototype.saveProducto = function () {
        var _this = this;
        this.productosProvider.addProducto(this.productos).then(function (result) {
            _this.getProductByNombre(_this.productos.Producto_Nombre);
        }, function (err) {
            console.log(err);
        });
    };
    CreateProductoPage.prototype.getProveedores = function () {
        var _this = this;
        this.proveedorProvider.getProveedor()
            .then(function (data) {
            _this.proveedores = data;
            console.log(_this.proveedores);
        });
    };
    CreateProductoPage.prototype.getTipoProducto = function () {
        var _this = this;
        this.tipoproductoProvider.getTipoProductos()
            .then(function (data) {
            _this.tipoproductos = data;
            console.log(_this.tipoproductos);
        });
    };
    CreateProductoPage.prototype.getMarcas = function () {
        var _this = this;
        this.marcaProvider.getMarcas()
            .then(function (data) {
            _this.marcas = data;
            console.log(_this.marcas);
        });
    };
    CreateProductoPage.prototype.getProductByNombre = function (name) {
        var _this = this;
        this.productosProvider.getProductoByName(name)
            .subscribe(function (data) {
            _this.productosx = data;
            _this.existencias.Existencia_Producto = _this.productosx.Producto_Id;
            _this.existenciasProvider.addExistencias(_this.existencias).then(function (result) {
                console.log('Did it');
                console.log(result);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CreateProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-producto',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-producto\create-producto.html"*/'<!--\n  Generated template for the CreateProductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>create-producto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h1>Formulario de Creación de Producto</h1>\n    <ion-list>\n        <ion-item>\n          <ion-label stacked><h1>Código del Producto</h1></ion-label>\n          <ion-input type="text" placeholder="Ingrese el código del Producto" name="Producto_Codigo" [(ngModel)]="productos.Producto_Codigo"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked><h1>Nombre del Producto</h1></ion-label>\n          <ion-input type="text" placeholder="Ingrese el nombre del Producto" name="Producto_Nombre" [(ngModel)]="productos.Producto_Nombre"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Costo del Producto</h1></ion-label>\n            <ion-input type="number" step=".01" name="Producto_Costo" [(ngModel)]="productos.Producto_Costo"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked><h1>Precio del Producto</h1></ion-label>\n              <ion-input type="number" step=".01" name="Producto_Precio" [(ngModel)]="productos.Producto_Precio"></ion-input>\n            </ion-item>\n\n            \n\n              <ion-item>\n                  <ion-label stacked><h1>Proveedor</h1></ion-label>\n                  <ion-select [(ngModel)]="productos.Producto_Proveedor">\n                    <ion-option *ngFor="let proveedor of proveedores"  value="{{proveedor.Proveedor_Id}}"> {{proveedor.Proveedor_Nombre}}</ion-option>\n                  </ion-select>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label stacked><h1>Fecha de Caducidad</h1></ion-label>\n                  <ion-input type="date" name="Producto_Caducidad" [(ngModel)]="productos.Producto_Caducidad"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label stacked><h1>Tipo de Producto</h1></ion-label>\n                  <ion-select [(ngModel)]="productos.Producto_TipoProducto">\n                    <ion-option *ngFor="let tipoproducto of tipoproductos"  value="{{tipoproducto.TipoProducto_Id}}"> {{tipoproducto.TipoProducto_Descripcion}}</ion-option>\n                  </ion-select>\n              </ion-item>\n              \n              <ion-item>\n                  <ion-label stacked><h1>Marcas</h1></ion-label>\n                  <ion-select [(ngModel)]="productos.Producto_Marca">\n                    <ion-option *ngFor="let marca of marcas"  value="{{marca.Marcas_Id}}"> {{marca.Marca_Descripcion}}</ion-option>\n                  </ion-select>\n              </ion-item>\n\n              <ion-item>\n                <ion-label stacked><h1>Existencia del Producto</h1></ion-label>\n                <ion-input type="number"  name="Existencia_Cantidad" [(ngModel)]="existencias.Existencia_Cantidad"></ion-input>\n              </ion-item>\n              <br>\n\n          \n          <button ion-button block (click)="saveProducto()" color="primary">Crear Producto</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\create-producto\create-producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_productos_productos__["a" /* ProductosProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_proveedor_proveedor__["a" /* ProveedorProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tipoproducto_tipoproducto__["a" /* TipoproductoProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_marcas_marcas__["a" /* MarcasProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_existencias_existencias__["a" /* ExistenciasProvider */]])
    ], CreateProductoPage);
    return CreateProductoPage;
}());

//# sourceMappingURL=create-producto.js.map

/***/ })

});
//# sourceMappingURL=11.js.map