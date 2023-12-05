import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

const IndividualPost = ({ post, uid }) => {
    const time = post.timeStamp ? post.timeStamp.toDate().toDateString() : ""
    const [displayName, setDisplayName] = useState("")

    useEffect(() => {
        const getUserName = async () => {
            const userRef = doc(db, 'Users', uid)
            const userDocSnap = await getDoc(userRef)
            setDisplayName(userDocSnap.data().displayName)
        }
        getUserName()
    }, [displayName])

    return (
        <div className="post-box">
            <h3>Message:</h3>
            <span className="post-box">{post.message}</span>
            <div className="row">
                <span>Author: {displayName}</span>
                <span>{time}</span>
            </div>
        </div>
    )
}

export default IndividualPost