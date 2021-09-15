import { Component } from "@angular/core";
import { Chart } from "angular-highcharts";
import stylesCss from "../styles.css";
import * as AnnotationsModule from "angular-highcharts"

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
 
  gauge: Chart;
  gaugeNoFormat: Chart;
  gaugeInline: Chart;
 
  ngOnInit() {
 
    this.gaugeNoFormat = new Chart({
      chart: {
        renderTo: 'container',
        defaultSeriesType: 'scatter',
        zoomType: 'xy',
        height: 400
    
    },
    title: {
        text: ''
    },
    annotations: [  {
      draggable: '',
      labels: [{
          point: {
              xAxis: 0,
              yAxis: 0,
              x: 101.44,
              y: 1026
          },
          x: -30,
          text: 'Col de la Joux'
      }, {
          point: {
              xAxis: 0,
              yAxis: 0,
              x: 138.5,
              y: 748
          },
          text: 'Côte de Viry'
      }, {
          point: {
              xAxis: 0,
              yAxis: 0,
              x: 176.4,
              y: 1202
          },
          text: 'Montée de la Combe <br>de Laisia Les Molunes'
      }]
 
  }],
    xAxis: {
          min:0,
        max:256,
        tickInterval:16, //de cuanto en cuanto aumenta el eje de las x
        plotLines:[{
            value:128, // donde se centra la linea vertical
            color:'#666',
            dashStyle: 'solid',
            width:2,
            zIndex: 5
        }],
        labels:{
            enabled: true
            },        
        gridLineWidth:1,
        showLastLabel:true,
        showFirstLabel:false,
        lineColor:'#ccc',
        lineWidth:1,
        startOnTick: true,
        endOnTick: true
    },
    yAxis: {
          min:0,
        max:256,
                plotLines:[{
            value:128,
            dashStyle: 'solid',
            color:'#666',
            width:2,
            zIndex: 5
        }],
        labels:{
            enabled: true
            },
        tickInterval :16,
        gridLineWidth:1,
        showLastLabel:true,
        showFirstLabel:false,
        lineColor:'#ccc'
    },
    
    plotOptions: {
        scatter: {
            marker: {
                radius: 30,               
                symbol: 'circle'
             
            },
            tooltip: {              
                enabled:true
            },

        },
        series:{
            animation :  false,
            shadow: false,
            enableMouseTracking: false
        }
    },
    series: [
      {
         name: 'mantequilla mavesa',
         color: 'rgba(225, 225, 225)',
         data: [ [215.0,168.0]] 
      },
      {
        name: 'mayonesa mavesa',
        color: 'rgba(225,150, 225)',
        data: [ [15.0,30.0]] 
     }
  ]

   

     
  })
}
}

 
