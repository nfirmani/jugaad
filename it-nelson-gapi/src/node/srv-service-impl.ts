import { injectable,  } from 'inversify';

import * as fs from 'fs-extra';

import { MyService } from '../common/srv-protocol';

import {  OAuth2Client} from 'google-auth-library';
import {google, drive_v3} from 'googleapis';
import * as readline from "readline";
import path = require('path');
import util = require('util');
import { AppDataSource } from './data-source';
import { Utente } from './Utente';
//import { request_2 } from '../browser/doc-request';
//import { request_2 } from './doc-request';




/*

type credentials = { 
    installed: 
        { client_secret: string; client_id: string; redirect_uris: string[]; }};


type insertReq = {
    insertText: {
        location: {
            index: number,
        },
        text: string

}};
*/


const SCOPES = [
    // Other options at https://developers.google.com/identity/protocols/oauth2/scopes#docsv1
  // 'https://www.googleapis.com/auth/documents.readonly' 
  'https://www.googleapis.com/auth/documents',
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/spreadsheets'
];


const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');


const customerName = 'Nelson';
const date = '20220711';


const requestMerge1 = [
  {
    replaceAllText: {
      containsText: {
        text: '{{customer-name}}',
        matchCase: true,
      },
      replaceText: customerName,
    },
  },
  {
    replaceAllText: {
      containsText: {
        text: '{{date}}',
        matchCase: true,
      },
      replaceText: date,
    },
  },
];

/*

const  requests = [
    {
       insertText: {
           location: {
               index: 10,
           },
           text: "inserito: testo1 "
       }
   },
            {
       insertText: {
           location: {
               index: 50,
           },
           text: 'inserito: prova2'
       }
   },
            {
       insertText: {
           location: {
               index: 75,
           },
           text: 'inserito: ciao'
       }
   },
]

*/

/*

const requests = [
    {
      insertTable: {
        columns: 3,
        rows: 3,
        endOfSegmentLocation: {}
      }
    }
  ]

*/


const copyRequest = {  // Modified
    name: "peripatetico test copia 3",
   // parents: ["idOfDestinationFolder"]
  };





async function authenticate(scopes: string[]) {
    return new Promise<OAuth2Client>(async (resolve, reject) => {
  
        try {
            const content = await fs.readFile(CREDENTIALS_PATH, 'utf-8');
            const keys = JSON.parse(content);
            const key = keys.installed || keys.web;                               

            let oAuth2Client = new google.auth.OAuth2(
                key.client_id,
                key.client_secret,
                key.redirect_uris[0]
            );                               

            try {
                const token = await fs.readFile(TOKEN_PATH, 'utf-8');               
                oAuth2Client.setCredentials(JSON.parse(token.toString()));

               resolve(oAuth2Client);

            } catch (err) {
                return getNewTokenDev(oAuth2Client);
            }

            
          } catch (e) {
            console.log('Error loading client secret file:', e);
            reject(e);
          }
       
        });
    };


  function getNewTokenDev(oAuth2Client: OAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token!)   // il punto esclamativo è un non-null assertion operator
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        
      });
    });
  } 


@injectable()
export class MyServiceImpl implements MyService {    


async  getDocTitle(): Promise<string> {
        
              return new Promise((resolve, reject)=> 
            
                {  
                      authenticate(SCOPES)
                      .then(client => 
                            {
                              const docs = google.docs({ version: 'v1', auth: client }); 
                              docs.documents.get({                                       
                                 documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',                                        
                                   }, (err, res) => {                               
                             
                                  if (err) {
                                           return;
                                    }
                                  if (!res!.data.title)  {
                                    resolve('');
                                    return;
                                    }                                           
                                                            
                                  console.log(`getDocTitle  is: ${res!.data.title}`);
                                  //resolve (`getDocTitle  is: ${res!.data.title}`);
                                  resolve(res!.data.title)
                                               
                                })
                            }) 
                      .catch((err) => {
                        console.log(err);
                        reject (err)
                      });

                });
    
    }


     creaRequest(): any {

        let studata =  ['testo1', 'prova2', 'ciao']

       

            var studata2 = [];
            for (let w in studata) {
            studata2.push(

                {
                    insertText: {
                        location: {
                            index: 1 + 20*Number(w),
                        },
                        text: "inserito: " + studata[w]
                    }
                }       
            
            
            );
            }
            
            console.log(util.inspect(studata2));
   


         return studata2
     }
     


