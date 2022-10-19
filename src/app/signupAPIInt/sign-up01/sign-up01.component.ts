import { Component, OnInit } from '@angular/core';
import { SignUp01Service } from 'src/app/allServices/sign-up01.service';

@Component({
  selector: 'app-sign-up01',
  templateUrl: './sign-up01.component.html',
  styleUrls: ['./sign-up01.component.css']
})
export class SignUp01Component implements OnInit {

  constructor(private ser: SignUp01Service) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this.ser.getData().subscribe(
      (r:any)=>{console.log(r)},
      (er:any)=>{console.log(er)}
    )
  }

  onSignup(x:any){
    console.log(x.value)
    this.ser.addData(x.value).subscribe(
      (r:any)=>{console.log(r)},
      (er:any)=>{console.log(er)}
    )
  }
}
