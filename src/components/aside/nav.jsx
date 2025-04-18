import { NavButton } from './navButton'

export function Navbar() {
  return (
    <nav className="flex flex-col gap-3 align-middle justify-center">
      <NavButton></NavButton>
      <NavButton></NavButton>
      <NavButton></NavButton>
    </nav>
  )
}
