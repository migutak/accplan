import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AccplanService } from '../accplan.service';

const cust = localStorage.getItem('custnumber');
const acc = localStorage.getItem('accnumber');
const username = localStorage.getItem('username');

@Component({
  selector: 'app-swot',
  templateUrl: './swot.component.html',
  styleUrls: ['./swot.component.css']
})
export class SwotComponent implements OnInit {

  constructor(private accplanService: AccplanService) {

  }

  swothis: any;
  swothislength: number;
  model: any = {};
  mydisable = false;

  ngOnInit() {
    this.getNotes();
  }

  onSubmit(form) {
    this.accplanService.loader();
    const body = {
      planid: cust,
      accnumber: acc,
      custnumber: cust,
      strengths: form.value.strengths,
      weaknesses: form.value.weaknesses,
      opportunities: form.value.opportunities,
      threats: form.value.threats,
      owner: username
    };

    this.accplanService.submitSwot(body).subscribe(data => {
      // console.log(data);
      swal('Successful!', 'saved successfully!', 'success');
      this.getNotes();
      // this.mydisable = true;
    }, error => {
      console.log(error);
      swal('Error!', 'Error occurred during processing!', 'error');
    });
  }

  getNotes() {
    this.accplanService.getSwot(cust).subscribe(data => {
      console.log('getSwot', data[0]);
      this.swothis = data;
      if (this.swothis.length > 0) {
        this.swothislength = this.swothis.length;
        this.model.strengths = data[0].strengths;
        this.model.weaknesses = data[0].weaknesses;
        this.model.opportunities = data[0].opportunities;
        this.model.threats = data[0].threats;
        this.model.currentstrengths = data[0].STRENGTHS;
      }
    }, error => {
      console.log(error);
    });
  }

  onChange(deviceValue) {
    this.mydisable = true;
  }

}
