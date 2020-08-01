import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HelpTextService } from "../_services/help-text.service";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import * as DataActions from "../Store/data.action";
import DataState from "../Store/data.state";
import Swal from "sweetalert2";

@Component({
  selector: "app-dc-form",
  templateUrl: "./dc-form.component.html",
  styleUrls: ["./dc-form.component.scss"],
})
export class DcFormComponent implements OnInit {
  pageTitle: string = "Update Help Text";
  rteForm: FormGroup;
  helpTextData: any;
  dataList$: Observable<DataState>;
  DataSubscription: Subscription;
  DataLists: any[] = [];
  dataError;
  public tools: object = {
    enableFloating: false,
    items: [
      "Bold",
      "Italic",
      "Underline",
      "StrikeThrough",
      "|",
      "Formats",
      "Alignments",
      "|",
      "OrderedList",
      "UnorderedList",
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private api: HelpTextService,
    private store: Store<{ data: DataState }>
  ) {
    this.dataList$ = store.pipe(select("data"));
  }

  ngOnInit() {
    this.rteForm = this.formBuilder.group({
      pdProject: [null, [Validators.required]],
      pdLotProject: [null, [Validators.required]],
      pdCasProject: [null, [Validators.required]],
      pdVltProject: [null, [Validators.required]],
      pdBudget: [null, [Validators.required]],
      pdForecast: [null, [Validators.required]],
      pdRAG: [null, [Validators.required]],
      pdGoLIve: [null, [Validators.required]],
      ldProject: [null, [Validators.required]],
      ldBudget: [null, [Validators.required]],
      ldForecast: [null, [Validators.required]],
      ldRAG: [null, [Validators.required]],
      ldGoLive: [null, [Validators.required]],
      lsvProject: [null, [Validators.required]],
      lsvProjectList: [null, [Validators.required]],
      lsvGoLive: [null, [Validators.required]],
      lsdProject: [null, [Validators.required]],
      lsdProjectList: [null, [Validators.required]],
      lsdGoLive: [null, [Validators.required]],
      lrdProject: [null, [Validators.required]],
      lrdProjectList: [null, [Validators.required]],
      lrdGoLive: [null, [Validators.required]],
      lotGoLive: [null, [Validators.required]],
      cdProject: [null, [Validators.required]],
      cdBudget: [null, [Validators.required]],
      cdForecast: [null, [Validators.required]],
      cdRAG: [null, [Validators.required]],
      cdGoLive: [null, [Validators.required]],
      csdProject: [null, [Validators.required]],
      csdProjectList: [null, [Validators.required]],
      csdGoLive: [null, [Validators.required]],
      crdProject: [null, [Validators.required]],
      crdProjectList: [null, [Validators.required]],
      crdGoLive: [null, [Validators.required]],
      casGoLive: [null, [Validators.required]],
      vdProject: [null, [Validators.required]],
      vdBudget: [null, [Validators.required]],
      vdForecast: [null, [Validators.required]],
      vdRAG: [null, [Validators.required]],
      vdGoLive: [null, [Validators.required]],
      vsvProject: [null, [Validators.required]],
      vsvProjectList: [null, [Validators.required]],
      vsvGoLive: [null, [Validators.required]],
      vsdProject: [null, [Validators.required]],
      vsdProjectList: [null, [Validators.required]],
      vsdGoLive: [null, [Validators.required]],
      vrdProject: [null, [Validators.required]],
      vrdProjectList: [null, [Validators.required]],
      vrdGoLive: [null, [Validators.required]],
      vltGoLive: [null, [Validators.required]],
    });
    this.DataSubscription = this.dataList$
      .pipe(map((x) => x))
      .subscribe((data) => {
        if (data.Data.length) {
          this.DataLists = { ...data.Data[3] };
          this.rteForm = this.formBuilder.group({
            pdProject: [this.DataLists["pdProject"], [Validators.required]],
            pdLotProject: [
              this.DataLists["pdLotProject"],
              [Validators.required],
            ],
            pdCasProject: [
              this.DataLists["pdCasProject"],
              [Validators.required],
            ],
            pdVltProject: [
              this.DataLists["pdVltProject"],
              [Validators.required],
            ],
            pdBudget: [this.DataLists["pdBudget"], [Validators.required]],
            pdForecast: [this.DataLists["pdForecast"], [Validators.required]],
            pdRAG: [this.DataLists["pdRAG"], [Validators.required]],
            pdGoLIve: [this.DataLists["pdGoLIve"], [Validators.required]],
            ldProject: [this.DataLists["ldProject"], [Validators.required]],
            ldBudget: [this.DataLists["ldBudget"], [Validators.required]],
            ldForecast: [this.DataLists["ldForecast"], [Validators.required]],
            ldRAG: [this.DataLists["ldRAG"], [Validators.required]],
            ldGoLive: [this.DataLists["ldGoLive"], [Validators.required]],
            lsvProject: [this.DataLists["lsvProject"], [Validators.required]],
            lsvProjectList: [
              this.DataLists["lsvProjectList"],
              [Validators.required],
            ],
            lsvGoLive: [this.DataLists["lsvGoLive"], [Validators.required]],
            lsdProjectList: [
              this.DataLists["lsdProjectList"],
              [Validators.required],
            ],
            lsdProject: [this.DataLists["lsdProject"], [Validators.required]],

            lsdGoLive: [this.DataLists["lsdGoLive"], [Validators.required]],
            lrdProject: [this.DataLists["lrdProject"], [Validators.required]],
            lrdProjectList: [
              this.DataLists["lrdProjectList"],
              [Validators.required],
            ],
            lrdGoLive: [this.DataLists["lrdGoLive"], [Validators.required]],
            lotGoLive: [this.DataLists["lotGoLive"], [Validators.required]],
            cdProject: [this.DataLists["cdProject"], [Validators.required]],
            cdBudget: [this.DataLists["cdBudget"], [Validators.required]],
            cdForecast: [this.DataLists["cdForecast"], [Validators.required]],
            cdRAG: [this.DataLists["cdRAG"], [Validators.required]],
            cdGoLive: [this.DataLists["cdGoLive"], [Validators.required]],
            csdProject: [this.DataLists["csdProject"], [Validators.required]],
            csdProjectList: [
              this.DataLists["csdProjectList"],
              [Validators.required],
            ],
            csdGoLive: [this.DataLists["csdGoLive"], [Validators.required]],
            crdProject: [this.DataLists["crdProject"], [Validators.required]],
            crdProjectList: [
              this.DataLists["crdProjectList"],
              [Validators.required],
            ],
            crdGoLive: [this.DataLists["crdGoLive"], [Validators.required]],
            casGoLive: [this.DataLists["casGoLive"], [Validators.required]],
            vdProject: [this.DataLists["vdProject"], [Validators.required]],
            vdBudget: [this.DataLists["vdBudget"], [Validators.required]],
            vdForecast: [this.DataLists["vdForecast"], [Validators.required]],
            vdRAG: [this.DataLists["vdRAG"], [Validators.required]],
            vdGoLive: [this.DataLists["vdGoLive"], [Validators.required]],
            vsvProject: [this.DataLists["vsvProject"], [Validators.required]],
            vsvProjectList: [
              this.DataLists["vsvProjectList"],
              [Validators.required],
            ],
            vsvGoLive: [this.DataLists["vsvGoLive"], [Validators.required]],
            vsdProject: [this.DataLists["vsdProject"], [Validators.required]],
            vsdProjectList: [
              this.DataLists["vsdProjectList"],
              [Validators.required],
            ],
            vsdGoLive: [this.DataLists["vsdGoLive"], [Validators.required]],
            vrdProject: [this.DataLists["vrdProject"], [Validators.required]],
            vrdProjectList: [
              this.DataLists["vrdProjectList"],
              [Validators.required],
            ],
            vrdGoLive: [this.DataLists["vrdGoLive"], [Validators.required]],
            vltGoLive: [this.DataLists["vltGoLive"], [Validators.required]],
          });
        }
      });
  }

  onSubmit(): void {
    if (!this.rteForm.valid) {
      return;
    }
    this.api.updateHelpText(this.rteForm.value).subscribe((res) => {
      this.store.dispatch(DataActions.BeginGetDataAction());
      Swal.fire("Success!", "Help text updated successfully!", "success");
    });
  }
}
