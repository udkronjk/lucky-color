import React from 'react'
import ReactDOM from 'react-dom'

class DivinationTitle extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default DivinationTitle