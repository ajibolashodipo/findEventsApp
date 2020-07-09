import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import SearchEvents from "./components/SearchEvents"

class App extends Component {
  render() {
    return (
      <div>
        <h1>Event Finder</h1>
        <SearchEvents />
      </div>
    )
  }
}

export default App
