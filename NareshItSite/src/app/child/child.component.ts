import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  constructor() { }

  ngOnChanges(Changes,SimpleChanges){
    for(let property in Changes)
    {
      let changes = Changes[property];
      let current = changes.currentValue;
      let previous = changes.previousValue;
      console.log("previous Value =''+previous+''+current Value=''+current+");

    }
  }

 

}
