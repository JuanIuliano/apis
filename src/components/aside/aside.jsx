import { Navbar } from './nav'

export function Aside() {
  {
    /* Este aside solo se muestra en desktop ya que tiene la propiedad hidden y pasa a flex cuando pasa md*/
  }
  return (
    <aside className="hidden md:flex md:flex-col md:m-auto md:items-center md:bg-primary md:h-full border-l-2 border-r-2 border-accent p-5 justify-start">
      <Navbar></Navbar>
    </aside>
  )
}
