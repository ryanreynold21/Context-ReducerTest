import React from 'react'
import { useBookContext } from '../context/BookContext'

const Nav = () => {
    const {state} = useBookContext()
  return (
    <div className=' bg-indigo-300 p-8 text-center text-orange-700'>
      <h1 className=' text-3xl font-bold'>AKW Reading List</h1>
      <p className=' font-bold tracking-wider'>Currently you have ({state.length}) books to get through</p>
    </div>
  )
}

export default Nav
