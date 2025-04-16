import { Navbar } from './nav'

export function Aside() {
  return (
   
    <aside className="hidden md:flex md:flex-col md:m-auto md:items-center md:bg-slate-800 md:h-full">
      <h1 className='text-center'>ASIDE</h1>
      <Navbar></Navbar>
    </aside>
  )
}
