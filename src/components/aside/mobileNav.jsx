import { NavButton } from './navButton'
import { useStickyObserver } from '../../hooks/useIntersection'
export function MobileNav() {
  {
    /*Componente del nav mobile*/
  }
  const { isSticky, stickyRef } = useStickyObserver()
  const bg = isSticky ? 'white' : 'secondary'
  {
    /*Esta función asigna la ref devuelta por el custom hook 'useStickyOberver al nav
    cuando el nav está sticky, el custom hook lo detecta y cambia el estado de isSticky a true
    cuando el estado es true, el color de los botones y el bg del nav cambian para mejor visibilidad*/
  }
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
        text="CarnesRojas"
        bg={bg}
      ></NavButton>
      <NavButton text="Pastas" bg={bg}></NavButton>
      <NavButton text="Postres" bg={bg}></NavButton>
      <NavButton text="BebidasSinAlcohol" bg={bg}></NavButton>
    </nav>
  )
}
