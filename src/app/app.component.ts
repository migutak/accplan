import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AccplanService } from './accplan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstname: string;
  addressline: string;
  telnumber: string;
  facilities: Number = 0;
  custnumber = localStorage.getItem('custnumber');
  accnumber = localStorage.getItem('accnumber');

  showLoadingIndicator = true;

  constructor(private httpClient: HttpClient, private accplanService: AccplanService) { }

  url = environment.ecol_apis_host + '/api/tbl_q_all?filter[where][accnumber]=' + this.accnumber;

  ngOnInit() {
    this.getCustomer(this.accnumber);
  }

  getCustomer(accnumber) {
    this.httpClient.get(this.url).subscribe(data => {
      console.log(data);
      this.firstname = data[0].client_name;
      this.addressline = data[0].addressline1;
      this.telnumber = data[0].telnumber;
      this.showLoadingIndicator = false;
    }, error => {
      // error
      this.showLoadingIndicator = false;
      console.log('Internal Server Error status', error.status, error.statusText);
      console.log('Server Error Details', error);
    });
  }

  getFacilities() {
    this.accplanService.getFacilities(this.custnumber);
  }
}
