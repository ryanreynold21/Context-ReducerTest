import React from 'react'
import { useBookContext } from '../context/BookContext'
import Bookdetail from './Bookdetail'

const BookList = () => {
    const {state} = useBookContext()
    console.log(state)
  return state?.length ? (
    <div>
      <ul className=' list-disc'>
        {state?.map(book => <Bookdetail book={book} key={book.id} /> )}
      </ul>
    </div>
  ) : (
    <div className=" border border-indigo-300 p-6 rounded-lg text-slate-200 text-center mt-60">No books to read . It's a free time :) </div>
  )
}

export default BookList
