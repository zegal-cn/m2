import { Component, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MdCommonModule } from "@angular/material/core";
import { MatTableModule } from "@angular/material";
// import {SvgViewerModule} from '../../shared/svg-viewer/svg-viewer';
// import {MdButtonModule} from '@angular/material';
// import {FooterModule} from '../../shared/footer/footer';
import { RouterModule } from "@angular/router";

import { CdkTableModule } from "@angular/cdk/table";
// import {ComponentPageTitle} from '../page-title/page-title';
import { TablePage } from "./table";

@NgModule({
  imports: [
    // SvgViewerModule,
    // MdButtonModule,
    // FooterModule,
    MdCommonModule,
    MatTableModule,
    FormsModule,
    RouterModule,
  ],
  exports: [TablePage],
  declarations: [TablePage],
})
export class TablePageModule {}
