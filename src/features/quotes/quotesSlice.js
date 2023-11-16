// Action Creators
// TODO: Create action creators as defined in tests
export function addQuote(quote) {
  return {
    type: "quotes/add",
    payload: quote
  }
}

export function removeQuote(quote) {
  return {
    type: "quotes/remove",
    payload: quote
  }
}

export function upvoteQuote(quoteId) {
  return {
    type: "quotes/upvote",
    payload: quoteId
  }
}

export function downvoteQuote(quoteId) {
  return {
    type: "quotes/downvote",
    payload: quoteId
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {

  switch(action.type) {
    case "quotes/add":
      return [...state, action.payload]
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload)
    case "quotes/upvote":
      const quoteToUpVote = state.find((quote) => quote.id === action.payload)
      return [{...quoteToUpVote, votes: quoteToUpVote.votes + 1}]
    case "quotes/downvote":
      const quoteToDownVote = state.find((quote) => quote.id === action.payload)
      if (quoteToDownVote.votes === 0) {
        return [quoteToDownVote]
      } else {
        return [{...quoteToDownVote, votes: quoteToDownVote.votes - 1}]
      }
    default:
      return state
  }
}
