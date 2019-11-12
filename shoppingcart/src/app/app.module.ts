import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import{AppComponent} from './app.component';


import {  RegisterComponent } from './register/register.component';
import { IterationsComponent } from './iterations/iterations.component';
import { ForindexComponent } from './forindex/forindex.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { IterationComponent } from './iteration/iteration.component';
import { from } from 'rxjs';
import { InlinestyleComponent } from './inlinestyle/inlinestyle.component';
import { KeydemoComponent } from './keydemo/keydemo.component';
import { MousedemoComponent } from './mousedemo/mousedemo.component';
import { MousedownComponent } from './mousedown/mousedown.component';
import { ChangedemoComponent } from './changedemo/changedemo.component';
import { EventComponent } from './event/event.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FilterComponent } from './filter/filter.component';
import { ProductComponent } from './product/product.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { InputvalidationComponent } from './inputvalidation/inputvalidation.component';
import { ReactivedemoComponent } from './reactivedemo/reactivedemo.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [

 ReactivedemoComponent,

 HomeComponent,

 AboutComponent,

 ContactComponent
],
  imports: [
     BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ 
    ReactivedemoComponent]
})
export class AppModule { }
