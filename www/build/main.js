webpackJsonp([24],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ClientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClientesProvider = /** @class */ (function () {
    function ClientesProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello RestServiceProvider Provider');
    }
    ClientesProvider.prototype.getClientes = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/api/Clientes').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ClientesProvider.prototype.addClientes = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/Clientes', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ClientesProvider.prototype.updateCliente = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/api/Clientes/' + id, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ClientesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ClientesProvider);
    return ClientesProvider;
}());

//# sourceMappingURL=clientes.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductosProvider = /** @class */ (function () {
    function ProductosProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello ProductosProvider Provider');
    }
    ProductosProvider.prototype.getProductos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/api/Productos').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ProductosProvider.prototype.addProducto = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/Productos', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProductosProvider.prototype.updateProducto = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/api/Productos/' + id, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ///api/Productos/GetProductoByName/Aceite
    ProductosProvider.prototype.getProductoByName = function (name) {
        return this.http.get(this.apiUrl + '/api/Productos/GetProductoByName/' + name);
    };
    ProductosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductosProvider);
    return ProductosProvider;
}());

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuariosProvider = /** @class */ (function () {
    function UsuariosProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello EmpleadosProvider Provider');
    }
    UsuariosProvider.prototype.getUsuarios = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/api/Usuarios').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    UsuariosProvider.prototype.addUsuarios = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/Usuarios', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UsuariosProvider.prototype.updateUsuario = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/api/Usuarios/' + id, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UsuariosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UsuariosProvider);
    return UsuariosProvider;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistenciasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ExistenciasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ExistenciasProvider = /** @class */ (function () {
    function ExistenciasProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello ExistenciasProvider Provider');
    }
    ExistenciasProvider.prototype.addExistencias = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/Existencias', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ///api/Productos/GetProductoByName/Aceite
    ExistenciasProvider.prototype.getExistenciasPyProd = function (producto) {
        return this.http.get(this.apiUrl + '/api/GetExistenciasByProd/' + producto);
    };
    ExistenciasProvider.prototype.updateExistencia = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/api/Existencias/' + id, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ExistenciasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ExistenciasProvider);
    return ExistenciasProvider;
}());

//# sourceMappingURL=existencias.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/clientes-detalle/clientes-detalle.module": [
		694,
		15
	],
	"../pages/create-cliente/create-cliente.module": [
		695,
		14
	],
	"../pages/create-empleado/create-empleado.module": [
		696,
		13
	],
	"../pages/create-marcas/create-marcas.module": [
		697,
		12
	],
	"../pages/create-producto/create-producto.module": [
		698,
		11
	],
	"../pages/create-proveedor/create-proveedor.module": [
		699,
		10
	],
	"../pages/create-tipoproducto/create-tipoproducto.module": [
		700,
		9
	],
	"../pages/create-usuario/create-usuario.module": [
		701,
		8
	],
	"../pages/empleados-detalle/empleados-detalle.module": [
		705,
		7
	],
	"../pages/marca-detalle/marca-detalle.module": [
		702,
		6
	],
	"../pages/producto-detalle/producto-detalle.module": [
		703,
		5
	],
	"../pages/proveedor-detalle/proveedor-detalle.module": [
		704,
		4
	],
	"../pages/side-menu/side-menu.module": [
		706,
		3
	],
	"../pages/tipoproducto-detalle/tipoproducto-detalle.module": [
		707,
		2
	],
	"../pages/update-clientes/update-clientes.module": [
		708,
		23
	],
	"../pages/update-empleados/update-empleados.module": [
		709,
		22
	],
	"../pages/update-existencia/update-existencia.module": [
		710,
		21
	],
	"../pages/update-marca/update-marca.module": [
		711,
		20
	],
	"../pages/update-productos/update-productos.module": [
		712,
		19
	],
	"../pages/update-proveedores/update-proveedores.module": [
		713,
		18
	],
	"../pages/update-tipoproductos/update-tipoproductos.module": [
		714,
		17
	],
	"../pages/update-usuario/update-usuario.module": [
		715,
		16
	],
	"../pages/usuario-detalle/usuario-detalle.module": [
		716,
		1
	],
	"../pages/venta-producto/venta-producto.module": [
		717,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppState = /** @class */ (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this.clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype.clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateClientesPage; });
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
 * Generated class for the UpdateClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateClientesPage = /** @class */ (function () {
    function UpdateClientesPage(navCtrl, navParams, clientesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientesProvider = clientesProvider;
        this.clientes = {
            Cliente_Id: 0,
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
        var data = navParams.get('cliente');
        console.log(data);
        this.clientes = data;
    }
    UpdateClientesPage.prototype.updateCliente = function () {
        this.clientesProvider.updateCliente(this.clientes.Cliente_Id, this.clientes).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    UpdateClientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateClientesPage');
    };
    UpdateClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-clientes',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-clientes\update-clientes.html"*/'<!--\n  Generated template for the UpdateClientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n        <ion-buttons left>\n                <button ion-button icon-only menuToggle="left">\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n              </ion-buttons>\n    <ion-title>update-clientes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n        <h1>Formulario de Actualización de Cliente</h1>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked><h1>Cliente Nombre1</h1></ion-label>\n      <ion-input type="text" name="Cliente_Nombre1" [(ngModel)]="clientes.Cliente_Nombre1"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked><h1>Cliente Nombre2</h1></ion-label>\n        <ion-input type="text" name="Cliente_Nombre2" [(ngModel)]="clientes.Cliente_Nombre2"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked><h1>Cliente Nombre3</h1></ion-label>\n        <ion-input type="text" name="Cliente_Nombre3" [(ngModel)]="clientes.Cliente_Nombre3"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked><h1>Cliente Apellido1</h1></ion-label>\n        <ion-input type="text" name="Cliente_Apellido1" [(ngModel)]="clientes.Cliente_Apellido1"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Cliente Apellido2</h1></ion-label>\n          <ion-input type="text" name="Cliente_Apellido2" [(ngModel)]="clientes.Cliente_Apellido2"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Cliente Apellido3</h1></ion-label>\n          <ion-input type="text" name="Cliente_Apellido3" [(ngModel)]="clientes.Cliente_Apellido3"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Cliente Nacimiento</h1></ion-label>\n          <ion-input type="date" name="Cliente_Nacimiento" [(ngModel)]="clientes.Cliente_Nacimiento"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Cliente Dirección</h1></ion-label>\n          <ion-input type="text" name="Cliente_Direccion" [(ngModel)]="clientes.Cliente_Direccion"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Cliente Telefono:</h1></ion-label>\n          <ion-input type="text" name="Cliente_Telefono" [(ngModel)]="clientes.Cliente_Telefono"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Cliente Nit:</h1></ion-label>\n          <ion-input type="text" name="Cliente_Nit" [(ngModel)]="clientes.Cliente_Nit"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label><h1>Genero</h1></ion-label>\n          <ion-select [(ngModel)]="clientes.Cliente_Genero">\n            <ion-option value="F">Femenino</ion-option>\n            <ion-option value="M">Masculino</ion-option>\n          </ion-select>\n      </ion-item>\n      \n      <button ion-button block (click)="updateCliente()" color="primary">Actualizar Cliente</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-clientes\update-clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__["a" /* ClientesProvider */]])
    ], UpdateClientesPage);
    return UpdateClientesPage;
}());

