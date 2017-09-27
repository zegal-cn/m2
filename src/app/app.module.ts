import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { MdNativeDateModule } from "@angular/material";
// import { ExampleModule } from "@angular/material-examples";

import { AppComponent } from "./app.component";

import { NavBarModule } from "./shared/navbar/navbar";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // ExampleModule,
    FormsModule,
    HttpModule,
    MdNativeDateModule,

    NavBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
