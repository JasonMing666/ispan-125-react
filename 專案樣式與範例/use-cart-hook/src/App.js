import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ProductList from './pages/Product/ProductList'
import SingleCart from './pages/ShoppingCart/SingleCart'
import MultipleCart from './pages/ShoppingCart/MultipleCart'

// 切換頁面捲動至最上方
import ScrollToTop from 'components/ScrollToTop'

// 匯入 Cart 要用的 ContextProvider
import { CartProvider } from './utils/useCart'
import { SecondCartProvider } from './utils/useSecondCart'
// 也可以直接載入cart範例
// 下面程式碼需改為. `<CartProvider initialCartItems={cartData}>`
// import cartData from './data/cart.json'

function App() {
  return (
    <SecondCartProvider localStorageKey="secondCart">
      <CartProvider>
        <Router>
          <>
            <MyNavbar />
            <MainContent>
              <ScrollToTop>
                <Switch>
                  <Route path="/" exact>
                    <SingleCart />
                  </Route>
                  <Route path="/multiple-cart" exact>
                    <MultipleCart />
                  </Route>
                  <Route path="/product-list">
                    <ProductList />
                  </Route>
                </Switch>
              </ScrollToTop>
            </MainContent>
            <MyFooter />
          </>
        </Router>
      </CartProvider>
    </SecondCartProvider>
  )
}

export default App
