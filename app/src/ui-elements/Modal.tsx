
// import XButton from './XButton'

type Props = {
  children: any
  // setShowModal?: any
  // showCloseButton?: boolean
  // closeButtonValue?: any
}

function Modal({
  children,
  // setShowModal,
  // showCloseButton,
  // closeButtonValue = false
}: Props) {

  return <div className={`fixed top-0 left-0 min-h-full w-full flex items-center justify-center p-6 bg-black bg-opacity-30 z-50`}
  style={{
    height: '100%',
    minHeight: '100vh',
  }}
  >
    <div
      className="rounded w-full max-w-4xl px-4 py-4 bg-white"
      // style={{
      //   maxHeight: '80vh'
      // }}
    >



      <div className={`relative border-none`}>

        {/* {setShowModal && showCloseButton && <div className={`absolute right-0 top-0 m-1`}>
          <XButton clickFunction={() => {
            setShowModal(closeButtonValue)
          }} />
        </div>} */}
        {children}
      </div>
    </div>
  </div>
}
export default Modal