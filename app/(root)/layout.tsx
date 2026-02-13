import Sidebar from "@/components/LeftSidebar";
import MobileNavbar from "@/components/MobileNavbar";
import Image from "next/image";
export default function RootLayout({ children } : Readonly<{
  children: React.ReactNode;}>) {

    const loggedIn = { firstName: 'Charles', lastName: 'Evangelista'};

  return (
    <main className="flex h-screen w-full">  
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
            <div className="root-layout shadow-creditcard border-2">
              <Image
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="Logo"
              />
              <div>
                <MobileNavbar user={loggedIn}/>
              </div>
            </div>  
             {children}
        </div>
    </main>
  );
}
