import * as React from 'react';
import { injectable, postConstruct } from 'inversify';

//import GDoc from './g-doc';
import { inject } from '@theia/core/shared/inversify';
import { MyService } from '../common/srv-protocol';

import { ReactWidget } from '@theia/core/lib/browser';
//import { DocTitle } from './doc-title';
//import GDoc from './g-doc';
import { MessageService } from '@theia/core/lib/common/message-service';
//import DataGrid01 from './datagrid-base';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

//import {  GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import {    creaReq,   creaReq_0 } from './doc-request';   //
//import FormA from './form-a';

import GDoc from './g-doc';



type trighe = { id: number, lastName: string, firstName: string, age: number }[];



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];


  /*
   const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
*/







//let doc:any=[];


@injectable()
export class GApiWidget extends ReactWidget {
    static readonly ID = 'gapi:widget';
    static readonly LABEL = 'Google api';

    protected text: string;

    titolo: string;
    righe: trighe;

    @inject(MyService) protected readonly myService: MyService;
    @inject(MessageService) private readonly messageService: MessageService;

    
    
    
    async handleTitClick() {
        console.log("tit click  ");
        const titolo = await this.myService.getDocTitle();
        console.log("handle: titolo=  " + titolo);
                this.messageService.info(titolo);
      }

      async handleMergeClick() {
       await this.myService.mergeDoc();
        console.log("handle: merge  ");
                this.messageService.info("merge");
      }

      async handleDocClick() {
       // await this.myService.getDoc([request_4]);
       
       const tb_utente = await this.myService.getDocTest();
       console.log('*********************tb_utente = '+JSON.stringify(tb_utente));
       
       const tb_gdoc =  creaReq_0(tb_utente); 
       //const tb_gdoc =  creaReq_Aij([]); 
       
       console.log('-----------------------doc = '+JSON.stringify(tb_gdoc));
       await this.myService.getDoc([tb_gdoc]);
         console.log("handle: getDoc  ");
                 this.messageService.info("getDoc");
       }

       async handleSheetClick() {
        await this.myService.getSheet();
         console.log("handle: getSheet  ");
                 this.messageService.info("getSheet");
       }

      async handleListDocClick() {
        const name = await this.myService.listDocDrive();
         console.log("handle: listDocDrive  ");
                 this.messageService.info(name);
       }

       async handleGetJsonDocClick() {
         await this.myService.getJsonDoc();
         console.log("GetJsonDocClick  ");
                 this.messageService.info("GetJsonDocClick");
       }
    
       async handleTestClick() {
        const row = await this.myService.getDocTest();
         console.log("handle: listDocDrive  ");
                 this.messageService.info(row[1].firstName);

       

      //this.righe = [
      //  { id: 3, lastName: 'fidanza', firstName: 'erica', age: 35 },
      //  { id: 4, lastName: 'di pietro', firstName: 'mary', age: 42 }
      //];  

      this.righe = row;

      this.update();


       }

       async handleCreaReqClick() {     
         const req =  creaReq();
         console.log('req= '+JSON.stringify(req));
         //this.messageService.info("funzione: creaReq"); 
         await this.myService.getDoc([req]);
         console.log("handle: getDoc  ");
                 this.messageService.info("funzione: creaReq");
         

       }

    @postConstruct()
    protected init(): void {
        this.doInit()
    }   
       
   
    protected async doInit(): Promise<void> {
        //  initialization 
        this.id = GApiWidget.ID;
        this.title.label = GApiWidget.LABEL;
        this.title.caption = GApiWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.

        this.righe = [
            { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
            { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 }
          ];  
    


        this.update();    //  Update the view 

        //this.myService.getDocTitle().then(r => console.log("IL TITOLO è: "+ r));

        //this.setText("prova di settext: ");

        console.log("gapi-widget passo 0:  ");


       


     
        this.myService.getDocTitle().then(r => { 
           // this.titolo = r;
           console.log("ris da console IL TITOLO è: "+ r);
           console.log("gapi-widget step 1:  ");

           this.titolo = r;
           console.log("valore di titolo è:  "+this.titolo);           
                   
            this.update(); 
        });


      



        
}   //fine init
    
  
    //  According to the parameters received 
    //protected render(): React.ReactNode {
      render(): React.ReactElement {

       

 /* 
        return ( 
            <BasicForm></BasicForm>

        )


        return (    
            <GDoc></GDoc>
        )

 */

   return (   
       
        <div style={{ height: '100%', width: '100%' }}>
            <div style={{ height: '10%', width: '100%' }}>   
           
           <p>test: {this.titolo} </p>
           <button onClick={() => this.handleTitClick()}>
        Titolo documento
      </button>  
      <button onClick={() => this.handleMergeClick()}>
        Merge
      </button>

      <button onClick={() => this.handleDocClick()}>
        getRequest
      </button>

      <button onClick={() => this.handleSheetClick()}>
        getSheet
      </button>

      <button onClick={() => this.handleListDocClick()}>
        listDocDrive
      </button>

      <button onClick={() => this.handleGetJsonDocClick()}>
        getDocJsonClick
      </button>

      <button onClick={() => this.handleTestClick()}>
        test1
      </button>

      <button onClick={() => this.handleCreaReqClick()}>
        creaReq
      </button>

     </div>
      

     <div style={{ height: '40%', width: '100%' }}>      
     <DataGrid
       rows={this.righe}
       columns={columns}          
       checkboxSelection       
     />
     </div>     

     <div style={{ height: '60%', width: '100%' }}> 
     <GDoc></GDoc>
     </div> 
   
         
      </div>  
     
       
)
    }
}

//<FormA></FormA>