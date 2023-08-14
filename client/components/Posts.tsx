import Posts from './Post.tsx'
import postData from '../data/posts.ts'

function PostsList() {
  return (
    <div>
      <h1>The future home of Charlotte&apos;s web log!</h1>
      {postData.map((post) => (
        <Posts key={post.id} {...post} />
      ))}
    </div>
  )
}

export default PostsList
