import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

function QuoteForm() {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    // set up a controlled form with internal state
    // look at the form to determine what keys need to go here
    author: [],
    content: []
  });
  function handleChange(event) {
    // Handle Updating Component State
    setFormData({
      ...formData, [event.target.id]: event.target.value
    })
  }


  // const obj = {
  //   key: 1
  // }

  // const standIn = "key"

  // obj[standIn]

  function handleSubmit(event) {
    event.preventDefault()
    // Handle Form Submit event default
    // Create quote object from state
    const quote = {
      id: uuid(),
      author: formData.author,
      content: formData.content,
      votes: 0
    }
    // Pass quote object to action creator
    dispatch(addQuote(quote))
    // dispatch(addquote(quoteObj))
    // Update component state to return to default state
    setFormData({
      author: [],
      content: []
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea onChange={handleChange}
                      className="form-control"
                      name="content"
                      id="content"
                      value={formData.content}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="author"
                      id="author"
                      value={formData.author}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
