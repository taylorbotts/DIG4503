import React from 'react'

class NameSearch extends React.Component {

  readName = (event) => {

    event.preventDefault()

    let input = document.querySelector('#name')

    fetch('http://localhost:3000/api/pokemon/name/' + input.value)
      .then((res) => {
        return res.json()
      })
      .then((result) => {
        this.props.callback(result)
      })

    input.value = ''
  }

  render() {
    return (
      <form onSubmit={this.readName}>
        <label htmlFor="id">Pokemon Name: </label>
        <input type="text" id="name" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default NameSearch