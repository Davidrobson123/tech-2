import React, {Component} from 'react'
import '../../App.scss';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: null,
    };
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

  render() {

    console.log(this.state.products)

    return (
      <div className="main">

      </div>
    )
  };
}