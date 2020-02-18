import React, { useState } from 'react'

import EditClimbForm from './EditClimbForm'

const EditClimbContainer = (props) => {
  let climbType = props.climbInfo.climb_type
// debugger
  return(
    <EditClimbForm
      climbType={climbType}
      climbInfo={props.climbInfo}
      handleEditSubmit={props.handleEditSubmit}
      handleEditInputChange={props.handleEditInputChange}
    />
  )
}

export default EditClimbContainer
