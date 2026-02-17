import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'

const HomePage = async () => {

    const loggedIn = await getLoggedInUser();
    if (!loggedIn) redirect("/sign-in");
    
  return (
    <section className='no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll border border-green-500'>
        <div className='no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:pg-12 xl:max-h-screen border border-red-700'>
            <header className='flex flex-col justify-between gap-8 border border-amber-300'>
                <HeaderBox
                    type="Greeting"
                    title="Welcome"
                    user={loggedIn?.name || 'Guest'}
                    subtext="Access and manage your account and transaction efficiently"
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={10000.25}
                />
            </header>
            RECENT TRANSACT
        </div>
        <RightSideBar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 100000}, { currentBalance: 290999}]}
        />
    </section>
  )
}

export default HomePage 