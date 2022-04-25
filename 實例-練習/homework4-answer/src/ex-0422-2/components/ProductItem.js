import React from 'react'

// 每個商品的物件
// {
//   id: 1,
//   name: '咖啡色 T-shirt',
//   category: 'Shirt',
//   image: 'https://i.imgur.com/1GrakTl.jpg',
//   price: 300
// }

function ProductItem(props) {
  const { name, category, image, price, count, setCount, handleDelete } = props

  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img alt="" className="img-fluid" src={image} />
          </div>
          <div className="col">
            <div className="row text-muted">{category}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              onClick={() => {
                setCount(count - 1)
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {count}
            </a>
            <a
              href="#/"
              onClick={() => {
                setCount(count + 1)
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            ${price}{' '}
            <span className="close" onClick={handleDelete}>
              &#10005;
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
