import { Component, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import React = require("react");
import IFruit from "./fruit.type";
import FruitDataService from "./service"

type Props = {};

type State = {
  fruits: Array<IFruit>,
  currentFruit: IFruit | null,
  currentIndex: number,
  searchTitle: string
};

export default class FruitsList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllFruits = this.removeAllFruits.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      fruits: [],
      currentFruit: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e: ChangeEvent<HTMLInputElement>) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveTutorials() {
    FruitDataService.getAll()
      .then((response: any) => {
        this.setState({
          fruits: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentFruit: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial: IFruit, index: number) {
    this.setState({
        currentFruit: tutorial,
      currentIndex: index
    });
  }

  removeAllFruits() {
    FruitDataService.deleteAll()
      .then((response: any) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentFruit: null,
      currentIndex: -1
    });

    FruitDataService.findByTitle(this.state.searchTitle)
      .then((response: any) => {
        this.setState({
          fruits: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, fruits, currentFruit, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Lista Frutta</h4>

          <ul className="list-group">
            {fruits &&
              fruits.map((fruit: IFruit, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(fruit, index)}
                  key={index}
                >
                  {fruit.nome}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllFruits}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentFruit ? (
            <div>
              <h4>Frutta</h4>
              <div>
                <label>
                  <strong>Nome:</strong>
                </label>{" "}
                {currentFruit.nome}
              </div>

              <div>
                <label>
                  <strong>Descrizione:</strong>
                </label>{" "}
                {currentFruit.descrizione}
              </div>
             

              <Link
                to={"/fruits/" + currentFruit.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Clicca su un Frutto...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}