import * as React from 'react';


  


export default function GDoc() {

   

return (

    <div>
        <h1>esempio di google doc</h1>
    
    <iframe
        style={{
            position: "absolute",
            top: 500,
            left: 0,
            width: "100%",
            height: "80%"
        }}
        //src={`https://drive.google.com/file/d/1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY/preview`}
        src={`https://docs.google.com/document/d/1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY/edit`}
        frameBorder="0" />

       

      
        </div>
);

}