    async  getDoc(req: any): Promise<void> {        
      
                  return new Promise((resolve, reject)=> 
                
                    {   

                       authenticate(SCOPES)
                       .then(client => 
                             { 
                               //const requests = this.creaRequest();

                               var requests = req;
                               console.log("merge doc"); 
                               
                               console.log( JSON.stringify(requests))
                               console.log(util.inspect(requests));

                               const docs = google.docs({ version: 'v1', auth: client }); 
                               docs.documents.batchUpdate(
                                {
                                    documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
                                    requestBody: {
                                    requests, 
                                                                       
                                    },
                                   
                                },                                 
                                );
                             }) 
                       .catch((err) => {
                         console.log(err);
                         reject (err)
                       }); 

                    });
        
        }



        async  mergeDoc(): Promise<void> {        
      
            return new Promise((resolve, reject)=> 
          
              {   

                 authenticate(SCOPES)
                 .then(client => 
                       { 
                         const requests = requestMerge1;
                         console.log("merge doc"); 
                         
                         console.log( JSON.stringify(requests))
                         console.log(util.inspect(requests));

                         const docs = google.docs({ version: 'v1', auth: client }); 
                         docs.documents.batchUpdate(
                          {
                              documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
                              requestBody: {
                              requests, 
                                                                 
                              },
                             
                          },                                 
                          );
                       }) 
                 .catch((err) => {
                   console.log(err);
                   reject (err)
                 }); 

              });
  
  }




          listDocDrive(): Promise<string> {        
      
            return new Promise((resolve, reject)=> 
          
              {   

                    authenticate(SCOPES)
                      .then(async client => 
                            { 
                              console.log("drive");
                              const drive: drive_v3.Drive = google.drive({version: 'v3', auth: client }); 
                              const res = await drive.files.list({
                                pageSize: 10,
                                fields: 'nextPageToken, files(id, name)',
                              }); 

                              const files = res.data.files;
                              if (files?.length === 0) {
                                console.log('No files found.');
                              } else {
                                console.log('Files:');
                                for (const file of files!) {
                                  console.log(`${file.name} (${file.id})`);
                                }
                              }

                              const res2 = await drive.files.copy({  // Modified
                                fileId: "1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY",
                                requestBody: copyRequest  // or resource: copyRequest
                              })

                              console.log(res2.data.id);
                              console.log(util.inspect(res.data, false, 17));
                              resolve(res2.data.name!)


                            }) 
                      .catch((err) => {
                        console.log(err);
                        reject (err)
                      }); 
              
                  });
  
  }


  async  listMajors(auth:OAuth2Client) {
    const sheets = google.sheets({version: 'v4', auth});
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    });
    const rows = res.data.values;
    if (!rows || rows.length === 0) {
      console.log('No data found.');
      return;
    }
    console.log('Name, Major:');
    rows.forEach((row) => {
      // Print columns A and E, which correspond to indices 0 and 4.
      console.log(`${row[0]}, ${row[4]}`);
    });
  }


/*

  async  listMajors2(auth:OAuth2Client):Promise<any> {
    const sheets = google.sheets({version: 'v4', auth});
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    });
    const rows = res.data.values;
    if (!rows || rows.length === 0) {
      console.log('No data found.');
      return;
    }
    console.log('Name, Major:');
    rows.forEach((row) => {
      // Print columns A and E, which correspond to indices 0 and 4.
      console.log(`${row[0]}, ${row[4]}`);
    });
  }

*/


