
import { Component } from '@angular/core';
 
import { Http } from '@angular/http';
@Component({
    selector: 'points_of_interest',
    templateUrl: './InterestPoints.component.html' 
})
export class InterestPointsComponent {
    public places: string[];
    constructor(http: Http) {
        this.places = ["75th St. Medical Center","7-Eleven", "Exxon"]
    }
    
 
}
