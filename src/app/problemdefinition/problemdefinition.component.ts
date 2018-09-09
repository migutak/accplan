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
  selector: 'app-problemdefinition',
  templateUrl: './problemdefinition.component.html',
  styleUrls: ['./problemdefinition.component.css']
})
export class ProblemdefinitionComponent implements OnInit {

  constructor(private httpClient: HttpClient, private accplanService: AccplanService) { }

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

  problemdefinitionFiles: any;
  problemdefinitionhis: any;
  problemdefinitionFileslength: number;
  problemdefinitionhislength: number;
  model: any = {};

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    this.getNotes();
    this.getUploads();
  }

  upload() {
    this.uploader.uploadAll();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         // console.log('ImageUpload:item:', item);
         const filereceived = JSON.parse(response);
         this.fileuploaded.filename = filereceived.file.originalname;
         this.fileuploaded.destpath = environment.fileLocation + filereceived.file.path;
         this.fileuploaded.filesize = filereceived.file.size;
         this.fileuploaded.custnumber = cust;
         this.fileuploaded.accnumber = acc;
         this.fileuploaded.colofficer = username;
         this.fileuploaded.doctype = 'accplan_problemdefinition_file';
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
    this.httpClient.get(environment.ecol_apis_host + '/api/status/files/' + cust + '/accplan_problemdefinition_file').subscribe(data => {
      this.problemdefinitionFiles = data;
      this.problemdefinitionFileslength = this.problemdefinitionFiles.length;
     // console.log(data);
    }, error => {
      console.log(error);
    });
  }

  getNotes() {
    this.accplanService.getProblemdefinition(cust).subscribe(data => {
      this.problemdefinitionhis = data;
      this.problemdefinitionhislength = this.problemdefinitionhis.length;
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

  onSubmit(form) {
    console.log(form.value);
    const body = {
      planid: cust,
      accnumber: acc,
      custnumber: cust,
      problemdefinition: form.value.problemdefinitioncomment,
      owner: username
    };

    this.accplanService.submitProblemdefinition(body).subscribe(data => {
      console.log(data);
      swal('Successful!', 'saved successfully!', 'success');
      this.model.problemdefinitioncomment = '';
      this.getNotes();
    }, error => {
      console.log(error);
      swal('Error!', 'Error occurred during processing!', 'error');
    });
  }

}
