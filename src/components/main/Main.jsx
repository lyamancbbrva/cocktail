import React, { useEffect, useState } from 'react'
import RandomCard from './RandomCard'
import { getCocktailForLetter } from '../../config/api'
import Cards from './Cards'
import Basket from './Basket'

export default function Main({searchValue, basketSt, setBasketSt}) {

  
  
  const [data, setData] = useState()

  useEffect(() => {
    getCocktailForLetter(searchValue).then(res => setData(res.drinks))
  }, [searchValue])
  

  return (

    <main
    onClick={() => {
        basketSt ? setBasketSt(false) : ''
      }}
     className={` py-[20px] ${basketSt ? 'bg-black' : ''} `}>
        <div className="wrapper">

      {basketSt ? '' : <RandomCard />} 
      {basketSt ? <Basket basketSt={basketSt} setBasketSt={setBasketSt} /> : ''}

      <div className=' md:flex justify-center py-[20px] flex-wrap items-center'>
          {
          data && data.map(item => <Cards key={item} item={item}/>)
          }
      </div>
        </div>
      
    </main>
  )
}
