# useCart hooks

## state

```js
state = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  cartTotal: 0,
}
```

```js
// 必要: id, quantity, name, price
// 可選: color, size, other...
const item = {
  id: '',
  quantity: 0,
  name: '',
  price: 0,
  color: '',
  size: '',
  other:'',
}
```

### localStorage

- key: 預設為`cart`，可透過`CartProvider`中的`localStorageKey`設定key
- value: 儲存`state.items`的陣列資料，有變動即會更動

## `CartProvider`

ex.

```js
<CartProvider initialCartItems={cartItems} localStorageKey='cart'>
  {/*... your app render jsx */}
</CartProvider>
```

## API

```js
cart: state,
items: state.items,
addItem,
removeItem,
updateItem,
clearCart,
isInCart,
plusOne,
minusOne,
```

### `addItem(item)`

```js
/**
* 加入新項目(quantity:1)，重覆項目 quantity: quantity + 1
* @param  {Object} item
* @returns {void}
*/
```

### `removeItem(id)`

```js
/**
* 給定一id值，將這商品移出陣列中
* @param {string} id
* @returns {void}
*/
```

### `updateItem(item)`

```js
/**
* 給定一item物件，依照id尋找後更新其中的屬性值
* @param {Object} item
* @returns {void}
*/
```

### `clearCart()`

```js
/**
* 清空整個購物車
* @returns {void}}
*/
```

### `isInCart(id) `

```js
/**
* 給定一id值，回傳是否存在於購物車中
* @param {string} id
* @returns {boolean}
*/
```

### `plusOne(id) `

```js
/**
* 給定一id值，有尋找到商品時，設定quantity: quantity + 1
* @param {string} id
* @returns {void}
*/
```

### `minusOne(id) `

```js
/**
* 給定一id值，有尋找到商品時，設定quantity: quantity - 1，但 quantity 最小值為1
* @param {string} id
* @returns {void}
*/
```

## 多個購物車用法

1. 從`useCart.js` 複制另一個購物車勾子，更動 `useCart` , `CartContext`, `CartProvider` 名稱 (必需是另一個ContextProvider) (見範例中的 `useSecondCart.js`)

2. App.js 使用 `SecondCartProvider`，因localStorage的key預設為`cart`，另一台購物車需用另外的key名稱，例如`secondCart`

```js
  return (
    <CartProvider initialCartItems={cartData}  localStorageKey='secondCart'>
      <SecondCartProvider>
        {/*... your app render jsx */}
      </SecondCartProvider>
    </CartProvider>
  )
```

1. 當同一元件要使用多個購物車勾子時，要使用物件來呼叫

```js
  const firstCart = useCart()
  const secondCart = useSecondCart()
  // 之後的呼叫
  {firstCart.cart.items.map()}
  {firstCart.addItem.map()}
```

## CHANGELOG

### 2022/2/27

- add localStorage feature
- add product list
- tune sample
- add [Absolute Imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports) with `jsconfig.json`

### 2022/2/26

- add function and variable
- add `CartProvider` component
- localStorage is not connect yet

## Refs

- https://github.com/sammdec/use-cart
- https://github.com/notrab/react-use-cart