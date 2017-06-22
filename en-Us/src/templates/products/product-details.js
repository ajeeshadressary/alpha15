import React from 'react'
import { Link } from 'react-router'
import axios from "Axios";
var toml = require("toml!../../../config.toml");
console.log("INDIA",toml.name.first);

export default class product extends React.Component {
    componentDidMount(){
        
    axios.get("https://api.swiftype.com/api/v1/public/engines/search?q=the&engine_key=5CLQYDazDqWsZnFmNjpB",
    {
        "document_types": ['books'],
        "filters": {"books": {"genre": 'fiction'}},
        "per_page":10,
        "page":1,
        "fetch_fields":{"books":["author","genre"]},
        "facets":{"books":["author","genre"]},

    }
).then((response) => {
      console.log('Axios Data:',JSON.stringify(response));
    }).catch(function(error) {
      console.log(error);
    });
   /* var config = {
  headers: {'X-My-Custom-Header': 'Header-Value'}
};    
    axios.post('https://api.swiftype.com/api/v1/engines/library/document_types/books/search', 
    config,
    {
        "auth_token": "iiobB_py9ZVfboeF8soQ",
        "q":"the",
        "filters":{"books":{"genre":"fiction"}},
        "per_page":5,
        "page":1,
        "fetch_fields":{
          "books":["author","genre"]
        }
      }
    )
  .then(function(response){
    console.log('saved successfully')
  }); */

    }
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