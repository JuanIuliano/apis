import { NavButton } from './navButton'

export function Navbar() {
  return (
    <nav className="bg-slate-400 flex flex-col gap-3 align-middle justify-center items-center mb-9 p-56">
      nav
      <NavButton></NavButton>
      <NavButton></NavButton>
      <NavButton></NavButton>
    </nav>
  )
}