//# sourceMappingURL=update-clientes.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateMarcaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_marcas_marcas__ = __webpack_require__(89);
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
 * Generated class for the UpdateMarcaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateMarcaPage = /** @class */ (function () {
    function UpdateMarcaPage(navCtrl, navParams, marcaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.marcaProvider = marcaProvider;
        this.marcas = {
            Marcas_Id: 0,
            Marca_Descripcion: ''
        };
        var data = navParams.get('marcas');
        this.marcas = data;
        console.log(this.marcas);
    }
    UpdateMarcaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateMarcaPage');
    };
    UpdateMarcaPage.prototype.updateMarca = function () {
        this.marcaProvider.updateMarca(this.marcas.Marcas_Id, this.marcas).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    UpdateMarcaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-marca',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-marca\update-marca.html"*/'<!--\n  Generated template for the UpdateMarcaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>update-marca</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Formulario de Actualización de Marca</h1>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked><h1>Ingrese el nombre de la Marca</h1></ion-label>\n      <ion-input type="text" name="Marca_Descripcion" [(ngModel)]="marcas.Marca_Descripcion"></ion-input>\n    </ion-item>\n      \n      \n      <button ion-button block (click)="updateMarca()" color="primary">Crear Usuario</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-marca\update-marca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_marcas_marcas__["a" /* MarcasProvider */]])
    ], UpdateMarcaPage);
    return UpdateMarcaPage;
}());

