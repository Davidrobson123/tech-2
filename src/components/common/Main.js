import React, {Component} from 'react'
import '../../App.scss';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
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

    console.log(this.state.products)

    return (
      <div className="main">
        {this.createDeals()}
      </div>
    )
  };
}