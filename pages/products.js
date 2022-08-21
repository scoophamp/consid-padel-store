import { allProducts } from '../lib/api'
import Product from '../components/product'

// Here I list all the products from the datocms and render a Product component. 
// Since getStaticProps only can be used in real pages and not components and its alot cleaner

export default function ProductList({products}) {
    
  return (
    <> 
    
        <div className='grid grid-cols-4 gap-2'>
        {products.map((product) => {
            return (
            <div key={product.id}>                
                <Product product={product}></Product>
            </div>
            )
        })}
        </div>
        </>
  )
}

// Here is an example of the call from the API.js file, here I just use the func to get my desired props

export async function getStaticProps() {
    const products = await allProducts()
  
    return {
      props: {
        products
      }
    }
}