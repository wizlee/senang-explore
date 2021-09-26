import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  ApiModule,
  Configuration,
  ConfigurationParameters,
} from 'senang-swagger-client';
import { NewHostComponent } from './new-host/new-host.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

function apiConfigFactory (): Configuration {
  const params: ConfigurationParameters = {
    apiKeys:
      {'Authorization': 'Bearer YiVsvMU4KkSuMauaDWT_jVuTT56AQkAQHrtk4OfZBXZeybQEEgzgeAS4YyY1gDqHNPPbju5j2eg5.s5bIpRr4MfStivKz8jHZ79'},
  };
  return new Configuration(params);
}

const routes: Routes = [
  {
    path: "host-your-home",
    component: NewHostComponent,
  },
  {
    path: "**",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [AppComponent, NewHostComponent, HomeComponent],
  imports: [
    BrowserModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
