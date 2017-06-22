import React from "react"

class aboutus extends React.Component {
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
      <div>About us Page</div>
    )
  }
}

//Index.contextTypes = {
//  setEdges: React.PropTypes.func,
//}

export default aboutus

