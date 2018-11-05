import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//button test

import {shallow} from 'enzyme';
import Searchbox from './components/Searchbox'

test('Searchbox click test', () => {
  // Render a checkbox with label in the document
  const button = shallow(<Searchbox />);

  expect(button.find('button').text()).toEqual('Search Book');
});
