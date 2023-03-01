import React from 'react'
import { useBookContext } from '../context/BookContext'

const Bookdetail = ({book}) => {
    const {dispatch} = useBookContext()
  return (
    <div>
      <li
        className=' cursor-grab rounded-md bg-indigo-400 text-red-800 p-6 mt-4'
       onClick={() => dispatch({type:'Remove_Book',id:book.id})}>
        <div className=" hover:line-through">{book.title}</div>
        <div className=" hover:line-through">{book.auther}</div>
      </li>
    </div>
  )
}

export default Bookdetail
