import { Component, OnInit } from '@angular/core';
import { ApiIntSer01Service } from 'src/app/allServices/api-int-ser01.service';

@Component({
  selector: 'app-api-int01',
  templateUrl: './api-int01.component.html',
  styleUrls: ['./api-int01.component.css']
})
export class ApiInt01Component implements OnInit {
  data:any;

  constructor(private ser: ApiIntSer01Service) { }

  ngOnInit(): void {
    this.getData()
    this.addThisData()
    
  }

  getData(){
    this.ser.getAllData().subscribe(
      (ser:any)=>{console.log(ser)},
      (er:any)=>{console.log(er)}
    )
  }

  addThisData(){
    this.data = {
      name: 'Suraj',
      age: 25
    }
    this.ser.addData(this.data).subscribe(
      (res:any)=>{console.log(res)},
      (es:any)=>{console.log(es)}
    )
  }

}
