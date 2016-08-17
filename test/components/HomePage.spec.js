// Test runner
import test from 'ava';
// React
import React from 'react';
// React wrapper
import { shallow } from 'enzyme';
// HomePage component
import HomePage from '../../src/components/HomePage';

// Test that HomePage contains a single div
test('has only one div', t => {
  const wrapper = shallow(<HomePage />);
  t.is(wrapper.find('div').length, 1);
});

// Test that HomePage renders the div tag correctly
test('renders div correctly', t => {
  const wrapper = shallow(<HomePage />);
  t.is(wrapper.find('div').text(),
      'Starter boilerplate for creating apps with React');
});

// Test that HomePage component is not empty
test('is not empty', t => {
  const wrapper = shallow(<HomePage />);
  t.true(!wrapper.isEmpty());
});
