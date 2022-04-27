## react router v6 升級

## 升級 React 至 v16.8 以上

## 升級到 React Router v5.1

- 使用[hooks](https://v5.reactrouter.com/web/api/Hooks)取代原本的 withRouter 用法

## 升級到 React Router v6

### 升級 `<Switch>` 元素為 `<Routes>`

註: 所有在`<Routes>`中的 `<Route>`s 與 `<Link>`s 會變成是相對路徑的，見下範例:

React Router v5

```js
// This is a React Router v5 app
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/users"><Users /></Route>
      </Switch>
    </BrowserRouter>
  );
}

function Users() {
  // In v5, nested routes are rendered by the child component, so
  // you have <Switch> elements all over your app for nested UI.
  // You build nested routes and links using match.url and match.path.
  let match = useRouteMatch();

  return (
    <div>
      <nav>
        <Link to={`${match.url}/me`}>My Profile</Link>
      </nav>

      <Switch>
        <Route path={`${match.path}/me`}><OwnUserProfile /></Route>
        <Route path={`${match.path}/:id`}><UserProfile /></Route>
      </Switch>
    </div>
  );
}
```

React Router v6

```js
// This is a React Router v6 app
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}
```

### `<Link to>`的值

```jsx
// If the current URL is /app/dashboard (with or without
// a trailing slash)
<Link to="stats">               // <a href="/app/dashboard/stats">
<Link to="../stats">            // <a href="/app/stats">
<Link to="../../stats">         // <a href="/stats">
<Link to="../../../stats">      // <a href="/stats">
```

```js
// Change this:
<Link to={{ pathname: "/home", state: state }} />

// to this:
<Link to="/home" state={state} />
```

### 移除 `<Route exact>` 與 `<Route strict>` 屬性

### useNavigate 取代 useHistory 

v5

```js
// This is a React Router v5 app
import { useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();
  function handleClick() {
    history.push('/home')
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
```

```js
// This is a React Router v6 app
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home')
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
```

v5

```jsx
// This is a React Router v5 app
import { useHistory } from "react-router-dom";

function App() {
  const { go, goBack, goForward } = useHistory();

  return (
    <>
      <button onClick={() => go(-2)}>
        Go 2 pages back
      </button>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>
      <button onClick={() => go(2)}>
        Go 2 pages forward
      </button>
    </>
  );
}
```

v6

```jsx
// This is a React Router v6 app
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-2)}>
        Go 2 pages back
      </button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>
        Go forward
      </button>
      <button onClick={() => navigate(2)}>
        Go 2 pages forward
      </button>
    </>
  );
}
```

### Use useRoutes instead of react-router-config

### 使用 `<Navigate>` 取代 `<Redirect>` (在 route 設定之外使用)

```jsx
import { Navigate } from "react-router-dom";

function App() {
  return <Navigate to="/home" replace state={state} />;
}
```

```jsx
// Change this:
<Redirect to="about" />
<Redirect to="home" push />

// to this:
<Navigate to="about" replace />
<Navigate to="home" />
```

---

### Remove activeClassName and activeStyle props from <NavLink />

需改為自行判斷

```
<NavLink
  to="/messages"
  style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
>
  Messages
</NavLink>

<NavLink
  to="/messages"
  className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
>
  Messages
</NavLink>
```

向下相容v5的套件:

```js
import * as React from "react";
import { NavLink as BaseNavLink } from "react-router-dom";

const NavLink = React.forwardRef(
  ({ activeClassName, activeStyle, ...props }, ref) => {
    return (
      <BaseNavLink
        ref={ref}
        {...props}
        className={({ isActive }) =>
          [
            props.className,
            isActive ? activeClassName : null
          ]
            .filter(Boolean)
            .join(" ")
        }
        style={({ isActive }) => ({
          ...props.style,
          ...(isActive ? activeStyle : null)
        })}
      />
    );
  }
);
```

### Replace useRouteMatch with useMatch


---

### withRouter

```js
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
```

[Source](https://reactrouter.com/docs/en/v6/faq#what-happened-to-withrouter-i-need-it)