import { Routes } from "@angular/router";
import { HomePage } from "./pages/home/home";

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: HomePage,
    pathMatch: "full",
  },
];
