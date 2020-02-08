import { ModuleWithProviders } from '@angular/core';
import { UserServiceConfig } from './google-maps.class';
export declare class GoogleMapsService {
    /**
     * Google Maps Api link
     */
    readonly url: string;
    /**
     * Promise to callback
     */
    private loadAPI;
    /**
     * Configure core method
     * @param config
     * @returns {{ngModule: GoogleMapsService, providers: [{provide: UserServiceConfig, useValue: UserServiceConfig}]}}
     */
    static forRoot(config: UserServiceConfig): ModuleWithProviders;
    /**
     * Constructor
     * @param config
     */
    constructor(config: UserServiceConfig);
    /**
     * Load script
     */
    private loadScript();
    /**
     * Wait callback and return google.maps object
     * @returns {Promise<any>}
     */
    readonly init: Promise<any>;
}
