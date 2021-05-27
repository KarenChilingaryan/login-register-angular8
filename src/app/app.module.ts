import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthLayoutsComponent } from './shared/layouts/auth-layout/auth-layouts.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { DiscussionsPageComponent } from './pages/discussions-page/discussions-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { CategoriesComponent } from './shared/components/categories/categories.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutsComponent,
    SiteLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    QuestionsPageComponent,
    DiscussionsPageComponent,
    HeaderComponent,
    FooterComponent,
    UserPageComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
