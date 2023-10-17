
import * as React from "react";
import IFruit from "./fruit.type";
import FruitDataService from "./service"

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



    render() {
        const { fruits } = this.state;

        return (

            <div>

                <h4>Lista della frutta 03</h4>

                <ul>
                    {fruits &&
                        fruits.map((fruit: IFruit, index: number) => (
                            <li>
                                {fruit.nome}
                            </li>
                        ))}
                </ul>
            </div>

        )


    }

}