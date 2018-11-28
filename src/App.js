import React from "react";
import { HashRouter , Switch, Route } from 'react-router-dom';
import Book from './Book'
import Author from './Author'
import './index.css';
class App extends React.Component {
  
  render() {
    return (
		<HashRouter >
			  <Switch>
					
				<Route exact path='/' component={Book} />
				<Route path='/author/:id' component={Author} />
					
			</Switch>
		</HashRouter >
    );
  }
}

export default App;
