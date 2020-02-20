import React from 'react'
import _ from 'lodash'

const EditClimbForm = (props) => {

  return(
    <div className="log-in">
      <div className="tile grid-container">
        <h1>New Climb Attempt Form</h1>
        <form onSubmit={props.handleSubmit}>

          <label htmlFor="climb_type">
            Climb Type:
            <select className="type" name="climb_type" id="climb_type" onChange={props.handleInputChange} value={props.climbInfo.climb_type}>
              <option value=""></option>
              <option value="Bouldering">Bouldering</option>
              <option value="Top Rope">Top Rope</option>
              <option value="Lead">Lead</option>
            </select>
          </label>

          <label htmlFor="grade">
            Route Grade:
            <select type="text" name="grade" id="grade" onChange={props.handleInputChange} value={props.climbInfo.grade}>
              <option value={props.grades[0]}>{props.grades[0]}</option>
              <option value={props.grades[1]}>{props.grades[1]}</option>
              <option value={props.grades[2]}>{props.grades[2]}</option>
              <option value={props.grades[3]}>{props.grades[3]}</option>
              <option value={props.grades[4]}>{props.grades[4]}</option>
              <option value={props.grades[5]}>{props.grades[5]}</option>
              <option value={props.grades[6]}>{props.grades[6]}</option>
              <option value={props.grades[7]}>{props.grades[7]}</option>
              <option value={props.grades[8]}>{props.grades[8]}</option>
              <option value={props.grades[9]}>{props.grades[9]}</option>
              <option value={props.grades[10]}>{props.grades[10]}</option>
              <option value={props.grades[11]}>{props.grades[11]}</option>
              <option value={props.grades[12]}>{props.grades[12]}</option>
              <option value={props.grades[13]}>{props.grades[13]}</option>
              <option value={props.grades[14]}>{props.grades[14]}</option>
              <option value={props.grades[15]}>{props.grades[15]}</option>
            </select>
          </label>

          <label htmlFor="wallType">
            Wall Type:
            <select type="text" name="wallType" id="wallType" onChange={props.handleInputChange} value={props.climbInfo.wallType}>
              <option value=""></option>
              <option value="Slab">Slab</option>
              <option value="Vertical">Vertical</option>
              <option value="Overhang">Overhang</option>
            </select>
          </label>

          <fieldset htmlFor="holdTypes" value={props.checkboxes}>
            <legend>Climbing Hold Types:</legend>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={props.handleCheckboxChange} value="Jug"/><label>Jug</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={props.handleCheckboxChange} value="Ledge"/><label>Ledge</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={props.handleCheckboxChange} value="Crimp"/><label>Crimp</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={props.handleCheckboxChange} value="Pinch"/><label>Pinch</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={props.handleCheckboxChange} value="Sloper"/><label>Sloper</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={props.handleCheckboxChange} value="Pocket"/><label>Pocket</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={props.handleCheckboxChange} value="Undercling"/><label>Undercling</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={props.handleCheckboxChange} value="Flake"/><label>Flake</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={props.handleCheckboxChange} value="Horn"/><label>Horn</label>
          </fieldset>

          <label htmlFor="crux">
            Crux / Notes:
            <textarea name="crux" id="crux" onChange={props.handleInputChange} value={props.climbInfo.crux}/>
          </label>

          <fieldset htmlFor="completed" value={props.climbInfo.completed}>
            <legend>Completed?</legend>
            <input type="radio" name="completed" id="completed" onChange={props.handleInputChange} value="true"/><label htmlFor="completed">True</label>
            <input type="radio" name="completed" id="completed" onChange={props.handleInputChange} value="false"/><label htmlFor="completed">False</label>
          </fieldset>

          <input className="form-input" type="submit" id="submit"/>
          <br/>
          <input className="form-input" type="button" onClick={props.clearForm} value="Clear" />
        </form>
      </div>
    </div>
  )
}

export default EditClimbForm

// import React from 'react'
// import _ from 'lodash'
//
// const EditClimbForm = (props) => {
//
//   return(
//     <div className="tile">
//       <h1>Update Climb Attempt Form</h1>
//       <form onSubmit={props.handleEditSubmit}>
//         <label htmlFor="climb_type">
//           Climb Type:
//           <input type="text" name="climb_type" id="climb_type"  onChange={props.handleEditInputChange} value={props.climbInfo.climb_type}/>
//         </label>
//
//         <label htmlFor="grade">
//           Route Grade:
//           <input type="text" name="grade" id="grade" onChange={props.handleEditInputChange} value={props.climbInfo.grade}/>
//         </label>
//
//         <label htmlFor="wall_type">
//           Wall Type:
//           <input type="text" name="wall_type" id="wall_type" onChange={props.handleEditInputChange} value={props.climbInfo.wall_type}/>
//         </label>
//
//         <label htmlFor="hold_types">
//           Climbing Hold Types:
//           <input type="text" name="hold_types" id="hold_types" onChange={props.handleEditInputChange} value={props.climbInfo.hold_types}/>
//         </label>
//
//         <label htmlFor="crux">
//           Crux / Notes:
//           <textarea name="crux" id="crux" onChange={props.handleEditInputChange} value={props.climbInfo.crux}/>
//         </label>
//
//         <label htmlFor="completed">
//           Completed? (true or false)
//           <input type="text" name="completed" id="completed" onChange={props.handleEditInputChange} value={props.climbInfo.completed}/>
//         </label>
//
//         <input className="form-input" type="submit" id="edit-submit" value="Update Climb"/>
//       </form>
//     </div>
//   )
// }
//
// export default EditClimbForm
