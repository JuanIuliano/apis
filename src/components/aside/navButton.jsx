export function NavButton({ text, bg = 'secondary' }) {
  const bgClasses = {
    white: 'bg-white',
    secondary: 'bg-secondary',
  }

  let visualizedText = text

  if (text == 'CarnesRojas') {
    visualizedText = 'Platos Principales'
  } else if (text == 'BebidasSinAlcohol') {
    visualizedText = 'Bebidas'
  }

  return (
    <a
      className={`rounded-sm py-[1%] my-3 md:pt-0 md:my-0 ${bgClasses[bg]} flex flex-grow text-text font-tittle font-semibold w-[100%] min-w-[fit-content] max-w-[100%] px-9 justify-center border-[1px] border-secondary cursor-pointer hover:bg-white hover:text-black hover:border-accent md:rounded-xl items-center`}
      href={'#' + text.toLowerCase()}
    >
      {visualizedText}
    </a>
  )
}
