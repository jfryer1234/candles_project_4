//packages
import React from "react"

//comp class
class Render extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     cdPackaging: this.props.candleData.packaging,
  //     packaging: ""
  //   }
  // }
  // transformData (cdPackaging) {
  //   let packaging = ""
  //   switch (cdPackaging) {
  //     case "glass_jar":
  //       packaging: "glass jar"
  //       break
  //     case "three_wick":
  //       packaging: "three wick"
  //       break
  //     default:
  //       packaging: cdPackaging
  //       break
  //   }
  //   this.setState({
  //     packaging: packaging
  //   })
  // }
  render () {
    return (
      <div className="render-div">
      <div className="block-div">
      <h3>Scents</h3>
      <h4>{this.props.candleData.scent_1} & {this.props.candleData.scent_2}</h4>
      <h4>Embellishment: {this.props.candleData.embellishment}</h4>
      <h4>Color: {this.props.candleData.color}</h4>
      <h4>Packaging: {this.props.candleData.packaging}</h4>
      </div>
      <h3 onClick={() => {this.props.handleDelete(this.props.candleData.id)}}>Delete</h3>
      </div>

    )
  }
}

//export
export default Render
