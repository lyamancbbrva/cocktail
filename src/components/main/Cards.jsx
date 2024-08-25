import React from 'react'

function Cards({item}) {

 
    return (

        <div className="max-w-xs h-[70vh] shadow-md mx-auto m-[15px] dark:bg-gray-50 dark:text-gray-800">
            <img src={item.strDrinkThumb} alt={item.strDrink} className="object-cover object-center w-full   h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 ">
                <div className="">
                    <h2 className="text-3xl font-semibold tracking-wide">{item.strDrink}</h2>
                    <p className="dark:text-gray-800 py-[10px] ">{item.strInstructions.length > 50 ? item.strInstructions.slice(0, 50) + '...' : item.strInstructions}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#fe637c] dark:text-gray-50">Add to basket</button>
            </div>
        </div>
    )
}

export default Cards