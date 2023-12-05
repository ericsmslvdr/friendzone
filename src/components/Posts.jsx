import IndividualPost from "./IndividualPost"

const Posts = ({ posts, user, uid }) => {
    return posts.map((post) => (
        <IndividualPost post={post} user={user} uid={uid} />
    ))

}

export default Posts