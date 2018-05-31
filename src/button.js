import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            class:'',
        }
    }

    buttonType(type){

        var ButtonClass;

        switch (type) {
            case 'default': ButtonClass = "btn btn-default";
                break;
            case 'primary': ButtonClass = "btn btn-primary";
                break;
            case 'success': ButtonClass = "btn btn-success";
                break;
            case 'info': ButtonClass = "btn btn-info";
                break;
            case 'warning': ButtonClass = "btn btn-warning";
                break;
            case 'danger': ButtonClass = "btn btn-danger";
                break;
            default: ButtonClass = "btn btn-default";
                break;
        }

        return ButtonClass;

    }

    buttonSize(size){
        var ButtonSize;

        switch (size) {
            case 'large': ButtonSize= ' btn-lg';
                break;
            case 'default': ButtonSize = '';
                break;
            case 'small': ButtonSize = ' btn-sm';
                break;
            case 'extrasmall': ButtonSize =  ' btn-xs';
                break;
            default: ButtonSize = '';
                break;
        }

        return ButtonSize;
    }
    buttonAlign(position){
        var Vertex;
        switch (position) {
            case 'left': Vertex = ' pull-left'
                break;
            case 'right': Vertex = ' pull-right'
                break;
            default: Vertex = '';
                break;
        }
        return Vertex;
    }

    handleClick(){
        //alert("You have click a button.");
    }
    
    render(){
        
        var Class = this.buttonType(this.props.type) + 
                    this.buttonSize(this.props.size) +
                    this.buttonAlign(this.props.Align);
        
                    var Disabled = '';
                    if(this.props.status == 'disabled'){
                        Disabled = 'disabled'
                    }

        
        return(
            <button className={Class} onClick = {this.props.clickEvent} disabled={Disabled}>{this.props.name}</button>
        )
    }
}

export default Button;

/*Usage

    <Button name={"NameOfButton"} status={"disbled/null"} clickEvent={"onClickFUnction"} Align={alignment} type={"TypeOfButton"} size={"SizeOfButton"}/>

    This Button Class built as per as Bootstrap doc and specification.
    options::
    TypeOfButton :(default, primary, success, info, warning, danger)
    SizeOfButton :(large, default, small, extrasmall)
    Build Beautiful by Rahul Shahare
*/