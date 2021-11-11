const Ofert = ({ ofert }: { ofert: string }) => {
  return (
    <div className="cursor-pointer bg-white rounded-lg py-3 mb-3 w-11/12 text-center m-auto">
      <a className=" border-b border-green-400">{ofert}</a>
    </div>
  )
}

export default Ofert
