import React from 'react'

class App extends React.Component {
  state = {
    count: 0,
  }

  handleIncrement = e => {
    e.preventDefault()
    this.setState(state => ({ count: state.count + 1 }))
  }

  handleDecrement = e => {
    e.preventDefault()
    this.setState(state => ({ count: state.count - 1 }))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Count: {count} </h2>
        <button onClick={e => this.handleIncrement(e)} type="button">
          +
        </button>
        <button onClick={e => this.handleDecrement(e)} type="button">
          -
        </button>
      </div>
    )
  }
}

export default App
