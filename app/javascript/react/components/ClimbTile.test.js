import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ClimbTile from './ClimbTile'
import { BrowserRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('ClimbTile', () => {
  let wrapper
  let climbData
  let climbStatus

  beforeEach(() => {
    climbData = {
      climbType: "Bouldering",
      grade: "V5",
      wallType: "Cave",
      completed: false
    }

    if (climbData.completed) {
      climbStatus = "Completed"
    } else {
      climbStatus = "Unfinished"
    }

    wrapper = mount(
      <BrowserRouter>
        <ClimbTile
          climbData={climbData}
          climbStatus={climbStatus}
        />
      </BrowserRouter>
    )
  })

  it ('should render an h2 element containing the climb type received via props', () => {
    expect(wrapper.find('#climb-type').text()).toBe('Bouldering')
  })

  it ('should render an h2 element containing the climb grade received via props', () => {
    expect(wrapper.find('#grade').text()).toBe('V5')
  })

  it ('should render an h2 element containing the wall type received via props', () => {
    expect(wrapper.find('#wall-type').text()).toBe('Cave')
  })

  it ('should render an h2 element containing the the status of completion received via props', () => {
    expect(wrapper.find('#completed').text()).toBe('Unfinished')
  })

})
