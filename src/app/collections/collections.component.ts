import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

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
