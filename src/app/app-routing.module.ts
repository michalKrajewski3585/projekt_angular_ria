import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';
import { FormComponent } from './MyComponents/form/form.component';
import { CitiesComponent } from './Pages/cities/cities.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { animation: 'isLeft'}},
  {path: 'cities', component: CitiesComponent, data: { animation: 'isRight'}},
  {path: 'about', component: AboutComponent, data: { animation: 'isRight'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
