import React from "react"

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require("!raw-loader!../public/styles.css")
  } catch (e) {
    console.log(e)
  }
}

module.exports = React.createClass({
  render() { 
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (<style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }}/>)
    }

    return (
      <html lang="en">
        <head>         
          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta name="description" content="Swiffer : Household Cleaning Products for Every Surface"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />         
          <meta name="viewport" />
          <title>TestSite</title>        
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }}/>
          {this.props.postBodyComponents}
          <p id="testid" data-swiftype-index='false'>From HTML.JS</p>
        </body>
      </html>
    )
  },
})
