//packages
import React from "react"

//component class
class Create extends React.Component {
  constructor() {
    super()
    this.state = {
      scent_1: '',
      scent_2: '',
      embellishment: '',
      color: '',
      packaging: '',
      id: null
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreate(this.state)
  }
  render () {
    return (
      <div className="form-div">
        <h1 className="align-center">create form</h1>
        <div>
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
            <label htmlFor="embellishment">embellishment</label>
            <select name="embellishment" id="embellishment" onChange={this.handleChange}>
              <option value="none">None</option>
              <option value="extra_bubbles">Extra Air Bubbles (for crackling)</option>
              <option value="rose_petals">Rose Petals</option>
              <option value="sea_salt">Sea Salt</option>
            </select>
            <label htmlFor="color">color</label>
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
              <input type="radio" name="package" value="taper" /><img src="https://placehold.it/100x100.png" alt="taper" onClick={this.handleChange}/><br />
              <input type="radio" name="package" value="glass_jar" /><img src="https://placehold.it/100x100.png" alt="glass_jar" onClick={this.handleChange}/><br />
              <input type="radio" name="package" value="pillar" /><img src="https://placehold.it/100x100.png" alt="pillar" onClick={this.handleChange}/><br />
              <input type="radio" name="package" value="three_wick" /><img src="https://placehold.it/100x100.png" alt="three_wick" onClick={this.handleChange}/><br />
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

//export
export default Create
