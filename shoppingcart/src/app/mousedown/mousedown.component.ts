import { Component} from '@angular/core';

@Component({
  selector: 'app-mousedown',
  templateUrl: './mousedown.component.html',
  styleUrls: ['./mousedown.component.css']
})
export class MousedownComponent  {
  public Ad = "assets/a.jpg";
  public bulb = "assets/bulbOFF.jpg";

  public ShowAd1(){
    this.Ad = "assets/c.jpg";
  }
  public ShowAd2(){
    this.Ad = "assets/D.jpg";
  }
  public ON(){
    this.bulb = 'assets/bulbON.jpg'
  }
  public OFF(){
    this.bulb = 'assets/bulbOFF.jpg'
  }


}
