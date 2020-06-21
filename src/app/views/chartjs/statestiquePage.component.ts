import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import swal from 'sweetalert';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import {StatestiqueService} from './service/statistique.service'
import { from } from 'rxjs';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  templateUrl: './statestiquePages.component.html',
 // styleUrls: ['./utilisateur.component.css']
})
export class StatestiquePages     {
  public jaimePage = {
    idUser:'',
    idpage:''
   }
  //  public veuxpage = {
  //   idUser:'',
  //   idpage:''
  //  }
   nombrejaime : any ='';
   nommbrevu : any ='';
  value :any =''
  table : any=[]
  constructor( private service: StatestiqueService) { }
  ngOnInit() {
    this. getJaimPage()
    this.getnombreVu()
  
  }

  getJaimPage () {
    this.jaimePage.idUser = JSON.parse(sessionStorage.getItem("idUseStatq"));
    this.jaimePage.idpage = JSON.parse(sessionStorage.getItem("StatestiquePage"));
    this.service.GetStatestique(this.jaimePage).subscribe((data) =>{
      this.nombrejaime = data.body
     
      

    })

  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['28 Days', 'Week', 'Day'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  
   public barChartData: ChartDataSets[] = [
    { data: [0], label: 'The number of times any content from your Page' }
  ];
    

  getnombreVu () {
    this.jaimePage.idUser = JSON.parse(sessionStorage.getItem("idUseStatq"));
    this.jaimePage.idpage = JSON.parse(sessionStorage.getItem("StatestiquePage"));
    this.service.getStatestique(this.jaimePage).subscribe((data) =>{
     // console.log(data.body)
      this.nommbrevu = data.body
      console.log(this.nommbrevu)

      this.nommbrevu.forEach((dataset) => {
        this.barChartData[0]['data'].unshift(dataset.values[0].value)
        //this.value = dataset.values[0].value
       // this.table.push(this.value)
       
        
      });
     // this.table.push(this.value)
     // console.log( this.table)
      
      
     

    })



  }


 lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
 
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
 public lineChart2Legend = false;
 public lineChart2Type = 'line';


//  chartOptions = {
//   responsive: true
// };
// chartData = [
//   { data: ['this.table[0]','this.table[0]','this.table[0]'], label: 'Daily: The number of times any content from your Page' },
//   { data: ['this.table[0]','this.table[1]','this.table[0]'], label: 'Weekly: The number of times any content from your Page' },
//   { data: ['this.table[0]','this.table[1]','this.table[2]'], label: '28 Days: The number of times any content from your Page' }
// ];
// chartLabels = ['Day', 'week', 'days_28'];










  
}

