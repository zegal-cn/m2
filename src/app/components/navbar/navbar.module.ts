import { NgModule } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MdButtonModule, MdMenuModule } from "@angular/material";
import { RouterModule } from "@angular/router";
// import { ThemePickerModule } from "../theme-picker/theme-picker";

import { NavBarComponent } from "./navbar";

@NgModule({
  imports: [
    MdButtonModule,
    MdMenuModule,
    RouterModule,
    // ThemePickerModule
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
})
export class NavBarModule {}