//authorize().then(listMajors).catch(console.error);
  async  getSheet(): Promise<void> {        
      
    return new Promise((resolve, reject)=> 
  
      {   
/*
         authenticate(SCOPES)
         .then(async client => 
               {             

                const sheets = google.sheets({version: 'v4', auth: client});
                const res = await sheets.spreadsheets.values.get({
                  spreadsheetId: '1jJI4ZkvzZjZ2bobX07AGSuPAl852dPj9GurcJ2kC9rs',
                  range: 'Foglio1!A2:E',
                });
                const rows = res.data.values;
                if (!rows || rows.length === 0) {
                  console.log('No data found.');
                  return;
                }
                console.log('Name, Major:');
                rows.forEach((row) => {
                  // Print columns A and E, which correspond to indices 0 and 4.
                  console.log(`${row[0]}, ${row[4]}`);
                });
               }) 
         .catch((err) => {
           console.log(err);
           reject (err)
         }); 

    */


   authenticate(SCOPES)
   .then(async client =>  {this.listMajors(client)  }         

          
         ) 
   .catch((err) => {
     console.log(err);
     reject (err)
   }); 


      });

}
  



  async  getDocTest(): Promise<Utente[]> {
       
              return new Promise(async (resolve, reject)=> 
            
                {   
                 

                       /*
                            try {
                                const content = await fs.readFile(CREDENTIALS_PATH, 'utf-8');

                                const keys = JSON.parse(content);
                                const key = keys.installed || keys.web;                               

                                  let oAuth2Client = new google.auth.OAuth2(
                                    key.client_id,
                                    key.client_secret,
                                    key.redirect_uris[0]
                                  );

                               

                                  try {
                                    const token = await fs.readFile(TOKEN_PATH, 'utf-8');
                                    //const credentials = JSON.parse(token);
                                    //return google.auth.fromJSON(credentials);
                                    oAuth2Client.setCredentials(JSON.parse(token.toString()));





                                  
                                    const docs = google.docs({version: 'v1', auth: oAuth2Client}); 

                                    docs.documents.get({
                                        //documentId: '12GFccbA3L3gQ-SoPQeV-G2aKjFTFpyuL5HioCV2boGo',
                                        documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
                                        
                                      }, (err, res) => {                               
        
                                        if (err) {
                                            reject(err);
                                            return;
                                        }
                                       
                                        if (!res!.data.title) {
                                            console.log(`vuoto  is: ${res!.data.title}`);
                                            resolve("vuoto");
                                            return;
                                        }
                                        console.log(`pass2 title of the document  is: ${res!.data.title}`);
                                        resolve(res!.data.title);
                            
                                      });     
                                
                                
                                
                                } catch (err) {
                                    return getNewTokenDev(oAuth2Client);
                                  }
    
                   
                                
                              } catch (err) {
                                return console.log('Error loading client secret file:', err);
                              }

                       */

                       /*

                      authenticate(SCOPES)
                      .then(client => 
                            {
                              const docs = google.docs({ version: 'v1', auth: client }); 
                              docs.documents.get({                                       
                                 documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',                                        
                                   }, (err, res) => {                               
                             
                                  if (err) {
                                           return;
                                    }
                                  if (!res!.data.title)  {
                                    resolve('');
                                    return;
                                    }                                            
                                    
                                console.log(JSON.stringify(res?.data.body, null, 4))
                               
                                resolve (`runSample test  is: ${res!.data.title}`)
                                               
                                })
                            }) 
                      .catch((err) => {
                        console.log(err);
                        reject (err)
                      });

*/




AppDataSource.initialize().then(
    async (dataSource) => {        

        let postRepository = dataSource.getRepository(Utente)

        let utente1 = new Utente()
        utente1.firstName = "Evangelista"
        utente1.lastName = "Claudio"
        utente1.age = 30

        let utente2 = new Utente()
        utente2.firstName = "Fidanza"
        utente2.lastName = "Erika"
        utente2.age = 25

        let utente3 = new Utente()
        utente3.firstName = "Rossi"
        utente3.lastName = "Vasco"
        utente3.age = 50

        /* 
        //uso con promise

        postRepository
            .save(utente1)
            .then(
                (utente) => { console.log("Post has been saved: ", utente)
            resolve('user= ' + utente.firstName)
            
            })
            .catch((error) => console.log("Cannot save. Error: ", error))

        postRepository
            .findOneBy({id: 1})
            .then(
                (utente) =>  {
                    resolve('utente di nome : ' + utente!.firstName)
                })
            .catch((errore) => console.log("Utente non trovato"))

        */

       console.log("saving posts")
       await postRepository.save([utente1,utente2,utente3])


       console.log("loading the post. pay attention on order: ")
       const allPosts = await postRepository.find()

       
       await dataSource.destroy()

       //resolve(allPosts[1].firstName)
       resolve(allPosts)
      

        })
   .catch((error) => 
   {console.log("Error: ", error)

   reject(error)

    })

  });
    
 }

 async  getJsonDoc(): Promise<void> {
       
    return new Promise(async (resolve, reject)=> 
  
      {          

            authenticate(SCOPES)
            .then(client => 
                  {
                    const docs = google.docs({ version: 'v1', auth: client }); 
                    docs.documents.get({                                       
                       documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',                                        
                         }, (err, res) => {                               
                   
                        if (err) {
                                 return;
                          }
                        if (!res!.data.title)  {
                         
                          return;
                          }                                            
                          
                      console.log(JSON.stringify(res?.data.body, null, 4))
                     
                     
                                     
                      })
                  }) 
            .catch((err) => {
              console.log(err);
              reject (err)
            });
        })
 }

}


  