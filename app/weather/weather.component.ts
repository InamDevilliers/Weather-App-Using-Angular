import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  cities = ['Bengaluru', 'Chikkaballapura', 'Manchenahalli', 'Yelahanka', 'Paris', 'Tokyo',];
  selectedCity = '';
  weatherData: any;
  newCityName = '';

  constructor(private weatherService: WeatherService) { }

  search() {
    if (this.selectedCity) {
      this.weatherService.getWeatherByCity(this.selectedCity).subscribe(
        (data) => {
          this.weatherData = data;
        },
        (error) => {
          console.error('Error fetching weather data:', error);
        }
      );
    }else{
      this.weatherData = null;
    }
  }

  addNewCity() {
    if (this.newCityName) {
      this.cities.push(this.newCityName);
      this.newCityName = '';
    }
  }

  removeCity(city: string){
    const index = this.cities.indexOf(city);
    if(index != -1){
      this.cities.splice(index, 1);
    }
  }
}
