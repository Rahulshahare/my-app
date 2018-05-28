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
    
    render(){
        
        var Class = this.buttonType(this.props.type);

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
            var ButtonSize;
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

       

        return(
            <button className={ButtonClass}>{this.props.name}</button>
        )
    }
}

export default Button;