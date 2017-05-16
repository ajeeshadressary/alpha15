import React from "react"

class Index extends React.Component {
  constructor() {
    super();
  }

  update() {
  }

  handleScroll = () => {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    console.log(this.props)
    //this.context.setEdges(this.props.data.allPosts.edges)
    return (
      <div>
	  <h1>Test Home Page Modifies</h1>
	  <p>Uisng Netlify</p>
	  </div>
    )
  }
}

//Index.contextTypes = {
//  setEdges: React.PropTypes.func,
//}

export default Index