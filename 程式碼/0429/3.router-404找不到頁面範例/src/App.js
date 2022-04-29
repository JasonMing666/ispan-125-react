import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 導入所有頁面
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Product from './pages/Product'
import ProductMen from './pages/ProductMen'
import ProductWomen from './pages/ProductWomen'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* TIP: 路徑長的要往上寫，尤其是有其中有包含同名稱時，
            例如 `/product/men` 中有 `/product`
         */}
        <Route path="/product/men">
          <ProductMen />
        </Route>
        <Route path="/product/women">
          <ProductWomen />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        {/* TIP: 必要時要加exact，即要完全匹配path字串才會呈現該頁面元件 */}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
