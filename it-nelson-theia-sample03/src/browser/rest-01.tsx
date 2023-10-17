import * as React from "react";

export class Rest01View extends React.Component<{}> {  

    state = {
        hasErrors: false,
        fruits: {}
    };

    componentDidMount() {
        //fetch("http://localhost:8080/fruits") //http://localhost:8080/hello  //https://swapi.co/api/planets/3/ https://httpbin.org/get //http://localhost:8080/ex03_1/services/customers/1/
        //fetch("http://localhost:8080/rest/xbrl/F:/BDAP/test/sdb/2019-09-23/2020177642930453702301PREVSDB.xbrl/facts?media=json", { mode: 'no-cors'})
        fetch("http://localhost:8080/about", { mode: 'no-cors'})
        //.then(res => res.json()) 
        .then(res => res.text)
        .then(res => this.setState({ fruits: res }))
        .catch(() => this.setState({ hasErrors: true }));
    }
    
  //  render() {    
  //      return <div> risposta server:   { JSON.stringify(this.state.fruits)}  errore1: { JSON.stringify(this.state.hasErrors)} </div>;    
  //  }

  //  render() {    
  //      return <div> risposta server:   { JSON.stringify(this.state.fruits)} errore1: { JSON.stringify(this.state.hasErrors)}  </div>;  
  //  }

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

}
