// Test runner
import test from 'ava';
// React
import React from 'react';
// React wrapper
import { shallow } from 'enzyme';
// App component
import App from '../../src/components/App';
// HomePage component
import HomePage from '../../src/components/HomePage';

// Test that App contains a single div
test('has only one h1', t => {
  const wrapper = shallow(<App />);
  t.is(wrapper.find('h1').length, 1);
});

// Test that App renders the h1 tag correctly
test('renders h1 correctly', t => {
  const wrapper = shallow(<App />);
  t.is(wrapper.find('h1').text(), 'React Boilerplate');
});

// Test that App component is not empty
test('is not empty', t => {
  const wrapper = shallow(<App />);
  t.true(!wrapper.isEmpty());
});

// Test that App renders HomePage child component
test('renders children', t => {
  const wrapper = shallow(<App><HomePage /></App>);
  t.true(wrapper.contains(<HomePage />));
});
