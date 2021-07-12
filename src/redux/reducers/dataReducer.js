const initialState = {
  users: [],
  currentUser: null,
 
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "SELECT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    
    default:
      return state;
  }
};

export default dataReducer;
