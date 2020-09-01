import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpservicesService } from './services/httpservices.service';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component'



@NgModule({
  declarations: [
    AppComponent,
    RepoDetailsComponent,
    NavBarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
