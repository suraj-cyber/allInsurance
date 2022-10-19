import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EventDetails1Component } from './event-details1/event-details1.component';
import { EventDetails2Component } from './event-details2/event-details2.component';
import { EventDetails3Component } from './event-details3/event-details3.component';
import { EventDetails4Component } from './event-details4/event-details4.component';


const route:Routes=[
  {path:'team', component: TeamComponent},
  {path:'services', component: ServicesComponent},
  {path:'events', component: EventsComponent},
  {path:'pricing', component: PricingComponent},
  {path:'faqs', component: FaqsComponent},
  {path:'error', component: ErrorPageComponent},
  {path:'eveDet1', component: EventDetails1Component},
]

@NgModule({
  declarations: [
    TeamComponent,
    ServicesComponent,
    EventsComponent,
    PricingComponent,
    FaqsComponent,
    ErrorPageComponent,
    EventDetails1Component,
    EventDetails2Component,
    EventDetails3Component,
    EventDetails4Component,
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class PagesModule { }
