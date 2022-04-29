import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
} from 'react-router-dom'
import ProductMen from './ProductMen'
import ProductWomen from './ProductWomen'

function Product(props) {
  let { path, url } = useRouteMatch()

  return (
    <>
      <div>Product</div>
      <Link to={`${url}/men`}>men</Link>
      <br />
      <Link to={`${url}/women`}>women</Link>
      <hr />
      <Switch>
        <Route path={`${path}/men`}>
          <ProductMen />
        </Route>
        <Route path={`${path}/women`}>
          <ProductWomen />
        </Route>
        <Route path={`${path}`}>
          <p>Product(產品頁)的HOME</p>
        </Route>
      </Switch>
    </>
  )
}

export default Product
