const Input = ({
  text,
  name,
  type,
  defaultValue,
}: {
  text: string
  name: string
  type?: string
  defaultValue?: string | number
}) => {
  return (
    <>
      <label className="flex justify-between mb-2">
        <span className="mr-2">{text}:</span>
        <input
          className="border rounded-lg border-green-400 text-center"
          name={name}
          type={type}
          defaultValue={defaultValue}
        />
      </label>
    </>
  )
}

export default Input
