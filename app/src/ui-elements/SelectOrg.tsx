import { useContext } from "react"
import { GlobalContext } from "../GlobalContext"
import Button from "../formfields/Button"


type Props = {

}


function SelectOrg({

}: Props) {

    const {
        loggedInUser
    } = useContext(GlobalContext)

  



    return <div className={`flex flex-col gap-4`}>

        <h3 className={`font-brand text-brand-dark text-xl`}>Please select an organisation: </h3>
        {loggedInUser.organisationsForUser && Object.keys(loggedInUser.organisationsForUser).length > 1 &&
            <div className={`flex flex-col items-center justify-center gap-2`}>
                {Object.values(loggedInUser.organisationsForUser).map((organisation: any, index: number) => {
                    return <Button
                        onClick={() => { }}
                        text={organisation.organisationName}
                        variant={`white`}
                    />
                })}
            </div>}
    </div>
}

export default SelectOrg