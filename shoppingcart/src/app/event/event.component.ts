import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent  {

  public msg;
  public status;

  public OnFocus(){
    this.msg = 'Password must cantain atleast 1 uppercase letter';
  }
  public OnBlur(){
    this.msg = '';
  }
  public Oncut(){
    this.status = 'Removed and copied to clipBoard';

  }
  public OnCopy(){
    this.status = 'Copied to clipboard';
  }
  public OnPaste(){
    this.status = 'inserted from clipBoard';
  }
  public OnContextMenu(){
    alert('This content is subjected to our copyright, you cant copy');
  }
  public OnDbClick(){
    window.open('assets/flag.gif','Tv','width:300 height:300')
  }

}
