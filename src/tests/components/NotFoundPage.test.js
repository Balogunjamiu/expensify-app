import React from 'react'
import {shallow} from 'enzyme'
import NotFoundPage from '../../components/NotfoundPage'

test('should test if NotfoundPage renders correctly', ()=>{
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})