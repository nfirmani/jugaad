import axios from "axios";
import * as React from "react";

export default interface IFruit {
    id: number,
    name: string
}


type Props = {};

type State = {
    fruits: Array<IFruit>
};


export class CrudView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            fruits: []
        };
    }

    componentDidMount() {
        // fetch("http://localhost:8080/fruits") //http://localhost:8080/hello  //https://swapi.co/api/planets/3/ https://httpbin.org/get //http://localhost:8080/ex03_1/services/customers/1/
        // .then(res => res.json())
        // .then(res => this.setState({ fruits: res }))
        // .catch(() => this.setState({ hasErrors: true }));
        axios.get<Array<IFruit>>("http://localhost:8080/fruits")
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
        const { fruits } = this.state;
        // return <div> risposta server:   { JSON.stringify(this.state.fruits)}  errore: { JSON.stringify(this.state.hasErrors)}         
        // <button onClick ={this.stampa}>stampaa</button>        
        // </div>;   
        return (
            //<ul>
            //  { this.state.fruits.map(fruit => <li>{fruit}</li>)}
            // </ul>
            <div>

                <h4>Frutta  Lista</h4>

                <ul>
                    {fruits &&
                        fruits.map((fruit: IFruit, index: number) => (
                            <li>
                                {fruit.name}
                            </li>
                        ))}
                </ul>
            </div>

        )
    }
}
