# React Router 使用說明

註：本教學中以 React Router v5.1 以上為主，新版本的 v6 有不少差異，但由於剛發佈不久(2021.11)，版本發佈還在跳動非常快，目前還有不少 bugs 或與前一版的相當有不相容性。建議一點時間後穩定後再使用，目前 npm 下載量仍少於 v5 版本，有需要使用可以參考官網的文件來遷移到新版本。

註：React Router 目前版本(v5.x)區分為給網站應用 React 開發使用的 react-router-dom，以及給手機應用 React Native 開發使用的 react-router-native，文件參考[REACT ROUTER](https://v5.reactrouter.com/)

註：網站應用使用的導覽方式是路由的概念，但手機開發的導覽方式實際上是堆疊的結構，兩者不太一樣。

## 安裝 react-router-dom 模組

在終端機裡，對應專案的根目錄，輸入以下的指令(目前使用 5.3.1):

```
yarn add react-router-dom@5.3.1
```

或

```
npm install react-router-dom@5.3.1
```

## React Router 使用基礎說明

### 應用的最外層元件必須是 Router 元件

> 註：一般情況就是 App 這個元件

> 註：一個應用只能使用一個 Router 元件

Router 元件直接由 React Router 模組導入，一般都是使用 BrowserRouter 作為 Router 元件。Router 元件必需位於你的應用的最外層(最上層的元件)，例如下面的最基本的套用範例：

以下為新語法(v5.x) - 推薦使用:

```js
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
```

另一點要注意的是，Router 元件有一個要求，是只能有一個子元素在裡面，所以如果你定義了兩個以上的子元素，要記得先用 div 或 React.Fragment(`<>...</>`)先包含起來，例如以上面的程式碼。

> 註：由於最上層元件要求一定要是 Router 元件，與一些其它有類似要求的套件例如 Redux 可能會有整合上的問題，這部份的解決方案請參考官方相關的文件。

### 用 Route 元件建立路由表

Route 元件是使用來建立路由的對照表，這個元件的可設置屬性很多，可以應用於各種應用情況。通常位置都是在你的應用的最上層元件的 Router 元件的最下面一段 JSX 碼，請見上一節的範例。

Switch 元件通常會包裹 Route 元件，因為路由表的使用方式是用對照符合(match)的，Switch 會從上到下尋找最近的一個，也只會使用一個。以下面的兩個例子來說明有使用 Switch 元件和沒使用 Switch 元件的差異：

```jsx
<Switch>
  <Route path='/about'>
    <About />
  </Route>
  <Route path='/about/contact'>
    <Contact />
  </Route>
</Switch>
```

上面這個例子，如果網址是`/about`則出現 About 元件的內容，但如果網址是`/about/contact`則出現 Contact 元件的內容。

```jsx
<Route path="/about">
    <About />
</Route>
<Route path="/about/contact">
    <Contact />
</Route>
```

上面這個例子，如果，如果網址是`/about`則出現 About 元件的內容，但如果網址是`/about/contact`，則會出現 About 與 Contact 元件兩者的內容。

由上面兩個例子可知道，使用與不使用 Switch 元件會有不同的呈現結果，開發者可以視使用情況來決定。

另外，Router 會依照目前輸入的網址去比對路由表中的設定路徑，在某些情況下必須要配合 exact 屬性，這是"精準的"意思，代表要求要精準地符合路徑再套用這個元件或 css 樣式等等。

1. 推薦寫法：有用到`/`時，愈長的寫愈上面

```js
<Route path="/product/mobile/apple">
    <ProductMobileApple />
</Route>
<Route path="/product/mobile">
    <ProductMobile />
</Route>
<Route path="/product">
    <Product />
</Route>
```

2. 能加上`exact`屬性一律加上

```js
<Route exact path="/product/mobile/apple">
    <ProductMobileApple />
</Route>
<Route exact path="/product/mobile">
    <ProductMobile />
</Route>
<Route exact path="/product">
    <Product />
</Route>
```

> 註: 動態的參數路由，例如`path="/product/:id"`這種路徑不能加`exact`屬性

> 註: 最後的 404(NotFoundPage)的路徑外，不能加`exact`屬性

### 以 Link 取代 a

> 注意：使用`a`與`href`有可能會導致頁面刷新，元件會重新回復初始狀態，導致應用程式的運作失常，所以請儘可能用 Link 元件

`a`元素與`href`屬性是網站應用中的連結網頁用元素，Link 元件是 React Router 中用來取代 a 的元件。

原本的連結應該是像下面這樣：

```js
<a href='/about'>關於我們</a>
```

改為 Link 元素後會像下面這樣：

```js
<Link to='/about'>關於我們</Link>
```

Link 元件中除了可以像 a 元素中，使用 id、title、className 等屬性外，to 屬性中可以使用物件的定義方式，來定義這個連結路徑的參數值、hash 值、state 值，例如以下的範例：

```js
<Link
  to={{
    pathname: '/courses',
    search: '?sort=name',
    hash: '#the-hash',
    state: { fromDashboard: true },
  }}
/>
```

### React Router 三個重要的屬性值

使用 React Router 後會綁入使用的元件的 props，以下三個相關的屬性值：

- match: 主要要得到不同路徑的參數值
- history: 對於瀏覽器書籤、前後移動的處理方法
- location: 目前所在的位置(物件值)

### withRouter 方法

> 註：函式型/類別型元件通用的方式

> 注意：此 HOC 方法在 v6 版要由開發者自行包裝，參考[FAQ](https://reactrouter.com/docs/en/v6/faq#what-happened-to-withrouter-i-need-it)與[Does v6 drop support for class components?](https://github.com/remix-run/react-router/issues/8146)

深層的子元件要得到 React Router 的屬性值時都要使用。要綁入 props 三個屬性值(match, history, loaction)必定要加上。

範例:

```js
import React, { useState, useEffect } from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'

function Product(props) {
  console.log(props)
  return (
    <>
      <h1>Product</h1>
      <h3>{props.match.params.id}</h3>
    </>
  )
}

export default withRouter(Product)
```

### Hooks(勾子)

> 註: 為了未來能將專案快速升級到 v6，你應該多使用勾子+函式型元件

只能用於函式型元件。v5.1 以上才能使用，請參考[Hooks](https://reacttraining.com/react-router/web/api/Hooks)文字內容。

#### useHistory

```jsx
import { useHistory } from 'react-router-dom'

function HomeButton() {
  let history = useHistory()

  function handleClick() {
    history.push('/home')
  }

  return (
    <button type='button' onClick={handleClick}>
      Go home
    </button>
  )
}
```

#### useLocation

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'

function usePageViews() {
  let location = useLocation()
  React.useEffect(() => {
    ga.send(['pageview', location.pathname])
  }, [location])
}

function App() {
  usePageViews()
  return <Switch>...</Switch>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  node
)
```

#### useParams

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'

function BlogPost() {
  let { slug } = useParams()
  return <div>Now showing post {slug}</div>
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/blog/:slug'>
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  node
)
```

#### useRouteMatch

用於匹配路由之用，請參考[useRouteMatch](https://reactrouter.com/web/api/Hooks/useroutematch)

### React Bootstrap 導覽選單項目點亮(active)議題

但如果是使用在選單項目的連結，因為會有 active(被點按到時的特定 css)，會改用`NavLink`元件，這個元件是特別針對像選單項目這種導覽所設計的，多出了幾個點按到時的特別屬性，例如：

- activeClassName：被點按進入套用的 css 類別
- activeStyle：被點按進入套用的 css 樣式
- isActive：決定被點按與否的函式

```jsx
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
// 選單連結要使用NavLink取代Link
import { NavLink } from 'react-router-dom'

//...
;<Nav className='mr-auto'>
  {/* 把Nav.Link作為NavLink來使用 */}
  {/* 一定要加上exact，不然首頁會一直點亮(active) */}
  <Nav.Link as={NavLink} to='/' exact>
    首頁
  </Nav.Link>
  <Nav.Link as={NavLink} to='/todo'>
    待辨事項
  </Nav.Link>
  <Nav.Link as={NavLink} to='/product'>
    產品
  </Nav.Link>
</Nav>
```

### 參考：舊語法(v4)

> 註: 請不要再使用這語法，如果有看到網路上的教學用這種的可以跳過。

```js
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'

function BasicExample() {
  return (
    <Router>
      <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </>
    </Router>
  )
}
```

### 參考：靜態路由表

> [npm 套件](https://www.npmjs.com/package/react-router-config)

> 注意: 使用靜態路由時，因無法從 props 傳入動態的狀態值，需搭配全域狀態套件(redux, mobx, Recoil)或 Context 使用

另一種針對複雜的、具有規模的應用的路由表設定方式，是先使用一個物件陣列先定義好，然後再用迴圈或 map 方法輸出到同一位置，範例如下：

```js
const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches,
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus,
      },
      {
        path: '/tacos/cart',
        component: Cart,
      },
    ],
  },
]
```

要使用上面這個預先定義的路由表，可以自己撰寫一個元件來套用，或是使用`react-router-config`這個靜態路由的工具模組來協助套用。
