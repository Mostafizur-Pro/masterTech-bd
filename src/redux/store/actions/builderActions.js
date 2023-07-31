// Action Types
export const ADD_TO_BUILDER = "ADD_TO_BUILDER";

// Action Creator
export const addToBuilder = (productData) => {
  return {
    type: ADD_TO_BUILDER,
    payload: productData,
  };
};