//# sourceMappingURL=update-marca.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_proveedor_proveedor__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tipoproducto_tipoproducto__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_marcas_marcas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_productos_productos__ = __webpack_require__(157);
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
 * Generated class for the UpdateProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateProductosPage = /** @class */ (function () {
    function UpdateProductosPage(navCtrl, navParams, productosProvider, proveedorProvider, tipoproductoProvider, marcaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productosProvider = productosProvider;
        this.proveedorProvider = proveedorProvider;
        this.tipoproductoProvider = tipoproductoProvider;
        this.marcaProvider = marcaProvider;
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
        var data = navParams.get('producto');
        this.productos = data;
        console.log(this.productos);
        this.getProveedores();
        this.getTipoProducto();
        this.getMarcas();
    }
    UpdateProductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateProductosPage');
    };
    UpdateProductosPage.prototype.getProveedores = function () {
        var _this = this;
        this.proveedorProvider.getProveedor()
            .then(function (data) {
            _this.proveedores = data;
            console.log(_this.proveedores);
        });
    };
    UpdateProductosPage.prototype.getTipoProducto = function () {
        var _this = this;
        this.tipoproductoProvider.getTipoProductos()
            .then(function (data) {
            _this.tipoproductos = data;
            console.log(_this.tipoproductos);
        });
    };
    UpdateProductosPage.prototype.getMarcas = function () {
        var _this = this;
        this.marcaProvider.getMarcas()
            .then(function (data) {
            _this.marcas = data;
            console.log(_this.marcas);
        });
    };
    UpdateProductosPage.prototype.updateProducto = function () {
        this.productosProvider.updateProducto(this.productos.Producto_Id, this.productos).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    UpdateProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-productos',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-productos\update-productos.html"*/'<!--\n  Generated template for the UpdateProductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>update-productos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label stacked><h1>Código de Producto</h1></ion-label>\n          <ion-input type="text" name="Producto_Codigo" [(ngModel)]="productos.Producto_Codigo"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked><h1>Nombre del Producto</h1></ion-label>\n          <ion-input type="text" name="Producto_Nombre" [(ngModel)]="productos.Producto_Nombre"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h1>Costo del Producto</h1></ion-label>\n            <ion-input type="number" step=".01" name="Producto_Costo" [(ngModel)]="productos.Producto_Costo"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked><h1>Precio del Producto</h1></ion-label>\n              <ion-input type="number" step=".01" name="Producto_Precio" [(ngModel)]="productos.Producto_Precio"></ion-input>\n            </ion-item>\n\n            \n\n              <ion-item>\n                  <ion-label stacked><h1>Proveedor</h1></ion-label>\n                  <ion-select [(ngModel)]="productos.Producto_Proveedor">\n                    <ion-option *ngFor="let proveedor of proveedores"  value="{{proveedor.Proveedor_Id}}"> {{proveedor.Proveedor_Nombre}}</ion-option>\n                  </ion-select>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label stacked><h1>Caducidad del Producto</h1></ion-label>\n                  <ion-input type="date" name="Producto_Caducidad" [(ngModel)]="productos.Producto_Caducidad"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label stacked><h1>Tipo Producto</h1></ion-label>\n                  <ion-select [(ngModel)]="productos.Producto_TipoProducto">\n                    <ion-option *ngFor="let tipoproducto of tipoproductos"  value="{{tipoproducto.TipoProducto_Id}}"> {{tipoproducto.TipoProducto_Descripcion}}</ion-option>\n                  </ion-select>\n              </ion-item>\n              \n              <ion-item>\n                  <ion-label stacked><h1>Marcas</h1></ion-label>\n                  <ion-select [(ngModel)]="productos.Producto_Marca">\n                    <ion-option *ngFor="let marca of marcas"  value="{{marca.Marcas_Id}}"> {{marca.Marca_Descripcion}}</ion-option>\n                  </ion-select>\n              </ion-item>\n          \n          <button ion-button block (click)="updateProducto()" color="primary">Crear Producto</button>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-productos\update-productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_productos_productos__["a" /* ProductosProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_proveedor_proveedor__["a" /* ProveedorProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tipoproducto_tipoproducto__["a" /* TipoproductoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_marcas_marcas__["a" /* MarcasProvider */]])
    ], UpdateProductosPage);
    return UpdateProductosPage;
}());

//# sourceMappingURL=update-productos.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateExistenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_existencias_existencias__ = __webpack_require__(159);
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
 * Generated class for the UpdateExistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateExistenciaPage = /** @class */ (function () {
    function UpdateExistenciaPage(navCtrl, navParams, existenciaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.existenciaProvider = existenciaProvider;
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
        this.existencias = {
            Existencia_Id: 0,
            Existencia_Producto: 0,
            Existencia_Cantidad: 0
        };
        this.existenciasy = {
            Existencia_Id: 0,
            Existencia_Producto: 0,
            Existencia_Cantidad: 0
        };
        this.existenciaProvider;
        this.productosx = navParams.get('producto');
        console.log(this.productosx);
    }
    UpdateExistenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateExistenciaPage');
    };
    UpdateExistenciaPage.prototype.getExistenciasPyProd = function (pro) {
        var _this = this;
        this.existenciaProvider.getExistenciasPyProd(pro)
            .subscribe(function (data) {
            _this.existenciasy = data;
            _this.existencias.Existencia_Id = _this.existenciasy.Existencia_Id;
            _this.existencias.Existencia_Producto = _this.productosx.Producto_Id;
            var x = 0;
            x = +_this.existenciasy.Existencia_Cantidad + +_this.existencias.Existencia_Cantidad;
            _this.existencias.Existencia_Cantidad = x;
            _this.update(_this.existencias.Existencia_Id, _this.existencias);
        });
    };
    UpdateExistenciaPage.prototype.update = function (id, producto) {
        this.existenciaProvider.updateExistencia(id, producto).then(function (result) {
            console.log(result);
            console.log('ok');
        }, function (err) {
            console.log(err);
        });
    };
    UpdateExistenciaPage.prototype.triggerUpdate = function () {
        this.getExistenciasPyProd(this.productosx.Producto_Id);
    };
    UpdateExistenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-existencia',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-existencia\update-existencia.html"*/'<!--\n  Generated template for the UpdateExistenciaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>update-existencia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Producto</ion-label>\n      <ion-input type="text" name="Producto_Nombre" [(ngModel)]="productosx.Producto_Nombre" disabled></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Id del Producto</ion-label>\n      <ion-input type="number" name="Existencia_Producto" [(ngModel)]="productosx.Producto_Id" disabled></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Existencia</ion-label>\n      <p>Esto se sumará a lo que ya hay en inventario</p>\n      <ion-input type="number" name="Existencia_Cantidad" [(ngModel)]="existencias.Existencia_Cantidad"></ion-input>\n    </ion-item>\n      \n      \n      <button ion-button block (click)="triggerUpdate()" color="primary">Actualizar Existencia</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-existencia\update-existencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_existencias_existencias__["a" /* ExistenciasProvider */]])
    ], UpdateExistenciaPage);
    return UpdateExistenciaPage;
}());

