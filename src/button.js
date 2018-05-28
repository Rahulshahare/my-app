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

    
    
    render(){
        
        var ButtonClass;

        switch (this.props.type) {
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

        switch (this.props.size) {
            case 'large': ButtonClass = ButtonClass + ' btn-lg';
                break;
            case 'default': ButtonClass = ButtonClass;
                break;
            case 'small': ButtonClass = ButtonClass + ' btn-sm';
                break;
            case 'extrasmall': ButtonClass = ButtonClass + ' btn-xs';
                break;
            default: ButtonClass = ButtonClass;
                break;
        }

       

        return(
            <button className={ButtonClass}>{this.props.name}</button>
        )
    }
}

export default Button;