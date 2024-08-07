import logo from '/logo.svg'

export function Header() {
  return (
    <header className="flex flex-col flex-1 justify-center items-center px-20 py-2 bg-[--gray-700]">
      <img  
        src={logo} alt="" />
    </header>
  )
}