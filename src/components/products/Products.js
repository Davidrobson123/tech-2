import React, { useState, useEffect } from 'react'
import '../../App.scss';
import ProductItem from '../../components/products/ProductItem';

const Products = props => {

  const [featuredProduct, setFeaturedProduct] = useState('');

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {

    let url = "https://27gmrimn45.execute-api.eu-west-2.amazonaws.com/demos/leighton-demo-api?TableName=products";

    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'x-api-key': 'zQo4PPqD862IwDIQRZub8gX4dqjA3aW2DDhI6UF4'
      }
    }).then(response => response.json())
      .then(responseJson => {
        responseJson.Items.map(function (item, i) {
          if (item.productid === '0m8hjmd721') {
            setFeaturedProduct(item);

            responseJson.Items = responseJson.Items.filter(i => i.productid !== '0m8hjmd721')
          }
          return responseJson;
        });

        setProducts(responseJson.Items);
        setFilteredProducts(responseJson.Items);
      })
      .catch((err) => {console.log(err)});
  }, []);

  return (
    <div className="main">
      <ProductItem products={products} filteredProducts={filteredProducts} featured={featuredProduct}/>
    </div>
  )
}

export default Products;