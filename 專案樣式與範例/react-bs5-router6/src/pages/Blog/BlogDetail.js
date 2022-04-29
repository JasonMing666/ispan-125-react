import { Routes, Route, useParams } from 'react-router-dom';

function BlogDetail(props) {

  return <Routes>
      <Route path="blog">
        <Route path=":id" element={<ProfilePage />} />
        <Route path="me" element={...} />
      </Route>
    </Routes>
}

export default Blog
