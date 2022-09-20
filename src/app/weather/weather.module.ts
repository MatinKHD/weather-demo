import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WeatherRoutingModule} from './weather-routing.module';
import {NavComponent} from './nav/nav.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {WeatherComponent} from "./weather.component";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";


@NgModule({
  declarations: [
    WeatherComponent,
    NavComponent,
    MainComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ]
})
export class WeatherModule { }
