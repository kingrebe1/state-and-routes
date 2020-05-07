import React, { Component } from 'react'
import Greeting from "../../components/js/greeting";

export default class welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', i: 0};
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        let nextI = this.state.i+1;
        if (nextI > 6) {
            nextI=0;
        }
        this.setState({name: event.target.value, i: nextI});
    }

    render() {
        let colours = ['#FAE5DA','#F6D8CC', '#F4D0C4', '#F1C7BB', '#EDBCB0', '#E9AFA3', '#c28c82']
        document.body.style = 'background: ' + colours[this.state.i];
        return (
            <>
                <Greeting name={this.state.name}/>
                <form>
                    <label>
                        Name: <input type="text" value={this.state.name}
                        onChange={this.handleNameChange} />
                    </label>
                </form>

                
            </>
        )
    }
}
