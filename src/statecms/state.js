import React from 'react';
import StateMap  from './statemap';
import Button from '../button';
import AddStateModel from './addStateModal';
import axios from 'axios';


class State extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          states: [],
          showAddModal : false,
        };

      }
    
      componentDidMount() {
        this.getFromServer();
      }

      getFromServer = () =>{
        axios.get('http://localhost/oceangreen/admin/api/readState.php?Key=Authority')
        .then(response =>{
            //console.log(response.data);
            this.setState({
                states: response.data,
            })
        });
        
      }

      editing(id){
        alert("You are editing state with id " + id);
      }
      deleting(id){
          alert("Are you sure to delete state of id "+ id);
      }
      AddModelShowing = () =>{
        //alert("I am toggling a Modal");
        this.setState({
            showAddModal: !this.state.showAddModal,
        });
      }
      //After Now for every function
      //use ES6 bound method 
      //i.e. =()=> for any function
      //so that you can call it from
      //anywhere in lifecycle

    
    render(){
        if(!this.state.states){
            return"Loading....";
        }
        return(
        <div>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    States
                    <Button name={"Add New State"} clickEvent={this.AddModelShowing} type={"primary"} size={"extrasmall"} Align={"right"}/>
                </div>
                <div className="panel-body">
                    <StateMap 
                        StatesData={this.state.states}
                        editing = {this.editing}
                        deleting = {this.deleting}
                    />
                   
                </div>
            </div>

            <AddStateModel 
            ShowModel={this.state.showAddModal}
            AddModelShowing={this.AddModelShowing}/>
        </div>

           
        )
    }
}

export default State;
