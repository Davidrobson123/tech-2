import React, {Component} from 'react'
import '../../App.scss';
import Products from "../../components/products/Products";

export default class Main extends Component {

  componentDidMount() {

  }


  render() {

    return (
      <div className="main">
        <Products/>
      </div>
    )
  };
}