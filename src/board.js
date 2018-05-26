import React from 'react';
import Square from './square';

class Board extends React.Component{
    render(){
        return(
            <div className="board">
                <div className="1">
                    <Square value={1} />
                    <Square value={2} />
                    <Square value={3} />
                </div>
                <div className="2">
                    <Square value={4} />
                    <Square value={5} />
                    <Square value={6} />
                </div>
                <div className="3">
                    <Square value={7} />
                    <Square value={8} />
                    <Square value={9} />
                </div>

            </div>
        );
    }
}

export default Board;