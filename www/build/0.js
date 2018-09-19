webpackJsonp([0],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaProductoPageModule", function() { return VentaProductoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__venta_producto__ = __webpack_require__(733);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VentaProductoPageModule = /** @class */ (function () {
    function VentaProductoPageModule() {
    }
    VentaProductoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__venta_producto__["a" /* VentaProductoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__venta_producto__["a" /* VentaProductoPage */]),
            ],
        })
    ], VentaProductoPageModule);
    return VentaProductoPageModule;
}());

//# sourceMappingURL=venta-producto.module.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentaProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_venta_venta__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_factura_factura__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ventadetalle_ventadetalle__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_productos_productos__ = __webpack_require__(157);
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
 * Generated class for the VentaProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VentaProductoPage = /** @class */ (function () {
    function VentaProductoPage(navCtrl, navParams, usuarioProvider, clientesProvider, ventaProvider, facturaProvider, ventadetalleProvider, productosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.clientesProvider = clientesProvider;
        this.ventaProvider = ventaProvider;
        this.facturaProvider = facturaProvider;
        this.ventadetalleProvider = ventadetalleProvider;
        this.productosProvider = productosProvider;
        this.venta = {
            Ventas_Fecha: '',
            Ventas_Usuario: 1,
            Ventas_Cliente: 0,
            Ventas_Total: 0
        };
        this.ventay = {
            Ventas_Id: 0,
            Ventas_Fecha: '',
            Ventas_Usuario: 1,
            Ventas_Cliente: 0,
            Ventas_Total: 0
        };
        this.ventaz = {
            Ventas_Id: 0,
            Ventas_Fecha: '',
            Ventas_Usuario: 1,
            Ventas_Cliente: 0,
            Ventas_Total: 0
        };
        this.venta_detalle = {
            VentaDetalle_Ventas: 0,
            VentaDetalle_Producto: 1,
            VentaDetalle_Cantidad: 1
        };
        this.factura = {
            Factura_Serie: 'A',
            Factura_Venta: 0,
            Factura_Cliente: 0
        };
        this.total = {
            total: 0,
        };
        this.show = true;
        this.getClientes();
        this.getUsuarios();
        this.getProductos();
    }
    VentaProductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VentaProductoPage');
    };
    VentaProductoPage.prototype.getUsuarios = function () {
        var _this = this;
        this.usuarioProvider.getUsuarios()
            .then(function (data) {
            _this.usuarios = data;
            console.log(_this.usuarios);
        });
    };
    VentaProductoPage.prototype.getClientes = function () {
        var _this = this;
        this.clientesProvider.getClientes()
            .then(function (data) {
            _this.clientes = data;
            console.log(_this.clientes);
        });
    };
    VentaProductoPage.prototype.setVentaDatos = function () {
        var _this = this;
        localStorage.setItem("venta", JSON.stringify(this.venta));
        this.ventaProvider.addVenta(this.venta).then(function (result) {
            _this.ventay = JSON.parse(JSON.stringify(result));
            _this.factura.Factura_Venta = _this.ventay.Ventas_Id;
            _this.factura.Factura_Cliente = _this.ventay.Ventas_Cliente;
            _this.facturaProvider.addFactura(_this.factura).then(function (result) {
                localStorage.setItem("ventasy", JSON.stringify(_this.ventay));
                localStorage.setItem("factura", JSON.stringify(result));
                console.log('tudo bem');
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    VentaProductoPage.prototype.getDetalle = function (date, id) {
        var _this = this;
        this.ventadetalleProvider.getVentaDetalles(date, id)
            .then(function (data) {
            _this.ventas_detalle = JSON.parse(JSON.stringify(data));
            console.log(_this.ventas_detalle);
        });
    };
    VentaProductoPage.prototype.saveVentaDetalle = function () {
        var _this = this;
        this.ventay = JSON.parse(localStorage.getItem("ventasy"));
        this.venta_detalle.VentaDetalle_Ventas = this.ventay.Ventas_Id;
        this.ventadetalleProvider.addVentaDetalle(this.venta_detalle).then(function (result) {
            _this.getDetalle(_this.ventay.Ventas_Fecha, _this.ventay.Ventas_Id);
            console.log(_this.totalx);
        }, function (err) {
        });
    };
    VentaProductoPage.prototype.getProductos = function () {
        var _this = this;
        this.productosProvider.getProductos()
            .then(function (data) {
            _this.productos = data;
            console.log(_this.productos);
        });
    };
    VentaProductoPage.prototype.getTotal = function () {
        var _this = this;
        this.ventaz = JSON.parse(localStorage.getItem("ventasy"));
        console.log(this.ventaz);
        this.ventadetalleProvider.getTotal(this.ventaz.Ventas_Id)
            .then(function (data) {
            _this.obje = data;
            _this.ventaz.Ventas_Total = parseFloat(_this.obje);
            console.log(_this.ventaz.Ventas_Total);
            _this.ventaProvider.updateVenta(_this.ventaz.Ventas_Id, _this.ventaz).then(function (result) {
                console.log(result);
            }, function (err) {
                console.log(err);
            });
        });
    };
    VentaProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-venta-producto',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\venta-producto\venta-producto.html"*/'<!--\n  Generated template for the VentaProductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>venta-producto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!--\nventa = {\n  Ventas_Fecha: Date.now(),\n  Ventas_Usuario: 1,\n  Ventas_Cliente: 0,\n  Ventas_Total: 0\n}\n-->\n\n<ion-content padding>\n  <h1>Venta</h1>\n  <ion-list>\n        <ion-item>\n            <ion-label stacked>Fecha:</ion-label>\n            <ion-input type="date" name="Ventas_Fecha" [(ngModel)]="venta.Ventas_Fecha"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Usuario</ion-label>\n            <ion-select [(ngModel)]="venta.Ventas_Usuario">\n              <ion-option *ngFor="let usuario of usuarios"  value="{{usuario.Usuario_Id}}"> {{usuario.Usuario_Nombre}}</ion-option>\n            </ion-select>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Cliente</ion-label>\n            <ion-select [(ngModel)]="venta.Ventas_Cliente">\n              <ion-option *ngFor="let cliente of clientes"  value="{{cliente.Cliente_Id}}"> {{cliente.Cliente_Nombre1}} {{cliente.Cliente_Apellido1}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <button ion-button block (click)="setVentaDatos()" color="primary">Setear Información de Venta</button>\n\n          <br>\n          <br>\n          <br>\n          <hr>\n\n          <ion-item>\n              <ion-label stacked>Producto</ion-label>\n              <ion-select [(ngModel)]="venta_detalle.VentaDetalle_Producto">\n                <ion-option *ngFor="let producto of productos"  value="{{producto.Producto_Id}}"> {{producto.Producto_Nombre}}</ion-option>\n              </ion-select>\n          </ion-item>\n\n            <ion-item>\n              <ion-label stacked>Cantidad:</ion-label>\n              <ion-input type="number" name="VentaDetalle_Cantidad" [(ngModel)]="venta_detalle.VentaDetalle_Cantidad"></ion-input>\n            </ion-item>\n\n            <button ion-button block (click)="saveVentaDetalle()" color="primary">Añadir Producto</button>\n          <h2>Productos en Lista</h2>\n          <ion-list inset>\n              <ion-item *ngFor="let ventade of ventas_detalle">\n                <h2><b>Id:</b> {{ventade.VentaDetalle_Id }}</h2>\n                <h2><b>Cantidad:</b> {{ventade.VentaDetalle_Cantidad }}</h2>\n                <h2><b>Subtotal:</b> {{ventade.VentaDetalle_SubTotal }}</h2>\n                <button (click)="sendUsuario(usuario)">Eliminar</button>\n              </ion-item>\n            </ion-list>\n\n            <button ion-button block (click)="getTotal()" color="primary">Procesar Total</button>\n    \n      \n      \n      \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\venta-producto\venta-producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__["a" /* ClientesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_venta_venta__["a" /* VentaProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_factura_factura__["a" /* FacturaProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ventadetalle_ventadetalle__["a" /* VentadetalleProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_productos_productos__["a" /* ProductosProvider */]])
    ], VentaProductoPage);
    return VentaProductoPage;
}());

//# sourceMappingURL=venta-producto.js.map

/***/ })

});
//# sourceMappingURL=0.js.map