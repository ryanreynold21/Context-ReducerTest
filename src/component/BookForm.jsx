import React, { useState } from 'react'
import { useBookContext } from '../context/BookContext'

const BookForm = () => {
    const {dispatch} = useBookContext();
    const [title,setTitle] = useState('');
    const [auther,setAuther] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch({type:'Add_Book',book:{title,auther}})
        setAuther('');
        setTitle('');
    }
  return (
    <div>
<label htmlFor="my-modal-6" className="btn">Add book</label>
        <input
         type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box relative">
            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <form action="" onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg">Add new books</h3>
              <input
              className=' input input-border input-warning w-full mt-4'
              type="text" 
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              />
              <input
              className=' input input-border input-warning w-full mt-4'
              type="text" 
              placeholder='Author'
              value={auther}
              onChange={(e) => setAuther(e.target.value)}
              required
              />
             <button className=' btn' type='submit'>Add</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default BookForm

//