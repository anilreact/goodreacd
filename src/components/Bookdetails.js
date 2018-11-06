import React from 'react';
import PropTypes from "prop-types";

const Bookdetails =({bookDetail})=>{
	var style = {
		fontWeight:'bold',
	};

const bookData = bookDetail.GoodreadsResponse.book
//console.log(bookData.authors.name);
return(
		<div className='book-details col-sm-8 custom-style'>
			<div><label style={style}>Title:</label> {bookData.title.replace("<![CDATA[", "").replace("]]>", "")}</div>
			<div><label style={style}>Descript:</label> {bookData.description.replace("<![CDATA[", "").replace("]]>", "").replace(/<\/?[^>]+(>|$)/g, "")}</div>
			<div><label style={style}>Rarting:</label> {bookData.average_rating.replace("<![CDATA[", "").replace("]]>", "")}</div>
			<div className='authorName'><label style={style}>author:</label> {bookData.authors.author.name.replace("<![CDATA[", "").replace("]]>", "")}</div>
			<div><img src={bookData.image_url.replace("<![CDATA[", "").replace("]]>", "")}/></div>
		</div>
);	

}

Bookdetails.prototype={
		
		bookDetail:PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.object
		  ])

	}



export default Bookdetails;