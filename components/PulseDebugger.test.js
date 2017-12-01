import React from 'react'
import PulseDebugger from './PulseDebugger'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'


describe(`PulseDebugger`, () => {
  const mockFnOn = jest.fn()
  const props = {
    navigation: jest.fn(),
    socketLib: jest.fn(() => ({
      on: mockFnOn
    })),
  }

  const wrapper = shallow(<PulseDebugger {...props} />)

  it(`should render without crashing`, () => {
    expect(wrapper).toBeTruthy()
  })

  it(`should render event list`, () => {
    expect(wrapper.find('#event-list')).toHaveLength(1)
  })
})
