import { useState } from 'react'

const CardComments = () => {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex flex-col justify-between px-4 py-2 mx-5 rounded-md ${
        hover ? 'bg-green-400' : 'bg-gray-100'
      }`}
    >
      <div>
        <h3 className={`${hover && 'text-white'}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          atque Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur atque
        </h3>
      </div>
      <div className="flex self-center mt-4">
        <div>
          <img
            src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/testimonial-1.jpg"
            className="rounded-full w-10 mr-2"
            alt=""
          />
        </div>
        <div>
          <h3
            className={`font-bold ${hover ? 'text-white' : 'text-green-500'}`}
          >
            Luis Quispe
          </h3>
          <h3 className={`${hover && 'text-white'}`}>IT person</h3>
        </div>
      </div>
    </div>
  )
}

export default CardComments
