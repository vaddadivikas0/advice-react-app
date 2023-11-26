import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";
import "./app.css";

class App extends React.Component {  // app is a react component.
    state = { advice: '' } // global obj contains important things of a component ( advice in this case) 

    componentDidMount() {   // react lifecycle method executes at when the component is rendered. 
        // we used to method bcoz we want to render a advice when app component is rendered initially.
        this.fetchAdvice();

    }

    fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice })
            })
            .catch((error) => {
                console.log(error);
            });
    }




    render = () => { // render is alos a react lifecycle method.
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
