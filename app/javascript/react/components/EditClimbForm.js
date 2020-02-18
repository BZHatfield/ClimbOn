import React from 'react'
import _ from 'lodash'

const EditClimbForm = (props) => {

  return(
    <div>
      <h1>Update Climb Attempt Form</h1>
      <form onSubmit={props.handleEditSubmit}>
        <label htmlFor="climbType">
          Climb Type:
          <input type="text" name="climbType" id="climbType"  onChange={props.handleEditInputChange} value={props.climbType}/>
        </label>

        <label htmlFor="grade">
          Route Grade:
          <input type="text" name="grade" id="grade" onChange={props.handleEditInputChange} value={props.climbInfo.grade}/>
        </label>

        <label htmlFor="wallType">
          Wall Type:
          <input type="text" name="wallType" id="wallType" onChange={props.handleEditInputChange} value={props.climbInfo.wall_type}/>
        </label>

        <label htmlFor="holdTypes">
          Climbing Hold Types:
          <input type="text" name="holdTypes" id="holdTypes" onChange={props.handleEditInputChange} value={props.climbInfo.hold_types}/>
        </label>

        <label htmlFor="crux">
          Crux / Notes:
          <textarea name="crux" id="crux" onChange={props.handleEditInputChange} value={props.climbInfo.crux}/>
        </label>

        <label htmlFor="completed">
          Completed? (true or false)
          <input type="text" name="completed" id="completed" onChange={props.handleEditInputChange} value={props.climbInfo.completed}/>
        </label>

        <input className="form-input" type="submit" id="edit-submit" value="Update Climb"/>
      </form>
    </div>
  )
}

export default EditClimbForm
