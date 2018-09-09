import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import swal from 'sweetalert';
import { saveAs} from 'file-saver';
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
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
