import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import swal from 'sweetalert';
import { AccplanService } from '../accplan.service';

import { environment } from '../../environments/environment';
import { Form } from '@angular/forms';

const cust = localStorage.getItem('custnumber');
const acc = localStorage.getItem('accnumber');
const username = localStorage.getItem('username');

@Component({
  selector: 'app-abilitytopay',
  templateUrl: './abilitytopay.component.html',
  styleUrls: ['./abilitytopay.component.css']
})
export class AbilitytopayComponent implements OnInit {

  constructor(private accplanService: AccplanService) { }

  abilitytopayhis: any;
  abilitytopayhislength: number;
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
      abilitytopay: form.abilitytopay,
      owner: username
    };

    this.accplanService.submitAbilitytopay(body).subscribe(data => {
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
    this.accplanService.getabilitytopay(cust).subscribe(data => {
      this.abilitytopayhis = data;
      this.abilitytopayhislength = this.abilitytopayhis.length;
      this.model.abilitytopay = data[0].ABILITYTOPAY;
      this.model.currentabilitytopay = data[0].ABILITYTOPAY;
    }, error => {
      console.log(error);
    });
  }

  onChange(deviceValue) {
    this.mydisable = this.model.currentabilitytopay === deviceValue;
  }

}
