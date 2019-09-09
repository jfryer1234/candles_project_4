// PACKAGES
import React from "react"

// DEPENDENCIES
import Create from "./Create.js"
import Render from "./Render.js"
import Update from "./Update.js"

// CLASS COMPONENT
class Main extends React.Component {
  // STATE
  constructor(props) {
    super(props)
    this.state = {
      candles: []
    }
  }
  // HANDLERS
  // api call that requests and stores all candles in the database
  fetchCandles = () => {
    fetch('/api/candles')
    .then(data=> data.json())
    .then(jData => {
      this.setState({ candles: jData })
    })
  }
  // api call that creates new candles
  handleCreate = (createData) => {
    fetch('api/candles', {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdCandle => {
      return createdCandle.json()
    })
    .then(jsonedCandle => {
      this.setState(prevState => {
        prevState.candles.unshift(jsonedCandle)
        return { candles: prevState.candles }
      })
    })
    .catch(err => console.log(err))
  }
  // api call that deletes a candle
  handleDelete = (id) => {
    fetch(`/api/candles/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(json => {
      this.setState(prevState=> {
        const candles = prevState.candles.filter( candle => candle.id !== id)
        return {candles}
      })
    })
    .catch(err => console.log(err))
  }
  // api call that updates an already existing candle
  handleUpdate = (updateCandle) => {
    fetch(`/api/candles/${updateCandle.id}`, {
      body: JSON.stringify(updateCandle),
      method: 'PUT',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      }
    })
    .then(updatedCandle => {
      return updatedCandle.json()
    })
    .then(updatedCandle => {
      this.props.handleView('home')
      this.setState(prevState => {
        const candles = prevState.candles.filter(candle => candle.id !== updateCandle.id)
        candles.unshift(updatedCandle)
        console.log(updatedCandle);
        return {candles}
      })
    })
    .catch(err => console.log(err))
  }
  // LIFE CYCLE
  // on page load, requests and saves all data from the candle database
  componentDidMount() {
    this.fetchCandles()
  }
  // RENDER
  render () {
    return (
      <div className="container">
        <div className="mobile-flex">
        <div>
        <h2 className="align-center">{this.props.view.pageTitle}</h2>
        { this.props.view.page === "home" ?
          <Create
          handleCreate={this.handleCreate}
          />
         : <Update
          formInputs={this.props.formInputs}
          handleUpdate={this.handleUpdate}
          />}
        </div>
        <div className="scroll">
        <h2 className="align-center">your candles</h2>
          {this.state.candles.map((candleData) => (
            <Render
            key={candleData.id}
            candleData={candleData}
            handleDelete={this.handleDelete}
            handleView={this.props.handleView}
            />
          ))}
        </div>
        </div>
      </div>
    )
  }
}

// EXPORT
export default Main
