import { useState } from "react";

function SignupStudent() {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userMessage, setUserMessage] = useState("");

    return (
        <>
            <form>
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
