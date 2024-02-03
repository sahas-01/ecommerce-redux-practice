import React from 'react'
import { ReactComponent as HeartIcon } from "../assets/heart.svg";
import { ReactComponent as CartIcon } from "../assets/add-to-cart.svg";

const ProductCard = () => {
  return (
    <div className="border bg-white shadow-sm">
      <img
        src="https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg"
        alt="productimg"
        className="transform group-hover:scale-125 group-hover:rotate-6 transition duration-200"
      />
      <div className="p-4">
        <p className="text-sm">
          T-Shirt for formal men
        </p>
        <p className="text-xs font-bold">
          $ 200
        </p>
        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-sm">
          4.0
        </span>
        <div className="flex justify-between items-center mt-10">
          <HeartIcon className="h-6 w-6" />
          <CartIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard