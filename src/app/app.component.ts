import { Component, OnInit, ViewChild } from "@angular/core";
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  ResolveEnd,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { AuthenticationService } from "./_services";
import { User } from "./_models";
import { MatSidenav } from "@angular/material/sidenav";
import * as DataActions from "./Store/data.action";
import DataState from "./Store/data.state";
import { PageLoaderService } from "./services/page-loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "igtPmoDashboard";
  sidenavOpen: boolean = true;
  particleStyle: object = {};
  particleParams: object = {};
  particleWidth: number = 100;
  particleHeight: number = 100;
  sidenavMode: string = "side";
  currentUser: User;
  @ViewChild("drawer", { static: false }) drawer: MatSidenav;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private store: Store<{ data: DataState }>,
    private pageLoaderService: PageLoaderService
  ) {
    router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
    this.authenticationService.currentUser.subscribe((x) => {
      this.currentUser = x;
      if (x !== null) {
        this.store.dispatch(DataActions.BeginGetDataAction());
      }
    });
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.pageLoaderService.isLoading.next(true);
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      document.getElementsByClassName("mat-drawer-content")[0].scrollTo(0, 0);
      if (window.innerWidth <= 768) {
        this.sidenavOpen = false;
      }
      setTimeout(() => {
        this.pageLoaderService.isLoading.next(false);
      }, 800);
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

  toggleLeftNav() {
    this.drawer.toggle();
    this.sidenavOpen = !this.sidenavOpen;
  }

  openForm() {
    this.router.navigate(["/dcForm"]);
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.sidenavMode = "over";
      this.sidenavOpen = false;
    }

    this.particleStyle = {
      position: "fixed",
      width: "100%",
      height: "200px",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
    };
    this.particleParams = {
      particles: {
        number: {
          value: 150,
        },
        color: {
          value: "#ff0000",
        },
        shape: {
          type: "circle",
        },
      },
    };
  }
}
