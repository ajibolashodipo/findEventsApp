import React, { Component } from "react"
import "./SearchEvents.css"
import { connect } from "react-redux"

export class SearchEvents extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <form action="">
          <label htmlFor="place">Location</label>
          <input type="text" id="place" />
          <label htmlFor="category">Category</label>
          <input type="text" id="category" />
          <label htmlFor="date">Date</label>
          <input type="text" id="date" />
          <label htmlFor="price">Price</label>
          <input type="text" id="price" />

          <button>Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
//dispatch an action from the component

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchEvents)
