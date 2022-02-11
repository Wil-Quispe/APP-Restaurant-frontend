const MainItems = ({img,name,price}:{img:string, name:string, price:number}) => {   
  return (
    <div className="flex justify-between items-center rounded-lg shadow-2xl hover:shadow-green-500 px-3 py-1 mb-5 w-full">
      <img
        // src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/about-1.jpg"
        src={img}
        alt={name}
        className="w-20 rounded"
      />
      <strong className="text-xl">{name}</strong>
      <span className="text-green-400 text-lg">{price} $</span>
    </div>
  )
}

export default MainItems
