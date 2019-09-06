//packages
import React from "react"

import Create from "./Create.js"
import Header from "./Header.js"
import Render from "./Render.js"

//comp class
class Main extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className="mobile-flex">
          <Create />
          <Render />
        </div>
      </div>
    )
  }
}

//export
export default Main
