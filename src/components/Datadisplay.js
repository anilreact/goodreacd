import React from "react";
import PropTypes from "prop-types";
const Datadisplay = (props)=>{
	
	return(
			<div> { props.message}	
				<div className="col-sm-4 custom-style" onClick={ props.bookDetails.bind(this)}>
				<ul className='list-group'>
					{
						props.data.map((result,index) =>
							<li key={result.best_book.id} data-id={result.best_book.id} className='list-group-item'> 
								{result.best_book.title}
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
