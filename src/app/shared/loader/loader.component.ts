import { Component, OnInit } from "@angular/core";
import { LoaderService } from "../../services/loader.service";
import { PageLoaderService } from "../../services/page-loader.service";
import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent implements OnInit {
  loading: boolean;
  constructor(
    private loaderService: LoaderService,
    private pageLoaderService: PageLoaderService
  ) {
    // this.loaderService.isLoading.subscribe((v) => {
    //   this.loading = v;
    // });
    // this.pageLoaderService.isLoading.subscribe((v) => {
    //   this.loading = v;
    // });
    combineLatest(
      this.loaderService.isLoading,
      this.pageLoaderService.isLoading
    )
      .pipe(
        map(([first, second]) => {
          return { first, second };
        })
      )
      .subscribe((res) => {
        if (res.first === true || res.second === true) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      });
  }

  ngOnInit() {}
}
