
import Button from '../formfields/Button'
import Spinner from './Spinner'

type Props = {
}

function Connecting({
}: Props) {

    return <div className={`w-full h-screen flex items-center justify-center`}>
       <Spinner size={`large`}>Connecting...</Spinner>
    </div>
}
export default Connecting