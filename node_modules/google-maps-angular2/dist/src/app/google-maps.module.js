"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var google_maps_service_1 = require("./google-maps.service");
var google_maps_class_1 = require("./google-maps.class");
var GoogleMapsModule = (function () {
    function GoogleMapsModule() {
    }
    /**
     * Configure core method
     * @param config
     * @returns {{ngModule: GoogleMapsModule, providers: [{provide: UserServiceConfig, useValue: UserServiceConfig}]}}
     */
    GoogleMapsModule.forRoot = function (config) {
        return {
            ngModule: GoogleMapsModule,
            providers: [
                { provide: google_maps_class_1.UserServiceConfig, useValue: config }
            ]
        };
    };
    return GoogleMapsModule;
}());
GoogleMapsModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                providers: [google_maps_service_1.GoogleMapsService]
            },] },
];
/** @nocollapse */
GoogleMapsModule.ctorParameters = function () { return []; };
exports.GoogleMapsModule = GoogleMapsModule;
//# sourceMappingURL=google-maps.module.js.map