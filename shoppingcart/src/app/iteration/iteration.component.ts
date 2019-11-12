import { Component} from '@angular/core';

@Component({
  selector: 'app-iteration',
  templateUrl: './iteration.component.html',
  styleUrls: ['./iteration.component.css']
})
export class IterationComponent {
    public data = [
         {Name :'Sumsung Tv', Price :34000.45},
         {Name :'Mobile', Price :2000},
         {Name :'Nike Shoes', Price :8000}


    ];
  
}
