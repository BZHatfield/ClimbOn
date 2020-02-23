import React from 'react'

const EditTripForm = (props) => {

  return(
    <div className="tile grid-container">
    <h1>New Session Form</h1>
      <div className="small-4 small-centered columns">
        <form className="climb-form" onSubmit={props.handleEditSubmit}>
          <label htmlFor="location">
            Location:
            <input className="chat-field" type="text" name="location" id="location" onChange={props.handleEditInputChange} value={props.tripInfo.location}/>
          </label>

          <label htmlFor="elapsed_time">
            Elapsed Time:
            <input type="number" name="elapsed_time" id="elapsed_time" onChange={props.handleEditInputChange} value={props.tripInfo.elapsed_time}/>
          </label>

          <label htmlFor="notes">
            Notes:
            <textarea name="notes" id="notes" onChange={props.handleEditInputChange} value={props.tripInfo.notes}/>
          </label>

          <input className="form-input" type="submit" id="submit"/>
        </form>
      </div>
    </div>
  )
}

export default EditTripForm
