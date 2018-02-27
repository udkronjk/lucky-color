import React from 'react';
import ReactDOM from 'react-dom';
import Divination from "Source/components/Divination";

require('Source/css/theme.scss')

class App extends React.Component {

    render() {
        return (
            <Divination/>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)