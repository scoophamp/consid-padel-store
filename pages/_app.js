import '../styles/globals.css'
import Navbar from '../components/navbar'

// Normally I would do a layout site and have it here but for now a simple navbar will do

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <div className='p-5'>
  <Component {...pageProps} /></div></>
}

export default MyApp

