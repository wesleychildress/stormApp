"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var esri_loader_1 = require("esri-loader");
var EsriLoaderService = (function () {
    function EsriLoaderService() {
    }
    EsriLoaderService.prototype.isLoaded = function () {
        return esri_loader_1.isLoaded();
    };
    // lazy load the ArcGIS API for JavaScript
    EsriLoaderService.prototype.load = function (options) {
        return new Promise(function (resolve, reject) {
            // don't try to load a second time
            if (esri_loader_1.isLoaded()) {
                resolve(esri_loader_1.dojoRequire);
            }
            // wrap bootstrap in a promise
            esri_loader_1.bootstrap(function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(esri_loader_1.dojoRequire);
                }
            }, options);
        });
    };
    // wrap Dojo require in a promise
    EsriLoaderService.prototype.loadModules = function (moduleNames) {
        return new Promise(function (resolve) {
            esri_loader_1.dojoRequire(moduleNames, function () {
                var modules = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    modules[_i] = arguments[_i];
                }
                resolve(modules);
            });
        });
    };
    // convenience function to allow calling Dojo require w/ callback
    EsriLoaderService.prototype.require = function (moduleNames, callback) {
        return esri_loader_1.dojoRequire(moduleNames, callback);
    };
    return EsriLoaderService;
}());
EsriLoaderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EsriLoaderService);
exports.EsriLoaderService = EsriLoaderService;
//# sourceMappingURL=esri-loader.service.js.map