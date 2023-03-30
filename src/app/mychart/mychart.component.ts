import { Component,OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { HeroService } from '../server/hero.service';
Chart.register(...registerables);



@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})

export class MychartComponent implements OnInit{


  constructor(private service:HeroService){
    
  }

  chartdata:any;

  year:any[]=[];
  amount:any[]=[];
  colorcode:any[]=[];
  minBarLength:any[]=[]; 


// thirdAmount:number[] = [4100, 2100, 4100]
  ngOnInit(): void {

    this.service.Getchartinfo().subscribe((result:any) =>{
      console.log(result)
      this.chartdata=result.data;
      // console.log(result)
      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length ;i++){
          this.year.push(this.chartdata[i].year);
          this.amount.push(this.chartdata[i].amount);
          this.colorcode.push(this.chartdata[i].colorcode);
          this. minBarLength.push(this.chartdata[i].minBarLength);
        }

        this.RenderChart(this.year,this.amount,this.colorcode,this.minBarLength,'bar','barchart');
        this.RenderChart(this.year,this.amount,this.colorcode,this.minBarLength,'pie','piechart');
        this.RenderChart(this.year,this.amount,this.colorcode,this.minBarLength,'line','linechart');
        this.RenderChart(this.year,this.amount,this.colorcode,this.minBarLength,'scatter','scatterchart');
       
        console.log(this.year, this.amount, this.minBarLength)
      }
    });


  }
  
  RenderChart(year:any,amount:any,colorcode:any, minBarLength:any,type:any,id:any){
  //   const myChart = new Chart(id,{
  //   type: type,
  //   data: {
  //     labels:year,
  //     datasets: [{
  //       label: 'Present',
  //       data: amount,
  //       backgroundColor: colorcode,
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)'
  //       ],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });

  






const myChart = new Chart(id, {
    type: type,
    data: {
        labels: year,
        datasets: [{
            label: 'Present',
            data: amount,
            backgroundColor: colorcode ,
            
          
        },


    {
            label: 'Absent',
            data:minBarLength,
            backgroundColor:colorcode ,
           
           
        },

   {
            label: 'Leaves',
            data:this.amount,
            backgroundColor:colorcode,
            

        }]

           
     },
        options: {
               scales: {
                  y: {
                 beginAtZero: true
             }
        }
    }
    });
  }


}

