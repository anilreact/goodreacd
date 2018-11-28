import React from 'react';
import PropTypes from "prop-types";
import StarRatingComponent from 'react-star-rating-component';
const Bookdetails =({bookDetail})=>{
	var style = {
		fontWeight:'bold',
	};

	var imageStyle= {
		float:'left', 
		marginRight:'15px'

	}
	
const bookData = bookDetail.GoodreadsResponse.book
console.log(bookData.authors.author.id);
//var Author_link = '';
const Author_link = 'author/'+bookData.authors.author.id+'.'+bookData.authors.author.name.replace(/ /g, '_');
return(
		<div className='book-details col-sm-8 custom-style'>
			<div style={imageStyle}><img src={bookData.image_url.replace("<![CDATA[", "").replace("]]>", "")}/></div>
			<div>
					<div><label style={style}>Title:</label> {bookData.title.replace("<![CDATA[", "").replace("]]>", "")}</div>
					<div><label style={style}>Descript:</label> {bookData.description.replace("<![CDATA[", "").replace("]]>", "").replace(/<\/?[^>]+(>|$)/g, "")}</div>
					<div><label style={style}>Rarting:</label> { <StarRatingComponent 
																	name="Rarting" 
																	starCount={10}
																	value={parseFloat(bookData.average_rating)}
																	
																	/>
																}
													</div>
					<div><label style={style}>Review Rating:</label> {bookData.ratings_count.replace("<![CDATA[", "").replace("]]>", "").replace(/<\/?[^>]+(>|$)/g, "")}</div>
					<div><label style={style}>Review:</label> {bookData.text_reviews_count.replace("<![CDATA[", "").replace("]]>", "").replace(/<\/?[^>]+(>|$)/g, "")}</div>
					<div className='authorName'>
						
						<label style={style}>Author:</label> <a title="Click to view Author details" href={Author_link} target='_blank'>{bookData.authors.author.name.replace("<![CDATA[", "").replace("]]>", "")}</a>
					
					</div>
			</div>
		</div>
);	

}

Bookdetails.propTypes={
		
		bookDetail:PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.object
		  ])

	}



export default Bookdetails;