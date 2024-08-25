import React, { useEffect, useState } from 'react'
import RandomCard from './RandomCard'
import { getCocktailForLetter } from '../../config/api'
import Cards from './Cards'
import Basket from './Basket'

export default function Main({searchValue, basketSt, setBasketSt}) {

  
  const [basket, setBasket] = useState([])
  const [data, setData] = useState()
  const [count, setCount] = useState(1)

  useEffect(() => {
    getCocktailForLetter(searchValue).then(res => setData(res.drinks))
  }, [searchValue])
  
  function addToBasket(id) {
   const item = data.find(item => item.idDrink == id)
   basket.find(item => item.idDrink == id) ? setCount(count+1) : setBasket([item, ...basket])  
  }
  
  function delFromBasket(id) {
   setBasket(basket.filter(item => item.idDrink !== id))
  
  }

  return (

    <main
    onClick={() => {
        basketSt ? setBasketSt(false) : ''
      }}
     className={` py-[20px] ${basketSt ? 'bg-[#00000050] relative' : ''} `}>
        <div className="wrapper">

      {basketSt ? '' : <RandomCard />} 
      {basketSt ? <Basket  delFromBasket={delFromBasket} count={count} setCount={setCount} basket={basket} basketSt={basketSt} setBasketSt={setBasketSt} /> : ''}

      <div className=' md:flex justify-center py-[20px] flex-wrap items-center'>
          {
          data && data.map((item , i)=> <Cards addToBasket={addToBasket} basketSt={basketSt} key={i} item={item}/>)
          }
      </div>
        </div>
      
    </main>
  )
}
