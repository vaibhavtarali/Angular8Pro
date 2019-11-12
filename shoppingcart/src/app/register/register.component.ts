import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
    public data = [
      {Category : 'Electronics' , Product: ['Sumsung','Mobile']},
      {Category: 'Shoes', Product : ['Nike Casuals','Lee Cooper']}
 ]
   
}
