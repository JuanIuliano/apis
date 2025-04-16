import { NavButton } from './navButton'

export function Navbar() {
  return (
    <nav className="flex flex-col bg-slate-400 gap-3 align-middle justify-center">
      <NavButton></NavButton>
      <NavButton></NavButton>
      <NavButton></NavButton>
    </nav>
  )
}