//# sourceMappingURL=update-existencia.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProveedoresPage; });
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
 * Generated class for the UpdateProveedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateProveedoresPage = /** @class */ (function () {
    function UpdateProveedoresPage(navCtrl, navParams, proveedoresProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedoresProvider = proveedoresProvider;
        this.proveedores = {
            Proveedor_Id: 0,
            Proveedor_Nombre: '',
            Proveedor_Representante: '',
            Proveedor_Telefono: '',
            Proveedor_Correo: ''
        };
        var data = navParams.get('proveedor');
        this.proveedores = data;
        console.log(this.proveedores);
    }
    UpdateProveedoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateProveedoresPage');
    };
    UpdateProveedoresPage.prototype.updateProveedores = function () {
        this.proveedoresProvider.updateProveedores(this.proveedores.Proveedor_Id, this.proveedores).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    UpdateProveedoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-proveedores',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-proveedores\update-proveedores.html"*/'<!--\n  Generated template for the UpdateProveedoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>update-proveedores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked><h1>Nombre del Proveedor</h1></ion-label>\n    \n    <ion-input type="text" name="Proveedor_Nombre" [(ngModel)]="proveedores.Proveedor_Nombre"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked><h1>Nombre del Representante del Proveedor</h1></ion-label>\n    \n    <ion-input type="text" name="Proveedor_Representante" [(ngModel)]="proveedores.Proveedor_Representante"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked><h1>Teléfono del Proveedor </h1></ion-label>\n      \n      <ion-input type="text" name="Proveedor_Telefono" [(ngModel)]="proveedores.Proveedor_Telefono"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n          <ion-label stacked><h1>Correo del Proveedor</h1></ion-label>\n        \n        <ion-input type="email" name="Proveedor_Correo" [(ngModel)]="proveedores.Proveedor_Correo"></ion-input>\n        </ion-item>\n      \n      <button ion-button block (click)="updateProveedores()" color="primary">Crear Proveedor</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-proveedores\update-proveedores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_proveedor_proveedor__["a" /* ProveedorProvider */]])
    ], UpdateProveedoresPage);
    return UpdateProveedoresPage;
}());

//# sourceMappingURL=update-proveedores.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateEmpleadosPage; });
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
 * Generated class for the UpdateEmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateEmpleadosPage = /** @class */ (function () {
    function UpdateEmpleadosPage(navCtrl, navParams, empleadosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.empleadosProvider = empleadosProvider;
        this.empleados = {
            Empleado_Id: 0,
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
        var data = navParams.get('empleado');
        console.log(data);
        this.empleados = data;
    }
    UpdateEmpleadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateEmpleadosPage');
    };
    UpdateEmpleadosPage.prototype.updateEmpleado = function () {
        this.empleadosProvider.updateEmpleado(this.empleados.Empleado_Id, this.empleados).then(function (result) {
            console.log('Update Correcto!');
        }, function (err) {
            console.log(err);
        });
    };
    UpdateEmpleadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-empleados',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-empleados\update-empleados.html"*/'<!--\n  Generated template for the UpdateEmpleadosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n        <ion-buttons left>\n                <button ion-button icon-only menuToggle="left">\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n              </ion-buttons>\n    <ion-title>update-empleados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label stacked><h1>Empleado Nombre1</h1></ion-label>\n      <ion-input type="text" name="Empleado_Nombre1" [(ngModel)]="empleados.Empleado_Nombre1"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked><h1>Empleado Nombre2</h1></ion-label>\n        <ion-input type="text" name="Empleado_Nombre2" [(ngModel)]="empleados.Empleado_Nombre2"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked><h1>Empleado Nombre3</h1></ion-label>\n        <ion-input type="text" name="Empleado_Nombre3" [(ngModel)]="empleados.Empleado_Nombre3"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked><h1>Empleado Apellido1</h1></ion-label>\n        <ion-input type="text" name="Empleado_Apellido1" [(ngModel)]="empleados.Empleado_Apellido1"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Empleado Apellido2</h1></ion-label>\n          <ion-input type="text" name="Empleado_Apellido2" [(ngModel)]="empleados.Empleado_Apellido2"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Empleado Apellido3</h1></ion-label>\n          <ion-input type="text" name="Empleado_Apellido3" [(ngModel)]="empleados.Empleado_Apellido3"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Empleado Nacimiento</h1></ion-label>\n          <ion-input type="date" name="Empleado_Nacimiento" [(ngModel)]="empleados.Empleado_Nacimiento"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Empleado Dirección</h1></ion-label>\n          <ion-input type="text" name="Empleado_Direccion" [(ngModel)]="empleados.Empleado_Direccion"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked><h1>Empleado Telefono:</h1></ion-label>\n          <ion-input type="text" name="Empleado_Telefono" [(ngModel)]="empleados.Empleado_Telefono"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label><h1>Genero</h1></ion-label>\n          <ion-select [(ngModel)]="empleados.Empleado_Genero">\n            <ion-option value="F">Femenino</ion-option>\n            <ion-option value="M">Masculino</ion-option>\n          </ion-select>\n      </ion-item>\n      \n      <button ion-button block (click)="updateEmpleado()" color="primary">Crear Empleado</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-empleados\update-empleados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_empleados_empleados__["a" /* EmpleadosProvider */]])
    ], UpdateEmpleadosPage);
    return UpdateEmpleadosPage;
}());

