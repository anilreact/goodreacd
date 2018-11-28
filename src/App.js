import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Book from './Book'
import Author from './Author'
import './index.css';
class App extends React.Component {
  
  render() {
    return (
		
		 <BrowserRouter basename={process.env.PUBLIC_URL}>
				<div>
					<Route exact path={`/`} component={Book} />
					<Route path={'/author/:id'} component={Author} />
				</div>
      </BrowserRouter>	
    );
  }
}

export default App;
