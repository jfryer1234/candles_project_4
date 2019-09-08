// PACKAGES
import React from "react"

// DEPENDENCIES
import Update from "./Update.js"

// CLASS COMPONENT
class Render extends React.Component {
  // STATE
  constructor(props) {
    super(props)
    this.state = {
      scent: {
        no_scent: "Unscented",
        cinnamon: "Cinnamon",
        citrus: "Citrus",
        cucumber: "Cucumber",
        fresh_linen: "Fresh Linen",
        ginger: "Ginger",
        lavender: "Lavender",
        lilac: "lilac",
        maple_butter: "Maple Butter",
        peppermint: "Peppermint",
        sea_breeze: "Sea Breeze",
        vanilla: "Vanilla"
      },
      embellishment: {
        none: "none",
        extra_bubbles: "Air Bubbles (for crackling)",
        rose_petals: "Rose Petals",
        sea_salt: "Sea Salt"
      },
      color: {
        white: "Ghost White",
        red: "Scarlet Red",
        orange: "Sunset Orange",
        yellow: "Daffodil Yellow",
        green: "Rainforest Green",
        blue: "Ocean Blue",
        purple: "Plum Purple",
        tan: "Tuscan Sand"
      },
      packaging: {
        taper: "Taper",
        glass_jar: "Glass Jar",
        pillar: "Pillar",
        three_wick: "Three-Wick"
      }
    }
  }
  // RENDER
  render () {
    return (
      <div className="render-div">
      <div className="block-div">
      <h3>Scents</h3>
      <h4>{this.state.scent[this.props.candleData.scent_1]} & {this.state.scent[this.props.candleData.scent_2]}</h4>
      <h4>Embellishment: {this.state.embellishment[this.props.candleData.embellishment]}</h4>
      <h4>Color: {this.state.color[this.props.candleData.color]}</h4>
      <h4>Packaging: {this.state.packaging[this.props.candleData.packaging]}</h4>
      </div>
      <button type="button" onClick={() => {this.props.handleDelete(this.props.candleData.id)}}>Delete</button>
      <button type="button" onClick={() => {this.props.handleView("edit", this.props.candleData)}}>Edit</button>
      </div>

    )
  }
}

// EXPORT
export default Render
