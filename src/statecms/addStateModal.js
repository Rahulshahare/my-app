import React from 'react';
import Button from '../button';

class AddStateModel extends React.Component{
    close= ()=>{
        this.props.AddModelShowing();
    }
    render(){
        if(!this.props.ShowModel){
            return false;
        }

        return(
            <div className="modal show">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" onClick={this.close} className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Add New State</h4>
                    </div>
                    <div className="modal-body">
                        <p>One fine body&hellip;</p>
                    </div>
                    <div className="modal-footer">
                    <Button name={"Close"} clickEvent={this.close}  type={"default"} size={"extrasmall"}/>
                    <Button name={"Add New State"}   type={"primary"} size={"extrasmall"}/>
                        
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}   

export default AddStateModel;