//# sourceMappingURL=update-empleados.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateTipoproductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tipoproducto_tipoproducto__ = __webpack_require__(91);
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
 * Generated class for the UpdateTipoproductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateTipoproductosPage = /** @class */ (function () {
    function UpdateTipoproductosPage(navCtrl, navParams, tipoproductoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tipoproductoProvider = tipoproductoProvider;
        this.tipoproductos = {
            TipoProducto_Id: 0,
            TipoProducto_Descripcion: ' '
        };
        var data = navParams.get('tipoproductos');
        this.tipoproductos = data;
        console.log(this.tipoproductos);
    }
    UpdateTipoproductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateTipoproductosPage');
    };
    UpdateTipoproductosPage.prototype.updateTipoproducto = function () {
        this.tipoproductoProvider.updateTipoproducto(this.tipoproductos.TipoProducto_Id, this.tipoproductos).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    UpdateTipoproductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-tipoproductos',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-tipoproductos\update-tipoproductos.html"*/'<!--\n  Generated template for the UpdateTipoproductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>update-tipoproductos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked><h1>Ingrese un tipo o categoría de producto</h1></ion-label>\n      <ion-input type="text" name="TipoProducto_Descripcion" [(ngModel)]="tipoproductos.TipoProducto_Descripcion  "></ion-input>\n    </ion-item>\n      \n      \n      <button ion-button block (click)="updateTipoproducto()" color="primary">Crear Tipo Producto</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-tipoproductos\update-tipoproductos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tipoproducto_tipoproducto__["a" /* TipoproductoProvider */]])
    ], UpdateTipoproductosPage);
    return UpdateTipoproductosPage;
}());

//# sourceMappingURL=update-tipoproductos.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empleados_empleados__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__ = __webpack_require__(158);
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
 * Generated class for the UpdateUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateUsuarioPage = /** @class */ (function () {
    function UpdateUsuarioPage(navCtrl, navParams, empleadoProvider, usuariosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.empleadoProvider = empleadoProvider;
        this.usuariosProvider = usuariosProvider;
        this.usuario = {
            Usuario_Id: 0,
            Usuario_Nombre: '',
            Usuario_Password: '',
            Usuario_Estado: '',
            Usuario_Empleado: 0
        };
        var data = navParams.get('usuario');
        this.usuario = data;
        console.log(this.usuario);
        this.getEmpleados();
    }
    UpdateUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateUsuarioPage');
    };
    UpdateUsuarioPage.prototype.getEmpleados = function () {
        var _this = this;
        this.empleadoProvider.getEmpleados()
            .then(function (data) {
            _this.empleados = data;
            console.log(_this.empleados);
        });
    };
    UpdateUsuarioPage.prototype.updateUsuario = function () {
        this.usuariosProvider.updateUsuario(this.usuario.Usuario_Id, this.usuario).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    UpdateUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-usuario',template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-usuario\update-usuario.html"*/'<!--\n  Generated template for the UpdateUsuarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>update-usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Formulario de Actualización de Usuarios</h1>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked><h1>Nombre de Usuario</h1></ion-label>\n      <ion-input type="text" name="Usuario_Nombre" [(ngModel)]="usuario.Usuario_Nombre "></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked><h1>Password</h1></ion-label>\n        <ion-input type="password" name="Usuario_Passsword " [(ngModel)]="usuario.Usuario_Passsword "></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked><h1>Estado de Usuario</h1></ion-label>\n        <ion-select [(ngModel)]="usuario.Usuario_Estado">\n          <ion-option value="A">Activo</ion-option>\n          <ion-option value="I">Inactivo</ion-option>\n        </ion-select>\n    </ion-item>\n\n\n     <ion-item>\n        <ion-label stacked><h1>Empleado al que pertenece el usuario</h1></ion-label>\n        <ion-select [(ngModel)]="usuario.Usuario_Empleado ">\n          <ion-option *ngFor="let empleado of empleados"  value="{{empleado.Empleado_Id}}">{{empleado.Empleado_Nombre1}} {{empleado.Empleado_Apellido1}}</ion-option>\n        </ion-select>\n    </ion-item>\n\n      \n      \n      <button ion-button block (click)="updateUsuario()" color="primary">Crear Usuario</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\pages\update-usuario\update-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_empleados_empleados__["a" /* EmpleadosProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__["a" /* UsuariosProvider */]])
    ], UpdateUsuarioPage);
    return UpdateUsuarioPage;
}());

