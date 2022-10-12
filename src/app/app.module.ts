import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { UserdataComponent } from './userdata/userdata.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UserdataComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
