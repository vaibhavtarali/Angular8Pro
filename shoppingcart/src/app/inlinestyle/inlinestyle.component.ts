import { Component } from '@angular/core';

@Component({
  selector: 'app-inlinestyle',
  templateUrl: './inlinestyle.component.html',
  styleUrls: ['./inlinestyle.component.css']
})
export class InlinestyleComponent  {
   public background ;
   public textColor;
   public textAlign;

   public GetEffects(){
     const Effects = 
     {
       'background-color':this.background,
       'Color': this.textColor,
       'text-align':this.textAlign



     }
     return Effects



   }
  

}
