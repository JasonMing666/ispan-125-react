import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 導入所有頁面
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Product from './pages/Product'

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
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