//# sourceMappingURL=update-usuario.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the VentaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VentaProvider = /** @class */ (function () {
    function VentaProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello VentaProvider Provider');
    }
    VentaProvider.prototype.addVenta = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/Ventas', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    VentaProvider.prototype.updateVenta = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/api/Ventas/' + id, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    VentaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VentaProvider);
    return VentaProvider;
}());

//# sourceMappingURL=venta.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FacturaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FacturaProvider = /** @class */ (function () {
    function FacturaProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello FacturaProvider Provider');
    }
    FacturaProvider.prototype.addFactura = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/Facturas', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    FacturaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FacturaProvider);
    return FacturaProvider;
}());

//# sourceMappingURL=factura.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentadetalleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the VentadetalleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VentadetalleProvider = /** @class */ (function () {
    function VentadetalleProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello VentadetalleProvider Provider');
    }
    //http://localhost:59978/api/GetDetalles/2018-05-07/1
    VentadetalleProvider.prototype.getVentaDetalles = function (datex, id) {
        var _this = this;
        var length = 10;
        var myTruncatedString = datex.substring(0, length);
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/api/GetDetalles/' + myTruncatedString + '/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    VentadetalleProvider.prototype.addVentaDetalle = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/VentaDetalles', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    VentadetalleProvider.prototype.getTotal = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/api/ActualizarTotal/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    VentadetalleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VentadetalleProvider);
    return VentadetalleProvider;
}());

//# sourceMappingURL=ventadetalle.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_card_io__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_global__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_clientes_clientes__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_empleados_empleados__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_usuarios_usuarios__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_marcas_marcas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_tipoproducto_tipoproducto__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_proveedor_proveedor__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_productos_productos__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_update_clientes_update_clientes__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_update_empleados_update_empleados__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_update_usuario_update_usuario__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_update_marca_update_marca__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_update_tipoproductos_update_tipoproductos__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_update_proveedores_update_proveedores__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_update_existencia_update_existencia__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_update_productos_update_productos__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_existencias_existencias__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_venta_venta__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_ventadetalle_ventadetalle__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_factura_factura__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//Pages







