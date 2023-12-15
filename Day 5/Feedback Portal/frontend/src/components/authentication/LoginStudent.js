import { useState } from "react";
import axios from axios;

function LoginStudent() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userMessage, setUserMessage] = useState("");

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                axios.post("http://localhost:3001/login", {
                    username: userName,
                    userpassword: userPassword
                }).then((res) => {
                    if (res.data.success === true) {
                        window.location.href = "/";
                    } else {
                        setUserMessage(res.data.message);
                    }
                });
            }}>
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
                <input type="submit" value="Login" />
            </form>
            <p>{userMessage}</p>
        </>
    );
}

export default LoginStudent;
