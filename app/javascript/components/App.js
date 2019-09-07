// PACKAGES
import React from "react"

// DEPENDENCIES
import Main from "./Main.js"
import Header from "./Header.js"

// CLASS COMPONENT
class App extends React.Component {
  // STATE
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: "home",
        pageTitle: "create candle"
      },
      formInputs: {
        scent_1: null,
        scent_2: null,
        embellishment: null,
        color: null,
        packaging: null,
        id: null
      }
    }
  }
  // HANDLERS
  handleView = (view, candleData) => {
    let pageTitle = ''
    let formInputs = {
      scent_1: '',
      scent_2: '',
      embellishment: '',
      color: '',
      packaging: '',
      id: null
    }
    switch (view) {
      case 'home':
      pageTitle = "create candle"
      break
      case 'edit':
      pageTitle = "update candle"
      formInputs = {
        scent_1: candleData.scent_1,
        scent_2: candleData.scent_2,
        embellishment: candleData.embellishment,
        color: candleData.color,
        packaging: candleData.packaging,
        id: candleData.id
      }
      break
      default:
      break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }
  // RENDER
  render () {
    return (
      <div className="container">
        <Header handleView={this.handleView} />
        <Main handleView={this.handleView}
        view={this.state.view}
        formInputs={this.state.formInputs}
        />
      </div>
    )
  }
}

// EXPORT
export default App
