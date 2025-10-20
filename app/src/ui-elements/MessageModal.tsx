



import Modal from "./Modal"
import Button from "../ui-elements/Button"
import Spinner from "./Spinner"
import XButton from "./XButton"

type Props = {
    showModal: ObjectStringKeyAnyValue
    setShowModal: any
}


function MessageModal({
    showModal,
    setShowModal
}: Props) {





    return <Modal>
        <div className={`w-full flex flex-col gap-4 items-center`}>

            {showModal["spinner"] && <div className={`absolute right-0 top-0 m-1`}>
                <XButton clickFunction={() => setShowModal(false)} />
            </div>}

            {showModal["error"] && <div className={`w-full flex flex-col gap-2 items-center`}>
                <p className={`text-4xl`}>⛔️</p>
                <p className={``}>Error: {showModal["error"]}</p>
            </div>}

            {showModal["success"] && <div className={`w-full flex flex-col gap-2 items-center`}>
                <p className={`text-4xl`}>✅</p>
                <p className={``}>{showModal["success"]}</p>
            </div>}

            {showModal["message"] && <div className={`w-full flex flex-col gap-2 items-center`}>
                <p className={`text-4xl`}>💬</p>
                <p className={``}>{showModal["message"]}</p>
            </div>}

            {showModal["warning"] && <div className={`w-full flex flex-col gap-2 items-center`}>
                <p className={`text-6xl`}>⚠️</p>
                <p className={`text-center`}>{showModal["warning"]}</p>
            </div>}

            {showModal["spinner"] && <div className={`w-full flex flex-col gap-2 items-center`}>
                <Spinner size="large">{showModal["spinner"]}</Spinner>
            </div>}

            {!showModal["spinner"] && <Button
                onClick={() => setShowModal(null)}
                text={`OK`}
                variant={`primary`}
                size={`big`}
                fullwidth={true}
            />}

        </div>
    </Modal>
}

export default MessageModal