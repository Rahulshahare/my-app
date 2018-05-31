import React from 'react';
import Button from '../button';



class AddStateModel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            StateName:'',
        };
    }
    close= ()=>{
        this.props.AddModelShowing();
    }
    StateNameChange = (e) =>{
        this.setState({
            StateName: e.target.value,
        })
    }
    render(){
        if(!this.props.ShowModel){
            return false;
        }

        return(
            <div className="modal show">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content borderRadiusZero">
                    <div className="modal-header">
                        <button type="button" onClick={this.close} className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <span className="modal-title">Add New State</span>
                    </div>
                    <div className="modal-body">
                    <form>
                                    <input 
                                        onChange={this.StateNameChange}
                                        type="text" 
                                        value={this.state.StateName} 
                                        className="form-control borderRadiusZero" 
                                        autocomplete="off" 
                                        autoFocus="true"
                                        required="required"
                                        placeholder="Enter State Name"
                                    />
                        </form>
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