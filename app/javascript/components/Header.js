// PACKAGES
import React from "react"

// CLASS COMPONENT
class Header extends React.Component {
  // RENDER
  render () {
    return (
      <header>
        <h1 onClick={() => {this.props.handleView("home")}}>Candle deLight</h1>
        <h2>find your perfect match</h2>
      </header>
    )
  }
}

// EXPORT
export default Header
