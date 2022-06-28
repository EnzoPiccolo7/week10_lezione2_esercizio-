import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { UsersComponent } from './components/users/users.component';
import  {  RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
const routes: Routes =  [
  {path: 'index',
component: HomeComponent},
  {path: 'contact',
   component: ContactComponent},
  {path: 'users',
   component:  UsersComponent},
  {path: '',
   pathMatch: 'full', 
   redirectTo: 'index'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    ContactComponent,
    UsersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
