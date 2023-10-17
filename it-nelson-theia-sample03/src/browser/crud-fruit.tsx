import * as React from "react";

export class CRUDFruitView extends React.Component<{}> {  

  

    stato = {
        hasErrors: false,
        fruits: {}
    };

     stampa = () => {
        console.log('stampa qualcosa');
    }

    componentDidMount() {
        fetch("http://localhost:8080/fruits/q") //http://localhost:8080/hello  //https://swapi.co/api/planets/3/ https://httpbin.org/get //http://localhost:8080/ex03_1/services/customers/1/
        .then(res => res.json())
        .then(res => this.setState({ fruits: res }))
        .catch(() => this.setState({ hasErrors: true }));
    }
    
    render() {    
        return (
        <div> risposta server:   { JSON.stringify(this.stato.fruits)} errore: { JSON.stringify(this.stato.hasErrors)} <button onClick ={this.stampa}>stampa</button> fine


        <h3>TODO</h3>
        
        <form >
          <label htmlFor="new-todo">
            Cosa bisogna fare?
          </label>
          <input
            id="new-todo"
            
            
          />
          <button>
            Aggiungi #
          </button>
        </form>

        </div>);    
    }

   

    
      }
