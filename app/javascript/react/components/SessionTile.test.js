import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

import SessionTile from './SessionTile'

describe('SessionTile', () => {
  let wrapper
  let sessionData

  beforeEach(() => {
    sessionData = {
      gym: 'Test Gym',
      created_at: '2020-02-11 20:25:25.633243',
      elapsed_time: '45'
    }

    let date = (new Date(sessionData.created_at)).toDateString()

    wrapper = mount(
      <BrowserRouter>
        <SessionTile
          sessionData={sessionData}
          date={date}
        />
      </BrowserRouter>
    )
  })

  it ('should render an h2 element containing the gym name received via props', () => {
    expect(wrapper.find('#gym').text()).toBe('Test Gym')
  })

  it ('should render an h2 element containing the date  received via props', () => {
    expect(wrapper.find('#date').text()).toBe('Tue Feb 11 2020')
  })

  it ('should render an h3 element containing the time  received via props', () => {
    expect(wrapper.find('#time').text()).toBe('45 minutes')
  })
})
