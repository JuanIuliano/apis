import { NavButton } from './navButton'
import { useStickyObserver } from '../../hooks/useIntersection'
export function MobileNav() {
  const { isSticky, stickyRef } = useStickyObserver()
  const bg = isSticky ? 'white' : 'secondary'
  return (
    <nav
      ref={stickyRef}
      className={`transition-all duration-300 ${
        isSticky
          ? 'bg-[#51524e] opacity-100 border-none shadow-md'
          : 'bg-primary border-t border-b border-accent'
      } md:hidden flex min-w-full flex-row overflow-scroll gap-[5%] pl-2 sticky top-0 z-50`}
    >
      <NavButton text="Entradas" bg={bg}></NavButton>
      <NavButton text="Parrilla" bg={bg}></NavButton>
      <NavButton text="Pastas" bg={bg}></NavButton>
      <NavButton text="Pescados" bg={bg}></NavButton>
      <NavButton text="Bebidas" bg={bg}></NavButton>
      <NavButton text="Postres" bg={bg}></NavButton>
    </nav>
  )
}
