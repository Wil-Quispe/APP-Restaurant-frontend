const Input = ({
  text,
  name,
  type,
}: {
  text: string
  name: string
  type?: string
}) => {
  return (
    <>
      <label className="flex justify-between mb-2">
        <span>{text}:</span>
        <input
          className="border rounded-lg border-green-400 text-center"
          name={name}
          type={type}
        />
      </label>
    </>
  )
}

export default Input
