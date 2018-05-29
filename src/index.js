import React from 'react';
import ReactDOM from 'react-dom';
import './statecms/bootstrap.min.css';
import State from './statecms/state';
//import Button from './button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/state">States</Link>
          </li>
          
        </ul>
  
        <hr />
  
        <Route exact path="/" component={Home} />
        <Route path="/state" component={stateCms} />
       
      </div>
    </Router>
  );

  const Home = () => (
    <div>
      <h2>Welcome to Development</h2>
    </div>
  );

class stateCms extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-9"> {<State/>}</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<BasicExample/>,document.getElementById('root'));



