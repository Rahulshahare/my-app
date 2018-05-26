import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingList extends React.Component{
    render(){
        return(
            <div className="shopping-list">
                <h1>Shopping list for</h1>
                <ul>
                    <li>instagram</li>
                    <li>whatsaap</li>
                    <li>tinder</li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<ShoppingList/>,document.getElementById('root'));