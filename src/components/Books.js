import React, { useState } from 'react'

const Books = (props) => {
  const [filter, setFilter] = useState('')

  if (!props.show) {
    return null
  }

  const books = props.books
  console.log(books)

  const genres = books.map(b => b.genres)
  const uniqueGenres = [...new Set(genres.flat())]
  const filteredBooks = books.filter(b => b.genres.includes(filter))

  if (!filter) {
    return (
      <div>
        <h2>books</h2>
  
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>
                author
              </th>
              <th>
                published
              </th>
            </tr>
            {books.map(a =>
              <tr key={a.title}>
                <td>{a.title}</td>
                <td>{a.author.name}</td>
                <td>{a.published}</td>
              </tr>
            )}
          </tbody>
        </table>
        {uniqueGenres.map(g =>
          <button onClick={({ target }) => setFilter(target.value)} value={g} key={g}>
            {g}
          </button>)}
      </div>
    )
  }

  return (
    <div>
      <h2>books</h2>
     
      <p>in genre <b>{filter}</b></p>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {filteredBooks.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
      {uniqueGenres.map(g =>
        <button onClick={({ target }) => setFilter(target.value)} value={g} key={g}>
          {g}
        </button>)}
    </div>
  )
}

export default Books