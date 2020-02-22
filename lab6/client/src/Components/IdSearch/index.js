import React from 'react'

class IdSearch extends React.Component {

  readID(event) {

    event.preventDefault()

    const reporting = document.querySelector('#reportingArea')
    let input = document.querySelector('#id')

    fetch('http://localhost:80/id/' + input.value)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then((result) => {

        if (result.error) {
          reporting.innerHTML = result.error
        } else {
          reporting.innerHTML = result[0].name
        }
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