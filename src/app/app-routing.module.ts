import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'weather',
    loadChildren: () => import('../app/weather/weather.module').then( (m)=>m.WeatherModule)
  },
  {
    path:'**',redirectTo:'weather'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
