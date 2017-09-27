import { Component, ViewEncapsulation } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "app";

  // constructor(router: Router) {
  //   let previousRoute = router.routerState.snapshot.url;

  //   router.events
  //     .filter(event => event instanceof NavigationEnd)
  //     .subscribe((data: NavigationEnd) => {
  //       // We want to reset the scroll position on navigation except when navigating within
  //       // the documentation for a single component.
  //       if (
  //         !isNavigationWithinComponentView(
  //           previousRoute,
  //           data.urlAfterRedirects
  //         )
  //       ) {
  //         resetScrollPosition();
  //       }

  //       previousRoute = data.urlAfterRedirects;
  //     });
  // }
}

function isNavigationWithinComponentView(oldUrl: string, newUrl: string) {
  const componentViewExpression = /components\/(\w+)/;
  return (
    oldUrl &&
    newUrl &&
    componentViewExpression.test(oldUrl) &&
    componentViewExpression.test(newUrl) &&
    oldUrl.match(componentViewExpression)[1] ===
      newUrl.match(componentViewExpression)[1]
  );
}

function resetScrollPosition() {
  if (typeof document === "object" && document) {
    const sidenavContent = document.querySelector(".mat-drawer-content");
    if (sidenavContent) {
      sidenavContent.scrollTop = 0;
    }
  }
}
