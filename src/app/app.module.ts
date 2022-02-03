import { AuthService } from 'src/app/auth.service';
import { AuthGuard } from './auth.guard';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from  
    '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Register/register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegisterComponent,
    HomeComponent,
    ForgotComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule, 
    MatSnackBarModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [DataService, AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