//UpdateProductosPage





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_update_clientes_update_clientes__["a" /* UpdateClientesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_update_empleados_update_empleados__["a" /* UpdateEmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_update_usuario_update_usuario__["a" /* UpdateUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_update_marca_update_marca__["a" /* UpdateMarcaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_update_tipoproductos_update_tipoproductos__["a" /* UpdateTipoproductosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_update_proveedores_update_proveedores__["a" /* UpdateProveedoresPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_update_productos_update_productos__["a" /* UpdateProductosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_update_existencia_update_existencia__["a" /* UpdateExistenciaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/clientes-detalle/clientes-detalle.module#ClientesDetallePageModule', name: 'ClientesDetallePage', segment: 'clientes-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-cliente/create-cliente.module#CreateClientePageModule', name: 'CreateClientePage', segment: 'create-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-empleado/create-empleado.module#CreateEmpleadoPageModule', name: 'CreateEmpleadoPage', segment: 'create-empleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-marcas/create-marcas.module#CreateMarcasPageModule', name: 'CreateMarcasPage', segment: 'create-marcas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-producto/create-producto.module#CreateProductoPageModule', name: 'CreateProductoPage', segment: 'create-producto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-proveedor/create-proveedor.module#CreateProveedorPageModule', name: 'CreateProveedorPage', segment: 'create-proveedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-tipoproducto/create-tipoproducto.module#CreateTipoproductoPageModule', name: 'CreateTipoproductoPage', segment: 'create-tipoproducto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-usuario/create-usuario.module#CreateUsuarioPageModule', name: 'CreateUsuarioPage', segment: 'create-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/marca-detalle/marca-detalle.module#MarcaDetallePageModule', name: 'MarcaDetallePage', segment: 'marca-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto-detalle/producto-detalle.module#ProductoDetallePageModule', name: 'ProductoDetallePage', segment: 'producto-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/proveedor-detalle/proveedor-detalle.module#ProveedorDetallePageModule', name: 'ProveedorDetallePage', segment: 'proveedor-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/empleados-detalle/empleados-detalle.module#EmpleadosDetallePageModule', name: 'EmpleadosDetallePage', segment: 'empleados-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/side-menu/side-menu.module#SideMenuPageModule', name: 'SideMenuPage', segment: 'side-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tipoproducto-detalle/tipoproducto-detalle.module#TipoproductoDetallePageModule', name: 'TipoproductoDetallePage', segment: 'tipoproducto-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-clientes/update-clientes.module#UpdateClientesPageModule', name: 'UpdateClientesPage', segment: 'update-clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-empleados/update-empleados.module#UpdateEmpleadosPageModule', name: 'UpdateEmpleadosPage', segment: 'update-empleados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-existencia/update-existencia.module#UpdateExistenciaPageModule', name: 'UpdateExistenciaPage', segment: 'update-existencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-marca/update-marca.module#UpdateMarcaPageModule', name: 'UpdateMarcaPage', segment: 'update-marca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-productos/update-productos.module#UpdateProductosPageModule', name: 'UpdateProductosPage', segment: 'update-productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-proveedores/update-proveedores.module#UpdateProveedoresPageModule', name: 'UpdateProveedoresPage', segment: 'update-proveedores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-tipoproductos/update-tipoproductos.module#UpdateTipoproductosPageModule', name: 'UpdateTipoproductosPage', segment: 'update-tipoproductos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-usuario/update-usuario.module#UpdateUsuarioPageModule', name: 'UpdateUsuarioPage', segment: 'update-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario-detalle/usuario-detalle.module#UsuarioDetallePageModule', name: 'UsuarioDetallePage', segment: 'usuario-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/venta-producto/venta-producto.module#VentaProductoPageModule', name: 'VentaProductoPage', segment: 'venta-producto', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_update_clientes_update_clientes__["a" /* UpdateClientesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_update_empleados_update_empleados__["a" /* UpdateEmpleadosPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_update_usuario_update_usuario__["a" /* UpdateUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_update_marca_update_marca__["a" /* UpdateMarcaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_update_tipoproductos_update_tipoproductos__["a" /* UpdateTipoproductosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_update_proveedores_update_proveedores__["a" /* UpdateProveedoresPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_update_productos_update_productos__["a" /* UpdateProductosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_update_existencia_update_existencia__["a" /* UpdateExistenciaPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_11__app_global__["a" /* AppState */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_card_io__["a" /* CardIO */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_clientes_clientes__["a" /* ClientesProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_empleados_empleados__["a" /* EmpleadosProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_marcas_marcas__["a" /* MarcasProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_tipoproducto_tipoproducto__["a" /* TipoproductoProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_proveedor_proveedor__["a" /* ProveedorProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_productos_productos__["a" /* ProductosProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_existencias_existencias__["a" /* ExistenciasProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_venta_venta__["a" /* VentaProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_ventadetalle_ventadetalle__["a" /* VentadetalleProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_factura_factura__["a" /* FacturaProvider */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashscreen, global, menuCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashscreen = splashscreen;
        this.global = global;
        this.menuCtrl = menuCtrl;
        this.rootPage = 'SideMenuPage';
        this.activePage = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"]();
        this.initializeApp();
        this.rightMenuItems = [
            { icon: 'home', active: true },
            { icon: 'alarm', active: false },
            { icon: 'analytics', active: false },
            { icon: 'archive', active: false },
            { icon: 'basket', active: false },
            { icon: 'body', active: false },
            { icon: 'bookmarks', active: false },
            { icon: 'camera', active: false },
            { icon: 'beer', active: false },
            { icon: 'power', active: false },
        ];
        this.pages = [
            { title: 'Home', component: 'SideMenuPage', active: false, icon: 'home' },
            { title: 'My Address', component: 'SideMenuPage', active: false, icon: 'map' },
            { title: 'My Orders',
                component: 'SideMenuPage', active: false, icon: 'ionic' },
            { title: 'Venta', component: 'VentaProductoPage', active: false, icon: 'ionic' },
            { title: 'Detalles Cliente', component: 'ClientesDetallePage', active: false, icon: 'archive' },
            { title: 'Insertar Cliente', component: 'CreateClientePage', active: false, icon: 'body' },
            { title: 'Detalle Empleado', component: 'EmpleadosDetallePage', active: false, icon: 'bookmarks' },
            { title: 'Create Empleado', component: 'CreateEmpleadoPage', active: false, icon: 'book' },
            { title: 'Detalle Usuarios', component: 'UsuarioDetallePage', active: false, icon: 'map' },
            { title: 'Crear Usuario', component: 'CreateUsuarioPage', active: false, icon: 'map' },
            { title: 'Crear Marca', component: 'CreateMarcasPage', active: false, icon: 'map' },
            { title: 'Detalle Marca', component: 'MarcaDetallePage', active: false, icon: 'map' },
            { title: 'Crear TipoProducto', component: 'CreateTipoproductoPage', active: false, icon: 'map' },
            { title: 'Detalle TipoProducto', component: 'TipoproductoDetallePage', active: false, icon: 'map' },
            { title: 'Crear Proveedor', component: 'CreateProveedorPage', active: false, icon: 'map' },
            { title: 'Detalle Proveedor', component: 'ProveedorDetallePage', active: false, icon: 'map' },
            { title: 'Crear Producto', component: 'CreateProductoPage', active: false, icon: 'map' },
            { title: 'Detalle Producto', component: 'ProductoDetallePage', active: false, icon: 'map' },
        ];
        this.activePage.subscribe(function (selectedPage) {
            _this.pages.map(function (page) {
                page.active = page.title === selectedPage.title;
            });
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.global.set('theme', '');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashscreen.hide();
            _this.menuCtrl.enable(false, 'right');
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage.next(page);
    };
    MyApp.prototype.rightMenuClick = function (item) {
        this.rightMenuItems.map(function (menuItem) { return menuItem.active = false; });
        item.active = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\projects\SecondProjectWP\PuntoVenta\src\app\app.html"*/'<div class="{{global.state[\'theme\']}}">\n  <!--Default Menu-->\n  <ion-menu [content]="content" id="menu-components">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" [class.highlight]="p.active" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!--Side Menu with avatar-->\n  <ion-menu [content]="content" id="menu-avatar">\n    <ion-content>\n      <div #header>\n        <ion-row style="align-items:center;">\n          <ion-col col-3>\n            <img src="assets/icon/icon-email.svg" />\n            <span class="icon-badge">4</span>\n          </ion-col>\n          <ion-col col-6>\n            <img class="user-avatar round" [src]="chosenPicture || placeholder" onerror="this.src=\'assets/img/avatar/girl-avatar.png\'"\n            />\n          </ion-col>\n          <ion-col col-3>\n            <img src="assets/icon/icon-calendar.svg" />\n          </ion-col>\n        </ion-row>\n        <ion-row style="justify-content: center;">\n          <h3>sales@opensourcetechnologies.com</h3>\n        </ion-row>\n      </div>\n      <ion-list no-lines>\n        <button menuClose ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)">\n          <!--<ion-icon [name]="p.icon" item-left></ion-icon>-->\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!--Right side menu-->\n  <ion-menu side="right" type="push" [content]="content" id="menu-right">\n    <ion-content>\n      <ion-list no-lines>\n        <button menuClose icon-only ion-item detail-none (click)="rightMenuClick(item)" *ngFor="let item of rightMenuItems; let i = index">\n          <div *ngIf="item.active" class="active-menu-item"></div>\n          <ion-icon [name]="item.icon"></ion-icon>\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!--Material Design Menu-->\n  <ion-menu [content]="content" id="menu-material">\n    <ion-content>\n      <div class="menu-header">\n        <!--material-design-background-->\n        <img class="user-avatar round" style="height:90px;max-width:90px;" [src]="chosenPicture || placeholder" onerror="this.src=\'assets/img/avatar/girl-avatar.png\'"\n        />\n        <p class="name">OST</p>\n        <p class="e-mail">opensourcetechnologies.com</p>\n      </div>\n      <ion-list no-lines>\n        <button menuClose="left" ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!--Dark Design Menu-->\n  <ion-menu [content]="content" id="menu-dark">\n    <ion-header class="sidemenuHeader">\n      <ion-toolbar>\n        <ion-item no-lines>\n          <ion-avatar item-left>\n            <h2>G</h2>\n          </ion-avatar>\n          <h2>Hello,Guest</h2>\n          <p>Welcome to Opensource Technologies!</p>\n        </ion-item>\n      </ion-toolbar>\n    </ion-header>\n\n\n    <ion-content class="menu">\n      <ion-list>\n        <button menuClose="left" ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon [name]="p.icon" item-left></ion-icon>  {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</div>\n'/*ion-inline-end:"D:\projects\SecondProjectWP\PuntoVenta\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EmpleadosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EmpleadosProvider = /** @class */ (function () {
    function EmpleadosProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello EmpleadosProvider Provider');
    }
    EmpleadosProvider.prototype.getEmpleados = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/api/Empleados').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    EmpleadosProvider.prototype.addEmpleados = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/Empleados', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EmpleadosProvider.prototype.updateEmpleado = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/api/Empleados/' + id, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    EmpleadosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EmpleadosProvider);
    return EmpleadosProvider;
}());

//# sourceMappingURL=empleados.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarcasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MarcasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MarcasProvider = /** @class */ (function () {
    function MarcasProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello EmpleadosProvider Provider');
    }
    MarcasProvider.prototype.getMarcas = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/api/Marcas').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    MarcasProvider.prototype.addMarca = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/Marcas', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MarcasProvider.prototype.updateMarca = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/api/Marcas/' + id, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MarcasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MarcasProvider);
    return MarcasProvider;
}());

//# sourceMappingURL=marcas.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProveedorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProveedorProvider = /** @class */ (function () {
    function ProveedorProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello RestServiceProvider Provider');
    }
    ProveedorProvider.prototype.getProveedor = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/api/Proveedores').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ProveedorProvider.prototype.addProveedor = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/Proveedores', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProveedorProvider.prototype.updateProveedores = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/api/Proveedores/' + id, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProveedorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProveedorProvider);
    return ProveedorProvider;
}());

//# sourceMappingURL=proveedor.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoproductoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TipoproductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TipoproductoProvider = /** @class */ (function () {
    function TipoproductoProvider(http) {
        this.http = http;
        this.apiUrl = 'http://puntoventaz.azurewebsites.net';
        console.log('Hello TipoproductoProvider Provider');
    }
    TipoproductoProvider.prototype.getTipoProductos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/api/TipoProductos').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    TipoproductoProvider.prototype.addtipoProducto = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/api/TipoProductos', data, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TipoproductoProvider.prototype.updateTipoproducto = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/api/TipoProductos/' + id, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TipoproductoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TipoproductoProvider);
    return TipoproductoProvider;
}());

//# sourceMappingURL=tipoproducto.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map