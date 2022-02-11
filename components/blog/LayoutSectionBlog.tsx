import { ReactNode } from 'react'

const LayoutSectionBlog = ({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) => {
  return (
    <div className="flex flex-col items-center mb-52">
      <div className="mb-12">
        <strong className="text-2xl">{title}</strong>
      </div>
      {children}
    </div>
  )
}

export default LayoutSectionBlog
