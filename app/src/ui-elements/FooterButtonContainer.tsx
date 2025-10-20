



import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../GlobalContext"
import HeaderMenu from "./HeaderMenu"
import { Link, useLocation } from "react-router-dom"
import JsonDebug from "./JsonDebug"

type Props = {
    children: React.ReactNode
}

function FooterButtonContainer({
    children
}: Props) {

    const {
    } = useContext(GlobalContext)

    return <div className={`z-10 fixed bg-white w-full bottom-0 left-0 flex flex-col items-center`}>
        <div className={`w-full h-16 max-w-4xl px-4 py-2 flex flex-row justify-center items-center gap-4`}>
            {children}
        </div>
    </div>
}

export default FooterButtonContainer