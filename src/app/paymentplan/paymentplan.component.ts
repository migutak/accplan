import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import swal from 'sweetalert';
import { AccplanService } from '../accplan.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Form } from '@angular/forms';

const URL = environment.uploadurl + '/api/upload';
const urltodb = environment.uploadurl + '/api/uploadssavetodb';
const cust = localStorage.getItem('custnumber');
const acc = localStorage.getItem('accnumber');
const username = localStorage.getItem('username');

@Component({
  selector: 'app-paymentplan',
  templateUrl: './paymentplan.component.html',
  styleUrls: ['./paymentplan.component.css']
})
export class PaymentplanComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  ptps: any;
  model: any = {
    planfreq: null
  };

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  ngOnInit() {
  }

}
