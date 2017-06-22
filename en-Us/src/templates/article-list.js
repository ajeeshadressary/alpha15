import React from 'react'
import { Link } from 'react-router'

export default class article extends React.Component {
    render() {
          const listItems = this.props.pathContext.push_data.map((listValue,index) =>
           <div key={index}>
                <h1><a href={"/"+listValue.fields.slug}>{listValue.fields.productName}</a></h1>
                <p>{listValue.fields.productDescription}</p>
            </div>
    
  );
        return (
            <div>
               {listItems}
            </div>
        )
    }
}
