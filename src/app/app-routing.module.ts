import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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

const routes: Routes = [
  // {path: '', component: AuthLayoutComponent, children: [
  //     {path: '', redirectTo: '/login', pathMatch: 'full'},
  //     {path: 'login', component: LoginPageComponent },
  //     {path: 'register', component: RegisterComponent },
  //   ]},
  // {path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
  //     {path: 'home', component: HomePageComponent},
  //     {path: 'category', component: CategoryPageComponent}
  //   ]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'questions', component: QuestionsPageComponent},
  {path: 'discussions', component: DiscussionsPageComponent},

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
