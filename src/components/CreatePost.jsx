import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
import { useState } from "react"

const CreatePost = ({ uid, navigate }) => {
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
        <div className="bg-slate-700 my-4 w-1/2 mx-auto p-5 rounded-lg border-t-[0.5px] border-slate-500">
            <div>
                {status && <div style={{ padding: "10px", border: "1px solid black" }}>{status}</div>}
                <form action="">
                    <textarea
                        type="text"
                        rows="4"
                        className="w-full"
                        placeholder="message here..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </form>
                <div></div>
                <button className="w-full bg-blue-600 rounded py-2 border-t-[0.5px] border-blue-500 text-slate-100 font-medium" onClick={createPost}>Post</button>
            </div>
        </div>
    )
}

export default CreatePost