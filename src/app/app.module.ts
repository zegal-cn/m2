import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MatTableModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { MdNativeDateModule } from "@angular/material";
// import { ExampleModule } from "@angular/material-examples";

import { AppComponent } from "./app.component";
import { APP_ROUTES } from "./app.routes";

import { NavBarModule } from "./components/navbar/navbar.module";

import { HomePage } from "./pages/home/home";
import { TablePage } from "./pages/table/table";

@NgModule({
  declarations: [AppComponent, HomePage, TablePage],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // ExampleModule,
    FormsModule,
    HttpModule,
    MatTableModule,
    MdNativeDateModule,
    RouterModule.forRoot(APP_ROUTES),
    NavBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
