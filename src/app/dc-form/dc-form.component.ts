import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HelpTextService } from "../_services/help-text.service";
// import {
//   ToolbarService,
//   LinkService,
//   ImageService,
//   HtmlEditorService,
//   RichTextEditorComponent,
// } from "@syncfusion/ej2-angular-richtexteditor";

@Component({
  selector: "app-dc-form",
  templateUrl: "./dc-form.component.html",
  styleUrls: ["./dc-form.component.scss"],
})
export class DcFormComponent implements OnInit {
  pageTitle: string = "Update Help Text";
  rteForm: FormGroup;
  helpTextData: any;
  public tools: object = {
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

  constructor(private formBuilder: FormBuilder, private api: HelpTextService) {}

  ngOnInit() {
    this.api.getHelpText().subscribe((res) => {
      console.log("res", res);
      this.helpTextData = res;
      this.rteForm = this.formBuilder.group({
        pdProject: [res["pdProject"], [Validators.required]],
        pdBudget: [res["pdBudget"], [Validators.required]],
        pdForecast: [res["pdForecast"], [Validators.required]],
        pdRAG: [res["pdRAG"], [Validators.required]],
        pdGoLIve: [res["pdGoLIve"], [Validators.required]],
        ldProject: [res["ldProject"], [Validators.required]],
        ldBudget: [res["ldBudget"], [Validators.required]],
        ldForecast: [res["ldForecast"], [Validators.required]],
        ldRAG: [res["ldRAG"], [Validators.required]],
        ldGoLive: [res["ldGoLive"], [Validators.required]],
        lsvProject: [res["lsvProject"], [Validators.required]],
        lsvProjectList: [res["lsvProjectList"], [Validators.required]],
        lsvGoLive: [res["lsvGoLive"], [Validators.required]],
        lsdProject: [res["lsdProject"], [Validators.required]],
        lsdProjectList: [res["lsdProjectList"], [Validators.required]],
        lsdGoLive: [res["lsdGoLive"], [Validators.required]],
        lrdProject: [res["lrdProject"], [Validators.required]],
        lrdProjectList: [res["lrdProjectList"], [Validators.required]],
        lrdGoLive: [res["lrdGoLive"], [Validators.required]],
        lotGoLive: [res["lotGoLive"], [Validators.required]],
        cdProject: [res["cdProject"], [Validators.required]],
        cdBudget: [res["cdBudget"], [Validators.required]],
        cdForecast: [res["cdForecast"], [Validators.required]],
        cdRAG: [res["cdRAG"], [Validators.required]],
        cdGoLive: [res["cdGoLive"], [Validators.required]],
        csdProject: [res["csdProject"], [Validators.required]],
        csdProjectList: [res["csdProjectList"], [Validators.required]],
        csdGoLive: [res["csdGoLive"], [Validators.required]],
        crdProject: [res["crdProject"], [Validators.required]],
        crdProjectList: [res["crdProjectList"], [Validators.required]],
        crdGoLive: [res["crdGoLive"], [Validators.required]],
        casGoLive: [res["casGoLive"], [Validators.required]],
        vdProject: [res["vdProject"], [Validators.required]],
        vdBudget: [res["vdBudget"], [Validators.required]],
        vdForecast: [res["vdForecast"], [Validators.required]],
        vdRAG: [res["vdRAG"], [Validators.required]],
        vdGoLive: [res["vdGoLive"], [Validators.required]],
        vsvProject: [res["vsvProject"], [Validators.required]],
        vsvProjectList: [res["vsvProjectList"], [Validators.required]],
        vsvGoLive: [res["vsvGoLive"], [Validators.required]],
        vsdProject: [res["vsdProject"], [Validators.required]],
        vsdProjectList: [res["vsdProjectList"], [Validators.required]],
        vsdGoLive: [res["vsdGoLive"], [Validators.required]],
        vrdProject: [res["vrdProject"], [Validators.required]],
        vrdProjectList: [res["vrdProjectList"], [Validators.required]],
        vrdGoLive: [res["vrdGoLive"], [Validators.required]],
        vltGoLive: [res["vltGoLive"], [Validators.required]],
      });
    });
  }

  // rteCreated(): void {
  //   this.rteEle.element.focus();
  // }

  onSubmit(): void {
    if (!this.rteForm.valid) {
      return;
    }
    console.log("this.rteForm.value", JSON.stringify(this.rteForm.value));
    alert("Form submitted successfully");
  }
}
