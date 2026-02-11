import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const HomePage = () => {

    const loggedIn = { firstName: 'Charles'}
  return (
    <section className='no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll'>
        <div className='flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll no-scrollbar'>
            <header className='flex flex-col justify-between gap-8'>
                <HeaderBox
                    type="Greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transaction efficiently"
                />
                <TotalBalanceBox
                    Accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1225215412}
                />
            </header>
        </div>
    </section>
  )
}

export default HomePage 