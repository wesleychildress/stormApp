import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { WeatherComponent } from './components/Weather/weather.component';
import { WeatherService } from'./components/Services/WeatherService';
import { EsriLoaderService } from 'angular2-esri-loader';
import { InterestPointsComponent } from './components/InterestPoints/InterestPoints.component';
import { EvacuationMapComponent } from './components/EvacuationMap/EvacuationMap.component';
import { AngularEsriModule } from 'angular-esri-components';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        WeatherComponent,
        FetchDataComponent,
        InterestPointsComponent,
        EvacuationMapComponent,

    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AngularEsriModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'weather', pathMatch: 'full' },
            { path: 'points_of_interest', component: InterestPointsComponent },
            { path: 'weather', component: WeatherComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'evac-map', component: EvacuationMapComponent },
            { path: '**', redirectTo: 'weather' }
        ])
    ],

    providers: [EsriLoaderService],
   
  
})
export class AppModuleShared {
}
