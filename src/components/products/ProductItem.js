import React, {Component} from 'react'
import '../../App.scss';
import products from '../../assets/image1.jpg';
import Loading from '../HOC/loading';
import features from '../../assets/image2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faSortDown } from '@fortawesome/free-solid-svg-icons'

class ProductItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      filteredProducts: this.props.filteredProducts
    };

    this.createDeals = this.createDeals.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  }

  createDeals() {
    return this.state.filteredProducts.map(this.generateOffer)
  }

  filterProducts = (productFilter) => {
      let filteredProducts = this.props.products
      filteredProducts = filteredProducts.filter((product) => {
        console.log(product)
          let productName = product.name.toLowerCase()
          return productName.indexOf(
                  productFilter.toLowerCase()) !== -1
      })
      this.setState({
          filteredProducts: filteredProducts
      })
  }

  handleChange = (e) => {
      this.filterProducts(e.target.value)
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  generateOffer = deal => {
    if(deal['size']['small'] > 0 || deal['size']['medium'] > 0 || deal['size']['large'] > 0 ) {
        return (
            <div className="product">
              <img className="image" src={products} alt="product"/>
              <div className="product-details">
                <div className="buy" onClick={this.handleClick}>Add to Basket</div>
                <div className="product-name">{deal.name}</div>
                <div className="product-brand"><span>Brand:</span> {deal.brand}</div>
                <select>
                  <option disabled selected>Select size</option>
                  {deal['size']['small'] > 0 ? <option>Small</option> : null}
                  {deal['size']['medium'] > 0 ? <option>Medium</option> : null}
                  {deal['size']['large'] > 0 ? <option>Large</option> : null}
                </select>
                <FontAwesomeIcon icon={faSortDown} className="select-drop"/>
                <div className="product-description"><span>Description:</span><br /> {deal.description}</div>
                <div className="product-id"><span>Product ID:</span> {deal.productid}</div>
              </div>
            </div>
        );
     }
  }

  render() {

    let featured = this.props.featured;

    return (
      <div className="main">
        <div className="basket"><FontAwesomeIcon icon={faShoppingBasket} /> <span>Basket:</span> {this.state.count}</div>
        <input type="text" id="filter"
               onChange={this.handleChange} placeholder="Search..."/>
        <div className="featured-bar">Featured Product

        <div className="product">
          <img className="image" src={features} alt="product"/>
          <div className="product-details">
            <div className="buy" onClick={this.handleClick}>Add to Basket</div>
            <div className="product-name">{featured.name}</div>
            <div className="product-brand"><span>Brand:</span> {featured.brand}</div>
            <select>
              <option disabled selected>Select size</option>
              {featured && featured['size']['small'] > 0 ? <option>Small</option> : null}
              {featured && featured['size']['medium'] > 0 ? <option>Medium</option> : null}
              {featured && featured['size']['large'] > 0 ? <option>Large</option> : null}
            </select>
            <FontAwesomeIcon icon={faSortDown} className="select-drop"/>
            <div className="product-description"><span>Description:</span><br /> {featured.description}</div>
            <div className="product-id"><span>Product ID:</span> {featured.productid}</div>
          </div>
        </div>
        </div>
        {this.createDeals()}
        <div>Loaded in {this.props.loadingTime} seconds</div>
      </div>
    )
  };
}

export default Loading("products")(ProductItem);