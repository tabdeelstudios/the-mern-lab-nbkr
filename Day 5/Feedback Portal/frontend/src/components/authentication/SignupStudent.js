import { useState } from "react";
import axios from 'axios';

function SignupStudent() {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userMessage, setUserMessage] = useState("");

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                axios.post("http://localhost:3001/signup", {
                    useremail: userEmail,
                    username: userName,
                    userpassword: userPassword
                }).then((res) => {
                    res.data.success === true ?
                        window.location.href('/login') :
                        setUserMessage(res.data.message);
                });
            }}>
                <input type="text"
                    placeholder="Email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <br />
                <input type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <br />
                <input type="password"
                    placeholder="Password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)} />
                <input type="submit" value="Signup" />
            </form>
            <p>{userMessage}</p>
        </>
    );
}

export default SignupStudent;
