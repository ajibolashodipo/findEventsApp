const initState = {
  location: "",
  category: "",
  date: "",
  price: "",
  select: ""
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_FORM_DATA":
      return {
        ...state,
        ...action.data
      }

    default:
      return state
  }
}

export default rootReducer
