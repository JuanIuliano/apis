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
      <NavButton text="Entrantes" bg={bg}></NavButton>
      <NavButton text="Ensaladas" bg={bg}></NavButton>
      <NavButton
        text="Platos%20Principales%20-%20Carnes%20Rojas"
        bg={bg}
      ></NavButton>
      <NavButton text="Pastas" bg={bg}></NavButton>
      <NavButton text="Postres" bg={bg}></NavButton>
      <NavButton text="Bebidas%20sin%20Alcohol" bg={bg}></NavButton>
    </nav>
  )
}
