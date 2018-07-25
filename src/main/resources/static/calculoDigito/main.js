(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app.api.ts":
/*!************************!*\
  !*** ./src/app.api.ts ***!
  \************************/
/*! exports provided: URL_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_API", function() { return URL_API; });
var URL_API = 'http://localhost:9090/api/v1';


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-calculo-digito></app-calculo-digito>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _calculoDigito_calculo_digito_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculoDigito/calculo-digito.service */ "./src/app/calculoDigito/calculo-digito.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculoDigito_calculo_digito_calculo_digito_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculoDigito/calculo-digito/calculo-digito.component */ "./src/app/calculoDigito/calculo-digito/calculo-digito.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _calculoDigito_calculo_digito_calculo_digito_component__WEBPACK_IMPORTED_MODULE_4__["CalculoDigitoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"]
            ],
            providers: [_calculoDigito_calculo_digito_service__WEBPACK_IMPORTED_MODULE_0__["CalculoDigitoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculoDigito/calculo-digito.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/calculoDigito/calculo-digito.service.ts ***!
  \*********************************************************/
/*! exports provided: CalculoDigitoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoDigitoService", function() { return CalculoDigitoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.api */ "./src/app.api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalculoDigitoService = /** @class */ (function () {
    function CalculoDigitoService(http) {
        this.http = http;
    }
    //realiza um post do arquivo que foi selecionado e o envia pro back-end
    CalculoDigitoService.prototype.gerarMatriculasDV = function (arquivo) {
        return this.http.post(_app_api__WEBPACK_IMPORTED_MODULE_2__["URL_API"] + "/gerarMatriculasComDV", arquivo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    //realiza um post do arquivo que foi selecionado e o envia pro back-end
    CalculoDigitoService.prototype.matriculasParaVerificar = function (arquivo) {
        return this.http.post(_app_api__WEBPACK_IMPORTED_MODULE_2__["URL_API"] + "/matriculasParaVerificar", arquivo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    CalculoDigitoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CalculoDigitoService);
    return CalculoDigitoService;
}());



/***/ }),

/***/ "./src/app/calculoDigito/calculo-digito/calculo-digito.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/calculoDigito/calculo-digito/calculo-digito.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>1- Ler as matrículas que estão no arquivo matriculasSemDV.txt e gerar um arquivo de saída matriculasComDV.txt com as matrículas completas, conforme regra de formação descrita acima.</p>\n  <p>Selecionar um arquivo TXT com as matriculas e ele vai gerar um arquivo com as matriculas e seus respectivos DV</p>\n</div>\n\n<div class=\"ui-g-4\">\n  <input type=\"file\" (change)=\"gerarMatriculasComDV($event)\" name=\"arquivo\" accept='text/plain'>\n</div>\n\n<br /><br />\n\n<div>\n  <p>2- Ler as matrículas que estão no arquivo matriculasParaVerificar.txt e gerar um arquivo matriculasVerificadas.txt com as matrículas e um indicador de \"verdadeiro\" ou \"falso\" ao lado de cada matrícula, separado por espaço.</p>\n  <p>Selecionar um arquivo TXT com as matriculas e será realizado um arquivo chamado matriculasVerificadas.txt contendo a verificação se as matriculas são \"verdadeiro\" ou \"falso\".</p>\n</div>\n\n<div class=\"ui-g-4\">\n  <input type=\"file\" (change)=\"matriculasParaVerificar($event)\" name=\"arquivo\" accept='text/plain'>\n</div>\n"

/***/ }),

/***/ "./src/app/calculoDigito/calculo-digito/calculo-digito.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/calculoDigito/calculo-digito/calculo-digito.component.ts ***!
  \**************************************************************************/
/*! exports provided: CalculoDigitoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoDigitoComponent", function() { return CalculoDigitoComponent; });
/* harmony import */ var _calculo_digito_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../calculo-digito.service */ "./src/app/calculoDigito/calculo-digito.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculoDigitoComponent = /** @class */ (function () {
    function CalculoDigitoComponent(service) {
        this.service = service;
    }
    CalculoDigitoComponent.prototype.ngOnInit = function () { };
    CalculoDigitoComponent.prototype.gerarMatriculasComDV = function (e) {
        var target = e.target;
        for (var i = 0; i < target.files.length; i++) {
            this.gerarMatricasDV(target.files[i], 'matriculasComDV');
        }
    };
    CalculoDigitoComponent.prototype.matriculasParaVerificar = function (e) {
        var target = e.target;
        for (var i = 0; i < target.files.length; i++) {
            this.verificarMatriculas(target.files[i], 'matriculasVerificadas');
        }
    };
    CalculoDigitoComponent.prototype.gerarMatricasDV = function (arquivo, fileName) {
        var _this = this;
        var formData = new FormData();
        formData.append("text", arquivo, arquivo.name);
        var reader = new FileReader();
        var r = new FileReader();
        reader.readAsBinaryString(arquivo);
        reader.onload = function (e) {
            //aqui o conteudo do txt e envia pro back-end para ser processado.
            var b64 = reader.result;
            _this.service.gerarMatriculasDV(b64).subscribe(function (data) {
                _this.downloadArquivo = data; //recebe a resposta do back-end e adiciona na variavel downloadArquivo do tipo Arquivo
                //apos o arquivo ser processado no back-end ele realiza o download do txt através desse metódo.
                _this.downloadFile(_this.downloadArquivo.arquivo, fileName);
            });
        };
    };
    CalculoDigitoComponent.prototype.verificarMatriculas = function (arquivo, fileName) {
        var _this = this;
        var formData = new FormData();
        formData.append("text", arquivo, arquivo.name);
        var reader = new FileReader();
        var r = new FileReader();
        reader.readAsBinaryString(arquivo);
        reader.onload = function (e) {
            var b64 = reader.result;
            _this.service.matriculasParaVerificar(b64).subscribe(function (data) {
                _this.downloadArquivo = data; //recebe a resposta do back-end e adiciona na variavel downloadArquivo do tipo Arquivo
                _this.downloadFile(_this.downloadArquivo.arquivo, fileName);
            });
        };
    };
    CalculoDigitoComponent.prototype.downloadFile = function (data, fileName) {
        /*o back-end retorna uma string base64 do arquivo
        e aqui eu o transformo em blob para conseguir realizar o download.
        */
        var byteCharacters = atob(data);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], { type: "application/octet-stream" }); //conversão de byteArray para Blob
        fileName = fileName + ".txt"; //nome do arquivo e extensão
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fileName);
        }
        else {
            var link = document.createElement('a');
            link.setAttribute("type", "hidden");
            link.download = fileName;
            link.href = window.URL.createObjectURL(blob);
            document.body.appendChild(link);
            link.click();
        }
        window.location.reload(); //faz um reload na página após o processamento.
    };
    CalculoDigitoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-calculo-digito",
            template: __webpack_require__(/*! ./calculo-digito.component.html */ "./src/app/calculoDigito/calculo-digito/calculo-digito.component.html")
        }),
        __metadata("design:paramtypes", [_calculo_digito_service__WEBPACK_IMPORTED_MODULE_0__["CalculoDigitoService"]])
    ], CalculoDigitoComponent);
    return CalculoDigitoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular-workspace\calculoDigito\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map