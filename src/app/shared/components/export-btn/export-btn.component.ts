import { Component, EventEmitter, Input, OnInit, Output,  ViewEncapsulation } from '@angular/core';
import { ExportData } from 'src/app/services/export-data';

@Component({
  selector: 'app-export-btn',
  templateUrl: './export-btn.component.html',
  styleUrls: ['./export-btn.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExportBtnComponent implements OnInit {
  @Input() type: string
  @Input() child
  @Input() id: string
  @Output() golivecalendar = new EventEmitter<boolean>();
  constructor( private exportData: ExportData) { }

  ngOnInit() {
  }

  exportBusinessData(business) {
    if(business === 'chart') {
      this.exportData.pdfSaver(this.id,document.getElementById(this.id))
    } else {
     this.golivecalendar.emit()
    }
  }

}
