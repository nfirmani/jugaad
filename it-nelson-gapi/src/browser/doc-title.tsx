import { inject } from "@theia/core/shared/inversify";
//import { stringify } from "querystring";
import * as React from "react";
import { MyService } from "../common/srv-protocol";


type Props = {};

type State = {
    hasErrors: Boolean,
    title: String
};





export class DocTitle extends React.Component<Props,State> {  

    constructor(props: Props) {
        super(props);

        this.state = {
            hasErrors: false,
            title: ""
        };
    }
    titolo!:string;

    @inject(MyService) protected readonly myService: MyService

    

     async componentDidMount() {
        console.log("mi trovo in componentDidMount:  ");
       // fetch("http://localhost:8080/about", { mode: 'no-cors'})
        //.then(res => res.json()) 
        
        try {
            //non va bene perchè non funziona l'iniezione di dipendenza infatti getDocTitle è indefinito
            this.titolo = await this.myService.getDocTitle()! 
            // this.titolo = r;
            console.log("ris da console IL TITOLO è: "+ this.titolo);
          
 
            
        } catch (error) {
            console.log(error);
          }
        

        



        //console.log("componente valore di titolo:  " +  JSON.stringify(this.state.title)); 

        
         
     //   .then(res => 
     //       {
     //       console.log("valore di res:  " + res);  
     //       this.setState({ title: res })
     //   })
    //    .catch(() => this.setState({ hasErrors: true }));
    }
    
  //  render() {    
  //      return <div> risposta server:   { JSON.stringify(this.state.fruits)}  errore1: { JSON.stringify(this.state.hasErrors)} </div>;    
  //  }

    render() {  
        console.log("mi trovo in render:  " + this.titolo);  
        return <div> risposta server:   { JSON.stringify(this.state.title)} errore1: { JSON.stringify(this.state.hasErrors)}  </div>;  
    }

  /*
  render() {    
          return <div>
  <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://drive.google.com/file/d/1T4caIXAj9L4qq9kBVToQzThsJZ7sbWZy/preview`}
          frameBorder="0"
        />

        </div>
  }
  */

}
