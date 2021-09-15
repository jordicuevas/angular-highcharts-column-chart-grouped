import { Component } from "@angular/core";
import { Chart } from "angular-highcharts";
import stylesCss from "../styles.css";

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
        type: 'column'
    },

    title: {
        text: 'Matriz BCG'
    },

    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes' ]
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Ventas'
        }
    },

    tooltip: {
        formatter: function () {
           return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>'  
                
        }
    },

    

    series: [{
        name: 'John',
        data: [5, 3, 4, 7  ],
         
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2 ],
         
    }, {
        name: 'Jane',
        data: [2, 5, 6, 2 ],
       
    }, {
        name: 'Janet',
        data: [3, 0, 4, 4 ],
        
    }]
    });

   

     
  }
}

export function centeredGaugeFormatter(): number | string {
  return Math.abs((this.y - 50) * 2);
}

export function centeredGaugeNoFormatter(): number | string {
  return Math.abs(this.y);
}
