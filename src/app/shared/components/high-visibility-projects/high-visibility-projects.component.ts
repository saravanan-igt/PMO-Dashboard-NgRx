import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { Observable, Subscription } from 'rxjs';
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import DataState from 'src/app/Store/data.state';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { MatCheckboxModule } from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';
import { HelpTextService } from 'src/app/_services/help-text.service';

import * as DataActions from 'src/app/Store/data.action';
import Swal from "sweetalert2";

import { Router, ActivatedRoute } from "@angular/router";

import { AppComponent } from "../../../app.component";
import value from '*.json';


export interface PeriodicElement {
  rag: string
  project_name: string
  project_id: string
  business_vertical: string
  business_horizontal: string
  KeyProjectIndicator: string
  progress: string
}

@Component({
  selector: 'app-high-visibility-projects',
  templateUrl: './high-visibility-projects.component.html',
  styleUrls: ['./high-visibility-projects.component.scss']
})
export class HighVisibilityProjectsComponent implements OnInit,AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 

  DataLists: any[] = [];
  customerProjects;
  rndProjects;
  gameProjects;
  customerActiveProjects;
  helpText;
  vltProjects;
  DataSubscription: Subscription;
  dataList$: Observable<DataState>
  dataSource;
  elementList;
  projectIdCheckedList: any = [];
  selection = new SelectionModel<PeriodicElement>(true, []);
  projectList;
  isChecked=false;

  appComObj: any;

  typeStatus = "All";
  businessStatus = "All";
  typeList = [
    { value: "All", viewValue: "All" },
    { value: "SD", viewValue: "System Delivery Projects" },
    { value: "SV", viewValue: "Service Delivery Projects" },
    { value: "SVC", viewValue: "Customer Support" },
    { value: "PD", viewValue: "R&D Projects" },
  ];
  businessVerticals = [
    { value: "All", viewValue: "All" },
    { value: "Lottery", viewValue: "Lottery" },
    { value: "Casino", viewValue: "Casino" },
    { value: "VLT", viewValue: "VLT" }
  ]

  constructor(private store: Store<{ data: DataState }>, 
              private api: HelpTextService,
              private route: ActivatedRoute,
              private router: Router,
              private appObj: AppComponent) { 
    this.dataList$ = store.pipe(select("data")); 
    
  }

  displayedColumns: string[] = ['ID', 'PROJECT', 'PROJECT STATUS', 'SELECT'];

  checkboxEvent(rowValue, checkboxEvent) {
    let index = this.projectIdCheckedList.indexOf(rowValue.project_id)
    console.log("Checked!!!", rowValue.project_id, "  index of:  ", index)
    console.log(checkboxEvent)

    if(this.projectIdCheckedList.includes(rowValue.project_id))
    {
      this.projectIdCheckedList.splice(index, 1);
    }
    else {
      this.projectIdCheckedList.push(rowValue.project_id);
    }

    if(this.projectIdCheckedList.length == 0) {
      this.isChecked = false;
    }else {
      this.isChecked = true;
    }

    console.log(this.projectIdCheckedList)
  }
  
  onSubmit() {
    this.appObj.toggleCheckedta(false);
    console.log("OnSubmit clicked!!")
    console.log(this.projectIdCheckedList)
    let items = {
      "Projectid" : this.projectIdCheckedList.join(",")
    }

    console.log(items)
    this.api.updateHighVisibilityProject(items).subscribe((res) => {
      console.log("Fifth")
      this.store.dispatch(DataActions.BeginGetDataAction({ payload: "None" }));
      Swal.fire("Success!", "High Visibility Projects updated successfully!", "success");
    });
  }

  ngAfterViewInit() {
    
  }

  ngOnInit() {
    this.DataSubscription = this.dataList$
    .pipe(map((x) => x))
    .subscribe((data) => {
      if (data.Data.length) {
        // console.log(data.Data)
        this.DataLists = data.Data;
        this.helpText = this.DataLists[3];
        this.customerProjects = this.DataLists[0].customer;
        this.rndProjects = this.DataLists[0].rnd;
        this.customerActiveProjects = this.customerProjects.projectList.Active;
        this.gameProjects = this.DataLists[1];
        this.vltProjects = this.DataLists[2];
        

        let projectList_temp = [
          ...this.customerProjects.projectList.Active,
          ...this.customerProjects.projectList.Planned,
          ...this.customerProjects.projectList.Completed,
          ...this.rndProjects.projectList.Active,
          ...this.rndProjects.projectList.Planned,
          ...this.rndProjects.projectList.Completed,
          ...this.gameProjects.rnd.projects.active,
          ...this.gameProjects.rnd.projects.closed,
          ...this.gameProjects.rnd.projects.planned,
          ...this.gameProjects.sd.projects.active,
          ...this.gameProjects.sd.projects.closed,
          ...this.gameProjects.sd.projects.planned,
          ...this.vltProjects.rnd.projects.active,
          ...this.vltProjects.rnd.projects.closed,
          ...this.vltProjects.rnd.projects.planned,
          ...this.vltProjects.sd.projects.active,
          ...this.vltProjects.sd.projects.closed,
          ...this.vltProjects.sd.projects.planned,
          ...this.vltProjects.sv.projects.active,
          ...this.vltProjects.sv.projects.closed,
          ...this.vltProjects.sv.projects.planned
        ].map((item) => {
          let ID = item.PROJECT_ID ? item.PROJECT_ID : item.ID, RAG, 
          Project = item.PROJECT_NAME ? item.PROJECT_NAME : item.Project, 
          Vertical = item.VERTICAL ? item.VERTICAL : item.vertical,
          Horizontal = item.BUSINESS_TYPE ? item.BUSINESS_TYPE : item.BusinessTypeCode,
          Progress = item.Progress ? item.Progress : item. ProjectStatus;
          if(item.OVERALL_RISK == "Green"){
            RAG = "G"
          }else if(item.OVERALL_RISK == "Red"){
            RAG = "R"
          }else if(item.OVERALL_RISK == "Amber") {
            RAG = "A"
          }else {
            RAG = item.RAG
          }

          if(Horizontal == "R&D"){
            Horizontal = "PD"
          }

          return {
            ...item,
            "project_id" : ID,
            "rag": RAG,
            "project_name" : Project,  
            "business_vertical" : Vertical,
            "business_horizontal" : Horizontal,
            "progress" : Progress
          };
        });

        this.projectList = projectList_temp

        this.projectIdCheckedList = this.projectList
        .filter((item) => item.KeyProjectIndicator === 1 )
        .map((obj) => {
          let id = obj.PROJECT_ID ? obj.PROJECT_ID : obj.ID
          return id;
        })

        // console.log(this.projectIdCheckedList)

        // console.log("Project List------------->>>")
        // console.log(this.projectList)

        this.dataSource = new MatTableDataSource<PeriodicElement>(this.projectList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = 
        (data: PeriodicElement, filter: string) => {
          if(filter == "All" && this.typeStatus == "All" && this.businessStatus == "All")
          {
            return data;
          }else if(this.typeStatus != "All" && this.businessStatus != "All") {
            if(data.business_horizontal == this.typeStatus) {
              if(data.business_vertical == this.businessStatus){
                return data;
              }
            }
          }else if(this.businessStatus != "All" && this.typeStatus === "All"){
            return data.business_vertical == this.businessStatus;
          }else if(this.businessStatus == "All" && this.typeStatus != "All") {
            return data.business_horizontal == this.typeStatus; 
          }
        }
      }
    });
  }

  applyFilter(filterValue: string, type: string) {
    console.log(filterValue)
    if(type == "type") {
      this.typeStatus = filterValue;
    } else {
      this.businessStatus = filterValue;
    }
    this.dataSource.filter = filterValue;
  }

}