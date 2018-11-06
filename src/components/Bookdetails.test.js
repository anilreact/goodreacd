import React from 'react';
import Bookdetails from './Bookdetails';
import bookSearchApi,{bookDetailsApi} from '../config/config';
import Api from '../utility/api';
import xml2json from '../utility/xml2json'
import enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });



describe("<Bookdetails/>",()=>{
  it('Renders book details without crashing', () => {

	let goodApi = new Api(bookDetailsApi);
	return goodApi.bookDetail('41139574')
	.then(result => {
		
		const xml2jsonob 		= new xml2json();
		const xmlDom			= xml2jsonob.Xmlparser(result.data);
		const jsonData			= xml2jsonob.xmltoJson(xmlDom);
		const wrapper 			= shallow(<Bookdetails bookDetail={jsonData} />);
	  	expect(wrapper.find("div.authorName")).toBeDefined();
	  
	}).catch(function(error) {
	  console.log(error);
	});

  });

  
});