import { number } from 'mathjs';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';

import Breadcrums from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


const Product = () => {
  const { all_product } = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={Product} />

    </div>
  )
}

export default Product
