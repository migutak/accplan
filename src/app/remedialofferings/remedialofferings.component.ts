import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { AccplanService } from '../accplan.service';

import { environment } from '../../environments/environment';
import { Form } from '@angular/forms';

const URL = environment.uploadurl + '/api/upload';
const urltodb = environment.uploadurl + '/api/uploadssavetodb';
const cust = localStorage.getItem('custnumber');
const acc = localStorage.getItem('accnumber');
const username = localStorage.getItem('username');

@Component({
  selector: 'app-remedialofferings',
  templateUrl: './remedialofferings.component.html',
  styleUrls: ['./remedialofferings.component.css']
})
export class RemedialofferingsComponent implements OnInit {

  constructor(private accplanService: AccplanService) { }

  remedialofferingshis: any;
  remedialofferingshislength: number;
  model: any = {};
  mydisable = false;

  ngOnInit() {
    this.getNotes();
  }

  onSubmit(form) {
    const body = {
      planid: cust,
      accnumber: acc,
      custnumber: cust,
      remedialofferings: form.value.remedialofferings,
      owner: username
    };

    this.accplanService.submitRemedialoffering(body).subscribe(data => {
      // console.log(data);
      swal('Successful!', 'saved successfully!', 'success');
      this.getNotes();
      this.mydisable = true;
    }, error => {
      console.log(error);
      swal('Error!', 'Error occurred during processing!', 'error');
    });
  }

  getNotes() {
    this.accplanService.getRemedialofferings(cust).subscribe(data => {
      this.remedialofferingshis = data;
      if (this.remedialofferingshis.length > 0) {
        this.remedialofferingshislength = this.remedialofferingshis.length;
        this.model.remedialofferings = data[0].REMEDIALOFFERINGS;
        this.model.currentremedialofferings = data[0].REMEDIALOFFERINGS;
      }
    }, error => {
      console.log(error);
    });
  }

  onChange(deviceValue) {
    this.mydisable = this.model.currentabilitytopay === deviceValue;
  }

}
