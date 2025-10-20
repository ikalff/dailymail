

type Props = {
  children: any
  fullwidth?: boolean
}


function Card({
  children,
  fullwidth = false
}: Props) {

  return <div className={`${fullwidth && 'w-full'} border border border-gray-200 p-4 bg-white rounded shadow flex flex-col gap-2 items-start`}
  >
    {children}
  </div>
}

export default Card