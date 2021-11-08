const Navbar = () => {
  return (
    <div className="flex justify-around pt-5">
      <div>
        <h2 className="text-green-400">Mi Super Logo</h2>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Martes y Miercoles</h1>
      </div>
      <div>
        <span className="bg-green-400 text-white mr-4 py-2 px-5 rounded-lg">
          Hoy
        </span>
        <span className="bg-green-600 text-white mr-4 py-2 px-5 rounded-lg">
          Mañana
        </span>
      </div>
    </div>
  )
}

export default Navbar
