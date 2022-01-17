import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import BirthYear from './components/BirthYear'
import LoginForm from './components/LoginForm'
import { useQuery, useApolloClient } from '@apollo/client'
import { ALL_AUTHORS, ALL_BOOKS } from './queries'

const App = () => {
  const [page, setPage] = useState('authors')
  const [token, setToken] = useState(null)

  const authors = useQuery(ALL_AUTHORS)
  const books = useQuery(ALL_BOOKS)
  const client = useApolloClient()

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  if (authors.loading || books.loading) {
    return <div>loading...</div>
  }

  if (!token) {
    return (
      <div>
        <div>
          <button onClick={() => setPage('authors')}>authors</button>
          <button onClick={() => setPage('books')}>books</button>
          <button onClick={() => setPage('login')}>login</button>
        </div>
  
        <Authors
          show={page === 'authors'}
          authors={authors.data.allAuthors}
        />
  
        <BirthYear 
          show={page === 'authors'}
          authors={authors.data.allAuthors}
        />
  
  
        <Books
          show={page === 'books'}
          books={books.data.allBooks}
        />
  
        <LoginForm
          show={page === 'login'}
          setToken={setToken}
        />
  
      </div>
    )
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={logout}>logout</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors
        show={page === 'authors'}
        authors={authors.data.allAuthors}
      />

      <BirthYear 
        show={page === 'authors'}
        authors={authors.data.allAuthors}
      />


      <Books
        show={page === 'books'}
        books={books.data.allBooks}
      />

      <NewBook
        show={page === 'add'}
      />

    </div>
  )
}

export default App