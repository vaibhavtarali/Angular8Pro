import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public GetProducts(){
    return[
      {id:1,Name:'Sumsung Tv',Price:45000.45,Photo:'assets/a.jpg'},
      {id:2,Name:'Shoes',Price:450.45,Photo:'assets/b.jpg'}
    ];
  }

 
}
