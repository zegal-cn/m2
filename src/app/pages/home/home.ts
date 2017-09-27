import { Component, NgModule, OnInit } from "@angular/core";
// import {SvgViewerModule} from '../../shared/svg-viewer/svg-viewer';
// import {MdButtonModule} from '@angular/material';
// import {FooterModule} from '../../shared/footer/footer';
// import {RouterModule} from '@angular/router';
// import {ComponentPageTitle} from '../page-title/page-title';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.html",
  styleUrls: ["./homepage.scss"],
})
export class HomePage implements OnInit {
  constructor() // public _componentPageTitle: ComponentPageTitle
  {
  }

  ngOnInit(): void {
    // this._componentPageTitle.title = "";
  }
}
