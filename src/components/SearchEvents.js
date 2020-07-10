import React, { Component } from "react"
import "./SearchEvents.css"
import { connect } from "react-redux"

export class SearchEvents extends Component {
  state = {
    location: "",
    category: "",
    date: "",
    price: "",
    select: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addFormData(this.state)
  }

  render() {
    console.log(this.props.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            onChange={this.handleChange}
            value={this.state.location}
          />
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            onChange={this.handleChange}
            value={this.state.category}
          />
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            onChange={this.handleChange}
            value={this.state.date}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            onChange={this.handleChange}
            value={this.state.price}
          />

          <label htmlFor="select"> Options </label>
          <select
            id="select"
            onChange={this.handleChange}
            value={this.state.select}
          >
            <option value="1"> Option1 </option>
            <option value="2"> Option2 </option>
          </select>

          <button>Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}
//dispatch an action from the component

const mapDispatchToProps = (dispatch) => {
  return {
    addFormData: (data) => {
      dispatch({ type: "ADD_FORM_DATA", data: data })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchEvents)
