import { Component} from '@angular/core';

@Component({
  selector: 'app-keydemo',
  templateUrl: './keydemo.component.html',
  styleUrls: ['./keydemo.component.css']
})
export class KeydemoComponent {

  public usersData = [
    {UserName : 'John'},
    {UserName : 'Divid'},
    {UserName : 'Suraj12'},
    {UserName : 'John.nit'}
 ];
  public textUserName ;
  public msgPassword;
  public CheckUser(){
    for (var i=0;i<this.usersData.length;i++)
    {
      if(this.usersData[i].UserName==this.textUserName)
      {
        this.textUserName = 'UserName Taken try another';
        break;
      }else{
        this.textUserName = 'Congrats! UserName Avaible';
      }

    }



  }
  public CheckPassword(event)
  {
    if(event.keyCode > 65 && event.keyCode <=90)
    {
      this.msgPassword = 'Warning ! Caps ON';
    }
    else
    {
      this.msgPassword ='';
    }

  }
  public LinkClicked(e)
  {
    if (e.ctrlkey==true)
    {
       const hreaf = 'http://www.google.com';
    }
    else
    {
      alert ('User control key to visit URL')
    }
 }
 }
