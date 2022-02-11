const MainItems = ({img,name,price}:{img:string, name:string, price:number}) => {   
  return (
    <div className="flex justify-between items-center rounded-lg shadow-2xl hover:shadow-green-500 px-3 py-1 mb-5 w-full">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded object-cover"
      />
      <strong className="text-xl">{name}</strong>
      <span className="text-green-400 text-lg">{price} $</span>
    </div>
  )
}

export default MainItems
