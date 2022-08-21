import { mainPageInfo } from '../lib/api'
import {Image, StructuredText} from 'react-datocms'

export default function Home({mainPage}) {
    console.log(mainPage)
  return (
    <div className='grid grid-cols-2'>    
    <Image data={mainPage.mainImage.responsiveImage}/>
    <div className='flex justify-center text-white'>
      <div className='p-10'>
      <h1 className='text-3xl mb-4'>{mainPage.title}</h1>
      <StructuredText data={mainPage.content.value}/>
      </div>
      </div>   
    </div>
  )
}

export async function getStaticProps() {
  const mainPage = await mainPageInfo()

  return {
    props: {
      mainPage
    }
  }
}
