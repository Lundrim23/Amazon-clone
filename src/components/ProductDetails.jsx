import React from 'react';
import ProductBadge from './ProductBadge';

const ProductDetails = ({ product, ratings }) => {
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1">
        {product.title}
      </div>
      <div className="text-sm xl:text-base mb-1">{product.brand}</div>
      <div className="text-sm xl:text-base  mb-1">{product.avgRating}</div>
      <div className="text-xm xl:text-sm font-bold mb-1">
        {product.attribute}
      </div>
      <div>
        <ProductBadge badge={product.badge} />
      </div>
    </div>
  );
};

export default ProductDetails;
