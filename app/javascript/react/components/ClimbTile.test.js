import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ClimbTile from './ClimbTile'
import { BrowserRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('ClimbTile', () => {
  let wrapper
  let climbStatus

  beforeEach(() => {
    let climbType = "Bouldering"
    let grade = "V5"
    let wallType = "Cave"
    let completed = false

    if (completed) {
      climbStatus = "Completed"
    } else {
      climbStatus = "Unfinished"
    }

    wrapper = mount(
      <BrowserRouter>
        <ClimbTile
          climbType={climbType}
          grade={grade}
          wallType={wallType}
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
