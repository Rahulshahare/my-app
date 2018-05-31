import React from 'react';
import Button from '../button';
import Alert from './alert';
import axios from 'axios';



class AddStateModel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            StateName:'',
            AddButtonStatus:'disabled',
            Error:'',
            Success:'',
        };
    }
    close= ()=>{
        this.props.AddModelShowing();
    }
    stateNameChange = (e) =>{
        this.setState({
            StateName: e.target.value,
            AddButtonStatus:'',
        })
        
    }

    save = () =>{
        if(!this.state.StateName){
            this.setState({
                AddButtonStatus:'disabled',
                Error:'State Name is Empty',
            })
            return false;
        }else{
            alert("we can add state");
        }

        const params = new URLSearchParams();
        params.append('StateName', this.state.StateName);
        

            axios.post('http://localhost/oceangreen/admin/api/AddNewState.php',params)
            .then(res => {
                console.log(res);
                console.log(res.data);
                    if(res.data == 'Success'){
                        this.setState({
                            Success: this.state.StateName+' is added',
                        })
                    }

                    if(res.data == 'Available'){
                        this.setState({
                            Error: res.data,
                        })
                    }
            })


    }

    postToServer = () =>{
        const params = new URLSearchParams();
        params.append('StateName', this.state.StateName);
        

            axios.post('http://localhost/oceangreen/admin/api/AddNewState.php',params)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }
    resetModalState = () =>{
        this.setState({
            StateName:'',
            AddButtonStatus:'disabled',
            Error:'',
            Success:'',

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
                    {this.state.Error?
                        <Alert  errorType={'danger'} clickEvent={this.resetModalState} errorText={this.state.Error}/>
                         : null
                    }
                    {this.state.Success?
                        <Alert  errorType={'success'} clickEvent={this.resetModalState} errorText={this.state.Success}/>
                         : null
                    }
                    <form>
                                    <input 
                                        onChange={this.stateNameChange}
                                        type="text" 
                                        value={this.state.StateName} 
                                        className="form-control borderRadiusZero" 
                                        autoComplete="off" 
                                        autoFocus="true"
                                        required="required"
                                        placeholder="Enter State Name"
                                    />
                        </form>
                    </div>
                    
                    <div className="modal-footer">
                    <Button name={"Add New State"} clickEvent={this.save} status={this.state.AddButtonStatus}  type={"primary"} size={"extrasmall"}/>
                    <Button name={"Close"} clickEvent={this.close}  type={"default"} size={"extrasmall"}/>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}   

export default AddStateModel;