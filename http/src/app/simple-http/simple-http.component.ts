import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';  // class

import { HttpGetService } from '../services/http-get.service';

// export excel
import * as XLSX from 'xlsx';

@Component({
  selector: 'simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})

export class SimpleHttpComponent {

  /*Variables*/
  loading: boolean;
  data: Object;
  showTable: boolean = false;n
  sucheText: any;

  fileName = "ExcelSheet.xlsx";
  
  constructor(private _httpClient: HttpClient,
              private _httpGetService : HttpGetService
           ) { }

  makeRequest(){
    this.loading = true;    
    this._httpClient
        .get('https://jsonplaceholder.typicode.com/posts')
        .subscribe(
          res => { this.data = res}
        );
    this.loading = false;   
    this.showTable =! this.showTable;
    console.log(this._httpGetService);
  }

  onClickPerson(p: any){
    console.log('kakakaka', p.title);
  }

  exportExcell(){
    let element = document.getElementById('excel-table');
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);


  }

}
