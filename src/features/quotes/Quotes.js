import React from "react";
import QuoteCard from "./QuoteCard";
import { useSelector } from "react-redux";
import { removeQuote } from "./quotesSlice"
import { useDispatch } from "react-redux"

function Quotes() {

  const dispatch = useDispatch()

  const quotes =  useSelector((state) => state.quotes)

  const quotesToRender = quotes.map((quote) => {
    return <QuoteCard key={quote} quote={quote} deleteQuote={deleteQuote}/>
  })

  function deleteQuote(quote) {
    dispatch(removeQuote(quote.id))
  }

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/*
              TODO:

              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */
              quotesToRender
              }

          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
