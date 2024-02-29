import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {HomeComponent} from "./components/home/home.component";
import { EventComponent } from './components/event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TournamentComponent } from './components/tournaments/tournaments.component';
import { ValidarEmailDirective } from './directives/validar-email.directive';
import { ValidarPasswordDirective } from './directives/validar-password.directive';
import { ValidarRepetirDirective } from './directives/validar-repetir.directive';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    EventComponent,
    LoginComponent,
    RegisterComponent,
    TournamentComponent,
    ValidarEmailDirective,
    ValidarPasswordDirective,
    ValidarRepetirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
