import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccplanService {

  constructor(private httpClient: HttpClient) { }

  downloadFile(file: string) {
    const body = {filename: file};

    return this.httpClient.post(environment.uploadurl + '/download', body, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  submitBackground(body) {
    return this.httpClient.post(environment.uploadurl + '/api/background', body);
  }

  submitProblemdefinition(body) {
    return this.httpClient.post(environment.uploadurl + '/api/problemdefinition', body);
  }

  submitCustomerproposal(body) {
    return this.httpClient.post(environment.uploadurl + '/api/customerproposal', body);
  }

  submitAbilitytopay(body) {
    return this.httpClient.post(environment.uploadurl + '/api/abilitytopay', body);
  }

  submitRemedialoffering(body) {
    return this.httpClient.post(environment.uploadurl + '/api/remedialofferings', body);
  }

  submitSwot(body) {
    return this.httpClient.post(environment.uploadurl + '/api/swot', body);
  }

  getBackground(custnumber) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/accplans/background/' + custnumber);
  }

  getProblemdefinition(custnumber) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/accplans/problemdefinition/' + custnumber);
  }

  getCustomerproposal(custnumber) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/accplans/customerproposals/' + custnumber);
  }

  getabilitytopay(custnumber) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/accplans/abilitytopay/' + custnumber);
  }

  getSwot(custnumber) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/accplans/swot/' + custnumber);
  }

  getRemedialofferings(custnumber) {
    return this.httpClient.get(environment.ecol_apis_host + '/api/accplans/remedialofferings/' + custnumber);
  }

  saveuploadtodb(fileuploaded) {
    return this.httpClient.post(environment.uploadurl + '/api/uploadssavetodb', fileuploaded);
  }
}
