import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public products =[];

  constructor( private data: DataService , private router:Route) { }

  ngOnInit() {this.products=this.data.GetProducts();
  }

  //public ShowDetails(products){
   // this.router.navigate(['Products',products.Id]);
 // }

}
