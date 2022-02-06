import { useState } from 'react'

const CardService = () => {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      className={`${
        hover && 'bg-green-400'
      } flex flex-col w-64 px-7 py-5 border rounded-lg shadow-2xl items-center mb-8 mx-2 sm:mb-0`}
    >
      <h2
        className={`${
          hover ? 'text-white' : 'text-green-400'
        } font-bold text-xl mb-3`}
      >
        Chef Principal
      </h2>
      <p className={`${hover && 'text-white'}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate est
        repellendus vitae. Recusandae velit, modi incidunt quidem voluptatem
      </p>
    </div>
  )
}

export default CardService
