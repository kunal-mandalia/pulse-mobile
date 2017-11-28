import React from 'react'
import App from './App'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'


describe(`App`, () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeTruthy()
  })
})
