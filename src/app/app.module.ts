import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDividerModule } from "@angular/material/divider";
import { MaterialModule } from "./shared/material/material.module";
import { environment as env } from '../environments/environment';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule,
    MatDividerModule,
    AuthModule.forRoot({
      ...env.auth0,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
