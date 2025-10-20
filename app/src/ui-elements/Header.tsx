



import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../GlobalContext"
import HeaderMenu from "./HeaderMenu"
import { Link, useLocation } from "react-router-dom"
import JsonDebug from "./JsonDebug"

type Props = {
    handleLogout: AnyFunction
}

function Header({
    handleLogout
}: Props) {

    const {
        loggedInUser
    } = useContext(GlobalContext)

    const [showMenu, setShowMenu] = useState(false)
    const location = useLocation()

    useEffect(() => {
        // Reset the state whenever the route changes
        setShowMenu(false)
    }, [location.pathname])




    return <header className={`
    fixed bg-white w-full flex flex-col items-center shadow-md z-50
    ${showMenu ? ' h-screen ' : ' '}
    `}>

        <div className={`w-full h-16 max-w-4xl px-4 py-2 flex flex-row items-center justify-between gap-4`}>
            <Link to={`/`} className={`text-3xl hover:opacity-80 animate-slight-pulse hover:animate-pulse cursor-pointer`}
            >🐝</Link>



            {loggedInUser && <div className={`h-12 w-12 rounded bg-brand-primary text-brand-dark text-3xl hover:opacity-80 hover:animate-pulse cursor-pointer flex items-center justify-center`}
                onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? '✕' : '⊜'}
            </div>}
        </div>

        {loggedInUser && showMenu && <HeaderMenu
            handleLogout={handleLogout}
            setShowMenu={setShowMenu}
        />}
    </header>
}

export default Header