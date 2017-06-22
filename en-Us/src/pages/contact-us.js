import React from "react"

class contactus extends React.Component {
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
    console.log(this.props.route.path)
    //this.context.setEdges(this.props.data.allPosts.edges)
    return (
      <div>Contact Page</div>
    )
  }
}

//Index.contextTypes = {
//  setEdges: React.PropTypes.func,
//}

export default contactus

