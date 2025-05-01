import { NavButton } from './navButton'

export function Navbar() {
  return (
    <nav className="flex flex-col h-[400px] gap-3 align-middle justify-center sticky top-0 pt-5">
      <NavButton text='Entradas'></NavButton>
      <NavButton text='Parrilla'></NavButton>
      <NavButton text='Pastas'></NavButton>
      <NavButton text='Pescados'></NavButton>
      <NavButton text='Bebidas'></NavButton>
      <NavButton text='Postres'></NavButton>
    </nav>
  )
}
