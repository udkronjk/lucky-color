import React from 'react'
import ReactDOM from 'react-dom'

class Color extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        var color = {
            color: this.props.color.code,
        }
        return (
            <div>
                <span>PANTONE {this.props.color.year} 年度色</span>
                <h3 className="color-name" style={color}>{this.props.color.nameChinese}({this.props.color.name})</h3>
                <span>色碼：{this.props.color.code}</span>
            </div>
        )
    }
}

export default Color