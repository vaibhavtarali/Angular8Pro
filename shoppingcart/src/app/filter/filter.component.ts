import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {
  @Input() public All =  0;
  @Input() public Electronics =  0;
  @Input() public Shoes =  0;

  public SelectedCategoryValue='All';
  @Output() public ComponentChanged:
  EventEmitter<string>=new EventEmitter<string>();

public oncategoryChanged(){
  this.ComponentChanged.emit
  (this.SelectedCategoryValue);
}
  

}
