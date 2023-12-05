import { useEffect, useState } from "react"
import CreatePost from "../components/CreatePost"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../firebase"
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore"
import Posts from "../components/Posts"

const Home = () => {
    const navigate = useNavigate()
    const [uid, setUid] = useState("")
    const [user, setUser] = useState("")
    const [posts, setPosts] = useState([])

    const postsCollectionRef = collection(db, 'Posts ' + uid)

    const getCurrentUser = async () => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user.email)
                setUid(user.uid)
                console.log("userrrr");
            }
            else {
                setUser(null)
                setUid(null)
            }
        })
    }

    const handleLogout = () => {
        signOut(auth)
        navigate("/login")
    }

    const getPosts = async () => {
        const postQuery = query(postsCollectionRef, orderBy("timeStamp", "desc"))
        const postSnapshot = await getDocs(postQuery)
        const myPostsData = postSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        console.log("get Posts");
        setPosts(myPostsData)
    }

    useEffect(() => {
        getCurrentUser()
        const unsubcribe = onSnapshot(postsCollectionRef, () => {
            getPosts()
        })

        return () => {
            unsubcribe()
        }
    }, [uid])

    console.log(posts);
    console.log(posts.length > 1);
    return (
        <div>
            <div className="row">
                <h1>My Posts </h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <span>{user}</span>
            <CreatePost uid={uid} navigate={navigate} />
            {
                posts.length > 0
                    ? <Posts posts={posts} user={user} uid={uid} />
                    : <div>No Posts from this user...</div>
            }
        </div>
    )
}

export default Home