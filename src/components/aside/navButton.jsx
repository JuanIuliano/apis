export function NavButton({ text, bg = 'secondary' }) {
  const bgClasses = {
    white: 'bg-white',
    secondary: 'bg-secondary',
  }
  return (
    <button
      className={`rounded-sm py-[1%] my-3 md:pt-0 md:my-0 ${bgClasses[bg]} flex flex-grow text-text font-tittle font-semibold w-[100%] min-w-[fit-content] max-w-[100%] px-11 justify-center border-[1px] border-secondary hover:bg-white hover:text-black hover:border-accent md:rounded-xl items-center`}
    >
      {text}
    </button>
  )
}
