import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  // const [data, setData]= useState({})

  // useEffect(() => {
  //   fetch('https://api.github.com/users/umesh-joshi')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //     })
  // }, [])

  const data= useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers} 
      <img src={data.avatar_url} width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/umesh-joshi')
  console.log(response)
  return response.json()
}