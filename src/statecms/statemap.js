import React from 'react';
import Button from '../button';

class StateMap extends React.Component{
    render(){
       
            const doubled = this.props.StatesData.map((text,i) =>
            <tr>
                <td key={i}>{text.id}</td>
                <td>{text.location_name}</td>
                <td>{text.active == 1?
                <Button name={"Active"} type={"info"} size={"extrasmall"}/>
                :<Button name={"De-active"} type={"warning"} size={"extrasmall"}/>
                }
                </td>
                <td>
                {<Button name={"Edit"} clickEvent={ ()=>this.props.editing(text.id) } type={"info"} size={"extrasmall"}/>}
                {<Button name={"Delete"} clickEvent={ ()=>this.props.deleting(text.id)} type={"danger"} size={"extrasmall"}/>}
                </td>

            </tr>
         );
       // console.log(doubled);
        return(
          <table id="dashbordTable" className="table table-bordered dashbordTable">
          <thead>
              <tr>
                  <th>Id</th>
                  <th>State Name</th>
                  <th>Status</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
           {doubled}
          </tbody>
      </table>
        )
    }
}

export default StateMap;