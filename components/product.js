import React from 'react'
import {Image, StructuredText} from 'react-datocms'

export default function product({product}) {
    console.log(product)
  return (
    <div id='productcard' className='bg-white dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-105 duration-200'>
<a href="#">
  <Image data={product.mainImage.responsiveImage}></Image> 
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price} $</p>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart +
            
        </a>
    </div>


    </div>
  )
}
