import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from '../../../../models/interfaces/WeatherDatas';
import { Subject } from 'rxjs/internal/Subject';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCardComponent } from "../../components/weather-card/weather-card.component";

@Component({
  selector: 'app-weather-home',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, WeatherCardComponent],
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();
  @Input() initialCityName = 'Rio de Janeiro';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor( private readonly weatherService: WeatherService) {}


  ngOnInit(): void{
    this.getWeatherDatas(this.initialCityName);
  }


  getWeatherDatas(cityName: string): void {
     this.weatherService
     .getWeatherDatas(cityName)
     .pipe(takeUntil(this.destroy$))
     .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas)
      },
      error: (error) => console.log(error),
     });
  }

  onSubmit(): void{
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
