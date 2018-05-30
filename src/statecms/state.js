import React from 'react';
import StateMap  from './statemap';



class State extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          states: [],
        };
      }
    
      componentDidMount() {
        fetch('http://localhost/oceangreen/admin/api/readState.php?Key=Authority')
        .then(blob => blob.json())
        .then(data => {
          console.log(data);
          this.setState({states: data})
          //alert("this is New state"  + this.state.states);
          
        })
        .catch(e => {
          console.log(e);
          return e;
        });
      }

      editing(id){
        alert("You are editing state with id " + id);
      }
      deleting(id){
          alert("Are you sure to delete state of id "+ id);
      }

    
    render(){
        return(
            <StateMap 
                StatesData={this.state.states}
                editing = {this.editing}
                deleting = {this.deleting}
            />
        )
    }
}

export default State;
