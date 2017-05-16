import React from 'react'
import { Link } from 'react-router'

export default class product extends React.Component {
    render() {
        const listItems = this.props.pathContext.push_data.category.map((listValue,index) =>
            <li key={index}>{listValue}</li>
        );
        return (
            <div className="Container" data-swiftype-index='true'>
            <div className="row">
            <div className="col-md-8 col-sm-8">
            <h1 data-swiftype-name="title" data-swiftype-type="string">{this.props.pathContext.push_data.productName}</h1>
            <p data-swiftype-name="description" data-swiftype-type="string">{this.props.pathContext.push_data.productDescription}</p>
            <p data-swiftype-name="price" data-swiftype-type="string">{this.props.pathContext.push_data.productPrice}</p>
            <ul data-swiftype-name="Categories" data-swiftype-type="string">
              {listItems}
            </ul>
            </div>
			</div>    
            </div>
        )
    }
}