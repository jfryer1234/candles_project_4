import React from "react"

import Main from "./Main.js"
import Header from "./Header.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: "home",
        pageTitle: "create candle"
      }
    }
  }
  handleView = (view) => {
    let pageTitle = ''
    switch (view) {
      case 'home':
      pageTitle = "create candle"
      break
      case 'edit':
      pageTitle = "update candle"
      break
      default:
      break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      }
    })
  }
  render () {
    return (
      <div>
        <Header handleView={this.handleView} />
        <Main handleView={this.handleView}
        view={this.state.view}
        />
      </div>
    )
  }
}

export default App
