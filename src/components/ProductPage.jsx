import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { callAPI } from './utils/CallApi';
import ProductDetails from './ProductDetails';
import { GB_CURRENCY } from './utils/constants';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResult) => {
      setProduct(productResult[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, [id]); // Add id as a dependency to refetch the product when the URL parameter changes

  if (!product?.title) return <h1>Loading Product ...</h1>;

  return (
    <div className="h-screen bg-amazon-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
        <div className="grid grid-cols-10 gap-2">
          {/* Left */}
          <div className="col-span-3 p-8 rounded bg-white m-auto">
            <img src={`${product.image}`} alt="ProductImage"></img>
          </div>
          {/* Middle */}
          <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
            <div>
              <ProductDetails product={product} ratings={true} />
            </div>
            <div className="text-base xl:text-lg mt-3">
              {product.description}
            </div>
          </div>
          {/* Right */}
          <div className="col-span-2 p-4 rounded bg-white">
            <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
              {GB_CURRENCY.format(product.price)}
            </div>
            <div className="text-base xl:text-lg  text-gray-500 text-right font-semibold">
              RRP:{' '}
              <span className="line-through">
                {GB_CURRENCY.format(product.oldPrice)}
              </span>
            </div>
            <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
              FREE Returns
            </div>
            <div className="text-base xl:text-lg text-blue-500 font-semibold mt-1">
              FREE Delivery
            </div>
            <div className="text-base text-green-700 xl:text-lg font-semibold mt-1">
              In Stock
            </div>
            <div className="text-base xl:text-lg mt-1">
              Quantity:
              <select className="p-2 bg-white border rounded-md focus:border-indigo-600">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <div>
                <button
                  onClick={() => dispatch(addToCart(product))} // Call the action creator with the product
                  className="bg-yellow-400 w-full p-3 text-xl xl:text-2xl rounded hover:bg-yellow-500 mt-3"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;