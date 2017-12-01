import React from 'react'
import CoreLayout from './CoreLayout'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'


describe(`CoreLayout`, () => {
  const props = {
    title: `About`,
    toggleMenu: jest.fn()
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<CoreLayout {...props} />)
    expect(wrapper).toBeTruthy()
  })

  it(`should render title`, () => {
    const wrapper = shallow(<CoreLayout {...props} />)
    expect(wrapper.find('.title')).toHaveLength(1)
    expect(wrapper.find('.title').children().text()).toContain(props.title)
  })

  it(`should call toggleMenu on menu click`, () => {
    const wrapper = shallow(<CoreLayout {...props} />)
    wrapper.find('.toggle-menu').simulate('press')
    expect(props.toggleMenu).toBeCalled()
  })
})
