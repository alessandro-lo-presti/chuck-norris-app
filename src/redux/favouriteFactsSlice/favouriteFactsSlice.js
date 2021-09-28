// initial state
const initalState = {
  favouriteFactsList: [],
};

// actions
const FAVOURITE_FACT_ADD = "FAVOURITE_FACT_ADD";
const FAVOURITE_FACT_DELETE = "FAVOURITE_FACT_DELETE";
const FAVOURITE_FACTS_LIST_CLEAR = "FAVOURITE_FACTS_LIST_CLEAR";

export const favouriteFactAddAction = (fact) => ({
  type: FAVOURITE_FACT_ADD,
  fact: fact,
});

export const favouriteFactDeleteAction = (fact) => ({
  type: FAVOURITE_FACT_DELETE,
  fact: fact,
});

export const favouriteFactClearAction = () => ({
  type: FAVOURITE_FACTS_LIST_CLEAR,
});

// selectors
export const favouritesFactListSelector = (state) =>
  state.favouriteFactsSlice.favouriteFactsList;

// reducer
export const favouriteFactsReducer = (state = initalState, action) => {
  switch (action.type) {
    case FAVOURITE_FACT_ADD: {
      const newFavouriteFactsList = [...state.favouriteFactsList];

      if (newFavouriteFactsList.includes(action.fact)) {
        return state;
      }
      return {
        ...state,
        favouriteFactsList: [...newFavouriteFactsList, action.fact],
      };
    }
    case FAVOURITE_FACT_DELETE: {
      const newFavouriteFactsList = state.favouriteFactsList.filter(
        (fact) => fact.id !== action.fact.id
      );
      return { ...state, favouriteFactsList: newFavouriteFactsList };
    }
    case FAVOURITE_FACTS_LIST_CLEAR:
      return { ...state, favouriteFactsList: [] };
    default:
      return state;
  }
};
