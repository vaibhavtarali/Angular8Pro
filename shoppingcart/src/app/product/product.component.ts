import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public data = [
    {Name:'SumsungTv', Price:45000.45,Category:"Electronics"},
    {Name:'Nike Casuals', Price:5000.45,Category:"shoes"}
  ];
  public SelectedValue = 'All';
  public All = this.data.length;

  public Electronics = this.data.filter(x=>x.Category=='Electronics').length;
  public Shoes = this.data.filter(x=>x.Category=='Shoes').length;
  public onCategoryChanged(SelectedValue){
    this.SelectedValue = SelectedValue;
  }

 
}
