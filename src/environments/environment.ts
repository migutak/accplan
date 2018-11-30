// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*export const environment = {
  production: false,
  ecol_apis_host: 'http://localhost:8085/ecollect2'
  /*
var urladdress = "https://ecollecttst.co-opbank.co.ke/ecollect2";
//var urladdress = "https://ecollect.co-opbank.co.ke/ecollect2";
//var urladdress = "http://localhost:8085/ecollect2";

//var urlupload = "https://ecollect.co-opbank.co.ke:3000";
var urlupload = "https://ecollecttst.co-opbank.co.ke:3000";
//var urlsocketio = "https://ecollectapp.co-opbank.co.ke:4000";
var urlsocketio = "http://ecollecttst.co-opbank.co.ke:4000";
var urlreports = "http://172.16.204.37:8080/birt";
//var urlreports = "http://192.168.0.51:8080/birt";

var urlemail = "http://192.168.0.51:8080/Email2";

};*/

export const environment = {
  production: false,
  ecol_apis_host: 'http://localhost:8086/ecollect2',
  // ecol_apis_host: 'http://ecollecttst.co-opbank.co.ke:8080/ecollect4',
  // ecol_apis_host: 'https://ecollecttst.co-opbank.co.ke/ecollect4',
  uploadurl: 'http://localhost:3000',
  // uploadurl: 'http://ecollecttst.co-opbank.co.ke:3000',
  fileLocation: 'C:\\Users\\Kevin\\Documents\\angular2\\upload_node\\'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
