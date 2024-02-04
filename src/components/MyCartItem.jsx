import React from 'react'

const MyCartItem = ({ item }) => {
    return (
        <div className="flex bg-white p-5">
            <img
                src={
                    item?.image ||
                    "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg"
                }
                alt="productimg"
                className="h-20 w-20"
            />
            <div className="flex flex-col justify-between ml-4">
                <p className="text-sm">
                    {
                        item?.title || "T-shirt for formal"
                    }
                </p>
                <p className="text-xs font-bold">
                    ₹ {
                        item?.amount || 200
                    }
                </p>
                <div className="flex items-center gap-x-2">
                    <button className="p-1 rounded-sm">+</button>
                    <p>1</p>
                    <button className="p-1 rounded-sm">-</button>
                </div>
            </div>
        </div>
    )
}

export default MyCartItem