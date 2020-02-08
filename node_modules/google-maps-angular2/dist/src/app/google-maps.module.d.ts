import { ModuleWithProviders } from '@angular/core';
import { UserServiceConfig } from './google-maps.class';
export declare class GoogleMapsModule {
    /**
     * Configure core method
     * @param config
     * @returns {{ngModule: GoogleMapsModule, providers: [{provide: UserServiceConfig, useValue: UserServiceConfig}]}}
     */
    static forRoot(config: UserServiceConfig): ModuleWithProviders;
}
