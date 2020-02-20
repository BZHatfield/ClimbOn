import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ClimbShowPage from './ClimbShowPage'
import { BrowserRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('ClimbShowPage', () => {
  let wrapper
  let climbInfo
  let completeStatus

  beforeEach(() => {
    climbInfo = {
      climb_type: "Bouldering",
      wall_type: "Cave",
      grade: "V5",
      completed: false,
      hold_types: "Sloper, Pinch",
      crux: "Good foot work is the key to this crux",
    }
    completeStatus = "Unfinished"

    wrapper = mount(
      <BrowserRouter>
        <ClimbShowPage
          climbInfo={climbInfo}
          completeStatus={completeStatus}
        />
      </BrowserRouter>
    )
  })

  it ('should render an h1 element containing the climb type and wall type received via props', () => {
    expect(wrapper.find('#top-line').text()).toBe('Bouldering Climb on a Cave Wall')
  })

  it ('should render an h2 element containing the grade received via props', () => {
    expect(wrapper.find('#grade').text()).toBe('Grade: V5')
  })

  it ('should render an h2 element containing the completion status received via props', () => {
    expect(wrapper.find('#complete-status').text()).toBe('Unfinished')
  })

  it ('should render an h2 element containing the hold types received via props', () => {
    expect(wrapper.find('#hold-types').text()).toBe('Hold Types: Sloper, Pinch')
  })

  it ('should render an h3 element containing the crux notes received via props', () => {
    expect(wrapper.find('#crux').text()).toBe('Crux/Notes: Good foot work is the key to this crux')
  })
})
