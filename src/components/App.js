import React, { Component } from 'react';
import '../styles/App.css';

// import route Components here
import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';
import Home from './HomeComponent';



import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/hello">Hello</Link></li>
              <li><Link to="/hello/goodmorning">Hello morning</Link></li>
                
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Books</Link></li>

              <li><Link to="/gloria">Glog</Link></li>
              
              
            </ul>

            <hr/>
            {/* Routes will go here */}
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/hello/goodmorning" render={() => { return      <h1>Goodmorning</h1> }} />
            
            <Route path="/about" component={About} />
            <Route path="/books" component={Books} />

            <Route path="/gloria" render={()=> {
              return <div>rendering component inline</div>
            }} />
            
          </Switch>

            
            
            
            
          </div>
        </div>
      </Router>
    );
  }
}
export default App;