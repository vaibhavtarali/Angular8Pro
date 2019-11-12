import { Component } from '@angular/core';

@Component({
  selector: 'app-iterations',
  templateUrl: './iterations.component.html',
  styleUrls: ['./iterations.component.css']
})
export class IterationsComponent  {
     public cars = [
      {carsname : 'Audi',Photo : 'assets/1.jpg',Likes :0 , Dislike : 0},
      {carsname : 'Fari',Photo : 'assets/2.jpg',Likes :0 , Dislike : 0},
  ];
  public Likes (cars)
  {
    {
      cars.Likes++;
    }
  }
  public DisLikes (cars)  
  {
    {
      cars.DisLikes++;
    }
  }
}
