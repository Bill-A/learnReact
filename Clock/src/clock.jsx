import React from 'react';
import {render} from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render () {
        return (
            <div>
              <h1>React Timer</h1>
              <h2>It tix ... {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

render(<Clock/>, document.getElementById('app'));

