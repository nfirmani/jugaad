
import * as React from 'react';

import * as path from 'path';

import * as util from 'util';



import {
    google, // The top level object used to access services
  //   drive_v3, // For every service client, there is an exported namespace

  } from 'googleapis';


 
/*
import {
    google,   // The top level object used to access services
    drive_v3, // For every service client, there is an exported namespace
    
  } from 'googleapis';

*/

  //const auth: Auth.GoogleAuth = new google.auth.GoogleAuth();

  


export default async function GDocMerge() {

  

    const docs = google.docs('v1');

    const {authenticate} = require('google-cloud/local-auth');


  //  const oauth2Client = new google.auth.OAuth2(
  //      "499547563913-fk858qeigjfi0fpc130fcbm30auc1s9g.apps.googleusercontent.com",
  //      "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",
  //      "http://localhost"
   //   );

      const auth =  authenticate({
        keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
        scopes: 'https://www.googleapis.com/auth/documents',
      });
      google.options({auth});


      const res = await docs.documents.get({
        documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
      });
      console.log(util.inspect(res.data, false, 17));
      return res.data;
   
     

    //const auth: Auth.GoogleAuth = new google.auth.GoogleAuth();

   /*

    const auth = new google.auth.GoogleAuth({
        // Scopes can be specified either as an array or as a single, space-delimited string.
        scopes: [
          'https://www.googleapis.com/auth/documents',
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/drive.file',
        ],
      });
    */

    /*
    function printDocTitle(auth: any) {
        const docs = google.docs({version: 'v1', auth});
        docs.documents.get({
          documentId: '12GFccbA3L3gQ-SoPQeV-G2aKjFTFpyuL5HioCV2boGo',
        }, (err: string, res: { data: { title: any; }; }) => {
          if (err) return console.log('The API returned an error: ' + err);
          console.log(`The title of the document is: ${res.data.title}`);
        });
      }
      */

/*
     const oAuth2Client = new google.auth.OAuth2();
     const auth: oauth2_v2.Oauth2 = new google.auth.OAuth2;
     const drive: drive_v3.Drive = google.drive({
       version: 'v3',
       auth,
     });
*/

return (

    <div>
        <h1>esempio di google doc</h1>
    
    <iframe
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }}
        //src={`https://drive.google.com/file/d/1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY/preview`}
        src={`https://docs.google.com/document/d/1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY/edit`}
        frameBorder="0" />



      
        </div>
);

    

}