import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainLayoutComponent } from './layout/main/main-layout.component';
import { OutsideLayoutComponent } from './layout/outside/outside-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainLayoutComponent,
    OutsideLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // Site routes goes here
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
        ]
      },
      // outside layout routes
      {
        path: '',
        component: OutsideLayoutComponent,
        children: [
          { path: 'login', component: LoginComponent, pathMatch: 'full'},
        ]
      },
      // no layout routes
      // otherwise redirect to home
      { path: '**', component: PageNotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
