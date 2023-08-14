import Header from './Header.tsx'
import headerData from '../data/header.ts'
import Footer from './Footer.tsx'
import footerData from '../data/footer.ts'
import OtherBlogs from './OtherBlogs.tsx'
import RecentEntries from './RecentEntries.tsx'
import Posts from './Posts.tsx'

function App() {
  return (
    <div className="parent-container">
      <div className="header">
        <Header title={headerData.title} link={headerData.link} />
      </div>

      <div className="posts">
        <Posts />
      </div>

      <div className="recent-entries">
        <RecentEntries />
      </div>

      <div className="other-blog">
        <OtherBlogs />
      </div>
      <div className="footer">
        <Footer copyright={footerData.copyright} author={footerData.author} />
      </div>
    </div>
  )
}

export default App
