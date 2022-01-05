import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { EDIT_BIRTHYEAR, ALL_AUTHORS } from '../queries'

const BirthYear = (props) => {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  const [ changeBirthYear ] = useMutation(EDIT_BIRTHYEAR, {
    refetchQueries: [ { query: ALL_AUTHORS } ],
    onError: (error) => { console.log(error) }
  })

  const submit = (event) => {
      event.preventDefault()

      changeBirthYear({ variables: { name, born } })

      setName('')
      setBorn('')
  }

  if (!props.show) {
    return null
  }

  return (
    <div>
      <h2>Set birthyear</h2>
      <select name="authors" id="authors" value={name} onChange={({ target }) => setName(target.value)}>
        {props.authors.map(author =>
          <option key={author.name} value={author.name}>{author.name}</option>
          )}
      </select>
      <form onSubmit={submit}>
        <div>
          born
          <input
            type='number'
            value={born}
            onChange={({ target }) => setBorn(parseInt(target.value, 10))}
          />
        </div>
        <button>update author</button>
      </form>
    </div>
  )
}

export default BirthYear