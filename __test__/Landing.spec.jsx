import React from 'react';
import Landing from '../client/components/Landing';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

test('this tests landing to match snapshot', () => {
  const tree = shallow(<Landing />);
  expect(toJson(tree)).toMatchSnapshot()
})

