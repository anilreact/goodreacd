import React from 'react';
import PropTypes from "prop-types";
class Searchbox extends React.Component{
	
	state = {
		searchKeyword: "",
	};
	getSearchKey= e => {
		this.setState({
		  searchKeyword: e.target.value
		});
	};
	
	makeSearch=()=>{
		if(this.state.searchKeyword.trim() !==''){
			this.props.searchBook(this.state.searchKeyword);
		}else{
			this.setState({
				searchKeyword: ''
			});
		}
	}
	
	render(){
		return(
			<div>
				<input type='text' value={this.state.searchKeyword} onChange={this.getSearchKey} disabled={this.props.fetch} className="form-control" required />
				<button className='btn-success custom-s-b' type='button' onClick={this.makeSearch} disabled={this.props.fetch} >Search Book</button>
			</div>
		)
	}	 
}
Searchbox.propTypes = {
	searchBook: PropTypes.func,
	fetch: PropTypes.bool
  };
export default Searchbox;