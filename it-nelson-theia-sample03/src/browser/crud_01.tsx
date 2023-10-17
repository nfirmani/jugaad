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

        return (

            <div>

                <h4>Lista della frutta</h4>

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
