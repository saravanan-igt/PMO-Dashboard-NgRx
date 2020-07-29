import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent implements OnInit {
  @Input() projectList: any[];
  @Input() cardTitle: string;
  trackByFn(index, item) {
    return item["ID"];
  }
  constructor() {}

  ngOnInit() {}
}
