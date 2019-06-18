import React, {Component} from 'react'
import '../../App.scss';
import products from '../../assets/image1.jpg';
import features from '../../assets/image2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faSortDown } from '@fortawesome/free-solid-svg-icons'
import Products from "../products/Products";

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

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