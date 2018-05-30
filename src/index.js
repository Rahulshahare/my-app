import React from 'react';
import ReactDOM from 'react-dom';
import './statecms/bootstrap.min.css';
import State from './statecms/state';
//import Button from './button';


class StateCms extends React.Component{
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

ReactDOM.render(<StateCms/>,document.getElementById('root'));



