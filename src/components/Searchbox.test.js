import React from 'react';
import Searchbox from './Searchbox';

import enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });



describe("<Searchbox/>",()=>{
  it('renders search box without crashing', () => {

      const wrapper = shallow(<Searchbox/>);
      expect(wrapper.find('input').length).toEqual(1);

  });

  it('renders search button without crashing', () => {

    const wrapper = shallow(<Searchbox/>);
    expect(wrapper.find('button').length).toEqual(1);

  });

});