import { Component, NgModule, OnInit } from "@angular/core";
// import {SvgViewerModule} from '../../shared/svg-viewer/svg-viewer';
// import {MdButtonModule} from '@angular/material';
// import {FooterModule} from '../../shared/footer/footer';
import { RouterModule } from "@angular/router";
// import {ComponentPageTitle} from '../page-title/page-title';
import { HomePage } from "./home";

@NgModule({
  imports: [
    // SvgViewerModule,
    // MdButtonModule,
    // FooterModule,
    RouterModule,
  ],
  exports: [HomePage],
  declarations: [HomePage],
})
export class HomepageModule {}
