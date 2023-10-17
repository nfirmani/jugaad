import { Component, ChangeEvent } from "react";
import React = require("react");
import IFruit from "./fruit.type";
import FruitDataService from "./service"

type Props = {};

type State = IFruit & {
  submitted: boolean
};

export default class AddFruit extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveFruit = this.saveFruit.bind(this);
    this.newFruit = this.newFruit.bind(this);

    this.state = {
      id: null,      
      nome: "",
      descrizione: "",
      submitted: false
    };
  }

  onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      nome: e.target.value      
    });
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      descrizione: e.target.value
    });
  }

  saveFruit() {
    const data: IFruit = {
        id: this.state.id,
      nome: this.state.nome,
      descrizione: this.state.descrizione
     
    };

    FruitDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          nome: response.data.nome,   
          descrizione: response.data.descrizione,        
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newFruit() {
    this.setState({
      id: null,     
      nome: "",  
      descrizione: "",    
      submitted: false
    });
  }

  render() {
    const { submitted, nome: nome, descrizione: descrizione } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newFruit}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Nome</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={nome}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descrizione</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={descrizione}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.saveFruit} className="btn btn-success">
              Invio
            </button>
          </div>
        )}
      </div>
    );
  }
}