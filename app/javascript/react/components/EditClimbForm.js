import React from 'react'
import _ from 'lodash'

const EditClimbForm = (props) => {

  return(
    <div>
      <h1>Update Climb Attempt Form</h1>
      <form onSubmit={props.handleEditSubmit}>
        <label htmlFor="climb_type">
          Climb Type:
          <input type="text" name="climb_type" id="climb_type"  onChange={props.handleEditInputChange} value={props.climbInfo.climb_type}/>
        </label>

        <label htmlFor="grade">
          Route Grade:
          <input type="text" name="grade" id="grade" onChange={props.handleEditInputChange} value={props.climbInfo.grade}/>
        </label>

        <label htmlFor="wall_type">
          Wall Type:
          <input type="text" name="wall_type" id="wall_type" onChange={props.handleEditInputChange} value={props.climbInfo.wall_type}/>
        </label>

        <label htmlFor="hold_types">
          Climbing Hold Types:
          <input type="text" name="hold_types" id="hold_types" onChange={props.handleEditInputChange} value={props.climbInfo.hold_types}/>
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
