export declare class EsriLoaderService {
    constructor();
    isLoaded(): Element;
    load(options?: Object): Promise<Function>;
    loadModules(moduleNames: string[]): Promise<any[]>;
    require(moduleNames: string[], callback: Function): void;
}
