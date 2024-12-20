import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExampapersComponent } from './pages/exampapers/exampapers.component';
import { QandAComponent } from './pages/qand-a/qand-a.component';
import { SupportComponent } from './pages/support/support.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'exampapers', component: ExampapersComponent },
  { path: 'qanda', component: QandAComponent },
  { path: 'support', component: SupportComponent },
];
@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent, // Ensure HeaderComponent is here
      FooterComponent  // Ensure FooterComponent is here
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }