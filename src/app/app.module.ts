import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from "./pages/home/home.component";

import { HttpModule } from "@angular/http";

import { routing } from "./app.route";
import { SidebarComponent } from './components/side-bar/side-bar.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    UserComponent,
    TasksComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
