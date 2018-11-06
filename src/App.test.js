import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Api from './utility/api';
import enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import bookSearchApi,{bookDetailsApi} from './config/config';
enzyme.configure({ adapter: new Adapter() });

describe('<App/>',()=>{

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('API Search data should load', () => {
      //console.log(bookSearchApi);
      let goodApi = new Api(bookSearchApi);
      return goodApi.searchData('india')
      .then(result => {
        expect(result.data).toBeDefined()
      }).catch(function(error) {
        console.log(error);
      });
    })

    it('API Book data should load', () => {
      //console.log(bookSearchApi);
      let goodApi = new Api(bookDetailsApi);
      return goodApi.bookDetail('41139574')
      .then(result => {
        expect(result.data).toBeDefined()
      }).catch(function(error) {
        console.log(error);
      });
    })
});