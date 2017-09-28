import { Routes } from "@angular/router";
import { HomePage } from "./pages/home/home";
import { TablePage } from "./pages/table/table";

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: HomePage,
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomePage,
    // pathMatch: "full",
  },
  {
    path: "table",
    component: TablePage,
    // pathMatch: "full",
  },
];
