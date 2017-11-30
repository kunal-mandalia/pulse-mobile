import React from 'react'
import About from './About'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'


describe(`About`, () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<About />)
    expect(wrapper).toBeTruthy()
  })

  it(`should contain how and why sections`, () => {
    const wrapper = shallow(<About />)
    expect(wrapper.find('.why')).toHaveLength(1)
    expect(wrapper.find('.how')).toHaveLength(1)
  })
})
