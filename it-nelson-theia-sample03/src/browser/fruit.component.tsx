import { Component, ChangeEvent } from "react";
import React = require("react");
//import { RouteComponentProps } from 'react-router-dom';

import IFruit from "./fruit.type";
import FruitDataService from "./service"

//interface RouterProps { // type for `match.params`
//  id: string; // must be type `string` since value comes from the URL
//}

//type Props = RouteComponentProps<RouterProps>;
type Props = {};

type State = {
  currentFruit: IFruit;
  message: string;
}

export default class Fruit extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateFruit = this.updateFruit.bind(this);
    this.deleteFruit = this.deleteFruit.bind(this);

    this.state = {
      currentFruit: {
        id: null,
        nome: "",
        descrizione: ""   
        
      },
      message: "",
    };
  }

  componentDidMount() {
   // this.getTutorial(this.props.match.params.id);
  }

  onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentFruit: {
          ...prevState.currentFruit,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentFruit: {
        ...prevState.currentFruit,
        description: description,
      },
    }));
  }

  getTutorial(id: string) {
    FruitDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentFruit: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updatePublished(status: boolean) {
    const data: IFruit = {
      id: this.state.currentFruit.id,
      nome: this.state.currentFruit.nome,
      descrizione: this.state.currentFruit.descrizione
    };

    FruitDataService.update(data, this.state.currentFruit.id)
      .then((response: any) => {
        this.setState((prevState) => ({
          currentFruit: {
            ...prevState.currentFruit,
            published: status,
          },
          message: "The status was updated successfully!"
        }));
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updateFruit() {
    FruitDataService.update(
      this.state.currentFruit,
      this.state.currentFruit.id
    )
      .then((response: any) => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!",
        });
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  deleteFruit() {
    FruitDataService.delete(this.state.currentFruit.id)
      .then((response: any) => {
        console.log(response.data);
        //this.props.history.push("/tutorials");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { currentFruit: currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Frutta</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.nome}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descrizione</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.descrizione}
                  onChange={this.onChangeDescription}
                />
              </div>
              

              
            </form>

         

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteFruit}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateFruit}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Clicca su un Frutto ...</p>
          </div>
        )}
      </div>
    );
  }
}