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

    handleClick(){
        alert("Button is Clcked");
    }
    
    render(){
        
        var Class = this.buttonType(this.props.type) + this.buttonSize(this.props.size);

        
        return(
            <button className={Class} onClick = {this.handleClick}>{this.props.name}</button>
        )
    }
}

export default Button;

/*Usage

    <Button name={"NameOfButton"} type={"TypeOfButton"} size={"SizeOfButton"}/>

    This Button Class built as per as Bootstrap doc and specification.
    options::
    TypeOfButton :(default, primary, success, info, warning, danger)
    SizeOfButton :(large, default, small, extrasmall)
    Build Beautiful by Rahul Shahare
*/