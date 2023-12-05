import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
import { useState } from "react"

const CreateBlog = ({ uid, navigate }) => {
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState("")

    const createPost = async () => {
        try {
            const blogsCollectionRef = collection(db, 'Posts ' + uid)

            if (uid === null) {
                navigate('/login')
                console.warn("OOOPSS LOGIN FIRST!");
                return
            }

            await addDoc(blogsCollectionRef, {
                message: message,
                timeStamp: serverTimestamp()
            })

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <div className="create-post-box">
                {status && <div style={{ padding: "10px", border: "1px solid black" }}>{status}</div>}
                <form action="">
                    <textarea
                        type="text"
                        rows="4"
                        cols="50"
                        placeholder="message here..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </form>
                <div className="message-box"></div>
                <button onClick={createPost}>Post</button>
            </div>
        </div>
    )
}

export default CreateBlog