
type Props = {
  clickFunction: any
}


function XButton({
  clickFunction
}: Props) {
  return <button
    onClick={clickFunction}
    className={`outline-none border-none cursor-pointer rounded bg-gray-300 w-6 h-6 font-white flex items-center justify-center hover:opacity-80`}
  >✕</button>
}

export default XButton