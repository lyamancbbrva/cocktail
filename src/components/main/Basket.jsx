    import React from "react";
    import { HiXMark } from "react-icons/hi2";
    import { FaRegTrashAlt } from "react-icons/fa";


    export default function Basket({ basket, setBasketSt, count, setCount, delFromBasket }) {

    return (
        <div
        onClick={(e) => {
            e.stopPropagation();
        }}
        className="container h-[50vh] absolute w-[50%] left-[25%] p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50"
        >
        <div className="flex items-center justify-between">
            <h2 className="p-[10px] text-[1.6em] font-bold">Basket</h2>
            <HiXMark onClick={() => setBasketSt(false)} className="text-[1.7em]" />
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
            <thead className="rounded-t-lg dark:bg-gray-300">
                <tr className="text-right">
                <th title="Ranking" className="text-[1.4em] p-3 text-left">
                    #
                </th>
                <th title="Team name" className="text-[1.4em] p-3 text-left">
                    Name
                </th>
                <th title="Wins" className="text-[1.4em] p-3">
                    Categrory
                </th>
                <th title="Losses" className="text-[1.4em] p-3"></th>
                </tr>
            </thead>
            <tbody className='w-full'>
                {basket.length > 0 ? (
                basket.map((item, i) => (
                    <tr
                    key={i}
                    className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100"
                    >
                    <td className=" text-[1.3em] px-3 py-2 text-left">
                        <span>{i + 1}</span>
                    </td>
                    <td className=" text-[1.3em] px-3 py-2 text-left">
                        <span>{item?.strDrink}</span>
                    </td>
                    <td className=" text-[1.3em] px-3 py-2">
                        <span>{item?.strCategory}</span>
                    </td>
                    <td className="text-[1.3em] px-3 py-2 flex items-center justify-center ">
                        <div>
                            <button
                            onClick={() => 
                            {
                                setCount(count > 0 ? count - 1 : 1)
                                count == 1 ? delFromBasket(item.idDrink) : count
                            }
                            }
                            className="p-[7px] border rounded-[10px] " >-</button>
                            <span className="inline-block mx-[5px]" >{count}</span>
                            <button 
                            onClick={() => setCount(count + 1)}
                            className="p-[7px] border rounded-[10px] " >+</button>
                        </div>
                    <FaRegTrashAlt onClick={() => delFromBasket(item.idDrink)} className='mx-auto' />
                    </td>
                    </tr>
                ))
                ) : (
                <div>Sebetiniz bosdur</div>
                )}
            </tbody>
            </table>
        </div>
        </div>
    );
    }
