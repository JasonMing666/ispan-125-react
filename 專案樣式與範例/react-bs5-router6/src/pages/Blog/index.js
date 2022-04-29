import { Routes, Route, useParams } from 'react-router-dom'
import BlogDetail from './BlogDetail'

function Blog(props) {
  return (
    <Routes>
      <Route path="blog">
        <Route path=":id" element={<BlogDetail />} />
        <Route path="me" element={<p>123</p>} />
      </Route>
    </Routes>
  )
}

export default Blog
