import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
  RichTextEditorComponent,
} from "@syncfusion/ej2-angular-richtexteditor";

@Component({
  selector: "app-dc-form",
  templateUrl: "./dc-form.component.html",
  styleUrls: ["./dc-form.component.scss"],
})
export class DcFormComponent implements OnInit {
  pageTitle: string = "Update Help Text";
  // updateTextForm: FormGroup;
  rteForm: FormGroup;
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

  // @ViewChild("fromRTE", { static: false })
  // private rteEle: RichTextEditorComponent;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.rteForm = this.formBuilder.group({
      pdProject: [null, [Validators.required]],
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
    });
  }

  // rteCreated(): void {
  //   this.rteEle.element.focus();
  // }

  onSubmit(): void {
    if (!this.rteForm.valid) {
      return;
    }
    console.log("this.rteForm.value", this.rteForm.value);
    alert("Form submitted successfully");
  }

  // submit() {
  //   if (!this.updateTextForm.valid) {
  //     return;
  //   }
  //   console.log(this.updateTextForm.value);
  // }
}
