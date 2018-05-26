import React from 'react';

class Square extends React.Component{
    
    render(){
        return(
            <button 
                className="square" 
                onClick={()=>this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square;
/*its no more needed, its converted into function*/