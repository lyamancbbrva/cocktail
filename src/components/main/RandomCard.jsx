import React, { useEffect, useState } from 'react'
import { getRandomCocktail } from '../../config/api'

export default function () {
    const [random, setRandom] = useState()

    useEffect(() => {

       getRandomCocktail().then(resp => setRandom(resp.drinks[0]))
    }, [])

    const {idDrink, strDrink, strCategory, strDrinkThumb, strGlass, strInstructions, strAlcoholic} = random ? random : ''

    const obj = {
        id: idDrink,
        name: strDrink,
        category: strCategory,
        img: strDrinkThumb,
        glass: strGlass,
        instructions: strInstructions,
        alcohol: strAlcoholic,
        ingredient: Object.entries(random? random : '').filter(item => item[0].includes('Ingredient') && item[1]).map(item => item[1]),
        quanty:  Object.entries(random? random : '').filter(item => item[0].includes('Measure') && item[1]).map(item => item[1])

    }
   
    return (

        <div className="md:flex justify-between mx-auto gap-[20px] w-[80%] p-[10px] overflow-hidden shadow-md dark:text-gray-800">
            <img src={obj.img} alt={obj.name} className="object-contain w-full md:w-[50%]  h-[100%] sm:h-96 dark:bg-gray-500" />
            <div className=''>
            <h2 className="mb-1 text-[1.5em] font-semibold">{obj.name}</h2>
            <h2 className="mb-1 text-[1.5em] font-semibold">{obj.category}/{obj.alcohol}</h2>
            <p className="text-sm dark:text-gray-600 py-[10px] ">{obj.instructions}</p>
            <div className='flex justify-between'>
            <ul className='py-[20px] text-[.9em] '>
                {obj.ingredient.map((item, i )=> <li key={i} className='py-[5px]'>{item}</li>)}
            </ul>
            <ul>
                {obj.quanty.map((item , i)=> <li key={i} className='py-[5px]'>{item}</li>)}
            </ul>
            </div>
            
            </div>
        </div>
    )
}
