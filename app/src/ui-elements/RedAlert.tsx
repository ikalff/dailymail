

type Props = {
  children: any
  size?: 'normal' | 'large' | 'small'
  alignment?: 'center' | 'left'
  icon?: boolean
  fullwidth?: boolean
}

function RedAlert({
  children,
  size = 'normal',
  alignment = 'center',
  icon = false,
  fullwidth = false
}: Props) {

  return <div
    className={` rounded border bg-red-100 border-red-400 text-red-800 flex flex-col
    ${fullwidth && ' w-full '}
    ${alignment === 'center' ? 'items-center text-center ' : ' text-left '}
    ${size === 'small' && ' text-xs px-2 py-1 '}
    ${size === 'normal' && ' text-sm px-4 py-2 '}
    ${size === 'large' && ' text-sm px-4 py-2 '}
    `}>
    <div className={`flex flex-row items-center gap-4`}>
      {icon && <img
        src={`/icons/red-alert-icon.png`}
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
export default RedAlert