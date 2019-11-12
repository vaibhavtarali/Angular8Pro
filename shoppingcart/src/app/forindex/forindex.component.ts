import { Component } from '@angular/core';

@Component({
  selector: 'app-forindex',
  templateUrl: './forindex.component.html',
  styleUrls: ['./forindex.component.css']
})
export class ForindexComponent  {

  public name = "";
  public price = 0;

  public products = [
     {ProductId:1 ,Name:'Samsung',Price:1000}
     ,
     {ProductId:2 ,Name:'Nike Shoes',Price:5000}


  ];41
  public AddProduct(){
    let Id = this.products.length+1 ;
    this.products.push(
      {ProductId :Id ,Name :this.name, Price:this.price} 
    )
    alert('Record inserted');
    this.name = "";
    this.price = 0;
  }

  public DeleteProduct(index)
  {
   let Confirm = confirm("Are you sure want to Delete?");
    if(Confirm == false){
      this.products.splice(index,1);
    }
  } 

  

}
