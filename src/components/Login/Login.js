import { useState } from 'react';
import './login.css'

export default function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) => {
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    }

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input className='textinput' type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input className='textinput' type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className='checkbox'>
                    <input type="checkbox" />
                    <p>remember password</p>
                </div>
                <div className="button-container">
                    <input className="sumbit" type="submit" value="LOGIN" />
                    {/* <p>LOGIN</p> */}
                </div>
                <p className='forgot'>SIGN / FORGOT PASSWORD</p>
            </form>
        </div>
    );

    return (
        <div className="login">
            <div className="main_login">
                <div className='login_content'>
                    <div className="s_title">LOGIN</div>
                    {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
                </div>
            </div>
        </div>
    )
}