import Link from "next/link";
const MainItems = ({img,name,price}:{img:string, name:string, price:number}) => {   
  return (
    <Link href="/comidas">
      <div className="flex justify-between items-center rounded-lg shadow-2xl hover:shadow-green-500 px-3 py-1 mb-5 w-full">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded object-cover"
      />
      <strong className="text-xl">{name}</strong>
      <span className="text-green-400 text-2xl font-bold">{price} $</span>
    </div>
    </Link>
  )
}

export default MainItems
