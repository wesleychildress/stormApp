import { Component } from '@angular/core';
import { WeatherService } from '../Services/WeatherService';
import { WeatherModel } from '../app/Model';
import { Http } from '@angular/http';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
})
export class WeatherComponent {
    svc: WeatherService;
    forecast: WeatherModel;
    weather: boolean;
    weekday: string[]=[];
    caption: string;
    precipProb: string[]=[];
    precipInten: number=0;
    stormInterval: number;
    site: string;

    constructor(http : Http){
        this.svc = new WeatherService(http);
    }

    async ngOnInit()
    {
        await this.svc.getWeather().then(async response => {
            this.forecast = await response
        });

        /** convert timestamp into day of week */
        for(var i = 0; i < 5; i++) {
            var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var xx = new Date();
            xx.setTime((this.forecast.daily.data[i].time)*1000);
            this.weekday.push(Wday[xx.getDay()]);
        }
        /** decimal to % for chance of percipitation */
        for(var i = 0; i < 5; i++) {
            var p = this.forecast.daily.data[i].precipProbability*100;
            this.precipProb.push(p.toFixed());
        }

        for(var i = 0; i < 24; i++)
            this.precipInten = (this.precipInten)+(this.forecast.hourly.data[i].precipIntensity);
        
        /** if(this.precipInten<2)
              this.stormInterval = 0;*/
        if((this.precipInten>=2)&&(this.precipInten<3))
              this.stormInterval = 10;
        if((this.precipInten>=3)&&(this.precipInten<4))
              this.stormInterval = 25;
        if((this.precipInten>=4)&&(this.precipInten<6))
              this.stormInterval = 50;
        if((this.precipInten>=6)&&(this.precipInten<8))
              this.stormInterval = 100;

        if(typeof this.forecast.alerts === "undefined")             this.caption = "No Current Alerts";         else {             this.caption = this.forecast.alerts[0].title;
            this.site = this.forecast.alerts[0].uri;
        }

        for (var i = 0; i < 5; i++) {
            console.log(this.weekday[i]);
            console.log(this.forecast.hourly.data[i].precipIntensity);
            console.log(this.precipInten);
            console.log(this.site);
            console.log(this.forecast.alerts[0].title);


        }


    }
}


