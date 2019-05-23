import React, {Component} from 'react'
import '../../App.scss';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      featuredProduct: ''
    };

    this.createDeals = this.createDeals.bind(this);
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
          products: responseJson.Items
        });
      });
  }

  createDeals() {
    return this.state.products.map(this.generateOffer)
  }

  generateOffer = deal => {
    return (
    <div>{deal.brand}</div>
    );
  }

  render() {

    console.log(this.state)

    return (
      <div className="main">
        {/*{this.createDeals()}*/}
        <div className="product">
          <div className="image"></div>
          <div className="product-name">Brown Jacket</div>
          <div className="product-brand">Adidas</div>
          <select>
            <option disabled selected>Size</option>
          </select>
          <div>Description</div>
        </div>

        <div className="product">
          <div className="image"></div>
        </div>
      </div>
    )
  };
}