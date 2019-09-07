//packages
import React from "react"

//comp class
class Header extends React.Component {
  render () {
    return (
      <header>
        <h1 onClick={() => {this.props.handleView("home")}}>Candle deLight</h1>
        <h2>find your perfect match</h2>
      </header>
    )
  }
}

//export
export default Header
