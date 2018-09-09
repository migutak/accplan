import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';
import swal from 'sweetalert';
import { saveAs} from 'file-saver';
import { AccplanService } from '../accplan.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const URL = environment.uploadurl + '/api/upload';
const cust = localStorage.getItem('custnumber');
const acc = localStorage.getItem('accnumber');
const username = localStorage.getItem('username');

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  initiation: Boolean = false;
  internalapproval: Boolean = false;
  custaccept: Boolean = false;
  actionfileslength: number;
  actionfiles: any = [];
  docdesccomment: string = null;

  model = {
    initiationdateProposal: null,
    reviewProposal: null,
    remarkproposalremark: null,
    inititationcompleted: null,
    initiationdateapprovalsort: null,
    reviewedinternalApprovalSort: null,
    remarkapprovalsought: null,
    actioncompletedapprovalsought: null,
    initiationdatecustomeraccepted: null,
    reviewedinternalcustomeraccepted: null,
    remarkcustomeraccepted: null,
    action_completed_customeraccepted: null,
    initiationdatecure: null,
    reviewedcure: null,
    remarkcure: null,
    action_completed_cure: null
  };

  constructor(private accplanService: AccplanService, private httpClient: HttpClient) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  fileuploaded = {
    custnumber: null,
    accnumber: null,
    filename : null,
    destpath: null,
    filesize: null,
    doctype: null,
    docdesc: null,
    colofficer: null,
    filetype: null
  };

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    this.getUploads();
  }

  upload() {
    console.log(this.docdesccomment);
    this.uploader.uploadAll();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         const filereceived = JSON.parse(response);
         this.fileuploaded.filename = filereceived.file.originalname;
         this.fileuploaded.destpath = environment.fileLocation + filereceived.file.path;
         this.fileuploaded.filesize = filereceived.file.size;
         this.fileuploaded.custnumber = cust;
         this.fileuploaded.accnumber = acc;
         this.fileuploaded.colofficer = username;
         this.fileuploaded.docdesc = this.docdesccomment;
         this.fileuploaded.doctype = 'accplan_action_file';
         //
         this.accplanService.saveuploadtodb(this.fileuploaded).subscribe(data => {
           // console.log(data);
           swal('Upload successful!', this.fileuploaded.filename + ' received!', 'success');
           this.getUploads();
         }, error => {
           console.log(error);
           swal('Error!', this.fileuploaded.filename + ' NOT received!', 'error');
         });
      };
  }

  getUploads() {
    this.httpClient.get(environment.ecol_apis_host + '/api/status/files/' + cust + '/accplan_action_file').subscribe(data => {
      this.actionfiles = data;
      this.actionfileslength = this.actionfiles.length;
      // console.log(data);
    }, error => {
      console.log(error);
    });
  }

  downloadFile(filename, filepath) {
    this.accplanService.downloadFile(filepath).subscribe(data => {
     saveAs(data, filename);
    }, error => {
      console.log(error.error);
      swal('Error!', ' Cannot download  file!', 'error');
    });
  }

  onSubmitInternalapproval(form) {
    console.log(form);
  }

  onSubmitCustaccept(form) {
    console.log(form);
  }

  onSubmitCure(form) {
    console.log(form);
  }

  onSubmitInitiation(form) {
    console.log(form);
  }

}
