import React, { useState } from 'react'
import '../../App.scss';
import products from '../../assets/image1.jpg';
import features from '../../assets/image2.jpg';
import Loading from '../HOC/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faSortDown } from '@fortawesome/free-solid-svg-icons'

const ProductItem = props => {

  const [count, setCount] = useState(0)

  const [filteredProducts, setFilteredProducts] = useState(props.filteredProducts);

  const createDeals = () => {
    return filteredProducts.map(generateOffer)
  }

  const filterProducts = (productFilter) => {
      let filteredProducts = props.products
      filteredProducts = filteredProducts.filter((product) => {
          let productName = product.name.toLowerCase()
          return productName.indexOf(
                  productFilter.toLowerCase()) !== -1
      })

    setFilteredProducts(filteredProducts)
  }

  const handleChange = (e) => {
      filterProducts(e.target.value)
  }

  const handleClick = () => {
    setCount(count + 1)
  }

  const generateOffer = deal => {
    if(deal['sizes']['small'] > 0 || deal['sizes']['medium'] > 0 || deal['sizes']['large'] > 0 ) {
        return (
            <div className="product">
              <img className="image" src={products} alt="product"/>
              <div className="product-details">
                <div className="buy" onClick={handleClick}>Add to Basket</div>
                <div className="product-name">{deal.name}</div>
                <div className="product-brand"><span>Brand:</span> {deal.brand}</div>
                <select>
                  <option disabled selected>Select size</option>
                  {deal['sizes']['small'] > 0 ? <option>Small</option> : null}
                  {deal['sizes']['medium'] > 0 ? <option>Medium</option> : null}
                  {deal['sizes']['large'] > 0 ? <option>Large</option> : null}
                </select>
                <FontAwesomeIcon icon={faSortDown} className="select-drop"/>
                <div className="product-description"><span>Description:</span><br /> {deal.description}</div>
                <div className="product-id"><span>Product ID:</span> {deal.productid}</div>
              </div>
            </div>
        );
     }
  }

  let featured = props.featured;

  return (
    <div className="main">
      <div className="basket"><FontAwesomeIcon icon={faShoppingBasket} /> <span>Basket:</span> {count}</div>
      <input type="text" id="filter"
             onChange={handleChange.bind(this)} placeholder="Search..."/>
      <div className="featured-bar">Featured Product

      <div className="product">
        <img className="image" src={features} alt="product"/>
        <div className="product-details">
          <div className="buy" onClick={handleClick.bind(this)}>Add to Basket</div>
          <div className="product-name">{featured.name}</div>
          <div className="product-brand"><span>Brand:</span> {featured.brand}</div>
          <select>
            <option disabled selected>Select size</option>
            {featured && featured['sizes']['small'] > 0 ? <option>Small</option> : null}
            {featured && featured['sizes']['medium'] > 0 ? <option>Medium</option> : null}
            {featured && featured['sizes']['large'] > 0 ? <option>Large</option> : null}
          </select>
          <FontAwesomeIcon icon={faSortDown} className="select-drop"/>
          <div className="product-description"><span>Description:</span><br /> {featured.description}</div>
          <div className="product-id"><span>Product ID:</span> {featured.productid}</div>
        </div>
      </div>
      </div>
      {createDeals()}
      <div>Loaded in {props.loadingTime} seconds</div>
    </div>
  )
}

export default Loading("products")(ProductItem);