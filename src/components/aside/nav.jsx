import { NavButton } from './navButton'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    console.log(`scrolled ${scrolled}`)
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`flex flex-col h-[400px] gap-3 align-middle justify-center
        transition-all ${scrolled ? 'sticky top-14' : 'sticky top-0'}`}
    >
      <NavButton text="Entrantes"></NavButton>
      <NavButton text="Ensaladas"></NavButton>
      <NavButton text="Platos%20Principales%20-%20Carnes%20Rojas"></NavButton>
      <NavButton text="Pastas"></NavButton>
      <NavButton text="Postres"></NavButton>
      <NavButton text="Bebidas%20sin%20Alcohol"></NavButton>
    </nav>
  )
}
