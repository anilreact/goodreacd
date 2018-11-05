import React from "react";
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

export default Datadisplay;
