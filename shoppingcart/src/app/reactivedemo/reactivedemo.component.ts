import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent  {
  public FrmRegister = new FormGroup({
   FirstName :new FormControl(''),
   lastName :new FormControl('')



  });
  public onSubmit(){
    alert(this.FrmRegister.value.FirstName)
  }
   


  
}
