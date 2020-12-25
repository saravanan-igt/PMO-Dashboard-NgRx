import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-project-category",
  templateUrl: "./project-category.component.html",
  styleUrls: ["./project-category.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCategoryComponent implements OnInit {
  @Input() data: any;
  @Input() chartTitle: string;
  @Input() height;
  @Input() info;
  chartOption;
  echartsInstance;

  totalProjects;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.chartOption = {
      tooltip: {
        trigger: "item",
        textStyle: {
          fontSize: 12,
        },
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        show: true,
        bottom: -5,
        itemWidth: 12,
        itemHeight: 10,
      },
      series: [
        {
          name: "Total Projects",
          type: "pie",
          top: "2%",
          left: 0,
          right: 0,
          bottom: "20%",
          radius: ["50%", "80%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            formatter: "{@2012}",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "15",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: true,
            length: 6,
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: "#fff",
          },
          data: this.data,
        },
      ],
      color: ["rgb(0,86,184)", "rgb(0,187,211)", "rgb(254,192,7)"],
    };
    this.chartOption.series[0].data = this.data;
    this.totalProjects = this.data.reduce((acc, item) => {
      let value = item.name !== "Total" ? item.value : 0;
      return (acc += value);
    }, 0);
  }
}
