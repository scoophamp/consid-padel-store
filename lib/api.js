import {request} from './datocms'

//Here I gather all the query and request functions to keep it clean from the frontend-files.
// The queries are made easy from the API-explorer in datocms and is requested in the methods bellow and finally exported out to the desired pages.

const HOMEPAGE_QUERY = `query mainPageInfo {
    startpage {
      mainImage {
        responsiveImage {
          alt
          aspectRatio
          bgColor
          base64
          src
          sizes
          srcSet
          width
          webpSrcSet
        }
        url
      }
      id
      title
      content {
        value
      }
    }
  }
  
  
  `;

const PRODUCTS_QUERY = `query allProducts {
    allProducts(orderBy: _createdAt_ASC) {
      mainImage {
        responsiveImage {
          width
          webpSrcSet
          title
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
          alt
        }
      }
      name
      price
      id
      description {
        value
      }
    }
  }
  
  
  `;

const mainPageInfo = async () => {
    const result = await request({ query: HOMEPAGE_QUERY })
    return result.startpage
  }

  const allProducts = async () => {
    const result = await request({ query: PRODUCTS_QUERY })
    return result.allProducts
  }

  export { allProducts, mainPageInfo }