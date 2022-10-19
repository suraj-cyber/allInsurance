import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team Project';

  pages=[
    {name:'Team', path: 'pages/team'},
    {name:'Services', path: 'pages/services'},
    {name:'Events', path: 'pages/events'},
    {name:'Pricing', path: 'pages/pricing'},
    {name:'FAQs', path: 'pages/faqs'},
    {name:'Error Page', path: 'pages/error'},
    {name:'Event Details 1', path: 'pages/eveDet1'},
  ]

  constructor (private route: Router){

  }
  onSelectPages(x:any){
    let route = x.target.value;
    console.log(route);
    this.route.navigateByUrl(route)
  }

}
