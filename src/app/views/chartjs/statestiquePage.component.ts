import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import swal from 'sweetalert';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { Router } from '@angular/router';
import {StatestiqueService} from './service/statistique.service'
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
 
   nombrejaime : any ='';
   nommbrevu : any ='';
  value :any =''
  nombreAffich: any =''



 
  
  
  constructor( private service: StatestiqueService) { }
  ngOnInit() {
    this. getJaimPage()
    this.getnombreVu()
    this.getnombreAfficher()
  
  }
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
  public pieChartColors = [
    {
      backgroundColor: [],
    },
  ];
  
   public barChartData: ChartDataSets[] = [
    { data: [0], label: 'The number of times any content from your Page' }
  ];
    

  getnombreVu () {
    this.jaimePage.idUser = JSON.parse(sessionStorage.getItem("idUseStatq"));
    this.jaimePage.idpage = JSON.parse(sessionStorage.getItem("StatestiquePage"));
    this.service.getStatestique(this.jaimePage).subscribe((data) =>{
      this.nommbrevu = data.body
      

      this.nommbrevu.forEach((dataset) => {
        this.barChartData[0]['data'].unshift(dataset.values[0].value)
        var color = "#"+((1<<24)*Math.random()|0).toString(16);
          this.pieChartColors[0]['backgroundColor'].unshift(color)
   
        
      });
    
      
     

    })



  }






  pieChartOptions: ChartOptions = {
    responsive: true,
  };
  //pieChartLabels: Label[] = ['28 Days', 'Week', 'Day'];
  //pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  public barChartColors = [
    {
      backgroundColor: [],
    },
  ];
  
 
  public pieChartLabels: Label[] = ['28 Days', 'Week', 'Day'];
  public pieChartData: ChartDataSets[] = [
    { data: [0], label: 'The number of times any content from your Page' }
  ];

 
  public pieChartType = 'pie';


  getnombreAfficher () {
    this.jaimePage.idUser = JSON.parse(sessionStorage.getItem("idUseStatq"));
    this.jaimePage.idpage = JSON.parse(sessionStorage.getItem("StatestiquePage"));
    this.service.GETSTATPAGE(this.jaimePage).subscribe((data) =>{
      //console.log(data.body)
      this.nombreAffich = data.body
      

      this.nombreAffich.forEach((dataset) => {
        this.pieChartData[0]['data'].unshift(dataset.values[0].value)
        
        var color = "#"+((1<<24)*Math.random()|0).toString(16);
          this.pieChartColors[0]['backgroundColor'].unshift(color)
   
        
      });

    })

  }


 
 













  
}

