import { useState } from "react";

function LoginStudent() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userMessage, setUserMessage] = useState("");

    return (
        <>
            <form>
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
