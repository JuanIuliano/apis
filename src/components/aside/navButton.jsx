export function NavButton({text}) {
  return (
    <button className="bg-secondary flex flex-grow text-text font-tittle font-semibold w-[100%] min-w-[fit-content] max-w-[100%] px-11 justify-center border-[1px] hover:bg-white hover:text-black hover:border-accent rounded-xl items-center">
      {text}
    </button>
  )
}
