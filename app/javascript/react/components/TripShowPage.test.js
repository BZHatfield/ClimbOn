import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TripShowPage from './TripShowPage'
import { BrowserRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('TripShowPage', () => {
  let wrapper
  let tripInfo

  beforeEach(() => {
    tripInfo = {
      location: 'Test Gym',
      created_at: '2020-02-11 20:25:25.633243',
      elapsed_time: '45',
      notes: 'These are test notes'
    }

    let date = (new Date(tripInfo.created_at)).toDateString()
    let elapsedTime = tripInfo.elapsed_time

    wrapper = mount(
      <BrowserRouter>
        <TripShowPage
          tripInfo={tripInfo}
          date={date}
          elapsedTime={elapsedTime}
        />
      </BrowserRouter>
    )
  })

  it ('should render an h1 element containing the gym name and session date received via props', () => {
    expect(wrapper.find('#top-line').text()).toBe('Session at Test Gym on Tue Feb 11 2020')
  })

  it ('should render an h2 element containing the elapsed time received via props', () => {
    expect(wrapper.find('#time').text()).toBe('45 minutes')
  })

  it ('should render a p element containing the notes received via props', () => {
    expect(wrapper.find('#notes').text()).toBe('These are test notes')
  })
})
