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
        lilac: "Lilac",
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
      },
      candleImage: {

      }
    }
  }
  // HANDLERS
  // function which assigns the image src based on the color and packaging of candle
  directImage = (color, packaging) => {
    let candle = color + " " + packaging
    switch (candle) {
      case "white taper":
        return "/images/taper-white.png"
        break
      case "white glass_jar":
        return "/images/jar-white.png"
        break
      case "white pillar":
        return "/images/pillar-white.png"
        break
      case "white three_wick":
        return "/images/3wick-white.png"
        break
      case "red taper":
        return "/images/taper-red.png"
        break
      case "red glass_jar":
        return "/images/jar-red.png"
        break
      case "red pillar":
        return "/images/pillar-red.png"
        break
      case "red three_wick":
        return "/images/3wick-red.png"
        break
      case "orange taper":
        return "/images/taper-orange.png"
        break
      case "orange glass_jar":
        return "/images/jar-orange.png"
        break
      case "orange pillar":
        return "/images/pillar-orange.png"
        break
      case "orange three_wick":
        return "/images/3wick-orange.png"
        break
      case "yellow taper":
        return "/images/taper-yellow.png"
        break
      case "yellow glass_jar":
        return "/images/jar-yellow.png"
        break
      case "yellow pillar":
        return "/images/pillar-yellow.png"
        break
      case "yellow three_wick":
        return "/images/3wick-yellow.png"
        break
      case "green taper":
        return "/images/taper-green.png"
        break
      case "green glass_jar":
        return "/images/jar-green.png"
        break
      case "green pillar":
        return "/images/pillar-green.png"
        break
      case "green three_wick":
        return "/images/3wick-green.png"
        break
      case "blue taper":
        return "/images/taper-blue.png"
        break
      case "blue glass_jar":
        return "/images/jar-blue.png"
        break
      case "blue pillar":
        return "/images/pillar-blue.png"
        break
      case "blue three_wick":
        return "/images/3wick-blue.png"
        break
      case "purple taper":
        return "/images/taper-purple.png"
        break
      case "purple glass_jar":
        return "/images/jar-purple.png"
        break
      case "purple pillar":
        return "/images/pillar-purple.png"
        break
      case "purple three_wick":
        return "/images/3wick-purple.png"
        break
      case "tan taper":
        return "/images/taper-tan.png"
        break
      case "tan glass_jar":
        return "/images/jar-tan.png"
        break
      case "tan pillar":
        return "/images/pillar-tan.png"
        break
      case "tan three_wick":
        return "/images/3wick-tan.png"
        break
      default:
        console.log("Something has gone horribly wrong.");
        console.log("Please check components/Render.js");
        break
    }
  }
  // RENDER
  render () {
    return (
      <div className="render-div">
        <div className="block-div">
          <img src={this.directImage(this.props.candleData.color, this.props.candleData.packaging)} alt="a candle of this color and shape" />
          {this.props.candleData.scent_2 === "no_scent" ? <h4><span className="fancy"> Scent </span> : {this.state.scent[this.props.candleData.scent_1]}</h4> : <h4><span className="fancy"> Scents </span> : {this.state.scent[this.props.candleData.scent_1]} & {this.state.scent[this.props.candleData.scent_2]}</h4>}
          {this.props.candleData.embellishment === "none" ? "" : <h4><span className="fancy"> Embellishment </span> : {this.state.embellishment[this.props.candleData.embellishment]}</h4>}
          <h4><span className="fancy"> Color </span>: {this.state.color[this.props.candleData.color]}</h4>
          <h4><span className="fancy"> Packaging </span> : {this.state.packaging[this.props.candleData.packaging]}</h4>
        </div>
        <button type="button" onClick={() => {this.props.handleView("edit", this.props.candleData)}}>Edit</button>
        <button type="button" onClick={() => {this.props.handleDelete(this.props.candleData.id)}}>Delete</button>
      </div>

    )
  }
}

// EXPORT
export default Render
