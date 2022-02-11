const CardChef = ({name, ocupation}:{name:string, ocupation: string}) => {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-4 shadow-2xl border rounded-lg mb-4 sm:mr-4 sm:mb-0 hover:shadow-green-400 hover:shadow-2xl">
      <img
        src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/about-1.jpg"
        alt=""
        className="rounded-full w-36"
      />
      <strong className="mt-4 text-green-500">{name}</strong>
      <h2>{ocupation}</h2>
    </div>
  )
}

export default CardChef
