import React, { useState, useEffect } from 'react'
import '../../App.scss';
import ProductItem from '../../components/products/ProductItem';
let data = require('../../assets/mock-data/data.json');

const Products = props => {

  const [featuredProduct, setFeaturedProducts] = useState('');

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {

    let filtered = '';

    data.Items.map(function (item, i) {
      if (item.productid === '0m8hjmd721') {
        filtered = item;
        data.Items = data.Items.filter(i => i.productid !== '0m8hjmd721')
      }
      return data;
    });

    setFeaturedProducts(filtered);
    setFilteredProducts(data.Items);
    setProducts(data.Items);
  }, []);



  return (
    <div className="main">
      <ProductItem products={products} filteredProducts={filteredProducts} featured={featuredProduct}/>
    </div>
  )
}

export default Products;