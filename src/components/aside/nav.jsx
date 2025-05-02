import { NavButton } from './navButton'
import { useState, useEffect } from 'react'

export function Navbar() {
  return (
    <nav
      className="pt-16 flex flex-col h-[450px] gap-3 align-middle justify-center
        transition-all sticky top-0"
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
