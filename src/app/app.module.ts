import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BikeofdayComponent } from './home/bikeofday/bikeofday.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BikeService } from './services/bike.service';
import { UserService } from './services/user.service';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { MylistComponent } from './dashboard/mylist/mylist.component';
import { NavComponent } from './nav/nav.component';
import { CreateComponent } from './dashboard/mylist/create/create.component';
import { EditComponent } from './dashboard/mylist/edit/edit.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikeofdayComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BrowseComponent,
    MylistComponent,
    NavComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CookieModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [UserService, BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
