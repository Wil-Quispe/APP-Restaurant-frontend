import { useRouter } from 'next/router'

const ActiveLink = ({ text, href }: { text: string; href: string }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(href)
  }
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        router.asPath === href
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {text}
    </a>
  )
}

export default ActiveLink
