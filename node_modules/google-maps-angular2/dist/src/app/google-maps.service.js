"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var google_maps_class_1 = require("./google-maps.class");
var GoogleMapsService = (function () {
    /**
     * Constructor
     * @param config
     */
    function GoogleMapsService(config) {
        if (config) {
            this.url = config.url + '&callback=__onGoogleLoaded';
        }
        else {
            throw new Error('Module have been forRoot({API_KEY: your api key})');
        }
    }
    /**
     * Configure core method
     * @param config
     * @returns {{ngModule: GoogleMapsService, providers: [{provide: UserServiceConfig, useValue: UserServiceConfig}]}}
     */
    GoogleMapsService.forRoot = function (config) {
        return {
            ngModule: GoogleMapsService,
            providers: [
                { provide: google_maps_class_1.UserServiceConfig, useValue: config }
            ]
        };
    };
    /**
     * Load script
     */
    GoogleMapsService.prototype.loadScript = function () {
        if (!document.getElementById('google-maps-angular2')) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "" + this.url;
            script.id = 'google-maps-angular2';
            document.head.appendChild(script);
        }
    };
    Object.defineProperty(GoogleMapsService.prototype, "init", {
        /**
         * Wait callback and return google.maps object
         * @returns {Promise<any>}
         */
        get: function () {
            var _this = this;
            if (!this.loadAPI) {
                this.loadAPI = new Promise(function (resolve) {
                    window['__onGoogleLoaded'] = function (ev) {
                        resolve(window['google']['maps']);
                    };
                    _this.loadScript();
                });
            }
            return this.loadAPI;
        },
        enumerable: true,
        configurable: true
    });
    return GoogleMapsService;
}());
GoogleMapsService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
GoogleMapsService.ctorParameters = function () { return [
    { type: google_maps_class_1.UserServiceConfig, decorators: [{ type: core_1.Optional },] },
]; };
exports.GoogleMapsService = GoogleMapsService;
//# sourceMappingURL=google-maps.service.js.map