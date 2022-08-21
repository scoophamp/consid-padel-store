// I choose to make the navbar simple and not connected with any data from cms for simplicity

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

export default function Navbar() {

        return (
            <nav className="flex text-white filter drop-shadow-md bg-black px-4 py-4 h-20 items-center">
              
                
                <div className="w-9/12 flex justify-start items-center">                     
    
                    <div className="">
                    <NavLink to="/">
                            HOME
                        </NavLink>
                        <NavLink to="/products">
                            PRODUCTS
                        </NavLink>
                        <NavLink to="/about">
                            ABOUT
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
    }

    