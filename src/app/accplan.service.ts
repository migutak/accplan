import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import swal2 from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AccplanService {

  constructor(private httpClient: HttpClient) { }

  loader() {
    /*swal({
      title: 'Processing...',
      text: 'Please wait',
      closeOnClickOutside: false
    });*/

    swal2({
      title: 'Processing ...',
      text: 'Please wait',
      showConfirmButton: false,
      onOpen: function () {
        swal2.showLoading();
      }
    });
  }

  downloadFile(file: string) {
    const body = {filename: file};

    return this.httpClient.post(environment.uploadurl + '/download', body, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  submitBackground(body) {
    return this.httpClient.post(environment.uploadurl + '/api/plan_background', body);
  }

  submitProblemdefinition(body) {
    return this.httpClient.post(environment.uploadurl + '/api/plan_problemdefinition', body);
  }

  submitCustomerproposal(body) {
    return this.httpClient.post(environment.uploadurl + '/api/plan_customerproposal', body);
  }

  submitAbilitytopay(body) {
    return this.httpClient.post(environment.uploadurl + '/api/plan_ability', body);
  }

  submitRemedialoffering(body) {
    return this.httpClient.post(environment.uploadurl + '/api/plan_remedialofferings', body);
  }

  submitSwot(body) {
    return this.httpClient.post(environment.uploadurl + '/api/plan_swot', body);
  }

  submitPtp(body) {
    return this.httpClient.post(environment.uploadurl + '/api/plan_ptpplans', body);
  }

  getBackground(custnumber) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/plan_background?filter[where][custnumber]=' + custnumber);
  }

  getProblemdefinition(custnumber) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/plan_problemdefinition?filter[where][custnumber]=' + custnumber);
  }

  getCustomerproposal(custnumber) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(environment.ecol_apis_host + '/api/plan_customerproposals?filter[where][custnumber]=' + custnumber + '&filter[where][deleted]=N&filter[order]=DATEUPDATED DESC');
  }

  getabilitytopay(custnumber) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(environment.ecol_apis_host + '/api/plan_ability?filter[where][custnumber]=' + custnumber + '&filter[where][deleted]=N&filter[order]=DATEUPDATED DESC');
  }

  getSwot(custnumber) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(environment.ecol_apis_host + '/api/plan_swot?filter[where][custnumber]=' + custnumber + '&filter[where][deleted]=N&filter[order]=DATEUPDATED DESC');
  }

  getPtps(custnumber) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(environment.ecol_apis_host + '/api/plan_ptpplans?filter[where][custnumber]==' + custnumber + '&filter[where][deleted]=N&filter[order]=DATEUPDATED DESC');
  }

  getRemedialofferings(custnumber) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(environment.ecol_apis_host + '/api/plan_remedialofferings?filter[where][custnumber]=' + custnumber + '&filter[where][deleted]=N&filter[order]=DATEUPDATED DESC');
  }

  saveuploadtodb(fileuploaded) {
    return this.httpClient.post(environment.uploadurl + '/api/uploadssavetodb', fileuploaded);
  }

  getCardwithid (nationid) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/card_stage?filter[where][idnumber]=' + nationid);
  }

  getMcoopwithid (nationid) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/mcoopcash_stage?filter[where][idnumber]=' + nationid);
  }

  getFacilities (custnumber) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/qview?filter[where][custnumber]=' + custnumber);
  }

  getCustomer (accnumber) {
    // return this.httpClient.get(environment.ecol_apis_host + '/api/v2/accountinfo/' + accnumber);
    return this.httpClient.get(environment.ecol_apis_host + '/api/tbl_q_all/' + accnumber);
  }

  // actions
  submitInitiation(body) {
    console.log('data to save', body);
    return this.httpClient.post(environment.uploadurl + '/api/initiation', body);
  }
}
