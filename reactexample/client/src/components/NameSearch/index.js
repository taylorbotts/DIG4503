import React from 'react'

class NameSearch extends React.Component {

  readName(event) {

    event.preventDefault()

    const reporting = document.querySelector('#reportingArea')
    let input = document.querySelector('#name')

    fetch('http://localhost:80/name/' + input.value)
      .then((res) => {
        return res.json()
      })
      .then((result) => {

        if (result.error) {
          reporting.innerHTML = result.error
        } else {
          reporting.innerHTML = result[0].name
        }
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