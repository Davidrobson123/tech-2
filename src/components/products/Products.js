import React, {Component} from 'react'
import '../../App.scss';
import ProductItem from "./ProductItem";

export default class Products extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      featuredProduct: '',
      filteredProducts: [],
    };
  }

  componentDidMount() {
    let url = "https://27gmrimn45.execute-api.eu-west-2.amazonaws.com/demos/leighton-demo-api?TableName=products";

    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'x-api-key': 'zQo4PPqD862IwDIQRZub8gX4dqjA3aW2DDhI6UF4'
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

  render() {

    return (
      <div className="main">
        <ProductItem products={this.state.products} filteredProducts={this.state.filteredProducts} featured={this.state.featuredProduct}/>
      </div>
    )
  };
}