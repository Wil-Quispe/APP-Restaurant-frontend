const Input = ({
  text,
  name,
  required,
  type,
  defaultValue,
}: {
  text: string
  name: string
  required?: boolean
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
          required={required || true}
        />
      </label>
    </>
  )
}

export default Input
