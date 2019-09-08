// PACKAGES
import React from "react"

// CLASS COMPONENT
class Create extends React.Component {
  // STATE
  constructor() {
    super()
    this.state = {
      scent_1: 'no_scent',
      scent_2: 'no_scent',
      embellishment: 'none',
      color: 'white',
      packaging: 'taper',
      id: null
    }
  }
  // HANDLERS
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }
  handleRadioButton = (e) => {
    this.setState({packaging : e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreate(this.state)
  }
  // RENDER
  render () {
    return (
      <div className="form-div">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="scent_1">Scent 1:</label>
            <select name="scent_1" id="scent_1" onChange={this.handleChange}>
              <option value="no_scent">Unscented</option>
              <option value="cinnamon">Cinnamon</option>
              <option value="citrus">Citrus</option>
              <option value="cucumber">Cucumber</option>
              <option value="fresh_linen">Fresh Linen</option>
              <option value="ginger">Ginger</option>
              <option value="lavender">Lavender</option>
              <option value="lilac">Lilac</option>
              <option value="maple_butter">Maple Butter</option>
              <option value="peppermint">Peppermint</option>
              <option value="sea_breeze">Sea Breeze</option>
              <option value="vanilla">Vanilla</option>
            </select>
            <label htmlFor="scent_2">Scent 2:</label>
            <select name="scent_2" id="scent_2" onChange={this.handleChange}>
              <option value="no_scent">Unscented</option>
              <option value="cinnamon">Cinnamon</option>
              <option value="citrus">Citrus</option>
              <option value="cucumber">Cucumber</option>
              <option value="fresh_linen">Fresh Linen</option>
              <option value="ginger">Ginger</option>
              <option value="lavender">Lavender</option>
              <option value="lilac">Lilac</option>
              <option value="maple_butter">Maple Butter</option>
              <option value="peppermint">Peppermint</option>
              <option value="sea_breeze">Sea Breeze</option>
              <option value="vanilla">Vanilla</option>
            </select>
            <label htmlFor="embellishment">Embellishment:</label>
            <select name="embellishment" id="embellishment" onChange={this.handleChange}>
              <option value="none">None</option>
              <option value="extra_bubbles">Extra Air Bubbles (for crackling)</option>
              <option value="rose_petals">Rose Petals</option>
              <option value="sea_salt">Sea Salt</option>
            </select>
            <label htmlFor="color">Color:</label>
            <select name="color" id="color" onChange={this.handleChange}>
              <option value="white">Ghost White</option>
              <option value="red">Scarlet Red</option>
              <option value="orange">Sunset Orange</option>
              <option value="yellow">Daffodil Yellow</option>
              <option value="green">Rainforest Green</option>
              <option value="blue">Ocean Blue</option>
              <option value="purple">Plum Purple</option>
              <option value="tan">Tuscan Sand</option>
            </select>
            <div className="radio-buttons">
              <input type="radio"
                     name="packaging"
                     value="taper"
                     checked={this.state.packaging === "taper"}
                     onChange={this.handleRadioButton}
              />
              <img src="/images/taper-white.png"
                   className="thumbnail"
                   alt="taper"
              />
              <br />
              <input type="radio"
                     name="packaging"
                     value="glass_jar"
                     checked={this.state.packaging === "glass_jar"}
                     onChange={this.handleRadioButton}
              />
              <img src="/images/jar-white.png"
                   className="thumbnail"
                   alt="glass_jar"
              />
              <br />
              <input type="radio"
                     name="packaging"
                     value="pillar"
                     checked={this.state.packaging === "pillar"}
                     onChange={this.handleRadioButton}
              />
              <img src="/images/pillar-white.png"
                   className="thumbnail"
                   alt="pillar"
              />
              <br />
              <input type="radio"
                     name="packaging"
                     value="three_wick"
                     checked={this.state.packaging === "three_wick"}
                     onChange={this.handleRadioButton}
              />
              <img src="/images/3wick-white.png"
                   className="thumbnail"
                   alt="three_wick"
              />
              <br />
            </div>
            <input type="submit" />
          </form>
      </div>
    )
  }
}

// EXPORT
export default Create
