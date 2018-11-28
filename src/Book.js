import React from "react";
import Searchbox from './components/Searchbox'
import Datadisplay from './components/Datadisplay'
import Bookdetails from './components/Bookdetails'
import Loading from './components/loading'
import Api from './utility/api.js';
import xml2json from './utility/xml2json.js';
import bookSearchApi,{bookDetailsApi} from './config/config';
import './index.css';
class App extends React.Component {
  
  constructor(props){
	  super(props)
	  this.state = {
			searchData:[], /* search data*/
			error : '',
			fetchingData:false,
			bookDetails:null,
			message:''
		};
  }
  
  componentDidCatch(error, info) {
    this.setState({ hasError: true,error:info});
  }
  searchBook =(keyWord)=>{
		this.setState({fetchingData:true});
		let currentComponent 		= this
		let ApiSearch 				= new Api(bookSearchApi);
		let searchResult 			= ApiSearch.searchData(keyWord);

		
		searchResult.then(

			function result(result){
				const	xml2jsonob 		=	new xml2json();
				const jsonData			= xml2jsonob.readXmlData(result.data);
				currentComponent.setState({ searchData:jsonData});
				currentComponent.setState({ bookDetails:null});
				currentComponent.setState({fetchingData:false});
				currentComponent.setState({message:jsonData.length+' Records found'});
			},
			function error(error){
				currentComponent.setState({
					error: error.toString(),
					fetchingData:false
				});
			}

	);

  }
 
  bookDetails=(e)=>{
			let currentComponent = this
			let bookdetailsApi = new Api(bookDetailsApi);
			const bookId = e.target.getAttribute('data-id');
			let bookdata = bookdetailsApi.bookDetail(bookId);
			//remove from other
			
			if( document.querySelector ('ul.list-group li.active')){
				document.querySelector ('ul.list-group li.active').classList.remove('active');
			}
			//add acive class
			e.target.className +=' active';
			this.setState({fetchingData:true});
			bookdata.then(

					function result(result){
						
						const xml2jsonob 		=	new xml2json();
						const xmlDom			= xml2jsonob.Xmlparser(result.data);
						const jsonData			= xml2jsonob.xmltoJson(xmlDom);
						currentComponent.setState({ bookDetails:jsonData});
						currentComponent.setState({fetchingData:false});
					},
					function error(error){

						currentComponent.setState({
							error: error.toString(),
							fetchingData:false
						});
					}

			);
	
  }
  render() {
    return (
		 <div className='container'>
			<div className="header">
				<h1>Search book</h1>
			</div>
			<div className="container">
			<Searchbox searchBook = {this.searchBook} fetch={this.state.fetchingData} />
			{this.state.fetchingData ? <Loading /> : null}
			<Datadisplay data={this.state.searchData} bookDetails={this.bookDetails}  message={this.state.message} />
			{this.state.bookDetails && <Bookdetails bookDetail={this.state.bookDetails}  />}
			</div>
			
		 </div>	  
    );
  }
}

export default App;
