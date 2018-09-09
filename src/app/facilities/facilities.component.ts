import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  custnumber = localStorage.getItem('custnumber');
  accnumber = localStorage.getItem('accnumber');

  url = environment.ecol_apis_host + '/api/v2/views/' + this.custnumber;
  facilitiesList: any;

  ngOnInit() {
    this.getFacilitiesList();
  }

  // lst employees
  getFacilitiesList() {
    return this.httpClient.get(this.url).subscribe(data => {
      // console.log(data);
      this.facilitiesList = data;
    }, error => {
      // error
      console.log('Internal Server Error status', error.status, error.statusText);
      console.log('Server Error Details', error);
    });
  }

}
