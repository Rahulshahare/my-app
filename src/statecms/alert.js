import React from 'react';

class Alert extends React.Component{

    selectClass = (ErrorTYpe) =>{
        var ErrorClass='';

        switch (ErrorTYpe) {
            case 'success': ErrorClass = 'alert alert-success';
                break;
            case 'info':    ErrorClass = 'alert alert-info';
                break;
            case 'warning': ErrorClass = 'alert alert-warning';
                break;
            case 'danger':  ErrorClass = 'alert alert-danger';
                break;
            default: ErrorClass = 'alert alert-info';

        }
        return ErrorClass;
    }
    render(){
        var ErrorClass = this.selectClass(this.props.errorType);
        return(
            <div className={ErrorClass} role="alert">
                    <button type="button" onClick={this.props.clickEvent} className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    {this.props.errorText}
            </div>
        )
    }
}

export default Alert;

/*
usage
<Alert  errorType={'success,info,warning,danger'} clickEvent={theClickEvent} errorText={Hello this is error}/>
*/