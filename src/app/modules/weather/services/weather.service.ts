import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  private readonly apiKey = '8dbd6fccac1caa5d02879fee0b84f592';

  constructor(private readonly http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&APPID=${this.apiKey}`,
      {}
    );    
  }




}
