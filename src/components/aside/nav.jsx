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
  }, [scrolled])

  return (
    <nav
      className={`flex flex-col h-[400px] gap-3 align-middle justify-center ${scrolled ? 'sticky top-1/4' : 'sticky top-0'}`}
    >
      <NavButton text="Entradas"></NavButton>
      <NavButton text="Parrilla"></NavButton>
      <NavButton text="Pastas"></NavButton>
      <NavButton text="Pescados"></NavButton>
      <NavButton text="Bebidas"></NavButton>
      <NavButton text="Postres"></NavButton>
    </nav>
  )
}
