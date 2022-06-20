import { useQuery } from '@apollo/client'
import React from 'react'
import { USER } from '../../graphql/query'

const Profile = ({ id, goTo }: { id: string; goTo: () => void }) => {
  const { data } = useQuery(USER, { variables: { _id: id } })
  return (
    <>
      <a onClick={goTo} className='bg-gray-800 flex text-sm rounded-full '>
        <span className='flex justify-center items-center hover:cursor-pointer border-white border-2 bg-green-400 text-white h-10 w-10 rounded-full'>
          {data?.user.name.split('')[0].toUpperCase()}
        </span>
      </a>
    </>
  )
}

export default Profile
