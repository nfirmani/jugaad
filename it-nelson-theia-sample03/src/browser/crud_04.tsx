import * as React from "react";

import {  BrowserRouter, Link,  Route, Routes } from "react-router-dom";

import AddFruit from "./add-fruit.component";
import Fruit from "./fruit.component";

import FruitsList from "./fruits-list.component";

//import 'f:/2024/it-nelson-theia-i02/node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
//import '/public/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


export class CrudView extends React.Component<{}> {


    render() {

        return (
            <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/fruits"} className="navbar-brand">
                        Frutta
                </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/fruits"} className="nav-link">
                                Lista
                    </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                -Aggiungi-
                    </Link>
                        </li>
                    </div>
                </nav>

                <div className="container mt-3">
                <Routes>
                  <Route  path="/fruits" element={<FruitsList />} />
                  <Route  path="/add" element={<AddFruit />} />
                  <Route path="/fruits/:id" element={<Fruit />} />
                </Routes>
              </div>
            </div>
            </BrowserRouter>
        );


    }

}

/** <Route path="/fruits/:id" element={<Fruit />} />
*



 *
*/