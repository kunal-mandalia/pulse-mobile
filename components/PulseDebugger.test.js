import React from 'react'
import PulseDebugger from './PulseDebugger'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'


describe(`PulseDebugger`, () => {
  it(`should render without crashing`, () => {
    const wrapper = shallow(<PulseDebugger />)
    expect(wrapper).toBeTruthy()
  })
})
