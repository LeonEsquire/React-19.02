import React from 'react';

class EnterLogin extends React.Component{
    render(){
        return(
            <div>
                <label key = 'labLog' htmlFor = 'logName'>Login</label>
                <input key = 'Log' type = 'text' name = 'logName' placeholder = 'Enter your Login'/><br/><br/>

                <label key = 'labPass' htmlFor = 'logPassword'>Password</label>
                <input key = 'Pass' type = 'text' name = 'logPassword' placeholder = 'Enter your Password'/><br/><br/>

                <button type = 'submit'>Login</button>
            </div>
        );
    }
}

export default EnterLogin;