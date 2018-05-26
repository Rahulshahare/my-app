import React from 'react';
import Square from './square';

class Board extends React.Component{
    render(){
        return(
            <div className="board">
                <div className="1">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className="2">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className="3">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>

            </div>
        );
    }
}

export default Board;