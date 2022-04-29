// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import React, { useState } from 'react'

// 頁面用元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProductBaby from './pages/ProductBaby'
import ProductMen from './pages/ProductMen'
import ProductWomen from './pages/ProductWomen'
import Member from './pages/Member'
import Student from './pages/Student'

import NotFoundPage from './pages/NotFoundPage'

// 產品展示(巢狀路由)
import ProductCategory from './pages/ProductCategory'
import PC from './pages/ProductCategory/PC'
import Mobile from './pages/ProductCategory/Mobile'
import Other from './pages/ProductCategory/Other'

// 組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
//import BreadCrumb from './components/BreadCrumb'
//import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'
import MultiLevelMatchBreadCrumb from './components/MultiLevelMatchBreadCrumb'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <MyNavbar auth={auth} />
        {/* 主內容區 */}
        <MainContent>
          <MultiLevelMatchBreadCrumb />
          {/* 匹配路由表(路徑單一匹配) */}
          {/* 切換顯示的元件畫面放在這下面 */}
          {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
          <ScrollToTop>
            <Routes>
              <Route
                path="/student"
                element={<Student />}
              />
              <Route
                path="/product/women"
                element={<ProductWomen />}
              />
              <Route
                path="/product/men"
                element={<ProductMen />}
              />
              {/* 這裡要定義網址參數的屬性名稱 */}
              <Route
                path="/product/baby/:id?"
                element={<ProductBaby />}
              />
              <Route
                path="/login"
                element={
                  <Login auth={auth} setAuth={setAuth} />
                }
              />
              {/* 利用props傳入頁面元件狀態 */}
              <Route
                path="/about"
                element={<About auth={auth} />}
              />
              <Route
                path="/"
                element={<Home auth={auth} />}
              />
              <Route
                path="/productcategory"
                element={<ProductCategory />}
              >
                <Route index element={<PC />} />
                <Route path="pc" element={<PC />} />
                <Route path="mobile" element={<Mobile />} />
                <Route
                  path={`:type/:id`}
                  element={<Other />}
                />
              </Route>
              <Route
                path="/member"
                element={<Member auth={auth} />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            {/* end 匹配路由表 */}
          </ScrollToTop>
        </MainContent>
        {/* 頁尾+版權訊息 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
