
type Props = {
  children: any
  size?: 'normal' | 'large' | 'small'
  alignment?: 'center' | 'left'
  icon?: boolean
  fullwidth?: boolean
  onClick?: (...args: any[]) => void
}

function YellowAlert({
  children,
  size = 'normal',
  alignment = 'center',
  icon = false,
  fullwidth = false,
  onClick
}: Props) {

  return <div
    onClick={onClick}
    className={` rounded border bg-yellow-100 border-yellow-500 text-yellow-700 flex flex-col
    ${onClick && ' hover:opacity-80 cursor-pointer '}
    ${fullwidth && ' w-full '}
    ${alignment === 'center' ? 'items-center text-center ' : ' text-left '}
    ${size === 'small' && ' text-xs px-2 py-1 '}
    ${size === 'normal' && ' text-sm px-4 py-2 '}
    ${size === 'large' && ' text-sm px-4 py-2 '}
    `}>
    <div className={`flex flex-row items-center gap-4`}>
      {icon && <img
        src={`/icons/tip-icon.png`}
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
export default YellowAlert