
import { Link } from 'react-router-dom'


type Props = {
  onClick?: any
  internalLinkUrl?: string
  externalLinkUrl?: string
  text: string
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'warning' | 'gray' | 'white' | 'dark'
  size?: 'big' | 'small'
  fullwidth?: boolean
  align?: string
  sameWindow?: boolean
  wordWrap?: boolean
}

function Button({
  onClick,
  internalLinkUrl,
  externalLinkUrl,
  text,
  disabled = false,
  variant = 'primary',
  size,
  fullwidth = true,
  align = 'center',
  sameWindow = false,
  wordWrap = false
}: Props) {


  const classString = `
  font-brand text-brand-dark inline-block font-bold text-lg rounded hover:opacity-90
  ${wordWrap ? '' : ' whitespace-nowrap ' }
  ${fullwidth === true && 'w-full'}
  ${size !== 'small' && size !== 'big' && 'text-sm px-3 py-2'}
  ${size === 'big' && 'text-lg px-5 py-3'}
  ${size === 'small' && 'text-xs px-3 py-2'}
  ${variant === 'white' ? 'bg-white text-brand-dark' : ''}
  ${variant === 'gray' ? 'bg-gray-300 text-gray-700' : ''}
  ${variant === 'warning' ? 'bg-red-200 text-red-900' : ''}
  ${variant === 'primary' ? 'bg-brand-blue text-white' : ''}
  ${align === 'left' ? 'text-left' : 'text-center'}
  ${disabled ? ' 	cursor: auto ' : ' cursor-pointer '}
  `




  return <>
    {internalLinkUrl && !disabled && <Link
      to={internalLinkUrl}
      className={classString}
    >{text}</Link>}

    {externalLinkUrl && !disabled && <a
      href={externalLinkUrl}
      target={sameWindow ? '_self' : '_blank'}
      className={classString}
    >{text}</a>}

    {onClick && !disabled && <button
      onClick={onClick}
      className={classString}
    >{text}</button>}

    {disabled && <div
      className={classString}
    >{text}</div>}

  </>
}
export default Button