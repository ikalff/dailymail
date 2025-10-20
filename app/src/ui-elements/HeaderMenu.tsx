
import { useContext } from 'react'
import Button from '../formfields/Button'
import { GlobalContext } from '../GlobalContext'
import { Link, useNavigate } from 'react-router-dom'

type Props = {
    handleLogout: AnyFunction
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function HeaderMenu({
    handleLogout,
    setShowMenu
}: Props) {


    const {
        loggedInUser
    } = useContext(GlobalContext)
    const navigate = useNavigate()


    return <div className={`animate-fadein w-full z-50 top-0 left-0 bg-brand-primary h-full flex flex-col items-center justify-start gap-4`}>

        <div className={`h-full w-full max-w-4xl px-4 py-4 flex flex-col items-center justify-start gap-2`}>


            {loggedInUser && <div className={`flex flex-row items-center justify-center gap-4 px-0 py-4`}>
                <div className={`bg-white p-2 text-2xl h-12 w-12 flex items-center justify-center`}
                style={{borderRadius: '50%'}}
                >👤</div>
                <div className={`flex flex-col items-start justify-center`}>
                    <p className={`font-bold`}>{loggedInUser.userName}</p>
                    <p className={``}>{loggedInUser.email}</p>
                </div>
            </div>}


            <Button
                onClick={() => {
                    setShowMenu(false)
                    navigate(`/`)
                }}
                text="Home"
                variant='white'
                size='big'
            />
            <Button
                onClick={() => {
                    setShowMenu(false)
                    navigate(`/account-settings`)
                }}
                text="Account settings"
                variant='white'
                size='big'
            />
            <Button
                onClick={() => {
                    setShowMenu(false)
                    navigate(`/simulate-event`)
                }}
                text="Simulate event"
                variant='white'
                size='big'
            />
            <Button
                onClick={() => {
                    setShowMenu(false)
                    handleLogout()
                }}
                text="Log out"
                variant='white'
                size='big'
            />


            {/* <p>Connection: {connectionState === 'connected' ? '🟢' : '🔴'}</p> */}
        </div>
    </div>
}
export default HeaderMenu