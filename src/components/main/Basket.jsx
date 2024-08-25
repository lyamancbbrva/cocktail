import React from 'react'
import { HiXMark } from "react-icons/hi2";


export default function Basket() {

    return (

        <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
            <div className='flex items-center justify-between'>
            <h2 className='p-[10px] text-[1.6em] font-bold'>Basket</h2>
            <HiXMark className='text-[1.7em]'/>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="rounded-t-lg dark:bg-gray-300">
                        <tr className="text-right">
                            <th title="Ranking" className="p-3 text-left">#</th>
                            <th title="Team name" className="p-3 text-left">Name</th>
                            <th title="Wins" className="p-3">Categrory</th>
                            <th title="Losses" className="p-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                            <td className="px-3 py-2 text-left">
                                <span>1</span>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <span>MIA</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>31</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
