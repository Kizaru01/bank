import { TotalBalanceBoxProps } from '@/Types/header'
import React from 'react'

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance} : TotalBalanceBoxProps) => {
  return (
    <section className='flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6'>
    <div className='flex size-full max-w-25 items-center sm:max-w-30'>

        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='text-[18px] font-semibold text-gray-900 '>
               Banks Account: {totalBanks}
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='text-[14px] font-medium text-gray-600'>
                    Total Current Balance
                </p>
                <p className='text-24 lg:text-30 flex-1 font-semibold text-gray-900 flex items-center flex-center '>
                    {totalCurrentBalance}
                </p>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox;