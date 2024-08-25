import React, { useEffect, useState } from 'react'
import RandomCard from './RandomCard'
import { getCocktailForLetter } from '../../config/api'
import Cards from './Cards'
import Basket from './Basket'

export default function Main({searchValue, basketSt}) {

  
  
  const [data, setData] = useState()

  useEffect(() => {
    getCocktailForLetter(searchValue).then(res => setData(res.drinks))
  }, [searchValue])
  

  return (

    <main className='wrapper py-[20px]'>
      <RandomCard />
      {basketSt ? <Basket basketSt={basketSt} /> : ''}
      <div className="md:flex justify-center py-[20px] flex-wrap items-center">
          {
          data && data.map(item => <Cards key={item} item={item}/>)
          }
      </div>
    </main>
  )
}
