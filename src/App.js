import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Book from './Book'
import Author from './Author'
import './index.css';
class App extends React.Component {
  
  constructor(props){
	  super(props)
	  
  }
  
  
  render() {
    return (
		
		 <Router>
				<div>
					<Route exact path="/" component={Book} />
					<Route path="/author/:id" component={Author} />
				</div>
      </Router>	
    );
  }
}

export default App;
