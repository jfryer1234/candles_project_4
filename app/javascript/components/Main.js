//packages
import React from "react"

import Create from "./Create.js"
import Render from "./Render.js"
import Update from "./Update.js"

//comp class
class Main extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    candles: []
  }
}
//handlers
fetchCandles = () => {
  fetch('/api/candles')
  .then(data=> data.json())
  .then(jData => {
    this.setState({ candles: jData })
  })
}
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
      prevState.candles.push(jsonedCandle)
      return { candles: prevState.candles }
    })
  })
  .catch(err => console.log(err))
}
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
      return { candles}
    })
  })
  .catch(err => console.log(err))
}


//life cycles
componentDidMount() {
  this.fetchCandles()
}
  render () {
    return (
      <div>
        <div className="mobile-flex">
        <div>
        <h1 className="align-center">{this.props.view.pageTitle}</h1>
        { this.props.view.page === "home" ?
          <Create
          handleCreate={this.handleCreate}
          /> : <Update />}
        </div>
        <div>
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

//export
export default Main
