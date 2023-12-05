import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [message, setMessage] = useState("")

    const usersCollectionRef = collection(db, "Users")

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const userRef = doc(usersCollectionRef, userCredential.user.uid)
            await setDoc(userRef, {
                displayName,
                email
            })
            setMessage("Signup successfully, redirecting to login page")
            console.log(userRef);
            setTimeout(() => {
                navigate("/")
                setMessage("")
            }, 3000)
        } catch (error) {
            console.log(error.message);
            setTimeout(() => {
                setMessage("")
            }, 3000)
        }
        console.log("asdasdasd");
    }

    return (
        <div className="container">
            <div>
                {message && <div style={{ padding: "10px", border: "1px solid black" }}>{message}</div>}
                <br />
                <h1>Signup</h1>
                <form>
                    <label>Name:</label><br />
                    <input
                        type='text'
                        required
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                    <br />
                    <label>Email:</label><br />
                    <input
                        type='email'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label>Password:</label><br />
                    <input
                        type='password'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button type='submit' onClick={handleSignup}>Sign Up!</button>
                    <div>
                        <span>Already have an account? </span>
                        <Link to={'/login'}><span>Login</span></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup