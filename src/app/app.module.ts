import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpservicesService } from './services/httpservices.service';
import { RepoDetailsComponent } from './repo-details/repo-details.component'



@NgModule({
  declarations: [
    AppComponent,
    RepoDetailsComponent
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
