import React from 'react'

const NewTripForm = (props) => {

  return(
    <div>
      <h1>New Session Form</h1>
      <form >
        <label htmlFor="location">
          Location:
          <input type="text" name="location" id="location"/>
        </label>

        <label htmlFor="elapsedTime">
          Elapsed Time:
          <input type="text" name="elapsedTime" id="elapsedTime"/>
        </label>

        <label htmlFor="notes">
          Notes:
          <textarea name="notes" id="notes"/>
        </label>

        <input className="form-input" type="submit" id="submit"/>
      </form>
    </div>
  )
}

export default NewTripForm
