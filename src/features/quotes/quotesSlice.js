// Action Creators
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote
  };
};

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id
  };
};

export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id
  };
};

export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id
  };
};

export default function quotesReducer(state = initialState, action) {
  switch(action.type){
    case "quotes/add":
      return [ ...state, action.payload ];
    
    case "quotes/remove":
      return state.filter( (quote) => quote.id !== action.payload )
    
    case "quotes/upvote":
      let quotes = [...state]
      let upvoteQuote = quotes.find((quote) => quote.id === action.payload)
      upvoteQuote.votes = upvoteQuote.votes + 1
      return [upvoteQuote];

    case "quotes/downvote":
      let downvoteState = [...state]
      let downvoteQuote = downvoteState.find((quote) => quote.id === action.payload)
        if (downvoteQuote.votes <= 0){
          return state;
        } else {
          downvoteQuote.votes = downvoteQuote.votes - 1
          return [downvoteQuote];
        }

      default:  
      return state;
  };
};
