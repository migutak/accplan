import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: true;
  firstname = 'accplan';
  addressline = 'sample address';
  telnumber = 'Sample telnumber';

  showLoadingIndicator = true;
}
