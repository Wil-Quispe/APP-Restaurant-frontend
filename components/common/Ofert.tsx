const Ofert = ({ ofert }: { ofert: string }) => {
  return (
    <div className="cursor-pointer bg-white rounded-lg py-3 mb-3 w-full text-center m-auto sm:mr-2 md:mr-2">
      <a className=" border-b border-green-400">{ofert}</a>
    </div>
  )
}

export default Ofert
