import React from "react"
import { Link } from 'react-router'
import Menu from "../components/atomic/navigations/menu.js"
import '../../static/css/beauty.scss'
import '../../static/css/_bootstrap.scss'

class DefaultLayout extends React.Component {
  getChildContext() {
    return {
      //setEdges: edges => {
      //  this.edges = edges
      //},
    }
  }
  componentDidMount() {
    // Create references to html/body elements
    this.htmlElement = document.querySelector('html')
    this.bodyElement = document.querySelector('body')

    // Cache the window width.
    this.windowWidth = window.innerWidth
  }
  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { location } = this.props
    const isModal = this.modalBackgroundChildren

    return (
      <div>
        <div style={{ background: 'black' }}>
          <div style={{ padding: '20px' }} data-swiftype-index='false'>
            <Link to={'/'} style={{ color: 'white', textDecoration: 'none', }}>
              Your Brand! 44
                </Link>
          </div>
          <Menu />
        </div>
        <div>
          {this.props.children}
        </div>
        <div data-swiftype-index='false'>footer</div>
      </div>
    )
  }
}

DefaultLayout.childContextTypes = {
  setEdges: React.PropTypes.func,
}

export default DefaultLayout
