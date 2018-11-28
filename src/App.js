import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Book from './Book'
import Author from './Author'
import './index.css';
class App extends React.Component {
  
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
