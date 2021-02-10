import { Injectable } from "@angular/core";
import jspdf from 'jspdf';
// import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { PageLoaderService } from './page-loader.service';
import * as FileSaver from 'file-saver';
import { Workbook } from 'exceljs';
import * as arrowFile from './up_arrow.js';

// declare var jspdf: any;
@Injectable({
  providedIn: "root",
})
export class ExportData {


  docDefinition: { content: any[]; };
  constructor(private pageLoaderService: PageLoaderService) { }
  pdfSaver(id, data) {
    console.log("id is",id);
    // debugger
    this.pageLoaderService.isLoading.next(true);
    const options = {
      background: 'white',
      scale: 3,
      format: [4, 2],
      imageQuality: 1,
      init: function () { },
      logging: true, //make it as false when in prod
      onclone: (arg1:Document) => {

        const canvasonlyEls=Array.from(arg1.getElementsByClassName('.canvasonly') as HTMLCollectionOf<HTMLElement>)
        canvasonlyEls.forEach((el) => { 
         el.style.opacity="1"; });
// document.body.append(arg1.body)
       document.body.querySelectorAll<HTMLElement>('.canvasonly').forEach((el) => { el.classList.add('d-none');
      el.style.opacity="1"; });
        // arg1.body.querySelectorAll('#forecast .canvasonly').forEach((el) => { el.classList.remove('d-none') });
        const titleEL = arg1.getElementById(''+id+'.page-title');
        if (titleEL) {
          titleEL.style.color = 'black'
        }
      },
    };
    document.body.querySelectorAll<HTMLElement>('.canvasonly').forEach((el) => { el.classList.remove('d-none');
    el.style.opacity="0"; })
    html2canvas(data, options).then(canvas => {
      console.log(data, options, id)
      let pdf = new jspdf('p', 'px', 'a4');
      console.log("pdf");
      const pageWidth = pdf.internal.pageSize.width;
      const imgWidth = pdf.internal.pageSize.width - 40;
      console.log(imgWidth);
      let pageHeight;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      console.log(canvas);

      let heightLeft = imgHeight;
      // console.log(heightLeft);
      const contentDataURL = canvas.toDataURL("image/jpeg", 1.0);
      pageHeight = pdf.internal.pageSize.height;
      console.log(pageHeight, canvas.height, imgHeight);
      // Before adding new content
      let y = 500; // Height position of new content
      const position = 20;
      pdf.addImage(contentDataURL, 'JPEG', 3, position, imgWidth, heightLeft);
      let totalpages = Math.ceil(imgHeight / (pageHeight - 40)) - 1;
      console.log('totalpages', totalpages);
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, pageHeight - 40, pageWidth, pageHeight, 'F');
      for (let i = 1; i <= totalpages; i++) {
        pdf.addPage();
        pdf.addImage(contentDataURL, 'JPEG', 3, - (pageHeight * i) + 20 + (40 * i), imgWidth, heightLeft);
        pdf.rect(0, pageHeight - 40, pageWidth, pageHeight, 'F');
      }
     
      // pdf.addHTML(document.body,function() {
      // pdf.addHTML(document.getElementById("id"),function(){
        console.log("entering");
        // pdf.addHTML(document.body).then(()=> {
          console.log("inside1");

      let pdfName;
      if (id === "all")
        pdfName = "Bussiness_Chart.pdf";
      else if (id === "business")
        pdfName = "Portfolio_Project_Count.pdf";
      else if (id === "budget")
        pdfName = "Portfolio_Budget_Count.pdf";
      else if (id === "forecast")
        pdfName = "Portfolio_CostplanVSCurrentForecast_Count.pdf";
      else if (id === "projects")
        pdfName = "Portfolio_RAGStatus_Count.pdf";
      else if (id === "Vltbusiness")
        pdfName = "VLT_business.pdf";
      else if (id === "Vltbudget")
        pdfName = "VLT_budget.pdf";
      else if (id === "VLTforecast")
        pdfName = "VLT_forecast.pdf";
      else if (id === "vltprojects")
        pdfName = "VLT_RAGStatus_Count.pdf";
      else if (id === "Vltall")
        pdfName = "VLT_Bussiness_Chart.pdf";
      else if (id === "lottall")
        pdfName = "Lottery_Chart.pdf";
      else if (id === "Lotterybusiness")
        pdfName = "Lotterybusiness.pdf";
      else if (id === "lotterybudget")
        pdfName = "lotterybudget.pdf";
      else if (id === "Lottery_RAG_status")
        pdfName = "Lottery_RAG_status.pdf";
      else if (id === "LotteryCostplanning")
        pdfName = "LotteryCostplanning.pdf";
      else if (id === "LotteryServicesbusiness")
        pdfName = "LotteryServicesbusiness.pdf";
      else if (id === "LotteryPlannedProjects")
        pdfName = "LotteryPlannedProjects.pdf";
      else if (id === "lotterysvall")
        pdfName = "Lottery_Services.pdf";
      else if (id === "lottall-svc")
        pdfName = "lottall-svc.pdf";
      else if (id === "LotterySVCbusiness")
        pdfName = "Lottery_SVC_business.pdf";
      else if (id === "LotterySystemdeliverybusiness")
        pdfName = "Lottery_System_delivery_business.pdf";
      else if (id === "RND_Dashboard")
        pdfName = "RND_Dashboard.pdf";
      else if (id === "RNDbusiness")
        pdfName = "RNDbusiness.pdf";
      else if (id === "gameProjectall")
        pdfName = "gameProjectall.pdf";
      else if (id === "gameProjectall")
        pdfName = "gameProjectall.pdf";
      else if (id === "gameProjectbusiness")
        pdfName = "gameProjectbusiness.pdf";
      else if (id === "gameProjectbudget")
        pdfName = "gameProjectbudget.pdf";
      else if (id === "gameProjectplanning")
        pdfName = "gameProjectplanning.pdf";
      else if (id === "gameCustomerbusiness")
        pdfName = "gameCustomerbusiness.pdf"
      else if (id === "Vltsdcharts")
        pdfName = "Vltsdcharts.pdf";
      else if (id === "Vltsdbusiness")
        pdfName = "Vltsdbusiness.pdf";
      else if (id === "VltCustomerall")
        pdfName = "VltCustomerall.pdf";
      else if (id === "Vltcustomerbusiness")
        pdfName = "Vltcustomerbusiness.pdf";
      else if (id === "vltRNDall")
        pdfName = "vltRNDall.pdf";
      else if (id === "VltRNDbusiness")
        pdfName = "VltRNDbusiness.pdf";
        // console.log("inside2");
        
      // pdf.addHTML(document.body,function() {
       pdf.save(pdfName);
      // });
      console.log("outside");
      
      // pdf.save(pdfName);
      this.pageLoaderService.isLoading.next(false);
    });
  }
  
  public exportAsExcelFile(calendarData): void {
    this.pageLoaderService.isLoading.next(true);
    let header
    let updatedRowData = []
    let rowData
    calendarData.forEach((data, key) => {
      header = Object.keys(data)
      header = this.changePosition(header, 6, 25)
      rowData = Object.values(data)
      rowData = this.changePosition(rowData, 6, 25)
      updatedRowData.push(rowData)
    })
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('go-live-calendar');
    worksheet.addRow(header);
    updatedRowData.forEach((d, i) => {
      const row = worksheet.addRow(d);
      let color = '';
      if (d.indexOf('Casino') > -1) {
        color = 'fdd2f2';
      } else if (d.indexOf('VLT') > -1) {
        color = 'c5e9fd';
      }
      row.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: color }
      };
      let cellColor = ''
      row.eachCell((cell, number) => {
        if (cell.value === 'R') {
          cellColor = 'c10a0a'
        } else if (cell.value === 'A') {
          cellColor = 'fcc201'
        } else if (cell.value === 'G') {
          cellColor = '07bd37'
        }
        if (cell.value === 'arrow_drop_up') {
          cell.value = null
          const arrow = workbook.addImage({
            base64: arrowFile.arrowBase64,
            extension: 'png',
          });
          worksheet.addImage(arrow, {
            tl: { col: Number(cell.col) - 1, row: Number(cell.row) - 1 },
            ext: { width: 30, height: 30 }
          });
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: cellColor }
          }
        }
      })
      worksheet.getColumn(1).width = 40;
      worksheet.getColumn(3).width = 30;
      worksheet.getColumn(6).width = 20;
    });
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      FileSaver.saveAs(blob, 'go-live-calendar.xlsx');
      this.pageLoaderService.isLoading.next(false);
    });
  }

  changePosition(data, from, to) {
    let numOfDeletedElm = 1;
    const elm = data.splice(from, numOfDeletedElm)[0];
    numOfDeletedElm = 0;
    data.splice(to, numOfDeletedElm, elm);
    return data
  }
}
