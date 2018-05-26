import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingList from './shoppinglist';

class Shopping extends React.Component{
    render(){
        return(
            <div className="shopping-list">
               <ShoppingList name="Hello"/>
               <ShoppingList name="Hello"/>
            </div>
        );
    }
}

ReactDOM.render(<Shopping/>,document.getElementById('root'));