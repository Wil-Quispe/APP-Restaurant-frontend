const MainItems = () => {
  return (
    <div className="flex justify-between items-center rounded-lg shadow-2xl hover:shadow-green-500 px-3 py-1 mb-5 w-full">
      <img
        src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/about-1.jpg"
        alt=""
        className="w-20 rounded"
      />
      <strong className="text-xl">Lomo Saltado</strong>
      <span className="text-green-400 text-lg">124 $</span>
    </div>
  )
}

export default MainItems
