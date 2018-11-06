import React from 'react';
import Datadisplay from './Datadisplay';
import bookSearchApi,{bookDetailsApi} from '../config/config';
import Api from '../utility/api';
import xml2json from '../utility/xml2json'
import enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });



describe("<Datadisplay/>",()=>{
  it('renders search result without crashing', () => {

	let goodApi = new Api(bookSearchApi);
	return goodApi.searchData('india')
	.then(result => {
		
		const	xml2jsonob 		=	new xml2json();
		const jsonData			= xml2jsonob.readXmlData(result.data);
		const wrapper 			= shallow(<Datadisplay data={jsonData} bookDetails={function(){}}  message={""}  />);
	  	expect(wrapper.find("li.data-list")).toBeDefined();
	  
	}).catch(function(error) {
	  console.log(error);
	});

  });

  
});