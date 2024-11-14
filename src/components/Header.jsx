import { useLocation } from 'react-router-dom';
import Button  from "./Button"
import { TIajuda } from "../assets";
import { navigation } from "../constants";

const Header = () => {
    const pathname = useLocation();


  return (
    <div className="fixed top-0 left-0 z-50 bg-w-3/90 border-b border-b-1 lg:backdrop-blur-sm w-full">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a href="#hero" className="block w-[12rem] xl:mr-8">
                <img src={TIajuda} alt="TIajuda" width={190} height={40}/>
            </a>

            <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-w-3 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item =>(
                        <a key={item.id} href={item.url} className={`block relative font-roboto text-2xl uppercase transition-colors hover:text-b-5  ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xl lg:font-semibold} ${item.url === pathname.hash ? "z-2 lg:text-w-5" : "lg:text-w-5/50"} lg:leading-5 xl:px-12`}>
                          {item.title}  
                        </a>
                    )))}
                </div>
            </nav>

            <Button className="hidden lg:flex" href="#login">
                Login
            </Button>
        </div>
    </div>
  )
}

export default Header