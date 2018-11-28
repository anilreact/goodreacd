import React from "react";
import Api from './utility/api.js';
import xml2json from './utility/xml2json.js';
import Loading from './components/loading'
import AuthorDetails from './components/authorDetails'
import bookSearchApi,{authorDetailsApi} from './config/config';

class Author extends React.Component {
  
  constructor(props){
	  super(props)
	   this.state = {
			error : '',
			fetchingData:true,
			authorData:null,
		};
  }
	componentDidMount() {
		let currentComponent 		= this;
		let ApiSearch 				= new Api(authorDetailsApi);
		let searchResult 			= ApiSearch.authorDetails(this.props.match.params.id);
		//let searchResult 			= ApiSearch.authorDetails('1077326.J_K_Rowling');
		
		searchResult.then(

			function result(result){
						
				const xml2jsonob 		=	new xml2json();
				const xmlDom			= xml2jsonob.Xmlparser(result.data);
				const jsonData			= xml2jsonob.xmltoJson(xmlDom);
				currentComponent.setState({ authorData:jsonData});
				currentComponent.setState({fetchingData:false});
			},
			function error(error){

				currentComponent.setState({
					error: error.toString(),
				});
			}
		);	

	}
	
  render() {
	  if(this.state.authorData !=null){
			//console.log(this.state.authorData.GoodreadsResponse.author)
	  }
	return (
			<div>
				{ this.state.fetchingData === true ? <Loading /> :<AuthorDetails profileData={this.state.authorData.GoodreadsResponse.author} /> }
			</div>
    );
  }
}

export default Author;
