const Sidebar = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-green-300 rounded-lg p-3 mb-3">
        <h1 className="text-center text-white">Ofertas</h1>
      </div>
      <div>
        <div className="bg-white rounded-lg py-3 mb-3 w-11/12 text-center m-auto">
          <span>Ofertas solo Hoy!</span>
        </div>
        <div className="bg-white rounded-lg py-3 mb-3 w-11/12 text-center m-auto">
          <span>Ofertas solo Hoy! Ofertas solo Hoy! Ofertas solo Hoy!</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
