import OtherBlog from './OtherBlog'
import otherBlogs from '../data/other-blogs'

function OtherBlogs() {
  return (
    <div>
      <h2>Other Blogs</h2>
      {otherBlogs.map((blog) => (
        <OtherBlog key={blog.id} {...blog} />
      ))}
    </div>
  )
}

export default OtherBlogs
