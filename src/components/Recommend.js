import React from "react";

const Recommend = (props) => {
    if (!props.show) {
        return null
    }

    const user = props.user
    const genre = user.favoriteGenre
    const formattedGenre = genre.charAt(0).toUpperCase() + genre.slice(1)
    console.log(formattedGenre)
    const books = props.books
    console.log(books)
    const filteredBooks = books.filter(b => b.genres.includes(formattedGenre))

    return (
        <div>
          <h2>recommendations</h2>

          <p>books in your favorite genre <b>{user.favoriteGenre}</b></p> 

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
              {filteredBooks.map(b =>
                <tr key={b.title}>
                    <td>{b.title}</td>
                    <td>{b.author.name}</td>
                    <td>{b.published}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )

}

export default Recommend