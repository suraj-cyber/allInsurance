import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp01Service } from 'src/app/allServices/sign-up01.service';

@Component({
  selector: 'app-login01',
  templateUrl: './login01.component.html',
  styleUrls: ['./login01.component.css']
})
export class Login01Component implements OnInit {
  logData: any;
  checkfname:any;
  checklname:boolean = false;

  constructor(private ser: SignUp01Service, private rt:Router) { }

  ngOnInit(): void {
  }

  onLogin(x: any) {
    console.log('Logged')
    this.ser.getData().subscribe(
      (r) => {
        console.log(r);
        this.logData = r;
        this.logData.forEach((el:any) => {
          if(el.fname == x.value.fname){
            this.rt.navigateByUrl('home')
          }
          else{
            this.rt.navigateByUrl('signUp01')
          }
        });
      },
      (e) => { console.log(e) }
    )
  }


}
