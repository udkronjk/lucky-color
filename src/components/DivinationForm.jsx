import React from 'react'
import ReactDOM from 'react-dom'

class DivinationForm extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        var Button
        if (this.props.loading) {
            Button = <button className="fluid ui loading button">Loading</button>
        } else {
            Button = <input className="fluid positive ui button" type='submit' value={this.props.firstDivinate ? '占卜！' : '重新占卜'} onClick={this.props.divinateColor} />
        }
        return (
            <div className="divinate-button">
                {Button}
            </div>
        )
    }
}

export default DivinationForm