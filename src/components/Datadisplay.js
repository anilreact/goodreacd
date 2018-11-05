import React from "react";
import PropTypes from "prop-types";
const Datadisplay = (props)=>{
	
	return(
			<div> { props.message}	
				<div className="col-sm-4 custom-style">
				<ul>
					{
						props.data.map((result,index) =>
							<li key={result.id} > 
								<a href="#" onClick={ props.bookDetails.bind(this,result.best_book.id) }>{result.best_book.title}</a>
							</li>
						)
					}
				</ul>
				</div>			
			</div>	
		);	
} 
Datadisplay.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	  ]),
	bookDetails: PropTypes.func,
	message:PropTypes.string
  };
export default Datadisplay;
