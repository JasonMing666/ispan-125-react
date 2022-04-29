import { Link, Outlet } from 'react-router-dom'

function ProductCategory(props) {
  return (
    <>
      <h1>產品分類</h1>
      <Link to="pc">PC</Link>{' '}
      <Link to="mobile">Mobile</Link>{' '}
      <Link to="other/123">Other</Link>{' '}
      {/* 相當於render children */}
      <Outlet />
    </>
  )
}

export default ProductCategory
