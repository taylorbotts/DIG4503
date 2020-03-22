import React from 'react'

class IdSearch extends React.Component {

  readID = (event) => {

    event.preventDefault()

    let input = document.querySelector('#id')

    fetch('http://localhost:3000/api/pokemon/id/' + input.value)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then((result) => {

        this.props.callback(result)
      
      }).catch(function (error) {
        console.log(error)
      })

    input.value = ''
  }

  render() {
    return (
      <form onSubmit={this.readID}>
        <label htmlFor="id">Pokemon ID: </label>
        <input type="text" id="id" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default IdSearch