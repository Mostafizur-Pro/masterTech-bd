import { ADD_TO_BUILDER } from "../actions/builderActions";

const initialState = {
  builder: [], // Your initial state for the builder array
};

const builderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BUILDER:
      return {
        ...state,
        builder: [...state.builder, action.payload],
      };
    default:
      return state;
  }
};

export default builderReducer;
