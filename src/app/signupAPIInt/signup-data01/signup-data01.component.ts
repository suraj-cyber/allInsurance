import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignUp01Service } from 'src/app/allServices/sign-up01.service';

@Component({
  selector: 'app-signup-data01',
  templateUrl: './signup-data01.component.html',
  styleUrls: ['./signup-data01.component.css']
})
export class SignupData01Component implements OnInit {
  userData:any;

  constructor(private ser: SignUp01Service) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this.ser.getData().subscribe(
      (r)=>{console.log(r)
      this.userData = r
      },
      (e)=>{console.log(e)}
    )
  }

}
