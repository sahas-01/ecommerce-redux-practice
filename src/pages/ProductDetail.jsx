import React from 'react'

const ProductDetail = () => {
    return (
        <div className='flex justify-center items-center m-36'>
            <div className='w-1/2'>
                <img
                    src='https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg'
                    alt='productimg'
                    className='h-96 w-96'
                />
            </div>
            <div className="border-r border-gray-300 h-96 mr-8"></div>
            <div className='w-1/2'>
                <h1 className='text-2xl font-bold my-5'>Product Name</h1>
                <p className='text-sm my-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid autem accusamus cumque et corporis numquam neque. Beatae, tenetur blanditiis? A.
                </p>
                <p className='text-lg font-bold my-5'>$ 200</p>
                <div className='flex gap-x-10 my-3'>
                    <button className='bg-transparent border-black border-2 py-4 px-10'>
                        Buy Now
                    </button>
                    <button className='bg-black text-white py-4 px-10'>
                        Add to Basket
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail