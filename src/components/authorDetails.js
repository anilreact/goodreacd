import React from 'react';
import PropTypes from "prop-types";
import renderHTML from 'react-render-html';


const AuthorDetails =({profileData})=>{
	var style = {
		backgroundColor:'#EFF0F1',
		marginLeft:'12%'
	};

	var imageStyle= {
		float:'left', 
		marginRight:'15px'

	}
	console.log(profileData);
	return(
		<div className="panel panel-primary">
		  <div className="panel-heading jumbotron"><h3>Author Details:</h3>{profileData.name}</div>
		  <div className="panel-body">
				<div className='author-image col-md-6'>
					{ <img src={profileData.image_url.replace("<![CDATA[", "").replace("]]>", "")}/>
					}
				</div>
				<div className='other-detials'>
						<div>
							<label>Fans & Followers: &nbsp; </label> 
							{profileData.fans_count} at {profileData.author_followers_count}
						</div>
						{ profileData.hometown.trim() !=''?<div><label>Hometown:&nbsp; </label>{profileData.hometown}</div>:''  }
						<div>
							<label>Description: &nbsp; </label> 
							{renderHTML(profileData.about.replace("<![CDATA[", "").replace("]]>", ""))}
						</div>
				</div>		
			</div>
		</div>
);	

}

AuthorDetails.propTypes={
		
		dataDetail: PropTypes.object,

}



export default AuthorDetails;