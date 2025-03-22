import { Component, Input } from '@angular/core';
import { WeatherDatas } from '../../../../models/interfaces/WeatherDatas';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss'
})
export class WeatherCardComponent {
  //Dados recebidos pelo component pai
  @Input() weatherDatasInput!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
