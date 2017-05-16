import React from 'react'
import { Link } from 'react-router'

export default class article extends React.Component {
    render() {
        return (
            <div>
			     its working
                <h1>{this.props.pathContext.push_data.productName}</h1>
                <p>{this.props.pathContext.push_data.productDescription}</p>
            </div>
        )
    }
}
