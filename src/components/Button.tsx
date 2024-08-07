
//Encontrei essa biblioteca para conseguir utilizar o tailwind com as props do react, ficou meio confuso, mas deu para chegar no resultado desejado.
import classNames from "classnames"

type Props = 
  React.DetailedHTMLProps<React.       
  ButtonHTMLAttributes<HTMLButtonElement>, 
  HTMLButtonElement
>

export function Button({children, ...rest}: Props) {
  return (
    <button 
      className=
        {classNames('flex items-center justify-center h-12 p-4 bg-[--blue-dark] text-[--gray-100] rounded gap-2 font-bold text-sm hover:bg-[--blue]', classNames)}
        {...rest}
      >
      {children}
    </button>
  )
}