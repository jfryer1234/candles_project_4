//packages
import React from "react"

//comp class
class Render extends React.Component {
  render () {
    return (
      <div className="render-div">
      <div className="block-div">
      {this.props.candleData.scent_1}
      {this.props.candleData.scent_2}
      {this.props.candleData.embellishment}
      {this.props.candleData.color}
      {this.props.candleData.packaging}
      </div>
      <h3 onClick={() => {this.props.handleDelete(this.props.candleData.id)}}>Delete</h3>
      </div>

    )
  }
}

//export
export default Render
