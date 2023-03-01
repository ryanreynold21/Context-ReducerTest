import React from 'react'
import Nav from './component/Nav';
import './App.css'
import BookList from './component/BookList'
import BookForm from './component/BookForm'

const App = () => {
  return (
    <>
    <div className=" h-screen bg-purple-900">
      <Nav />
      <BookList />
      <BookForm />
    </div>
    </>
  )
}

export default App
