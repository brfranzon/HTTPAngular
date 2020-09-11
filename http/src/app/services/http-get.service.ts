import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // class

@Injectable({
  providedIn: 'root'
})
export class HttpGetService implements OnInit{

  constructor(private _httpClient: HttpClient) { }
  /*Variables*/
  data: Object;
  

ngOnInit(){}

request(){

}
 
}
