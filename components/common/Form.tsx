import { FormEvent, ReactNode } from 'react'

const Form = ({
  action,
  text,
  children,
}: {
  action: (e: FormEvent<HTMLFormElement>) => Promise<void>
  text: string
  children: ReactNode
}) => {
  return (
    <form className="flex flex-col my-10 md:w-4/12" onSubmit={action}>
      {/* // <form className="flex flex-col my-10" onSubmit={action}> */}
      <h1 className="self-center mb-5 font-bold text-2xl text-green-400">
        {text}
      </h1>
      {children}
    </form>
  )
}

export default Form
