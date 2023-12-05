import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase"

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log("Testing kasfkjahfjkasgdfjhsdgf");
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setMessage("Logged in successfully, Redirecting to home page")
            setEmail("")
            setPassword("")
            setTimeout(() => {
                navigate("/")
                setMessage("")
            }, 3000)
        } catch (error) {
            setMessage("Error loggin in, Please try again.")
            console.log(error.message);
            setTimeout(() => {
                setMessage("")
            }, 3000)
        }
    }

    return (
        <div className="container">
            <div>
                {message && <div style={{padding: "10px", border:"1px solid black"}}>{message}</div>}
                <br />
                <h1>Login</h1>
                <form>
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
                    <button type='submit' onClick={handleLogin}>Login</button>
                    <div>
                        <span>Don't have an account yet? </span>
                        <Link to={"/signup"}><span>Signup</span></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login