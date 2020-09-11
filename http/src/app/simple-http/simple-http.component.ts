import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';  // class


@Component({
  selector: 'simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})

export class SimpleHttpComponent {

  /*Variables*/
  loading: boolean;
  data: Object;
  showTable: boolean = false;
  sucheText: any;

  constructor(private _httpClient: HttpClient ) { }

  makeRequest(){
    this.loading = true;    
    this._httpClient
        .get('https://jsonplaceholder.typicode.com/posts')
        .subscribe(
          res => { this.data = res}
        );
    this.loading = false;   
    this.showTable =! this.showTable;
  }

  onClickPerson(p: any){
    console.log('kakakaka', p.title);
  }

}
