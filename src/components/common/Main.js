import React, {Component} from 'react'
import '../../App.scss';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      featuredProduct: '',
      filteredProducts: []
    };

    this.createDeals = this.createDeals.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let url = "https://27gmrimn45.execute-api.eu-west-2.amazonaws.com/demos/leighton-demo-api?TableName=products";

    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'x-api-key': 'zQo4PPqD862IwDIQRZub8gX4dqjA3aW2DDhI6UF4', //it can be iPhone or your any other attribute
      }
    }).then(response => response.json())
      .then(responseJson => {
        let me = this;
        responseJson.Items.map(function(item, i) {
          if(item.productid === '0m8hjmd721') {
            me.setState({
                featuredProduct: item
            });

            responseJson.Items = responseJson.Items.filter(i => i.productid !== '0m8hjmd721')
          }
          return responseJson;
        });
        this.setState({
          products: responseJson.Items,
          filteredProducts: responseJson.Items
        });
      });
  }

  createDeals() {
    return this.state.filteredProducts.map(this.generateOffer)
  }

  filterProducts = (productFilter) => {

      let filteredProducts = this.state.products
      filteredProducts = filteredProducts.filter((product) => {
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

  generateOffer = deal => {
    if(deal['size']['small'] > 0 || deal['size']['medium'] > 0 || deal['size']['large'] > 0 ) {
        return (
            <div className="product">
              <div className="image"></div>
              <div className="product-name">{deal.name}</div>
              <div className="product-brand">{deal.brand}</div>
              <select>
                <option disabled selected>Size</option>
              </select>
              <div>Description</div>
            </div>
        );
     }
  }

  render() {

    let featured = this.state.featuredProduct;

    return (
      <div className="main">
        <input type="text" id="filter"
               onChange={this.handleChange}/>
        {/*{this.createDeals()}*/}
        <div className="product">
          <div className="image"></div>
          <div className="product-name">{featured.name}</div>
          <div className="product-brand">{featured.brand}</div>
          <select>
            <option disabled selected>Size</option>
          </select>
          <div>Description</div>
        </div>

         {this.createDeals()}
      </div>
    )
  };
}