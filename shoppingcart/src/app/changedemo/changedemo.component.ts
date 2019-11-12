import { Component } from '@angular/core';

@Component({
  selector: 'app-changedemo',
  templateUrl: './changedemo.component.html',
  styleUrls: ['./changedemo.component.css']
})
export class ChangedemoComponent  {

  public lstCategories;
  public lstProducts;
  public productName;
  public productPrice;
  public imgPreview;
  
  public Categories = ['Electronics','Shoes'];
  public electronics =['Sumsung Tv','Mobile'];
  public shoes = ['Nike Shoes','Lee Cooper Boot'];

  public data =  [
   {Name:'Sumsung Tv',Price:40000.55,Photo:'assets/a.jpg'},
   {Name:'Mobile',Price:10000.55,Photo:'assets/b.jpg'},
   {Name:'Nike Casuals',Price:40000.55,Photo:'assets/c.jpg'},
   {Name:'Lee Cooper Boot',Price:40000.55,Photo:'assets/d.jpg'}


  ]
  public products;
  public CartItems=[];

  public CategoryChanged(){
    switch(this.lstCategories){
      case 'Electronics':
        this.products=this.electronics;
        break;
        case 'Shoes':
        this.products=this.shoes;
        break;

    }
  }
  public ShowDetails(index){
    this.productName=this.data[index].Name;
    this.productPrice=this.data[index].Price;
    this.imgPreview=this.data[index].Photo;


  }
  public ProductChanged(){
    switch(this.lstProducts){
      case'Sumsung Tv':
      this.ShowDetails(0);
      break;
      case'Mobile':
      this.ShowDetails(1);
      break;
      case'Nike Shoes':
      this.ShowDetails(2);
      break;
      case'Lee Cooper Boot':
      this.ShowDetails(3);
      break;
    }
}
  public AddToCart(){
  alert('Item Added To Cart');
  this.CartItems.push(
    {Name:this.productName,Price:this.productPrice,Preview:this.imgPreview})

   }
}
