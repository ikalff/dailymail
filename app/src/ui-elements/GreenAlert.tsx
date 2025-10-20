
type Props = {
  children: any
  size?: 'normal' | 'large' | 'small'
  alignment?: 'center' | 'left'
  icon?: boolean
  fullwidth?: boolean
  onClick?: (...args: any[]) => void
}

function GreenAlert({
  children,
  size = 'normal',
  alignment = 'center',
  icon = false,
  fullwidth = false,
  onClick
}: Props) {

  return <div
    onClick={onClick}
    className={` rounded border bg-green-100 border-green-400 text-green-800 flex flex-col
    ${onClick && ' hover:opacity-80 cursor-pointer '}
    ${fullwidth && ' w-full '}
    ${alignment === 'center' ? 'items-center text-center ' : ' text-left '}
    ${size === 'small' && ' text-xs px-2 py-1 '}
    ${size === 'normal' && ' text-sm px-4 py-2 '}
    ${size === 'large' && ' text-sm px-4 py-2 '}
    `}>
    <div className={`flex flex-row items-center gap-4`}>
      {icon && <img
        src={`/icons/green-tick-icon.png`}
        alt={''}
        className={`
      ${size === 'small' && ' w-5 '}
      ${size === 'normal' && ' w-6 '}
      ${size === 'large' && ' w-8 '}
      `}
      />}
      {children}
    </div>
  </div>
}
export default GreenAlert