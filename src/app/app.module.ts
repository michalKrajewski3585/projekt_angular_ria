import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NewMainComponent } from './MyComponent/new-main/new-main.component';
import { BannerComponent } from './MyComponents/banner/banner.component';
import { SidebarComponent } from './MyComponents/sidebar/sidebar.component';
import { ContentComponent } from './MyComponents/content/content.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';
import { FormComponent } from './MyComponents/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CitiesComponent } from './Pages/cities/cities.component';
import { FirestoreModule } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewMainComponent, 
    ContentComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CitiesComponent,
    BrowserAnimationsModule,
    SidebarComponent,
    BannerComponent,
    FormComponent,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
