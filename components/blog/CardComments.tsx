import { useState } from 'react'

const CardComments = ({
  name,
  body,
  ocupation,
  img,
}: {
  name: string
  body: string
  ocupation: string
  img: string
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex flex-col justify-between px-4 py-2 mx-5 rounded-md mb-8 sm:m-none ${
        hover ? 'bg-green-400' : 'bg-gray-100'
      }`}
    >
      <div>
        <h3 className={`${hover && 'text-white'}`}>{body}</h3>
      </div>
      <div className="flex self-center mt-4">
        <div>
          <img src={img} className="rounded-full w-10 mr-2" alt={name} />
        </div>
        <div>
          <h3
            className={`font-bold ${hover ? 'text-white' : 'text-green-500'}`}
          >
            {name}
          </h3>
          <h3 className={`${hover && 'text-white'}`}>{ocupation}</h3>
        </div>
      </div>
    </div>
  )
}

export default CardComments
