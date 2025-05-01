import { MobileNav } from './mobileNav'
import { Navbar } from './nav'

export function Aside() {
  return (
    <aside className="hidden md:flex md:flex-col md:m-auto md:items-center md:bg-primary md:h-full border-l-2 border-r-2 border-accent p-5 justify-start">
      <Navbar></Navbar>
    </aside>
  )
}
