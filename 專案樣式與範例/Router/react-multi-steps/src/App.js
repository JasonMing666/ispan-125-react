import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

import ProductDetail from './pages/ProductDetail'
import ProductDetailQS from './pages/ProductDetailQS'
import ProductCategory from './pages/ProductCategory'

import OrderSteps from './pages/OrderSteps'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <h2>Link連結</h2>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/product-category">Product Category</Link>
        <br />
        <Link to="/product-category/product-detail">Product Detail</Link>
        <br />
        <Link to="/product-category/product-detail-qs">Product Detail QS</Link>
        <br />
        <Link to="/order-steps">OrderSteps</Link>

        <ScrollToTop>
          <Switch>
            <Route path="/product-category/product-detail/:id?">
              <ProductDetail />
            </Route>
            <Route path="/product-category/product-detail-qs/">
              <ProductDetailQS />
            </Route>
            <Route path="/product-category">
              <ProductCategory />
            </Route>
            <Route path="/login">
              <Login auth={auth} setAuth={setAuth} />
            </Route>
            <Route path="/about">
              <About auth={auth} />
            </Route>
            <Route path="/order-steps">
              <OrderSteps />
            </Route>
            <Route exact path="/">
              <Home auth={auth} />
            </Route>
          </Switch>
        </ScrollToTop>
      </>
    </Router>
  )
}

export default App
