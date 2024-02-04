import React from 'react';
import { ReactComponent as HeartIcon } from "../assets/heart.svg";
import { ReactComponent as CartIcon } from "../assets/add-to-cart.svg";
import { useNavigate } from 'react-router-dom';
import { add, remove } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";


const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log("cart", cart);

  const addToCart = () => {
    console.log("product", product);
    dispatch(add(product));
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
  };
  const handleRedirect = () => {
    navigate(`/product/${product.id}`);
  }

  return (
    <div
      // onClick={handleRedirect}
      className="border bg-white shadow-sm hover:cursor-pointer">
      <img
        src={product?.image || "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg"}
        alt="productimg"
        className="h-36 w-64 object-cover object-center object-fit"
      />
      <div className="p-4">
        <p className="text-sm">
          {product?.title || "T-shirt for formal"}
        </p>
        <p className="text-xs font-bold">
          ₹ {product?.amount || 200}
        </p>
        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-sm">
          {product?.rating || 5}
        </span>
        <div className="flex justify-between items-center mt-10">
          <HeartIcon className="h-6 w-6" />
          <CartIcon
            onClick={
              addToCart
            }
            className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
