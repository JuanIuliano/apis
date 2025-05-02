export function NavButton({ text, bg = 'secondary' }) {
  const bgClasses = {
    white: 'bg-white',
    secondary: 'bg-secondary',
  }

  let visualizedText = text

  if(text == 'Bebidas%20sin%20Alcohol'){
    visualizedText = 'Bebidas'
  }else if(text == 'Platos%20Principales%20-%20Carnes%20Rojas'){
    visualizedText = 'Platos Principales'
  }
  
  return (
    <a
      className={`rounded-sm py-[1%] my-3 md:pt-0 md:my-0 ${bgClasses[bg]} flex flex-grow text-text font-tittle font-semibold w-[100%] min-w-[fit-content] max-w-[100%] px-11 justify-center border-[1px] border-secondary cursor-pointer hover:bg-white hover:text-black hover:border-accent md:rounded-xl items-center`}
      href={"#"+text.toLowerCase()}
    >
      {visualizedText}
    </a>
  )
}
